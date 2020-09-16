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

/***/ "./src/js/CheckboxDisableButtonHelper.js":
/*!***********************************************!*\
  !*** ./src/js/CheckboxDisableButtonHelper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxDisableButtonHelper; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



// Disables and enables a button by whether or not a checkbox is selected.
var CheckboxDisableButtonHelper = /*#__PURE__*/function () {
  function CheckboxDisableButtonHelper(buttonSelector, checkboxSelector) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CheckboxDisableButtonHelper);

    // Grab the button
    this._button = document.querySelector(buttonSelector);
    if (!this._button) throw new Error("Button selector doesnt match an element"); // Grab the checkbox

    this._checkbox = document.querySelector(checkboxSelector);
    if (!this._checkbox) throw new Error("Checkbox selector doesnt match an element"); // Respect the checkboxes starting state

    if (!this._checkbox.checked) {
      this._disableButton();
    } // Add and event listener that enables and disables the button.


    this._checkbox.addEventListener('change', function (e) {
      e.target.checked ? _this._enableButton() : _this._disableButton();
    });
  } // Disables the button


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CheckboxDisableButtonHelper, [{
    key: "_disableButton",
    value: function _disableButton() {
      this._button.setAttribute('disabled', 'disabled');

      this._button.classList.add('disabled');
    } // Enables the button

  }, {
    key: "_enableButton",
    value: function _enableButton() {
      this._button.removeAttribute('disabled');

      this._button.classList.remove('disabled');
    }
  }]);

  return CheckboxDisableButtonHelper;
}();



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
/*! no static exports found */
/***/ (function(module, exports) {

var groupExist = document.getElementById("Group");

if (groupExist) {
  var useCheckboxes = groupExist.hasAttribute('data-with-checkbox');
  var useSingleSelectCheckbox = groupExist.hasAttribute('data-with-single-select-checkbox');
  var lockRootNode = groupExist.hasAttribute('data-lock-root');

  (function (selector, useCheckboxes, useSingleSelectCheckbox) {
    //Check on page whether Group Multi Select exists
    var intiallySelectedNodes = [];
    var groupSelect = document.getElementById("GroupSelector");
    var groupTextarea = document.getElementById("GroupTextarea"); // If the Group Multi Select does exist, hide it (if JS enabled)

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
      groupTextarea.addEventListener('click', function (e) {
        var target = e.target;

        if (target.matches(".tag>.button__icon") && target.hasAttribute('data-path')) {
          var pathToUncheck = target.getAttribute("data-path").replace(/\\/g, "\\\\");
          var cbSelector = 'input[type=checkbox].GroupItem[value="' + pathToUncheck + '"]';
          var checboxToUncheck = document.querySelector(cbSelector);

          if (checboxToUncheck) {
            checboxToUncheck.click();
          }
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
    }
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
    this._loaderFunc = loaderFn; // Merge the defaults and passed in config

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
        document.addEventListener('scroll', this._lazyLoadCheck);
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
        document.removeEventListener('scroll', this._lazyLoadCheck);
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
      var highestVisibleYPos = window.pageYOffset + window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var loadMoreTriggerPos = Math.min(this._loader.offsetTop + this._config.peekDistance, documentHeight);
      var peekPositionVisible = highestVisibleYPos >= loadMoreTriggerPos;
      var shouldLoadMore = peekPositionVisible;

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
        'Is the load more position visible, or at doc end': shouldLoadMore
      }, console.table);

      return shouldLoadMore;
    }
  }]);

  return CourierLazyLoader;
}();



/***/ }),

/***/ "./src/js/SeeAll.js":
/*!**************************!*\
  !*** ./src/js/SeeAll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 *  USAGE: To use this control you must add the following attribute to the button that should be doing the show all.
 * 
 *  data-showall-table-id="<<id of table to be effected>>"
 * 
 *  OPTIONAL: Use the following attrtibutes to adjust the behavior
 * 
 *  data-showall-item-limit="20" - sets the number of items to show initially.  Default is 10
 *  
 */
var showMoreTableButtons = document.querySelectorAll('button[data-showall-table-id]');
showMoreTableButtons.forEach(function (showAllButton) {
  var tableId = showAllButton.getAttribute("data-showall-table-id");
  var table = document.getElementById(tableId);

  if (table) {
    var defaultItemLimit = 10;
    var passedItemLimit = showAllButton.getAttribute("data-showall-item-limit");
    var parsedItemLimit = parseInt(passedItemLimit, 10);
    var limitToUse = isNaN(parsedItemLimit) ? defaultItemLimit : parsedItemLimit; // We dont want the headers

    var tableBody = table.tBodies[0];

    if (!tableBody) {
      return;
    }

    var tableBodyLength = tableBody.rows.length;

    for (var i = 1, bodyRow; bodyRow = tableBody.rows[i - 1]; i++) {
      if (i > limitToUse) {
        bodyRow.style.display = "none";
      }
    }

    if (tableBodyLength <= limitToUse) {
      showAllButton.style.display = "none";
    }

    showAllButton.addEventListener('click', function (el) {
      el.preventDefault();
      Array.from(tableBody.rows).forEach(function (bodyRow) {
        bodyRow.style.display = "table-row";
      });
      el.target.style.display = "none";
    });
  }
});

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
  var discardBtn = document.getElementById('btnDiscard');
  discardBtn.addEventListener('click', function () {
    sessionStorage.removeItem("CourierMessageUsers");
  });

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

  var onUpdateFunc = function onUpdateFunc(selectedOptions, allOptions) {
    idsSessionHelper.filterByIds(selectedOptions.map(function (x) {
      return x.value;
    }));
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
  new _SelectListTags__WEBPACK_IMPORTED_MODULE_3__["default"]('AscStaffSelector', null, onUpdateFunc, selectOptions);
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
/* harmony import */ var _CheckboxDisableButtonHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CheckboxDisableButtonHelper */ "./src/js/CheckboxDisableButtonHelper.js");

 // Check we are on the correct page.

var main = document.querySelector('main.courier-profile-page');

if (main) {
  // Add a new phone row
  var newPhoneRow = function newPhoneRow() {
    var newPhone = document.createElement('div');
    newPhone.className = "form__group input__withaction input--profile-phone";
    newPhone.innerHTML = "\n            <input class=\"form__input\" autocomplete=\"off\" type=\"text\" name=\"phone\" value=\"\">\n            <button class=\"button button--remove btn-remove-contact-phone\">Remove</button>\n            <span class=\"field-validation-valid\" data-valmsg-for=\"phone_validation\" data-valmsg-replace=\"true\"></span>\n        ";
    return newPhone;
  };

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
    newEmailRow.innerHTML = "\n            <input class=\"form__input\" autocomplete=\"off\" type=\"text\" name=\"email\" value=\"\">\n            <button class=\"button button--remove  btn-remove-contact-email\">Remove</button>\n            <span class=\"field-validation-valid\" data-valmsg-for=\"email_validation\" data-valmsg-replace=\"true\"></span>\n        ";
    return newEmailRow;
  }; // Wire up the button listeners


  new _CheckboxDisableButtonHelper__WEBPACK_IMPORTED_MODULE_1__["default"]('#btnSave', '#Input_PrivacyPolicy'); // Grab all the buttons that are only show when js enabled

  var addPhoneBtn = document.getElementById('addPhoneBtn');
  var addEmailBtn = document.getElementById('addEmailBtn');
  var removeEmailButtons = Array.from(document.querySelectorAll('.btn-remove-contact-email'));
  var removePhoneButtons = Array.from(document.querySelectorAll('.btn-remove-contact-phone')); // Get the form, to add remove listeners to

  var contactProfileForm = document.getElementById('contact-profile-form'); // Show all the js only buttons

  [addPhoneBtn, addEmailBtn].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removeEmailButtons), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removePhoneButtons)).forEach(function (el) {
    el.style.display = "";
  });
  [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removeEmailButtons), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(removePhoneButtons)).forEach(function (el) {
    el.closest('.form__group').classList.add('input__withaction');
  }); // Remove the empty inputs added for non js purposes

  var emptyInputsToRemove = document.querySelectorAll('.input--profile-phone:last-of-type, .input--profile-email:last-of-type');
  emptyInputsToRemove.forEach(function (emptyInput) {
    return emptyInput.remove();
  });
  addPhoneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('section').appendChild(newPhoneRow());

    _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');
  });
  addEmailBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('section').appendChild(newEmailRow());

    _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
  }); // Handle the remove on the parent form, so that will work for new items added after load.

  contactProfileForm.addEventListener('click', function (e) {
    if (e.target.matches('.btn-remove-contact-phone') || e.target.matches('.btn-remove-contact-email')) {
      e.preventDefault(); // Remove parent form group containing email or phone.

      var formGroup = e.target.closest('.form__group');

      if (formGroup) {
        formGroup.remove();
      }
    }

    if (e.target.matches('.btn-remove-contact-phone')) {
      _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');
    }

    if (e.target.matches('.btn-remove-contact-email')) {
      _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
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
  var contactParam = urlParams.get('ContactAdded');
  var OrganisationParam = urlParams.get('OrganisationAdded');
  var MessageSentParam = urlParams.get('MessageSent');
  var ForceContactUpdatedParam = urlParams.get('ForceContactUpdated');
  var snackbarMessage = '';

  if (contactParam === 'True') {
    snackbarMessage = 'New contact has been created';
  } else if (OrganisationParam === 'True') {
    snackbarMessage = 'New organisation has been created';
  } else if (MessageSentParam === 'True') {
    /* 
        Bit hacky, but clearing the sessionStorage here to clear message state here. 
    */
    sessionStorage.removeItem("CourierMessageUsers");
    snackbarMessage = 'Message sent';
  } else if (ForceContactUpdatedParam && ForceContactUpdatedParam.toLowerCase() === 'true') {
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
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/hint-snackbar.js ./src/js/SelectListTags.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ./src/js/pages/CourierProfile.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
__webpack_require__(/*! ./src/js/pages/SelectStaffForMessage.js */"./src/js/pages/SelectStaffForMessage.js");
__webpack_require__(/*! ./src/js/pages/ComposeStaffMessage.js */"./src/js/pages/ComposeStaffMessage.js");
module.exports = __webpack_require__(/*! ./src/js/pages/CourierProfile.js */"./src/js/pages/CourierProfile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0RyYWZ0TWVzc2FnZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR3JvdXBzVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvSWRTZXNzaW9uU3RvcmFnZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTGF6eUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db21wb3NlU3RhZmZNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db3VyaWVyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzLmpzIl0sIm5hbWVzIjpbIkJvdHRvbURyYXdlciIsIl9vcGVuQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIkNoZWNrYm94RGlzYWJsZUJ1dHRvbkhlbHBlciIsImJ1dHRvblNlbGVjdG9yIiwiY2hlY2tib3hTZWxlY3RvciIsIl9idXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJfY2hlY2tib3giLCJjaGVja2VkIiwiX2Rpc2FibGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIl9lbmFibGVCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJEcmFmdE1lc3NhZ2VEcmF3ZXIiLCJudW1iZXJPZlJlY2lwaWVudHMiLCJ0b3RhbFNlbGVjdG9yIiwiY29va2llSGVscGVyIiwiU2ltcGxlQ29va2llSGVscGVyIiwiX3RvdGFsc0VsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdldCIsIl9ib3R0b21EcmF3ZXIiLCJ1cGRhdGUiLCJpbm5lclRleHQiLCJzaG93IiwiaGlkZSIsImdyb3VwRXhpc3QiLCJnZXRFbGVtZW50QnlJZCIsInVzZUNoZWNrYm94ZXMiLCJoYXNBdHRyaWJ1dGUiLCJ1c2VTaW5nbGVTZWxlY3RDaGVja2JveCIsImxvY2tSb290Tm9kZSIsInNlbGVjdG9yIiwiaW50aWFsbHlTZWxlY3RlZE5vZGVzIiwiZ3JvdXBTZWxlY3QiLCJncm91cFRleHRhcmVhIiwicGFyZW50RWxlbWVudCIsInNlbGVjdGVkT3B0aW9uc05vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidmFsdWUiLCJtYXRjaGVzIiwicGF0aFRvVW5jaGVjayIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjYlNlbGVjdG9yIiwiY2hlY2JveFRvVW5jaGVjayIsImNsaWNrIiwic2VhcmNoUGFydHMiLCJnZXRVcmxWYXJzIiwidmFycyIsInBhcnRzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibSIsImtleSIsInBhZ2VQYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJncm91cFBhcmFtIiwiZ3JvdXAiLCJzZWFyY2hQYXJhbSIsIlNlYXJjaCIsImdldFBhZ2VQYXRoRm9yR3JvdXAiLCJncnAiLCJzaG91bGRQYXJlbnRCZU9wZW4iLCJwYXRoIiwicGF0aFRvQ2hlY2siLCJzdGFydHNXaXRoIiwiaXNTZWxlY3RlZEdyb3VwIiwicGFyYW1zVG9DaGVjayIsImRlY29kZVVSSUNvbXBvbmVudCIsImJ1aWxkTGluayIsInRleHQiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsImJ1aWxkQ2hlY2tib3giLCJwYXJlbnRDaGVja2VkIiwiY2hlY2tib3giLCJ0eXBlIiwibmFtZSIsImlkIiwibmV3UGFyZW50U2VsZWN0ZWQiLCJkaXNhYmxlZCIsIm5ld0NoZWNrZWQiLCJpbmRleE9mIiwibGFiZWwiLCJjaGVja1NwYW4iLCJib3JkZXJTcGFuIiwiYXBwZW5kQ2hpbGQiLCJidWlsZENoZWNrYm94TGFiZWwiLCJjaGVja2JveExhYmVsIiwiaW5uZXJIVE1MIiwiZm9yIiwidHJhbnNmZXJWYWx1ZXMiLCJkYXRhIiwiZWxlbXMiLCJwb3B1bGF0ZUdyb3VwRmllbGQiLCJ0ZXh0YXJlYSIsImVsZW1lbnQiLCJleGlzdGluZ09wdGlvblZhbHVlcyIsIkFycmF5IiwiZnJvbSIsIm9wdGlvbnMiLCJtYXAiLCJvcHQiLCJkYXRhX2kiLCJkYXRhX2N1cnJlbnQiLCJzdWJzdHJpbmciLCJuZXdPcHRpb24iLCJzZWxlY3RlZCIsImFwcGVuZENoaWxkcmVuRm9yTW9kZSIsInBhcmVudCIsImNoZWNrYm94UmVzdWx0IiwiZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudCIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInVwZGF0ZXJGbiIsImN1cnJlbnRMb29wQ2hpbGQiLCJoYW5kbGVDaGVja2JveENsaWNrIiwicGFyZW50TGkiLCJwYXJlbnROb2RlIiwiYWxsR3JvdXBDaGVja2JveGVzIiwiY2hlY2tib3hUb1VwZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRDaGVja2JveGVzIiwiaGlkZGVuRmllbGQiLCJzdHJ1Y3R1cmUiLCJvcHRpb25faSIsIm9wdGlvbiIsInNlZ21lbnRzIiwic3BsaXQiLCJub2RlVG9DaGVjayIsInNlZ21lbnRfaSIsInNlZyIsInRyZWVDb250YWluZXIiLCJhY3RpdmVDaGlsZHJlbiIsImFjX2kiLCJhY3RpdmVDaGlsZCIsImRpc3BsYXlDaGlsZEtleXMiLCJjdXJyVGV4dCIsImN1cnJQYXRoIiwib2JqIiwiZWxlbWVudFRvQWRkVG8iLCJsZXZlbCIsInBhcmVudHNDaGVja2VkIiwiY2hpbGRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudENoZWNrZWRTdGF0ZSIsImNoaWxkTGlzdEl0ZW0iLCJjaGlsZExpc3QiLCJja19pIiwiY2hpbGRLZXkiLCJyZXBsYWNlQ2hpbGQiLCJJZFNlc3Npb25TdG9yYWdlSGVscGVyIiwiX25hbWUiLCJpbml0aWFsIiwiX2luaXRpYWxpc2UiLCJfaXRlbXMiLCJNYXAiLCJmb3JFYWNoIiwic2V0Iiwic2VsZWN0ZWRJdGVtc0pzb24iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJfcGVyc2lzdCIsIkpTT04iLCJwYXJzZSIsIml0ZW1zIiwiZ2V0SXRlbXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX3VwZGF0ZSIsImdldENvdW50IiwiaWRzIiwiaWRzVG9LZWVwIiwiZ2V0SWRzIiwiaW5jbHVkZXMiLCJzaXplIiwiZGVsZXRlIiwiZW50cmllcyIsImhhcyIsIkNvdXJpZXJMYXp5TG9hZGVyIiwibG9hZGVyRWxlbWVudCIsImxvYWRlckZuIiwiY29uZmlnT2JqIiwiY29uZmlnRGVmYXVsdHMiLCJsb2FkZXJDbGFzcyIsImxvYWRlckxvYWRpbmdDbGFzcyIsImRlYm91bmNlTXMiLCJwZWVrRGlzdGFuY2UiLCJkZWJ1ZyIsIl9sb2FkZXIiLCJfbG9hZGVyRnVuYyIsIl9jb25maWciLCJfaGFzTGlzdGVuZXJzQWRkZWQiLCJfbGF6eUxvYWRDaGVjayIsImRlYm91bmNlIiwiX2RvTG9hZE1vcmVDaGVjayIsIl9jb25kaXRpb25hbERlYnVnTG9nIiwiX3N0b3BMaXN0ZW5pbmciLCJfZG9uZVNlYXJjaGluZyIsIl9zdGFydExpc3RlbmluZyIsImJpbmQiLCJ2aXNpYmxlIiwibW9yZVRvTG9hZCIsIl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9EZWJ1ZyIsImxvZ2dlckZ1bmMiLCJjb25zb2xlIiwibG9nIiwiaGlnaGVzdFZpc2libGVZUG9zIiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwibG9hZE1vcmVUcmlnZ2VyUG9zIiwiTWF0aCIsIm1pbiIsIm9mZnNldFRvcCIsInBlZWtQb3NpdGlvblZpc2libGUiLCJzaG91bGRMb2FkTW9yZSIsInRhYmxlIiwic2hvd01vcmVUYWJsZUJ1dHRvbnMiLCJzaG93QWxsQnV0dG9uIiwidGFibGVJZCIsImRlZmF1bHRJdGVtTGltaXQiLCJwYXNzZWRJdGVtTGltaXQiLCJwYXJzZWRJdGVtTGltaXQiLCJwYXJzZUludCIsImxpbWl0VG9Vc2UiLCJpc05hTiIsInRhYmxlQm9keSIsInRCb2RpZXMiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzIiwiYm9keVJvdyIsInN0eWxlIiwiZGlzcGxheSIsImVsIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaWx0ZXIiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwic3BhbiIsInBsdXJhbGlzZWRHcm91cHMiLCJjb29raWVTdHJpbmciLCJjb29raWUiLCJjb29raWVzIiwibWF0Y2hpbmdDb29raWUiLCJmaW5kIiwiYyIsIl92YWx1ZSIsIm5ld0Nvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3BvbnNlcyIsInJlc3BvbnNlc0xpc3QiLCJyZXNwb25zZSIsImlkeCIsInRyaW0iLCJzaG93Rmlyc3RFbXB5SXRlbSIsImN1cnJlbnRSZXNwb25zZSIsImNvcHlJdGVtc0ZvcndhcmQiLCJpbmRleCIsInByZXZJbnB1dCIsImlucHV0IiwicmVtb3ZlTGFzdEVtcHR5SXRlbSIsInJlbW92ZUlkeCIsImFkZFJlc3BvbnNlQnV0dG9uIiwiYmx1ciIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNsb3Nlc3QiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNuYWNrYmFyU3RvcmFnZUl0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJzbmFja2JhciIsInNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSIsImxvY2F0aW9ucyIsIm1lbnUiLCJtZW51QnV0dG9uIiwibWVudUNoaWxkIiwibWFpbiIsImFkZEJ0biIsInN1YmplY3RJbnB1dCIsIm1lc3NhZ2VJbnB1dCIsInJlc2VuZElucHV0IiwicmVzcG9uc2VPcHRpb25zIiwiY29va2llTWVzc2FnZUhlbHBlciIsImNvb2tpZUF1dG9SZXNlbmRIZWxwZXIiLCJjb29raWVSZXNwb25zZUhlbHBlciIsImlkc1Nlc3Npb25IZWxwZXIiLCJkaXNjYXJkQnRuIiwicmVtb3ZlSXRlbSIsImdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nIiwibm9uRW1wdHlPcHRpb25zIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImpvaW4iLCJmaWx0ZXJCeUlkcyIsIngiLCJzZWxlY3RPcHRpb25zIiwibmV3UGhvbmVSb3ciLCJuZXdQaG9uZSIsImNsYXNzTmFtZSIsIl9yZW51bWJlcklucHV0cyIsImlkZW50aWZpZXIiLCJpbnB1dHMiLCJpbnAiLCJzcG4iLCJuZXdFbWFpbFJvdyIsImFkZFBob25lQnRuIiwiYWRkRW1haWxCdG4iLCJyZW1vdmVFbWFpbEJ1dHRvbnMiLCJyZW1vdmVQaG9uZUJ1dHRvbnMiLCJjb250YWN0UHJvZmlsZUZvcm0iLCJlbXB0eUlucHV0c1RvUmVtb3ZlIiwiZW1wdHlJbnB1dCIsImZvcm1Hcm91cCIsImlkU2giLCJkbWQiLCJsb2FkZXIiLCJhbGxDaGVja2JveGVzSW5UYWJsZSIsIml0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQiLCJjYiIsImhhc0lkIiwiYWxsQ2hlY2tib3hlc1NlbGVjdGVkIiwiZXZlcnkiLCJhbGxDb250YWN0cyIsImhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSIsImNvbWJpbmVGbiIsImFsbENvbnRhY3RzRGlzcGxheWVkIiwiZXhpc3RpbmdDb250YWN0cyIsIm5ld0l0ZW1zIiwic2V0SXRlbXMiLCJkZXNlbGVjdEFsbCIsInRvRGVzZWxlY3QiLCJleGlzdGluZ0l0ZW1zIiwiYWxsSXRlbXNGb3JHcm91cCIsInNlbGVjdEFsbCIsInRvU2VsZWN0IiwiZ3JvdXBJdGVtc1RvQWRkIiwiaGFuZGxlU2VsZWN0QWxsQ2hhbmdlIiwidG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3giLCJ1c2Vyc1RhYmxlIiwidXNlcnNUYWJsZUJvZHkiLCJjdXJyZW50UGFnZSIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiY3JpdGVyaWFLZXkiLCJzZWFyY2hDcml0ZXJpYVN0cmluZyIsImdldFNlYXJjaEVuZHBvaW50Iiwic3RhZmZUYWJsZSIsIm5ld1RvdGFsIiwiY3JlYXRlQ2hlY2tib3hGaWVsZCIsImNlbGwiLCJjcmVhdGVDZWxsV2l0aFRleHQiLCJhZGRSb3ciLCJ1c2VyIiwibmV3Um93IiwiY29sbGFyIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZFJlc3VsdFJvd3MiLCJsb2FkZXJQYWdlU2l6ZSIsIkxhenlMb2FkZXIiLCJkb25lIiwiZW5kcG9pbnQiLCJmZXRjaCIsImpzb24iLCJyZXN1bHRzIiwiaGFzUmVzdWx0cyIsIm1vcmVSZXN1bHRzTGlrZWx5IiwiZXJyb3IiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsInkiLCJjb250YWN0UGFyYW0iLCJPcmdhbmlzYXRpb25QYXJhbSIsIk1lc3NhZ2VTZW50UGFyYW0iLCJGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0iLCJzbmFja2Jhck1lc3NhZ2UiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFD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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FB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Z0csbUJBQWUsR0FBRyxjQUFsQjtBQUNILEdBTk0sTUFNQSxJQUFJRCx3QkFBd0IsSUFBSUEsd0JBQXdCLENBQUNFLFdBQXpCLE9BQTJDLE1BQTNFLEVBQW1GO0FBQ3RGRCxtQkFBZSxHQUFHLGtDQUFsQjtBQUNIOztBQUVELE1BQUlBLGVBQUosRUFBcUI7QUFDakJqSCxZQUFRLENBQUNuVSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixrQkFBdkI7QUFDQWtVLFlBQVEsQ0FBQzlOLFNBQVQsR0FBcUIrVSxlQUFyQjtBQUVBcEgsY0FBVSxDQUFDLFlBQVU7QUFDakJHLGNBQVEsQ0FBQ25VLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGtCQUExQjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKLENBcENELEVBb0NHLFdBcENILEU7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlIiwiZmlsZSI6ImRpc3QvanMvc2NyaXB0cy5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qXHJcbiBDbGFzcyB0aGF0IGZhY2lsaXRhdGUgdGhlIGhpZGluZyBhbmQgc2hvd2luZyBvZiB0aGUgYm90dG9tIGJhci5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX29wZW5DbGFzcyA9IFwiYm90dG9tLWRyYXdlci1vcGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxufTsiLCIvLyBEaXNhYmxlcyBhbmQgZW5hYmxlcyBhIGJ1dHRvbiBieSB3aGV0aGVyIG9yIG5vdCBhIGNoZWNrYm94IGlzIHNlbGVjdGVkLlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIge1xyXG4gICAgY29uc3RydWN0b3IoYnV0dG9uU2VsZWN0b3IsIGNoZWNrYm94U2VsZWN0b3IpIHtcclxuICAgICAgICAvLyBHcmFiIHRoZSBidXR0b25cclxuICAgICAgICB0aGlzLl9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvblNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2J1dHRvbikgdGhyb3cgbmV3IEVycm9yKFwiQnV0dG9uIHNlbGVjdG9yIGRvZXNudCBtYXRjaCBhbiBlbGVtZW50XCIpO1xyXG4gICAgICAgIC8vIEdyYWIgdGhlIGNoZWNrYm94XHJcbiAgICAgICAgdGhpcy5fY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNoZWNrYm94U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tib3gpIHRocm93IG5ldyBFcnJvcihcIkNoZWNrYm94IHNlbGVjdG9yIGRvZXNudCBtYXRjaCBhbiBlbGVtZW50XCIpO1xyXG5cclxuICAgICAgICAvLyBSZXNwZWN0IHRoZSBjaGVja2JveGVzIHN0YXJ0aW5nIHN0YXRlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBhbmQgZXZlbnQgbGlzdGVuZXIgdGhhdCBlbmFibGVzIGFuZCBkaXNhYmxlcyB0aGUgYnV0dG9uLlxyXG4gICAgICAgIHRoaXMuX2NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5hYmxlQnV0dG9uKCkgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc2FibGVzIHRoZSBidXR0b25cclxuICAgIF9kaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5hYmxlcyB0aGUgYnV0dG9uXHJcbiAgICBfZW5hYmxlQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQm90dG9tRHJhd2VyIGZyb20gJy4vQm90dG9tRHJhd2VyJztcclxuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuL1NpbXBsZUNvb2tpZUhlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFmdE1lc3NhZ2VEcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZSZWNpcGllbnRzLCB0b3RhbFNlbGVjdG9yPVwiLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190b3RhbFwiKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvdGFsU2VsZWN0b3IpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdGl0bGUnKS50ZXh0Q29udGVudCA9IGNvb2tpZUhlbHBlci5nZXQoKSB8fCAnVW50aXRsZWQnO1xyXG4gICAgICAgIGlmICghdGhpcy5fdG90YWxzRWxlbWVudCkgeyB0aHJvdyBFcnJvcihgTm8gZWxlbWVudCBtYXRjaGluZyB0aGUgcGFzc2VkIGluIHNlbGVjdG9yICR7dG90YWxTZWxlY3Rvcn1gKTsgfVxyXG4gICAgICAgIHRoaXMuX2JvdHRvbURyYXdlciA9IG5ldyBCb3R0b21EcmF3ZXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICB1cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudC5pbm5lclRleHQgPSBudW1iZXJPZlJlY2lwaWVudHM7XHJcbiAgICAgICAgbnVtYmVyT2ZSZWNpcGllbnRzID8gdGhpcy5fYm90dG9tRHJhd2VyLnNob3coKSA6IHRoaXMuX2JvdHRvbURyYXdlci5oaWRlKCk7XHJcbiAgICB9XHJcbn0iLCIgdmFyIGdyb3VwRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwXCIpO1xyXG4gICAgaWYoZ3JvdXBFeGlzdCl7XHJcblxyXG4gICAgICAgIHZhciB1c2VDaGVja2JveGVzID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtc2luZ2xlLXNlbGVjdC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciBsb2NrUm9vdE5vZGUgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2NrLXJvb3QnKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgLy9DaGVjayBvbiBwYWdlIHdoZXRoZXIgR3JvdXAgTXVsdGkgU2VsZWN0IGV4aXN0c1xyXG4gICAgdmFyIGludGlhbGx5U2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFNlbGVjdG9yXCIpO1xyXG4gICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG4gICAgLy8gSWYgdGhlIEdyb3VwIE11bHRpIFNlbGVjdCBkb2VzIGV4aXN0LCBoaWRlIGl0IChpZiBKUyBlbmFibGVkKVxyXG4gICAgaWYgKGdyb3VwU2VsZWN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZ3JvdXBTZWxlY3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgIGdyb3VwVGV4dGFyZWEucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAvLyBHcmFiIGFsbCB0aGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgc2VsZWN0ZWRcclxuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25zTm9kZXMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb246Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkT3B0aW9uc05vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICBpbnRpYWxseVNlbGVjdGVkTm9kZXMucHVzaChzZWxlY3RlZE9wdGlvbnNOb2Rlc1tpXS52YWx1ZSB8fCBcIlxcXFxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi50YWc+LmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhUb1VuY2hlY2sgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYlNlbGVjdG9yID0gJ2lucHV0W3R5cGU9Y2hlY2tib3hdLkdyb3VwSXRlbVt2YWx1ZT1cIicrcGF0aFRvVW5jaGVjaysnXCJdJztcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjYm94VG9VbmNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjYm94VG9VbmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2JveFRvVW5jaGVjay5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlYXJjaFBhcnRzID0gKGZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XHJcbiAgICAgICAgdmFyIHZhcnMgPSB7fTtcclxuICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksIGZ1bmN0aW9uKG0sa2V5LHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgcGFnZVBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/Z3JvdXA9XCI7XHJcbiAgICB2YXIgZ3JvdXBQYXJhbSA9IHNlYXJjaFBhcnRzLmdyb3VwO1xyXG4gICAgdmFyIHNlYXJjaFBhcmFtID0gc2VhcmNoUGFydHMuU2VhcmNoO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGJ1aWxkIHRoZSBwYXRoXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlUGF0aEZvckdyb3VwKGdyb3VwKSB7XHJcbiAgICAgIHZhciBncnAgPSBncm91cCA9PT0gXCJcIiA/IFwiXFxcXFwiIDogZ3JvdXA7XHJcbiAgICAgIHJldHVybiBwYWdlUGF0aCArIGdycDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGQgc2hvdWxkIGJlIG9wZW4gaS5lLiB0byByZXZlYWwgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBncm91cFxyXG4gICAgZnVuY3Rpb24gc2hvdWxkUGFyZW50QmVPcGVuKHBhdGgpIHtcclxuICAgICAgICBpZiAoIWdyb3VwUGFyYW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCArIFwiXFxcXFwiKTtcclxuICAgICAgICByZXR1cm4gZ3JvdXBQYXJhbS5zdGFydHNXaXRoKHBhdGhUb0NoZWNrKSAmJiBncm91cFBhcmFtICE9IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZGVkIGlzIHRoZSBjdXJyZW50bHlTZWxlY3RlZEdyb3VwXHJcbiAgICBmdW5jdGlvbiBpc1NlbGVjdGVkR3JvdXAocGF0aCkge1xyXG4gICAgICAgIHZhciBwYXJhbXNUb0NoZWNrID0gZGVjb2RlVVJJQ29tcG9uZW50KGdyb3VwUGFyYW0gfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoIHx8IFwiXFxcXFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1RvQ2hlY2sgPT09IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBsaW5rIGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkTGluayh0ZXh0LCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBsaW5rLmhyZWYgPSBnZXRQYWdlUGF0aEZvckdyb3VwKHBhdGgpO1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rXCIpO1xyXG5cclxuICAgICAgICAvLyBOQi4gIE9yaWdpbmFsbHkgd2UgZGlkbnQgd2FudCB0aGUgY3VycmVudCBjbGFzcyB0byBiZSBhZGRlZCBpZiBkb2luZyBhIHNlYXJjaCwgYnV0IHRoaW5rIHdlIGRvIG5vdy5cclxuICAgICAgICAvLyBpZiAoKCFzZWFyY2hQYXJhbSkgJiYgIGlzU2VsZWN0ZWRHcm91cChwYXRoKSkge1xyXG4gICAgICAgIC8vIGlmIChpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcclxuICAgICAgICAvLyAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpbmstLWN1cnJlbnRcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBsYWJlbCBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94KHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJHcm91cEl0ZW1cIik7XHJcbiAgICAgICAgY2hlY2tib3gubmFtZSA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBwYXRoO1xyXG4gICAgICAgIGNoZWNrYm94LmlkID0gdGV4dDtcclxuICAgICAgICB2YXIgbmV3UGFyZW50U2VsZWN0ZWQgPSBwYXJlbnRDaGVja2VkO1xyXG5cclxuICAgICAgICBpZiAocGF0aCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgdGhlIHJvb3Qgbm9kZSBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIGNoZWNrZWQgQlVUIHRoZSBjaGlsZHJlbiBvZiB0aGlzIG5vZGUgc2hvdWxkIGFjdCBhcyB0aG91Z2ggaXQgaXNudCBjaGVja2VkIHNvIHdlIGRvbnQgdXBkYXRlIHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q2hlY2tlZCAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBzZWxlY3RlZCBhbGwgaXRzIGNoaWxkcmVuIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgdW5jaGVja2VkXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBub3QgY2hlY2tlZCBpdHMgY2hpbGRyZW4gc2VsZWN0ZWQgc3RhdGUgZGVwZW5kIG9uIHRoZSBjaGlsZHMgdmFsdWUsIGFuZCBub3QgYmUgZGlzYWJsZWRcclxuICAgICAgICAgICAgdmFyIG5ld0NoZWNrZWQgPSBpbnRpYWxseVNlbGVjdGVkTm9kZXMuaW5kZXhPZihwYXRoIHx8ICdcXFxcJykgPj0gMDtcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgICAgIG5ld1BhcmVudFNlbGVjdGVkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0eWxlIGFzIGEgcmFkaW8gYnV0dG9uXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIHZhciBjaGVja1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNoZWNrU3Bhbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9fY2hlY2snKTtcclxuICAgICAgICAgICAgdmFyIGJvcmRlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2JvcmRlcicpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja1NwYW4pO1xyXG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChib3JkZXJTcGFuKTtcclxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ID0gbGFiZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge2NoZWNrYm94LCBuZXdQYXJlbnRTZWxlY3RlZH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGNoZWNrYm94IGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveExhYmVsLmZvciA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVja2JveExhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zZmVyVmFsdWVzKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcblxyXG4gICAgICAgIHZhciBlbGVtcz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkdyb3VwSXRlbScpXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7aTxlbGVtcy5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2tSb290Tm9kZSAmJiAhKGVsZW1zW2ldLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vLW9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtc1tpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVsZW1zW2ldLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKSB7XHJcblxyXG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuICAgICAgICBpZiAodGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdHcm91cFNlbGVjdG9yJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdPcHRpb25WYWx1ZXMgPSBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgZGF0YV9pID0gMDsgZGF0YV9pIDwgZGF0YS5sZW5ndGg7IGRhdGFfaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhX2N1cnJlbnQgPSBkYXRhW2RhdGFfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPkFsbCBDb250YWN0IEdyb3VwczxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj4nICsgZGF0YV9jdXJyZW50LnN1YnN0cmluZygxKSArICc8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBvcHRpb24gZXhpc3RzIC0gYWRkIGl0IGlmIG5vdFxyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nT3B0aW9uVmFsdWVzLmluZGV4T2YoZGF0YV9jdXJyZW50KSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBkYXRhX2N1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGRhdGFfY3VycmVudDtcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zW2ldLnNlbGVjdGVkID0gZGF0YS5pbmRleE9mKGVsZW1lbnQub3B0aW9uc1tpXS52YWx1ZSkgPj0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbkZvck1vZGUocGFyZW50LCB0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKHVzZUNoZWNrYm94ZXMgfHwgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIHRoZSBibGFuayB2YWx1ZSBmb3IgJ0FsbCBDb250YWN0IEdyb3VwcydcclxuICAgICAgICAgICAgaWYgKHBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcXFxcXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tib3hSZXN1bHQgPSBidWlsZENoZWNrYm94KHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hSZXN1bHQuY2hlY2tib3gpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3hSZXN1bHQubmV3UGFyZW50U2VsZWN0ZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaW5rIHRvIHJlZnJlc2ggcGFnZSB3aXRoIHNlbGVjdGVkIG5vZGUuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZExpbmsodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjdXJyZW50LCBjaGlsZHJlbiwgdXBkYXRlckZuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudExvb3BDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudExvb3BDaGlsZCAhPT0gY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlckZuKGN1cnJlbnRMb29wQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgY2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudExpID0gY2hlY2tib3gucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgb25seSBvbmUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQsIGFuZCB0aGUgc2VsZWN0ZWQgaXRlbSBjYW5ub3QgYmUgZGVzZWxldGVkLlxyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFsbEdyb3VwQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdCBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgYWxsR3JvdXBDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhcmVudExpLmNsYXNzTGlzdC5jb250YWlucygnZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnQnKSl7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNoaWxkQ2hlY2tib3hlcyA9IHBhcmVudExpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3gnKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcmFiIHRoZSBzZWxlY3QgbGlzdCBhbmQgYWxsIG9mIGl0cyBvcHRpb25zXHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIHZhciBvcHRpb25zID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuXHJcbiAgICB2YXIgaGlkZGVuRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkdyb3VwXCIpO1xyXG4gICAgaGlkZGVuRmllbGQudmFsdWUgPSBncm91cFBhcmFtIHx8ICdcXFxcJztcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGJhc2UgY29sbGVjdGlvbnMgd2l0aCBzdGFydGluZyBrZXkgZm9yIHRoZSByb290LlxyXG4gICAgdmFyIHN0cnVjdHVyZSA9IHsgXCJcXFxcXCI6IHt9IH07XHJcblxyXG4gICAgLy8gQnVpbGQgb24gdGhlIGJhc2Ugc3RydWN0dXJlIGJ5IGxvb3BpbmcgdGhyb3VnaCBlYWNoIHNlbGVjdCBpdGVtLlxyXG4gICAgZm9yICh2YXIgb3B0aW9uX2k9MDsgb3B0aW9uX2k8b3B0aW9ucy5sZW5ndGg7IG9wdGlvbl9pKyspIHtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbb3B0aW9uX2ldO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIFNlcGVyYXRlIHRoZSBncm91cCBuYW1lIGludG8gYWxsIGl0cyBwYXRoIHNlZ21lbnRzXHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IG9wdGlvbi50ZXh0Q29udGVudC5zcGxpdChcIlxcXFxcIik7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IGF0IHRoZSByb290IGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHZhciBub2RlVG9DaGVjayA9IHN0cnVjdHVyZVtcIlxcXFxcIl07XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IGVuc3VyZSB0aGF0IGFsbCBsZXZlbHMgb2YgdGhlIHN0cnVjdHVyZSBhcmUgaW4gcGxhY2UuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHNlZ21lbnRfaT0wOyBzZWdtZW50X2k8c2VnbWVudHMubGVuZ3RoOyBzZWdtZW50X2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWcgPSBzZWdtZW50c1tzZWdtZW50X2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWcgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb0NoZWNrW3NlZ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2tbc2VnXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrW3NlZ107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGJhc2UgZWxlbWVudCB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkXHJcbiAgICB2YXIgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0XCIpO1xyXG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3RcIik7XHJcblxyXG5cclxuICAgIC8vIEhhbmRsZSBhbGwgdGhlIGNsaWNrcyBhdCB0aGUgcGFyZW50IGxldmVsXHJcbiAgICB0cmVlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGNoZWNrYm94IGl0ZW1zIGJlaW5nIHNlbGVjdGVkLlxyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrKGUsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxuICAgICAgICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgY2xpY2tzIG9uIGVsZW1lbnRzIHRoYXQgYXJlIHBhcmVudHNcclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIuZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnRcIikpIHtcclxuICAgICAgICAgICAgLy8gSWYgYW4gb3BlbiBwYXJlbnQgaXRlbSBpcyBjbGlja2VkLCBjbG9zZSBpdCwgYnV0IGFsc28gYWxsIGl0cyBvcGVuIGRlc2NlbmRhbnRzLlxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkcmVuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhY19pPTA7IGFjX2k8YWN0aXZlQ2hpbGRyZW4ubGVuZ3RoOyBhY19pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGQgPSBhY3RpdmVDaGlsZHJlblthY19pXTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT3BlbiBhbnkgY2xvc2VkIHBhcmVudHMgdGhhdCBhcmUgY2xpY2tlZC5cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICAgUmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIHRoZSBzZWxlY3QgbGlzdCBmcm9tIHRoZSBwcmV2aW91cyBub2RlIHN0cnVjdHVyZS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2hpbGRLZXlzKGN1cnJUZXh0LCBjdXJyUGF0aCwgb2JqLCBlbGVtZW50VG9BZGRUbywgbGV2ZWwsIHBhcmVudHNDaGVja2VkKSB7XHJcblxyXG4gICAgICAgIHZhciBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50Q2hlY2tlZFN0YXRlID0gcGFyZW50c0NoZWNrZWQ7XHJcblxyXG4gICAgICAgIHZhciBjaGlsZExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VDaGVja2JveGVzICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCAmJiBpc1NlbGVjdGVkR3JvdXAoY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSBjdXJyZW50IHN0YXRlIHdoZW4gaW4gdGhlICdsaW5rIG1vZGUnXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tY3VycmVudFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hpbGRLZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGF0IHRoZSBib3R0b20gb2YgYSBicmFuY2ggaS5lLiBubyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgbm9kZSBoYXMgY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IDEgfHwgc2hvdWxkUGFyZW50QmVPcGVuKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiBmaXJzdCBsZXZlbCBjaGlsZHJlbiBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGUgPSBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250YWluZXIgcmVhZHkgdG8gYmUgcG9wdWxhdGVkIHdpdGggdGhlIGNoaWxkIG5vZGVzXHJcbiAgICAgICAgICAgIHZhciBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIC8vIENhbGwgcmVjdXJzaXZlbHkgd2l0aCB1cGRhdGVkIHBhcmFtcyBmb3IgZWFjaCBjaGlsZCBub2RlXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBja19pPTA7IGNrX2kgPCBjaGlsZEtleXMubGVuZ3RoOyBja19pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkS2V5c1tja19pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRLZXkgIT09ICdBbGwgY29udGFjdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNoaWxkS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyclBhdGggKyBcIlxcXFxcIiArIGNoaWxkS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2NoaWxkS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGluaXRpYWwgY2FsbCBvZiB0aGUgcmVjdXJzaXZlIGZ1bmN0aW9uIHN0YXJ0aW5nIGF0IHRoZSByb290LlxyXG4gICAgZGlzcGxheUNoaWxkS2V5cyhcIkFsbCBDb250YWN0IEdyb3Vwc1wiLCBcIlwiLCBzdHJ1Y3R1cmVbXCJcXFxcXCJdLCB0cmVlQ29udGFpbmVyLCAxLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gUmVwbGFjZSB0aGUgc2VsZWN0IGxpc3Qgd2l0aCB0aGUgbmV3IHRyZWVcclxuICAgIGdyb3VwU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRyZWVDb250YWluZXIsIGdyb3VwU2VsZWN0KTtcclxuXHJcbiAgICB0cmVlQ29udGFpbmVyLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaGlkZGVuRmllbGQpO1xyXG5cclxuICAgIHRyYW5zZmVyVmFsdWVzKCk7XHJcblxyXG59KShcIiNHcm91cFwiLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCk7XHJcbn1cclxuIiwiLy8gU3RvcmUgc2VsZWN0ZWQgdXNlcnMgaW5zaWRlIHNlc3Npb24gc3RvcmFnZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZFNlc3Npb25TdG9yYWdlSGVscGVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIGNvbnN0IGluaXRpYWwgPSB0aGlzLl9pbml0aWFsaXNlKCk7XHJcbiAgICB0aGlzLl9pdGVtcyA9IG5ldyBNYXAoKTtcclxuICAgIGluaXRpYWwuZm9yRWFjaCgoe2lkLCBuYW1lfSkgPT4gdGhpcy5faXRlbXMuc2V0KGlkLCBuYW1lKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFBvcHVsYXRlIHN0YXJ0IGlkcywgaW5pdGlhbGlzZXMgY29va2llIGlmIG5vdCBwcmVzZW50XHJcbiAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zSnNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5fbmFtZSk7XHJcbiAgICBpZiAoIXNlbGVjdGVkSXRlbXNKc29uKSB7ICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMuX3BlcnNpc3QoW10pOyAgIFxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZWxlY3RlZEl0ZW1zSnNvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNhdmUgdGhlIG5ldyBpZHMgdG8gdGhlIHNlc3Npb24gc3RvcmFnZSBhZnRlciB1cGRhdGVcclxuICBfdXBkYXRlKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcbiAgICB0aGlzLl9wZXJzaXN0KGl0ZW1zKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gU2F2ZSB0aGUgcGFzc2VkIGluIGlkcyB0byB0aGUgY29va2llXHJcbiAgX3BlcnNpc3QoaXRlbXMpIHsgICAgXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuX25hbWUsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAvLyBTZXQgYWxsIHRoZSBpdGVtcyBpbiBvbmUgaGl0LiBSZXR1cm5zIHRoZSBuZXcgY291bnQuXHJcbiAgc2V0SXRlbXMoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGkgPT4gdGhpcy5faXRlbXMuc2V0KGkuaWQsIGkubmFtZSkpO1xyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cclxuICBnZXRJZHMoKSB7XHJcbiAgICBjb25zdCBpZHMgPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zLmtleXMoKSk7XHJcbiAgICByZXR1cm4gaWRzO1xyXG4gIH0gIFxyXG5cclxuICBmaWx0ZXJCeUlkcyhpZHNUb0tlZXApIHtcclxuICAgIGNvbnN0IGlkcyA9IHRoaXMuZ2V0SWRzKCk7XHJcbiAgICByZXR1cm4gaWRzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGlmICghaWRzVG9LZWVwLmluY2x1ZGVzKGkpKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gIFxyXG4gIFxyXG4gIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBjdXJyZW50bHkgaW4gdGhlIG1hcC5cclxuICBnZXRDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5zaXplO1xyXG4gIH1cclxuICBcclxuICAvLyBSZW1vdmUgaXRlbSBieSBpdHMgaWQuIFJldHVybiB0aGUgbmV3IGNvdW50XHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaWQpOyAgICAgIFxyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuICBcclxuICAvLyBBZGQgb25lIG9yIG1vcmUgaXRlbXMuIFJldHVybnMgdGhlIG5ldyBjb3VudFxyXG4gIGFkZChpZCwgbmFtZSkge1xyXG4gICAgdGhpcy5faXRlbXMuc2V0KGlkLCBuYW1lKTtcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybiBhbGwgaXRlbXMgaW4gYXJyYXkgZm9ybWF0XHJcbiAgZ2V0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pdGVtcy5lbnRyaWVzKCkpLm1hcCgoW2lkLCBuYW1lXSkgPT4gKHsgaWQsIG5hbWUgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHRoZSBuYW1lIGZvciBhIHBhc3NlZCBpZFxyXG4gIGdldE5hbWUoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5nZXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gRG9lcyB0aGUgbWFwIGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBpZC5cclxuICBoYXNJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmhhcyhpZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuLyoqXHJcbiAgQ2xhc3MgdG8gbWFuYWdlIHRoZSBsb2FkIG9uIHNjcm9sbCBmdW5jdGlvbmFsaXR5IGZvciBhIHBhZ2UuXHJcbiAgV2hlbiB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgc2VydmVyIHNpZGUgaXQgc2hvdWxkIGhpZGUgdGhlIGxvYWRlciBlbGVtZW50IGlmIG5vIG1vcmUgcmVzdWx0cyB0byBsb2FkLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VyaWVyTGF6eUxvYWRlciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICBDb25zdHJ1Y3RvclxyXG4gICAgUGFyYW1zXHJcbiAgICAgLSBsb2FkZXJFbGVtZW50IChyZXF1aXJlZCk6IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBsb2FkZXJcclxuICAgICAtIGxvYWRlckZuIChyZXF1aXJlZCk6IFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlIG9mIHJlc3VsdHMuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIGEgYm9vbCBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgbW9yZSBpdGVtcyB0byBsb2FkLlxyXG4gICAgIC0gY29uZmlnT2JqIChvcHRpb25hbCk6ICBBbiBvYmplY3Qgd2hvc2Uga2V5IGFuZCB2YWx1ZXMgd2lsbCBvdmVycmlkZSBkZWZhdWx0IGNvbmZpZyBzZXR0aW5ncy5cclxuICAqLyAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGxvYWRlckVsZW1lbnQsIFxyXG4gICAgICBsb2FkZXJGbiwgXHJcbiAgICAgIGNvbmZpZ09iaiA9IHt9XHJcbiAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAgRGVmYXVsdCBjb25maWcgc2V0dGluZ3NcclxuICAgICovXHJcbiAgICBjb25zdCBjb25maWdEZWZhdWx0cyA9IHtcclxuICAgICAgbG9hZGVyQ2xhc3M6ICdsb2FkZXInLCAgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudFxyXG4gICAgICBsb2FkZXJMb2FkaW5nQ2xhc3M6ICdsb2FkZXItLWxvYWRpbmcnLCAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgIGRlYm91bmNlTXM6IDEwMCwgLy8gaG93IGxvbmcgdG8gd2FpdCBiZXR3ZWVuIGV2ZW50cyBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIHBlZWtEaXN0YW5jZTogMCwgLy8gaG93IG11Y2ggb2YgbG9hZGluZyBlbGVtZW50IHNob3VsZCBiZSBvbiBzY3JlbiBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIGRlYnVnOiBmYWxzZSAgLy8gd2hldGhlciBvciBub3QgdG8gbG9nIGRlYnVnIGluZm8gdG8gY29uc29sZS5cclxuICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXJFbGVtZW50O1xyXG4gICAgdGhpcy5fbG9hZGVyRnVuYyA9IGxvYWRlckZuO1xyXG4gICAgICAgIFxyXG4gICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBwYXNzZWQgaW4gY29uZmlnXHJcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZ0RlZmF1bHRzLCAuLi5jb25maWdPYmogfTtcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgd2hldGhlciBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkIG9yIHJlbW92ZWRcclxuICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgaWYgKCF0aGlzLl9sb2FkZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGxvYWRlciBlbGVtZW50IHByb3ZpZGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbiB0aGUgbG9hZGVycyBjbGFzcyBmcm9tIHRoZSBjb25maWdcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJDbGFzcyk7XHJcbiAgICBcclxuICAgIC8vIERlYm91bmNlIHRoZSBjaGVja1xyXG4gICAgdGhpcy5fbGF6eUxvYWRDaGVjayA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5fZG9Mb2FkTW9yZUNoZWNrKCkpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdDYWxsaW5nIGxvYWQgbW9yZSBmdW5jdGlvbicpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHRoZSBzZWFyY2ggZnVuY3Rpb24gJiBwYXNzIGluIHRoZSBkb25lIHNlYXJjaGluZyBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2xvYWRlckZ1bmModGhpcy5fZG9uZVNlYXJjaGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm90IHJlYWR5IHRvIHJlbG9hZCB5ZXQnKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlYm91bmNlTXMpO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgdGhlIGV2ZW50cyAoYWxzbyBkb2VzIGluaXRpYWwgY2hlY2spXHJcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fZG9uZVNlYXJjaGluZyA9IHRoaXMuX2RvbmVTZWFyY2hpbmcuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgXHJcbiAgX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSh2aXNpYmxlKSB7XHJcbiAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGtsZSByZXN1bHRzIGNvbWluZyBiYWNrIGluXHJcbiAgX2RvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCkge1xyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyhgX2RvbmVTZWFyY2hpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggbW9yZSB0byBsb2FkICR7bW9yZVRvTG9hZH1gKTtcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpIFxyXG4gICAgaWYgKG1vcmVUb0xvYWQpIHtcclxuICAgICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQWxsIGRvbmUgLSBoaWRpbmcgbG9hZGVyIGVsZW1lbnQnKTtcclxuICAgICAgdGhpcy5fc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gV2lyZSB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIGRvIGluaXRpYWwgY2hlY2suXHJcbiAgX3N0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkgeyAgICAgIFxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWRkZWQnKTtcclxuICAgICAgdGhpcy5fbGF6eUxvYWRDaGVjaygpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhbHJlYWR5IGluIHBsYWNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXHJcbiAgX3N0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgICAgXHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyByZW1vdmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdObyBMaXN0ZW5lcnMgdG8gcmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhlbHBlciB0byBsb2cgb25seSBpZiBkZWJ1Z2dpbmcgZW5hYmxlZFxyXG4gIF9jb25kaXRpb25hbERlYnVnTG9nKHRvRGVidWcsIGxvZ2dlckZ1bmMgPSBjb25zb2xlLmxvZywgKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgIGxvZ2dlckZ1bmModG9EZWJ1ZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gRG8gdGhlIGNoZWNrIHRvIHNlZSBpZiBzY3JlZW4gc29tZXdoZXJlIGl0IHNob3VsZCBiZSBsb2FkZWQuXHJcbiAgX2RvTG9hZE1vcmVDaGVjaygpIHsgICAgXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxyXG4gICAgY29uc3QgcGVla1Bvc2l0aW9uVmlzaWJsZSA9IGhpZ2hlc3RWaXNpYmxlWVBvcyA+PSBsb2FkTW9yZVRyaWdnZXJQb3M7XHJcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XHJcbiAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0RvaW5nIGxvYWQgbW9yZSBjaGVjayAuLi4nKTsgICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXHJcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxyXG4gICAgICAnQ29uZmlnIHBlZWsgZGlzdGFuY2UnOiB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlLFxyXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxyXG4gICAgICAnQ3VycmVudCBZIHBvc2l0aW9uIG9mIHNjcm9sbCc6IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgJ1RoZSBpbnRlcm5hbCBzaXplIG9mIHRoZSB3aW5kb3cnOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICdUaGUgbWF4IHkgcG9zaXRpb24gdmlzaWJsZSc6IGhpZ2hlc3RWaXNpYmxlWVBvcyxcclxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcclxuICAgICAgJ0lzIHBlZWsgcG9zaXRpb24gdmlzaWJsZSc6IHBlZWtQb3NpdGlvblZpc2libGUsXHJcbiAgICAgICdJcyB0aGUgbG9hZCBtb3JlIHBvc2l0aW9uIHZpc2libGUsIG9yIGF0IGRvYyBlbmQnOiBzaG91bGRMb2FkTW9yZSxcclxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHNob3VsZExvYWRNb3JlO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLXRhYmxlLWlkPVwiPDxpZCBvZiB0YWJsZSB0byBiZSBlZmZlY3RlZD4+XCJcclxuICogXHJcbiAqICBPUFRJT05BTDogVXNlIHRoZSBmb2xsb3dpbmcgYXR0cnRpYnV0ZXMgdG8gYWRqdXN0IHRoZSBiZWhhdmlvclxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcclxuICogIFxyXG4gKi9cclxuXHJcbnZhciBzaG93TW9yZVRhYmxlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLXNob3dhbGwtdGFibGUtaWRdJyk7XHJcblxyXG5zaG93TW9yZVRhYmxlQnV0dG9ucy5mb3JFYWNoKHNob3dBbGxCdXR0b24gPT4ge1xyXG4gIHZhciB0YWJsZUlkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtdGFibGUtaWRcIik7XHJcblxyXG4gIHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYmxlSWQpO1xyXG4gIGlmICh0YWJsZSkge1xyXG5cclxuICAgIHZhciBkZWZhdWx0SXRlbUxpbWl0ID0gMTA7ICAgIFxyXG4gICAgdmFyIHBhc3NlZEl0ZW1MaW1pdCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWl0ZW0tbGltaXRcIik7XHJcbiAgICB2YXIgcGFyc2VkSXRlbUxpbWl0ID0gcGFyc2VJbnQocGFzc2VkSXRlbUxpbWl0LCAxMCk7XHJcbiAgICB2YXIgbGltaXRUb1VzZSA9IGlzTmFOKHBhcnNlZEl0ZW1MaW1pdCkgPyBkZWZhdWx0SXRlbUxpbWl0IDogcGFyc2VkSXRlbUxpbWl0O1xyXG4gICAgXHJcbiAgICAvLyBXZSBkb250IHdhbnQgdGhlIGhlYWRlcnNcclxuICAgIHZhciB0YWJsZUJvZHkgPSB0YWJsZS50Qm9kaWVzWzBdO1xyXG4gICAgaWYgKCF0YWJsZUJvZHkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHRhYmxlQm9keS5yb3dzLmxlbmd0aDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDEsIGJvZHlSb3c7IGJvZHlSb3cgPSB0YWJsZUJvZHkucm93c1tpLTFdOyBpKyspIHtcclxuICAgICAgaWYgKGkgPiBsaW1pdFRvVXNlKSB7XHJcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFibGVCb2R5TGVuZ3RoIDw9IGxpbWl0VG9Vc2UpIHsgc2hvd0FsbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IH1cclxuXHJcbiAgICBzaG93QWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsKSA9PiB7XHJcbiAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBBcnJheS5mcm9tKHRhYmxlQm9keS5yb3dzKS5mb3JFYWNoKGZ1bmN0aW9uKGJvZHlSb3cpIHtcclxuICAgICAgICBib2R5Um93LnN0eWxlLmRpc3BsYXkgPSBcInRhYmxlLXJvd1wiO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCIvKioqKioqIFxyXG5cclxuICBDcmVhdGVzIGEgdGFnIGxpc3QgZnJvbSBhIHNlbGVjdCBlbGVtZW50XHJcblxyXG4gIHVzYWdlOlxyXG5cclxuICBuZXcgU2VsZWN0TGlzdFRhZyhzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYykuXHJcblxyXG4gIC0gc2VsZWN0SWQgKHJlcXVpcmVkKTogVGhlIGlkIG9mIHRoZSBzZWxlY3QgZWxlbWVudCBhY3RpbmcgYXMgdGhlIHNvdXJjZSAobXVzdCBoYXZlIG11bHRpcGxlIGF0dHJpYnV0ZSwgYW5kIGFsbCBpdGVtcyBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkKVxyXG5cclxuICAtIHJldmVydEdyb3VwcyAob3B0aW9uYWwpOiBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNsaWNrZWQgdG8gcmV2ZXJ0IHNlbGVjdGVkIG9wdGlvbnMgKHNob3VsZCBoYXZlIGlzLWhpZGRlbiBjbGFzcyB0byBzdGFydClcclxuXHJcbiAgLSBvblVwZGF0ZUZ1bmMgKHJlcXVpcmVkKTogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIHRhZyBoYXMgYmVlbiByZW1vdmVkLCBvciBvcHRpb25zIGFyZSByZXZlcnRlZC4uIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gcGFyYW1zLCBzZWxlY3RlZE9wdGlvbnMgYW5kIGFsbE9wdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBpbnRlbmRlZCB0byBtYWtlIHRoZSBjb250cm9sIG1vcmUgZmxleGlibGUgaS5lLiBvdXIgZmlyc3QgdXNhZ2UgaXMgdG8gdXBkYXRlIGxhYmVsIHdpdGggc2VsZWN0ZWQgaXRlbXMgdGV4dCBlbHNld2hlcmUgb24gcGFnZSB3aXRob3V0IGZ1cnRoZXIgY291cGxpbmcuXHJcblxyXG4qKioqKiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdExpc3RUYWdzIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYyA9ICgpID0+IHt9LCBvcHRpb25zID0gbnVsbCkge1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyA9IG9uVXBkYXRlRnVuYztcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdElkKTtcclxuICAgICAgdGhpcy50YWdPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG5cclxuICAgICAgaWYgKHJldmVydEdyb3Vwc0lkKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXZlcnRHcm91cHNJZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICB0aGlzLnJldmVydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IG8uc2VsZWN0ZWQgPSB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiB0aGlzLnRhZ09wdGlvbnMuYXBwZW5kQ2hpbGQobykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBOb3cgaGFuZGxlcyBwYXNzZWQgaW4gc2VsZWN0IG9wdGlvbnNcclxuICAgICAgdGhpcy5hbGxPcHRpb25zID0gb3B0aW9ucyB8fCBbLi4udGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnJldmVydEJ0biAmJiB0aGlzLmFsbE9wdGlvbnMuc29tZShvID0+ICFvLnNlbGVjdGVkKSkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgICBcclxuICAgICAgdGhpcy50YWdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJ2knKSkge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0VmFsID0gZS50YXJnZXQuZGF0YXNldC52YWw7XHJcbiAgICAgICAgICBjb25zdCBvID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicrdGFyZ2V0VmFsKydcIl0nKTtcclxuICAgICAgICAgICAgICBpZihvKXtcclxuICAgICAgICAgICAgICAgICAgby5zZWxlY3RlZCA9IGZhbHNlOyAgIFxyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTsgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YWdPcHRpb25zLmFmdGVyKHRoaXMudGFncyk7XHJcblxyXG4gICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVUYWdzKCkge1xyXG4gICAgICB0aGlzLnRhZ3MuaW5uZXJIVE1MID0gJyc7ICAgICAgXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWxsT3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKTtcclxuICAgICAgc2VsZWN0ZWRPcHRpb25zLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWdzLmFwcGVuZENoaWxkKHRoaXMubWFrZVRhZyh0LmlubmVyVGV4dCwgdC52YWx1ZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMoc2VsZWN0ZWRPcHRpb25zLCB0aGlzLmFsbE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICBtYWtlVGFnKHRleHQsIHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGkuY2xhc3NMaXN0LmFkZChcImJ1dHRvbl9faWNvblwiKTsgICAgICBcclxuICAgICAgaS5kYXRhc2V0LnZhbD12YWx1ZTtcclxuICAgICAgaS5pbm5lclRleHQgPSBcImNsZWFyXCJcclxuXHJcbiAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnJyk7XHJcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XHJcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0YWc7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBTaG91bGQgaGF2ZSBhIHNlY3Rpb24gbGlrZSB0aGlzIGZvciBlYWNoIHBhZ2UgdGhlIGNvbnRyb2wgaXMgdXNlZCBvbiwgdW5sZXNzIHdlIHdhbnQgaXQgYmVoYXZlIGV4YWN0bHkgdGhlIHNhbWUgYXMgYSBwcmV2aW91cyB2ZXJzaW9uIChpbmNsdWRpbmcgaWRzIGFuZCB1cGRhdGUgZnVuY3Rpb24pIFxyXG4vLyAqQmV0dGVyIHN0aWxsKiAtIGhhdmUgaW4gc2VwZXJhdGUgc2NyaXB0IGZpbGUgc2NvcGVkIHRvIHNwZWNpZmljIHBhZ2UgKGxpa2Ugd2l0aCBTZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMpXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sbG93dXBHcm91cFNlbGVjdG9yJykpIHtcclxuXHJcbiAgLy8gUHJlcGFyZSBhbiB1cGRhdGUgZnVuY3Rpb24gaWYgcmVxdWlyZWQgKG9wdGlvbmFsIHBhcmFtZXRlcilcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlR3JvdXBzTGFiZWxTcGFuJyk7XHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcGx1cmFsaXNlZEdyb3VwcyA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnZ3JvdXAnIDogJ2dyb3Vwcyc7XHJcbiAgICBzcGFuLmlubmVyVGV4dCA9IGBTZW5kIHRvICR7c2VsZWN0ZWRPcHRpb25zLmxlbmd0aH0gcmVzcG9uc2UgJHtwbHVyYWxpc2VkR3JvdXBzfWA7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXNlIGFuIGluc3RhbmNlIG9mIHRoZSBjb250cm9sXHJcbiAgbmV3IFNlbGVjdExpc3RUYWdzKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InLCAncmV2ZXJ0X2dyb3VwcycsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsIi8vIFN0b3JlIGEgc2ltcGxlIHZhbHVlIGluIGEgY29va2llXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUNvb2tpZUhlbHBlcntcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLl9pbml0aWFsaXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llO1xyXG5cclxuICAgICAgICBjb25zdCBjb29raWVzID0gY29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ29va2llID0gY29va2llcy5maW5kKGMgPT4gYy5zdGFydHNXaXRoKGAke3RoaXMuX25hbWV9PWApKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBtYXRjaGluZ0Nvb2tpZSA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGluZ0Nvb2tpZS5zcGxpdCgnPScpWzFdKSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0Nvb2tpZSA9IGAke3RoaXMuX25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX07IHBhdGg9Lzsgc2FtZXNpdGU9U3RyaWN0YFxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5ld0Nvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuLy8gUmVtb3ZlIHRoZSBuby1qcyBjbGFzcyBzbyB3ZSBhcmUgYWJsZSB0byB0ZWxsIHRoYXQganMgaXMgZW5hYmxlZFxyXG4vLyBVc2VmdWwgZm9yIGhpZGluZyBlbGVtZW50cyB3aGVuIGpzIG5vdCBhdmFpbGFibGUuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdqcycpOyIsImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VzJykgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgcmVzcG9uc2UgZmllbGRzIGFuZCB0aGUgcmVzcG9uc2UgbGlzdFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1maWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9ucy1saXN0Jyk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRoZSBlbXB0eSByZXNwb25zZSBmaWVsZHNcclxuICAgICAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpIC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFzZXQua2V5ID0gaWR4O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZXZlYWxzIHRoZSBmaXJzdCBoaWRkZW4gaXRlbVxyXG4gICAgICAgIGNvbnN0IHNob3dGaXJzdEVtcHlJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlc3BvbnNlID0gcmVzcG9uc2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNwb25zZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiBhbiBpdGVtIGlzIHJlbW92ZWQsIGNvcHkgYWxsIHZhbHVlcyBmb3J3YXJkIHRvIGZpbGwgZ2Fwc1xyXG4gICAgICAgIGNvbnN0IGNvcHlJdGVtc0ZvcndhcmQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gaW5kZXggKyAxOyBpZHggPCByZXNwb25zZXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldklucHV0ID0gcmVzcG9uc2VzW2lkeC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSByZXNwb25zZXNbaWR4XS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBwcmV2SW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTGFzdEVtcHR5SXRlbSA9IChyZW1vdmVJZHgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFzIGFsbCBjb3BpZWQgZm9yd2FyZCBibGFuayBsYXN0IGl0ZW0gb3V0XHJcbiAgICAgICAgICAgIHJlc3BvbnNlc1tyZXNwb25zZXMubGVuZ3RoLTFdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIGJhY2t3YXJkcyBhbmQgaGlkZSBsYXN0IHZpc2libGUgaXRlbVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSAocmVzcG9uc2VzLmxlbmd0aC0xKTsgaWR4ID49IHJlbW92ZUlkeDsgaWR4LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZXNbaWR4XS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXNbaWR4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFkZFJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfcmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIHNob3dGaXJzdEVtcHlJdGVtKCk7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlc3BvbnNlc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLXJlc3BvbnNlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSWR4ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb3B5SXRlbXNGb3J3YXJkKHJlbW92ZUlkeCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMYXN0RW1wdHlJdGVtKHJlbW92ZUlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pKCk7XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkUGhvbmVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkUGhvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFBob25lQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRQaG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSkoXCJhZGRQaG9uZVwiKTtcclxuXHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkRW1haWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEVtYWlsQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRFbWFpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkoXCJhZGRFbWFpbFwiKTtcclxuXHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZUdyb3VwQnV0dG9uICE9bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KShcImFkZF9ncm91cFwiKTtcclxufVxyXG5cclxudmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG5pZiAoZ3JvdXBUZXh0YXJlYSAhPSBudWxsKSB7XHJcbiAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0MiA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0Mi5tYXRjaGVzKFwiLmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcclxuXHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJykgIT1udWxsKSB7XHJcblxyXG4gICAgdmFyIGlucHV0RXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpO1xyXG4gICAgdmFyIGlucHV0RXJyb3JzQXJyYXkgPSBPYmplY3Qua2V5cyhpbnB1dEVycm9ycyk7XHJcblxyXG4gICAgaW5wdXRFcnJvcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRFcnJvcnNba2V5XSk7XHJcbiAgICAgICAgaW5wdXRFcnJvcnNba2V5XS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4vLyAgICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG4vLyAgICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuLy8gICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImFzaWRlLS1hY3RpdmVcIik7XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuXHJcbi8vIH0pKFwiI1NpZGViYXJcIik7XHJcblxyXG4iLCIvKiBcclxuICBEZWJvdW5jZSBmdW5jdGlvbiBwcmV2ZW50IGV4Y2Vzc2l2ZSBjYWxscyBvbiBzY3JvbGwuXHJcbiAgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxyXG4qL1xyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XHJcblx0dmFyIHRpbWVvdXQ7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdH07XHJcblx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdH07XHJcbn07IiwiXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xyXG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGV4aXN0cyBhbmQgaWYgaXQgZG9lc250IHNldHVwIG9iamVjdCByZWFkeSBmb3IgZXZlbnRMaXN0ZW5lclxyXG4gICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW0gIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9IEpTT04ucGFyc2Uoc25hY2tiYXJTdG9yYWdlSXRlbSk7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcclxuICAgICAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vaWYgaXQgZG9lcyB0aGVuIGhpZGUgdGhlIHNuYWNrYmFyXHJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9ucyA6IG5ldyBBcnJheSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc25hY2tiYXIpIHtcclxuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgaWYgKCFzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMucHVzaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pKFwiI2hpbnQtc25hY2tiYXJcIik7XHJcbiIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnJlcGxhY2UoL14jLywgJycpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbiAgICBpZiAobWVudSkge1xyXG5cclxuICAgICAgICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XHJcblxyXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QuYWRkKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkpe1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkoJyNzZWFyY2gnKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnJlcGxhY2UoL14jLywgJycpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbiAgICBpZiAobWVudSkge1xyXG5cclxuICAgICAgICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XHJcblxyXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QuYWRkKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAgJiYgbWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjbWVudScpOyIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHN0YWZmIGNvbXBvc2UgcGFnZS5cclxuKi9cclxuXHJcbmltcG9ydCBTaW1wbGVDb29raWVIZWxwZXIgZnJvbSAnLi4vU2ltcGxlQ29va2llSGVscGVyJztcclxuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XHJcbmltcG9ydCBTZWxlY3RMaXN0VGFncyBmcm9tICcuLi9TZWxlY3RMaXN0VGFncyc7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1jb21wb3NlJykpIHtcclxuXHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jb250YWN0Jyk7XHJcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmplY3RfaW5wdXQnKTtcclxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRfTWVzc2FnZScpO1xyXG4gIGNvbnN0IHJlc2VuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X0F1dG9SZXNlbmRTY2hlZHVsZScpO1xyXG4gIGNvbnN0IHJlc3BvbnNlT3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLW9wdGlvbicpKTtcclxuXHJcbiAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gIGNvbnN0IGNvb2tpZU1lc3NhZ2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZUNvbnRlbnQnKTtcclxuICBjb25zdCBjb29raWVBdXRvUmVzZW5kSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VSZXNlbmQnKTtcclxuICBjb25zdCBjb29raWVSZXNwb25zZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzcG9uc2VzJyk7XHJcblxyXG4gIGNvbnN0IGlkc1Nlc3Npb25IZWxwZXIgPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xyXG5cclxuICBjb25zdCBkaXNjYXJkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkRpc2NhcmQnKTtcclxuICBkaXNjYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIkNvdXJpZXJNZXNzYWdlVXNlcnNcIik7XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBub25FbXB0eU9wdGlvbnMgPSByZXNwb25zZU9wdGlvbnMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgaWYgKGN1cnIudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFjYywgY3Vyci52YWx1ZV07XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5vbkVtcHR5T3B0aW9ucy5qb2luKCd8fCcpO1xyXG4gIH07XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvb2tpZUhlbHBlci5zZXQoc3ViamVjdElucHV0LnZhbHVlKTtcclxuICAgIGNvb2tpZU1lc3NhZ2VIZWxwZXIuc2V0KG1lc3NhZ2VJbnB1dC52YWx1ZSk7XHJcbiAgICBjb29raWVBdXRvUmVzZW5kSGVscGVyLnNldChyZXNlbmRJbnB1dC52YWx1ZSk7ICBcclxuICAgIGNvb2tpZVJlc3BvbnNlSGVscGVyLnNldChnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZygpKTtcclxuICB9KTtcclxuICBcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBpZHNTZXNzaW9uSGVscGVyLmZpbHRlckJ5SWRzKHNlbGVjdGVkT3B0aW9ucy5tYXAoeCA9PiB4LnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RPcHRpb25zID0gaWRzU2Vzc2lvbkhlbHBlci5nZXRJdGVtcygpLm1hcCgoe2lkLCBuYW1lfSk9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICBvcHRpb24udmFsdWUgPSBpZDtcclxuICAgIG9wdGlvbi5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxuICB9KTtcclxuICBcclxuICBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0FzY1N0YWZmU2VsZWN0b3InLCBudWxsLCBvblVwZGF0ZUZ1bmMsIHNlbGVjdE9wdGlvbnMpOyBcclxufVxyXG4iLCJpbXBvcnQgQ2hlY2tib3hEaXNhYmxlQnV0dG9uSGVscGVyIGZyb20gJy4uL0NoZWNrYm94RGlzYWJsZUJ1dHRvbkhlbHBlcic7XHJcblxyXG4vLyBDaGVjayB3ZSBhcmUgb24gdGhlIGNvcnJlY3QgcGFnZS5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4uY291cmllci1wcm9maWxlLXBhZ2UnKTtcclxuXHJcbmlmIChtYWluKSB7XHJcbiAgICBcclxuICAgIG5ldyBDaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIoJyNidG5TYXZlJywgJyNJbnB1dF9Qcml2YWN5UG9saWN5Jyk7XHJcblxyXG4gICAgLy8gR3JhYiBhbGwgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgb25seSBzaG93IHdoZW4ganMgZW5hYmxlZFxyXG4gICAgY29uc3QgYWRkUGhvbmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmVCdG4nKTtcclxuICAgIGNvbnN0IGFkZEVtYWlsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsQnRuJyk7XHJcbiAgICBjb25zdCByZW1vdmVFbWFpbEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSk7XHJcbiAgICBjb25zdCByZW1vdmVQaG9uZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSk7XHJcbiAgICBcclxuICAgIC8vIEdldCB0aGUgZm9ybSwgdG8gYWRkIHJlbW92ZSBsaXN0ZW5lcnMgdG9cclxuICAgIGNvbnN0IGNvbnRhY3RQcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXByb2ZpbGUtZm9ybScpO1xyXG5cclxuICAgIC8vIFNob3cgYWxsIHRoZSBqcyBvbmx5IGJ1dHRvbnNcclxuICAgIFthZGRQaG9uZUJ0biwgYWRkRW1haWxCdG4sIC4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIFsuLi5yZW1vdmVFbWFpbEJ1dHRvbnMsIC4uLnJlbW92ZVBob25lQnV0dG9uc10uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LmFkZCgnaW5wdXRfX3dpdGhhY3Rpb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgZW1wdHkgaW5wdXRzIGFkZGVkIGZvciBub24ganMgcHVycG9zZXNcclxuICAgIGNvbnN0IGVtcHR5SW5wdXRzVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmU6bGFzdC1vZi10eXBlLCAuaW5wdXQtLXByb2ZpbGUtZW1haWw6bGFzdC1vZi10eXBlJyk7XHJcbiAgICBlbXB0eUlucHV0c1RvUmVtb3ZlLmZvckVhY2goZW1wdHlJbnB1dCA9PiBlbXB0eUlucHV0LnJlbW92ZSgpKTtcclxuXHJcbiAgICAvLyBBZGQgYSBuZXcgcGhvbmUgcm93XHJcbiAgICBmdW5jdGlvbiBuZXdQaG9uZVJvdygpIHsgICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBuZXdQaG9uZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdQaG9uZS5jbGFzc05hbWUgPSBcImZvcm1fX2dyb3VwIGlucHV0X193aXRoYWN0aW9uIGlucHV0LS1wcm9maWxlLXBob25lXCI7XHJcbiAgICAgICAgbmV3UGhvbmUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSBidG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmVcIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWVsZC12YWxpZGF0aW9uLXZhbGlkXCIgZGF0YS12YWxtc2ctZm9yPVwicGhvbmVfdmFsaWRhdGlvblwiIGRhdGEtdmFsbXNnLXJlcGxhY2U9XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Bob25lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9yZW51bWJlcklucHV0cyhzZWxlY3RvciwgaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucCA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucC5pZCA9IGAke2lkZW50aWZpZXJ9XyR7aW5kZXh9X2A7XHJcbiAgICAgICAgICAgIGlucC5uYW1lID0gYCR7aWRlbnRpZmllcn1bJHtpbmRleH1dYDtcclxuICAgICAgICAgICAgY29uc3Qgc3BuID0gaW5wdXQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICAgICAgICBzcG4uc2V0QXR0cmlidXRlKCdkYXRhLXZhbG1zZy1mb3InLCBgJHtpZGVudGlmaWVyfVske2luZGV4fV1gKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhIG5ldyBlbWFpbCByb3dcclxuICAgIGZ1bmN0aW9uIG5ld0VtYWlsUm93KCkgeyAgICBcclxuICAgICAgICBjb25zdCBuZXdFbWFpbFJvdyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgIFxyXG4gICAgICAgIG5ld0VtYWlsUm93LmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtZW1haWxcIjsgIFxyXG4gICAgICAgIG5ld0VtYWlsUm93LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybV9faW5wdXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1yZW1vdmUgIGJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbFwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJlbWFpbF92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3RW1haWxSb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2lyZSB1cCB0aGUgYnV0dG9uIGxpc3RlbmVyc1xyXG4gICAgYWRkUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCdzZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3UGhvbmVSb3coKSk7XHJcbiAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmUnLCAnSW5wdXQuUGVyc29uYWxQaG9uZU51bWJlcnMnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRFbWFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChuZXdFbWFpbFJvdygpKVxyXG4gICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgIH0pOyAgXHJcblxyXG4gICAgLy8gSGFuZGxlIHRoZSByZW1vdmUgb24gdGhlIHBhcmVudCBmb3JtLCBzbyB0aGF0IHdpbGwgd29yayBmb3IgbmV3IGl0ZW1zIGFkZGVkIGFmdGVyIGxvYWQuXHJcbiAgICBjb250YWN0UHJvZmlsZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykgIHx8IGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcGFyZW50IGZvcm0gZ3JvdXAgY29udGFpbmluZyBlbWFpbCBvciBwaG9uZS5cclxuICAgICAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJyk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGZvcm1Hcm91cC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSkge1xyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSkge1xyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1lbWFpbCcsICdJbnB1dC5QZXJzb25hbEVtYWlsQWRkcmVzc2VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzZWFyY2ggc3RhZmYgcGFnZS5cclxuKi9cclxuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XHJcbmltcG9ydCBEcmFmdE1lc3NhZ2VEcmF3ZXIgZnJvbSAnLi4vRHJhZnRNZXNzYWdlRHJhd2VyJztcclxuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi4vTGF6eUxvYWRlcic7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1pbmRleCcpKSB7XHJcblxyXG4gIGNvbnN0IGlkU2ggPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xyXG4gIGNvbnN0IGRtZCA9IG5ldyBEcmFmdE1lc3NhZ2VEcmF3ZXIoaWRTaC5nZXRDb3VudCgpKTtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcblxyXG4gIGNvbnN0IGFsbENoZWNrYm94ZXNJblRhYmxlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RhYmxlLXNlbGVjdC1zdGFmZiBbdHlwZT1jaGVja2JveF1cIikpO1xyXG5cclxuICAvLyBDaGVjayBhbGwgaXRlbXMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkID0gYWxsQ2hlY2tib3hlc0luVGFibGUuZmlsdGVyKGNiID0+IGlkU2guaGFzSWQoY2IudmFsdWUpKTtcclxuICBpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkLmZvckVhY2goaSA9PiBpLmNoZWNrZWQgPSB0cnVlKTtcclxuXHJcbiAgY29uc3QgYWxsQ2hlY2tib3hlc1NlbGVjdGVkID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUuZXZlcnkoY2IgPT4gY2IuY2hlY2tlZCk7XHJcbiAgXHJcbiAgLy8gY29uc3QgYWxsQ29udGFjdElkcyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiBjYi52YWx1ZSk7XHJcbiAgY29uc3QgYWxsQ29udGFjdHMgPSAoKSA9PiBhbGxDaGVja2JveGVzSW5UYWJsZS5tYXAoY2IgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IGNiLnZhbHVlLFxyXG4gICAgICBuYW1lOiBjYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJylcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVXNlcyBhIHBhc3NlZCBpbiAnY29tYmluZXInIGZ1bmN0aW9uIHRvIGRlY2lkZWQgaG93IHRvIGVpdGhlciBhZGQgb3IgcmVtb3ZlIHNlbGVjdGVkIHJlc3VsdHMgdG8gdGhvc2UgZnJvbSBvdGhlciBwYWdlcy5cclxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UgPSAoY29tYmluZUZuKSA9PiB7XHJcbiAgICBjb25zdCBhbGxDb250YWN0c0Rpc3BsYXllZCA9IGFsbENvbnRhY3RzKCk7XHJcbiAgICBjb25zdCBleGlzdGluZ0NvbnRhY3RzID0gaWRTaC5nZXRJdGVtcygpO1xyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBjb21iaW5lRm4oZXhpc3RpbmdDb250YWN0cywgYWxsQ29udGFjdHNEaXNwbGF5ZWQpOyAgXHJcblxyXG4gICAgaWRTaC5zZXRJdGVtcyhuZXdJdGVtcyk7XHJcbiAgICBkbWQudXBkYXRlKG5ld0l0ZW1zLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgYWxsIHRoZSBpZHMgdGhhdCB3ZXJlIGNvbnRhaW5lZCBpbiB0aGlzIHJlc3VsdHMgcGFnZS4gIEtlZXAgcmVzdWx0IGZyb20gb3RoZXIgcGFnZXMgc2VsZWN0ZWRcclxuICBjb25zdCBkZXNlbGVjdEFsbCA9ICh0b0Rlc2VsZWN0KSA9PiB7XHJcbiAgICB0b0Rlc2VsZWN0LmZvckVhY2godG9EZXNlbGVjdCA9PiB0b0Rlc2VsZWN0LmNoZWNrZWQgPSBmYWxzZSk7XHJcbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IGV4aXN0aW5nSXRlbXMuZmlsdGVyKCh7aWR9KSA9PiAhYWxsSXRlbXNGb3JHcm91cC5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpKTtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxyXG4gIGNvbnN0IHNlbGVjdEFsbCA9ICh0b1NlbGVjdCkgPT4ge1xyXG4gICAgdG9TZWxlY3QuZm9yRWFjaCh0b1NlbGVjdCA9PiB0b1NlbGVjdC5jaGVja2VkID0gdHJ1ZSk7ICAgIFxyXG5cclxuICAgIGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSgoZXhpc3RpbmdJdGVtcywgYWxsSXRlbXNGb3JHcm91cCkgPT4ge1xyXG5cclxuICAgICAgLy8gZ2V0IGFsbCBpdGVtcyBvbiB0aGUgcGFnZSBub3QgaW4gdGhlIGV4aXN0aW5nIHJlc3VsdHNcclxuICAgICAgY29uc3QgZ3JvdXBJdGVtc1RvQWRkID0gYWxsSXRlbXNGb3JHcm91cC5maWx0ZXIoKHtpZH0pID0+ICFleGlzdGluZ0l0ZW1zLm1hcChpID0+IGkuaWQpLmluY2x1ZGVzKGlkKSk7XHJcblxyXG4gICAgICAvLyBNZXJnZSB0aGUgbmV3IGl0ZW1zIGluXHJcbiAgICAgIHJldHVybiBbLi4uZXhpc3RpbmdJdGVtcywgLi4uZ3JvdXBJdGVtc1RvQWRkXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgIFxyXG5cclxuICAgIHRhcmdldC5jaGVja2VkID9cclxuICAgICAgc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKSA6XHJcbiAgICAgIGRlc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NiU2VsZWN0QWxsIFt0eXBlPWNoZWNrYm94XScpO1xyXG4gIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xyXG4gICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlKTtcclxuXHJcbiAgICBpZiAoYWxsQ2hlY2tib3hlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2Vyc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLXNlbGVjdC1zdGFmZicpO1xyXG4gIGxldCB1c2Vyc1RhYmxlQm9keTtcclxuICBpZih1c2Vyc1RhYmxlKSB7XHJcbiAgIHVzZXJzVGFibGVCb2R5ID0gdXNlcnNUYWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gIGNvbnN0IGNyaXRlcmlhS2V5ID0gJ2NyaXRlcmlhJztcclxuICBcclxuICBsZXQgc2VhcmNoQ3JpdGVyaWFTdHJpbmcgPSB1cmxQYXJhbXMuaGFzKGNyaXRlcmlhS2V5KSA/IGA/Y3JpdGVyaWE9JHt1cmxQYXJhbXMuZ2V0KGNyaXRlcmlhS2V5KX1gIDogJyc7XHJcblxyXG4gIGNvbnN0IGdldFNlYXJjaEVuZHBvaW50ID0gKCkgPT4gYCR7bG9jYXRpb24ub3JpZ2lufS9Gb3JjZS9Db250YWN0cy8ke2N1cnJlbnRQYWdlfSR7c2VhcmNoQ3JpdGVyaWFTdHJpbmd9YDtcclxuICBcclxuICAvLyBBZGQgbGlzdGVuZXJzIGZvciB0aGUgY2hlY2tib3hlc1xyXG4gIGNvbnN0IHN0YWZmVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcblxyXG4gIGlmIChzdGFmZlRhYmxlKSB7XHJcbiAgICBzdGFmZlRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICh7dGFyZ2V0fSkgPT4ge1xyXG4gICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0LmNoZWNrZWQgPyBpZFNoLmFkZCh0YXJnZXQudmFsdWUsIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJykpIDogaWRTaC5yZW1vdmUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgdW5jaGVja2VkIGRlc2VsZWN0IHRoZSBjaGVjayBhbGwuXHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbENoZWNrYm94ZXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgY2hlY2tlZCBzZWUgaWYgYWxsIGFyZSBub3cgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgIH0gIFxyXG5cclxuICBjb25zdCBjcmVhdGVDaGVja2JveEZpZWxkID0gKHZhbHVlLCBjaGVja2VkLCBuYW1lKSA9PiB7ICBcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jZWxsJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJywgbmFtZSk7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlQ2VsbFdpdGhUZXh0ID0gdGV4dCA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUm93ID0gdXNlciA9PiB7XHJcbiAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5uYW1lKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuY29sbGFyKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuZW1haWwpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5waG9uZU51bWJlcikpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrYm94RmllbGQodXNlci5pZCwgaWRTaC5oYXNJZCh1c2VyLmlkKSwgdXNlci5uYW1lKSk7XHJcblxyXG4gICAgdXNlcnNUYWJsZUJvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFJlc3VsdFJvd3MgPSByb3dzID0+IHtcclxuICAgIHJvd3MuZm9yRWFjaChhZGRSb3cpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxvYWRlcikge1xyXG5cclxuICAgIGNvbnN0IGxvYWRlclBhZ2VTaXplID0gbG9hZGVyLmdldEF0dHJpYnV0ZShcInBhZ2Utc2l6ZVwiKTtcclxuXHJcbiAgICBuZXcgTGF6eUxvYWRlcihsb2FkZXIsIGFzeW5jIGRvbmUgPT4ge1xyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIGluZGV4XHJcbiAgICAgICAgY3VycmVudFBhZ2UrKztcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGdldFNlYXJjaEVuZHBvaW50KCk7XHJcblxyXG4gICAgICAgIC8vIERvIHRoZSBzZWFyY2hcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChlbmRwb2ludCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzUmVzdWx0cyA9IHJlc3VsdHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgLy8gV2UgZG9udCBrbm93IGlmIHRoZXJlIHdpbGwgYmUgbW9yZSByZXN1bHRzLCBidXQgaXRzIGxpa2VseSBpZiB3ZSByZXR1cm4gYSBmdWxsIHBhZ2Ugb2YgcmVzdWx0c1xyXG4gICAgICAgIGxldCBtb3JlUmVzdWx0c0xpa2VseSA9IGhhc1Jlc3VsdHM7XHJcbiAgICAgICAgaWYgKGxvYWRlclBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAvLyBXZSBtYXkgbm90IGhhdmUgdGhpcyBhdHRyaWJ1dGUsIGJ1dCBpZiB3ZSBkbyBjaGVjayBpZiB0aGUgcGFnZSBpcyBmdWxsLiBJZiBub3QgdGhlcmUgc2hvdWxkIGJlIG5vIG1vcmUgcmVzdWx0cyB0byBmZXRjaFxyXG4gICAgICAgICAgbW9yZVJlc3VsdHNMaWtlbHkgPSByZXN1bHRzLmxlbmd0aCA9PT0gcGFyc2VJbnQobG9hZGVyUGFnZVNpemUsIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNSZXN1bHRzKSB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYWRkUmVzdWx0Um93cyhyZXN1bHRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbmUobW9yZVJlc3VsdHNMaWtlbHkpOyAgXHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxhenkgbG9hZCBwYWdlICR7Y3VycmVudFBhZ2V9IG9mIEFEIHVzZXJzYCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAvLyBJZ25vcmUgY3VycmVudCBmYWlsZWQgcGFnZSwgc28gd2lsbCB0cnkgYWdhaW5cclxuICAgICAgICBjdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIGRvbmUodHJ1ZSk7IC8vIENhbGwgZG9uZSB3aXRoIG1vcmUgdG8gbG9hZC5cclxuICAgICAgICAvLyBUT0RPOiBXaGF0IHRvIGRvIGhlcmUuIElmIGVucG9pbnQgaXMgZG93biwgd2Ugd291bGQgZ2V0IGxvdHMgb2YgY29uc29sZSBlcnJvcnMgYXQgdGhlIG1vbWVudC4uLi5cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sIHsgZGVidWc6IGZhbHNlLCBwZWVrRGlzdGFuY2U6IDUwIH0pO1xyXG4gIH0gIFxyXG59XHJcbiIsIi8qIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sXHJcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLy8gZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xyXG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3BidG4nKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG5pZiAoYWRkR3JvdXBCdXR0b24pIHtcclxuXHJcbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XHJcblxyXG5pZiAoY2xvc2VTaWRlYmFyKSB7XHJcblxyXG5jbG9zZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xyXG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIC8vIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgdmFyIGNvbnRhY3RQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0NvbnRhY3RBZGRlZCcpO1xyXG4gICAgdmFyIE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcclxuICAgIHZhciBNZXNzYWdlU2VudFBhcmFtID0gdXJsUGFyYW1zLmdldCgnTWVzc2FnZVNlbnQnKTtcclxuICAgIHZhciBGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdGb3JjZUNvbnRhY3RVcGRhdGVkJyk7XHJcblxyXG4gICAgdmFyIHNuYWNrYmFyTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGlmIChjb250YWN0UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgY29udGFjdCBoYXMgYmVlbiBjcmVhdGVkJztcclxuICAgIH0gZWxzZSBpZiAoT3JnYW5pc2F0aW9uUGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgb3JnYW5pc2F0aW9uIGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG4gICAgfSBlbHNlIGlmIChNZXNzYWdlU2VudFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICAvKiBcclxuICAgICAgICAgICAgQml0IGhhY2t5LCBidXQgY2xlYXJpbmcgdGhlIHNlc3Npb25TdG9yYWdlIGhlcmUgdG8gY2xlYXIgbWVzc2FnZSBzdGF0ZSBoZXJlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJDb3VyaWVyTWVzc2FnZVVzZXJzXCIpXHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ01lc3NhZ2Ugc2VudCc7XHJcbiAgICB9IGVsc2UgaWYgKEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSAmJiBGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ1BlcnNvbmFsIGNvbnRhY3QgZGV0YWlscyB1cGRhdGVkJztcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xyXG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxufSkoXCIjc25hY2tiYXJcIik7XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuXHJcbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcclxuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoXCJ0YWJsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==