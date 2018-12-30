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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13);

var assertThisInitialized = __webpack_require__(14);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(8);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(4);

var setPrototypeOf = __webpack_require__(8);

var isNativeFunction = __webpack_require__(15);

var construct = __webpack_require__(16);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (window.metalpic == null) {
  window.metalpic = {};
}

metalpic.TOKEN_HEADER = "Metalpic-Auth-Token";

metalpic.createHeaders = function () {
  var headers = {};
  headers[metalpic.TOKEN_HEADER] = localStorage.token;
  return headers;
};

metalpic.addApplicationJsonHeaders = function (headers) {
  if (headers == null) {
    headers = {};
  }

  headers["Content-Type"] = "application/json; charset=utf-8";
  return headers;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.utils = {};

utils.isString = function (s) {
  return typeof s === 'string' || s instanceof String;
};

utils.stringNullOrEmpty = function (s) {
  if (s == null) {
    return true;
  }

  if (!utils.isString(s)) {
    return true;
  }

  if (s == "") {
    return true;
  }

  return false;
};

utils.isBot = function () {
  return true;
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
}; // elem: HTMLElement, the element that should be made clickable
// destination: string, destination router string
// parent: the parent element of the component, which is used to dispatch the event


utils.addRouterLinkToElement = function (elem, destination, parent) {
  if (utils.isBot()) {
    elem.href = "/" + destination;
  } else {
    elem.addEventListener("click", function (event) {
      event.stopPropagation();
      var e = new Event("metalpic-routechange");
      e.newRoute = destination;
      parent.dispatchEvent(e);
    });
  }
}; // Date to string
// in yyyy. MM. dd format


utils.dateToString = function (d) {
  return d.toLocaleDateString('ko-KR');
}; // From https://stackoverflow.com/a/9756789


utils.quoteattr = function (s, preserveCR) {
  preserveCR = preserveCR ? '&#13;' : '\n';
  return ('' + s).
  /* Forces the conversion to string. */
  replace(/&/g, '&amp;')
  /* This MUST be the 1st replacement. */
  .replace(/'/g, '&apos;')
  /* The 4 other predefined entities, required. */
  .replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  /*
  You may add other replacements here for HTML only 
  (but it's not necessary).
  Or for XML, only if the named entities are defined in its DTD.
  */
  .replace(/\r\n/g, preserveCR)
  /* Must be before the next replacement. */
  .replace(/[\r\n]/g, preserveCR);
  ;
};

utils.sleep = function (duration) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(12);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(8);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/lib/metalpic.js
var lib_metalpic = __webpack_require__(9);

// EXTERNAL MODULE: ./src/lib/util.js
var util = __webpack_require__(10);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(7);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/lib/style-collector.js





var style_collector_StyleCollector =
/*#__PURE__*/
function () {
  function StyleCollector() {
    classCallCheck_default()(this, StyleCollector);

    this.alreadyRegistered = new Set(); // Set<string>

    this.styles = document.createElement("div");
    this.addToDom();
  }

  createClass_default()(StyleCollector, [{
    key: "addToDom",
    value: function () {
      var _addToDom = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var body;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(document.body == null)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return utils.sleep(10);

              case 3:
                _context.next = 0;
                break;

              case 5:
                body = document.body;

                if (body.firstChild) {
                  // Add before the first child
                  body.insertBefore(this.styles, body.firstChild);
                } else {
                  // Insert
                  body.appendChild(this.styles);
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addToDom() {
        return _addToDom.apply(this, arguments);
      }

      return addToDom;
    }() // name: string, name of the element registering the style
    // value: string, DOM string like <style></style>

  }, {
    key: "register",
    value: function register(name, value) {
      if (this.alreadyRegistered.has(name)) {
        return;
      }

      this.alreadyRegistered.add(name);
      this.styles.innerHTML += value;
    }
  }]);

  return StyleCollector;
}();

var metalpicStyleCollector = new style_collector_StyleCollector();

// CONCATENATED MODULE: ./src/elements/album.js









console.info("Loading");
window.customElements.define("metalpic-album",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  // Inputs:
  // - routepath: string route path section, without the route name
  function _class() {
    var _this;

    classCallCheck_default()(this, _class);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
    _this.albumName = null;
    _this.page = 0;
    _this.pictures = null; // {pictures: [{id, name}]}

    _this.picturesSerialized = null;
    _this.loaded = true; // set to false when component is unloaded

    return _this;
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("album.js", "\n            <style>\n                .metalpic-album-content-title {\n                    font-size: 22px;\n                }\n\n                .metalpic-album-content-container {\n                    display: flex;\n                    flex-direction: column;\n                    flex-wrap: nowrap;\n                    justify-content: flex-start;\n                    align-items: center;\n                }\n\n                .metalpic-album-content-picture {\n                    max-width: 100%;\n                }\n            </style>\n            <div data-body class=\"metalpic-album-content-container\">\n            </div>\n        ");
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.loaded = false;
      console.info("Disconnect");
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name == "routepath") {
        this.routepath = newValue;
      }
    }
  }, {
    key: "requestAlbumData",
    value: function () {
      var _requestAlbumData = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var headers, response, responseObj;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.info("Requesting album data " + this.albumName);
                headers = metalpic.createHeaders();
                headers["Content-Type"] = "application/json; charset=utf-8";
                _context.next = 5;
                return fetch("/api/album", {
                  method: "POST",
                  body: JSON.stringify({
                    album: this.albumName,
                    page: this.page
                  }),
                  headers: headers
                });

              case 5:
                response = _context.sent;

                if (!(response.status == 403)) {
                  _context.next = 9;
                  break;
                }

                this.renderForbidden();
                return _context.abrupt("return");

              case 9:
                _context.next = 11;
                return response.json();

              case 11:
                responseObj = _context.sent;
                this.pictures = responseObj;
                this.render();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestAlbumData() {
        return _requestAlbumData.apply(this, arguments);
      }

      return requestAlbumData;
    }()
  }, {
    key: "downloadPictures",
    value: function downloadPictures(picturesDiv) {
      var _this2 = this;

      var jobsQueue = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.pictures.pictures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pic = _step.value;
          jobsQueue.push(pic);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var downloader =
      /*#__PURE__*/
      function () {
        var _ref = asyncToGenerator_default()(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee2() {
          var pic, div;
          return regenerator_default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(jobsQueue.length > 0)) {
                    _context2.next = 11;
                    break;
                  }

                  if (_this2.loaded) {
                    _context2.next = 4;
                    break;
                  }

                  console.info("Unloaded, stopping download");
                  return _context2.abrupt("return");

                case 4:
                  pic = jobsQueue.shift();
                  div = document.createElement("metalpic-picture-preview");
                  div.setAttribute("picid", pic.id);
                  div.classList.add("metalpic-album-content-picture");
                  picturesDiv.appendChild(div);
                  _context2.next = 0;
                  break;

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function downloader() {
          return _ref.apply(this, arguments);
        };
      }();

      var DOWNLOAD_CONCURRENCY = 2;

      for (var i = 0; i < DOWNLOAD_CONCURRENCY; i++) {
        downloader();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "";
      var body = document.createElement("div");
      body.classList.add("metalpic-album-content-container");
      this.appendChild(body);

      if (this.pictures == null) {
        body.innerHTML = "\n                <p>Loading...</p>\n            ";
      } else {
        var currentSerialized = JSON.stringify(this.pictures);

        if (currentSerialized == this.picturesSerialized) {
          // Skip
          return;
        }

        this.picturesSerialized = currentSerialized;
        body.innerHTML = "\n                <div data-albumname class=\"metalpic-album-content-title\"></div>\n\n            "; // Add album name

        this.querySelector("[data-albumname]").innerText = this.albumName;
        document.title = "metalpic - " + this.albumName; // Add pictures

        var picturesDiv = document.createElement("div");
        picturesDiv.classList.add("metalpic-album-content-container");
        body.appendChild(picturesDiv);
        this.downloadPictures(picturesDiv); // No more pictures button

        if (this.pictures == null || this.pictures.pictures.length == 0) {
          var div = document.createElement("div");
          div.innerText = "No pictures";
          body.appendChild(div);
        } // Previous button


        if (this.page > 0) {
          var prevButton = document.createElement("a");
          prevButton.innerText = "Previous page";
          utils.addRouterLinkToElement(prevButton, "metalpic-album/".concat(encodeURIComponent(this.albumName), "/").concat(encodeURIComponent("" + (this.page - 1))), this);
          body.appendChild(prevButton);
        } // Next button


        if (!(this.pictures == null || this.pictures.pictures.length == 0)) {
          var nextButton = document.createElement("a");
          nextButton.innerText = "Next page";
          utils.addRouterLinkToElement(nextButton, "metalpic-album/".concat(encodeURIComponent(this.albumName), "/").concat(encodeURIComponent("" + (this.page + 1))), this);
          body.appendChild(nextButton);
        }
      }
    }
  }, {
    key: "renderForbidden",
    value: function renderForbidden() {
      var body = this.querySelector("[data-body]");
      body.innerHTML = "\n            <p>Forbidden</p>\n        ";
    }
  }, {
    key: "routepath",
    set: function set(routepath) {
      var routepathSplit = routepath.split("/");
      this.albumName = decodeURIComponent(routepathSplit[0]);

      if (routepathSplit[1] != null) {
        this.page = parseInt(routepathSplit[1]);
      } else {
        this.page = 0;
      }

      this.requestAlbumData();
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["routepath"];
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/elements/control-panel-album.js









console.info("Loading");
window.customElements.define("metalpic-control-panel-album",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  // Inputs:
  // - album: {name, public, created} object
  // Output:
  // - event control-panel-album-updated
  function _class() {
    var _this;

    classCallCheck_default()(this, _class);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
    _this.album = null;
    return _this;
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("control-panel-album.js", "\n            <style>\n                .metalpic-control-panel-album-hcontainer {\n                    display: flex;\n                    flex-direction: row;\n                    flex-wrap: nowrap;\n                    justify-content: space-between;\n                    align-items: center;\n                }\n\n                .metalpic-control-panel-album-item {\n                    flex: 0 0 auto;\n                    padding: 10px;\n                }\n\n                .metalpic-control-panel-album-name {\n                    flex-grow: 1;\n                    flex-shrink: 0;\n                    padding: 10px;\n                }\n\n                .metalpic-control-panel-album-button {\n                    cursor: pointer;\n                }\n            </style>\n        ");
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, newValue) {
      if (name == "album") {
        this.album = JSON.parse(newValue);
        this.render();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.innerHTML = '';
      var body = document.createElement("div");
      this.appendChild(body);
      var container = document.createElement("div");
      body.appendChild(container);
      container.classList.add("metalpic-control-panel-album-hcontainer");
      var albumNameElem = document.createElement("div");
      container.appendChild(albumNameElem);
      albumNameElem.innerText = this.album.name;
      albumNameElem.classList.add("metalpic-control-panel-album-name");
      var albumVisibilityElem = document.createElement("div");
      container.appendChild(albumVisibilityElem);
      albumVisibilityElem.innerText = this.album.public ? "Public" : "Private";
      albumVisibilityElem.classList.add("metalpic-control-panel-album-item");
      var albumVisibilityButton = document.createElement("div");
      container.appendChild(albumVisibilityButton);
      albumVisibilityButton.innerText = this.album.public ? "Make private" : "Make public";
      albumVisibilityButton.addEventListener("click",
      /*#__PURE__*/
      function () {
        var _ref = asyncToGenerator_default()(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee(event) {
          var albumName, newVisibility, headers, httpResponse;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.stopPropagation();
                  albumName = encodeURIComponent(_this2.album.name);

                  if (_this2.album.public) {
                    newVisibility = "private";
                  } else {
                    newVisibility = "public";
                  }

                  newVisibility = encodeURIComponent(newVisibility);
                  headers = metalpic.createHeaders();
                  _context.next = 7;
                  return fetch("/api/editalbum/changevisibility/".concat(albumName, "/").concat(newVisibility), {
                    method: "POST",
                    headers: headers
                  });

                case 7:
                  httpResponse = _context.sent;

                  if (httpResponse.status != 200) {
                    alert("Error");
                  } else {
                    _this2.dispatchEvent(new CustomEvent("control-panel-album-updated"));
                  }

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      albumVisibilityButton.classList.add("metalpic-control-panel-album-item");
      albumVisibilityButton.classList.add("metalpic-control-panel-album-button");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["album"];
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/lib/check-token.js




var check_token_CheckToken =
/*#__PURE__*/
function () {
  function CheckToken() {
    classCallCheck_default()(this, CheckToken);
  }

  createClass_default()(CheckToken, null, [{
    key: "isValid",
    // return: Promise<boolean>
    value: function () {
      var _isValid = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var headers, response, obj;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = metalpic.createHeaders();
                _context.next = 3;
                return fetch("/api/checktoken", {
                  method: "POST",
                  headers: headers
                });

              case 3:
                response = _context.sent;

                if (!(response.status == 200)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return response.json();

              case 7:
                obj = _context.sent;
                return _context.abrupt("return", obj.valid);

              case 11:
                return _context.abrupt("return", false);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function isValid() {
        return _isValid.apply(this, arguments);
      }

      return isValid;
    }()
  }]);

  return CheckToken;
}();
// CONCATENATED MODULE: ./src/elements/control-panel.js










console.info("Loading");
window.customElements.define("metalpic-control-panel",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  function _class() {
    var _this;

    classCallCheck_default()(this, _class);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
    _this.albumsData = null; // {albums: [{name, public, created}]}

    return _this;
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("control-panel.js", "\n            <style>\n\n            </style>\n        ");
      this.loadAlbums();
    }
  }, {
    key: "loadAlbums",
    value: function () {
      var _loadAlbums = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var tokenValid, httpResult;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.renderLoading();
                _context.next = 3;
                return check_token_CheckToken.isValid();

              case 3:
                tokenValid = _context.sent;

                if (tokenValid) {
                  _context.next = 7;
                  break;
                }

                this.renderForbidden();
                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return fetch("/list", {
                  method: "GET",
                  headers: headers
                });

              case 9:
                httpResult = _context.sent;

                if (!(httpResult.status == 403)) {
                  _context.next = 13;
                  break;
                }

                this.renderForbidden();
                return _context.abrupt("return");

              case 13:
                _context.next = 15;
                return httpResult.json();

              case 15:
                this.albumsData = _context.sent;
                this.render();

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadAlbums() {
        return _loadAlbums.apply(this, arguments);
      }

      return loadAlbums;
    }()
  }, {
    key: "renderBase",
    value: function renderBase() {
      this.innerHTML = '';
      var body = document.createElement("div");
      this.appendChild(body);
      return body;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var body = this.renderBase();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.albumsData.albums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var album = _step.value;
          // album: {name, public, created}
          var albumElement = document.createElement("metalpic-control-panel-album");
          body.appendChild(albumElement);
          albumElement.setAttribute("album", JSON.stringify(album));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      body.addEventListener("control-panel-album-updated", function (event) {
        console.info("Album update received, reloading albums...");
        event.stopPropagation();

        _this2.loadAlbums();
      }, true);
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      var body = this.renderBase();
      body.innerHTML = "\n            <div>\n                Loading\n            </div>\n        ";
    }
  }, {
    key: "renderForbidden",
    value: function renderForbidden() {
      var body = this.renderBase();
      body.innerHTML = "\n            <div>\n                Forbidden\n            </div>\n        ";
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/elements/hub-buttons.js










console.info("Loading");
window.customElements.define("metalpic-hub-buttons",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  function _class() {
    classCallCheck_default()(this, _class);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("hub-buttons.js", "\n            <style>\n                .metalpic-hub-buttons-container {\n                    display: flex;\n                    flex-direction: row;\n                    flex-wrap: wrap;\n                    justify-content: flex-end;\n                    align-items: center;\n                    width: 100%;\n                }\n\n                .metalpic-hub-buttons-item {\n                    padding: 10px;\n                }\n\n                .metalpic-hub-buttons-link {\n                    text-decoration: none;\n                    color: black;\n                    cursor: pointer;\n                }\n            </style>\n        ");
      this.checkToken();
    }
  }, {
    key: "checkToken",
    value: function () {
      var _checkToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var tokenValid;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return check_token_CheckToken.isValid();

              case 2:
                tokenValid = _context.sent;

                if (tokenValid) {
                  this.render();
                } else {
                  this.renderEmpty();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkToken() {
        return _checkToken.apply(this, arguments);
      }

      return checkToken;
    }()
  }, {
    key: "renderFirst",
    value: function renderFirst() {
      this.innerHTML = "";
      var body = document.createElement("div");
      this.appendChild(body);
      return body;
    }
  }, {
    key: "render",
    value: function render() {
      var body = this.renderFirst();
      var container = document.createElement("div");
      body.appendChild(container);
      container.classList.add("metalpic-hub-buttons-container");
      var uploadLink = document.createElement("a");
      utils.addRouterLinkToElement(uploadLink, "metalpic-upload", this);
      container.appendChild(uploadLink);
      uploadLink.innerText = "Upload";
      uploadLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";
      var panelLink = document.createElement("a");
      utils.addRouterLinkToElement(panelLink, "metalpic-control-panel", this);
      container.appendChild(panelLink);
      panelLink.innerText = "Control panel";
      panelLink.className = "metalpic-hub-buttons-item metalpic-hub-buttons-link";
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty() {
      var body = this.renderFirst();
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/elements/hub.js









console.info("Loading");
window.customElements.define("metalpic-hub",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  function _class() {
    var _this;

    classCallCheck_default()(this, _class);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
    _this.data = null; // {albums: [{name, public, created}]}

    return _this;
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      document.title = "metalpic - Home";
      metalpicStyleCollector.register("hub.js", "\n            <style>\n                .metalpic-hub-content-body {\n                    padding: 10px;\n                }\n\n                .metalpic-hub-content-container {\n                    display: flex;\n                    flex-direction: row;\n                    flex-wrap: nowrap;\n                    justify-content: space-between;\n                    align-items: center;\n                }\n\n                .metalpic-hub-content-item-fixed {\n                    padding-left: 10px;\n                    flex-grow: 0;\n                    flex-shrink: 0;\n                }\n\n                .metalpic-hub-content-link {\n                    text-decoration: none;\n                    color: black;\n                }\n\n                .metalpic-hub-content-item-grow {\n                    flex-grow: 1;\n                    flex-shrink: 0;\n                }\n            </style>\n        ");
      this.data = null;
      this.render();
      this.requestAlbums();
    } // Render =================================================================

  }, {
    key: "renderFirst",
    value: function renderFirst() {
      this.innerHTML = "";
      var body = document.createElement("div");
      this.appendChild(body);
      body.classList.add("metalpic-hub-content-body");
      return body;
    }
  }, {
    key: "render",
    value: function render() {
      var body = this.renderFirst(); // Add hub-buttons

      var hubButtons = document.createElement("metalpic-hub-buttons");
      body.appendChild(hubButtons);

      if (this.data != null) {
        var albumsDiv = document.createElement("div");
        body.appendChild(albumsDiv);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.data.albums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var album = _step.value;
            var div = document.createElement("div");
            albumsDiv.appendChild(div);
            div.classList.add("metalpic-hub-content-container");
            var name = document.createElement("a");
            div.appendChild(name);
            name.innerText = album.name;
            name.classList.add("metalpic-hub-content-item-grow");
            name.classList.add("metalpic-hub-content-link");
            utils.addRouterLinkToElement(name, "metalpic-album/".concat(encodeURIComponent(album.name)), this);
            var p = document.createElement("div");
            div.appendChild(p);
            p.innerText = album.public ? "public" : "private";
            p.classList.add("metalpic-hub-content-item-fixed");
            var created = document.createElement("div");
            div.appendChild(created);
            created.innerText = utils.dateToString(new Date(album.created));
            created.classList.add("metalpic-hub-content-item-fixed");
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "renderForbidden",
    value: function renderForbidden() {
      var body = this.renderFirst();
      body.innerHTML = "\n            <div>\n                Forbidden\n            </div>\n        ";
    } // Private ================================================================

  }, {
    key: "requestAlbums",
    value: function () {
      var _requestAlbums = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var headers, response, obj;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                headers = metalpic.createHeaders();
                _context.next = 4;
                return fetch("/list", {
                  method: "GET",
                  headers: headers
                });

              case 4:
                response = _context.sent;

                if (!(response.status == 403)) {
                  _context.next = 8;
                  break;
                }

                this.renderForbidden();
                return _context.abrupt("return");

              case 8:
                _context.next = 10;
                return response.json();

              case 10:
                obj = _context.sent;
                // {"albums":[{"name":"faser234","public":false,"created":1544376564304},{"name":"faser","public":false,"created":1544363853532}]}
                this.data = obj;
                this.render();
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                console.warn("Error", _context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function requestAlbums() {
        return _requestAlbums.apply(this, arguments);
      }

      return requestAlbums;
    }()
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/elements/login.js










console.info("Loading");
window.customElements.define("metalpic-login",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  function _class() {
    classCallCheck_default()(this, _class);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("login.js", "\n            <style>\n                .metalpic-login-input {\n                    padding: 10px;\n                    width: 200px;\n                    border: 0;\n                }\n\n                .metalpic-login-container {\n                    display: flex;\n                    flex-direction: row;\n                    flex-wrap: wrap;\n                    justify-content: flex-start;\n                    align-items: center;\n                }\n\n                .metalpic-login-logout {\n                    padding: 10px;\n                    cursor: pointer;\n                }\n            </style>\n        ");
      this.checkToken();
    }
  }, {
    key: "checkToken",
    value: function () {
      var _checkToken = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var tokenValid;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return check_token_CheckToken.isValid();

              case 2:
                tokenValid = _context.sent;

                if (tokenValid) {
                  this.renderLogout();
                } else {
                  this.renderLogin();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkToken() {
        return _checkToken.apply(this, arguments);
      }

      return checkToken;
    }() // Events =================================================================

  }, {
    key: "addPasswordEvents",
    value: function addPasswordEvents(passwordInputElement) {
      var _this = this;

      passwordInputElement.addEventListener("keyup",
      /*#__PURE__*/
      function () {
        var _ref = asyncToGenerator_default()(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee2(event) {
          var username, password, headers, httpResponse, responseObj, token;
          return regenerator_default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  event.stopPropagation();

                  if (!(event.keyCode === 13)) {
                    _context2.next = 17;
                    break;
                  }

                  // ENTER
                  username = _this.usernameInput.value;
                  password = _this.passwordInput.value;
                  headers = metalpic.addApplicationJsonHeaders();
                  _context2.next = 7;
                  return fetch("/api/login", {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({
                      user: username,
                      pass: password
                    })
                  });

                case 7:
                  httpResponse = _context2.sent;

                  if (!(httpResponse.status != 200)) {
                    _context2.next = 11;
                    break;
                  }

                  alert("Login failed");
                  return _context2.abrupt("return");

                case 11:
                  _context2.next = 13;
                  return httpResponse.json();

                case 13:
                  responseObj = _context2.sent;
                  token = responseObj.token;
                  localStorage.token = token;
                  location.reload();

                case 17:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } // Render =================================================================

  }, {
    key: "renderBase",
    value: function renderBase() {
      this.innerHTML = "";
      var body = document.createElement("div");
      body.classList.add("metalpic-login-container");
      this.appendChild(body);
      return body;
    }
  }, {
    key: "renderLogin",
    value: function renderLogin() {
      var body = this.renderBase();
      this.usernameInput = document.createElement("input");
      this.usernameInput.setAttribute("type", "text");
      this.usernameInput.setAttribute("placeholder", "Username");
      this.usernameInput.classList.add("metalpic-login-input");
      body.appendChild(this.usernameInput);
      this.passwordInput = document.createElement("input");
      this.passwordInput.setAttribute("type", "password");
      this.passwordInput.setAttribute("placeholder", "Password");
      this.passwordInput.classList.add("metalpic-login-input");
      this.addPasswordEvents(this.passwordInput);
      body.appendChild(this.passwordInput);
    }
  }, {
    key: "renderLogout",
    value: function renderLogout() {
      var body = this.renderBase();
      var logoutButton = document.createElement("div");
      logoutButton.innerText = "Logout";
      logoutButton.classList.add("metalpic-login-logout");
      logoutButton.addEventListener("click", function (event) {
        event.stopPropagation();
        localStorage.token = null;
        location.reload();
      });
      body.appendChild(logoutButton);
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/elements/navbar.js







window.customElements.define("metalpic-navbar",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  // Output events:
  // - metalpic-routechange
  function _class() {
    classCallCheck_default()(this, _class);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("navbar.js", "\n        <style>\n        .metalpic-navbar {\n            width: 100%;\n            height: 90px;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            justify-content: space-evenly;\n            align-items: center;\n        }\n\n        .metalpic-navbar-text {\n            font-size: 40px;\n            padding: 20px;\n            cursor: pointer;\n            text-decoration: none;\n            color: black;\n        }\n        </style>\n        ");
      this.render();
    } // Render =================================================================

  }, {
    key: "renderFirst",
    value: function renderFirst() {
      this.innerHTML = '';
      var body = document.createElement("div");
      this.appendChild(body);
      return body;
    }
  }, {
    key: "render",
    value: function render() {
      var body = this.renderFirst();
      var container = document.createElement("div");
      body.appendChild(container);
      container.classList.add("metalpic-navbar");
      var p = document.createElement("a");
      container.appendChild(p);
      p.classList.add("metalpic-navbar-text");
      p.innerText = "metalpic";
      utils.addRouterLinkToElement(p, "metalpic-hub", this);
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/elements/picture-preview.js









console.info("Loading");
window.customElements.define("metalpic-picture-preview",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  function _class() {
    var _this;

    classCallCheck_default()(this, _class);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
    _this._picid = null;
    _this._imgblob = null;
    return _this;
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("picture-preview.js", "\n            <style>\n                .metalpic-picture-preview-body {\n                    max-width: 100%;\n                    padding: 10px;\n                }\n\n                .metalpic-picture-preview-pic {\n                    max-width: 100%;\n                    max-height: 90vh;\n                }\n            </style>\n        ");
      this.renderFirst();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, newValue) {
      if (name == "picid") {
        this.picid = newValue;
      }
    }
  }, {
    key: "loadPic",
    value: function () {
      var _loadPic = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var headers, httpResponse, responseBlob;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.renderLoading();
                headers = metalpic.createHeaders();
                _context.next = 4;
                return fetch("/api/image/".concat(encodeURIComponent(this._picid), "/image.png"), {
                  method: "GET",
                  headers: headers
                });

              case 4:
                httpResponse = _context.sent;
                _context.next = 7;
                return httpResponse.blob();

              case 7:
                responseBlob = _context.sent;
                this._imgblob = responseBlob;
                this.render();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadPic() {
        return _loadPic.apply(this, arguments);
      }

      return loadPic;
    }()
  }, {
    key: "renderFirst",
    value: function renderFirst() {
      this.innerHTML = '';
      var body = document.createElement("div");
      body.classList.add("metalpic-picture-preview-body");
      this.appendChild(body);
      return body;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.renderWithBody(function (body) {
        var img = document.createElement("img");
        img.src = URL.createObjectURL(_this2._imgblob);
        body.appendChild(img);
        img.classList.add("metalpic-picture-preview-pic");
      });
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      this.renderWithBody(function (body) {
        body.innerHTML = "\n                <div>Loading</div>\n            ";
      });
    } // func(body)

  }, {
    key: "renderWithBody",
    value: function renderWithBody(func) {
      var body = this.renderFirst();
      func(body);
    }
  }, {
    key: "picid",
    set: function set(picid) {
      console.info("Got picid " + picid);
      this._picid = picid;
      this.loadPic();
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["picid"];
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/elements/root.js







window.customElements.define("metalpic-root",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  function _class() {
    classCallCheck_default()(this, _class);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
  }

  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("root.js", "\n            <style>\n                @import url('https://fonts.googleapis.com/css?family=Khula');\n\n                * {\n                    font-family: 'Khula', sans-serif;\n                }\n\n                a {\n                    text-decoration: none;\n                    color: black;\n                }\n            </style>\n        ");
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.innerHTML = "\n            <metalpic-navbar></metalpic-navbar>\n            <metalpic-login></metalpic-login>\n            <metalpic-router></metalpic-router>\n        ";
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
console.info("metalpic-root loaded");
// CONCATENATED MODULE: ./src/elements/router.js






window.customElements.define("metalpic-router",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  // Input events:
  // - metalpic-routechange: new route name, without the initial /
  function _class() {
    var _this;

    classCallCheck_default()(this, _class);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
    _this.lastHtml = "";
    _this.lastRoute = null;
    _this.currentRoute = "";
    _this.currentPath = ""; // Detect initial route

    var path = location.pathname;

    if (path == "/") {
      _this.changeRouteTo("metalpic-hub");
    } else {
      _this.changeRouteTo(path.substr(1));
    }

    _this.addEventListener("metalpic-routechange", function (event) {
      console.info("Received routechange event");
      event.stopPropagation();

      _this.changeRouteTo(event.newRoute);
    }, true);

    return _this;
  }

  createClass_default()(_class, [{
    key: "changeRouteTo",
    value: function changeRouteTo(newRoute) {
      if (this.lastRoute == newRoute) {
        console.info("Last route was the same, skipping");
        return;
      }

      this.lastRoute = newRoute;
      console.info("changeRouteTo: " + newRoute);
      this.renderNewState(newRoute);
    }
  }, {
    key: "renderNewState",
    value: function renderNewState(newRoute) {
      var splt = newRoute.split("/");
      this.currentRoute = splt[0];
      var remaining = [];

      for (var i = 1; i < splt.length; i++) {
        remaining.push(splt[i]);
      }

      var pathJoined = remaining.join("/");
      this.currentPath = pathJoined;
      console.info("New route is " + this.currentRoute);
      console.info("New path is " + this.currentPath);
      this.draw();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      var newHtml = "\n            <".concat(this.currentRoute, " routepath=\"").concat(this.currentPath, "\"></").concat(this.currentRoute, ">\n        ");

      if (newHtml != this.lastHtml) {
        this.innerHTML = newHtml;
        this.lastHtml = newHtml;
      } else {
        console.info("Skipping redraw, content is the same");
      }
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
console.info("metalpic-router loaded");
// CONCATENATED MODULE: ./src/elements/upload.js









console.info("Loading");
window.customElements.define("metalpic-upload",
/*#__PURE__*/
function (_HTMLElement) {
  inherits_default()(_class, _HTMLElement);

  function _class() {
    var _this;

    classCallCheck_default()(this, _class);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).call(this));
    _this.files = null;
    return _this;
  } // Events =================================================================


  createClass_default()(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      metalpicStyleCollector.register("upload.js", "\n            <style>\n                .container {\n                    padding-left: 10px;\n                    padding-top: 10px;\n                }\n            </style>\n        ");
      this.render();
    }
  }, {
    key: "registerFileUploadListeners",
    value: function registerFileUploadListeners(inputElem) {
      var _this2 = this;

      var onSelectFile =
      /*#__PURE__*/
      function () {
        var _ref = asyncToGenerator_default()(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.files = inputElem.files;

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function onSelectFile() {
          return _ref.apply(this, arguments);
        };
      }();

      inputElem.addEventListener("change", onSelectFile, false);
    }
  }, {
    key: "registerButtonEventListeners",
    value: function registerButtonEventListeners(button) {
      var _this3 = this;

      var upload =
      /*#__PURE__*/
      function () {
        var _ref2 = asyncToGenerator_default()(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee2(file) {
          var albumNameComp, fileNameComp, headers, response;
          return regenerator_default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  console.info("Uploading file " + file.name);
                  albumNameComp = encodeURIComponent(_this3.getAlbumName());
                  fileNameComp = encodeURIComponent(file.name);
                  headers = metalpic.createHeaders();
                  _context2.next = 6;
                  return fetch("/api/upload/".concat(albumNameComp, "/").concat(fileNameComp), {
                    method: 'POST',
                    headers: headers,
                    body: file // This is your file object

                  });

                case 6:
                  response = _context2.sent;

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function upload(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

      button.addEventListener("click",
      /*#__PURE__*/
      function () {
        var _ref3 = asyncToGenerator_default()(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee3(e) {
          var headers, httpResponse, i;
          return regenerator_default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  e.stopPropagation();

                  if (_this3.files == null) {
                    window.alert("Please select files first");
                  }

                  if (utils.stringNullOrEmpty(_this3.getAlbumName())) {
                    window.alert("Album name cannot be empty");
                  } // Create album


                  headers = metalpic.createHeaders();
                  _context3.next = 6;
                  return fetch("/api/createalbum/".concat(encodeURIComponent(_this3.getAlbumName())), {
                    method: "POST",
                    headers: headers
                  });

                case 6:
                  httpResponse = _context3.sent;
                  i = 0;

                case 8:
                  if (!(i < _this3.files.length)) {
                    _context3.next = 14;
                    break;
                  }

                  _context3.next = 11;
                  return upload(_this3.files[i]);

                case 11:
                  i++;
                  _context3.next = 8;
                  break;

                case 14:
                  alert("Upload completed");

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    } // Draw ===================================================================

  }, {
    key: "renderFirst",
    value: function renderFirst() {
      this.innerHTML = '';
      var body = document.createElement("div");
      this.appendChild(body);
      return body;
    }
  }, {
    key: "render",
    value: function render() {
      var body = this.renderFirst(); // Clear the body

      while (body.firstChild) {
        body.removeChild(body.firstChild);
      }

      this.drawTitle(body);
      this.drawAlbumInput(body);
      this.drawUploader(body);
      this.drawUploadButton(body);
    }
  }, {
    key: "drawTitle",
    value: function drawTitle(body) {
      this.drawInDiv(body, function (div) {
        var pElem = document.createElement("p");
        pElem.innerText = "Metalpic uploader";
        div.appendChild(pElem);
      });
    }
  }, {
    key: "drawAlbumInput",
    value: function drawAlbumInput(body) {
      this.drawInDiv(body, function (div) {
        var inputElem = document.createElement("input");
        inputElem.setAttribute("type", "text");
        inputElem.setAttribute("data-albumname", "");
        inputElem.setAttribute("placeholder", "Album name");
        div.appendChild(inputElem);
      });
    }
  }, {
    key: "drawUploader",
    value: function drawUploader(body) {
      var _this4 = this;

      this.drawInDiv(body, function (div) {
        var inputElem = document.createElement("input");
        inputElem.setAttribute("type", "file");
        inputElem.setAttribute("data-fileupload", "");
        inputElem.setAttribute("multiple", "");
        div.appendChild(inputElem);

        _this4.registerFileUploadListeners(inputElem);
      });
    }
  }, {
    key: "drawUploadButton",
    value: function drawUploadButton(body) {
      var _this5 = this;

      this.drawInDiv(body, function (div) {
        var button = document.createElement("button");
        div.appendChild(button);
        button.innerText = "Upload";

        _this5.registerButtonEventListeners(button);
      });
    } // Private ================================================================

  }, {
    key: "drawInDiv",
    value: function drawInDiv(body, func) {
      var div = document.createElement("div");
      div.classList.add("container");
      body.appendChild(div);
      func(div);
    }
  }, {
    key: "getAlbumName",
    value: function getAlbumName() {
      var inputElem = this.querySelector("[data-albumname]");
      return inputElem.value;
    }
  }]);

  return _class;
}(wrapNativeSuper_default()(HTMLElement)));
// CONCATENATED MODULE: ./src/index.js














/***/ })
/******/ ]);