// shex-simple - Simple ShEx2 validator for HTML.
// Copyright 2017 Eric Prud'hommeux
// Release under MIT License.

const START_SHAPE_LABEL = "- start -";
var Base = "http://a.example/" ; // "https://rawgit.com/shexSpec/shex.js/master/doc/shex-simple.html"; // window.location.href;
var SchemaTextarea = $("#inputSchema textarea.schema");
var InputSchema = makeSchemaCache("#inputSchema textarea.schema");
var InputData = makeTurtleCache("#inputData textarea");
var ShExRSchema; // defined below

const uri = "<[^>]*>|[a-zA-Z0-9_-]*:[a-zA-Z0-9_-]*";
const uriOrKey = uri + "|FOCUS|_";
const ParseTriplePattern = RegExp("^(\\s*{\\s*)("+
                                uriOrKey+")?(\\s*)("+
                                uri+"|a)?(\\s*)("+
                                uriOrKey+")?(\\s*)(})?(\\s*)$");

var QueryParams = [
  {queryStringParm: "schema",       location: SchemaTextarea,           cache: InputSchema},
  {queryStringParm: "data",         location: $("#inputData textarea"), cache: InputData  },
  {queryStringParm: "shape-map",    location: $("#textMap")                               },
  {queryStringParm: "interface",    location: $("#interface"),          deflt: "humam"    },
  {queryStringParm: "regexpEngine", location: $("#regexpEngine"),       deflt: "threaded-val-nerr" },
];

// utility functions
function parseTurtle (text, meta) {
  var ret = ShEx.N3.Store();
  ShEx.N3.Parser._resetBlankNodeIds();
  var parser = ShEx.N3.Parser({documentIRI:Base, format: "text/turtle" });
  var triples = parser.parse(text);
  if (triples !== undefined)
    ret.addTriples(triples);
  meta.base = parser._base;
  meta.prefixes = parser._prefixes;
  return ret;
}

var shexParser = ShEx.Parser.construct(Base);
function parseShEx (text, meta) {
  shexParser._setOptions({duplicateShape: $("#duplicateShape").val()});
  var ret = shexParser.parse(text);
  meta.base = ret.base;
  meta.prefixes = ret.prefixes;
  return ret;
}

function sum (s) { // cheap way to identify identical strings
  return s.replace(/\s/g, "").split("").reduce(function (a,b){
    a = ((a<<5) - a) + b.charCodeAt(0);
    return a&a
  },0);
}

// <n3.js-specific>
function rdflib_termToLex (node, resolver) {
  var ret = node === "- start -" ? node : ShEx.N3.Writer({ prefixes:resolver.meta.prefixes || {} })._encodeObject(node);
  if (ret === "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>")
    ret = "a";
  return ret;
}
function rdflib_lexToTerm (lex, resolver) {
  return lex === "- start -" ? lex :
    lex === "a" ? "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" :
    ShEx.N3.Lexer().tokenize(lex).map(token => {
    var left = 
          token.type === "typeIRI" ? "^^" :
          token.type === "langcode" ? "@" :
          token.type === "type" ? resolver.meta.prefixes[token.prefix] :
          token.type === "prefixed" ? resolver.meta.prefixes[token.prefix] :
          token.type === "blank" ? "_:" :
          "";
    var right = token.type === "IRI" || token.type === "typeIRI" ?
          resolver._resolveAbsoluteIRI(token) :
          token.value;
    return left + right;
  }).join("");
  return lex === "- start -" ? lex : lex[0] === "<" ? lex.substr(1, lex.length - 2) : lex;
}
// </n3.js-specific>


// caches for textarea parsers
function _makeCache (parseSelector) {
  var _dirty = true;
  var ret = {
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
    },
    asyncGet: function (url) {
      var _cache = this;
      $.ajax({
        accepts: {
          mycustomtype: 'text/shex,text/turtle,*/*'
        },
        url: url
      }).fail(function( jqXHR, textStatus ) {
        updateTips("GET <" + url + "> failed: " + jqXHR.statusText);
      }).done(function (data) {
        _cache.set(data);
        _cache.url = url;
        $("#loadForm").dialog("close");
        toggleControls();
      });
    }
  };
  ret.meta = { prefixes: {}, base: null };
  var resolver = new IRIResolver(ret.meta);
  ret.meta.termToLex = function (lex) { return  rdflib_termToLex(lex, resolver); };
  ret.meta.lexToTerm = function (lex) { return  rdflib_lexToTerm(lex, resolver); };
  return ret;
}

function makeSchemaCache (parseSelector) {
  var ret = _makeCache(parseSelector);
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
    var schema =
          isJSON ? ShEx.Util.ShExJtoAS(JSON.parse(text)) :
          graph ? parseShExR() :
          parseShEx(text, ret.meta);
    $("#results .status").hide();
    return schema;

    function tryN3 (text) {
      try {
        if (text.match(/^\s*$/))
          return null;
        var db = parseTurtle (text, ret.meta); // interpret empty schema as ShExC
        if (db.getTriples().length === 0)
          return null;
        return db;
      } catch (e) {
        return null;
      }
    }

    function parseShExR () {
      var graphParser = ShEx.Validator.construct(
        parseShEx(ShExRSchema, {}), // !! do something useful with the meta parm (prefixes and base)
        {}
      );
      var schemaRoot = graph.getTriples(null, ShEx.Util.RDF.type, "http://www.w3.org/ns/shex#Schema")[0].subject;
      var val = graphParser.validate(graph, schemaRoot); // start shape
      return ShEx.Util.ShExJtoAS(ShEx.Util.ShExRtoShExJ(ShEx.Util.valuesToSchema(ShEx.Util.valToValues(val))));
    }
  };
  ret.getShapes = function () {
    var obj = this.refresh();
    var start = "start" in obj ? [START_SHAPE_LABEL] : [];
    var rest = "shapes" in obj ? Object.keys(obj.shapes).map(InputSchema.meta.termToLex) : [];
    return start.concat(rest);
  };
  return ret;
}

function makeTurtleCache(parseSelector) {
  var ret = _makeCache(parseSelector);
  ret.parse = function (text) {
    return parseTurtle(text, ret.meta);
  };
  ret.getNodes = function () {
    var data = this.refresh();
    return data.getTriples().map(t => {
      return InputData.meta.termToLex(t.subject);
    });
  };
  return ret;
}

// controls for example links
function load (selector, obj, func, listItems, side, str) {
  $(selector).empty();
  Object.keys(obj).forEach(k => {
    var li = $("<li/>").append($("<button/>").text(k));
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
    // $("#focus0").val(dataTest.inputShapeMap[0].node); // inputNode in Map-test
    // $("#inputShape0").val(dataTest.inputShapeMap[0].shape); // srcSchema.start in Map-test
    removeEditMapPair(null);
    $("#textMap").val(dataTest.queryMap);
    copyTextMapToEditMap();
    // validate();
  }
}


// Control results area content.
var results = (function () {
  var resultsElt = document.querySelector("#results div");
  var resultsSel = $("#results div");
  return {
    replace: function (text) {
      return resultsSel.text(text);
    },
    append: function (text) {
      return resultsSel.append(text);
    },
    clear: function () {
      resultsSel.removeClass("passes fails error");
      return resultsSel.text("");
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
    copyEditMapToTextMap();
    validate();
  }, 0);
}

function hasFocusNode () {
  return $(".focus").map((idx, elt) => {
    return $(elt).val();
  }).get().some(str => {
    return str.length > 0;
  });
}

function validate () {
  results.clear();
  $("#fixedMap .pair").removeClass("passes fails");
  $("#results .status").hide();
  var parsing = "input schema";
  try {
    noStack(() => { InputSchema.refresh(); });
    $("#schemaDialect").text(InputSchema.language);
    var dataText = InputData.get();
    if (dataText || hasFocusNode()) {
      parsing = "input data";
      noStack(() => { InputData.refresh(); }); // for prefixes for getShapeMap
      // $("#shapeMap-tabs").tabs("option", "active", 2); // select fixedMap
      var fixedMap = fixedShapeMapToTerms($("#fixedMap tr").map((idx, tr) => {
        return {
          node: $(tr).find("input.focus").val(),
          shape: $(tr).find("input.inputShape").val()
        };
      }).get());
      $("#results .status").text("parsing data...").show();
      var inputData = InputData.refresh();

      $("#results .status").text("creating validator...").show();
      var validator = ShEx.Validator.construct(
        InputSchema.refresh(),
        { results: "api", regexModule: ShEx[$("#regexpEngine").val()] });

      $("#results .status").text("validating...").show();
      var ret = validator.validate(inputData, fixedMap);
      // var dated = Object.assign({ _when: new Date().toISOString() }, ret);
      $("#results .status").text("rendering results...").show();
      ret.forEach(renderEntry);
      // for debugging values and schema formats:
      // try {
      //   var x = ShExUtil.valToValues(ret);
      //   // var x = ShExUtil.ShExJtoAS(valuesToSchema(valToValues(ret)));
      //   res = results.replace(JSON.stringify(x, null, "  "));
      //   var y = ShExUtil.valuesToSchema(x);
      //   res = results.append(JSON.stringify(y, null, "  "));
      // } catch (e) {
      //   console.dir(e);
      // }
      finishRendering();
    } else {
      var outputLanguage = InputSchema.language === "ShExJ" ? "ShExC" : "ShExJ";
      $("#results .status").
        text("parsed "+InputSchema.language+" schema, generated "+outputLanguage+" ").
        append($("<button>(copy to input)</button>").
               css("border-radius", ".5em").
               on("click", function () {
                 InputSchema.set($("#results div").text());
               })).
        append(":").
        show();
      var parsedSchema;
      if (InputSchema.language === "ShExJ") {
        new ShEx.Writer({simplifyParentheses: false}).writeSchema(InputSchema.parsed, (error, text) => {
          if (error) {
            $("#results .status").text("unwritable ShExJ schema:\n" + error).show();
            // res.addClass("error");
          } else {
            results.append($("<pre/>").text(text).addClass("passes"));
          }
        });
      } else {
        var pre = $("<pre/>");
        pre.text(JSON.stringify(ShEx.Util.AStoShExJ(ShEx.Util.canonicalize(InputSchema.parsed)), null, "  ")).addClass("passes");
        results.append(pre);
      }
      results.finish();
    }

    function noStack (f) {
      try {
        f();
      } catch (e) {
        // The Parser error stack is uninteresting.
        delete e.stack;
        throw e;
      }
    }
  } catch (e) {
    $("#results .status").empty().append("error parsing " + parsing + ":\n").addClass("error");
    results.append($("<pre/>").text(e.stack || e));
  }

  function renderEntry (entry) {
    var fails = entry.status === "nonconformant";
    var klass = fails ? "fails" : "passes";
    var resultStr = fails ? "✗" : "✓";
    var elt = null;

    switch ($("#interface").val()) {
    case "human":
      elt = $("<div class='human'/>").append(
        $("<span/>").text(resultStr),
        $("<span/>").text(
        `${InputSchema.meta.termToLex(entry.node)}@${fails ? "!" : ""}${InputData.meta.termToLex(entry.shape)}`
        )).addClass(klass);
      if (fails)
        elt.append($("<pre>").text(ShEx.Util.errsToSimple(entry.appinfo).join("\n")));
      break;

    case "minimal":
      if (fails)
        entry.reason = ShEx.Util.errsToSimple(entry.appinfo).join("\n");
      delete entry.appinfo;
      // fall through to default
    default:
      elt = $("<pre/>").text(JSON.stringify(entry, null, "  ")).addClass(klass);
    }
    results.append(elt);

    // update the FixedMap
    var fixedMapEntry = $("#fixedMap .pair"+
                          "[data-node='"+entry.node+"']"+
                          "[data-shape='"+entry.shape+"']");
    fixedMapEntry.addClass(klass).find("a").text(resultStr);
    var nodeLex = fixedMapEntry.find("input.focus").val();
    var shapeLex = fixedMapEntry.find("input.inputShape").val();
    var anchor = encodeURIComponent(nodeLex) + "@" + encodeURIComponent(shapeLex);
    elt.attr("id", anchor);
    fixedMapEntry.find("a").attr("href", "#" + anchor);
  }

  function finishRendering () {
          $("#results .status").text("rendering results...").show();
          // Add commas to JSON results.
          if ($("#interface").val() !== "human")
            $("#results div *").each((idx, elt) => {
              if (idx === 0)
                $(elt).prepend("[");
              $(elt).append(idx === $("#results div *").length - 1 ? "]" : ",");
            });
      $("#results .status").hide();
      // for debugging values and schema formats:
      // try {
      //   var x = ShEx.Util.valToValues(ret);
      //   // var x = ShEx.Util.ShExJtoAS(valuesToSchema(valToValues(ret)));
      //   res = results.replace(JSON.stringify(x, null, "  "));
      //   var y = ShEx.Util.valuesToSchema(x);
      //   res = results.append(JSON.stringify(y, null, "  "));
      // } catch (e) {
      //   console.dir(e);
      // }
      results.finish();
  }
}

function addEditMapPair (evt, pairs) {
  if (evt) {
    pairs = [{node: "", shape: ""}];
    markEditMapDirty();
  }
  pairs.forEach(pair => {
    var spanElt = $("<tr/>", {class: "pair"});
    var focusElt = $("<input/>", {
      type: 'text',
      value: pair.node,
      class: 'data focus'
    }).on("change", markEditMapDirty);
    var shapeElt = $("<input/>", {
      type: 'text',
      value: pair.shape,
      class: 'schema inputShape'
    }).on("change", markEditMapDirty);
    var addElt = $("<button/>", {
      class: "addPair",
      title: "add a node/shape pair"}).text("+");
    var removeElt = $("<button/>", {
      class: "removePair",
      title: "remove this node/shape pair"}).text("-");
    addElt.on("click", addEditMapPair);
    removeElt.on("click", removeEditMapPair);
    spanElt.append([focusElt, "@", shapeElt, addElt, removeElt].map(elt => {
      return $("<td/>").append(elt);
    }));
    if (evt) {
      $(evt.target).parent().parent().after(spanElt);
    } else {
      $("#editMap").append(spanElt);
    }
  });
  if ($("#editMap .removePair").length === 1)
    $("#editMap .removePair").css("visibility", "hidden");
  else
    $("#editMap .removePair").css("visibility", "visible");
  $("#editMap .pair").each(idx => {
    addContextMenus("#editMap .pair:nth("+idx+") .focus", ".pair:nth("+idx+") .inputShape");
  });
  return false;
}

function removeEditMapPair (evt) {
  markEditMapDirty();
  if (evt) {
    $(evt.target).parent().parent().remove();
  } else {
    $("#editMap .pair").remove();
  }
  if ($("#editMap .removePair").length === 1)
    $("#editMap .removePair").css("visibility", "hidden");
  return false;
}

function prepareControls () {
  $("#menu-button").on("click", toggleControls);
  $("#interface").on("change", setInterface);
  $("#regexpEngine").on("change", toggleControls);
  $("#validate").on("click", disableResultsAndValidate);
  $("#clear").on("click", clearAll);

  $("#loadForm").dialog({
    autoOpen: false,
    modal: true,
    open: function (evt, ui) {
      debugger;
      console.dir(evt);
    },
    buttons: {
      "GET": function (evt, ui) {
        var target = $("#loadForm span").text() === "schema" ?
            InputSchema :
            InputData;
        var url = $("#loadInput").val();
        var tips = $(".validateTips");
        function updateTips (t) {
          tips
            .text( t )
            .addClass( "ui-state-highlight" );
          setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
          }, 500 );
        }
        if (url.length < 5) {
          $("#loadInput").addClass("ui-state-error");
          updateTips("URL \"" + url + "\" is way too short.");
          return;
        }
        tips.removeClass("ui-state-highlight").text();
        target.asyncGet(url);
      },
      Cancel: function() {
        $("#loadInput").removeClass("ui-state-error");
        $("#loadForm").dialog("close");
        toggleControls();
      }
    },
    close: function() {
      $("#loadInput").removeClass("ui-state-error");
      $("#loadForm").dialog("close");
      toggleControls();
    }
  });
  ["schema", "data"].forEach(type => {
    $("#load-"+type+"-button").click(evt => {
      $("#loadForm").attr("class", type).find("span").text(type);
      $("#loadForm").dialog("open");
      console.dir(type);
    });
  });

  $("#about").dialog({
    autoOpen: false,
    modal: true,
    width: "50%",
    buttons: {
      "Dismiss": dismissModal
    },
    close: dismissModal
  });

  $("#about-button").click(evt => {
    $("#about").dialog("open");
  });

  $("#shapeMap-tabs").tabs({
    activate: function (event, ui) {
      if (ui.oldPanel.get(0) === $("#editMap-tab").get(0))
        copyEditMapToTextMap();
    }
  });
  $("#textMap").on("change", evt => {
    copyTextMapToEditMap();
  });
  $("#inputData textarea").on("change", evt => {
    copyEditMapToFixedMap();
  });
  $("#copyEditMapToFixedMap").on("click", copyEditMapToFixedMap); // may add this button to tutorial

  function dismissModal (evt) {
    // $.unblockUI();
    $("#about").dialog("close");
    toggleControls();
    return true;
  }

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

function toggleControls (evt) {
  var revealing = evt && $("#controls").css("display") !== "flex";
  $("#controls").css("display", revealing ? "flex" : "none");
  toggleControlsArrow(revealing ? "up" : "down");
  if (revealing) {
    var target = evt.target;
    while (target.tagName !== "BUTTON")
      target = target.parentElement;
    if ($("#menuForm").css("position") === "absolute") {
      $("#controls").
        css("top", 0).
        css("left", $("#menu-button").css("margin-left"));
    } else {
      var bottonBBox = target.getBoundingClientRect();
      var controlsBBox = $("#menuForm").get(0).getBoundingClientRect();
      var left = bottonBBox.right - bottonBBox.width; // - controlsBBox.width;
      $("#controls").css("top", bottonBBox.bottom).css("left", left);
    }
    $("#permalink a").attr("href", getPermalink());
  }
  return false;
}

function toggleControlsArrow (which) {
  // jQuery can't find() a prefixed attribute (xlink:href); fall back to DOM:
  if (document.getElementById("menu-button") === null)
    return;
  var down = $(document.getElementById("menu-button").
               querySelectorAll('use[*|href="#down-arrow"]'));
  var up = $(document.getElementById("menu-button").
             querySelectorAll('use[*|href="#up-arrow"]'));

  switch (which) {
  case "down":
    down.show();
    up.hide();
    break;
  case "up":
    down.hide();
    up.show();
    break;
  default:
    throw Error("toggleControlsArrow expected [up|down], got \"" + which + "\"");
  }
}

function setInterface (evt) {
  toggleControls();
  customizeInterface();
}

/**
 *
 * location.search: e.g. "?schema=asdf&data=qwer&shape-map=ab%5Ecd%5E%5E_ef%5Egh"
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

function markEditMapDirty () {
  $("#editMap").attr("data-dirty", true);
}

function markEditMapClean () {
  $("#editMap").attr("data-dirty", false);
}

/** getShapeMap -- zip a node list and a shape list into a ShapeMap
 * use {InputData,InputSchema}.meta.{prefix,base} to complete IRIs
 */
function copyEditMapToFixedMap () {
  $("#fixedMap").empty();
  var mapAndErrors = $("#editMap .pair").get().reduce((acc, queryPair) => {
    var nodeSelector = $(queryPair).find(".focus").val();
    var shape = $(queryPair).find(".inputShape").val();
    if (!nodeSelector || !shape)
      return acc;
    var m = nodeSelector.match(ParseTriplePattern);
    var nodes = m ? getTriples (m[2], m[4], m[6]) : [nodeSelector];
    nodes.forEach(node => {
      var nodeTerm = InputData.meta.lexToTerm(node);
      var shapeTerm = InputSchema.meta.lexToTerm(shape);
      var key = nodeTerm + "|" + shapeTerm;
      if (key in acc)
        return;

    var spanElt = $("<tr/>", {class: "pair"
                              ,"data-node": nodeTerm
                              ,"data-shape": shapeTerm
                             });
    var focusElt = $("<input/>", {
      type: 'text',
      value: node,
      class: 'data focus',
      disabled: "disabled"
    });
    var shapeElt = $("<input/>", {
      type: 'text',
      value: shape,
      class: 'schema inputShape',
      disabled: "disabled"
    });
    var removeElt = $("<button/>", {
      class: "removePair",
      title: "remove this node/shape pair"}).text("-");
    removeElt.on("click", evt => {
      // Remove related result.
      var href, result;
      if ((href = $(evt.target).closest("tr").find("a").attr("href"))
          && (result = document.getElementById(href.substr(1))))
        $(result).remove();
      // Remove FixedMap entry.
      $(evt.target).closest("tr").remove();
    });
      spanElt.append([focusElt, "@", shapeElt, removeElt, $("<a/>")].map(elt => {
      return $("<td/>").append(elt);
    }));

      $("#fixedMap").append(spanElt);
      acc[key] = spanElt; // just needs the key so far.
    });

    return acc;
  }, {});

  // scroll inputs to right
  $("#fixedMap input").each((idx, focusElt) => {
    focusElt.scrollLeft = focusElt.scrollWidth;
  });

  function getTriples (s, p, o) {
    var get = s === "FOCUS" ? "subject" : "object";
    return InputData.refresh().getTriplesByIRI(mine(s), mine(p), mine(o)).map(t => {
      return InputData.meta.termToLex(t[get]);
    });
    function mine (term) {
      return term === "FOCUS" || term === "_" ? null : InputData.meta.lexToTerm(term);
    }
  }
}

function copyEditMapToTextMap () {
  if ($("#editMap").attr("data-dirty") === "true") {
    var text = $("#editMap .pair").get().reduce((acc, queryPair) => {
      var nodeSelector = $(queryPair).find(".focus").val();
      var shape = $(queryPair).find(".inputShape").val();
      if (!nodeSelector || !shape)
        return acc;
      return acc.concat([nodeSelector+"@"+shape]);
    }, []).join(",\n");
    $("#textMap").empty().val(text);
    copyEditMapToFixedMap();
    markEditMapClean();
  }
}

/** copyTextMapToEditMap - parse a supplied query map and build #editMap
 */
function copyTextMapToEditMap (shapeMap) {
  var shapeMap = $("#textMap").val();
  $("#editMap").empty();
  if (shapeMap.trim() === "") {
    makeFreshEditMap();
    return;
  }

  //     "(?:(<[^>]*>)|((?:[^\\@,]|\\[@,])+))" catches components
  var s = "((?:<[^>]*>)|(?:[^\\@,]|\\[@,])+)";
  var pairPattern = "(" + s + "|" + ParseTriplePattern + ")" + "@" + s + ",?";
  // e.g.: shapeMao = "my:n1@my:Shape1,<n2>@<Shape2>,my:n\\@3:.@<Shape3>";
  var pairs = (shapeMap + ",").match(/([^,\\]|\\.)+,/g).
      map(s => s.substr(0, s.length-1)); // trim ','s

  pairs.forEach(r2 => {
    var m = r2.match(/^\s*((?:[^@\\]|\\@)*?)\s*@\s*((?:[^@\\]|\\@)*?)\s*$/);
    if (m) {
      var node = m[1] || "";
      var shape = m[2] || "";
      addEditMapPair(null, [{node: node, shape: shape}]);
    }
  });
  copyEditMapToFixedMap();
  markEditMapClean();
}

function makeFreshEditMap () {
  addEditMapPair(null, [{node: "", shape: ""}]);
  markEditMapClean();
}

/** fixedShapeMapToTerms -- map ShapeMap to API terms
 * @@TODO: add to ShExValidator so API accepts ShapeMap
 */
function fixedShapeMapToTerms (shapeMap) {
  return shapeMap.map(pair => {
    return {node: InputData.meta.lexToTerm(pair.node),
            shape: InputSchema.meta.lexToTerm(pair.shape)};
  });
}

/**
 * Load URL search parameters
 */
function prepareInterface () {
  // don't overwrite if we arrived here from going back for forth in history
  if (SchemaTextarea.val() !== "" || $("#inputData textarea").val() !== "")
    return;

  var iface = parseQueryString(location.search);

  toggleControlsArrow("down");

  // Load but don't parse the schema, data and shape-map.
  QueryParams.forEach(input => {
    var parm = input.queryStringParm;
    if (parm + "URL" in iface) {
      var url = iface[parm + "URL"];
      input.cache.url = url;
      (parm === "schema" ? InputSchema : InputData).asyncGet(url);
    } else if (parm in iface) {
      input.location.val("");
      iface[parm].forEach(text => {
        var prepend = input.location.prop("tagName") === "TEXTAREA" ?
            input.location.val() :
            "";
        input.location.val(prepend + text);
      });
    } else if ("deflt" in input) {
      input.location.val(input.deflt);
    }
  });

  // Parse the schema and data so the prefixes and base are available.
  try { InputSchema.refresh() } catch (e) { }
  try { InputData.refresh() } catch (e) { }

  // Parse the shape-map using the prefixes and base.
  if ($("#textMap").val().trim().length > 0)
    copyTextMapToEditMap();
  else
    makeFreshEditMap();

  customizeInterface();
  if ("schema" in iface && iface.schema.reduce((r, elt) => {
    return r+elt.length;
  }, 0)) {
    validate();
  }
}

  /**
   * update location with a current values of some inputs
   */
  function getPermalink () {
    var parms = [];
    copyEditMapToTextMap();
    parms = parms.concat(QueryParams.reduce((acc, input) => {
      var parm = input.queryStringParm;
      var val = input.location.val();
      if (input.cache && input.cache.url) {
        parm += "URL";
        val = input.cache.url;
      }
      return parm.trim().length > 0 ?
        acc.concat(parm + "=" + encodeURIComponent(val)) :
        acc;
    }, []));
    var s = parms.join("&");
    return location.origin + location.pathname + "?" + s;
  }

function customizeInterface () {
  if ($("#interface").val() === "minimal") {
    $("#inputSchema .status").html("schema (<span id=\"schemaDialect\">ShEx</span>)").show();
    $("#inputData .status").html("data (<span id=\"dataDialect\">Turtle</span>)").show();
    $("#actions").parent().children().not("#actions").hide();
    $("#title img, #title h1").hide();
    $("#menuForm").css("position", "absolute").css(
      "left",
      $("#inputSchema .status").get(0).getBoundingClientRect().width -
        $("#menuForm").get(0).getBoundingClientRect().width
    );
    $("#controls").css("position", "relative");
  } else {
    $("#inputSchema .status").html("schema (<span id=\"schemaDialect\">ShEx</span>)").hide();
    $("#inputData .status").html("data (<span id=\"dataDialect\">Turtle</span>)").hide();
    $("#actions").parent().children().not("#actions").show();
    $("#title img, #title h1").show();
    $("#menuForm").removeAttr("style");
    $("#controls").css("position", "absolute");
  }
}

/**
 * Prepare drag and drop into text areas
 */
function prepareDragAndDrop () {
  QueryParams.filter(q => {
    return "cache" in q;
  }).map(q => {
    return {
      location: q.location,
      targets: [{
        ext: "",
        target: q.cache
      }]
    };
  }).concat([
    {location: $("body"), targets: [{ext: ".shex", target: InputSchema},
                                    {ext: ".ttl", target: InputData}]}
  ]).forEach(desc => {
      // kudos to http://html5demos.com/dnd-upload
      desc.location.
        on("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
          e.preventDefault();
          e.stopPropagation();
        }).
        on("dragover dragenter", (e) => {
          desc.location.addClass("hover");
        }).
        on("dragend dragleave drop", (e) => {
          desc.location.removeClass("hover");
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
function prepareDemos () {
  var listItems = {inputSchema:{}, inputData:{}};
  load("#inputSchema .examples ul", Demos, pickSchema,
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
      var curSum = sum($(target).val());
      if (curSum in listItems[side])
        listItems[side][curSum].addClass("selected");
      else
        $("#"+side+" .selected").removeClass("selected");
      delete cache.url;
    }, 250);
  }
  $("body").keydown(function (e) { // keydown because we need to preventDefault
    var code = e.keyCode || e.charCode; // standards anyone?
    if (e.ctrlKey && (code === 10 || code === 13)) {
      var at = $(":focus");
      $("#validate").focus().click();
      at.focus();
      return false; // same as e.preventDefault();
    } else {
      return true;
    }
  });
  SchemaTextarea.keyup(function (e) { // keyup to capture backspace
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
      getItems: function () { return InputData.getNodes(); } },
    { inputSelector: shapeSelector,
      getItems: function () { return InputSchema.getShapes(); } }
  ].forEach(entry => {
    // !!! terribly stateful; only one context menu at a time!
    var terms = null, v = null, target, scrollLeft, m, addSpace = "";
    $.contextMenu({
      selector: entry.inputSelector,
      callback: function (key, options) {
        markEditMapDirty();
        if (terms) {
          var term = terms.tz[terms.match];
          var val = v.substr(0, term[0]) +
              key + addSpace +
              v.substr(term[0] + term[1]);
          if (terms.match === 2 && !m[8])
            val = val + "}";
          else if (term[0] + term[1] === v.length)
            val = val + " ";
          $(options.selector).val(val);
          // target.scrollLeft = scrollLeft + val.length - v.length;
          target.scrollLeft = target.scrollWidth;
        } else {
          $(options.selector).val(key);
        }
      },
      build: function (elt, evt) {
        if (elt.hasClass("data")) {
          v = elt.val();
          m = v.match(ParseTriplePattern);
          if (m) {
            target = evt.target;
            var selStart = target.selectionStart;
            scrollLeft = target.scrollLeft;
            terms = [0, 1, 2].reduce((acc, ord) => {
              if (m[(ord+1)*2-1] !== undefined) {
                var at = acc.start + m[(ord+1)*2-1].length;
                var len = m[(ord+1)*2] ? m[(ord+1)*2].length : 0;
                return {
                  start: at + len,
                  tz: acc.tz.concat([[at, len]]),
                  match: acc.match === null && at + len >= selStart ?
                    ord :
                    acc.match
                };
              } else {
                return acc;
              }
            }, {start: 0, tz: [], match: null });
            function norm (tz) {
              return tz.map(t => {
                return InputData.meta.termToLex(t);
              });
            }
            const getTermsFunctions = [
              () => { return ["FOCUS", "_"].concat(norm(store.getSubjects())); },
              () => { return norm(store.getPredicates()); },
              () => { return ["FOCUS", "_"].concat(norm(store.getObjects())); },
            ];
            var store = InputData.refresh();
            var items = getTermsFunctions[terms.match]();
            return {
              items:
              items.reduce((ret, opt) => {
                ret[opt] = { name: opt };
                return ret;
              }, {})
            };
            
          }
        }
        terms = v = null;
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

prepareControls();
prepareInterface();
prepareDragAndDrop();
prepareDemos();

