/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "webpacks/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * isIRI, isBlank, getLiteralType, getLiteralValue
 */

const ShExTermCjsModule = (function () {

  const absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  const RdfLangString = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString";
  const XsdString = "http://www.w3.org/2001/XMLSchema#string";

  // N3.js:lib/N3Parser.js<0.4.5>:576 with
  //   s/this\./Parser./g
  //   s/token/iri/
  // ### `_resolveIRI` resolves a relative IRI token against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative.
  function resolveRelativeIRI (base, iri) {

    if (absoluteIRI.test(iri))
      return iri

    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return base;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return base + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return base.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      let m = base.match(schemeAuthority);
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? m[1] : m[0]) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(base.replace(/[^\/?]*(?:\?.*)?$/, '') + iri);
    }
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986.
  function _removeDotSegments (iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!dotSegments.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    const result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return result + '/' + iri.substr(i + 1);
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  function internalTerm (node) { // !!rdfjsTermToInternal
    switch (node.termType) {
    case ("NamedNode"):
      return node.value;
    case ("BlankNode"):
      return "_:" + node.value;
    case ("Literal"):
      return "\"" + node.value + "\"" + (
        node.datatypeString === RdfLangString
          ? "@" + node.language
          : node.datatypeString === XsdString
          ? ""
          : "^^" + node.datatypeString
      );
    default: throw Error("unknown RDFJS node type: " + JSON.stringify(node))
    }
  }

  function internalTriple (triple) { // !!rdfjsTripleToInternal
    return {
      subject: internalTerm(triple.subject),
      predicate: internalTerm(triple.predicate),
      object: internalTerm(triple.object)
    };
  }

  function externalTerm (node, factory) { // !!intermalTermToRdfjs
    if (isIRI(node)) {
      return factory.namedNode(node);
    } else if (isBlank(node)) {
      return factory.blankNode(node.substr(2));
    } else if (isLiteral(node)) {
      let dtOrLang = getLiteralLanguage(node) ||
          (getLiteralType(node) === XsdString
           ? null // seems to screw up N3.js
           : factory.namedNode(getLiteralType(node)))
      return factory.literal(getLiteralValue(node), dtOrLang)
    } else {
      throw Error("Unknown internal term type: " + JSON.stringify(node));
    }
  }

  function externalTriple (triple, factory) { // !!rename internalTripleToRdjs
    return factory.quad(
      externalTerm(triple.subject, factory),
      externalTerm(triple.predicate, factory),
      externalTerm(triple.object, factory)
    );
  }

  function intermalTermToTurtle (node, base, prefixes) {
    if (isIRI(node)) {
      // if (node === RDF_TYPE) // only valid in Turtle predicates
      //   return "a";

      // Escape special characters
      if (escape.test(node))
        node = node.replace(escapeAll, characterReplacer);
      const pref = Object.keys(prefixes).find(pref => node.startsWith(prefixes[pref]));
      if (pref) {
        const rest = node.substr(prefixes[pref].length);
        if (rest.indexOf("\\") === -1) // could also say no more than n of these: [...]
          return pref + ":" + rest.replace(/([~!$&'()*+,;=/?#@%])/g, '\\' + "$1");
      }
      if (node.startsWith(base)) {
        return "<" + node.substr(base.length) + ">";
      } else {
        return "<" + node + ">";
      }
    } else if (isBlank(node)) {
      return node;
    } else if (isLiteral(node)) {
      const value = getLiteralValue(node);
      const type = getLiteralType(node);
      const language = getLiteralLanguage(node);
      // Escape special characters
      if (escape.test(value))
        value = value.replace(escapeAll, characterReplacer);
      // Write the literal, possibly with type or language
      if (language)
        return '"' + value + '"@' + language;
      else if (type && type !== "http://www.w3.org/2001/XMLSchema#string")
        return '"' + value + '"^^' + this.intermalTermToTurtle(type, base, prefixes);
      else
        return '"' + value + '"';
    } else {
      throw Error("Unknown internal term type: " + JSON.stringify(node));
    }
  }

  // Tests whether the given entity (triple object) represents an IRI in the N3 library
  function isIRI (entity) {
    if (typeof entity !== 'string')
      return false;
    else if (entity.length === 0)
      return true;
    else {
      const firstChar = entity[0];
      return firstChar !== '"' && firstChar !== '_';
    }
  }

  // Tests whether the given entity (triple object) represents a literal in the N3 library
  function isLiteral (entity) {
    return typeof entity === 'string' && entity[0] === '"';
  }

  // Tests whether the given entity (triple object) represents a blank node in the N3 library
  function isBlank (entity) {
    return typeof entity === 'string' && entity.substr(0, 2) === '_:';
  }

  // Tests whether the given entity represents the default graph
  function isDefaultGraph (entity) {
    return !entity;
  }

  // Tests whether the given triple is in the default graph
  function inDefaultGraph (triple) {
    return !triple.graph;
  }

  // Gets the string value of a literal in the N3 library
  function getLiteralValue (literal) {
    const match = /^"([^]*)"/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1];
  }

  // Gets the type of a literal in the N3 library
  function getLiteralType (literal) {
    const match = /^"[^]*"(?:\^\^([^"]+)|(@)[^@"]+)?$/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1] || (match[2] ? RdfLangString : XsdString);
  }

  // Gets the language of a literal in the N3 library
  function getLiteralLanguage (literal) {
    const match = /^"[^]*"(?:@([^@"]+)|\^\^[^"]+)?$/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1] ? match[1].toLowerCase() : '';
  }


// rdf:type predicate (for 'a' abbreviation)
const RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    RDF_TYPE   = RDF_PREFIX + 'type';

// Characters in literals that require escaping
const escape    = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    escapeAll = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    escapeReplacements = {
      '\\': '\\\\', '"': '\\"', '\t': '\\t',
      '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f',
    };

  // Replaces a character by its escaped version
  function characterReplacer (character) {
    // Replace a single character by its escaped version
    const result = escapeReplacements[character];
    if (result === undefined) {
      // Replace a single character with its 4-bit unicode escape sequence
      if (character.length === 1) {
        result = character.charCodeAt(0).toString(16);
        result = '\\u0000'.substr(0, 6 - result.length) + result;
      }
      // Replace a surrogate pair with its 8-bit unicode escape sequence
      else {
        result = ((character.charCodeAt(0) - 0xD800) * 0x400 +
                  character.charCodeAt(1) + 0x2400).toString(16);
        result = '\\U00000000'.substr(0, 10 - result.length) + result;
      }
    }
    return result;
  }

  return {
    RdfLangString: RdfLangString,
    XsdString: XsdString,
    resolveRelativeIRI: resolveRelativeIRI,
    isIRI: isIRI,
    isLiteral: isLiteral,
    isBlank: isBlank,
    isDefaultGraph: isDefaultGraph,
    inDefaultGraph: inDefaultGraph,
    getLiteralValue: getLiteralValue,
    getLiteralType: getLiteralType,
    getLiteralLanguage: getLiteralLanguage,
    internalTerm: internalTerm,
    internalTriple: internalTriple,
    externalTerm: externalTerm,
    externalTriple: externalTriple,
    intermalTermToTurtle: intermalTermToTurtle,
  }
})();

if (true)
  module.exports = ShExTermCjsModule; // node environment


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExUtil** provides ShEx utility functions

const ShExUtilCjsModule = (function () {
const ShExTerm = __webpack_require__(3);
const Visitor = __webpack_require__(10)
const Hierarchy = __webpack_require__(23)

const SX = {};
SX._namespace = "http://www.w3.org/ns/shex#";
["Schema", "@context", "imports", "startActs", "start", "shapes",
 "ShapeOr", "ShapeAnd", "shapeExprs", "nodeKind",
 "NodeConstraint", "iri", "bnode", "nonliteral", "literal", "datatype", "length", "minlength", "maxlength", "pattern", "flags", "mininclusive", "minexclusive", "maxinclusive", "maxexclusive", "totaldigits", "fractiondigits", "values",
 "ShapeNot", "shapeExpr",
 "Shape", "closed", "extra", "expression", "semActs",
 "ShapeRef", "reference", "ShapeExternal",
 "EachOf", "OneOf", "expressions", "min", "max", "annotation",
 "TripleConstraint", "inverse", "negated", "predicate", "valueExpr",
 "Inclusion", "include", "Language", "languageTag",
 "IriStem", "LiteralStem", "LanguageStem", "stem",
 "IriStemRange", "LiteralStemRange", "LanguageStemRange", "exclusion",
 "Wildcard", "SemAct", "name", "code",
 "Annotation", "object"].forEach(p => {
  SX[p] = SX._namespace+p;
});
const RDF = {};
RDF._namespace = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
["type", "first", "rest", "nil"].forEach(p => {
  RDF[p] = RDF._namespace+p;
});
const XSD = {}
XSD._namespace = "http://www.w3.org/2001/XMLSchema#";
["anyURI"].forEach(p => {
  XSD[p] = XSD._namespace+p;
});
const OWL = {}
OWL._namespace = "http://www.w3.org/2002/07/owl#";
["Thing"].forEach(p => {
  OWL[p] = OWL._namespace+p;
});

const Missed = {}; // singleton
const UNBOUNDED = -1;

function extend (base) {
  if (!base) base = {};
  for (let i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
    for (let name in arg)
      base[name] = arg[name];
  return base;
}

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }

  function isShapeRef (expr) {
    return typeof expr === "string" // test for JSON-LD @ID
  }
  let isInclusion = isShapeRef;

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          const ret = { value: ShExTerm.getLiteralValue(term) };
          const dt = ShExTerm.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          const lang = ShExTerm.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }
const ShExUtil = {

  SX: SX,
  RDF: RDF,
  version: function () {
    return "0.5.0";
  },

  Visitor: Visitor,
  index: Visitor.index,

  // tests
  // console.warn("HERE:", ShExJtoAS({"type":"Schema","shapes":[{"id":"http://all.example/S1","type":"Shape","expression":
  //  { "id":"http://all.example/S1e", "type":"EachOf","expressions":[ ] },
  // // { "id":"http://all.example/S1e","type":"TripleConstraint","predicate":"http://all.example/p1"},
  // "extra":["http://all.example/p3","http://all.example/p1","http://all.example/p2"]
  // }]}).shapes['http://all.example/S1']);

  ShExJtoAS: function (schema) {
    const _ShExUtil = this;
    schema._prefixes = schema.prefixes || {  };
    schema._index = this.index(schema);
    return schema;
  },

  AStoShExJ: function (schema, abbreviate) {
    schema["@context"] = schema["@context"] || "http://www.w3.org/ns/shex.jsonld";
    delete schema["_index"];
    delete schema["_prefixes"];
    return schema;
  },

  ShExRVisitor: function (knownShapeExprs) {
    const v = ShExUtil.Visitor();
    const knownExpressions = {};
    const oldVisitShapeExpr = v.visitShapeExpr,
        oldVisitValueExpr = v.visitValueExpr,
        oldVisitExpression = v.visitExpression;
    v.keepShapeExpr = oldVisitShapeExpr;

    v.visitShapeExpr = v.visitValueExpr = function (expr, label) {
      if (typeof expr === "string")
        return expr;
      if ("id" in expr) {
        if (knownShapeExprs.indexOf(expr.id) !== -1 || Object.keys(expr).length === 1)
          return expr.id;
        delete expr.id;
      }
      return oldVisitShapeExpr.call(this, expr, label);
    };

    v.visitExpression = function (expr) {
      if (typeof expr === "string") // shortcut for recursive references e.g. 1Include1 and ../doc/TODO.md
        return expr;
      if ("id" in expr) {
        if (expr.id in knownExpressions) {
          knownExpressions[expr.id].refCount++;
          return expr.id;
        }
      }
      const ret = oldVisitExpression.call(this, expr);
      // Everything from RDF has an ID, usually a BNode.
      knownExpressions[expr.id] = { refCount: 1, expr: ret };
      return ret;
    }

    v.cleanIds = function () {
      for (let k in knownExpressions) {
        const known = knownExpressions[k];
        if (known.refCount === 1 && ShExTerm.isBlank(known.expr.id))
          delete known.expr.id;
      };
    }

    return v;
  },


  // tests
  // const shexr = ShExUtil.ShExRtoShExJ({ "type": "Schema", "shapes": [
  //   { "id": "http://a.example/S1", "type": "Shape",
  //     "expression": {
  //       "type": "TripleConstraint", "predicate": "http://a.example/p1",
  //       "valueExpr": {
  //         "type": "ShapeAnd", "shapeExprs": [
  //           { "type": "NodeConstraint", "nodeKind": "bnode" },
  //           { "id": "http://a.example/S2", "type": "Shape",
  //             "expression": {
  //               "type": "TripleConstraint", "predicate": "http://a.example/p2" } }
  //           //            "http://a.example/S2"
  //         ] } } },
  //   { "id": "http://a.example/S2", "type": "Shape",
  //     "expression": {
  //       "type": "TripleConstraint", "predicate": "http://a.example/p2" } }
  // ] });
  // console.warn("HERE:", shexr.shapes[0].expression.valueExpr);
  // ShExUtil.ShExJtoAS(shexr);
  // console.warn("THERE:", shexr.shapes["http://a.example/S1"].expression.valueExpr);


  ShExRtoShExJ: function (schema) {
    // compile a list of known shapeExprs
    const knownShapeExprs = [];
    if ("shapes" in schema)
      [].push.apply(knownShapeExprs, schema.shapes.map(sh => { return sh.id; }));

    // normalize references to those shapeExprs
    const v = this.ShExRVisitor(knownShapeExprs);
    if ("start" in schema)
      schema.start = v.visitShapeExpr(schema.start);
    if ("shapes" in schema)
      schema.shapes = schema.shapes.map(sh => {
        return v.keepShapeExpr(sh);
      });

    // remove extraneous BNode IDs
    v.cleanIds();
    return schema;
  },

  valGrep: function (obj, type, f) {
    const _ShExUtil = this;
    const ret = [];
    for (let i in obj) {
      const o = obj[i];
      if (typeof o === "object") {
        if ("type" in o && o.type === type)
          ret.push(f(o));
        ret.push.apply(ret, _ShExUtil.valGrep(o, type, f));
      }
    }
    return ret;
  },

  n3jsToTurtle: function (res) {
    function termToLex (node) {
      return typeof node === "object" ? ("\"" + node.value + "\"" + (
        "type" in node ? "^^<" + node.type + ">" :
          "language" in node ? "@" + node.language :
          ""
      )) :
      ShExTerm.isIRI(node) ? "<" + node + ">" :
      ShExTerm.isBlank(node) ? node :
      "???";
    }
    return this.valGrep(res, "TestedTriple", function (t) {
      return ["subject", "predicate", "object"].map(k => {
        return termToLex(t[k]);
      }).join(" ")+" .";
    });
  },

  valToN3js: function (res, factory) {
    return this.valGrep(res, "TestedTriple", function (t) {
      const ret = JSON.parse(JSON.stringify(t));
      if (typeof t.object === "object")
        ret.object = ("\"" + t.object.value + "\"" + (
          "type" in t.object ? "^^" + t.object.type :
            "language" in t.object ? "@" + t.object.language :
            ""
        ));
      return ShExTerm.externalTriple(ret, factory);
    });
  },

  n3jsToTurtle: function (n3js) {
    function termToLex (node) {
      if (ShExTerm.isIRI(node))
        return "<" + node + ">";
      if (ShExTerm.isBlank(node))
        return node;
      const t = ShExTerm.getLiteralType(node);
      if (t && t !== "http://www.w3.org/2001/XMLSchema#string")
        return "\"" + ShExTerm.getLiteralValue(node) + "\"" +
        "^^<" + t + ">";
      return node;
    }
    return n3js.map(function (t) {
      return ["subject", "predicate", "object"].map(k => {
        return termToLex(t[k]);
      }).join(" ")+" .";
    });
  },

  /* canonicalize: move all tripleExpression references to their first expression.
   *
   */
  canonicalize: function (schema, trimIRI) {
    const ret = JSON.parse(JSON.stringify(schema));
    ret["@context"] = ret["@context"] || "http://www.w3.org/ns/shex.jsonld";
    delete ret._prefixes;
    delete ret._base;
    let index = ret._index || this.index(schema);
    delete ret._index;
    let sourceMap = ret._sourceMap;
    delete ret._sourceMap;
    // Don't delete ret.productions as it's part of the AS.
    const v = ShExUtil.Visitor();
    const knownExpressions = [];
    const oldVisitInclusion = v.visitInclusion, oldVisitExpression = v.visitExpression;
    v.visitInclusion = function (inclusion) {
      if (knownExpressions.indexOf(inclusion) === -1 &&
          inclusion in index.tripleExprs) {
        knownExpressions.push(inclusion)
        return oldVisitExpression.call(v, index.tripleExprs[inclusion]);
      }
      return oldVisitInclusion.call(v, inclusion);
    };
    v.visitExpression = function (expression) {
      if (typeof expression === "object" && "id" in expression) {
        if (knownExpressions.indexOf(expression.id) === -1) {
          knownExpressions.push(expression.id)
          return oldVisitExpression.call(v, index.tripleExprs[expression.id]);
        }
        return expression.id; // Inclusion
      }
      return oldVisitExpression.call(v, expression);
    };
    if (trimIRI) {
      v.visitIRI = function (i) {
        return i.replace(trimIRI, "");
      }
      if ("imports" in ret)
        ret.imports = v.visitImports(ret.imports);
    }
    if ("shapes" in ret) {
      ret.shapes = Object.keys(index.shapeExprs).sort().map(k => {
        if ("extra" in index.shapeExprs[k])
          index.shapeExprs[k].extra.sort();
        return v.visitShapeExpr(index.shapeExprs[k]);
      });
    }
    return ret;
  },

  BiDiClosure: function () {
    return {
      needs: {},
      neededBy: {},
      inCycle: [],
      test: function () {
        function expect (l, r) { const ls = JSON.stringify(l), rs = JSON.stringify(r); if (ls !== rs) throw Error(ls+" !== "+rs); }
        // this.add(1, 2); expect(this.needs, { 1:[2]                     }); expect(this.neededBy, { 2:[1]                     });
        // this.add(3, 4); expect(this.needs, { 1:[2], 3:[4]              }); expect(this.neededBy, { 2:[1], 4:[3]              });
        // this.add(2, 3); expect(this.needs, { 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 2:[1], 3:[2,1], 4:[3,2,1] });

        this.add(2, 3); expect(this.needs, { 2:[3]                     }); expect(this.neededBy, { 3:[2]                     });
        this.add(1, 2); expect(this.needs, { 1:[2,3], 2:[3]            }); expect(this.neededBy, { 3:[2,1], 2:[1]            });
        this.add(1, 3); expect(this.needs, { 1:[2,3], 2:[3]            }); expect(this.neededBy, { 3:[2,1], 2:[1]            });
        this.add(3, 4); expect(this.needs, { 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(6, 7); expect(this.needs, { 6:[7]                    , 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6]                    , 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(5, 6); expect(this.needs, { 5:[6,7], 6:[7]           , 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6,5], 6:[5]           , 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(5, 7); expect(this.needs, { 5:[6,7], 6:[7]           , 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6,5], 6:[5]           , 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(7, 8); expect(this.needs, { 5:[6,7,8], 6:[7,8], 7:[8], 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6,5], 6:[5], 8:[7,6,5], 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(4, 5);
        expect(this.needs,    { 1:[2,3,4,5,6,7,8], 2:[3,4,5,6,7,8], 3:[4,5,6,7,8], 4:[5,6,7,8], 5:[6,7,8], 6:[7,8], 7:[8] });
        expect(this.neededBy, { 2:[1], 3:[2,1], 4:[3,2,1], 5:[4,3,2,1], 6:[5,4,3,2,1], 7:[6,5,4,3,2,1], 8:[7,6,5,4,3,2,1] });
      },
      add: function (needer, needie, negated) {
        const r = this;
        if (!(needer in r.needs))
          r.needs[needer] = [];
        if (!(needie in r.neededBy))
          r.neededBy[needie] = [];

        // // [].concat.apply(r.needs[needer], [needie], r.needs[needie]). emitted only last element
        r.needs[needer] = r.needs[needer].concat([needie], r.needs[needie]).
          filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; });
        // // [].concat.apply(r.neededBy[needie], [needer], r.neededBy[needer]). emitted only last element
        r.neededBy[needie] = r.neededBy[needie].concat([needer], r.neededBy[needer]).
          filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; });

        if (needer in this.neededBy) this.neededBy[needer].forEach(function (e) {
          r.needs[e] = r.needs[e].concat([needie], r.needs[needie]).
            filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; });
        });

        if (needie in this.needs) this.needs[needie].forEach(function (e) {
          r.neededBy[e] = r.neededBy[e].concat([needer], r.neededBy[needer]).
            filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; })
        });
        // this.neededBy[needie].push(needer);

        if (r.needs[needer].indexOf(needer) !== -1)
          r.inCycle = r.inCycle.concat(r.needs[needer]);
      },
      trim: function () {
        function _trim (a) {
          // filter(function (el, ord, l) { return l.indexOf(el) === ord; })
          for (let i = a.length-1; i > -1; --i)
            if (a.indexOf(a[i]) < i)
              a.splice(i, i+1);
        }
        for (k in this.needs)
          _trim(this.needs[k]);
        for (k in this.neededBy)
          _trim(this.neededBy[k]);
      },
      foundIn: {},
      addIn: function (tripleExpr, shapeExpr) {
        this.foundIn[tripleExpr] = shapeExpr;
      }
    }
  },
  /** @@TODO tests
   * options:
   *   no: don't do anything; just report nestable shapes
   *   transform: function to change shape labels
   */
  nestShapes: function (schema, options = {}) {
    const _ShExUtil = this;
    const index = schema._index || this.index(schema);
    if (!('no' in options)) { options.no = false }

    let shapeLabels = Object.keys(index.shapeExprs || [])
    let shapeReferences = {}
    shapeLabels.forEach(label => {
      let shape = index.shapeExprs[label]
      noteReference(label, null) // just note the shape so we have a complete list at the end
      if (shape.type === 'Shape') {
        if ('expression' in shape) {
          (_ShExUtil.simpleTripleConstraints(shape) || []).forEach(tc => {
            let target = _ShExUtil.getValueType(tc.valueExpr, true)
            noteReference(target, {type: 'tc', shapeLabel: label, tc: tc})
          })
        }
      } else if (shape.type === 'NodeConstraint') {
        // can't have any refs to other shapes
      } else {
        throw Error('nestShapes currently only supports Shapes and NodeConstraints')
      }
    })
    let nestables = Object.keys(shapeReferences).filter(
      label => shapeReferences[label].length === 1
        && shapeReferences[label][0].type === 'tc' // no inheritance support yet
        && label in index.shapeExprs
        && index.shapeExprs[label].type === 'Shape' // Don't nest e.g. valuesets for now. @@ needs an option
    ).filter(
      nestable => !('noNestPattern' in options)
        || !nestable.match(RegExp(options.noNestPattern))
    ).reduce((acc, label) => {
      acc[label] = {
        referrer: shapeReferences[label][0].shapeLabel,
        predicate: shapeReferences[label][0].tc.predicate
      }
      return acc
    }, {})
    if (!options.no) {
      let oldToNew = {}

      if (options.rename) {
        if (!('transform' in options)) {
          options.transform = (function () {
            let map = shapeLabels.reduce((acc, k, idx) => {
              acc[k] = '_:renamed' + idx
              return acc
            }, {})
            return function (id, shapeExpr) {
              return map[id]
            }
          })()
        }
        Object.keys(nestables).forEach(oldName => {
          let shapeExpr = index.shapeExprs[oldName]
          let newName = options.transform(oldName, shapeExpr)
          oldToNew[oldName] = shapeExpr.id = newName
          shapeLabels[shapeLabels.indexOf(oldName)] = newName
          nestables[newName] = nestables[oldName]
          nestables[newName].was = oldName
          delete nestables[oldName]

          // @@ maybe update index when done? 
          index.shapeExprs[newName] = index.shapeExprs[oldName]
          delete index.shapeExprs[oldName]

          if (shapeReferences[oldName].length !== 1) { throw Error('assertion: ' + oldName + ' doesn\'t have one reference: [' + shapeReferences[oldName] + ']') }
          let ref = shapeReferences[oldName][0]
          if (ref.type === 'tc') {
            if (typeof ref.tc.valueExpr === 'string') { // ShapeRef
              ref.tc.valueExpr = newName
            } else {
              throw Error('assertion: rename not implemented for TripleConstraint expr: ' + ref.tc.valueExpr)
              // _ShExUtil.setValueType(ref, newName)
            }
          } else if (ref.type === 'Shape') {
            throw Error('assertion: rename not implemented for Shape: ' + ref)
          } else {
            throw Error('assertion: ' + ref.type + ' not TripleConstraint or Shape')
          }
        })

        Object.keys(nestables).forEach(k => {
          let n = nestables[k]
          if (n.referrer in oldToNew) {
            n.newReferrer = oldToNew[n.referrer]
          }
        })

        // Restore old order for more concise diffs.
        let shapesCopy = {}
        shapeLabels.forEach(label => shapesCopy[label] = index.shapeExprs[label])
        index.shapeExprs = shapesCopy
      } else {
        const doomed = []
        const ids = schema.shapes.map(s => s.id)
        Object.keys(nestables).forEach(oldName => {
          const borged = index.shapeExprs[oldName]
          // In principle, the ShExJ shouldn't have a Decl if the above criteria are met,
          // but the ShExJ may be generated by something which emits Decls regardless.
          shapeReferences[oldName][0].tc.valueExpr = borged
          const delme = ids.indexOf(oldName)
          if (schema.shapes[delme].id !== oldName)
            throw Error('assertion: found ' + schema.shapes[delme].id + ' instead of ' + oldName)
          doomed.push(delme)
          delete index.shapeExprs[oldName]
        })
        doomed.sort((l, r) => r - l).forEach(delme => {
          const id = schema.shapes[delme].id
          if (!nestables[id])
            throw Error('deleting unexpected shape ' + id)
          delete schema.shapes[delme].id
          schema.shapes.splice(delme, 1)
        })
      }
    }
    // console.dir(nestables)
    // console.dir(shapeReferences)
    return nestables

    function noteReference (id, reference) {
      if (!(id in shapeReferences)) {
        shapeReferences[id] = []
      }
      if (reference) {
        shapeReferences[id].push(reference)
      }
    }
  },

  /** @@TODO tests
   *
   */
  getPredicateUsage: function (schema, untyped = {}) {
    const _ShExUtil = this;

    // populate shapeHierarchy
    let shapeHierarchy = Hierarchy.create()
    Object.keys(schema.shapes).forEach(label => {
      let shapeExpr = schema.shapes[label]
      if (shapeExpr.type === 'Shape') {
        (shapeExpr.extends || []).forEach(
          superShape => shapeHierarchy.add(superShape.reference, label)
        )
      }
    })
    Object.keys(schema.shapes).forEach(label => {
      if (!(label in shapeHierarchy.parents))
        shapeHierarchy.parents[label] = []
    })

    let predicates = { } // IRI->{ uses: [shapeLabel], commonType: shapeExpr }
    Object.keys(schema.shapes).forEach(shapeLabel => {
      let shapeExpr = schema.shapes[shapeLabel]
      if (shapeExpr.type === 'Shape') {
        let tcs = _ShExUtil.simpleTripleConstraints(shapeExpr) || []
        tcs.forEach(tc => {
          let newType = _ShExUtil.getValueType(tc.valueExpr)
          if (!(tc.predicate in predicates)) {
            predicates[tc.predicate] = {
              uses: [shapeLabel],
              commonType: newType,
              polymorphic: false
            }
            if (typeof newType === 'object') {
              untyped[tc.predicate] = {
                shapeLabel,
                predicate: tc.predicate,
                newType,
                references: []
              }
            }
          } else {
            predicates[tc.predicate].uses.push(shapeLabel)
            let curType = predicates[tc.predicate].commonType
            if (typeof curType === 'object' || curType === null) {
              // another use of a predicate with no commonType
              // console.warn(`${shapeLabel} ${tc.predicate}:${newType} uses untypable predicate`)
              untyped[tc.predicate].references.push({ shapeLabel, newType })
            } else if (typeof newType === 'object') {
              // first use of a predicate with no detectable commonType
              predicates[tc.predicate].commonType = null
              untyped[tc.predicate] = {
                shapeLabel,
                predicate: tc.predicate,
                curType,
                newType,
                references: []
              }
            } else if (curType === newType) {
              ; // same type again
            } else if (shapeHierarchy.parents[curType] && shapeHierarchy.parents[curType].indexOf(newType) !== -1) {
              predicates[tc.predicate].polymorphic = true; // already covered by current commonType
            } else {
              let idx = shapeHierarchy.parents[newType] ? shapeHierarchy.parents[newType].indexOf(curType) : -1
              if (idx === -1) {
                let intersection = shapeHierarchy.parents[curType]
                    ? shapeHierarchy.parents[curType].filter(
                      lab => -1 !== shapeHierarchy.parents[newType].indexOf(lab)
                    )
                    : []
                if (intersection.length === 0) {
                  untyped[tc.predicate] = {
                    shapeLabel,
                    predicate: tc.predicate,
                    curType,
                    newType,
                    references: []
                  }
                  // console.warn(`${shapeLabel} ${tc.predicate} : ${newType} isn\'t related to ${curType}`)
                  predicates[tc.predicate].commonType = null
                } else {
                  predicates[tc.predicate].commonType = intersection[0]
                  predicates[tc.predicate].polymorphic = true
                }
              } else {
                predicates[tc.predicate].commonType = shapeHierarchy.parents[newType][idx]
                predicates[tc.predicate].polymorphic = true
              }
            }
          }
        })
      }
    })
    return predicates
  },

  /** @@TODO tests
   *
   */
  simpleTripleConstraints: function (shape) {
    if (!('expression' in shape)) {
      return []
    }
    if (shape.expression.type === 'TripleConstraint') {
      return [ shape.expression ]
    }
    if (shape.expression.type === 'EachOf' &&
        !(shape.expression.expressions.find(
          expr => expr.type !== 'TripleConstraint'
        ))) {
          return shape.expression.expressions
        }
    throw Error('can\'t (yet) express ' + JSON.stringify(shape))
  },

  getValueType: function (valueExpr) {
    if (typeof valueExpr === 'string') { return valueExpr }
    if (valueExpr.reference) { return valueExpr.reference }
    if (valueExpr.nodeKind === 'iri') { return OWL.Thing } // !! push this test to callers
    if (valueExpr.datatype) { return valueExpr.datatype }
    // if (valueExpr.extends && valueExpr.extends.length === 1) { return valueExpr.extends[0] }
    return valueExpr // throw Error('no value type for ' + JSON.stringify(valueExpr))
  },

  /** getDependencies: find which shappes depend on other shapes by inheritance
   * or inclusion.
   * TODO: rewrite in terms of Visitor.
   */
  getDependencies: function (schema, ret) {
    ret = ret || this.BiDiClosure();
    (schema.shapes || []).forEach(function (shape) {
      function _walkShapeExpression (shapeExpr, negated) {
        if (typeof shapeExpr === "string") { // ShapeRef
          ret.add(shape.id, shapeExpr);
        } else if (shapeExpr.type === "ShapeOr" || shapeExpr.type === "ShapeAnd") {
          shapeExpr.shapeExprs.forEach(function (expr) {
            _walkShapeExpression(expr, negated);
          });
        } else if (shapeExpr.type === "ShapeNot") {
          _walkShapeExpression(shapeExpr.shapeExpr, negated ^ 1); // !!! test negation
        } else if (shapeExpr.type === "Shape") {
          _walkShape(shapeExpr, negated);
        } else if (shapeExpr.type === "NodeConstraint") {
          // no impact on dependencies
        } else if (shapeExpr.type === "ShapeExternal") {
        } else
          throw Error("expected Shape{And,Or,Ref,External} or NodeConstraint in " + JSON.stringify(shapeExpr));
      }
      
      function _walkShape (shape, negated) {
        function _walkTripleExpression (tripleExpr, negated) {
          function _exprGroup (exprs, negated) {
            exprs.forEach(function (nested) {
              _walkTripleExpression(nested, negated) // ?? negation allowed?
            });
          }

          function _walkTripleConstraint (tc, negated) {
            if (tc.valueExpr)
              _walkShapeExpression(tc.valueExpr, negated);
            if (negated && ret.inCycle.indexOf(shape.id) !== -1) // illDefined/negatedRefCycle.err
              throw Error("Structural error: " + shape.id + " appears in negated cycle");
          }

          if (typeof tripleExpr === "string") { // Inclusion
            ret.add(shape.id, tripleExpr);
          } else {
            if ("id" in tripleExpr)
              ret.addIn(tripleExpr.id, shape.id)
            if (tripleExpr.type === "TripleConstraint") {
              _walkTripleConstraint(tripleExpr, negated);
            } else if (tripleExpr.type === "OneOf" || tripleExpr.type === "EachOf") {
              _exprGroup(tripleExpr.expressions);
            } else {
              throw Error("expected {TripleConstraint,OneOf,EachOf,Inclusion} in " + tripleExpr);
            }
          }
        }

        if (shape.expression)
          _walkTripleExpression(shape.expression, negated);
      }
      _walkShapeExpression(shape, 0); // 0 means false for bitwise XOR
    });
    return ret;
  },

  /** partition: create subset of a schema with only desired shapes and
   * their dependencies.
   *
   * @schema: input schema
   * @partition: shape name or array of desired shape names
   * @deps: (optional) dependency tree from getDependencies.
   *        map(shapeLabel -> [shapeLabel])
   */
  partition: function (schema, includes, deps, cantFind) {
    const inputIndex = schema._index || this.index(schema)
    const outputIndex = { shapeExprs: new Map(), tripleExprs: new Map() };
    includes = includes instanceof Array ? includes : [includes];

    // build dependency tree if not passed one
    deps = deps || this.getDependencies(schema);
    cantFind = cantFind || function (what, why) {
      throw new Error("Error: can't find shape " +
                      (why ?
                       why + " dependency " + what :
                       what));
    };
    const partition = {};
    for (let k in schema)
      partition[k] = k === "shapes" ? [] : schema[k];
    includes.forEach(function (i) {
      if (i in outputIndex.shapeExprs) {
        // already got it.
      } else if (i in inputIndex.shapeExprs) {
        const adding = inputIndex.shapeExprs[i];
        partition.shapes.push(adding);
        outputIndex.shapeExprs[adding.id] = adding;
        if (i in deps.needs)
          deps.needs[i].forEach(function (n) {
            // Turn any needed TE into an SE.
            if (n in deps.foundIn)
              n = deps.foundIn[n];

            if (n in outputIndex.shapeExprs) {
            } else if (n in inputIndex.shapeExprs) {
              const needed = inputIndex.shapeExprs[n];
              partition.shapes.push(needed);
              outputIndex.shapeExprs[needed.id] = needed;
            } else
              cantFind(n, i);
          });
      } else {
        cantFind(i, "supplied");
      }
    });
    return partition;
  },


  /** @@TODO flatten: return copy of input schema with all shape and value class
   * references substituted by a copy of their referent.
   *
   * @schema: input schema
   */
  flatten: function (schema, deps, cantFind) {
    const v = this.Visitor();
    return v.visitSchema(schema);
  },

  // @@ put predicateUsage here

  emptySchema: function () {
    return {
      type: "Schema"
    };
  },
  merge: function (left, right, overwrite, inPlace) {
    const ret = inPlace ? left : this.emptySchema();

    function mergeArray (attr) {
      Object.keys(left[attr] || {}).forEach(function (key) {
        if (!(attr in ret))
          ret[attr] = {};
        ret[attr][key] = left[attr][key];
      });
      Object.keys(right[attr] || {}).forEach(function (key) {
        if (!(attr  in left) || !(key in left[attr]) || overwrite) {
          if (!(attr in ret))
            ret[attr] = {};
          ret[attr][key] = right[attr][key];
        }
      });
    }

    function mergeMap (attr) {
      (left[attr] || new Map()).forEach(function (value, key, map) {
        if (!(attr in ret))
          ret[attr] = new Map();
        ret[attr].set(key, left[attr].get(key));
      });
      (right[attr] || new Map()).forEach(function (value, key, map) {
        if (!(attr  in left) || !(left[attr].has(key)) || overwrite) {
          if (!(attr in ret))
            ret[attr] = new Map();
          ret[attr].set(key, right[attr].get(key));
        }
      });
    }

    // base
    if ("_base" in left)
      ret._base = left._base;
    if ("_base" in right)
      if (!("_base" in left) || overwrite)
        ret._base = right._base;

    mergeArray("_prefixes");

    mergeMap("_sourceMap");

    if ("imports" in right)
      if (!("imports" in left) || overwrite)
        ret.imports = right.imports;

    // startActs
    if ("startActs" in left)
      ret.startActs = left.startActs;
    if ("startActs" in right)
      if (!("startActs" in left) || overwrite)
        ret.startActs = right.startActs;

    // start
    if ("start" in left)
      ret.start = left.start;
    if ("start" in right)
      if (!("start" in left) || overwrite)
        ret.start = right.start;

    let lindex = left._index || this.index(left);

    // shapes
    if (!inPlace)
      (left.shapes || []).forEach(function (lshape) {
        if (!("shapes" in ret))
          ret.shapes = [];
        ret.shapes.push(lshape);
      });
    (right.shapes || []).forEach(function (rshape) {
      if (!("shapes"  in left) || !(rshape.id in lindex.shapeExprs) || overwrite) {
        if (!("shapes" in ret))
          ret.shapes = [];
        ret.shapes.push(rshape)
      }
    });

    if (left._index || right._index)
      ret._index = this.index(ret); // inefficient; could build above

    return ret;
  },

  absolutizeResults: function (parsed, base) {
    // !! duplicate of Validation-test.js:84: const referenceResult = parseJSONFile(resultsFile...)
    function mapFunction (k, obj) {
      // resolve relative URLs in results file
      if (["shape", "reference", "node", "subject", "predicate", "object"].indexOf(k) !== -1 &&
          ShExTerm.isIRI(obj[k])) {
        obj[k] = ShExTerm.resolveRelativeIRI(base, obj[k]);
      }}

    function resolveRelativeURLs (obj) {
      Object.keys(obj).forEach(function (k) {
        if (typeof obj[k] === "object") {
          resolveRelativeURLs(obj[k]);
        }
        if (mapFunction) {
          mapFunction(k, obj);
        }
      });
    }
    resolveRelativeURLs(parsed);
    return parsed;
  },

  getProofGraph: function (res, db, dataFactory) {
    function _dive1 (solns) {
      if (solns.type === "NodeConstraintTest") {
      } else if (solns.type === "SolutionList" ||
          solns.type === "ShapeAndResults") {
        solns.solutions.forEach(s => {
          if (s.solution) // no .solution for <S> {}
            _dive1(s.solution);
        });
      } else if (solns.type === "ShapeOrResults") {
        _dive1(solns.solution);
      } else if (solns.type === "ShapeTest") {
        if ("solution" in solns)
          _dive1(solns.solution);
      } else if (solns.type === "OneOfSolutions" ||
                 solns.type === "EachOfSolutions") {
        solns.solutions.forEach(s => {
          _dive1(s);
        });
      } else if (solns.type === "OneOfSolution" ||
                 solns.type === "EachOfSolution") {
        solns.expressions.forEach(s => {
          _dive1(s);
        });
      } else if (solns.type === "TripleConstraintSolutions") {
        solns.solutions.map(s => {
          if (s.type !== "TestedTriple")
            throw Error("unexpected result type: " + s.type);
          const s2 = s;
          if (typeof s2.object === "object")
            s2.object = "\"" + s2.object.value.replace(/"/g, "\\\"") + "\""
            + (s2.object.language ? ("@" + s2.object.language) : 
               s2.object.type ? ("^^" + s2.object.type) :
               "");
          db.addQuad(ShExTerm.externalTriple(s2, dataFactory))
          if ("referenced" in s) {
            _dive1(s.referenced);
          }
        });
      } else {
        throw Error("unexpected expr type "+solns.type+" in " + JSON.stringify(solns));
      }
    }
    _dive1(res);
    return db;
  },

  validateSchema: function (schema) { // obselete, but may need other validations in the future.
    const _ShExUtil = this;
    const visitor = this.Visitor();
    let currentLabel = currentExtra = null;
    let currentNegated = false;
    const dependsOn = { };
    let inTE = false;
    const oldVisitShape = visitor.visitShape;
    const negativeDeps = Hierarchy.create();
    const positiveDeps = Hierarchy.create();
    let index = schema.index || this.index(schema);

    visitor.visitShape = function (shape, label) {
      const lastExtra = currentExtra;
      currentExtra = shape.extra;
      const ret = oldVisitShape.call(visitor, shape, label);
      currentExtra = lastExtra;
      return ret;
    }

    const oldVisitShapeNot = visitor.visitShapeNot;
    visitor.visitShapeNot = function (shapeNot, label) {
      const lastNegated = currentNegated;
      currentNegated ^= true;
      const ret = oldVisitShapeNot.call(visitor, shapeNot, label);
      currentNegated = lastNegated;
      return ret;
    }

    const oldVisitTripleConstraint = visitor.visitTripleConstraint;
    visitor.visitTripleConstraint = function (expr) {
      const lastNegated = currentNegated;
      if (currentExtra && currentExtra.indexOf(expr.predicate) !== -1)
        currentNegated ^= true;
      inTE = true;
      const ret = oldVisitTripleConstraint.call(visitor, expr);
      inTE = false;
      currentNegated = lastNegated;
      return ret;
    };

    const oldVisitShapeRef = visitor.visitShapeRef;
    visitor.visitShapeRef = function (shapeRef) {
      if (!(shapeRef in index.shapeExprs))
        throw firstError(Error("Structural error: reference to " + JSON.stringify(shapeRef) + " not found in schema shape expressions:\n" + dumpKeys(index.shapeExprs) + "."), shapeRef);
      if (!inTE && shapeRef === currentLabel)
        throw firstError(Error("Structural error: circular reference to " + currentLabel + "."), shapeRef);
      (currentNegated ? negativeDeps : positiveDeps).add(currentLabel, shapeRef)
      return oldVisitShapeRef.call(visitor, shapeRef);
    }

    const oldVisitInclusion = visitor.visitInclusion;
    visitor.visitInclusion = function (inclusion) {
      let refd;
      if (!(refd = index.tripleExprs[inclusion]))
        throw firstError(Error("Structural error: included shape " + inclusion + " not found in schema triple expressions:\n" + dumpKeys(index.tripleExprs) + "."), inclusion);
      // if (refd.type !== "Shape")
      //   throw Error("Structural error: " + inclusion + " is not a simple shape.");
      return oldVisitInclusion.call(visitor, inclusion);
    };

    (schema.shapes || []).forEach(function (shape) {
      currentLabel = shape.id;
      visitor.visitShapeExpr(shape, shape.id);
    });
    let circs = Object.keys(negativeDeps.children).filter(
      k => negativeDeps.children[k].filter(
        k2 => k2 in negativeDeps.children && negativeDeps.children[k2].indexOf(k) !== -1
          || k2 in positiveDeps.children && positiveDeps.children[k2].indexOf(k) !== -1
      ).length > 0
    );
    if (circs.length)
      throw firstError(Error("Structural error: circular negative dependencies on " + circs.join(',') + "."), circs[0]);

    function dumpKeys (obj) {
      return obj ? Object.keys(obj).map(
        u => u.substr(0, 2) === '_:' ? u : '<' + u + '>'
      ).join("\n        ") : '- none defined -'
    }

    function firstError (e, obj) {
      if ("_sourceMap" in schema)
        e.location = (schema._sourceMap.get(obj) || [undefined])[0];
      return e;
    }
  },

  /** isWellDefined: assert that schema is well-defined.
   *
   * @schema: input schema
   * @@TODO
   */
  isWellDefined: function (schema) {
    this.validateSchema(schema);
    // const deps = this.getDependencies(schema);
    return schema;
  },

  walkVal: function (val, cb) {
    const _ShExUtil = this;
    if (typeof val === "string") { // ShapeRef
      return null; // 1NOTRefOR1dot_pass-inOR
    } else if (val.type === "SolutionList") { // dependent_shape
      return val.solutions.reduce((ret, exp) => {
        const n = _ShExUtil.walkVal(exp, cb);
        if (n)
          Object.keys(n).forEach(k => {
            if (k in ret)
              ret[k] = ret[k].concat(n[k]);
            else
              ret[k] = n[k];
          })
        return ret;
      }, {});
    } else if (val.type === "NodeConstraintTest") { // 1iri_pass-iri
      return _ShExUtil.walkVal(val.shapeExpr, cb);
    } else if (val.type === "NodeConstraint") { // 1iri_pass-iri
      return null;
    } else if (val.type === "ShapeTest") { // 0_empty
      return "solution" in val ? _ShExUtil.walkVal(val.solution, cb) : null;
    } else if (val.type === "Shape") { // 1NOTNOTdot_passIv1
      return null;
    } else if (val.type === "ShapeNotTest") { // 1NOT_vsANDvs__passIv1
      return _ShExUtil.walkVal(val.shapeExpr, cb);
    } else if (val.type === "ShapeNotResults") { // NOT1dotOR2dot_pass-empty
      return _ShExUtil.walkVal(val.solution, cb);
    } else if (val.type === "Failure") { // NOT1dotOR2dot_pass-empty
      return null; // !!TODO
    } else if (val.type === "ShapeNot") { // 1NOTNOTIRI_passIo1,
      return _ShExUtil.walkVal(val.shapeExpr, cb);
    } else if (val.type === "ShapeOrResults") { // 1dotRefOR3_passShape1
      return _ShExUtil.walkVal(val.solution, cb);
    } else if (val.type === "ShapeOr") { // 1NOT_literalORvs__passIo1
      return val.shapeExprs.reduce((ret, exp) => {
        const n = _ShExUtil.walkVal(exp, cb);
        if (n)
          Object.keys(n).forEach(k => {
            if (k in ret)
              ret[k] = ret[k].concat(n[k]);
            else
              ret[k] = n[k];
          })
        return ret;
      }, {});
    } else if (val.type === "ShapeAndResults") { // 1iriRef1_pass-iri
      return val.solutions.reduce((ret, exp) => {
        const n = _ShExUtil.walkVal(exp, cb);
        if (n)
          Object.keys(n).forEach(k => {
            if (k in ret)
              ret[k] = ret[k].concat(n[k]);
            else
              ret[k] = n[k];
          })
        return ret;
      }, {});
    } else if (val.type === "ShapeAnd") { // 1NOT_literalANDvs__passIv1
      return val.shapeExprs.reduce((ret, exp) => {
        const n = _ShExUtil.walkVal(exp, cb);
        if (n)
          Object.keys(n).forEach(k => {
            if (k in ret)
              ret[k] = ret[k].concat(n[k]);
            else
              ret[k] = n[k];
          })
        return ret;
      }, {});
    } else if (val.type === "EachOfSolutions" || val.type === "OneOfSolutions") {
      // 1dotOne2dot_pass_p1
      return val.solutions.reduce((ret, sln) => {
        sln.expressions.forEach(exp => {
          const n = _ShExUtil.walkVal(exp, cb);
          if (n)
            Object.keys(n).forEach(k => {
              if (k in ret)
                ret[k] = ret[k].concat(n[k]);
              else
                ret[k] = n[k];
            })
        });
        return ret;
      }, {});
    } else if (val.type === "TripleConstraintSolutions") { // 1dot_pass-noOthers
      if ("solutions" in val) {
        const ret = {};
        const vals = [];
        ret[val.predicate] = vals;
        val.solutions.forEach(sln => {
          const toAdd = [];
          if (chaseList(sln.referenced, toAdd)) { // parse 1val1IRIREF.ttl
            [].push.apply(vals, toAdd);
          } else { // 1dot_pass-noOthers
            const newElt = cb(sln);
            if ("referenced" in sln) {
              const t = _ShExUtil.walkVal(sln.referenced, cb);
              if (t)
                newElt.nested = t;
            }
            vals.push(newElt);
          }
          function chaseList (li) {
            if (!li) return false;
            if (li.node === RDF.nil) return true;
            if ("solution" in li && "solutions" in li.solution &&
                li.solution.solutions.length === 1 &&
                "expressions" in li.solution.solutions[0] &&
                li.solution.solutions[0].expressions.length === 2 &&
                "predicate" in li.solution.solutions[0].expressions[0] &&
                li.solution.solutions[0].expressions[0].predicate === RDF.first &&
                li.solution.solutions[0].expressions[1].predicate === RDF.rest) {
              const expressions = li.solution.solutions[0].expressions;
              const ent = expressions[0];
              const rest = expressions[1].solutions[0];
              const member = ent.solutions[0];
              const newElt = cb(member);
              if ("referenced" in member) {
                const t = _ShExUtil.walkVal(member.referenced, cb);
                if (t)
                  newElt.nested = t;
              }
              vals.push(newElt);
              return rest.object === RDF.nil ?
                true :
                chaseList(rest.referenced.type === "ShapeOrResults" // heuristic for `nil  OR @<list>` idiom
                          ? rest.referenced.solution
                          : rest.referenced);
            }
          }
        });
        return vals.length ? ret : null;
      } else {
        return null;
      }
    } else if (val.type === "Recursion") { // 3circRefPlus1_pass-recursiveData
      return null;
    } else {
      // console.log(val);
      throw Error("unknown shapeExpression type in " + JSON.stringify(val));
    }
    return val;
  },

  /**
   * Convert val results to a property tree.
   * @exports
   * @returns {@code {p1:[{p2: v2},{p3: v3}]}}
   */
  valToValues: function (val) {
    return this.walkVal (val, function (sln) {
      return { ldterm: sln.object };
    });
  },

  valToExtension: function (val, lookfor) {
    const map = this.walkVal (val, function (sln) {
      return { extensions: sln.extensions };
    });
    function extensions (obj) {
      const list = [];
      let crushed = {};
      function crush (elt) {
        if (crushed === null)
          return elt;
        if (elt.constructor === Array) {
          crushed = null;
          return elt;
        }
        for (k in elt) {
          if (k in crushed) {
            crushed = null
            return elt;
          }
          crushed[k] = ldify(elt[k]);
        }
        return elt;
      }
      for (let k in obj) {
        if (k === "extensions") {
          if (obj[k])
            list.push(crush(ldify(obj[k][lookfor])));
        } else if (k === "nested") {
          const nested = extensions(obj[k]);
          if (nested.constructor === Array)
            nested.forEach(crush);
          else
            crush(nested);
          list.push(nested);
        } else {
          list.push(crush(extensions(obj[k])));
        }
      }
      return list.length === 1 ? list[0] :
        crushed ? crushed :
        list;
    }
    return extensions(map);
  },

  valuesToSchema: function (values) {
    // console.log(JSON.stringify(values, null, "  "));
    const v = values;
    const t = values[RDF.type][0].ldterm;
    if (t === SX.Schema) {
      /* Schema { "@context":"http://www.w3.org/ns/shex.jsonld"
       *           startActs:[SemAct+]? start:(shapeExpr|labeledShapeExpr)?
       *           shapes:[labeledShapeExpr+]? }
       */
      const ret = {
        "@context": "http://www.w3.org/ns/shex.jsonld",
        type: "Schema"
      }
      if (SX.startActs in v)
        ret.startActs = v[SX.startActs].map(e => {
          const ret = {
            type: "SemAct",
            name: e.nested[SX.name][0].ldterm
          };
          if (SX.code in e.nested)
            ret.code = e.nested[SX.code][0].ldterm.value;
          return ret;
        });
      if (SX.imports in v)
        ret.imports = v[SX.imports].map(e => {
          return e.ldterm;
        });
      if (values[SX.start])
        ret.start = extend({id: values[SX.start][0].ldterm}, shapeExpr(values[SX.start][0].nested));
      const shapes = values[SX.shapes];
      if (shapes) {
        ret.shapes = shapes.map(v => {
          return extend({id: v.ldterm}, shapeExpr(v.nested));
        });
      }
      // console.log(ret);
      return ret;
    } else {
      throw Error("unknown schema type in " + JSON.stringify(values));
    }
    function findType (v, elts, f) {
      const t = v[RDF.type][0].ldterm.substr(SX._namespace.length);
      const elt = elts[t];
      if (!elt)
        return Missed;
      if (elt.nary) {
        const ret = {
          type: t,
        };
        ret[elt.prop] = v[SX[elt.prop]].map(e => {
          return valueOf(e);
        });
        return ret;
      } else {
        const ret = {
          type: t
        };
        if (elt.prop) {
          ret[elt.prop] = valueOf(v[SX[elt.prop]][0]);
        }
        return ret;
      }

      function valueOf (x) {
        return elt.expr && "nested" in x ? extend({ id: x.ldterm, }, f(x.nested)) : x.ldterm;
      }
    }
    function shapeExpr (v) {
      // shapeExpr = ShapeOr | ShapeAnd | ShapeNot | NodeConstraint | Shape | ShapeRef | ShapeExternal;
      const elts = { "ShapeAnd"     : { nary: true , expr: true , prop: "shapeExprs" },
                   "ShapeOr"      : { nary: true , expr: true , prop: "shapeExprs" },
                   "ShapeNot"     : { nary: false, expr: true , prop: "shapeExpr"  },
                   "ShapeRef"     : { nary: false, expr: false, prop: "reference"  },
                   "ShapeExternal": { nary: false, expr: false, prop: null         } };
      const ret = findType(v, elts, shapeExpr);
      if (ret !== Missed)
        return ret;

      const t = v[RDF.type][0].ldterm;
      if (t === SX.Shape) {
        const ret = { type: "Shape" };
        ["closed"].forEach(a => {
          if (SX[a] in v)
            ret[a] = !!v[SX[a]][0].ldterm.value;
        });
        if (SX.extra in v)
          ret.extra = v[SX.extra].map(e => { return e.ldterm; });
        if (SX.expression in v) {
          ret.expression =
            "nested" in v[SX.expression][0] ?
            extend({id: v[SX.expression][0].ldterm}, tripleExpr(v[SX.expression][0].nested)) :
            v[SX.expression][0].ldterm;
        }
        if (SX.annotation in v)
          ret.annotations = v[SX.annotation].map(e => {
            return {
              type: "Annotation",
              predicate: e.nested[SX.predicate][0].ldterm,
              object: e.nested[SX.object][0].ldterm
            };
          });
        if (SX.semActs in v)
          ret.semActs = v[SX.semActs].map(e => {
            const ret = {
              type: "SemAct",
              name: e.nested[SX.name][0].ldterm
            };
            if (SX.code in e.nested)
              ret.code = e.nested[SX.code][0].ldterm.value;
            return ret;
          });
        return ret;
      } else if (t === SX.NodeConstraint) {
        const ret = { type: "NodeConstraint" };
        if (SX.values in v)
          ret.values = v[SX.values].map(v1 => { return objectValue(v1); });
        if (SX.nodeKind in v)
          ret.nodeKind = v[SX.nodeKind][0].ldterm.substr(SX._namespace.length);
        ["length", "minlength", "maxlength", "mininclusive", "maxinclusive", "minexclusive", "maxexclusive", "totaldigits", "fractiondigits"].forEach(a => {
          if (SX[a] in v)
            ret[a] = parseFloat(v[SX[a]][0].ldterm.value);
        });
        if (SX.pattern in v)
          ret.pattern = v[SX.pattern][0].ldterm.value;
        if (SX.flags in v)
          ret.flags = v[SX.flags][0].ldterm.value;
        if (SX.datatype in v)
          ret.datatype = v[SX.datatype][0].ldterm;
        return ret;
      } else {
        throw Error("unknown shapeExpr type in " + JSON.stringify(v));
      }

    }

    function objectValue (v, expectString) {
      if ("nested" in v) {
        const t = v.nested[RDF.type][0].ldterm;
        if ([SX.IriStem, SX.LiteralStem, SX.LanguageStem].indexOf(t) !== -1) {
          const ldterm = v.nested[SX.stem][0].ldterm.value;
          return {
            type: t.substr(SX._namespace.length),
            stem: ldterm
          };
        } else if ([SX.Language].indexOf(t) !== -1) {
          return {
            type: "Language",
            languageTag: v.nested[SX.languageTag][0].ldterm.value
          };
        } else if ([SX.IriStemRange, SX.LiteralStemRange, SX.LanguageStemRange].indexOf(t) !== -1) {
          const st = v.nested[SX.stem][0];
          let stem = st;
          if (typeof st === "object") {
            if (typeof st.ldterm === "object") {
              stem = st.ldterm;
            } else if (st.ldterm.startsWith("_:")) {
              stem = { type: "Wildcard" };
            }
          }
          const ret = {
            type: t.substr(SX._namespace.length),
            stem: stem.type !== "Wildcard" ? stem.value : stem
          };
          if (SX.exclusion in v.nested) {
            // IriStemRange:
            // * [{"ldterm":"http://a.example/v1"},{"ldterm":"http://a.example/v3"}] <-- no value
            // * [{"ldterm":"_:b836","nested":{a:[{"ldterm":sx:IriStem}],
            //                                 sx:stem:[{"ldterm":{"value":"http://a.example/v1"}}]}},
            //    {"ldterm":"_:b838","nested":{a:[{"ldterm":sx:IriStem}],
            //                                 sx:stem:[{"ldterm":{"value":"http://a.example/v3"}}]}}]

            // LiteralStemRange:
            // * [{"ldterm":{"value":"v1"}},{"ldterm":{"value":"v3"}}]
            // * [{"ldterm":"_:b866","nested":{a:[{"ldterm":sx:LiteralStem}],
            //                                 sx:stem:[{"ldterm":{"value":"v1"}}]}},
            //    {"ldterm":"_:b868","nested":{a:[{"ldterm":sx:LiteralStem}],
            //                                 sx:stem:[{"ldterm":{"value":"v3"}}]}}]

            // LanguageStemRange:
            // * [{"ldterm":{"value":"fr-be"}},{"ldterm":{"value":"fr-ch"}}]
            // * [{"ldterm":"_:b851","nested":{a:[{"ldterm":sx:LanguageStem}],
            //                                 sx:stem:[{"ldterm":{"value":"fr-be"}}]}},
            //    {"ldterm":"_:b853","nested":{a:[{"ldterm":sx:LanguageStem}],
            //                                 sx:stem:[{"ldterm":{"value":"fr-ch"}}]}}]
            ret.exclusions = v.nested[SX.exclusion].map(v1 => {
              return objectValue(v1, t !== SX.IriStemRange);
            });
          }
          return ret;
        } else {
          throw Error("unknown objectValue type in " + JSON.stringify(v));
        }
      } else {
        return expectString ? v.ldterm.value : v.ldterm;
      }
    }

    function tripleExpr (v) {
      // tripleExpr = EachOf | OneOf | TripleConstraint | Inclusion ;
      const elts = { "EachOf"   : { nary: true , expr: true , prop: "expressions" },
                   "OneOf"    : { nary: true , expr: true , prop: "expressions" },
                   "Inclusion": { nary: false, expr: false, prop: "include"     } };
      const ret = findType(v, elts, tripleExpr);
      if (ret !== Missed) {
        minMaxAnnotSemActs(v, ret);
        return ret;
      }

      const t = v[RDF.type][0].ldterm;
      if (t === SX.TripleConstraint) {
        const ret = {
          type: "TripleConstraint",
          predicate: v[SX.predicate][0].ldterm
        };
        ["inverse"].forEach(a => {
          if (SX[a] in v)
            ret[a] = !!v[SX[a]][0].ldterm.value;
        });
        if (SX.valueExpr in v)
          ret.valueExpr = extend({id: v[SX.valueExpr][0].ldterm}, "nested" in v[SX.valueExpr][0] ? shapeExpr(v[SX.valueExpr][0].nested) : {});
        minMaxAnnotSemActs(v, ret);
        return ret;
      } else {
        throw Error("unknown tripleExpr type in " + JSON.stringify(v));
      }
    }
    function minMaxAnnotSemActs (v, ret) {
      if (SX.min in v)
        ret.min = parseInt(v[SX.min][0].ldterm.value);
      if (SX.max in v) {
        ret.max = parseInt(v[SX.max][0].ldterm.value);
        if (isNaN(ret.max))
          ret.max = UNBOUNDED;
      }
      if (SX.annotation in v)
        ret.annotations = v[SX.annotation].map(e => {
          return {
            type: "Annotation",
            predicate: e.nested[SX.predicate][0].ldterm,
            object: e.nested[SX.object][0].ldterm
          };
        });
      if (SX.semActs in v)
        ret.semActs = v[SX.semActs].map(e => {
          const ret = {
            type: "SemAct",
            name: e.nested[SX.name][0].ldterm
          };
          if (SX.code in e.nested)
            ret.code = e.nested[SX.code][0].ldterm.value;
          return ret;
        });
      return ret;
    }
  },
/* -- deprecated
  valToSimple: function (val) {
    const _ShExUtil = this;
    function _join (list) {
      return list.reduce((ret, elt) => {
        Object.keys(elt).forEach(k => {
          if (k in ret) {
            ret[k] = Array.from(new Set(ret[k].concat(elt[k])));
          } else {
            ret[k] = elt[k];
          }
        });
        return ret;
      }, {});
    }
    if (typeof val === "string") {
      return val
    } else if (val.type === "TripleConstraintSolutions") {
      if ("solutions" in val) {
        return val.solutions.reduce((ret, sln) => {
          if (!("referenced" in sln))
            return {};
          const toAdd = {};
          if (chaseList(sln.referenced, toAdd)) {
            return _join(ret, toAdd);
          } else {
            return _join(ret, _ShExUtil.valToSimple(sln.referenced));
          }
          function chaseList (li) {
            if (!li) return false;
            if (li.node === RDF.nil) return true;
            if ("solution" in li && "solutions" in li.solution &&
                li.solution.solutions.length === 1 &&
                "expressions" in li.solution.solutions[0] &&
                li.solution.solutions[0].expressions.length === 2 &&
                "predicate" in li.solution.solutions[0].expressions[0] &&
                li.solution.solutions[0].expressions[0].predicate === RDF.first &&
                li.solution.solutions[0].expressions[1].predicate === RDF.rest) {
              const expressions = li.solution.solutions[0].expressions;
              const ent = expressions[0];
              const rest = expressions[1].solutions[0];
              const member = ent.solutions[0];
              const newElt = { ldterm: member.object };
              if ("referenced" in member) {
                const t = _ShExUtil.valToSimple(member.referenced);
                if (t)
                  newElt.nested = t;
              }
              toAdd = _join(toAdd, newElt);
              return rest.object === RDF.nil ?
                true :
                chaseList(rest.referenced.type === "ShapeOrResults" // heuristic for `nil  OR @<list>` idiom
                          ? rest.referenced.solution
                          : rest.referenced);
            }
          }
        }, []);
      } else {
        return [];
      }
    } else if (["TripleConstraintSolutions"].indexOf(val.type) !== -1) {
      return {  };
    } else if (val.type === "NodeConstraintTest") {
      return _ShExUtil.valToSimple(val.shapeExpr);
    } else if (val.type === "NodeConstraint") {
      const thisNode = {  };
      thisNode[n3ify(val.focus)] = [val.shape];
      return thisNode;
    } else if (val.type === "ShapeTest") {
      const thisNode = {  };
      thisNode[n3ify(val.node)] = [val.shape];
      return "solution" in val ? _join([thisNode].concat(_ShExUtil.valToSimple(val.solution))) : thisNode;
    } else if (val.type === "Shape") {
      const thisNode = {  };
      thisNode[n3ify(val.node)] = [val.shape];
      return thisNode;
    } else if (val.type === "ShapeNotTest") {
      const thisNode = {  };
      thisNode[n3ify(val.node)] = [val.shape];
      return _join(['NOT1'].concat(_ShExUtil.valToSimple(val.shapeExpr)));
    } else if (val.type === "ShapeNot") {
      const thisNode = {  };
      thisNode[n3ify(val.node)] = [val.shape];
      return _join(['NOT'].concat(_ShExUtil.valToSimple(val.shapeExpr)));
    } else if (val.type === "ShapeAnd") {
      return val.shapeExprs.map(shapeExpr => _ShExUtil.valToSimple(shapeExpr)).join ('AND');
    } else if (val.type === "ShapeOr") {
      return val.shapeExprs.map(shapeExpr => _ShExUtil.valToSimple(shapeExpr)).join ('OR');
    } else if (val.type === "Failure") {
      return _ShExUtil.errsToSimple(val);
    } else if (val.type === "Recursion") {
      return {  };
    } else if ("solutions" in val) {
      // ["SolutionList", "EachOfSolutions", "OneOfSolutions", "ShapeAndResults", "ShapeOrResults"].indexOf(val.type) !== -1
      return _join(val.solutions.map(sln => {
        return _ShExUtil.valToSimple(sln);
      }));
    } else if ("solution" in val) {
      // ["SolutionList", "EachOfSolutions", "OneOfSolutions", "ShapeAndResults", "ShapeOrResults"].indexOf(val.type) !== -1
      return _ShExUtil.valToSimple(val.solution);
    } else if ("expressions" in val) {
      return _join(val.expressions.map(sln => {
        return _ShExUtil.valToSimple(sln);
      }));
    } else {
      // console.log(val);
      throw Error("unknown shapeExpression type in " + JSON.stringify(val));
    }
    return val;
  },
*/
  simpleToShapeMap: function (x) {
    return Object.keys(x).reduce((ret, k) => {
      x[k].forEach(s => {
        ret.push({node: k, shape: s });
      });
      return ret;
    }, []);
  },

  absolutizeShapeMap: function (parsed, base) {
    return parsed.map(elt => {
      return Object.assign(elt, {
        node: ShExTerm.resolveRelativeIRI(base, elt.node),
        shape: ShExTerm.resolveRelativeIRI(base, elt.shape)
      });
    });
  },

  errsToSimple: function (val) {
    const _ShExUtil = this;
    if (val.type === "FailureList") {
      return val.errors.reduce((ret, e) => {
        return ret.concat(_ShExUtil.errsToSimple(e));
      }, []);
    } else if (val.type === "Failure") {
      return ["validating " + val.node + " as " + val.shape + ":"].concat(errorList(val.errors).reduce((ret, e) => {
        const nested = _ShExUtil.errsToSimple(e).map(s => "  " + s);
        return ret.length > 0 ? ret.concat(["  OR"]).concat(nested) : nested.map(s => "  " + s);
      }, []));
    } else if (val.type === "TypeMismatch") {
      const nested = val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
      return ["validating " + n3ify(val.triple.object) + ":"].concat(nested);
    } else if (val.type === "ShapeAndFailure") {
      return val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
    } else if (val.type === "ShapeOrFailure") {
      return val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat(" OR " + (typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)));
          }, []) :
          " OR " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
    } else if (val.type === "ShapeNotFailure") {
      return ["Node " + val.errors.node + " expected to NOT pass " + val.errors.shape];
    } else if (val.type === "ExcessTripleViolation") {
      return ["validating " + n3ify(val.triple.object) + ": exceeds cardinality"];
    } else if (val.type === "ClosedShapeViolation") {
      return ["Unexpected triple(s): {"].concat(
        val.unexpectedTriples.map(t => {
          return "  " + t.subject + " " + t.predicate + " " + n3ify(t.object) + " ."
        })
      ).concat(["}"]);
    } else if (val.type === "NodeConstraintViolation") {
      const w = __webpack_require__(11)();
      w._write(w._writeNodeConstraint(val.shapeExpr).join(""));
      let txt;
      w.end((err, res) => {
        txt = res;
      });
      return ["NodeConstraintError: expected to match " + txt];
    } else if (val.type === "MissingProperty") {
      return ["Missing property: " + val.property];
    } else if (val.type === "NegatedProperty") {
      return ["Unexpected property: " + val.property];
    } else if (val.constructor === Array) {debugger;
      return val.reduce((ret, e) => {
        const nested = _ShExUtil.errsToSimple(e).map(s => "  " + s);
        return ret.length ? ret.concat(["AND"]).concat(nested) : nested;
      }, []);
    } else if (val.type === "SemActFailure") {
      const nested = val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
      return ["rejected by semantic action:"].concat(nested);
    } else if (val.type === "SemActViolation") {
      return [val.message];
    } else if (val.type === "BooleanSemActFailure") {
      return ["Failed evaluating " + val.code + " on context " + JSON.stringify(val.ctx)];
    } else {
      debugger; // console.log(val);
      throw Error("unknown shapeExpression type in " + JSON.stringify(val));
    }
    function errorList (errors) {
      return errors.reduce(function (acc, e) {
        const attrs = Object.keys(e);
        return acc.concat(
          (attrs.length === 1 && attrs[0] === "errors")
            ? errorList(e.errors)
            : e);
      }, []);
    }
  },

  resolveRelativeIRI: ShExTerm.resolveRelativeIRI,

  resolvePrefixedIRI: function (prefixedIri, prefixes) {
    const colon = prefixedIri.indexOf(":");
    if (colon === -1)
      return null;
    const prefix = prefixes[prefixedIri.substr(0, colon)];
    return prefix === undefined ? null : prefix + prefixedIri.substr(colon+1);
  },

  parsePassedNode: function (passedValue, meta, deflt, known, reportUnknown) {
    if (passedValue === undefined || passedValue.length === 0)
      return known && known(meta.base) ? meta.base : deflt ? deflt() : this.NotSupplied;
    if (passedValue[0] === "_" && passedValue[1] === ":")
      return passedValue;
    if (passedValue[0] === "\"") {
      const m = passedValue.match(/^"((?:[^"\\]|\\")*)"(?:@(.+)|\^\^(?:<(.*)>|([^:]*):(.*)))?$/);
      if (!m)
        throw Error("malformed literal: " + passedValue);
      const lex = m[1], lang = m[2], rel = m[3], pre = m[4], local = m[5];
      // Turn the literal into an N3.js atom.
      const quoted = "\""+lex+"\"";
      if (lang !== undefined)
        return quoted + "@" + lang;
      if (pre !== undefined) {
        if (!(pre in meta.prefixes))
          throw Error("error parsing node "+passedValue+" no prefix for \"" + pre + "\"");
        return quoted + "^^" + meta.prefixes[pre] + local;
      }
      if (rel !== undefined)
        return quoted + "^^" + ShExTerm.resolveRelativeIRI(meta.base, rel);
      return quoted;
    }
    if (!meta)
      return known(passedValue) ? passedValue : this.UnknownIRI;
    const relIRI = passedValue[0] === "<" && passedValue[passedValue.length-1] === ">";
    if (relIRI)
      passedValue = passedValue.substr(1, passedValue.length-2);
    const t = ShExTerm.resolveRelativeIRI(meta.base || "", passedValue); // fall back to base-less mode
    if (known(t))
      return t;
    if (!relIRI) {
      const t2 = this.resolvePrefixedIRI(passedValue, meta.prefixes);
      if (t2 !== null && known(t2))
        return t2;
    }
    return reportUnknown ? reportUnknown(t) : this.UnknownIRI;
  },

  executeQueryPromise: function (query, endpoint) {
    let rows;

    const queryURL = endpoint + "?query=" + encodeURIComponent(query);
    return fetch(queryURL, {
      headers: {
        'Accept': 'application/sparql-results+json'
      }}).then(resp => resp.json()).then(t => {
        const selects = t.head.vars;
        return t.results.bindings.map(row => {
          return selects.map(sel => {
            const elt = row[sel];
            switch (elt.type) {
            case "uri": return elt.value;
            case "bnode": return "_:" + elt.value;
            case "literal":
              const datatype = elt.datatype;
              const lang = elt["xml:lang"];
              return "\"" + elt.value + "\"" + (
                datatype ? "^^" + datatype :
                  lang ? "@" + lang :
                  "");
            default: throw "unknown XML results type: " + elt.prop("tagName");
            }
            return row[sel];
          })
        });
      })// .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));
  },

  executeQuery: function (query, endpoint) {
    let rows;
    const queryURL = endpoint + "?query=" + encodeURIComponent(query);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", queryURL, false);
    xhr.setRequestHeader('Accept', 'application/sparql-results+json');
    xhr.send();
    // const selectsBlock = query.match(/SELECT\s*(.*?)\s*{/)[1];
    // const selects = selectsBlock.match(/\?[^\s?]+/g);
    const t = JSON.parse(xhr.responseText);
    const selects = t.head.vars;
    return t.results.bindings.map(row => {
      return selects.map(sel => {
        const elt = row[sel];
        switch (elt.type) {
        case "uri": return elt.value;
        case "bnode": return "_:" + elt.value;
        case "literal":
          const datatype = elt.datatype;
          const lang = elt["xml:lang"];
          return "\"" + elt.value + "\"" + (
            datatype ? "^^" + datatype :
              lang ? "@" + lang :
              "");
        default: throw "unknown XML results type: " + elt.prop("tagName");
        }
        return row[sel];
      })
    });

/* TO ADD? XML results format parsed with jquery:
        $(data).find("sparql > results > result").
          each((_, row) => {
            rows.push($(row).find("binding > *:nth-child(1)").
              map((idx, elt) => {
                elt = $(elt);
                const text = elt.text();
                switch (elt.prop("tagName")) {
                case "uri": return text;
                case "bnode": return "_:" + text;
                case "literal":
                  const datatype = elt.attr("datatype");
                  const lang = elt.attr("xml:lang");
                  return "\"" + text + "\"" + (
                    datatype ? "^^" + datatype :
                    lang ? "@" + lang :
                      "");
                default: throw "unknown XML results type: " + elt.prop("tagName");
                }
              }).get());
          });
*/
  },

  rdfjsDB: function (db, queryTracker) {

    function getSubjects () { return db.getSubjects().map(ShExTerm.internalTerm); }
    function getPredicates () { return db.getPredicates().map(ShExTerm.internalTerm); }
    function getObjects () { return db.getObjects().map(ShExTerm.internalTerm); }
    function getQuads () { return db.getQuads.apply(db, arguments).map(ShExTerm.internalTriple); }

    function getNeighborhood (point, shapeLabel/*, shape */) {
      // I'm guessing a local DB doesn't benefit from shape optimization.
      let startTime;
      if (queryTracker) {
        startTime = new Date();
        queryTracker.start(false, point, shapeLabel);
      }
      const outgoing = db.getQuads(point, null, null, null).map(ShExTerm.internalTriple);
      if (queryTracker) {
        const time = new Date();
        queryTracker.end(outgoing, time - startTime);
        startTime = time;
      }
      if (queryTracker) {
        queryTracker.start(true, point, shapeLabel);
      }
      const incoming = db.getQuads(null, null, point, null).map(ShExTerm.internalTriple);
      if (queryTracker) {
        queryTracker.end(incoming, new Date() - startTime);
      }
      return {
        outgoing: outgoing,
        incoming: incoming
      };
    }

    return {
      // size: db.size,
      getNeighborhood: getNeighborhood,
      getSubjects: getSubjects,
      getPredicates: getPredicates,
      getObjects: getObjects,
      getQuads: getQuads,
      get size() { return db.size; },
      // getQuads: function (s, p, o, graph, shapeLabel) {
      //   // console.log(Error(s + p + o).stack)
      //   if (queryTracker)
      //     queryTracker.start(!!s, s ? s : o, shapeLabel);
      //   const quads = db.getQuads(s, p, o, graph)
      //   if (queryTracker)
      //     queryTracker.end(quads, new Date() - startTime);
      //   return quads;
      // }
    }
  },

  NotSupplied: "-- not supplied --", UnknownIRI: "-- not found --",

  /**
   * unescape numerics and allowed single-character escapes.
   * throws: if there are any unallowed sequences
   */
  unescapeText: function (string, replacements) {
    const regex = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g;
    try {
      string = string.replace(regex, function (sequence, unicode4, unicode8, escapedChar) {
        let charCode;
        if (unicode4) {
          charCode = parseInt(unicode4, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          return String.fromCharCode(charCode);
        }
        else if (unicode8) {
          charCode = parseInt(unicode8, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          if (charCode < 0xFFFF) return String.fromCharCode(charCode);
          return String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
        }
        else {
          const replacement = replacements[escapedChar];
          if (!replacement) throw new Error("no replacement found for '" + escapedChar + "'");
          return replacement;
        }
      });
      return string;
    }
    catch (error) { console.warn(error); return ''; }
  },

};

function n3ify (ldterm) {
  if (typeof ldterm !== "object")
    return ldterm;
  const ret = "\"" + ldterm.value + "\"";
  if ("language" in ldterm)
    return ret + "@" + ldterm.language;
  if ("type" in ldterm)
    return ret + "^^" + ldterm.type;
  return ret;
}

// Add the ShExUtil functions to the given object or its prototype
function AddShExUtil(parent, toPrototype) {
  for (let name in ShExUtil)
    if (!toPrototype)
      parent[name] = ShExUtil[name];
    else
      parent.prototype[name] = ApplyToThis(ShExUtil[name]);

  return parent;
}

// Returns a function that applies `f` to the `this` object
function ApplyToThis(f) {
  return function (a) { return f(this, a); };
}

return AddShExUtil(AddShExUtil);
})();

if (true)
  module.exports = ShExUtilCjsModule; // node environment


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(1)
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(29)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(36);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(37);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function posix(path) {
	return path.charAt(0) === '/';
}

function win32(path) {
	// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
	var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
	var result = splitDeviceRe.exec(path);
	var device = result[1] || '';
	var isUnc = Boolean(device && device.charAt(1) !== ':');

	// UNC paths are always absolute
	return Boolean(result[2] || isUnc);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* ShapeMap - javascript module to associate RDF nodes with labeled shapes.
 *
 * Status: Early implementation
 *
 * TODO:
 *   testing.
 */

const ShapeMapSymbols = (function () {
  return {
    focus: { term: "FOCUS" },
    start: { term: "START" },
    wildcard: { term: "WILDCARD" },
  }
})();

// Export the `ShExValidator` class as a whole.
if (true)
  module.exports = ShapeMapSymbols;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


function ShExVisitor () {

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }

  function isShapeRef (expr) {
    return typeof expr === "string" // test for JSON-LD @ID
  }
  let isInclusion = isShapeRef;

  // function expect (l, r) { const ls = JSON.stringify(l), rs = JSON.stringify(r); if (ls !== rs) throw Error(ls+" !== "+rs); }
  const _ShExUtil = this;
  function visitMap (map, val) {
    const ret = {};
    Object.keys(map).forEach(function (item) {
      ret[item] = val(map[item]);
    });
    return ret;
  }
  const r = {
    runtimeError: function (e) {
      throw e;
    },

    visitSchema: function (schema) {
      const ret = { type: "Schema" };
      _expect(schema, "type", "Schema");
      this._maybeSet(schema, ret, "Schema",
                     ["@context", "prefixes", "base", "imports", "startActs", "start", "shapes"],
                     ["_base", "_prefixes", "_index", "_sourceMap"]
                    );
      return ret;
    },

    visitPrefixes: function (prefixes) {
      return prefixes === undefined ?
        undefined :
        visitMap(prefixes, function (val) {
          return val;
        });
    },

    visitIRI: function (i) {
      return i;
    },

    visitImports: function (imports) {
      const _Visitor = this;
      return imports.map(function (imp) {
        return _Visitor.visitIRI(imp);
      });
    },

    visitStartActs: function (startActs) {
      const _Visitor = this;
      return startActs === undefined ?
        undefined :
        startActs.map(function (act) {
          return _Visitor.visitSemAct(act);
        });
    },
    visitSemActs: function (semActs) {
      const _Visitor = this;
      if (semActs === undefined)
        return undefined;
      const ret = []
      Object.keys(semActs).forEach(function (label) {
        ret.push(_Visitor.visitSemAct(semActs[label], label));
      });
      return ret;
    },
    visitSemAct: function (semAct, label) {
      const ret = { type: "SemAct" };
      _expect(semAct, "type", "SemAct");

      this._maybeSet(semAct, ret, "SemAct",
                     ["name", "code"]);
      return ret;
    },

    visitShapes: function (shapes) {
      const _Visitor = this;
      if (shapes === undefined)
        return undefined;
      return shapes.map(
        shapeExpr =>
          _Visitor.visitShapeExpr(shapeExpr)
      );
    },

    visitProductions999: function (productions) { // !! DELETE
      const _Visitor = this;
      if (productions === undefined)
        return undefined;
      const ret = {}
      Object.keys(productions).forEach(function (label) {
        ret[label] = _Visitor.visitExpression(productions[label], label);
      });
      return ret;
    },

    visitShapeExpr: function (expr, label) {
      if (isShapeRef(expr))
        return this.visitShapeRef(expr)
      const r =
          expr.type === "Shape" ? this.visitShape(expr, label) :
          expr.type === "NodeConstraint" ? this.visitNodeConstraint(expr, label) :
          expr.type === "ShapeAnd" ? this.visitShapeAnd(expr, label) :
          expr.type === "ShapeOr" ? this.visitShapeOr(expr, label) :
          expr.type === "ShapeNot" ? this.visitShapeNot(expr, label) :
          expr.type === "ShapeExternal" ? this.visitShapeExternal(expr) :
          null;// if (expr.type === "ShapeRef") r = 0; // console.warn("visitShapeExpr:", r);
      if (r === null)
        throw Error("unexpected shapeExpr type: " + expr.type);
      else
        return r;
    },

    // _visitShapeGroup: visit a grouping expression (shapeAnd, shapeOr)
    _visitShapeGroup: function (expr, label) {
      this._testUnknownAttributes(expr, ["id", "shapeExprs"], expr.type, this.visitShapeNot)
      const _Visitor = this;
      const r = { type: expr.type };
      if ("id" in expr)
        r.id = expr.id;
      r.shapeExprs = expr.shapeExprs.map(function (nested) {
        return _Visitor.visitShapeExpr(nested, label);
      });
      return r;
    },

    // _visitShapeNot: visit negated shape
    visitShapeNot: function (expr, label) {
      this._testUnknownAttributes(expr, ["id", "shapeExpr"], "ShapeNot", this.visitShapeNot)
      const r = { type: expr.type };
      if ("id" in expr)
        r.id = expr.id;
      r.shapeExpr = this.visitShapeExpr(expr.shapeExpr, label);
      return r;
    },

    // ### `visitNodeConstraint` deep-copies the structure of a shape
    visitShape: function (shape, label) {
      const ret = { type: "Shape" };
      _expect(shape, "type", "Shape");

      this._maybeSet(shape, ret, "Shape",
                     [ "id",
                       "closed",
                       "expression", "extra", "semActs", "annotations"]);
      return ret;
    },

    // ### `visitNodeConstraint` deep-copies the structure of a shape
    visitNodeConstraint: function (shape, label) {
      const ret = { type: "NodeConstraint" };
      _expect(shape, "type", "NodeConstraint");

      this._maybeSet(shape, ret, "NodeConstraint",
                     [ "id",
                       "nodeKind", "datatype", "pattern", "flags", "length",
                       "reference", "minlength", "maxlength",
                       "mininclusive", "minexclusive", "maxinclusive", "maxexclusive",
                       "totaldigits", "fractiondigits", "values", "annotations", "semActs"]);
      return ret;
    },

    visitShapeRef: function (reference) {
      if (typeof reference !== "string") {
        let ex = Exception("visitShapeRef expected a string, not " + JSON.stringify(reference));
        console.warn(ex);
        throw ex;
      }
      return reference;
    },

    visitShapeExternal: function (expr) {
      this._testUnknownAttributes(expr, ["id"], "ShapeExternal", this.visitShapeNot)
      return Object.assign("id" in expr ? { id: expr.id } : {}, { type: "ShapeExternal" });
    },

    // _visitGroup: visit a grouping expression (someOf or eachOf)
    _visitGroup: function (expr, type) {
      const _Visitor = this;
      const r = Object.assign(
        // pre-declare an id so it sorts to the top
        "id" in expr ? { id: null } : { },
        { type: expr.type }
      );
      r.expressions = expr.expressions.map(function (nested) {
        return _Visitor.visitExpression(nested);
      });
      return this._maybeSet(expr, r, "expr",
                            ["id", "min", "max", "annotations", "semActs"], ["expressions"]);
    },

    visitTripleConstraint: function (expr) {
      return this._maybeSet(expr,
                            Object.assign(
                              // pre-declare an id so it sorts to the top
                              "id" in expr ? { id: null } : { },
                              { type: "TripleConstraint" }
                            ),
                            "TripleConstraint",
                            ["id", "inverse", "predicate", "valueExpr",
                             "min", "max", "annotations", "semActs"])
    },

    visitExpression: function (expr) {
      if (typeof expr === "string")
        return this.visitInclusion(expr);
      const r = expr.type === "TripleConstraint" ? this.visitTripleConstraint(expr) :
          expr.type === "OneOf" ? this.visitOneOf(expr) :
          expr.type === "EachOf" ? this.visitEachOf(expr) :
          null;
      if (r === null)
        throw Error("unexpected expression type: " + expr.type);
      else
        return r;
    },

    visitValues: function (values) {
      const _Visitor = this;
      return values.map(function (t) {
        return isTerm(t) || t.type === "Language" ?
          t :
          _Visitor.visitStemRange(t);
      });
    },

    visitStemRange: function (t) {
      const _Visitor = this; // console.log(Error(t.type).stack);
      // _expect(t, "type", "IriStemRange");
      if (!("type" in t))
        _Visitor.runtimeError(Error("expected "+JSON.stringify(t)+" to have a 'type' attribute."));
      const stemRangeTypes = ["IriStem", "LiteralStem", "LanguageStem", "IriStemRange", "LiteralStemRange", "LanguageStemRange"];
      if (stemRangeTypes.indexOf(t.type) === -1)
        _Visitor.runtimeError(Error("expected type attribute '"+t.type+"' to be in '"+stemRangeTypes+"'."));
      let stem;
      if (isTerm(t)) {
        _expect(t.stem, "type", "Wildcard");
        stem = { type: t.type, stem: { type: "Wildcard" } };
      } else {
        stem = { type: t.type, stem: t.stem };
      }
      if (t.exclusions) {
        stem.exclusions = t.exclusions.map(function (c) {
          return _Visitor.visitExclusion(c);
        });
      }
      return stem;
    },

    visitExclusion: function (c) {
      if (!isTerm(c)) {
        // _expect(c, "type", "IriStem");
        if (!("type" in c))
          _Visitor.runtimeError(Error("expected "+JSON.stringify(c)+" to have a 'type' attribute."));
        const stemTypes = ["IriStem", "LiteralStem", "LanguageStem"];
        if (stemTypes.indexOf(c.type) === -1)
          _Visitor.runtimeError(Error("expected type attribute '"+c.type+"' to be in '"+stemTypes+"'."));
        return { type: c.type, stem: c.stem };
      } else {
        return c;
      }
    },

    visitInclusion: function (inclusion) {
      if (typeof inclusion !== "string") {
        let ex = Exception("visitInclusion expected a string, not " + JSON.stringify(inclusion));
        console.warn(ex);
        throw ex;
      }
      return inclusion;
    },

    _maybeSet: function (obj, ret, context, members, ignore) {
      const _Visitor = this;
      this._testUnknownAttributes(obj, ignore ? members.concat(ignore) : members, context, this._maybeSet)
      members.forEach(function (member) {
        const methodName = "visit" + member.charAt(0).toUpperCase() + member.slice(1);
        if (member in obj) {
          const f = _Visitor[methodName];
          if (typeof f !== "function") {
            throw Error(methodName + " not found in Visitor");
          }
          const t = f.call(_Visitor, obj[member]);
          if (t !== undefined) {
            ret[member] = t;
          }
        }
      });
      return ret;
    },
    _visitValue: function (v) {
      return v;
    },
    _visitList: function (l) {
      return l.slice();
    },
    _testUnknownAttributes: function (obj, expected, context, captureFrame) {
      const unknownMembers = Object.keys(obj).reduce(function (ret, k) {
        return k !== "type" && expected.indexOf(k) === -1 ? ret.concat(k) : ret;
      }, []);
      if (unknownMembers.length > 0) {
        const e = Error("unknown propert" + (unknownMembers.length > 1 ? "ies" : "y") + ": " +
                      unknownMembers.map(function (p) {
                        return "\"" + p + "\"";
                      }).join(",") +
                      " in " + context + ": " + JSON.stringify(obj));
        Error.captureStackTrace(e, captureFrame);
        throw e;
      }
    }

  };
  r.visitBase = r.visitStart = r.visitClosed = r["visit@context"] = r._visitValue;
  r.visitExtra = r.visitAnnotations = r._visitList;
  r.visitInverse = r.visitPredicate = r._visitValue;
  r.visitName = r.visitId = r.visitCode = r.visitMin = r.visitMax = r._visitValue;

  r.visitType = r.visitNodeKind = r.visitDatatype = r.visitPattern = r.visitFlags = r.visitLength = r.visitMinlength = r.visitMaxlength = r.visitMininclusive = r.visitMinexclusive = r.visitMaxinclusive = r.visitMaxexclusive = r.visitTotaldigits = r.visitFractiondigits = r._visitValue;
  r.visitOneOf = r.visitEachOf = r._visitGroup;
  r.visitShapeAnd = r.visitShapeOr = r._visitShapeGroup;
  r.visitInclude = r._visitValue;
  r.visitValueExpr = r.visitShapeExpr;
  return r;

  // Expect property p with value v in object o
  function _expect (o, p, v) {
    if (!(p in o))
      this._error("expected "+JSON.stringify(o)+" to have a ."+p);
    if (arguments.length > 2 && o[p] !== v)
      this._error("expected "+o[o]+" to equal ."+v);
  }

  function _error (str) {
    throw new Error(str);
  }
}

// The ShEx Vistor is here to minimize deps for ShExValidator.
/** create indexes for schema
 */
ShExVisitor.index = function (schema) {
  let index = {
    shapeExprs: {},
    tripleExprs: {}
  };
  let v = ShExVisitor();

  let oldVisitExpression = v.visitExpression;
  v.visitExpression = function (expression) {
    if (typeof expression === "object" && "id" in expression)
      index.tripleExprs[expression.id] = expression;
    return oldVisitExpression.call(v, expression);
  };

  let oldVisitShapeExpr = v.visitShapeExpr;
  v.visitShapeExpr = v.visitValueExpr = function (shapeExpr, label) {
    if (typeof shapeExpr === "object" && "id" in shapeExpr)
      index.shapeExprs[shapeExpr.id] = shapeExpr;
    return oldVisitShapeExpr.call(v, shapeExpr, label);
  };

  v.visitSchema(schema);
  return index;
}

if (true)
  module.exports = ShExVisitor;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExWriter** writes ShEx documents.

const ShExWriterCjsModule = (function () {
const UNBOUNDED = -1;

// Matches a literal as represented in memory by the ShEx library
const ShExLiteralMatcher = /^"([^]*)"(?:\^\^(.+)|@([\-a-z]+))?$/i;

// rdf:type predicate (for 'a' abbreviation)
const RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    RDF_TYPE   = RDF_PREFIX + 'type';

// Characters in literals that require escaping
const ESCAPE_1 = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    ESCAPE_g = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    ESCAPE_replacements = { '\\': '\\\\', '"': '\\"', '/': '\\/', '\t': '\\t',
                            '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f' };

const nodeKinds = {
  'iri': "IRI",
  'bnode': "BNODE",
  'literal': "LITERAL",
  'nonliteral': "NONLITERAL"
};
const nonLitNodeKinds = {
  'iri': "IRI",
  'bnode': "BNODE",
  'literal': "LITERAL",
  'nonliteral': "NONLITERAL"
};

// ## Constructor
function ShExWriter (outputStream, options) {
  if (!(this instanceof ShExWriter))
    return new ShExWriter(outputStream, options);

  // Shift arguments if the first argument is not a stream
  if (outputStream && typeof outputStream.write !== 'function')
    options = outputStream, outputStream = null;
  options = options || {};

  // If no output stream given, send the output as string through the end callback
  if (!outputStream) {
    let output = '';
    this._outputStream = {
      write: function (chunk, encoding, done) { output += chunk; done && done(); },
      end:   function (done) { done && done(null, output); },
    };
    this._endStream = true;
  }
  else {
    this._outputStream = outputStream;
    this._endStream = options.end === undefined ? true : !!options.end;
  }

  // Initialize writer, depending on the format
  this._prefixIRIs = Object.create(null);
  options.prefixes && this.addPrefixes(options.prefixes);

  this._error = options.error || _throwError;
  this.forceParens = !options.simplifyParentheses; // default to false
  this._expect = options.lax ? noop : expect;
}

ShExWriter.prototype = {
  // ## Private methods

  // ### `_write` writes the argument to the output stream
  _write: function (string, callback) {
    this._outputStream.write(string, 'utf8', callback);
  },

  // ### `_writeSchema` writes the shape to the output stream
  _writeSchema: function (schema, done) {
    const _ShExWriter = this;
    this._expect(schema, "type", "Schema");
    _ShExWriter.addPrefixes(schema.prefixes);
    if (schema.base)
      _ShExWriter._write("BASE " + this._encodeIriOrBlankNode(schema.base) + "\n");

    if (schema.imports)
      schema.imports.forEach(function (imp) {
        _ShExWriter._write("IMPORT " + _ShExWriter._encodeIriOrBlankNode(imp) + "\n");
      });
    if (schema.startActs)
      schema.startActs.forEach(function (act) {
        _ShExWriter._expect(act, "type", "SemAct");
        _ShExWriter._write(" %"+
                           _ShExWriter._encodePredicate(act.name)+
                           ("code" in act ? "{"+escapeCode(act.code)+"%"+"}" : "%"));
      });
    if (schema.start)
      _ShExWriter._write("start = " + _ShExWriter._writeShapeExpr(schema.start, done, true, 0).join('') + "\n")
    if ("shapes" in schema)
      schema.shapes.forEach(function (shapeExpr) {
        _ShExWriter._write(
          _ShExWriter._encodeShapeName(shapeExpr.id, false) +
            " " +
            _ShExWriter._writeShapeExpr(shapeExpr, done, true, 0).join("")+"\n",
          done
        );
      })
  },

  _writeShapeExpr: function (shapeExpr, done, forceBraces, parentPrec) {
    const _ShExWriter = this;
    const pieces = [];
    if (typeof shapeExpr === "string") // ShapeRef
      pieces.push("@", _ShExWriter._encodeShapeName(shapeExpr));
    // !!! []s for precedence!
    else if (shapeExpr.type === "ShapeExternal")
      pieces.push("EXTERNAL");
    else if (shapeExpr.type === "ShapeAnd") {
      if (parentPrec >= 3)
        pieces.push("(");
      let lastAndElided = false;
      shapeExpr.shapeExprs.forEach(function (expr, ord) {
        if (ord > 0) { // && !!! grammar rules too weird here
          /*
            shapeAtom:
                  nonLitNodeConstraint shapeOrRef?
                | shapeDecl nonLitNodeConstraint?

            nonLitInlineNodeConstraint:
                  nonLiteralKind stringFacet*
          */
          function nonLitNodeConstraint (idx) {
            let c = shapeExpr.shapeExprs[idx];
            return c.type !== "NodeConstraint"
              || ("nodeKind" in c && c.nodeKind === "literal")
              || "datatype" in c
              || "values" in c
              ? false
              : true;
          }

          function shapeOrRef (idx) {
            let c = shapeExpr.shapeExprs[idx];
            return c.type === "Shape" || c.type === "ShapeRef";
          }

          function shapeDecl (idx) {
            let c = shapeExpr.shapeExprs[idx];
            return c.type === "Shape";
          }

          let elideAnd = !lastAndElided
              && (nonLitNodeConstraint(ord-1) && shapeOrRef(ord)
                  || shapeDecl(ord-1) && nonLitNodeConstraint(ord))
          if (!elideAnd) {
            pieces.push(" AND ");
          }
          lastAndElided = elideAnd;
        }
        [].push.apply(pieces, _ShExWriter._writeShapeExpr(expr, done, false, 3));
      });
      if (parentPrec >= 3)
        pieces.push(")");
    } else if (shapeExpr.type === "ShapeOr") {
      if (parentPrec >= 2)
        pieces.push("(");
      shapeExpr.shapeExprs.forEach(function (expr, ord) {
        if (ord > 0)
          pieces.push(" OR ");
        [].push.apply(pieces, _ShExWriter._writeShapeExpr(expr, done, forceBraces, 2));
      });
      if (parentPrec >= 2)
        pieces.push(")");
    } else if (shapeExpr.type === "ShapeNot") {
      if (parentPrec >= 4)
        pieces.push("(");
      pieces.push("NOT ");
      [].push.apply(pieces, _ShExWriter._writeShapeExpr(shapeExpr.shapeExpr, done, forceBraces, 4));
      if (parentPrec >= 4)
        pieces.push(")");
    } else if (shapeExpr.type === "Shape") {
      [].push.apply(pieces, _ShExWriter._writeShape(shapeExpr, done, forceBraces));
    } else if (shapeExpr.type === "NodeConstraint") {
      [].push.apply(pieces, _ShExWriter._writeNodeConstraint(shapeExpr, done, forceBraces));
    } else
      throw Error("expected Shape{,And,Or,Ref} or NodeConstraint in " + JSON.stringify(shapeExpr));
    return pieces;
  },

  // ### `_writeShape` writes the shape to the output stream
  _writeShape: function (shape, done, forceBraces) {
    const _ShExWriter = this;
    try {
      const pieces = []; // guessing push/join is faster than concat
      this._expect(shape, "type", "Shape");

      if (shape.closed) pieces.push("CLOSED ");

      if (shape.extra && shape.extra.length > 0) {
        pieces.push("EXTRA ");
        shape.extra.forEach(function (i, ord) {
          pieces.push(_ShExWriter._encodeShapeName(i, false)+" ");
        });
        pieces.push(" ");
      }
      const empties = ["values", "length", "minlength", "maxlength", "pattern", "flags"];
      pieces.push("{\n");

      function _writeShapeActions (semActs) {
        if (!semActs)
          return;

        semActs.forEach(function (act) {
          _ShExWriter._expect(act, "type", "SemAct");
          pieces.push(" %",
                      _ShExWriter._encodePredicate(act.name),
                      ("code" in act ? "{"+escapeCode(act.code)+"%"+"}" : "%"));
        });
      }

      function _writeCardinality (min, max) {
        if      (min === 0 && max === 1)         pieces.push("?");
        else if (min === 0 && max === UNBOUNDED) pieces.push("*");
        else if (min === undefined && max === undefined)                         ;
        else if (min === 1 && max === UNBOUNDED) pieces.push("+");
        else
          pieces.push("{", min, ",", (max === UNBOUNDED ? "*" : max), "}"); // by coincidence, both use the same character.
      }

      function _writeExpression (expr, indent, parentPrecedence) {
        function _writeExpressionActions (semActs) {
          if (semActs) {

            semActs.forEach(function (act) {
              _ShExWriter._expect(act, "type", "SemAct");
              pieces.push("\n"+indent+"   %");
              pieces.push(_ShExWriter._encodeValue(act.name));
              if ("code" in act)
                pieces.push("{"+escapeCode(act.code)+"%"+"}");
              else
                pieces.push("%");
            });
          }
        }

        function _exprGroup (exprs, separator, precedence, forceParens) {
          const needsParens = precedence < parentPrecedence || forceParens;
          if (needsParens) {
            pieces.push("(");
          }
          exprs.forEach(function (nested, ord) {
            _writeExpression(nested, indent+"  ", precedence)
            if (ord < exprs.length - 1)
              pieces.push(separator);
          });
          if (needsParens) {
            pieces.push(")");
          }
        }

        if (typeof expr === "string") {
          pieces.push("&");
          pieces.push(_ShExWriter._encodeShapeName(expr, false));
        } else {

        if ("id" in expr) {
          pieces.push("$");
          pieces.push(_ShExWriter._encodeIriOrBlankNode(expr.id, true));
        }

        if (expr.type === "TripleConstraint") {
          if (expr.inverse)
            pieces.push("^");
          if (expr.negated)
            pieces.push("!");
          pieces.push(indent,
                      _ShExWriter._encodePredicate(expr.predicate),
                      " ");

          if ("valueExpr" in expr)
            [].push.apply(pieces, _ShExWriter._writeShapeExpr(expr.valueExpr, done, true, 0));
          else
            pieces.push(". ");

          _writeCardinality(expr.min, expr.max);
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else if (expr.type === "OneOf") {
          const needsParens = "id" in expr || "min" in expr || "max" in expr || "annotations" in expr || "semActs" in expr;
          _exprGroup(expr.expressions, "\n"+indent+"| ", 1, needsParens || _ShExWriter.forceParens);
          _writeCardinality(expr.min, expr.max); // t: open1dotclosecardOpt
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else if (expr.type === "EachOf") {
          const needsParens = "id" in expr || "min" in expr || "max" in expr || "annotations" in expr || "semActs" in expr;
          _exprGroup(expr.expressions, ";\n"+indent, 2, needsParens || _ShExWriter.forceParens);
          _writeCardinality(expr.min, expr.max); // t: open1dotclosecardOpt
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else throw Error("unexpected expr type: " + expr.type);
        }
      }

      if (shape.expression) // t: 0
        _writeExpression(shape.expression, "  ", 0);
      pieces.push("\n}");
      _writeShapeActions(shape.semActs);
      _ShExWriter._annotations(pieces, shape.annotations, "  ");

      return pieces;
    }
    catch (error) { done && done(error); }
  },

  // ### `_writeShape` writes the shape to the output stream
  _writeNodeConstraint: function (v, done) {
    const _ShExWriter = this;
    try {
      _ShExWriter._expect(v, "type", "NodeConstraint");

      const pieces = [];
      if (v.nodeKind in nodeKinds)       pieces.push(nodeKinds[v.nodeKind], " ");
      else if (v.nodeKind !== undefined) _ShExWriter._error("unexpected nodeKind: " + v.nodeKind); // !!!!

      this._fillNodeConstraint(pieces, v, done);
      this._annotations(pieces, v.annotations, "  ");
      return pieces;
    }
    catch (error) { done && done(error); }

  },

  _annotations: function (pieces, annotations, indent) {
    const _ShExWriter = this;
    if (annotations) {
      annotations.forEach(function (a) {
        _ShExWriter._expect(a, "type", "Annotation");
        pieces.push("//\n"+indent+"   ");
        pieces.push(_ShExWriter._encodeValue(a.predicate));
        pieces.push(" ");
        pieces.push(_ShExWriter._encodeValue(a.object));
      });
    }
  },

  _fillNodeConstraint: function (pieces, v, done) {
    const _ShExWriter = this;
    if (v.datatype  && v.values  ) _ShExWriter._error("found both datatype and values in "   +expr);
    if (v.datatype) {
      pieces.push(_ShExWriter._encodeShapeName(v.datatype));
    }

    if (v.values) {
      pieces.push("[");

      v.values.forEach(function (t, ord) {
        if (ord > 0)
          pieces.push(" ");

        if (!isTerm(t)) {
//          expect(t, "type", "IriStemRange");
              if (!("type" in t))
                runtimeError("expected "+JSON.stringify(t)+" to have a 'type' attribute.");
          const stemRangeTypes = ["Language", "IriStem", "LiteralStem", "LanguageStem", "IriStemRange", "LiteralStemRange", "LanguageStemRange"];
              if (stemRangeTypes.indexOf(t.type) === -1)
                runtimeError("expected type attribute '"+t.type+"' to be in '"+stemRangeTypes+"'.");
          if (t.type === "Language") {
            pieces.push("@" + t.languageTag);
          } else if (!isTerm(t.stem)) {
            expect(t.stem, "type", "Wildcard");
            pieces.push(".");
          } else {
            pieces.push(langOrLiteral(t, t.stem) + "~");
          }
          if (t.exclusions) {
            t.exclusions.forEach(function (c) {
              pieces.push(" - ");
              if (!isTerm(c)) {
//                expect(c, "type", "IriStem");
                    if (!("type" in c))
                      runtimeError("expected "+JSON.stringify(c)+" to have a 'type' attribute.");
                    const stemTypes = ["IriStem", "LiteralStem", "LanguageStem"];
                    if (stemTypes.indexOf(c.type) === -1)
                      runtimeError("expected type attribute '"+c.type+"' to be in '"+stemTypes+"'.");
                pieces.push(langOrLiteral(t, c.stem) + "~");
              } else {
                pieces.push(langOrLiteral(t, c));
              }
            });
          }
          function langOrLiteral (t, c) {
            return ["LanguageStem", "LanguageStemRange"].indexOf(t.type) !== -1 ? "@" + c :
              ["LiteralStem", "LiteralStemRange"].indexOf(t.type) !== -1 ? '"' + c.replace(ESCAPE_g, c) + '"' :
              _ShExWriter._encodeValue(c)
          }
        } else {
          pieces.push(_ShExWriter._encodeValue(t));
        }
      });

      pieces.push("]");
    }

    if ('pattern' in v) {
      const pattern = v.pattern.
          replace(/\//g, "\\/");
      // if (ESCAPE_1.test(pattern))
      //   pattern = pattern.replace(ESCAPE_g, characterReplacer);
      const flags = 'flags' in v ? v.flags : "";
      pieces.push("/" + pattern + "/" + flags + " ");
    }
    ['length', 'minlength', 'maxlength',
     'mininclusive', 'minexclusive', 'maxinclusive', 'maxexclusive',
     'totaldigits', 'fractiondigits'
    ].forEach(function (a) {
      if (v[a])
        pieces.push(" ", a, " ", v[a]);
    });
    return pieces;

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }
  },

  // ### `_encodeIriOrBlankNode` represents an IRI or blank node
  _encodeIriOrBlankNode: function (iri, trailingSpace) {
    trailingSpace = trailingSpace ? ' ' : '';
    // A blank node is represented as-is
    if (iri[0] === '_' && iri[1] === ':') return iri;
    // Escape special characters
    if (ESCAPE_1.test(iri))
      iri = iri.replace(ESCAPE_g, characterReplacer);
    // Try to represent the IRI as prefixed name
    const prefixMatch = this._prefixRegex.exec(iri);
    return !prefixMatch ? '<' + iri + '>' :
           (!prefixMatch[1] ? iri : this._prefixIRIs[prefixMatch[1]] + prefixMatch[2]) + trailingSpace;
  },

  // ### `_encodeLiteral` represents a literal
  _encodeLiteral: function (value, type, language) {
    // Escape special characters
    if (ESCAPE_1.test(value))
      value = value.replace(ESCAPE_g, characterReplacer);
    // Write the literal, possibly with type or language
    if (language)
      return '"' + value + '"@' + language;
    else if (type)
      return '"' + value + '"^^' + this._encodeIriOrBlankNode(type);
    else
      return '"' + value + '"';
  },

  // ### `_encodeShapeName` represents a subject
  _encodeShapeName: function (subject, trailingSpace) {
    if (subject[0] === '"')
      throw new Error('A literal as subject is not allowed: ' + subject);
    return this._encodeIriOrBlankNode(subject, trailingSpace);
  },

  // ### `_encodePredicate` represents a predicate
  _encodePredicate: function (predicate) {
    if (predicate[0] === '"')
      throw new Error('A literal as predicate is not allowed: ' + predicate);
    return predicate === RDF_TYPE ? 'a' : this._encodeIriOrBlankNode(predicate);
  },

  // ### `_encodeValue` represents an object
  _encodeValue: function (object) {
    // Represent an IRI or blank node
    if (typeof object !== "object")
      return this._encodeIriOrBlankNode(object);
    // Represent a literal
    return this._encodeLiteral(object.value, object.type, object.language);
  },

  // ### `_blockedWrite` replaces `_write` after the writer has been closed
  _blockedWrite: function () {
    throw new Error('Cannot write because the writer has been closed.');
  },

  writeSchema: function (shape, done) {
    this._writeSchema(shape, done);
    this.end(done);
  },

  // ### `addShape` adds the shape to the output stream
  addShape: function (shape, name, done) {
    this._write(
      _ShExWriter._encodeShapeName(name, false) +
        " " +
        _ShExWriter._writeShapeExpr(shape, done, true, 0).join(""),
      done
    );
  },

  // ### `addShapes` adds the shapes to the output stream
  addShapes: function (shapes) {
    for (let i = 0; i < shapes.length; i++)
      this.addShape(shapes[i]);
  },

  // ### `addPrefix` adds the prefix to the output stream
  addPrefix: function (prefix, iri, done) {
    const prefixes = {};
    prefixes[prefix] = iri;
    this.addPrefixes(prefixes, done);
  },

  // ### `addPrefixes` adds the prefixes to the output stream
  addPrefixes: function (prefixes, done) {
    // Add all useful prefixes
    const prefixIRIs = this._prefixIRIs;
    let hasPrefixes = false;
    for (let prefix in prefixes) {
      // Verify whether the prefix can be used and does not exist yet
      const iri = prefixes[prefix];
      if (// @@ /[#\/]$/.test(iri) && !! what was that?
          prefixIRIs[iri] !== (prefix += ':')) {
        hasPrefixes = true;
        prefixIRIs[iri] = prefix;
        // Write prefix
        this._write('PREFIX ' + prefix + ' <' + iri + '>\n');
      }
    }
    // Recreate the prefix matcher
    if (hasPrefixes) {
      let IRIlist = '', prefixList = '';
      for (let prefixIRI in prefixIRIs) {
        IRIlist += IRIlist ? '|' + prefixIRI : prefixIRI;
        prefixList += (prefixList ? '|' : '') + prefixIRIs[prefixIRI];
      }
      IRIlist = IRIlist.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, '\\$&');
      this._prefixRegex = new RegExp('^(?:' + prefixList + ')[^\/]*$|' +
                                     '^(' + IRIlist + ')([a-zA-Z][\\-_a-zA-Z0-9]*)$');
    }
    // End a prefix block with a newline
    this._write(hasPrefixes ? '\n' : '', done);
  },

  // ### `_prefixRegex` matches a prefixed name or IRI that begins with one of the added prefixes
  _prefixRegex: /$0^/,

  // ### `end` signals the end of the output stream
  end: function (done) {
    // Disallow further writing
    this._write = this._blockedWrite;

    // Try to end the underlying stream, ensuring done is called exactly one time
    let singleDone = done && function (error, result) { singleDone = null, done(error, result); };
    if (this._endStream) {
      try { return this._outputStream.end(singleDone); }
      catch (error) { /* error closing stream */ }
    }
    singleDone && singleDone();
  },
};

// Replaces a character by its escaped version
function characterReplacer(character) {
  // Replace a single character by its escaped version
  let result = ESCAPE_replacements[character];
  if (result === undefined) {
    // Replace a single character with its 4-bit unicode escape sequence
    if (character.length === 1) {
      result = character.charCodeAt(0).toString(16);
      result = '\\u0000'.substr(0, 6 - result.length) + result;
    }
    // Replace a surrogate pair with its 8-bit unicode escape sequence
    else {
      result = ((character.charCodeAt(0) - 0xD800) * 0x400 +
                 character.charCodeAt(1) + 0x2400).toString(16);
      result = '\\U00000000'.substr(0, 10 - result.length) + result;
    }
  }
  return result;
}

function escapeCode (code) {
  return code.replace(/\\/g, "\\\\").replace(/%/g, "\\%")
}

/** _throwError: overridable function to throw Errors().
 *
 * @param func (optional): function at which to truncate stack trace
 * @param str: error message
 */
function _throwError (func, str) {
  if (typeof func !== "function") {
    str = func;
    func = _throwError;
  }
  const e = new Error(str);
  Error.captureStackTrace(e, func);
  throw e;
}

// Expect property p with value v in object o
function expect (o, p, v) {
  if (!(p in o))
    this._error(expect, "expected "+o+" to have a ."+p);
  if (arguments.length > 2 && o[p] !== v)
    this._error(expect, "expected "+o[o]+" to equal ."+v);
}

// The empty function
function noop () {}

return ShExWriter;
})();

// Export the `ShExWriter` class as a whole.
if (true)
  module.exports = ShExWriterCjsModule; // node environment


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const ShExParserCjsModule = (function () {

const ShExTerm = __webpack_require__(3);
const ShExJison = __webpack_require__(27).Parser;

// Creates a ShEx parser with the given pre-defined prefixes
const prepareParser = function (baseIRI, prefixes, schemaOptions) {
  schemaOptions = schemaOptions || {};
  // Create a copy of the prefixes
  const prefixesCopy = {};
  for (const prefix in prefixes || {})
    prefixesCopy[prefix] = prefixes[prefix];

  // Create a copy of the labelResolvers
  var termResolver = "termResolver" in schemaOptions ?
      schemaOptions.termResolver :
      makeDisabledTermResolver();

  // Create a new parser with the given prefixes
  // (Workaround for https://github.com/zaach/jison/issues/241)
  const parser = new ShExJison();

  function runParser () {
    // ShExJison.base = baseIRI || "";
    // ShExJison.basePath = ShExJison.base.replace(/[^\/]*$/, '');
    // ShExJison.baseRoot = ShExJison.base.match(/^(?:[a-z]+:\/*)?[^\/]*/)[0];
    ShExJison._prefixes = Object.create(prefixesCopy);
    ShExJison._imports = [];
    ShExJison._setBase(baseIRI);
    ShExJison._setFileName(baseIRI);
    ShExJison.options = schemaOptions;
    if (!ShExJison._termResolver)
      ShExJison._termResolver = termResolver;
    let errors = [];
    ShExJison.recoverable = e =>
      errors.push(e);
    let ret = null;
    try {
      ret = ShExJison.prototype.parse.apply(parser, arguments);
    } catch (e) {
      errors.push(e);
    }
    ShExJison.reset();
    errors.forEach(e => {
      if ("hash" in e) {
        const hash = e.hash;
        const location = hash.loc;
        delete hash.loc;
        Object.assign(e, hash, {location: location});
      }
      return e;
    })
    if (errors.length == 1) {
      errors[0].parsed = ret;
      throw errors[0];
    } else if (errors.length) {
      const all = new Error("" + errors.length  + " parser errors:\n" + errors.map(
        e => contextError(e, parser.yy.lexer)
      ).join("\n"));
      all.errors = errors;
      all.parsed = ret;
      throw all;
    } else {
      return ret;
    }
  }
  parser.parse = runParser;
  parser._setBase = function (base) {
    ShExJison._setBase;
    baseIRI = base;
  }
  parser._setFileName = ShExJison._setFileName;
  parser._setTermResolver = ShExJison._setTermResolver;
  parser._setOptions = function (opts) { ShExJison.options = opts; };
  parser._resetBlanks = ShExJison._resetBlanks;
  parser.reset = ShExJison.reset;
  ShExJison.options = schemaOptions;
  return parser;

  function contextError (e, lexer) {
    // use the lexer's pretty-printing
    const line = e.location.first_line;
    const col  = e.location.first_column + 1;
    const posStr = "pos" in e.hash ? "\n" + e.hash.pos : ""
    return `${baseIRI}\n line: ${line}, column: ${col}: ${e.message}${posStr}`;
  }
}

var makeDBTermResolver = function (db) {
  var _db = db;
  var _lookFor = [];
  return {
    add: function (iri) {
      _lookFor.push(iri);
    },
    resolve: function (pair, prefixes) {
      var x = _lookFor.reduce((lfacc, lf) => {
        var found1 = _db.getQuads(null, lf, '"' + pair.label.value + '"');
        if (found1.length)
          return pair.prefix === null ?
          {prefix: null, length: null, term: ShExTerm.internalTerm(found1[0].subject)}:
          found1.reduce((tripacc, triple) => {
            var s = ShExTerm.internalTerm(triple.subject);
            return Object.keys(prefixes).reduce((prefacc, prefix) => {
              var ns = prefixes[prefix];
              var sw = s.startsWith(ns);
              if (sw && ns.length > prefacc.length && pair.prefix === prefix)
                return {prefix: prefix, length: prefacc.length, term: s};
              return prefacc;
            }, tripacc);
          }, lfacc);
        else
          return lfacc;
      }, {prefix: null, length: 0, term: null});
      if (x.term)
        return x.term;
      throw Error("no term found for `" + JSON.stringify(pair) + "`");
    }
  };
}

var makeDisabledTermResolver = function () {
  return {
    add: function (iri) {
      throw Error("no term resolver to accept <" + iri + ">");
    },
    resolve: function (label, prefixes) {
      throw Error("no term resolver to resolve `" + label + "`");
    }
  };
}

return {
  construct: prepareParser,
  dbTermResolver: makeDBTermResolver,
  disabledTermResolver: makeDisabledTermResolver
};
})();

if (true)
  module.exports = ShExParserCjsModule;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.

module.exports = glob

var fs = __webpack_require__(2)
var rp = __webpack_require__(14)
var minimatch = __webpack_require__(5)
var Minimatch = minimatch.Minimatch
var inherits = __webpack_require__(32)
var EE = __webpack_require__(33).EventEmitter
var path = __webpack_require__(1)
var assert = __webpack_require__(15)
var isAbsolute = __webpack_require__(7)
var globSync = __webpack_require__(38)
var common = __webpack_require__(16)
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var setopts = common.setopts
var ownProp = common.ownProp
var inflight = __webpack_require__(39)
var util = __webpack_require__(6)
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

var once = __webpack_require__(18)

function glob (pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {}
  if (!options) options = {}

  if (options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return globSync(pattern, options)
  }

  return new Glob(pattern, options, cb)
}

glob.sync = globSync
var GlobSync = glob.GlobSync = globSync.GlobSync

// old api surface
glob.glob = glob

function extend (origin, add) {
  if (add === null || typeof add !== 'object') {
    return origin
  }

  var keys = Object.keys(add)
  var i = keys.length
  while (i--) {
    origin[keys[i]] = add[keys[i]]
  }
  return origin
}

glob.hasMagic = function (pattern, options_) {
  var options = extend({}, options_)
  options.noprocess = true

  var g = new Glob(pattern, options)
  var set = g.minimatch.set

  if (!pattern)
    return false

  if (set.length > 1)
    return true

  for (var j = 0; j < set[0].length; j++) {
    if (typeof set[0][j] !== 'string')
      return true
  }

  return false
}

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = null
  }

  if (options && options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return new GlobSync(pattern, options)
  }

  if (!(this instanceof Glob))
    return new Glob(pattern, options, cb)

  setopts(this, pattern, options)
  this._didRealPath = false

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  if (typeof cb === 'function') {
    cb = once(cb)
    this.on('error', cb)
    this.on('end', function (matches) {
      cb(null, matches)
    })
  }

  var self = this
  this._processing = 0

  this._emitQueue = []
  this._processQueue = []
  this.paused = false

  if (this.noprocess)
    return this

  if (n === 0)
    return done()

  var sync = true
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false, done)
  }
  sync = false

  function done () {
    --self._processing
    if (self._processing <= 0) {
      if (sync) {
        process.nextTick(function () {
          self._finish()
        })
      } else {
        self._finish()
      }
    }
  }
}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)
  if (this.aborted)
    return

  if (this.realpath && !this._didRealpath)
    return this._realpath()

  common.finish(this)
  this.emit('end', this.found)
}

Glob.prototype._realpath = function () {
  if (this._didRealpath)
    return

  this._didRealpath = true

  var n = this.matches.length
  if (n === 0)
    return this._finish()

  var self = this
  for (var i = 0; i < this.matches.length; i++)
    this._realpathSet(i, next)

  function next () {
    if (--n === 0)
      self._finish()
  }
}

Glob.prototype._realpathSet = function (index, cb) {
  var matchset = this.matches[index]
  if (!matchset)
    return cb()

  var found = Object.keys(matchset)
  var self = this
  var n = found.length

  if (n === 0)
    return cb()

  var set = this.matches[index] = Object.create(null)
  found.forEach(function (p, i) {
    // If there's a problem with the stat, then it means that
    // one or more of the links in the realpath couldn't be
    // resolved.  just return the abs value in that case.
    p = self._makeAbs(p)
    rp.realpath(p, self.realpathCache, function (er, real) {
      if (!er)
        set[real] = true
      else if (er.syscall === 'stat')
        set[p] = true
      else
        self.emit('error', er) // srsly wtf right here

      if (--n === 0) {
        self.matches[index] = set
        cb()
      }
    })
  })
}

Glob.prototype._mark = function (p) {
  return common.mark(this, p)
}

Glob.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit('abort')
}

Glob.prototype.pause = function () {
  if (!this.paused) {
    this.paused = true
    this.emit('pause')
  }
}

Glob.prototype.resume = function () {
  if (this.paused) {
    this.emit('resume')
    this.paused = false
    if (this._emitQueue.length) {
      var eq = this._emitQueue.slice(0)
      this._emitQueue.length = 0
      for (var i = 0; i < eq.length; i ++) {
        var e = eq[i]
        this._emitMatch(e[0], e[1])
      }
    }
    if (this._processQueue.length) {
      var pq = this._processQueue.slice(0)
      this._processQueue.length = 0
      for (var i = 0; i < pq.length; i ++) {
        var p = pq[i]
        this._processing--
        this._process(p[0], p[1], p[2], p[3])
      }
    }
  }
}

Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
  assert(this instanceof Glob)
  assert(typeof cb === 'function')

  if (this.aborted)
    return

  this._processing++
  if (this.paused) {
    this._processQueue.push([pattern, index, inGlobStar, cb])
    return
  }

  //console.error('PROCESS %d', this._processing, pattern)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index, cb)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip _processing
  if (childrenIgnored(this, read))
    return cb()

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb)
}

Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}

Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return cb()

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return cb()

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return cb()
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix) {
      if (prefix !== '/')
        e = prefix + '/' + e
      else
        e = prefix + e
    }
    this._process([e].concat(remain), index, inGlobStar, cb)
  }
  cb()
}

Glob.prototype._emitMatch = function (index, e) {
  if (this.aborted)
    return

  if (isIgnored(this, e))
    return

  if (this.paused) {
    this._emitQueue.push([index, e])
    return
  }

  var abs = isAbsolute(e) ? e : this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute)
    e = abs

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  var st = this.statCache[abs]
  if (st)
    this.emit('stat', e, st)

  this.emit('match', e)
}

Glob.prototype._readdirInGlobStar = function (abs, cb) {
  if (this.aborted)
    return

  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false, cb)

  var lstatkey = 'lstat\0' + abs
  var self = this
  var lstatcb = inflight(lstatkey, lstatcb_)

  if (lstatcb)
    fs.lstat(abs, lstatcb)

  function lstatcb_ (er, lstat) {
    if (er && er.code === 'ENOENT')
      return cb()

    var isSym = lstat && lstat.isSymbolicLink()
    self.symlinks[abs] = isSym

    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && lstat && !lstat.isDirectory()) {
      self.cache[abs] = 'FILE'
      cb()
    } else
      self._readdir(abs, false, cb)
  }
}

Glob.prototype._readdir = function (abs, inGlobStar, cb) {
  if (this.aborted)
    return

  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb)
  if (!cb)
    return

  //console.error('RD %j %j', +inGlobStar, abs)
  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs, cb)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return cb()

    if (Array.isArray(c))
      return cb(null, c)
  }

  var self = this
  fs.readdir(abs, readdirCb(this, abs, cb))
}

function readdirCb (self, abs, cb) {
  return function (er, entries) {
    if (er)
      self._readdirError(abs, er, cb)
    else
      self._readdirEntries(abs, entries, cb)
  }
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
  if (this.aborted)
    return

  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries
  return cb(null, entries)
}

Glob.prototype._readdirError = function (f, er, cb) {
  if (this.aborted)
    return

  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        this.emit('error', error)
        this.abort()
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict) {
        this.emit('error', er)
        // If the error is handled, then we abort
        // if not, we threw out of here
        this.abort()
      }
      if (!this.silent)
        console.error('glob error', er)
      break
  }

  return cb()
}

Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}


Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  //console.error('pgs2', prefix, remain[0], entries)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return cb()

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false, cb)

  var isSym = this.symlinks[abs]
  var len = entries.length

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return cb()

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true, cb)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true, cb)
  }

  cb()
}

Glob.prototype._processSimple = function (prefix, index, cb) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var self = this
  this._stat(prefix, function (er, exists) {
    self._processSimple2(prefix, index, er, exists, cb)
  })
}
Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {

  //console.error('ps2', prefix, exists)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return cb()

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
  cb()
}

// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function (f, cb) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return cb()

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return cb(null, c)

    if (needDir && c === 'FILE')
      return cb()

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (stat !== undefined) {
    if (stat === false)
      return cb(null, stat)
    else {
      var type = stat.isDirectory() ? 'DIR' : 'FILE'
      if (needDir && type === 'FILE')
        return cb()
      else
        return cb(null, type, stat)
    }
  }

  var self = this
  var statcb = inflight('stat\0' + abs, lstatcb_)
  if (statcb)
    fs.lstat(abs, statcb)

  function lstatcb_ (er, lstat) {
    if (lstat && lstat.isSymbolicLink()) {
      // If it's a symlink, then treat it as the target, unless
      // the target does not exist, then treat it as a file.
      return fs.stat(abs, function (er, stat) {
        if (er)
          self._stat2(f, abs, null, lstat, cb)
        else
          self._stat2(f, abs, er, stat, cb)
      })
    } else {
      self._stat2(f, abs, er, lstat, cb)
    }
  }
}

Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
    this.statCache[abs] = false
    return cb()
  }

  var needDir = f.slice(-1) === '/'
  this.statCache[abs] = stat

  if (abs.slice(-1) === '/' && stat && !stat.isDirectory())
    return cb(null, false, stat)

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'
  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return cb()

  return cb(null, c, stat)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = realpath
realpath.realpath = realpath
realpath.sync = realpathSync
realpath.realpathSync = realpathSync
realpath.monkeypatch = monkeypatch
realpath.unmonkeypatch = unmonkeypatch

var fs = __webpack_require__(2)
var origRealpath = fs.realpath
var origRealpathSync = fs.realpathSync

var version = process.version
var ok = /^v[0-5]\./.test(version)
var old = __webpack_require__(28)

function newError (er) {
  return er && er.syscall === 'realpath' && (
    er.code === 'ELOOP' ||
    er.code === 'ENOMEM' ||
    er.code === 'ENAMETOOLONG'
  )
}

function realpath (p, cache, cb) {
  if (ok) {
    return origRealpath(p, cache, cb)
  }

  if (typeof cache === 'function') {
    cb = cache
    cache = null
  }
  origRealpath(p, cache, function (er, result) {
    if (newError(er)) {
      old.realpath(p, cache, cb)
    } else {
      cb(er, result)
    }
  })
}

function realpathSync (p, cache) {
  if (ok) {
    return origRealpathSync(p, cache)
  }

  try {
    return origRealpathSync(p, cache)
  } catch (er) {
    if (newError(er)) {
      return old.realpathSync(p, cache)
    } else {
      throw er
    }
  }
}

function monkeypatch () {
  fs.realpath = realpath
  fs.realpathSync = realpathSync
}

function unmonkeypatch () {
  fs.realpath = origRealpath
  fs.realpathSync = origRealpathSync
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(35);

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(6);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports.alphasort = alphasort
exports.alphasorti = alphasorti
exports.setopts = setopts
exports.ownProp = ownProp
exports.makeAbs = makeAbs
exports.finish = finish
exports.mark = mark
exports.isIgnored = isIgnored
exports.childrenIgnored = childrenIgnored

function ownProp (obj, field) {
  return Object.prototype.hasOwnProperty.call(obj, field)
}

var path = __webpack_require__(1)
var minimatch = __webpack_require__(5)
var isAbsolute = __webpack_require__(7)
var Minimatch = minimatch.Minimatch

function alphasorti (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase())
}

function alphasort (a, b) {
  return a.localeCompare(b)
}

function setupIgnores (self, options) {
  self.ignore = options.ignore || []

  if (!Array.isArray(self.ignore))
    self.ignore = [self.ignore]

  if (self.ignore.length) {
    self.ignore = self.ignore.map(ignoreMap)
  }
}

// ignore patterns are always in dot:true mode.
function ignoreMap (pattern) {
  var gmatcher = null
  if (pattern.slice(-3) === '/**') {
    var gpattern = pattern.replace(/(\/\*\*)+$/, '')
    gmatcher = new Minimatch(gpattern, { dot: true })
  }

  return {
    matcher: new Minimatch(pattern, { dot: true }),
    gmatcher: gmatcher
  }
}

function setopts (self, pattern, options) {
  if (!options)
    options = {}

  // base-matching: just use globstar for that.
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar")
    }
    pattern = "**/" + pattern
  }

  self.silent = !!options.silent
  self.pattern = pattern
  self.strict = options.strict !== false
  self.realpath = !!options.realpath
  self.realpathCache = options.realpathCache || Object.create(null)
  self.follow = !!options.follow
  self.dot = !!options.dot
  self.mark = !!options.mark
  self.nodir = !!options.nodir
  if (self.nodir)
    self.mark = true
  self.sync = !!options.sync
  self.nounique = !!options.nounique
  self.nonull = !!options.nonull
  self.nosort = !!options.nosort
  self.nocase = !!options.nocase
  self.stat = !!options.stat
  self.noprocess = !!options.noprocess
  self.absolute = !!options.absolute

  self.maxLength = options.maxLength || Infinity
  self.cache = options.cache || Object.create(null)
  self.statCache = options.statCache || Object.create(null)
  self.symlinks = options.symlinks || Object.create(null)

  setupIgnores(self, options)

  self.changedCwd = false
  var cwd = process.cwd()
  if (!ownProp(options, "cwd"))
    self.cwd = cwd
  else {
    self.cwd = path.resolve(options.cwd)
    self.changedCwd = self.cwd !== cwd
  }

  self.root = options.root || path.resolve(self.cwd, "/")
  self.root = path.resolve(self.root)
  if (process.platform === "win32")
    self.root = self.root.replace(/\\/g, "/")

  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd)
  if (process.platform === "win32")
    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/")
  self.nomount = !!options.nomount

  // disable comments and negation in Minimatch.
  // Note that they are not supported in Glob itself anyway.
  options.nonegate = true
  options.nocomment = true

  self.minimatch = new Minimatch(pattern, options)
  self.options = self.minimatch.options
}

function finish (self) {
  var nou = self.nounique
  var all = nou ? [] : Object.create(null)

  for (var i = 0, l = self.matches.length; i < l; i ++) {
    var matches = self.matches[i]
    if (!matches || Object.keys(matches).length === 0) {
      if (self.nonull) {
        // do like the shell, and spit out the literal glob
        var literal = self.minimatch.globSet[i]
        if (nou)
          all.push(literal)
        else
          all[literal] = true
      }
    } else {
      // had matches
      var m = Object.keys(matches)
      if (nou)
        all.push.apply(all, m)
      else
        m.forEach(function (m) {
          all[m] = true
        })
    }
  }

  if (!nou)
    all = Object.keys(all)

  if (!self.nosort)
    all = all.sort(self.nocase ? alphasorti : alphasort)

  // at *some* point we statted all of these
  if (self.mark) {
    for (var i = 0; i < all.length; i++) {
      all[i] = self._mark(all[i])
    }
    if (self.nodir) {
      all = all.filter(function (e) {
        var notDir = !(/\/$/.test(e))
        var c = self.cache[e] || self.cache[makeAbs(self, e)]
        if (notDir && c)
          notDir = c !== 'DIR' && !Array.isArray(c)
        return notDir
      })
    }
  }

  if (self.ignore.length)
    all = all.filter(function(m) {
      return !isIgnored(self, m)
    })

  self.found = all
}

function mark (self, p) {
  var abs = makeAbs(self, p)
  var c = self.cache[abs]
  var m = p
  if (c) {
    var isDir = c === 'DIR' || Array.isArray(c)
    var slash = p.slice(-1) === '/'

    if (isDir && !slash)
      m += '/'
    else if (!isDir && slash)
      m = m.slice(0, -1)

    if (m !== p) {
      var mabs = makeAbs(self, m)
      self.statCache[mabs] = self.statCache[abs]
      self.cache[mabs] = self.cache[abs]
    }
  }

  return m
}

// lotta situps...
function makeAbs (self, f) {
  var abs = f
  if (f.charAt(0) === '/') {
    abs = path.join(self.root, f)
  } else if (isAbsolute(f) || f === '') {
    abs = f
  } else if (self.changedCwd) {
    abs = path.resolve(self.cwd, f)
  } else {
    abs = path.resolve(f)
  }

  if (process.platform === 'win32')
    abs = abs.replace(/\\/g, '/')

  return abs
}


// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
function isIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path))
  })
}

function childrenIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return !!(item.gmatcher && item.gmatcher.match(path))
  })
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(17)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

ShExWebApp = (function () {
  let shapeMap = __webpack_require__(20)
  return Object.assign({}, {
    ShExTerm:       __webpack_require__(3),
    Util:           __webpack_require__(4),
    Validator:      __webpack_require__(24),
    Writer:         __webpack_require__(11),
    Api:            __webpack_require__(26),
    Parser:         __webpack_require__(12),
    ShapeMap:       shapeMap,
    ShapeMapParser: shapeMap.Parser,
  })
})()

if (true)
  module.exports = ShExWebApp;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* ShapeMap - javascript module to associate RDF nodes with labeled shapes.
 *
 * See README for description.
 */

const ShapeMapCjsModule = (function () {
  const symbols = __webpack_require__(8)

  // Write the parser object directly into the symbols so the caller shares a
  // symbol space with ShapeMapJison for e.g. start and focus.
  symbols.Parser = __webpack_require__(21)
  return symbols
})();

// Export the `ShExValidator` class as a whole.
if (true)
  module.exports = ShapeMapCjsModule;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

const ShapeMapParser = (function () {

// stolen as much as possible from SPARQL.js
if (true) {
  ShapeMapJison = __webpack_require__(22).Parser; // node environment
} else {}

// Creates a ShEx parser with the given pre-defined prefixes
const prepareParser = function (baseIRI, schemaMeta, dataMeta) {
  // Create a copy of the prefixes
  const schemaBase = schemaMeta.base;
  const schemaPrefixesCopy = {};
  for (const prefix in schemaMeta.prefixes || {})
    schemaPrefixesCopy[prefix] = schemaMeta.prefixes[prefix];
  const dataBase = dataMeta.base;
  const dataPrefixesCopy = {};
  for (const prefix in dataMeta.prefixes || {})
    dataPrefixesCopy[prefix] = dataMeta.prefixes[prefix];

  // Create a new parser with the given prefixes
  // (Workaround for https://github.com/zaach/jison/issues/241)
  const parser = new ShapeMapJison();

  function runParser () {
    ShapeMapJison._schemaPrefixes = Object.create(schemaPrefixesCopy);
    ShapeMapJison._setSchemaBase(schemaBase);
    ShapeMapJison._dataPrefixes = Object.create(dataPrefixesCopy);
    ShapeMapJison._setDataBase(dataBase);
    ShapeMapJison._setFileName(baseIRI);
    try {
      return ShapeMapJison.prototype.parse.apply(parser, arguments);
    } catch (e) {
      // use the lexer's pretty-printing
      const lineNo = "lexer" in parser.yy ? parser.yy.lexer.yylineno + 1 : 1;
      const pos = "lexer" in parser.yy ? parser.yy.lexer.showPosition() : "";
      const t = Error(`${baseIRI}(${lineNo}): ${e.message}\n${pos}`);
      Error.captureStackTrace(t, runParser);
      parser.reset();
      throw t;
    }
  }
  parser.parse = runParser;
  parser._setSchemaBase = function (base) {
    ShapeMapJison._setSchemaBase;
    schemaBase = base;
  }
  parser._setDataBase = function (base) {
    ShapeMapJison._setDataBase;
    dataBase = base;
  }
  parser._setFileName = ShapeMapJison._setFileName;
  parser.reset = ShapeMapJison.reset;
  return parser;
}

return {
  construct: prepareParser
};
})();

if (true)
  module.exports = ShapeMapParser;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ShapeMapJison = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,16],$V2=[1,11],$V3=[1,14],$V4=[1,25],$V5=[1,24],$V6=[1,21],$V7=[1,22],$V8=[1,23],$V9=[1,28],$Va=[1,26],$Vb=[1,27],$Vc=[1,29],$Vd=[1,12],$Ve=[1,13],$Vf=[1,15],$Vg=[4,9],$Vh=[16,19,20,21],$Vi=[2,25],$Vj=[16,19,20,21,37],$Vk=[16,19,20,21,31,34,37,39,46,48,50,53,54,55,56,76,77,78,79,80,81,82],$Vl=[4,9,16,19,20,21,37,43,74,75],$Vm=[4,9,43],$Vn=[29,46,80,81,82],$Vo=[4,9,42,43],$Vp=[1,59],$Vq=[46,79,80,81,82],$Vr=[31,34,39,46,48,50,53,54,55,56,76,77,78,80,81,82],$Vs=[1,94],$Vt=[1,85],$Vu=[1,86],$Vv=[1,87],$Vw=[1,90],$Vx=[1,91],$Vy=[1,92],$Vz=[1,93],$VA=[1,95],$VB=[33,48,49,50,53,54,55,56,63],$VC=[4,9,37,65],$VD=[1,99],$VE=[9,37],$VF=[9,65];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"shapeMap":3,"EOF":4,"pair":5,"Q_O_QGT_COMMA_E_S_Qpair_E_C_E_Star":6,"QGT_COMMA_E_Opt":7,"O_QGT_COMMA_E_S_Qpair_E_C":8,"GT_COMMA":9,"nodeSelector":10,"statusAndShape":11,"Qreason_E_Opt":12,"QjsonAttributes_E_Opt":13,"reason":14,"jsonAttributes":15,"GT_AT":16,"Qstatus_E_Opt":17,"shapeSelector":18,"ATSTART":19,"ATPNAME_NS":20,"ATPNAME_LN":21,"status":22,"objectTerm":23,"triplePattern":24,"IT_SPARQL":25,"string":26,"nodeIri":27,"shapeIri":28,"START":29,"subjectTerm":30,"BLANK_NODE_LABEL":31,"literal":32,"GT_LCURLEY":33,"IT_FOCUS":34,"nodePredicate":35,"O_QobjectTerm_E_Or_QIT___E_C":36,"GT_RCURLEY":37,"O_QsubjectTerm_E_Or_QIT___E_C":38,"IT__":39,"GT_NOT":40,"GT_OPT":41,"GT_DIVIDE":42,"GT_DOLLAR":43,"O_QAPPINFO_COLON_E_Or_QAPPINFO_SPACE_COLON_E_C":44,"jsonValue":45,"APPINFO_COLON":46,"APPINFO_SPACE_COLON":47,"IT_false":48,"IT_null":49,"IT_true":50,"jsonObject":51,"jsonArray":52,"INTEGER":53,"DECIMAL":54,"DOUBLE":55,"STRING_LITERAL2":56,"Q_O_QjsonMember_E_S_QGT_COMMA_E_S_QjsonMember_E_Star_C_E_Opt":57,"O_QGT_COMMA_E_S_QjsonMember_E_C":58,"jsonMember":59,"Q_O_QGT_COMMA_E_S_QjsonMember_E_C_E_Star":60,"O_QjsonMember_E_S_QGT_COMMA_E_S_QjsonMember_E_Star_C":61,"STRING_LITERAL2_COLON":62,"GT_LBRACKET":63,"Q_O_QjsonValue_E_S_QGT_COMMA_E_S_QjsonValue_E_Star_C_E_Opt":64,"GT_RBRACKET":65,"O_QGT_COMMA_E_S_QjsonValue_E_C":66,"Q_O_QGT_COMMA_E_S_QjsonValue_E_C_E_Star":67,"O_QjsonValue_E_S_QGT_COMMA_E_S_QjsonValue_E_Star_C":68,"rdfLiteral":69,"numericLiteral":70,"booleanLiteral":71,"Q_O_QLANGTAG_E_Or_QGT_DTYPE_E_S_QnodeIri_E_C_E_Opt":72,"O_QLANGTAG_E_Or_QGT_DTYPE_E_S_QnodeIri_E_C":73,"LANGTAG":74,"GT_DTYPE":75,"STRING_LITERAL1":76,"STRING_LITERAL_LONG1":77,"STRING_LITERAL_LONG2":78,"IT_a":79,"IRIREF":80,"PNAME_LN":81,"PNAME_NS":82,"$accept":0,"$end":1},
terminals_: {2:"error",4:"EOF",9:"GT_COMMA",16:"GT_AT",19:"ATSTART",20:"ATPNAME_NS",21:"ATPNAME_LN",25:"IT_SPARQL",29:"START",31:"BLANK_NODE_LABEL",33:"GT_LCURLEY",34:"IT_FOCUS",37:"GT_RCURLEY",39:"IT__",40:"GT_NOT",41:"GT_OPT",42:"GT_DIVIDE",43:"GT_DOLLAR",46:"APPINFO_COLON",47:"APPINFO_SPACE_COLON",48:"IT_false",49:"IT_null",50:"IT_true",53:"INTEGER",54:"DECIMAL",55:"DOUBLE",56:"STRING_LITERAL2",62:"STRING_LITERAL2_COLON",63:"GT_LBRACKET",65:"GT_RBRACKET",74:"LANGTAG",75:"GT_DTYPE",76:"STRING_LITERAL1",77:"STRING_LITERAL_LONG1",78:"STRING_LITERAL_LONG2",79:"IT_a",80:"IRIREF",81:"PNAME_LN",82:"PNAME_NS"},
productions_: [0,[3,1],[3,4],[8,2],[6,0],[6,2],[7,0],[7,1],[5,4],[12,0],[12,1],[13,0],[13,1],[11,3],[11,1],[11,1],[11,1],[17,0],[17,1],[10,1],[10,1],[10,2],[10,2],[18,1],[18,1],[30,1],[30,1],[23,1],[23,1],[24,5],[24,5],[36,1],[36,1],[38,1],[38,1],[22,1],[22,1],[14,2],[15,3],[44,1],[44,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[51,3],[58,2],[60,0],[60,2],[61,2],[57,0],[57,1],[59,2],[52,3],[66,2],[67,0],[67,2],[68,2],[64,0],[64,1],[32,1],[32,1],[32,1],[70,1],[70,1],[70,1],[69,2],[73,1],[73,2],[72,0],[72,1],[71,1],[71,1],[26,1],[26,1],[26,1],[26,1],[35,1],[35,1],[27,1],[27,1],[27,1],[27,1],[28,1],[28,1],[28,1],[28,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

          return []
        
break;
case 2:

          return [$$[$0-3]].concat($$[$0-2])
        
break;
case 3: case 51: case 59:
this.$ = $$[$0];
break;
case 4: case 60: case 63:
this.$ = [  ];
break;
case 5: case 61:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 8:
this.$ = extend({ node: $$[$0-3] }, $$[$0-2], $$[$0-1], $$[$0]);
break;
case 9: case 11: case 52: case 55: case 74:
this.$ = {  };
break;
case 13:
this.$ = extend({ shape: $$[$0] }, $$[$0-1]);
break;
case 14:
this.$ = { shape: ShapeMap.start };
break;
case 15:

        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        this.$ = { shape: expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, $$[$0].length - 1)) };
      
break;
case 16:

        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        const namePos = $$[$0].indexOf(':');
        this.$ = { shape: expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, namePos)) + $$[$0].substr(namePos + 1) };
      
break;
case 17:
this.$ = { status: 'conformant' } // defaults to conformant;
break;
case 18:
this.$ = { status: $$[$0] };
break;
case 21:
this.$ = { type: "Extension", language: "http://www.w3.org/ns/shex#Extensions-sparql", lexical: $$[$0]["@value"] };
break;
case 22:
this.$ = { type: "Extension", language: $$[$0-1], lexical: $$[$0]["@value"] };
break;
case 24:
this.$ = ShapeMap.start;
break;
case 29:
this.$ = { type: "TriplePattern", subject: ShapeMap.focus, predicate: $$[$0-2], object: $$[$0-1] };
break;
case 30:
this.$ = { type: "TriplePattern", subject: $$[$0-3], predicate: $$[$0-2], object: ShapeMap.focus };
break;
case 32: case 34: case 42:
this.$ = null;
break;
case 35:
this.$ = 'nonconformant';
break;
case 36:
this.$ = 'unknown';
break;
case 37:
this.$ = { reason: $$[$0] };
break;
case 38:
this.$ = { appinfo: $$[$0] };
break;
case 41:
this.$ = false;
break;
case 43:
this.$ = true;
break;
case 46: case 47: case 48:
this.$ = parseFloat($$[$0]);
break;
case 49:
this.$ = unescapeString($$[$0], 1)["@value"];
break;
case 50: case 58:
this.$ = $$[$0-1];
break;
case 53: case 54: case 71:
this.$ = extend($$[$0-1], $$[$0]);
break;
case 57:

        this.$ = {  };
        const t = $$[$0-1].substr(0, $$[$0-1].length - 1).trim(); // remove trailing ':' and spaces
        this.$[unescapeString(t, 1)["@value"]] = $$[$0];
      
break;
case 62:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 68:
this.$ = createLiteral($$[$0], XSD_INTEGER);
break;
case 69:
this.$ = createLiteral($$[$0], XSD_DECIMAL);
break;
case 70:
this.$ = createLiteral($$[$0], XSD_DOUBLE);
break;
case 72:
this.$ = obj("@language", $$[$0].substr(1).toLowerCase());
break;
case 73:
this.$ = obj("@type", $$[$0]);
break;
case 76:
this.$ = createLiteral("true", XSD_BOOLEAN);
break;
case 77:
this.$ = createLiteral("false", XSD_BOOLEAN);
break;
case 78: case 80:
this.$ = unescapeString($$[$0], 1);
break;
case 79: case 81:
this.$ = unescapeString($$[$0], 3);
break;
case 83:
this.$ = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
break;
case 84:

        const node = unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._dataBase === null || absoluteIRI.test(node) ? node : _resolveDataIRI(node)
      
break;
case 85: case 86:
this.$ = parsePName($$[$0], Parser._dataPrefixes);
break;
case 87:
this.$ = expandPrefix(Parser._dataPrefixes, $$[$0].substr(0, $$[$0].length - 1));;
break;
case 88:

        const shape = unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._schemaBase === null || absoluteIRI.test(shape) ? shape : _resolveSchemaIRI(shape)
      
break;
case 89: case 90:
this.$ = parsePName($$[$0], Parser._schemaPrefixes);
break;
case 91:
this.$ = expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, $$[$0].length - 1));;
break;
}
},
table: [{3:1,4:[1,2],5:3,10:4,23:5,24:6,25:$V0,26:20,27:8,30:9,31:$V1,32:10,33:$V2,46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},{1:[3]},{1:[2,1]},o($Vg,[2,4],{6:30}),{11:31,16:[1,32],19:[1,33],20:[1,34],21:[1,35]},o($Vh,[2,19]),o($Vh,[2,20]),{26:36,56:$V9,76:$Va,77:$Vb,78:$Vc},o($Vh,$Vi,{26:37,56:$V9,76:$Va,77:$Vb,78:$Vc}),o($Vj,[2,27]),o($Vj,[2,28]),{27:42,30:40,31:$V1,34:[1,38],38:39,39:[1,41],46:$V3,80:$Vd,81:$Ve,82:$Vf},o($Vk,[2,84]),o($Vk,[2,85]),o($Vk,[2,86]),o($Vk,[2,87]),o([16,19,20,21,37,46,79,80,81,82],[2,26]),o($Vj,[2,65]),o($Vj,[2,66]),o($Vj,[2,67]),o($Vj,[2,74],{72:43,73:44,74:[1,45],75:[1,46]}),o($Vj,[2,68]),o($Vj,[2,69]),o($Vj,[2,70]),o($Vj,[2,76]),o($Vj,[2,77]),o($Vl,[2,78]),o($Vl,[2,79]),o($Vl,[2,80]),o($Vl,[2,81]),{4:[2,6],7:47,8:48,9:[1,49]},o($Vm,[2,9],{12:50,14:51,42:[1,52]}),o($Vn,[2,17],{17:53,22:54,40:[1,55],41:[1,56]}),o($Vo,[2,14]),o($Vo,[2,15]),o($Vo,[2,16]),o($Vh,[2,21]),o($Vh,[2,22]),{27:58,35:57,46:$V3,79:$Vp,80:$Vd,81:$Ve,82:$Vf},{27:58,35:60,46:$V3,79:$Vp,80:$Vd,81:$Ve,82:$Vf},o($Vq,[2,33]),o($Vq,[2,34]),o([37,46,79,80,81,82],$Vi),o($Vj,[2,71]),o($Vj,[2,75]),o($Vj,[2,72]),{27:61,46:$V3,80:$Vd,81:$Ve,82:$Vf},{4:[1,62]},o($Vg,[2,5]),{4:[2,7],5:63,10:4,23:5,24:6,25:$V0,26:20,27:8,30:9,31:$V1,32:10,33:$V2,46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},o($Vg,[2,11],{13:64,15:65,43:[1,66]}),o($Vm,[2,10]),{26:67,56:$V9,76:$Va,77:$Vb,78:$Vc},{18:68,28:69,29:[1,70],46:[1,73],80:[1,71],81:[1,72],82:[1,74]},o($Vn,[2,18]),o($Vn,[2,35]),o($Vn,[2,36]),{23:76,26:20,27:42,30:9,31:$V1,32:10,36:75,39:[1,77],46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},o($Vr,[2,82]),o($Vr,[2,83]),{34:[1,78]},o($Vj,[2,73]),{1:[2,2]},o($Vg,[2,3]),o($Vg,[2,8]),o($Vg,[2,12]),{44:79,46:[1,80],47:[1,81]},o($Vm,[2,37]),o($Vo,[2,13]),o($Vo,[2,23]),o($Vo,[2,24]),o($Vo,[2,88]),o($Vo,[2,89]),o($Vo,[2,90]),o($Vo,[2,91]),{37:[1,82]},{37:[2,31]},{37:[2,32]},{37:[1,83]},{33:$Vs,45:84,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},o($VB,[2,39]),o($VB,[2,40]),o($Vh,[2,29]),o($Vh,[2,30]),o($Vg,[2,38]),o($VC,[2,41]),o($VC,[2,42]),o($VC,[2,43]),o($VC,[2,44]),o($VC,[2,45]),o($VC,[2,46]),o($VC,[2,47]),o($VC,[2,48]),o($VC,[2,49]),{37:[2,55],57:96,59:98,61:97,62:$VD},{33:$Vs,45:102,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA,64:100,65:[2,63],68:101},{37:[1,103]},{37:[2,56]},o($VE,[2,52],{60:104}),{33:$Vs,45:105,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},{65:[1,106]},{65:[2,64]},o($VF,[2,60],{67:107}),o($VC,[2,50]),{9:[1,109],37:[2,54],58:108},o($VE,[2,57]),o($VC,[2,58]),{9:[1,111],65:[2,62],66:110},o($VE,[2,53]),{59:112,62:$VD},o($VF,[2,61]),{33:$Vs,45:113,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},o($VE,[2,51]),o($VF,[2,59])],
defaultActions: {2:[2,1],62:[2,2],76:[2,31],77:[2,32],97:[2,56],101:[2,64]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: lexer.yylloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

  /*
    ShapeMap parser in the Jison parser generator format.
  */

  const ShapeMap = __webpack_require__(8);

  // Common namespaces and entities
  const XSD = 'http://www.w3.org/2001/XMLSchema#',
      XSD_INTEGER  = XSD + 'integer',
      XSD_DECIMAL  = XSD + 'decimal',
      XSD_FLOAT   = XSD + 'float',
      XSD_DOUBLE   = XSD + 'double',
      XSD_BOOLEAN  = XSD + 'boolean';

  const numericDatatypes = [
      XSD + "integer",
      XSD + "decimal",
      XSD + "float",
      XSD + "double",
      XSD + "string",
      XSD + "boolean",
      XSD + "dateTime",
      XSD + "nonPositiveInteger",
      XSD + "negativeInteger",
      XSD + "long",
      XSD + "int",
      XSD + "short",
      XSD + "byte",
      XSD + "nonNegativeInteger",
      XSD + "unsignedLong",
      XSD + "unsignedInt",
      XSD + "unsignedShort",
      XSD + "unsignedByte",
      XSD + "positiveInteger"
  ];

  const absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  const numericFacets = ["mininclusive", "minexclusive",
                       "maxinclusive", "maxexclusive"];

  // Extends a base object with properties of other objects
  function extend (base) {
    if (!base) base = {};
    for (let i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
      for (let name in arg)
        base[name] = arg[name];
    return base;
  }

  // N3.js:lib/N3Parser.js<0.4.5>:58 with
  //   s/this\./Parser./g
  // ### `_setSchemaBase` sets the base IRI to resolve relative IRIs.
  Parser._setSchemaBase = function (baseIRI) {
    if (!baseIRI)
      baseIRI = null;

    // baseIRI '#' check disabled to allow -x 'data:text/shex,...#'
    // else if (baseIRI.indexOf('#') >= 0)
    //   throw new Error('Invalid base IRI ' + baseIRI);

    // Set base IRI and its components
    if (Parser._schemaBase = baseIRI) {
      Parser._schemaBasePath   = baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(schemeAuthority);
      Parser._schemaBaseRoot   = baseIRI[0];
      Parser._schemaBaseScheme = baseIRI[1];
    }
  }
  Parser._setDataBase = function (baseIRI) {
    if (!baseIRI)
      baseIRI = null;

    // baseIRI '#' check disabled to allow -x 'data:text/shex,...#'
    // else if (baseIRI.indexOf('#') >= 0)
    //   throw new Error('Invalid base IRI ' + baseIRI);

    // Set base IRI and its components
    if (Parser._dataBase = baseIRI) {
      Parser._dataBasePath   = baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(schemeAuthority);
      Parser._dataBaseRoot   = baseIRI[0];
      Parser._dataBaseScheme = baseIRI[1];
    }
  }

  // N3.js:lib/N3Parser.js<0.4.5>:576 with
  //   s/this\./Parser./g
  //   s/token/iri/
  // ### `_resolveSchemaIRI` resolves a relative IRI token against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative.
  function _resolveSchemaIRI (iri) {
    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return Parser._schemaBase;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return Parser._schemaBase + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return Parser._schemaBase.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? Parser._schemaBaseScheme : Parser._schemaBaseRoot) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(Parser._schemaBasePath + iri);
    }
    }
  }
  function _resolveDataIRI (iri) {
    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return Parser._dataBase;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return Parser._dataBase + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return Parser._dataBase.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? Parser._dataBaseScheme : Parser._dataBaseRoot) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(Parser._dataBasePath + iri);
    }
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986.
  function _removeDotSegments (iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!dotSegments.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    const result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return result + '/' + iri.substr(i + 1);
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  function obj() {
    const ret = {  };
    for (let i = 0; i < arguments.length; i+= 2) {
      ret[arguments[i]] = arguments[i+1];
    }
    return ret;
  }

  // Creates a literal with the given value and type
  function createLiteral(value, type) {
    return obj("@value", value, "@type", type );
  }

  // Creates a new blank node identifier
  function blank() {
    return '_:b' + blankId++;
  };
  const blankId = 0;
  Parser._resetBlanks = function () { blankId = 0; }
  Parser.reset = function () {
    Parser._prefixes = Parser._imports = Parser.valueExprDefns = Parser.shapes = Parser.productions = Parser.start = Parser.startActs = null; // Reset state.
    Parser._schemaBase = Parser._schemaBasePath = Parser._schemaBaseRoot = Parser._schemaBaseIRIScheme = null;
  }
  let _fileName; // for debugging
  Parser._setFileName = function (fn) { _fileName = fn; }

  // Regular expression and replacement strings to escape strings
  const stringEscapeReplacements = { '\\': '\\', "'": "'", '"': '"',
                                   't': '\t', 'b': '\b', 'n': '\n', 'r': '\r', 'f': '\f' },
      pnameEscapeReplacements = {
        '\\': '\\', "'": "'", '"': '"',
        'n': '\n', 'r': '\r', 't': '\t', 'f': '\f', 'b': '\b',
        '_': '_', '~': '~', '.': '.', '-': '-', '!': '!', '$': '$', '&': '&',
        '(': '(', ')': ')', '*': '*', '+': '+', ',': ',', ';': ';', '=': '=',
        '/': '/', '?': '?', '#': '#', '@': '@', '%': '%',
      };


  // Translates string escape codes in the string into their textual equivalent
  function unescapeString(string, trimLength) {
    string = string.substring(trimLength, string.length - trimLength);
    return obj("@value", unescapeText(string, stringEscapeReplacements));
  }

  function unescapeLangString(string, trimLength) {
    const at = string.lastIndexOf("@");
    const lang = string.substr(at);
    string = string.substr(0, at);
    const u = unescapeString(string, trimLength);
    return extend(u, obj("@language", lang.substr(1).toLowerCase()));
  }

  function error (msg) {
    Parser.reset();
    throw new Error(msg);
  }

  // Parse a prefix out of a PName or throw Error
  function parsePName (pname, prefixes) {
    const namePos = pname.indexOf(':');
    return expandPrefix(prefixes, pname.substr(0, namePos)) + unescapeText(pname.substr(namePos + 1), pnameEscapeReplacements);
  }

  // Expand declared prefix or throw Error
  function expandPrefix (prefixes, prefix) {
    if (!(prefix in prefixes))
      error('Parse error; unknown prefix: ' + prefix);
    return prefixes[prefix];
  }

  // Add a shape to the map
  function addShape (label, shape) {
    if (Parser.productions && label in Parser.productions)
      error("Structural error: "+label+" is a shape");
    if (!Parser.shapes)
      Parser.shapes = {};
    if (label in Parser.shapes) {
      if (Parser.options.duplicateShape === "replace")
        Parser.shapes[label] = shape;
      else if (Parser.options.duplicateShape !== "ignore")
        error("Parse error: "+label+" already defined");
    } else
      Parser.shapes[label] = shape;
  }

  // Add a production to the map
  function addProduction (label, production) {
    if (Parser.shapes && label in Parser.shapes)
      error("Structural error: "+label+" is a shape");
    if (!Parser.productions)
      Parser.productions = {};
    if (label in Parser.productions) {
      if (Parser.options.duplicateShape === "replace")
        Parser.productions[label] = production;
      else if (Parser.options.duplicateShape !== "ignore")
        error("Parse error: "+label+" already defined");
    } else
      Parser.productions[label] = production;
  }

  function shapeJunction (type, container, elts) {
    if (elts.length === 0) {
      return container;
    } else if (container.type === type) {
      container.shapeExprs = container.shapeExprs.concat(elts);
      return container;
    } else {
      return { type: type, shapeExprs: [container].concat(elts) };
    }
  }

  const EmptyObject = {  };
  const EmptyShape = { type: "Shape" };

  // <?INCLUDE from ShExUtil. Factor into `rdf-token` module? ?>
  /**
   * unescape numerics and allowed single-character escapes.
   * throws: if there are any unallowed sequences
   */
  function unescapeText (string, replacements) {
    const regex = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g;
    try {
      string = string.replace(regex, function (sequence, unicode4, unicode8, escapedChar) {
        let charCode;
        if (unicode4) {
          charCode = parseInt(unicode4, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          return String.fromCharCode(charCode);
        }
        else if (unicode8) {
          charCode = parseInt(unicode8, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          if (charCode < 0xFFFF) return String.fromCharCode(charCode);
          return String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
        }
        else {
          const replacement = replacements[escapedChar];
          if (!replacement) throw new Error("no replacement found for '" + escapedChar + "'");
          return replacement;
        }
      });
      return string;
    }
    catch (error) { console.warn(error); return ''; }
  }
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/**/
break;
case 1:return 47;
break;
case 2:return 62;
break;
case 3:return 34;
break;
case 4:return 29;
break;
case 5:return 19;
break;
case 6:return 25;
break;
case 7:return 21;
break;
case 8:return 20;
break;
case 9:return 74;
break;
case 10:return 81;
break;
case 11:return 46;
break;
case 12:return 82;
break;
case 13:return 55;
break;
case 14:return 54;
break;
case 15:return 53;
break;
case 16:return 80;
break;
case 17:return 31;
break;
case 18:return 77;
break;
case 19:return 78;
break;
case 20:return 76;
break;
case 21:return 56;
break;
case 22:return 79;
break;
case 23:return 9;
break;
case 24:return 33;
break;
case 25:return 37;
break;
case 26:return 16;
break;
case 27:return 40;
break;
case 28:return 41;
break;
case 29:return 42;
break;
case 30:return 43;
break;
case 31:return 63;
break;
case 32:return 65;
break;
case 33:return 75;
break;
case 34:return 39;
break;
case 35:return 50;
break;
case 36:return 48;
break;
case 37:return 49;
break;
case 38:return 4;
break;
case 39:return 'unexpected word "'+yy_.yytext+'"';
break;
case 40:return 'invalid character '+yy_.yytext;
break;
}
},
rules: [/^(?:\s+|(#[^\u000a\u000d]*|\/\*([^*]|\*([^/]|\\\/))*\*\/))/,/^(?:(appinfo[\u0020\u000A\u0009]+:))/,/^(?:("([^\u0022\u005C\u000A\u000D]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"[\u0020\u000A\u0009]*:))/,/^(?:([Ff][Oo][Cc][Uu][Ss]))/,/^(?:([Ss][Tt][Aa][Rr][Tt]))/,/^(?:(@[Ss][Tt][Aa][Rr][Tt]))/,/^(?:([Ss][Pp][Aa][Rr][Qq][Ll]))/,/^(?:(@(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*))))/,/^(?:(@((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)))/,/^(?:(@([A-Za-z])+((-([0-9A-Za-z])+))*))/,/^(?:(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*)))/,/^(?:(appinfo:))/,/^(?:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:))/,/^(?:(([+-])?((([0-9])+\.([0-9])*(([Ee]([+-])?([0-9])+)))|((\.)?([0-9])+(([Ee]([+-])?([0-9])+))))))/,/^(?:(([+-])?([0-9])*\.([0-9])+))/,/^(?:(([+-])?([0-9])+))/,/^(?:(<([^\u0000-\u0020<>\"{}|^`\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*>))/,/^(?:(_:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|[0-9])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"))/,/^(?:a\b)/,/^(?:,)/,/^(?:\{)/,/^(?:\})/,/^(?:@)/,/^(?:!)/,/^(?:\?)/,/^(?:\/)/,/^(?:\$)/,/^(?:\[)/,/^(?:\])/,/^(?:\^\^)/,/^(?:_\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:[a-zA-Z0-9_-]+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = ShapeMapJison;
exports.Parser = ShapeMapJison.Parser;
exports.parse = function () { return ShapeMapJison.parse.apply(ShapeMapJison, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(2).readFileSync(__webpack_require__(1).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(9)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var HierarchyClosure = (function () {
  /** create a hierarchy object
   * This object keeps track of direct children and parents as well as transitive children and parents.
   */
  function makeHierarchy () {
    let roots = {}
    let parents = {}
    let children = {}
    let holders = {}
    return {
      add: function (parent, child) {
        if (// test if this is a novel entry.
          (parent in children && children[parent].indexOf(child) !== -1)) {
          return
        }
        let target = parent in holders
          ? getNode(parent)
          : (roots[parent] = getNode(parent)) // add new parents to roots.
        let value = getNode(child)

        target[child] = value
        delete roots[child]

        // // maintain hierarchy (direct and confusing)
        // children[parent] = children[parent].concat(child, children[child])
        // children[child].forEach(c => parents[c] = parents[c].concat(parent, parents[parent]))
        // parents[child] = parents[child].concat(parent, parents[parent])
        // parents[parent].forEach(p => children[p] = children[p].concat(child, children[child]))

        // maintain hierarchy (generic and confusing)
        updateClosure(children, parents, child, parent)
        updateClosure(parents, children, parent, child)
        function updateClosure (container, members, near, far) {
          container[far] = container[far].filter(
            e => /* e !== near && */ container[near].indexOf(e) === -1
          ).concat(container[near].indexOf(near) === -1 ? [near] : [], container[near])
          container[near].forEach(
            n => (members[n] = members[n].filter(
              e => e !== far && members[far].indexOf(e) === -1
            ).concat(members[far].indexOf(far) === -1 ? [far] : [], members[far]))
          )
        }

        function getNode (node) {
          if (!(node in holders)) {
            parents[node] = []
            children[node] = []
            holders[node] = {}
          }
          return holders[node]
        }
      },
      roots: roots,
      parents: parents,
      children: children
    }
  }

  function depthFirst (n, f, p) {
    return Object.keys(n).reduce((ret, k) => {
      return ret.concat(
        depthFirst(n[k], f, k),
        p ? f(k, p) : []) // outer invocation can have null parent
    }, [])
  }

  return { create: makeHierarchy, depthFirst }
})()

/* istanbul ignore next */
if (true) {
  module.exports = HierarchyClosure
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* ShExValidator - javascript module to validate a graph with respect to Shape Expressions
 *
 * Status: 1/2 tested, no known bugs.
 *
 * TODO:
 *   constraint violation reporting.
 */

const ShExValidatorCjsModule = (function () {
const UNBOUNDED = -1;

// interface constants
const Start = { term: "START" }
const InterfaceOptions = {
  "coverage": {
    "firstError": "fail on first error (usually used with eval-simple-1err)",
    "exhaustive": "find as many errors as possible (usually used with eval-threaded-nerr)"
  }
};

const VERBOSE = "VERBOSE" in process.env;
// **ShExValidator** provides ShEx utility functions

const ProgramFlowError = { type: "ProgramFlowError", errors: [{ type: "UntrackedError" }] };

const ShExTerm = __webpack_require__(3);
let ShExVisitor = __webpack_require__(10);

function getLexicalValue (term) {
  return ShExTerm.isIRI(term) ? term :
    ShExTerm.isLiteral(term) ? ShExTerm.getLiteralValue(term) :
    term.substr(2); // bnodes start with "_:"
}


const XSD = "http://www.w3.org/2001/XMLSchema#";
const integerDatatypes = [
  XSD + "integer",
  XSD + "nonPositiveInteger",
  XSD + "negativeInteger",
  XSD + "long",
  XSD + "int",
  XSD + "short",
  XSD + "byte",
  XSD + "nonNegativeInteger",
  XSD + "unsignedLong",
  XSD + "unsignedInt",
  XSD + "unsignedShort",
  XSD + "unsignedByte",
  XSD + "positiveInteger"
];

const decimalDatatypes = [
  XSD + "decimal",
].concat(integerDatatypes);

const numericDatatypes = [
  XSD + "float",
  XSD + "double"
].concat(decimalDatatypes);

const numericParsers = {};
numericParsers[XSD + "integer"] = function (label, parseError) {
  if (!(label.match(/^[+-]?[0-9]+$/))) {
    parseError("illegal integer value '" + label + "'");
  }
  return parseInt(label);
};
numericParsers[XSD + "decimal"] = function (label, parseError) {
  if (!(label.match(/^[+-]?(?:[0-9]*\.[0-9]+|[0-9]+)$/))) { // XSD has no pattern for decimal?
    parseError("illegal decimal value '" + label + "'");
  }
  return parseFloat(label);
};
const DECIMAL_REGEX = /^[+\-]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][+\-]?[0-9]+)?$/;
numericParsers[XSD + "float"  ] = function (label, parseError) {
  if (label === "NaN") return NaN;
  if (label === "INF") return Infinity;
  if (label === "-INF") return -Infinity;
  if (!(label.match(DECIMAL_REGEX))) { // XSD has no pattern for float?
    parseError("illegal float value '" + label + "'");
  }
  return parseFloat(label);
};
numericParsers[XSD + "double" ] = function (label, parseError) {
  if (label === "NaN") return NaN;
  if (label === "INF") return Infinity;
  if (label === "-INF") return -Infinity;
  if (!(label.match(DECIMAL_REGEX))) {
    parseError("illegal double value '" + label + "'");
  }
  return Number(label);
};

function testRange (value, datatype, parseError) {
  const ranges = {
    //    integer            -1 0 1 +1 | "" -1.0 +1.0 1e0 NaN INF
    //    decimal            -1 0 1 +1 -1.0 +1.0 | "" 1e0 NaN INF
    //    float              -1 0 1 +1 -1.0 +1.0 1e0 1E0 NaN INF -INF | "" +INF
    //    double             -1 0 1 +1 -1.0 +1.0 1e0 1E0 NaN INF -INF | "" +INF
    //    nonPositiveInteger -1 0 +0 -0 | 1 +1 1a a1
    //    negativeInteger    -1 | 0 +0 -0 1
    //    long               -1 0 1 +1 |
    //    int                -1 0 1 +1 |
    //    short              -32768 0 32767 | -32769 32768
    //    byte               -128 0 127 | "" -129 128
    //    nonNegativeInteger 0 -0 +0 1 +1 | -1
    //    unsignedLong       0 1 | -1
    //    unsignedInt        0 1 | -1
    //    unsignedShort      0 65535 | -1 65536
    //    unsignedByte       0 255 | -1 256
    //    positiveInteger    1 | -1 0
    //    string             "" "a" "0"
    //    boolean            true false 0 1 | "" TRUE FALSE tRuE fAlSe -1 2 10 01
    //    dateTime           "2012-01-02T12:34:56.78Z" | "" "2012-01-02T" "2012-01-02"
    integer:            { min: -Infinity           , max: Infinity },
    decimal:            { min: -Infinity           , max: Infinity },
    float:              { min: -Infinity           , max: Infinity },
    double:             { min: -Infinity           , max: Infinity },
    nonPositiveInteger: { min: -Infinity           , max: 0        },
    negativeInteger:    { min: -Infinity           , max: -1       },
    long:               { min: -9223372036854775808, max: 9223372036854775807 },
    int:                { min: -2147483648         , max: 2147483647 },
    short:              { min: -32768              , max: 32767    },
    byte:               { min: -128                , max: 127      },
    nonNegativeInteger: { min: 0                   , max: Infinity },
    unsignedLong:       { min: 0                   , max: 18446744073709551615 },
    unsignedInt:        { min: 0                   , max: 4294967295 },
    unsignedShort:      { min: 0                   , max: 65535    },
    unsignedByte:       { min: 0                   , max: 255      },
    positiveInteger:    { min: 1                   , max: Infinity }
  }
  const parms = ranges[datatype.substr(XSD.length)];
  if (!parms) throw Error("unexpected datatype: " + datatype);
  if (value < parms.min) {
    parseError("\"" + value + "\"^^<" + datatype + "> is less than the min:", parms.min);
  } else if (value > parms.max) {
    parseError("\"" + value + "\"^^<" + datatype + "> is greater than the max:", parms.min);
  }
};

/*
function intSubType (spec, label, parseError) {
  const ret = numericParsers[XSD + "integer"](label, parseError);
  if ("min" in spec && ret < spec.min)
    parseError("illegal " + XSD + spec.type + " value '" + label + "' should not be < " + spec.min);
  if ("max" in spec && ret > spec.max)
    parseError("illegal " + XSD + spec.type + " value '" + label + "' should not be > " + spec.max);
  return ret;
}
[{type: "nonPositiveInteger", max: 0},
 {type: "negativeInteger", max: -1},
 {type: "long", min: -9223372036854775808, max: 9223372036854775807}, // beyond IEEE double
 {type: "int", min: -2147483648, max: 2147483647},
 {type: "short", min: -32768, max: 32767},
 {type: "byte", min: -128, max: 127},
 {type: "nonNegativeInteger", min: 0},
 {type: "unsignedLong", min: 0, max: 18446744073709551615},
 {type: "unsignedInt", min: 0, max: 4294967295},
 {type: "unsignedShort", min: 0, max: 65535},
 {type: "unsignedByte", min: 0, max: 255},
 {type: "positiveInteger", min: 1}].forEach(function (i) {
   numericParsers[XSD + i.type ] = function (label, parseError) {
     return intSubType(i, label, parseError);
   };
 });
*/

const stringTests = {
  length   : function (v, l) { return v.length === l; },
  minlength: function (v, l) { return v.length  >= l; },
  maxlength: function (v, l) { return v.length  <= l; }
};

const numericValueTests = {
  mininclusive  : function (n, m) { return n >= m; },
  minexclusive  : function (n, m) { return n >  m; },
  maxinclusive  : function (n, m) { return n <= m; },
  maxexclusive  : function (n, m) { return n <  m; }
};

const decimalLexicalTests = {
  totaldigits   : function (v, d) {
    const m = v.match(/[0-9]/g);
    return m && m.length <= d;
  },
  fractiondigits: function (v, d) {
    const m = v.match(/^[+-]?[0-9]*\.?([0-9]*)$/);
    return m && m[1].length <= d;
  }
};

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          const ret = { value: ShExTerm.getLiteralValue(term) };
          const dt = ShExTerm.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          const lang = ShExTerm.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }

/* ShExValidator_constructor - construct an object for validating a schema.
 *
 * schema: a structure produced by a ShEx parser or equivalent.
 * options: object with controls for
 *   lax(true): boolean: whine about missing types in schema.
 *   diagnose(false): boolean: makde validate return a structure with errors.
 */
function ShExValidator_constructor(schema, db, options) {
  if (!(this instanceof ShExValidator_constructor))
    return new ShExValidator_constructor(schema, db, options);
  let index = schema._index || ShExVisitor.index(schema)
  this.type = "ShExValidator";
  options = options || {};
  this.options = options;
  this.options.coverage = this.options.coverage || "exhaustive";
  if (!("noCache" in options && options.noCache))
    this.known = {};

  const _ShExValidator = this;
  this.schema = schema;
  this._expect = this.options.lax ? noop : expect; // report errors on missing types.
  this._optimize = {}; // optimizations:
    // hasRepeatedGroups: whether there are patterns like (:p1 ., :p2 .)*
  this.reset = function () {  }; // included in case we need it later.
  // const regexModule = this.options.regexModule || require("@shexjs/eval-simple-1err");
  const regexModule = this.options.regexModule || __webpack_require__(25);

  /* getAST - compile a traditional regular expression abstract syntax tree.
   * Tested but not used at present.
   */
  this.getAST = function () {
    return {
      type: "AST",
      shapes: schema.shapes.reduce(function (ret, shape) {
        ret[shape.id] = {
          type: "ASTshape",
          expression: _compileShapeToAST(shape.expression, [], _ShExValidator.schema)
        };
        return ret;
      }, {})
    };
  };

  /* indexTripleConstraints - compile regular expression and index triple constraints
   */
  this.indexTripleConstraints = function (expression) {
    // list of triple constraints from (:p1 ., (:p2 . | :p3 .))
    const tripleConstraints = [];

    if (expression)
      indexTripleConstraints_dive(expression);
    return tripleConstraints;

    function indexTripleConstraints_dive (expr) {
      if (typeof expr === "string") // Inclusion
        return indexTripleConstraints_dive(index.tripleExprs[expr]);

      else if (expr.type === "TripleConstraint") {
        tripleConstraints.push(expr);
        return [tripleConstraints.length - 1]; // index of expr
      }

      else if (expr.type === "OneOf" || expr.type === "EachOf")
        return expr.expressions.reduce(function (acc, nested) {
          return acc.concat(indexTripleConstraints_dive(nested));
        }, []);

      else if (expr.type === "NestedShape")
        return [];

      else
        runtimeError("unexpected expr type: " + expr.type);
    };
  };

  /* emptyTracker - a tracker that does nothing
   */
  this.emptyTracker = function () {
    const noop = x => x;
    return {
      recurse: noop,
      known: noop,
      enter: function (point, label) { ++this.depth; },
      exit: function (point, label, ret) { --this.depth; },
      depth: 0
    };
  };

  /* validate - test point in db against the schema for labelOrShape
   * depth: level of recurssion; for logging.
   */
  this.validate = function (point, label, tracker, seen) {
    // default to schema's start shape
    if (typeof point === "object" && "termType" in point) {
      point = ShExTerm.internalTerm(point)
    }
    if (typeof point === "object") {
      const shapeMap = point;
      if (this.options.results === "api") {
        return shapeMap.map(pair => {
          let time = new Date();
          const res = this.validate(pair.node, pair.shape, label, tracker); // really tracker and seen
          time = new Date() - time;
          return {
            node: pair.node,
            shape: pair.shape,
            status: "errors" in res ? "nonconformant" : "conformant",
            appinfo: res,
            elapsed: time
          };
        });
      }
      const results = shapeMap.reduce((ret, pair) => {
        const res = this.validate(pair.node, pair.shape, label, tracker); // really tracker and seen
        return "errors" in res ?
          { passes: ret.passes, failures: ret.failures.concat(res) } :
          { passes: ret.passes.concat(res), failures: ret.failures } ;
      }, {passes: [], failures: []});
      if (false) { var _add; }
      if (results.failures.length > 0) {
        return results.failures.length !== 1 ?
          { type: "FailureList", errors: results.failures } :
          results.failures [0];
      } else {
        return results.passes.length !== 1 ?
          { type: "SolutionList", solutions: results.passes } :
          results.passes [0];
      }
    }

    const outside = tracker === undefined;
    // logging stuff
    if (!tracker)
      tracker = this.emptyTracker();
    if (!label || label === Start) {
      if (!schema.start)
        runtimeError("start production not defined");
    }

    let shape = null;
    if (label == Start) {
      shape = schema.start;
    } else if (!("shapes" in this.schema) || this.schema.shapes.length === 0) {
      runtimeError("shape " + label + " not found; no shapes in schema");
    } else if (label in index.shapeExprs) {
      shape = index.shapeExprs[label]
    } else {
      runtimeError("shape " + label + " not found in:\n" + Object.keys(index.shapeExprs || []).map(s => "  " + s).join("\n"));
    }
    if (typeof label !== "string")
      return this._validateShapeExpr(point, shape, Start, tracker, seen);

    if (seen === undefined)
      seen = {};
    const seenKey = point + "@" + (label === Start ? "_: -start-" : label);
    if (seenKey in seen)
      return tracker.recurse({
        type: "Recursion",
        node: ldify(point),
        shape: label
      });
    if ("known" in this && seenKey in this.known)
      return tracker.known(this.known[seenKey]);
    seen[seenKey] = { point: point, shape: label };
    tracker.enter(point, label);
    const ret = this._validateShapeExpr(point, shape, label, tracker, seen);
    tracker.exit(point, label, ret);
    delete seen[seenKey];
    if ("known" in this)
      this.known[seenKey] = ret;
    if ("startActs" in schema && outside) {
      ret.startActs = schema.startActs;
    }
    return ret;
  }

  this._validateShapeExpr = function (point, shapeExpr, shapeLabel, tracker, seen) {
    if (point === "")
      throw Error("validation needs a valid focus node");
    if (typeof shapeExpr === "string") { // ShapeRef
      return this._validateShapeExpr(point, index.shapeExprs[shapeExpr], shapeExpr, tracker, seen);
    } else if (shapeExpr.type === "NodeConstraint") {
      const sub = this._errorsMatchingNodeConstraint(point, shapeExpr, null);
      return sub.errors && sub.errors.length ? { // @@ when are both conditionals needed?
        type: "Failure",
        node: ldify(point),
        shape: shapeLabel,
        errors: sub.errors.map(function (error) { // !!! just sub.errors?
          return {
            type: "NodeConstraintViolation",
            shapeExpr: shapeExpr,
            error: error
          };
        })
      } : {
        type: "NodeConstraintTest",
        node: ldify(point),
        shape: shapeLabel,
        shapeExpr: shapeExpr
      };
    } else if (shapeExpr.type === "Shape") {
      return this._validateShape(point, shapeExpr, shapeLabel, tracker, seen);
    } else if (shapeExpr.type === "ShapeExternal") {
      return this.options.validateExtern(point, shapeLabel, tracker, seen);
    } else if (shapeExpr.type === "ShapeOr") {
      const errors = [];
      for (let i = 0; i < shapeExpr.shapeExprs.length; ++i) {
        const nested = shapeExpr.shapeExprs[i];
        const sub = this._validateShapeExpr(point, nested, shapeLabel, tracker, seen);
        if ("errors" in sub)
          errors.push(sub);
        else
          return { type: "ShapeOrResults", solution: sub };
      }
      return { type: "ShapeOrFailure", errors: errors };
    } else if (shapeExpr.type === "ShapeNot") {
      const sub = this._validateShapeExpr(point, shapeExpr.shapeExpr, shapeLabel, tracker, seen);
      if ("errors" in sub)
          return { type: "ShapeNotResults", solution: sub };
        else
          return { type: "ShapeNotFailure", errors: sub };
    } else if (shapeExpr.type === "ShapeAnd") {
      const passes = [];
      const errors = [];
      for (let i = 0; i < shapeExpr.shapeExprs.length; ++i) {
        const nested = shapeExpr.shapeExprs[i];
        const sub = this._validateShapeExpr(point, nested, shapeLabel, tracker, seen);
        if ("errors" in sub)
          errors.push(sub);
        else
          passes.push(sub);
      }
      if (errors.length > 0) {
        return  { type: "ShapeAndFailure", errors: errors};
      }
      return { type: "ShapeAndResults", solutions: passes };
    } else
      throw Error("expected one of Shape{Ref,And,Or} or NodeConstraint, got " + JSON.stringify(shapeExpr));
  }

  this._validateShape = function (point, shape, shapeLabel, tracker, seen) {
    const _ShExValidator = this;
    const valParms = { db, shapeLabel, tracker, seen };

    let ret = null;
    const startAcionStorage = {}; // !!! need test to see this write to results structure.
    if ("startActs" in schema) {
      const semActErrors = this.semActHandler.dispatchAll(schema.startActs, null, startAcionStorage)
      if (semActErrors.length)
        return {
          type: "Failure",
          node: ldify(point),
          shape: shapeLabel,
          errors: semActErrors
        }; // some semAct aborted !! return a better error
    }

    const fromDB  = db.getNeighborhood(point, shapeLabel, shape);
    const outgoingLength = fromDB.outgoing.length;
    const neighborhood = fromDB.outgoing.sort(
      (l, r) => l.predicate.localeCompare(r.predicate) || sparqlOrder(l.object, r.object)
    ).concat(fromDB.incoming.sort(
      (l, r) => l.predicate.localeCompare(r.predicate) || sparqlOrder(l.object, r.object)
    ));

    const constraintList = this.indexTripleConstraints(shape.expression);
    const tripleList = matchByPredicate(constraintList, neighborhood, outgoingLength, point, valParms);
    const {misses, extras} = whatsMissing(tripleList, neighborhood, outgoingLength, shape.extra || [])

    const xp = crossProduct(tripleList.constraintList, "NO_TRIPLE_CONSTRAINT");
    const partitionErrors = [];
    const regexEngine = regexModule.compile(schema, shape, index);
    while (xp.next() && ret === null) {
      const errors = []
      const usedTriples = []; // [{s1,p1,o1},{s2,p2,o2}] implicated triples -- used for messages
      const constraintMatchCount = // [2,1,0,1] how many triples matched a constraint
            _seq(neighborhood.length).map(function () { return 0; });

      // t2tc - array mapping neighborhood index to TripleConstraint
      const t2tcForThisShape = xp.get(); // [0,1,0,3] mapping from triple to constraint

      // Triples not mapped to triple constraints are not allowed in closed shapes.
      if (shape.closed) {
        const unexpectedTriples = neighborhood.slice(0, outgoingLength).filter((t, i) => {
          return t2tcForThisShape[i] === "NO_TRIPLE_CONSTRAINT" && // didn't match a constraint
          extras.indexOf(i) === -1; // wasn't in EXTRAs.
        });
        if (unexpectedTriples.length > 0)
          errors.push({
            type: "ClosedShapeViolation",
            unexpectedTriples: unexpectedTriples
          });
      }

      // Set usedTriples and constraintMatchCount.
      t2tcForThisShape.forEach(function (tpNumber, ord) {
        if (tpNumber !== "NO_TRIPLE_CONSTRAINT") {
          usedTriples.push(neighborhood[ord]);
          ++constraintMatchCount[tpNumber];
        }
      });
      const tc2t = _constraintToTriples(t2tcForThisShape, constraintList, tripleList); // e.g. [[t0, t2], [t1, t3]]

      const results = regexEngine.match(db, point, constraintList, tc2t, t2tcForThisShape, neighborhood, this.semActHandler, null);
      if ("errors" in results)
        [].push.apply(errors, results.errors);

      const possibleRet = { type: "ShapeTest", node: ldify(point), shape: shapeLabel };
      if (errors.length === 0 && Object.keys(results).length > 0) // only include .solution for non-empty pattern
        possibleRet.solution = results;
      if ("semActs" in shape) {
        const semActErrors = this.semActHandler.dispatchAll(shape.semActs, results, possibleRet)
        if (semActErrors.length)
          // some semAct aborted
          [].push.apply(errors, semActErrors);
      }

      partitionErrors.push(errors)
      if (errors.length === 0)
        ret = possibleRet
    }
    // end of while(xp.next())

    const missErrors = misses.map(function (miss) {
      const t = neighborhood[miss.tripleNo];
      return {
        type: "TypeMismatch",
        triple: {type: "TestedTriple", subject: t.subject, predicate: t.predicate, object: ldify(t.object)},
        constraint: constraintList[miss.constraintNo],
        errors: miss.errors
      };
    });

    // Report only last errors until we have a better idea.
    const lastErrors = partitionErrors[partitionErrors.length - 1];
    let errors = missErrors.concat(lastErrors.length === 1 ? lastErrors[0] : lastErrors);
    if (errors.length > 0)
      ret = {
        type: "Failure",
        node: ldify(point),
        shape: shapeLabel,
        errors: errors
      };

    // remove N3jsTripleToString
    if (VERBOSE)
      neighborhood.forEach(function (t) {
        delete t.toString;
      });

    return addShapeAttributes(shape, ret);
  };

  function matchByPredicate (constraintList, neighborhood, outgoingLength, point, valParms) {
    const outgoing = indexNeighborhood(neighborhood.slice(0, outgoingLength));
    const incoming = indexNeighborhood(neighborhood.slice(outgoingLength));
    return constraintList.reduce(function (ret, constraint, cNo) {

      // subject and object depend on direction of constraint.
      const searchSubject = constraint.inverse ? null : point;
      const searchObject = constraint.inverse ? point : null;
      const index = constraint.inverse ? incoming : outgoing;

      // get triples matching predciate
      const matchPredicate = index.byPredicate[constraint.predicate] ||
            []; // empty list when no triple matches that constraint

      // strip to triples matching value constraints (apart from @<someShape>)
      const matchConstraints = _ShExValidator._triplesMatchingShapeExpr(
        matchPredicate, constraint, valParms
      );

      matchConstraints.hits.forEach(function (evidence) {
        const tNo = neighborhood.indexOf(evidence.triple);
        ret.constraintList[tNo].push(cNo);
        ret.results[cNo][tNo] = evidence.sub;
      });
      matchConstraints.misses.forEach(function (evidence) {
        const tNo = neighborhood.indexOf(evidence.triple);
        ret.misses[tNo] = {constraintNo: cNo, errors: evidence.errors};
      });
      return ret;
    }, { misses: {}, results: _alist(constraintList.length), constraintList:_alist(neighborhood.length) })
  }

  function whatsMissing (tripleList, neighborhood, outgoingLength, extras) {
    const matchedExtras = []; // triples accounted for by EXTRA
    const misses = tripleList.constraintList.reduce(function (ret, constraints, ord) {
      if (constraints.length === 0 &&   // matches no constraints
          ord < outgoingLength &&       // not an incoming triple
          ord in tripleList.misses) {   // predicate matched some constraint(s)
        if (extras.indexOf(neighborhood[ord].predicate) !== -1) {
          matchedExtras.push(ord);
        } else {                        // not declared extra
          ret.push({                    // so it's a missed triple.
            tripleNo: ord,
            constraintNo: tripleList.misses[ord].constraintNo,
            errors: tripleList.misses[ord].errors
          });
        }
      }
      return ret;
    }, []);
    return {misses, extras: matchedExtras}
  }

  function addShapeAttributes (shape, ret) {
    if ("annotations" in shape)
      ret.annotations = shape.annotations;
    return ret;
  }

  // Pivot to triples by constraint.
  function _constraintToTriples (t2tc, constraintList, tripleList) {
    return t2tc.slice().
      reduce(function (ret, cNo, tNo) {
        if (cNo !== "NO_TRIPLE_CONSTRAINT")
          ret[cNo].push({tNo: tNo, res: tripleList.results[cNo][tNo]});
        return ret;
      }, _seq(constraintList.length).map(() => [])); // [length][]
  }

  this._triplesMatchingShapeExpr = function (triples, constraint, valParms) {
    const _ShExValidator = this;
    const misses = [];
    const hits = [];
    triples.forEach(function (triple) {
      const value = constraint.inverse ? triple.subject : triple.object;
      let sub;
      const oldBindings = JSON.parse(JSON.stringify(_ShExValidator.semActHandler.results));
      const errors = constraint.valueExpr === undefined ?
          undefined :
          (sub = _ShExValidator._errorsMatchingShapeExpr(value, constraint.valueExpr, valParms)).errors;
      if (!errors) {
        hits.push({triple: triple, sub: sub});
      } else if (hits.indexOf(triple) === -1) {
        _ShExValidator.semActHandler.results = JSON.parse(JSON.stringify(oldBindings));
        misses.push({triple: triple, errors: sub});
      }
    });
    return { hits: hits, misses: misses };
  }
  this._errorsMatchingShapeExpr = function (value, valueExpr, valParms) {
    const _ShExValidator = this;
    if (typeof valueExpr === "string") { // ShapeRef
      return _ShExValidator.validate(value, valueExpr, valParms.tracker, valParms.seen);
    } else if (valueExpr.type === "NodeConstraint") {
      return this._errorsMatchingNodeConstraint(value, valueExpr, null);
    } else if (valueExpr.type === "Shape") {
      return _ShExValidator._validateShapeExpr(value, valueExpr, valParms.shapeLabel, valParms.tracker, valParms.seen)
    } else if (valueExpr.type === "ShapeOr") {
      const errors = [];
      for (let i = 0; i < valueExpr.shapeExprs.length; ++i) {
        const nested = valueExpr.shapeExprs[i];
        const sub = _ShExValidator._errorsMatchingShapeExpr(value, nested, valParms);
        if ("errors" in sub)
          errors.push(sub);
        else
          return { type: "ShapeOrResults", solution: sub };
      }
      return { type: "ShapeOrFailure", errors: errors };
    } else if (valueExpr.type === "ShapeAnd") {
      const passes = [];
      for (let i = 0; i < valueExpr.shapeExprs.length; ++i) {
        const nested = valueExpr.shapeExprs[i];
        const sub = _ShExValidator._errorsMatchingShapeExpr(value, nested, valParms);
        if ("errors" in sub)
          return { type: "ShapeAndFailure", errors: [sub] };
        else
          passes.push(sub);
      }
      return { type: "ShapeAndResults", solutions: passes };
    } else if (valueExpr.type === "ShapeNot") {
      const sub = _ShExValidator._errorsMatchingShapeExpr(value, valueExpr.shapeExpr, valParms);
      // return sub.errors && sub.errors.length ? {} : {
      //   errors: ["Error validating " + value + " as " + JSON.stringify(valueExpr) + ": expected NOT to pass"] };
      const ret = Object.assign({
        type: null,
        focus: value
      }, valueExpr);
      if (sub.errors && sub.errors.length) {
        ret.type = "ShapeNotTest";
        // ret = {};
      } else {
        ret.type = "ShapeNotFailure";
        ret.errors = ["Error validating " + value + " as " + JSON.stringify(valueExpr) + ": expected NOT to pass"]
      }
      return ret;
    } else {
      throw Error("unknown value expression type '" + valueExpr.type + "'");
    }
  };

  /* _errorsMatchingNodeConstraint - return whether the value matches the value
   * expression without checking shape references.
   */
  this._errorsMatchingNodeConstraint = function (value, valueExpr, recurse) {
    const errors = [];
    const label = ShExTerm.isLiteral(value) ? ShExTerm.getLiteralValue(value) :
      ShExTerm.isBlank(value) ? value.substring(2) :
      value;
    const dt = ShExTerm.isLiteral(value) ? ShExTerm.getLiteralType(value) : null;
    const numeric = integerDatatypes.indexOf(dt) !== -1 ? XSD + "integer" : numericDatatypes.indexOf(dt) !== -1 ? dt : undefined;

    function validationError () {
      const errorStr = Array.prototype.join.call(arguments, "");
      errors.push("Error validating " + value + " as " + JSON.stringify(valueExpr) + ": " + errorStr);
      return false;
    }
    // if (negated) ;
    if (false) {} else {
      if ("nodeKind" in valueExpr) {
        if (["iri", "bnode", "literal", "nonliteral"].indexOf(valueExpr.nodeKind) === -1) {
          validationError("unknown node kind '" + valueExpr.nodeKind + "'");
        }
        if (ShExTerm.isBlank(value)) {
          if (valueExpr.nodeKind === "iri" || valueExpr.nodeKind === "literal") {
            validationError("blank node found when " + valueExpr.nodeKind + " expected");
          }
        } else if (ShExTerm.isLiteral(value)) {
          if (valueExpr.nodeKind !== "literal") {
            validationError("literal found when " + valueExpr.nodeKind + " expected");
          }
        } else if (valueExpr.nodeKind === "bnode" || valueExpr.nodeKind === "literal") {
          validationError("iri found when " + valueExpr.nodeKind + " expected");
        }
      }

      if (valueExpr.datatype  && valueExpr.values  ) validationError("found both datatype and values in "   +tripleConstraint);

      if (valueExpr.datatype) {
        if (!ShExTerm.isLiteral(value)) {
          validationError("mismatched datatype: " + value + " is not a literal with datatype " + valueExpr.datatype);
        }
        else if (ShExTerm.getLiteralType(value) !== valueExpr.datatype) {
          validationError("mismatched datatype: " + ShExTerm.getLiteralType(value) + " !== " + valueExpr.datatype);
        }
        else if (numeric) {
          testRange(numericParsers[numeric](label, validationError), valueExpr.datatype, validationError);
        }
        else if (valueExpr.datatype === XSD + "boolean") {
          if (label !== "true" && label !== "false" && label !== "1" && label !== "0")
            validationError("illegal boolean value: " + label);
        }
        else if (valueExpr.datatype === XSD + "dateTime") {
          if (!label.match(/^[+-]?\d{4}-[01]\d-[0-3]\dT[0-5]\d:[0-5]\d:[0-5]\d(\.\d+)?([+-][0-2]\d:[0-5]\d|Z)?$/))
            validationError("illegal dateTime value: " + label);
        }
      }

      if (valueExpr.values) {
        if (ShExTerm.isLiteral(value) && valueExpr.values.reduce((ret, v) => {
          if (ret) return true;
          const ld = ldify(value);
          if (v.type === "Language") {
            return v.languageTag === ld.language; // @@ use equals/normalizeTest
          }
          if (!(typeof v === "object" && "value" in v))
            return false;
          return v.value === ld.value &&
            v.type === ld.type &&
            v.language === ld.language;
        }, false)) {
          // literal match
        } else if (valueExpr.values.indexOf(value) !== -1) {
          // trivial match
        } else {
          if (!(valueExpr.values.some(function (valueConstraint) {
            if (typeof valueConstraint === "object" && !("value" in valueConstraint)) { // isTerm me -- strike "value" in
              if (!("type" in valueConstraint))
                runtimeError("expected "+JSON.stringify(valueConstraint)+" to have a 'type' attribute.");
              const stemRangeTypes = [
                "Language",
                "IriStem",      "LiteralStem",      "LanguageStem",
                "IriStemRange", "LiteralStemRange", "LanguageStemRange"
              ];
              if (stemRangeTypes.indexOf(valueConstraint.type) === -1)
                runtimeError("expected type attribute '"+valueConstraint.type+"' to be in '"+stemRangeTypes+"'.");

              /* expect N3.js literals with {Literal,Language}StemRange
               *       or non-literals with IriStemRange
               */
              function normalizedTest (val, ref, func) {
                if (ShExTerm.isLiteral(val)) {
                  if (["LiteralStem", "LiteralStemRange"].indexOf(valueConstraint.type) !== -1) {
                    return func(ShExTerm.getLiteralValue(val), ref);
                  } else if (["LanguageStem", "LanguageStemRange"].indexOf(valueConstraint.type) !== -1) {
                    return func(ShExTerm.getLiteralLanguage(val) || null, ref);
                  } else {
                    return validationError("literal " + val + " not comparable with non-literal " + ref);
                  }
                } else {
                  if (["IriStem", "IriStemRange"].indexOf(valueConstraint.type) === -1) {
                    return validationError("nonliteral " + val + " not comparable with literal " + JSON.stringify(ref));
                  } else {
                    return func(val, ref);
                  }
                }
              }
              function startsWith (val, ref) {
                return normalizedTest(val, ref, (l, r) => {
                  return (valueConstraint.type === "LanguageStem" ||
                          valueConstraint.type === "LanguageStemRange") ?
                    // rfc4647 basic filtering
                    l !== null && (l === r || r === "" || l[r.length] === "-") :
                    // simple substring
                    l.startsWith(r);
                });
              }
              function equals (val, ref) {
                return normalizedTest(val, ref, (l, r) => { return l === r; });
              }

              if (!isTerm(valueConstraint.stem)) {
                expect(valueConstraint.stem, "type", "Wildcard");
                // match whatever but check exclusions below
              } else {
                if (!(startsWith(value, valueConstraint.stem))) {
                  return false;
                }
              }
              if (valueConstraint.exclusions) {
                return !valueConstraint.exclusions.some(function (c) {
                  if (!isTerm(c)) {
                    if (!("type" in c))
                      runtimeError("expected "+JSON.stringify(c)+" to have a 'type' attribute.");
                    const stemTypes = ["IriStem", "LiteralStem", "LanguageStem"];
                    if (stemTypes.indexOf(c.type) === -1)
                      runtimeError("expected type attribute '"+c.type+"' to be in '"+stemTypes+"'.");
                    return startsWith(value, c.stem);
                  } else {
                    return equals(value, c);
                  }
                });
              }
              return true;
            } else {
              // ignore -- would have caught it above
            }
          }))) {
            validationError("value " + value + " not found in set " + JSON.stringify(valueExpr.values));
          }
        }
      }
    }

    if ("pattern" in valueExpr) {
      const regexp = "flags" in valueExpr ?
	  new RegExp(valueExpr.pattern, valueExpr.flags) :
	  new RegExp(valueExpr.pattern);
      if (!(getLexicalValue(value).match(regexp)))
        validationError("value " + getLexicalValue(value) + " did not match pattern " + valueExpr.pattern);
    }

    Object.keys(stringTests).forEach(function (test) {
      if (test in valueExpr && !stringTests[test](label, valueExpr[test])) {
        validationError("facet violation: expected " + test + " of " + valueExpr[test] + " but got " + value);
      }
    });

    Object.keys(numericValueTests).forEach(function (test) {
      if (test in valueExpr) {
        if (numeric) {
          if (!numericValueTests[test](numericParsers[numeric](label, validationError), valueExpr[test])) {
            validationError("facet violation: expected " + test + " of " + valueExpr[test] + " but got " + value);
          }
        } else {
          validationError("facet violation: numeric facet " + test + " can't apply to " + value);
        }
      }
    });

    Object.keys(decimalLexicalTests).forEach(function (test) {
      if (test in valueExpr) {
        if (numeric === XSD + "integer" || numeric === XSD + "decimal") {
          if (!decimalLexicalTests[test](""+numericParsers[numeric](label, validationError), valueExpr[test])) {
            validationError("facet violation: expected " + test + " of " + valueExpr[test] + " but got " + value);
          }
        } else {
          validationError("facet violation: numeric facet " + test + " can't apply to " + value);
        }
      }
    });
    const ret = {
      type: null,
      focus: value,
      shapeExpr: valueExpr
    };
    if (errors.length) {
      ret.type = "NodeConstraintViolation";
      ret.errors = errors;
    } else {
      ret.type = "NodeConstraintTest";
    }
    return ret;
  };

  this.semActHandler = {
    handlers: { },
    results: { },
    /**
     * Store a semantic action handler.
     *
     * @param {string} name - semantic action's URL.
     * @param {object} handler - handler function.
     *
     * The handler object has a dispatch function is invoked with:
     * @param {string} code - text of the semantic action.
     * @param {object} ctx - matched triple or results subset.
     * @param {object} extensionStorage - place where the extension writes into the result structure.
     * @return {bool} false if the extension failed or did not accept the ctx object.
     */
    register: function (name, handler) {
      this.handlers[name] = handler;
    },
    /**
     * Calls all semantic actions, allowing each to write to resultsArtifact.
     *
     * @param {array} semActs - list of semantic actions to invoke.
     * @return {bool} false if any result was false.
     */
    dispatchAll: function (semActs, ctx, resultsArtifact) {
      const _semActHanlder = this;
      return semActs.reduce(function (ret, semAct) {
        if (ret.length === 0 && semAct.name in _semActHanlder.handlers) {
          const code = "code" in semAct ? semAct.code : _ShExValidator.options.semActs[semAct.name];
          const existing = "extensions" in resultsArtifact && semAct.name in resultsArtifact.extensions;
          const extensionStorage = existing ? resultsArtifact.extensions[semAct.name] : {};
          const response = _semActHanlder.handlers[semAct.name].dispatch(code, ctx, extensionStorage);
          if (typeof response === 'boolean') {
            if (!response)
              ret.push({ type: "SemActFailure", errors: [{ type: "BooleanSemActFailure", code: code, ctx }] })
          } else if (typeof response === 'object' && response.constructor === Array) {
            if (response.length > 0)
              ret.push({ type: "SemActFailure", errors: response })
          } else {
            throw Error("unsupported response from semantic action handler: " + JSON.stringify(response))
          }
          if (!existing && Object.keys(extensionStorage).length > 0) {
            if (!("extensions" in resultsArtifact))
              resultsArtifact.extensions = {};
            resultsArtifact.extensions[semAct.name] = extensionStorage;
          }
          return ret;
        }
        return ret;
      }, []);
    }
  };
}

/* _compileShapeToAST - compile a shape expression to an abstract syntax tree.
 *
 * currently tested but not used.
 */
function _compileShapeToAST (expression, tripleConstraints, schema) {

  function Epsilon () {
    this.type = "Epsilon";
  }

  function TripleConstraint (ordinal, predicate, inverse, negated, valueExpr) {
    this.type = "TripleConstraint";
    // this.ordinal = ordinal; @@ does 1card25
    this.inverse = !!inverse;
    this.negated = !!negated;
    this.predicate = predicate;
    if (valueExpr !== undefined)
      this.valueExpr = valueExpr;
  }

  function Choice (disjuncts) {
    this.type = "Choice";
    this.disjuncts = disjuncts;
  }

  function EachOf (conjuncts) {
    this.type = "EachOf";
    this.conjuncts = conjuncts;
  }

  function SemActs (expression, semActs) {
    this.type = "SemActs";
    this.expression = expression;
    this.semActs = semActs;
  }

  function KleeneStar (expression) {
    this.type = "KleeneStar";
    this.expression = expression;
  }

  function _compileExpression (expr, schema) {
    let repeated, container;

    /* _repeat: map expr with a min and max cardinality to a corresponding AST with Groups and Stars.
       expr 1 1 => expr
       expr 0 1 => Choice(expr, Eps)
       expr 0 3 => Choice(EachOf(expr, Choice(EachOf(expr, Choice(expr, EPS)), Eps)), Eps)
       expr 2 5 => EachOf(expr, expr, Choice(EachOf(expr, Choice(EachOf(expr, Choice(expr, EPS)), Eps)), Eps))
       expr 0 * => KleeneStar(expr)
       expr 1 * => EachOf(expr, KleeneStar(expr))
       expr 2 * => EachOf(expr, expr, KleeneStar(expr))

       @@TODO: favor Plus over Star if Epsilon not in expr.
    */
    function _repeat (expr, min, max) {
      if (min === undefined) { min = 1; }
      if (max === undefined) { max = 1; }

      if (min === 1 && max === 1) { return expr; }

      const opts = max === UNBOUNDED ?
        new KleeneStar(expr) :
        _seq(max - min).reduce(function (ret, elt, ord) {
          return ord === 0 ?
            new Choice([expr, new Epsilon]) :
            new Choice([new EachOf([expr, ret]), new Epsilon]);
        }, undefined);

      const reqd = min !== 0 ?
        new EachOf(_seq(min).map(function (ret) {
          return expr; // @@ something with ret
        }).concat(opts)) : opts;
      return reqd;
    }

    if (typeof expr === "string") { // Inclusion
      const included = schema._index.tripleExprs[expr].expression;
      return _compileExpression(included, schema);
    }

    else if (expr.type === "TripleConstraint") {
      // predicate, inverse, negated, valueExpr, annotations, semActs, min, max
      const valueExpr = "valueExprRef" in expr ?
        schema.valueExprDefns[expr.valueExprRef] :
        expr.valueExpr;
      const ordinal = tripleConstraints.push(expr)-1;
      const tp = new TripleConstraint(ordinal, expr.predicate, expr.inverse, expr.negated, valueExpr);
      repeated = _repeat(tp, expr.min, expr.max);
      return expr.semActs ? new SemActs(repeated, expr.semActs) : repeated;
    }

    else if (expr.type === "OneOf") {
      container = new Choice(expr.expressions.map(function (e) {
        return _compileExpression(e, schema);
      }));
      repeated = _repeat(container, expr.min, expr.max);
      return expr.semActs ? new SemActs(repeated, expr.semActs) : repeated;
    }

    else if (expr.type === "EachOf") {
      container = new EachOf(expr.expressions.map(function (e) {
        return _compileExpression(e, schema);
      }));
      repeated = _repeat(container, expr.min, expr.max);
      return expr.semActs ? new SemActs(repeated, expr.semActs) : repeated;
    }

    else throw Error("unexpected expr type: " + expr.type);
  }

  return expression ? _compileExpression(expression, schema) : new Epsilon();
}

// http://stackoverflow.com/questions/9422386/lazy-cartesian-product-of-arrays-arbitrary-nested-loops
function crossProduct(sets, emptyValue) {
  const n = sets.length, carets = [];
  let args = null;

  function init() {
    args = [];
    for (let i = 0; i < n; i++) {
      carets[i] = 0;
      args[i] = sets[i].length > 0 ? sets[i][0] : emptyValue;
    }
  }

  function next() {

    // special case: crossProduct([]).next().next() returns false.
    if (args !== null && args.length === 0)
      return false;

    if (args === null) {
      init();
      return true;
    }
    let i = n - 1;
    carets[i]++;
    if (carets[i] < sets[i].length) {
      args[i] = sets[i][carets[i]];
      return true;
    }
    while (carets[i] >= sets[i].length) {
      if (i == 0) {
        return false;
      }
      carets[i] = 0;
      args[i] = sets[i].length > 0 ? sets[i][0] : emptyValue;
      carets[--i]++;
    }
    args[i] = sets[i][carets[i]];
    return true;
  }

  return {
    next: next,
    do: function (block, _context) { // old API
      return block.apply(_context, args);
    },
    // new API because
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#Description
    // cautions about functions over arguments.
    get: function () { return args; }
  };
}

/* N3jsTripleToString - simple toString function to make N3.js's triples
 * printable.
 */
const N3jsTripleToString = function () {
  function fmt (n) {
    return ShExTerm.isLiteral(n) ?
      [ "http://www.w3.org/2001/XMLSchema#integer",
        "http://www.w3.org/2001/XMLSchema#float",
        "http://www.w3.org/2001/XMLSchema#double"
      ].indexOf(ShExTerm.getLiteralType(n)) !== -1 ?
      parseInt(ShExTerm.getLiteralValue(n)) :
      n :
    ShExTerm.isBlank(n) ?
      n :
      "<" + n + ">";
  }
  return fmt(this.subject) + " " + fmt(this.predicate) + " " + fmt(this.object) + " .";
};

/* indexNeighborhood - index triples by predicate
 * returns: {
 *     byPredicate: Object: mapping from predicate to triples containing that
 *                  predicate.
 *
 *     candidates: [[1,3], [0,2]]: mapping from triple to the triple constraints
 *                 it matches.  It is initialized to []. Mappings that remain an
 *                 empty set indicate a triple which didn't matching anything in
 *                 the shape.
 *
 *     misses: list to recieve value constraint failures.
 *   }
 */
function indexNeighborhood (triples) {
  return {
    byPredicate: triples.reduce(function (ret, t) {
      const p = t.predicate;
      if (!(p in ret))
        ret[p] = [];
      ret[p].push(t);

      // If in VERBOSE mode, add a nice toString to N3.js's triple objects.
      if (VERBOSE)
        t.toString = N3jsTripleToString;

      return ret;
    }, {}),
    candidates: _seq(triples.length).map(function () {
      return [];
    }),
    misses: []
  };
}

/* sparqlOrder - sort triples by subject following SPARQL partial ordering.
 */
function sparqlOrder (l, r) {
  const [lprec, rprec] = [l, r].map(
    x => ShExTerm.isBlank(x) ? 1 : ShExTerm.isLiteral(x) ? 2 : 3
  );
  return lprec === rprec ? l.localeCompare(r) : lprec - rprec;
}

/* Return a list of n ""s.
 *
 * Note that Array(n) on its own returns a "sparse array" so Array(n).map(f)
 * never calls f.
 */
function _seq (n) {
  return n === 0 ?
    [] :
    Array(n).join(" ").split(/ /); // hahaha, javascript, you suck.
}

/* Expect property p with value v in object o
 */
function expect (o, p, v) {
  if (!(p in o))
    runtimeError("expected "+JSON.stringify(o)+" to have a '"+p+"' attribute.");
  if (arguments.length > 2 && o[p] !== v)
    runtimeError("expected "+p+" attribute '"+o[p]+"' to equal '"+v+"'.");
}

function noop () {  }

function runtimeError () {
  const errorStr = Array.prototype.join.call(arguments, "");
  const e = new Error(errorStr);
  Error.captureStackTrace(e, runtimeError);
  throw e;
}

  function _alist (len) {
    return _seq(len).map(() => [])
  }

  return {
    construct: ShExValidator_constructor,
    start: Start,
    options: InterfaceOptions
  };
})();

// Export the `ShExValidator` class as a whole.
if (true)
  module.exports = ShExValidatorCjsModule;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const EvalThreadedNErrCjsModule = (function () {
const ShExTerm = __webpack_require__(3);
const UNBOUNDED = -1;

function vpEngine (schema, shape, index) {
    const outerExpression = shape.expression;
    return {
      match:match
    };

    function match (graph, node, constraintList, constraintToTripleMapping, tripleToConstraintMapping, neighborhood, semActHandler, trace) {

      /*
       * returns: list of passing or failing threads (no heterogeneous lists)
       */
      function validateExpr (expr, thread) {
        if (typeof expr === "string") { // Inclusion
          const included = index.tripleExprs[expr];
          return validateExpr(included, thread);
        }

        const constraintNo = constraintList.indexOf(expr);
        const min = "min" in expr ? expr.min : 1;
        const max = "max" in expr ? expr.max === UNBOUNDED ? Infinity : expr.max : 1;

        function validateRept (type, val) {
          let repeated = 0, errOut = false;
          let newThreads = [thread];
          const minmax = {  };
          if ("min" in expr && expr.min !== 1 || "max" in expr && expr.max !== 1) {
            minmax.min = expr.min;
            minmax.max = expr.max;
          }
          if ("semActs" in expr)
            minmax.semActs = expr.semActs;
          if ("annotations" in expr)
            minmax.annotations = expr.annotations;
          for (; repeated < max && !errOut; ++repeated) {
            let inner = [];
            for (let t = 0; t < newThreads.length; ++t) {
              const newt = newThreads[t];
              const sub = val(newt);
              if (sub.length > 0 && sub[0].errors.length === 0) { // all subs pass or all fail
                sub.forEach(newThread => {
                  const solutions =
                      "expression" in newt ? newt.expression.solutions.slice() : [];
                  if ("solution" in newThread)
                    solutions.push(newThread.solution);
                  delete newThread.solution;
                  newThread.expression = extend({
                    type: type,
                    solutions: solutions
                  }, minmax);
                });
              }
              if (sub.length === 0 /* min:0 */ || sub[0].errors.length > 0)
                return repeated < min ? sub : newThreads;
              else
                inner = inner.concat(sub);
              // newThreads.expressions.push(sub);
            }
            newThreads = inner;
          }
          if (newThreads.length > 0 && newThreads[0].errors.length === 0 && "semActs" in expr) {
            const passes = [];
            const failures = [];
            newThreads.forEach(newThread => {
              const semActErrors = semActHandler.dispatchAll(expr.semActs, "???", newThread)
              if (semActErrors.length === 0) {
                passes.push(newThread)
              } else {
                [].push.apply(newThread.errors, semActErrors);
                failures.push(newThread);
              }
            });
            newThreads = passes.length > 0 ? passes : failures;
          }
          return newThreads;
        }

        if (expr.type === "TripleConstraint") {
          const negated = "negated" in expr && expr.negated || max === 0;
          if (negated)
            min = max = Infinity;
          if (thread.avail[constraintNo] === undefined)
            thread.avail[constraintNo] = constraintToTripleMapping[constraintNo].map(pair => pair.tNo);
          const minmax = {  };
          if ("min" in expr && expr.min !== 1 || "max" in expr && expr.max !== 1) {
            minmax.min = expr.min;
            minmax.max = expr.max;
          }
          if ("semActs" in expr)
            minmax.semActs = expr.semActs;
          if ("annotations" in expr)
            minmax.annotations = expr.annotations;
          const taken = thread.avail[constraintNo].splice(0, min);
          const passed = negated ? taken.length === 0 : taken.length >= min;
          const ret = [];
          const matched = thread.matched;
          if (passed) {
            do {
              const passFail = taken.reduce((acc, tripleNo) => {
                const t = neighborhood[tripleNo]
                const tested = {
                  type: "TestedTriple",
                  subject: t.subject,
                  predicate: t.predicate,
                  object: ldify(t.object)
                }
                const hit = constraintToTripleMapping[constraintNo].find(x => x.tNo === tripleNo);
                if (hit.res && Object.keys(hit.res).length > 0)
                  tested.referenced = hit.res;
                const semActErrors = thread.errors.concat(
                  "semActs" in expr
                    ? semActHandler.dispatchAll(expr.semActs, t, tested)
                    : []
                )
                if (semActErrors.length > 0)
                  acc.fail.push({tripleNo, tested, semActErrors})
                else
                  acc.pass.push({tripleNo, tested, semActErrors})
                return acc
              }, {pass: [], fail: []})


              // return an empty solution if min card was 0
              if (passFail.fail.length === 0) {
                // If we didn't take anything, fall back to old errors.
                // Could do something fancy here with a semAct registration for negative matches.
                const totalErrors = taken.length === 0 ? thread.errors.slice() : []
                const myThread = makeThread(passFail.pass, totalErrors)
                ret.push(myThread);
              } else {
                passFail.fail.forEach(
                  f => ret.push(makeThread([f], f.semActErrors))
                )
              }

              function makeThread (tests, errors) {
                return {
                  avail: thread.avail.map(a => { // copy parent thread's avail vector
                    return a.slice();
                  }),
                  errors: errors,
                  matched: matched.concat({
                    tNos: tests.map(p => p.tripleNo)
                  }),
                  expression: extend(
                    {
                      type: "TripleConstraintSolutions",
                      predicate: expr.predicate
                    },
                    "valueExpr" in expr ? { valueExpr: expr.valueExpr } : {},
                    "id" in expr ? { productionLabel: expr.id } : {},
                    minmax,
                    {
                      solutions: tests.map(p => p.tested)
                    }
                  )
                }
              }
            } while ((function () {
              if (thread.avail[constraintNo].length > 0 && taken.length < max) {
                // build another thread.
                taken.push(thread.avail[constraintNo].shift());
                return true;
              } else {
                // no more threads
                return false;
              }
            })());
          } else {
            let valueExpr = null;
            if (typeof expr.valueExpr === "string") { // ShapeRef
              valueExpr = expr.valueExpr;
              if (ShExTerm.isBlank(valueExpr))
                valueExpr = index.shapeExprs[valueExpr];
            } else if (expr.valueExpr) {
              valueExpr = extend({}, expr.valueExpr)
            }
            ret.push({
              avail: thread.avail,
              errors: thread.errors.concat([
                extend({
                  type: negated ? "NegatedProperty" : "MissingProperty",
                  property: expr.predicate
                }, valueExpr ? { valueExpr: valueExpr } : {})
              ]),
              matched: matched
            });
          }

          return ret;
        }

        else if (expr.type === "OneOf") {
          return validateRept("OneOfSolutions", (th) => {
            // const accept = null;
            const matched = [];
            const failed = [];
            expr.expressions.forEach(nested => {
              const thcopy = {
                avail: th.avail.map(a => { return a.slice(); }),
                errors: th.errors,
                matched: th.matched//.slice() ever needed??
              };
              const sub = validateExpr(nested, thcopy);
              if (sub[0].errors.length === 0) { // all subs pass or all fail
                [].push.apply(matched, sub);
                sub.forEach(newThread => {
                  const expressions =
                      "solution" in thcopy ? thcopy.solution.expressions : [];
                  if ("expression" in newThread) // undefined for no matches on min card:0
                    expressions.push(newThread.expression);
                  delete newThread.expression;
                  newThread.solution = {
                    type: "OneOfSolution",
                    expressions: expressions
                  };
                });
              } else
                [].push.apply(failed, sub);
            });
            return matched.length > 0 ? matched : failed;
          });
        }

        else if (expr.type === "EachOf") {
          return homogenize(validateRept("EachOfSolutions", (th) => {
            // Iterate through nested expressions, exprThreads starts as [th].
            return expr.expressions.reduce((exprThreads, nested) => {
              // Iterate through current thread list composing nextThreads.
              // Consider e.g.
              // <S1> { <p1> . | <p2> .; <p3> . } / { <x> <p2> 2; <p3> 3 } (should pass)
              // <S1> { <p1> .; <p2> . }          / { <s1> <p1> 1 }        (should fail)
              return homogenize(exprThreads.reduce((nextThreads, exprThread) => {
                const sub = validateExpr(nested, exprThread);
                // Move newThread.expression into a hierarchical solution structure.
                sub.forEach(newThread => {
                  if (newThread.errors.length === 0) {
                    const expressions =
                        "solution" in exprThread ? exprThread.solution.expressions.slice() : [];
                    if ("expression" in newThread) // undefined for no matches on min card:0
                      expressions.push(newThread.expression);
                    delete newThread.expression;
                    newThread.solution = {
                      type: "EachOfSolution",
                      expressions: expressions // exprThread.expression + newThread.expression
                    };
                  }
                });
                return nextThreads.concat(sub);
              }, []));
            }, [th]);
          }));
        }

        runtimeError("unexpected expr type: " + expr.type);

        function homogenize (list) {
          return list.reduce((acc, elt) => {
            if (elt.errors.length === 0) {
              if (acc.errors) {
                return { errors: false, l: [elt] };
              } else {
                return { errors: false, l: acc.l.concat(elt) };
              }
            } else {
              if (acc.errors) {
                return { errors: true, l: acc.l.concat(elt) };
              } else {
                return acc; }
            }
          }, {errors: true, l: []}).l;
        }
      }

      const startingThread = {
        avail:[],   // triples remaining by constraint number
        matched:[], // triples matched in this thread
        errors:[]   // errors encounted
      };
      if (!outerExpression)
        return { }; // vapid match if no expression
      const ret = validateExpr(outerExpression, startingThread);
      // console.log(JSON.stringify(ret));
      // note: don't return if ret.length === 1 because it might fail the unmatchedTriples test.
      const longerChosen =
          ret.reduce((ret, elt) => {
            if (elt.errors.length > 0)
              return ret;              // early return
            const unmatchedTriples = {};
            // Collect triples assigned to some constraint.
            Object.keys(tripleToConstraintMapping).forEach(k => {
              if (tripleToConstraintMapping[k] !== "NO_TRIPLE_CONSTRAINT")
                unmatchedTriples[k] = tripleToConstraintMapping[k];
            });
            // Removed triples matched in this thread.
            elt.matched.forEach(m => {
              m.tNos.forEach(t => {
                delete unmatchedTriples[t];
              });
            });
            // Remaining triples are unaccounted for.
            Object.keys(unmatchedTriples).forEach(t => {
              elt.errors.push({
                type: "ExcessTripleViolation",
                triple: neighborhood[t],
                constraint: constraintList[unmatchedTriples[t]]
              });
            });
            return ret !== null ? ret : // keep first solution
            // Accept thread with no unmatched triples.
            Object.keys(unmatchedTriples).length > 0 ? null : elt;
          }, null);
      return longerChosen !== null ?
        finish(longerChosen.expression, constraintList,
               neighborhood, semActHandler) :
        ret.length > 1 ? {
          type: "PossibleErrors",
          errors: ret.reduce((all, e) => {
            return all.concat([e.errors]);
          }, [])
        } : ret[0];
    }

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          const ret = { value: ShExTerm.getLiteralValue(term) };
          const dt = ShExTerm.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          const lang = ShExTerm.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }

    function finish (fromValidatePoint, constraintList, neighborhood, semActHandler) {
      function _dive (solns) {
        if (solns.type === "OneOfSolutions" ||
            solns.type === "EachOfSolutions") {
          solns.solutions.forEach(s => {
            s.expressions.forEach(e => {
              _dive(e);
            });
          });
        } else if (solns.type === "TripleConstraintSolutions") {
          solns.solutions = solns.solutions.map(x => {
            if (x.type === "TestedTriple") // already done
              return x; // c.f. validation/3circularRef1_pass-open
            const t = neighborhood[x.tripleNo];
            const expr = constraintList[x.constraintNo];
            const ret = {
              type: "TestedTriple", subject: t.subject, predicate: t.predicate, object: ldify(t.object)
            };
            function diver (focus, shapeLabel, dive) {
              const sub = dive(focus, shapeLabel);
              if ("errors" in sub) {
                // console.dir(sub);
                const err = {
                  type: "ReferenceError", focus: focus,
                  shape: shapeLabel
                };
                if (typeof shapeLabel === "string" && ShExTerm.isBlank(shapeLabel))
                  err.referencedShape = shape;
                err.errors = sub;
                return [err];
              }
              if (("solution" in sub || "solutions" in sub)&& Object.keys(sub.solution || sub.solutions).length !== 0 ||
                  sub.type === "Recursion")
                ret.referenced = sub; // !!! needs to aggregate errors and solutions
              return [];
            }
            function diveRecurse (focus, shapeLabel) {
              return diver(focus, shapeLabel, recurse);
            }
            function diveDirect (focus, shapeLabel) {
              return diver(focus, shapeLabel, direct);
            }
            const subErrors = "valueExpr" in expr ?
                checkValueExpr(expr.inverse ? t.subject : t.object, expr.valueExpr, diveRecurse, diveDirect) :
                [];
            if (subErrors.length === 0 && "semActs" in expr)
              [].push.apply(subErrors, semActHandler.dispatchAll(expr.semActs, t, ret))
            if (subErrors.length > 0) {
              fromValidatePoint.errors = fromValidatePoint.errors || [];
              fromValidatePoint.errors = fromValidatePoint.errors.concat(subErrors);
            }
            return ret;
          });
        } else {
          throw Error("unexpected expr type in " + JSON.stringify(solns));
        }
      }
      if (Object.keys(fromValidatePoint).length > 0) // guard against {}
        _dive(fromValidatePoint);
      if ("semActs" in shape)
        fromValidatePoint.semActs = shape.semActs;
      return fromValidatePoint;
    }
  }

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          const ret = { value: N3Util.getLiteralValue(term) };
          const dt = N3Util.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          const lang = N3Util.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }

function extend(base) {
  if (!base) base = {};
  for (let i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
    for (let name in arg)
      base[name] = arg[name];
  return base;
}

return {
  name: "eval-threaded-nerr",
  description: "emulation of regular expression engine with error permutations",
  compile: vpEngine
};
})();

if (true)
  module.exports = EvalThreadedNErrCjsModule;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExLoader** return promise to load ShExC, ShExJ and N3 (Turtle) files.

const ShExApiCjsModule = function (config = {}) {

  const ShExUtil = __webpack_require__(4);
  const ShExParser = __webpack_require__(12);

  const api = { load: LoadPromise, loadExtensions: LoadExtensions, GET: GET, loadShExImports_NotUsed: loadShExImports_NotUsed };
  return api
  
  async function GET (url, mediaType) {
    let m;
    return (m = url.match("^data:([^,]+),(.*)$"))
      ? Promise.resolve({text: m[2], url: m[0]}) // Read from data: URL
      : (url.match("^(blob:)?[a-z]+://."))
      ? myHttpRequest(url, mediaType) // whatever fetch handles
      : (() => { throw Error(`Don't know how to fetch ${url}`) })()

    async function myHttpRequest(url, mediaType) {
      if (typeof config.fetch !== "function")
        throw Error(`Unable to fetch ${url} with fetch=${config.fetch}`)
      let resp
      try {
        resp = await config.fetch(url, {
          headers: {
            'Accept': 'text/shex,text/turtle,*/*'
          }
        })
      } catch (e) {
        // DNS failure
        // no route to host
        // connection refused
        throw Error(`GET <${url}> network failure: ${e.message}`)
      }
      if (!resp.ok)
        throw Error(`GET <${url}> failed: ${resp.status} ${resp.statusText}`)
      const text = await resp.text()
      return {text, url}
    }
  }

  function loadList (src, metaList, mediaType, parserWrapper, target, options, loadImports) {
    return src.map(
      async p =>
        typeof p === "object" ? mergeSchema(p) : await loadParseMergeSchema(p)
    )

    async function mergeSchema (obj) {
      const meta = addMeta(obj.url, mediaType)
      try {
        ShExUtil.merge(target, obj.schema, true, true)
        meta._prefixes = target._prefixes || {}
        meta.base = target._base
        loadImports(obj.schema)
        return [mediaType, obj.url]
      } catch (e) {
        const e2 = Error("error merging schema object " + obj.schema + ": " + e)
        e2.stack = e.stack
        throw e2
      }
    }

    async function loadParseMergeSchema (p) {
      return api.GET(p, mediaType).then(function (loaded) {
        return parserWrapper(loaded.text, mediaType, loaded.url, target,
                             addMeta(loaded.url, mediaType), options, loadImports)
      })
    }

    function addMeta (url, mediaType) {
      const meta = {
        mediaType: mediaType,
        url: url,
        base: url,
        prefixes: {}
      }
      metaList.push(meta)
      return meta
    }
  }

  /* LoadPromise - load shex and json files into a single Schema and turtle into
   * a graph (Data).
   */
  async function LoadPromise (shex, json, turtle, jsonld, schemaOptions = {}, dataOptions = {}) {
    const returns = {
      schema: ShExUtil.emptySchema(),
      data: config.rdfjs ? new config.rdfjs.Store() : null,
      schemaMeta: [],
      dataMeta: []
    }
    const promises = []
    const schemasSeen = shex.concat(json).map(p => {
      // might be already loaded objects with a url property.
      return typeof p === "object" ? p.url : p
    })
    let transform = null
    if (schemaOptions && "iriTransform" in schemaOptions) {
      transform = schemaOptions.iriTransform
      delete schemaOptions.iriTransform
    }

    const allLoaded = DynamicPromise()
    function loadImports (schema) {
      if (!("imports" in schema))
        return schema
      if (schemaOptions.keepImports) {
        return schema
      }
      const ret = Object.assign({}, schema)
      const imports = ret.imports
      delete ret.imports
      schema.imports.map(function (i) {
        return transform ? transform(i) : i
      }).filter(function (i) {
        return schemasSeen.indexOf(i) === -1
      }).map(i => {
        schemasSeen.push(i)
        allLoaded.add(api.GET(i).then(function (loaded) {
          const meta = {
            // mediaType: mediaType,
            url: loaded.url,
            base: loaded.url,
            prefixes: {}
          }
          // metaList.push(meta)
          return parseShExC(loaded.text, "text/shex", loaded.url,
                            returns.schema, meta, schemaOptions, loadImports)
        })); // addAfter would be after invoking schema.
      })
      return ret
    }

    // gather all the potentially remote inputs
    // If there's a termResolver,
    if (schemaOptions && "termResolver" in schemaOptions) {
      returns.resolver = new config.rdfjs.Store()
      returns.resolverMeta = []
      // load the resolver then the schema sources,
      promises.push(Promise.all(loadList(schemaOptions.termResolver, returns.resolverMeta, "text/turtle",
                                         parseTurtle, returns.resolver, dataOptions)).
                    then(function (x) {
                      return Promise.all(loadList(shex, returns.schemaMeta, "text/shex",
                                                  parseShExC, returns.schema, schemaOptions, loadImports))
                    }))
      schemaOptions.termResolver = ShExParser.dbTermResolver(returns.resolver)
    } else {
      // else just load the schema sources.
      [].push.apply(promises, loadList(shex, returns.schemaMeta, "text/shex",
                                       parseShExC, returns.schema, schemaOptions, loadImports))
    }
    [].push.apply(promises, [
      loadList(json, returns.schemaMeta, "text/json",
               parseShExJ, returns.schema, schemaOptions, loadImports),
      loadList(turtle, returns.dataMeta, "text/turtle",
               parseTurtle, returns.data, dataOptions),
      loadList(jsonld, returns.dataMeta, "application/ld+json",
               parseJSONLD, returns.data, dataOptions)
    ].reduce((acc, l) => acc.concat(l), [])) // .flat() in node > 8.x
    return allLoaded.all(promises).then(function (resources) {
      if (returns.schemaMeta.length > 0)
        ShExUtil.isWellDefined(returns.schema)
      return returns
    })
  }

  function DynamicPromise () {
    const promises = []
    const results = []
    let completedPromises = 0
    let resolveSelf, rejectSelf
    const self = new Promise(function (resolve, reject) {
      resolveSelf = resolve; rejectSelf = reject
    })
    self.all = function (pz) {
      if (pz.length === 0)
        resolveSelf([]) // otherwise it returns a Promise which never .thens
      // (and oddly doesn't have a slot in nodes pending promises?)
      else
        pz.forEach(function (promise, index) {
          promises.push(promise)
          addThen(promise, index)
        })
      return self
    }
    self.add = function (promise) {
      promises.push(promise)
      addThen(promise, promises.length - 1)
      return self
    }
    return self

    function addThen (promise, index) {
      promise.then(function (value) {
        results[index] = value
        ++completedPromises
        if(completedPromises === promises.length) {
          resolveSelf(results)
        }
      }).catch(function (error) {
        rejectSelf(error)
      })
    }
  }

  function parseShExC (text, mediaType, url, schema, meta, schemaOptions, loadImports) {
    const parser = schemaOptions && "parser" in schemaOptions ?
        schemaOptions.parser :
        ShExParser.construct(url, {}, schemaOptions)
    try {
      const s = parser.parse(text)
      // !! horrible hack until I set a variable to know if there's a BASE.
      if (s.base === url) delete s.base
      meta.prefixes = s._prefixes || {}
      meta.base = s._base || meta.base
      ShExUtil.merge(schema, loadImports(s), false, true)
      return Promise.resolve([mediaType, url])
    } catch (e) {
      e.message = "error parsing ShEx " + url + ": " + e.message
      return Promise.reject(e)
    }
  }

  function loadShExImports_NotUsed (from, parser, transform) {
    const schemasSeen = [from]
    const ret = { type: "Schema" }
    return api.GET(from).then(load999Imports).then(function () {
      ShExUtil.isWellDefined(ret)
      return ret
    })
    function load999Imports (loaded) {
      const schema = parser.parse(loaded.text)
      const imports = schema.imports
      delete schema.imports
      ShExUtil.merge(ret, schema, false, true)
      if (imports) {
        const rest = imports
            .map(function (i) {
              return transform ? transform(i) : i
            }).
            filter(function (i) {
              return schemasSeen.indexOf(i) === -1
            })
        return Promise.all(rest.map(i => {
          schemasSeen.push(i)
          return api.GET(i).then(load999Imports)
        })).then(a => {
          return null
        })
      } else {
        return null
      }
    }
  }

  function parseShExJ (text, mediaType, url, schema, meta, schemaOptions, loadImports) {
    try {
      const s = ShExUtil.ShExJtoAS(JSON.parse(text))
      ShExUtil.merge(schema, s, true, true)
      meta.prefixes = schema._prefixes
      meta.base = schema.base
      loadImports(s)
      return Promise.resolve([mediaType, url])
    } catch (e) {
      const e2 = Error("error parsing JSON " + url + ": " + e)
      // e2.stack = e.stack
      return Promise.reject(e2)
    }
  }

  function parseTurtle (text, mediaType, url, data, meta, dataOptions) {
    return new Promise(function (resolve, reject) {
      new config.rdfjs.Parser({baseIRI: url, blankNodePrefix: "", format: "text/turtle"}).
        parse(text,
              function (error, triple, prefixes) {
                if (prefixes) {
                  meta.prefixes = prefixes
                  // data.addPrefixes(prefixes)
                }
                if (error) {
                  reject("error parsing " + url + ": " + error)
                } else if (triple) {
                  data.addQuad(triple)
                } else {
                  meta.base = this._base
                  resolve([mediaType, url])
                }
              })
    })
  }

  /* parseTurtle999 - a variant of parseTurtle with no callback.
   * so, which is "better"?
   */
  function parseTurtle999 (text, mediaType, url, data, meta, dataOptions) {
    try {
      const p = new config.rdfjs.Parser({baseIRI: url, blankNodePrefix: "", format: "text/turtle"})
      const triples = p.parse(text)
      meta.prefixes = p._prefixes
      meta.base = p._base
      data.addPrefixes(p._prefixes)
      data.addTriples(triples)
      return Promise.resolve([mediaType, url])
    } catch (e) {
      return Promise.reject(Error("error parsing " + url + ": " + e))
    }
  }

  function parseJSONLD (text, mediaType, url, data, meta, dataOptions) {
    return new Promise(function (resolve, reject) {
      const struct = JSON.parse(text)
      config.jsonld.toRDF(struct, {format: "application/nquads", base: url}, function (lderr, nquads) {
        if (lderr) {
          reject("error parsing JSON-ld " + url + ": " + lderr)
        } else {
          meta.prefixes = {}; // @@ take from @context?
          meta.base = url;    // @@ take from @context.base? (or vocab?)
          resolve(parseTurtle(nquads, mediaType, url, data, meta))
        }
      })
    })
  }

  function LoadExtensions (globs) {
    return globs.reduce(
      (list, glob) =>
        list.concat(__webpack_require__(13).glob.sync(glob))
      , []).
      reduce(function (ret, path) {
        try {
	  const t = __webpack_require__(40)(path)
	  ret[t.url] = t
	  return ret
        } catch (e) {
	  console.warn("ShEx extension \"" + moduleDir + "\" not loadable: " + e)
	  return ret
        }
      }, {})
  }

}

if (true)
  module.exports = ShExApiCjsModule


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ShExJison = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[7,19,20,21,22,24,25,32,194,216,217],$V1=[1,27],$V2=[1,31],$V3=[1,26],$V4=[1,30],$V5=[1,29],$V6=[2,12],$V7=[2,13],$V8=[2,14],$V9=[2,15],$Va=[7,19,20,21,22,24,25,32,216,217],$Vb=[1,37],$Vc=[1,40],$Vd=[1,39],$Ve=[2,24],$Vf=[2,25],$Vg=[20,22,28,71,73,87,98,99,100,103,104,105,106,114,115,116,117,118,119,121,126,128,165,216],$Vh=[2,63],$Vi=[1,52],$Vj=[1,53],$Vk=[1,54],$Vl=[20,22,28,41,45,71,73,81,82,83,87,98,99,100,103,104,105,106,114,115,116,117,118,119,121,126,128,165,216],$Vm=[2,240],$Vn=[2,241],$Vo=[1,56],$Vp=[1,59],$Vq=[1,58],$Vr=[2,262],$Vs=[2,263],$Vt=[2,270],$Vu=[2,264],$Vv=[2,265],$Vw=[2,16],$Vx=[2,18],$Vy=[2,19],$Vz=[2,22],$VA=[20,22,29,216],$VB=[2,20],$VC=[20,22,28,71,73,81,82,83,87,98,99,100,103,104,105,106,114,115,116,117,118,119,121,126,128,165,216],$VD=[1,80],$VE=[2,32],$VF=[2,33],$VG=[2,34],$VH=[121,126,128],$VI=[2,140],$VJ=[1,106],$VK=[1,108],$VL=[1,102],$VM=[1,92],$VN=[1,97],$VO=[1,98],$VP=[1,99],$VQ=[1,105],$VR=[1,112],$VS=[1,113],$VT=[1,114],$VU=[1,115],$VV=[1,116],$VW=[1,117],$VX=[1,118],$VY=[1,119],$VZ=[1,120],$V_=[1,109],$V$=[1,107],$V01=[2,64],$V11=[1,122],$V21=[1,123],$V31=[1,124],$V41=[1,130],$V51=[1,131],$V61=[53,55],$V71=[2,93],$V81=[2,94],$V91=[194,196],$Va1=[1,146],$Vb1=[1,149],$Vc1=[1,148],$Vd1=[2,17],$Ve1=[1,162],$Vf1=[1,165],$Vg1=[1,164],$Vh1=[7,19,20,21,22,24,25,32,53,216,217],$Vi1=[2,49],$Vj1=[7,19,20,21,22,24,25,32,53,55,216,217],$Vk1=[2,56],$Vl1=[2,38],$Vm1=[2,71],$Vn1=[2,76],$Vo1=[2,73],$Vp1=[1,192],$Vq1=[1,193],$Vr1=[1,194],$Vs1=[1,197],$Vt1=[1,200],$Vu1=[2,79],$Vv1=[7,19,20,21,22,24,25,32,53,55,81,82,83,121,126,128,190,194,216,217],$Vw1=[2,97],$Vx1=[7,19,20,21,22,24,25,32,53,55,190,194,216,217],$Vy1=[7,19,20,21,22,24,25,32,53,55,98,99,100,103,104,105,106,190,194,216,217],$Vz1=[7,19,20,21,22,24,25,32,53,55,81,82,83,103,104,105,106,121,126,128,190,194,216,217],$VA1=[2,110],$VB1=[2,109],$VC1=[7,19,20,21,22,24,25,32,53,55,103,104,105,106,114,115,116,117,118,119,190,194,216,217],$VD1=[2,104],$VE1=[2,103],$VF1=[1,214],$VG1=[1,215],$VH1=[2,114],$VI1=[2,115],$VJ1=[2,116],$VK1=[2,112],$VL1=[2,239],$VM1=[20,22,29,73,83,102,110,111,165,185,205,206,207,208,209,210,211,212,213,214,216],$VN1=[2,184],$VO1=[7,19,20,21,22,24,25,32,53,55,114,115,116,117,118,119,190,194,216,217],$VP1=[2,106],$VQ1=[2,120],$VR1=[2,266],$VS1=[2,267],$VT1=[2,268],$VU1=[2,269],$VV1=[1,223],$VW1=[1,224],$VX1=[1,225],$VY1=[1,226],$VZ1=[102,110,111,207,208,209,210],$V_1=[2,37],$V$1=[2,41],$V02=[2,44],$V12=[2,47],$V22=[2,95],$V32=[2,231],$V42=[2,232],$V52=[2,233],$V62=[1,275],$V72=[1,277],$V82=[1,271],$V92=[1,261],$Va2=[1,266],$Vb2=[1,267],$Vc2=[1,268],$Vd2=[1,274],$Ve2=[1,278],$Vf2=[1,276],$Vg2=[1,282],$Vh2=[1,283],$Vi2=[1,284],$Vj2=[1,290],$Vk2=[1,291],$Vl2=[2,23],$Vm2=[2,26],$Vn2=[2,55],$Vo2=[2,62],$Vp2=[2,67],$Vq2=[2,70],$Vr2=[7,19,20,21,22,24,25,32,53,55,98,99,100,103,104,105,106,216,217],$Vs2=[2,89],$Vt2=[2,90],$Vu2=[2,35],$Vv2=[2,39],$Vw2=[2,75],$Vx2=[2,72],$Vy2=[2,77],$Vz2=[2,74],$VA2=[7,19,20,21,22,24,25,32,53,55,103,104,105,106,190,194,216,217],$VB2=[1,336],$VC2=[1,344],$VD2=[1,345],$VE2=[1,346],$VF2=[1,352],$VG2=[1,353],$VH2=[7,19,20,21,22,24,25,32,53,55,81,82,83,121,126,128,194,216,217],$VI2=[2,229],$VJ2=[7,19,20,21,22,24,25,32,53,55,194,216,217],$VK2=[1,361],$VL2=[7,19,20,21,22,24,25,32,53,55,98,99,100,103,104,105,106,194,216,217],$VM2=[2,108],$VN2=[2,113],$VO2=[2,100],$VP2=[1,371],$VQ2=[2,101],$VR2=[2,102],$VS2=[2,107],$VT2=[20,22,71,161,165,200,216],$VU2=[2,168],$VV2=[2,142],$VW2=[1,386],$VX2=[1,385],$VY2=[1,391],$VZ2=[1,393],$V_2=[1,394],$V$2=[1,390],$V03=[1,392],$V13=[1,406],$V23=[1,412],$V33=[1,401],$V43=[1,405],$V53=[1,415],$V63=[1,416],$V73=[1,417],$V83=[1,398],$V93=[1,404],$Va3=[1,418],$Vb3=[1,419],$Vc3=[1,424],$Vd3=[1,425],$Ve3=[1,426],$Vf3=[1,427],$Vg3=[1,420],$Vh3=[1,421],$Vi3=[1,422],$Vj3=[1,423],$Vk3=[1,411],$Vl3=[2,119],$Vm3=[2,124],$Vn3=[2,126],$Vo3=[2,127],$Vp3=[2,128],$Vq3=[2,254],$Vr3=[2,255],$Vs3=[2,256],$Vt3=[2,257],$Vu3=[2,125],$Vv3=[2,36],$Vw3=[2,45],$Vx3=[2,42],$Vy3=[2,48],$Vz3=[2,43],$VA3=[1,459],$VB3=[2,46],$VC3=[1,495],$VD3=[1,529],$VE3=[1,530],$VF3=[1,531],$VG3=[1,534],$VH3=[2,50],$VI3=[2,57],$VJ3=[2,66],$VK3=[2,68],$VL3=[2,78],$VM3=[53,55,72],$VN3=[1,594],$VO3=[53,55,72,81,82,83,121,126,128,190,194],$VP3=[53,55,72,190,194],$VQ3=[53,55,72,98,99,100,103,104,105,106,190,194],$VR3=[53,55,72,81,82,83,103,104,105,106,121,126,128,190,194],$VS3=[53,55,72,103,104,105,106,114,115,116,117,118,119,190,194],$VT3=[53,55,72,114,115,116,117,118,119,190,194],$VU3=[53,72],$VV3=[7,19,20,21,22,24,25,32,53,55,81,82,83,121,126,128,216,217],$VW3=[2,99],$VX3=[2,98],$VY3=[2,228],$VZ3=[1,636],$V_3=[1,638],$V$3=[1,639],$V04=[1,635],$V14=[1,637],$V24=[2,96],$V34=[2,136],$V44=[2,111],$V54=[2,105],$V64=[2,117],$V74=[2,118],$V84=[2,147],$V94=[2,148],$Va4=[1,656],$Vb4=[2,149],$Vc4=[123,136],$Vd4=[2,154],$Ve4=[2,155],$Vf4=[2,157],$Vg4=[1,659],$Vh4=[1,660],$Vi4=[20,22,165,200,216],$Vj4=[2,176],$Vk4=[1,668],$Vl4=[123,136,141,142],$Vm4=[2,166],$Vn4=[20,22,121,126,128,165,200,216],$Vo4=[2,237],$Vp4=[2,238],$Vq4=[2,183],$Vr4=[1,702],$Vs4=[20,22,29,73,83,102,110,111,165,178,185,205,206,207,208,209,210,211,212,213,214,216],$Vt4=[2,234],$Vu4=[2,235],$Vv4=[2,236],$Vw4=[2,247],$Vx4=[2,250],$Vy4=[2,244],$Vz4=[2,245],$VA4=[2,246],$VB4=[2,252],$VC4=[2,253],$VD4=[2,258],$VE4=[2,259],$VF4=[2,260],$VG4=[2,261],$VH4=[20,22,29,73,83,102,110,111,113,165,178,185,205,206,207,208,209,210,211,212,213,214,216],$VI4=[1,734],$VJ4=[1,781],$VK4=[1,836],$VL4=[1,846],$VM4=[1,882],$VN4=[1,918],$VO4=[2,69],$VP4=[53,55,72,103,104,105,106,190,194],$VQ4=[53,55,72,81,82,83,121,126,128,194],$VR4=[53,55,72,194],$VS4=[1,940],$VT4=[53,55,72,98,99,100,103,104,105,106,194],$VU4=[1,950],$VV4=[1,987],$VW4=[1,1023],$VX4=[2,230],$VY4=[1,1034],$VZ4=[1,1036],$V_4=[1,1037],$V$4=[1,1035],$V05=[20,22,102,110,111,165,205,206,207,208,209,210,211,212,213,214,216],$V15=[1,1060],$V25=[1,1062],$V35=[1,1063],$V45=[1,1061],$V55=[1,1086],$V65=[1,1088],$V75=[1,1089],$V85=[1,1087],$V95=[2,137],$Va5=[2,150],$Vb5=[2,152],$Vc5=[2,156],$Vd5=[2,158],$Ve5=[2,159],$Vf5=[2,163],$Vg5=[2,165],$Vh5=[2,170],$Vi5=[2,171],$Vj5=[1,1118],$Vk5=[1,1120],$Vl5=[1,1121],$Vm5=[1,1117],$Vn5=[1,1119],$Vo5=[1,1131],$Vp5=[2,224],$Vq5=[2,242],$Vr5=[2,243],$Vs5=[1,1133],$Vt5=[1,1135],$Vu5=[1,1137],$Vv5=[20,22,29,73,83,102,110,111,165,179,185,205,206,207,208,209,210,211,212,213,214,216],$Vw5=[1,1141],$Vx5=[1,1147],$Vy5=[1,1150],$Vz5=[1,1151],$VA5=[1,1152],$VB5=[1,1140],$VC5=[1,1153],$VD5=[1,1154],$VE5=[1,1159],$VF5=[1,1160],$VG5=[1,1161],$VH5=[1,1162],$VI5=[1,1155],$VJ5=[1,1156],$VK5=[1,1157],$VL5=[1,1158],$VM5=[1,1146],$VN5=[2,248],$VO5=[2,251],$VP5=[2,129],$VQ5=[1,1196],$VR5=[1,1202],$VS5=[1,1234],$VT5=[1,1240],$VU5=[1,1299],$VV5=[1,1346],$VW5=[53,55,72,81,82,83,121,126,128],$VX5=[53,55,72,98,99,100,103,104,105,106],$VY5=[1,1422],$VZ5=[1,1469],$V_5=[2,225],$V$5=[2,226],$V06=[2,227],$V16=[7,19,20,21,22,24,25,32,53,55,81,82,83,113,121,126,128,190,194,216,217],$V26=[7,19,20,21,22,24,25,32,53,55,113,190,194,216,217],$V36=[7,19,20,21,22,24,25,32,53,55,98,99,100,103,104,105,106,113,190,194,216,217],$V46=[2,153],$V56=[2,151],$V66=[2,160],$V76=[2,164],$V86=[2,161],$V96=[2,162],$Va6=[20,22,28,45,71,73,81,82,83,87,98,99,100,103,104,105,106,114,115,116,117,118,119,121,126,128,165,216],$Vb6=[1,1529],$Vc6=[72,136],$Vd6=[1,1532],$Ve6=[1,1533],$Vf6=[72,136,141,142],$Vg6=[2,207],$Vh6=[1,1549],$Vi6=[20,22,29,73,83,102,110,111,165,178,179,185,205,206,207,208,209,210,211,212,213,214,216],$Vj6=[20,22,29,73,83,102,110,111,113,165,178,179,185,205,206,207,208,209,210,211,212,213,214,216],$Vk6=[2,249],$Vl6=[1,1587],$Vm6=[1,1653],$Vn6=[1,1655],$Vo6=[1,1656],$Vp6=[1,1654],$Vq6=[1,1679],$Vr6=[1,1681],$Vs6=[1,1682],$Vt6=[1,1680],$Vu6=[1,1705],$Vv6=[1,1707],$Vw6=[1,1708],$Vx6=[1,1706],$Vy6=[1,1752],$Vz6=[1,1758],$VA6=[1,1790],$VB6=[1,1796],$VC6=[1,1811],$VD6=[1,1813],$VE6=[1,1814],$VF6=[1,1812],$VG6=[1,1837],$VH6=[1,1839],$VI6=[1,1840],$VJ6=[1,1838],$VK6=[1,1863],$VL6=[1,1865],$VM6=[1,1866],$VN6=[1,1864],$VO6=[1,1910],$VP6=[1,1916],$VQ6=[1,1948],$VR6=[1,1954],$VS6=[123,136,141,142,190,194],$VT6=[2,173],$VU6=[1,1972],$VV6=[1,1973],$VW6=[1,1974],$VX6=[1,1975],$VY6=[123,136,141,142,157,158,159,160,190,194],$VZ6=[2,40],$V_6=[53,123,136,141,142,157,158,159,160,190,194],$V$6=[2,53],$V07=[53,55,123,136,141,142,157,158,159,160,190,194],$V17=[2,60],$V27=[1,2004],$V37=[1,2045],$V47=[1,2078],$V57=[1,2080],$V67=[1,2081],$V77=[1,2079],$V87=[1,2104],$V97=[1,2106],$Va7=[1,2107],$Vb7=[1,2105],$Vc7=[1,2131],$Vd7=[1,2133],$Ve7=[1,2134],$Vf7=[1,2132],$Vg7=[1,2158],$Vh7=[1,2160],$Vi7=[1,2161],$Vj7=[1,2159],$Vk7=[1,2184],$Vl7=[1,2186],$Vm7=[1,2187],$Vn7=[1,2185],$Vo7=[1,2211],$Vp7=[1,2213],$Vq7=[1,2214],$Vr7=[1,2212],$Vs7=[1,2286],$Vt7=[53,55,72,81,82,83,113,121,126,128,190,194],$Vu7=[53,55,72,113,190,194],$Vv7=[53,55,72,98,99,100,103,104,105,106,113,190,194],$Vw7=[1,2400],$Vx7=[2,174],$Vy7=[2,178],$Vz7=[2,179],$VA7=[2,180],$VB7=[2,181],$VC7=[2,51],$VD7=[2,58],$VE7=[2,65],$VF7=[2,85],$VG7=[2,81],$VH7=[2,87],$VI7=[1,2483],$VJ7=[2,84],$VK7=[53,55,81,82,83,103,104,105,106,121,123,126,128,136,141,142,157,158,159,160,190,194],$VL7=[53,55,81,82,83,121,123,126,128,136,141,142,157,158,159,160,190,194],$VM7=[53,55,103,104,105,106,114,115,116,117,118,119,123,136,141,142,157,158,159,160,190,194],$VN7=[53,55,98,99,100,103,104,105,106,123,136,141,142,157,158,159,160,190,194],$VO7=[2,91],$VP7=[2,92],$VQ7=[53,55,114,115,116,117,118,119,123,136,141,142,157,158,159,160,190,194],$VR7=[1,2537],$VS7=[1,2543],$VT7=[1,2626],$VU7=[1,2659],$VV7=[1,2661],$VW7=[1,2662],$VX7=[1,2660],$VY7=[1,2685],$VZ7=[1,2687],$V_7=[1,2688],$V$7=[1,2686],$V08=[1,2712],$V18=[1,2714],$V28=[1,2715],$V38=[1,2713],$V48=[1,2739],$V58=[1,2741],$V68=[1,2742],$V78=[1,2740],$V88=[1,2765],$V98=[1,2767],$Va8=[1,2768],$Vb8=[1,2766],$Vc8=[1,2792],$Vd8=[1,2794],$Ve8=[1,2795],$Vf8=[1,2793],$Vg8=[1,2839],$Vh8=[1,2872],$Vi8=[1,2874],$Vj8=[1,2875],$Vk8=[1,2873],$Vl8=[1,2898],$Vm8=[1,2900],$Vn8=[1,2901],$Vo8=[1,2899],$Vp8=[1,2925],$Vq8=[1,2927],$Vr8=[1,2928],$Vs8=[1,2926],$Vt8=[1,2952],$Vu8=[1,2954],$Vv8=[1,2955],$Vw8=[1,2953],$Vx8=[1,2978],$Vy8=[1,2980],$Vz8=[1,2981],$VA8=[1,2979],$VB8=[1,3005],$VC8=[1,3007],$VD8=[1,3008],$VE8=[1,3006],$VF8=[123,136,141,142,194],$VG8=[1,3030],$VH8=[2,54],$VI8=[2,61],$VJ8=[2,80],$VK8=[2,86],$VL8=[2,82],$VM8=[2,88],$VN8=[53,55,103,104,105,106,123,136,141,142,157,158,159,160,190,194],$VO8=[1,3054],$VP8=[72,136,141,142,190,194],$VQ8=[1,3063],$VR8=[1,3064],$VS8=[1,3065],$VT8=[1,3066],$VU8=[72,136,141,142,157,158,159,160,190,194],$VV8=[53,72,136,141,142,157,158,159,160,190,194],$VW8=[53,55,72,136,141,142,157,158,159,160,190,194],$VX8=[1,3095],$VY8=[1,3164],$VZ8=[1,3170],$V_8=[1,3250],$V$8=[1,3256],$V09=[2,175],$V19=[2,52],$V29=[1,3344],$V39=[2,59],$V49=[1,3377],$V59=[2,83],$V69=[2,172],$V79=[1,3422],$V89=[53,55,72,81,82,83,103,104,105,106,121,126,128,136,141,142,157,158,159,160,190,194],$V99=[53,55,72,81,82,83,121,126,128,136,141,142,157,158,159,160,190,194],$Va9=[53,55,72,103,104,105,106,114,115,116,117,118,119,136,141,142,157,158,159,160,190,194],$Vb9=[53,55,72,98,99,100,103,104,105,106,136,141,142,157,158,159,160,190,194],$Vc9=[53,55,72,114,115,116,117,118,119,136,141,142,157,158,159,160,190,194],$Vd9=[1,3453],$Ve9=[1,3455],$Vf9=[1,3456],$Vg9=[1,3454],$Vh9=[1,3479],$Vi9=[1,3481],$Vj9=[1,3482],$Vk9=[1,3480],$Vl9=[1,3506],$Vm9=[1,3508],$Vn9=[1,3509],$Vo9=[1,3507],$Vp9=[1,3610],$Vq9=[1,3612],$Vr9=[1,3613],$Vs9=[1,3611],$Vt9=[1,3651],$Vu9=[1,3693],$Vv9=[72,136,141,142,194],$Vw9=[1,3723],$Vx9=[53,55,72,103,104,105,106,136,141,142,157,158,159,160,190,194],$Vy9=[1,3747],$Vz9=[1,3783],$VA9=[1,3785],$VB9=[1,3786],$VC9=[1,3784],$VD9=[1,3809],$VE9=[1,3811],$VF9=[1,3812],$VG9=[1,3810],$VH9=[1,3836],$VI9=[1,3838],$VJ9=[1,3839],$VK9=[1,3837],$VL9=[1,3863],$VM9=[1,3865],$VN9=[1,3866],$VO9=[1,3864],$VP9=[1,3889],$VQ9=[1,3891],$VR9=[1,3892],$VS9=[1,3890],$VT9=[1,3916],$VU9=[1,3918],$VV9=[1,3919],$VW9=[1,3917],$VX9=[113,123,136,141,142,190,194],$VY9=[1,3964],$VZ9=[1,3988],$V_9=[1,4030],$V$9=[1,4063],$V0a=[1,4168],$V1a=[1,4211],$V2a=[1,4213],$V3a=[1,4214],$V4a=[1,4212],$V5a=[1,4252],$V6a=[1,4294],$V7a=[1,4350],$V8a=[72,113,136,141,142,190,194],$V9a=[1,4405],$Vaa=[1,4429],$Vba=[1,4459],$Vca=[1,4505],$Vda=[1,4577],$Vea=[1,4626];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"shexDoc":3,"initParser":4,"Qdirective_E_Star":5,"Q_O_QnotStartAction_E_Or_QstartActions_E_S_Qstatement_E_Star_C_E_Opt":6,"EOF":7,"directive":8,"O_QnotStartAction_E_Or_QstartActions_E_C":9,"notStartAction":10,"startActions":11,"Qstatement_E_Star":12,"statement":13,"O_QnotStartAction_E_Or_QstartActions_E_S_Qstatement_E_Star_C":14,"baseDecl":15,"prefixDecl":16,"importDecl":17,"labelDecl":18,"IT_BASE":19,"IRIREF":20,"IT_PREFIX":21,"PNAME_NS":22,"iri":23,"IT_IMPORT":24,"IT_LABEL":25,"O_Qiri_E_Or_QGT_LBRACKET_E_S_Qiri_E_Star_S_QGT_RBRACKET_E_C":26,"Qiri_E_Star":27,"[":28,"]":29,"start":30,"shapeExprDecl":31,"IT_start":32,"=":33,"shapeAnd":34,"Q_O_QIT_OR_E_S_QshapeAnd_E_C_E_Star":35,"QcodeDecl_E_Plus":36,"codeDecl":37,"shapeExprLabel":38,"O_QshapeExpression_E_Or_QIT_EXTERNAL_E_C":39,"shapeExpression":40,"IT_EXTERNAL":41,"QIT_NOT_E_Opt":42,"shapeAtomNoRef":43,"QshapeOr_E_Opt":44,"IT_NOT":45,"shapeRef":46,"shapeOr":47,"inlineShapeExpression":48,"inlineShapeOr":49,"Q_O_QIT_OR_E_S_QshapeAnd_E_C_E_Plus":50,"Q_O_QIT_AND_E_S_QshapeNot_E_C_E_Plus":51,"O_QIT_OR_E_S_QshapeAnd_E_C":52,"IT_OR":53,"O_QIT_AND_E_S_QshapeNot_E_C":54,"IT_AND":55,"shapeNot":56,"inlineShapeAnd":57,"Q_O_QIT_OR_E_S_QinlineShapeAnd_E_C_E_Star":58,"O_QIT_OR_E_S_QinlineShapeAnd_E_C":59,"Q_O_QIT_AND_E_S_QshapeNot_E_C_E_Star":60,"inlineShapeNot":61,"Q_O_QIT_AND_E_S_QinlineShapeNot_E_C_E_Star":62,"O_QIT_AND_E_S_QinlineShapeNot_E_C":63,"shapeAtom":64,"inlineShapeAtom":65,"nonLitNodeConstraint":66,"QshapeOrRef_E_Opt":67,"litNodeConstraint":68,"shapeOrRef":69,"QnonLitNodeConstraint_E_Opt":70,"(":71,")":72,".":73,"shapeDefinition":74,"nonLitInlineNodeConstraint":75,"QinlineShapeOrRef_E_Opt":76,"litInlineNodeConstraint":77,"inlineShapeOrRef":78,"QnonLitInlineNodeConstraint_E_Opt":79,"inlineShapeDefinition":80,"ATPNAME_LN":81,"ATPNAME_NS":82,"@":83,"Qannotation_E_Star":84,"semanticActions":85,"annotation":86,"IT_LITERAL":87,"QxsFacet_E_Star":88,"datatype":89,"valueSet":90,"QnumericFacet_E_Plus":91,"xsFacet":92,"numericFacet":93,"nonLiteralKind":94,"QstringFacet_E_Star":95,"QstringFacet_E_Plus":96,"stringFacet":97,"IT_IRI":98,"IT_BNODE":99,"IT_NONLITERAL":100,"stringLength":101,"INTEGER":102,"REGEXP":103,"IT_LENGTH":104,"IT_MINLENGTH":105,"IT_MAXLENGTH":106,"numericRange":107,"rawNumeric":108,"numericLength":109,"DECIMAL":110,"DOUBLE":111,"string":112,"^^":113,"IT_MININCLUSIVE":114,"IT_MINEXCLUSIVE":115,"IT_MAXINCLUSIVE":116,"IT_MAXEXCLUSIVE":117,"IT_TOTALDIGITS":118,"IT_FRACTIONDIGITS":119,"Q_QextraPropertySet_E_Or_QIT_CLOSED_E_C_E_Star":120,"{":121,"QtripleExpression_E_Opt":122,"}":123,"QextraPropertySet_E_Or_QIT_CLOSED_E_C":124,"extraPropertySet":125,"IT_CLOSED":126,"tripleExpression":127,"IT_EXTRA":128,"Qpredicate_E_Plus":129,"predicate":130,"oneOfTripleExpr":131,"groupTripleExpr":132,"multiElementOneOf":133,"Q_O_QGT_PIPE_E_S_QgroupTripleExpr_E_C_E_Plus":134,"O_QGT_PIPE_E_S_QgroupTripleExpr_E_C":135,"|":136,"singleElementGroup":137,"multiElementGroup":138,"unaryTripleExpr":139,"QGT_SEMI_E_Opt":140,",":141,";":142,"Q_O_QGT_SEMI_E_S_QunaryTripleExpr_E_C_E_Plus":143,"O_QGT_SEMI_E_S_QunaryTripleExpr_E_C":144,"Q_O_QGT_DOLLAR_E_S_QtripleExprLabel_E_C_E_Opt":145,"O_QtripleConstraint_E_Or_QbracketedTripleExpr_E_C":146,"include":147,"O_QGT_DOLLAR_E_S_QtripleExprLabel_E_C":148,"$":149,"tripleExprLabel":150,"tripleConstraint":151,"bracketedTripleExpr":152,"Qcardinality_E_Opt":153,"cardinality":154,"QsenseFlags_E_Opt":155,"senseFlags":156,"*":157,"+":158,"?":159,"REPEAT_RANGE":160,"^":161,"QvalueSetValue_E_Star":162,"valueSetValue":163,"iriRange":164,"STRING_GRAVE":165,"literalRange":166,"languageRange":167,"O_QiriExclusion_E_Plus_Or_QliteralExclusion_E_Plus_Or_QlanguageExclusion_E_Plus_C":168,"QiriExclusion_E_Plus":169,"iriExclusion":170,"QliteralExclusion_E_Plus":171,"literalExclusion":172,"QlanguageExclusion_E_Plus":173,"languageExclusion":174,"Q_O_QGT_TILDE_E_S_QiriExclusion_E_Star_C_E_Opt":175,"QiriExclusion_E_Star":176,"O_QGT_TILDE_E_S_QiriExclusion_E_Star_C":177,"~":178,"-":179,"QGT_TILDE_E_Opt":180,"literal":181,"Q_O_QGT_TILDE_E_S_QliteralExclusion_E_Star_C_E_Opt":182,"QliteralExclusion_E_Star":183,"O_QGT_TILDE_E_S_QliteralExclusion_E_Star_C":184,"LANGTAG":185,"Q_O_QGT_TILDE_E_S_QlanguageExclusion_E_Star_C_E_Opt":186,"O_QGT_TILDE_E_S_QlanguageExclusion_E_Star_C":187,"QlanguageExclusion_E_Star":188,"&":189,"//":190,"O_QiriOrLabel_E_Or_Qliteral_E_C":191,"iriOrLabel":192,"QcodeDecl_E_Star":193,"%":194,"O_QCODE_E_Or_QGT_MODULO_E_C":195,"CODE":196,"rdfLiteral":197,"numericLiteral":198,"booleanLiteral":199,"a":200,"blankNode":201,"langString":202,"Q_O_QGT_DTYPE_E_S_Qdatatype_E_C_E_Opt":203,"O_QGT_DTYPE_E_S_Qdatatype_E_C":204,"IT_true":205,"IT_false":206,"STRING_LITERAL1":207,"STRING_LITERAL_LONG1":208,"STRING_LITERAL2":209,"STRING_LITERAL_LONG2":210,"LANG_STRING_LITERAL1":211,"LANG_STRING_LITERAL_LONG1":212,"LANG_STRING_LITERAL2":213,"LANG_STRING_LITERAL_LONG2":214,"prefixedName":215,"PNAME_LN":216,"BLANK_NODE_LABEL":217,"O_QIT_EXTENDS_E_Or_QGT_AMP_E_C":218,"IT_EXTENDS":219,"$accept":0,"$end":1},
terminals_: {2:"error",7:"EOF",19:"IT_BASE",20:"IRIREF",21:"IT_PREFIX",22:"PNAME_NS",24:"IT_IMPORT",25:"IT_LABEL",28:"[",29:"]",32:"IT_start",33:"=",41:"IT_EXTERNAL",45:"IT_NOT",53:"IT_OR",55:"IT_AND",71:"(",72:")",73:".",81:"ATPNAME_LN",82:"ATPNAME_NS",83:"@",87:"IT_LITERAL",98:"IT_IRI",99:"IT_BNODE",100:"IT_NONLITERAL",102:"INTEGER",103:"REGEXP",104:"IT_LENGTH",105:"IT_MINLENGTH",106:"IT_MAXLENGTH",110:"DECIMAL",111:"DOUBLE",113:"^^",114:"IT_MININCLUSIVE",115:"IT_MINEXCLUSIVE",116:"IT_MAXINCLUSIVE",117:"IT_MAXEXCLUSIVE",118:"IT_TOTALDIGITS",119:"IT_FRACTIONDIGITS",121:"{",123:"}",126:"IT_CLOSED",128:"IT_EXTRA",136:"|",141:",",142:";",149:"$",157:"*",158:"+",159:"?",160:"REPEAT_RANGE",161:"^",165:"STRING_GRAVE",178:"~",179:"-",185:"LANGTAG",189:"&",190:"//",194:"%",196:"CODE",200:"a",205:"IT_true",206:"IT_false",207:"STRING_LITERAL1",208:"STRING_LITERAL_LONG1",209:"STRING_LITERAL2",210:"STRING_LITERAL_LONG2",211:"LANG_STRING_LITERAL1",212:"LANG_STRING_LITERAL_LONG1",213:"LANG_STRING_LITERAL2",214:"LANG_STRING_LITERAL_LONG2",216:"PNAME_LN",217:"BLANK_NODE_LABEL",219:"IT_EXTENDS"},
productions_: [0,[3,4],[4,0],[5,0],[5,2],[9,1],[9,1],[12,0],[12,2],[14,2],[6,0],[6,1],[8,1],[8,1],[8,1],[8,1],[15,2],[16,3],[17,2],[18,2],[27,0],[27,2],[26,1],[26,3],[10,1],[10,1],[30,4],[11,1],[36,1],[36,2],[13,1],[13,1],[31,2],[39,1],[39,1],[40,3],[40,3],[40,2],[44,0],[44,1],[48,1],[47,1],[47,2],[52,2],[50,1],[50,2],[54,2],[51,1],[51,2],[35,0],[35,2],[49,2],[59,2],[58,0],[58,2],[34,2],[60,0],[60,2],[57,2],[63,2],[62,0],[62,2],[56,2],[42,0],[42,1],[61,2],[64,2],[64,1],[64,2],[64,3],[64,1],[67,0],[67,1],[70,0],[70,1],[43,2],[43,1],[43,2],[43,3],[43,1],[65,2],[65,1],[65,2],[65,3],[65,1],[76,0],[76,1],[79,0],[79,1],[69,1],[69,1],[78,1],[78,1],[46,1],[46,1],[46,2],[68,3],[84,0],[84,2],[66,3],[77,2],[77,2],[77,2],[77,1],[88,0],[88,2],[91,1],[91,2],[75,2],[75,1],[95,0],[95,2],[96,1],[96,2],[94,1],[94,1],[94,1],[92,1],[92,1],[97,2],[97,1],[101,1],[101,1],[101,1],[93,2],[93,2],[108,1],[108,1],[108,1],[108,3],[107,1],[107,1],[107,1],[107,1],[109,1],[109,1],[74,3],[80,4],[124,1],[124,1],[120,0],[120,2],[122,0],[122,1],[125,2],[129,1],[129,2],[127,1],[131,1],[131,1],[133,2],[135,2],[134,1],[134,2],[132,1],[132,1],[137,2],[140,0],[140,1],[140,1],[138,3],[144,2],[144,2],[143,1],[143,2],[139,2],[139,1],[148,2],[145,0],[145,1],[146,1],[146,1],[152,6],[153,0],[153,1],[151,6],[155,0],[155,1],[154,1],[154,1],[154,1],[154,1],[156,1],[90,3],[162,0],[162,2],[163,1],[163,1],[163,1],[163,1],[163,2],[169,1],[169,2],[171,1],[171,2],[173,1],[173,2],[168,1],[168,1],[168,1],[164,2],[176,0],[176,2],[177,2],[175,0],[175,1],[170,3],[180,0],[180,1],[166,2],[183,0],[183,2],[184,2],[182,0],[182,1],[172,3],[167,2],[167,2],[188,0],[188,2],[187,2],[186,0],[186,1],[174,3],[147,2],[86,3],[191,1],[191,1],[85,1],[193,0],[193,2],[37,3],[195,1],[195,1],[181,1],[181,1],[181,1],[130,1],[130,1],[89,1],[38,1],[38,1],[150,1],[150,1],[198,1],[198,1],[198,1],[197,1],[197,2],[204,2],[203,0],[203,1],[199,1],[199,1],[112,1],[112,1],[112,1],[112,1],[202,1],[202,1],[202,1],[202,1],[23,1],[23,1],[215,1],[215,1],[192,1],[192,1],[192,1],[192,1],[201,1],[218,1],[218,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        let imports = Object.keys(Parser._imports).length ? { imports: Parser._imports } : {}
        const startObj = Parser.start ? { start: Parser.start } : {};
        const startActs = Parser.startActs ? { startActs: Parser.startActs } : {};
        let shapes = Parser.shapes ? { shapes: Object.values(Parser.shapes) } : {};
        const shexj = Object.assign(
          { type: "Schema" }, imports, startActs, startObj, shapes
        )
        if (Parser.options.index) {
          if (Parser._base !== null)
            shexj._base = Parser._base;
          shexj._prefixes = Parser._prefixes;
          shexj._index = {
            shapeExprs: Parser.shapes || new Map(),
            tripleExprs: Parser.productions || new Map()
          };
          shexj._sourceMap = Parser._sourceMap;
        }
        return shexj;
      
break;
case 2:
 yy.parser.yy = { lexer: yy.lexer} ; 
break;
case 16:
 // t: @@
        Parser._setBase(Parser._base === null ||
                    absoluteIRI.test($$[$0].slice(1, -1)) ? $$[$0].slice(1, -1) : _resolveIRI($$[$0].slice(1, -1)));
      
break;
case 17:
 // t: ShExParser-test.js/with pre-defined prefixes
        Parser._prefixes[$$[$0-1].slice(0, -1)] = $$[$0];
      
break;
case 18:
 // t: @@
        Parser._imports.push($$[$0]);
      
break;
case 19:

        $$[$0].forEach(function (elt) {
	  Parser._termResolver.add(elt);
        });
      
break;
case 20: case 49: case 53: case 56: case 60:
this.$ = [];
break;
case 21: case 45: case 48: case 50: case 54: case 57: case 61:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 22: case 44: case 47:
this.$ = [$$[$0]];
break;
case 23: case 156:
this.$ = $$[$0-1];
break;
case 26:

        if (Parser.start)
          error(new Error("Parse error: start already defined"), yy);
        Parser.start = shapeJunction("ShapeOr", $$[$0-1], $$[$0]); // t: startInline
      
break;
case 27:

        Parser.startActs = $$[$0]; // t: startCode1
      
break;
case 28:
this.$ = [$$[$0]] // t: startCode1;
break;
case 29:
this.$ = appendTo($$[$0-1], $$[$0]) // t: startCode3;
break;
case 32:
 // t: 1dot 1val1vsMinusiri3??
        addShape($$[$0-1],  $$[$0], yy);
      
break;
case 33:

        this.$ = nonest($$[$0]);
      
break;
case 34:
this.$ = { type: "ShapeExternal" };
break;
case 35:

        if ($$[$0-2])
          $$[$0-1] = { type: "ShapeNot", "shapeExpr": nonest($$[$0-1]) }; // t:@@
        if ($$[$0]) { // If there were disjuncts,
          //           shapeOr will have $$[$0].set needsAtom.
          //           Prepend $$[$0].needsAtom with $$[$0-1].
          //           Note that $$[$0] may be a ShapeOr or a ShapeAnd.
          $$[$0].needsAtom.unshift(nonest($$[$0-1]));
          delete $$[$0].needsAtom;
          this.$ = $$[$0];
        } else {
          this.$ = $$[$0-1];
        }
      
break;
case 36:

        $$[$0-1] = { type: "ShapeNot", "shapeExpr": nonest($$[$0-1]) } // !!! opt
        if ($$[$0]) { // If there were disjuncts,
          //           shapeOr will have $$[$0].set needsAtom.
          //           Prepend $$[$0].needsAtom with $$[$0-1].
          //           Note that $$[$0] may be a ShapeOr or a ShapeAnd.
          $$[$0].needsAtom.unshift(nonest($$[$0-1]));
          delete $$[$0].needsAtom;
          this.$ = $$[$0];
        } else {
          this.$ = $$[$0-1];
        }
      
break;
case 37:

        $$[$0].needsAtom.unshift(nonest($$[$0-1]));
        delete $$[$0].needsAtom;
        this.$ = $$[$0]; // { type: "ShapeOr", "shapeExprs": [$$[$0-1]].concat($$[$0]) };
      
break;
case 38: case 233: case 250:
this.$ = null;
break;
case 39: case 43: case 46: case 52: case 59: case 190: case 249:
this.$ = $$[$0];
break;
case 41:
 // returns a ShapeOr
        const disjuncts = $$[$0].map(nonest);
        this.$ = { type: "ShapeOr", shapeExprs: disjuncts, needsAtom: disjuncts }; // t: @@
      
break;
case 42:
 // returns a ShapeAnd
        // $$[$0-1] could have implicit conjuncts and explicit nested ANDs (will have .nested: true)
        $$[$0-1].filter(c => c.type === "ShapeAnd").length === $$[$0-1].length
        const and = {
          type: "ShapeAnd",
          shapeExprs: $$[$0-1].reduce(
            (acc, elt) =>
              acc.concat(elt.type === 'ShapeAnd' && !elt.nested ? elt.shapeExprs : nonest(elt)), []
          )
        };
        this.$ = $$[$0].length > 0 ? { type: "ShapeOr", shapeExprs: [and].concat($$[$0].map(nonest)) } : and; // t: @@
        this.$.needsAtom = and.shapeExprs;
      
break;
case 51:
this.$ = shapeJunction("ShapeOr", $$[$0-1], $$[$0]);
break;
case 55: case 58:
this.$ = shapeJunction("ShapeAnd", $$[$0-1], $$[$0]) // t: @@;
break;
case 62:
this.$ = $$[$0-1] ? { type: "ShapeNot", "shapeExpr": nonest($$[$0]) } /* t:@@ */ : $$[$0];
break;
case 63:
this.$ = false;
break;
case 64:
this.$ = true;
break;
case 65:
this.$ = $$[$0-1] ? { type: "ShapeNot", "shapeExpr": nonest($$[$0]) } /* t: 1NOTNOTdot, 1NOTNOTIRI, 1NOTNOTvs */ : $$[$0];
break;
case 66: case 75: case 80:
this.$ = $$[$0] ? { type: "ShapeAnd", shapeExprs: [ extend({ type: "NodeConstraint" }, $$[$0-1]), $$[$0] ] } : $$[$0-1];
break;
case 68:
this.$ = $$[$0] ? shapeJunction("ShapeAnd", $$[$0-1], [$$[$0]]) /* t: 1dotRef1 */ : $$[$0-1] // t:@@;
break;
case 69: case 78: case 83:
this.$ = Object.assign($$[$0-1], {nested: true}) // t: 1val1vsMinusiri3;
break;
case 70: case 79: case 84:
this.$ = EmptyShape // t: 1dot;
break;
case 77:
this.$ = $$[$0] ? shapeJunction("ShapeAnd", $$[$0-1], [$$[$0]]) /* t:@@ */ : $$[$0-1]	 // t: 1dotRef1 -- use _QnonLitNodeConstraint_E_Opt like below?;
break;
case 82:
this.$ = $$[$0] ? { type: "ShapeAnd", shapeExprs: [ extend({ type: "NodeConstraint" }, $$[$0-1]), $$[$0] ] } : $$[$0-1] // t: !! look to 1dotRef1;
break;
case 93:
 // t: 1dotRefLNex@@
        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        const namePos = $$[$0].indexOf(':');
        this.$ = addSourceMap(expandPrefix($$[$0].substr(0, namePos), yy) + $$[$0].substr(namePos + 1), yy); // ShapeRef
      
break;
case 94:
 // t: 1dotRefNS1@@
        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        this.$ = addSourceMap(expandPrefix($$[$0].substr(0, $$[$0].length - 1), yy), yy); // ShapeRef
      
break;
case 95:
this.$ = addSourceMap($$[$0], yy) // ShapeRef // t: 1dotRef1, 1dotRefSpaceLNex, 1dotRefSpaceNS1;
break;
case 96: case 99:
 // t: !!
        this.$ = $$[$0-2]
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: !!
        if ($$[$0]) { this.$.semActs = $$[$0].semActs; } // t: !!
      
break;
case 97:
this.$ = [] // t: 1dot, 1dotAnnot3;
break;
case 98:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1dotAnnot3;
break;
case 100:
this.$ = extend({ type: "NodeConstraint", nodeKind: "literal" }, $$[$0]) // t: 1literalPattern;
break;
case 101:

        if (numericDatatypes.indexOf($$[$0-1]) === -1)
          numericFacets.forEach(function (facet) {
            if (facet in $$[$0])
              error(new Error("Parse error: facet " + facet + " not allowed for unknown datatype " + $$[$0-1]), yy);
          });
        this.$ = extend({ type: "NodeConstraint", datatype: $$[$0-1] }, $$[$0]) // t: 1datatype
      
break;
case 102:
this.$ = { type: "NodeConstraint", values: $$[$0-1] } // t: 1val1IRIREF;
break;
case 103:
this.$ = extend({ type: "NodeConstraint"}, $$[$0]);
break;
case 104:
this.$ = {} // t: 1literalPattern;
break;
case 105:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0]) // t: 1literalLength
      
break;
case 107: case 113:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0]) // t: !! look to 1literalLength
      
break;
case 108:
this.$ = extend({ type: "NodeConstraint" }, $$[$0-1], $$[$0] ? $$[$0] : {}) // t: 1iriPattern;
break;
case 109:
this.$ = extend({ type: "NodeConstraint" }, $$[$0]) // t: @@;
break;
case 110:
this.$ = {};
break;
case 111:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0])
      
break;
case 114:
this.$ = { nodeKind: "iri" } // t: 1iriPattern;
break;
case 115:
this.$ = { nodeKind: "bnode" } // t: 1bnodeLength;
break;
case 116:
this.$ = { nodeKind: "nonliteral" } // t: 1nonliteralLength;
break;
case 119:
this.$ = keyValObject($$[$0-1], parseInt($$[$0], 10)) // t: 1literalLength;
break;
case 120:
this.$ = unescapeRegexp($$[$0]) // t: 1literalPattern;
break;
case 121:
this.$ = "length" // t: 1literalLength;
break;
case 122:
this.$ = "minlength" // t: 1literalMinlength;
break;
case 123:
this.$ = "maxlength" // t: 1literalMaxlength;
break;
case 124:
this.$ = keyValObject($$[$0-1], $$[$0]) // t: 1literalMininclusive;
break;
case 125:
this.$ = keyValObject($$[$0-1], parseInt($$[$0], 10)) // t: 1literalTotaldigits;
break;
case 126:
this.$ = parseInt($$[$0], 10);
break;
case 127: case 128:
this.$ = parseFloat($$[$0]);
break;
case 129:
 // ## deprecated
        if ($$[$0] === XSD_DECIMAL || $$[$0] === XSD_FLOAT || $$[$0] === XSD_DOUBLE)
          this.$ = parseFloat($$[$0-2].value);
        else if (numericDatatypes.indexOf($$[$0]) !== -1)
          this.$ = parseInt($$[$0-2].value)
        else
          error(new Error("Parse error: numeric range facet expected numeric datatype instead of " + $$[$0]), yy);
      
break;
case 130:
this.$ = "mininclusive" // t: 1literalMininclusive;
break;
case 131:
this.$ = "minexclusive" // t: 1literalMinexclusive;
break;
case 132:
this.$ = "maxinclusive" // t: 1literalMaxinclusive;
break;
case 133:
this.$ = "maxexclusive" // t: 1literalMaxexclusive;
break;
case 134:
this.$ = "totaldigits" // t: 1literalTotaldigits;
break;
case 135:
this.$ = "fractiondigits" // t: 1literalFractiondigits;
break;
case 136:
 // t: @@
        this.$ = $$[$0-2] === EmptyShape ? { type: "Shape" } : $$[$0-2]; // t: 0
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: !! look to open3groupdotcloseAnnot3, open3groupdotclosecard23Annot3Code2
        if ($$[$0]) { this.$.semActs = $$[$0].semActs; } // t: !! look to open3groupdotcloseCode1, !open1dotOr1dot
      
break;
case 137:
 // t: @@
        const exprObj = $$[$0-1] ? { expression: $$[$0-1] } : EmptyObject; // t: 0
        this.$ = (exprObj === EmptyObject && $$[$0-3] === EmptyObject) ?
	  EmptyShape :
	  extend({ type: "Shape" }, exprObj, $$[$0-3]);
      
break;
case 138:
this.$ = [ "extra", $$[$0] ] // t: 1dotExtra1, 3groupdot3Extra, 3groupdotExtra3;
break;
case 139:
this.$ = [ "closed", true ] // t: 1dotClosed;
break;
case 140:
this.$ = EmptyObject;
break;
case 141:

        if ($$[$0-1] === EmptyObject)
          $$[$0-1] = {};
        if ($$[$0][0] === "closed")
          $$[$0-1]["closed"] = true; // t: 1dotClosed
        else if ($$[$0][0] in $$[$0-1])
          $$[$0-1][$$[$0][0]] = unionAll($$[$0-1][$$[$0][0]], $$[$0][1]); // t: 3groupdot3Extra, 3groupdotExtra3
        else
          $$[$0-1][$$[$0][0]] = $$[$0][1]; // t: @@
        this.$ = $$[$0-1];
      
break;
case 144:
this.$ = $$[$0] // t: 1dotExtra1, 3groupdot3Extra;
break;
case 145:
this.$ = [$$[$0]] // t: 1dotExtra1, 3groupdot3Extra, 3groupdotExtra3;
break;
case 146:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 3groupdotExtra3;
break;
case 150:
this.$ = { type: "OneOf", expressions: unionAll([$$[$0-1]], $$[$0]) } // t: 2oneOfdot;
break;
case 151:
this.$ = $$[$0] // t: 2oneOfdot;
break;
case 152:
this.$ = [$$[$0]] // t: 2oneOfdot;
break;
case 153:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 2oneOfdot;
break;
case 160:
this.$ = { type: "EachOf", expressions: unionAll([$$[$0-2]], $$[$0-1]) } // t: 2groupOfdot;
break;
case 161:
this.$ = $$[$0] // ## deprecated // t: 2groupOfdot;
break;
case 162:
this.$ = $$[$0] // t: 2groupOfdot;
break;
case 163:
this.$ = [$$[$0]] // t: 2groupOfdot;
break;
case 164:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 2groupOfdot;
break;
case 165:

        if ($$[$0-1]) {
          this.$ = extend({ id: $$[$0-1] }, $$[$0]);
          addProduction($$[$0-1],  this.$, yy);
        } else {
          this.$ = $$[$0]
        }
      
break;
case 167:
this.$ = addSourceMap($$[$0], yy);
break;
case 172:

        // t: open1dotOr1dot, !openopen1dotcloseCode1closeCode2
        this.$ = $$[$0-4];
        // Copy all of the new attributes into the encapsulated shape.
        if ("min" in $$[$0-2]) { this.$.min = $$[$0-2].min; } // t: open3groupdotclosecard23Annot3Code2
        if ("max" in $$[$0-2]) { this.$.max = $$[$0-2].max; } // t: open3groupdotclosecard23Annot3Code2
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: open3groupdotcloseAnnot3, open3groupdotclosecard23Annot3Code2
        if ($$[$0]) { this.$.semActs = "semActs" in $$[$0-4] ? $$[$0-4].semActs.concat($$[$0].semActs) : $$[$0].semActs; } // t: open3groupdotcloseCode1, !open1dotOr1dot
      
break;
case 173:
this.$ = {} // t: 1dot;
break;
case 175:

        // $$[$0]: t: 1dotCode1
	if ($$[$0-3] !== EmptyShape && false) {
	  const t = blank();
	  addShape(t, $$[$0-3], yy);
	  $$[$0-3] = t; // ShapeRef
	}
        // %6: t: 1inversedotCode1
        this.$ = extend({ type: "TripleConstraint" }, $$[$0-5] ? $$[$0-5] : {}, { predicate: $$[$0-4] }, ($$[$0-3] === EmptyShape ? {} : { valueExpr: $$[$0-3] }), $$[$0-2], $$[$0]); // t: 1dot // t: 1inversedot
        if ($$[$0-1].length)
          this.$["annotations"] = $$[$0-1]; // t: 1dotAnnot3 // t: 1inversedotAnnot3
      
break;
case 178:
this.$ = { min:0, max:UNBOUNDED } // t: 1cardStar;
break;
case 179:
this.$ = { min:1, max:UNBOUNDED } // t: 1cardPlus;
break;
case 180:
this.$ = { min:0, max:1 } // t: 1cardOpt;
break;
case 181:

        $$[$0] = $$[$0].substr(1, $$[$0].length-2);
        const nums = $$[$0].match(/(\d+)/g);
        this.$ = { min: parseInt(nums[0], 10) }; // t: 1card2blank, 1card2Star
        if (nums.length === 2)
            this.$["max"] = parseInt(nums[1], 10); // t: 1card23
        else if ($$[$0].indexOf(',') === -1) // t: 1card2
            this.$["max"] = parseInt(nums[0], 10);
        else
            this.$["max"] = UNBOUNDED;
      
break;
case 182:
this.$ = { inverse: true } // t: 1inversedot;
break;
case 183:
this.$ = $$[$0-1] // t: 1val1IRIREF;
break;
case 184:
this.$ = [] // t: 1val1IRIREF;
break;
case 185:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1IRIREF;
break;
case 187:
this.$ = Parser._termResolver.resolve($$[$0], Parser._prefixes);
break;
case 191:
this.$ = [$$[$0]] // t:1val1dotMinusiri3, 1val1dotMinusiriStem3;
break;
case 192:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinusiri3, 1val1dotMinusiriStem3;
break;
case 193:
this.$ = [$$[$0]] // t:1val1dotMinusliteral3, 1val1dotMinusliteralStem3;
break;
case 194:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinusliteral3, 1val1dotMinusliteralStem3;
break;
case 195:
this.$ = [$$[$0]] // t:1val1dotMinuslanguage3, 1val1dotMinuslanguageStem3;
break;
case 196:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinuslanguage3, 1val1dotMinuslanguageStem3;
break;
case 197:
this.$ = { type: "IriStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 198:
this.$ = { type: "LiteralStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 199:
this.$ = { type: "LanguageStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 200:

        if ($$[$0]) {
          this.$ = {  // t: 1val1iriStem, 1val1iriStemMinusiri3
            type: $$[$0].length ? "IriStemRange" : "IriStem",
            stem: $$[$0-1]
          };
          if ($$[$0].length)
            this.$["exclusions"] = $$[$0]; // t: 1val1iriStemMinusiri3
        } else {
          this.$ = $$[$0-1]; // t: 1val1IRIREF, 1AvalA
        }
      
break;
case 201:
this.$ = [] // t: 1val1iriStem, 1val1iriStemMinusiri3;
break;
case 202:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1iriStemMinusiri3;
break;
case 203:
this.$ = $$[$0] // t: 1val1iriStemMinusiri3;
break;
case 206:
this.$ = $$[$0] ? { type: "IriStem", stem: $$[$0-1] } /* t: 1val1iriStemMinusiriStem3 */ : $$[$0-1] // t: 1val1iriStemMinusiri3;
break;
case 209:

        if ($$[$0]) {
          this.$ = {  // t: 1val1literalStemMinusliteralStem3, 1val1literalStem
            type: $$[$0].length ? "LiteralStemRange" : "LiteralStem",
            stem: $$[$0-1].value
          };
          if ($$[$0].length)
            this.$["exclusions"] = $$[$0]; // t: 1val1literalStemMinusliteral3
        } else {
          this.$ = $$[$0-1]; // t: 1val1LITERAL
        }
      
break;
case 210:
this.$ = [] // t: 1val1literalStem, 1val1literalStemMinusliteral3;
break;
case 211:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1literalStemMinusliteral3;
break;
case 212:
this.$ = $$[$0] // t: 1val1literalStemMinusliteral3;
break;
case 215:
this.$ = $$[$0] ? { type: "LiteralStem", stem: $$[$0-1].value } /* t: 1val1literalStemMinusliteral3 */ : $$[$0-1].value // t: 1val1literalStemMinusliteralStem3;
break;
case 216:

        if ($$[$0]) {
          this.$ = {  // t: 1val1languageStemMinuslanguage3 1val1languageStemMinuslanguageStem3 : 1val1languageStem
            type: $$[$0].length ? "LanguageStemRange" : "LanguageStem",
            stem: $$[$0-1]
          };
          if ($$[$0].length)
            this.$["exclusions"] = $$[$0]; // t: 1val1languageStemMinuslanguage3, 1val1languageStemMinuslanguageStem3
        } else {
          this.$ = { type: "Language", languageTag: $$[$0-1] }; // t: 1val1language
        }
      
break;
case 217:

        this.$ = {  // t: @@
          type: $$[$0].length ? "LanguageStemRange" : "LanguageStem",
          stem: ""
        };
        if ($$[$0].length)
          this.$["exclusions"] = $$[$0]; // t: @@
      
break;
case 218:
this.$ = [] // t: 1val1languageStem, 1val1languageStemMinuslanguage3;
break;
case 219:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1languageStemMinuslanguage3;
break;
case 220:
this.$ = $$[$0] // t: 1val1languageStemMinuslanguage3;
break;
case 223:
this.$ = $$[$0] ? { type: "LanguageStem", stem: $$[$0-1] } /* t: 1val1languageStemMinuslanguageStem3 */ : $$[$0-1] // t: 1val1languageStemMinuslanguage3;
break;
case 224:
this.$ = addSourceMap($$[$0], yy) // Inclusion // t: 2groupInclude1;
break;
case 225:
this.$ = { type: "Annotation", predicate: $$[$0-1], object: $$[$0] } // t: 1dotAnnotIRIREF;
break;
case 228:
this.$ = $$[$0].length ? { semActs: $$[$0] } : null // t: 1dotCode1/2oneOfDot;
break;
case 229:
this.$ = [] // t: 1dot, 1dotCode1;
break;
case 230:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1dotCode1;
break;
case 231:
this.$ = $$[$0] ? unescapeSemanticAction($$[$0-1], $$[$0]) /* t: 1dotCode1 */ : { type: "SemAct", name: $$[$0-1] } // t: 1dotNoCode1;
break;
case 238:
this.$ = RDF_TYPE // t: 1AvalA;
break;
case 244:
this.$ = createLiteral($$[$0], XSD_INTEGER) // t: 1val1INTEGER;
break;
case 245:
this.$ = createLiteral($$[$0], XSD_DECIMAL) // t: 1val1DECIMAL;
break;
case 246:
this.$ = createLiteral($$[$0], XSD_DOUBLE) // t: 1val1DOUBLE;
break;
case 248:
this.$ = $$[$0] ? extend($$[$0-1], { type: $$[$0] }) : $$[$0-1] // t: 1val1Datatype;
break;
case 252:
this.$ = { value: "true", type: XSD_BOOLEAN } // t: 1val1true;
break;
case 253:
this.$ = { value: "false", type: XSD_BOOLEAN } // t: 1val1false;
break;
case 254:
this.$ = unescapeString($$[$0], 1)	// t: 1val1STRING_LITERAL2;
break;
case 255:
this.$ = unescapeString($$[$0], 3)	// t: 1val1STRING_LITERAL1;
break;
case 256:
this.$ = unescapeString($$[$0], 1)	// t: 1val1STRING_LITERAL_LONG2;
break;
case 257:
this.$ = unescapeString($$[$0], 3)	// t: 1val1STRING_LITERAL_LONG1;
break;
case 258:
this.$ = unescapeLangString($$[$0], 1)	// t: @@;
break;
case 259:
this.$ = unescapeLangString($$[$0], 3)	// t: @@;
break;
case 260:
this.$ = unescapeLangString($$[$0], 1)	// t: 1val1LANGTAG;
break;
case 261:
this.$ = unescapeLangString($$[$0], 3)	// t: 1val1STRING_LITERAL_LONG2_with_LANGTAG;
break;
case 262:
 // t: 1dot
        const unesc = ShExUtil.unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._base === null || absoluteIRI.test(unesc) ? unesc : _resolveIRI(unesc)
      
break;
case 264:
 // t:1dotPNex, 1dotPNdefault, ShExParser-test.js/with pre-defined prefixes
        const namePos1 = $$[$0].indexOf(':');
        this.$ = expandPrefix($$[$0].substr(0, namePos1), yy) + ShExUtil.unescapeText($$[$0].substr(namePos1 + 1), pnameEscapeReplacements);
      
break;
case 265:
 // t: 1dotNS2, 1dotNSdefault, ShExParser-test.js/PNAME_NS with pre-defined prefixes
        this.$ = expandPrefix($$[$0].substr(0, $$[$0].length - 1), yy);
      
break;
case 266:
this.$ = this._base === null || absoluteIRI.test($$[$0].slice(1, -1)) ? ShExUtil.unescapeText($$[$0].slice(1,-1), {}) : _resolveIRI(ShExUtil.unescapeText($$[$0].slice(1,-1), {})) // t: 1dot;
break;
case 267:
 // t:1dotPNex, 1dotPNdefault, ShExParser-test.js/with pre-defined prefixes
        const namePos2 = $$[$0].indexOf(':');
      this.$ = expandPrefix($$[$0].substr(0, namePos2), yy) + $$[$0].substr(namePos2 + 1);
    
break;
case 268:
 // t: 1dotNS2, 1dotNSdefault, ShExParser-test.js/PNAME_NS with pre-defined prefixes
      this.$ = expandPrefix($$[$0].substr(0, $$[$0].length - 1), yy);
    
break;
case 269:

        this.$ = Parser._termResolver.resolve($$[$0], Parser._prefixes);
    
break;
}
},
table: [o($V0,[2,2],{3:1,4:2}),{1:[3]},o($V0,[2,3],{5:3}),{6:4,7:[2,10],8:5,9:11,10:16,11:17,14:6,15:7,16:8,17:9,18:10,19:[1,12],20:$V1,21:[1,13],22:$V2,23:24,24:[1,14],25:[1,15],30:18,31:19,32:[1,21],36:20,37:23,38:22,194:$V3,201:25,215:28,216:$V4,217:$V5},{7:[1,32]},o($V0,[2,4]),{7:[2,11]},o($V0,$V6),o($V0,$V7),o($V0,$V8),o($V0,$V9),o($Va,[2,7],{12:33}),{20:[1,34]},{22:[1,35]},{20:$Vb,22:$Vc,23:36,215:38,216:$Vd},{20:$Vb,22:$Vc,23:42,26:41,28:[1,43],215:38,216:$Vd},o($Va,[2,5]),o($Va,[2,6]),o($Va,$Ve),o($Va,$Vf),o($Va,[2,27],{37:44,194:$V3}),{33:[1,45]},o($Vg,$Vh,{39:46,40:47,42:49,46:51,41:[1,48],45:[1,50],81:$Vi,82:$Vj,83:$Vk}),o($V0,[2,28]),o($Vl,$Vm),o($Vl,$Vn),{20:$Vo,22:$Vp,23:55,215:57,216:$Vq},o($Vl,$Vr),o($Vl,$Vs),o($Vl,$Vt),o($Vl,$Vu),o($Vl,$Vv),{1:[2,1]},{7:[2,9],8:61,10:62,13:60,15:63,16:64,17:65,18:66,19:[1,69],20:$V1,21:[1,70],22:$V2,23:24,24:[1,71],25:[1,72],30:67,31:68,32:[1,73],38:74,201:25,215:28,216:$V4,217:$V5},o($V0,$Vw),{20:$Vb,22:$Vc,23:75,215:38,216:$Vd},o($V0,$Vx),o($V0,$Vr),o($V0,$Vs),o($V0,$Vu),o($V0,$Vv),o($V0,$Vy),o($V0,$Vz),o($VA,$VB,{27:76}),o($V0,[2,29]),o($VC,$Vh,{34:77,56:78,42:79,45:$VD}),o($Va,$VE),o($Va,$VF),o($Va,$VG),o($VH,$VI,{43:81,66:82,68:83,74:84,75:87,77:88,80:89,94:90,96:91,89:93,90:94,91:95,120:96,97:100,192:101,93:103,101:104,107:110,109:111,20:$VJ,22:$VK,28:$VL,71:[1,85],73:[1,86],87:$VM,98:$VN,99:$VO,100:$VP,103:$VQ,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:$V_,216:$V$}),o($Vg,$V01,{46:121,81:$V11,82:$V21,83:$V31}),{47:125,50:126,51:127,52:128,53:$V41,54:129,55:$V51},o($V61,$V71),o($V61,$V81),{20:[1,135],22:[1,139],23:133,38:132,201:134,215:136,216:[1,138],217:[1,137]},{194:[1,142],195:140,196:[1,141]},o($V91,$Vr),o($V91,$Vs),o($V91,$Vu),o($V91,$Vv),o($Va,[2,8]),o($Va,[2,30]),o($Va,[2,31]),o($Va,$V6),o($Va,$V7),o($Va,$V8),o($Va,$V9),o($Va,$Ve),o($Va,$Vf),{20:[1,143]},{22:[1,144]},{20:$Va1,22:$Vb1,23:145,215:147,216:$Vc1},{20:$Va1,22:$Vb1,23:151,26:150,28:[1,152],215:147,216:$Vc1},{33:[1,153]},o($Vg,$Vh,{39:154,40:155,42:157,46:159,41:[1,156],45:[1,158],81:$Vi,82:$Vj,83:$Vk}),o($V0,$Vd1),{20:$Ve1,22:$Vf1,23:161,29:[1,160],215:163,216:$Vg1},o($Vh1,$Vi1,{35:166}),o($Vj1,$Vk1,{60:167}),o($VH,$VI,{75:87,77:88,80:89,94:90,96:91,89:93,90:94,91:95,120:96,97:100,192:101,93:103,101:104,107:110,109:111,64:168,66:169,68:170,69:171,74:174,46:175,20:$VJ,22:$VK,28:$VL,71:[1,172],73:[1,173],81:[1,176],82:[1,177],83:[1,178],87:$VM,98:$VN,99:$VO,100:$VP,103:$VQ,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:$V_,216:$V$}),o($VC,$V01),o($Va,$Vl1,{50:126,51:127,52:128,54:129,44:179,47:180,53:$V41,55:$V51}),o($Vj1,$Vm1,{67:181,69:182,74:183,46:184,80:185,120:186,81:$V11,82:$V21,83:$V31,121:$VI,126:$VI,128:$VI}),o($Vj1,$Vn1),o($Vj1,$Vo1,{70:187,66:188,75:189,94:190,96:191,97:195,101:196,98:$Vp1,99:$Vq1,100:$Vr1,103:$Vs1,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{40:198,42:199,46:201,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vu1),o($Vv1,$Vw1,{84:202}),o($Vx1,$Vw1,{84:203}),o($Vy1,$Vw1,{84:204}),o($Vz1,$VA1,{95:205}),o($Vv1,$VB1,{101:104,97:206,103:$VQ,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:207}),o($VC1,$VD1,{88:208}),o($VC1,$VD1,{88:209}),o($Vx1,$VE1,{107:110,109:111,93:210,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),{121:[1,211],124:212,125:213,126:$VF1,128:$VG1},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:216}),o($VO1,$VP1),{102:[1,217]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,219],108:218,110:[1,220],111:[1,221],112:222,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,227]},{102:[2,121]},{102:[2,122]},{102:[2,123]},o($VZ1,[2,130]),o($VZ1,[2,131]),o($VZ1,[2,132]),o($VZ1,[2,133]),{102:[2,134]},{102:[2,135]},o($Va,$Vl1,{50:126,51:127,52:128,54:129,47:180,44:228,53:$V41,55:$V51}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,232],22:[1,236],23:230,38:229,201:231,215:233,216:[1,235],217:[1,234]},o($Va,$V_1),o($Va,$V$1,{52:237,53:$V41}),o($Vh1,$Vi1,{35:238,54:239,55:$V51}),o($Vh1,$V02),o($Vj1,$V12),o($VC,$Vh,{34:240,56:241,42:242,45:$VD}),o($VC,$Vh,{56:243,42:244,45:$VD}),o($V61,$V22),o($V61,$Vm),o($V61,$Vn),o($V61,$Vr),o($V61,$Vs),o($V61,$Vt),o($V61,$Vu),o($V61,$Vv),o($V0,$V32),o($V0,$V42),o($V0,$V52),o($Va,$Vw),{20:$Va1,22:$Vb1,23:245,215:147,216:$Vc1},o($Va,$Vx),o($Va,$Vr),o($Va,$Vs),o($Va,$Vu),o($Va,$Vv),o($Va,$Vy),o($Va,$Vz),o($VA,$VB,{27:246}),o($VC,$Vh,{34:247,56:248,42:249,45:$VD}),o($Va,$VE),o($Va,$VF),o($Va,$VG),o($VH,$VI,{43:250,66:251,68:252,74:253,75:256,77:257,80:258,94:259,96:260,89:262,90:263,91:264,120:265,97:269,192:270,93:272,101:273,107:279,109:280,20:$V62,22:$V72,28:$V82,71:[1,254],73:[1,255],87:$V92,98:$Va2,99:$Vb2,100:$Vc2,103:$Vd2,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:$Ve2,216:$Vf2}),o($Vg,$V01,{46:281,81:$Vg2,82:$Vh2,83:$Vi2}),{47:285,50:286,51:287,52:288,53:$Vj2,54:289,55:$Vk2},o($V0,$Vl2),o($VA,[2,21]),o($VA,$Vr),o($VA,$Vs),o($VA,$Vu),o($VA,$Vv),o($Va,$Vm2,{52:292,53:$V41}),o($Vh1,$Vn2,{54:293,55:$V51}),o($Vj1,$Vo2),o($Vj1,$Vm1,{69:182,74:183,46:184,80:185,120:186,67:294,81:$V11,82:$V21,83:$V31,121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{66:188,75:189,94:190,96:191,97:195,101:196,70:295,98:$Vp1,99:$Vq1,100:$Vr1,103:$Vs1,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:296,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vr2,$V71),o($Vr2,$V81),{20:[1,300],22:[1,304],23:298,38:297,201:299,215:301,216:[1,303],217:[1,302]},o($Va,$Vu2),o($Va,$Vv2),o($Vj1,$Vw2),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:305}),{121:[1,306],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$Vy2),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:307}),o($VA2,$VA1,{95:308}),o($Vx1,$VB1,{101:196,97:309,103:$Vs1,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,310]},o($VA2,$VQ1),{72:[1,311]},o($VH,$VI,{43:312,66:313,68:314,74:315,75:318,77:319,80:320,94:321,96:322,89:324,90:325,91:326,120:327,97:331,192:332,93:334,101:335,107:341,109:342,20:[1,337],22:[1,339],28:[1,333],71:[1,316],73:[1,317],87:[1,323],98:[1,328],99:[1,329],100:[1,330],103:$VB2,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,340],216:[1,338]}),o($Vg,$V01,{46:343,81:$VC2,82:$VD2,83:$VE2}),{47:347,50:348,51:349,52:350,53:$VF2,54:351,55:$VG2},o($VH2,$VI2,{85:354,86:355,193:356,190:[1,357]}),o($VJ2,$VI2,{85:358,86:359,193:360,190:$VK2}),o($VL2,$VI2,{85:362,86:363,193:364,190:[1,365]}),o($Vv1,$VM2,{101:104,97:366,103:$VQ,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:367,97:368,93:369,101:370,107:372,109:373,103:$VP2,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:367,97:368,93:369,101:370,107:372,109:373,103:$VP2,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:367,97:368,93:369,101:370,107:372,109:373,103:$VP2,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VT2,$VU2,{122:374,127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,123:$VV2,149:$VW2,189:$VX2}),o($VH,[2,141]),o($VH,[2,138]),o($VH,[2,139]),{20:$VY2,22:$VZ2,129:387,130:388,165:$V_2,192:389,200:$V$2,216:$V03},{20:$V13,22:$V23,23:402,29:[1,395],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,428]},{113:$Vq3},{113:$Vr3},{113:$Vs3},{113:$Vt3},o($VO1,$Vu3),o($Va,$Vv3),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($Vh1,$Vw3),o($Va,$Vx3,{52:292,53:$V41}),o($Vj1,$Vy3),o($Vh1,$Vz3),o($Vj1,$Vk1,{60:429}),o($VH,$VI,{64:430,66:431,68:432,69:433,75:436,77:437,74:438,46:439,94:440,96:441,89:443,90:444,91:445,80:446,97:453,192:454,93:456,120:457,101:458,107:464,109:465,20:[1,460],22:[1,462],28:[1,455],71:[1,434],73:[1,435],81:[1,447],82:[1,448],83:[1,449],87:[1,442],98:[1,450],99:[1,451],100:[1,452],103:$VA3,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,463],216:[1,461]}),o($Vj1,$VB3),o($VH,$VI,{64:466,66:467,68:468,69:469,75:472,77:473,74:474,46:475,94:476,96:477,89:479,90:480,91:481,80:482,97:489,192:490,93:492,120:493,101:494,107:500,109:501,20:[1,496],22:[1,498],28:[1,491],71:[1,470],73:[1,471],81:[1,483],82:[1,484],83:[1,485],87:[1,478],98:[1,486],99:[1,487],100:[1,488],103:$VC3,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,499],216:[1,497]}),o($Va,$Vd1),{20:$Ve1,22:$Vf1,23:161,29:[1,502],215:163,216:$Vg1},o($Vh1,$Vi1,{35:503}),o($Vj1,$Vk1,{60:504}),o($VH,$VI,{75:256,77:257,80:258,94:259,96:260,89:262,90:263,91:264,120:265,97:269,192:270,93:272,101:273,107:279,109:280,64:505,66:506,68:507,69:508,74:511,46:512,20:$V62,22:$V72,28:$V82,71:[1,509],73:[1,510],81:[1,513],82:[1,514],83:[1,515],87:$V92,98:$Va2,99:$Vb2,100:$Vc2,103:$Vd2,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:$Ve2,216:$Vf2}),o($Va,$Vl1,{50:286,51:287,52:288,54:289,44:516,47:517,53:$Vj2,55:$Vk2}),o($Vj1,$Vm1,{67:518,69:519,74:520,46:521,80:522,120:523,81:$Vg2,82:$Vh2,83:$Vi2,121:$VI,126:$VI,128:$VI}),o($Vj1,$Vn1),o($Vj1,$Vo1,{70:524,66:525,75:526,94:527,96:528,97:532,101:533,98:$VD3,99:$VE3,100:$VF3,103:$VG3,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:535,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vu1),o($Vv1,$Vw1,{84:536}),o($Vx1,$Vw1,{84:537}),o($Vy1,$Vw1,{84:538}),o($Vz1,$VA1,{95:539}),o($Vv1,$VB1,{101:273,97:540,103:$Vd2,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:541}),o($VC1,$VD1,{88:542}),o($VC1,$VD1,{88:543}),o($Vx1,$VE1,{107:279,109:280,93:544,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),{121:[1,545],124:212,125:213,126:$VF1,128:$VG1},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:546}),o($VO1,$VP1),{102:[1,547]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,549],108:548,110:[1,550],111:[1,551],112:552,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,553]},o($Va,$Vl1,{50:286,51:287,52:288,54:289,47:517,44:554,53:$Vj2,55:$Vk2}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,558],22:[1,562],23:556,38:555,201:557,215:559,216:[1,561],217:[1,560]},o($Va,$V_1),o($Va,$V$1,{52:563,53:$Vj2}),o($Vh1,$Vi1,{35:564,54:565,55:$Vk2}),o($Vh1,$V02),o($Vj1,$V12),o($VC,$Vh,{34:566,56:567,42:568,45:$VD}),o($VC,$Vh,{56:569,42:570,45:$VD}),o($Vh1,$VH3),o($Vj1,$VI3),o($Vj1,$VJ3),o($Vj1,$VK3),{72:[1,571]},o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),o($VJ2,$VI2,{86:359,193:360,85:572,190:$VK2}),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:573,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:359,193:360,85:574,190:$VK2}),o($Vx1,$VM2,{101:196,97:575,103:$Vs1,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VL3),{44:576,47:577,50:348,51:349,52:350,53:$VF2,54:351,55:$VG2,72:$Vl1},o($VM3,$Vm1,{67:578,69:579,74:580,46:581,80:582,120:583,81:$VC2,82:$VD2,83:$VE2,121:$VI,126:$VI,128:$VI}),o($VM3,$Vn1),o($VM3,$Vo1,{70:584,66:585,75:586,94:587,96:588,97:592,101:593,98:[1,589],99:[1,590],100:[1,591],103:$VN3,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:595,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VM3,$Vu1),o($VO3,$Vw1,{84:596}),o($VP3,$Vw1,{84:597}),o($VQ3,$Vw1,{84:598}),o($VR3,$VA1,{95:599}),o($VO3,$VB1,{101:335,97:600,103:$VB2,104:$VR,105:$VS,106:$VT}),o($VS3,$VD1,{88:601}),o($VS3,$VD1,{88:602}),o($VS3,$VD1,{88:603}),o($VP3,$VE1,{107:341,109:342,93:604,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),{121:[1,605],124:212,125:213,126:$VF1,128:$VG1},o($VR3,$VH1),o($VR3,$VI1),o($VR3,$VJ1),o($VR3,$VK1),o($VS3,$VL1),o($VM1,$VN1,{162:606}),o($VT3,$VP1),{102:[1,607]},o($VR3,$VQ1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),{102:[1,609],108:608,110:[1,610],111:[1,611],112:612,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,613]},{44:614,47:577,50:348,51:349,52:350,53:$VF2,54:351,55:$VG2,72:$Vl1},o($VM3,$V71),o($VM3,$V81),{20:[1,618],22:[1,622],23:616,38:615,201:617,215:619,216:[1,621],217:[1,620]},{72:$V_1},{52:623,53:$VF2,72:$V$1},o($VU3,$Vi1,{35:624,54:625,55:$VG2}),o($VU3,$V02),o($VM3,$V12),o($VC,$Vh,{34:626,56:627,42:628,45:$VD}),o($VC,$Vh,{56:629,42:630,45:$VD}),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:631,194:[1,632]}),{20:$VZ3,22:$V_3,130:633,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:640,194:[1,641]}),{20:$VZ3,22:$V_3,130:642,165:$V$3,192:634,200:$V04,216:$V14},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:643,194:[1,644]}),{20:$VZ3,22:$V_3,130:645,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,646]},o($VC1,$VQ1),{102:[1,648],108:647,110:[1,649],111:[1,650],112:651,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,652]},{123:[1,653]},{123:[2,143]},{123:$V84},{123:$V94,134:654,135:655,136:$Va4},{123:$Vb4},o($Vc4,$Vd4),o($Vc4,$Ve4),o($Vc4,$Vf4,{140:657,143:658,144:661,141:$Vg4,142:$Vh4}),o($Vi4,$Vj4,{146:662,151:663,152:664,155:665,156:667,71:[1,666],161:$Vk4}),o($Vl4,$Vm4),o($VT2,[2,169]),{20:[1,672],22:[1,676],23:670,150:669,201:671,215:673,216:[1,675],217:[1,674]},{20:[1,680],22:[1,684],23:678,150:677,201:679,215:681,216:[1,683],217:[1,682]},o($VH,[2,144],{192:389,130:685,20:$VY2,22:$VZ2,165:$V_2,200:$V$2,216:$V03}),o($Vn4,[2,145]),o($Vn4,$Vo4),o($Vn4,$Vp4),o($Vn4,$VR1),o($Vn4,$VS1),o($Vn4,$VT1),o($Vn4,$VU1),o($VC1,$Vq4),o($VM1,[2,185]),o($VM1,[2,186]),o($VM1,[2,187]),o($VM1,[2,188]),o($VM1,[2,189]),{168:686,169:687,170:690,171:688,172:691,173:689,174:692,179:[1,693]},o($VM1,[2,204],{175:694,177:695,178:[1,696]}),o($VM1,[2,213],{182:697,184:698,178:[1,699]}),o($VM1,[2,221],{186:700,187:701,178:$Vr4}),{178:$Vr4,187:703},o($Vs4,$Vr),o($Vs4,$Vs),o($Vs4,$Vt4),o($Vs4,$Vu4),o($Vs4,$Vv4),o($Vs4,$Vu),o($Vs4,$Vv),o($Vs4,$Vw4),o($Vs4,$Vx4,{203:704,204:705,113:[1,706]}),o($Vs4,$Vy4),o($Vs4,$Vz4),o($Vs4,$VA4),o($Vs4,$VB4),o($Vs4,$VC4),o($Vs4,$VD4),o($Vs4,$VE4),o($Vs4,$VF4),o($Vs4,$VG4),o($VH4,$Vq3),o($VH4,$Vr3),o($VH4,$Vs3),o($VH4,$Vt3),{20:[1,709],22:[1,711],89:707,165:[1,712],192:708,216:[1,710]},o($Vh1,$Vn2,{54:713,55:[1,714]}),o($Vj1,$Vo2),o($Vj1,$Vm1,{67:715,69:716,74:717,46:718,80:719,120:723,81:[1,720],82:[1,721],83:[1,722],121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{70:724,66:725,75:726,94:727,96:728,97:732,101:733,98:[1,729],99:[1,730],100:[1,731],103:$VI4,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:735,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vv1,$Vw1,{84:736}),o($Vx1,$Vw1,{84:737}),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vz1,$VA1,{95:738}),o($Vv1,$VB1,{101:458,97:739,103:$VA3,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:740}),o($VC1,$VD1,{88:741}),o($VC1,$VD1,{88:742}),o($Vx1,$VE1,{107:464,109:465,93:743,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vy1,$Vw1,{84:744}),o($Vr2,$V71),o($Vr2,$V81),{20:[1,748],22:[1,752],23:746,38:745,201:747,215:749,216:[1,751],217:[1,750]},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:753}),o($VO1,$VP1),{121:[1,754],124:212,125:213,126:$VF1,128:$VG1},{102:[1,755]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,757],108:756,110:[1,758],111:[1,759],112:760,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,761]},o($Vj1,$Vo2),o($Vj1,$Vm1,{67:762,69:763,74:764,46:765,80:766,120:770,81:[1,767],82:[1,768],83:[1,769],121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{70:771,66:772,75:773,94:774,96:775,97:779,101:780,98:[1,776],99:[1,777],100:[1,778],103:$VJ4,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:782,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vv1,$Vw1,{84:783}),o($Vx1,$Vw1,{84:784}),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vz1,$VA1,{95:785}),o($Vv1,$VB1,{101:494,97:786,103:$VC3,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:787}),o($VC1,$VD1,{88:788}),o($VC1,$VD1,{88:789}),o($Vx1,$VE1,{107:500,109:501,93:790,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vy1,$Vw1,{84:791}),o($Vr2,$V71),o($Vr2,$V81),{20:[1,795],22:[1,799],23:793,38:792,201:794,215:796,216:[1,798],217:[1,797]},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:800}),o($VO1,$VP1),{121:[1,801],124:212,125:213,126:$VF1,128:$VG1},{102:[1,802]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,804],108:803,110:[1,805],111:[1,806],112:807,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,808]},o($Va,$Vl2),o($Va,$Vm2,{52:809,53:$Vj2}),o($Vh1,$Vn2,{54:810,55:$Vk2}),o($Vj1,$Vo2),o($Vj1,$Vm1,{69:519,74:520,46:521,80:522,120:523,67:811,81:$Vg2,82:$Vh2,83:$Vi2,121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{66:525,75:526,94:527,96:528,97:532,101:533,70:812,98:$VD3,99:$VE3,100:$VF3,103:$VG3,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:813,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vr2,$V71),o($Vr2,$V81),{20:[1,817],22:[1,821],23:815,38:814,201:816,215:818,216:[1,820],217:[1,819]},o($Va,$Vu2),o($Va,$Vv2),o($Vj1,$Vw2),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:822}),{121:[1,823],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$Vy2),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:824}),o($VA2,$VA1,{95:825}),o($Vx1,$VB1,{101:533,97:826,103:$VG3,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,827]},o($VA2,$VQ1),{72:[1,828]},o($VH2,$VI2,{85:829,86:830,193:831,190:[1,832]}),o($VJ2,$VI2,{85:833,86:834,193:835,190:$VK4}),o($VL2,$VI2,{85:837,86:838,193:839,190:[1,840]}),o($Vv1,$VM2,{101:273,97:841,103:$Vd2,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:842,97:843,93:844,101:845,107:847,109:848,103:$VL4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:842,97:843,93:844,101:845,107:847,109:848,103:$VL4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:842,97:843,93:844,101:845,107:847,109:848,103:$VL4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:849,123:$VV2,149:$VW2,189:$VX2}),{20:$V13,22:$V23,23:402,29:[1,850],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,851]},o($VO1,$Vu3),o($Va,$Vv3),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($Vh1,$Vw3),o($Va,$Vx3,{52:809,53:$Vj2}),o($Vj1,$Vy3),o($Vh1,$Vz3),o($Vj1,$Vk1,{60:852}),o($VH,$VI,{64:853,66:854,68:855,69:856,75:859,77:860,74:861,46:862,94:863,96:864,89:866,90:867,91:868,80:869,97:876,192:877,93:879,120:880,101:881,107:887,109:888,20:[1,883],22:[1,885],28:[1,878],71:[1,857],73:[1,858],81:[1,870],82:[1,871],83:[1,872],87:[1,865],98:[1,873],99:[1,874],100:[1,875],103:$VM4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,886],216:[1,884]}),o($Vj1,$VB3),o($VH,$VI,{64:889,66:890,68:891,69:892,75:895,77:896,74:897,46:898,94:899,96:900,89:902,90:903,91:904,80:905,97:912,192:913,93:915,120:916,101:917,107:923,109:924,20:[1,919],22:[1,921],28:[1,914],71:[1,893],73:[1,894],81:[1,906],82:[1,907],83:[1,908],87:[1,901],98:[1,909],99:[1,910],100:[1,911],103:$VN4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,922],216:[1,920]}),o($Vj1,$VO4),o($Vj1,$V34),{123:[1,925]},o($Vj1,$VW3),o($VA2,$V44),{72:$Vu2},{72:$Vv2},o($VM3,$Vw2),o($VM3,$Vx2),o($VM3,$Vs2),o($VM3,$Vt2),o($VP3,$Vw1,{84:926}),{121:[1,927],124:212,125:213,126:$VF1,128:$VG1},o($VM3,$Vy2),o($VM3,$Vz2),o($VP3,$Vw1,{84:928}),o($VP4,$VA1,{95:929}),o($VP3,$VB1,{101:593,97:930,103:$VN3,104:$VR,105:$VS,106:$VT}),o($VP4,$VH1),o($VP4,$VI1),o($VP4,$VJ1),o($VP4,$VK1),{102:[1,931]},o($VP4,$VQ1),{72:[1,932]},o($VQ4,$VI2,{85:933,86:934,193:935,190:[1,936]}),o($VR4,$VI2,{85:937,86:938,193:939,190:$VS4}),o($VT4,$VI2,{85:941,86:942,193:943,190:[1,944]}),o($VO3,$VM2,{101:335,97:945,103:$VB2,104:$VR,105:$VS,106:$VT}),o($VR3,$VN2),o($VP3,$VO2,{92:946,97:947,93:948,101:949,107:951,109:952,103:$VU4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VQ2,{92:946,97:947,93:948,101:949,107:951,109:952,103:$VU4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VR2,{92:946,97:947,93:948,101:949,107:951,109:952,103:$VU4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VT3,$VS2),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:953,123:$VV2,149:$VW2,189:$VX2}),{20:$V13,22:$V23,23:402,29:[1,954],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VR3,$Vl3),o($VT3,$Vm3),o($VT3,$Vn3),o($VT3,$Vo3),o($VT3,$Vp3),{113:[1,955]},o($VT3,$Vu3),{72:$Vv3},o($VM3,$V22),o($VM3,$Vm),o($VM3,$Vn),o($VM3,$Vr),o($VM3,$Vs),o($VM3,$Vt),o($VM3,$Vu),o($VM3,$Vv),o($VU3,$Vw3),{52:956,53:$VF2,72:$Vx3},o($VM3,$Vy3),o($VU3,$Vz3),o($VM3,$Vk1,{60:957}),o($VH,$VI,{64:958,66:959,68:960,69:961,75:964,77:965,74:966,46:967,94:968,96:969,89:971,90:972,91:973,80:974,97:981,192:982,93:984,120:985,101:986,107:992,109:993,20:[1,988],22:[1,990],28:[1,983],71:[1,962],73:[1,963],81:[1,975],82:[1,976],83:[1,977],87:[1,970],98:[1,978],99:[1,979],100:[1,980],103:$VV4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,991],216:[1,989]}),o($VM3,$VB3),o($VH,$VI,{64:994,66:995,68:996,69:997,75:1000,77:1001,74:1002,46:1003,94:1004,96:1005,89:1007,90:1008,91:1009,80:1010,97:1017,192:1018,93:1020,120:1021,101:1022,107:1028,109:1029,20:[1,1024],22:[1,1026],28:[1,1019],71:[1,998],73:[1,999],81:[1,1011],82:[1,1012],83:[1,1013],87:[1,1006],98:[1,1014],99:[1,1015],100:[1,1016],103:$VW4,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,1027],216:[1,1025]}),o($VH2,$VX4),{20:$Vo,22:$Vp,23:1030,215:57,216:$Vq},{20:$VY4,22:$VZ4,102:[1,1043],110:[1,1044],111:[1,1045],112:1042,165:$V_4,181:1033,191:1031,192:1032,197:1038,198:1039,199:1040,202:1041,205:[1,1046],206:[1,1047],207:[1,1052],208:[1,1053],209:[1,1054],210:[1,1055],211:[1,1048],212:[1,1049],213:[1,1050],214:[1,1051],216:$V$4},o($V05,$Vo4),o($V05,$Vp4),o($V05,$VR1),o($V05,$VS1),o($V05,$VT1),o($V05,$VU1),o($VJ2,$VX4),{20:$Vo,22:$Vp,23:1056,215:57,216:$Vq},{20:$V15,22:$V25,102:[1,1069],110:[1,1070],111:[1,1071],112:1068,165:$V35,181:1059,191:1057,192:1058,197:1064,198:1065,199:1066,202:1067,205:[1,1072],206:[1,1073],207:[1,1078],208:[1,1079],209:[1,1080],210:[1,1081],211:[1,1074],212:[1,1075],213:[1,1076],214:[1,1077],216:$V45},o($VL2,$VX4),{20:$Vo,22:$Vp,23:1082,215:57,216:$Vq},{20:$V55,22:$V65,102:[1,1095],110:[1,1096],111:[1,1097],112:1094,165:$V75,181:1085,191:1083,192:1084,197:1090,198:1091,199:1092,202:1093,205:[1,1098],206:[1,1099],207:[1,1104],208:[1,1105],209:[1,1106],210:[1,1107],211:[1,1100],212:[1,1101],213:[1,1102],214:[1,1103],216:$V85},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,1108]},o($VC1,$Vu3),o($Vy1,$V95),{123:$Va5,135:1109,136:$Va4},o($Vc4,$Vb5),o($VT2,$VU2,{137:379,138:380,139:381,145:382,147:383,148:384,132:1110,149:$VW2,189:$VX2}),o($Vc4,$Vc5),o($Vc4,$Vf4,{140:1111,144:1112,141:$Vg4,142:$Vh4}),o($VT2,$VU2,{145:382,147:383,148:384,139:1113,123:$Vd5,136:$Vd5,149:$VW2,189:$VX2}),o($VT2,$VU2,{145:382,147:383,148:384,139:1114,123:$Ve5,136:$Ve5,149:$VW2,189:$VX2}),o($Vl4,$Vf5),o($Vl4,$Vg5),o($Vl4,$Vh5),o($Vl4,$Vi5),{20:$Vj5,22:$Vk5,130:1115,165:$Vl5,192:1116,200:$Vm5,216:$Vn5},o($VT2,$VU2,{148:384,127:1122,131:1123,132:1124,133:1125,137:1126,138:1127,139:1128,145:1129,147:1130,149:$VW2,189:$Vo5}),o($Vi4,[2,177]),o($Vi4,[2,182]),o($Vl4,$Vp5),o($Vl4,$Vq5),o($Vl4,$Vr5),o($Vl4,$Vr),o($Vl4,$Vs),o($Vl4,$Vt),o($Vl4,$Vu),o($Vl4,$Vv),o($VT2,[2,167]),o($VT2,$Vq5),o($VT2,$Vr5),o($VT2,$Vr),o($VT2,$Vs),o($VT2,$Vt),o($VT2,$Vu),o($VT2,$Vv),o($Vn4,[2,146]),o($VM1,[2,190]),o($VM1,[2,197],{170:1132,179:$Vs5}),o($VM1,[2,198],{172:1134,179:$Vt5}),o($VM1,[2,199],{174:1136,179:$Vu5}),o($Vv5,[2,191]),o($Vv5,[2,193]),o($Vv5,[2,195]),{20:$Vw5,22:$Vx5,23:1138,102:$Vy5,110:$Vz5,111:$VA5,112:1149,181:1139,185:$VB5,197:1143,198:1144,199:1145,202:1148,205:$VC5,206:$VD5,207:$VE5,208:$VF5,209:$VG5,210:$VH5,211:$VI5,212:$VJ5,213:$VK5,214:$VL5,215:1142,216:$VM5},o($VM1,[2,200]),o($VM1,[2,205]),o($Vv5,[2,201],{176:1163}),o($VM1,[2,209]),o($VM1,[2,214]),o($Vv5,[2,210],{183:1164}),o($VM1,[2,216]),o($VM1,[2,222]),o($Vv5,[2,218],{188:1165}),o($VM1,[2,217]),o($Vs4,$VN5),o($Vs4,$VO5),{20:[1,1168],22:[1,1170],89:1166,165:[1,1171],192:1167,216:[1,1169]},o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($Vj1,$VI3),o($VC,$Vh,{56:1172,42:1173,45:$VD}),o($Vj1,$VJ3),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:1174}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,1178],22:[1,1182],23:1176,38:1175,201:1177,215:1179,216:[1,1181],217:[1,1180]},{121:[1,1183],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$VK3),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:1184}),o($VA2,$VA1,{95:1185}),o($Vx1,$VB1,{101:733,97:1186,103:$VI4,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,1187]},o($VA2,$VQ1),{72:[1,1188]},o($VH2,$VI2,{85:1189,86:1190,193:1191,190:[1,1192]}),o($VJ2,$VI2,{85:1193,86:1194,193:1195,190:$VQ5}),o($Vv1,$VM2,{101:458,97:1197,103:$VA3,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:1198,97:1199,93:1200,101:1201,107:1203,109:1204,103:$VR5,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:1198,97:1199,93:1200,101:1201,107:1203,109:1204,103:$VR5,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:1198,97:1199,93:1200,101:1201,107:1203,109:1204,103:$VR5,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VL2,$VI2,{85:1205,86:1206,193:1207,190:[1,1208]}),o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),{20:$V13,22:$V23,23:402,29:[1,1209],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1210,123:$VV2,149:$VW2,189:$VX2}),o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,1211]},o($VO1,$Vu3),o($Vj1,$VJ3),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:1212}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,1216],22:[1,1220],23:1214,38:1213,201:1215,215:1217,216:[1,1219],217:[1,1218]},{121:[1,1221],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$VK3),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:1222}),o($VA2,$VA1,{95:1223}),o($Vx1,$VB1,{101:780,97:1224,103:$VJ4,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,1225]},o($VA2,$VQ1),{72:[1,1226]},o($VH2,$VI2,{85:1227,86:1228,193:1229,190:[1,1230]}),o($VJ2,$VI2,{85:1231,86:1232,193:1233,190:$VS5}),o($Vv1,$VM2,{101:494,97:1235,103:$VC3,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:1236,97:1237,93:1238,101:1239,107:1241,109:1242,103:$VT5,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:1236,97:1237,93:1238,101:1239,107:1241,109:1242,103:$VT5,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:1236,97:1237,93:1238,101:1239,107:1241,109:1242,103:$VT5,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VL2,$VI2,{85:1243,86:1244,193:1245,190:[1,1246]}),o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),{20:$V13,22:$V23,23:402,29:[1,1247],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1248,123:$VV2,149:$VW2,189:$VX2}),o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,1249]},o($VO1,$Vu3),o($Vh1,$VH3),o($Vj1,$VI3),o($Vj1,$VJ3),o($Vj1,$VK3),{72:[1,1250]},o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),o($VJ2,$VI2,{86:834,193:835,85:1251,190:$VK4}),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1252,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:834,193:835,85:1253,190:$VK4}),o($Vx1,$VM2,{101:533,97:1254,103:$VG3,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VL3),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:1255,194:[1,1256]}),{20:$VZ3,22:$V_3,130:1257,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:1258,194:[1,1259]}),{20:$VZ3,22:$V_3,130:1260,165:$V$3,192:634,200:$V04,216:$V14},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:1261,194:[1,1262]}),{20:$VZ3,22:$V_3,130:1263,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,1264]},o($VC1,$VQ1),{102:[1,1266],108:1265,110:[1,1267],111:[1,1268],112:1269,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1270]},{123:[1,1271]},o($VC1,$Vq4),{20:[1,1274],22:[1,1276],89:1272,165:[1,1277],192:1273,216:[1,1275]},o($Vh1,$Vn2,{54:1278,55:[1,1279]}),o($Vj1,$Vo2),o($Vj1,$Vm1,{67:1280,69:1281,74:1282,46:1283,80:1284,120:1288,81:[1,1285],82:[1,1286],83:[1,1287],121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{70:1289,66:1290,75:1291,94:1292,96:1293,97:1297,101:1298,98:[1,1294],99:[1,1295],100:[1,1296],103:$VU5,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:1300,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vv1,$Vw1,{84:1301}),o($Vx1,$Vw1,{84:1302}),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vz1,$VA1,{95:1303}),o($Vv1,$VB1,{101:881,97:1304,103:$VM4,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:1305}),o($VC1,$VD1,{88:1306}),o($VC1,$VD1,{88:1307}),o($Vx1,$VE1,{107:887,109:888,93:1308,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vy1,$Vw1,{84:1309}),o($Vr2,$V71),o($Vr2,$V81),{20:[1,1313],22:[1,1317],23:1311,38:1310,201:1312,215:1314,216:[1,1316],217:[1,1315]},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:1318}),o($VO1,$VP1),{121:[1,1319],124:212,125:213,126:$VF1,128:$VG1},{102:[1,1320]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,1322],108:1321,110:[1,1323],111:[1,1324],112:1325,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1326]},o($Vj1,$Vo2),o($Vj1,$Vm1,{67:1327,69:1328,74:1329,46:1330,80:1331,120:1335,81:[1,1332],82:[1,1333],83:[1,1334],121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{70:1336,66:1337,75:1338,94:1339,96:1340,97:1344,101:1345,98:[1,1341],99:[1,1342],100:[1,1343],103:$VV5,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:1347,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vv1,$Vw1,{84:1348}),o($Vx1,$Vw1,{84:1349}),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vz1,$VA1,{95:1350}),o($Vv1,$VB1,{101:917,97:1351,103:$VN4,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:1352}),o($VC1,$VD1,{88:1353}),o($VC1,$VD1,{88:1354}),o($Vx1,$VE1,{107:923,109:924,93:1355,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vy1,$Vw1,{84:1356}),o($Vr2,$V71),o($Vr2,$V81),{20:[1,1360],22:[1,1364],23:1358,38:1357,201:1359,215:1361,216:[1,1363],217:[1,1362]},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:1365}),o($VO1,$VP1),{121:[1,1366],124:212,125:213,126:$VF1,128:$VG1},{102:[1,1367]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,1369],108:1368,110:[1,1370],111:[1,1371],112:1372,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1373]},o($Vx1,$V95),o($VR4,$VI2,{86:938,193:939,85:1374,190:$VS4}),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1375,123:$VV2,149:$VW2,189:$VX2}),o($VR4,$VI2,{86:938,193:939,85:1376,190:$VS4}),o($VP3,$VM2,{101:593,97:1377,103:$VN3,104:$VR,105:$VS,106:$VT}),o($VP4,$VN2),o($VP4,$Vl3),o($VM3,$VL3),o($VW5,$VW3),o($VO3,$VX3),o($VW5,$VY3,{37:1378,194:[1,1379]}),{20:$VZ3,22:$V_3,130:1380,165:$V$3,192:634,200:$V04,216:$V14},o($VM3,$V24),o($VP3,$VX3),o($VM3,$VY3,{37:1381,194:[1,1382]}),{20:$VZ3,22:$V_3,130:1383,165:$V$3,192:634,200:$V04,216:$V14},o($VX5,$V34),o($VQ3,$VX3),o($VX5,$VY3,{37:1384,194:[1,1385]}),{20:$VZ3,22:$V_3,130:1386,165:$V$3,192:634,200:$V04,216:$V14},o($VR3,$V44),o($VS3,$V54),o($VS3,$V64),o($VS3,$V74),{102:[1,1387]},o($VS3,$VQ1),{102:[1,1389],108:1388,110:[1,1390],111:[1,1391],112:1392,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1393]},{123:[1,1394]},o($VS3,$Vq4),{20:[1,1397],22:[1,1399],89:1395,165:[1,1400],192:1396,216:[1,1398]},o($VU3,$VH3),o($VU3,$Vn2,{54:1401,55:[1,1402]}),o($VM3,$Vo2),o($VM3,$Vm1,{67:1403,69:1404,74:1405,46:1406,80:1407,120:1411,81:[1,1408],82:[1,1409],83:[1,1410],121:$VI,126:$VI,128:$VI}),o($VM3,$Vp2),o($VM3,$Vo1,{70:1412,66:1413,75:1414,94:1415,96:1416,97:1420,101:1421,98:[1,1417],99:[1,1418],100:[1,1419],103:$VY5,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:1423,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VM3,$Vq2),o($VO3,$Vw1,{84:1424}),o($VP3,$Vw1,{84:1425}),o($VX5,$Vs2),o($VX5,$Vt2),o($VR3,$VA1,{95:1426}),o($VO3,$VB1,{101:986,97:1427,103:$VV4,104:$VR,105:$VS,106:$VT}),o($VS3,$VD1,{88:1428}),o($VS3,$VD1,{88:1429}),o($VS3,$VD1,{88:1430}),o($VP3,$VE1,{107:992,109:993,93:1431,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VQ3,$Vw1,{84:1432}),o($VX5,$V71),o($VX5,$V81),{20:[1,1436],22:[1,1440],23:1434,38:1433,201:1435,215:1437,216:[1,1439],217:[1,1438]},o($VR3,$VH1),o($VR3,$VI1),o($VR3,$VJ1),o($VR3,$VK1),o($VS3,$VL1),o($VM1,$VN1,{162:1441}),o($VT3,$VP1),{121:[1,1442],124:212,125:213,126:$VF1,128:$VG1},{102:[1,1443]},o($VR3,$VQ1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),{102:[1,1445],108:1444,110:[1,1446],111:[1,1447],112:1448,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1449]},o($VM3,$Vo2),o($VM3,$Vm1,{67:1450,69:1451,74:1452,46:1453,80:1454,120:1458,81:[1,1455],82:[1,1456],83:[1,1457],121:$VI,126:$VI,128:$VI}),o($VM3,$Vp2),o($VM3,$Vo1,{70:1459,66:1460,75:1461,94:1462,96:1463,97:1467,101:1468,98:[1,1464],99:[1,1465],100:[1,1466],103:$VZ5,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:1470,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VM3,$Vq2),o($VO3,$Vw1,{84:1471}),o($VP3,$Vw1,{84:1472}),o($VX5,$Vs2),o($VX5,$Vt2),o($VR3,$VA1,{95:1473}),o($VO3,$VB1,{101:1022,97:1474,103:$VW4,104:$VR,105:$VS,106:$VT}),o($VS3,$VD1,{88:1475}),o($VS3,$VD1,{88:1476}),o($VS3,$VD1,{88:1477}),o($VP3,$VE1,{107:1028,109:1029,93:1478,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VQ3,$Vw1,{84:1479}),o($VX5,$V71),o($VX5,$V81),{20:[1,1483],22:[1,1487],23:1481,38:1480,201:1482,215:1484,216:[1,1486],217:[1,1485]},o($VR3,$VH1),o($VR3,$VI1),o($VR3,$VJ1),o($VR3,$VK1),o($VS3,$VL1),o($VM1,$VN1,{162:1488}),o($VT3,$VP1),{121:[1,1489],124:212,125:213,126:$VF1,128:$VG1},{102:[1,1490]},o($VR3,$VQ1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),{102:[1,1492],108:1491,110:[1,1493],111:[1,1494],112:1495,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1496]},{194:[1,1499],195:1497,196:[1,1498]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:1500,204:1501,113:[1,1502]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,1505],195:1503,196:[1,1504]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:1506,204:1507,113:[1,1508]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{194:[1,1511],195:1509,196:[1,1510]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:1512,204:1513,113:[1,1514]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),{20:[1,1517],22:[1,1519],89:1515,165:[1,1520],192:1516,216:[1,1518]},o($Vc4,$V46),o($Vc4,$V56),o($Vc4,$V66),o($Vl4,$V76),o($Vl4,$V86),o($Vl4,$V96),o($VC,$Vh,{48:1521,49:1522,57:1523,61:1524,42:1525,45:$VD}),o($Va6,$Vo4),o($Va6,$Vp4),o($Va6,$VR1),o($Va6,$VS1),o($Va6,$VT1),o($Va6,$VU1),{72:[1,1526]},{72:$V84},{72:$V94,134:1527,135:1528,136:$Vb6},{72:$Vb4},o($Vc6,$Vd4),o($Vc6,$Ve4),o($Vc6,$Vf4,{140:1530,143:1531,144:1534,141:$Vd6,142:$Ve6}),o($Vi4,$Vj4,{156:667,146:1535,151:1536,152:1537,155:1538,71:[1,1539],161:$Vk4}),o($Vf6,$Vm4),{20:[1,1543],22:[1,1547],23:1541,150:1540,201:1542,215:1544,216:[1,1546],217:[1,1545]},o($Vv5,[2,192]),{20:$Vw5,22:$Vx5,23:1138,215:1142,216:$VM5},o($Vv5,[2,194]),{102:$Vy5,110:$Vz5,111:$VA5,112:1149,181:1139,197:1143,198:1144,199:1145,202:1148,205:$VC5,206:$VD5,207:$VE5,208:$VF5,209:$VG5,210:$VH5,211:$VI5,212:$VJ5,213:$VK5,214:$VL5},o($Vv5,[2,196]),{185:$VB5},o($Vv5,$Vg6,{180:1548,178:$Vh6}),o($Vv5,$Vg6,{180:1550,178:$Vh6}),o($Vv5,$Vg6,{180:1551,178:$Vh6}),o($Vi6,$Vr),o($Vi6,$Vs),o($Vi6,$Vt4),o($Vi6,$Vu4),o($Vi6,$Vv4),o($Vi6,$Vu),o($Vi6,$Vv),o($Vi6,$Vw4),o($Vi6,$Vx4,{203:1552,204:1553,113:[1,1554]}),o($Vi6,$Vy4),o($Vi6,$Vz4),o($Vi6,$VA4),o($Vi6,$VB4),o($Vi6,$VC4),o($Vi6,$VD4),o($Vi6,$VE4),o($Vi6,$VF4),o($Vi6,$VG4),o($Vj6,$Vq3),o($Vj6,$Vr3),o($Vj6,$Vs3),o($Vj6,$Vt3),o($VM1,[2,203],{170:1555,179:$Vs5}),o($VM1,[2,212],{172:1556,179:$Vt5}),o($VM1,[2,220],{174:1557,179:$Vu5}),o($Vs4,$Vk6),o($Vs4,$VL1),o($Vs4,$VR1),o($Vs4,$VS1),o($Vs4,$VT1),o($Vs4,$VU1),o($Vj1,$VB3),o($VH,$VI,{64:1558,66:1559,68:1560,69:1561,75:1564,77:1565,74:1566,46:1567,94:1568,96:1569,89:1571,90:1572,91:1573,80:1574,97:1581,192:1582,93:1584,120:1585,101:1586,107:1592,109:1593,20:[1,1588],22:[1,1590],28:[1,1583],71:[1,1562],73:[1,1563],81:[1,1575],82:[1,1576],83:[1,1577],87:[1,1570],98:[1,1578],99:[1,1579],100:[1,1580],103:$Vl6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,1591],216:[1,1589]}),o($VJ2,$VI2,{86:1194,193:1195,85:1594,190:$VQ5}),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1595,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:1194,193:1195,85:1596,190:$VQ5}),o($Vx1,$VM2,{101:733,97:1597,103:$VI4,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VO4),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:1598,194:[1,1599]}),{20:$VZ3,22:$V_3,130:1600,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:1601,194:[1,1602]}),{20:$VZ3,22:$V_3,130:1603,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,1604]},o($VC1,$VQ1),{102:[1,1606],108:1605,110:[1,1607],111:[1,1608],112:1609,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1610]},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:1611,194:[1,1612]}),{20:$VZ3,22:$V_3,130:1613,165:$V$3,192:634,200:$V04,216:$V14},o($VC1,$Vq4),{123:[1,1614]},{20:[1,1617],22:[1,1619],89:1615,165:[1,1620],192:1616,216:[1,1618]},o($VJ2,$VI2,{86:1232,193:1233,85:1621,190:$VS5}),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1622,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:1232,193:1233,85:1623,190:$VS5}),o($Vx1,$VM2,{101:780,97:1624,103:$VJ4,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VO4),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:1625,194:[1,1626]}),{20:$VZ3,22:$V_3,130:1627,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:1628,194:[1,1629]}),{20:$VZ3,22:$V_3,130:1630,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,1631]},o($VC1,$VQ1),{102:[1,1633],108:1632,110:[1,1634],111:[1,1635],112:1636,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,1637]},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:1638,194:[1,1639]}),{20:$VZ3,22:$V_3,130:1640,165:$V$3,192:634,200:$V04,216:$V14},o($VC1,$Vq4),{123:[1,1641]},{20:[1,1644],22:[1,1646],89:1642,165:[1,1647],192:1643,216:[1,1645]},o($Vj1,$VO4),o($Vj1,$V34),{123:[1,1648]},o($Vj1,$VW3),o($VA2,$V44),o($VH2,$VX4),{20:$Vo,22:$Vp,23:1649,215:57,216:$Vq},{20:$Vm6,22:$Vn6,102:[1,1662],110:[1,1663],111:[1,1664],112:1661,165:$Vo6,181:1652,191:1650,192:1651,197:1657,198:1658,199:1659,202:1660,205:[1,1665],206:[1,1666],207:[1,1671],208:[1,1672],209:[1,1673],210:[1,1674],211:[1,1667],212:[1,1668],213:[1,1669],214:[1,1670],216:$Vp6},o($VJ2,$VX4),{20:$Vo,22:$Vp,23:1675,215:57,216:$Vq},{20:$Vq6,22:$Vr6,102:[1,1688],110:[1,1689],111:[1,1690],112:1687,165:$Vs6,181:1678,191:1676,192:1677,197:1683,198:1684,199:1685,202:1686,205:[1,1691],206:[1,1692],207:[1,1697],208:[1,1698],209:[1,1699],210:[1,1700],211:[1,1693],212:[1,1694],213:[1,1695],214:[1,1696],216:$Vt6},o($VL2,$VX4),{20:$Vo,22:$Vp,23:1701,215:57,216:$Vq},{20:$Vu6,22:$Vv6,102:[1,1714],110:[1,1715],111:[1,1716],112:1713,165:$Vw6,181:1704,191:1702,192:1703,197:1709,198:1710,199:1711,202:1712,205:[1,1717],206:[1,1718],207:[1,1723],208:[1,1724],209:[1,1725],210:[1,1726],211:[1,1719],212:[1,1720],213:[1,1721],214:[1,1722],216:$Vx6},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,1727]},o($VC1,$Vu3),o($Vy1,$V95),o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($Vj1,$VI3),o($VC,$Vh,{56:1728,42:1729,45:$VD}),o($Vj1,$VJ3),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:1730}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,1734],22:[1,1738],23:1732,38:1731,201:1733,215:1735,216:[1,1737],217:[1,1736]},{121:[1,1739],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$VK3),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:1740}),o($VA2,$VA1,{95:1741}),o($Vx1,$VB1,{101:1298,97:1742,103:$VU5,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,1743]},o($VA2,$VQ1),{72:[1,1744]},o($VH2,$VI2,{85:1745,86:1746,193:1747,190:[1,1748]}),o($VJ2,$VI2,{85:1749,86:1750,193:1751,190:$Vy6}),o($Vv1,$VM2,{101:881,97:1753,103:$VM4,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:1754,97:1755,93:1756,101:1757,107:1759,109:1760,103:$Vz6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:1754,97:1755,93:1756,101:1757,107:1759,109:1760,103:$Vz6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:1754,97:1755,93:1756,101:1757,107:1759,109:1760,103:$Vz6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VL2,$VI2,{85:1761,86:1762,193:1763,190:[1,1764]}),o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),{20:$V13,22:$V23,23:402,29:[1,1765],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1766,123:$VV2,149:$VW2,189:$VX2}),o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,1767]},o($VO1,$Vu3),o($Vj1,$VJ3),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:1768}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,1772],22:[1,1776],23:1770,38:1769,201:1771,215:1773,216:[1,1775],217:[1,1774]},{121:[1,1777],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$VK3),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:1778}),o($VA2,$VA1,{95:1779}),o($Vx1,$VB1,{101:1345,97:1780,103:$VV5,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,1781]},o($VA2,$VQ1),{72:[1,1782]},o($VH2,$VI2,{85:1783,86:1784,193:1785,190:[1,1786]}),o($VJ2,$VI2,{85:1787,86:1788,193:1789,190:$VA6}),o($Vv1,$VM2,{101:917,97:1791,103:$VN4,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:1792,97:1793,93:1794,101:1795,107:1797,109:1798,103:$VB6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:1792,97:1793,93:1794,101:1795,107:1797,109:1798,103:$VB6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:1792,97:1793,93:1794,101:1795,107:1797,109:1798,103:$VB6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VL2,$VI2,{85:1799,86:1800,193:1801,190:[1,1802]}),o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),{20:$V13,22:$V23,23:402,29:[1,1803],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1804,123:$VV2,149:$VW2,189:$VX2}),o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,1805]},o($VO1,$Vu3),o($VM3,$V34),{123:[1,1806]},o($VM3,$VW3),o($VP4,$V44),o($VQ4,$VX4),{20:$Vo,22:$Vp,23:1807,215:57,216:$Vq},{20:$VC6,22:$VD6,102:[1,1820],110:[1,1821],111:[1,1822],112:1819,165:$VE6,181:1810,191:1808,192:1809,197:1815,198:1816,199:1817,202:1818,205:[1,1823],206:[1,1824],207:[1,1829],208:[1,1830],209:[1,1831],210:[1,1832],211:[1,1825],212:[1,1826],213:[1,1827],214:[1,1828],216:$VF6},o($VR4,$VX4),{20:$Vo,22:$Vp,23:1833,215:57,216:$Vq},{20:$VG6,22:$VH6,102:[1,1846],110:[1,1847],111:[1,1848],112:1845,165:$VI6,181:1836,191:1834,192:1835,197:1841,198:1842,199:1843,202:1844,205:[1,1849],206:[1,1850],207:[1,1855],208:[1,1856],209:[1,1857],210:[1,1858],211:[1,1851],212:[1,1852],213:[1,1853],214:[1,1854],216:$VJ6},o($VT4,$VX4),{20:$Vo,22:$Vp,23:1859,215:57,216:$Vq},{20:$VK6,22:$VL6,102:[1,1872],110:[1,1873],111:[1,1874],112:1871,165:$VM6,181:1862,191:1860,192:1861,197:1867,198:1868,199:1869,202:1870,205:[1,1875],206:[1,1876],207:[1,1881],208:[1,1882],209:[1,1883],210:[1,1884],211:[1,1877],212:[1,1878],213:[1,1879],214:[1,1880],216:$VN6},o($VS3,$Vl3),o($VS3,$Vm3),o($VS3,$Vn3),o($VS3,$Vo3),o($VS3,$Vp3),{113:[1,1885]},o($VS3,$Vu3),o($VQ3,$V95),o($VT3,$VP5),o($VT3,$VL1),o($VT3,$VR1),o($VT3,$VS1),o($VT3,$VT1),o($VT3,$VU1),o($VM3,$VI3),o($VC,$Vh,{56:1886,42:1887,45:$VD}),o($VM3,$VJ3),o($VM3,$Vx2),o($VM3,$Vs2),o($VM3,$Vt2),o($VP3,$Vw1,{84:1888}),o($VM3,$V71),o($VM3,$V81),{20:[1,1892],22:[1,1896],23:1890,38:1889,201:1891,215:1893,216:[1,1895],217:[1,1894]},{121:[1,1897],124:212,125:213,126:$VF1,128:$VG1},o($VM3,$VK3),o($VM3,$Vz2),o($VP3,$Vw1,{84:1898}),o($VP4,$VA1,{95:1899}),o($VP3,$VB1,{101:1421,97:1900,103:$VY5,104:$VR,105:$VS,106:$VT}),o($VP4,$VH1),o($VP4,$VI1),o($VP4,$VJ1),o($VP4,$VK1),{102:[1,1901]},o($VP4,$VQ1),{72:[1,1902]},o($VQ4,$VI2,{85:1903,86:1904,193:1905,190:[1,1906]}),o($VR4,$VI2,{85:1907,86:1908,193:1909,190:$VO6}),o($VO3,$VM2,{101:986,97:1911,103:$VV4,104:$VR,105:$VS,106:$VT}),o($VR3,$VN2),o($VP3,$VO2,{92:1912,97:1913,93:1914,101:1915,107:1917,109:1918,103:$VP6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VQ2,{92:1912,97:1913,93:1914,101:1915,107:1917,109:1918,103:$VP6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VR2,{92:1912,97:1913,93:1914,101:1915,107:1917,109:1918,103:$VP6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VT3,$VS2),o($VT4,$VI2,{85:1919,86:1920,193:1921,190:[1,1922]}),o($VX5,$V22),o($VX5,$Vm),o($VX5,$Vn),o($VX5,$Vr),o($VX5,$Vs),o($VX5,$Vt),o($VX5,$Vu),o($VX5,$Vv),{20:$V13,22:$V23,23:402,29:[1,1923],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1924,123:$VV2,149:$VW2,189:$VX2}),o($VR3,$Vl3),o($VT3,$Vm3),o($VT3,$Vn3),o($VT3,$Vo3),o($VT3,$Vp3),{113:[1,1925]},o($VT3,$Vu3),o($VM3,$VJ3),o($VM3,$Vx2),o($VM3,$Vs2),o($VM3,$Vt2),o($VP3,$Vw1,{84:1926}),o($VM3,$V71),o($VM3,$V81),{20:[1,1930],22:[1,1934],23:1928,38:1927,201:1929,215:1931,216:[1,1933],217:[1,1932]},{121:[1,1935],124:212,125:213,126:$VF1,128:$VG1},o($VM3,$VK3),o($VM3,$Vz2),o($VP3,$Vw1,{84:1936}),o($VP4,$VA1,{95:1937}),o($VP3,$VB1,{101:1468,97:1938,103:$VZ5,104:$VR,105:$VS,106:$VT}),o($VP4,$VH1),o($VP4,$VI1),o($VP4,$VJ1),o($VP4,$VK1),{102:[1,1939]},o($VP4,$VQ1),{72:[1,1940]},o($VQ4,$VI2,{85:1941,86:1942,193:1943,190:[1,1944]}),o($VR4,$VI2,{85:1945,86:1946,193:1947,190:$VQ6}),o($VO3,$VM2,{101:1022,97:1949,103:$VW4,104:$VR,105:$VS,106:$VT}),o($VR3,$VN2),o($VP3,$VO2,{92:1950,97:1951,93:1952,101:1953,107:1955,109:1956,103:$VR6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VQ2,{92:1950,97:1951,93:1952,101:1953,107:1955,109:1956,103:$VR6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VR2,{92:1950,97:1951,93:1952,101:1953,107:1955,109:1956,103:$VR6,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VT3,$VS2),o($VT4,$VI2,{85:1957,86:1958,193:1959,190:[1,1960]}),o($VX5,$V22),o($VX5,$Vm),o($VX5,$Vn),o($VX5,$Vr),o($VX5,$Vs),o($VX5,$Vt),o($VX5,$Vu),o($VX5,$Vv),{20:$V13,22:$V23,23:402,29:[1,1961],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:1962,123:$VV2,149:$VW2,189:$VX2}),o($VR3,$Vl3),o($VT3,$Vm3),o($VT3,$Vn3),o($VT3,$Vo3),o($VT3,$Vp3),{113:[1,1963]},o($VT3,$Vu3),o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$VY4,22:$VZ4,89:1964,165:$V_4,192:1965,216:$V$4},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$V15,22:$V25,89:1966,165:$V35,192:1967,216:$V45},o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$V55,22:$V65,89:1968,165:$V75,192:1969,216:$V85},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($VS6,$VT6,{153:1970,154:1971,157:$VU6,158:$VV6,159:$VW6,160:$VX6}),o($VY6,$VZ6),o($V_6,$V$6,{58:1976}),o($V07,$V17,{62:1977}),o($VH,$VI,{65:1978,75:1979,77:1980,78:1981,94:1984,96:1985,89:1987,90:1988,91:1989,80:1990,46:1991,97:1995,192:1996,93:1998,120:1999,101:2003,107:2009,109:2010,20:[1,2005],22:[1,2007],28:[1,1997],71:[1,1982],73:[1,1983],81:[1,2000],82:[1,2001],83:[1,2002],87:[1,1986],98:[1,1992],99:[1,1993],100:[1,1994],103:$V27,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,2008],216:[1,2006]}),o($VS6,$VT6,{154:1971,153:2011,157:$VU6,158:$VV6,159:$VW6,160:$VX6}),{72:$Va5,135:2012,136:$Vb6},o($Vc6,$Vb5),o($VT2,$VU2,{148:384,137:1126,138:1127,139:1128,145:1129,147:1130,132:2013,149:$VW2,189:$Vo5}),o($Vc6,$Vc5),o($Vc6,$Vf4,{140:2014,144:2015,141:$Vd6,142:$Ve6}),o($VT2,$VU2,{148:384,145:1129,147:1130,139:2016,72:$Vd5,136:$Vd5,149:$VW2,189:$Vo5}),o($VT2,$VU2,{148:384,145:1129,147:1130,139:2017,72:$Ve5,136:$Ve5,149:$VW2,189:$Vo5}),o($Vf6,$Vf5),o($Vf6,$Vg5),o($Vf6,$Vh5),o($Vf6,$Vi5),{20:$Vj5,22:$Vk5,130:2018,165:$Vl5,192:1116,200:$Vm5,216:$Vn5},o($VT2,$VU2,{148:384,131:1123,132:1124,133:1125,137:1126,138:1127,139:1128,145:1129,147:1130,127:2019,149:$VW2,189:$Vo5}),o($Vf6,$Vp5),o($Vf6,$Vq5),o($Vf6,$Vr5),o($Vf6,$Vr),o($Vf6,$Vs),o($Vf6,$Vt),o($Vf6,$Vu),o($Vf6,$Vv),o($Vv5,[2,206]),o($Vv5,[2,208]),o($Vv5,[2,215]),o($Vv5,[2,223]),o($Vi6,$VN5),o($Vi6,$VO5),{20:[1,2022],22:[1,2024],89:2020,165:[1,2025],192:2021,216:[1,2023]},o($Vv5,[2,202]),o($Vv5,[2,211]),o($Vv5,[2,219]),o($Vj1,$Vo2),o($Vj1,$Vm1,{67:2026,69:2027,74:2028,46:2029,80:2030,120:2034,81:[1,2031],82:[1,2032],83:[1,2033],121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{70:2035,66:2036,75:2037,94:2038,96:2039,97:2043,101:2044,98:[1,2040],99:[1,2041],100:[1,2042],103:$V37,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:2046,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vv1,$Vw1,{84:2047}),o($Vx1,$Vw1,{84:2048}),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vz1,$VA1,{95:2049}),o($Vv1,$VB1,{101:1586,97:2050,103:$Vl6,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:2051}),o($VC1,$VD1,{88:2052}),o($VC1,$VD1,{88:2053}),o($Vx1,$VE1,{107:1592,109:1593,93:2054,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vy1,$Vw1,{84:2055}),o($Vr2,$V71),o($Vr2,$V81),{20:[1,2059],22:[1,2063],23:2057,38:2056,201:2058,215:2060,216:[1,2062],217:[1,2061]},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:2064}),o($VO1,$VP1),{121:[1,2065],124:212,125:213,126:$VF1,128:$VG1},{102:[1,2066]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,2068],108:2067,110:[1,2069],111:[1,2070],112:2071,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2072]},o($Vj1,$V34),{123:[1,2073]},o($Vj1,$VW3),o($VA2,$V44),o($VH2,$VX4),{20:$Vo,22:$Vp,23:2074,215:57,216:$Vq},{20:$V47,22:$V57,102:[1,2087],110:[1,2088],111:[1,2089],112:2086,165:$V67,181:2077,191:2075,192:2076,197:2082,198:2083,199:2084,202:2085,205:[1,2090],206:[1,2091],207:[1,2096],208:[1,2097],209:[1,2098],210:[1,2099],211:[1,2092],212:[1,2093],213:[1,2094],214:[1,2095],216:$V77},o($VJ2,$VX4),{20:$Vo,22:$Vp,23:2100,215:57,216:$Vq},{20:$V87,22:$V97,102:[1,2113],110:[1,2114],111:[1,2115],112:2112,165:$Va7,181:2103,191:2101,192:2102,197:2108,198:2109,199:2110,202:2111,205:[1,2116],206:[1,2117],207:[1,2122],208:[1,2123],209:[1,2124],210:[1,2125],211:[1,2118],212:[1,2119],213:[1,2120],214:[1,2121],216:$Vb7},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,2126]},o($VC1,$Vu3),o($VL2,$VX4),{20:$Vo,22:$Vp,23:2127,215:57,216:$Vq},{20:$Vc7,22:$Vd7,102:[1,2140],110:[1,2141],111:[1,2142],112:2139,165:$Ve7,181:2130,191:2128,192:2129,197:2135,198:2136,199:2137,202:2138,205:[1,2143],206:[1,2144],207:[1,2149],208:[1,2150],209:[1,2151],210:[1,2152],211:[1,2145],212:[1,2146],213:[1,2147],214:[1,2148],216:$Vf7},o($Vy1,$V95),o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($Vj1,$V34),{123:[1,2153]},o($Vj1,$VW3),o($VA2,$V44),o($VH2,$VX4),{20:$Vo,22:$Vp,23:2154,215:57,216:$Vq},{20:$Vg7,22:$Vh7,102:[1,2167],110:[1,2168],111:[1,2169],112:2166,165:$Vi7,181:2157,191:2155,192:2156,197:2162,198:2163,199:2164,202:2165,205:[1,2170],206:[1,2171],207:[1,2176],208:[1,2177],209:[1,2178],210:[1,2179],211:[1,2172],212:[1,2173],213:[1,2174],214:[1,2175],216:$Vj7},o($VJ2,$VX4),{20:$Vo,22:$Vp,23:2180,215:57,216:$Vq},{20:$Vk7,22:$Vl7,102:[1,2193],110:[1,2194],111:[1,2195],112:2192,165:$Vm7,181:2183,191:2181,192:2182,197:2188,198:2189,199:2190,202:2191,205:[1,2196],206:[1,2197],207:[1,2202],208:[1,2203],209:[1,2204],210:[1,2205],211:[1,2198],212:[1,2199],213:[1,2200],214:[1,2201],216:$Vn7},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,2206]},o($VC1,$Vu3),o($VL2,$VX4),{20:$Vo,22:$Vp,23:2207,215:57,216:$Vq},{20:$Vo7,22:$Vp7,102:[1,2220],110:[1,2221],111:[1,2222],112:2219,165:$Vq7,181:2210,191:2208,192:2209,197:2215,198:2216,199:2217,202:2218,205:[1,2223],206:[1,2224],207:[1,2229],208:[1,2230],209:[1,2231],210:[1,2232],211:[1,2225],212:[1,2226],213:[1,2227],214:[1,2228],216:$Vr7},o($Vy1,$V95),o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($Vx1,$V95),{194:[1,2235],195:2233,196:[1,2234]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:2236,204:2237,113:[1,2238]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,2241],195:2239,196:[1,2240]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:2242,204:2243,113:[1,2244]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{194:[1,2247],195:2245,196:[1,2246]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:2248,204:2249,113:[1,2250]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),{20:[1,2253],22:[1,2255],89:2251,165:[1,2256],192:2252,216:[1,2254]},o($Vj1,$VB3),o($VH,$VI,{64:2257,66:2258,68:2259,69:2260,75:2263,77:2264,74:2265,46:2266,94:2267,96:2268,89:2270,90:2271,91:2272,80:2273,97:2280,192:2281,93:2283,120:2284,101:2285,107:2291,109:2292,20:[1,2287],22:[1,2289],28:[1,2282],71:[1,2261],73:[1,2262],81:[1,2274],82:[1,2275],83:[1,2276],87:[1,2269],98:[1,2277],99:[1,2278],100:[1,2279],103:$Vs7,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,2290],216:[1,2288]}),o($VJ2,$VI2,{86:1750,193:1751,85:2293,190:$Vy6}),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:2294,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:1750,193:1751,85:2295,190:$Vy6}),o($Vx1,$VM2,{101:1298,97:2296,103:$VU5,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VO4),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:2297,194:[1,2298]}),{20:$VZ3,22:$V_3,130:2299,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:2300,194:[1,2301]}),{20:$VZ3,22:$V_3,130:2302,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,2303]},o($VC1,$VQ1),{102:[1,2305],108:2304,110:[1,2306],111:[1,2307],112:2308,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2309]},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:2310,194:[1,2311]}),{20:$VZ3,22:$V_3,130:2312,165:$V$3,192:634,200:$V04,216:$V14},o($VC1,$Vq4),{123:[1,2313]},{20:[1,2316],22:[1,2318],89:2314,165:[1,2319],192:2315,216:[1,2317]},o($VJ2,$VI2,{86:1788,193:1789,85:2320,190:$VA6}),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:2321,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:1788,193:1789,85:2322,190:$VA6}),o($Vx1,$VM2,{101:1345,97:2323,103:$VV5,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VO4),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:2324,194:[1,2325]}),{20:$VZ3,22:$V_3,130:2326,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:2327,194:[1,2328]}),{20:$VZ3,22:$V_3,130:2329,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,2330]},o($VC1,$VQ1),{102:[1,2332],108:2331,110:[1,2333],111:[1,2334],112:2335,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2336]},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:2337,194:[1,2338]}),{20:$VZ3,22:$V_3,130:2339,165:$V$3,192:634,200:$V04,216:$V14},o($VC1,$Vq4),{123:[1,2340]},{20:[1,2343],22:[1,2345],89:2341,165:[1,2346],192:2342,216:[1,2344]},o($VP3,$V95),{194:[1,2349],195:2347,196:[1,2348]},o($VO3,$V_5),o($VO3,$V$5),o($VO3,$V06),o($VO3,$VR1),o($VO3,$VS1),o($VO3,$VT1),o($VO3,$VU1),o($VO3,$Vt4),o($VO3,$Vu4),o($VO3,$Vv4),o($VO3,$Vw4),o($VO3,$Vx4,{203:2350,204:2351,113:[1,2352]}),o($VO3,$Vy4),o($VO3,$Vz4),o($VO3,$VA4),o($VO3,$VB4),o($VO3,$VC4),o($VO3,$VD4),o($VO3,$VE4),o($VO3,$VF4),o($VO3,$VG4),o($Vt7,$Vq3),o($Vt7,$Vr3),o($Vt7,$Vs3),o($Vt7,$Vt3),{194:[1,2355],195:2353,196:[1,2354]},o($VP3,$V_5),o($VP3,$V$5),o($VP3,$V06),o($VP3,$VR1),o($VP3,$VS1),o($VP3,$VT1),o($VP3,$VU1),o($VP3,$Vt4),o($VP3,$Vu4),o($VP3,$Vv4),o($VP3,$Vw4),o($VP3,$Vx4,{203:2356,204:2357,113:[1,2358]}),o($VP3,$Vy4),o($VP3,$Vz4),o($VP3,$VA4),o($VP3,$VB4),o($VP3,$VC4),o($VP3,$VD4),o($VP3,$VE4),o($VP3,$VF4),o($VP3,$VG4),o($Vu7,$Vq3),o($Vu7,$Vr3),o($Vu7,$Vs3),o($Vu7,$Vt3),{194:[1,2361],195:2359,196:[1,2360]},o($VQ3,$V_5),o($VQ3,$V$5),o($VQ3,$V06),o($VQ3,$VR1),o($VQ3,$VS1),o($VQ3,$VT1),o($VQ3,$VU1),o($VQ3,$Vt4),o($VQ3,$Vu4),o($VQ3,$Vv4),o($VQ3,$Vw4),o($VQ3,$Vx4,{203:2362,204:2363,113:[1,2364]}),o($VQ3,$Vy4),o($VQ3,$Vz4),o($VQ3,$VA4),o($VQ3,$VB4),o($VQ3,$VC4),o($VQ3,$VD4),o($VQ3,$VE4),o($VQ3,$VF4),o($VQ3,$VG4),o($Vv7,$Vq3),o($Vv7,$Vr3),o($Vv7,$Vs3),o($Vv7,$Vt3),{20:[1,2367],22:[1,2369],89:2365,165:[1,2370],192:2366,216:[1,2368]},o($VM3,$VB3),o($VH,$VI,{64:2371,66:2372,68:2373,69:2374,75:2377,77:2378,74:2379,46:2380,94:2381,96:2382,89:2384,90:2385,91:2386,80:2387,97:2394,192:2395,93:2397,120:2398,101:2399,107:2405,109:2406,20:[1,2401],22:[1,2403],28:[1,2396],71:[1,2375],73:[1,2376],81:[1,2388],82:[1,2389],83:[1,2390],87:[1,2383],98:[1,2391],99:[1,2392],100:[1,2393],103:$Vw7,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,2404],216:[1,2402]}),o($VR4,$VI2,{86:1908,193:1909,85:2407,190:$VO6}),o($VM3,$V22),o($VM3,$Vm),o($VM3,$Vn),o($VM3,$Vr),o($VM3,$Vs),o($VM3,$Vt),o($VM3,$Vu),o($VM3,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:2408,123:$VV2,149:$VW2,189:$VX2}),o($VR4,$VI2,{86:1908,193:1909,85:2409,190:$VO6}),o($VP3,$VM2,{101:1421,97:2410,103:$VY5,104:$VR,105:$VS,106:$VT}),o($VP4,$VN2),o($VP4,$Vl3),o($VM3,$VO4),o($VW5,$VW3),o($VO3,$VX3),o($VW5,$VY3,{37:2411,194:[1,2412]}),{20:$VZ3,22:$V_3,130:2413,165:$V$3,192:634,200:$V04,216:$V14},o($VM3,$V24),o($VP3,$VX3),o($VM3,$VY3,{37:2414,194:[1,2415]}),{20:$VZ3,22:$V_3,130:2416,165:$V$3,192:634,200:$V04,216:$V14},o($VR3,$V44),o($VS3,$V54),o($VS3,$V64),o($VS3,$V74),{102:[1,2417]},o($VS3,$VQ1),{102:[1,2419],108:2418,110:[1,2420],111:[1,2421],112:2422,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2423]},o($VX5,$V34),o($VQ3,$VX3),o($VX5,$VY3,{37:2424,194:[1,2425]}),{20:$VZ3,22:$V_3,130:2426,165:$V$3,192:634,200:$V04,216:$V14},o($VS3,$Vq4),{123:[1,2427]},{20:[1,2430],22:[1,2432],89:2428,165:[1,2433],192:2429,216:[1,2431]},o($VR4,$VI2,{86:1946,193:1947,85:2434,190:$VQ6}),o($VM3,$V22),o($VM3,$Vm),o($VM3,$Vn),o($VM3,$Vr),o($VM3,$Vs),o($VM3,$Vt),o($VM3,$Vu),o($VM3,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:2435,123:$VV2,149:$VW2,189:$VX2}),o($VR4,$VI2,{86:1946,193:1947,85:2436,190:$VQ6}),o($VP3,$VM2,{101:1468,97:2437,103:$VZ5,104:$VR,105:$VS,106:$VT}),o($VP4,$VN2),o($VP4,$Vl3),o($VM3,$VO4),o($VW5,$VW3),o($VO3,$VX3),o($VW5,$VY3,{37:2438,194:[1,2439]}),{20:$VZ3,22:$V_3,130:2440,165:$V$3,192:634,200:$V04,216:$V14},o($VM3,$V24),o($VP3,$VX3),o($VM3,$VY3,{37:2441,194:[1,2442]}),{20:$VZ3,22:$V_3,130:2443,165:$V$3,192:634,200:$V04,216:$V14},o($VR3,$V44),o($VS3,$V54),o($VS3,$V64),o($VS3,$V74),{102:[1,2444]},o($VS3,$VQ1),{102:[1,2446],108:2445,110:[1,2447],111:[1,2448],112:2449,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2450]},o($VX5,$V34),o($VQ3,$VX3),o($VX5,$VY3,{37:2451,194:[1,2452]}),{20:$VZ3,22:$V_3,130:2453,165:$V$3,192:634,200:$V04,216:$V14},o($VS3,$Vq4),{123:[1,2454]},{20:[1,2457],22:[1,2459],89:2455,165:[1,2460],192:2456,216:[1,2458]},o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($VS6,$Vw1,{84:2461}),o($VS6,$Vx7),o($VS6,$Vy7),o($VS6,$Vz7),o($VS6,$VA7),o($VS6,$VB7),o($VY6,$VC7,{59:2462,53:[1,2463]}),o($V_6,$VD7,{63:2464,55:[1,2465]}),o($V07,$VE7),o($V07,$VF7,{76:2466,78:2467,80:2468,46:2469,120:2470,81:[1,2471],82:[1,2472],83:[1,2473],121:$VI,126:$VI,128:$VI}),o($V07,$VG7),o($V07,$VH7,{79:2474,75:2475,94:2476,96:2477,97:2481,101:2482,98:[1,2478],99:[1,2479],100:[1,2480],103:$VI7,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:2484,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($V07,$VJ7),o($VK7,$VA1,{95:2485}),o($VL7,$VB1,{101:2003,97:2486,103:$V27,104:$VR,105:$VS,106:$VT}),o($VM7,$VD1,{88:2487}),o($VM7,$VD1,{88:2488}),o($VM7,$VD1,{88:2489}),o($V07,$VE1,{107:2009,109:2010,93:2490,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VN7,$VO7),o($VN7,$VP7),o($VK7,$VH1),o($VK7,$VI1),o($VK7,$VJ1),o($VK7,$VK1),o($VM7,$VL1),o($VM1,$VN1,{162:2491}),o($VQ7,$VP1),{121:[1,2492],124:212,125:213,126:$VF1,128:$VG1},o($VN7,$V71),o($VN7,$V81),{20:[1,2496],22:[1,2500],23:2494,38:2493,201:2495,215:2497,216:[1,2499],217:[1,2498]},{102:[1,2501]},o($VK7,$VQ1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),{102:[1,2503],108:2502,110:[1,2504],111:[1,2505],112:2506,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2507]},o($VS6,$Vw1,{84:2508}),o($Vc6,$V46),o($Vc6,$V56),o($Vc6,$V66),o($Vf6,$V76),o($Vf6,$V86),o($Vf6,$V96),o($VC,$Vh,{48:2509,49:2510,57:2511,61:2512,42:2513,45:$VD}),{72:[1,2514]},o($Vi6,$Vk6),o($Vi6,$VL1),o($Vi6,$VR1),o($Vi6,$VS1),o($Vi6,$VT1),o($Vi6,$VU1),o($Vj1,$VJ3),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:2515}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,2519],22:[1,2523],23:2517,38:2516,201:2518,215:2520,216:[1,2522],217:[1,2521]},{121:[1,2524],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$VK3),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:2525}),o($VA2,$VA1,{95:2526}),o($Vx1,$VB1,{101:2044,97:2527,103:$V37,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,2528]},o($VA2,$VQ1),{72:[1,2529]},o($VH2,$VI2,{85:2530,86:2531,193:2532,190:[1,2533]}),o($VJ2,$VI2,{85:2534,86:2535,193:2536,190:$VR7}),o($Vv1,$VM2,{101:1586,97:2538,103:$Vl6,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:2539,97:2540,93:2541,101:2542,107:2544,109:2545,103:$VS7,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:2539,97:2540,93:2541,101:2542,107:2544,109:2545,103:$VS7,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:2539,97:2540,93:2541,101:2542,107:2544,109:2545,103:$VS7,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VL2,$VI2,{85:2546,86:2547,193:2548,190:[1,2549]}),o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),{20:$V13,22:$V23,23:402,29:[1,2550],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:2551,123:$VV2,149:$VW2,189:$VX2}),o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,2552]},o($VO1,$Vu3),o($Vx1,$V95),{194:[1,2555],195:2553,196:[1,2554]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:2556,204:2557,113:[1,2558]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,2561],195:2559,196:[1,2560]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:2562,204:2563,113:[1,2564]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{20:[1,2567],22:[1,2569],89:2565,165:[1,2570],192:2566,216:[1,2568]},{194:[1,2573],195:2571,196:[1,2572]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:2574,204:2575,113:[1,2576]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),o($Vx1,$V95),{194:[1,2579],195:2577,196:[1,2578]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:2580,204:2581,113:[1,2582]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,2585],195:2583,196:[1,2584]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:2586,204:2587,113:[1,2588]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{20:[1,2591],22:[1,2593],89:2589,165:[1,2594],192:2590,216:[1,2592]},{194:[1,2597],195:2595,196:[1,2596]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:2598,204:2599,113:[1,2600]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$Vm6,22:$Vn6,89:2601,165:$Vo6,192:2602,216:$Vp6},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$Vq6,22:$Vr6,89:2603,165:$Vs6,192:2604,216:$Vt6},o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$Vu6,22:$Vv6,89:2605,165:$Vw6,192:2606,216:$Vx6},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($Vj1,$Vo2),o($Vj1,$Vm1,{67:2607,69:2608,74:2609,46:2610,80:2611,120:2615,81:[1,2612],82:[1,2613],83:[1,2614],121:$VI,126:$VI,128:$VI}),o($Vj1,$Vp2),o($Vj1,$Vo1,{70:2616,66:2617,75:2618,94:2619,96:2620,97:2624,101:2625,98:[1,2621],99:[1,2622],100:[1,2623],103:$VT7,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:2627,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($Vj1,$Vq2),o($Vv1,$Vw1,{84:2628}),o($Vx1,$Vw1,{84:2629}),o($Vr2,$Vs2),o($Vr2,$Vt2),o($Vz1,$VA1,{95:2630}),o($Vv1,$VB1,{101:2285,97:2631,103:$Vs7,104:$VR,105:$VS,106:$VT}),o($VC1,$VD1,{88:2632}),o($VC1,$VD1,{88:2633}),o($VC1,$VD1,{88:2634}),o($Vx1,$VE1,{107:2291,109:2292,93:2635,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vy1,$Vw1,{84:2636}),o($Vr2,$V71),o($Vr2,$V81),{20:[1,2640],22:[1,2644],23:2638,38:2637,201:2639,215:2641,216:[1,2643],217:[1,2642]},o($Vz1,$VH1),o($Vz1,$VI1),o($Vz1,$VJ1),o($Vz1,$VK1),o($VC1,$VL1),o($VM1,$VN1,{162:2645}),o($VO1,$VP1),{121:[1,2646],124:212,125:213,126:$VF1,128:$VG1},{102:[1,2647]},o($Vz1,$VQ1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),{102:[1,2649],108:2648,110:[1,2650],111:[1,2651],112:2652,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2653]},o($Vj1,$V34),{123:[1,2654]},o($Vj1,$VW3),o($VA2,$V44),o($VH2,$VX4),{20:$Vo,22:$Vp,23:2655,215:57,216:$Vq},{20:$VU7,22:$VV7,102:[1,2668],110:[1,2669],111:[1,2670],112:2667,165:$VW7,181:2658,191:2656,192:2657,197:2663,198:2664,199:2665,202:2666,205:[1,2671],206:[1,2672],207:[1,2677],208:[1,2678],209:[1,2679],210:[1,2680],211:[1,2673],212:[1,2674],213:[1,2675],214:[1,2676],216:$VX7},o($VJ2,$VX4),{20:$Vo,22:$Vp,23:2681,215:57,216:$Vq},{20:$VY7,22:$VZ7,102:[1,2694],110:[1,2695],111:[1,2696],112:2693,165:$V_7,181:2684,191:2682,192:2683,197:2689,198:2690,199:2691,202:2692,205:[1,2697],206:[1,2698],207:[1,2703],208:[1,2704],209:[1,2705],210:[1,2706],211:[1,2699],212:[1,2700],213:[1,2701],214:[1,2702],216:$V$7},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,2707]},o($VC1,$Vu3),o($VL2,$VX4),{20:$Vo,22:$Vp,23:2708,215:57,216:$Vq},{20:$V08,22:$V18,102:[1,2721],110:[1,2722],111:[1,2723],112:2720,165:$V28,181:2711,191:2709,192:2710,197:2716,198:2717,199:2718,202:2719,205:[1,2724],206:[1,2725],207:[1,2730],208:[1,2731],209:[1,2732],210:[1,2733],211:[1,2726],212:[1,2727],213:[1,2728],214:[1,2729],216:$V38},o($Vy1,$V95),o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($Vj1,$V34),{123:[1,2734]},o($Vj1,$VW3),o($VA2,$V44),o($VH2,$VX4),{20:$Vo,22:$Vp,23:2735,215:57,216:$Vq},{20:$V48,22:$V58,102:[1,2748],110:[1,2749],111:[1,2750],112:2747,165:$V68,181:2738,191:2736,192:2737,197:2743,198:2744,199:2745,202:2746,205:[1,2751],206:[1,2752],207:[1,2757],208:[1,2758],209:[1,2759],210:[1,2760],211:[1,2753],212:[1,2754],213:[1,2755],214:[1,2756],216:$V78},o($VJ2,$VX4),{20:$Vo,22:$Vp,23:2761,215:57,216:$Vq},{20:$V88,22:$V98,102:[1,2774],110:[1,2775],111:[1,2776],112:2773,165:$Va8,181:2764,191:2762,192:2763,197:2769,198:2770,199:2771,202:2772,205:[1,2777],206:[1,2778],207:[1,2783],208:[1,2784],209:[1,2785],210:[1,2786],211:[1,2779],212:[1,2780],213:[1,2781],214:[1,2782],216:$Vb8},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,2787]},o($VC1,$Vu3),o($VL2,$VX4),{20:$Vo,22:$Vp,23:2788,215:57,216:$Vq},{20:$Vc8,22:$Vd8,102:[1,2801],110:[1,2802],111:[1,2803],112:2800,165:$Ve8,181:2791,191:2789,192:2790,197:2796,198:2797,199:2798,202:2799,205:[1,2804],206:[1,2805],207:[1,2810],208:[1,2811],209:[1,2812],210:[1,2813],211:[1,2806],212:[1,2807],213:[1,2808],214:[1,2809],216:$Vf8},o($Vy1,$V95),o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($VQ4,$V32),o($VQ4,$V42),o($VQ4,$V52),o($VO3,$VN5),o($VO3,$VO5),{20:$VC6,22:$VD6,89:2814,165:$VE6,192:2815,216:$VF6},o($VR4,$V32),o($VR4,$V42),o($VR4,$V52),o($VP3,$VN5),o($VP3,$VO5),{20:$VG6,22:$VH6,89:2816,165:$VI6,192:2817,216:$VJ6},o($VT4,$V32),o($VT4,$V42),o($VT4,$V52),o($VQ3,$VN5),o($VQ3,$VO5),{20:$VK6,22:$VL6,89:2818,165:$VM6,192:2819,216:$VN6},o($VS3,$VP5),o($VS3,$VL1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),o($VM3,$Vo2),o($VM3,$Vm1,{67:2820,69:2821,74:2822,46:2823,80:2824,120:2828,81:[1,2825],82:[1,2826],83:[1,2827],121:$VI,126:$VI,128:$VI}),o($VM3,$Vp2),o($VM3,$Vo1,{70:2829,66:2830,75:2831,94:2832,96:2833,97:2837,101:2838,98:[1,2834],99:[1,2835],100:[1,2836],103:$Vg8,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:2840,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VM3,$Vq2),o($VO3,$Vw1,{84:2841}),o($VP3,$Vw1,{84:2842}),o($VX5,$Vs2),o($VX5,$Vt2),o($VR3,$VA1,{95:2843}),o($VO3,$VB1,{101:2399,97:2844,103:$Vw7,104:$VR,105:$VS,106:$VT}),o($VS3,$VD1,{88:2845}),o($VS3,$VD1,{88:2846}),o($VS3,$VD1,{88:2847}),o($VP3,$VE1,{107:2405,109:2406,93:2848,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VQ3,$Vw1,{84:2849}),o($VX5,$V71),o($VX5,$V81),{20:[1,2853],22:[1,2857],23:2851,38:2850,201:2852,215:2854,216:[1,2856],217:[1,2855]},o($VR3,$VH1),o($VR3,$VI1),o($VR3,$VJ1),o($VR3,$VK1),o($VS3,$VL1),o($VM1,$VN1,{162:2858}),o($VT3,$VP1),{121:[1,2859],124:212,125:213,126:$VF1,128:$VG1},{102:[1,2860]},o($VR3,$VQ1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),{102:[1,2862],108:2861,110:[1,2863],111:[1,2864],112:2865,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,2866]},o($VM3,$V34),{123:[1,2867]},o($VM3,$VW3),o($VP4,$V44),o($VQ4,$VX4),{20:$Vo,22:$Vp,23:2868,215:57,216:$Vq},{20:$Vh8,22:$Vi8,102:[1,2881],110:[1,2882],111:[1,2883],112:2880,165:$Vj8,181:2871,191:2869,192:2870,197:2876,198:2877,199:2878,202:2879,205:[1,2884],206:[1,2885],207:[1,2890],208:[1,2891],209:[1,2892],210:[1,2893],211:[1,2886],212:[1,2887],213:[1,2888],214:[1,2889],216:$Vk8},o($VR4,$VX4),{20:$Vo,22:$Vp,23:2894,215:57,216:$Vq},{20:$Vl8,22:$Vm8,102:[1,2907],110:[1,2908],111:[1,2909],112:2906,165:$Vn8,181:2897,191:2895,192:2896,197:2902,198:2903,199:2904,202:2905,205:[1,2910],206:[1,2911],207:[1,2916],208:[1,2917],209:[1,2918],210:[1,2919],211:[1,2912],212:[1,2913],213:[1,2914],214:[1,2915],216:$Vo8},o($VS3,$Vl3),o($VS3,$Vm3),o($VS3,$Vn3),o($VS3,$Vo3),o($VS3,$Vp3),{113:[1,2920]},o($VS3,$Vu3),o($VT4,$VX4),{20:$Vo,22:$Vp,23:2921,215:57,216:$Vq},{20:$Vp8,22:$Vq8,102:[1,2934],110:[1,2935],111:[1,2936],112:2933,165:$Vr8,181:2924,191:2922,192:2923,197:2929,198:2930,199:2931,202:2932,205:[1,2937],206:[1,2938],207:[1,2943],208:[1,2944],209:[1,2945],210:[1,2946],211:[1,2939],212:[1,2940],213:[1,2941],214:[1,2942],216:$Vs8},o($VQ3,$V95),o($VT3,$VP5),o($VT3,$VL1),o($VT3,$VR1),o($VT3,$VS1),o($VT3,$VT1),o($VT3,$VU1),o($VM3,$V34),{123:[1,2947]},o($VM3,$VW3),o($VP4,$V44),o($VQ4,$VX4),{20:$Vo,22:$Vp,23:2948,215:57,216:$Vq},{20:$Vt8,22:$Vu8,102:[1,2961],110:[1,2962],111:[1,2963],112:2960,165:$Vv8,181:2951,191:2949,192:2950,197:2956,198:2957,199:2958,202:2959,205:[1,2964],206:[1,2965],207:[1,2970],208:[1,2971],209:[1,2972],210:[1,2973],211:[1,2966],212:[1,2967],213:[1,2968],214:[1,2969],216:$Vw8},o($VR4,$VX4),{20:$Vo,22:$Vp,23:2974,215:57,216:$Vq},{20:$Vx8,22:$Vy8,102:[1,2987],110:[1,2988],111:[1,2989],112:2986,165:$Vz8,181:2977,191:2975,192:2976,197:2982,198:2983,199:2984,202:2985,205:[1,2990],206:[1,2991],207:[1,2996],208:[1,2997],209:[1,2998],210:[1,2999],211:[1,2992],212:[1,2993],213:[1,2994],214:[1,2995],216:$VA8},o($VS3,$Vl3),o($VS3,$Vm3),o($VS3,$Vn3),o($VS3,$Vo3),o($VS3,$Vp3),{113:[1,3000]},o($VS3,$Vu3),o($VT4,$VX4),{20:$Vo,22:$Vp,23:3001,215:57,216:$Vq},{20:$VB8,22:$VC8,102:[1,3014],110:[1,3015],111:[1,3016],112:3013,165:$VD8,181:3004,191:3002,192:3003,197:3009,198:3010,199:3011,202:3012,205:[1,3017],206:[1,3018],207:[1,3023],208:[1,3024],209:[1,3025],210:[1,3026],211:[1,3019],212:[1,3020],213:[1,3021],214:[1,3022],216:$VE8},o($VQ3,$V95),o($VT3,$VP5),o($VT3,$VL1),o($VT3,$VR1),o($VT3,$VS1),o($VT3,$VT1),o($VT3,$VU1),o($VF8,$VI2,{85:3027,86:3028,193:3029,190:$VG8}),o($V_6,$VH8),o($VC,$Vh,{57:3031,61:3032,42:3033,45:$VD}),o($V07,$VI8),o($VC,$Vh,{61:3034,42:3035,45:$VD}),o($V07,$VJ8),o($V07,$VK8),o($V07,$VO7),o($V07,$VP7),{121:[1,3036],124:212,125:213,126:$VF1,128:$VG1},o($V07,$V71),o($V07,$V81),{20:[1,3040],22:[1,3044],23:3038,38:3037,201:3039,215:3041,216:[1,3043],217:[1,3042]},o($V07,$VL8),o($V07,$VM8),o($VN8,$VA1,{95:3045}),o($V07,$VB1,{101:2482,97:3046,103:$VI7,104:$VR,105:$VS,106:$VT}),o($VN8,$VH1),o($VN8,$VI1),o($VN8,$VJ1),o($VN8,$VK1),{102:[1,3047]},o($VN8,$VQ1),{72:[1,3048]},o($VL7,$VM2,{101:2003,97:3049,103:$V27,104:$VR,105:$VS,106:$VT}),o($VK7,$VN2),o($V07,$VO2,{92:3050,97:3051,93:3052,101:3053,107:3055,109:3056,103:$VO8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VQ2,{92:3050,97:3051,93:3052,101:3053,107:3055,109:3056,103:$VO8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VR2,{92:3050,97:3051,93:3052,101:3053,107:3055,109:3056,103:$VO8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VQ7,$VS2),{20:$V13,22:$V23,23:402,29:[1,3057],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3058,123:$VV2,149:$VW2,189:$VX2}),o($VN7,$V22),o($VN7,$Vm),o($VN7,$Vn),o($VN7,$Vr),o($VN7,$Vs),o($VN7,$Vt),o($VN7,$Vu),o($VN7,$Vv),o($VK7,$Vl3),o($VQ7,$Vm3),o($VQ7,$Vn3),o($VQ7,$Vo3),o($VQ7,$Vp3),{113:[1,3059]},o($VQ7,$Vu3),o($VF8,$VI2,{86:3028,193:3029,85:3060,190:$VG8}),o($VP8,$VT6,{153:3061,154:3062,157:$VQ8,158:$VR8,159:$VS8,160:$VT8}),o($VU8,$VZ6),o($VV8,$V$6,{58:3067}),o($VW8,$V17,{62:3068}),o($VH,$VI,{65:3069,75:3070,77:3071,78:3072,94:3075,96:3076,89:3078,90:3079,91:3080,80:3081,46:3082,97:3086,192:3087,93:3089,120:3090,101:3094,107:3100,109:3101,20:[1,3096],22:[1,3098],28:[1,3088],71:[1,3073],73:[1,3074],81:[1,3091],82:[1,3092],83:[1,3093],87:[1,3077],98:[1,3083],99:[1,3084],100:[1,3085],103:$VX8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,3099],216:[1,3097]}),o($VP8,$VT6,{154:3062,153:3102,157:$VQ8,158:$VR8,159:$VS8,160:$VT8}),o($VJ2,$VI2,{86:2535,193:2536,85:3103,190:$VR7}),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3104,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:2535,193:2536,85:3105,190:$VR7}),o($Vx1,$VM2,{101:2044,97:3106,103:$V37,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VO4),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:3107,194:[1,3108]}),{20:$VZ3,22:$V_3,130:3109,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:3110,194:[1,3111]}),{20:$VZ3,22:$V_3,130:3112,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,3113]},o($VC1,$VQ1),{102:[1,3115],108:3114,110:[1,3116],111:[1,3117],112:3118,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,3119]},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:3120,194:[1,3121]}),{20:$VZ3,22:$V_3,130:3122,165:$V$3,192:634,200:$V04,216:$V14},o($VC1,$Vq4),{123:[1,3123]},{20:[1,3126],22:[1,3128],89:3124,165:[1,3129],192:3125,216:[1,3127]},o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$V47,22:$V57,89:3130,165:$V67,192:3131,216:$V77},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$V87,22:$V97,89:3132,165:$Va7,192:3133,216:$Vb7},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$Vc7,22:$Vd7,89:3134,165:$Ve7,192:3135,216:$Vf7},o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$Vg7,22:$Vh7,89:3136,165:$Vi7,192:3137,216:$Vj7},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$Vk7,22:$Vl7,89:3138,165:$Vm7,192:3139,216:$Vn7},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$Vo7,22:$Vp7,89:3140,165:$Vq7,192:3141,216:$Vr7},o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($Vj1,$VJ3),o($Vj1,$Vx2),o($Vj1,$Vs2),o($Vj1,$Vt2),o($Vx1,$Vw1,{84:3142}),o($Vj1,$V71),o($Vj1,$V81),{20:[1,3146],22:[1,3150],23:3144,38:3143,201:3145,215:3147,216:[1,3149],217:[1,3148]},{121:[1,3151],124:212,125:213,126:$VF1,128:$VG1},o($Vj1,$VK3),o($Vj1,$Vz2),o($Vx1,$Vw1,{84:3152}),o($VA2,$VA1,{95:3153}),o($Vx1,$VB1,{101:2625,97:3154,103:$VT7,104:$VR,105:$VS,106:$VT}),o($VA2,$VH1),o($VA2,$VI1),o($VA2,$VJ1),o($VA2,$VK1),{102:[1,3155]},o($VA2,$VQ1),{72:[1,3156]},o($VH2,$VI2,{85:3157,86:3158,193:3159,190:[1,3160]}),o($VJ2,$VI2,{85:3161,86:3162,193:3163,190:$VY8}),o($Vv1,$VM2,{101:2285,97:3165,103:$Vs7,104:$VR,105:$VS,106:$VT}),o($Vz1,$VN2),o($Vx1,$VO2,{92:3166,97:3167,93:3168,101:3169,107:3171,109:3172,103:$VZ8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VQ2,{92:3166,97:3167,93:3168,101:3169,107:3171,109:3172,103:$VZ8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vx1,$VR2,{92:3166,97:3167,93:3168,101:3169,107:3171,109:3172,103:$VZ8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VO1,$VS2),o($VL2,$VI2,{85:3173,86:3174,193:3175,190:[1,3176]}),o($Vr2,$V22),o($Vr2,$Vm),o($Vr2,$Vn),o($Vr2,$Vr),o($Vr2,$Vs),o($Vr2,$Vt),o($Vr2,$Vu),o($Vr2,$Vv),{20:$V13,22:$V23,23:402,29:[1,3177],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3178,123:$VV2,149:$VW2,189:$VX2}),o($Vz1,$Vl3),o($VO1,$Vm3),o($VO1,$Vn3),o($VO1,$Vo3),o($VO1,$Vp3),{113:[1,3179]},o($VO1,$Vu3),o($Vx1,$V95),{194:[1,3182],195:3180,196:[1,3181]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:3183,204:3184,113:[1,3185]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,3188],195:3186,196:[1,3187]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:3189,204:3190,113:[1,3191]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{20:[1,3194],22:[1,3196],89:3192,165:[1,3197],192:3193,216:[1,3195]},{194:[1,3200],195:3198,196:[1,3199]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:3201,204:3202,113:[1,3203]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),o($Vx1,$V95),{194:[1,3206],195:3204,196:[1,3205]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:3207,204:3208,113:[1,3209]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,3212],195:3210,196:[1,3211]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:3213,204:3214,113:[1,3215]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{20:[1,3218],22:[1,3220],89:3216,165:[1,3221],192:3217,216:[1,3219]},{194:[1,3224],195:3222,196:[1,3223]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:3225,204:3226,113:[1,3227]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),o($VO3,$Vk6),o($VO3,$VL1),o($VP3,$Vk6),o($VP3,$VL1),o($VQ3,$Vk6),o($VQ3,$VL1),o($VM3,$VJ3),o($VM3,$Vx2),o($VM3,$Vs2),o($VM3,$Vt2),o($VP3,$Vw1,{84:3228}),o($VM3,$V71),o($VM3,$V81),{20:[1,3232],22:[1,3236],23:3230,38:3229,201:3231,215:3233,216:[1,3235],217:[1,3234]},{121:[1,3237],124:212,125:213,126:$VF1,128:$VG1},o($VM3,$VK3),o($VM3,$Vz2),o($VP3,$Vw1,{84:3238}),o($VP4,$VA1,{95:3239}),o($VP3,$VB1,{101:2838,97:3240,103:$Vg8,104:$VR,105:$VS,106:$VT}),o($VP4,$VH1),o($VP4,$VI1),o($VP4,$VJ1),o($VP4,$VK1),{102:[1,3241]},o($VP4,$VQ1),{72:[1,3242]},o($VQ4,$VI2,{85:3243,86:3244,193:3245,190:[1,3246]}),o($VR4,$VI2,{85:3247,86:3248,193:3249,190:$V_8}),o($VO3,$VM2,{101:2399,97:3251,103:$Vw7,104:$VR,105:$VS,106:$VT}),o($VR3,$VN2),o($VP3,$VO2,{92:3252,97:3253,93:3254,101:3255,107:3257,109:3258,103:$V$8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VQ2,{92:3252,97:3253,93:3254,101:3255,107:3257,109:3258,103:$V$8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VP3,$VR2,{92:3252,97:3253,93:3254,101:3255,107:3257,109:3258,103:$V$8,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VT3,$VS2),o($VT4,$VI2,{85:3259,86:3260,193:3261,190:[1,3262]}),o($VX5,$V22),o($VX5,$Vm),o($VX5,$Vn),o($VX5,$Vr),o($VX5,$Vs),o($VX5,$Vt),o($VX5,$Vu),o($VX5,$Vv),{20:$V13,22:$V23,23:402,29:[1,3263],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3264,123:$VV2,149:$VW2,189:$VX2}),o($VR3,$Vl3),o($VT3,$Vm3),o($VT3,$Vn3),o($VT3,$Vo3),o($VT3,$Vp3),{113:[1,3265]},o($VT3,$Vu3),o($VP3,$V95),{194:[1,3268],195:3266,196:[1,3267]},o($VO3,$V_5),o($VO3,$V$5),o($VO3,$V06),o($VO3,$VR1),o($VO3,$VS1),o($VO3,$VT1),o($VO3,$VU1),o($VO3,$Vt4),o($VO3,$Vu4),o($VO3,$Vv4),o($VO3,$Vw4),o($VO3,$Vx4,{203:3269,204:3270,113:[1,3271]}),o($VO3,$Vy4),o($VO3,$Vz4),o($VO3,$VA4),o($VO3,$VB4),o($VO3,$VC4),o($VO3,$VD4),o($VO3,$VE4),o($VO3,$VF4),o($VO3,$VG4),o($Vt7,$Vq3),o($Vt7,$Vr3),o($Vt7,$Vs3),o($Vt7,$Vt3),{194:[1,3274],195:3272,196:[1,3273]},o($VP3,$V_5),o($VP3,$V$5),o($VP3,$V06),o($VP3,$VR1),o($VP3,$VS1),o($VP3,$VT1),o($VP3,$VU1),o($VP3,$Vt4),o($VP3,$Vu4),o($VP3,$Vv4),o($VP3,$Vw4),o($VP3,$Vx4,{203:3275,204:3276,113:[1,3277]}),o($VP3,$Vy4),o($VP3,$Vz4),o($VP3,$VA4),o($VP3,$VB4),o($VP3,$VC4),o($VP3,$VD4),o($VP3,$VE4),o($VP3,$VF4),o($VP3,$VG4),o($Vu7,$Vq3),o($Vu7,$Vr3),o($Vu7,$Vs3),o($Vu7,$Vt3),{20:[1,3280],22:[1,3282],89:3278,165:[1,3283],192:3279,216:[1,3281]},{194:[1,3286],195:3284,196:[1,3285]},o($VQ3,$V_5),o($VQ3,$V$5),o($VQ3,$V06),o($VQ3,$VR1),o($VQ3,$VS1),o($VQ3,$VT1),o($VQ3,$VU1),o($VQ3,$Vt4),o($VQ3,$Vu4),o($VQ3,$Vv4),o($VQ3,$Vw4),o($VQ3,$Vx4,{203:3287,204:3288,113:[1,3289]}),o($VQ3,$Vy4),o($VQ3,$Vz4),o($VQ3,$VA4),o($VQ3,$VB4),o($VQ3,$VC4),o($VQ3,$VD4),o($VQ3,$VE4),o($VQ3,$VF4),o($VQ3,$VG4),o($Vv7,$Vq3),o($Vv7,$Vr3),o($Vv7,$Vs3),o($Vv7,$Vt3),o($VP3,$V95),{194:[1,3292],195:3290,196:[1,3291]},o($VO3,$V_5),o($VO3,$V$5),o($VO3,$V06),o($VO3,$VR1),o($VO3,$VS1),o($VO3,$VT1),o($VO3,$VU1),o($VO3,$Vt4),o($VO3,$Vu4),o($VO3,$Vv4),o($VO3,$Vw4),o($VO3,$Vx4,{203:3293,204:3294,113:[1,3295]}),o($VO3,$Vy4),o($VO3,$Vz4),o($VO3,$VA4),o($VO3,$VB4),o($VO3,$VC4),o($VO3,$VD4),o($VO3,$VE4),o($VO3,$VF4),o($VO3,$VG4),o($Vt7,$Vq3),o($Vt7,$Vr3),o($Vt7,$Vs3),o($Vt7,$Vt3),{194:[1,3298],195:3296,196:[1,3297]},o($VP3,$V_5),o($VP3,$V$5),o($VP3,$V06),o($VP3,$VR1),o($VP3,$VS1),o($VP3,$VT1),o($VP3,$VU1),o($VP3,$Vt4),o($VP3,$Vu4),o($VP3,$Vv4),o($VP3,$Vw4),o($VP3,$Vx4,{203:3299,204:3300,113:[1,3301]}),o($VP3,$Vy4),o($VP3,$Vz4),o($VP3,$VA4),o($VP3,$VB4),o($VP3,$VC4),o($VP3,$VD4),o($VP3,$VE4),o($VP3,$VF4),o($VP3,$VG4),o($Vu7,$Vq3),o($Vu7,$Vr3),o($Vu7,$Vs3),o($Vu7,$Vt3),{20:[1,3304],22:[1,3306],89:3302,165:[1,3307],192:3303,216:[1,3305]},{194:[1,3310],195:3308,196:[1,3309]},o($VQ3,$V_5),o($VQ3,$V$5),o($VQ3,$V06),o($VQ3,$VR1),o($VQ3,$VS1),o($VQ3,$VT1),o($VQ3,$VU1),o($VQ3,$Vt4),o($VQ3,$Vu4),o($VQ3,$Vv4),o($VQ3,$Vw4),o($VQ3,$Vx4,{203:3311,204:3312,113:[1,3313]}),o($VQ3,$Vy4),o($VQ3,$Vz4),o($VQ3,$VA4),o($VQ3,$VB4),o($VQ3,$VC4),o($VQ3,$VD4),o($VQ3,$VE4),o($VQ3,$VF4),o($VQ3,$VG4),o($Vv7,$Vq3),o($Vv7,$Vr3),o($Vv7,$Vs3),o($Vv7,$Vt3),o($Vl4,$V09),o($VS6,$VX3),o($Vl4,$VY3,{37:3314,194:[1,3315]}),{20:$VZ3,22:$V_3,130:3316,165:$V$3,192:634,200:$V04,216:$V14},o($V_6,$V19),o($V07,$V17,{62:3317}),o($VH,$VI,{65:3318,75:3319,77:3320,78:3321,94:3324,96:3325,89:3327,90:3328,91:3329,80:3330,46:3331,97:3335,192:3336,93:3338,120:3339,101:3343,107:3349,109:3350,20:[1,3345],22:[1,3347],28:[1,3337],71:[1,3322],73:[1,3323],81:[1,3340],82:[1,3341],83:[1,3342],87:[1,3326],98:[1,3332],99:[1,3333],100:[1,3334],103:$V29,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,3348],216:[1,3346]}),o($V07,$V39),o($VH,$VI,{65:3351,75:3352,77:3353,78:3354,94:3357,96:3358,89:3360,90:3361,91:3362,80:3363,46:3364,97:3368,192:3369,93:3371,120:3372,101:3376,107:3382,109:3383,20:[1,3378],22:[1,3380],28:[1,3370],71:[1,3355],73:[1,3356],81:[1,3373],82:[1,3374],83:[1,3375],87:[1,3359],98:[1,3365],99:[1,3366],100:[1,3367],103:$V49,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,3381],216:[1,3379]}),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3384,123:$VV2,149:$VW2,189:$VX2}),o($V07,$V22),o($V07,$Vm),o($V07,$Vn),o($V07,$Vr),o($V07,$Vs),o($V07,$Vt),o($V07,$Vu),o($V07,$Vv),o($V07,$VM2,{101:2482,97:3385,103:$VI7,104:$VR,105:$VS,106:$VT}),o($VN8,$VN2),o($VN8,$Vl3),o($V07,$V59),o($VK7,$V44),o($VM7,$V54),o($VM7,$V64),o($VM7,$V74),{102:[1,3386]},o($VM7,$VQ1),{102:[1,3388],108:3387,110:[1,3389],111:[1,3390],112:3391,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,3392]},o($VM7,$Vq4),{123:[1,3393]},{20:[1,3396],22:[1,3398],89:3394,165:[1,3399],192:3395,216:[1,3397]},o($Vl4,$V69),o($VP8,$Vw1,{84:3400}),o($VP8,$Vx7),o($VP8,$Vy7),o($VP8,$Vz7),o($VP8,$VA7),o($VP8,$VB7),o($VU8,$VC7,{59:3401,53:[1,3402]}),o($VV8,$VD7,{63:3403,55:[1,3404]}),o($VW8,$VE7),o($VW8,$VF7,{76:3405,78:3406,80:3407,46:3408,120:3409,81:[1,3410],82:[1,3411],83:[1,3412],121:$VI,126:$VI,128:$VI}),o($VW8,$VG7),o($VW8,$VH7,{79:3413,75:3414,94:3415,96:3416,97:3420,101:3421,98:[1,3417],99:[1,3418],100:[1,3419],103:$V79,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:3423,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VW8,$VJ7),o($V89,$VA1,{95:3424}),o($V99,$VB1,{101:3094,97:3425,103:$VX8,104:$VR,105:$VS,106:$VT}),o($Va9,$VD1,{88:3426}),o($Va9,$VD1,{88:3427}),o($Va9,$VD1,{88:3428}),o($VW8,$VE1,{107:3100,109:3101,93:3429,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vb9,$VO7),o($Vb9,$VP7),o($V89,$VH1),o($V89,$VI1),o($V89,$VJ1),o($V89,$VK1),o($Va9,$VL1),o($VM1,$VN1,{162:3430}),o($Vc9,$VP1),{121:[1,3431],124:212,125:213,126:$VF1,128:$VG1},o($Vb9,$V71),o($Vb9,$V81),{20:[1,3435],22:[1,3439],23:3433,38:3432,201:3434,215:3436,216:[1,3438],217:[1,3437]},{102:[1,3440]},o($V89,$VQ1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1),{102:[1,3442],108:3441,110:[1,3443],111:[1,3444],112:3445,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,3446]},o($VP8,$Vw1,{84:3447}),o($Vj1,$V34),{123:[1,3448]},o($Vj1,$VW3),o($VA2,$V44),o($VH2,$VX4),{20:$Vo,22:$Vp,23:3449,215:57,216:$Vq},{20:$Vd9,22:$Ve9,102:[1,3462],110:[1,3463],111:[1,3464],112:3461,165:$Vf9,181:3452,191:3450,192:3451,197:3457,198:3458,199:3459,202:3460,205:[1,3465],206:[1,3466],207:[1,3471],208:[1,3472],209:[1,3473],210:[1,3474],211:[1,3467],212:[1,3468],213:[1,3469],214:[1,3470],216:$Vg9},o($VJ2,$VX4),{20:$Vo,22:$Vp,23:3475,215:57,216:$Vq},{20:$Vh9,22:$Vi9,102:[1,3488],110:[1,3489],111:[1,3490],112:3487,165:$Vj9,181:3478,191:3476,192:3477,197:3483,198:3484,199:3485,202:3486,205:[1,3491],206:[1,3492],207:[1,3497],208:[1,3498],209:[1,3499],210:[1,3500],211:[1,3493],212:[1,3494],213:[1,3495],214:[1,3496],216:$Vk9},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,3501]},o($VC1,$Vu3),o($VL2,$VX4),{20:$Vo,22:$Vp,23:3502,215:57,216:$Vq},{20:$Vl9,22:$Vm9,102:[1,3515],110:[1,3516],111:[1,3517],112:3514,165:$Vn9,181:3505,191:3503,192:3504,197:3510,198:3511,199:3512,202:3513,205:[1,3518],206:[1,3519],207:[1,3524],208:[1,3525],209:[1,3526],210:[1,3527],211:[1,3520],212:[1,3521],213:[1,3522],214:[1,3523],216:$Vo9},o($Vy1,$V95),o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($VJ2,$VI2,{86:3162,193:3163,85:3528,190:$VY8}),o($Vj1,$V22),o($Vj1,$Vm),o($Vj1,$Vn),o($Vj1,$Vr),o($Vj1,$Vs),o($Vj1,$Vt),o($Vj1,$Vu),o($Vj1,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3529,123:$VV2,149:$VW2,189:$VX2}),o($VJ2,$VI2,{86:3162,193:3163,85:3530,190:$VY8}),o($Vx1,$VM2,{101:2625,97:3531,103:$VT7,104:$VR,105:$VS,106:$VT}),o($VA2,$VN2),o($VA2,$Vl3),o($Vj1,$VO4),o($VV3,$VW3),o($Vv1,$VX3),o($VV3,$VY3,{37:3532,194:[1,3533]}),{20:$VZ3,22:$V_3,130:3534,165:$V$3,192:634,200:$V04,216:$V14},o($Vj1,$V24),o($Vx1,$VX3),o($Vj1,$VY3,{37:3535,194:[1,3536]}),{20:$VZ3,22:$V_3,130:3537,165:$V$3,192:634,200:$V04,216:$V14},o($Vz1,$V44),o($VC1,$V54),o($VC1,$V64),o($VC1,$V74),{102:[1,3538]},o($VC1,$VQ1),{102:[1,3540],108:3539,110:[1,3541],111:[1,3542],112:3543,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,3544]},o($Vr2,$V34),o($Vy1,$VX3),o($Vr2,$VY3,{37:3545,194:[1,3546]}),{20:$VZ3,22:$V_3,130:3547,165:$V$3,192:634,200:$V04,216:$V14},o($VC1,$Vq4),{123:[1,3548]},{20:[1,3551],22:[1,3553],89:3549,165:[1,3554],192:3550,216:[1,3552]},o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$VU7,22:$VV7,89:3555,165:$VW7,192:3556,216:$VX7},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$VY7,22:$VZ7,89:3557,165:$V_7,192:3558,216:$V$7},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$V08,22:$V18,89:3559,165:$V28,192:3560,216:$V38},o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$V48,22:$V58,89:3561,165:$V68,192:3562,216:$V78},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$V88,22:$V98,89:3563,165:$Va8,192:3564,216:$Vb8},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$Vc8,22:$Vd8,89:3565,165:$Ve8,192:3566,216:$Vf8},o($VR4,$VI2,{86:3248,193:3249,85:3567,190:$V_8}),o($VM3,$V22),o($VM3,$Vm),o($VM3,$Vn),o($VM3,$Vr),o($VM3,$Vs),o($VM3,$Vt),o($VM3,$Vu),o($VM3,$Vv),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3568,123:$VV2,149:$VW2,189:$VX2}),o($VR4,$VI2,{86:3248,193:3249,85:3569,190:$V_8}),o($VP3,$VM2,{101:2838,97:3570,103:$Vg8,104:$VR,105:$VS,106:$VT}),o($VP4,$VN2),o($VP4,$Vl3),o($VM3,$VO4),o($VW5,$VW3),o($VO3,$VX3),o($VW5,$VY3,{37:3571,194:[1,3572]}),{20:$VZ3,22:$V_3,130:3573,165:$V$3,192:634,200:$V04,216:$V14},o($VM3,$V24),o($VP3,$VX3),o($VM3,$VY3,{37:3574,194:[1,3575]}),{20:$VZ3,22:$V_3,130:3576,165:$V$3,192:634,200:$V04,216:$V14},o($VR3,$V44),o($VS3,$V54),o($VS3,$V64),o($VS3,$V74),{102:[1,3577]},o($VS3,$VQ1),{102:[1,3579],108:3578,110:[1,3580],111:[1,3581],112:3582,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,3583]},o($VX5,$V34),o($VQ3,$VX3),o($VX5,$VY3,{37:3584,194:[1,3585]}),{20:$VZ3,22:$V_3,130:3586,165:$V$3,192:634,200:$V04,216:$V14},o($VS3,$Vq4),{123:[1,3587]},{20:[1,3590],22:[1,3592],89:3588,165:[1,3593],192:3589,216:[1,3591]},o($VQ4,$V32),o($VQ4,$V42),o($VQ4,$V52),o($VO3,$VN5),o($VO3,$VO5),{20:$Vh8,22:$Vi8,89:3594,165:$Vj8,192:3595,216:$Vk8},o($VR4,$V32),o($VR4,$V42),o($VR4,$V52),o($VP3,$VN5),o($VP3,$VO5),{20:$Vl8,22:$Vm8,89:3596,165:$Vn8,192:3597,216:$Vo8},o($VS3,$VP5),o($VS3,$VL1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),o($VT4,$V32),o($VT4,$V42),o($VT4,$V52),o($VQ3,$VN5),o($VQ3,$VO5),{20:$Vp8,22:$Vq8,89:3598,165:$Vr8,192:3599,216:$Vs8},o($VQ4,$V32),o($VQ4,$V42),o($VQ4,$V52),o($VO3,$VN5),o($VO3,$VO5),{20:$Vt8,22:$Vu8,89:3600,165:$Vv8,192:3601,216:$Vw8},o($VR4,$V32),o($VR4,$V42),o($VR4,$V52),o($VP3,$VN5),o($VP3,$VO5),{20:$Vx8,22:$Vy8,89:3602,165:$Vz8,192:3603,216:$VA8},o($VS3,$VP5),o($VS3,$VL1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),o($VT4,$V32),o($VT4,$V42),o($VT4,$V52),o($VQ3,$VN5),o($VQ3,$VO5),{20:$VB8,22:$VC8,89:3604,165:$VD8,192:3605,216:$VE8},o($VF8,$VX4),{20:$Vo,22:$Vp,23:3606,215:57,216:$Vq},{20:$Vp9,22:$Vq9,102:[1,3619],110:[1,3620],111:[1,3621],112:3618,165:$Vr9,181:3609,191:3607,192:3608,197:3614,198:3615,199:3616,202:3617,205:[1,3622],206:[1,3623],207:[1,3628],208:[1,3629],209:[1,3630],210:[1,3631],211:[1,3624],212:[1,3625],213:[1,3626],214:[1,3627],216:$Vs9},o($V_6,$VD7,{63:3632,55:[1,3633]}),o($V07,$VE7),o($V07,$VF7,{76:3634,78:3635,80:3636,46:3637,120:3638,81:[1,3639],82:[1,3640],83:[1,3641],121:$VI,126:$VI,128:$VI}),o($V07,$VG7),o($V07,$VH7,{79:3642,75:3643,94:3644,96:3645,97:3649,101:3650,98:[1,3646],99:[1,3647],100:[1,3648],103:$Vt9,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:3652,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($V07,$VJ7),o($VK7,$VA1,{95:3653}),o($VL7,$VB1,{101:3343,97:3654,103:$V29,104:$VR,105:$VS,106:$VT}),o($VM7,$VD1,{88:3655}),o($VM7,$VD1,{88:3656}),o($VM7,$VD1,{88:3657}),o($V07,$VE1,{107:3349,109:3350,93:3658,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VN7,$VO7),o($VN7,$VP7),o($VK7,$VH1),o($VK7,$VI1),o($VK7,$VJ1),o($VK7,$VK1),o($VM7,$VL1),o($VM1,$VN1,{162:3659}),o($VQ7,$VP1),{121:[1,3660],124:212,125:213,126:$VF1,128:$VG1},o($VN7,$V71),o($VN7,$V81),{20:[1,3664],22:[1,3668],23:3662,38:3661,201:3663,215:3665,216:[1,3667],217:[1,3666]},{102:[1,3669]},o($VK7,$VQ1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),{102:[1,3671],108:3670,110:[1,3672],111:[1,3673],112:3674,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,3675]},o($V07,$VE7),o($V07,$VF7,{76:3676,78:3677,80:3678,46:3679,120:3680,81:[1,3681],82:[1,3682],83:[1,3683],121:$VI,126:$VI,128:$VI}),o($V07,$VG7),o($V07,$VH7,{79:3684,75:3685,94:3686,96:3687,97:3691,101:3692,98:[1,3688],99:[1,3689],100:[1,3690],103:$Vu9,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:3694,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($V07,$VJ7),o($VK7,$VA1,{95:3695}),o($VL7,$VB1,{101:3376,97:3696,103:$V49,104:$VR,105:$VS,106:$VT}),o($VM7,$VD1,{88:3697}),o($VM7,$VD1,{88:3698}),o($VM7,$VD1,{88:3699}),o($V07,$VE1,{107:3382,109:3383,93:3700,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VN7,$VO7),o($VN7,$VP7),o($VK7,$VH1),o($VK7,$VI1),o($VK7,$VJ1),o($VK7,$VK1),o($VM7,$VL1),o($VM1,$VN1,{162:3701}),o($VQ7,$VP1),{121:[1,3702],124:212,125:213,126:$VF1,128:$VG1},o($VN7,$V71),o($VN7,$V81),{20:[1,3706],22:[1,3710],23:3704,38:3703,201:3705,215:3707,216:[1,3709],217:[1,3708]},{102:[1,3711]},o($VK7,$VQ1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),{102:[1,3713],108:3712,110:[1,3714],111:[1,3715],112:3716,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,3717]},{123:[1,3718]},o($VN8,$V44),o($VM7,$Vl3),o($VM7,$Vm3),o($VM7,$Vn3),o($VM7,$Vo3),o($VM7,$Vp3),{113:[1,3719]},o($VM7,$Vu3),o($VN7,$V95),o($VQ7,$VP5),o($VQ7,$VL1),o($VQ7,$VR1),o($VQ7,$VS1),o($VQ7,$VT1),o($VQ7,$VU1),o($Vv9,$VI2,{85:3720,86:3721,193:3722,190:$Vw9}),o($VV8,$VH8),o($VC,$Vh,{57:3724,61:3725,42:3726,45:$VD}),o($VW8,$VI8),o($VC,$Vh,{61:3727,42:3728,45:$VD}),o($VW8,$VJ8),o($VW8,$VK8),o($VW8,$VO7),o($VW8,$VP7),{121:[1,3729],124:212,125:213,126:$VF1,128:$VG1},o($VW8,$V71),o($VW8,$V81),{20:[1,3733],22:[1,3737],23:3731,38:3730,201:3732,215:3734,216:[1,3736],217:[1,3735]},o($VW8,$VL8),o($VW8,$VM8),o($Vx9,$VA1,{95:3738}),o($VW8,$VB1,{101:3421,97:3739,103:$V79,104:$VR,105:$VS,106:$VT}),o($Vx9,$VH1),o($Vx9,$VI1),o($Vx9,$VJ1),o($Vx9,$VK1),{102:[1,3740]},o($Vx9,$VQ1),{72:[1,3741]},o($V99,$VM2,{101:3094,97:3742,103:$VX8,104:$VR,105:$VS,106:$VT}),o($V89,$VN2),o($VW8,$VO2,{92:3743,97:3744,93:3745,101:3746,107:3748,109:3749,103:$Vy9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VQ2,{92:3743,97:3744,93:3745,101:3746,107:3748,109:3749,103:$Vy9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VR2,{92:3743,97:3744,93:3745,101:3746,107:3748,109:3749,103:$Vy9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vc9,$VS2),{20:$V13,22:$V23,23:402,29:[1,3750],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3751,123:$VV2,149:$VW2,189:$VX2}),o($Vb9,$V22),o($Vb9,$Vm),o($Vb9,$Vn),o($Vb9,$Vr),o($Vb9,$Vs),o($Vb9,$Vt),o($Vb9,$Vu),o($Vb9,$Vv),o($V89,$Vl3),o($Vc9,$Vm3),o($Vc9,$Vn3),o($Vc9,$Vo3),o($Vc9,$Vp3),{113:[1,3752]},o($Vc9,$Vu3),o($Vv9,$VI2,{86:3721,193:3722,85:3753,190:$Vw9}),o($Vx1,$V95),{194:[1,3756],195:3754,196:[1,3755]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:3757,204:3758,113:[1,3759]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,3762],195:3760,196:[1,3761]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:3763,204:3764,113:[1,3765]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{20:[1,3768],22:[1,3770],89:3766,165:[1,3771],192:3767,216:[1,3769]},{194:[1,3774],195:3772,196:[1,3773]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:3775,204:3776,113:[1,3777]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),o($Vj1,$V34),{123:[1,3778]},o($Vj1,$VW3),o($VA2,$V44),o($VH2,$VX4),{20:$Vo,22:$Vp,23:3779,215:57,216:$Vq},{20:$Vz9,22:$VA9,102:[1,3792],110:[1,3793],111:[1,3794],112:3791,165:$VB9,181:3782,191:3780,192:3781,197:3787,198:3788,199:3789,202:3790,205:[1,3795],206:[1,3796],207:[1,3801],208:[1,3802],209:[1,3803],210:[1,3804],211:[1,3797],212:[1,3798],213:[1,3799],214:[1,3800],216:$VC9},o($VJ2,$VX4),{20:$Vo,22:$Vp,23:3805,215:57,216:$Vq},{20:$VD9,22:$VE9,102:[1,3818],110:[1,3819],111:[1,3820],112:3817,165:$VF9,181:3808,191:3806,192:3807,197:3813,198:3814,199:3815,202:3816,205:[1,3821],206:[1,3822],207:[1,3827],208:[1,3828],209:[1,3829],210:[1,3830],211:[1,3823],212:[1,3824],213:[1,3825],214:[1,3826],216:$VG9},o($VC1,$Vl3),o($VC1,$Vm3),o($VC1,$Vn3),o($VC1,$Vo3),o($VC1,$Vp3),{113:[1,3831]},o($VC1,$Vu3),o($VL2,$VX4),{20:$Vo,22:$Vp,23:3832,215:57,216:$Vq},{20:$VH9,22:$VI9,102:[1,3845],110:[1,3846],111:[1,3847],112:3844,165:$VJ9,181:3835,191:3833,192:3834,197:3840,198:3841,199:3842,202:3843,205:[1,3848],206:[1,3849],207:[1,3854],208:[1,3855],209:[1,3856],210:[1,3857],211:[1,3850],212:[1,3851],213:[1,3852],214:[1,3853],216:$VK9},o($Vy1,$V95),o($VO1,$VP5),o($VO1,$VL1),o($VO1,$VR1),o($VO1,$VS1),o($VO1,$VT1),o($VO1,$VU1),o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($VM3,$V34),{123:[1,3858]},o($VM3,$VW3),o($VP4,$V44),o($VQ4,$VX4),{20:$Vo,22:$Vp,23:3859,215:57,216:$Vq},{20:$VL9,22:$VM9,102:[1,3872],110:[1,3873],111:[1,3874],112:3871,165:$VN9,181:3862,191:3860,192:3861,197:3867,198:3868,199:3869,202:3870,205:[1,3875],206:[1,3876],207:[1,3881],208:[1,3882],209:[1,3883],210:[1,3884],211:[1,3877],212:[1,3878],213:[1,3879],214:[1,3880],216:$VO9},o($VR4,$VX4),{20:$Vo,22:$Vp,23:3885,215:57,216:$Vq},{20:$VP9,22:$VQ9,102:[1,3898],110:[1,3899],111:[1,3900],112:3897,165:$VR9,181:3888,191:3886,192:3887,197:3893,198:3894,199:3895,202:3896,205:[1,3901],206:[1,3902],207:[1,3907],208:[1,3908],209:[1,3909],210:[1,3910],211:[1,3903],212:[1,3904],213:[1,3905],214:[1,3906],216:$VS9},o($VS3,$Vl3),o($VS3,$Vm3),o($VS3,$Vn3),o($VS3,$Vo3),o($VS3,$Vp3),{113:[1,3911]},o($VS3,$Vu3),o($VT4,$VX4),{20:$Vo,22:$Vp,23:3912,215:57,216:$Vq},{20:$VT9,22:$VU9,102:[1,3925],110:[1,3926],111:[1,3927],112:3924,165:$VV9,181:3915,191:3913,192:3914,197:3920,198:3921,199:3922,202:3923,205:[1,3928],206:[1,3929],207:[1,3934],208:[1,3935],209:[1,3936],210:[1,3937],211:[1,3930],212:[1,3931],213:[1,3932],214:[1,3933],216:$VW9},o($VQ3,$V95),o($VT3,$VP5),o($VT3,$VL1),o($VT3,$VR1),o($VT3,$VS1),o($VT3,$VT1),o($VT3,$VU1),o($VO3,$Vk6),o($VO3,$VL1),o($VP3,$Vk6),o($VP3,$VL1),o($VQ3,$Vk6),o($VQ3,$VL1),o($VO3,$Vk6),o($VO3,$VL1),o($VP3,$Vk6),o($VP3,$VL1),o($VQ3,$Vk6),o($VQ3,$VL1),{194:[1,3940],195:3938,196:[1,3939]},o($VS6,$V_5),o($VS6,$V$5),o($VS6,$V06),o($VS6,$VR1),o($VS6,$VS1),o($VS6,$VT1),o($VS6,$VU1),o($VS6,$Vt4),o($VS6,$Vu4),o($VS6,$Vv4),o($VS6,$Vw4),o($VS6,$Vx4,{203:3941,204:3942,113:[1,3943]}),o($VS6,$Vy4),o($VS6,$Vz4),o($VS6,$VA4),o($VS6,$VB4),o($VS6,$VC4),o($VS6,$VD4),o($VS6,$VE4),o($VS6,$VF4),o($VS6,$VG4),o($VX9,$Vq3),o($VX9,$Vr3),o($VX9,$Vs3),o($VX9,$Vt3),o($V07,$VI8),o($VC,$Vh,{61:3944,42:3945,45:$VD}),o($V07,$VJ8),o($V07,$VK8),o($V07,$VO7),o($V07,$VP7),{121:[1,3946],124:212,125:213,126:$VF1,128:$VG1},o($V07,$V71),o($V07,$V81),{20:[1,3950],22:[1,3954],23:3948,38:3947,201:3949,215:3951,216:[1,3953],217:[1,3952]},o($V07,$VL8),o($V07,$VM8),o($VN8,$VA1,{95:3955}),o($V07,$VB1,{101:3650,97:3956,103:$Vt9,104:$VR,105:$VS,106:$VT}),o($VN8,$VH1),o($VN8,$VI1),o($VN8,$VJ1),o($VN8,$VK1),{102:[1,3957]},o($VN8,$VQ1),{72:[1,3958]},o($VL7,$VM2,{101:3343,97:3959,103:$V29,104:$VR,105:$VS,106:$VT}),o($VK7,$VN2),o($V07,$VO2,{92:3960,97:3961,93:3962,101:3963,107:3965,109:3966,103:$VY9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VQ2,{92:3960,97:3961,93:3962,101:3963,107:3965,109:3966,103:$VY9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VR2,{92:3960,97:3961,93:3962,101:3963,107:3965,109:3966,103:$VY9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VQ7,$VS2),{20:$V13,22:$V23,23:402,29:[1,3967],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3968,123:$VV2,149:$VW2,189:$VX2}),o($VN7,$V22),o($VN7,$Vm),o($VN7,$Vn),o($VN7,$Vr),o($VN7,$Vs),o($VN7,$Vt),o($VN7,$Vu),o($VN7,$Vv),o($VK7,$Vl3),o($VQ7,$Vm3),o($VQ7,$Vn3),o($VQ7,$Vo3),o($VQ7,$Vp3),{113:[1,3969]},o($VQ7,$Vu3),o($V07,$VJ8),o($V07,$VK8),o($V07,$VO7),o($V07,$VP7),{121:[1,3970],124:212,125:213,126:$VF1,128:$VG1},o($V07,$V71),o($V07,$V81),{20:[1,3974],22:[1,3978],23:3972,38:3971,201:3973,215:3975,216:[1,3977],217:[1,3976]},o($V07,$VL8),o($V07,$VM8),o($VN8,$VA1,{95:3979}),o($V07,$VB1,{101:3692,97:3980,103:$Vu9,104:$VR,105:$VS,106:$VT}),o($VN8,$VH1),o($VN8,$VI1),o($VN8,$VJ1),o($VN8,$VK1),{102:[1,3981]},o($VN8,$VQ1),{72:[1,3982]},o($VL7,$VM2,{101:3376,97:3983,103:$V49,104:$VR,105:$VS,106:$VT}),o($VK7,$VN2),o($V07,$VO2,{92:3984,97:3985,93:3986,101:3987,107:3989,109:3990,103:$VZ9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VQ2,{92:3984,97:3985,93:3986,101:3987,107:3989,109:3990,103:$VZ9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VR2,{92:3984,97:3985,93:3986,101:3987,107:3989,109:3990,103:$VZ9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VQ7,$VS2),{20:$V13,22:$V23,23:402,29:[1,3991],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:3992,123:$VV2,149:$VW2,189:$VX2}),o($VN7,$V22),o($VN7,$Vm),o($VN7,$Vn),o($VN7,$Vr),o($VN7,$Vs),o($VN7,$Vt),o($VN7,$Vu),o($VN7,$Vv),o($VK7,$Vl3),o($VQ7,$Vm3),o($VQ7,$Vn3),o($VQ7,$Vo3),o($VQ7,$Vp3),{113:[1,3993]},o($VQ7,$Vu3),o($V07,$V95),{20:[1,3996],22:[1,3998],89:3994,165:[1,3999],192:3995,216:[1,3997]},o($Vf6,$V09),o($VP8,$VX3),o($Vf6,$VY3,{37:4000,194:[1,4001]}),{20:$VZ3,22:$V_3,130:4002,165:$V$3,192:634,200:$V04,216:$V14},o($VV8,$V19),o($VW8,$V17,{62:4003}),o($VH,$VI,{65:4004,75:4005,77:4006,78:4007,94:4010,96:4011,89:4013,90:4014,91:4015,80:4016,46:4017,97:4021,192:4022,93:4024,120:4025,101:4029,107:4035,109:4036,20:[1,4031],22:[1,4033],28:[1,4023],71:[1,4008],73:[1,4009],81:[1,4026],82:[1,4027],83:[1,4028],87:[1,4012],98:[1,4018],99:[1,4019],100:[1,4020],103:$V_9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,4034],216:[1,4032]}),o($VW8,$V39),o($VH,$VI,{65:4037,75:4038,77:4039,78:4040,94:4043,96:4044,89:4046,90:4047,91:4048,80:4049,46:4050,97:4054,192:4055,93:4057,120:4058,101:4062,107:4068,109:4069,20:[1,4064],22:[1,4066],28:[1,4056],71:[1,4041],73:[1,4042],81:[1,4059],82:[1,4060],83:[1,4061],87:[1,4045],98:[1,4051],99:[1,4052],100:[1,4053],103:$V$9,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,4067],216:[1,4065]}),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4070,123:$VV2,149:$VW2,189:$VX2}),o($VW8,$V22),o($VW8,$Vm),o($VW8,$Vn),o($VW8,$Vr),o($VW8,$Vs),o($VW8,$Vt),o($VW8,$Vu),o($VW8,$Vv),o($VW8,$VM2,{101:3421,97:4071,103:$V79,104:$VR,105:$VS,106:$VT}),o($Vx9,$VN2),o($Vx9,$Vl3),o($VW8,$V59),o($V89,$V44),o($Va9,$V54),o($Va9,$V64),o($Va9,$V74),{102:[1,4072]},o($Va9,$VQ1),{102:[1,4074],108:4073,110:[1,4075],111:[1,4076],112:4077,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4078]},o($Va9,$Vq4),{123:[1,4079]},{20:[1,4082],22:[1,4084],89:4080,165:[1,4085],192:4081,216:[1,4083]},o($Vf6,$V69),o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$Vd9,22:$Ve9,89:4086,165:$Vf9,192:4087,216:$Vg9},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$Vh9,22:$Vi9,89:4088,165:$Vj9,192:4089,216:$Vk9},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$Vl9,22:$Vm9,89:4090,165:$Vn9,192:4091,216:$Vo9},o($Vx1,$V95),{194:[1,4094],195:4092,196:[1,4093]},o($Vv1,$V_5),o($Vv1,$V$5),o($Vv1,$V06),o($Vv1,$VR1),o($Vv1,$VS1),o($Vv1,$VT1),o($Vv1,$VU1),o($Vv1,$Vt4),o($Vv1,$Vu4),o($Vv1,$Vv4),o($Vv1,$Vw4),o($Vv1,$Vx4,{203:4095,204:4096,113:[1,4097]}),o($Vv1,$Vy4),o($Vv1,$Vz4),o($Vv1,$VA4),o($Vv1,$VB4),o($Vv1,$VC4),o($Vv1,$VD4),o($Vv1,$VE4),o($Vv1,$VF4),o($Vv1,$VG4),o($V16,$Vq3),o($V16,$Vr3),o($V16,$Vs3),o($V16,$Vt3),{194:[1,4100],195:4098,196:[1,4099]},o($Vx1,$V_5),o($Vx1,$V$5),o($Vx1,$V06),o($Vx1,$VR1),o($Vx1,$VS1),o($Vx1,$VT1),o($Vx1,$VU1),o($Vx1,$Vt4),o($Vx1,$Vu4),o($Vx1,$Vv4),o($Vx1,$Vw4),o($Vx1,$Vx4,{203:4101,204:4102,113:[1,4103]}),o($Vx1,$Vy4),o($Vx1,$Vz4),o($Vx1,$VA4),o($Vx1,$VB4),o($Vx1,$VC4),o($Vx1,$VD4),o($Vx1,$VE4),o($Vx1,$VF4),o($Vx1,$VG4),o($V26,$Vq3),o($V26,$Vr3),o($V26,$Vs3),o($V26,$Vt3),{20:[1,4106],22:[1,4108],89:4104,165:[1,4109],192:4105,216:[1,4107]},{194:[1,4112],195:4110,196:[1,4111]},o($Vy1,$V_5),o($Vy1,$V$5),o($Vy1,$V06),o($Vy1,$VR1),o($Vy1,$VS1),o($Vy1,$VT1),o($Vy1,$VU1),o($Vy1,$Vt4),o($Vy1,$Vu4),o($Vy1,$Vv4),o($Vy1,$Vw4),o($Vy1,$Vx4,{203:4113,204:4114,113:[1,4115]}),o($Vy1,$Vy4),o($Vy1,$Vz4),o($Vy1,$VA4),o($Vy1,$VB4),o($Vy1,$VC4),o($Vy1,$VD4),o($Vy1,$VE4),o($Vy1,$VF4),o($Vy1,$VG4),o($V36,$Vq3),o($V36,$Vr3),o($V36,$Vs3),o($V36,$Vt3),o($VP3,$V95),{194:[1,4118],195:4116,196:[1,4117]},o($VO3,$V_5),o($VO3,$V$5),o($VO3,$V06),o($VO3,$VR1),o($VO3,$VS1),o($VO3,$VT1),o($VO3,$VU1),o($VO3,$Vt4),o($VO3,$Vu4),o($VO3,$Vv4),o($VO3,$Vw4),o($VO3,$Vx4,{203:4119,204:4120,113:[1,4121]}),o($VO3,$Vy4),o($VO3,$Vz4),o($VO3,$VA4),o($VO3,$VB4),o($VO3,$VC4),o($VO3,$VD4),o($VO3,$VE4),o($VO3,$VF4),o($VO3,$VG4),o($Vt7,$Vq3),o($Vt7,$Vr3),o($Vt7,$Vs3),o($Vt7,$Vt3),{194:[1,4124],195:4122,196:[1,4123]},o($VP3,$V_5),o($VP3,$V$5),o($VP3,$V06),o($VP3,$VR1),o($VP3,$VS1),o($VP3,$VT1),o($VP3,$VU1),o($VP3,$Vt4),o($VP3,$Vu4),o($VP3,$Vv4),o($VP3,$Vw4),o($VP3,$Vx4,{203:4125,204:4126,113:[1,4127]}),o($VP3,$Vy4),o($VP3,$Vz4),o($VP3,$VA4),o($VP3,$VB4),o($VP3,$VC4),o($VP3,$VD4),o($VP3,$VE4),o($VP3,$VF4),o($VP3,$VG4),o($Vu7,$Vq3),o($Vu7,$Vr3),o($Vu7,$Vs3),o($Vu7,$Vt3),{20:[1,4130],22:[1,4132],89:4128,165:[1,4133],192:4129,216:[1,4131]},{194:[1,4136],195:4134,196:[1,4135]},o($VQ3,$V_5),o($VQ3,$V$5),o($VQ3,$V06),o($VQ3,$VR1),o($VQ3,$VS1),o($VQ3,$VT1),o($VQ3,$VU1),o($VQ3,$Vt4),o($VQ3,$Vu4),o($VQ3,$Vv4),o($VQ3,$Vw4),o($VQ3,$Vx4,{203:4137,204:4138,113:[1,4139]}),o($VQ3,$Vy4),o($VQ3,$Vz4),o($VQ3,$VA4),o($VQ3,$VB4),o($VQ3,$VC4),o($VQ3,$VD4),o($VQ3,$VE4),o($VQ3,$VF4),o($VQ3,$VG4),o($Vv7,$Vq3),o($Vv7,$Vr3),o($Vv7,$Vs3),o($Vv7,$Vt3),o($VF8,$V32),o($VF8,$V42),o($VF8,$V52),o($VS6,$VN5),o($VS6,$VO5),{20:$Vp9,22:$Vq9,89:4140,165:$Vr9,192:4141,216:$Vs9},o($V07,$V39),o($VH,$VI,{65:4142,75:4143,77:4144,78:4145,94:4148,96:4149,89:4151,90:4152,91:4153,80:4154,46:4155,97:4159,192:4160,93:4162,120:4163,101:4167,107:4173,109:4174,20:[1,4169],22:[1,4171],28:[1,4161],71:[1,4146],73:[1,4147],81:[1,4164],82:[1,4165],83:[1,4166],87:[1,4150],98:[1,4156],99:[1,4157],100:[1,4158],103:$V0a,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,4172],216:[1,4170]}),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4175,123:$VV2,149:$VW2,189:$VX2}),o($V07,$V22),o($V07,$Vm),o($V07,$Vn),o($V07,$Vr),o($V07,$Vs),o($V07,$Vt),o($V07,$Vu),o($V07,$Vv),o($V07,$VM2,{101:3650,97:4176,103:$Vt9,104:$VR,105:$VS,106:$VT}),o($VN8,$VN2),o($VN8,$Vl3),o($V07,$V59),o($VK7,$V44),o($VM7,$V54),o($VM7,$V64),o($VM7,$V74),{102:[1,4177]},o($VM7,$VQ1),{102:[1,4179],108:4178,110:[1,4180],111:[1,4181],112:4182,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4183]},o($VM7,$Vq4),{123:[1,4184]},{20:[1,4187],22:[1,4189],89:4185,165:[1,4190],192:4186,216:[1,4188]},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4191,123:$VV2,149:$VW2,189:$VX2}),o($V07,$V22),o($V07,$Vm),o($V07,$Vn),o($V07,$Vr),o($V07,$Vs),o($V07,$Vt),o($V07,$Vu),o($V07,$Vv),o($V07,$VM2,{101:3692,97:4192,103:$Vu9,104:$VR,105:$VS,106:$VT}),o($VN8,$VN2),o($VN8,$Vl3),o($V07,$V59),o($VK7,$V44),o($VM7,$V54),o($VM7,$V64),o($VM7,$V74),{102:[1,4193]},o($VM7,$VQ1),{102:[1,4195],108:4194,110:[1,4196],111:[1,4197],112:4198,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4199]},o($VM7,$Vq4),{123:[1,4200]},{20:[1,4203],22:[1,4205],89:4201,165:[1,4206],192:4202,216:[1,4204]},o($VM7,$VP5),o($VM7,$VL1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),o($Vv9,$VX4),{20:$Vo,22:$Vp,23:4207,215:57,216:$Vq},{20:$V1a,22:$V2a,102:[1,4220],110:[1,4221],111:[1,4222],112:4219,165:$V3a,181:4210,191:4208,192:4209,197:4215,198:4216,199:4217,202:4218,205:[1,4223],206:[1,4224],207:[1,4229],208:[1,4230],209:[1,4231],210:[1,4232],211:[1,4225],212:[1,4226],213:[1,4227],214:[1,4228],216:$V4a},o($VV8,$VD7,{63:4233,55:[1,4234]}),o($VW8,$VE7),o($VW8,$VF7,{76:4235,78:4236,80:4237,46:4238,120:4239,81:[1,4240],82:[1,4241],83:[1,4242],121:$VI,126:$VI,128:$VI}),o($VW8,$VG7),o($VW8,$VH7,{79:4243,75:4244,94:4245,96:4246,97:4250,101:4251,98:[1,4247],99:[1,4248],100:[1,4249],103:$V5a,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:4253,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VW8,$VJ7),o($V89,$VA1,{95:4254}),o($V99,$VB1,{101:4029,97:4255,103:$V_9,104:$VR,105:$VS,106:$VT}),o($Va9,$VD1,{88:4256}),o($Va9,$VD1,{88:4257}),o($Va9,$VD1,{88:4258}),o($VW8,$VE1,{107:4035,109:4036,93:4259,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vb9,$VO7),o($Vb9,$VP7),o($V89,$VH1),o($V89,$VI1),o($V89,$VJ1),o($V89,$VK1),o($Va9,$VL1),o($VM1,$VN1,{162:4260}),o($Vc9,$VP1),{121:[1,4261],124:212,125:213,126:$VF1,128:$VG1},o($Vb9,$V71),o($Vb9,$V81),{20:[1,4265],22:[1,4269],23:4263,38:4262,201:4264,215:4266,216:[1,4268],217:[1,4267]},{102:[1,4270]},o($V89,$VQ1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1),{102:[1,4272],108:4271,110:[1,4273],111:[1,4274],112:4275,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4276]},o($VW8,$VE7),o($VW8,$VF7,{76:4277,78:4278,80:4279,46:4280,120:4281,81:[1,4282],82:[1,4283],83:[1,4284],121:$VI,126:$VI,128:$VI}),o($VW8,$VG7),o($VW8,$VH7,{79:4285,75:4286,94:4287,96:4288,97:4292,101:4293,98:[1,4289],99:[1,4290],100:[1,4291],103:$V6a,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:4295,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VW8,$VJ7),o($V89,$VA1,{95:4296}),o($V99,$VB1,{101:4062,97:4297,103:$V$9,104:$VR,105:$VS,106:$VT}),o($Va9,$VD1,{88:4298}),o($Va9,$VD1,{88:4299}),o($Va9,$VD1,{88:4300}),o($VW8,$VE1,{107:4068,109:4069,93:4301,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vb9,$VO7),o($Vb9,$VP7),o($V89,$VH1),o($V89,$VI1),o($V89,$VJ1),o($V89,$VK1),o($Va9,$VL1),o($VM1,$VN1,{162:4302}),o($Vc9,$VP1),{121:[1,4303],124:212,125:213,126:$VF1,128:$VG1},o($Vb9,$V71),o($Vb9,$V81),{20:[1,4307],22:[1,4311],23:4305,38:4304,201:4306,215:4308,216:[1,4310],217:[1,4309]},{102:[1,4312]},o($V89,$VQ1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1),{102:[1,4314],108:4313,110:[1,4315],111:[1,4316],112:4317,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4318]},{123:[1,4319]},o($Vx9,$V44),o($Va9,$Vl3),o($Va9,$Vm3),o($Va9,$Vn3),o($Va9,$Vo3),o($Va9,$Vp3),{113:[1,4320]},o($Va9,$Vu3),o($Vb9,$V95),o($Vc9,$VP5),o($Vc9,$VL1),o($Vc9,$VR1),o($Vc9,$VS1),o($Vc9,$VT1),o($Vc9,$VU1),o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($VH2,$V32),o($VH2,$V42),o($VH2,$V52),o($Vv1,$VN5),o($Vv1,$VO5),{20:$Vz9,22:$VA9,89:4321,165:$VB9,192:4322,216:$VC9},o($VJ2,$V32),o($VJ2,$V42),o($VJ2,$V52),o($Vx1,$VN5),o($Vx1,$VO5),{20:$VD9,22:$VE9,89:4323,165:$VF9,192:4324,216:$VG9},o($VC1,$VP5),o($VC1,$VL1),o($VC1,$VR1),o($VC1,$VS1),o($VC1,$VT1),o($VC1,$VU1),o($VL2,$V32),o($VL2,$V42),o($VL2,$V52),o($Vy1,$VN5),o($Vy1,$VO5),{20:$VH9,22:$VI9,89:4325,165:$VJ9,192:4326,216:$VK9},o($VQ4,$V32),o($VQ4,$V42),o($VQ4,$V52),o($VO3,$VN5),o($VO3,$VO5),{20:$VL9,22:$VM9,89:4327,165:$VN9,192:4328,216:$VO9},o($VR4,$V32),o($VR4,$V42),o($VR4,$V52),o($VP3,$VN5),o($VP3,$VO5),{20:$VP9,22:$VQ9,89:4329,165:$VR9,192:4330,216:$VS9},o($VS3,$VP5),o($VS3,$VL1),o($VS3,$VR1),o($VS3,$VS1),o($VS3,$VT1),o($VS3,$VU1),o($VT4,$V32),o($VT4,$V42),o($VT4,$V52),o($VQ3,$VN5),o($VQ3,$VO5),{20:$VT9,22:$VU9,89:4331,165:$VV9,192:4332,216:$VW9},o($VS6,$Vk6),o($VS6,$VL1),o($V07,$VE7),o($V07,$VF7,{76:4333,78:4334,80:4335,46:4336,120:4337,81:[1,4338],82:[1,4339],83:[1,4340],121:$VI,126:$VI,128:$VI}),o($V07,$VG7),o($V07,$VH7,{79:4341,75:4342,94:4343,96:4344,97:4348,101:4349,98:[1,4345],99:[1,4346],100:[1,4347],103:$V7a,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:4351,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($V07,$VJ7),o($VK7,$VA1,{95:4352}),o($VL7,$VB1,{101:4167,97:4353,103:$V0a,104:$VR,105:$VS,106:$VT}),o($VM7,$VD1,{88:4354}),o($VM7,$VD1,{88:4355}),o($VM7,$VD1,{88:4356}),o($V07,$VE1,{107:4173,109:4174,93:4357,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VN7,$VO7),o($VN7,$VP7),o($VK7,$VH1),o($VK7,$VI1),o($VK7,$VJ1),o($VK7,$VK1),o($VM7,$VL1),o($VM1,$VN1,{162:4358}),o($VQ7,$VP1),{121:[1,4359],124:212,125:213,126:$VF1,128:$VG1},o($VN7,$V71),o($VN7,$V81),{20:[1,4363],22:[1,4367],23:4361,38:4360,201:4362,215:4364,216:[1,4366],217:[1,4365]},{102:[1,4368]},o($VK7,$VQ1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),{102:[1,4370],108:4369,110:[1,4371],111:[1,4372],112:4373,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4374]},{123:[1,4375]},o($VN8,$V44),o($VM7,$Vl3),o($VM7,$Vm3),o($VM7,$Vn3),o($VM7,$Vo3),o($VM7,$Vp3),{113:[1,4376]},o($VM7,$Vu3),o($VN7,$V95),o($VQ7,$VP5),o($VQ7,$VL1),o($VQ7,$VR1),o($VQ7,$VS1),o($VQ7,$VT1),o($VQ7,$VU1),{123:[1,4377]},o($VN8,$V44),o($VM7,$Vl3),o($VM7,$Vm3),o($VM7,$Vn3),o($VM7,$Vo3),o($VM7,$Vp3),{113:[1,4378]},o($VM7,$Vu3),o($VN7,$V95),o($VQ7,$VP5),o($VQ7,$VL1),o($VQ7,$VR1),o($VQ7,$VS1),o($VQ7,$VT1),o($VQ7,$VU1),{194:[1,4381],195:4379,196:[1,4380]},o($VP8,$V_5),o($VP8,$V$5),o($VP8,$V06),o($VP8,$VR1),o($VP8,$VS1),o($VP8,$VT1),o($VP8,$VU1),o($VP8,$Vt4),o($VP8,$Vu4),o($VP8,$Vv4),o($VP8,$Vw4),o($VP8,$Vx4,{203:4382,204:4383,113:[1,4384]}),o($VP8,$Vy4),o($VP8,$Vz4),o($VP8,$VA4),o($VP8,$VB4),o($VP8,$VC4),o($VP8,$VD4),o($VP8,$VE4),o($VP8,$VF4),o($VP8,$VG4),o($V8a,$Vq3),o($V8a,$Vr3),o($V8a,$Vs3),o($V8a,$Vt3),o($VW8,$VI8),o($VC,$Vh,{61:4385,42:4386,45:$VD}),o($VW8,$VJ8),o($VW8,$VK8),o($VW8,$VO7),o($VW8,$VP7),{121:[1,4387],124:212,125:213,126:$VF1,128:$VG1},o($VW8,$V71),o($VW8,$V81),{20:[1,4391],22:[1,4395],23:4389,38:4388,201:4390,215:4392,216:[1,4394],217:[1,4393]},o($VW8,$VL8),o($VW8,$VM8),o($Vx9,$VA1,{95:4396}),o($VW8,$VB1,{101:4251,97:4397,103:$V5a,104:$VR,105:$VS,106:$VT}),o($Vx9,$VH1),o($Vx9,$VI1),o($Vx9,$VJ1),o($Vx9,$VK1),{102:[1,4398]},o($Vx9,$VQ1),{72:[1,4399]},o($V99,$VM2,{101:4029,97:4400,103:$V_9,104:$VR,105:$VS,106:$VT}),o($V89,$VN2),o($VW8,$VO2,{92:4401,97:4402,93:4403,101:4404,107:4406,109:4407,103:$V9a,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VQ2,{92:4401,97:4402,93:4403,101:4404,107:4406,109:4407,103:$V9a,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VR2,{92:4401,97:4402,93:4403,101:4404,107:4406,109:4407,103:$V9a,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vc9,$VS2),{20:$V13,22:$V23,23:402,29:[1,4408],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4409,123:$VV2,149:$VW2,189:$VX2}),o($Vb9,$V22),o($Vb9,$Vm),o($Vb9,$Vn),o($Vb9,$Vr),o($Vb9,$Vs),o($Vb9,$Vt),o($Vb9,$Vu),o($Vb9,$Vv),o($V89,$Vl3),o($Vc9,$Vm3),o($Vc9,$Vn3),o($Vc9,$Vo3),o($Vc9,$Vp3),{113:[1,4410]},o($Vc9,$Vu3),o($VW8,$VJ8),o($VW8,$VK8),o($VW8,$VO7),o($VW8,$VP7),{121:[1,4411],124:212,125:213,126:$VF1,128:$VG1},o($VW8,$V71),o($VW8,$V81),{20:[1,4415],22:[1,4419],23:4413,38:4412,201:4414,215:4416,216:[1,4418],217:[1,4417]},o($VW8,$VL8),o($VW8,$VM8),o($Vx9,$VA1,{95:4420}),o($VW8,$VB1,{101:4293,97:4421,103:$V6a,104:$VR,105:$VS,106:$VT}),o($Vx9,$VH1),o($Vx9,$VI1),o($Vx9,$VJ1),o($Vx9,$VK1),{102:[1,4422]},o($Vx9,$VQ1),{72:[1,4423]},o($V99,$VM2,{101:4062,97:4424,103:$V$9,104:$VR,105:$VS,106:$VT}),o($V89,$VN2),o($VW8,$VO2,{92:4425,97:4426,93:4427,101:4428,107:4430,109:4431,103:$Vaa,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VQ2,{92:4425,97:4426,93:4427,101:4428,107:4430,109:4431,103:$Vaa,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VR2,{92:4425,97:4426,93:4427,101:4428,107:4430,109:4431,103:$Vaa,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vc9,$VS2),{20:$V13,22:$V23,23:402,29:[1,4432],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4433,123:$VV2,149:$VW2,189:$VX2}),o($Vb9,$V22),o($Vb9,$Vm),o($Vb9,$Vn),o($Vb9,$Vr),o($Vb9,$Vs),o($Vb9,$Vt),o($Vb9,$Vu),o($Vb9,$Vv),o($V89,$Vl3),o($Vc9,$Vm3),o($Vc9,$Vn3),o($Vc9,$Vo3),o($Vc9,$Vp3),{113:[1,4434]},o($Vc9,$Vu3),o($VW8,$V95),{20:[1,4437],22:[1,4439],89:4435,165:[1,4440],192:4436,216:[1,4438]},o($Vv1,$Vk6),o($Vv1,$VL1),o($Vx1,$Vk6),o($Vx1,$VL1),o($Vy1,$Vk6),o($Vy1,$VL1),o($VO3,$Vk6),o($VO3,$VL1),o($VP3,$Vk6),o($VP3,$VL1),o($VQ3,$Vk6),o($VQ3,$VL1),o($V07,$VJ8),o($V07,$VK8),o($V07,$VO7),o($V07,$VP7),{121:[1,4441],124:212,125:213,126:$VF1,128:$VG1},o($V07,$V71),o($V07,$V81),{20:[1,4445],22:[1,4449],23:4443,38:4442,201:4444,215:4446,216:[1,4448],217:[1,4447]},o($V07,$VL8),o($V07,$VM8),o($VN8,$VA1,{95:4450}),o($V07,$VB1,{101:4349,97:4451,103:$V7a,104:$VR,105:$VS,106:$VT}),o($VN8,$VH1),o($VN8,$VI1),o($VN8,$VJ1),o($VN8,$VK1),{102:[1,4452]},o($VN8,$VQ1),{72:[1,4453]},o($VL7,$VM2,{101:4167,97:4454,103:$V0a,104:$VR,105:$VS,106:$VT}),o($VK7,$VN2),o($V07,$VO2,{92:4455,97:4456,93:4457,101:4458,107:4460,109:4461,103:$Vba,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VQ2,{92:4455,97:4456,93:4457,101:4458,107:4460,109:4461,103:$Vba,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($V07,$VR2,{92:4455,97:4456,93:4457,101:4458,107:4460,109:4461,103:$Vba,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VQ7,$VS2),{20:$V13,22:$V23,23:402,29:[1,4462],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4463,123:$VV2,149:$VW2,189:$VX2}),o($VN7,$V22),o($VN7,$Vm),o($VN7,$Vn),o($VN7,$Vr),o($VN7,$Vs),o($VN7,$Vt),o($VN7,$Vu),o($VN7,$Vv),o($VK7,$Vl3),o($VQ7,$Vm3),o($VQ7,$Vn3),o($VQ7,$Vo3),o($VQ7,$Vp3),{113:[1,4464]},o($VQ7,$Vu3),o($V07,$V95),{20:[1,4467],22:[1,4469],89:4465,165:[1,4470],192:4466,216:[1,4468]},o($V07,$V95),{20:[1,4473],22:[1,4475],89:4471,165:[1,4476],192:4472,216:[1,4474]},o($Vv9,$V32),o($Vv9,$V42),o($Vv9,$V52),o($VP8,$VN5),o($VP8,$VO5),{20:$V1a,22:$V2a,89:4477,165:$V3a,192:4478,216:$V4a},o($VW8,$V39),o($VH,$VI,{65:4479,75:4480,77:4481,78:4482,94:4485,96:4486,89:4488,90:4489,91:4490,80:4491,46:4492,97:4496,192:4497,93:4499,120:4500,101:4504,107:4510,109:4511,20:[1,4506],22:[1,4508],28:[1,4498],71:[1,4483],73:[1,4484],81:[1,4501],82:[1,4502],83:[1,4503],87:[1,4487],98:[1,4493],99:[1,4494],100:[1,4495],103:$Vca,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ,165:[1,4509],216:[1,4507]}),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4512,123:$VV2,149:$VW2,189:$VX2}),o($VW8,$V22),o($VW8,$Vm),o($VW8,$Vn),o($VW8,$Vr),o($VW8,$Vs),o($VW8,$Vt),o($VW8,$Vu),o($VW8,$Vv),o($VW8,$VM2,{101:4251,97:4513,103:$V5a,104:$VR,105:$VS,106:$VT}),o($Vx9,$VN2),o($Vx9,$Vl3),o($VW8,$V59),o($V89,$V44),o($Va9,$V54),o($Va9,$V64),o($Va9,$V74),{102:[1,4514]},o($Va9,$VQ1),{102:[1,4516],108:4515,110:[1,4517],111:[1,4518],112:4519,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4520]},o($Va9,$Vq4),{123:[1,4521]},{20:[1,4524],22:[1,4526],89:4522,165:[1,4527],192:4523,216:[1,4525]},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4528,123:$VV2,149:$VW2,189:$VX2}),o($VW8,$V22),o($VW8,$Vm),o($VW8,$Vn),o($VW8,$Vr),o($VW8,$Vs),o($VW8,$Vt),o($VW8,$Vu),o($VW8,$Vv),o($VW8,$VM2,{101:4293,97:4529,103:$V6a,104:$VR,105:$VS,106:$VT}),o($Vx9,$VN2),o($Vx9,$Vl3),o($VW8,$V59),o($V89,$V44),o($Va9,$V54),o($Va9,$V64),o($Va9,$V74),{102:[1,4530]},o($Va9,$VQ1),{102:[1,4532],108:4531,110:[1,4533],111:[1,4534],112:4535,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4536]},o($Va9,$Vq4),{123:[1,4537]},{20:[1,4540],22:[1,4542],89:4538,165:[1,4543],192:4539,216:[1,4541]},o($Va9,$VP5),o($Va9,$VL1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1),o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4544,123:$VV2,149:$VW2,189:$VX2}),o($V07,$V22),o($V07,$Vm),o($V07,$Vn),o($V07,$Vr),o($V07,$Vs),o($V07,$Vt),o($V07,$Vu),o($V07,$Vv),o($V07,$VM2,{101:4349,97:4545,103:$V7a,104:$VR,105:$VS,106:$VT}),o($VN8,$VN2),o($VN8,$Vl3),o($V07,$V59),o($VK7,$V44),o($VM7,$V54),o($VM7,$V64),o($VM7,$V74),{102:[1,4546]},o($VM7,$VQ1),{102:[1,4548],108:4547,110:[1,4549],111:[1,4550],112:4551,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4552]},o($VM7,$Vq4),{123:[1,4553]},{20:[1,4556],22:[1,4558],89:4554,165:[1,4559],192:4555,216:[1,4557]},o($VM7,$VP5),o($VM7,$VL1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),o($VM7,$VP5),o($VM7,$VL1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),o($VP8,$Vk6),o($VP8,$VL1),o($VW8,$VE7),o($VW8,$VF7,{76:4560,78:4561,80:4562,46:4563,120:4564,81:[1,4565],82:[1,4566],83:[1,4567],121:$VI,126:$VI,128:$VI}),o($VW8,$VG7),o($VW8,$VH7,{79:4568,75:4569,94:4570,96:4571,97:4575,101:4576,98:[1,4572],99:[1,4573],100:[1,4574],103:$Vda,104:$VR,105:$VS,106:$VT}),o($Vg,$Vh,{42:199,46:201,40:4578,45:$Vt1,81:$Vi,82:$Vj,83:$Vk}),o($VW8,$VJ7),o($V89,$VA1,{95:4579}),o($V99,$VB1,{101:4504,97:4580,103:$Vca,104:$VR,105:$VS,106:$VT}),o($Va9,$VD1,{88:4581}),o($Va9,$VD1,{88:4582}),o($Va9,$VD1,{88:4583}),o($VW8,$VE1,{107:4510,109:4511,93:4584,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vb9,$VO7),o($Vb9,$VP7),o($V89,$VH1),o($V89,$VI1),o($V89,$VJ1),o($V89,$VK1),o($Va9,$VL1),o($VM1,$VN1,{162:4585}),o($Vc9,$VP1),{121:[1,4586],124:212,125:213,126:$VF1,128:$VG1},o($Vb9,$V71),o($Vb9,$V81),{20:[1,4590],22:[1,4594],23:4588,38:4587,201:4589,215:4591,216:[1,4593],217:[1,4592]},{102:[1,4595]},o($V89,$VQ1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1),{102:[1,4597],108:4596,110:[1,4598],111:[1,4599],112:4600,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4601]},{123:[1,4602]},o($Vx9,$V44),o($Va9,$Vl3),o($Va9,$Vm3),o($Va9,$Vn3),o($Va9,$Vo3),o($Va9,$Vp3),{113:[1,4603]},o($Va9,$Vu3),o($Vb9,$V95),o($Vc9,$VP5),o($Vc9,$VL1),o($Vc9,$VR1),o($Vc9,$VS1),o($Vc9,$VT1),o($Vc9,$VU1),{123:[1,4604]},o($Vx9,$V44),o($Va9,$Vl3),o($Va9,$Vm3),o($Va9,$Vn3),o($Va9,$Vo3),o($Va9,$Vp3),{113:[1,4605]},o($Va9,$Vu3),o($Vb9,$V95),o($Vc9,$VP5),o($Vc9,$VL1),o($Vc9,$VR1),o($Vc9,$VS1),o($Vc9,$VT1),o($Vc9,$VU1),{123:[1,4606]},o($VN8,$V44),o($VM7,$Vl3),o($VM7,$Vm3),o($VM7,$Vn3),o($VM7,$Vo3),o($VM7,$Vp3),{113:[1,4607]},o($VM7,$Vu3),o($VN7,$V95),o($VQ7,$VP5),o($VQ7,$VL1),o($VQ7,$VR1),o($VQ7,$VS1),o($VQ7,$VT1),o($VQ7,$VU1),o($VW8,$VJ8),o($VW8,$VK8),o($VW8,$VO7),o($VW8,$VP7),{121:[1,4608],124:212,125:213,126:$VF1,128:$VG1},o($VW8,$V71),o($VW8,$V81),{20:[1,4612],22:[1,4616],23:4610,38:4609,201:4611,215:4613,216:[1,4615],217:[1,4614]},o($VW8,$VL8),o($VW8,$VM8),o($Vx9,$VA1,{95:4617}),o($VW8,$VB1,{101:4576,97:4618,103:$Vda,104:$VR,105:$VS,106:$VT}),o($Vx9,$VH1),o($Vx9,$VI1),o($Vx9,$VJ1),o($Vx9,$VK1),{102:[1,4619]},o($Vx9,$VQ1),{72:[1,4620]},o($V99,$VM2,{101:4504,97:4621,103:$Vca,104:$VR,105:$VS,106:$VT}),o($V89,$VN2),o($VW8,$VO2,{92:4622,97:4623,93:4624,101:4625,107:4627,109:4628,103:$Vea,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VQ2,{92:4622,97:4623,93:4624,101:4625,107:4627,109:4628,103:$Vea,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($VW8,$VR2,{92:4622,97:4623,93:4624,101:4625,107:4627,109:4628,103:$Vea,104:$VR,105:$VS,106:$VT,114:$VU,115:$VV,116:$VW,117:$VX,118:$VY,119:$VZ}),o($Vc9,$VS2),{20:$V13,22:$V23,23:402,29:[1,4629],73:$V33,83:$V43,102:$V53,110:$V63,111:$V73,112:414,163:396,164:397,165:$V83,166:399,167:400,181:403,185:$V93,197:408,198:409,199:410,202:413,205:$Va3,206:$Vb3,207:$Vc3,208:$Vd3,209:$Ve3,210:$Vf3,211:$Vg3,212:$Vh3,213:$Vi3,214:$Vj3,215:407,216:$Vk3},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4630,123:$VV2,149:$VW2,189:$VX2}),o($Vb9,$V22),o($Vb9,$Vm),o($Vb9,$Vn),o($Vb9,$Vr),o($Vb9,$Vs),o($Vb9,$Vt),o($Vb9,$Vu),o($Vb9,$Vv),o($V89,$Vl3),o($Vc9,$Vm3),o($Vc9,$Vn3),o($Vc9,$Vo3),o($Vc9,$Vp3),{113:[1,4631]},o($Vc9,$Vu3),o($VW8,$V95),{20:[1,4634],22:[1,4636],89:4632,165:[1,4637],192:4633,216:[1,4635]},o($VW8,$V95),{20:[1,4640],22:[1,4642],89:4638,165:[1,4643],192:4639,216:[1,4641]},o($V07,$V95),{20:[1,4646],22:[1,4648],89:4644,165:[1,4649],192:4645,216:[1,4647]},o($VT2,$VU2,{127:375,131:376,132:377,133:378,137:379,138:380,139:381,145:382,147:383,148:384,122:4650,123:$VV2,149:$VW2,189:$VX2}),o($VW8,$V22),o($VW8,$Vm),o($VW8,$Vn),o($VW8,$Vr),o($VW8,$Vs),o($VW8,$Vt),o($VW8,$Vu),o($VW8,$Vv),o($VW8,$VM2,{101:4576,97:4651,103:$Vda,104:$VR,105:$VS,106:$VT}),o($Vx9,$VN2),o($Vx9,$Vl3),o($VW8,$V59),o($V89,$V44),o($Va9,$V54),o($Va9,$V64),o($Va9,$V74),{102:[1,4652]},o($Va9,$VQ1),{102:[1,4654],108:4653,110:[1,4655],111:[1,4656],112:4657,207:$VV1,208:$VW1,209:$VX1,210:$VY1},{102:[1,4658]},o($Va9,$Vq4),{123:[1,4659]},{20:[1,4662],22:[1,4664],89:4660,165:[1,4665],192:4661,216:[1,4663]},o($Va9,$VP5),o($Va9,$VL1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1),o($Va9,$VP5),o($Va9,$VL1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1),o($VM7,$VP5),o($VM7,$VL1),o($VM7,$VR1),o($VM7,$VS1),o($VM7,$VT1),o($VM7,$VU1),{123:[1,4666]},o($Vx9,$V44),o($Va9,$Vl3),o($Va9,$Vm3),o($Va9,$Vn3),o($Va9,$Vo3),o($Va9,$Vp3),{113:[1,4667]},o($Va9,$Vu3),o($Vb9,$V95),o($Vc9,$VP5),o($Vc9,$VL1),o($Vc9,$VR1),o($Vc9,$VS1),o($Vc9,$VT1),o($Vc9,$VU1),o($VW8,$V95),{20:[1,4670],22:[1,4672],89:4668,165:[1,4673],192:4669,216:[1,4671]},o($Va9,$VP5),o($Va9,$VL1),o($Va9,$VR1),o($Va9,$VS1),o($Va9,$VT1),o($Va9,$VU1)],
defaultActions: {6:[2,11],32:[2,1],112:[2,121],113:[2,122],114:[2,123],119:[2,134],120:[2,135],223:[2,254],224:[2,255],225:[2,256],226:[2,257],347:[2,37],375:[2,143],376:[2,147],378:[2,149],576:[2,35],577:[2,39],614:[2,36],1123:[2,147],1125:[2,149]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: lexer.yylloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

  /*
    ShEx parser in the Jison parser generator format.
  */

  const UNBOUNDED = -1;

  const ShExUtil = __webpack_require__(4);

  // Common namespaces and entities
  const RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      RDF_TYPE  = RDF + 'type',
      RDF_FIRST = RDF + 'first',
      RDF_REST  = RDF + 'rest',
      RDF_NIL   = RDF + 'nil',
      XSD = 'http://www.w3.org/2001/XMLSchema#',
      XSD_INTEGER  = XSD + 'integer',
      XSD_DECIMAL  = XSD + 'decimal',
      XSD_FLOAT   = XSD + 'float',
      XSD_DOUBLE   = XSD + 'double',
      XSD_BOOLEAN  = XSD + 'boolean',
      XSD_TRUE =  '"true"^^'  + XSD_BOOLEAN,
      XSD_FALSE = '"false"^^' + XSD_BOOLEAN,
      XSD_PATTERN        = XSD + 'pattern',
      XSD_MININCLUSIVE   = XSD + 'minInclusive',
      XSD_MINEXCLUSIVE   = XSD + 'minExclusive',
      XSD_MAXINCLUSIVE   = XSD + 'maxInclusive',
      XSD_MAXEXCLUSIVE   = XSD + 'maxExclusive',
      XSD_LENGTH         = XSD + 'length',
      XSD_MINLENGTH      = XSD + 'minLength',
      XSD_MAXLENGTH      = XSD + 'maxLength',
      XSD_TOTALDIGITS    = XSD + 'totalDigits',
      XSD_FRACTIONDIGITS = XSD + 'fractionDigits';

  const numericDatatypes = [
      XSD + "integer",
      XSD + "decimal",
      XSD + "float",
      XSD + "double",
      XSD + "string",
      XSD + "boolean",
      XSD + "dateTime",
      XSD + "nonPositiveInteger",
      XSD + "negativeInteger",
      XSD + "long",
      XSD + "int",
      XSD + "short",
      XSD + "byte",
      XSD + "nonNegativeInteger",
      XSD + "unsignedLong",
      XSD + "unsignedInt",
      XSD + "unsignedShort",
      XSD + "unsignedByte",
      XSD + "positiveInteger"
  ];

  const absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  const numericFacets = ["mininclusive", "minexclusive",
                       "maxinclusive", "maxexclusive"];

  // Returns a lowercase version of the given string
  function lowercase(string) {
    return string.toLowerCase();
  }

  // Appends the item to the array and returns the array
  function appendTo(array, item) {
    return array.push(item), array;
  }

  // Appends the items to the array and returns the array
  function appendAllTo(array, items) {
    return array.push.apply(array, items), array;
  }

  // Extends a base object with properties of other objects
  function extend(base) {
    if (!base) base = {};
    for (let i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
      for (let name in arg)
        base[name] = arg[name];
    return base;
  }

  // Creates an array that contains all items of the given arrays
  function unionAll() {
    let union = [];
    for (let i = 0, l = arguments.length; i < l; i++)
      union = union.concat.apply(union, arguments[i]);
    return union;
  }

  // N3.js:lib/N3Parser.js<0.4.5>:58 with
  //   s/this\./Parser./g
  // ### `_setBase` sets the base IRI to resolve relative IRIs.
  Parser._setBase = function (baseIRI) {
    if (!baseIRI)
      baseIRI = null;

    // baseIRI '#' check disabled to allow -x 'data:text/shex,...#'
    // else if (baseIRI.indexOf('#') >= 0)
    //   throw new Error('Invalid base IRI ' + baseIRI);

    // Set base IRI and its components
    if (Parser._base = baseIRI) {
      Parser._basePath   = baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(schemeAuthority);
      Parser._baseRoot   = baseIRI[0];
      Parser._baseScheme = baseIRI[1];
    }
  }

  // N3.js:lib/N3Parser.js<0.4.5>:576 with
  //   s/this\./Parser./g
  //   s/token/iri/
  // ### `_resolveIRI` resolves a relative IRI token against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative.
  function _resolveIRI (iri) {
    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return Parser._base;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return Parser._base + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return Parser._base.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? Parser._baseScheme : Parser._baseRoot) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(Parser._basePath + iri);
    }
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986.
  function _removeDotSegments (iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!dotSegments.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    const length = iri.length;
    let result = '', i = -1, pathStart = -1, next = '/', segmentStart = 0;

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return result + '/' + iri.substr(i + 1);
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  Parser._setTermResolver = function (res) {
    Parser._termResolver = res;
  }

  // Creates an expression with the given type and attributes
  function expression(expr, attr) {
    const expression = { expression: expr };
    if (attr)
      for (let a in attr)
        expression[a] = attr[a];
    return expression;
  }

  // Creates a path with the given type and items
  function path(type, items) {
    return { type: 'path', pathType: type, items: items };
  }

  // Creates a literal with the given value and type
  function createLiteral(value, type) {
    return { value: value, type: type };
  }

  // Creates a new blank node identifier
  function blank() {
    return '_:b' + blankId++;
  };
  let blankId = 0;
  Parser._resetBlanks = function () { blankId = 0; }
  Parser.reset = function () {
    Parser._prefixes = Parser._imports = Parser._sourceMap = Parser._termResolver = Parser.shapes = Parser.productions = Parser.start = Parser.startActs = null; // Reset state.
    Parser._base = Parser._baseIRI = Parser._baseIRIPath = Parser._baseIRIRoot = null;
  }
  let _fileName; // for debugging
  Parser._setFileName = function (fn) { _fileName = fn; }

  // Regular expression and replacement strings to escape strings
  const stringEscapeReplacements = { '\\': '\\', "'": "'", '"': '"',
                                   't': '\t', 'b': '\b', 'n': '\n', 'r': '\r', 'f': '\f' },
      semactEscapeReplacements = { '\\': '\\', '%': '%' },
      pnameEscapeReplacements = {
        '\\': '\\', "'": "'", '"': '"',
        'n': '\n', 'r': '\r', 't': '\t', 'f': '\f', 'b': '\b',
        '_': '_', '~': '~', '.': '.', '-': '-', '!': '!', '$': '$', '&': '&',
        '(': '(', ')': ')', '*': '*', '+': '+', ',': ',', ';': ';', '=': '=',
        '/': '/', '?': '?', '#': '#', '@': '@', '%': '%',
      };


  // Translates string escape codes in the string into their textual equivalent
  function unescapeString(string, trimLength) {
    string = string.substring(trimLength, string.length - trimLength);
    return { value: ShExUtil.unescapeText(string, stringEscapeReplacements) };
  }

  function unescapeLangString(string, trimLength) {
    const at = string.lastIndexOf("@");
    const lang = string.substr(at);
    string = string.substr(0, at);
    const u = unescapeString(string, trimLength);
    return extend(u, { language: lowercase(lang.substr(1)) });
  }

  // Translates regular expression escape codes in the string into their textual equivalent
  function unescapeRegexp (regexp) {
    const end = regexp.lastIndexOf("/");
    let s = regexp.substr(1, end-1);
    const regexpEscapeReplacements = {
      '.': "\\.", '\\': "\\\\", '?': "\\?", '*': "\\*", '+': "\\+",
      '{': "\\{", '}': "\\}", '(': "\\(", ')': "\\)", '|': "\\|",
      '^': "\\^", '$': "\\$", '[': "\\[", ']': "\\]", '/': "\\/",
      't': '\\t', 'n': '\\n', 'r': '\\r', '-': "\\-", '/': '/'
    };
    s = ShExUtil.unescapeText(s, regexpEscapeReplacements)
    const ret = {
      pattern: s
    };
    if (regexp.length > end+1)
      ret.flags = regexp.substr(end+1);
    return ret;
  }

  // Convenience function to return object with p1 key, value p2
  function keyValObject(key, val) {
    const ret = {};
    ret[key] = val;
    return ret;
  }

  // Return object with p1 key, p2 string value
  function unescapeSemanticAction(key, string) {
    string = string.substring(1, string.length - 2);
    return {
      type: "SemAct",
      name: key,
      code: ShExUtil.unescapeText(string, semactEscapeReplacements)
    };
  }

  function error (e, yy) {
    const hash = {
      text: yy.lexer.match,
      // token: this.terminals_[symbol] || symbol,
      line: yy.lexer.yylineno,
      loc: yy.lexer.yylloc,
      // expected: expected
      pos: yy.lexer.showPosition()
    }
    e.hash = hash;
    if (Parser.recoverable) {
      Parser.recoverable(e)
    } else {
      throw e;
      Parser.reset();
    }
  }

  // Expand declared prefix or throw Error
  function expandPrefix (prefix, yy) {
    if (!(prefix in Parser._prefixes))
      error(new Error('Parse error; unknown prefix "' + prefix + ':"'), yy);
    return Parser._prefixes[prefix];
  }

  // Add a shape to the map
  function addShape (label, shape, yy) {
    if (shape === EmptyShape)
      shape = { type: "Shape" };
    if (Parser.productions && label in Parser.productions)
      error(new Error("Structural error: "+label+" is a triple expression"), yy);
    if (!Parser.shapes)
      Parser.shapes = new Map();
    if (label in Parser.shapes) {
      if (Parser.options.duplicateShape === "replace")
        Parser.shapes[label] = shape;
      else if (Parser.options.duplicateShape !== "ignore")
        error(new Error("Parse error: "+label+" already defined"), yy);
    } else {
      Parser.shapes[label] = Object.assign({id: label}, shape);
    }
  }

  // Add a production to the map
  function addProduction (label, production, yy) {
    if (Parser.shapes && label in Parser.shapes)
      error(new Error("Structural error: "+label+" is a shape expression"), yy);
    if (!Parser.productions)
      Parser.productions = new Map();
    if (label in Parser.productions) {
      if (Parser.options.duplicateShape === "replace")
        Parser.productions[label] = production;
      else if (Parser.options.duplicateShape !== "ignore")
        error(new Error("Parse error: "+label+" already defined"), yy);
    } else
      Parser.productions[label] = production;
  }

  function addSourceMap (obj, yy) {
    if (!Parser._sourceMap)
      Parser._sourceMap = new Map();
    let list = Parser._sourceMap.get(obj)
    if (!list)
      Parser._sourceMap.set(obj, list = []);
    list.push(yy.lexer.yylloc);
    return obj;
  }

  // shapeJunction judiciously takes a shapeAtom and an optional list of con/disjuncts.
  // No created Shape{And,Or,Not} will have a `nested` shapeExpr.
  // Don't nonest arguments to shapeJunction.
  // shapeAtom emits `nested` so nonest every argument that can be a shapeAtom, i.e.
  //   shapeAtom, inlineShapeAtom, shapeAtomNoRef
  //   {,inline}shape{And,Or,Not}
  //   this does NOT include shapeOrRef or nodeConstraint.
  function shapeJunction (type, shapeAtom, juncts) {
    if (juncts.length === 0) {
      return nonest(shapeAtom);
    } else if (shapeAtom.type === type && !shapeAtom.nested) {
      nonest(shapeAtom).shapeExprs = nonest(shapeAtom).shapeExprs.concat(juncts);
      return shapeAtom;
    } else {
      return { type: type, shapeExprs: [nonest(shapeAtom)].concat(juncts) };
    }
  }

  // strip out .nested attribute
  function nonest (shapeAtom) {
    delete shapeAtom.nested;
    return shapeAtom;
  }

  const EmptyObject = {  };
  const EmptyShape = { type: "Shape" };
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
  const iBacktick = yy_.yytext.indexOf('`');
  let prefix = null;
  if (iBacktick > 0) {
    prefix = yy_.yytext.substr(0, iBacktick-1);
    yy_.yytext = yy_.yytext.substr(iBacktick);
  }
  yy_.yytext = { prefix: prefix, label: unescapeString(yy_.yytext, 1) };
  return 165;

break;
case 1:/**/
break;
case 2:return 81;
break;
case 3:return 82;
break;
case 4: yy_.yytext = yy_.yytext.substr(1); return 185; 
break;
case 5:return 83;
break;
case 6:return 216;
break;
case 7:return 160;
break;
case 8:return 111;
break;
case 9:return 110;
break;
case 10:return 102;
break;
case 11:return 'ANON';
break;
case 12:return 20;
break;
case 13:return 22;
break;
case 14:return 200;
break;
case 15:return 103;
break;
case 16:return 217;
break;
case 17:return 196;
break;
case 18:return 212;
break;
case 19:return 214;
break;
case 20:return 211;
break;
case 21:return 213;
break;
case 22:return 208;
break;
case 23:return 210;
break;
case 24:return 207;
break;
case 25:return 209;
break;
case 26:return 19;
break;
case 27:return 21;
break;
case 28:return 24;
break;
case 29:return 25;
break;
case 30:return 32;
break;
case 31:return 41;
break;
case 32:return 126;
break;
case 33:return 128;
break;
case 34:return 87;
break;
case 35:return 99;
break;
case 36:return 98;
break;
case 37:return 100;
break;
case 38:return 55;
break;
case 39:return 53;
break;
case 40:return 45;
break;
case 41:return 114;
break;
case 42:return 115;
break;
case 43:return 116;
break;
case 44:return 117;
break;
case 45:return 104;
break;
case 46:return 105;
break;
case 47:return 106;
break;
case 48:return 118;
break;
case 49:return 119;
break;
case 50:return 33;
break;
case 51:return 190;
break;
case 52:return 121;
break;
case 53:return 123;
break;
case 54:return 189;
break;
case 55:return '||';
break;
case 56:return 136;
break;
case 57:return 141;
break;
case 58:return 71;
break;
case 59:return 72;
break;
case 60:return 28;
break;
case 61:return 29;
break;
case 62:return 149;
break;
case 63:return '!';
break;
case 64:return 113;
break;
case 65:return 161;
break;
case 66:return 73;
break;
case 67:return 178;
break;
case 68:return 142;
break;
case 69:return 157;
break;
case 70:return 158;
break;
case 71:return 159;
break;
case 72:return 179;
break;
case 73:return 194;
break;
case 74:return 205;
break;
case 75:return 206;
break;
case 76:return 7;
break;
case 77:return 'unexpected word "'+yy_.yytext+'"';
break;
case 78:return 'invalid character '+yy_.yytext;
break;
}
},
rules: [/^(?:(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)?`([^\u0060\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*`))/,/^(?:\s+|(#[^\u000a\u000d]*|\/\*([^*]|\*([^/]|\\\/))*\*\/))/,/^(?:(@(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*))))/,/^(?:(@((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)))/,/^(?:(@([A-Za-z])+((-([0-9A-Za-z])+))*))/,/^(?:@)/,/^(?:(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*)))/,/^(?:(\{((([+-])?([0-9])+))((,(((([+-])?([0-9])+))|\*)?))?\}))/,/^(?:(([+-])?((([0-9])+\.([0-9])*(([Ee]([+-])?([0-9])+)))|((\.)?([0-9])+(([Ee]([+-])?([0-9])+))))))/,/^(?:(([+-])?([0-9])*\.([0-9])+))/,/^(?:(([+-])?([0-9])+))/,/^(?:{ANON})/,/^(?:(<([^\u0000-\u0020<>\"{}|^`\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*>))/,/^(?:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:))/,/^(?:a\b)/,/^(?:(\/([^\u002f\u005C\u000A\u000D]|\\[nrt\\|.?*+(){}$\u002D\u005B\u005D\u005E/]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))+\/[smix]*))/,/^(?:(_:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|[0-9])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?))/,/^(?:(\{([^%\\]|\\[%\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*%\}))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"))/,/^(?:([Bb][Aa][Ss][Ee]))/,/^(?:([Pp][Rr][Ee][Ff][Ii][Xx]))/,/^(?:([iI][mM][pP][oO][rR][tT]))/,/^(?:([Ll][Aa][Bb][Ee][Ll]))/,/^(?:([sS][tT][aA][rR][tT]))/,/^(?:([eE][xX][tT][eE][rR][nN][aA][lL]))/,/^(?:([Cc][Ll][Oo][Ss][Ee][Dd]))/,/^(?:([Ee][Xx][Tt][Rr][Aa]))/,/^(?:([Ll][Ii][Tt][Ee][Rr][Aa][Ll]))/,/^(?:([Bb][Nn][Oo][Dd][Ee]))/,/^(?:([Ii][Rr][Ii]))/,/^(?:([Nn][Oo][Nn][Ll][Ii][Tt][Ee][Rr][Aa][Ll]))/,/^(?:([Aa][Nn][Dd]))/,/^(?:([Oo][Rr]))/,/^(?:([No][Oo][Tt]))/,/^(?:([Mm][Ii][Nn][Ii][Nn][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Ii][Nn][Ee][Xx][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Aa][Xx][Ii][Nn][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Aa][Xx][Ee][Xx][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Mm][Ii][Nn][Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Mm][Aa][Xx][Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Tt][Oo][Tt][Aa][Ll][Dd][Ii][Gg][Ii][Tt][Ss]))/,/^(?:([Ff][Rr][Aa][Cc][Tt][Ii][Oo][Nn][Dd][Ii][Gg][Ii][Tt][Ss]))/,/^(?:=)/,/^(?:\/\/)/,/^(?:\{)/,/^(?:\})/,/^(?:&)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:,)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\$)/,/^(?:!)/,/^(?:\^\^)/,/^(?:\^)/,/^(?:\.)/,/^(?:~)/,/^(?:;)/,/^(?:\*)/,/^(?:\+)/,/^(?:\?)/,/^(?:-)/,/^(?:%)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:$)/,/^(?:[a-zA-Z0-9_-]+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = ShExJison;
exports.Parser = ShExJison.Parser;
exports.parse = function () { return ShExJison.parse.apply(ShExJison, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(2).readFileSync(__webpack_require__(1).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(9)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var pathModule = __webpack_require__(1);
var isWindows = process.platform === 'win32';
var fs = __webpack_require__(2);

// JavaScript implementation of realpath, ported from node pre-v6

var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);

function rethrow() {
  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
  // is fairly slow to generate.
  var callback;
  if (DEBUG) {
    var backtrace = new Error;
    callback = debugCallback;
  } else
    callback = missingCallback;

  return callback;

  function debugCallback(err) {
    if (err) {
      backtrace.message = err.message;
      err = backtrace;
      missingCallback(err);
    }
  }

  function missingCallback(err) {
    if (err) {
      if (process.throwDeprecation)
        throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
      else if (!process.noDeprecation) {
        var msg = 'fs: missing callback ' + (err.stack || err.message);
        if (process.traceDeprecation)
          console.trace(msg);
        else
          console.error(msg);
      }
    }
  }
}

function maybeCallback(cb) {
  return typeof cb === 'function' ? cb : rethrow();
}

var normalize = pathModule.normalize;

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
if (isWindows) {
  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
}

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
if (isWindows) {
  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
  var splitRootRe = /^[\/]*/;
}

exports.realpathSync = function realpathSync(p, cache) {
  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return cache[p];
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstatSync(base);
      knownHard[base] = true;
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  // NB: p.length changes.
  while (pos < p.length) {
    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      continue;
    }

    var resolvedLink;
    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // some known symbolic link.  no need to stat again.
      resolvedLink = cache[base];
    } else {
      var stat = fs.lstatSync(base);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache) cache[base] = base;
        continue;
      }

      // read the link if it wasn't read before
      // dev/ino always return 0 on windows, so skip the check.
      var linkTarget = null;
      if (!isWindows) {
        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          linkTarget = seenLinks[id];
        }
      }
      if (linkTarget === null) {
        fs.statSync(base);
        linkTarget = fs.readlinkSync(base);
      }
      resolvedLink = pathModule.resolve(previous, linkTarget);
      // track this, if given a cache.
      if (cache) cache[base] = resolvedLink;
      if (!isWindows) seenLinks[id] = linkTarget;
    }

    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }

  if (cache) cache[original] = p;

  return p;
};


exports.realpath = function realpath(p, cache, cb) {
  if (typeof cb !== 'function') {
    cb = maybeCallback(cache);
    cache = null;
  }

  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return process.nextTick(cb.bind(null, null, cache[p]));
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstat(base, function(err) {
        if (err) return cb(err);
        knownHard[base] = true;
        LOOP();
      });
    } else {
      process.nextTick(LOOP);
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  function LOOP() {
    // stop if scanned past end of path
    if (pos >= p.length) {
      if (cache) cache[original] = p;
      return cb(null, p);
    }

    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      return process.nextTick(LOOP);
    }

    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // known symbolic link.  no need to stat again.
      return gotResolvedLink(cache[base]);
    }

    return fs.lstat(base, gotStat);
  }

  function gotStat(err, stat) {
    if (err) return cb(err);

    // if not a symlink, skip to the next path part
    if (!stat.isSymbolicLink()) {
      knownHard[base] = true;
      if (cache) cache[base] = base;
      return process.nextTick(LOOP);
    }

    // stat & read the link if not read before
    // call gotTarget as soon as the link target is known
    // dev/ino always return 0 on windows, so skip the check.
    if (!isWindows) {
      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
      if (seenLinks.hasOwnProperty(id)) {
        return gotTarget(null, seenLinks[id], base);
      }
    }
    fs.stat(base, function(err) {
      if (err) return cb(err);

      fs.readlink(base, function(err, target) {
        if (!isWindows) seenLinks[id] = target;
        gotTarget(err, target);
      });
    });
  }

  function gotTarget(err, target, base) {
    if (err) return cb(err);

    var resolvedLink = pathModule.resolve(previous, target);
    if (cache) cache[base] = resolvedLink;
    gotResolvedLink(resolvedLink);
  }

  function gotResolvedLink(resolvedLink) {
    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(30);
var balanced = __webpack_require__(31);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = globSync
globSync.GlobSync = GlobSync

var fs = __webpack_require__(2)
var rp = __webpack_require__(14)
var minimatch = __webpack_require__(5)
var Minimatch = minimatch.Minimatch
var Glob = __webpack_require__(13).Glob
var util = __webpack_require__(6)
var path = __webpack_require__(1)
var assert = __webpack_require__(15)
var isAbsolute = __webpack_require__(7)
var common = __webpack_require__(16)
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var setopts = common.setopts
var ownProp = common.ownProp
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

function globSync (pattern, options) {
  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  return new GlobSync(pattern, options).found
}

function GlobSync (pattern, options) {
  if (!pattern)
    throw new Error('must provide pattern')

  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  if (!(this instanceof GlobSync))
    return new GlobSync(pattern, options)

  setopts(this, pattern, options)

  if (this.noprocess)
    return this

  var n = this.minimatch.set.length
  this.matches = new Array(n)
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false)
  }
  this._finish()
}

GlobSync.prototype._finish = function () {
  assert(this instanceof GlobSync)
  if (this.realpath) {
    var self = this
    this.matches.forEach(function (matchset, index) {
      var set = self.matches[index] = Object.create(null)
      for (var p in matchset) {
        try {
          p = self._makeAbs(p)
          var real = rp.realpathSync(p, self.realpathCache)
          set[real] = true
        } catch (er) {
          if (er.syscall === 'stat')
            set[self._makeAbs(p)] = true
          else
            throw er
        }
      }
    })
  }
  common.finish(this)
}


GlobSync.prototype._process = function (pattern, index, inGlobStar) {
  assert(this instanceof GlobSync)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // See if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip processing
  if (childrenIgnored(this, read))
    return

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar)
}


GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
  var entries = this._readdir(abs, inGlobStar)

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix.slice(-1) !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix)
      newPattern = [prefix, e]
    else
      newPattern = [e]
    this._process(newPattern.concat(remain), index, inGlobStar)
  }
}


GlobSync.prototype._emitMatch = function (index, e) {
  if (isIgnored(this, e))
    return

  var abs = this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute) {
    e = abs
  }

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  if (this.stat)
    this._stat(e)
}


GlobSync.prototype._readdirInGlobStar = function (abs) {
  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false)

  var entries
  var lstat
  var stat
  try {
    lstat = fs.lstatSync(abs)
  } catch (er) {
    if (er.code === 'ENOENT') {
      // lstat failed, doesn't exist
      return null
    }
  }

  var isSym = lstat && lstat.isSymbolicLink()
  this.symlinks[abs] = isSym

  // If it's not a symlink or a dir, then it's definitely a regular file.
  // don't bother doing a readdir in that case.
  if (!isSym && lstat && !lstat.isDirectory())
    this.cache[abs] = 'FILE'
  else
    entries = this._readdir(abs, false)

  return entries
}

GlobSync.prototype._readdir = function (abs, inGlobStar) {
  var entries

  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return null

    if (Array.isArray(c))
      return c
  }

  try {
    return this._readdirEntries(abs, fs.readdirSync(abs))
  } catch (er) {
    this._readdirError(abs, er)
    return null
  }
}

GlobSync.prototype._readdirEntries = function (abs, entries) {
  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries

  // mark and cache dir-ness
  return entries
}

GlobSync.prototype._readdirError = function (f, er) {
  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        throw error
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict)
        throw er
      if (!this.silent)
        console.error('glob error', er)
      break
  }
}

GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {

  var entries = this._readdir(abs, inGlobStar)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false)

  var len = entries.length
  var isSym = this.symlinks[abs]

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true)
  }
}

GlobSync.prototype._processSimple = function (prefix, index) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var exists = this._stat(prefix)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
}

// Returns either 'DIR', 'FILE', or false
GlobSync.prototype._stat = function (f) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return false

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return c

    if (needDir && c === 'FILE')
      return false

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (!stat) {
    var lstat
    try {
      lstat = fs.lstatSync(abs)
    } catch (er) {
      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
        this.statCache[abs] = false
        return false
      }
    }

    if (lstat && lstat.isSymbolicLink()) {
      try {
        stat = fs.statSync(abs)
      } catch (er) {
        stat = lstat
      }
    } else {
      stat = lstat
    }
  }

  this.statCache[abs] = stat

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'

  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return false

  return c
}

GlobSync.prototype._mark = function (p) {
  return common.mark(this, p)
}

GlobSync.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var wrappy = __webpack_require__(17)
var reqs = Object.create(null)
var once = __webpack_require__(18)

module.exports = wrappy(inflight)

function inflight (key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb)
    return null
  } else {
    reqs[key] = [cb]
    return makeres(key)
  }
}

function makeres (key) {
  return once(function RES () {
    var cbs = reqs[key]
    var len = cbs.length
    var args = slice(arguments)

    // XXX It's somewhat ambiguous whether a new callback added in this
    // pass should be queued for later execution if something in the
    // list of callbacks throws, or if it should just be discarded.
    // However, it's such an edge case that it hardly matters, and either
    // choice is likely as surprising as the other.
    // As it happens, we do go ahead and schedule it for later execution.
    try {
      for (var i = 0; i < len; i++) {
        cbs[i].apply(null, args)
      }
    } finally {
      if (cbs.length > len) {
        // added more in the interim.
        // de-zalgo, just in case, but don't call again.
        cbs.splice(0, len)
        process.nextTick(function () {
          RES.apply(null, args)
        })
      } else {
        delete reqs[key]
      }
    }
  })
}

function slice (args) {
  var length = args.length
  var array = []

  for (var i = 0; i < length; i++) array[i] = args[i]
  return array
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 40;

/***/ })
/******/ ]);