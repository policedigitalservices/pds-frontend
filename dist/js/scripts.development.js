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
          var cbSelector = 'input[type=checkbox].treeview__checkbox[value="' + pathToUncheck + '"]';
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
    }

    function buildLink(text, path) {
      var link = document.createElement("a");
      link.innerHTML = "\n            <span class='treeview__item-toggle'></span>\n            <span class='treeview__item-content'>".concat(text, "</span>\n        ");
      link.href = getPagePathForGroup(path);
      link.classList.add("treeview__item-link");
      return link;
    }

    function buildLabel(text, path, parentChecked) {
      var newParentSelected = parentChecked;
      var label = document.createElement('label');
      label.classList.add("treeview__item-label");
      var toggleSpan = document.createElement('span');
      toggleSpan.classList.add('treeview__item-toggle');
      var outerSpan = document.createElement('span');
      outerSpan.textContent = text;
      outerSpan.classList.add('treeview__item-content');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.name = text;
      checkbox.value = path;
      checkbox.id = text;
      outerSpan.appendChild(checkbox);
      outerSpan.appendChild(document.createElement('span'));
      label.appendChild(toggleSpan);
      label.appendChild(outerSpan);

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
      }

      checkbox.classList.add('treeview__checkbox');

      if (useSingleSelectCheckbox) {
        checkbox.classList.add('treeview__checkbox--radio');
      }

      return {
        label: label,
        newParentSelected: newParentSelected
      };
    }

    function transferValues() {
      var data = [];
      var elems = document.querySelectorAll('.treeview__checkbox');

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

        var checkboxResult = buildLabel(text, path, parentChecked);
        parent.appendChild(checkboxResult.label);
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
      var parentLi = checkbox.closest('li');

      if (useSingleSelectCheckbox) {
        // In this mode only one item can be selected, and the root item cannot be deseleted.
        if (checkbox.checked) {
          var allGroupCheckboxes = document.querySelectorAll('.treeview__list--root input[type=checkbox]');
          forEachCheckboxExcludingCurrent(checkbox, allGroupCheckboxes, function (checkboxToUpdate) {
            checkboxToUpdate.checked = false;
          });
        } else {
          e.preventDefault();
          checkbox.checked = true;
        }
      } else if (parentLi.classList.contains('treeview__item--parent')) {
        var childCheckboxes = parentLi.querySelectorAll('input[type=checkbox]');

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
    treeContainer.classList.add("treeview__list");
    treeContainer.classList.add("treeview__list--root"); // Handle all the clicks at the parent level

    treeContainer.addEventListener("click", function (e) {
      var target = e.target; // Handle checkbox items being selected.

      if (target.matches('input[type=checkbox]')) {
        handleCheckboxClick(e, target);
      }

      transferValues();

      if (target.matches(".treeview__item-toggle")) {
        var closestLi = target.closest('li'); // We only care about clicks on elements that are parents

        if (closestLi.matches(".treeview__item--parent")) {
          e.preventDefault(); // If an open parent item is clicked, close it, but also all its open descendants.

          if (closestLi.classList.contains("treeview__item--open")) {
            closestLi.classList.remove("treeview__item--open");
            var activeChildren = closestLi.querySelectorAll(".treeview__item--open");

            for (var ac_i = 0; ac_i < activeChildren.length; ac_i++) {
              var activeChild = activeChildren[ac_i];
              activeChild.classList.remove("treeview__item--open");
            }
          } // Open any closed parents that are clicked.
          else {
              closestLi.classList.add("treeview__item--open");
            }
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
      childListItem.classList.add("treeview__item");

      if (!useCheckboxes && !useSingleSelectCheckbox && isSelectedGroup(currPath)) {
        // Only add the current state when in the 'link mode'
        childListItem.classList.add("treeview__item--current");
      }

      if (!childKeys.length) {
        // This is at the bottom of a branch i.e. no children to process
        appendChildrenForMode(childListItem, currText, currPath, parentCheckedState);
        elementToAddTo.appendChild(childListItem);
      } else {
        // This node has children to process
        childListItem.classList.add("treeview__item--parent");

        if (level === 1 || shouldParentBeOpen(currPath)) {
          // Open first level children by default
          childListItem.classList.add("treeview__item--open");
        }

        parentCheckedState = appendChildrenForMode(childListItem, currText, currPath, parentCheckedState); // Create the container ready to be populated with the child nodes

        var childList = document.createElement("ul");
        childList.classList.add("treeview__list");
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
    this.tags.classList.add('tags');
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

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*********************************************************************
 *  Handle the clicking of a search fields x icon.  
 *  Blanks the field and optionally redirect minus query string param
 *  specified on the span.form__input--clear (data-param-name)
 ********************************************************************/

/* Build and redirect to path minus the specified param name in query string */
function redirectWithoutSearch(paramName) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var _window$location = window.location,
      origin = _window$location.origin,
      pathname = _window$location.pathname;
  urlParams.delete(paramName);
  var newCriteria = urlParams.toString() ? "?".concat(urlParams) : '';
  var newPath = "".concat(origin).concat(pathname).concat(newCriteria); // Only redirect if params with change i.e. not just clearing search field

  if (window.location.href !== newPath) {
    window.location.assign(newPath);
  }
}
/* Clear a search field when the inputs clear button is clicked */


function clearSearch(e) {
  var toClear = document.querySelectorAll('.form--search > .form__input--search');
  toClear.forEach(function (tc) {
    return tc.value = '';
  }); // Todo try and get attribute, and redirect if has it.

  var paramToRemove = e.target.getAttribute('data-param-name');

  if (paramToRemove) {
    redirectWithoutSearch(paramToRemove);
  }
}

var clearButtons = document.querySelectorAll('.form__input--clear');
clearButtons.forEach(function (cb) {
  return cb.addEventListener('click', clearSearch);
});

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
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/hint-snackbar.js ./src/js/SelectListTags.js ./src/js/linkify-tables.js ./src/js/search.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ./src/js/pages/CourierProfile.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
__webpack_require__(/*! ./src/js/search.js */"./src/js/search.js");
__webpack_require__(/*! ./src/js/pages/SelectStaffForMessage.js */"./src/js/pages/SelectStaffForMessage.js");
__webpack_require__(/*! ./src/js/pages/ComposeStaffMessage.js */"./src/js/pages/ComposeStaffMessage.js");
module.exports = __webpack_require__(/*! ./src/js/pages/CourierProfile.js */"./src/js/pages/CourierProfile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saW5raWZ5LXRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ29tcG9zZVN0YWZmTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ291cmllclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL1NlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzLmpzIl0sIm5hbWVzIjpbIkJvdHRvbURyYXdlciIsIl9vcGVuQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIkRyYWZ0TWVzc2FnZURyYXdlciIsIm51bWJlck9mUmVjaXBpZW50cyIsInRvdGFsU2VsZWN0b3IiLCJjb29raWVIZWxwZXIiLCJTaW1wbGVDb29raWVIZWxwZXIiLCJfdG90YWxzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImdldCIsIkVycm9yIiwiX2JvdHRvbURyYXdlciIsInVwZGF0ZSIsImlubmVyVGV4dCIsInNob3ciLCJoaWRlIiwiZ3JvdXBFeGlzdCIsImdldEVsZW1lbnRCeUlkIiwidXNlQ2hlY2tib3hlcyIsImhhc0F0dHJpYnV0ZSIsInVzZVNpbmdsZVNlbGVjdENoZWNrYm94IiwibG9ja1Jvb3ROb2RlIiwic2VsZWN0b3IiLCJpbnRpYWxseVNlbGVjdGVkTm9kZXMiLCJncm91cFNlbGVjdCIsImdyb3VwVGV4dGFyZWEiLCJ0YWdzU2VlQWxsSGVscGVyIiwicGFyZW50RWxlbWVudCIsInNlbGVjdGVkT3B0aW9uc05vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidmFsdWUiLCJpdGVtTGltaXQiLCJTZWVBbGxIZWxwZXIiLCJjb3VudEZpZWxkSWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJwYXRoVG9VbmNoZWNrIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImNiU2VsZWN0b3IiLCJjaGVjYm94VG9VbmNoZWNrIiwiY2xpY2siLCJyZWNhbGN1bGF0ZSIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJidWlsZExhYmVsIiwicGFyZW50Q2hlY2tlZCIsIm5ld1BhcmVudFNlbGVjdGVkIiwibGFiZWwiLCJ0b2dnbGVTcGFuIiwib3V0ZXJTcGFuIiwiY2hlY2tib3giLCJ0eXBlIiwibmFtZSIsImlkIiwiYXBwZW5kQ2hpbGQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwiY2xvc2VzdCIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkQ2hlY2tib3hlcyIsImhpZGRlbkZpZWxkIiwic2V0QXR0cmlidXRlIiwic3RydWN0dXJlIiwib3B0aW9uX2kiLCJvcHRpb24iLCJzZWdtZW50cyIsInNwbGl0Iiwibm9kZVRvQ2hlY2siLCJzZWdtZW50X2kiLCJzZWciLCJ0cmVlQ29udGFpbmVyIiwiY2xvc2VzdExpIiwiYWN0aXZlQ2hpbGRyZW4iLCJhY19pIiwiYWN0aXZlQ2hpbGQiLCJkaXNwbGF5Q2hpbGRLZXlzIiwiY3VyclRleHQiLCJjdXJyUGF0aCIsIm9iaiIsImVsZW1lbnRUb0FkZFRvIiwibGV2ZWwiLCJwYXJlbnRzQ2hlY2tlZCIsImNoaWxkS2V5cyIsIk9iamVjdCIsImtleXMiLCJwYXJlbnRDaGVja2VkU3RhdGUiLCJjaGlsZExpc3RJdGVtIiwiY2hpbGRMaXN0IiwiY2tfaSIsImNoaWxkS2V5IiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsIklkU2Vzc2lvblN0b3JhZ2VIZWxwZXIiLCJfbmFtZSIsImluaXRpYWwiLCJfaW5pdGlhbGlzZSIsIl9pdGVtcyIsIk1hcCIsImZvckVhY2giLCJzZXQiLCJzZWxlY3RlZEl0ZW1zSnNvbiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIl9wZXJzaXN0IiwiSlNPTiIsInBhcnNlIiwiaXRlbXMiLCJnZXRJdGVtcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJpZHMiLCJpZHNUb0tlZXAiLCJnZXRJZHMiLCJpbmNsdWRlcyIsInNpemUiLCJkZWxldGUiLCJlbnRyaWVzIiwiaGFzIiwic2V0SXRlbXMiLCJDb3VyaWVyTGF6eUxvYWRlciIsImxvYWRlckVsZW1lbnQiLCJsb2FkZXJGbiIsImNvbmZpZ09iaiIsImNvbmZpZ0RlZmF1bHRzIiwibG9hZGVyQ2xhc3MiLCJsb2FkZXJMb2FkaW5nQ2xhc3MiLCJkZWJvdW5jZU1zIiwicGVla0Rpc3RhbmNlIiwiZGVidWciLCJfbG9hZGVyIiwiX2xvYWRlckZ1bmMiLCJfbWFpbiIsIl9jb25maWciLCJfaGFzTGlzdGVuZXJzQWRkZWQiLCJfbGF6eUxvYWRDaGVjayIsImRlYm91bmNlIiwiX2RvTG9hZE1vcmVDaGVjayIsIl9jb25kaXRpb25hbERlYnVnTG9nIiwiX3N0b3BMaXN0ZW5pbmciLCJfZG9uZVNlYXJjaGluZyIsIl9zdGFydExpc3RlbmluZyIsImJpbmQiLCJ2aXNpYmxlIiwibW9yZVRvTG9hZCIsIl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9EZWJ1ZyIsImxvZ2dlckZ1bmMiLCJjb25zb2xlIiwibG9nIiwiaGlnaGVzdFZpc2libGVZUG9zIiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkTW9yZVRyaWdnZXJQb3MiLCJNYXRoIiwibWluIiwib2Zmc2V0VG9wIiwicGVla1Bvc2l0aW9uVmlzaWJsZSIsInNob3VsZExvYWRNb3JlIiwidGFibGUiLCJTZWVBbGxBdHRyaWJ1dGVIZWxwZXIiLCJzaG93TW9yZUJ1dHRvbnMiLCJzaG93QWxsQnV0dG9uIiwiY29udGFpbmVySWQiLCJpdGVtU2VsZWN0b3IiLCJzaG93QWxsSXRlbUxpbWl0Iiwic2hvd0FsbEl0ZW1Db3VudElkIiwiYnV0dG9uSWQiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzZWxlY3RvclRvVXNlIiwidGFnTmFtZSIsImVycm9yIiwicGFyc2VkSXRlbUxpbWl0IiwicGFyc2VJbnQiLCJpc05hTiIsIml0ZW1zU2VsZWN0b3IiLCJzZWVBbGxTZWxlY3RvciIsInBhc3NlZE9wdGlvbnMiLCJfaXRlbXNTZWxlY3RvciIsIl9zZWVBbGwiLCJfb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGwiLCJkZWZhdWx0cyIsInNob3dMZXNzVGV4dCIsIl9vcHRpb25zIiwiX2l0ZW1MaW1pdCIsIl9zaG93TGVzc1RleHQiLCJfc2hvd01vcmVUZXh0IiwiX2NvdW50RmllbGQiLCJfc2hvd2luZ0FsbCIsIl9oaWRlRXhjZXNzSXRlbXMiLCJfc2hvd0FsbEl0ZW1zIiwiX2FsbEl0ZW1zIiwiaXRlbSIsIl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zIiwiaW5kZXgiLCJ0b0NoZWNrIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaWx0ZXIiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwicmVwb2x1bGF0ZVRhZ3MiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3ZhbHVlIiwibmV3Q29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzcG9uc2VzIiwicmVzcG9uc2VzTGlzdCIsInJlc3BvbnNlIiwiaWR4IiwidHJpbSIsInNob3dGaXJzdEVtcHlJdGVtIiwiY3VycmVudFJlc3BvbnNlIiwiY29weUl0ZW1zRm9yd2FyZCIsInByZXZJbnB1dCIsImlucHV0IiwicmVtb3ZlTGFzdEVtcHR5SXRlbSIsInJlbW92ZUlkeCIsImFkZFJlc3BvbnNlQnV0dG9uIiwiZWwiLCJibHVyIiwiYWRkUGhvbmVJbnB1dCIsImFkZFBob25lQnV0dG9uIiwiYWRkRW1haWxJbnB1dCIsImFkZEVtYWlsQnV0dG9uIiwiYWRkR3JvdXBCdXR0b24iLCJzYXZlR3JvdXBCdXR0b24iLCJ0YXJnZXQyIiwiaW5wdXRFcnJvcnMiLCJpbnB1dEVycm9yc0FycmF5IiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzbmFja2JhclN0b3JhZ2VJdGVtIiwibG9jYWxTdG9yYWdlIiwic25hY2tiYXIiLCJzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkiLCJsb2NhdGlvbnMiLCJyb3dzVG9MaW5raWZ5IiwiaGFuZGxlUm93Q2xpY2siLCJjb2xUb1BhcnNlIiwicm93IiwiY29sIiwibWVudSIsIm1lbnVCdXR0b24iLCJtZW51Q2hpbGQiLCJtYWluIiwiYWRkQnRuIiwic3ViamVjdElucHV0IiwibWVzc2FnZUlucHV0IiwicmVzZW5kSW5wdXQiLCJyZXNwb25zZU9wdGlvbnMiLCJjb29raWVNZXNzYWdlSGVscGVyIiwiY29va2llQXV0b1Jlc2VuZEhlbHBlciIsImNvb2tpZVJlc3BvbnNlSGVscGVyIiwiaWRzU2Vzc2lvbkhlbHBlciIsImdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nIiwibm9uRW1wdHlPcHRpb25zIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImpvaW4iLCJmaWx0ZXJCeUlkcyIsIngiLCJzZWxlY3RPcHRpb25zIiwic2x0IiwiZGlzY2FyZEJ0biIsImNsZWFySXRlbXMiLCJuZXdQaG9uZVJvdyIsIm5ld1Bob25lIiwiY2xhc3NOYW1lIiwiX3JlbnVtYmVySW5wdXRzIiwiaWRlbnRpZmllciIsImlucHV0cyIsImlucCIsInNwbiIsIm5ld0VtYWlsUm93IiwiYWRkUGhvbmVCdG4iLCJhZGRFbWFpbEJ0biIsInJlbW92ZUVtYWlsQnV0dG9ucyIsInJlbW92ZVBob25lQnV0dG9ucyIsImVtYWlsc1NlY3Rpb24iLCJzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUiLCJwaG9uZXNTZWN0aW9uIiwic2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlIiwiaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUiLCJzZWN0aW9uIiwiY29udGFjdFByb2ZpbGVGb3JtIiwiaW5wdXRzRm9yU2VsZWN0b3IiLCJkaXIiLCJmb3JtR3JvdXAiLCJpZFNoIiwiZG1kIiwibG9hZGVyIiwiYWxsQ2hlY2tib3hlc0luVGFibGUiLCJpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkIiwiY2IiLCJoYXNJZCIsImFsbENoZWNrYm94ZXNTZWxlY3RlZCIsImV2ZXJ5IiwiYWxsQ29udGFjdHMiLCJoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UiLCJjb21iaW5lRm4iLCJhbGxDb250YWN0c0Rpc3BsYXllZCIsImV4aXN0aW5nQ29udGFjdHMiLCJuZXdJdGVtcyIsImRlc2VsZWN0QWxsIiwidG9EZXNlbGVjdCIsImV4aXN0aW5nSXRlbXMiLCJhbGxJdGVtc0Zvckdyb3VwIiwic2VsZWN0QWxsIiwidG9TZWxlY3QiLCJncm91cEl0ZW1zVG9BZGQiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJ0b2dnbGVTZWxlY3RBbGxDaGVja2JveCIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjcml0ZXJpYUtleSIsInNlYXJjaENyaXRlcmlhU3RyaW5nIiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJzdGFmZlRhYmxlIiwibmV3VG90YWwiLCJjcmVhdGVDaGVja2JveEZpZWxkIiwiY2VsbCIsImNyZWF0ZUNlbGxXaXRoVGV4dCIsImFkZFJvdyIsInVzZXIiLCJuZXdSb3ciLCJjb2xsYXIiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiYWRkUmVzdWx0Um93cyIsInJvd3MiLCJsb2FkZXJQYWdlU2l6ZSIsIkxhenlMb2FkZXIiLCJkb25lIiwiZW5kcG9pbnQiLCJmZXRjaCIsImpzb24iLCJyZXN1bHRzIiwiaGFzUmVzdWx0cyIsIm1vcmVSZXN1bHRzTGlrZWx5IiwicmVkaXJlY3RXaXRob3V0U2VhcmNoIiwicGFyYW1OYW1lIiwibmV3Q3JpdGVyaWEiLCJ0b1N0cmluZyIsIm5ld1BhdGgiLCJhc3NpZ24iLCJjbGVhclNlYXJjaCIsInRvQ2xlYXIiLCJ0YyIsInBhcmFtVG9SZW1vdmUiLCJjbGVhckJ1dHRvbnMiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsInkiLCJyZW1vdmVRdWVyeVBhcmFtIiwicGFyYW0iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJjb250YWN0UGFyYW0iLCJPcmdhbmlzYXRpb25QYXJhbSIsIk1lc3NhZ2VTZW50UGFyYW0iLCJGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0iLCJzbmFja2Jhck1lc3NhZ2UiLCJyZW1vdmVJdGVtIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGUiLCJmaWxlIjoiZGlzdC9qcy9zY3JpcHRzLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLypcclxuIENsYXNzIHRoYXQgZmFjaWxpdGF0ZSB0aGUgaGlkaW5nIGFuZCBzaG93aW5nIG9mIHRoZSBib3R0b20gYmFyLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3R0b21EcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlbkNsYXNzID0gXCJib3R0b20tZHJhd2VyLW9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBCb3R0b21EcmF3ZXIgZnJvbSAnLi9Cb3R0b21EcmF3ZXInO1xyXG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4vU2ltcGxlQ29va2llSGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0TWVzc2FnZURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlJlY2lwaWVudHMsIHRvdGFsU2VsZWN0b3I9XCIuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RvdGFsXCIpIHtcclxuICAgICAgICBjb25zdCBjb29raWVIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG90YWxTZWxlY3Rvcik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190aXRsZScpLnRleHRDb250ZW50ID0gY29va2llSGVscGVyLmdldCgpIHx8ICdVbnRpdGxlZCc7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b3RhbHNFbGVtZW50KSB7IHRocm93IEVycm9yKGBObyBlbGVtZW50IG1hdGNoaW5nIHRoZSBwYXNzZWQgaW4gc2VsZWN0b3IgJHt0b3RhbFNlbGVjdG9yfWApOyB9XHJcbiAgICAgICAgdGhpcy5fYm90dG9tRHJhd2VyID0gbmV3IEJvdHRvbURyYXdlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKG51bWJlck9mUmVjaXBpZW50cyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50LmlubmVyVGV4dCA9IG51bWJlck9mUmVjaXBpZW50cztcclxuICAgICAgICBudW1iZXJPZlJlY2lwaWVudHMgPyB0aGlzLl9ib3R0b21EcmF3ZXIuc2hvdygpIDogdGhpcy5fYm90dG9tRHJhd2VyLmhpZGUoKTtcclxuICAgIH1cclxufSIsIiBpbXBvcnQge1NlZUFsbEhlbHBlcn0gZnJvbSAnLi9TZWVBbGxIZWxwZXInO1xyXG4gXHJcbiB2YXIgZ3JvdXBFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XHJcbiAgICBpZihncm91cEV4aXN0KXtcclxuXHJcbiAgICAgICAgdmFyIHVzZUNoZWNrYm94ZXMgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94ID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1zaW5nbGUtc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIGxvY2tSb290Tm9kZSA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLWxvY2stcm9vdCcpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3RvciwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAvL0NoZWNrIG9uIHBhZ2Ugd2hldGhlciBHcm91cCBNdWx0aSBTZWxlY3QgZXhpc3RzXHJcbiAgICB2YXIgaW50aWFsbHlTZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwU2VsZWN0b3JcIik7XHJcbiAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuICAgIFxyXG4gICAgbGV0IHRhZ3NTZWVBbGxIZWxwZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIElmIHRoZSBHcm91cCBNdWx0aSBTZWxlY3QgZG9lcyBleGlzdCwgaGlkZSBpdCAoaWYgSlMgZW5hYmxlZClcclxuICAgIGlmIChncm91cFNlbGVjdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGdyb3VwU2VsZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICBncm91cFRleHRhcmVhLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgLy8gR3JhYiBhbGwgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkXHJcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uc05vZGVzID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE9wdGlvbnNOb2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgaW50aWFsbHlTZWxlY3RlZE5vZGVzLnB1c2goc2VsZWN0ZWRPcHRpb25zTm9kZXNbaV0udmFsdWUgfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbUxpbWl0ID0gMjE7XHJcblxyXG4gICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIgID0gbmV3IFNlZUFsbEhlbHBlcignI0dyb3VwVGV4dGFyZWEgPiAudGFnJywgJyNzZWVNb3JlR3JvdXBzJywgeyBpdGVtTGltaXQsIGNvdW50RmllbGRJZDogJ2dyb3Vwc0NvdW50JyB9KTtcclxuXHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aFRvVW5jaGVjayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIikucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiU2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1jaGVja2JveF0udHJlZXZpZXdfX2NoZWNrYm94W3ZhbHVlPVwiJytwYXRoVG9VbmNoZWNrKydcIl0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNib3hUb1VuY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNiU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNib3hUb1VuY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjYm94VG9VbmNoZWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFnc1NlZUFsbEhlbHBlci5yZWNhbGN1bGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlYXJjaFBhcnRzID0gKGZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XHJcbiAgICAgICAgdmFyIHZhcnMgPSB7fTtcclxuICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksIGZ1bmN0aW9uKG0sa2V5LHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgcGFnZVBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/Z3JvdXA9XCI7XHJcbiAgICB2YXIgZ3JvdXBQYXJhbSA9IHNlYXJjaFBhcnRzLmdyb3VwO1xyXG4gICAgdmFyIHNlYXJjaFBhcmFtID0gc2VhcmNoUGFydHMuU2VhcmNoO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGJ1aWxkIHRoZSBwYXRoXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlUGF0aEZvckdyb3VwKGdyb3VwKSB7XHJcbiAgICAgIHZhciBncnAgPSBncm91cCA9PT0gXCJcIiA/IFwiXFxcXFwiIDogZ3JvdXA7XHJcbiAgICAgIHJldHVybiBwYWdlUGF0aCArIGdycDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGQgc2hvdWxkIGJlIG9wZW4gaS5lLiB0byByZXZlYWwgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBncm91cFxyXG4gICAgZnVuY3Rpb24gc2hvdWxkUGFyZW50QmVPcGVuKHBhdGgpIHtcclxuICAgICAgICBpZiAoIWdyb3VwUGFyYW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCArIFwiXFxcXFwiKTtcclxuICAgICAgICByZXR1cm4gZ3JvdXBQYXJhbS5zdGFydHNXaXRoKHBhdGhUb0NoZWNrKSAmJiBncm91cFBhcmFtICE9IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZGVkIGlzIHRoZSBjdXJyZW50bHlTZWxlY3RlZEdyb3VwXHJcbiAgICBmdW5jdGlvbiBpc1NlbGVjdGVkR3JvdXAocGF0aCkge1xyXG4gICAgICAgIHZhciBwYXJhbXNUb0NoZWNrID0gZGVjb2RlVVJJQ29tcG9uZW50KGdyb3VwUGFyYW0gfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoIHx8IFwiXFxcXFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1RvQ2hlY2sgPT09IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkTGluayh0ZXh0LCBwYXRoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICAgICAgbGluay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd0cmVldmlld19faXRlbS10b2dnbGUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3RyZWV2aWV3X19pdGVtLWNvbnRlbnQnPiR7dGV4dH08L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsaW5rLmhyZWYgPSBnZXRQYWdlUGF0aEZvckdyb3VwKHBhdGgpO1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtLWxpbmtcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkTGFiZWwodGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG5cclxuICAgICAgICB2YXIgbmV3UGFyZW50U2VsZWN0ZWQgPSBwYXJlbnRDaGVja2VkO1xyXG5cclxuICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS1sYWJlbFwiKTtcclxuICAgICAgICB2YXIgdG9nZ2xlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0b2dnbGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19pdGVtLXRvZ2dsZScpO1xyXG4gICAgICAgIHZhciBvdXRlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgb3V0ZXJTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBvdXRlclNwYW4uY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2l0ZW0tY29udGVudCcpO1xyXG4gICAgICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjaGVja2JveC5uYW1lID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveC52YWx1ZSA9IHBhdGg7XHJcbiAgICAgICAgY2hlY2tib3guaWQgPSB0ZXh0O1xyXG4gICAgICAgIG91dGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgb3V0ZXJTcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodG9nZ2xlU3Bhbik7XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQob3V0ZXJTcGFuKTtcclxuXHJcbiAgICAgICAgaWYgKHBhdGggPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGRpc2FibGVkIGFuZCBjaGVja2VkIEJVVCB0aGUgY2hpbGRyZW4gb2YgdGhpcyBub2RlIHNob3VsZCBhY3QgYXMgdGhvdWdoIGl0IGlzbnQgY2hlY2tlZCBzbyB3ZSBkb250IHVwZGF0ZSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENoZWNrZWQgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYWxsIGl0cyBjaGlsZHJlbiBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgbm90IGNoZWNrZWQgaXRzIGNoaWxkcmVuIHNlbGVjdGVkIHN0YXRlIGRlcGVuZCBvbiB0aGUgY2hpbGRzIHZhbHVlLCBhbmQgbm90IGJlIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHZhciBuZXdDaGVja2VkID0gaW50aWFsbHlTZWxlY3RlZE5vZGVzLmluZGV4T2YocGF0aCB8fCAnXFxcXCcpID49IDA7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgICAgICBuZXdQYXJlbnRTZWxlY3RlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0cmVldmlld19fY2hlY2tib3gnKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19jaGVja2JveC0tcmFkaW8nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7bGFiZWwsIG5ld1BhcmVudFNlbGVjdGVkfTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zZmVyVmFsdWVzKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcblxyXG4gICAgICAgIHZhciBlbGVtcz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyZWV2aWV3X19jaGVja2JveCcpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8ZWxlbXMubGVuZ3RoO2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb2NrUm9vdE5vZGUgJiYgIShlbGVtc1tpXS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOby1vcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbXNbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChlbGVtc1tpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSkge1xyXG5cclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcbiAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR3JvdXBTZWxlY3RvcicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nT3B0aW9uVmFsdWVzID0gQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfaSA9IDA7IGRhdGFfaSA8IGRhdGEubGVuZ3RoOyBkYXRhX2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9jdXJyZW50ID0gZGF0YVtkYXRhX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj5BbGwgQ29udGFjdCBHcm91cHM8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+JyArIGRhdGFfY3VycmVudC5zdWJzdHJpbmcoMSkgKyAnPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgb3B0aW9uIGV4aXN0cyAtIGFkZCBpdCBpZiBub3RcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ09wdGlvblZhbHVlcy5pbmRleE9mKGRhdGFfY3VycmVudCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gZGF0YV9jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhX2N1cnJlbnQ7XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uc1tpXS5zZWxlY3RlZCA9IGRhdGEuaW5kZXhPZihlbGVtZW50Lm9wdGlvbnNbaV0udmFsdWUpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKHBhcmVudCwgdGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIGlmICh1c2VDaGVja2JveGVzIHx8IHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCB0aGUgYmxhbmsgdmFsdWUgZm9yICdBbGwgQ29udGFjdCBHcm91cHMnXHJcbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXFxcXFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY2hlY2tib3hSZXN1bHQgPSBidWlsZExhYmVsKHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hSZXN1bHQubGFiZWwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94UmVzdWx0Lm5ld1BhcmVudFNlbGVjdGVkO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxpbmsgdG8gcmVmcmVzaCBwYWdlIHdpdGggc2VsZWN0ZWQgbm9kZS5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkTGluayh0ZXh0LCBwYXRoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRDaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGN1cnJlbnQsIGNoaWxkcmVuLCB1cGRhdGVyRm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50TG9vcENoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9vcENoaWxkICE9PSBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVyRm4oY3VycmVudExvb3BDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayhlLCBjaGVja2JveCkge1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50TGkgPSBjaGVja2JveC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSBvbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCwgYW5kIHRoZSByb290IGl0ZW0gY2Fubm90IGJlIGRlc2VsZXRlZC5cclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbGxHcm91cENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJlZXZpZXdfX2xpc3QtLXJvb3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGFsbEdyb3VwQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXJlbnRMaS5jbGFzc0xpc3QuY29udGFpbnMoJ3RyZWV2aWV3X19pdGVtLS1wYXJlbnQnKSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2hpbGRDaGVja2JveGVzID0gcGFyZW50TGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcmFiIHRoZSBzZWxlY3QgbGlzdCBhbmQgYWxsIG9mIGl0cyBvcHRpb25zXHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIHZhciBvcHRpb25zID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuXHJcbiAgICB2YXIgaGlkZGVuRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkdyb3VwXCIpO1xyXG4gICAgaGlkZGVuRmllbGQudmFsdWUgPSBncm91cFBhcmFtIHx8ICdcXFxcJztcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGJhc2UgY29sbGVjdGlvbnMgd2l0aCBzdGFydGluZyBrZXkgZm9yIHRoZSByb290LlxyXG4gICAgdmFyIHN0cnVjdHVyZSA9IHsgXCJcXFxcXCI6IHt9IH07XHJcblxyXG4gICAgLy8gQnVpbGQgb24gdGhlIGJhc2Ugc3RydWN0dXJlIGJ5IGxvb3BpbmcgdGhyb3VnaCBlYWNoIHNlbGVjdCBpdGVtLlxyXG4gICAgZm9yICh2YXIgb3B0aW9uX2k9MDsgb3B0aW9uX2k8b3B0aW9ucy5sZW5ndGg7IG9wdGlvbl9pKyspIHtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbb3B0aW9uX2ldO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIFNlcGVyYXRlIHRoZSBncm91cCBuYW1lIGludG8gYWxsIGl0cyBwYXRoIHNlZ21lbnRzXHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IG9wdGlvbi50ZXh0Q29udGVudC5zcGxpdChcIlxcXFxcIik7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IGF0IHRoZSByb290IGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHZhciBub2RlVG9DaGVjayA9IHN0cnVjdHVyZVtcIlxcXFxcIl07XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IGVuc3VyZSB0aGF0IGFsbCBsZXZlbHMgb2YgdGhlIHN0cnVjdHVyZSBhcmUgaW4gcGxhY2UuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHNlZ21lbnRfaT0wOyBzZWdtZW50X2k8c2VnbWVudHMubGVuZ3RoOyBzZWdtZW50X2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWcgPSBzZWdtZW50c1tzZWdtZW50X2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWcgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb0NoZWNrW3NlZ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2tbc2VnXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrW3NlZ107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGJhc2UgZWxlbWVudCB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkXHJcbiAgICB2YXIgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19saXN0XCIpO1xyXG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2xpc3QtLXJvb3RcIik7XHJcblxyXG5cclxuICAgIC8vIEhhbmRsZSBhbGwgdGhlIGNsaWNrcyBhdCB0aGUgcGFyZW50IGxldmVsXHJcbiAgICB0cmVlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGNoZWNrYm94IGl0ZW1zIGJlaW5nIHNlbGVjdGVkLlxyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrKGUsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudHJlZXZpZXdfX2l0ZW0tdG9nZ2xlXCIpKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xvc2VzdExpID0gdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgY2xpY2tzIG9uIGVsZW1lbnRzIHRoYXQgYXJlIHBhcmVudHNcclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3RMaS5tYXRjaGVzKFwiLnRyZWV2aWV3X19pdGVtLS1wYXJlbnRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW4gb3BlbiBwYXJlbnQgaXRlbSBpcyBjbGlja2VkLCBjbG9zZSBpdCwgYnV0IGFsc28gYWxsIGl0cyBvcGVuIGRlc2NlbmRhbnRzLlxyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RMaS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmVldmlld19faXRlbS0tb3BlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RMaS5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkcmVuID0gY2xvc2VzdExpLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRyZWV2aWV3X19pdGVtLS1vcGVuXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhY19pPTA7IGFjX2k8YWN0aXZlQ2hpbGRyZW4ubGVuZ3RoOyBhY19pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gYWN0aXZlQ2hpbGRyZW5bYWNfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmVldmlld19faXRlbS0tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuIGFueSBjbG9zZWQgcGFyZW50cyB0aGF0IGFyZSBjbGlja2VkLlxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdExpLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS0tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGJ1aWxkcyB0aGUgc2VsZWN0IGxpc3QgZnJvbSB0aGUgcHJldmlvdXMgbm9kZSBzdHJ1Y3R1cmUuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNoaWxkS2V5cyhjdXJyVGV4dCwgY3VyclBhdGgsIG9iaiwgZWxlbWVudFRvQWRkVG8sIGxldmVsLCBwYXJlbnRzQ2hlY2tlZCkge1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudENoZWNrZWRTdGF0ZSA9IHBhcmVudHNDaGVja2VkO1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbVwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VDaGVja2JveGVzICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCAmJiBpc1NlbGVjdGVkR3JvdXAoY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSBjdXJyZW50IHN0YXRlIHdoZW4gaW4gdGhlICdsaW5rIG1vZGUnXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGlsZEtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYXQgdGhlIGJvdHRvbSBvZiBhIGJyYW5jaCBpLmUuIG5vIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBub2RlIGhhcyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS0tcGFyZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHNob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3QuY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19saXN0XCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBDYWxsIHJlY3Vyc2l2ZWx5IHdpdGggdXBkYXRlZCBwYXJhbXMgZm9yIGVhY2ggY2hpbGQgbm9kZVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgY2tfaT0wOyBja19pIDwgY2hpbGRLZXlzLmxlbmd0aDsgY2tfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRLZXkgPSBjaGlsZEtleXNbY2tfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkS2V5ICE9PSAnQWxsIGNvbnRhY3RzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDaGlsZEtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtjaGlsZEtleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzdGFydGluZyBhdCB0aGUgcm9vdC5cclxuICAgIGRpc3BsYXlDaGlsZEtleXMoXCJBbGwgQ29udGFjdCBHcm91cHNcIiwgXCJcIiwgc3RydWN0dXJlW1wiXFxcXFwiXSwgdHJlZUNvbnRhaW5lciwgMSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgdGhlIHNlbGVjdCBsaXN0IHdpdGggdGhlIG5ldyB0cmVlXHJcbiAgICBncm91cFNlbGVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0cmVlQ29udGFpbmVyLCBncm91cFNlbGVjdCk7XHJcblxyXG4gICAgdHJlZUNvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcclxuXHJcbiAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxufSkoXCIjR3JvdXBcIiwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpO1xyXG59XHJcbiIsIi8vIFN0b3JlIHNlbGVjdGVkIHVzZXJzIGluc2lkZSBzZXNzaW9uIHN0b3JhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICBjb25zdCBpbml0aWFsID0gdGhpcy5faW5pdGlhbGlzZSgpO1xyXG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XHJcbiAgICBpbml0aWFsLmZvckVhY2goKHtpZCwgbmFtZX0pID0+IHRoaXMuX2l0ZW1zLnNldChpZCwgbmFtZSkpO1xyXG4gIH1cclxuICBcclxuICAvLyBQb3B1bGF0ZSBzdGFydCBpZHMsIGluaXRpYWxpc2VzIGNvb2tpZSBpZiBub3QgcHJlc2VudFxyXG4gIF9pbml0aWFsaXNlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtc0pzb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRoaXMuX25hbWUpO1xyXG4gICAgaWYgKCFzZWxlY3RlZEl0ZW1zSnNvbikgeyAgICAgICAgICAgICAgIFxyXG4gICAgICB0aGlzLl9wZXJzaXN0KFtdKTsgICBcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VsZWN0ZWRJdGVtc0pzb24pO1xyXG4gIH1cclxuICBcclxuICAvLyBTYXZlIHRoZSBuZXcgaWRzIHRvIHRoZSBzZXNzaW9uIHN0b3JhZ2UgYWZ0ZXIgdXBkYXRlXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgdGhpcy5fcGVyc2lzdChpdGVtcyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNhdmUgdGhlIHBhc3NlZCBpbiBpZHMgdG8gdGhlIGNvb2tpZVxyXG4gIF9wZXJzaXN0KGl0ZW1zKSB7ICAgIFxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9uYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gIH1cclxuICBcclxuICAvLyBTZXQgYWxsIHRoZSBpdGVtcyBpbiBvbmUgaGl0LiBSZXR1cm5zIHRoZSBuZXcgY291bnQuXHJcbiAgc2V0SXRlbXMoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGkgPT4gdGhpcy5faXRlbXMuc2V0KGkuaWQsIGkubmFtZSkpO1xyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cclxuICBnZXRJZHMoKSB7XHJcbiAgICBjb25zdCBpZHMgPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zLmtleXMoKSk7XHJcbiAgICByZXR1cm4gaWRzO1xyXG4gIH0gIFxyXG5cclxuICAvLyBSZW1vdmUgYWxsIG1hcCBpdGVtcyB3aG9zZSBpZHMgYXJlIG5vdCBpbiB0aGUgcGFzc2VkIGluIGxpc3RcclxuICBmaWx0ZXJCeUlkcyhpZHNUb0tlZXApIHtcclxuICAgIGNvbnN0IGlkcyA9IHRoaXMuZ2V0SWRzKCk7XHJcbiAgICByZXR1cm4gaWRzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGlmICghaWRzVG9LZWVwLmluY2x1ZGVzKGkpKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gIFxyXG4gIFxyXG4gIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBjdXJyZW50bHkgaW4gdGhlIG1hcC5cclxuICBnZXRDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5zaXplO1xyXG4gIH1cclxuICBcclxuICAvLyBSZW1vdmUgaXRlbSBieSBpdHMgaWQuIFJldHVybiB0aGUgbmV3IGNvdW50XHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaWQpOyAgICAgIFxyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuICBcclxuICAvLyBBZGQgb25lIG9yIG1vcmUgaXRlbXMuIFJldHVybnMgdGhlIG5ldyBjb3VudFxyXG4gIGFkZChpZCwgbmFtZSkge1xyXG4gICAgdGhpcy5faXRlbXMuc2V0KGlkLCBuYW1lKTtcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybiBhbGwgaXRlbXMgaW4gYXJyYXkgZm9ybWF0XHJcbiAgZ2V0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pdGVtcy5lbnRyaWVzKCkpLm1hcCgoW2lkLCBuYW1lXSkgPT4gKHsgaWQsIG5hbWUgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHRoZSBuYW1lIGZvciBhIHBhc3NlZCBpZFxyXG4gIGdldE5hbWUoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5nZXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gRG9lcyB0aGUgbWFwIGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBpZC5cclxuICBoYXNJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmhhcyhpZCk7XHJcbiAgfVxyXG5cclxuICAvLyBFbXB0aWVzIHRoZSBsaXN0IG9mIHNlbGVjdGVkIGl0ZW1zIGluIHRoZSBtYXAuXHJcbiAgY2xlYXJJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnNldEl0ZW1zKFtdKTtcclxuICB9XHJcbn1cclxuIiwiLypcclxuICBUT0RPOiBTd2l0Y2ggdG8gdXNpbmcgaW50ZXJlY3Rpb24gb2JzZXJ2ZXJcclxuKi9cclxuXHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuLyoqXHJcbiAgQ2xhc3MgdG8gbWFuYWdlIHRoZSBsb2FkIG9uIHNjcm9sbCBmdW5jdGlvbmFsaXR5IGZvciBhIHBhZ2UuXHJcbiAgV2hlbiB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgc2VydmVyIHNpZGUgaXQgc2hvdWxkIGhpZGUgdGhlIGxvYWRlciBlbGVtZW50IGlmIG5vIG1vcmUgcmVzdWx0cyB0byBsb2FkLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VyaWVyTGF6eUxvYWRlciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICBDb25zdHJ1Y3RvclxyXG4gICAgUGFyYW1zXHJcbiAgICAgLSBsb2FkZXJFbGVtZW50IChyZXF1aXJlZCk6IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBsb2FkZXJcclxuICAgICAtIGxvYWRlckZuIChyZXF1aXJlZCk6IFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlIG9mIHJlc3VsdHMuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIGEgYm9vbCBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgbW9yZSBpdGVtcyB0byBsb2FkLlxyXG4gICAgIC0gY29uZmlnT2JqIChvcHRpb25hbCk6ICBBbiBvYmplY3Qgd2hvc2Uga2V5IGFuZCB2YWx1ZXMgd2lsbCBvdmVycmlkZSBkZWZhdWx0IGNvbmZpZyBzZXR0aW5ncy5cclxuICAqLyAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGxvYWRlckVsZW1lbnQsIFxyXG4gICAgICBsb2FkZXJGbiwgXHJcbiAgICAgIGNvbmZpZ09iaiA9IHt9XHJcbiAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAgRGVmYXVsdCBjb25maWcgc2V0dGluZ3NcclxuICAgICovXHJcbiAgICBjb25zdCBjb25maWdEZWZhdWx0cyA9IHtcclxuICAgICAgbG9hZGVyQ2xhc3M6ICdsb2FkZXInLCAgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudFxyXG4gICAgICBsb2FkZXJMb2FkaW5nQ2xhc3M6ICdsb2FkZXItLWxvYWRpbmcnLCAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgIGRlYm91bmNlTXM6IDEwMCwgLy8gaG93IGxvbmcgdG8gd2FpdCBiZXR3ZWVuIGV2ZW50cyBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIHBlZWtEaXN0YW5jZTogMCwgLy8gaG93IG11Y2ggb2YgbG9hZGluZyBlbGVtZW50IHNob3VsZCBiZSBvbiBzY3JlbiBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIGRlYnVnOiBmYWxzZSAgLy8gd2hldGhlciBvciBub3QgdG8gbG9nIGRlYnVnIGluZm8gdG8gY29uc29sZS5cclxuICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXJFbGVtZW50O1xyXG4gICAgdGhpcy5fbG9hZGVyRnVuYyA9IGxvYWRlckZuO1xyXG4gICAgdGhpcy5fbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICBcclxuICAgIC8vIE1lcmdlIHRoZSBkZWZhdWx0cyBhbmQgcGFzc2VkIGluIGNvbmZpZ1xyXG4gICAgdGhpcy5fY29uZmlnID0geyAuLi5jb25maWdEZWZhdWx0cywgLi4uY29uZmlnT2JqIH07XHJcbiAgICBcclxuICAgIC8vIFRyYWNrIHdoZXRoZXIgbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZCBvciByZW1vdmVkXHJcbiAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAgICBcclxuICAgICAgICBcclxuICAgIGlmICghdGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTnVsbCBsb2FkZXIgZWxlbWVudCBwcm92aWRlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgb24gdGhlIGxvYWRlcnMgY2xhc3MgZnJvbSB0aGUgY29uZmlnXHJcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyQ2xhc3MpO1xyXG4gICAgXHJcbiAgICAvLyBEZWJvdW5jZSB0aGUgY2hlY2tcclxuICAgIHRoaXMuX2xhenlMb2FkQ2hlY2sgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuX2RvTG9hZE1vcmVDaGVjaygpKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQ2FsbGluZyBsb2FkIG1vcmUgZnVuY3Rpb24nKTtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKTtcclxuICAgICAgICB0aGlzLl9zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2FsbCB0aGUgc2VhcmNoIGZ1bmN0aW9uICYgcGFzcyBpbiB0aGUgZG9uZSBzZWFyY2hpbmcgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLl9sb2FkZXJGdW5jKHRoaXMuX2RvbmVTZWFyY2hpbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vdCByZWFkeSB0byByZWxvYWQgeWV0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWJvdW5jZU1zKTtcclxuICAgIFxyXG4gICAgLy8gQWRkIHRoZSBldmVudHMgKGFsc28gZG9lcyBpbml0aWFsIGNoZWNrKVxyXG4gICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgIHRoaXMuX2RvbmVTZWFyY2hpbmcgPSB0aGlzLl9kb25lU2VhcmNoaW5nLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIFxyXG4gIF9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkodmlzaWJsZSkge1xyXG4gICAgaWYodmlzaWJsZSkge1xyXG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRrbGUgcmVzdWx0cyBjb21pbmcgYmFjayBpblxyXG4gIF9kb25lU2VhcmNoaW5nKG1vcmVUb0xvYWQpIHtcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coYF9kb25lU2VhcmNoaW5nIGNhbGxiYWNrIGNhbGxlZCB3aXRoIG1vcmUgdG8gbG9hZCAke21vcmVUb0xvYWR9YCk7XHJcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKSBcclxuICAgIGlmIChtb3JlVG9Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0FsbCBkb25lIC0gaGlkaW5nIGxvYWRlciBlbGVtZW50Jyk7XHJcbiAgICAgIHRoaXMuX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFdpcmUgdXAgZXZlbnQgbGlzdGVuZXJzIGFuZCBkbyBpbml0aWFsIGNoZWNrLlxyXG4gIF9zdGFydExpc3RlbmluZygpIHtcclxuICAgIGlmICghdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHsgICAgICBcclxuICAgICAgdGhpcy5fbWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWRkZWQnKTtcclxuICAgICAgdGhpcy5fbGF6eUxvYWRDaGVjaygpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhbHJlYWR5IGluIHBsYWNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXHJcbiAgX3N0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHtcclxuICAgICAgdGhpcy5fbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgICBcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIHJlbW92ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vIExpc3RlbmVycyB0byByZW1vdmUnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gSGVscGVyIHRvIGxvZyBvbmx5IGlmIGRlYnVnZ2luZyBlbmFibGVkXHJcbiAgX2NvbmRpdGlvbmFsRGVidWdMb2codG9EZWJ1ZywgbG9nZ2VyRnVuYyA9IGNvbnNvbGUubG9nLCApIHtcclxuICAgIGlmICh0aGlzLl9jb25maWcuZGVidWcpIHtcclxuICAgICAgbG9nZ2VyRnVuYyh0b0RlYnVnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBEbyB0aGUgY2hlY2sgdG8gc2VlIGlmIHNjcmVlbiBzb21ld2hlcmUgaXQgc2hvdWxkIGJlIGxvYWRlZC5cclxuICBfZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcclxuXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB0aGlzLl9tYWluLnNjcm9sbFRvcCArIHRoaXMuX21haW4uY2xpZW50SGVpZ2h0OyAvL3dpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gIHRoaXMuX21haW4uc2Nyb2xsSGVpZ2h0OyAvL2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxyXG4gICAgY29uc3QgcGVla1Bvc2l0aW9uVmlzaWJsZSA9IGhpZ2hlc3RWaXNpYmxlWVBvcyA+PSBsb2FkTW9yZVRyaWdnZXJQb3M7XHJcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XHJcbiAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0RvaW5nIGxvYWQgbW9yZSBjaGVjayAuLi4nKTsgICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXHJcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxyXG4gICAgICAnQ29uZmlnIHBlZWsgZGlzdGFuY2UnOiB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlLFxyXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxyXG4gICAgICAvLydDdXJyZW50IFkgcG9zaXRpb24gb2Ygc2Nyb2xsJzogd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAvLyAnVGhlIGludGVybmFsIHNpemUgb2YgdGhlIHdpbmRvdyc6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgJ1RoZSBtYXggeSBwb3NpdGlvbiB2aXNpYmxlJzogaGlnaGVzdFZpc2libGVZUG9zLFxyXG4gICAgICAnVGhlIGhlaWdodCBvZiBkb2N1bWVudCc6IGRvY3VtZW50SGVpZ2h0LFxyXG4gICAgICAnSXMgcGVlayBwb3NpdGlvbiB2aXNpYmxlJzogcGVla1Bvc2l0aW9uVmlzaWJsZSxcclxuICAgICAgJ0lzIHRoZSBsb2FkIG1vcmUgcG9zaXRpb24gdmlzaWJsZSwgb3IgYXQgZG9jIGVuZCc6IHNob3VsZExvYWRNb3JlLFxyXG4gICAgfSwgY29uc29sZS50YWJsZSk7IFxyXG4gICAgXHJcbiAgICByZXR1cm4gc2hvdWxkTG9hZE1vcmU7XHJcbiAgfTtcclxufVxyXG5cclxuLypcclxuXHJcbmRvTG9hZE1vcmVDaGVjaygpIHsgICAgXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSAodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpOyAgLy8gTWF0aC5taW4oKHRoaXMuX2xvYWRlci5vZmZzZXRUb3AgKyB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlKSwgZG9jdW1lbnRIZWlnaHQpOyBcclxuICAgIGNvbnN0IHBlZWtQb3NpdGlvblZpc2libGUgPSBoaWdoZXN0VmlzaWJsZVlQb3MgPj0gbG9hZE1vcmVUcmlnZ2VyUG9zO1xyXG4gICAgY29uc3Qgc2hvdWxkTG9hZE1vcmUgPSBwZWVrUG9zaXRpb25WaXNpYmxlO1xyXG4gICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdEb2luZyBsb2FkIG1vcmUgY2hlY2sgLi4uJyk7ICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyh7IFxyXG4gICAgICAnVG9wIHBvc2l0aW9uIG9mIGxvYWRlciBlbGVtZW50JzogdGhpcy5fbG9hZGVyLm9mZnNldFRvcCxcclxuICAgICAgJ0NvbmZpZyBwZWVrIGRpc3RhbmNlJzogdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSxcclxuICAgICAgJ1kgY28tb3JkaW5hdGUgd2hlbiBtb3JlIHNob3VsZCBiZSBsb2FkZWQgKGluY2x1ZGluZyBwZWVrLCBjb25zdHJhaW5lZCB0byBkb2MgaGVpZ2h0KSc6IGxvYWRNb3JlVHJpZ2dlclBvcyxcclxuICAgICAgJ0N1cnJlbnQgWSBwb3NpdGlvbiBvZiBzY3JvbGwnOiB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXHJcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXHJcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxyXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXHJcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcclxuICB9O1xyXG5cclxuKi8iLCJcclxuaW1wb3J0IHtTZWVBbGxBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4vU2VlQWxsSGVscGVyJztcclxuXHJcbm5ldyBTZWVBbGxBdHRyaWJ1dGVIZWxwZXIoKTtcclxuIiwiLyoqXHJcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLWNvbnRhaW5lci1pZD1cIjw8aWQgb2YgY29udGFpbmVyIHRvIGJlIGVmZmVjdGVkPj5cIlxyXG4gKiBcclxuICogIE9QVElPTkFMOiBVc2UgdGhlIGZvbGxvd2luZyBhdHRydGlidXRlcyB0byBhZGp1c3QgdGhlIGJlaGF2aW9yXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tbGltaXQ9XCIyMFwiIC0gc2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgaW5pdGlhbGx5LiAgRGVmYXVsdCBpcyAxMFxyXG4gKiAgXHJcbiAqICBkYXRhLXNob3dhbGwtY291bnQtaWQgLSBpZCBvZiBhIGZpZWxkIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgd2l0aCBhIGNvdW50IG9mIHRoZSBpdGVtc1xyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC1pdGVtLXNlbGVjdG9yIC0gYSBzZWxlY3RvciB0byBnZXQgdGhlIGl0ZW0gZnJvbSB3aXRoIHRoZSBjb250YWluZXIuICBUaGlzIGlzIHJlcXVpcmVkIGlmIHRoZSBjb250YWluZXIgaXMgbm90IGEgdGFibGVcclxuICovXHJcblxyXG4gZXhwb3J0IGNsYXNzIFNlZUFsbEF0dHJpYnV0ZUhlbHBlciB7XHJcbiAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdmFyIHNob3dNb3JlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkXScpO1xyXG5cclxuICAgICAgICBzaG93TW9yZUJ1dHRvbnMuZm9yRWFjaChzaG93QWxsQnV0dG9uID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkXCIpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbVNlbGVjdG9yID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtaXRlbS1zZWxlY3RvclwiKTtcclxuICAgICAgICAgICAgdmFyIHNob3dBbGxJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xyXG4gICAgICAgICAgICB2YXIgc2hvd0FsbEl0ZW1Db3VudElkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtY291bnQtaWRcIik7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25JZCA9IHNob3dBbGxCdXR0b24uaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yVG9Vc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclRvVXNlID0gYCMke2NvbnRhaW5lcklkfSAke2l0ZW1TZWxlY3Rvcn1gO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSBcIlRBQkxFXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yVG9Vc2UgPSBgIyR7Y29udGFpbmVySWR9IHRib2R5IHRyYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBjaGlsZCBzZWxlY3RvciBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBwYXJzZWRJdGVtTGltaXQgPSBwYXJzZUludChzaG93QWxsSXRlbUxpbWl0LCAxMCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZWRJdGVtTGltaXQpKSB7IFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zLCBpdGVtTGltaXQ6IHBhcnNlZEl0ZW1MaW1pdH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNob3dBbGxJdGVtQ291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zLCBjb3VudEZpZWxkSWQ6IHNob3dBbGxJdGVtQ291bnRJZH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5ldyBTZWVBbGxIZWxwZXIoc2VsZWN0b3JUb1VzZSwgYCMke2J1dHRvbklkfWAsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWVBbGxIZWxwZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGl0ZW1zU2VsZWN0b3IsIHNlZUFsbFNlbGVjdG9yLCBwYXNzZWRPcHRpb25zID0ge30pIHtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNTZWxlY3RvciA9IGl0ZW1zU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fc2VlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWVBbGxTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2VlQWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFJ1bm5pbmcgb24gYSBwYWdlIHdpdGhvdXQgc2VlIGFsbCBidXR0dG9uLCBzbyBzdG9wIGFmdGVyIGNvdW50cy5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGwgPSB0aGlzLl9zZWVBbGwuc3R5bGUuZGlzcGxheTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7IGl0ZW1MaW1pdDogNSwgc2hvd0xlc3NUZXh0OiBcIlNlZSBMZXNzXCIsIGNvdW50RmllbGRJZDogbnVsbCB9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLmRlZmF1bHRzLCAuLi5wYXNzZWRPcHRpb25zIH07XHJcbiAgICAgICAgdGhpcy5faXRlbUxpbWl0ID0gdGhpcy5fb3B0aW9ucy5pdGVtTGltaXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3Nob3dMZXNzVGV4dCA9IHRoaXMuX29wdGlvbnMuc2hvd0xlc3NUZXh0O1xyXG4gICAgICAgIHRoaXMuX3Nob3dNb3JlVGV4dCA9IHRoaXMuX3NlZUFsbC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fY291bnRGaWVsZCA9IHRoaXMuX29wdGlvbnMuY291bnRGaWVsZElkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fb3B0aW9ucy5jb3VudEZpZWxkSWQpIDogbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ0FsbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9zZWVBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvd2luZ0FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZUV4Y2Vzc0l0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93QWxsSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ0FsbCA9ICF0aGlzLl9zaG93aW5nQWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWVBbGwudGV4dENvbnRlbnQgPSB0aGlzLl9zaG93aW5nQWxsID8gdGhpcy5fc2hvd0xlc3NUZXh0IDogdGhpcy5fc2hvd01vcmVUZXh0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dBbGxJdGVtcygpIHtcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVFeGNlc3NJdGVtcygpIHtcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gdG9DaGVjayA+IHRoaXMuX2l0ZW1MaW1pdCA/XHJcbiAgICAgICAgICAgICAgICBcIm5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsY3VsYXRlKCkgeyAgICBcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pdGVtc1NlbGVjdG9yKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb3VudEZpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvdW50RmllbGQudGV4dENvbnRlbnQgPSB0aGlzLl9hbGxJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fc2VlQWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxJdGVtcy5sZW5ndGggPD0gdGhpcy5faXRlbUxpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcyA9IHRoaXMuX2FsbEl0ZW1zWzBdLnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2VlQWxsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZlNlZUFsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2hvd2luZ0FsbCkgIHsgdGhpcy5faGlkZUV4Y2Vzc0l0ZW1zKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCIvKioqKioqIFxyXG5cclxuICBDcmVhdGVzIGEgdGFnIGxpc3QgZnJvbSBhIHNlbGVjdCBlbGVtZW50XHJcblxyXG4gIHVzYWdlOlxyXG5cclxuICBuZXcgU2VsZWN0TGlzdFRhZyhzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYykuXHJcblxyXG4gIC0gc2VsZWN0SWQgKHJlcXVpcmVkKTogVGhlIGlkIG9mIHRoZSBzZWxlY3QgZWxlbWVudCBhY3RpbmcgYXMgdGhlIHNvdXJjZSAobXVzdCBoYXZlIG11bHRpcGxlIGF0dHJpYnV0ZSwgYW5kIGFsbCBpdGVtcyBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkKVxyXG5cclxuICAtIHJldmVydEdyb3VwcyAob3B0aW9uYWwpOiBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNsaWNrZWQgdG8gcmV2ZXJ0IHNlbGVjdGVkIG9wdGlvbnMgKHNob3VsZCBoYXZlIGlzLWhpZGRlbiBjbGFzcyB0byBzdGFydClcclxuXHJcbiAgLSBvblVwZGF0ZUZ1bmMgKHJlcXVpcmVkKTogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIHRhZyBoYXMgYmVlbiByZW1vdmVkLCBvciBvcHRpb25zIGFyZSByZXZlcnRlZC4uIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gcGFyYW1zLCBzZWxlY3RlZE9wdGlvbnMgYW5kIGFsbE9wdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBpbnRlbmRlZCB0byBtYWtlIHRoZSBjb250cm9sIG1vcmUgZmxleGlibGUgaS5lLiBvdXIgZmlyc3QgdXNhZ2UgaXMgdG8gdXBkYXRlIGxhYmVsIHdpdGggc2VsZWN0ZWQgaXRlbXMgdGV4dCBlbHNld2hlcmUgb24gcGFnZSB3aXRob3V0IGZ1cnRoZXIgY291cGxpbmcuXHJcblxyXG4gIC0gaXRlbXMgKG9wdGlvbmFsKTogIEh0bWwgb3B0aW9uIGVsZW1lbnRzIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHVuZGVybHlpbmcgc2VsZWN0IGxpc3QgYmVmb3JlIHRhZ3MgZ2VuZXJhdGVkLiBcclxuXHJcbioqKioqKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TGlzdFRhZ3Mge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jID0gKCkgPT4ge30sIG9wdGlvbnMgPSBudWxsKSB7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jID0gb25VcGRhdGVGdW5jO1xyXG5cclxuICAgICAgdGhpcy50YWdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpO1xyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcblxyXG4gICAgICBpZiAocmV2ZXJ0R3JvdXBzSWQpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJldmVydEdyb3Vwc0lkKTtcclxuICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcclxuICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IHRoaXMudGFnT3B0aW9ucy5hcHBlbmRDaGlsZChvKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE5vdyBoYW5kbGVzIHBhc3NlZCBpbiBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICB0aGlzLmFsbE9wdGlvbnMgPSBvcHRpb25zIHx8IFsuLi50aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldO1xyXG5cclxuICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuICYmIHRoaXMuYWxsT3B0aW9ucy5zb21lKG8gPT4gIW8uc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcclxuICAgICAgdGhpcy50YWdzLmNsYXNzTGlzdC5hZGQoJ3RhZ3MnKTtcclxuICAgICAgdGhpcy50YWdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJ2knKSkge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0VmFsID0gZS50YXJnZXQuZGF0YXNldC52YWw7XHJcbiAgICAgICAgICBjb25zdCBvID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicrdGFyZ2V0VmFsKydcIl0nKTtcclxuICAgICAgICAgICAgICBpZihvKXtcclxuICAgICAgICAgICAgICAgICAgby5zZWxlY3RlZCA9IGZhbHNlOyAgIFxyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTsgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YWdPcHRpb25zLmFmdGVyKHRoaXMudGFncyk7XHJcblxyXG4gICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVUYWdzKCkge1xyXG4gICAgICB0aGlzLnRhZ3MuaW5uZXJIVE1MID0gJyc7ICAgICAgXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWxsT3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKTtcclxuICAgICAgc2VsZWN0ZWRPcHRpb25zLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWdzLmFwcGVuZENoaWxkKHRoaXMubWFrZVRhZyh0LmlubmVyVGV4dCwgdC52YWx1ZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMoc2VsZWN0ZWRPcHRpb25zLCB0aGlzLmFsbE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICBtYWtlVGFnKHRleHQsIHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGkuY2xhc3NMaXN0LmFkZChcImJ1dHRvbl9faWNvblwiKTsgICAgICBcclxuICAgICAgaS5kYXRhc2V0LnZhbD12YWx1ZTtcclxuICAgICAgaS5pbm5lclRleHQgPSBcImNsZWFyXCJcclxuXHJcbiAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnJyk7XHJcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XHJcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0YWc7XHJcbiAgICB9O1xyXG5cclxuICAvLyBEZXNlbGVjdCBhbGwgdGhlIG9wdGlvbnMgaW4gdGhlIHVuZGVybHlpbmcgc2VsZWN0IGxpc3QuICBPcHRpb25hbGx5IHJlZ25lcmF0ZWQgdGhlIHRhZ3MgbGlzdC4gXHJcbiAgLy8gT3B0aW9uYWwgYXMgbm90IHdvcnRoIG92ZXJoZWFkIGlmIGRvbnQgbmVlZCBpdC4gXHJcbiAgY2xlYXJJdGVtcyhyZXBvbHVsYXRlVGFncyA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IGZhbHNlKTtcclxuXHJcbiAgICBpZiAocmVwb2x1bGF0ZVRhZ3MpIHsgICAgICBcclxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNob3VsZCBoYXZlIGEgc2VjdGlvbiBsaWtlIHRoaXMgZm9yIGVhY2ggcGFnZSB0aGUgY29udHJvbCBpcyB1c2VkIG9uLCB1bmxlc3Mgd2Ugd2FudCBpdCBiZWhhdmUgZXhhY3RseSB0aGUgc2FtZSBhcyBhIHByZXZpb3VzIHZlcnNpb24gKGluY2x1ZGluZyBpZHMgYW5kIHVwZGF0ZSBmdW5jdGlvbikgXHJcbi8vICpCZXR0ZXIgc3RpbGwqIC0gaGF2ZSBpbiBzZXBlcmF0ZSBzY3JpcHQgZmlsZSBzY29wZWQgdG8gc3BlY2lmaWMgcGFnZSAobGlrZSB3aXRoIFNlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcylcclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InKSkge1xyXG5cclxuICAvLyBQcmVwYXJlIGFuIHVwZGF0ZSBmdW5jdGlvbiBpZiByZXF1aXJlZCAob3B0aW9uYWwgcGFyYW1ldGVyKVxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VHcm91cHNMYWJlbFNwYW4nKTtcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCBwbHVyYWxpc2VkR3JvdXBzID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMSA/ICdncm91cCcgOiAnZ3JvdXBzJztcclxuICAgIHNwYW4uaW5uZXJUZXh0ID0gYFNlbmQgdG8gJHtzZWxlY3RlZE9wdGlvbnMubGVuZ3RofSByZXNwb25zZSAke3BsdXJhbGlzZWRHcm91cHN9YDtcclxuICB9XHJcblxyXG4gIC8vIEluaXRpYWxpc2UgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbnRyb2xcclxuICBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicsICdyZXZlcnRfZ3JvdXBzJywgb25VcGRhdGVGdW5jKTsgXHJcbn1cclxuIiwiLy8gU3RvcmUgYSBzaW1wbGUgdmFsdWUgaW4gYSBjb29raWVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlQ29va2llSGVscGVye1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdGlhbGlzZSgpIHtcclxuICAgICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBkb2N1bWVudC5jb29raWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWVTdHJpbmcuc3BsaXQoJzsgJyk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDb29raWUgPSBjb29raWVzLmZpbmQoYyA9PiBjLnN0YXJ0c1dpdGgoYCR7dGhpcy5fbmFtZX09YCkpO1xyXG5cclxuICAgICAgICB0aGlzLl92YWx1ZSA9IG1hdGNoaW5nQ29va2llID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoaW5nQ29va2llLnNwbGl0KCc9JylbMV0pIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q29va2llID0gYCR7dGhpcy5fbmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfTsgcGF0aD0vOyBzYW1lc2l0ZT1TdHJpY3RgXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmV3Q29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG4vLyBSZW1vdmUgdGhlIG5vLWpzIGNsYXNzIHNvIHdlIGFyZSBhYmxlIHRvIHRlbGwgdGhhdCBqcyBpcyBlbmFibGVkXHJcbi8vIFVzZWZ1bCBmb3IgaGlkaW5nIGVsZW1lbnRzIHdoZW4ganMgbm90IGF2YWlsYWJsZS5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2pzJyk7IiwiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZXMnKSAhPSBudWxsKSB7XHJcblxyXG5cclxuICAgIChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSByZXNwb25zZSBmaWVsZHMgYW5kIHRoZSByZXNwb25zZSBsaXN0XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLWZpZWxkJyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb25zLWxpc3QnKTtcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGhlIGVtcHR5IHJlc3BvbnNlIGZpZWxkc1xyXG4gICAgICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJykgLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YXNldC5rZXkgPSBpZHg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJldmVhbHMgdGhlIGZpcnN0IGhpZGRlbiBpdGVtXHJcbiAgICAgICAgY29uc3Qgc2hvd0ZpcnN0RW1weUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVzcG9uc2UgPSByZXNwb25zZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNwb25zZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBXaGVuIGFuIGl0ZW0gaXMgcmVtb3ZlZCwgY29weSBhbGwgdmFsdWVzIGZvcndhcmQgdG8gZmlsbCBnYXBzXHJcbiAgICAgICAgY29uc3QgY29weUl0ZW1zRm9yd2FyZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSBpbmRleCArIDE7IGlkeCA8IHJlc3BvbnNlcy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2SW5wdXQgPSByZXNwb25zZXNbaWR4LTFdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKTs7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHJlc3BvbnNlc1tpZHhdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIHByZXZJbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCByZW1vdmVMYXN0RW1wdHlJdGVtID0gKHJlbW92ZUlkeCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXMgYWxsIGNvcGllZCBmb3J3YXJkIGJsYW5rIGxhc3QgaXRlbSBvdXRcclxuICAgICAgICAgICAgcmVzcG9uc2VzW3Jlc3BvbnNlcy5sZW5ndGgtMV0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggYmFja3dhcmRzIGFuZCBoaWRlIGxhc3QgdmlzaWJsZSBpdGVtXHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IChyZXNwb25zZXMubGVuZ3RoLTEpOyBpZHggPj0gcmVtb3ZlSWR4OyBpZHgtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1tpZHhdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlc1tpZHhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWRkUmVzcG9uc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9yZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgc2hvd0ZpcnN0RW1weUl0ZW0oKTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmVzcG9uc2VzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtcmVzcG9uc2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVJZHggPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvcHlJdGVtc0ZvcndhcmQocmVtb3ZlSWR4KTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RFbXB0eUl0ZW0ocmVtb3ZlSWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkoKTtcclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmUnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRQaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRQaG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUGhvbmVCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZFBob25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KShcImFkZFBob25lXCIpO1xyXG5cclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRW1haWwnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRW1haWxCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZEVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KShcImFkZEVtYWlsXCIpO1xyXG5cclxufVxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzYXZlR3JvdXBCdXR0b24gIT1udWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pKFwiYWRkX2dyb3VwXCIpO1xyXG59XHJcblxyXG52YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbmlmIChncm91cFRleHRhcmVhICE9IG51bGwpIHtcclxuICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXQyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQyLm1hdGNoZXMoXCIuYnV0dG9uX19pY29uXCIpICYmIHRhcmdldDIuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG5cclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKSAhPW51bGwpIHtcclxuXHJcbiAgICB2YXIgaW5wdXRFcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJyk7XHJcbiAgICB2YXIgaW5wdXRFcnJvcnNBcnJheSA9IE9iamVjdC5rZXlzKGlucHV0RXJyb3JzKTtcclxuXHJcbiAgICBpbnB1dEVycm9yc0FycmF5LmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEVycm9yc1trZXldKTtcclxuICAgICAgICBpbnB1dEVycm9yc1trZXldLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbi8vICAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xyXG4vLyAgICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2lkZWJhclwiKS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG5cclxuLy8gfSkoXCIjU2lkZWJhclwiKTtcclxuXHJcbiIsIi8qIFxyXG4gIERlYm91bmNlIGZ1bmN0aW9uIHByZXZlbnQgZXhjZXNzaXZlIGNhbGxzIG9uIHNjcm9sbC5cclxuICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXHJcbiovXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcclxuXHR2YXIgdGltZW91dDtcclxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0fTtcclxufTsiLCJcclxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIGNvbnN0IHNuYWNrYmFyU3RvcmFnZUl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NuYWNrYmFyJyk7XHJcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cclxuXHJcbiAgICAvLyBjaGVjayBpZiBsb2NhbFN0cm9yYWdlICdzbmFja2JhcicgZXhpc3RzIGFuZCBpZiBpdCBkb2VzbnQgc2V0dXAgb2JqZWN0IHJlYWR5IGZvciBldmVudExpc3RlbmVyXHJcbiAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gSlNPTi5wYXJzZShzbmFja2JhclN0b3JhZ2VJdGVtKTtcclxuXHJcbiAgICAgICAgLy9jaGVjayBpZiBsb2NhbFN0cm9yYWdlICdzbmFja2JhcicgYWxyZWFkeSBjb250YWlucyBjdXJyZW50IHBhZ2UgcGF0aFxyXG4gICAgICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgICAgICAgLy9pZiBpdCBkb2VzIHRoZW4gaGlkZSB0aGUgc25hY2tiYXJcclxuICAgICAgICAgICAgc25hY2tiYXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gIHtcclxuICAgICAgICAgICAgbG9jYXRpb25zIDogbmV3IEFycmF5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChzbmFja2Jhcikge1xyXG4gICAgICAgIHNuYWNrYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBpZiAoIXNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NuYWNrYmFyJywgSlNPTi5zdHJpbmdpZnkoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSkoXCIjaGludC1zbmFja2JhclwiKTtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICBXaXJlIHVwIHRhYmxlcyBzbyB0aGF0IHdob2xlIHJvdyBjYW4gYmUgY2xpY2tlZCwgcmF0aGVyIHRoYW4gaW5kaXZpZHVhbCBjZWxsc1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIEdldCBhbGwgdGFibGUgcm93cyB0aGF0IHNob3VsZCBiZSBjbGlja2FibGVcclxuY29uc3Qgcm93c1RvTGlua2lmeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlW2RhdGEtbGlua2FibGUtY2VsbF0gPiB0Ym9keSA+IHRyJyk7XHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lciB0byBoYW5kbGUgY2xpY2tcclxuY29uc3QgaGFuZGxlUm93Q2xpY2sgPSBlID0+IHtcclxuXHJcbiAgLy8gRmluZCB0aGUgY29sdW1uIHRoYXQgc2hvdWxkIGNvbnRhaW4gdGhlIGxpbmtcclxuICBjb25zdCB0YWJsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RhYmxlJyk7XHJcbiAgY29uc3QgY29sVG9QYXJzZSA9IHRhYmxlLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rYWJsZS1jZWxsJyk7XHJcblxyXG4gIC8vIEdldCB0aGUgY2xpY2tlZCByb3csIGFzIG1heWJlIGEgdGQgY2xpY2tlZC5cclxuICBjb25zdCByb3cgPSBlLnRhcmdldC5jbG9zZXN0KCd0cicpO1xyXG5cclxuICB0cnkge1xyXG4gICAgICAvLyBUcnkgYW5kIGZpbmQgdGhlIGxpbmsgdGhhdCBzaG91bGQgYmUgY2xpY2tlZC5cclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNvbFRvUGFyc2UsMTApICsgMTtcclxuICAgIGNvbnN0IGxpbmsgPSByb3cucXVlcnlTZWxlY3RvcihgdGQ6bnRoLWNoaWxkKCR7Y29sfSkgYWApO1xyXG4gICAgXHJcbiAgICAvLyBDbGljayB0aGUgbGluayBvciByZXBvcnQgZmFpbHVyZSB0byBmaW5kXHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gbGluayBmb3VuZCBpbiBjb2x1bW4gc3BlY2lmaWVkIGJ5IFtkYXRhLWxpbmthYmxlLWNlbGxdJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoIHtcclxuICAgIC8vIFdhcm4gb2YgaW52YWxpZCBjb2x1bW4gc3BlY2lmaWVkLlxyXG5cdGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdmFsdWUgc3BlY2lmaWVkIGJ5IFtkYXRhLWxpbmthYmxlLWNlbGxdJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gV2lyZSB1cCB0aGUgbGlzdGVuZXJzXHJcbnJvd3NUb0xpbmtpZnkuZm9yRWFjaChyb3cgPT4gcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUm93Q2xpY2spKTsiLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkgICYmIG1lbnVDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSgnI21lbnUnKTsiLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzdGFmZiBjb21wb3NlIHBhZ2UuXHJcbiovXHJcblxyXG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4uL1NpbXBsZUNvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBJZFNlc3Npb25TdG9yYWdlSGVscGVyIGZyb20gJy4uL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXInO1xyXG5pbXBvcnQgU2VsZWN0TGlzdFRhZ3MgZnJvbSAnLi4vU2VsZWN0TGlzdFRhZ3MnO1xyXG5pbXBvcnQge1NlZUFsbEhlbHBlcn0gZnJvbSAnLi4vU2VlQWxsSGVscGVyJztcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5pZiAobWFpbiAmJiBtYWluLmNsYXNzTGlzdC5jb250YWlucygnYXNjLXN0YWZmLWNvbXBvc2UnKSkge1xyXG5cclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NvbnRhY3QnKTtcclxuICBjb25zdCBzdWJqZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViamVjdF9pbnB1dCcpO1xyXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnB1dF9NZXNzYWdlJyk7XHJcbiAgY29uc3QgcmVzZW5kSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRfQXV0b1Jlc2VuZFNjaGVkdWxlJyk7XHJcbiAgY29uc3QgcmVzcG9uc2VPcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2Utb3B0aW9uJykpO1xyXG5cclxuICBjb25zdCBjb29raWVIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVRpdGxlJyk7XHJcbiAgY29uc3QgY29va2llTWVzc2FnZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlQ29udGVudCcpO1xyXG4gIGNvbnN0IGNvb2tpZUF1dG9SZXNlbmRIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVJlc2VuZCcpO1xyXG4gIGNvbnN0IGNvb2tpZVJlc3BvbnNlSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VSZXNwb25zZXMnKTtcclxuICBjb25zdCBpZHNTZXNzaW9uSGVscGVyID0gbmV3IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVXNlcnMnKTtcclxuICBcclxuICBjb25zdCBnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5vbkVtcHR5T3B0aW9ucyA9IHJlc3BvbnNlT3B0aW9ucy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICBpZiAoY3Vyci52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBjdXJyLnZhbHVlXTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbm9uRW1wdHlPcHRpb25zLmpvaW4oJ3x8Jyk7XHJcbiAgfTtcclxuXHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29va2llSGVscGVyLnNldChzdWJqZWN0SW5wdXQudmFsdWUpO1xyXG4gICAgY29va2llTWVzc2FnZUhlbHBlci5zZXQobWVzc2FnZUlucHV0LnZhbHVlKTtcclxuICAgIGNvb2tpZUF1dG9SZXNlbmRIZWxwZXIuc2V0KHJlc2VuZElucHV0LnZhbHVlKTsgIFxyXG4gICAgY29va2llUmVzcG9uc2VIZWxwZXIuc2V0KGdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0YWdzU2VlQWxsSGVscGVyID0gbmV3IFNlZUFsbEhlbHBlcignI0FzY1N0YWZmU2VsZWN0b3IgKyBkaXYgPiAudGFnJywgJyNzZWVNb3JlUmVjaXBpZW50cycsIHsgaXRlbUxpbWl0OiAyMSwgY291bnRGaWVsZElkOiAncmVjaXBpZW50c0NvdW50JyB9KTtcclxuICBcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBpZHNTZXNzaW9uSGVscGVyLmZpbHRlckJ5SWRzKHNlbGVjdGVkT3B0aW9ucy5tYXAoeCA9PiB4LnZhbHVlKSk7XHJcbiAgICB0YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RPcHRpb25zID0gaWRzU2Vzc2lvbkhlbHBlci5nZXRJdGVtcygpLm1hcCgoe2lkLCBuYW1lfSk9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICBvcHRpb24udmFsdWUgPSBpZDtcclxuICAgIG9wdGlvbi5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxuICB9KTtcclxuICBcclxuICBjb25zdCBzbHQgPSBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0FzY1N0YWZmU2VsZWN0b3InLCBudWxsLCBvblVwZGF0ZUZ1bmMsIHNlbGVjdE9wdGlvbnMpOyBcclxuXHJcbiAgdGFnc1NlZUFsbEhlbHBlci5yZWNhbGN1bGF0ZSgpO1xyXG5cclxuICBjb25zdCBkaXNjYXJkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkRpc2NhcmQnKTtcclxuICBkaXNjYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWRzU2Vzc2lvbkhlbHBlci5jbGVhckl0ZW1zKCk7XHJcbiAgICBzbHQuY2xlYXJJdGVtcygpO1xyXG4gICAgdGFnc1NlZUFsbEhlbHBlcigpO1xyXG4gIH0pO1xyXG5cclxuXHJcbn1cclxuIiwiXHJcbi8vIENoZWNrIHdlIGFyZSBvbiB0aGUgY29ycmVjdCBwYWdlLlxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbi5jb3VyaWVyLXByb2ZpbGUtcGFnZScpO1xyXG5cclxuaWYgKG1haW4pIHtcclxuXHJcbiAgICAvLyBHcmFiIGFsbCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBvbmx5IHNob3cgd2hlbiBqcyBlbmFibGVkXHJcbiAgICBjb25zdCBhZGRQaG9uZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZUJ0bicpO1xyXG4gICAgY29uc3QgYWRkRW1haWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRW1haWxCdG4nKTtcclxuICAgIGNvbnN0IHJlbW92ZUVtYWlsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKTtcclxuICAgIGNvbnN0IHJlbW92ZVBob25lQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpKTtcclxuICAgIFxyXG4gICAgLy8gU2hvdyBhbGwgdGhlIGpzIG9ubHkgYnV0dG9uc1xyXG4gICAgW2FkZFBob25lQnRuLCBhZGRFbWFpbEJ0biwgLi4ucmVtb3ZlRW1haWxCdXR0b25zLCAuLi5yZW1vdmVQaG9uZUJ1dHRvbnNdLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZW1haWxzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWVtYWlscycpO1xyXG4gICAgXHJcbiAgICBlbWFpbHNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdibGFuaycpO1xyXG4gICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBob25lcycpO1xyXG4gICAgXHJcbiAgICBwaG9uZXNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHsgICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYW5rJyk7XHJcbiAgICAgICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhbnkgZW1wdHkgcGhvbmUgYm94ZXMsIG9yIGVtYWlsIGJveGVzXHJcbiAgICBjb25zdCBoYXNFbXB0eUNvbnRhY3RCb3hlRm9yVHlwZSA9IChzZWN0aW9uLCBzZWxlY3RvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHNlY3Rpb25cclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAuc29tZSh4ID0+IHgudmFsdWUudHJpbSgpID09PSAnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNob3VsZCBub3QgaGF2ZSBhbmQgYWRkIGVtYWlsIGJ1dHRvbiBpZiBhbHJlYWR5IGEgYmxhbmsgb25lIGF2YWlsYWJsZVxyXG4gICAgY29uc3Qgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFBob25lQnRuLnN0eWxlLmRpc3BsYXkgPSBoYXNFbXB0eUNvbnRhY3RCb3hlRm9yVHlwZShwaG9uZXNTZWN0aW9uLCAnLmlucHV0LS1wcm9maWxlLXBob25lID4gaW5wdXQnKSA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hvdWxkIG5vdCBoYXZlIGFuZCBhZGQgcGhvbmUgYnV0dG9uIGlmIGFscmVhZHkgYSBibGFuayBvbmUgYXZhaWxhYmxlXHJcbiAgICBjb25zdCBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkRW1haWxCdG4uc3R5bGUuZGlzcGxheSA9ICBoYXNFbXB0eUNvbnRhY3RCb3hlRm9yVHlwZShlbWFpbHNTZWN0aW9uLCAnLmlucHV0LS1wcm9maWxlLWVtYWlsID4gaW5wdXQnKSA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHRoZSBmb3JtLCB0byBhZGQgcmVtb3ZlIGxpc3RlbmVycyB0b1xyXG4gICAgY29uc3QgY29udGFjdFByb2ZpbGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtcHJvZmlsZS1mb3JtJyk7ICAgXHJcblxyXG4gICAgWy4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fd2l0aGFjdGlvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGV4Y2VzcyBpbnB1dHMgb2YgdGhlc2UgdHlwZXMgb24gbG9hZCAoQWRkZWQgZm9yIG5vbiBqcyBwdXJwb3NlcykuXHJcbiAgICBbXCIuaW5wdXQtLXByb2ZpbGUtcGhvbmUgPiBpbnB1dFwiLCBcIi5pbnB1dC0tcHJvZmlsZS1lbWFpbCA+IGlucHV0XCJdLmZvckVhY2goc2VsZWN0b3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0c0ZvclNlbGVjdG9yID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dHNGb3JTZWxlY3Rvci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGlucHV0c0ZvclNlbGVjdG9yLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLXBob25lJywgJ0lucHV0LlBlcnNvbmFsUGhvbmVOdW1iZXJzJyk7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZXQgY29ycmVjdCBzdGFydCBzdGF0ZSBmb3IgZW1haWwgYW5kIHBob25lIGFkZCBidXR0b25zXHJcbiAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG5cclxuICAgIC8vIEFkZCBhIG5ldyBwaG9uZSByb3dcclxuICAgIGZ1bmN0aW9uIG5ld1Bob25lUm93KCkgeyAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Bob25lICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld1Bob25lLmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtcGhvbmVcIjtcclxuICAgICAgICBuZXdQaG9uZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm1fX2lucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgcGhvbmUgbnVtYmVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1yZW1vdmUgYnRuLXJlbW92ZS1jb250YWN0LXBob25lXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cInBob25lX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBuZXdQaG9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgZ2FwcyBpbiBpbmRleCBzZXF1ZW5jZXNcclxuICAgIGZ1bmN0aW9uIF9yZW51bWJlcklucHV0cyhzZWxlY3RvciwgaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucCA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucC5pZCA9IGAke2lkZW50aWZpZXJ9XyR7aW5kZXh9X2A7XHJcbiAgICAgICAgICAgIGlucC5uYW1lID0gYCR7aWRlbnRpZmllcn1bJHtpbmRleH1dYDtcclxuICAgICAgICAgICAgY29uc3Qgc3BuID0gaW5wdXQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICAgICAgICBzcG4uc2V0QXR0cmlidXRlKCdkYXRhLXZhbG1zZy1mb3InLCBgJHtpZGVudGlmaWVyfVske2luZGV4fV1gKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhIG5ldyBlbWFpbCByb3dcclxuICAgIGZ1bmN0aW9uIG5ld0VtYWlsUm93KCkgeyAgICBcclxuICAgICAgICBjb25zdCBuZXdFbWFpbFJvdyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgIFxyXG4gICAgICAgIG5ld0VtYWlsUm93LmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtZW1haWxcIjsgIFxyXG4gICAgICAgIG5ld0VtYWlsUm93LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybV9faW5wdXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJBZGQgYW4gZW1haWwgYWRkcmVzc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmVtb3ZlICBidG4tcmVtb3ZlLWNvbnRhY3QtZW1haWxcIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWVsZC12YWxpZGF0aW9uLXZhbGlkXCIgZGF0YS12YWxtc2ctZm9yPVwiZW1haWxfdmFsaWRhdGlvblwiIGRhdGEtdmFsbXNnLXJlcGxhY2U9XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIG5ld0VtYWlsUm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdpcmUgdXAgdGhlIGJ1dHRvbiBsaXN0ZW5lcnNcclxuICAgIGFkZFBob25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld1Bob25lUm93KCkpO1xyXG4gICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLXBob25lJywgJ0lucHV0LlBlcnNvbmFsUGhvbmVOdW1iZXJzJyk7XHJcbiAgICAgICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgYWRkRW1haWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCdzZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3RW1haWxSb3coKSlcclxuICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1lbWFpbCcsICdJbnB1dC5QZXJzb25hbEVtYWlsQWRkcmVzc2VzJyk7XHJcbiAgICAgICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICB9KTsgIFxyXG5cclxuICAgIC8vIEhhbmRsZSB0aGUgcmVtb3ZlIG9uIHRoZSBwYXJlbnQgZm9ybSwgc28gdGhhdCB3aWxsIHdvcmsgZm9yIG5ldyBpdGVtcyBhZGRlZCBhZnRlciBsb2FkLlxyXG4gICAgY29udGFjdFByb2ZpbGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpICB8fCBlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gR2V0IGFsbCB0aGUgaW5wdXRzIGluIHRoZSBwYXJlbnQgc2VjdGlvblxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dHMgPSBlLnRhcmdldC5jbG9zZXN0KCdzZWN0aW9uJykucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGJsYW5rIGl0IC0gZWxzZSByZW1vdmUgaXRcclxuICAgICAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0c1swXS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwYXJlbnQgZm9ybSBncm91cCBjb250YWluaW5nIGVtYWlsIG9yIHBob25lLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZSgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpKSB7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLXBob25lJywgJ0lucHV0LlBlcnNvbmFsUGhvbmVOdW1iZXJzJyk7XHJcbiAgICAgICAgICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSkge1xyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1lbWFpbCcsICdJbnB1dC5QZXJzb25hbEVtYWlsQWRkcmVzc2VzJyk7XHJcbiAgICAgICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiLyogXHJcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc2VhcmNoIHN0YWZmIHBhZ2UuXHJcbiovXHJcbmltcG9ydCBJZFNlc3Npb25TdG9yYWdlSGVscGVyIGZyb20gJy4uL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXInO1xyXG5pbXBvcnQgRHJhZnRNZXNzYWdlRHJhd2VyIGZyb20gJy4uL0RyYWZ0TWVzc2FnZURyYXdlcic7XHJcbmltcG9ydCBMYXp5TG9hZGVyIGZyb20gJy4uL0xhenlMb2FkZXInO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtaW5kZXgnKSkge1xyXG5cclxuICBjb25zdCBpZFNoID0gbmV3IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVXNlcnMnKTtcclxuICBjb25zdCBkbWQgPSBuZXcgRHJhZnRNZXNzYWdlRHJhd2VyKGlkU2guZ2V0Q291bnQoKSk7XHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG5cclxuICBjb25zdCBhbGxDaGVja2JveGVzSW5UYWJsZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0YWJsZS1zZWxlY3Qtc3RhZmYgW3R5cGU9Y2hlY2tib3hdXCIpKTtcclxuXHJcbiAgLy8gQ2hlY2sgYWxsIGl0ZW1zIGluIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3QgaXRlbXNUaGF0U2hvdWxkQmVTZWxlY3RlZCA9IGFsbENoZWNrYm94ZXNJblRhYmxlLmZpbHRlcihjYiA9PiBpZFNoLmhhc0lkKGNiLnZhbHVlKSk7XHJcbiAgaXRlbXNUaGF0U2hvdWxkQmVTZWxlY3RlZC5mb3JFYWNoKGkgPT4gaS5jaGVja2VkID0gdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGFsbENoZWNrYm94ZXNTZWxlY3RlZCA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLmV2ZXJ5KGNiID0+IGNiLmNoZWNrZWQpO1xyXG4gIFxyXG4gIC8vIGNvbnN0IGFsbENvbnRhY3RJZHMgPSAoKSA9PiBhbGxDaGVja2JveGVzSW5UYWJsZS5tYXAoY2IgPT4gY2IudmFsdWUpO1xyXG4gIGNvbnN0IGFsbENvbnRhY3RzID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUubWFwKGNiID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBjYi52YWx1ZSxcclxuICAgICAgbmFtZTogY2IuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhY3QtbmFtZScpXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFVzZXMgYSBwYXNzZWQgaW4gJ2NvbWJpbmVyJyBmdW5jdGlvbiB0byBkZWNpZGVkIGhvdyB0byBlaXRoZXIgYWRkIG9yIHJlbW92ZSBzZWxlY3RlZCByZXN1bHRzIHRvIHRob3NlIGZyb20gb3RoZXIgcGFnZXMuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0aW9uZENoYW5nZU1lcmdlID0gKGNvbWJpbmVGbikgPT4ge1xyXG4gICAgY29uc3QgYWxsQ29udGFjdHNEaXNwbGF5ZWQgPSBhbGxDb250YWN0cygpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdDb250YWN0cyA9IGlkU2guZ2V0SXRlbXMoKTtcclxuICAgIGNvbnN0IG5ld0l0ZW1zID0gY29tYmluZUZuKGV4aXN0aW5nQ29udGFjdHMsIGFsbENvbnRhY3RzRGlzcGxheWVkKTsgIFxyXG5cclxuICAgIGlkU2guc2V0SXRlbXMobmV3SXRlbXMpO1xyXG4gICAgZG1kLnVwZGF0ZShuZXdJdGVtcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGFsbCB0aGUgaWRzIHRoYXQgd2VyZSBjb250YWluZWQgaW4gdGhpcyByZXN1bHRzIHBhZ2UuICBLZWVwIHJlc3VsdCBmcm9tIG90aGVyIHBhZ2VzIHNlbGVjdGVkXHJcbiAgY29uc3QgZGVzZWxlY3RBbGwgPSAodG9EZXNlbGVjdCkgPT4ge1xyXG4gICAgdG9EZXNlbGVjdC5mb3JFYWNoKHRvRGVzZWxlY3QgPT4gdG9EZXNlbGVjdC5jaGVja2VkID0gZmFsc2UpO1xyXG4gICAgaGFuZGxlU2VsZWN0aW9uZENoYW5nZU1lcmdlKChleGlzdGluZ0l0ZW1zLCBhbGxJdGVtc0Zvckdyb3VwKSA9PiBleGlzdGluZ0l0ZW1zLmZpbHRlcigoe2lkfSkgPT4gIWFsbEl0ZW1zRm9yR3JvdXAubWFwKGkgPT4gaS5pZCkuaW5jbHVkZXMoaWQpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgYWxsIHRoZSBpZHMgdGhhdCB3ZXJlIGNvbnRhaW5lZCBpbiB0aGlzIHJlc3VsdHMgcGFnZS4gIEtlZXAgcmVzdWx0IGZyb20gb3RoZXIgcGFnZXMgc2VsZWN0ZWRcclxuICBjb25zdCBzZWxlY3RBbGwgPSAodG9TZWxlY3QpID0+IHtcclxuICAgIHRvU2VsZWN0LmZvckVhY2godG9TZWxlY3QgPT4gdG9TZWxlY3QuY2hlY2tlZCA9IHRydWUpOyAgICBcclxuXHJcbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IHtcclxuXHJcbiAgICAgIC8vIGdldCBhbGwgaXRlbXMgb24gdGhlIHBhZ2Ugbm90IGluIHRoZSBleGlzdGluZyByZXN1bHRzXHJcbiAgICAgIGNvbnN0IGdyb3VwSXRlbXNUb0FkZCA9IGFsbEl0ZW1zRm9yR3JvdXAuZmlsdGVyKCh7aWR9KSA9PiAhZXhpc3RpbmdJdGVtcy5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpO1xyXG5cclxuICAgICAgLy8gTWVyZ2UgdGhlIG5ldyBpdGVtcyBpblxyXG4gICAgICByZXR1cm4gWy4uLmV4aXN0aW5nSXRlbXMsIC4uLmdyb3VwSXRlbXNUb0FkZF07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDsgICBcclxuXHJcbiAgICB0YXJnZXQuY2hlY2tlZCA/XHJcbiAgICAgIHNlbGVjdEFsbChhbGxDaGVja2JveGVzSW5UYWJsZSkgOlxyXG4gICAgICBkZXNlbGVjdEFsbChhbGxDaGVja2JveGVzSW5UYWJsZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTZWxlY3RBbGxDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYlNlbGVjdEFsbCBbdHlwZT1jaGVja2JveF0nKTtcclxuICBpZiAodG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3gpIHtcclxuICAgIHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZVNlbGVjdEFsbENoYW5nZSk7XHJcblxyXG4gICAgaWYgKGFsbENoZWNrYm94ZXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgIHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlcnNUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcclxuICBsZXQgdXNlcnNUYWJsZUJvZHk7XHJcbiAgaWYodXNlcnNUYWJsZSkge1xyXG4gICB1c2Vyc1RhYmxlQm9keSA9IHVzZXJzVGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50UGFnZSA9IDE7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICBjb25zdCBjcml0ZXJpYUtleSA9ICdjcml0ZXJpYSc7XHJcbiAgXHJcbiAgbGV0IHNlYXJjaENyaXRlcmlhU3RyaW5nID0gdXJsUGFyYW1zLmhhcyhjcml0ZXJpYUtleSkgPyBgP2NyaXRlcmlhPSR7dXJsUGFyYW1zLmdldChjcml0ZXJpYUtleSl9YCA6ICcnO1xyXG5cclxuICBjb25zdCBnZXRTZWFyY2hFbmRwb2ludCA9ICgpID0+IGAke2xvY2F0aW9uLm9yaWdpbn0vRm9yY2UvQ29udGFjdHMvJHtjdXJyZW50UGFnZX0ke3NlYXJjaENyaXRlcmlhU3RyaW5nfWA7XHJcbiAgXHJcbiAgLy8gQWRkIGxpc3RlbmVycyBmb3IgdGhlIGNoZWNrYm94ZXNcclxuICBjb25zdCBzdGFmZlRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLXNlbGVjdC1zdGFmZicpO1xyXG5cclxuICBpZiAoc3RhZmZUYWJsZSkge1xyXG4gICAgc3RhZmZUYWJsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoe3RhcmdldH0pID0+IHtcclxuICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdUb3RhbCA9IHRhcmdldC5jaGVja2VkID8gaWRTaC5hZGQodGFyZ2V0LnZhbHVlLCB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhY3QtbmFtZScpKSA6IGlkU2gucmVtb3ZlKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAodG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIC8vIElmIHVuY2hlY2tlZCBkZXNlbGVjdCB0aGUgY2hlY2sgYWxsLlxyXG4gICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICAgIC8vIElmIGNoZWNrZWQgc2VlIGlmIGFsbCBhcmUgbm93IHNlbGVjdGVkLlxyXG4gICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkbWQudXBkYXRlKG5ld1RvdGFsKTtcclxuICAgICAgfVxyXG4gICAgfSk7ICB9ICBcclxuXHJcbiAgY29uc3QgY3JlYXRlQ2hlY2tib3hGaWVsZCA9ICh2YWx1ZSwgY2hlY2tlZCwgbmFtZSkgPT4geyAgXHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY2VsbCcpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIGlucHV0LmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhY3QtbmFtZScsIG5hbWUpO1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUNlbGxXaXRoVGV4dCA9IHRleHQgPT4ge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFJvdyA9IHVzZXIgPT4ge1xyXG4gICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIubmFtZSkpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLmNvbGxhcikpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLmVtYWlsKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIucGhvbmVOdW1iZXIpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveEZpZWxkKHVzZXIuaWQsIGlkU2guaGFzSWQodXNlci5pZCksIHVzZXIubmFtZSkpO1xyXG5cclxuICAgIHVzZXJzVGFibGVCb2R5LmFwcGVuZENoaWxkKG5ld1Jvdyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRSZXN1bHRSb3dzID0gcm93cyA9PiB7XHJcbiAgICByb3dzLmZvckVhY2goYWRkUm93KTtcclxuICB9XHJcblxyXG4gIGlmIChsb2FkZXIpIHtcclxuXHJcbiAgICBjb25zdCBsb2FkZXJQYWdlU2l6ZSA9IGxvYWRlci5nZXRBdHRyaWJ1dGUoXCJwYWdlLXNpemVcIik7XHJcblxyXG4gICAgbmV3IExhenlMb2FkZXIobG9hZGVyLCBhc3luYyBkb25lID0+IHtcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIG5leHQgcGFnZSBpbmRleFxyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBnZXRTZWFyY2hFbmRwb2ludCgpO1xyXG5cclxuICAgICAgICAvLyBEbyB0aGUgc2VhcmNoXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goZW5kcG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1Jlc3VsdHMgPSByZXN1bHRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIC8vIFdlIGRvbnQga25vdyBpZiB0aGVyZSB3aWxsIGJlIG1vcmUgcmVzdWx0cywgYnV0IGl0cyBsaWtlbHkgaWYgd2UgcmV0dXJuIGEgZnVsbCBwYWdlIG9mIHJlc3VsdHNcclxuICAgICAgICBsZXQgbW9yZVJlc3VsdHNMaWtlbHkgPSBoYXNSZXN1bHRzO1xyXG4gICAgICAgIGlmIChsb2FkZXJQYWdlU2l6ZSkge1xyXG4gICAgICAgICAgLy8gV2UgbWF5IG5vdCBoYXZlIHRoaXMgYXR0cmlidXRlLCBidXQgaWYgd2UgZG8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgZnVsbC4gSWYgbm90IHRoZXJlIHNob3VsZCBiZSBubyBtb3JlIHJlc3VsdHMgdG8gZmV0Y2hcclxuICAgICAgICAgIG1vcmVSZXN1bHRzTGlrZWx5ID0gcmVzdWx0cy5sZW5ndGggPT09IHBhcnNlSW50KGxvYWRlclBhZ2VTaXplLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzUmVzdWx0cykgeyAgICAgICAgICBcclxuICAgICAgICAgIGFkZFJlc3VsdFJvd3MocmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb25lKG1vcmVSZXN1bHRzTGlrZWx5KTsgIFxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoKGUpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsYXp5IGxvYWQgcGFnZSAke2N1cnJlbnRQYWdlfSBvZiBBRCB1c2Vyc2ApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgLy8gSWdub3JlIGN1cnJlbnQgZmFpbGVkIHBhZ2UsIHNvIHdpbGwgdHJ5IGFnYWluXHJcbiAgICAgICAgY3VycmVudFBhZ2UtLTtcclxuICAgICAgICBkb25lKHRydWUpOyAvLyBDYWxsIGRvbmUgd2l0aCBtb3JlIHRvIGxvYWQuXHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCB0byBkbyBoZXJlLiBJZiBlbnBvaW50IGlzIGRvd24sIHdlIHdvdWxkIGdldCBsb3RzIG9mIGNvbnNvbGUgZXJyb3JzIGF0IHRoZSBtb21lbnQuLi4uXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9LCB7IGRlYnVnOiBmYWxzZSwgcGVla0Rpc3RhbmNlOiA1MCB9KTtcclxuICB9ICBcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqICBIYW5kbGUgdGhlIGNsaWNraW5nIG9mIGEgc2VhcmNoIGZpZWxkcyB4IGljb24uICBcclxuICogIEJsYW5rcyB0aGUgZmllbGQgYW5kIG9wdGlvbmFsbHkgcmVkaXJlY3QgbWludXMgcXVlcnkgc3RyaW5nIHBhcmFtXHJcbiAqICBzcGVjaWZpZWQgb24gdGhlIHNwYW4uZm9ybV9faW5wdXQtLWNsZWFyIChkYXRhLXBhcmFtLW5hbWUpXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qIEJ1aWxkIGFuZCByZWRpcmVjdCB0byBwYXRoIG1pbnVzIHRoZSBzcGVjaWZpZWQgcGFyYW0gbmFtZSBpbiBxdWVyeSBzdHJpbmcgKi9cclxuZnVuY3Rpb24gcmVkaXJlY3RXaXRob3V0U2VhcmNoKHBhcmFtTmFtZSkge1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgICBjb25zdCB7b3JpZ2luLCBwYXRobmFtZX0gPSB3aW5kb3cubG9jYXRpb247XHJcbiAgICB1cmxQYXJhbXMuZGVsZXRlKHBhcmFtTmFtZSk7XHJcbiAgICBjb25zdCBuZXdDcml0ZXJpYSA9IHVybFBhcmFtcy50b1N0cmluZygpID8gYD8ke3VybFBhcmFtc31gIDogJyc7ICAgIFxyXG4gICAgY29uc3QgbmV3UGF0aCA9IGAke29yaWdpbn0ke3BhdGhuYW1lfSR7bmV3Q3JpdGVyaWF9YDtcclxuICAgIFxyXG4gICAgLy8gT25seSByZWRpcmVjdCBpZiBwYXJhbXMgd2l0aCBjaGFuZ2UgaS5lLiBub3QganVzdCBjbGVhcmluZyBzZWFyY2ggZmllbGRcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gbmV3UGF0aCkgeyAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdQYXRoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQ2xlYXIgYSBzZWFyY2ggZmllbGQgd2hlbiB0aGUgaW5wdXRzIGNsZWFyIGJ1dHRvbiBpcyBjbGlja2VkICovXHJcbmZ1bmN0aW9uIGNsZWFyU2VhcmNoKGUpIHtcclxuICAgIHZhciB0b0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tLXNlYXJjaCA+IC5mb3JtX19pbnB1dC0tc2VhcmNoJyk7XHJcbiAgICB0b0NsZWFyLmZvckVhY2godGMgPT4gdGMudmFsdWUgPSAnJyk7XHJcblxyXG4gICAgLy8gVG9kbyB0cnkgYW5kIGdldCBhdHRyaWJ1dGUsIGFuZCByZWRpcmVjdCBpZiBoYXMgaXQuXHJcbiAgICBjb25zdCBwYXJhbVRvUmVtb3ZlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtLW5hbWUnKTtcclxuICAgIGlmIChwYXJhbVRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmVkaXJlY3RXaXRob3V0U2VhcmNoKHBhcmFtVG9SZW1vdmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2xlYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0LS1jbGVhcicpO1xyXG5cclxuY2xlYXJCdXR0b25zLmZvckVhY2goY2IgPT4gY2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclNlYXJjaCkpOyIsIi8qIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sXHJcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLy8gZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xyXG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3BidG4nKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG5pZiAoYWRkR3JvdXBCdXR0b24pIHtcclxuXHJcbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XHJcblxyXG5pZiAoY2xvc2VTaWRlYmFyKSB7XHJcblxyXG5jbG9zZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xyXG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIC8vIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlUXVlcnlQYXJhbSA9IHBhcmFtID0+IHtcclxuICAgICAgICBpZih1cmxQYXJhbXMuaGFzKHBhcmFtKSl7XHJcbiAgICAgICAgICAgIHVybFBhcmFtcy5kZWxldGUocGFyYW0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9Pz0ke3VybFBhcmFtcy50b1N0cmluZygpfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWN0UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdDb250YWN0QWRkZWQnKTtcclxuICAgIGNvbnN0IE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcclxuICAgIGNvbnN0IE1lc3NhZ2VTZW50UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdNZXNzYWdlU2VudCcpO1xyXG4gICAgY29uc3QgRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtID0gdXJsUGFyYW1zLmdldCgnRm9yY2VDb250YWN0VXBkYXRlZCcpO1xyXG5cclxuICAgIGxldCBzbmFja2Jhck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBpZiAoY29udGFjdFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdDb250YWN0QWRkZWQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IGNvbnRhY3QgaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE9yZ2FuaXNhdGlvblBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdPcmdhbmlzYXRpb25BZGRlZCcpO1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgb3JnYW5pc2F0aW9uIGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG4gICAgfSBlbHNlIGlmIChNZXNzYWdlU2VudFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICAvKiBcclxuICAgICAgICAgICAgQml0IGhhY2t5LCBidXQgY2xlYXJpbmcgdGhlIHNlc3Npb25TdG9yYWdlIGhlcmUgdG8gY2xlYXIgbWVzc2FnZSBzdGF0ZSBoZXJlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJDb3VyaWVyTWVzc2FnZVVzZXJzXCIpXHJcbiAgICAgICAgcmVtb3ZlUXVlcnlQYXJhbSgnTWVzc2FnZVNlbnQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTWVzc2FnZSBzZW50JztcclxuICAgIH0gZWxzZSBpZiAoRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtICYmIEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdGb3JjZUNvbnRhY3RVcGRhdGVkJyk7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ1BlcnNvbmFsIGNvbnRhY3QgZGV0YWlscyB1cGRhdGVkJztcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xyXG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxufSkoXCIjc25hY2tiYXJcIik7XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuXHJcbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcclxuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoXCJ0YWJsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==