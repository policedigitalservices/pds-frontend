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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  exports.wrap = wrap;

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
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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
        return new PromiseImpl(function(resolve, reject) {
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
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

  define(Gp, toStringTagSymbol, "Generator");

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

  exports.keys = function(object) {
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
  exports.values = values;

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

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/js/BottomDrawer.js":
/*!********************************!*\
  !*** ./src/js/BottomDrawer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BottomDrawer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/*
 Class that facilitate the hiding and showing of the bottom bar.
*/
var BottomDrawer = /*#__PURE__*/function () {
  function BottomDrawer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BottomDrawer);

    this._openClass = "bottom-drawer-open";
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BottomDrawer, [{
    key: "show",
    value: function show() {
      document.body.classList.add(this._openClass);
    }
  }, {
    key: "hide",
    value: function hide() {
      document.body.classList.remove(this._openClass);
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return document.body.classList.contains(this._openClass);
    }
  }]);

  return BottomDrawer;
}();


;

/***/ }),

/***/ "./src/js/DraftMessageDrawer.js":
/*!**************************************!*\
  !*** ./src/js/DraftMessageDrawer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DraftMessageDrawer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BottomDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BottomDrawer */ "./src/js/BottomDrawer.js");
/* harmony import */ var _SimpleCookieHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleCookieHelper */ "./src/js/SimpleCookieHelper.js");





var DraftMessageDrawer = /*#__PURE__*/function () {
  function DraftMessageDrawer(numberOfRecipients) {
    var totalSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".draft-message-drawer__total";

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DraftMessageDrawer);

    var cookieHelper = new _SimpleCookieHelper__WEBPACK_IMPORTED_MODULE_3__["default"]('CourierMessageTitle');
    this._totalsElement = document.querySelector(totalSelector);
    document.querySelector('.draft-message-drawer__title').textContent = cookieHelper.get() || 'Untitled';

    if (!this._totalsElement) {
      throw Error("No element matching the passed in selector ".concat(totalSelector));
    }

    this._bottomDrawer = new _BottomDrawer__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.update(numberOfRecipients);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DraftMessageDrawer, [{
    key: "update",
    value: function update(numberOfRecipients) {
      this._totalsElement.innerText = numberOfRecipients;
      numberOfRecipients ? this._bottomDrawer.show() : this._bottomDrawer.hide();
    }
  }]);

  return DraftMessageDrawer;
}();



/***/ }),

/***/ "./src/js/GroupsTree.js":
/*!******************************!*\
  !*** ./src/js/GroupsTree.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SeeAllHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeeAllHelper */ "./src/js/SeeAllHelper.js");

var groupExist = document.getElementById("Group");

if (groupExist) {
  var useCheckboxes = groupExist.hasAttribute('data-with-checkbox');
  var useSingleSelectCheckbox = groupExist.hasAttribute('data-with-single-select-checkbox');
  var lockRootNode = groupExist.hasAttribute('data-lock-root');

  (function (selector, useCheckboxes, useSingleSelectCheckbox) {
    //Check on page whether Group Multi Select exists
    var intiallySelectedNodes = [];
    var groupSelect = document.getElementById("GroupSelector");
    var groupTextarea = document.getElementById("GroupTextarea");
    var tagsSeeAllHelper = null; // If the Group Multi Select does exist, hide it (if JS enabled)

    if (groupSelect !== null) {
      groupSelect.parentElement.classList.add("is-hidden");
      groupTextarea.parentElement.classList.remove("is-hidden"); // Grab all the items that should be selected

      var selectedOptionsNodes = groupSelect.querySelectorAll('option:checked');

      for (var i = 0; i < selectedOptionsNodes.length; i++) {
        intiallySelectedNodes.push(selectedOptionsNodes[i].value || "\\");
      }
    }

    ;

    if (groupTextarea !== null) {
      var itemLimit = 21;
      tagsSeeAllHelper = new _SeeAllHelper__WEBPACK_IMPORTED_MODULE_0__["SeeAllHelper"]('#GroupTextarea > .tag', '#seeMoreGroups', {
        itemLimit: itemLimit,
        countFieldId: 'groupsCount'
      });
      groupTextarea.addEventListener('click', function (e) {
        var target = e.target;

        if (target.matches(".tag>.button__icon") && target.hasAttribute('data-path')) {
          var pathToUncheck = target.getAttribute("data-path").replace(/\\/g, "\\\\");
          var cbSelector = 'input[type=checkbox].GroupItem[value="' + pathToUncheck + '"]';
          var checboxToUncheck = document.querySelector(cbSelector);

          if (checboxToUncheck) {
            checboxToUncheck.click();
          }

          tagsSeeAllHelper.recalculate();
        }
      });
    }

    var searchParts = function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
      });
      return vars;
    }();

    var pagePath = window.location.origin + window.location.pathname + "?group=";
    var groupParam = searchParts.group;
    var searchParam = searchParts.Search; // Function to build the path

    function getPagePathForGroup(group) {
      var grp = group === "" ? "\\" : group;
      return pagePath + grp;
    } // Function to check if the node being add should be open i.e. to reveal the currently selected group


    function shouldParentBeOpen(path) {
      if (!groupParam) {
        return false;
      }

      var pathToCheck = path + "\\";
      return groupParam.startsWith(pathToCheck) && groupParam != pathToCheck;
    } // Function to check if the node being added is the currentlySelectedGroup


    function isSelectedGroup(path) {
      var paramsToCheck = decodeURIComponent(groupParam || "\\");
      var pathToCheck = path || "\\";
      return paramsToCheck === pathToCheck;
    } // Helper function to build link for the group


    function buildLink(text, path) {
      var link = document.createElement("a");
      link.textContent = text;
      link.href = getPagePathForGroup(path);
      link.classList.add("group-selector__link"); // NB.  Originally we didnt want the current class to be added if doing a search, but think we do now.
      // if ((!searchParam) &&  isSelectedGroup(path)) {
      // if (isSelectedGroup(path)) {
      //     link.classList.add("group-selector__link--current");
      // }

      return link;
    } // Helper function to build checkbox label for the group


    function buildCheckbox(text, path, parentChecked) {
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.setAttribute("class", "GroupItem");
      checkbox.name = text;
      checkbox.value = path;
      checkbox.id = text;
      var newParentSelected = parentChecked;

      if (path === '\\' && lockRootNode) {
        // In this mode the root node should be disabled and checked BUT the children of this node should act as though it isnt checked so we dont update the selected state
        checkbox.checked = true;
        checkbox.disabled = true;
      } else if (parentChecked && !useSingleSelectCheckbox) {
        // If a parent node is selected all its children should be disabled and unchecked
        checkbox.checked = false;
        checkbox.disabled = true;
      } else {
        // If a parent node is not checked its children selected state depend on the childs value, and not be disabled
        var newChecked = intiallySelectedNodes.indexOf(path || '\\') >= 0;
        checkbox.checked = newChecked;
        newParentSelected = newChecked;
      } // Style as a radio button


      if (useSingleSelectCheckbox) {
        var label = document.createElement('label');
        label.classList.add('radio-checkbox');
        var checkSpan = document.createElement('span');
        checkSpan.classList.add('radio-checkbox__check');
        var borderSpan = document.createElement('span');
        borderSpan.classList.add('radio-checkbox__border');
        borderSpan.appendChild(checkbox);
        borderSpan.appendChild(checkSpan);
        label.appendChild(borderSpan);
        checkbox.classList.add('radio-checkbox__input');
        checkbox = label;
      }

      return {
        checkbox: checkbox,
        newParentSelected: newParentSelected
      };
    } // Helper function to build checkbox for the group


    function buildCheckboxLabel(text, path) {
      var checkboxLabel = document.createElement('label');
      checkboxLabel.innerHTML = text;
      checkboxLabel.for = text;
      checkboxLabel.setAttribute("for", text);
      return checkboxLabel;
    }

    function transferValues() {
      var data = [];
      var elems = document.querySelectorAll('.GroupItem');

      for (var i = 0; i < elems.length; i++) {
        if (lockRootNode && !elems[i].value) {// No-operation
        } else if (elems[i].checked) {
          data.push(elems[i].value);
        }
      }

      populateGroupField(data);
    }

    function populateGroupField(data) {
      var textarea = document.getElementById("GroupTextarea");

      if (textarea) {
        textarea.innerHTML = '';
        var element = document.getElementById('GroupSelector');
        var existingOptionValues = Array.from(element.options).map(function (opt) {
          return opt.value;
        });

        for (var data_i = 0; data_i < data.length; data_i++) {
          var data_current = data[data_i];

          if (data_current === '\\' && lockRootNode) {
            textarea.innerHTML = textarea.innerHTML;
          } else if (data_current === '\\') {
            textarea.innerHTML = textarea.innerHTML + '<div class="tag">All Contact Groups<i class="button__icon" data-path="' + data_current + '">clear</i></div>';
          } else {
            textarea.innerHTML = textarea.innerHTML + '<div class="tag">' + data_current.substring(1) + '<i class="button__icon" data-path="' + data_current + '">clear</i></div>';
          } // Ensure the option exists - add it if not


          if (existingOptionValues.indexOf(data_current) < 0) {
            var newOption = document.createElement('option');
            newOption.selected = true;
            newOption.value = data_current;
            newOption.innerText = data_current;
            "";
            element.appendChild(newOption);
          }
        }

        for (var i = 0; i < element.options.length; i++) {
          element.options[i].selected = data.indexOf(element.options[i].value) >= 0;
        }

        tagsSeeAllHelper.recalculate();
      }
    }

    function appendChildrenForMode(parent, text, path, parentChecked) {
      if (useCheckboxes || useSingleSelectCheckbox) {
        // Temporary workaround the blank value for 'All Contact Groups'
        if (path === '') {
          path = "\\";
        }

        parent.appendChild(buildCheckboxLabel(text, path));
        var checkboxResult = buildCheckbox(text, path, parentChecked);
        parent.appendChild(checkboxResult.checkbox);
        return checkboxResult.newParentSelected;
      } else {
        // Create the link to refresh page with selected node.
        parent.appendChild(buildLink(text, path));
        return parentChecked;
      }
    }

    function forEachCheckboxExcludingCurrent(current, children, updaterFn) {
      for (var i = 0; i < children.length; i++) {
        var currentLoopChild = children[i];

        if (currentLoopChild !== current) {
          updaterFn(currentLoopChild);
        }
      }
    }

    function handleCheckboxClick(e, checkbox) {
      var parentLi = checkbox.parentNode;

      if (useSingleSelectCheckbox) {
        // In this mode only one item can be selected, and the selected item cannot be deseleted.
        if (checkbox.checked) {
          var allGroupCheckboxes = document.querySelectorAll('.group-selector__list--root input[type=checkbox]');
          forEachCheckboxExcludingCurrent(checkbox, allGroupCheckboxes, function (checkboxToUpdate) {
            checkboxToUpdate.checked = false;
          });
        } else {
          e.preventDefault();
          checkbox.checked = true;
        }
      } else if (parentLi.classList.contains('group-selector__group--parent')) {
        var childCheckboxes = parentLi.querySelectorAll('input[type=checkbox');

        if (checkbox.checked) {
          forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, function (checkboxToUpdate) {
            checkboxToUpdate.disabled = true;
            checkboxToUpdate.checked = false;
          });
        } else {
          forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, function (checkboxToUpdate) {
            checkboxToUpdate.disabled = false;
          });
        }
      }
    } // Grab the select list and all of its options


    var groupSelect = document.querySelector(selector);
    var options = groupSelect.querySelectorAll("option");
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "Group");
    hiddenField.value = groupParam || '\\'; // Create the base collections with starting key for the root.

    var structure = {
      "\\": {}
    }; // Build on the base structure by looping through each select item.

    for (var option_i = 0; option_i < options.length; option_i++) {
      var option = options[option_i];

      if (option.textContent !== "") {
        // Seperate the group name into all its path segments
        var segments = option.textContent.split("\\"); // Start at the root element.

        var nodeToCheck = structure["\\"]; // For each segment ensure that all levels of the structure are in place.

        for (var segment_i = 0; segment_i < segments.length; segment_i++) {
          var seg = segments[segment_i];

          if (seg !== "") {
            if (!nodeToCheck[seg]) {
              nodeToCheck[seg] = {};
            }

            nodeToCheck = nodeToCheck[seg];
          }
        }
      }
    } // The base element that will be populated


    var treeContainer = document.createElement("ul");
    treeContainer.classList.add("group-selector__list");
    treeContainer.classList.add("group-selector__list--root"); // Handle all the clicks at the parent level

    treeContainer.addEventListener("click", function (e) {
      var target = e.target; // Handle checkbox items being selected.

      if (target.matches('input[type=checkbox]')) {
        handleCheckboxClick(e, target);
      }

      transferValues(); // We only care about clicks on elements that are parents

      if (target.matches(".group-selector__group--parent")) {
        // If an open parent item is clicked, close it, but also all its open descendants.
        if (target.classList.contains("group-selector__group--active")) {
          target.classList.remove("group-selector__group--active");
          var activeChildren = target.querySelectorAll(".group-selector__group--active");

          for (var ac_i = 0; ac_i < activeChildren.length; ac_i++) {
            var activeChild = activeChildren[ac_i];
            activeChild.classList.remove("group-selector__group--active");
          }
        } // Open any closed parents that are clicked.
        else {
            target.classList.add("group-selector__group--active");
          }
      }
    });
    /*
      Recursive function that builds the select list from the previous node structure.
    */

    function displayChildKeys(currText, currPath, obj, elementToAddTo, level, parentsChecked) {
      var childKeys = Object.keys(obj);
      var parentCheckedState = parentsChecked;
      var childListItem = document.createElement("li");
      childListItem.classList.add("group-selector__group");

      if (!useCheckboxes && !useSingleSelectCheckbox && isSelectedGroup(currPath)) {
        // Only add the current state when in the 'link mode'
        childListItem.classList.add("group-selector__group--current");
      }

      if (!childKeys.length) {
        // This is at the bottom of a branch i.e. no children to process
        appendChildrenForMode(childListItem, currText, currPath, parentCheckedState);
        elementToAddTo.appendChild(childListItem);
      } else {
        // This node has children to process
        childListItem.classList.add("group-selector__group--parent");

        if (level === 1 || shouldParentBeOpen(currPath)) {
          // Open first level children by default
          childListItem.classList.add("group-selector__group--active");
        }

        parentCheckedState = appendChildrenForMode(childListItem, currText, currPath, parentCheckedState); // Create the container ready to be populated with the child nodes

        var childList = document.createElement("ul");
        childList.classList.add("group-selector__list");
        childListItem.appendChild(childList);
        elementToAddTo.appendChild(childListItem); // Call recursively with updated params for each child node

        for (var ck_i = 0; ck_i < childKeys.length; ck_i++) {
          var childKey = childKeys[ck_i];

          if (childKey !== 'All contacts') {
            displayChildKeys(childKey, currPath + "\\" + childKey, obj[childKey], childList, level + 1, parentCheckedState);
          }
        }
      }
    } // The initial call of the recursive function starting at the root.


    displayChildKeys("All Contact Groups", "", structure["\\"], treeContainer, 1, false); // Replace the select list with the new tree

    groupSelect.parentNode.replaceChild(treeContainer, groupSelect);
    treeContainer.parentNode.appendChild(hiddenField);
    transferValues();
  })("#Group", useCheckboxes, useSingleSelectCheckbox);
}

/***/ }),

/***/ "./src/js/IdSessionStorageHelper.js":
/*!******************************************!*\
  !*** ./src/js/IdSessionStorageHelper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdSessionStorageHelper; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




// Store selected users inside session storage
var IdSessionStorageHelper = /*#__PURE__*/function () {
  function IdSessionStorageHelper(name) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, IdSessionStorageHelper);

    this._name = name;

    var initial = this._initialise();

    this._items = new Map();
    initial.forEach(function (_ref) {
      var id = _ref.id,
          name = _ref.name;
      return _this._items.set(id, name);
    });
  } // Populate start ids, initialises cookie if not present


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(IdSessionStorageHelper, [{
    key: "_initialise",
    value: function _initialise() {
      var selectedItemsJson = sessionStorage.getItem(this._name);

      if (!selectedItemsJson) {
        this._persist([]);

        return [];
      }

      return JSON.parse(selectedItemsJson);
    } // Save the new ids to the session storage after update

  }, {
    key: "_update",
    value: function _update() {
      var items = this.getItems();

      this._persist(items);
    } // Save the passed in ids to the cookie

  }, {
    key: "_persist",
    value: function _persist(items) {
      sessionStorage.setItem(this._name, JSON.stringify(items));
    } // Set all the items in one hit. Returns the new count.

  }, {
    key: "setItems",
    value: function setItems() {
      var _this2 = this;

      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this._items = new Map();
      items.forEach(function (i) {
        return _this2._items.set(i.id, i.name);
      });

      this._update();

      return this.getCount();
    } // Returns the count of items in the selection.

  }, {
    key: "getIds",
    value: function getIds() {
      var ids = Array.from(this._items.keys());
      return ids;
    } // Remove all map items whose ids are not in the passed in list

  }, {
    key: "filterByIds",
    value: function filterByIds(idsToKeep) {
      var _this3 = this;

      var ids = this.getIds();
      return ids.forEach(function (i) {
        if (!idsToKeep.includes(i)) {
          _this3.remove(i);
        }
      });
    } // Returns the number of items currently in the map.

  }, {
    key: "getCount",
    value: function getCount() {
      return this._items.size;
    } // Remove item by its id. Return the new count

  }, {
    key: "remove",
    value: function remove(id) {
      this._items.delete(id);

      this._update();

      return this.getCount();
    } // Add one or more items. Returns the new count

  }, {
    key: "add",
    value: function add(id, name) {
      this._items.set(id, name);

      this._update();

      return this.getCount();
    } // Return all items in array format

  }, {
    key: "getItems",
    value: function getItems() {
      return Array.from(this._items.entries()).map(function (_ref2) {
        var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),
            id = _ref3[0],
            name = _ref3[1];

        return {
          id: id,
          name: name
        };
      });
    } // Get the name for a passed id

  }, {
    key: "getName",
    value: function getName(id) {
      return this._items.get(id);
    } // Does the map contain the passed in id.

  }, {
    key: "hasId",
    value: function hasId(id) {
      return this._items.has(id);
    } // Empties the list of selected items in the map.

  }, {
    key: "clearItems",
    value: function clearItems() {
      return this.setItems([]);
    }
  }]);

  return IdSessionStorageHelper;
}();



/***/ }),

/***/ "./src/js/LazyLoader.js":
/*!******************************!*\
  !*** ./src/js/LazyLoader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourierLazyLoader; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities */ "./src/js/Utilities.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
  TODO: Switch to using interection observer
*/

/**
  Class to manage the load on scroll functionality for a page.
  When the template is rendered server side it should hide the loader element if no more results to load.
*/

var CourierLazyLoader = /*#__PURE__*/function () {
  /**
    Constructor
    Params
     - loaderElement (required): The element that will be used as the loader
     - loaderFn (required): The function that should be called to load the next page of results.  
                            This will be passed a callback that should be called on completion with a bool for 
                            whether or not there are more items to load.
     - configObj (optional):  An object whose key and values will override default config settings.
  */
  function CourierLazyLoader(loaderElement, loaderFn) {
    var _this = this;

    var configObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CourierLazyLoader);

    /**
      Default config settings
    */
    var configDefaults = {
      loaderClass: 'loader',
      // the class to be added to the loader element
      loaderLoadingClass: 'loader--loading',
      // the class to be added to the loader element when searching
      debounceMs: 100,
      // how long to wait between events before calling load
      peekDistance: 0,
      // how much of loading element should be on scren before calling load
      debug: false // whether or not to log debug info to console.

    };
    this._loader = loaderElement;
    this._loaderFunc = loaderFn;
    this._main = document.querySelector('main'); // Merge the defaults and passed in config

    this._config = _objectSpread(_objectSpread({}, configDefaults), configObj); // Track whether listeners have been added or removed

    this._hasListenersAdded = false;

    if (!this._loader) {
      throw new Error('Null loader element provided');
    } // Add on the loaders class from the config


    this._loader.classList.add(this._config.loaderClass); // Debounce the check


    this._lazyLoadCheck = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
      if (_this._doLoadMoreCheck()) {
        _this._conditionalDebugLog('Calling load more function');

        _this._loader.classList.add(_this._config.loaderLoadingClass);

        _this._stopListening(); // call the search function & pass in the done searching callback


        _this._loaderFunc(_this._doneSearching);
      } else {
        _this._conditionalDebugLog('Not ready to reload yet');
      }
    }, this._config.debounceMs); // Add the events (also does initial check)

    this._startListening();

    this._doneSearching = this._doneSearching.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CourierLazyLoader, [{
    key: "_setLoadingElementVisibility",
    value: function _setLoadingElementVisibility(visible) {
      if (visible) {
        this._loader.classList.remove('is-hidden');
      } else {
        this._loader.classList.add('is-hidden');
      }
    } // Callback function to handkle results coming back in

  }, {
    key: "_doneSearching",
    value: function _doneSearching(moreToLoad) {
      this._conditionalDebugLog("_doneSearching callback called with more to load ".concat(moreToLoad));

      this._loader.classList.remove(this._config.loaderLoadingClass);

      if (moreToLoad) {
        this._startListening();
      } else {
        this._conditionalDebugLog('All done - hiding loader element');

        this._setLoadingElementVisibility(false);
      }
    } // Wire up event listeners and do initial check.

  }, {
    key: "_startListening",
    value: function _startListening() {
      if (!this._hasListenersAdded) {
        this._main.addEventListener('scroll', this._lazyLoadCheck);

        window.addEventListener('resize', this._lazyLoadCheck);
        window.addEventListener('orientationChange', this._lazyLoadCheck);
        this._hasListenersAdded = true;

        this._conditionalDebugLog('Listeners added');

        this._lazyLoadCheck();
      } else {
        this._conditionalDebugLog('Listeners already in place');
      }
    } // Remove the event listeners

  }, {
    key: "_stopListening",
    value: function _stopListening() {
      if (this._hasListenersAdded) {
        this._main.removeEventListener('scroll', this._lazyLoadCheck);

        window.removeEventListener('resize', this._lazyLoadCheck);
        window.removeEventListener('orientationChange', this._lazyLoadCheck);
        this._hasListenersAdded = false;

        this._conditionalDebugLog('Listeners removed');
      } else {
        this._conditionalDebugLog('No Listeners to remove');
      }
    } // Helper to log only if debugging enabled

  }, {
    key: "_conditionalDebugLog",
    value: function _conditionalDebugLog(toDebug) {
      var loggerFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console.log;

      if (this._config.debug) {
        loggerFunc(toDebug);
      }
    } // Do the check to see if screen somewhere it should be loaded.

  }, {
    key: "_doLoadMoreCheck",
    value: function _doLoadMoreCheck() {
      var highestVisibleYPos = this._main.scrollTop + this._main.clientHeight; //window.pageYOffset + window.innerHeight;

      var documentHeight = this._main.scrollHeight; //document.documentElement.scrollHeight;

      var loadMoreTriggerPos = Math.min(this._loader.offsetTop + this._config.peekDistance, documentHeight);
      var peekPositionVisible = highestVisibleYPos >= loadMoreTriggerPos;
      var shouldLoadMore = peekPositionVisible;

      this._conditionalDebugLog('Doing load more check ...');

      this._conditionalDebugLog({
        'Top position of loader element': this._loader.offsetTop,
        'Config peek distance': this._config.peekDistance,
        'Y co-ordinate when more should be loaded (including peek, constrained to doc height)': loadMoreTriggerPos,
        //'Current Y position of scroll': window.pageYOffset,
        // 'The internal size of the window': window.innerHeight,
        'The max y position visible': highestVisibleYPos,
        'The height of document': documentHeight,
        'Is peek position visible': peekPositionVisible,
        'Is the load more position visible, or at doc end': shouldLoadMore
      }, console.table);

      return shouldLoadMore;
    }
  }]);

  return CourierLazyLoader;
}();
/*

doLoadMoreCheck() {    
    const highestVisibleYPos = window.pageYOffset + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const loadMoreTriggerPos = (this._loader.offsetTop + this._config.peekDistance);  // Math.min((this._loader.offsetTop + this._config.peekDistance), documentHeight); 
    const peekPositionVisible = highestVisibleYPos >= loadMoreTriggerPos;
    const shouldLoadMore = peekPositionVisible;
    
    this._conditionalDebugLog('Doing load more check ...');    
    this._conditionalDebugLog({ 
      'Top position of loader element': this._loader.offsetTop,
      'Config peek distance': this._config.peekDistance,
      'Y co-ordinate when more should be loaded (including peek, constrained to doc height)': loadMoreTriggerPos,
      'Current Y position of scroll': window.pageYOffset,
      'The internal size of the window': window.innerHeight,
      'The max y position visible': highestVisibleYPos,
      'The height of document': documentHeight,
      'Is peek position visible': peekPositionVisible,
      'Is the load more position visible, or at doc end': shouldLoadMore,
    }, console.table); 
    
    return shouldLoadMore;
  };

*/




/***/ }),

/***/ "./src/js/SeeAll.js":
/*!**************************!*\
  !*** ./src/js/SeeAll.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SeeAllHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeeAllHelper */ "./src/js/SeeAllHelper.js");

new _SeeAllHelper__WEBPACK_IMPORTED_MODULE_0__["SeeAllAttributeHelper"]();

/***/ }),

/***/ "./src/js/SeeAllHelper.js":
/*!********************************!*\
  !*** ./src/js/SeeAllHelper.js ***!
  \********************************/
/*! exports provided: SeeAllAttributeHelper, SeeAllHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllAttributeHelper", function() { return SeeAllAttributeHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllHelper", function() { return SeeAllHelper; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *  USAGE: To use this control you must add the following attribute to the button that should be doing the show all.
 * 
 *  data-showall-container-id="<<id of container to be effected>>"
 * 
 *  OPTIONAL: Use the following attrtibutes to adjust the behavior
 * 
 *  data-showall-item-limit="20" - sets the number of items to show initially.  Default is 10
 *  
 *  data-showall-count-id - id of a field that should be updated with a count of the items
 * 
 *  data-showall-item-selector - a selector to get the item from with the container.  This is required if the container is not a table
 */
var SeeAllAttributeHelper = function SeeAllAttributeHelper() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SeeAllAttributeHelper);

  var showMoreButtons = document.querySelectorAll('[data-showall-container-id]');
  showMoreButtons.forEach(function (showAllButton) {
    var containerId = showAllButton.getAttribute("data-showall-container-id");
    var itemSelector = showAllButton.getAttribute("data-showall-item-selector");
    var showAllItemLimit = showAllButton.getAttribute("data-showall-item-limit");
    var showAllItemCountId = showAllButton.getAttribute("data-showall-count-id");
    var buttonId = showAllButton.id;

    if (!buttonId) {
      return;
    }

    ;
    var container = document.getElementById(containerId);

    if (!container) {
      showAllButton.style.display = 'none';
      return;
    }

    var selectorToUse;

    if (itemSelector) {
      selectorToUse = "#".concat(containerId, " ").concat(itemSelector);
    } else if (container.tagName === "TABLE") {
      selectorToUse = "#".concat(containerId, " tbody tr");
    } else {
      console.error("No child selector available");
      return;
    }

    var parsedItemLimit = parseInt(showAllItemLimit, 10);
    var options = {};

    if (!isNaN(parsedItemLimit)) {
      options = _objectSpread(_objectSpread({}, options), {}, {
        itemLimit: parsedItemLimit
      });
    }

    if (showAllItemCountId) {
      options = _objectSpread(_objectSpread({}, options), {}, {
        countFieldId: showAllItemCountId
      });
    }

    new SeeAllHelper(selectorToUse, "#".concat(buttonId), options);
  });
};
var SeeAllHelper = /*#__PURE__*/function () {
  function SeeAllHelper(itemsSelector, seeAllSelector) {
    var _this = this;

    var passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SeeAllHelper);

    this._itemsSelector = itemsSelector;
    this._seeAll = document.querySelector(seeAllSelector);

    if (!this._seeAll) {
      // Running on a page without see all buttton, so stop after counts.
      return;
    }

    this._originalVisibilityOfSeeAll = this._seeAll.style.display;
    var defaults = {
      itemLimit: 5,
      showLessText: "See Less",
      countFieldId: null
    };
    this._options = _objectSpread(_objectSpread({}, defaults), passedOptions);
    this._itemLimit = this._options.itemLimit;
    this._showLessText = this._options.showLessText;
    this._showMoreText = this._seeAll.textContent;
    this._countField = this._options.countFieldId ? document.getElementById(this._options.countFieldId) : null;
    this._showingAll = false;

    this._seeAll.addEventListener('click', function (e) {
      e.preventDefault();

      if (_this._showingAll) {
        _this._hideExcessItems();
      } else {
        _this._showAllItems();
      }

      _this._showingAll = !_this._showingAll;
      _this._seeAll.textContent = _this._showingAll ? _this._showLessText : _this._showMoreText;
    });

    this.recalculate();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(SeeAllHelper, [{
    key: "_showAllItems",
    value: function _showAllItems() {
      var _this2 = this;

      this._allItems.forEach(function (item) {
        item.style.display = _this2._originalVisibilityOfItems;
      });
    }
  }, {
    key: "_hideExcessItems",
    value: function _hideExcessItems() {
      var _this3 = this;

      this._allItems.forEach(function (item, index) {
        var toCheck = index + 1;
        item.style.display = toCheck > _this3._itemLimit ? "none" : _this3._originalVisibilityOfItems;
      });
    }
  }, {
    key: "recalculate",
    value: function recalculate() {
      this._allItems = Array.from(document.querySelectorAll(this._itemsSelector));

      if (this._countField) {
        this._countField.textContent = this._allItems.length;
      }

      if (!this._seeAll) return;

      if (this._allItems.length <= this._itemLimit) {
        this._seeAll.style.display = 'none';
      } else {
        if (!this._originalVisibilityOfItems) {
          this._originalVisibilityOfItems = this._allItems[0].style.display;
        }

        this._seeAll.style.display = this._originalVisibilityOfSeeAll;
      }

      if (!this._showingAll) {
        this._hideExcessItems();
      }
    }
  }]);

  return SeeAllHelper;
}();

/***/ }),

/***/ "./src/js/SelectListTags.js":
/*!**********************************!*\
  !*** ./src/js/SelectListTags.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectListTags; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




/****** 

  Creates a tag list from a select element

  usage:

  new SelectListTag(selectId, revertGroupsId, onUpdateFunc).

  - selectId (required): The id of the select element acting as the source (must have multiple attribute, and all items should be marked as selected)

  - revertGroups (optional): The id of the element that will be clicked to revert selected options (should have is-hidden class to start)

  - onUpdateFunc (required): A function called when a tag has been removed, or options are reverted.. This function will be called with two params, selectedOptions and allOptions.
                             This is intended to make the control more flexible i.e. our first usage is to update label with selected items text elsewhere on page without further coupling.

  - items (optional):  Html option elements to be inserted into the underlying select list before tags generated. 

******/
var SelectListTags = /*#__PURE__*/function () {
  function SelectListTags(selectId, revertGroupsId) {
    var _this = this;

    var onUpdateFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SelectListTags);

    this.onUpdateFunc = onUpdateFunc;
    this.tagOptions = document.getElementById(selectId);
    this.tagOptions.classList.add('is-hidden');

    if (revertGroupsId) {
      this.revertBtn = document.getElementById(revertGroupsId);

      if (this.revertBtn) {
        this.revertBtn.addEventListener('click', function (e) {
          e.preventDefault();

          var options = _this.tagOptions.querySelectorAll('option');

          options.forEach(function (o) {
            return o.selected = true;
          });

          _this.populateTags();

          _this.revertBtn.classList.add('is-hidden');
        });
      }
    }

    if (options) {
      options.forEach(function (o) {
        return _this.tagOptions.appendChild(o);
      });
    } // Now handles passed in select options


    this.allOptions = options || _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.tagOptions.querySelectorAll('option'));

    if (this.revertBtn && this.allOptions.some(function (o) {
      return !o.selected;
    })) {
      this.revertBtn.classList.remove('is-hidden');
    }

    this.tags = document.createElement('div');
    this.tags.addEventListener('click', function (e) {
      e.preventDefault();

      if (e.target.matches('i')) {
        var targetVal = e.target.dataset.val;

        var o = _this.tagOptions.querySelector('option[value="' + targetVal + '"]');

        if (o) {
          o.selected = false;

          if (_this.revertBtn) {
            _this.revertBtn.classList.remove('is-hidden');
          }
        }

        _this.populateTags();
      }
    });
    this.tagOptions.after(this.tags);
    this.populateTags();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SelectListTags, [{
    key: "populateTags",
    value: function populateTags() {
      var _this2 = this;

      this.tags.innerHTML = '';
      var selectedOptions = this.allOptions.filter(function (o) {
        return o.selected;
      });
      selectedOptions.forEach(function (t) {
        _this2.tags.appendChild(_this2.makeTag(t.innerText, t.value));
      });
      this.onUpdateFunc(selectedOptions, this.allOptions);
    }
  }, {
    key: "makeTag",
    value: function makeTag(text, value) {
      var i = document.createElement('i');
      i.classList.add("button__icon");
      i.dataset.val = value;
      i.innerText = "clear";
      var tag = document.createElement('div');
      tag.classList.add('tag');
      tag.appendChild(document.createTextNode(text));
      tag.appendChild(i);
      return tag;
    }
  }, {
    key: "clearItems",
    // Deselect all the options in the underlying select list.  Optionally regnerated the tags list. 
    // Optional as not worth overhead if dont need it. 
    value: function clearItems() {
      var repolulateTags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.tagOptions.querySelectorAll('option');
      options.forEach(function (o) {
        return o.selected = false;
      });

      if (repolulateTags) {
        this.populateTags();
      }
    }
  }]);

  return SelectListTags;
}(); // Should have a section like this for each page the control is used on, unless we want it behave exactly the same as a previous version (including ids and update function) 
// *Better still* - have in seperate script file scoped to specific page (like with SelectStaffForMessage.js)




if (document.getElementById('FollowupGroupSelector')) {
  // Prepare an update function if required (optional parameter)
  var span = document.getElementById('ResponseGroupsLabelSpan');

  var onUpdateFunc = function onUpdateFunc(selectedOptions, allOptions) {
    var pluralisedGroups = selectedOptions.length === 1 ? 'group' : 'groups';
    span.innerText = "Send to ".concat(selectedOptions.length, " response ").concat(pluralisedGroups);
  }; // Initialise an instance of the control


  new SelectListTags('FollowupGroupSelector', 'revert_groups', onUpdateFunc);
}

/***/ }),

/***/ "./src/js/SimpleCookieHelper.js":
/*!**************************************!*\
  !*** ./src/js/SimpleCookieHelper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleCookieHelper; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



// Store a simple value in a cookie
var SimpleCookieHelper = /*#__PURE__*/function () {
  function SimpleCookieHelper(name) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SimpleCookieHelper);

    this._name = name;

    this._initialise();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SimpleCookieHelper, [{
    key: "_initialise",
    value: function _initialise() {
      var _this = this;

      var cookieString = document.cookie;
      var cookies = cookieString.split('; ');
      var matchingCookie = cookies.find(function (c) {
        return c.startsWith("".concat(_this._name, "="));
      });
      this._value = matchingCookie ? decodeURIComponent(matchingCookie.split('=')[1]) : '';
    }
  }, {
    key: "set",
    value: function set(value) {
      var newCookie = "".concat(this._name, "=").concat(encodeURIComponent(value), "; path=/; samesite=Strict");
      document.cookie = newCookie;
    }
  }, {
    key: "get",
    value: function get() {
      return this._value;
    }
  }]);

  return SimpleCookieHelper;
}();



/***/ }),

/***/ "./src/js/Start.js":
/*!*************************!*\
  !*** ./src/js/Start.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Remove the no-js class so we are able to tell that js is enabled
// Useful for hiding elements when js not available.
document.body.classList.remove('no-js');
document.body.classList.add('js');

/***/ }),

/***/ "./src/js/ToggleContent.js":
/*!*********************************!*\
  !*** ./src/js/ToggleContent.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.getElementById('Responses') != null) {
  (function () {
    // Find all the response fields and the response list
    var responses = document.querySelectorAll('.response-field');
    var responsesList = document.querySelector('.response-options-list'); // Hide all the empty response fields

    responses.forEach(function (response, idx) {
      if (response.querySelector('.response-option').value.trim() === '') {
        response.style.display = 'none';
      }

      response.dataset.key = idx;
    }); // Reveals the first hidden item

    var showFirstEmpyItem = function showFirstEmpyItem() {
      for (var i = 0; i < responses.length; i++) {
        var currentResponse = responses[i];

        if (currentResponse.style.display === 'none') {
          currentResponse.style.display = 'block';
          return;
        }
      }
    }; // When an item is removed, copy all values forward to fill gaps


    var copyItemsForward = function copyItemsForward(index) {
      for (var idx = index + 1; idx < responses.length; idx++) {
        var prevInput = responses[idx - 1].querySelector('.response-option');
        ;
        var input = responses[idx].querySelector('.response-option');
        prevInput.value = input.value;
      }
    }; //


    var removeLastEmptyItem = function removeLastEmptyItem(removeIdx) {
      // As all copied forward blank last item out
      responses[responses.length - 1].querySelector('.response-option').value = ""; // Go through backwards and hide last visible item

      for (var idx = responses.length - 1; idx >= removeIdx; idx--) {
        if (responses[idx].style.display !== 'none') {
          responses[idx].style.display = 'none';
          return;
        }
      }
    };

    var addResponseButton = document.querySelector("#add_response");
    addResponseButton.addEventListener("click", function (el) {
      el.preventDefault();
      addResponseButton.blur();
      showFirstEmpyItem();
    });
    responsesList.addEventListener('click', function (e) {
      var target = e.target;

      if (target.matches('.btn-remove-response')) {
        e.preventDefault();
        var parent = target.parentNode;
        var removeIdx = parseInt(parent.dataset.key, 10);
        copyItemsForward(removeIdx);
        removeLastEmptyItem(removeIdx);
      }
    });
  })();
}

if (document.getElementById('addPhone') != null) {
  (function (selector) {
    var addPhoneInput = document.getElementById(selector);
    var addPhoneButton = document.querySelector("#addPhoneBtn");
    addPhoneButton.addEventListener("click", function (el) {
      el.preventDefault();
      addPhoneInput.classList.remove("is-hidden");
      addPhoneButton.blur();
      addPhoneButton.disabled = true;
    });
  })("addPhone");
}

if (document.getElementById('addEmail') != null) {
  (function (selector) {
    var addEmailInput = document.getElementById(selector);
    var addEmailButton = document.querySelector("#addEmailBtn");
    addEmailButton.addEventListener("click", function (el) {
      el.preventDefault();
      addEmailInput.classList.remove("is-hidden");
      addEmailButton.blur();
      addEmailButton.disabled = true;
    });
  })("addEmail");
}

if (document.getElementById('add_group') != null) {
  (function (selector) {
    var addGroupButton = document.querySelector("#add_group");
    addGroupButton.addEventListener("click", function (el) {
      el.preventDefault();

      if (document.getElementById('add_group') != null) {
        var saveGroupButton = document.querySelector("#save_group");

        if (saveGroupButton != null) {
          addGroupButton.classList.add("is-hidden");
          addGroupButton.blur();
          addGroupButton.disabled = true;
          saveGroupButton.classList.remove("is-hidden");
        }
      }
    });
  })("add_group");
}

var groupTextarea = document.getElementById("GroupTextarea");

if (groupTextarea != null) {
  groupTextarea.addEventListener('click', function (e) {
    var target2 = e.target;
    var addGroupButton = document.querySelector("#add_group");

    if (target2.matches(".button__icon") && target2.hasAttribute('data-path')) {
      addGroupButton.classList.add("is-hidden");
      addGroupButton.blur();
      addGroupButton.disabled = true;

      if (document.getElementById('add_group') != null) {
        var saveGroupButton = document.querySelector("#save_group");
        saveGroupButton.classList.remove("is-hidden");
      }
    }
  });
}

if (document.querySelectorAll('input.input-validation-error') != null) {
  var inputErrors = document.querySelectorAll('input.input-validation-error');
  var inputErrorsArray = Object.keys(inputErrors);
  inputErrorsArray.forEach(function (key) {
    console.log(inputErrors[key]);
    inputErrors[key].closest('form').classList.remove("is-hidden");
  });
}

/***/ }),

/***/ "./src/js/ToggleSidebar.js":
/*!*********************************!*\
  !*** ./src/js/ToggleSidebar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (function (selector) {
//     var groupTextarea = document.getElementById("GroupTextarea");
//     if (groupTextarea !== null) {
//         groupTextarea.addEventListener("focusin", function() {
//             document.getElementById("Sidebar").classList.add("aside--active");
//         })
//     }
// })("#Sidebar");

/***/ }),

/***/ "./src/js/Utilities.js":
/*!*****************************!*\
  !*** ./src/js/Utilities.js ***!
  \*****************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* 
  Debounce function prevent excessive calls on scroll.
  https://davidwalsh.name/javascript-debounce-function
*/
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/***/ }),

/***/ "./src/js/hint-snackbar.js":
/*!*********************************!*\
  !*** ./src/js/hint-snackbar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (selector) {
  var snackbarStorageItem = window.localStorage.getItem('snackbar');
  var snackbar = document.querySelector(selector); // check if localStrorage 'snackbar' exists and if it doesnt setup object ready for eventListener

  if (snackbarStorageItem !== null) {
    var snackbarStorageItemArray = JSON.parse(snackbarStorageItem); //check if localStrorage 'snackbar' already contains current page path

    if (snackbarStorageItemArray.locations.includes(window.location.pathname)) {
      //if it does then hide the snackbar
      snackbar.checked = true;
    }
  } else {
    var snackbarStorageItemArray = {
      locations: new Array()
    };
  }

  if (snackbar) {
    snackbar.addEventListener("click", function (el) {
      if (!snackbarStorageItemArray.locations.includes(window.location.pathname)) {
        snackbarStorageItemArray.locations.push(window.location.pathname);
        window.localStorage.setItem('snackbar', JSON.stringify(snackbarStorageItemArray));
      }
    });
  }
})("#hint-snackbar");

/***/ }),

/***/ "./src/js/linkify-tables.js":
/*!**********************************!*\
  !*** ./src/js/linkify-tables.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**********************************************************************************/

/*  Wire up tables so that whole row can be clicked, rather than individual cells
/**********************************************************************************/
// Get all table rows that should be clickable
var rowsToLinkify = document.querySelectorAll('table[data-linkable-cell] > tbody > tr'); // Event listener to handle click

var handleRowClick = function handleRowClick(e) {
  // Find the column that should contain the link
  var table = e.target.closest('table');
  var colToParse = table.getAttribute('data-linkable-cell'); // Get the clicked row, as maybe a td clicked.

  var row = e.target.closest('tr');

  try {
    // Try and find the link that should be clicked.
    var col = parseInt(colToParse, 10) + 1;
    var link = row.querySelector("td:nth-child(".concat(col, ") a")); // Click the link or report failure to find

    if (link) {
      link.click();
    } else {
      console.error('No link found in column specified by [data-linkable-cell]');
    }
  } catch (_unused) {
    // Warn of invalid column specified.
    console.error('Invalid value specified by [data-linkable-cell]');
  }
}; // Wire up the listeners


rowsToLinkify.forEach(function (row) {
  return row.addEventListener('click', handleRowClick);
});

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (selector) {
  //get div ID without #
  var menu = document.getElementById(selector.replace(/^#/, '')); // console.log(menu);

  if (menu) {
    var menuButton = document.querySelector(selector + 'Button');
    var menuChild = document.querySelector(menuButton.dataset.target);
    menuButton.addEventListener("click", function (el) {
      // console.log(selector + ' clicked');
      el.preventDefault();
      menuChild.classList.add("menu--active");
    });
    window.addEventListener('click', function (e) {
      if (!menu.contains(e.target)) {
        menuChild.classList.remove("menu--active");
      }
    });
  }
})('#search');

(function (selector) {
  //get div ID without #
  var menu = document.getElementById(selector.replace(/^#/, '')); // console.log(menu);

  if (menu) {
    var menuButton = document.querySelector(selector + 'Button');
    var menuChild = document.querySelector(menuButton.dataset.target);
    menuButton.addEventListener("click", function (el) {
      console.log(selector + ' clicked');
      el.preventDefault();
      menuChild.classList.add("menu--active");
    });
    window.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && menuChild) {
        menuChild.classList.remove("menu--active");
      }
    });
  }
})('#menu');

/***/ }),

/***/ "./src/js/pages/ComposeStaffMessage.js":
/*!*********************************************!*\
  !*** ./src/js/pages/ComposeStaffMessage.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimpleCookieHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimpleCookieHelper */ "./src/js/SimpleCookieHelper.js");
/* harmony import */ var _IdSessionStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IdSessionStorageHelper */ "./src/js/IdSessionStorageHelper.js");
/* harmony import */ var _SelectListTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SelectListTags */ "./src/js/SelectListTags.js");
/* harmony import */ var _SeeAllHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SeeAllHelper */ "./src/js/SeeAllHelper.js");


/* 
    This script is specific to the staff compose page.
*/




var main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-compose')) {
  var addBtn = document.getElementById('add_contact');
  var subjectInput = document.getElementById('subject_input');
  var messageInput = document.getElementById('Input_Message');
  var resendInput = document.getElementById('Input_AutoResendSchedule');
  var responseOptions = Array.from(document.querySelectorAll('.response-option'));
  var cookieHelper = new _SimpleCookieHelper__WEBPACK_IMPORTED_MODULE_1__["default"]('CourierMessageTitle');
  var cookieMessageHelper = new _SimpleCookieHelper__WEBPACK_IMPORTED_MODULE_1__["default"]('CourierMessageContent');
  var cookieAutoResendHelper = new _SimpleCookieHelper__WEBPACK_IMPORTED_MODULE_1__["default"]('CourierMessageResend');
  var cookieResponseHelper = new _SimpleCookieHelper__WEBPACK_IMPORTED_MODULE_1__["default"]('CourierMessageResponses');
  var idsSessionHelper = new _IdSessionStorageHelper__WEBPACK_IMPORTED_MODULE_2__["default"]('CourierMessageUsers');

  var getResponseOptionValuesString = function getResponseOptionValuesString() {
    var nonEmptyOptions = responseOptions.reduce(function (acc, curr) {
      if (curr.value) {
        return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [curr.value]);
      }

      return acc;
    }, []);
    return nonEmptyOptions.join('||');
  };

  addBtn.addEventListener('click', function () {
    cookieHelper.set(subjectInput.value);
    cookieMessageHelper.set(messageInput.value);
    cookieAutoResendHelper.set(resendInput.value);
    cookieResponseHelper.set(getResponseOptionValuesString());
  });
  var tagsSeeAllHelper = new _SeeAllHelper__WEBPACK_IMPORTED_MODULE_4__["SeeAllHelper"]('#AscStaffSelector + div > .tag', '#seeMoreRecipients', {
    itemLimit: 21,
    countFieldId: 'recipientsCount'
  });

  var onUpdateFunc = function onUpdateFunc(selectedOptions, allOptions) {
    idsSessionHelper.filterByIds(selectedOptions.map(function (x) {
      return x.value;
    }));
    tagsSeeAllHelper.recalculate();
  };

  var selectOptions = idsSessionHelper.getItems().map(function (_ref) {
    var id = _ref.id,
        name = _ref.name;
    var option = document.createElement('option');
    option.selected = true;
    option.value = id;
    option.innerText = name;
    return option;
  });
  var slt = new _SelectListTags__WEBPACK_IMPORTED_MODULE_3__["default"]('AscStaffSelector', null, onUpdateFunc, selectOptions);
  tagsSeeAllHelper.recalculate();
  var discardBtn = document.getElementById('btnDiscard');
  discardBtn.addEventListener('click', function () {
    idsSessionHelper.clearItems();
    slt.clearItems();
    tagsSeeAllHelper();
  });
}

/***/ }),

/***/ "./src/js/pages/CourierProfile.js":
/*!****************************************!*\
  !*** ./src/js/pages/CourierProfile.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

// Check we are on the correct page.
var main = document.querySelector('main.courier-profile-page');

if (main) {
  // Add a new phone row
  var newPhoneRow = function newPhoneRow() {
    var newPhone = document.createElement('div');
    newPhone.className = "form__group input__withaction input--profile-phone";
    newPhone.innerHTML = "\n            <input class=\"form__input\" autocomplete=\"off\" type=\"text\" name=\"phone\" value=\"\" placeholder=\"Add a phone number\">\n            <button class=\"button button--remove btn-remove-contact-phone\">Remove</button>\n            <span class=\"field-validation-valid\" data-valmsg-for=\"phone_validation\" data-valmsg-replace=\"true\"></span>\n        ";
    return newPhone;
  }; // Remove gaps in index sequences


  var _renumberInputs = function _renumberInputs(selector, identifier) {
    var inputs = document.querySelectorAll(selector);
    inputs.forEach(function (input, index) {
      var inp = input.querySelector('input');
      inp.id = "".concat(identifier, "_").concat(index, "_");
      inp.name = "".concat(identifier, "[").concat(index, "]");
      var spn = input.querySelector('span');
      spn.setAttribute('data-valmsg-for', "".concat(identifier, "[").concat(index, "]"));
    });
  }; // Add a new email row


  var newEmailRow = function newEmailRow() {
    var newEmailRow = document.createElement('div');
    newEmailRow.className = "form__group input__withaction input--profile-email";
    newEmailRow.innerHTML = "\n            <input class=\"form__input\" autocomplete=\"off\" type=\"text\" name=\"email\" value=\"\" placeholder=\"Add an email address\">\n            <button class=\"button button--remove  btn-remove-contact-email\">Remove</button>\n            <span class=\"field-validation-valid\" data-valmsg-for=\"email_validation\" data-valmsg-replace=\"true\"></span>\n        ";
    return newEmailRow;
  }; // Wire up the button listeners


  // Grab all the buttons that are only show when js enabled
  var addPhoneBtn = document.getElementById('addPhoneBtn');
  var addEmailBtn = document.getElementById('addEmailBtn');
  var removeEmailButtons = Array.from(document.querySelectorAll('.btn-remove-contact-email'));
  var removePhoneButtons = Array.from(document.querySelectorAll('.btn-remove-contact-phone')); // Show all the js only buttons

  [addPhoneBtn, addEmailBtn].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removeEmailButtons), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removePhoneButtons)).forEach(function (el) {
    el.style.display = "";
  });
  var emailsSection = document.querySelector('.form-emails');
  emailsSection.addEventListener('input', function (e) {
    e.target.closest('.form__group').classList.remove('blank');
    setAddEmailButtonVisibilityIfApplicable();
  });
  var phonesSection = document.querySelector('.form-phones');
  phonesSection.addEventListener('input', function (e) {
    e.target.closest('.form__group').classList.remove('blank');
    setAddPhoneButtonVisibilityIfApplicable();
  }); // Check if any empty phone boxes, or email boxes

  var hasEmptyContactBoxeForType = function hasEmptyContactBoxeForType(section, selector) {
    return Array.from(section.querySelectorAll(selector)).some(function (x) {
      return x.value.trim() === '';
    });
  }; // Should not have and add email button if already a blank one available


  var setAddPhoneButtonVisibilityIfApplicable = function setAddPhoneButtonVisibilityIfApplicable() {
    addPhoneBtn.style.display = hasEmptyContactBoxeForType(phonesSection, '.input--profile-phone > input') ? 'none' : 'block';
  }; // Should not have and add phone button if already a blank one available


  var setAddEmailButtonVisibilityIfApplicable = function setAddEmailButtonVisibilityIfApplicable() {
    addEmailBtn.style.display = hasEmptyContactBoxeForType(emailsSection, '.input--profile-email > input') ? 'none' : 'block';
  }; // Get the form, to add remove listeners to


  var contactProfileForm = document.getElementById('contact-profile-form');
  [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removeEmailButtons), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removePhoneButtons)).forEach(function (el) {
    el.closest('.form__group').classList.add('input__withaction');
  }); // Remove excess inputs of these types on load (Added for non js purposes).

  [".input--profile-phone > input", ".input--profile-email > input"].forEach(function (selector) {
    var inputsForSelector = Array.from(document.querySelectorAll(selector));

    if (inputsForSelector.length > 1) {
      inputsForSelector.forEach(function (input) {
        console.dir(input);

        if (input.value.trim() === '') {
          input.closest('.form__group').remove();
        }
      });

      _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');

      _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
    }
  }); // Set correct start state for email and phone add buttons

  setAddPhoneButtonVisibilityIfApplicable();
  setAddEmailButtonVisibilityIfApplicable();
  addPhoneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('section').appendChild(newPhoneRow());

    _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');

    setAddPhoneButtonVisibilityIfApplicable();
  });
  addEmailBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('section').appendChild(newEmailRow());

    _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');

    setAddEmailButtonVisibilityIfApplicable();
  }); // Handle the remove on the parent form, so that will work for new items added after load.

  contactProfileForm.addEventListener('click', function (e) {
    if (e.target.matches('.btn-remove-contact-phone') || e.target.matches('.btn-remove-contact-email')) {
      e.preventDefault(); // Get all the inputs in the parent section

      var inputs = e.target.closest('section').querySelectorAll('input'); // If only one blank it - else remove it

      if (inputs.length === 1) {
        inputs[0].value = '';
      } else {
        // Remove parent form group containing email or phone.
        var formGroup = e.target.closest('.form__group');

        if (formGroup) {
          formGroup.remove();
        }
      }
    }

    if (e.target.matches('.btn-remove-contact-phone')) {
      _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');

      setAddPhoneButtonVisibilityIfApplicable();
    }

    if (e.target.matches('.btn-remove-contact-email')) {
      _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');

      setAddEmailButtonVisibilityIfApplicable();
    }
  });
}

/***/ }),

/***/ "./src/js/pages/SelectStaffForMessage.js":
/*!***********************************************!*\
  !*** ./src/js/pages/SelectStaffForMessage.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IdSessionStorageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IdSessionStorageHelper */ "./src/js/IdSessionStorageHelper.js");
/* harmony import */ var _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DraftMessageDrawer */ "./src/js/DraftMessageDrawer.js");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LazyLoader */ "./src/js/LazyLoader.js");




/* 
    This script is specific to the search staff page.
*/



var main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-index')) {
  var idSh = new _IdSessionStorageHelper__WEBPACK_IMPORTED_MODULE_3__["default"]('CourierMessageUsers');
  var dmd = new _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_4__["default"](idSh.getCount());
  var loader = document.querySelector('.loader');
  var allCheckboxesInTable = Array.from(document.querySelectorAll("#table-select-staff [type=checkbox]")); // Check all items in the local storage

  var itemsThatShouldBeSelected = allCheckboxesInTable.filter(function (cb) {
    return idSh.hasId(cb.value);
  });
  itemsThatShouldBeSelected.forEach(function (i) {
    return i.checked = true;
  });

  var allCheckboxesSelected = function allCheckboxesSelected() {
    return allCheckboxesInTable.every(function (cb) {
      return cb.checked;
    });
  }; // const allContactIds = () => allCheckboxesInTable.map(cb => cb.value);


  var allContacts = function allContacts() {
    return allCheckboxesInTable.map(function (cb) {
      return {
        id: cb.value,
        name: cb.getAttribute('data-contact-name')
      };
    });
  }; // Uses a passed in 'combiner' function to decided how to either add or remove selected results to those from other pages.


  var handleSelectiondChangeMerge = function handleSelectiondChangeMerge(combineFn) {
    var allContactsDisplayed = allContacts();
    var existingContacts = idSh.getItems();
    var newItems = combineFn(existingContacts, allContactsDisplayed);
    idSh.setItems(newItems);
    dmd.update(newItems.length);
  }; // Remove all the ids that were contained in this results page.  Keep result from other pages selected


  var deselectAll = function deselectAll(toDeselect) {
    toDeselect.forEach(function (toDeselect) {
      return toDeselect.checked = false;
    });
    handleSelectiondChangeMerge(function (existingItems, allItemsForGroup) {
      return existingItems.filter(function (_ref) {
        var id = _ref.id;
        return !allItemsForGroup.map(function (i) {
          return i.id;
        }).includes(id);
      });
    });
  }; // Add all the ids that were contained in this results page.  Keep result from other pages selected


  var selectAll = function selectAll(toSelect) {
    toSelect.forEach(function (toSelect) {
      return toSelect.checked = true;
    });
    handleSelectiondChangeMerge(function (existingItems, allItemsForGroup) {
      // get all items on the page not in the existing results
      var groupItemsToAdd = allItemsForGroup.filter(function (_ref2) {
        var id = _ref2.id;
        return !existingItems.map(function (i) {
          return i.id;
        }).includes(id);
      }); // Merge the new items in

      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(existingItems), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(groupItemsToAdd));
    });
  };

  var handleSelectAllChange = function handleSelectAllChange(e) {
    var target = e.target;
    target.checked ? selectAll(allCheckboxesInTable) : deselectAll(allCheckboxesInTable);
  };

  var toggleSelectAllCheckbox = document.querySelector('#cbSelectAll [type=checkbox]');

  if (toggleSelectAllCheckbox) {
    toggleSelectAllCheckbox.addEventListener('change', handleSelectAllChange);

    if (allCheckboxesSelected()) {
      toggleSelectAllCheckbox.checked = true;
    }
  }

  var usersTable = document.getElementById('table-select-staff');
  var usersTableBody;

  if (usersTable) {
    usersTableBody = usersTable.querySelector('tbody');
  }

  var currentPage = 1;
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var criteriaKey = 'criteria';
  var searchCriteriaString = urlParams.has(criteriaKey) ? "?criteria=".concat(urlParams.get(criteriaKey)) : '';

  var getSearchEndpoint = function getSearchEndpoint() {
    return "".concat(location.origin, "/Force/Contacts/").concat(currentPage).concat(searchCriteriaString);
  }; // Add listeners for the checkboxes


  var staffTable = document.getElementById('table-select-staff');

  if (staffTable) {
    staffTable.addEventListener('change', function (_ref3) {
      var target = _ref3.target;

      if (target.matches('input[type=checkbox]')) {
        var newTotal = target.checked ? idSh.add(target.value, target.getAttribute('data-contact-name')) : idSh.remove(target.value);

        if (toggleSelectAllCheckbox) {
          if (!target.checked) {
            // If unchecked deselect the check all.
            toggleSelectAllCheckbox.checked = false;
          } else if (allCheckboxesSelected()) {
            // If checked see if all are now selected.
            toggleSelectAllCheckbox.checked = true;
          }
        }

        dmd.update(newTotal);
      }
    });
  }

  var createCheckboxField = function createCheckboxField(value, checked, name) {
    var cell = document.createElement('td');
    cell.classList.add('checkbox-cell');
    var label = document.createElement('label');
    label.classList.add('checkbox');
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.value = value;
    input.checked = checked;
    input.setAttribute('data-contact-name', name);
    var span = document.createElement('span');
    label.appendChild(input);
    label.appendChild(span);
    cell.appendChild(label);
    return cell;
  };

  var createCellWithText = function createCellWithText(text) {
    var cell = document.createElement('td');
    cell.innerText = text;
    return cell;
  };

  var addRow = function addRow(user) {
    var newRow = document.createElement('tr');
    newRow.appendChild(createCellWithText(user.name));
    newRow.appendChild(createCellWithText(user.collar));
    newRow.appendChild(createCellWithText(user.email));
    newRow.appendChild(createCellWithText(user.phoneNumber));
    newRow.appendChild(createCheckboxField(user.id, idSh.hasId(user.id), user.name));
    usersTableBody.appendChild(newRow);
  };

  var addResultRows = function addResultRows(rows) {
    rows.forEach(addRow);
  };

  if (loader) {
    var loaderPageSize = loader.getAttribute("page-size");
    new _LazyLoader__WEBPACK_IMPORTED_MODULE_5__["default"](loader, /*#__PURE__*/function () {
      var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(done) {
        var endpoint, response, results, hasResults, moreResultsLikely;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // Get the next page index
                currentPage++;
                endpoint = getSearchEndpoint(); // Do the search

                _context.next = 5;
                return window.fetch(endpoint);

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                results = _context.sent;
                hasResults = results.length > 0; // We dont know if there will be more results, but its likely if we return a full page of results

                moreResultsLikely = hasResults;

                if (loaderPageSize) {
                  // We may not have this attribute, but if we do check if the page is full. If not there should be no more results to fetch
                  moreResultsLikely = results.length === parseInt(loaderPageSize, 10);
                }

                if (hasResults) {
                  addResultRows(results);
                }

                done(moreResultsLikely);
                _context.next = 22;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                console.error("Failed to lazy load page ".concat(currentPage, " of AD users"));
                console.error(_context.t0); // Ignore current failed page, so will try again

                currentPage--;
                done(true); // Call done with more to load.
                // TODO: What to do here. If enpoint is down, we would get lots of console errors at the moment....

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }(), {
      debug: false,
      peekDistance: 50
    });
  }
}

/***/ }),

/***/ "./src/js/side.js":
/*!************************!*\
  !*** ./src/js/side.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function menuToggle() {
//    var asideExist = document.getElementById("aside");
//     if(asideExist){
//   document.getElementById("aside").classList.toggle("aside--active");
// }
// }
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('aside--active')) {
        openDropdown.classList.remove('aside--active');
      }
    }
  }
};

var addGroupButton = document.querySelector("#add_group");

if (addGroupButton) {
  addGroupButton.addEventListener("click", function (el) {
    el.preventDefault();
    toggleSidebar();
  });
}

var closeSidebar = document.querySelector('#close_sidebar');

if (closeSidebar) {
  closeSidebar.addEventListener("click", function (el) {
    el.preventDefault();
    toggleSidebar();
  });
}

function toggleSidebar() {
  var x = document.getElementById("sidebar");
  var y = document.getElementById("main"); // if (x.style.display === "none") {
  //   x.style.display = "block";

  if (!x.classList.contains('aside--active')) {
    x.classList.add('aside--active'); // y.classList.add('main--hidden');
    // }
  } else if (x.classList.contains('aside--active')) {
    x.classList.remove('aside--active'); // y.classList.remove('main--hidden');
    // }
  }
}

/***/ }),

/***/ "./src/js/snackbar.js":
/*!****************************!*\
  !*** ./src/js/snackbar.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (selector) {
  var snackbar = document.querySelector(selector);
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  var removeQueryParam = function removeQueryParam(param) {
    if (urlParams.has(param)) {
      urlParams.delete(param);
      window.history.replaceState({}, document.title, "".concat(window.location.pathname, "?=").concat(urlParams.toString()));
    }
  };

  var contactParam = urlParams.get('ContactAdded');
  var OrganisationParam = urlParams.get('OrganisationAdded');
  var MessageSentParam = urlParams.get('MessageSent');
  var ForceContactUpdatedParam = urlParams.get('ForceContactUpdated');
  var snackbarMessage = '';

  if (contactParam === 'True') {
    removeQueryParam('ContactAdded');
    snackbarMessage = 'New contact has been created';
  } else if (OrganisationParam === 'True') {
    removeQueryParam('OrganisationAdded');
    snackbarMessage = 'New organisation has been created';
  } else if (MessageSentParam === 'True') {
    /* 
        Bit hacky, but clearing the sessionStorage here to clear message state here. 
    */
    sessionStorage.removeItem("CourierMessageUsers");
    removeQueryParam('MessageSent');
    snackbarMessage = 'Message sent';
  } else if (ForceContactUpdatedParam && ForceContactUpdatedParam.toLowerCase() === 'true') {
    removeQueryParam('ForceContactUpdated');
    snackbarMessage = 'Personal contact details updated';
  }

  if (snackbarMessage) {
    snackbar.classList.add('snackbar--active');
    snackbar.innerHTML = snackbarMessage;
    setTimeout(function () {
      snackbar.classList.remove('snackbar--active');
    }, 5000);
  }
})("#snackbar");

/***/ }),

/***/ "./src/js/tables.js":
/*!**************************!*\
  !*** ./src/js/tables.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (function (selector) {
//     //function to make whole table tr clickable
//     document.querySelectorAll('table tr').forEach( function( el ) {
//         if (el.dataset.href !=null) {
//             el.classList.add('clickable');
//             el.addEventListener("click", function(el) {
//                 window.location = this.dataset.href;
//             });
//         }
//     });
// })("table");

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/hint-snackbar.js ./src/js/SelectListTags.js ./src/js/linkify-tables.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ./src/js/pages/CourierProfile.js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/Start.js */"./src/js/Start.js");
__webpack_require__(/*! ./src/js/GroupsTree.js */"./src/js/GroupsTree.js");
__webpack_require__(/*! ./src/js/side.js */"./src/js/side.js");
__webpack_require__(/*! ./src/js/ToggleContent.js */"./src/js/ToggleContent.js");
__webpack_require__(/*! ./src/js/ToggleSidebar.js */"./src/js/ToggleSidebar.js");
__webpack_require__(/*! ./src/js/tables.js */"./src/js/tables.js");
__webpack_require__(/*! ./src/js/SeeAll.js */"./src/js/SeeAll.js");
__webpack_require__(/*! ./src/js/menu.js */"./src/js/menu.js");
__webpack_require__(/*! ./src/js/snackbar.js */"./src/js/snackbar.js");
__webpack_require__(/*! ./src/js/hint-snackbar.js */"./src/js/hint-snackbar.js");
__webpack_require__(/*! ./src/js/SelectListTags.js */"./src/js/SelectListTags.js");
__webpack_require__(/*! ./src/js/linkify-tables.js */"./src/js/linkify-tables.js");
__webpack_require__(/*! ./src/js/pages/SelectStaffForMessage.js */"./src/js/pages/SelectStaffForMessage.js");
__webpack_require__(/*! ./src/js/pages/ComposeStaffMessage.js */"./src/js/pages/ComposeStaffMessage.js");
module.exports = __webpack_require__(/*! ./src/js/pages/CourierProfile.js */"./src/js/pages/CourierProfile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saW5raWZ5LXRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ29tcG9zZVN0YWZmTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ291cmllclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL1NlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmxlcy5qcyJdLCJuYW1lcyI6WyJCb3R0b21EcmF3ZXIiLCJfb3BlbkNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJEcmFmdE1lc3NhZ2VEcmF3ZXIiLCJudW1iZXJPZlJlY2lwaWVudHMiLCJ0b3RhbFNlbGVjdG9yIiwiY29va2llSGVscGVyIiwiU2ltcGxlQ29va2llSGVscGVyIiwiX3RvdGFsc0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXQiLCJFcnJvciIsIl9ib3R0b21EcmF3ZXIiLCJ1cGRhdGUiLCJpbm5lclRleHQiLCJzaG93IiwiaGlkZSIsImdyb3VwRXhpc3QiLCJnZXRFbGVtZW50QnlJZCIsInVzZUNoZWNrYm94ZXMiLCJoYXNBdHRyaWJ1dGUiLCJ1c2VTaW5nbGVTZWxlY3RDaGVja2JveCIsImxvY2tSb290Tm9kZSIsInNlbGVjdG9yIiwiaW50aWFsbHlTZWxlY3RlZE5vZGVzIiwiZ3JvdXBTZWxlY3QiLCJncm91cFRleHRhcmVhIiwidGFnc1NlZUFsbEhlbHBlciIsInBhcmVudEVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvbnNOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInZhbHVlIiwiaXRlbUxpbWl0IiwiU2VlQWxsSGVscGVyIiwiY291bnRGaWVsZElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicGF0aFRvVW5jaGVjayIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjYlNlbGVjdG9yIiwiY2hlY2JveFRvVW5jaGVjayIsImNsaWNrIiwicmVjYWxjdWxhdGUiLCJzZWFyY2hQYXJ0cyIsImdldFVybFZhcnMiLCJ2YXJzIiwicGFydHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtIiwia2V5IiwicGFnZVBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImdyb3VwUGFyYW0iLCJncm91cCIsInNlYXJjaFBhcmFtIiwiU2VhcmNoIiwiZ2V0UGFnZVBhdGhGb3JHcm91cCIsImdycCIsInNob3VsZFBhcmVudEJlT3BlbiIsInBhdGgiLCJwYXRoVG9DaGVjayIsInN0YXJ0c1dpdGgiLCJpc1NlbGVjdGVkR3JvdXAiLCJwYXJhbXNUb0NoZWNrIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYnVpbGRMaW5rIiwidGV4dCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiYnVpbGRDaGVja2JveCIsInBhcmVudENoZWNrZWQiLCJjaGVja2JveCIsInR5cGUiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiaWQiLCJuZXdQYXJlbnRTZWxlY3RlZCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm5ld0NoZWNrZWQiLCJpbmRleE9mIiwibGFiZWwiLCJjaGVja1NwYW4iLCJib3JkZXJTcGFuIiwiYXBwZW5kQ2hpbGQiLCJidWlsZENoZWNrYm94TGFiZWwiLCJjaGVja2JveExhYmVsIiwiaW5uZXJIVE1MIiwiZm9yIiwidHJhbnNmZXJWYWx1ZXMiLCJkYXRhIiwiZWxlbXMiLCJwb3B1bGF0ZUdyb3VwRmllbGQiLCJ0ZXh0YXJlYSIsImVsZW1lbnQiLCJleGlzdGluZ09wdGlvblZhbHVlcyIsIkFycmF5IiwiZnJvbSIsIm9wdGlvbnMiLCJtYXAiLCJvcHQiLCJkYXRhX2kiLCJkYXRhX2N1cnJlbnQiLCJzdWJzdHJpbmciLCJuZXdPcHRpb24iLCJzZWxlY3RlZCIsImFwcGVuZENoaWxkcmVuRm9yTW9kZSIsInBhcmVudCIsImNoZWNrYm94UmVzdWx0IiwiZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudCIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInVwZGF0ZXJGbiIsImN1cnJlbnRMb29wQ2hpbGQiLCJoYW5kbGVDaGVja2JveENsaWNrIiwicGFyZW50TGkiLCJwYXJlbnROb2RlIiwiYWxsR3JvdXBDaGVja2JveGVzIiwiY2hlY2tib3hUb1VwZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRDaGVja2JveGVzIiwiaGlkZGVuRmllbGQiLCJzdHJ1Y3R1cmUiLCJvcHRpb25faSIsIm9wdGlvbiIsInNlZ21lbnRzIiwic3BsaXQiLCJub2RlVG9DaGVjayIsInNlZ21lbnRfaSIsInNlZyIsInRyZWVDb250YWluZXIiLCJhY3RpdmVDaGlsZHJlbiIsImFjX2kiLCJhY3RpdmVDaGlsZCIsImRpc3BsYXlDaGlsZEtleXMiLCJjdXJyVGV4dCIsImN1cnJQYXRoIiwib2JqIiwiZWxlbWVudFRvQWRkVG8iLCJsZXZlbCIsInBhcmVudHNDaGVja2VkIiwiY2hpbGRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudENoZWNrZWRTdGF0ZSIsImNoaWxkTGlzdEl0ZW0iLCJjaGlsZExpc3QiLCJja19pIiwiY2hpbGRLZXkiLCJyZXBsYWNlQ2hpbGQiLCJJZFNlc3Npb25TdG9yYWdlSGVscGVyIiwiX25hbWUiLCJpbml0aWFsIiwiX2luaXRpYWxpc2UiLCJfaXRlbXMiLCJNYXAiLCJmb3JFYWNoIiwic2V0Iiwic2VsZWN0ZWRJdGVtc0pzb24iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJfcGVyc2lzdCIsIkpTT04iLCJwYXJzZSIsIml0ZW1zIiwiZ2V0SXRlbXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX3VwZGF0ZSIsImdldENvdW50IiwiaWRzIiwiaWRzVG9LZWVwIiwiZ2V0SWRzIiwiaW5jbHVkZXMiLCJzaXplIiwiZGVsZXRlIiwiZW50cmllcyIsImhhcyIsInNldEl0ZW1zIiwiQ291cmllckxhenlMb2FkZXIiLCJsb2FkZXJFbGVtZW50IiwibG9hZGVyRm4iLCJjb25maWdPYmoiLCJjb25maWdEZWZhdWx0cyIsImxvYWRlckNsYXNzIiwibG9hZGVyTG9hZGluZ0NsYXNzIiwiZGVib3VuY2VNcyIsInBlZWtEaXN0YW5jZSIsImRlYnVnIiwiX2xvYWRlciIsIl9sb2FkZXJGdW5jIiwiX21haW4iLCJfY29uZmlnIiwiX2hhc0xpc3RlbmVyc0FkZGVkIiwiX2xhenlMb2FkQ2hlY2siLCJkZWJvdW5jZSIsIl9kb0xvYWRNb3JlQ2hlY2siLCJfY29uZGl0aW9uYWxEZWJ1Z0xvZyIsIl9zdG9wTGlzdGVuaW5nIiwiX2RvbmVTZWFyY2hpbmciLCJfc3RhcnRMaXN0ZW5pbmciLCJiaW5kIiwidmlzaWJsZSIsIm1vcmVUb0xvYWQiLCJfc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvRGVidWciLCJsb2dnZXJGdW5jIiwiY29uc29sZSIsImxvZyIsImhpZ2hlc3RWaXNpYmxlWVBvcyIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibG9hZE1vcmVUcmlnZ2VyUG9zIiwiTWF0aCIsIm1pbiIsIm9mZnNldFRvcCIsInBlZWtQb3NpdGlvblZpc2libGUiLCJzaG91bGRMb2FkTW9yZSIsInRhYmxlIiwiU2VlQWxsQXR0cmlidXRlSGVscGVyIiwic2hvd01vcmVCdXR0b25zIiwic2hvd0FsbEJ1dHRvbiIsImNvbnRhaW5lcklkIiwiaXRlbVNlbGVjdG9yIiwic2hvd0FsbEl0ZW1MaW1pdCIsInNob3dBbGxJdGVtQ291bnRJZCIsImJ1dHRvbklkIiwiY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwic2VsZWN0b3JUb1VzZSIsInRhZ05hbWUiLCJlcnJvciIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwiaXNOYU4iLCJpdGVtc1NlbGVjdG9yIiwic2VlQWxsU2VsZWN0b3IiLCJwYXNzZWRPcHRpb25zIiwiX2l0ZW1zU2VsZWN0b3IiLCJfc2VlQWxsIiwiX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsIiwiZGVmYXVsdHMiLCJzaG93TGVzc1RleHQiLCJfb3B0aW9ucyIsIl9pdGVtTGltaXQiLCJfc2hvd0xlc3NUZXh0IiwiX3Nob3dNb3JlVGV4dCIsIl9jb3VudEZpZWxkIiwiX3Nob3dpbmdBbGwiLCJfaGlkZUV4Y2Vzc0l0ZW1zIiwiX3Nob3dBbGxJdGVtcyIsIl9hbGxJdGVtcyIsIml0ZW0iLCJfb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcyIsImluZGV4IiwidG9DaGVjayIsIlNlbGVjdExpc3RUYWdzIiwic2VsZWN0SWQiLCJyZXZlcnRHcm91cHNJZCIsIm9uVXBkYXRlRnVuYyIsInRhZ09wdGlvbnMiLCJyZXZlcnRCdG4iLCJvIiwicG9wdWxhdGVUYWdzIiwiYWxsT3B0aW9ucyIsInNvbWUiLCJ0YWdzIiwidGFyZ2V0VmFsIiwiZGF0YXNldCIsInZhbCIsImFmdGVyIiwic2VsZWN0ZWRPcHRpb25zIiwiZmlsdGVyIiwidCIsIm1ha2VUYWciLCJ0YWciLCJjcmVhdGVUZXh0Tm9kZSIsInJlcG9sdWxhdGVUYWdzIiwic3BhbiIsInBsdXJhbGlzZWRHcm91cHMiLCJjb29raWVTdHJpbmciLCJjb29raWUiLCJjb29raWVzIiwibWF0Y2hpbmdDb29raWUiLCJmaW5kIiwiYyIsIl92YWx1ZSIsIm5ld0Nvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3BvbnNlcyIsInJlc3BvbnNlc0xpc3QiLCJyZXNwb25zZSIsImlkeCIsInRyaW0iLCJzaG93Rmlyc3RFbXB5SXRlbSIsImN1cnJlbnRSZXNwb25zZSIsImNvcHlJdGVtc0ZvcndhcmQiLCJwcmV2SW5wdXQiLCJpbnB1dCIsInJlbW92ZUxhc3RFbXB0eUl0ZW0iLCJyZW1vdmVJZHgiLCJhZGRSZXNwb25zZUJ1dHRvbiIsImVsIiwiYmx1ciIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNsb3Nlc3QiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNuYWNrYmFyU3RvcmFnZUl0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJzbmFja2JhciIsInNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSIsImxvY2F0aW9ucyIsInJvd3NUb0xpbmtpZnkiLCJoYW5kbGVSb3dDbGljayIsImNvbFRvUGFyc2UiLCJyb3ciLCJjb2wiLCJtZW51IiwibWVudUJ1dHRvbiIsIm1lbnVDaGlsZCIsIm1haW4iLCJhZGRCdG4iLCJzdWJqZWN0SW5wdXQiLCJtZXNzYWdlSW5wdXQiLCJyZXNlbmRJbnB1dCIsInJlc3BvbnNlT3B0aW9ucyIsImNvb2tpZU1lc3NhZ2VIZWxwZXIiLCJjb29raWVBdXRvUmVzZW5kSGVscGVyIiwiY29va2llUmVzcG9uc2VIZWxwZXIiLCJpZHNTZXNzaW9uSGVscGVyIiwiZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmciLCJub25FbXB0eU9wdGlvbnMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiam9pbiIsImZpbHRlckJ5SWRzIiwieCIsInNlbGVjdE9wdGlvbnMiLCJzbHQiLCJkaXNjYXJkQnRuIiwiY2xlYXJJdGVtcyIsIm5ld1Bob25lUm93IiwibmV3UGhvbmUiLCJjbGFzc05hbWUiLCJfcmVudW1iZXJJbnB1dHMiLCJpZGVudGlmaWVyIiwiaW5wdXRzIiwiaW5wIiwic3BuIiwibmV3RW1haWxSb3ciLCJhZGRQaG9uZUJ0biIsImFkZEVtYWlsQnRuIiwicmVtb3ZlRW1haWxCdXR0b25zIiwicmVtb3ZlUGhvbmVCdXR0b25zIiwiZW1haWxzU2VjdGlvbiIsInNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSIsInBob25lc1NlY3Rpb24iLCJzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUiLCJoYXNFbXB0eUNvbnRhY3RCb3hlRm9yVHlwZSIsInNlY3Rpb24iLCJjb250YWN0UHJvZmlsZUZvcm0iLCJpbnB1dHNGb3JTZWxlY3RvciIsImRpciIsImZvcm1Hcm91cCIsImlkU2giLCJkbWQiLCJsb2FkZXIiLCJhbGxDaGVja2JveGVzSW5UYWJsZSIsIml0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQiLCJjYiIsImhhc0lkIiwiYWxsQ2hlY2tib3hlc1NlbGVjdGVkIiwiZXZlcnkiLCJhbGxDb250YWN0cyIsImhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSIsImNvbWJpbmVGbiIsImFsbENvbnRhY3RzRGlzcGxheWVkIiwiZXhpc3RpbmdDb250YWN0cyIsIm5ld0l0ZW1zIiwiZGVzZWxlY3RBbGwiLCJ0b0Rlc2VsZWN0IiwiZXhpc3RpbmdJdGVtcyIsImFsbEl0ZW1zRm9yR3JvdXAiLCJzZWxlY3RBbGwiLCJ0b1NlbGVjdCIsImdyb3VwSXRlbXNUb0FkZCIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsInRvZ2dsZVNlbGVjdEFsbENoZWNrYm94IiwidXNlcnNUYWJsZSIsInVzZXJzVGFibGVCb2R5IiwiY3VycmVudFBhZ2UiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImNyaXRlcmlhS2V5Iiwic2VhcmNoQ3JpdGVyaWFTdHJpbmciLCJnZXRTZWFyY2hFbmRwb2ludCIsInN0YWZmVGFibGUiLCJuZXdUb3RhbCIsImNyZWF0ZUNoZWNrYm94RmllbGQiLCJjZWxsIiwiY3JlYXRlQ2VsbFdpdGhUZXh0IiwiYWRkUm93IiwidXNlciIsIm5ld1JvdyIsImNvbGxhciIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJhZGRSZXN1bHRSb3dzIiwicm93cyIsImxvYWRlclBhZ2VTaXplIiwiTGF6eUxvYWRlciIsImRvbmUiLCJlbmRwb2ludCIsImZldGNoIiwianNvbiIsInJlc3VsdHMiLCJoYXNSZXN1bHRzIiwibW9yZVJlc3VsdHNMaWtlbHkiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsInkiLCJyZW1vdmVRdWVyeVBhcmFtIiwicGFyYW0iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJ0b1N0cmluZyIsImNvbnRhY3RQYXJhbSIsIk9yZ2FuaXNhdGlvblBhcmFtIiwiTWVzc2FnZVNlbnRQYXJhbSIsIkZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSIsInNuYWNrYmFyTWVzc2FnZSIsInJlbW92ZUl0ZW0iLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFD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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFP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O0FBQ3pCTixvQkFBZ0IsQ0FBQyxjQUFELENBQWhCO0FBQ0FVLG1CQUFlLEdBQUcsOEJBQWxCO0FBQ0gsR0FIRCxNQUdPLElBQUlILGlCQUFpQixLQUFLLE1BQTFCLEVBQWtDO0FBQ3JDUCxvQkFBZ0IsQ0FBQyxtQkFBRCxDQUFoQjtBQUNBVSxtQkFBZSxHQUFHLG1DQUFsQjtBQUNILEdBSE0sTUFHQSxJQUFJRixnQkFBZ0IsS0FBSyxNQUF6QixFQUFpQztBQUNwQzs7O0FBR0E3UyxrQkFBYyxDQUFDZ1QsVUFBZixDQUEwQixxQkFBMUI7QUFDQVgsb0JBQWdCLENBQUMsYUFBRCxDQUFoQjtBQUNBVSxtQkFBZSxHQUFHLGNBQWxCO0FBQ0gsR0FQTSxNQU9BLElBQUlELHdCQUF3QixJQUFJQSx3QkFBd0IsQ0FBQ0csV0FBekIsT0FBMkMsTUFBM0UsRUFBbUY7QUFDdEZaLG9CQUFnQixDQUFDLHFCQUFELENBQWhCO0FBQ0FVLG1CQUFlLEdBQUcsa0NBQWxCO0FBQ0g7O0FBRUQsTUFBSUEsZUFBSixFQUFxQjtBQUNqQmxJLFlBQVEsQ0FBQ3ZWLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUF2QjtBQUNBc1YsWUFBUSxDQUFDclAsU0FBVCxHQUFxQnVYLGVBQXJCO0FBRUFySSxjQUFVLENBQUMsWUFBVTtBQUNqQkcsY0FBUSxDQUFDdlYsU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsa0JBQTFCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBRUosQ0EvQ0QsRUErQ0csV0EvQ0gsRTs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGUiLCJmaWxlIjoiZGlzdC9qcy9zY3JpcHRzLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLypcclxuIENsYXNzIHRoYXQgZmFjaWxpdGF0ZSB0aGUgaGlkaW5nIGFuZCBzaG93aW5nIG9mIHRoZSBib3R0b20gYmFyLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3R0b21EcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlbkNsYXNzID0gXCJib3R0b20tZHJhd2VyLW9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBCb3R0b21EcmF3ZXIgZnJvbSAnLi9Cb3R0b21EcmF3ZXInO1xyXG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4vU2ltcGxlQ29va2llSGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0TWVzc2FnZURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlJlY2lwaWVudHMsIHRvdGFsU2VsZWN0b3I9XCIuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RvdGFsXCIpIHtcclxuICAgICAgICBjb25zdCBjb29raWVIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG90YWxTZWxlY3Rvcik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190aXRsZScpLnRleHRDb250ZW50ID0gY29va2llSGVscGVyLmdldCgpIHx8ICdVbnRpdGxlZCc7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b3RhbHNFbGVtZW50KSB7IHRocm93IEVycm9yKGBObyBlbGVtZW50IG1hdGNoaW5nIHRoZSBwYXNzZWQgaW4gc2VsZWN0b3IgJHt0b3RhbFNlbGVjdG9yfWApOyB9XHJcbiAgICAgICAgdGhpcy5fYm90dG9tRHJhd2VyID0gbmV3IEJvdHRvbURyYXdlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKG51bWJlck9mUmVjaXBpZW50cyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50LmlubmVyVGV4dCA9IG51bWJlck9mUmVjaXBpZW50cztcclxuICAgICAgICBudW1iZXJPZlJlY2lwaWVudHMgPyB0aGlzLl9ib3R0b21EcmF3ZXIuc2hvdygpIDogdGhpcy5fYm90dG9tRHJhd2VyLmhpZGUoKTtcclxuICAgIH1cclxufSIsIiBpbXBvcnQge1NlZUFsbEhlbHBlcn0gZnJvbSAnLi9TZWVBbGxIZWxwZXInO1xyXG4gXHJcbiB2YXIgZ3JvdXBFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XHJcbiAgICBpZihncm91cEV4aXN0KXtcclxuXHJcbiAgICAgICAgdmFyIHVzZUNoZWNrYm94ZXMgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94ID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1zaW5nbGUtc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIGxvY2tSb290Tm9kZSA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLWxvY2stcm9vdCcpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3RvciwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAvL0NoZWNrIG9uIHBhZ2Ugd2hldGhlciBHcm91cCBNdWx0aSBTZWxlY3QgZXhpc3RzXHJcbiAgICB2YXIgaW50aWFsbHlTZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwU2VsZWN0b3JcIik7XHJcbiAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuICAgIFxyXG4gICAgbGV0IHRhZ3NTZWVBbGxIZWxwZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIElmIHRoZSBHcm91cCBNdWx0aSBTZWxlY3QgZG9lcyBleGlzdCwgaGlkZSBpdCAoaWYgSlMgZW5hYmxlZClcclxuICAgIGlmIChncm91cFNlbGVjdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGdyb3VwU2VsZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICBncm91cFRleHRhcmVhLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgLy8gR3JhYiBhbGwgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkXHJcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uc05vZGVzID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE9wdGlvbnNOb2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgaW50aWFsbHlTZWxlY3RlZE5vZGVzLnB1c2goc2VsZWN0ZWRPcHRpb25zTm9kZXNbaV0udmFsdWUgfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbUxpbWl0ID0gMjE7XHJcblxyXG4gICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIgID0gbmV3IFNlZUFsbEhlbHBlcignI0dyb3VwVGV4dGFyZWEgPiAudGFnJywgJyNzZWVNb3JlR3JvdXBzJywgeyBpdGVtTGltaXQsIGNvdW50RmllbGRJZDogJ2dyb3Vwc0NvdW50JyB9KTtcclxuXHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aFRvVW5jaGVjayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIikucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiU2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1jaGVja2JveF0uR3JvdXBJdGVtW3ZhbHVlPVwiJytwYXRoVG9VbmNoZWNrKydcIl0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNib3hUb1VuY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNiU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNib3hUb1VuY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjYm94VG9VbmNoZWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFnc1NlZUFsbEhlbHBlci5yZWNhbGN1bGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlYXJjaFBhcnRzID0gKGZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XHJcbiAgICAgICAgdmFyIHZhcnMgPSB7fTtcclxuICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksIGZ1bmN0aW9uKG0sa2V5LHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgcGFnZVBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/Z3JvdXA9XCI7XHJcbiAgICB2YXIgZ3JvdXBQYXJhbSA9IHNlYXJjaFBhcnRzLmdyb3VwO1xyXG4gICAgdmFyIHNlYXJjaFBhcmFtID0gc2VhcmNoUGFydHMuU2VhcmNoO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGJ1aWxkIHRoZSBwYXRoXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlUGF0aEZvckdyb3VwKGdyb3VwKSB7XHJcbiAgICAgIHZhciBncnAgPSBncm91cCA9PT0gXCJcIiA/IFwiXFxcXFwiIDogZ3JvdXA7XHJcbiAgICAgIHJldHVybiBwYWdlUGF0aCArIGdycDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGQgc2hvdWxkIGJlIG9wZW4gaS5lLiB0byByZXZlYWwgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBncm91cFxyXG4gICAgZnVuY3Rpb24gc2hvdWxkUGFyZW50QmVPcGVuKHBhdGgpIHtcclxuICAgICAgICBpZiAoIWdyb3VwUGFyYW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCArIFwiXFxcXFwiKTtcclxuICAgICAgICByZXR1cm4gZ3JvdXBQYXJhbS5zdGFydHNXaXRoKHBhdGhUb0NoZWNrKSAmJiBncm91cFBhcmFtICE9IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZGVkIGlzIHRoZSBjdXJyZW50bHlTZWxlY3RlZEdyb3VwXHJcbiAgICBmdW5jdGlvbiBpc1NlbGVjdGVkR3JvdXAocGF0aCkge1xyXG4gICAgICAgIHZhciBwYXJhbXNUb0NoZWNrID0gZGVjb2RlVVJJQ29tcG9uZW50KGdyb3VwUGFyYW0gfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoIHx8IFwiXFxcXFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1RvQ2hlY2sgPT09IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBsaW5rIGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkTGluayh0ZXh0LCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBsaW5rLmhyZWYgPSBnZXRQYWdlUGF0aEZvckdyb3VwKHBhdGgpO1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rXCIpO1xyXG5cclxuICAgICAgICAvLyBOQi4gIE9yaWdpbmFsbHkgd2UgZGlkbnQgd2FudCB0aGUgY3VycmVudCBjbGFzcyB0byBiZSBhZGRlZCBpZiBkb2luZyBhIHNlYXJjaCwgYnV0IHRoaW5rIHdlIGRvIG5vdy5cclxuICAgICAgICAvLyBpZiAoKCFzZWFyY2hQYXJhbSkgJiYgIGlzU2VsZWN0ZWRHcm91cChwYXRoKSkge1xyXG4gICAgICAgIC8vIGlmIChpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcclxuICAgICAgICAvLyAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpbmstLWN1cnJlbnRcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBsYWJlbCBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94KHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJHcm91cEl0ZW1cIik7XHJcbiAgICAgICAgY2hlY2tib3gubmFtZSA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBwYXRoO1xyXG4gICAgICAgIGNoZWNrYm94LmlkID0gdGV4dDtcclxuICAgICAgICB2YXIgbmV3UGFyZW50U2VsZWN0ZWQgPSBwYXJlbnRDaGVja2VkO1xyXG5cclxuICAgICAgICBpZiAocGF0aCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgdGhlIHJvb3Qgbm9kZSBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIGNoZWNrZWQgQlVUIHRoZSBjaGlsZHJlbiBvZiB0aGlzIG5vZGUgc2hvdWxkIGFjdCBhcyB0aG91Z2ggaXQgaXNudCBjaGVja2VkIHNvIHdlIGRvbnQgdXBkYXRlIHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q2hlY2tlZCAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBzZWxlY3RlZCBhbGwgaXRzIGNoaWxkcmVuIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgdW5jaGVja2VkXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBub3QgY2hlY2tlZCBpdHMgY2hpbGRyZW4gc2VsZWN0ZWQgc3RhdGUgZGVwZW5kIG9uIHRoZSBjaGlsZHMgdmFsdWUsIGFuZCBub3QgYmUgZGlzYWJsZWRcclxuICAgICAgICAgICAgdmFyIG5ld0NoZWNrZWQgPSBpbnRpYWxseVNlbGVjdGVkTm9kZXMuaW5kZXhPZihwYXRoIHx8ICdcXFxcJykgPj0gMDtcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgICAgIG5ld1BhcmVudFNlbGVjdGVkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0eWxlIGFzIGEgcmFkaW8gYnV0dG9uXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIHZhciBjaGVja1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNoZWNrU3Bhbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9fY2hlY2snKTtcclxuICAgICAgICAgICAgdmFyIGJvcmRlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2JvcmRlcicpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja1NwYW4pO1xyXG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChib3JkZXJTcGFuKTtcclxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ID0gbGFiZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge2NoZWNrYm94LCBuZXdQYXJlbnRTZWxlY3RlZH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGNoZWNrYm94IGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveExhYmVsLmZvciA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVja2JveExhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zZmVyVmFsdWVzKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcblxyXG4gICAgICAgIHZhciBlbGVtcz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkdyb3VwSXRlbScpXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7aTxlbGVtcy5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2tSb290Tm9kZSAmJiAhKGVsZW1zW2ldLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vLW9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtc1tpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVsZW1zW2ldLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKSB7XHJcblxyXG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuICAgICAgICBpZiAodGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdHcm91cFNlbGVjdG9yJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdPcHRpb25WYWx1ZXMgPSBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgZGF0YV9pID0gMDsgZGF0YV9pIDwgZGF0YS5sZW5ndGg7IGRhdGFfaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhX2N1cnJlbnQgPSBkYXRhW2RhdGFfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPkFsbCBDb250YWN0IEdyb3VwczxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj4nICsgZGF0YV9jdXJyZW50LnN1YnN0cmluZygxKSArICc8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBvcHRpb24gZXhpc3RzIC0gYWRkIGl0IGlmIG5vdFxyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nT3B0aW9uVmFsdWVzLmluZGV4T2YoZGF0YV9jdXJyZW50KSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBkYXRhX2N1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGRhdGFfY3VycmVudDtcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zW2ldLnNlbGVjdGVkID0gZGF0YS5pbmRleE9mKGVsZW1lbnQub3B0aW9uc1tpXS52YWx1ZSkgPj0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFnc1NlZUFsbEhlbHBlci5yZWNhbGN1bGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbkZvck1vZGUocGFyZW50LCB0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKHVzZUNoZWNrYm94ZXMgfHwgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIHRoZSBibGFuayB2YWx1ZSBmb3IgJ0FsbCBDb250YWN0IEdyb3VwcydcclxuICAgICAgICAgICAgaWYgKHBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcXFxcXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tib3hSZXN1bHQgPSBidWlsZENoZWNrYm94KHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hSZXN1bHQuY2hlY2tib3gpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3hSZXN1bHQubmV3UGFyZW50U2VsZWN0ZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaW5rIHRvIHJlZnJlc2ggcGFnZSB3aXRoIHNlbGVjdGVkIG5vZGUuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZExpbmsodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjdXJyZW50LCBjaGlsZHJlbiwgdXBkYXRlckZuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudExvb3BDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudExvb3BDaGlsZCAhPT0gY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlckZuKGN1cnJlbnRMb29wQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgY2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudExpID0gY2hlY2tib3gucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgb25seSBvbmUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQsIGFuZCB0aGUgc2VsZWN0ZWQgaXRlbSBjYW5ub3QgYmUgZGVzZWxldGVkLlxyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFsbEdyb3VwQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdCBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgYWxsR3JvdXBDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhcmVudExpLmNsYXNzTGlzdC5jb250YWlucygnZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnQnKSl7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNoaWxkQ2hlY2tib3hlcyA9IHBhcmVudExpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3gnKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcmFiIHRoZSBzZWxlY3QgbGlzdCBhbmQgYWxsIG9mIGl0cyBvcHRpb25zXHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIHZhciBvcHRpb25zID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuXHJcbiAgICB2YXIgaGlkZGVuRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkdyb3VwXCIpO1xyXG4gICAgaGlkZGVuRmllbGQudmFsdWUgPSBncm91cFBhcmFtIHx8ICdcXFxcJztcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGJhc2UgY29sbGVjdGlvbnMgd2l0aCBzdGFydGluZyBrZXkgZm9yIHRoZSByb290LlxyXG4gICAgdmFyIHN0cnVjdHVyZSA9IHsgXCJcXFxcXCI6IHt9IH07XHJcblxyXG4gICAgLy8gQnVpbGQgb24gdGhlIGJhc2Ugc3RydWN0dXJlIGJ5IGxvb3BpbmcgdGhyb3VnaCBlYWNoIHNlbGVjdCBpdGVtLlxyXG4gICAgZm9yICh2YXIgb3B0aW9uX2k9MDsgb3B0aW9uX2k8b3B0aW9ucy5sZW5ndGg7IG9wdGlvbl9pKyspIHtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbb3B0aW9uX2ldO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIFNlcGVyYXRlIHRoZSBncm91cCBuYW1lIGludG8gYWxsIGl0cyBwYXRoIHNlZ21lbnRzXHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IG9wdGlvbi50ZXh0Q29udGVudC5zcGxpdChcIlxcXFxcIik7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IGF0IHRoZSByb290IGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHZhciBub2RlVG9DaGVjayA9IHN0cnVjdHVyZVtcIlxcXFxcIl07XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IGVuc3VyZSB0aGF0IGFsbCBsZXZlbHMgb2YgdGhlIHN0cnVjdHVyZSBhcmUgaW4gcGxhY2UuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHNlZ21lbnRfaT0wOyBzZWdtZW50X2k8c2VnbWVudHMubGVuZ3RoOyBzZWdtZW50X2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWcgPSBzZWdtZW50c1tzZWdtZW50X2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWcgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb0NoZWNrW3NlZ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2tbc2VnXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrW3NlZ107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGJhc2UgZWxlbWVudCB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkXHJcbiAgICB2YXIgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0XCIpO1xyXG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3RcIik7XHJcblxyXG5cclxuICAgIC8vIEhhbmRsZSBhbGwgdGhlIGNsaWNrcyBhdCB0aGUgcGFyZW50IGxldmVsXHJcbiAgICB0cmVlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGNoZWNrYm94IGl0ZW1zIGJlaW5nIHNlbGVjdGVkLlxyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrKGUsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxuICAgICAgICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgY2xpY2tzIG9uIGVsZW1lbnRzIHRoYXQgYXJlIHBhcmVudHNcclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIuZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnRcIikpIHtcclxuICAgICAgICAgICAgLy8gSWYgYW4gb3BlbiBwYXJlbnQgaXRlbSBpcyBjbGlja2VkLCBjbG9zZSBpdCwgYnV0IGFsc28gYWxsIGl0cyBvcGVuIGRlc2NlbmRhbnRzLlxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkcmVuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhY19pPTA7IGFjX2k8YWN0aXZlQ2hpbGRyZW4ubGVuZ3RoOyBhY19pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGQgPSBhY3RpdmVDaGlsZHJlblthY19pXTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT3BlbiBhbnkgY2xvc2VkIHBhcmVudHMgdGhhdCBhcmUgY2xpY2tlZC5cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICAgUmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIHRoZSBzZWxlY3QgbGlzdCBmcm9tIHRoZSBwcmV2aW91cyBub2RlIHN0cnVjdHVyZS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2hpbGRLZXlzKGN1cnJUZXh0LCBjdXJyUGF0aCwgb2JqLCBlbGVtZW50VG9BZGRUbywgbGV2ZWwsIHBhcmVudHNDaGVja2VkKSB7XHJcblxyXG4gICAgICAgIHZhciBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50Q2hlY2tlZFN0YXRlID0gcGFyZW50c0NoZWNrZWQ7XHJcblxyXG4gICAgICAgIHZhciBjaGlsZExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VDaGVja2JveGVzICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCAmJiBpc1NlbGVjdGVkR3JvdXAoY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSBjdXJyZW50IHN0YXRlIHdoZW4gaW4gdGhlICdsaW5rIG1vZGUnXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tY3VycmVudFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hpbGRLZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGF0IHRoZSBib3R0b20gb2YgYSBicmFuY2ggaS5lLiBubyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgbm9kZSBoYXMgY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IDEgfHwgc2hvdWxkUGFyZW50QmVPcGVuKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiBmaXJzdCBsZXZlbCBjaGlsZHJlbiBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGUgPSBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250YWluZXIgcmVhZHkgdG8gYmUgcG9wdWxhdGVkIHdpdGggdGhlIGNoaWxkIG5vZGVzXHJcbiAgICAgICAgICAgIHZhciBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIC8vIENhbGwgcmVjdXJzaXZlbHkgd2l0aCB1cGRhdGVkIHBhcmFtcyBmb3IgZWFjaCBjaGlsZCBub2RlXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBja19pPTA7IGNrX2kgPCBjaGlsZEtleXMubGVuZ3RoOyBja19pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkS2V5c1tja19pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRLZXkgIT09ICdBbGwgY29udGFjdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNoaWxkS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyclBhdGggKyBcIlxcXFxcIiArIGNoaWxkS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2NoaWxkS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGluaXRpYWwgY2FsbCBvZiB0aGUgcmVjdXJzaXZlIGZ1bmN0aW9uIHN0YXJ0aW5nIGF0IHRoZSByb290LlxyXG4gICAgZGlzcGxheUNoaWxkS2V5cyhcIkFsbCBDb250YWN0IEdyb3Vwc1wiLCBcIlwiLCBzdHJ1Y3R1cmVbXCJcXFxcXCJdLCB0cmVlQ29udGFpbmVyLCAxLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gUmVwbGFjZSB0aGUgc2VsZWN0IGxpc3Qgd2l0aCB0aGUgbmV3IHRyZWVcclxuICAgIGdyb3VwU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRyZWVDb250YWluZXIsIGdyb3VwU2VsZWN0KTtcclxuXHJcbiAgICB0cmVlQ29udGFpbmVyLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaGlkZGVuRmllbGQpO1xyXG5cclxuICAgIHRyYW5zZmVyVmFsdWVzKCk7XHJcblxyXG59KShcIiNHcm91cFwiLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCk7XHJcbn1cclxuIiwiLy8gU3RvcmUgc2VsZWN0ZWQgdXNlcnMgaW5zaWRlIHNlc3Npb24gc3RvcmFnZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZFNlc3Npb25TdG9yYWdlSGVscGVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIGNvbnN0IGluaXRpYWwgPSB0aGlzLl9pbml0aWFsaXNlKCk7XHJcbiAgICB0aGlzLl9pdGVtcyA9IG5ldyBNYXAoKTtcclxuICAgIGluaXRpYWwuZm9yRWFjaCgoe2lkLCBuYW1lfSkgPT4gdGhpcy5faXRlbXMuc2V0KGlkLCBuYW1lKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFBvcHVsYXRlIHN0YXJ0IGlkcywgaW5pdGlhbGlzZXMgY29va2llIGlmIG5vdCBwcmVzZW50XHJcbiAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zSnNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5fbmFtZSk7XHJcbiAgICBpZiAoIXNlbGVjdGVkSXRlbXNKc29uKSB7ICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMuX3BlcnNpc3QoW10pOyAgIFxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZWxlY3RlZEl0ZW1zSnNvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNhdmUgdGhlIG5ldyBpZHMgdG8gdGhlIHNlc3Npb24gc3RvcmFnZSBhZnRlciB1cGRhdGVcclxuICBfdXBkYXRlKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcbiAgICB0aGlzLl9wZXJzaXN0KGl0ZW1zKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gU2F2ZSB0aGUgcGFzc2VkIGluIGlkcyB0byB0aGUgY29va2llXHJcbiAgX3BlcnNpc3QoaXRlbXMpIHsgICAgXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuX25hbWUsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNldCBhbGwgdGhlIGl0ZW1zIGluIG9uZSBoaXQuIFJldHVybnMgdGhlIG5ldyBjb3VudC5cclxuICBzZXRJdGVtcyhpdGVtcyA9IFtdKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IG5ldyBNYXAoKTtcclxuICAgIGl0ZW1zLmZvckVhY2goaSA9PiB0aGlzLl9pdGVtcy5zZXQoaS5pZCwgaS5uYW1lKSk7XHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHRoZSBjb3VudCBvZiBpdGVtcyBpbiB0aGUgc2VsZWN0aW9uLlxyXG4gIGdldElkcygpIHtcclxuICAgIGNvbnN0IGlkcyA9IEFycmF5LmZyb20odGhpcy5faXRlbXMua2V5cygpKTtcclxuICAgIHJldHVybiBpZHM7XHJcbiAgfSAgXHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgbWFwIGl0ZW1zIHdob3NlIGlkcyBhcmUgbm90IGluIHRoZSBwYXNzZWQgaW4gbGlzdFxyXG4gIGZpbHRlckJ5SWRzKGlkc1RvS2VlcCkge1xyXG4gICAgY29uc3QgaWRzID0gdGhpcy5nZXRJZHMoKTtcclxuICAgIHJldHVybiBpZHMuZm9yRWFjaChpID0+IHtcclxuICAgICAgaWYgKCFpZHNUb0tlZXAuaW5jbHVkZXMoaSkpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSAgXHJcbiAgXHJcbiAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGN1cnJlbnRseSBpbiB0aGUgbWFwLlxyXG4gIGdldENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNpemU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSBpdGVtIGJ5IGl0cyBpZC4gUmV0dXJuIHRoZSBuZXcgY291bnRcclxuICByZW1vdmUoaWQpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShpZCk7ICAgICAgXHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFkZCBvbmUgb3IgbW9yZSBpdGVtcy4gUmV0dXJucyB0aGUgbmV3IGNvdW50XHJcbiAgYWRkKGlkLCBuYW1lKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5zZXQoaWQsIG5hbWUpO1xyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIGFsbCBpdGVtcyBpbiBhcnJheSBmb3JtYXRcclxuICBnZXRJdGVtcygpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zLmVudHJpZXMoKSkubWFwKChbaWQsIG5hbWVdKSA9PiAoeyBpZCwgbmFtZSB9KSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgdGhlIG5hbWUgZm9yIGEgcGFzc2VkIGlkXHJcbiAgZ2V0TmFtZShpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmdldChpZCk7XHJcbiAgfVxyXG5cclxuICAvLyBEb2VzIHRoZSBtYXAgY29udGFpbiB0aGUgcGFzc2VkIGluIGlkLlxyXG4gIGhhc0lkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaGFzKGlkKTtcclxuICB9XHJcblxyXG4gIC8vIEVtcHRpZXMgdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgaXRlbXMgaW4gdGhlIG1hcC5cclxuICBjbGVhckl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0SXRlbXMoW10pO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4gIFRPRE86IFN3aXRjaCB0byB1c2luZyBpbnRlcmVjdGlvbiBvYnNlcnZlclxyXG4qL1xyXG5cclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG4vKipcclxuICBDbGFzcyB0byBtYW5hZ2UgdGhlIGxvYWQgb24gc2Nyb2xsIGZ1bmN0aW9uYWxpdHkgZm9yIGEgcGFnZS5cclxuICBXaGVuIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBzZXJ2ZXIgc2lkZSBpdCBzaG91bGQgaGlkZSB0aGUgbG9hZGVyIGVsZW1lbnQgaWYgbm8gbW9yZSByZXN1bHRzIHRvIGxvYWQuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJpZXJMYXp5TG9hZGVyIHtcclxuICBcclxuICAvKipcclxuICAgIENvbnN0cnVjdG9yXHJcbiAgICBQYXJhbXNcclxuICAgICAtIGxvYWRlckVsZW1lbnQgKHJlcXVpcmVkKTogVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGxvYWRlclxyXG4gICAgIC0gbG9hZGVyRm4gKHJlcXVpcmVkKTogVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byBsb2FkIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cy4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3aWxsIGJlIHBhc3NlZCBhIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uIHdpdGggYSBib29sIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXRoZXIgb3Igbm90IHRoZXJlIGFyZSBtb3JlIGl0ZW1zIHRvIGxvYWQuXHJcbiAgICAgLSBjb25maWdPYmogKG9wdGlvbmFsKTogIEFuIG9iamVjdCB3aG9zZSBrZXkgYW5kIHZhbHVlcyB3aWxsIG92ZXJyaWRlIGRlZmF1bHQgY29uZmlnIHNldHRpbmdzLlxyXG4gICovICAgICAgICAgICAgICAgICAgICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgbG9hZGVyRWxlbWVudCwgXHJcbiAgICAgIGxvYWRlckZuLCBcclxuICAgICAgY29uZmlnT2JqID0ge31cclxuICApIHtcclxuICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICBEZWZhdWx0IGNvbmZpZyBzZXR0aW5nc1xyXG4gICAgKi9cclxuICAgIGNvbnN0IGNvbmZpZ0RlZmF1bHRzID0ge1xyXG4gICAgICBsb2FkZXJDbGFzczogJ2xvYWRlcicsICAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50XHJcbiAgICAgIGxvYWRlckxvYWRpbmdDbGFzczogJ2xvYWRlci0tbG9hZGluZycsIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnQgd2hlbiBzZWFyY2hpbmdcclxuICAgICAgZGVib3VuY2VNczogMTAwLCAvLyBob3cgbG9uZyB0byB3YWl0IGJldHdlZW4gZXZlbnRzIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgcGVla0Rpc3RhbmNlOiAwLCAvLyBob3cgbXVjaCBvZiBsb2FkaW5nIGVsZW1lbnQgc2hvdWxkIGJlIG9uIHNjcmVuIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgZGVidWc6IGZhbHNlICAvLyB3aGV0aGVyIG9yIG5vdCB0byBsb2cgZGVidWcgaW5mbyB0byBjb25zb2xlLlxyXG4gICAgfTtcclxuICAgICAgICBcclxuICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlckVsZW1lbnQ7XHJcbiAgICB0aGlzLl9sb2FkZXJGdW5jID0gbG9hZGVyRm47XHJcbiAgICB0aGlzLl9tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBwYXNzZWQgaW4gY29uZmlnXHJcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZ0RlZmF1bHRzLCAuLi5jb25maWdPYmogfTtcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgd2hldGhlciBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkIG9yIHJlbW92ZWRcclxuICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgaWYgKCF0aGlzLl9sb2FkZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGxvYWRlciBlbGVtZW50IHByb3ZpZGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbiB0aGUgbG9hZGVycyBjbGFzcyBmcm9tIHRoZSBjb25maWdcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJDbGFzcyk7XHJcbiAgICBcclxuICAgIC8vIERlYm91bmNlIHRoZSBjaGVja1xyXG4gICAgdGhpcy5fbGF6eUxvYWRDaGVjayA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5fZG9Mb2FkTW9yZUNoZWNrKCkpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdDYWxsaW5nIGxvYWQgbW9yZSBmdW5jdGlvbicpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHRoZSBzZWFyY2ggZnVuY3Rpb24gJiBwYXNzIGluIHRoZSBkb25lIHNlYXJjaGluZyBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2xvYWRlckZ1bmModGhpcy5fZG9uZVNlYXJjaGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm90IHJlYWR5IHRvIHJlbG9hZCB5ZXQnKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlYm91bmNlTXMpO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgdGhlIGV2ZW50cyAoYWxzbyBkb2VzIGluaXRpYWwgY2hlY2spXHJcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fZG9uZVNlYXJjaGluZyA9IHRoaXMuX2RvbmVTZWFyY2hpbmcuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgXHJcbiAgX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSh2aXNpYmxlKSB7XHJcbiAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGtsZSByZXN1bHRzIGNvbWluZyBiYWNrIGluXHJcbiAgX2RvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCkge1xyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyhgX2RvbmVTZWFyY2hpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggbW9yZSB0byBsb2FkICR7bW9yZVRvTG9hZH1gKTtcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpIFxyXG4gICAgaWYgKG1vcmVUb0xvYWQpIHtcclxuICAgICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQWxsIGRvbmUgLSBoaWRpbmcgbG9hZGVyIGVsZW1lbnQnKTtcclxuICAgICAgdGhpcy5fc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gV2lyZSB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIGRvIGluaXRpYWwgY2hlY2suXHJcbiAgX3N0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkgeyAgICAgIFxyXG4gICAgICB0aGlzLl9tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhZGRlZCcpO1xyXG4gICAgICB0aGlzLl9sYXp5TG9hZENoZWNrKCk7XHJcbiAgICB9ICBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFscmVhZHkgaW4gcGxhY2UnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnNcclxuICBfc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkge1xyXG4gICAgICB0aGlzLl9tYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAgICAgIFxyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgcmVtb3ZlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm8gTGlzdGVuZXJzIHRvIHJlbW92ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBIZWxwZXIgdG8gbG9nIG9ubHkgaWYgZGVidWdnaW5nIGVuYWJsZWRcclxuICBfY29uZGl0aW9uYWxEZWJ1Z0xvZyh0b0RlYnVnLCBsb2dnZXJGdW5jID0gY29uc29sZS5sb2csICkge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kZWJ1Zykge1xyXG4gICAgICBsb2dnZXJGdW5jKHRvRGVidWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIERvIHRoZSBjaGVjayB0byBzZWUgaWYgc2NyZWVuIHNvbWV3aGVyZSBpdCBzaG91bGQgYmUgbG9hZGVkLlxyXG4gIF9kb0xvYWRNb3JlQ2hlY2soKSB7ICAgIFxyXG5cclxuICAgIGNvbnN0IGhpZ2hlc3RWaXNpYmxlWVBvcyA9IHRoaXMuX21haW4uc2Nyb2xsVG9wICsgdGhpcy5fbWFpbi5jbGllbnRIZWlnaHQ7IC8vd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSAgdGhpcy5fbWFpbi5zY3JvbGxIZWlnaHQ7IC8vZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9IE1hdGgubWluKCh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSksIGRvY3VtZW50SGVpZ2h0KTsgXHJcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcclxuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcclxuICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcclxuICAgICAgJ1RvcCBwb3NpdGlvbiBvZiBsb2FkZXIgZWxlbWVudCc6IHRoaXMuX2xvYWRlci5vZmZzZXRUb3AsXHJcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXHJcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXHJcbiAgICAgIC8vJ0N1cnJlbnQgWSBwb3NpdGlvbiBvZiBzY3JvbGwnOiB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgIC8vICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXHJcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXHJcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxyXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXHJcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcclxuICB9O1xyXG59XHJcblxyXG4vKlxyXG5cclxuZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcclxuICAgIGNvbnN0IGhpZ2hlc3RWaXNpYmxlWVBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9ICh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSk7ICAvLyBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxyXG4gICAgY29uc3QgcGVla1Bvc2l0aW9uVmlzaWJsZSA9IGhpZ2hlc3RWaXNpYmxlWVBvcyA+PSBsb2FkTW9yZVRyaWdnZXJQb3M7XHJcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XHJcbiAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0RvaW5nIGxvYWQgbW9yZSBjaGVjayAuLi4nKTsgICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXHJcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxyXG4gICAgICAnQ29uZmlnIHBlZWsgZGlzdGFuY2UnOiB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlLFxyXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxyXG4gICAgICAnQ3VycmVudCBZIHBvc2l0aW9uIG9mIHNjcm9sbCc6IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgJ1RoZSBpbnRlcm5hbCBzaXplIG9mIHRoZSB3aW5kb3cnOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICdUaGUgbWF4IHkgcG9zaXRpb24gdmlzaWJsZSc6IGhpZ2hlc3RWaXNpYmxlWVBvcyxcclxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcclxuICAgICAgJ0lzIHBlZWsgcG9zaXRpb24gdmlzaWJsZSc6IHBlZWtQb3NpdGlvblZpc2libGUsXHJcbiAgICAgICdJcyB0aGUgbG9hZCBtb3JlIHBvc2l0aW9uIHZpc2libGUsIG9yIGF0IGRvYyBlbmQnOiBzaG91bGRMb2FkTW9yZSxcclxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHNob3VsZExvYWRNb3JlO1xyXG4gIH07XHJcblxyXG4qLyIsIlxyXG5pbXBvcnQge1NlZUFsbEF0dHJpYnV0ZUhlbHBlcn0gZnJvbSAnLi9TZWVBbGxIZWxwZXInO1xyXG5cclxubmV3IFNlZUFsbEF0dHJpYnV0ZUhlbHBlcigpO1xyXG4iLCIvKipcclxuICogIFVTQUdFOiBUbyB1c2UgdGhpcyBjb250cm9sIHlvdSBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSB0byB0aGUgYnV0dG9uIHRoYXQgc2hvdWxkIGJlIGRvaW5nIHRoZSBzaG93IGFsbC5cclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkPVwiPDxpZCBvZiBjb250YWluZXIgdG8gYmUgZWZmZWN0ZWQ+PlwiXHJcbiAqIFxyXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1saW1pdD1cIjIwXCIgLSBzZXRzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2hvdyBpbml0aWFsbHkuICBEZWZhdWx0IGlzIDEwXHJcbiAqICBcclxuICogIGRhdGEtc2hvd2FsbC1jb3VudC1pZCAtIGlkIG9mIGEgZmllbGQgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCB3aXRoIGEgY291bnQgb2YgdGhlIGl0ZW1zXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tc2VsZWN0b3IgLSBhIHNlbGVjdG9yIHRvIGdldCB0aGUgaXRlbSBmcm9tIHdpdGggdGhlIGNvbnRhaW5lci4gIFRoaXMgaXMgcmVxdWlyZWQgaWYgdGhlIGNvbnRhaW5lciBpcyBub3QgYSB0YWJsZVxyXG4gKi9cclxuXHJcbiBleHBvcnQgY2xhc3MgU2VlQWxsQXR0cmlidXRlSGVscGVyIHtcclxuICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgc2hvd01vcmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2hvd2FsbC1jb250YWluZXItaWRdJyk7XHJcblxyXG4gICAgICAgIHNob3dNb3JlQnV0dG9ucy5mb3JFYWNoKHNob3dBbGxCdXR0b24gPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVySWQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1jb250YWluZXItaWRcIik7XHJcbiAgICAgICAgICAgIHZhciBpdGVtU2VsZWN0b3IgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLXNlbGVjdG9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgc2hvd0FsbEl0ZW1MaW1pdCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWl0ZW0tbGltaXRcIik7XHJcbiAgICAgICAgICAgIHZhciBzaG93QWxsSXRlbUNvdW50SWQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1jb3VudC1pZFwiKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbklkID0gc2hvd0FsbEJ1dHRvbi5pZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3JUb1VzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yVG9Vc2UgPSBgIyR7Y29udGFpbmVySWR9ICR7aXRlbVNlbGVjdG9yfWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLnRhZ05hbWUgPT09IFwiVEFCTEVcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JUb1VzZSA9IGAjJHtjb250YWluZXJJZH0gdGJvZHkgdHJgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGNoaWxkIHNlbGVjdG9yIGF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHNob3dBbGxJdGVtTGltaXQsIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZEl0ZW1MaW1pdCkpIHsgXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnMsIGl0ZW1MaW1pdDogcGFyc2VkSXRlbUxpbWl0fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc2hvd0FsbEl0ZW1Db3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnMsIGNvdW50RmllbGRJZDogc2hvd0FsbEl0ZW1Db3VudElkfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV3IFNlZUFsbEhlbHBlcihzZWxlY3RvclRvVXNlLCBgIyR7YnV0dG9uSWR9YCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gfVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlZUFsbEhlbHBlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaXRlbXNTZWxlY3Rvciwgc2VlQWxsU2VsZWN0b3IsIHBhc3NlZE9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtc1NlbGVjdG9yID0gaXRlbXNTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9zZWVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlZUFsbFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZWVBbGwpIHtcclxuICAgICAgICAgICAgLy8gUnVubmluZyBvbiBhIHBhZ2Ugd2l0aG91dCBzZWUgYWxsIGJ1dHR0b24sIHNvIHN0b3AgYWZ0ZXIgY291bnRzLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZlNlZUFsbCA9IHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5O1xyXG5cclxuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHsgaXRlbUxpbWl0OiA1LCBzaG93TGVzc1RleHQ6IFwiU2VlIExlc3NcIiwgY291bnRGaWVsZElkOiBudWxsIH07XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4uZGVmYXVsdHMsIC4uLnBhc3NlZE9wdGlvbnMgfTtcclxuICAgICAgICB0aGlzLl9pdGVtTGltaXQgPSB0aGlzLl9vcHRpb25zLml0ZW1MaW1pdDtcclxuXHJcbiAgICAgICAgdGhpcy5fc2hvd0xlc3NUZXh0ID0gdGhpcy5fb3B0aW9ucy5zaG93TGVzc1RleHQ7XHJcbiAgICAgICAgdGhpcy5fc2hvd01vcmVUZXh0ID0gdGhpcy5fc2VlQWxsLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICB0aGlzLl9jb3VudEZpZWxkID0gdGhpcy5fb3B0aW9ucy5jb3VudEZpZWxkSWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9vcHRpb25zLmNvdW50RmllbGRJZCkgOiBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9zaG93aW5nQWxsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3NlZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG93aW5nQWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlRXhjZXNzSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dBbGxJdGVtcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nQWxsID0gIXRoaXMuX3Nob3dpbmdBbGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZUFsbC50ZXh0Q29udGVudCA9IHRoaXMuX3Nob3dpbmdBbGwgPyB0aGlzLl9zaG93TGVzc1RleHQgOiB0aGlzLl9zaG93TW9yZVRleHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd0FsbEl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXM7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZUV4Y2Vzc0l0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvQ2hlY2sgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSB0b0NoZWNrID4gdGhpcy5faXRlbUxpbWl0ID9cclxuICAgICAgICAgICAgICAgIFwibm9uZVwiIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGUoKSB7ICAgIFxyXG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2l0ZW1zU2VsZWN0b3IpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvdW50RmllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY291bnRGaWVsZC50ZXh0Q29udGVudCA9IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9zZWVBbGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCA8PSB0aGlzLl9pdGVtTGltaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VlQWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zID0gdGhpcy5fYWxsSXRlbXNbMF0uc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZWVBbGwuc3R5bGUuZGlzcGxheSA9IHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zaG93aW5nQWxsKSAgeyB0aGlzLl9oaWRlRXhjZXNzSXRlbXMoKTsgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKioqKiogXHJcblxyXG4gIENyZWF0ZXMgYSB0YWcgbGlzdCBmcm9tIGEgc2VsZWN0IGVsZW1lbnRcclxuXHJcbiAgdXNhZ2U6XHJcblxyXG4gIG5ldyBTZWxlY3RMaXN0VGFnKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jKS5cclxuXHJcbiAgLSBzZWxlY3RJZCAocmVxdWlyZWQpOiBUaGUgaWQgb2YgdGhlIHNlbGVjdCBlbGVtZW50IGFjdGluZyBhcyB0aGUgc291cmNlIChtdXN0IGhhdmUgbXVsdGlwbGUgYXR0cmlidXRlLCBhbmQgYWxsIGl0ZW1zIHNob3VsZCBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQpXHJcblxyXG4gIC0gcmV2ZXJ0R3JvdXBzIChvcHRpb25hbCk6IFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgY2xpY2tlZCB0byByZXZlcnQgc2VsZWN0ZWQgb3B0aW9ucyAoc2hvdWxkIGhhdmUgaXMtaGlkZGVuIGNsYXNzIHRvIHN0YXJ0KVxyXG5cclxuICAtIG9uVXBkYXRlRnVuYyAocmVxdWlyZWQpOiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgdGFnIGhhcyBiZWVuIHJlbW92ZWQsIG9yIG9wdGlvbnMgYXJlIHJldmVydGVkLi4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHR3byBwYXJhbXMsIHNlbGVjdGVkT3B0aW9ucyBhbmQgYWxsT3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGludGVuZGVkIHRvIG1ha2UgdGhlIGNvbnRyb2wgbW9yZSBmbGV4aWJsZSBpLmUuIG91ciBmaXJzdCB1c2FnZSBpcyB0byB1cGRhdGUgbGFiZWwgd2l0aCBzZWxlY3RlZCBpdGVtcyB0ZXh0IGVsc2V3aGVyZSBvbiBwYWdlIHdpdGhvdXQgZnVydGhlciBjb3VwbGluZy5cclxuXHJcbiAgLSBpdGVtcyAob3B0aW9uYWwpOiAgSHRtbCBvcHRpb24gZWxlbWVudHMgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdW5kZXJseWluZyBzZWxlY3QgbGlzdCBiZWZvcmUgdGFncyBnZW5lcmF0ZWQuIFxyXG5cclxuKioqKioqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RMaXN0VGFncyB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IG51bGwpIHtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMgPSBvblVwZGF0ZUZ1bmM7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmIChyZXZlcnRHcm91cHNJZCkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmV2ZXJ0R3JvdXBzSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgdGhpcy5yZXZlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gdGhpcy50YWdPcHRpb25zLmFwcGVuZENoaWxkKG8pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTm93IGhhbmRsZXMgcGFzc2VkIGluIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IG9wdGlvbnMgfHwgWy4uLnRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKV07XHJcblxyXG4gICAgICBpZiAodGhpcy5yZXZlcnRCdG4gJiYgdGhpcy5hbGxPcHRpb25zLnNvbWUobyA9PiAhby5zZWxlY3RlZCkpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXHJcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xyXG4gICAgICAgICAgY29uc3QgbyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInK3RhcmdldFZhbCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgaWYobyl7XHJcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5hZnRlcih0aGlzLnRhZ3MpO1xyXG5cclxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlVGFncygpIHtcclxuICAgICAgdGhpcy50YWdzLmlubmVySFRNTCA9ICcnOyAgICAgIFxyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFsbE9wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCk7XHJcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFncy5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUYWcodC5pbm5lclRleHQsIHQudmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jKHNlbGVjdGVkT3B0aW9ucywgdGhpcy5hbGxPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgbWFrZVRhZyh0ZXh0LCB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBpLmNsYXNzTGlzdC5hZGQoXCJidXR0b25fX2ljb25cIik7ICAgICAgXHJcbiAgICAgIGkuZGF0YXNldC52YWw9dmFsdWU7XHJcbiAgICAgIGkuaW5uZXJUZXh0ID0gXCJjbGVhclwiXHJcblxyXG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoaSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGFnO1xyXG4gICAgfTtcclxuXHJcbiAgLy8gRGVzZWxlY3QgYWxsIHRoZSBvcHRpb25zIGluIHRoZSB1bmRlcmx5aW5nIHNlbGVjdCBsaXN0LiAgT3B0aW9uYWxseSByZWduZXJhdGVkIHRoZSB0YWdzIGxpc3QuIFxyXG4gIC8vIE9wdGlvbmFsIGFzIG5vdCB3b3J0aCBvdmVyaGVhZCBpZiBkb250IG5lZWQgaXQuIFxyXG4gIGNsZWFySXRlbXMocmVwb2x1bGF0ZVRhZ3MgPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IG8uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcblxyXG4gICAgaWYgKHJlcG9sdWxhdGVUYWdzKSB7ICAgICAgXHJcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTaG91bGQgaGF2ZSBhIHNlY3Rpb24gbGlrZSB0aGlzIGZvciBlYWNoIHBhZ2UgdGhlIGNvbnRyb2wgaXMgdXNlZCBvbiwgdW5sZXNzIHdlIHdhbnQgaXQgYmVoYXZlIGV4YWN0bHkgdGhlIHNhbWUgYXMgYSBwcmV2aW91cyB2ZXJzaW9uIChpbmNsdWRpbmcgaWRzIGFuZCB1cGRhdGUgZnVuY3Rpb24pIFxyXG4vLyAqQmV0dGVyIHN0aWxsKiAtIGhhdmUgaW4gc2VwZXJhdGUgc2NyaXB0IGZpbGUgc2NvcGVkIHRvIHNwZWNpZmljIHBhZ2UgKGxpa2Ugd2l0aCBTZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMpXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sbG93dXBHcm91cFNlbGVjdG9yJykpIHtcclxuXHJcbiAgLy8gUHJlcGFyZSBhbiB1cGRhdGUgZnVuY3Rpb24gaWYgcmVxdWlyZWQgKG9wdGlvbmFsIHBhcmFtZXRlcilcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlR3JvdXBzTGFiZWxTcGFuJyk7XHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcGx1cmFsaXNlZEdyb3VwcyA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnZ3JvdXAnIDogJ2dyb3Vwcyc7XHJcbiAgICBzcGFuLmlubmVyVGV4dCA9IGBTZW5kIHRvICR7c2VsZWN0ZWRPcHRpb25zLmxlbmd0aH0gcmVzcG9uc2UgJHtwbHVyYWxpc2VkR3JvdXBzfWA7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXNlIGFuIGluc3RhbmNlIG9mIHRoZSBjb250cm9sXHJcbiAgbmV3IFNlbGVjdExpc3RUYWdzKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InLCAncmV2ZXJ0X2dyb3VwcycsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsIi8vIFN0b3JlIGEgc2ltcGxlIHZhbHVlIGluIGEgY29va2llXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUNvb2tpZUhlbHBlcntcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLl9pbml0aWFsaXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llO1xyXG5cclxuICAgICAgICBjb25zdCBjb29raWVzID0gY29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ29va2llID0gY29va2llcy5maW5kKGMgPT4gYy5zdGFydHNXaXRoKGAke3RoaXMuX25hbWV9PWApKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBtYXRjaGluZ0Nvb2tpZSA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGluZ0Nvb2tpZS5zcGxpdCgnPScpWzFdKSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0Nvb2tpZSA9IGAke3RoaXMuX25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX07IHBhdGg9Lzsgc2FtZXNpdGU9U3RyaWN0YFxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5ld0Nvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuLy8gUmVtb3ZlIHRoZSBuby1qcyBjbGFzcyBzbyB3ZSBhcmUgYWJsZSB0byB0ZWxsIHRoYXQganMgaXMgZW5hYmxlZFxyXG4vLyBVc2VmdWwgZm9yIGhpZGluZyBlbGVtZW50cyB3aGVuIGpzIG5vdCBhdmFpbGFibGUuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdqcycpOyIsImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VzJykgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgcmVzcG9uc2UgZmllbGRzIGFuZCB0aGUgcmVzcG9uc2UgbGlzdFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1maWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9ucy1saXN0Jyk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRoZSBlbXB0eSByZXNwb25zZSBmaWVsZHNcclxuICAgICAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpIC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFzZXQua2V5ID0gaWR4O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZXZlYWxzIHRoZSBmaXJzdCBoaWRkZW4gaXRlbVxyXG4gICAgICAgIGNvbnN0IHNob3dGaXJzdEVtcHlJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlc3BvbnNlID0gcmVzcG9uc2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNwb25zZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiBhbiBpdGVtIGlzIHJlbW92ZWQsIGNvcHkgYWxsIHZhbHVlcyBmb3J3YXJkIHRvIGZpbGwgZ2Fwc1xyXG4gICAgICAgIGNvbnN0IGNvcHlJdGVtc0ZvcndhcmQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gaW5kZXggKyAxOyBpZHggPCByZXNwb25zZXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldklucHV0ID0gcmVzcG9uc2VzW2lkeC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSByZXNwb25zZXNbaWR4XS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBwcmV2SW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTGFzdEVtcHR5SXRlbSA9IChyZW1vdmVJZHgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFzIGFsbCBjb3BpZWQgZm9yd2FyZCBibGFuayBsYXN0IGl0ZW0gb3V0XHJcbiAgICAgICAgICAgIHJlc3BvbnNlc1tyZXNwb25zZXMubGVuZ3RoLTFdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIGJhY2t3YXJkcyBhbmQgaGlkZSBsYXN0IHZpc2libGUgaXRlbVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSAocmVzcG9uc2VzLmxlbmd0aC0xKTsgaWR4ID49IHJlbW92ZUlkeDsgaWR4LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZXNbaWR4XS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXNbaWR4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFkZFJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfcmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIHNob3dGaXJzdEVtcHlJdGVtKCk7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlc3BvbnNlc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLXJlc3BvbnNlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSWR4ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb3B5SXRlbXNGb3J3YXJkKHJlbW92ZUlkeCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMYXN0RW1wdHlJdGVtKHJlbW92ZUlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pKCk7XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkUGhvbmVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkUGhvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFBob25lQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRQaG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSkoXCJhZGRQaG9uZVwiKTtcclxuXHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkRW1haWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEVtYWlsQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRFbWFpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkoXCJhZGRFbWFpbFwiKTtcclxuXHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZUdyb3VwQnV0dG9uICE9bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KShcImFkZF9ncm91cFwiKTtcclxufVxyXG5cclxudmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG5pZiAoZ3JvdXBUZXh0YXJlYSAhPSBudWxsKSB7XHJcbiAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0MiA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0Mi5tYXRjaGVzKFwiLmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcclxuXHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJykgIT1udWxsKSB7XHJcblxyXG4gICAgdmFyIGlucHV0RXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpO1xyXG4gICAgdmFyIGlucHV0RXJyb3JzQXJyYXkgPSBPYmplY3Qua2V5cyhpbnB1dEVycm9ycyk7XHJcblxyXG4gICAgaW5wdXRFcnJvcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRFcnJvcnNba2V5XSk7XHJcbiAgICAgICAgaW5wdXRFcnJvcnNba2V5XS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4vLyAgICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG4vLyAgICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuLy8gICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImFzaWRlLS1hY3RpdmVcIik7XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuXHJcbi8vIH0pKFwiI1NpZGViYXJcIik7XHJcblxyXG4iLCIvKiBcclxuICBEZWJvdW5jZSBmdW5jdGlvbiBwcmV2ZW50IGV4Y2Vzc2l2ZSBjYWxscyBvbiBzY3JvbGwuXHJcbiAgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxyXG4qL1xyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XHJcblx0dmFyIHRpbWVvdXQ7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdH07XHJcblx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdH07XHJcbn07IiwiXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xyXG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGV4aXN0cyBhbmQgaWYgaXQgZG9lc250IHNldHVwIG9iamVjdCByZWFkeSBmb3IgZXZlbnRMaXN0ZW5lclxyXG4gICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW0gIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9IEpTT04ucGFyc2Uoc25hY2tiYXJTdG9yYWdlSXRlbSk7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcclxuICAgICAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vaWYgaXQgZG9lcyB0aGVuIGhpZGUgdGhlIHNuYWNrYmFyXHJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9ucyA6IG5ldyBBcnJheSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc25hY2tiYXIpIHtcclxuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgaWYgKCFzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMucHVzaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pKFwiI2hpbnQtc25hY2tiYXJcIik7XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgV2lyZSB1cCB0YWJsZXMgc28gdGhhdCB3aG9sZSByb3cgY2FuIGJlIGNsaWNrZWQsIHJhdGhlciB0aGFuIGluZGl2aWR1YWwgY2VsbHNcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyBHZXQgYWxsIHRhYmxlIHJvd3MgdGhhdCBzaG91bGQgYmUgY2xpY2thYmxlXHJcbmNvbnN0IHJvd3NUb0xpbmtpZnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZVtkYXRhLWxpbmthYmxlLWNlbGxdID4gdGJvZHkgPiB0cicpO1xyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIGNsaWNrXHJcbmNvbnN0IGhhbmRsZVJvd0NsaWNrID0gZSA9PiB7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGNvbHVtbiB0aGF0IHNob3VsZCBjb250YWluIHRoZSBsaW5rXHJcbiAgY29uc3QgdGFibGUgPSBlLnRhcmdldC5jbG9zZXN0KCd0YWJsZScpO1xyXG4gIGNvbnN0IGNvbFRvUGFyc2UgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlua2FibGUtY2VsbCcpO1xyXG5cclxuICAvLyBHZXQgdGhlIGNsaWNrZWQgcm93LCBhcyBtYXliZSBhIHRkIGNsaWNrZWQuXHJcbiAgY29uc3Qgcm93ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSBsaW5rIHRoYXQgc2hvdWxkIGJlIGNsaWNrZWQuXHJcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludChjb2xUb1BhcnNlLDEwKSArIDE7XHJcbiAgICBjb25zdCBsaW5rID0gcm93LnF1ZXJ5U2VsZWN0b3IoYHRkOm50aC1jaGlsZCgke2NvbH0pIGFgKTtcclxuICAgIFxyXG4gICAgLy8gQ2xpY2sgdGhlIGxpbmsgb3IgcmVwb3J0IGZhaWx1cmUgdG8gZmluZFxyXG4gICAgaWYgKGxpbmspIHtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGxpbmsgZm91bmQgaW4gY29sdW1uIHNwZWNpZmllZCBieSBbZGF0YS1saW5rYWJsZS1jZWxsXScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaCB7XHJcbiAgICAvLyBXYXJuIG9mIGludmFsaWQgY29sdW1uIHNwZWNpZmllZC5cclxuXHRjb25zb2xlLmVycm9yKCdJbnZhbGlkIHZhbHVlIHNwZWNpZmllZCBieSBbZGF0YS1saW5rYWJsZS1jZWxsXScpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIFdpcmUgdXAgdGhlIGxpc3RlbmVyc1xyXG5yb3dzVG9MaW5raWZ5LmZvckVhY2gocm93ID0+IHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJvd0NsaWNrKSk7IiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIC8vZ2V0IGRpdiBJRCB3aXRob3V0ICNcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1lbnUpO1xyXG5cclxuICAgIGlmIChtZW51KSB7XHJcblxyXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcclxuICAgICAgICB2YXIgbWVudUNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51QnV0dG9uLmRhdGFzZXQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0b3IgKyAnIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSl7XHJcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSgnI3NlYXJjaCcpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIC8vZ2V0IGRpdiBJRCB3aXRob3V0ICNcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1lbnUpO1xyXG5cclxuICAgIGlmIChtZW51KSB7XHJcblxyXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcclxuICAgICAgICB2YXIgbWVudUNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51QnV0dG9uLmRhdGFzZXQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0b3IgKyAnIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICAmJiBtZW51Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkoJyNtZW51Jyk7IiwiLyogXHJcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc3RhZmYgY29tcG9zZSBwYWdlLlxyXG4qL1xyXG5cclxuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuLi9TaW1wbGVDb29raWVIZWxwZXInO1xyXG5pbXBvcnQgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciBmcm9tICcuLi9JZFNlc3Npb25TdG9yYWdlSGVscGVyJztcclxuaW1wb3J0IFNlbGVjdExpc3RUYWdzIGZyb20gJy4uL1NlbGVjdExpc3RUYWdzJztcclxuaW1wb3J0IHtTZWVBbGxIZWxwZXJ9IGZyb20gJy4uL1NlZUFsbEhlbHBlcic7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1jb21wb3NlJykpIHtcclxuXHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jb250YWN0Jyk7XHJcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmplY3RfaW5wdXQnKTtcclxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRfTWVzc2FnZScpO1xyXG4gIGNvbnN0IHJlc2VuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X0F1dG9SZXNlbmRTY2hlZHVsZScpO1xyXG4gIGNvbnN0IHJlc3BvbnNlT3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLW9wdGlvbicpKTtcclxuXHJcbiAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gIGNvbnN0IGNvb2tpZU1lc3NhZ2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZUNvbnRlbnQnKTtcclxuICBjb25zdCBjb29raWVBdXRvUmVzZW5kSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VSZXNlbmQnKTtcclxuICBjb25zdCBjb29raWVSZXNwb25zZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzcG9uc2VzJyk7XHJcbiAgY29uc3QgaWRzU2Vzc2lvbkhlbHBlciA9IG5ldyBJZFNlc3Npb25TdG9yYWdlSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJzJyk7XHJcbiAgXHJcbiAgY29uc3QgZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBub25FbXB0eU9wdGlvbnMgPSByZXNwb25zZU9wdGlvbnMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgaWYgKGN1cnIudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFjYywgY3Vyci52YWx1ZV07XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5vbkVtcHR5T3B0aW9ucy5qb2luKCd8fCcpO1xyXG4gIH07XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvb2tpZUhlbHBlci5zZXQoc3ViamVjdElucHV0LnZhbHVlKTtcclxuICAgIGNvb2tpZU1lc3NhZ2VIZWxwZXIuc2V0KG1lc3NhZ2VJbnB1dC52YWx1ZSk7XHJcbiAgICBjb29raWVBdXRvUmVzZW5kSGVscGVyLnNldChyZXNlbmRJbnB1dC52YWx1ZSk7ICBcclxuICAgIGNvb2tpZVJlc3BvbnNlSGVscGVyLnNldChnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZygpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGFnc1NlZUFsbEhlbHBlciA9IG5ldyBTZWVBbGxIZWxwZXIoJyNBc2NTdGFmZlNlbGVjdG9yICsgZGl2ID4gLnRhZycsICcjc2VlTW9yZVJlY2lwaWVudHMnLCB7IGl0ZW1MaW1pdDogMjEsIGNvdW50RmllbGRJZDogJ3JlY2lwaWVudHNDb3VudCcgfSk7XHJcbiAgXHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgaWRzU2Vzc2lvbkhlbHBlci5maWx0ZXJCeUlkcyhzZWxlY3RlZE9wdGlvbnMubWFwKHggPT4geC52YWx1ZSkpO1xyXG4gICAgdGFnc1NlZUFsbEhlbHBlci5yZWNhbGN1bGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IGlkc1Nlc3Npb25IZWxwZXIuZ2V0SXRlbXMoKS5tYXAoKHtpZCwgbmFtZX0pPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gaWQ7XHJcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIHJldHVybiBvcHRpb247XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3Qgc2x0ID0gbmV3IFNlbGVjdExpc3RUYWdzKCdBc2NTdGFmZlNlbGVjdG9yJywgbnVsbCwgb25VcGRhdGVGdW5jLCBzZWxlY3RPcHRpb25zKTsgXHJcblxyXG4gIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuXHJcbiAgY29uc3QgZGlzY2FyZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5EaXNjYXJkJyk7XHJcbiAgZGlzY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlkc1Nlc3Npb25IZWxwZXIuY2xlYXJJdGVtcygpO1xyXG4gICAgc2x0LmNsZWFySXRlbXMoKTtcclxuICAgIHRhZ3NTZWVBbGxIZWxwZXIoKTtcclxuICB9KTtcclxuXHJcblxyXG59XHJcbiIsIlxyXG4vLyBDaGVjayB3ZSBhcmUgb24gdGhlIGNvcnJlY3QgcGFnZS5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4uY291cmllci1wcm9maWxlLXBhZ2UnKTtcclxuXHJcbmlmIChtYWluKSB7XHJcblxyXG4gICAgLy8gR3JhYiBhbGwgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgb25seSBzaG93IHdoZW4ganMgZW5hYmxlZFxyXG4gICAgY29uc3QgYWRkUGhvbmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmVCdG4nKTtcclxuICAgIGNvbnN0IGFkZEVtYWlsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsQnRuJyk7XHJcbiAgICBjb25zdCByZW1vdmVFbWFpbEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSk7XHJcbiAgICBjb25zdCByZW1vdmVQaG9uZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSk7XHJcbiAgICBcclxuICAgIC8vIFNob3cgYWxsIHRoZSBqcyBvbmx5IGJ1dHRvbnNcclxuICAgIFthZGRQaG9uZUJ0biwgYWRkRW1haWxCdG4sIC4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lbWFpbHMnKTtcclxuICAgIFxyXG4gICAgZW1haWxzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxhbmsnKTtcclxuICAgICAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBob25lc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1waG9uZXMnKTtcclxuICAgIFxyXG4gICAgcGhvbmVzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7ICAgICAgICBcclxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdibGFuaycpO1xyXG4gICAgICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYW55IGVtcHR5IHBob25lIGJveGVzLCBvciBlbWFpbCBib3hlc1xyXG4gICAgY29uc3QgaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUgPSAoc2VjdGlvbiwgc2VsZWN0b3IpID0+IHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZWN0aW9uXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcclxuICAgICAgICAgICAgLnNvbWUoeCA9PiB4LnZhbHVlLnRyaW0oKSA9PT0gJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTaG91bGQgbm90IGhhdmUgYW5kIGFkZCBlbWFpbCBidXR0b24gaWYgYWxyZWFkeSBhIGJsYW5rIG9uZSBhdmFpbGFibGVcclxuICAgIGNvbnN0IHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSA9ICgpID0+IHtcclxuICAgICAgICBhZGRQaG9uZUJ0bi5zdHlsZS5kaXNwbGF5ID0gaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUocGhvbmVzU2VjdGlvbiwgJy5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0JykgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3VsZCBub3QgaGF2ZSBhbmQgYWRkIHBob25lIGJ1dHRvbiBpZiBhbHJlYWR5IGEgYmxhbmsgb25lIGF2YWlsYWJsZVxyXG4gICAgY29uc3Qgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZEVtYWlsQnRuLnN0eWxlLmRpc3BsYXkgPSAgaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUoZW1haWxzU2VjdGlvbiwgJy5pbnB1dC0tcHJvZmlsZS1lbWFpbCA+IGlucHV0JykgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgZm9ybSwgdG8gYWRkIHJlbW92ZSBsaXN0ZW5lcnMgdG9cclxuICAgIGNvbnN0IGNvbnRhY3RQcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXByb2ZpbGUtZm9ybScpOyAgIFxyXG5cclxuICAgIFsuLi5yZW1vdmVFbWFpbEJ1dHRvbnMsIC4uLnJlbW92ZVBob25lQnV0dG9uc10uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LmFkZCgnaW5wdXRfX3dpdGhhY3Rpb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlbW92ZSBleGNlc3MgaW5wdXRzIG9mIHRoZXNlIHR5cGVzIG9uIGxvYWQgKEFkZGVkIGZvciBub24ganMgcHVycG9zZXMpLlxyXG4gICAgW1wiLmlucHV0LS1wcm9maWxlLXBob25lID4gaW5wdXRcIiwgXCIuaW5wdXQtLXByb2ZpbGUtZW1haWwgPiBpbnB1dFwiXS5mb3JFYWNoKHNlbGVjdG9yID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dHNGb3JTZWxlY3RvciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRzRm9yU2VsZWN0b3IubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBpbnB1dHNGb3JTZWxlY3Rvci5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1lbWFpbCcsICdJbnB1dC5QZXJzb25hbEVtYWlsQWRkcmVzc2VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IGNvcnJlY3Qgc3RhcnQgc3RhdGUgZm9yIGVtYWlsIGFuZCBwaG9uZSBhZGQgYnV0dG9uc1xyXG4gICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuXHJcbiAgICAvLyBBZGQgYSBuZXcgcGhvbmUgcm93XHJcbiAgICBmdW5jdGlvbiBuZXdQaG9uZVJvdygpIHsgICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBuZXdQaG9uZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdQaG9uZS5jbGFzc05hbWUgPSBcImZvcm1fX2dyb3VwIGlucHV0X193aXRoYWN0aW9uIGlucHV0LS1wcm9maWxlLXBob25lXCI7XHJcbiAgICAgICAgbmV3UGhvbmUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIHBob25lIG51bWJlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmVtb3ZlIGJ0bi1yZW1vdmUtY29udGFjdC1waG9uZVwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJwaG9uZV92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3UGhvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGdhcHMgaW4gaW5kZXggc2VxdWVuY2VzXHJcbiAgICBmdW5jdGlvbiBfcmVudW1iZXJJbnB1dHMoc2VsZWN0b3IsIGlkZW50aWZpZXIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnAgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnAuaWQgPSBgJHtpZGVudGlmaWVyfV8ke2luZGV4fV9gO1xyXG4gICAgICAgICAgICBpbnAubmFtZSA9IGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbiA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3BuLnNldEF0dHJpYnV0ZSgnZGF0YS12YWxtc2ctZm9yJywgYCR7aWRlbnRpZmllcn1bJHtpbmRleH1dYClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYSBuZXcgZW1haWwgcm93XHJcbiAgICBmdW5jdGlvbiBuZXdFbWFpbFJvdygpIHsgICAgXHJcbiAgICAgICAgY29uc3QgbmV3RW1haWxSb3cgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICBcclxuICAgICAgICBuZXdFbWFpbFJvdy5jbGFzc05hbWUgPSBcImZvcm1fX2dyb3VwIGlucHV0X193aXRoYWN0aW9uIGlucHV0LS1wcm9maWxlLWVtYWlsXCI7ICBcclxuICAgICAgICBuZXdFbWFpbFJvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm1fX2lucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiQWRkIGFuIGVtYWlsIGFkZHJlc3NcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSAgYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cImVtYWlsX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBuZXdFbWFpbFJvdztcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaXJlIHVwIHRoZSBidXR0b24gbGlzdGVuZXJzXHJcbiAgICBhZGRQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChuZXdQaG9uZVJvdygpKTtcclxuICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGFkZEVtYWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld0VtYWlsUm93KCkpXHJcbiAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgfSk7ICBcclxuXHJcbiAgICAvLyBIYW5kbGUgdGhlIHJlbW92ZSBvbiB0aGUgcGFyZW50IGZvcm0sIHNvIHRoYXQgd2lsbCB3b3JrIGZvciBuZXcgaXRlbXMgYWRkZWQgYWZ0ZXIgbG9hZC5cclxuICAgIGNvbnRhY3RQcm9maWxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSAgfHwgZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEdldCBhbGwgdGhlIGlucHV0cyBpbiB0aGUgcGFyZW50IHNlY3Rpb25cclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzID0gZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBvbmx5IG9uZSBibGFuayBpdCAtIGVsc2UgcmVtb3ZlIGl0XHJcbiAgICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHNbMF0udmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcGFyZW50IGZvcm0gZ3JvdXAgY29udGFpbmluZyBlbWFpbCBvciBwaG9uZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Hcm91cC5yZW1vdmUoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSkge1xyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpIHtcclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgICAgICAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxyXG4qL1xyXG5pbXBvcnQgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciBmcm9tICcuLi9JZFNlc3Npb25TdG9yYWdlSGVscGVyJztcclxuaW1wb3J0IERyYWZ0TWVzc2FnZURyYXdlciBmcm9tICcuLi9EcmFmdE1lc3NhZ2VEcmF3ZXInO1xyXG5pbXBvcnQgTGF6eUxvYWRlciBmcm9tICcuLi9MYXp5TG9hZGVyJztcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5pZiAobWFpbiAmJiBtYWluLmNsYXNzTGlzdC5jb250YWlucygnYXNjLXN0YWZmLWluZGV4JykpIHtcclxuXHJcbiAgY29uc3QgaWRTaCA9IG5ldyBJZFNlc3Npb25TdG9yYWdlSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJzJyk7XHJcbiAgY29uc3QgZG1kID0gbmV3IERyYWZ0TWVzc2FnZURyYXdlcihpZFNoLmdldENvdW50KCkpO1xyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcclxuXHJcbiAgY29uc3QgYWxsQ2hlY2tib3hlc0luVGFibGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFibGUtc2VsZWN0LXN0YWZmIFt0eXBlPWNoZWNrYm94XVwiKSk7XHJcblxyXG4gIC8vIENoZWNrIGFsbCBpdGVtcyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQgPSBhbGxDaGVja2JveGVzSW5UYWJsZS5maWx0ZXIoY2IgPT4gaWRTaC5oYXNJZChjYi52YWx1ZSkpO1xyXG4gIGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQuZm9yRWFjaChpID0+IGkuY2hlY2tlZCA9IHRydWUpO1xyXG5cclxuICBjb25zdCBhbGxDaGVja2JveGVzU2VsZWN0ZWQgPSAoKSA9PiBhbGxDaGVja2JveGVzSW5UYWJsZS5ldmVyeShjYiA9PiBjYi5jaGVja2VkKTtcclxuICBcclxuICAvLyBjb25zdCBhbGxDb250YWN0SWRzID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUubWFwKGNiID0+IGNiLnZhbHVlKTtcclxuICBjb25zdCBhbGxDb250YWN0cyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogY2IudmFsdWUsXHJcbiAgICAgIG5hbWU6IGNiLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBVc2VzIGEgcGFzc2VkIGluICdjb21iaW5lcicgZnVuY3Rpb24gdG8gZGVjaWRlZCBob3cgdG8gZWl0aGVyIGFkZCBvciByZW1vdmUgc2VsZWN0ZWQgcmVzdWx0cyB0byB0aG9zZSBmcm9tIG90aGVyIHBhZ2VzLlxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSA9IChjb21iaW5lRm4pID0+IHtcclxuICAgIGNvbnN0IGFsbENvbnRhY3RzRGlzcGxheWVkID0gYWxsQ29udGFjdHMoKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nQ29udGFjdHMgPSBpZFNoLmdldEl0ZW1zKCk7XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IGNvbWJpbmVGbihleGlzdGluZ0NvbnRhY3RzLCBhbGxDb250YWN0c0Rpc3BsYXllZCk7ICBcclxuXHJcbiAgICBpZFNoLnNldEl0ZW1zKG5ld0l0ZW1zKTtcclxuICAgIGRtZC51cGRhdGUobmV3SXRlbXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxyXG4gIGNvbnN0IGRlc2VsZWN0QWxsID0gKHRvRGVzZWxlY3QpID0+IHtcclxuICAgIHRvRGVzZWxlY3QuZm9yRWFjaCh0b0Rlc2VsZWN0ID0+IHRvRGVzZWxlY3QuY2hlY2tlZCA9IGZhbHNlKTtcclxuICAgIGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSgoZXhpc3RpbmdJdGVtcywgYWxsSXRlbXNGb3JHcm91cCkgPT4gZXhpc3RpbmdJdGVtcy5maWx0ZXIoKHtpZH0pID0+ICFhbGxJdGVtc0Zvckdyb3VwLm1hcChpID0+IGkuaWQpLmluY2x1ZGVzKGlkKSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGFsbCB0aGUgaWRzIHRoYXQgd2VyZSBjb250YWluZWQgaW4gdGhpcyByZXN1bHRzIHBhZ2UuICBLZWVwIHJlc3VsdCBmcm9tIG90aGVyIHBhZ2VzIHNlbGVjdGVkXHJcbiAgY29uc3Qgc2VsZWN0QWxsID0gKHRvU2VsZWN0KSA9PiB7XHJcbiAgICB0b1NlbGVjdC5mb3JFYWNoKHRvU2VsZWN0ID0+IHRvU2VsZWN0LmNoZWNrZWQgPSB0cnVlKTsgICAgXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0aW9uZENoYW5nZU1lcmdlKChleGlzdGluZ0l0ZW1zLCBhbGxJdGVtc0Zvckdyb3VwKSA9PiB7XHJcblxyXG4gICAgICAvLyBnZXQgYWxsIGl0ZW1zIG9uIHRoZSBwYWdlIG5vdCBpbiB0aGUgZXhpc3RpbmcgcmVzdWx0c1xyXG4gICAgICBjb25zdCBncm91cEl0ZW1zVG9BZGQgPSBhbGxJdGVtc0Zvckdyb3VwLmZpbHRlcigoe2lkfSkgPT4gIWV4aXN0aW5nSXRlbXMubWFwKGkgPT4gaS5pZCkuaW5jbHVkZXMoaWQpKTtcclxuXHJcbiAgICAgIC8vIE1lcmdlIHRoZSBuZXcgaXRlbXMgaW5cclxuICAgICAgcmV0dXJuIFsuLi5leGlzdGluZ0l0ZW1zLCAuLi5ncm91cEl0ZW1zVG9BZGRdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgXHJcblxyXG4gICAgdGFyZ2V0LmNoZWNrZWQgP1xyXG4gICAgICBzZWxlY3RBbGwoYWxsQ2hlY2tib3hlc0luVGFibGUpIDpcclxuICAgICAgZGVzZWxlY3RBbGwoYWxsQ2hlY2tib3hlc0luVGFibGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2JTZWxlY3RBbGwgW3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XHJcbiAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UpO1xyXG5cclxuICAgIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xyXG4gICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXJzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcbiAgbGV0IHVzZXJzVGFibGVCb2R5O1xyXG4gIGlmKHVzZXJzVGFibGUpIHtcclxuICAgdXNlcnNUYWJsZUJvZHkgPSB1c2Vyc1RhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgY29uc3QgY3JpdGVyaWFLZXkgPSAnY3JpdGVyaWEnO1xyXG4gIFxyXG4gIGxldCBzZWFyY2hDcml0ZXJpYVN0cmluZyA9IHVybFBhcmFtcy5oYXMoY3JpdGVyaWFLZXkpID8gYD9jcml0ZXJpYT0ke3VybFBhcmFtcy5nZXQoY3JpdGVyaWFLZXkpfWAgOiAnJztcclxuXHJcbiAgY29uc3QgZ2V0U2VhcmNoRW5kcG9pbnQgPSAoKSA9PiBgJHtsb2NhdGlvbi5vcmlnaW59L0ZvcmNlL0NvbnRhY3RzLyR7Y3VycmVudFBhZ2V9JHtzZWFyY2hDcml0ZXJpYVN0cmluZ31gO1xyXG4gIFxyXG4gIC8vIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBjaGVja2JveGVzXHJcbiAgY29uc3Qgc3RhZmZUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcclxuXHJcbiAgaWYgKHN0YWZmVGFibGUpIHtcclxuICAgIHN0YWZmVGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKHt0YXJnZXR9KSA9PiB7XHJcbiAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3VG90YWwgPSB0YXJnZXQuY2hlY2tlZCA/IGlkU2guYWRkKHRhcmdldC52YWx1ZSwgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKSkgOiBpZFNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAvLyBJZiB1bmNoZWNrZWQgZGVzZWxlY3QgdGhlIGNoZWNrIGFsbC5cclxuICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsQ2hlY2tib3hlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAvLyBJZiBjaGVja2VkIHNlZSBpZiBhbGwgYXJlIG5vdyBzZWxlY3RlZC5cclxuICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZG1kLnVwZGF0ZShuZXdUb3RhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgfSAgXHJcblxyXG4gIGNvbnN0IGNyZWF0ZUNoZWNrYm94RmllbGQgPSAodmFsdWUsIGNoZWNrZWQsIG5hbWUpID0+IHsgIFxyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNlbGwnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnLCBuYW1lKTtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVDZWxsV2l0aFRleHQgPSB0ZXh0ID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRSb3cgPSB1c2VyID0+IHtcclxuICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLm5hbWUpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5jb2xsYXIpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5lbWFpbCkpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLnBob25lTnVtYmVyKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3hGaWVsZCh1c2VyLmlkLCBpZFNoLmhhc0lkKHVzZXIuaWQpLCB1c2VyLm5hbWUpKTtcclxuXHJcbiAgICB1c2Vyc1RhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUmVzdWx0Um93cyA9IHJvd3MgPT4ge1xyXG4gICAgcm93cy5mb3JFYWNoKGFkZFJvdyk7XHJcbiAgfVxyXG5cclxuICBpZiAobG9hZGVyKSB7XHJcblxyXG4gICAgY29uc3QgbG9hZGVyUGFnZVNpemUgPSBsb2FkZXIuZ2V0QXR0cmlidXRlKFwicGFnZS1zaXplXCIpO1xyXG5cclxuICAgIG5ldyBMYXp5TG9hZGVyKGxvYWRlciwgYXN5bmMgZG9uZSA9PiB7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBuZXh0IHBhZ2UgaW5kZXhcclxuICAgICAgICBjdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0U2VhcmNoRW5kcG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIHNlYXJjaFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGVuZHBvaW50KTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSZXN1bHRzID0gcmVzdWx0cy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAvLyBXZSBkb250IGtub3cgaWYgdGhlcmUgd2lsbCBiZSBtb3JlIHJlc3VsdHMsIGJ1dCBpdHMgbGlrZWx5IGlmIHdlIHJldHVybiBhIGZ1bGwgcGFnZSBvZiByZXN1bHRzXHJcbiAgICAgICAgbGV0IG1vcmVSZXN1bHRzTGlrZWx5ID0gaGFzUmVzdWx0cztcclxuICAgICAgICBpZiAobG9hZGVyUGFnZVNpemUpIHtcclxuICAgICAgICAgIC8vIFdlIG1heSBub3QgaGF2ZSB0aGlzIGF0dHJpYnV0ZSwgYnV0IGlmIHdlIGRvIGNoZWNrIGlmIHRoZSBwYWdlIGlzIGZ1bGwuIElmIG5vdCB0aGVyZSBzaG91bGQgYmUgbm8gbW9yZSByZXN1bHRzIHRvIGZldGNoXHJcbiAgICAgICAgICBtb3JlUmVzdWx0c0xpa2VseSA9IHJlc3VsdHMubGVuZ3RoID09PSBwYXJzZUludChsb2FkZXJQYWdlU2l6ZSwgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc1Jlc3VsdHMpIHsgICAgICAgICAgXHJcbiAgICAgICAgICBhZGRSZXN1bHRSb3dzKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9uZShtb3JlUmVzdWx0c0xpa2VseSk7ICBcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlKSB7ICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbGF6eSBsb2FkIHBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgQUQgdXNlcnNgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIC8vIElnbm9yZSBjdXJyZW50IGZhaWxlZCBwYWdlLCBzbyB3aWxsIHRyeSBhZ2FpblxyXG4gICAgICAgIGN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgZG9uZSh0cnVlKTsgLy8gQ2FsbCBkb25lIHdpdGggbW9yZSB0byBsb2FkLlxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgdG8gZG8gaGVyZS4gSWYgZW5wb2ludCBpcyBkb3duLCB3ZSB3b3VsZCBnZXQgbG90cyBvZiBjb25zb2xlIGVycm9ycyBhdCB0aGUgbW9tZW50Li4uLlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSwgeyBkZWJ1ZzogZmFsc2UsIHBlZWtEaXN0YW5jZTogNTAgfSk7XHJcbiAgfSAgXHJcbn1cclxuIiwiLyogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbixcclxudG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4vLyBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4vLyAgICB2YXIgYXNpZGVFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIik7XHJcbi8vICAgICBpZihhc2lkZUV4aXN0KXtcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XHJcbiAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcclxuICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG52YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbmlmIChhZGRHcm91cEJ1dHRvbikge1xyXG5cclxuYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG52YXIgY2xvc2VTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlX3NpZGViYXInKTtcclxuXHJcbmlmIChjbG9zZVNpZGViYXIpIHtcclxuXHJcbmNsb3NlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XHJcbiAgdmFyIHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgLy8gaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAvLyAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGlmICgheC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIHguY2xhc3NMaXN0LmFkZCgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LmFkZCgnbWFpbi0taGlkZGVuJyk7XHJcbiAgICAgIC8vIH1cclxuICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVRdWVyeVBhcmFtID0gcGFyYW0gPT4ge1xyXG4gICAgICAgIGlmKHVybFBhcmFtcy5oYXMocGFyYW0pKXtcclxuICAgICAgICAgICAgdXJsUGFyYW1zLmRlbGV0ZShwYXJhbSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/PSR7dXJsUGFyYW1zLnRvU3RyaW5nKCl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0NvbnRhY3RBZGRlZCcpO1xyXG4gICAgY29uc3QgT3JnYW5pc2F0aW9uUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdPcmdhbmlzYXRpb25BZGRlZCcpO1xyXG4gICAgY29uc3QgTWVzc2FnZVNlbnRQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ01lc3NhZ2VTZW50Jyk7XHJcbiAgICBjb25zdCBGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdGb3JjZUNvbnRhY3RVcGRhdGVkJyk7XHJcblxyXG4gICAgbGV0IHNuYWNrYmFyTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGlmIChjb250YWN0UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ0NvbnRhY3RBZGRlZCcpO1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgY29udGFjdCBoYXMgYmVlbiBjcmVhdGVkJztcclxuICAgIH0gZWxzZSBpZiAoT3JnYW5pc2F0aW9uUGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ09yZ2FuaXNhdGlvbkFkZGVkJyk7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBvcmdhbmlzYXRpb24gaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE1lc3NhZ2VTZW50UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIC8qIFxyXG4gICAgICAgICAgICBCaXQgaGFja3ksIGJ1dCBjbGVhcmluZyB0aGUgc2Vzc2lvblN0b3JhZ2UgaGVyZSB0byBjbGVhciBtZXNzYWdlIHN0YXRlIGhlcmUuIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIkNvdXJpZXJNZXNzYWdlVXNlcnNcIilcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdNZXNzYWdlU2VudCcpO1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdNZXNzYWdlIHNlbnQnO1xyXG4gICAgfSBlbHNlIGlmIChGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0gJiYgRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ0ZvcmNlQ29udGFjdFVwZGF0ZWQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnUGVyc29uYWwgY29udGFjdCBkZXRhaWxzIHVwZGF0ZWQnO1xyXG4gICAgfSBcclxuXHJcbiAgICBpZiAoc25hY2tiYXJNZXNzYWdlKSB7XHJcbiAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LmFkZCgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIHNuYWNrYmFyLmlubmVySFRNTCA9IHNuYWNrYmFyTWVzc2FnZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QucmVtb3ZlKCdzbmFja2Jhci0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcblxyXG59KShcIiNzbmFja2JhclwiKTtcclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIC8vZnVuY3Rpb24gdG8gbWFrZSB3aG9sZSB0YWJsZSB0ciBjbGlja2FibGVcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHRyJykuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG5cclxuLy8gICAgICAgICBpZiAoZWwuZGF0YXNldC5ocmVmICE9bnVsbCkge1xyXG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcclxuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmRhdGFzZXQuaHJlZjtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KShcInRhYmxlXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9