// shexmap-simple - Simple ShEx2 validator for HTML.
// Copyright 2017 Eric Prud'hommeux
// Release under MIT License.

const START_SHAPE_LABEL = "- start -";
var Base = "http://a.example/" ; // "https://rawgit.com/shexSpec/shex.js/master/doc/shex-simple.html"; // window.location.href; 
var InputSchema = makeSchemaCache("#inputSchema textarea");
var InputData = makeTurtleCache("#inputData textarea");
var Bindings = makeJSONCache("#bindings1 textarea");
var Statics = makeJSONCache("#staticVars textarea");
var OutputSchema = makeSchemaCache("#outputSchema textarea");
var ShExRSchema; // defined below


// utility functions
function parseTurtle (text) {
  var ret = N3Store();
  N3Parser._resetBlankNodeIds();
  ret.addTriples(N3Parser({documentIRI:Base}).parse(text));
  return ret;
}

var shexParser = ShExParser.construct(Base);
function parseShEx (text) {
  shexParser._setOptions({duplicateShape: $("#duplicateShape").val()});
  return shexParser.parse(text);
}

function sum (s) { // cheap way to identify identical strings
  return s.replace(/\s/g, "").split("").reduce(function (a,b){
    a = ((a<<5) - a) + b.charCodeAt(0);
    return a&a
  },0);
}

// <n3.js-specific>
function termToLex (node) {
  return node[0] === "_" && node[1] === ":" ? node : "<" + node + ">";
}
function lexToTerm (lex) {
  return lex[0] === "<" ? lex.substr(1, lex.length - 2) : lex;
}
// </n3.js-specific>


// caches for textarea parsers
function _makeCache (parseSelector) {
  var _dirty = true;
  return {
    parseSelector: parseSelector,
    parsed: null,
    dirty: function (newVal) {
      var ret = _dirty;
      _dirty = newVal;
      return ret;
    },
    get: function () {
      return $(parseSelector).val();
    },
    set: function (text) {
      _dirty = true;
      $(parseSelector).val(text);
    },
    refresh: function () {
      if (!_dirty)
        return this.parsed;
      this.parsed = this.parse($(parseSelector).val());
      _dirty = false;
      return this.parsed;
    }
  };
}

function makeSchemaCache (parseSelector) {
  var ret = _makeCache(parseSelector);
  ret.parse = function (text) {
    return parseTurtle(text);
  };
  var graph = null;
  ret.language = null;
  ret.parse = function (text) {
    var isJSON = text.match(/^\s*\{/);
    graph = isJSON ? null : tryN3(text);
    this.language =
      isJSON ? "ShExJ" :
      graph ? "ShExR" :
      "ShExC";
    $("#results .status").text("parsing "+this.language+" schema...").show();
    var ret =
        isJSON ? ShExUtil.ShExJtoAS(JSON.parse(text)) :
        graph ? parseShExR() :
        parseShEx(text);
    $("#results .status").hide();
    return ret;

    function tryN3 (text) {
      try {
        return text.match(/^\s*$/) ? null : parseTurtle (text); // interpret empty schema as ShExC
      } catch (e) {
        return null;
      }
    }

    function parseShExR () {
      var graphParser = ShExValidator.construct(
        parseShEx(ShExRSchema),
        {}
      );
      var schemaRoot = graph.find(null, ShExUtil.RDF.type, "http://shex.io/ns/shex#Schema")[0].subject;
      var val = graphParser.validate(graph, schemaRoot); // start shape
      return ShExUtil.ShExJtoAS(ShExUtil.ShExRtoShExJ(ShExUtil.valuesToSchema(ShExUtil.valToValues(val))));
    }
  };
  ret.getShapes = function () {
    var obj = this.refresh();
    var start = "start" in obj ? [START_SHAPE_LABEL] : [];
    var rest = "shapes" in obj ? Object.keys(obj.shapes).map(termToLex) : [];
    return start.concat(rest);
  }
  return ret;
}

function makeTurtleCache(parseSelector) {
  var ret = _makeCache(parseSelector);
  ret.parse = function (text) {
    return parseTurtle(text);
  };
  ret.getNodes = function () {
    var data = this.refresh();
    return data.find().map(t => {
      return termToLex(t.subject);
    });
  };
  return ret;
}

function makeJSONCache(parseSelector) {
  var ret = _makeCache(parseSelector);
  ret.parse = function (text) {
    return JSON.parse(text);
  };
  return ret;
}


// controls for example links
function load (selector, obj, func, listItems, side, str) {
  $(selector).empty();
  Object.keys(obj).forEach(k => {
    var li = $('<li><a href="#">' + k + '</li>');
    li.on("click", () => {
      func(k, obj[k], li, listItems, side);
    });
    listItems[side][sum(str(obj[k]))] = li;
    $(selector).append(li);
  });
}

function clearData () {
  InputData.set("");
  $(".focus").val("");
  $("#inputData .status").text(" ");
  results.clear();
}

function clearAll () {
  $("#results .status").hide();
  InputSchema.set("");
  $(".inputShape").val("");
  $("#inputSchema .status").text(" ");
  $("#inputSchema li.selected").removeClass("selected");
  clearData();
  $("#inputData .passes, #inputData .fails").hide();
  $("#inputData .passes p:first").text("");
  $("#inputData .fails p:first").text("");
  $("#inputData .passes ul, #inputData .fails ul").empty();
}

function pickSchema (name, schemaTest, elt, listItems, side) {
  if ($(elt).hasClass("selected")) {
    clearAll();
  } else {
    InputSchema.set(schemaTest.schema);
    $("#inputSchema .status").text(name);

    InputData.set("");
    $("#inputData .status").text(" ");
    $("#inputData .passes, #inputData .fails").show();
    $("#inputData .passes p:first").text("Passing:");
    load("#inputData .passes ul", schemaTest.passes, pickData, listItems, "inputData", function (o) { return o.data; });
    $("#inputData .fails p:first").text("Failing:");
    load("#inputData .fails ul", schemaTest.fails, pickData, listItems, "inputData", function (o) { return o.data; });

    results.clear();
    $("#inputSchema li.selected").removeClass("selected");
    $(elt).addClass("selected");
    $("input.schema").val(InputSchema.getShapes()[0]);
  }
}

function pickData (name, dataTest, elt, listItems, side) {
  if ($(elt).hasClass("selected")) {
    clearData();
    $(elt).removeClass("selected");
  } else {
    InputData.set(dataTest.data);
    $("#inputData .status").text(name);
    $("#inputData li.selected").removeClass("selected");
    $(elt).addClass("selected");
    //    $("input.data").val(getDataNodes()[0]);
    // hard-code the first node/shape pair
    $("#focus0").val(dataTest.inputShapeMap[0].node); // inputNode in Map-test
    $("#inputShape0").val(dataTest.inputShapeMap[0].shape); // srcSchema.start in Map-test
    removeNodeShapePair(null, Infinity);
    addNodeShapePair(null, dataTest.inputShapeMap.slice(1)); // catch the rest of the shapeMap.

    $("#outputSchema textarea").val(dataTest.outputSchema);
    $("#outputSchema .status").text(name);
    Statics.set(JSON.stringify(dataTest.staticVars, null, "  "));
    $("#staticVars .status").text(name);

    $("#outputShape").val(dataTest.outputShape); // targetSchema.start in Map-test
    $("#createRoot").val(dataTest.createRoot); // createRoot in Map-test
    // validate();
  }
}

// Guess the starting shape.
function guessStartingShape (inputSelection, cache) {
  var shape = inputSelection.val();
  if (shape === "") {
    var candidates = cache.getShapes();
    if (candidates.length > 0) {
      inputSelection.val(candidates[0]);
      return candidates[0];
    } else
      return undefined;
  } else {
    return shape;
  }
}


// Guess the starting focus.
function guessStartingNode (inputSelection, cache) {
  var focus = inputSelection.val();
  if (focus === "") {
    var candidates = cache.getNodes();;
    if (candidates.length > 0) {
      inputSelection.val(candidates[0]);
      return candidates[0];
    } else
      return undefined;
  } else
    return focus;
}


// Control results area content.
var results = (function () {
  var resultsElt = autosize(document.querySelector("#results textarea"));
  var resultsSel = $("#results textarea");
  return {
    replace: function (text) {
      var ret = resultsSel.text(text);
      autosize.update(resultsElt);
      return ret;
    },
    append: function (text) {
      var ret = resultsSel.append(text);
      autosize.update(resultsElt);
      return ret;
    },
    clear: function () {
      resultsSel.removeClass("passes fails error");
      var ret = resultsSel.text("");
      autosize.update(resultsElt);
      return ret;
    },
    start: function () {
      resultsSel.removeClass("passes fails error");
      $("#results").addClass("running");
    },
    finish: function () {
      $("#results").removeClass("running");
      var height = resultsSel.height();
      resultsSel.height(1);
      resultsSel.animate({height:height}, 100);
    }
  };
})();


// Validation UI
function disableResultsAndValidate () {
  results.start();
  setTimeout(function () {
    validate();
    results.finish();
  }, 0);
}

function validate () {
  $("#results .status").hide();
  var parsing = "input schema";
  try {
    var validator = ShExValidator.construct(InputSchema.refresh()
                    /*, { regexModule: modules["../lib/regex/nfax-val-1err"] }*/);
    ShExMap.register(validator);
    $("#schemaDialect").text(InputSchema.language);
    var dataText = InputData.get();
    var shapeMap = getShapeMap().map(pair => {
      return {node: lexToTerm(pair.node), shape: lexToTerm(pair.shape)};
    });
    if (dataText || shapeMap.length) {
      parsing = "input data";
      $("#results .status").text("parsing data...").show();
      var inputData = InputData.refresh();

      var ret = validator.validate(inputData, shapeMap);
      // var dated = Object.assign({ _when: new Date().toISOString() }, ret);
      $("#results .status").text("rendering results...").show();
      var text =
            "interface" in iface && iface.interface.indexOf("simple") !== -1 ?
            ("errors" in ret ?
             ShExUtil.errsToSimple(ret).join("\n") :
             JSON.stringify(ShExUtil.valToSimple(ret), null, 2)) :
          JSON.stringify(ret, null, "  ");
      var res = results.replace(text);
      $("#results .status").hide();
      if ("errors" in ret) {
        res.addClass("fails");
      } else {
        res.addClass("passes");
        // Bindings.set(ShExMap.extractBindings(ret));
        var resultBindings = {};
        function findBindings (object) {
          for (var key in object) {
            var item = object[key];
            if (typeof item === 'object') {
              if (ShExMap.url in item)
                Object.keys(item[ShExMap.url]).forEach(k => {
                  resultBindings[k] = item[ShExMap.url][k];
                })
              else
                object[key] = findBindings(item);
            }
          }
          return object;
        }
        findBindings(ret);
        resultBindings = ShExUtil.valToExtension(ret, ShExMap.url);
        Bindings.set(JSON.stringify(resultBindings, null, "  "));
       }
    } else {
      var outputLanguage = InputSchema.language === "ShExJ" ? "ShExC" : "ShExJ";
      $("#results .status").
        text("parsed "+InputSchema.language+" schema, generated "+outputLanguage+" ").
        append($("<button>(copy to input)</button>").
               css("border-radius", ".5em").
               on("click", function () {
                 InputSchema.set($("#results textarea").val());
               })).
        append(":").
        show();
      var parsedSchema;
      if (InputSchema.language === "ShExJ") {
        new ShExWriter({simplifyParentheses: false}).writeSchema(InputSchema.parsed, (error, text) => {
          if (error) {
            $("#results .status").text("unwritable ShExJ schema:\n" + error).show();
            res.addClass("error");
          } else {
            results.replace(text).addClass("passes");
          }
        });
      } else {
        results.replace(JSON.stringify(ShExUtil.AStoShExJ(ShExUtil.canonicalize(InputSchema.parsed)), null, "  ")).addClass("passes");
      }
    }
  } catch (e) {
    results.replace("error parsing " + parsing + ":\n" + e).addClass("error");
  }
}

function materialize () {
  results.start();
  var parsing = "output schema";
  try {
    var outputSchemaText = $("#outputSchema textarea").val();
    var outputSchemaIsJSON = outputSchemaText.match(/^\s*\{/);
    var outputSchema = OutputSchema.refresh();

    function _dup (obj) { return JSON.parse(JSON.stringify(obj)); }

    var resultBindings = _dup(Bindings.refresh());
    var _t = Statics.refresh();
    if (_t && Object.keys(_t) > 0) {
      if (resultBindings.constructor !== Array)
        resultBindings = [resultBindings];
      resultBindings.unshift(_t);
    }
    var mapper = ShExMap.materializer(outputSchema);
    var outputShape = guessStartingShape($("#outputShape"), OutputSchema);

    var binder = ShExMap.binder(resultBindings);
    Bindings.set(JSON.stringify(resultBindings, null, "  "));
      // var outputGraph = mapper.materialize(binder, lexToTerm($("#createRoot").val()), outputShape);
    // binder = ShExMap.binder(resultBindings);
    try {
      var mapper2 = ShExMaterializer.construct(outputSchema);
      var res = mapper2.validate(binder, lexToTerm($("#createRoot").val()), outputShape);
      // console.log("g:", ShExUtil.valToTurtle(res));
      outputGraph = N3Store();
      outputGraph.addTriples(ShExUtil.valToN3js(res));
    } catch (e) {
      console.dir(e);
    }
    var writer = N3.Writer({ prefixes: {} });
    writer.addTriples(outputGraph.find());
    writer.end(function (error, result) {
      results.replace(result);
    });
  } catch (e) {
    results.replace("error parsing " + parsing + ":\n" + e).
      removeClass("passes fails").addClass("error");
  }
  results.finish();
}

var Removables = [];
function addNodeShapePair (evt, pairs) {
  if (pairs === undefined)
    pairs = [{node: "", shape: ""}];
  pairs.forEach(pair => {
    var id = Removables.length+1;
    var t = $("<span><br/><input id='focus"+id+
              "' type='text' value='"+pair.node+
              "' class='data focus'/> as <input id='inputShape"+id+
              "' type='text' value='"+pair.shape+
              "' class='schema inputShape context-menu-one btn btn-neutral'/></span>"
             );
    addContextMenus("#focus"+id, "#inputShape"+id);
    Removables.push(t);
    t.insertBefore($("#removePair"));
    if (id === 1)
      $("#removePair").css("visibility", "visible");
  });
  return false;
}

function removeNodeShapePair (evt, howMany) {
  if (howMany === undefined)
    howMany = 1;
  for (var i = 0; i < howMany; ++i) {
    var id = Removables.length;
    if (id === 0)
      break;
    Removables.pop().remove();
    if (id === 1)
      $("#removePair").css("visibility", "hidden");
  }
  return false;
}

function prepareConstrols () {
  $("#inputData .passes, #inputData .fails").hide();
  $("#inputData .passes ul, #inputData .fails ul").empty();
  $("#validate").on("click", disableResultsAndValidate);
  $("#materialize").on("click", materialize);
  $("#clear").on("click", clearAll);
  $("#addPair").on("click", addNodeShapePair);
  $("#removePair").on("click", removeNodeShapePair).css("visibility", "hidden");

  // Prepare file uploads
  $("input.inputfile").each((idx, elt) => {
    $(elt).on("change", function (evt) {
      var reader = new FileReader();

      reader.onload = function(evt) {
        if(evt.target.readyState != 2) return;
        if(evt.target.error) {
          alert("Error while reading file");
          return;
        }
        $($(elt).attr("data-target")).val(evt.target.result);
      };

      reader.readAsText(evt.target.files[0]);
    });
  });
}

/**
 *
 * location.search: e.g. "?schema=asdf&data=qwer&shapeMap=ab%5Ecd%5E%5E_ef%5Egh"
 */
var parseQueryString = function(query) {
  if (query[0]==='?') query=query.substr(1); // optional leading '?'
  var map   = {};
  query.replace(/([^&,=]+)=?([^&,]*)(?:[&,]+|$)/g, function(match, key, value) {
    key=decodeURIComponent(key);value=decodeURIComponent(value);
    (map[key] = map[key] || []).push(value);
  });
  return map;
};

/**
 * update location with a current values of some inputs
 */
function updateURL () {
  var parms = QueryParams.map(input => {
    var parm = input.queryStringParm;
    return parm + "=" + encodeURIComponent(input.location.val());
  });
  var shapeMap = getShapeMap();
  if (shapeMap.length)
    parms.push("shapeMap=" + shapeMap.reduce((ret, p) => {
      return ret.concat([encodeURIComponent(p.node + "^" + p.shape)]);
    }, []).join(encodeURIComponent("^^")));
  if (iface.interface)
    parms.push("interface="+iface.interface[0]);
  var s = parms.join("&");
  window.history.pushState(null, null, location.origin+location.pathname+"?"+s);
}

function getShapeMap () {
  var nodes = $(".focus").map((idx, elt) => { return $(elt); }); // .map((idx, elt) => { return $(elt).val(); });
  var shapes = $(".inputShape").map((idx, elt) => { return $(elt); }); // .map((idx, elt) => { return $(elt).val(); });
  var mapAndErrors = nodes.get().reduce((ret, n, i) => {
    var node = guessStartingNode($(n), InputData);
    if (!node)
      ret.errors.push("node not found: " + $(n).val());
    var shape = guessStartingShape($(shapes[i]), InputSchema);
    if (!shape)
      ret.errors.push("shape not found: " + $(shapes[i]).val());
    if (node && shape)
      ret.shapeMap.push({node: node, shape: shape});
    return ret;
  }, {shapeMap: [], errors: []});
  if (mapAndErrors.errors.length) // !! overwritten immediately
    results.append(mapAndErrors.errors.join("\n"));
  return mapAndErrors.shapeMap;
}

function prepareInterface () {
  var iface = parseQueryString(location.search);
  if ("shapeMap" in iface) {
    var first = true;
    iface.shapeMap = iface.shapeMap.reduce(
      (r, b) => {
        b.split(/\^\^/).forEach(pair => {
          var p = pair.split(/\^/);
          r[p[0]] = p[0] in r ? r[p[0]].concat(p[1]) : [p[1]];
          if (first) {
            $("#focus0").val(p[0]);
            $("#inputShape0").val(p[1]);
            first = false;
          } else {
            addNodeShapePair(null, [{node: p[0], shape: p[1]}]);
          }
        });
        return r;
      }, {});
  }
  var QueryParams = [{queryStringParm: "schema", location: $("#inputSchema textarea")},
                     {queryStringParm: "data", location: $("#inputData textarea")}];
  QueryParams.forEach(input => {
    var parm = input.queryStringParm;
    if (parm in iface)
      iface[parm].forEach(text => {
        input.location.val(input.location.val() + text);
      });
  });
  if ("interface" in iface && iface.interface.indexOf("simple") !== -1) {
    $("#title").hide();
    $("#inputSchema .status").html("schema (<span id=\"schemaDialect\">ShEx</span>)").show();
    $("#inputData .status").html("data (<span id=\"dataDialect\">Turtle</span>)").show();
    $("#actions").parent().children().not("#actions").hide();
    // $("#actions").parent().hide();
    // $("#results .status").text("results:").show();
  }
  if ("schema" in iface && iface.schema.reduce((r, elt) => {
    return r+elt.length;
  }, 0)) {
    validate();
  }
  $("#inputSchema textarea").prev().add("#title").on("click", updateURL);
  return iface;
}

/**
 * Prepare drag and drop into text areas
 */
function prepareDragAndDrop () {
  var _scma = $("#inputSchema textarea");
  var _data = $("#inputData textarea");
  var _bnds = $("#bindings1 textarea");
  var _outs = $("#outputSchema textarea");
  var _vars = $("#staticVars textarea");
  var _body = $("body");
  [{dropElt: _scma, targets: [{ext: "", target: InputSchema}]},
   {dropElt: _data, targets: [{ext: "", target: InputData}]},
   {dropElt: _bnds, targets: [{ext: "", target: Bindings}]},
   {dropElt: _outs, targets: [{ext: "", target: OutputSchema}]},
   {dropElt: _vars, targets: [{ext: "", target: Statics}]},
   {dropElt: _body, targets: [{ext: ".shex", target: InputSchema},
                              {ext: ".ttl", target: InputData}]}].
    forEach(desc => {
      // kudos to http://html5demos.com/dnd-upload
      desc.dropElt.
        on("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
          e.preventDefault();
          e.stopPropagation();
        }).
        on("dragover dragenter", (e) => {
          desc.dropElt.addClass("hover");
        }).
        on("dragend dragleave drop", (e) => {
          desc.dropElt.removeClass("hover");
        }).
        on("drop", (e) => {
          readfiles(e.originalEvent.dataTransfer.files, desc.targets);
        });
    });
  function readfiles(files, targets) {
    var formData = new FormData();

    for (var i = 0; i < files.length; i++) {
      var file = files[i], name = file.name;
      var target = targets.reduce((ret, elt) => {
        return ret ? ret :
          name.endsWith(elt.ext) ? elt.target :
          null;
      }, null);
      if (target) {
        formData.append("file", file);
        var reader = new FileReader();
        reader.onload = (function (target) {
          return function (event) {
            var appendTo = $("#append").is(":checked") ? target.get() : "";
            target.set(appendTo + event.target.result);
          };
        })(target);
        reader.readAsText(file);
      } else {
        results.append("don't know what to do with " + name + "\n");
      }
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/devnull.php"); // One must ignore these errors, sorry!
    xhr.send(formData);
  }
}

// prepareDemos() is invoked after these variables are assigned:
var BPFHIR = {}, BPunitsDAM = {}; SchemaConcert = {}, BPunitsNested = {}, BPFHIRNested = {};
function prepareDemos () {
  var demos = {
    "BP": {
      schema: BPFHIR.schema,
      passes: {
        "simple": {
          data: BPFHIR.simple,
          inputShapeMap: [{
            node: "tag:BPfhir123",
            shape: "- start -"}],
          outputSchema: BPunitsDAM.schema,
          outputShape: "- start -",
          staticVars: BPunitsDAM.constants,
          createRoot: "<tag:b0>"}
      },
      fails: {
        "bad code": {
          data: BPFHIR.badCode,
          inputShapeMap: [{
            node: "tag:BPfhir123",
            shape: "- start -"}],
          outputSchema: BPunitsDAM.schema,
          outputShape: "- start -",
          staticVars: BPunitsDAM.constants,
          createRoot: "<tag:b0>"}
      },
    },
    "BP-back": {
      schema: BPunitsDAM.schema,
      passes: {
        "simple": {
          data: BPunitsDAM.simple,
          inputShapeMap: [{
            node: "<tag:b0>",
            inputShape: "- start -"}],
          outputSchema: BPFHIR.schema,
          outputShape: "- start -",
          staticVars: BPFHIR.constants,
          createRoot: "tag:BPfhir123"}
      },
      fails: {
        "bad code": {
          data: BPunitsDAM.badBP,
          inputShapeMap: [{
              node: "<tag:b0>",
              shape: "- start -"}],
          outputSchema: BPFHIR.schema,
          outputShape: "- start -",
          staticVars: BPFHIR.constants,
          createRoot: "tag:BPfhir123"}
      },
    },
    "BPPatient multi-bindings": {
      schema: BPunitsDAM.schema_Patient,
      passes: {
        "simple": {
          data: BPunitsDAM.simplePatient,
          inputShapeMap: [{
              node: "<http://a.example/PatientX>",
              shape: "- start -"}],
          outputSchema: BPFHIR.schema_Patient,
          outputShape: "- start -",
          staticVars: BPFHIR.constants,
          createRoot: "tag:BPfhir123"}
      },
      fails: {
        "bad code": {
          data: BPunitsDAM.badPatient,
          inputShapeMap: [{
              node: "<http://a.example/PatientX>",
              shape: "- start -"}],
          outputSchema: BPFHIR.schema_Patient,
          outputShape: "- start -",
          staticVars: BPFHIR.constants,
          createRoot: "tag:BPfhir123"}
      }
    },
    "BPPatient 2 levels": {
      schema: BPunitsNested.schema,
      passes: {
        "simple": {
          data: BPunitsNested.simple,
          inputShapeMap: [{
              node: "<http://a.example/PatientX>",
              shape: "- start -"}],
          outputSchema: BPFHIRNested.schema,
          outputShape: "- start -",
          staticVars: {},
          createRoot: "tag:BPfhir123"}
      },
      fails: { }
    },
    "symmetric": {
      schema: SchemaConcert.schema,
      passes: {
        "BBKing": {
          data: SchemaConcert.BBKing,
          inputShapeMap: [{
            node: "_:b0",
            shape: "- start -"}],
          outputSchema: SchemaConcert.schema,
          outputShape: "- start -",
          staticVars: {},
          createRoot: "_:b0"}
      },
      fails: {
        "Non-IRI": {
          data: SchemaConcert.nonIRI,
          inputShapeMap: [{
            node: "_:b0",
            shape: "- start -"}],
          outputSchema: SchemaConcert.schema,
          outputShape: "- start -",
          staticVars: {},
          createRoot: "_:b0"}
      }
    }
  };
  var listItems = {inputSchema:{}, inputData:{}};
  load("#inputSchema .examples ul", demos, pickSchema,
       listItems, "inputSchema", function (o) {
         return o.schema;
       });
  var timeouts = { inputSchema: undefined, inputData: undefined };
  function later (target, side, cache) {
    cache.dirty(true);
    if (timeouts[side])
      clearTimeout(timeouts[side]);

    timeouts[side] = setTimeout(() => {
      timeouts[side] = undefined;
      $("#"+side+" .selected").removeClass("selected");
      var curSum = sum($(target).val());
      if (curSum in listItems[side])
        listItems[side][curSum].addClass("selected");
    }, 250);
  }
  $("body").keydown(function (e) { // keydown because we need to preventDefault
    var code = e.keyCode || e.charCode; // standards anyone?
    if (e.ctrlKey && (code === 10 || code === 13)) {
      $("#validate").click();
      return false; // same as e.preventDefault();
    } else if (e.ctrlKey && e.key === "\\") {
      $("#materialize").click();
      return false; // same as e.preventDefault();
    }
  });
  $("#inputSchema textarea").keyup(function (e) { // keyup to capture backspace
    var code = e.keyCode || e.charCode;
    if (!(e.ctrlKey && (code === 10 || code === 13)))
      later(e.target, "inputSchema", InputSchema);
  });
  $("#inputData textarea").keyup(function (e) {
    var code = e.keyCode || e.charCode;
    if (!(e.ctrlKey && (code === 10 || code === 13)))
      later(e.target, "inputData", InputData);
  });
  addContextMenus("#focus0", "#inputShape0");
}
function addContextMenus (nodeSelector, shapeSelector) {
  [ { inputSelector: nodeSelector,
      schema: { "S1": {}, "S2": {} },
      getItems: function () { return InputData.getNodes(); } },
    { inputSelector: shapeSelector,
      getItems: function () { return InputSchema.getShapes(); } },
    { inputSelector: "#outputShape",
      getItems: function () { return OutputSchema.getShapes(); } }
  ].forEach(entry => {
    $.contextMenu({
      selector: entry.inputSelector,
      callback: function (key, options) {
        $(options.selector).val(key);
      },
      build: function (elt, e) {
        return {
          items:
          entry.getItems().reduce((ret, opt) => {
            ret[opt] = { name: opt };
            return ret;
          }, {})
        };
      }
    });
  });
}

// Large constants with demo data which break syntax highlighting:
BPFHIR.schemaPrefixes = `PREFIX fhir: <http://hl7.org/fhir-rdf/>
PREFIX sct: <http://snomed.info/sct/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX bp: <http://shex.io/extensions/Map/#BPDAM->
PREFIX Map: <http://shex.io/extensions/Map/#>

`;

BPFHIR.BPschema = `

<collector> {
  fhir:item @<BPfhir>*
}

<BPfhir> {
  a [fhir:Observation]?;
  fhir:subject @<Patient>;
  fhir:coding { fhir:code [sct:Blood_Pressure] };
  fhir:related { fhir:type ["has-component"]; fhir:target @<sysBP> };
  fhir:related { fhir:type ["has-component"]; fhir:target @<diaBP> }
}
<sysBP> {
  a [fhir:Observation]?;
  fhir:coding { fhir:code [sct:Systolic_Blood_Pressure] };
  fhir:valueQuantity {
    a [fhir:Quantity]?;
    fhir:value xsd:float %Map:{ bp:sysVal %};
    fhir:units xsd:string %Map:{ bp:sysUnits %}
  }
}
<diaBP> {
  a [fhir:Observation]?;
  fhir:coding { fhir:code [sct:Diastolic_Blood_Pressure] };
  fhir:valueQuantity {
    a [fhir:Quantity]?;
    fhir:value xsd:float %Map:{ bp:diaVal %};
    fhir:units xsd:string %Map:{ bp:diaUnits %}
  }
}
`;

BPFHIR.PatientSchema = `

<Patient> {
  fhir:Patient.name LITERAL %Map:{ bp:name %};
}`;

BPFHIR.schema = BPFHIR.schemaPrefixes + "start = @<BPunitsDAM>" + BPFHIR.BPschema;

BPFHIR.schema_Patient = BPFHIR.schemaPrefixes + "start = @<collector>" + BPFHIR.PatientSchema + BPFHIR.BPschema;

BPFHIR.constants = {"http://abc.example/anotherConstant": "abc-def"};

BPFHIR.simple = `PREFIX fhir: <http://hl7.org/fhir-rdf/>
PREFIX sct: <http://snomed.info/sct/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<tag:BPfhir123>
  a fhir:Observation;
  fhir:coding [ fhir:code sct:Blood_Pressure ];
  fhir:related [ fhir:type "has-component"; fhir:target _:sysBP123 ];
  fhir:related [ fhir:type "has-component"; fhir:target _:diaBP123 ]
.
_:sysBP123
  a fhir:Observation;
  fhir:coding [ fhir:code sct:Systolic_Blood_Pressure ];
  fhir:valueQuantity [
    a fhir:Quantity;
    fhir:value "110"^^xsd:float;
    fhir:units "mmHg"
  ]
.
_:diaBP123
  a fhir:Observation;
  fhir:coding [ fhir:code sct:Diastolic_Blood_Pressure ];
  fhir:valueQuantity [
    a fhir:Quantity;
    fhir:value "70"^^xsd:float;
    fhir:units "mmHg"
  ]
.
`;

BPFHIR.badCode = BPFHIR.simple.replace(/sct:Diastolic_Blood_Pressure/, "sct:Diastolic_Blood_Pressure999");

BPunitsDAM.schemaPrefixes = `PREFIX  : <http://dam.example/med#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX bp: <http://shex.io/extensions/Map/#BPDAM->
PREFIX Map: <http://shex.io/extensions/Map/#>

`;
BPunitsDAM.BPschema = `

<BPunitsDAM> {
  :systolic {
    :value xsd:float %Map:{ bp:sysVal %};
    :units xsd:string %Map:{ bp:sysUnits %}
  };
  :diastolic {
    :value xsd:float %Map:{ bp:diaVal %};
    :units xsd:string %Map:{ bp:diaUnits %}
  };
  :someConstProp xsd:string? %Map:{ <http://abc.example/someConstant> %}
}
`;
BPunitsDAM.schema = BPunitsDAM.schemaPrefixes + "start = @<BPunitsDAM>" + BPunitsDAM.BPschema;

BPunitsDAM.PatientSchema = `

<PatientDAM> {
  :name LITERAL %Map:{ bp:name %};
  :vitals @<BPunitsDAM>* %Map:{ bp:XXX %}
}`;

BPunitsDAM.schema_Patient = BPunitsDAM.schemaPrefixes + "start = @<PatientDAM>" + BPunitsDAM.PatientSchema + BPunitsDAM.BPschema;

BPunitsDAM.constants = {"http://abc.example/someConstant": "\"123-456\""};

BPunitsDAM.simplePrefixes = `PREFIX med: <http://dam.example/med#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

`;
BPunitsDAM.simpleBP0 = `<tag:b0>
    med:systolic [
      med:value "110"^^xsd:float ;
      med:units "mmHg"
    ] ;
    med:diastolic [
      med:value "70"^^xsd:float ;
      med:units "mmHg"
    ] .
`;
BPunitsDAM.simpleBP1 = BPunitsDAM.simpleBP0.replace(/0/g, "1");

BPunitsDAM.simple = BPunitsDAM.simplePrefixes + BPunitsDAM.simpleBP0;

BPunitsDAM.patient = `<PatientX>
    med:name "Sue" ;
    med:vitals <tag:b0>, <tag:b1> .

`;

BPunitsDAM.simplePatient = BPunitsDAM.simplePrefixes + BPunitsDAM.patient + BPunitsDAM.simpleBP0 + BPunitsDAM.simpleBP1;

BPunitsDAM.badBP = BPunitsDAM.simple.replace(/BPunitsDAM-systolic/, "BPunitsDAM-systolic999");

BPunitsDAM.badPatient = BPunitsDAM.simplePatient.replace(/BPunitsDAM-systolic/, "BPunitsDAM-systolic999");

SchemaConcert.schema = `PREFIX    : <http://a.example/>
PREFIX schema: <http://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX Map: <http://shex.io/extensions/Map/#>

start=@<Concert>

<Concert> {
  schema:bandName xsd:string %Map:{ :Name %} ;
  schema:tix IRI %Map:{ :TicketUrl %} ;
  schema:venue @<Venue>
}
<Venue> {
  schema:location xsd:string %Map:{ :LocationName %} ;
  schema:address  xsd:string %Map:{ :LocationAddress %}
}
`;

SchemaConcert.BBKing = `PREFIX schema: <http://schema.org/>

[] schema:bandName "B.B. King";
  schema:tix <https://www.etix.com/ticket/1771656>;
  schema:venue [
    schema:location "Lupo’s Heartbreak Hotel";
    schema:address "79 Washington St...."
  ] .
`

SchemaConcert.nonIRI = `PREFIX schema: <http://schema.org/>

[] schema:bandName "B.B. King";
  schema:tix "https://www.etix.com/ticket/1771656";
  schema:venue [
    schema:location "Lupo’s Heartbreak Hotel";
    schema:address "79 Washington St...."
  ] .
`

BPunitsNested.schema = `PREFIX  : <http://dam.example/med#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX bp: <http://shex.io/extensions/Map/#BPDAM->
PREFIX Map: <http://shex.io/extensions/Map/#>

start = @<PatientDAM>

<PatientDAM> {
  :name LITERAL %Map:{ bp:name %};
  :reports @<ReportsDAM>* %Map:{ bp:reports %}
}

<ReportsDAM> {
  :reportNo LITERAL %Map:{ bp:reportNo %};
  :results @<BPunitsDAM>* %Map:{ bp:bp %}
}

<BPunitsDAM> {
  :systolic {
    :value xsd:float %Map:{ bp:sysVal %};
    :units xsd:string %Map:{ bp:sysUnits %}
  };
  :diastolic {
    :value xsd:float %Map:{ bp:diaVal %};
    :units xsd:string %Map:{ bp:diaUnits %}
  };
  :someConstProp xsd:string? %Map:{ <http://abc.example/someConstant> %}
}
`;

BPunitsNested.simple = `PREFIX med: <http://dam.example/med#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<PatientX>
    med:name "Sue" ;
    med:reports <Report1>, <Report2> .

<Report1>
    med:reportNo "two" ;
    med:results <Res00>, <Res01> .

<Res00>
    med:systolic [
      med:value "100"^^xsd:float ;
      med:units "mmHg"
    ] ;
    med:diastolic [
      med:value "60"^^xsd:float ;
      med:units "mmHg"
    ] .
<Res01>
    med:systolic [
      med:value "101"^^xsd:float ;
      med:units "mmHg"
    ] ;
    med:diastolic [
      med:value "61"^^xsd:float ;
      med:units "mmHg"
    ] .

<Report2>
    med:reportNo "two" ;
    med:results <Res10>, <Res11> .

<Res10>
    med:systolic [
      med:value "110"^^xsd:float ;
      med:units "mmHg"
    ] ;
    med:diastolic [
      med:value "70"^^xsd:float ;
      med:units "mmHg"
    ] .
<Res11>
    med:systolic [
      med:value "111"^^xsd:float ;
      med:units "mmHg"
    ] ;
    med:diastolic [
      med:value "71"^^xsd:float ;
      med:units "mmHg"
    ] .
`;

BPFHIRNested.schema = `PREFIX fhir: <http://hl7.org/fhir-rdf/>
PREFIX sct: <http://snomed.info/sct/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX bp: <http://shex.io/extensions/Map/#BPDAM->
PREFIX Map: <http://shex.io/extensions/Map/#>

start = @<collector>

<Patient> {
  fhir:Patient.name LITERAL %Map:{ bp:name %};
}

<collector> {
  fhir:item @<BPreport>*
}

<BPreport> {
  a [fhir:DiagnosticReport]?;
  fhir:status ["final"];
  fhir:subject @<Patient>;
  fhir:coding { fhir:code [sct:Blood_Pressure] };
  fhir:related { fhir:type ["has-component"]; fhir:target @<sysBP> };
  fhir:related { fhir:type ["has-component"]; fhir:target @<diaBP> }
}
<BPfhir> {
  a [fhir:Observation]?;
  fhir:subject @<Patient>;
  fhir:coding { fhir:code [sct:Blood_Pressure] };
  fhir:related { fhir:type ["has-component"]; fhir:target @<sysBP> };
  fhir:related { fhir:type ["has-component"]; fhir:target @<diaBP> }
}
<sysBP> {
  a [fhir:Observation]?;
  fhir:coding { fhir:code [sct:Systolic_Blood_Pressure] };
  fhir:valueQuantity {
    a [fhir:Quantity]?;
    fhir:value xsd:float %Map:{ bp:sysVal %};
    fhir:units xsd:string %Map:{ bp:sysUnits %}
  }
}
<diaBP> {
  a [fhir:Observation]?;
  fhir:coding { fhir:code [sct:Diastolic_Blood_Pressure] };
  fhir:valueQuantity {
    a [fhir:Quantity]?;
    fhir:value xsd:float %Map:{ bp:diaVal %};
    fhir:units xsd:string %Map:{ bp:diaUnits %}
  }
}
`;


ShExRSchema = `PREFIX sx: <http://shex.io/ns/shex#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
BASE <http://shex.io/ns/ShExR#>
start=@<Schema>

<Schema> CLOSED {
  a [sx:Schema] ;
  sx:startActs @<SemActList1Plus>? ;
  sx:start @<shapeExpr>?;
  sx:shapes @<shapeExpr>*
}

<shapeExpr> @<ShapeOr> OR @<ShapeAnd> OR @<ShapeNot> OR @<NodeConstraint> OR @<Shape> OR @<ShapeExternal>

<ShapeOr> CLOSED {
  a [sx:ShapeOr] ;
  sx:shapeExprs @<shapeExprList2Plus>
}

<ShapeAnd> CLOSED {
  a [sx:ShapeAnd] ;
  sx:shapeExprs @<shapeExprList2Plus>
}

<ShapeNot> CLOSED {
  a [sx:ShapeNot] ;
  sx:shapeExpr @<shapeExpr>
}

<NodeConstraint> CLOSED {
  a [sx:NodeConstraint] ;
  (  sx:nodeKind [sx:iri sx:bnode sx:literal sx:nonliteral]
   | sx:datatype IRI
#   | &<xsFacet>
   | &<stringFacet>
   | &<numericFacet>
   | sx:values @<valueSetValueList1Plus>)+
}

<Shape> CLOSED {
  a [sx:Shape] ;
  sx:closed [true false]? ;
  sx:extra IRI* ;
  sx:expression @<tripleExpression>? ;
  sx:semActs @<SemActList1Plus>? ;
}

<ShapeExternal> CLOSED {
  a [sx:ShapeExternal] ;
}

<SemAct> CLOSED {
  a [sx:SemAct] ;
  sx:name IRI ;
  sx:code xsd:string?
}

<Annotation> CLOSED {
  a [sx:Annotation] ;
  sx:predicate IRI ;
  sx:object @<objectValue>
}

# <xsFacet> @<stringFacet> OR @<numericFacet>
<facet_holder> { # hold labeled productions
  $<stringFacet> (
      sx:length xsd:integer
    | sx:minlength xsd:integer
    | sx:maxlength xsd:integer
    | sx:pattern xsd:string
  );
  $<numericFacet> (
      sx:mininclusive   @<numericLiteral>
    | sx:minexclusive   @<numericLiteral>
    | sx:maxinclusive   @<numericLiteral>
    | sx:maxexclusive   @<numericLiteral>
    | sx:totaldigits    xsd:integer
    | sx:fractiondigits xsd:integer
  )
}
<numericLiteral> xsd:integer OR xsd:decimal OR xsd:double

<valueSetValue> @<objectValue> OR @<Stem> OR @<StemRange>
<objectValue> IRI OR LITERAL # rdf:langString breaks on Annotation.object
<Stem> CLOSED { a [sx:Stem]; sx:stem xsd:anyUri }
<StemRange> CLOSED {
  a [sx:StemRange];
  sx:stem xsd:anyUri OR @<Wildcard>;
  sx:exclusion @<objectValue> OR @<Stem>*
}
<Wildcard> BNODE CLOSED {
  a [sx:Wildcard]
}

<tripleExpression> @<TripleConstraint> OR @<OneOf> OR @<EachOf>

<OneOf> CLOSED {
  a [sx:OneOf] ;
  sx:min xsd:integer? ;
  sx:max xsd:integer OR ["*"]? ;
  sx:expressions @<tripleExpressionList2Plus> ;
  sx:semActs @<SemActList1Plus>? ;
  sx:annotation @<Annotation>*
}

<EachOf> CLOSED {
  a [sx:EachOf] ;
  sx:min xsd:integer? ;
  sx:max xsd:integer OR ["*"]? ;
  sx:expressions @<tripleExpressionList2Plus> ;
  sx:semActs @<SemActList1Plus>? ;
  sx:annotation @<Annotation>*
}

<tripleExpressionList2Plus> CLOSED {
  rdf:first @<tripleExpression> ;
  rdf:rest @<tripleExpressionList1Plus>
}
<tripleExpressionList1Plus> CLOSED {
  rdf:first @<tripleExpression> ;
  rdf:rest  [rdf:nil] OR @<tripleExpressionList1Plus>
}

<TripleConstraint> CLOSED {
  a [sx:TripleConstraint] ;
  sx:inverse [true false]? ;
  sx:negated [true false]? ;
  sx:min xsd:integer? ;
  sx:max xsd:integer OR ["*"]? ;
  sx:predicate IRI ;
  sx:valueExpr @<shapeExpr>? ;
  sx:semActs @<SemActList1Plus>? ;
  sx:annotation @<Annotation>*
}

<SemActList1Plus> CLOSED {
  rdf:first @<SemAct> ;
  rdf:rest  [rdf:nil] OR @<SemActList1Plus>
}

<shapeExprList2Plus> CLOSED {
  rdf:first @<shapeExpr> ;
  rdf:rest  @<shapeExprList1Plus>
}
<shapeExprList1Plus> CLOSED {
  rdf:first @<shapeExpr> ;
  rdf:rest  [rdf:nil] OR @<shapeExprList1Plus>
}

<valueSetValueList1Plus> CLOSED {
  rdf:first @<valueSetValue> ;
  rdf:rest  [rdf:nil] OR @<valueSetValueList1Plus>
}`;

prepareConstrols();
var iface = prepareInterface();
prepareDragAndDrop();
prepareDemos();

