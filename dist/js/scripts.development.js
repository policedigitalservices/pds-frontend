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
    var phoneCell = document.createElement('td');
    var phoneTextNode = document.createTextNode(user.phoneNumberCount > 1 ? " ".concat(user.phoneNumber) : user.phoneNumber);

    if (user.phoneNumberCount > 1) {
      var badge = document.createElement('em');
      badge.classList.add('badge');
      badge.textContent = user.phoneNumberCount;
      phoneCell.appendChild(badge);
    }

    phoneCell.appendChild(phoneTextNode);
    newRow.appendChild(phoneCell);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saW5raWZ5LXRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ29tcG9zZVN0YWZmTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ291cmllclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL1NlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzLmpzIl0sIm5hbWVzIjpbIkJvdHRvbURyYXdlciIsIl9vcGVuQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIkRyYWZ0TWVzc2FnZURyYXdlciIsIm51bWJlck9mUmVjaXBpZW50cyIsInRvdGFsU2VsZWN0b3IiLCJjb29raWVIZWxwZXIiLCJTaW1wbGVDb29raWVIZWxwZXIiLCJfdG90YWxzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImdldCIsIkVycm9yIiwiX2JvdHRvbURyYXdlciIsInVwZGF0ZSIsImlubmVyVGV4dCIsInNob3ciLCJoaWRlIiwiZ3JvdXBFeGlzdCIsImdldEVsZW1lbnRCeUlkIiwidXNlQ2hlY2tib3hlcyIsImhhc0F0dHJpYnV0ZSIsInVzZVNpbmdsZVNlbGVjdENoZWNrYm94IiwibG9ja1Jvb3ROb2RlIiwic2VsZWN0b3IiLCJpbnRpYWxseVNlbGVjdGVkTm9kZXMiLCJncm91cFNlbGVjdCIsImdyb3VwVGV4dGFyZWEiLCJ0YWdzU2VlQWxsSGVscGVyIiwicGFyZW50RWxlbWVudCIsInNlbGVjdGVkT3B0aW9uc05vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidmFsdWUiLCJpdGVtTGltaXQiLCJTZWVBbGxIZWxwZXIiLCJjb3VudEZpZWxkSWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJwYXRoVG9VbmNoZWNrIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImNiU2VsZWN0b3IiLCJjaGVjYm94VG9VbmNoZWNrIiwiY2xpY2siLCJyZWNhbGN1bGF0ZSIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJidWlsZExhYmVsIiwicGFyZW50Q2hlY2tlZCIsIm5ld1BhcmVudFNlbGVjdGVkIiwibGFiZWwiLCJ0b2dnbGVTcGFuIiwib3V0ZXJTcGFuIiwiY2hlY2tib3giLCJ0eXBlIiwibmFtZSIsImlkIiwiYXBwZW5kQ2hpbGQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwiY2xvc2VzdCIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkQ2hlY2tib3hlcyIsImhpZGRlbkZpZWxkIiwic2V0QXR0cmlidXRlIiwic3RydWN0dXJlIiwib3B0aW9uX2kiLCJvcHRpb24iLCJzZWdtZW50cyIsInNwbGl0Iiwibm9kZVRvQ2hlY2siLCJzZWdtZW50X2kiLCJzZWciLCJ0cmVlQ29udGFpbmVyIiwiY2xvc2VzdExpIiwiYWN0aXZlQ2hpbGRyZW4iLCJhY19pIiwiYWN0aXZlQ2hpbGQiLCJkaXNwbGF5Q2hpbGRLZXlzIiwiY3VyclRleHQiLCJjdXJyUGF0aCIsIm9iaiIsImVsZW1lbnRUb0FkZFRvIiwibGV2ZWwiLCJwYXJlbnRzQ2hlY2tlZCIsImNoaWxkS2V5cyIsIk9iamVjdCIsImtleXMiLCJwYXJlbnRDaGVja2VkU3RhdGUiLCJjaGlsZExpc3RJdGVtIiwiY2hpbGRMaXN0IiwiY2tfaSIsImNoaWxkS2V5IiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsIklkU2Vzc2lvblN0b3JhZ2VIZWxwZXIiLCJfbmFtZSIsImluaXRpYWwiLCJfaW5pdGlhbGlzZSIsIl9pdGVtcyIsIk1hcCIsImZvckVhY2giLCJzZXQiLCJzZWxlY3RlZEl0ZW1zSnNvbiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIl9wZXJzaXN0IiwiSlNPTiIsInBhcnNlIiwiaXRlbXMiLCJnZXRJdGVtcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJpZHMiLCJpZHNUb0tlZXAiLCJnZXRJZHMiLCJpbmNsdWRlcyIsInNpemUiLCJkZWxldGUiLCJlbnRyaWVzIiwiaGFzIiwic2V0SXRlbXMiLCJDb3VyaWVyTGF6eUxvYWRlciIsImxvYWRlckVsZW1lbnQiLCJsb2FkZXJGbiIsImNvbmZpZ09iaiIsImNvbmZpZ0RlZmF1bHRzIiwibG9hZGVyQ2xhc3MiLCJsb2FkZXJMb2FkaW5nQ2xhc3MiLCJkZWJvdW5jZU1zIiwicGVla0Rpc3RhbmNlIiwiZGVidWciLCJfbG9hZGVyIiwiX2xvYWRlckZ1bmMiLCJfbWFpbiIsIl9jb25maWciLCJfaGFzTGlzdGVuZXJzQWRkZWQiLCJfbGF6eUxvYWRDaGVjayIsImRlYm91bmNlIiwiX2RvTG9hZE1vcmVDaGVjayIsIl9jb25kaXRpb25hbERlYnVnTG9nIiwiX3N0b3BMaXN0ZW5pbmciLCJfZG9uZVNlYXJjaGluZyIsIl9zdGFydExpc3RlbmluZyIsImJpbmQiLCJ2aXNpYmxlIiwibW9yZVRvTG9hZCIsIl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9EZWJ1ZyIsImxvZ2dlckZ1bmMiLCJjb25zb2xlIiwibG9nIiwiaGlnaGVzdFZpc2libGVZUG9zIiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkTW9yZVRyaWdnZXJQb3MiLCJNYXRoIiwibWluIiwib2Zmc2V0VG9wIiwicGVla1Bvc2l0aW9uVmlzaWJsZSIsInNob3VsZExvYWRNb3JlIiwidGFibGUiLCJTZWVBbGxBdHRyaWJ1dGVIZWxwZXIiLCJzaG93TW9yZUJ1dHRvbnMiLCJzaG93QWxsQnV0dG9uIiwiY29udGFpbmVySWQiLCJpdGVtU2VsZWN0b3IiLCJzaG93QWxsSXRlbUxpbWl0Iiwic2hvd0FsbEl0ZW1Db3VudElkIiwiYnV0dG9uSWQiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzZWxlY3RvclRvVXNlIiwidGFnTmFtZSIsImVycm9yIiwicGFyc2VkSXRlbUxpbWl0IiwicGFyc2VJbnQiLCJpc05hTiIsIml0ZW1zU2VsZWN0b3IiLCJzZWVBbGxTZWxlY3RvciIsInBhc3NlZE9wdGlvbnMiLCJfaXRlbXNTZWxlY3RvciIsIl9zZWVBbGwiLCJfb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGwiLCJkZWZhdWx0cyIsInNob3dMZXNzVGV4dCIsIl9vcHRpb25zIiwiX2l0ZW1MaW1pdCIsIl9zaG93TGVzc1RleHQiLCJfc2hvd01vcmVUZXh0IiwiX2NvdW50RmllbGQiLCJfc2hvd2luZ0FsbCIsIl9oaWRlRXhjZXNzSXRlbXMiLCJfc2hvd0FsbEl0ZW1zIiwiX2FsbEl0ZW1zIiwiaXRlbSIsIl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zIiwiaW5kZXgiLCJ0b0NoZWNrIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaWx0ZXIiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwicmVwb2x1bGF0ZVRhZ3MiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3ZhbHVlIiwibmV3Q29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzcG9uc2VzIiwicmVzcG9uc2VzTGlzdCIsInJlc3BvbnNlIiwiaWR4IiwidHJpbSIsInNob3dGaXJzdEVtcHlJdGVtIiwiY3VycmVudFJlc3BvbnNlIiwiY29weUl0ZW1zRm9yd2FyZCIsInByZXZJbnB1dCIsImlucHV0IiwicmVtb3ZlTGFzdEVtcHR5SXRlbSIsInJlbW92ZUlkeCIsImFkZFJlc3BvbnNlQnV0dG9uIiwiZWwiLCJibHVyIiwiYWRkUGhvbmVJbnB1dCIsImFkZFBob25lQnV0dG9uIiwiYWRkRW1haWxJbnB1dCIsImFkZEVtYWlsQnV0dG9uIiwiYWRkR3JvdXBCdXR0b24iLCJzYXZlR3JvdXBCdXR0b24iLCJ0YXJnZXQyIiwiaW5wdXRFcnJvcnMiLCJpbnB1dEVycm9yc0FycmF5IiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzbmFja2JhclN0b3JhZ2VJdGVtIiwibG9jYWxTdG9yYWdlIiwic25hY2tiYXIiLCJzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkiLCJsb2NhdGlvbnMiLCJyb3dzVG9MaW5raWZ5IiwiaGFuZGxlUm93Q2xpY2siLCJjb2xUb1BhcnNlIiwicm93IiwiY29sIiwibWVudSIsIm1lbnVCdXR0b24iLCJtZW51Q2hpbGQiLCJtYWluIiwiYWRkQnRuIiwic3ViamVjdElucHV0IiwibWVzc2FnZUlucHV0IiwicmVzZW5kSW5wdXQiLCJyZXNwb25zZU9wdGlvbnMiLCJjb29raWVNZXNzYWdlSGVscGVyIiwiY29va2llQXV0b1Jlc2VuZEhlbHBlciIsImNvb2tpZVJlc3BvbnNlSGVscGVyIiwiaWRzU2Vzc2lvbkhlbHBlciIsImdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nIiwibm9uRW1wdHlPcHRpb25zIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImpvaW4iLCJmaWx0ZXJCeUlkcyIsIngiLCJzZWxlY3RPcHRpb25zIiwic2x0IiwiZGlzY2FyZEJ0biIsImNsZWFySXRlbXMiLCJuZXdQaG9uZVJvdyIsIm5ld1Bob25lIiwiY2xhc3NOYW1lIiwiX3JlbnVtYmVySW5wdXRzIiwiaWRlbnRpZmllciIsImlucHV0cyIsImlucCIsInNwbiIsIm5ld0VtYWlsUm93IiwiYWRkUGhvbmVCdG4iLCJhZGRFbWFpbEJ0biIsInJlbW92ZUVtYWlsQnV0dG9ucyIsInJlbW92ZVBob25lQnV0dG9ucyIsImVtYWlsc1NlY3Rpb24iLCJzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUiLCJwaG9uZXNTZWN0aW9uIiwic2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlIiwiaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUiLCJzZWN0aW9uIiwiY29udGFjdFByb2ZpbGVGb3JtIiwiaW5wdXRzRm9yU2VsZWN0b3IiLCJkaXIiLCJmb3JtR3JvdXAiLCJpZFNoIiwiZG1kIiwibG9hZGVyIiwiYWxsQ2hlY2tib3hlc0luVGFibGUiLCJpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkIiwiY2IiLCJoYXNJZCIsImFsbENoZWNrYm94ZXNTZWxlY3RlZCIsImV2ZXJ5IiwiYWxsQ29udGFjdHMiLCJoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UiLCJjb21iaW5lRm4iLCJhbGxDb250YWN0c0Rpc3BsYXllZCIsImV4aXN0aW5nQ29udGFjdHMiLCJuZXdJdGVtcyIsImRlc2VsZWN0QWxsIiwidG9EZXNlbGVjdCIsImV4aXN0aW5nSXRlbXMiLCJhbGxJdGVtc0Zvckdyb3VwIiwic2VsZWN0QWxsIiwidG9TZWxlY3QiLCJncm91cEl0ZW1zVG9BZGQiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJ0b2dnbGVTZWxlY3RBbGxDaGVja2JveCIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjcml0ZXJpYUtleSIsInNlYXJjaENyaXRlcmlhU3RyaW5nIiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJzdGFmZlRhYmxlIiwibmV3VG90YWwiLCJjcmVhdGVDaGVja2JveEZpZWxkIiwiY2VsbCIsImNyZWF0ZUNlbGxXaXRoVGV4dCIsImFkZFJvdyIsInVzZXIiLCJuZXdSb3ciLCJjb2xsYXIiLCJlbWFpbCIsInBob25lQ2VsbCIsInBob25lVGV4dE5vZGUiLCJwaG9uZU51bWJlckNvdW50IiwicGhvbmVOdW1iZXIiLCJiYWRnZSIsImFkZFJlc3VsdFJvd3MiLCJyb3dzIiwibG9hZGVyUGFnZVNpemUiLCJMYXp5TG9hZGVyIiwiZG9uZSIsImVuZHBvaW50IiwiZmV0Y2giLCJqc29uIiwicmVzdWx0cyIsImhhc1Jlc3VsdHMiLCJtb3JlUmVzdWx0c0xpa2VseSIsInJlZGlyZWN0V2l0aG91dFNlYXJjaCIsInBhcmFtTmFtZSIsIm5ld0NyaXRlcmlhIiwidG9TdHJpbmciLCJuZXdQYXRoIiwiYXNzaWduIiwiY2xlYXJTZWFyY2giLCJ0b0NsZWFyIiwidGMiLCJwYXJhbVRvUmVtb3ZlIiwiY2xlYXJCdXR0b25zIiwib25jbGljayIsImV2ZW50IiwiZHJvcGRvd25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9wZW5Ecm9wZG93biIsInRvZ2dsZVNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJ5IiwicmVtb3ZlUXVlcnlQYXJhbSIsInBhcmFtIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwiY29udGFjdFBhcmFtIiwiT3JnYW5pc2F0aW9uUGFyYW0iLCJNZXNzYWdlU2VudFBhcmFtIiwiRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtIiwic25hY2tiYXJNZXNzYWdlIiwicmVtb3ZlSXRlbSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtR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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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RUFBaUM7QUFDcEM7OztBQUdBMVQsa0JBQWMsQ0FBQzZULFVBQWYsQ0FBMEIscUJBQTFCO0FBQ0FWLG9CQUFnQixDQUFDLGFBQUQsQ0FBaEI7QUFDQVMsbUJBQWUsR0FBRyxjQUFsQjtBQUNILEdBUE0sTUFPQSxJQUFJRCx3QkFBd0IsSUFBSUEsd0JBQXdCLENBQUNHLFdBQXpCLE9BQTJDLE1BQTNFLEVBQW1GO0FBQ3RGWCxvQkFBZ0IsQ0FBQyxxQkFBRCxDQUFoQjtBQUNBUyxtQkFBZSxHQUFHLGtDQUFsQjtBQUNIOztBQUVELE1BQUlBLGVBQUosRUFBcUI7QUFDakJoSixZQUFRLENBQUNyVixTQUFULENBQW1CQyxHQUFuQixDQUF1QixrQkFBdkI7QUFDQW9WLFlBQVEsQ0FBQ3JRLFNBQVQsR0FBcUJxWixlQUFyQjtBQUVBbkosY0FBVSxDQUFDLFlBQVU7QUFDakJHLGNBQVEsQ0FBQ3JWLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGtCQUExQjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKLENBL0NELEVBK0NHLFdBL0NILEU7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlIiwiZmlsZSI6ImRpc3QvanMvc2NyaXB0cy5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qXHJcbiBDbGFzcyB0aGF0IGZhY2lsaXRhdGUgdGhlIGhpZGluZyBhbmQgc2hvd2luZyBvZiB0aGUgYm90dG9tIGJhci5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX29wZW5DbGFzcyA9IFwiYm90dG9tLWRyYXdlci1vcGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgQm90dG9tRHJhd2VyIGZyb20gJy4vQm90dG9tRHJhd2VyJztcclxuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuL1NpbXBsZUNvb2tpZUhlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFmdE1lc3NhZ2VEcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZSZWNpcGllbnRzLCB0b3RhbFNlbGVjdG9yPVwiLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190b3RhbFwiKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvdGFsU2VsZWN0b3IpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdGl0bGUnKS50ZXh0Q29udGVudCA9IGNvb2tpZUhlbHBlci5nZXQoKSB8fCAnVW50aXRsZWQnO1xyXG4gICAgICAgIGlmICghdGhpcy5fdG90YWxzRWxlbWVudCkgeyB0aHJvdyBFcnJvcihgTm8gZWxlbWVudCBtYXRjaGluZyB0aGUgcGFzc2VkIGluIHNlbGVjdG9yICR7dG90YWxTZWxlY3Rvcn1gKTsgfVxyXG4gICAgICAgIHRoaXMuX2JvdHRvbURyYXdlciA9IG5ldyBCb3R0b21EcmF3ZXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICB1cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudC5pbm5lclRleHQgPSBudW1iZXJPZlJlY2lwaWVudHM7XHJcbiAgICAgICAgbnVtYmVyT2ZSZWNpcGllbnRzID8gdGhpcy5fYm90dG9tRHJhd2VyLnNob3coKSA6IHRoaXMuX2JvdHRvbURyYXdlci5oaWRlKCk7XHJcbiAgICB9XHJcbn0iLCIgaW1wb3J0IHtTZWVBbGxIZWxwZXJ9IGZyb20gJy4vU2VlQWxsSGVscGVyJztcclxuIFxyXG4gdmFyIGdyb3VwRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwXCIpO1xyXG4gICAgaWYoZ3JvdXBFeGlzdCl7XHJcblxyXG4gICAgICAgIHZhciB1c2VDaGVja2JveGVzID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtc2luZ2xlLXNlbGVjdC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciBsb2NrUm9vdE5vZGUgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2NrLXJvb3QnKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgLy9DaGVjayBvbiBwYWdlIHdoZXRoZXIgR3JvdXAgTXVsdGkgU2VsZWN0IGV4aXN0c1xyXG4gICAgdmFyIGludGlhbGx5U2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFNlbGVjdG9yXCIpO1xyXG4gICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcbiAgICBcclxuICAgIGxldCB0YWdzU2VlQWxsSGVscGVyID0gbnVsbDtcclxuXHJcbiAgICAvLyBJZiB0aGUgR3JvdXAgTXVsdGkgU2VsZWN0IGRvZXMgZXhpc3QsIGhpZGUgaXQgKGlmIEpTIGVuYWJsZWQpXHJcbiAgICBpZiAoZ3JvdXBTZWxlY3QgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEdyYWIgYWxsIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZFxyXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnNOb2RlcyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRPcHRpb25zTm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgIGludGlhbGx5U2VsZWN0ZWROb2Rlcy5wdXNoKHNlbGVjdGVkT3B0aW9uc05vZGVzW2ldLnZhbHVlIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1MaW1pdCA9IDIxO1xyXG5cclxuICAgICAgICB0YWdzU2VlQWxsSGVscGVyICA9IG5ldyBTZWVBbGxIZWxwZXIoJyNHcm91cFRleHRhcmVhID4gLnRhZycsICcjc2VlTW9yZUdyb3VwcycsIHsgaXRlbUxpbWl0LCBjb3VudEZpZWxkSWQ6ICdncm91cHNDb3VudCcgfSk7XHJcblxyXG4gICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi50YWc+LmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhUb1VuY2hlY2sgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYlNlbGVjdG9yID0gJ2lucHV0W3R5cGU9Y2hlY2tib3hdLnRyZWV2aWV3X19jaGVja2JveFt2YWx1ZT1cIicrcGF0aFRvVW5jaGVjaysnXCJdJztcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjYm94VG9VbmNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjYm94VG9VbmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2JveFRvVW5jaGVjay5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWFyY2hQYXJ0cyA9IChmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xyXG4gICAgICAgIHZhciB2YXJzID0ge307XHJcbiAgICAgICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCBmdW5jdGlvbihtLGtleSx2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2dyb3VwPVwiO1xyXG4gICAgdmFyIGdyb3VwUGFyYW0gPSBzZWFyY2hQYXJ0cy5ncm91cDtcclxuICAgIHZhciBzZWFyY2hQYXJhbSA9IHNlYXJjaFBhcnRzLlNlYXJjaDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBidWlsZCB0aGUgcGF0aFxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVBhdGhGb3JHcm91cChncm91cCkge1xyXG4gICAgICB2YXIgZ3JwID0gZ3JvdXAgPT09IFwiXCIgPyBcIlxcXFxcIiA6IGdyb3VwO1xyXG4gICAgICByZXR1cm4gcGFnZVBhdGggKyBncnA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkIHNob3VsZCBiZSBvcGVuIGkuZS4gdG8gcmV2ZWFsIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIHNob3VsZFBhcmVudEJlT3BlbihwYXRoKSB7XHJcbiAgICAgICAgaWYgKCFncm91cFBhcmFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggKyBcIlxcXFxcIik7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwUGFyYW0uc3RhcnRzV2l0aChwYXRoVG9DaGVjaykgJiYgZ3JvdXBQYXJhbSAhPSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGRlZCBpcyB0aGUgY3VycmVudGx5U2VsZWN0ZWRHcm91cFxyXG4gICAgZnVuY3Rpb24gaXNTZWxlY3RlZEdyb3VwKHBhdGgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zVG9DaGVjayA9IGRlY29kZVVSSUNvbXBvbmVudChncm91cFBhcmFtIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCB8fCBcIlxcXFxcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXNUb0NoZWNrID09PSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZExpbmsodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgICAgIGxpbmsuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ndHJlZXZpZXdfX2l0ZW0tdG9nZ2xlJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd0cmVldmlld19faXRlbS1jb250ZW50Jz4ke3RleHR9PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbGluay5ocmVmID0gZ2V0UGFnZVBhdGhGb3JHcm91cChwYXRoKTtcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS1saW5rXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGluaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZExhYmVsKHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgdmFyIG5ld1BhcmVudFNlbGVjdGVkID0gcGFyZW50Q2hlY2tlZDtcclxuXHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tbGFiZWxcIik7XHJcbiAgICAgICAgdmFyIHRvZ2dsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdG9nZ2xlU3Bhbi5jbGFzc0xpc3QuYWRkKCd0cmVldmlld19faXRlbS10b2dnbGUnKTtcclxuICAgICAgICB2YXIgb3V0ZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIG91dGVyU3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgb3V0ZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19pdGVtLWNvbnRlbnQnKTtcclxuICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY2hlY2tib3gubmFtZSA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBwYXRoO1xyXG4gICAgICAgIGNoZWNrYm94LmlkID0gdGV4dDtcclxuICAgICAgICBvdXRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgIG91dGVyU3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRvZ2dsZVNwYW4pO1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKG91dGVyU3Bhbik7XHJcblxyXG4gICAgICAgIGlmIChwYXRoID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSB0aGUgcm9vdCBub2RlIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgY2hlY2tlZCBCVVQgdGhlIGNoaWxkcmVuIG9mIHRoaXMgbm9kZSBzaG91bGQgYWN0IGFzIHRob3VnaCBpdCBpc250IGNoZWNrZWQgc28gd2UgZG9udCB1cGRhdGUgdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDaGVja2VkICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIHNlbGVjdGVkIGFsbCBpdHMgY2hpbGRyZW4gc2hvdWxkIGJlIGRpc2FibGVkIGFuZCB1bmNoZWNrZWRcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIG5vdCBjaGVja2VkIGl0cyBjaGlsZHJlbiBzZWxlY3RlZCBzdGF0ZSBkZXBlbmQgb24gdGhlIGNoaWxkcyB2YWx1ZSwgYW5kIG5vdCBiZSBkaXNhYmxlZFxyXG4gICAgICAgICAgICB2YXIgbmV3Q2hlY2tlZCA9IGludGlhbGx5U2VsZWN0ZWROb2Rlcy5pbmRleE9mKHBhdGggfHwgJ1xcXFwnKSA+PSAwO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICAgICAgbmV3UGFyZW50U2VsZWN0ZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2NoZWNrYm94Jyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0cmVldmlld19fY2hlY2tib3gtLXJhZGlvJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge2xhYmVsLCBuZXdQYXJlbnRTZWxlY3RlZH07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFuc2ZlclZhbHVlcygpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgZWxlbXM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmVldmlld19fY2hlY2tib3gnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPGVsZW1zLmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9ja1Jvb3ROb2RlICYmICEoZWxlbXNbaV0udmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8tb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1zW2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWxlbXNbaV0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpIHtcclxuXHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG4gICAgICAgIGlmICh0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dyb3VwU2VsZWN0b3InKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBleGlzdGluZ09wdGlvblZhbHVlcyA9IEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBkYXRhX2kgPSAwOyBkYXRhX2kgPCBkYXRhLmxlbmd0aDsgZGF0YV9pKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFfY3VycmVudCA9IGRhdGFbZGF0YV9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+QWxsIENvbnRhY3QgR3JvdXBzPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPicgKyBkYXRhX2N1cnJlbnQuc3Vic3RyaW5nKDEpICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIG9wdGlvbiBleGlzdHMgLSBhZGQgaXQgaWYgbm90XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdPcHRpb25WYWx1ZXMuaW5kZXhPZihkYXRhX2N1cnJlbnQpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGRhdGFfY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gZGF0YV9jdXJyZW50O1wiXCJcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBkYXRhLmluZGV4T2YoZWxlbWVudC5vcHRpb25zW2ldLnZhbHVlKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuRm9yTW9kZShwYXJlbnQsIHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuICAgICAgICBpZiAodXNlQ2hlY2tib3hlcyB8fCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgdGhlIGJsYW5rIHZhbHVlIGZvciAnQWxsIENvbnRhY3QgR3JvdXBzJ1xyXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBcIlxcXFxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNoZWNrYm94UmVzdWx0ID0gYnVpbGRMYWJlbCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKTtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmxhYmVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveFJlc3VsdC5uZXdQYXJlbnRTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaW5rIHRvIHJlZnJlc2ggcGFnZSB3aXRoIHNlbGVjdGVkIG5vZGUuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZExpbmsodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjdXJyZW50LCBjaGlsZHJlbiwgdXBkYXRlckZuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudExvb3BDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudExvb3BDaGlsZCAhPT0gY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlckZuKGN1cnJlbnRMb29wQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgY2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudExpID0gY2hlY2tib3guY2xvc2VzdCgnbGknKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgb25seSBvbmUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQsIGFuZCB0aGUgcm9vdCBpdGVtIGNhbm5vdCBiZSBkZXNlbGV0ZWQuXHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWxsR3JvdXBDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyZWV2aWV3X19saXN0LS1yb290IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBhbGxHcm91cENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFyZW50TGkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmVldmlld19faXRlbS0tcGFyZW50Jykpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGNoaWxkQ2hlY2tib3hlcyA9IHBhcmVudExpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JhYiB0aGUgc2VsZWN0IGxpc3QgYW5kIGFsbCBvZiBpdHMgb3B0aW9uc1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcblxyXG4gICAgdmFyIGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZ3JvdXBQYXJhbSB8fCAnXFxcXCc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGNvbGxlY3Rpb25zIHdpdGggc3RhcnRpbmcga2V5IGZvciB0aGUgcm9vdC5cclxuICAgIHZhciBzdHJ1Y3R1cmUgPSB7IFwiXFxcXFwiOiB7fSB9O1xyXG5cclxuICAgIC8vIEJ1aWxkIG9uIHRoZSBiYXNlIHN0cnVjdHVyZSBieSBsb29waW5nIHRocm91Z2ggZWFjaCBzZWxlY3QgaXRlbS5cclxuICAgIGZvciAodmFyIG9wdGlvbl9pPTA7IG9wdGlvbl9pPG9wdGlvbnMubGVuZ3RoOyBvcHRpb25faSsrKSB7XHJcblxyXG4gICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW29wdGlvbl9pXTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSB0aGUgZ3JvdXAgbmFtZSBpbnRvIGFsbCBpdHMgcGF0aCBzZWdtZW50c1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBvcHRpb24udGV4dENvbnRlbnQuc3BsaXQoXCJcXFxcXCIpO1xyXG4gICAgICAgICAgICAvLyBTdGFydCBhdCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgbm9kZVRvQ2hlY2sgPSBzdHJ1Y3R1cmVbXCJcXFxcXCJdO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yIGVhY2ggc2VnbWVudCBlbnN1cmUgdGhhdCBhbGwgbGV2ZWxzIG9mIHRoZSBzdHJ1Y3R1cmUgYXJlIGluIHBsYWNlLlxyXG4gICAgICAgICAgICBmb3IgKHZhciBzZWdtZW50X2k9MDsgc2VnbWVudF9pPHNlZ21lbnRzLmxlbmd0aDsgc2VnbWVudF9pKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnID0gc2VnbWVudHNbc2VnbWVudF9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VnICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlVG9DaGVja1tzZWddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrW3NlZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2sgPSBub2RlVG9DaGVja1tzZWddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBiYXNlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHBvcHVsYXRlZFxyXG4gICAgdmFyIHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19fbGlzdFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19saXN0LS1yb290XCIpO1xyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgYWxsIHRoZSBjbGlja3MgYXQgdGhlIHBhcmVudCBsZXZlbFxyXG4gICAgdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjaGVja2JveCBpdGVtcyBiZWluZyBzZWxlY3RlZC5cclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljayhlLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRyZWV2aWV3X19pdGVtLXRvZ2dsZVwiKSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsb3Nlc3RMaSA9IHRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2Ugb25seSBjYXJlIGFib3V0IGNsaWNrcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBwYXJlbnRzXHJcbiAgICAgICAgICAgIGlmIChjbG9zZXN0TGkubWF0Y2hlcyhcIi50cmVldmlld19faXRlbS0tcGFyZW50XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGFuIG9wZW4gcGFyZW50IGl0ZW0gaXMgY2xpY2tlZCwgY2xvc2UgaXQsIGJ1dCBhbHNvIGFsbCBpdHMgb3BlbiBkZXNjZW5kYW50cy5cclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0TGkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0TGkuY2xhc3NMaXN0LnJlbW92ZShcInRyZWV2aWV3X19pdGVtLS1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZHJlbiA9IGNsb3Nlc3RMaS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi50cmVldmlld19faXRlbS0tb3BlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYWNfaT0wOyBhY19pPGFjdGl2ZUNoaWxkcmVuLmxlbmd0aDsgYWNfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZCA9IGFjdGl2ZUNoaWxkcmVuW2FjX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiBhbnkgY2xvc2VkIHBhcmVudHMgdGhhdCBhcmUgY2xpY2tlZC5cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RMaS5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIHNlbGVjdCBsaXN0IGZyb20gdGhlIHByZXZpb3VzIG5vZGUgc3RydWN0dXJlLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaGlsZEtleXMoY3VyclRleHQsIGN1cnJQYXRoLCBvYmosIGVsZW1lbnRUb0FkZFRvLCBsZXZlbCwgcGFyZW50c0NoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRDaGVja2VkU3RhdGUgPSBwYXJlbnRzQ2hlY2tlZDtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW1cIik7XHJcblxyXG4gICAgICAgIGlmICghdXNlQ2hlY2tib3hlcyAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggJiYgaXNTZWxlY3RlZEdyb3VwKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgY3VycmVudCBzdGF0ZSB3aGVuIGluIHRoZSAnbGluayBtb2RlJ1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS0tY3VycmVudFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hpbGRLZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGF0IHRoZSBib3R0b20gb2YgYSBicmFuY2ggaS5lLiBubyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgbm9kZSBoYXMgY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tLXBhcmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMSB8fCBzaG91bGRQYXJlbnRCZU9wZW4oY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuIGZpcnN0IGxldmVsIGNoaWxkcmVuIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgICAgICBcInRyZWV2aWV3X19pdGVtLS1vcGVuXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZSA9IGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRhaW5lciByZWFkeSB0byBiZSBwb3B1bGF0ZWQgd2l0aCB0aGUgY2hpbGQgbm9kZXNcclxuICAgICAgICAgICAgdmFyIGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19fbGlzdFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5hcHBlbmRDaGlsZChjaGlsZExpc3QpO1xyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuICAgICAgICAgICAgLy8gQ2FsbCByZWN1cnNpdmVseSB3aXRoIHVwZGF0ZWQgcGFyYW1zIGZvciBlYWNoIGNoaWxkIG5vZGVcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGNrX2k9MDsgY2tfaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGNrX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGRLZXlzW2NrX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEtleSAhPT0gJ0FsbCBjb250YWN0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q2hpbGRLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyUGF0aCArIFwiXFxcXFwiICsgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hpbGRLZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgaW5pdGlhbCBjYWxsIG9mIHRoZSByZWN1cnNpdmUgZnVuY3Rpb24gc3RhcnRpbmcgYXQgdGhlIHJvb3QuXHJcbiAgICBkaXNwbGF5Q2hpbGRLZXlzKFwiQWxsIENvbnRhY3QgR3JvdXBzXCIsIFwiXCIsIHN0cnVjdHVyZVtcIlxcXFxcIl0sIHRyZWVDb250YWluZXIsIDEsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIHRoZSBzZWxlY3QgbGlzdCB3aXRoIHRoZSBuZXcgdHJlZVxyXG4gICAgZ3JvdXBTZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodHJlZUNvbnRhaW5lciwgZ3JvdXBTZWxlY3QpO1xyXG5cclxuICAgIHRyZWVDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoaWRkZW5GaWVsZCk7XHJcblxyXG4gICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbn0pKFwiI0dyb3VwXCIsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KTtcclxufVxyXG4iLCIvLyBTdG9yZSBzZWxlY3RlZCB1c2VycyBpbnNpZGUgc2Vzc2lvbiBzdG9yYWdlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgY29uc3QgaW5pdGlhbCA9IHRoaXMuX2luaXRpYWxpc2UoKTtcclxuICAgIHRoaXMuX2l0ZW1zID0gbmV3IE1hcCgpO1xyXG4gICAgaW5pdGlhbC5mb3JFYWNoKCh7aWQsIG5hbWV9KSA9PiB0aGlzLl9pdGVtcy5zZXQoaWQsIG5hbWUpKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gUG9wdWxhdGUgc3RhcnQgaWRzLCBpbml0aWFsaXNlcyBjb29raWUgaWYgbm90IHByZXNlbnRcclxuICBfaW5pdGlhbGlzZSgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSXRlbXNKc29uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9uYW1lKTtcclxuICAgIGlmICghc2VsZWN0ZWRJdGVtc0pzb24pIHsgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy5fcGVyc2lzdChbXSk7ICAgXHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHNlbGVjdGVkSXRlbXNKc29uKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gU2F2ZSB0aGUgbmV3IGlkcyB0byB0aGUgc2Vzc2lvbiBzdG9yYWdlIGFmdGVyIHVwZGF0ZVxyXG4gIF91cGRhdGUoKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuICAgIHRoaXMuX3BlcnNpc3QoaXRlbXMpO1xyXG4gIH1cclxuICBcclxuICAvLyBTYXZlIHRoZSBwYXNzZWQgaW4gaWRzIHRvIHRoZSBjb29raWVcclxuICBfcGVyc2lzdChpdGVtcykgeyAgICBcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5fbmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gU2V0IGFsbCB0aGUgaXRlbXMgaW4gb25lIGhpdC4gUmV0dXJucyB0aGUgbmV3IGNvdW50LlxyXG4gIHNldEl0ZW1zKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gbmV3IE1hcCgpO1xyXG4gICAgaXRlbXMuZm9yRWFjaChpID0+IHRoaXMuX2l0ZW1zLnNldChpLmlkLCBpLm5hbWUpKTtcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgdGhlIGNvdW50IG9mIGl0ZW1zIGluIHRoZSBzZWxlY3Rpb24uXHJcbiAgZ2V0SWRzKCkge1xyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtcy5rZXlzKCkpO1xyXG4gICAgcmV0dXJuIGlkcztcclxuICB9ICBcclxuXHJcbiAgLy8gUmVtb3ZlIGFsbCBtYXAgaXRlbXMgd2hvc2UgaWRzIGFyZSBub3QgaW4gdGhlIHBhc3NlZCBpbiBsaXN0XHJcbiAgZmlsdGVyQnlJZHMoaWRzVG9LZWVwKSB7XHJcbiAgICBjb25zdCBpZHMgPSB0aGlzLmdldElkcygpO1xyXG4gICAgcmV0dXJuIGlkcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICBpZiAoIWlkc1RvS2VlcC5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9ICBcclxuICBcclxuICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgY3VycmVudGx5IGluIHRoZSBtYXAuXHJcbiAgZ2V0Q291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuc2l6ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmVtb3ZlIGl0ZW0gYnkgaXRzIGlkLiBSZXR1cm4gdGhlIG5ldyBjb3VudFxyXG4gIHJlbW92ZShpZCkge1xyXG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGlkKTsgICAgICBcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQWRkIG9uZSBvciBtb3JlIGl0ZW1zLiBSZXR1cm5zIHRoZSBuZXcgY291bnRcclxuICBhZGQoaWQsIG5hbWUpIHtcclxuICAgIHRoaXMuX2l0ZW1zLnNldChpZCwgbmFtZSk7XHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gYWxsIGl0ZW1zIGluIGFycmF5IGZvcm1hdFxyXG4gIGdldEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXRlbXMuZW50cmllcygpKS5tYXAoKFtpZCwgbmFtZV0pID0+ICh7IGlkLCBuYW1lIH0pKTtcclxuICB9XHJcblxyXG4gIC8vIEdldCB0aGUgbmFtZSBmb3IgYSBwYXNzZWQgaWRcclxuICBnZXROYW1lKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuZ2V0KGlkKTtcclxuICB9XHJcblxyXG4gIC8vIERvZXMgdGhlIG1hcCBjb250YWluIHRoZSBwYXNzZWQgaW4gaWQuXHJcbiAgaGFzSWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5oYXMoaWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gRW1wdGllcyB0aGUgbGlzdCBvZiBzZWxlY3RlZCBpdGVtcyBpbiB0aGUgbWFwLlxyXG4gIGNsZWFySXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRJdGVtcyhbXSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qXHJcbiAgVE9ETzogU3dpdGNoIHRvIHVzaW5nIGludGVyZWN0aW9uIG9ic2VydmVyXHJcbiovXHJcblxyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuXHJcbi8qKlxyXG4gIENsYXNzIHRvIG1hbmFnZSB0aGUgbG9hZCBvbiBzY3JvbGwgZnVuY3Rpb25hbGl0eSBmb3IgYSBwYWdlLlxyXG4gIFdoZW4gdGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkIHNlcnZlciBzaWRlIGl0IHNob3VsZCBoaWRlIHRoZSBsb2FkZXIgZWxlbWVudCBpZiBubyBtb3JlIHJlc3VsdHMgdG8gbG9hZC5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cmllckxhenlMb2FkZXIge1xyXG4gIFxyXG4gIC8qKlxyXG4gICAgQ29uc3RydWN0b3JcclxuICAgIFBhcmFtc1xyXG4gICAgIC0gbG9hZGVyRWxlbWVudCAocmVxdWlyZWQpOiBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcyB0aGUgbG9hZGVyXHJcbiAgICAgLSBsb2FkZXJGbiAocmVxdWlyZWQpOiBUaGUgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIGxvYWQgdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdpbGwgYmUgcGFzc2VkIGEgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIG9uIGNvbXBsZXRpb24gd2l0aCBhIGJvb2wgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hldGhlciBvciBub3QgdGhlcmUgYXJlIG1vcmUgaXRlbXMgdG8gbG9hZC5cclxuICAgICAtIGNvbmZpZ09iaiAob3B0aW9uYWwpOiAgQW4gb2JqZWN0IHdob3NlIGtleSBhbmQgdmFsdWVzIHdpbGwgb3ZlcnJpZGUgZGVmYXVsdCBjb25maWcgc2V0dGluZ3MuXHJcbiAgKi8gICAgICAgICAgICAgICAgICAgIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBsb2FkZXJFbGVtZW50LCBcclxuICAgICAgbG9hZGVyRm4sIFxyXG4gICAgICBjb25maWdPYmogPSB7fVxyXG4gICkge1xyXG4gICAgICAgIFxyXG4gICAgLyoqXHJcbiAgICAgIERlZmF1bHQgY29uZmlnIHNldHRpbmdzXHJcbiAgICAqL1xyXG4gICAgY29uc3QgY29uZmlnRGVmYXVsdHMgPSB7XHJcbiAgICAgIGxvYWRlckNsYXNzOiAnbG9hZGVyJywgIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnRcclxuICAgICAgbG9hZGVyTG9hZGluZ0NsYXNzOiAnbG9hZGVyLS1sb2FkaW5nJywgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudCB3aGVuIHNlYXJjaGluZ1xyXG4gICAgICBkZWJvdW5jZU1zOiAxMDAsIC8vIGhvdyBsb25nIHRvIHdhaXQgYmV0d2VlbiBldmVudHMgYmVmb3JlIGNhbGxpbmcgbG9hZFxyXG4gICAgICBwZWVrRGlzdGFuY2U6IDAsIC8vIGhvdyBtdWNoIG9mIGxvYWRpbmcgZWxlbWVudCBzaG91bGQgYmUgb24gc2NyZW4gYmVmb3JlIGNhbGxpbmcgbG9hZFxyXG4gICAgICBkZWJ1ZzogZmFsc2UgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGxvZyBkZWJ1ZyBpbmZvIHRvIGNvbnNvbGUuXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyRWxlbWVudDtcclxuICAgIHRoaXMuX2xvYWRlckZ1bmMgPSBsb2FkZXJGbjtcclxuICAgIHRoaXMuX21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgXHJcbiAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdHMgYW5kIHBhc3NlZCBpbiBjb25maWdcclxuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnRGVmYXVsdHMsIC4uLmNvbmZpZ09iaiB9O1xyXG4gICAgXHJcbiAgICAvLyBUcmFjayB3aGV0aGVyIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQgb3IgcmVtb3ZlZFxyXG4gICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgXHJcbiAgICBpZiAoIXRoaXMuX2xvYWRlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ051bGwgbG9hZGVyIGVsZW1lbnQgcHJvdmlkZWQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIG9uIHRoZSBsb2FkZXJzIGNsYXNzIGZyb20gdGhlIGNvbmZpZ1xyXG4gICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmxvYWRlckNsYXNzKTtcclxuICAgIFxyXG4gICAgLy8gRGVib3VuY2UgdGhlIGNoZWNrXHJcbiAgICB0aGlzLl9sYXp5TG9hZENoZWNrID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLl9kb0xvYWRNb3JlQ2hlY2soKSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0NhbGxpbmcgbG9hZCBtb3JlIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fc3RvcExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlYXJjaCBmdW5jdGlvbiAmIHBhc3MgaW4gdGhlIGRvbmUgc2VhcmNoaW5nIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyRnVuYyh0aGlzLl9kb25lU2VhcmNoaW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdOb3QgcmVhZHkgdG8gcmVsb2FkIHlldCcpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLl9jb25maWcuZGVib3VuY2VNcyk7XHJcbiAgICBcclxuICAgIC8vIEFkZCB0aGUgZXZlbnRzIChhbHNvIGRvZXMgaW5pdGlhbCBjaGVjaylcclxuICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9kb25lU2VhcmNoaW5nID0gdGhpcy5fZG9uZVNlYXJjaGluZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBcclxuICBfc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KHZpc2libGUpIHtcclxuICAgIGlmKHZpc2libGUpIHtcclxuICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBoYW5ka2xlIHJlc3VsdHMgY29taW5nIGJhY2sgaW5cclxuICBfZG9uZVNlYXJjaGluZyhtb3JlVG9Mb2FkKSB7XHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKGBfZG9uZVNlYXJjaGluZyBjYWxsYmFjayBjYWxsZWQgd2l0aCBtb3JlIHRvIGxvYWQgJHttb3JlVG9Mb2FkfWApO1xyXG4gICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcykgXHJcbiAgICBpZiAobW9yZVRvTG9hZCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdBbGwgZG9uZSAtIGhpZGluZyBsb2FkZXIgZWxlbWVudCcpO1xyXG4gICAgICB0aGlzLl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBXaXJlIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgZG8gaW5pdGlhbCBjaGVjay5cclxuICBfc3RhcnRMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkKSB7ICAgICAgXHJcbiAgICAgIHRoaXMuX21haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFkZGVkJyk7XHJcbiAgICAgIHRoaXMuX2xhenlMb2FkQ2hlY2soKTtcclxuICAgIH0gIGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWxyZWFkeSBpbiBwbGFjZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBSZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyc1xyXG4gIF9zdG9wTGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkKSB7XHJcbiAgICAgIHRoaXMuX21haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgICAgXHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyByZW1vdmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdObyBMaXN0ZW5lcnMgdG8gcmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhlbHBlciB0byBsb2cgb25seSBpZiBkZWJ1Z2dpbmcgZW5hYmxlZFxyXG4gIF9jb25kaXRpb25hbERlYnVnTG9nKHRvRGVidWcsIGxvZ2dlckZ1bmMgPSBjb25zb2xlLmxvZywgKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgIGxvZ2dlckZ1bmModG9EZWJ1ZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gRG8gdGhlIGNoZWNrIHRvIHNlZSBpZiBzY3JlZW4gc29tZXdoZXJlIGl0IHNob3VsZCBiZSBsb2FkZWQuXHJcbiAgX2RvTG9hZE1vcmVDaGVjaygpIHsgICAgXHJcblxyXG4gICAgY29uc3QgaGlnaGVzdFZpc2libGVZUG9zID0gdGhpcy5fbWFpbi5zY3JvbGxUb3AgKyB0aGlzLl9tYWluLmNsaWVudEhlaWdodDsgLy93aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9ICB0aGlzLl9tYWluLnNjcm9sbEhlaWdodDsgLy9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgY29uc3QgbG9hZE1vcmVUcmlnZ2VyUG9zID0gTWF0aC5taW4oKHRoaXMuX2xvYWRlci5vZmZzZXRUb3AgKyB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlKSwgZG9jdW1lbnRIZWlnaHQpOyBcclxuICAgIGNvbnN0IHBlZWtQb3NpdGlvblZpc2libGUgPSBoaWdoZXN0VmlzaWJsZVlQb3MgPj0gbG9hZE1vcmVUcmlnZ2VyUG9zO1xyXG4gICAgY29uc3Qgc2hvdWxkTG9hZE1vcmUgPSBwZWVrUG9zaXRpb25WaXNpYmxlO1xyXG4gICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdEb2luZyBsb2FkIG1vcmUgY2hlY2sgLi4uJyk7ICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyh7IFxyXG4gICAgICAnVG9wIHBvc2l0aW9uIG9mIGxvYWRlciBlbGVtZW50JzogdGhpcy5fbG9hZGVyLm9mZnNldFRvcCxcclxuICAgICAgJ0NvbmZpZyBwZWVrIGRpc3RhbmNlJzogdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSxcclxuICAgICAgJ1kgY28tb3JkaW5hdGUgd2hlbiBtb3JlIHNob3VsZCBiZSBsb2FkZWQgKGluY2x1ZGluZyBwZWVrLCBjb25zdHJhaW5lZCB0byBkb2MgaGVpZ2h0KSc6IGxvYWRNb3JlVHJpZ2dlclBvcyxcclxuICAgICAgLy8nQ3VycmVudCBZIHBvc2l0aW9uIG9mIHNjcm9sbCc6IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgLy8gJ1RoZSBpbnRlcm5hbCBzaXplIG9mIHRoZSB3aW5kb3cnOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICdUaGUgbWF4IHkgcG9zaXRpb24gdmlzaWJsZSc6IGhpZ2hlc3RWaXNpYmxlWVBvcyxcclxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcclxuICAgICAgJ0lzIHBlZWsgcG9zaXRpb24gdmlzaWJsZSc6IHBlZWtQb3NpdGlvblZpc2libGUsXHJcbiAgICAgICdJcyB0aGUgbG9hZCBtb3JlIHBvc2l0aW9uIHZpc2libGUsIG9yIGF0IGRvYyBlbmQnOiBzaG91bGRMb2FkTW9yZSxcclxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHNob3VsZExvYWRNb3JlO1xyXG4gIH07XHJcbn1cclxuXHJcbi8qXHJcblxyXG5kb0xvYWRNb3JlQ2hlY2soKSB7ICAgIFxyXG4gICAgY29uc3QgaGlnaGVzdFZpc2libGVZUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgY29uc3QgbG9hZE1vcmVUcmlnZ2VyUG9zID0gKHRoaXMuX2xvYWRlci5vZmZzZXRUb3AgKyB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlKTsgIC8vIE1hdGgubWluKCh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSksIGRvY3VtZW50SGVpZ2h0KTsgXHJcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcclxuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcclxuICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcclxuICAgICAgJ1RvcCBwb3NpdGlvbiBvZiBsb2FkZXIgZWxlbWVudCc6IHRoaXMuX2xvYWRlci5vZmZzZXRUb3AsXHJcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXHJcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXHJcbiAgICAgICdDdXJyZW50IFkgcG9zaXRpb24gb2Ygc2Nyb2xsJzogd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAnVGhlIGludGVybmFsIHNpemUgb2YgdGhlIHdpbmRvdyc6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgJ1RoZSBtYXggeSBwb3NpdGlvbiB2aXNpYmxlJzogaGlnaGVzdFZpc2libGVZUG9zLFxyXG4gICAgICAnVGhlIGhlaWdodCBvZiBkb2N1bWVudCc6IGRvY3VtZW50SGVpZ2h0LFxyXG4gICAgICAnSXMgcGVlayBwb3NpdGlvbiB2aXNpYmxlJzogcGVla1Bvc2l0aW9uVmlzaWJsZSxcclxuICAgICAgJ0lzIHRoZSBsb2FkIG1vcmUgcG9zaXRpb24gdmlzaWJsZSwgb3IgYXQgZG9jIGVuZCc6IHNob3VsZExvYWRNb3JlLFxyXG4gICAgfSwgY29uc29sZS50YWJsZSk7IFxyXG4gICAgXHJcbiAgICByZXR1cm4gc2hvdWxkTG9hZE1vcmU7XHJcbiAgfTtcclxuXHJcbiovIiwiXHJcbmltcG9ydCB7U2VlQWxsQXR0cmlidXRlSGVscGVyfSBmcm9tICcuL1NlZUFsbEhlbHBlcic7XHJcblxyXG5uZXcgU2VlQWxsQXR0cmlidXRlSGVscGVyKCk7XHJcbiIsIi8qKlxyXG4gKiAgVVNBR0U6IFRvIHVzZSB0aGlzIGNvbnRyb2wgeW91IG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlIHRvIHRoZSBidXR0b24gdGhhdCBzaG91bGQgYmUgZG9pbmcgdGhlIHNob3cgYWxsLlxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC1jb250YWluZXItaWQ9XCI8PGlkIG9mIGNvbnRhaW5lciB0byBiZSBlZmZlY3RlZD4+XCJcclxuICogXHJcbiAqICBPUFRJT05BTDogVXNlIHRoZSBmb2xsb3dpbmcgYXR0cnRpYnV0ZXMgdG8gYWRqdXN0IHRoZSBiZWhhdmlvclxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcclxuICogIFxyXG4gKiAgZGF0YS1zaG93YWxsLWNvdW50LWlkIC0gaWQgb2YgYSBmaWVsZCB0aGF0IHNob3VsZCBiZSB1cGRhdGVkIHdpdGggYSBjb3VudCBvZiB0aGUgaXRlbXNcclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1zZWxlY3RvciAtIGEgc2VsZWN0b3IgdG8gZ2V0IHRoZSBpdGVtIGZyb20gd2l0aCB0aGUgY29udGFpbmVyLiAgVGhpcyBpcyByZXF1aXJlZCBpZiB0aGUgY29udGFpbmVyIGlzIG5vdCBhIHRhYmxlXHJcbiAqL1xyXG5cclxuIGV4cG9ydCBjbGFzcyBTZWVBbGxBdHRyaWJ1dGVIZWxwZXIge1xyXG4gICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHZhciBzaG93TW9yZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zaG93YWxsLWNvbnRhaW5lci1pZF0nKTtcclxuXHJcbiAgICAgICAgc2hvd01vcmVCdXR0b25zLmZvckVhY2goc2hvd0FsbEJ1dHRvbiA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXJJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWNvbnRhaW5lci1pZFwiKTtcclxuICAgICAgICAgICAgdmFyIGl0ZW1TZWxlY3RvciA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWl0ZW0tc2VsZWN0b3JcIik7XHJcbiAgICAgICAgICAgIHZhciBzaG93QWxsSXRlbUxpbWl0ID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtaXRlbS1saW1pdFwiKTtcclxuICAgICAgICAgICAgdmFyIHNob3dBbGxJdGVtQ291bnRJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWNvdW50LWlkXCIpO1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9uSWQgPSBzaG93QWxsQnV0dG9uLmlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFidXR0b25JZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RvclRvVXNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW1TZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JUb1VzZSA9IGAjJHtjb250YWluZXJJZH0gJHtpdGVtU2VsZWN0b3J9YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gXCJUQUJMRVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclRvVXNlID0gYCMke2NvbnRhaW5lcklkfSB0Ym9keSB0cmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gY2hpbGQgc2VsZWN0b3IgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcGFyc2VkSXRlbUxpbWl0ID0gcGFyc2VJbnQoc2hvd0FsbEl0ZW1MaW1pdCwgMTApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VkSXRlbUxpbWl0KSkgeyBcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7Li4ub3B0aW9ucywgaXRlbUxpbWl0OiBwYXJzZWRJdGVtTGltaXR9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzaG93QWxsSXRlbUNvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7Li4ub3B0aW9ucywgY291bnRGaWVsZElkOiBzaG93QWxsSXRlbUNvdW50SWR9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXcgU2VlQWxsSGVscGVyKHNlbGVjdG9yVG9Vc2UsIGAjJHtidXR0b25JZH1gLCBvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgU2VlQWxsSGVscGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtc1NlbGVjdG9yLCBzZWVBbGxTZWxlY3RvciwgcGFzc2VkT3B0aW9ucyA9IHt9KSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zU2VsZWN0b3IgPSBpdGVtc1NlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX3NlZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VlQWxsU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3NlZUFsbCkge1xyXG4gICAgICAgICAgICAvLyBSdW5uaW5nIG9uIGEgcGFnZSB3aXRob3V0IHNlZSBhbGwgYnV0dHRvbiwgc28gc3RvcCBhZnRlciBjb3VudHMuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsID0gdGhpcy5fc2VlQWxsLnN0eWxlLmRpc3BsYXk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0geyBpdGVtTGltaXQ6IDUsIHNob3dMZXNzVGV4dDogXCJTZWUgTGVzc1wiLCBjb3VudEZpZWxkSWQ6IG51bGwgfTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0geyAuLi5kZWZhdWx0cywgLi4ucGFzc2VkT3B0aW9ucyB9O1xyXG4gICAgICAgIHRoaXMuX2l0ZW1MaW1pdCA9IHRoaXMuX29wdGlvbnMuaXRlbUxpbWl0O1xyXG5cclxuICAgICAgICB0aGlzLl9zaG93TGVzc1RleHQgPSB0aGlzLl9vcHRpb25zLnNob3dMZXNzVGV4dDtcclxuICAgICAgICB0aGlzLl9zaG93TW9yZVRleHQgPSB0aGlzLl9zZWVBbGwudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvdW50RmllbGQgPSB0aGlzLl9vcHRpb25zLmNvdW50RmllbGRJZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX29wdGlvbnMuY291bnRGaWVsZElkKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX3Nob3dpbmdBbGwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2VlQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdBbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGVFeGNlc3NJdGVtcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd0FsbEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dpbmdBbGwgPSAhdGhpcy5fc2hvd2luZ0FsbDtcclxuICAgICAgICAgICAgdGhpcy5fc2VlQWxsLnRleHRDb250ZW50ID0gdGhpcy5fc2hvd2luZ0FsbCA/IHRoaXMuX3Nob3dMZXNzVGV4dCA6IHRoaXMuX3Nob3dNb3JlVGV4dDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93QWxsSXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIF9oaWRlRXhjZXNzSXRlbXMoKSB7XHJcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IGluZGV4ICsgMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHRvQ2hlY2sgPiB0aGlzLl9pdGVtTGltaXQgP1xyXG4gICAgICAgICAgICAgICAgXCJub25lXCIgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWNhbGN1bGF0ZSgpIHsgICAgXHJcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faXRlbXNTZWxlY3RvcikpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY291bnRGaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb3VudEZpZWxkLnRleHRDb250ZW50ID0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX3NlZUFsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWxsSXRlbXMubGVuZ3RoIDw9IHRoaXMuX2l0ZW1MaW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWVBbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXMgPSB0aGlzLl9hbGxJdGVtc1swXS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3dpbmdBbGwpICB7IHRoaXMuX2hpZGVFeGNlc3NJdGVtcygpOyB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqKioqKiBcclxuXHJcbiAgQ3JlYXRlcyBhIHRhZyBsaXN0IGZyb20gYSBzZWxlY3QgZWxlbWVudFxyXG5cclxuICB1c2FnZTpcclxuXHJcbiAgbmV3IFNlbGVjdExpc3RUYWcoc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMpLlxyXG5cclxuICAtIHNlbGVjdElkIChyZXF1aXJlZCk6IFRoZSBpZCBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgYWN0aW5nIGFzIHRoZSBzb3VyY2UgKG11c3QgaGF2ZSBtdWx0aXBsZSBhdHRyaWJ1dGUsIGFuZCBhbGwgaXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZClcclxuXHJcbiAgLSByZXZlcnRHcm91cHMgKG9wdGlvbmFsKTogVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBjbGlja2VkIHRvIHJldmVydCBzZWxlY3RlZCBvcHRpb25zIChzaG91bGQgaGF2ZSBpcy1oaWRkZW4gY2xhc3MgdG8gc3RhcnQpXHJcblxyXG4gIC0gb25VcGRhdGVGdW5jIChyZXF1aXJlZCk6IEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSB0YWcgaGFzIGJlZW4gcmVtb3ZlZCwgb3Igb3B0aW9ucyBhcmUgcmV2ZXJ0ZWQuLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggdHdvIHBhcmFtcywgc2VsZWN0ZWRPcHRpb25zIGFuZCBhbGxPcHRpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgaW50ZW5kZWQgdG8gbWFrZSB0aGUgY29udHJvbCBtb3JlIGZsZXhpYmxlIGkuZS4gb3VyIGZpcnN0IHVzYWdlIGlzIHRvIHVwZGF0ZSBsYWJlbCB3aXRoIHNlbGVjdGVkIGl0ZW1zIHRleHQgZWxzZXdoZXJlIG9uIHBhZ2Ugd2l0aG91dCBmdXJ0aGVyIGNvdXBsaW5nLlxyXG5cclxuICAtIGl0ZW1zIChvcHRpb25hbCk6ICBIdG1sIG9wdGlvbiBlbGVtZW50cyB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB1bmRlcmx5aW5nIHNlbGVjdCBsaXN0IGJlZm9yZSB0YWdzIGdlbmVyYXRlZC4gXHJcblxyXG4qKioqKiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdExpc3RUYWdzIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYyA9ICgpID0+IHt9LCBvcHRpb25zID0gbnVsbCkge1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyA9IG9uVXBkYXRlRnVuYztcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdElkKTtcclxuICAgICAgdGhpcy50YWdPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG5cclxuICAgICAgaWYgKHJldmVydEdyb3Vwc0lkKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXZlcnRHcm91cHNJZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICB0aGlzLnJldmVydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IG8uc2VsZWN0ZWQgPSB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiB0aGlzLnRhZ09wdGlvbnMuYXBwZW5kQ2hpbGQobykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBOb3cgaGFuZGxlcyBwYXNzZWQgaW4gc2VsZWN0IG9wdGlvbnNcclxuICAgICAgdGhpcy5hbGxPcHRpb25zID0gb3B0aW9ucyB8fCBbLi4udGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnJldmVydEJ0biAmJiB0aGlzLmFsbE9wdGlvbnMuc29tZShvID0+ICFvLnNlbGVjdGVkKSkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXHJcbiAgICAgIHRoaXMudGFncy5jbGFzc0xpc3QuYWRkKCd0YWdzJyk7XHJcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xyXG4gICAgICAgICAgY29uc3QgbyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInK3RhcmdldFZhbCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgaWYobyl7XHJcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5hZnRlcih0aGlzLnRhZ3MpO1xyXG5cclxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlVGFncygpIHtcclxuICAgICAgdGhpcy50YWdzLmlubmVySFRNTCA9ICcnOyAgICAgIFxyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFsbE9wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCk7XHJcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFncy5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUYWcodC5pbm5lclRleHQsIHQudmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jKHNlbGVjdGVkT3B0aW9ucywgdGhpcy5hbGxPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgbWFrZVRhZyh0ZXh0LCB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBpLmNsYXNzTGlzdC5hZGQoXCJidXR0b25fX2ljb25cIik7ICAgICAgXHJcbiAgICAgIGkuZGF0YXNldC52YWw9dmFsdWU7XHJcbiAgICAgIGkuaW5uZXJUZXh0ID0gXCJjbGVhclwiXHJcblxyXG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoaSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGFnO1xyXG4gICAgfTtcclxuXHJcbiAgLy8gRGVzZWxlY3QgYWxsIHRoZSBvcHRpb25zIGluIHRoZSB1bmRlcmx5aW5nIHNlbGVjdCBsaXN0LiAgT3B0aW9uYWxseSByZWduZXJhdGVkIHRoZSB0YWdzIGxpc3QuIFxyXG4gIC8vIE9wdGlvbmFsIGFzIG5vdCB3b3J0aCBvdmVyaGVhZCBpZiBkb250IG5lZWQgaXQuIFxyXG4gIGNsZWFySXRlbXMocmVwb2x1bGF0ZVRhZ3MgPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IG8uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcblxyXG4gICAgaWYgKHJlcG9sdWxhdGVUYWdzKSB7ICAgICAgXHJcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTaG91bGQgaGF2ZSBhIHNlY3Rpb24gbGlrZSB0aGlzIGZvciBlYWNoIHBhZ2UgdGhlIGNvbnRyb2wgaXMgdXNlZCBvbiwgdW5sZXNzIHdlIHdhbnQgaXQgYmVoYXZlIGV4YWN0bHkgdGhlIHNhbWUgYXMgYSBwcmV2aW91cyB2ZXJzaW9uIChpbmNsdWRpbmcgaWRzIGFuZCB1cGRhdGUgZnVuY3Rpb24pIFxyXG4vLyAqQmV0dGVyIHN0aWxsKiAtIGhhdmUgaW4gc2VwZXJhdGUgc2NyaXB0IGZpbGUgc2NvcGVkIHRvIHNwZWNpZmljIHBhZ2UgKGxpa2Ugd2l0aCBTZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMpXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sbG93dXBHcm91cFNlbGVjdG9yJykpIHtcclxuXHJcbiAgLy8gUHJlcGFyZSBhbiB1cGRhdGUgZnVuY3Rpb24gaWYgcmVxdWlyZWQgKG9wdGlvbmFsIHBhcmFtZXRlcilcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlR3JvdXBzTGFiZWxTcGFuJyk7XHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcGx1cmFsaXNlZEdyb3VwcyA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnZ3JvdXAnIDogJ2dyb3Vwcyc7XHJcbiAgICBzcGFuLmlubmVyVGV4dCA9IGBTZW5kIHRvICR7c2VsZWN0ZWRPcHRpb25zLmxlbmd0aH0gcmVzcG9uc2UgJHtwbHVyYWxpc2VkR3JvdXBzfWA7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXNlIGFuIGluc3RhbmNlIG9mIHRoZSBjb250cm9sXHJcbiAgbmV3IFNlbGVjdExpc3RUYWdzKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InLCAncmV2ZXJ0X2dyb3VwcycsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsIi8vIFN0b3JlIGEgc2ltcGxlIHZhbHVlIGluIGEgY29va2llXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUNvb2tpZUhlbHBlcntcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLl9pbml0aWFsaXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llO1xyXG5cclxuICAgICAgICBjb25zdCBjb29raWVzID0gY29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ29va2llID0gY29va2llcy5maW5kKGMgPT4gYy5zdGFydHNXaXRoKGAke3RoaXMuX25hbWV9PWApKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBtYXRjaGluZ0Nvb2tpZSA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGluZ0Nvb2tpZS5zcGxpdCgnPScpWzFdKSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0Nvb2tpZSA9IGAke3RoaXMuX25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX07IHBhdGg9Lzsgc2FtZXNpdGU9U3RyaWN0YFxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5ld0Nvb2tpZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuLy8gUmVtb3ZlIHRoZSBuby1qcyBjbGFzcyBzbyB3ZSBhcmUgYWJsZSB0byB0ZWxsIHRoYXQganMgaXMgZW5hYmxlZFxyXG4vLyBVc2VmdWwgZm9yIGhpZGluZyBlbGVtZW50cyB3aGVuIGpzIG5vdCBhdmFpbGFibGUuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdqcycpOyIsImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VzJykgIT0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgcmVzcG9uc2UgZmllbGRzIGFuZCB0aGUgcmVzcG9uc2UgbGlzdFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1maWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9ucy1saXN0Jyk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRoZSBlbXB0eSByZXNwb25zZSBmaWVsZHNcclxuICAgICAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpIC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFzZXQua2V5ID0gaWR4O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZXZlYWxzIHRoZSBmaXJzdCBoaWRkZW4gaXRlbVxyXG4gICAgICAgIGNvbnN0IHNob3dGaXJzdEVtcHlJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlc3BvbnNlID0gcmVzcG9uc2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNwb25zZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiBhbiBpdGVtIGlzIHJlbW92ZWQsIGNvcHkgYWxsIHZhbHVlcyBmb3J3YXJkIHRvIGZpbGwgZ2Fwc1xyXG4gICAgICAgIGNvbnN0IGNvcHlJdGVtc0ZvcndhcmQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gaW5kZXggKyAxOyBpZHggPCByZXNwb25zZXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldklucHV0ID0gcmVzcG9uc2VzW2lkeC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSByZXNwb25zZXNbaWR4XS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBwcmV2SW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTGFzdEVtcHR5SXRlbSA9IChyZW1vdmVJZHgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFzIGFsbCBjb3BpZWQgZm9yd2FyZCBibGFuayBsYXN0IGl0ZW0gb3V0XHJcbiAgICAgICAgICAgIHJlc3BvbnNlc1tyZXNwb25zZXMubGVuZ3RoLTFdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIGJhY2t3YXJkcyBhbmQgaGlkZSBsYXN0IHZpc2libGUgaXRlbVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSAocmVzcG9uc2VzLmxlbmd0aC0xKTsgaWR4ID49IHJlbW92ZUlkeDsgaWR4LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZXNbaWR4XS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXNbaWR4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFkZFJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfcmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIHNob3dGaXJzdEVtcHlJdGVtKCk7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlc3BvbnNlc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLXJlc3BvbnNlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSWR4ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb3B5SXRlbXNGb3J3YXJkKHJlbW92ZUlkeCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMYXN0RW1wdHlJdGVtKHJlbW92ZUlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pKCk7XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkUGhvbmVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkUGhvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFBob25lQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRQaG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSkoXCJhZGRQaG9uZVwiKTtcclxuXHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkRW1haWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEVtYWlsQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRFbWFpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkoXCJhZGRFbWFpbFwiKTtcclxuXHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZUdyb3VwQnV0dG9uICE9bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KShcImFkZF9ncm91cFwiKTtcclxufVxyXG5cclxudmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG5pZiAoZ3JvdXBUZXh0YXJlYSAhPSBudWxsKSB7XHJcbiAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0MiA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0Mi5tYXRjaGVzKFwiLmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcclxuXHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJykgIT1udWxsKSB7XHJcblxyXG4gICAgdmFyIGlucHV0RXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpO1xyXG4gICAgdmFyIGlucHV0RXJyb3JzQXJyYXkgPSBPYmplY3Qua2V5cyhpbnB1dEVycm9ycyk7XHJcblxyXG4gICAgaW5wdXRFcnJvcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRFcnJvcnNba2V5XSk7XHJcbiAgICAgICAgaW5wdXRFcnJvcnNba2V5XS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4vLyAgICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG4vLyAgICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuLy8gICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImFzaWRlLS1hY3RpdmVcIik7XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuXHJcbi8vIH0pKFwiI1NpZGViYXJcIik7XHJcblxyXG4iLCIvKiBcclxuICBEZWJvdW5jZSBmdW5jdGlvbiBwcmV2ZW50IGV4Y2Vzc2l2ZSBjYWxscyBvbiBzY3JvbGwuXHJcbiAgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxyXG4qL1xyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XHJcblx0dmFyIHRpbWVvdXQ7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdH07XHJcblx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdH07XHJcbn07IiwiXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xyXG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGV4aXN0cyBhbmQgaWYgaXQgZG9lc250IHNldHVwIG9iamVjdCByZWFkeSBmb3IgZXZlbnRMaXN0ZW5lclxyXG4gICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW0gIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9IEpTT04ucGFyc2Uoc25hY2tiYXJTdG9yYWdlSXRlbSk7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcclxuICAgICAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vaWYgaXQgZG9lcyB0aGVuIGhpZGUgdGhlIHNuYWNrYmFyXHJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9ucyA6IG5ldyBBcnJheSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc25hY2tiYXIpIHtcclxuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgaWYgKCFzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMucHVzaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0pKFwiI2hpbnQtc25hY2tiYXJcIik7XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiAgV2lyZSB1cCB0YWJsZXMgc28gdGhhdCB3aG9sZSByb3cgY2FuIGJlIGNsaWNrZWQsIHJhdGhlciB0aGFuIGluZGl2aWR1YWwgY2VsbHNcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyBHZXQgYWxsIHRhYmxlIHJvd3MgdGhhdCBzaG91bGQgYmUgY2xpY2thYmxlXHJcbmNvbnN0IHJvd3NUb0xpbmtpZnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZVtkYXRhLWxpbmthYmxlLWNlbGxdID4gdGJvZHkgPiB0cicpO1xyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIGNsaWNrXHJcbmNvbnN0IGhhbmRsZVJvd0NsaWNrID0gZSA9PiB7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGNvbHVtbiB0aGF0IHNob3VsZCBjb250YWluIHRoZSBsaW5rXHJcbiAgY29uc3QgdGFibGUgPSBlLnRhcmdldC5jbG9zZXN0KCd0YWJsZScpO1xyXG4gIGNvbnN0IGNvbFRvUGFyc2UgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlua2FibGUtY2VsbCcpO1xyXG5cclxuICAvLyBHZXQgdGhlIGNsaWNrZWQgcm93LCBhcyBtYXliZSBhIHRkIGNsaWNrZWQuXHJcbiAgY29uc3Qgcm93ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSBsaW5rIHRoYXQgc2hvdWxkIGJlIGNsaWNrZWQuXHJcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludChjb2xUb1BhcnNlLDEwKSArIDE7XHJcbiAgICBjb25zdCBsaW5rID0gcm93LnF1ZXJ5U2VsZWN0b3IoYHRkOm50aC1jaGlsZCgke2NvbH0pIGFgKTtcclxuICAgIFxyXG4gICAgLy8gQ2xpY2sgdGhlIGxpbmsgb3IgcmVwb3J0IGZhaWx1cmUgdG8gZmluZFxyXG4gICAgaWYgKGxpbmspIHtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGxpbmsgZm91bmQgaW4gY29sdW1uIHNwZWNpZmllZCBieSBbZGF0YS1saW5rYWJsZS1jZWxsXScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaCB7XHJcbiAgICAvLyBXYXJuIG9mIGludmFsaWQgY29sdW1uIHNwZWNpZmllZC5cclxuXHRjb25zb2xlLmVycm9yKCdJbnZhbGlkIHZhbHVlIHNwZWNpZmllZCBieSBbZGF0YS1saW5rYWJsZS1jZWxsXScpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIFdpcmUgdXAgdGhlIGxpc3RlbmVyc1xyXG5yb3dzVG9MaW5raWZ5LmZvckVhY2gocm93ID0+IHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJvd0NsaWNrKSk7IiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIC8vZ2V0IGRpdiBJRCB3aXRob3V0ICNcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1lbnUpO1xyXG5cclxuICAgIGlmIChtZW51KSB7XHJcblxyXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcclxuICAgICAgICB2YXIgbWVudUNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51QnV0dG9uLmRhdGFzZXQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0b3IgKyAnIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSl7XHJcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSgnI3NlYXJjaCcpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIC8vZ2V0IGRpdiBJRCB3aXRob3V0ICNcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1lbnUpO1xyXG5cclxuICAgIGlmIChtZW51KSB7XHJcblxyXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcclxuICAgICAgICB2YXIgbWVudUNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51QnV0dG9uLmRhdGFzZXQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0b3IgKyAnIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICAmJiBtZW51Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkoJyNtZW51Jyk7IiwiLyogXHJcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc3RhZmYgY29tcG9zZSBwYWdlLlxyXG4qL1xyXG5cclxuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuLi9TaW1wbGVDb29raWVIZWxwZXInO1xyXG5pbXBvcnQgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciBmcm9tICcuLi9JZFNlc3Npb25TdG9yYWdlSGVscGVyJztcclxuaW1wb3J0IFNlbGVjdExpc3RUYWdzIGZyb20gJy4uL1NlbGVjdExpc3RUYWdzJztcclxuaW1wb3J0IHtTZWVBbGxIZWxwZXJ9IGZyb20gJy4uL1NlZUFsbEhlbHBlcic7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1jb21wb3NlJykpIHtcclxuXHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jb250YWN0Jyk7XHJcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmplY3RfaW5wdXQnKTtcclxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRfTWVzc2FnZScpO1xyXG4gIGNvbnN0IHJlc2VuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X0F1dG9SZXNlbmRTY2hlZHVsZScpO1xyXG4gIGNvbnN0IHJlc3BvbnNlT3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLW9wdGlvbicpKTtcclxuXHJcbiAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gIGNvbnN0IGNvb2tpZU1lc3NhZ2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZUNvbnRlbnQnKTtcclxuICBjb25zdCBjb29raWVBdXRvUmVzZW5kSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VSZXNlbmQnKTtcclxuICBjb25zdCBjb29raWVSZXNwb25zZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzcG9uc2VzJyk7XHJcbiAgY29uc3QgaWRzU2Vzc2lvbkhlbHBlciA9IG5ldyBJZFNlc3Npb25TdG9yYWdlSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJzJyk7XHJcbiAgXHJcbiAgY29uc3QgZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBub25FbXB0eU9wdGlvbnMgPSByZXNwb25zZU9wdGlvbnMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgaWYgKGN1cnIudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFjYywgY3Vyci52YWx1ZV07XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5vbkVtcHR5T3B0aW9ucy5qb2luKCd8fCcpO1xyXG4gIH07XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvb2tpZUhlbHBlci5zZXQoc3ViamVjdElucHV0LnZhbHVlKTtcclxuICAgIGNvb2tpZU1lc3NhZ2VIZWxwZXIuc2V0KG1lc3NhZ2VJbnB1dC52YWx1ZSk7XHJcbiAgICBjb29raWVBdXRvUmVzZW5kSGVscGVyLnNldChyZXNlbmRJbnB1dC52YWx1ZSk7ICBcclxuICAgIGNvb2tpZVJlc3BvbnNlSGVscGVyLnNldChnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZygpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGFnc1NlZUFsbEhlbHBlciA9IG5ldyBTZWVBbGxIZWxwZXIoJyNBc2NTdGFmZlNlbGVjdG9yICsgZGl2ID4gLnRhZycsICcjc2VlTW9yZVJlY2lwaWVudHMnLCB7IGl0ZW1MaW1pdDogMjEsIGNvdW50RmllbGRJZDogJ3JlY2lwaWVudHNDb3VudCcgfSk7XHJcbiAgXHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgaWRzU2Vzc2lvbkhlbHBlci5maWx0ZXJCeUlkcyhzZWxlY3RlZE9wdGlvbnMubWFwKHggPT4geC52YWx1ZSkpO1xyXG4gICAgdGFnc1NlZUFsbEhlbHBlci5yZWNhbGN1bGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IGlkc1Nlc3Npb25IZWxwZXIuZ2V0SXRlbXMoKS5tYXAoKHtpZCwgbmFtZX0pPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gaWQ7XHJcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIHJldHVybiBvcHRpb247XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3Qgc2x0ID0gbmV3IFNlbGVjdExpc3RUYWdzKCdBc2NTdGFmZlNlbGVjdG9yJywgbnVsbCwgb25VcGRhdGVGdW5jLCBzZWxlY3RPcHRpb25zKTsgXHJcblxyXG4gIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuXHJcbiAgY29uc3QgZGlzY2FyZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5EaXNjYXJkJyk7XHJcbiAgZGlzY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlkc1Nlc3Npb25IZWxwZXIuY2xlYXJJdGVtcygpO1xyXG4gICAgc2x0LmNsZWFySXRlbXMoKTtcclxuICAgIHRhZ3NTZWVBbGxIZWxwZXIoKTtcclxuICB9KTtcclxuXHJcblxyXG59XHJcbiIsIlxyXG4vLyBDaGVjayB3ZSBhcmUgb24gdGhlIGNvcnJlY3QgcGFnZS5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4uY291cmllci1wcm9maWxlLXBhZ2UnKTtcclxuXHJcbmlmIChtYWluKSB7XHJcblxyXG4gICAgLy8gR3JhYiBhbGwgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgb25seSBzaG93IHdoZW4ganMgZW5hYmxlZFxyXG4gICAgY29uc3QgYWRkUGhvbmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmVCdG4nKTtcclxuICAgIGNvbnN0IGFkZEVtYWlsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsQnRuJyk7XHJcbiAgICBjb25zdCByZW1vdmVFbWFpbEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSk7XHJcbiAgICBjb25zdCByZW1vdmVQaG9uZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSk7XHJcbiAgICBcclxuICAgIC8vIFNob3cgYWxsIHRoZSBqcyBvbmx5IGJ1dHRvbnNcclxuICAgIFthZGRQaG9uZUJ0biwgYWRkRW1haWxCdG4sIC4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lbWFpbHMnKTtcclxuICAgIFxyXG4gICAgZW1haWxzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxhbmsnKTtcclxuICAgICAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBob25lc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1waG9uZXMnKTtcclxuICAgIFxyXG4gICAgcGhvbmVzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7ICAgICAgICBcclxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdibGFuaycpO1xyXG4gICAgICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYW55IGVtcHR5IHBob25lIGJveGVzLCBvciBlbWFpbCBib3hlc1xyXG4gICAgY29uc3QgaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUgPSAoc2VjdGlvbiwgc2VsZWN0b3IpID0+IHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZWN0aW9uXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcclxuICAgICAgICAgICAgLnNvbWUoeCA9PiB4LnZhbHVlLnRyaW0oKSA9PT0gJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTaG91bGQgbm90IGhhdmUgYW5kIGFkZCBlbWFpbCBidXR0b24gaWYgYWxyZWFkeSBhIGJsYW5rIG9uZSBhdmFpbGFibGVcclxuICAgIGNvbnN0IHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSA9ICgpID0+IHtcclxuICAgICAgICBhZGRQaG9uZUJ0bi5zdHlsZS5kaXNwbGF5ID0gaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUocGhvbmVzU2VjdGlvbiwgJy5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0JykgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3VsZCBub3QgaGF2ZSBhbmQgYWRkIHBob25lIGJ1dHRvbiBpZiBhbHJlYWR5IGEgYmxhbmsgb25lIGF2YWlsYWJsZVxyXG4gICAgY29uc3Qgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZEVtYWlsQnRuLnN0eWxlLmRpc3BsYXkgPSAgaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUoZW1haWxzU2VjdGlvbiwgJy5pbnB1dC0tcHJvZmlsZS1lbWFpbCA+IGlucHV0JykgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgZm9ybSwgdG8gYWRkIHJlbW92ZSBsaXN0ZW5lcnMgdG9cclxuICAgIGNvbnN0IGNvbnRhY3RQcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXByb2ZpbGUtZm9ybScpOyAgIFxyXG5cclxuICAgIFsuLi5yZW1vdmVFbWFpbEJ1dHRvbnMsIC4uLnJlbW92ZVBob25lQnV0dG9uc10uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LmFkZCgnaW5wdXRfX3dpdGhhY3Rpb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlbW92ZSBleGNlc3MgaW5wdXRzIG9mIHRoZXNlIHR5cGVzIG9uIGxvYWQgKEFkZGVkIGZvciBub24ganMgcHVycG9zZXMpLlxyXG4gICAgW1wiLmlucHV0LS1wcm9maWxlLXBob25lID4gaW5wdXRcIiwgXCIuaW5wdXQtLXByb2ZpbGUtZW1haWwgPiBpbnB1dFwiXS5mb3JFYWNoKHNlbGVjdG9yID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dHNGb3JTZWxlY3RvciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRzRm9yU2VsZWN0b3IubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBpbnB1dHNGb3JTZWxlY3Rvci5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1lbWFpbCcsICdJbnB1dC5QZXJzb25hbEVtYWlsQWRkcmVzc2VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IGNvcnJlY3Qgc3RhcnQgc3RhdGUgZm9yIGVtYWlsIGFuZCBwaG9uZSBhZGQgYnV0dG9uc1xyXG4gICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuXHJcbiAgICAvLyBBZGQgYSBuZXcgcGhvbmUgcm93XHJcbiAgICBmdW5jdGlvbiBuZXdQaG9uZVJvdygpIHsgICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBuZXdQaG9uZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdQaG9uZS5jbGFzc05hbWUgPSBcImZvcm1fX2dyb3VwIGlucHV0X193aXRoYWN0aW9uIGlucHV0LS1wcm9maWxlLXBob25lXCI7XHJcbiAgICAgICAgbmV3UGhvbmUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIHBob25lIG51bWJlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmVtb3ZlIGJ0bi1yZW1vdmUtY29udGFjdC1waG9uZVwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJwaG9uZV92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3UGhvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGdhcHMgaW4gaW5kZXggc2VxdWVuY2VzXHJcbiAgICBmdW5jdGlvbiBfcmVudW1iZXJJbnB1dHMoc2VsZWN0b3IsIGlkZW50aWZpZXIpIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnAgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnAuaWQgPSBgJHtpZGVudGlmaWVyfV8ke2luZGV4fV9gO1xyXG4gICAgICAgICAgICBpbnAubmFtZSA9IGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbiA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3BuLnNldEF0dHJpYnV0ZSgnZGF0YS12YWxtc2ctZm9yJywgYCR7aWRlbnRpZmllcn1bJHtpbmRleH1dYClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYSBuZXcgZW1haWwgcm93XHJcbiAgICBmdW5jdGlvbiBuZXdFbWFpbFJvdygpIHsgICAgXHJcbiAgICAgICAgY29uc3QgbmV3RW1haWxSb3cgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICBcclxuICAgICAgICBuZXdFbWFpbFJvdy5jbGFzc05hbWUgPSBcImZvcm1fX2dyb3VwIGlucHV0X193aXRoYWN0aW9uIGlucHV0LS1wcm9maWxlLWVtYWlsXCI7ICBcclxuICAgICAgICBuZXdFbWFpbFJvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm1fX2lucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiQWRkIGFuIGVtYWlsIGFkZHJlc3NcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSAgYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cImVtYWlsX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBuZXdFbWFpbFJvdztcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaXJlIHVwIHRoZSBidXR0b24gbGlzdGVuZXJzXHJcbiAgICBhZGRQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChuZXdQaG9uZVJvdygpKTtcclxuICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGFkZEVtYWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld0VtYWlsUm93KCkpXHJcbiAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgfSk7ICBcclxuXHJcbiAgICAvLyBIYW5kbGUgdGhlIHJlbW92ZSBvbiB0aGUgcGFyZW50IGZvcm0sIHNvIHRoYXQgd2lsbCB3b3JrIGZvciBuZXcgaXRlbXMgYWRkZWQgYWZ0ZXIgbG9hZC5cclxuICAgIGNvbnRhY3RQcm9maWxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSAgfHwgZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEdldCBhbGwgdGhlIGlucHV0cyBpbiB0aGUgcGFyZW50IHNlY3Rpb25cclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzID0gZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBvbmx5IG9uZSBibGFuayBpdCAtIGVsc2UgcmVtb3ZlIGl0XHJcbiAgICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHNbMF0udmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcGFyZW50IGZvcm0gZ3JvdXAgY29udGFpbmluZyBlbWFpbCBvciBwaG9uZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Hcm91cC5yZW1vdmUoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSkge1xyXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpIHtcclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgICAgICAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxyXG4qL1xyXG5pbXBvcnQgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciBmcm9tICcuLi9JZFNlc3Npb25TdG9yYWdlSGVscGVyJztcclxuaW1wb3J0IERyYWZ0TWVzc2FnZURyYXdlciBmcm9tICcuLi9EcmFmdE1lc3NhZ2VEcmF3ZXInO1xyXG5pbXBvcnQgTGF6eUxvYWRlciBmcm9tICcuLi9MYXp5TG9hZGVyJztcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5pZiAobWFpbiAmJiBtYWluLmNsYXNzTGlzdC5jb250YWlucygnYXNjLXN0YWZmLWluZGV4JykpIHtcclxuXHJcbiAgY29uc3QgaWRTaCA9IG5ldyBJZFNlc3Npb25TdG9yYWdlSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJzJyk7XHJcbiAgY29uc3QgZG1kID0gbmV3IERyYWZ0TWVzc2FnZURyYXdlcihpZFNoLmdldENvdW50KCkpO1xyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcclxuXHJcbiAgY29uc3QgYWxsQ2hlY2tib3hlc0luVGFibGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFibGUtc2VsZWN0LXN0YWZmIFt0eXBlPWNoZWNrYm94XVwiKSk7XHJcblxyXG4gIC8vIENoZWNrIGFsbCBpdGVtcyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQgPSBhbGxDaGVja2JveGVzSW5UYWJsZS5maWx0ZXIoY2IgPT4gaWRTaC5oYXNJZChjYi52YWx1ZSkpO1xyXG4gIGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQuZm9yRWFjaChpID0+IGkuY2hlY2tlZCA9IHRydWUpO1xyXG5cclxuICBjb25zdCBhbGxDaGVja2JveGVzU2VsZWN0ZWQgPSAoKSA9PiBhbGxDaGVja2JveGVzSW5UYWJsZS5ldmVyeShjYiA9PiBjYi5jaGVja2VkKTtcclxuICBcclxuICAvLyBjb25zdCBhbGxDb250YWN0SWRzID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUubWFwKGNiID0+IGNiLnZhbHVlKTtcclxuICBjb25zdCBhbGxDb250YWN0cyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogY2IudmFsdWUsXHJcbiAgICAgIG5hbWU6IGNiLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBVc2VzIGEgcGFzc2VkIGluICdjb21iaW5lcicgZnVuY3Rpb24gdG8gZGVjaWRlZCBob3cgdG8gZWl0aGVyIGFkZCBvciByZW1vdmUgc2VsZWN0ZWQgcmVzdWx0cyB0byB0aG9zZSBmcm9tIG90aGVyIHBhZ2VzLlxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSA9IChjb21iaW5lRm4pID0+IHtcclxuICAgIGNvbnN0IGFsbENvbnRhY3RzRGlzcGxheWVkID0gYWxsQ29udGFjdHMoKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nQ29udGFjdHMgPSBpZFNoLmdldEl0ZW1zKCk7XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IGNvbWJpbmVGbihleGlzdGluZ0NvbnRhY3RzLCBhbGxDb250YWN0c0Rpc3BsYXllZCk7ICBcclxuXHJcbiAgICBpZFNoLnNldEl0ZW1zKG5ld0l0ZW1zKTtcclxuICAgIGRtZC51cGRhdGUobmV3SXRlbXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxyXG4gIGNvbnN0IGRlc2VsZWN0QWxsID0gKHRvRGVzZWxlY3QpID0+IHtcclxuICAgIHRvRGVzZWxlY3QuZm9yRWFjaCh0b0Rlc2VsZWN0ID0+IHRvRGVzZWxlY3QuY2hlY2tlZCA9IGZhbHNlKTtcclxuICAgIGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSgoZXhpc3RpbmdJdGVtcywgYWxsSXRlbXNGb3JHcm91cCkgPT4gZXhpc3RpbmdJdGVtcy5maWx0ZXIoKHtpZH0pID0+ICFhbGxJdGVtc0Zvckdyb3VwLm1hcChpID0+IGkuaWQpLmluY2x1ZGVzKGlkKSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGFsbCB0aGUgaWRzIHRoYXQgd2VyZSBjb250YWluZWQgaW4gdGhpcyByZXN1bHRzIHBhZ2UuICBLZWVwIHJlc3VsdCBmcm9tIG90aGVyIHBhZ2VzIHNlbGVjdGVkXHJcbiAgY29uc3Qgc2VsZWN0QWxsID0gKHRvU2VsZWN0KSA9PiB7XHJcbiAgICB0b1NlbGVjdC5mb3JFYWNoKHRvU2VsZWN0ID0+IHRvU2VsZWN0LmNoZWNrZWQgPSB0cnVlKTsgICAgXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0aW9uZENoYW5nZU1lcmdlKChleGlzdGluZ0l0ZW1zLCBhbGxJdGVtc0Zvckdyb3VwKSA9PiB7XHJcblxyXG4gICAgICAvLyBnZXQgYWxsIGl0ZW1zIG9uIHRoZSBwYWdlIG5vdCBpbiB0aGUgZXhpc3RpbmcgcmVzdWx0c1xyXG4gICAgICBjb25zdCBncm91cEl0ZW1zVG9BZGQgPSBhbGxJdGVtc0Zvckdyb3VwLmZpbHRlcigoe2lkfSkgPT4gIWV4aXN0aW5nSXRlbXMubWFwKGkgPT4gaS5pZCkuaW5jbHVkZXMoaWQpKTtcclxuXHJcbiAgICAgIC8vIE1lcmdlIHRoZSBuZXcgaXRlbXMgaW5cclxuICAgICAgcmV0dXJuIFsuLi5leGlzdGluZ0l0ZW1zLCAuLi5ncm91cEl0ZW1zVG9BZGRdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgXHJcblxyXG4gICAgdGFyZ2V0LmNoZWNrZWQgP1xyXG4gICAgICBzZWxlY3RBbGwoYWxsQ2hlY2tib3hlc0luVGFibGUpIDpcclxuICAgICAgZGVzZWxlY3RBbGwoYWxsQ2hlY2tib3hlc0luVGFibGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2JTZWxlY3RBbGwgW3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XHJcbiAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UpO1xyXG5cclxuICAgIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xyXG4gICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXJzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcbiAgbGV0IHVzZXJzVGFibGVCb2R5O1xyXG4gIGlmKHVzZXJzVGFibGUpIHtcclxuICAgdXNlcnNUYWJsZUJvZHkgPSB1c2Vyc1RhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgY29uc3QgY3JpdGVyaWFLZXkgPSAnY3JpdGVyaWEnO1xyXG4gIFxyXG4gIGxldCBzZWFyY2hDcml0ZXJpYVN0cmluZyA9IHVybFBhcmFtcy5oYXMoY3JpdGVyaWFLZXkpID8gYD9jcml0ZXJpYT0ke3VybFBhcmFtcy5nZXQoY3JpdGVyaWFLZXkpfWAgOiAnJztcclxuXHJcbiAgY29uc3QgZ2V0U2VhcmNoRW5kcG9pbnQgPSAoKSA9PiBgJHtsb2NhdGlvbi5vcmlnaW59L0ZvcmNlL0NvbnRhY3RzLyR7Y3VycmVudFBhZ2V9JHtzZWFyY2hDcml0ZXJpYVN0cmluZ31gO1xyXG4gIFxyXG4gIC8vIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBjaGVja2JveGVzXHJcbiAgY29uc3Qgc3RhZmZUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcclxuXHJcbiAgaWYgKHN0YWZmVGFibGUpIHtcclxuICAgIHN0YWZmVGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKHt0YXJnZXR9KSA9PiB7XHJcbiAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3VG90YWwgPSB0YXJnZXQuY2hlY2tlZCA/IGlkU2guYWRkKHRhcmdldC52YWx1ZSwgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKSkgOiBpZFNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAvLyBJZiB1bmNoZWNrZWQgZGVzZWxlY3QgdGhlIGNoZWNrIGFsbC5cclxuICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsQ2hlY2tib3hlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAvLyBJZiBjaGVja2VkIHNlZSBpZiBhbGwgYXJlIG5vdyBzZWxlY3RlZC5cclxuICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZG1kLnVwZGF0ZShuZXdUb3RhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgfSAgXHJcblxyXG4gIGNvbnN0IGNyZWF0ZUNoZWNrYm94RmllbGQgPSAodmFsdWUsIGNoZWNrZWQsIG5hbWUpID0+IHsgIFxyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNlbGwnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnLCBuYW1lKTtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVDZWxsV2l0aFRleHQgPSB0ZXh0ID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRSb3cgPSB1c2VyID0+IHtcclxuICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLm5hbWUpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5jb2xsYXIpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5lbWFpbCkpO1xyXG4gICAgY29uc3QgcGhvbmVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNvbnN0IHBob25lVGV4dE5vZGUgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodXNlci5waG9uZU51bWJlckNvdW50ID4gMSA/IGAgJHt1c2VyLnBob25lTnVtYmVyfWAgOiB1c2VyLnBob25lTnVtYmVyKTtcclxuICAgIFxyXG4gICAgaWYgKHVzZXIucGhvbmVOdW1iZXJDb3VudCA+IDEpIHtcclxuICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xyXG4gICAgICBiYWRnZS5jbGFzc0xpc3QuYWRkKCdiYWRnZScpO1xyXG4gICAgICBiYWRnZS50ZXh0Q29udGVudCA9IHVzZXIucGhvbmVOdW1iZXJDb3VudDtcclxuICAgICAgcGhvbmVDZWxsLmFwcGVuZENoaWxkKGJhZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwaG9uZUNlbGwuYXBwZW5kQ2hpbGQocGhvbmVUZXh0Tm9kZSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQocGhvbmVDZWxsKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveEZpZWxkKHVzZXIuaWQsIGlkU2guaGFzSWQodXNlci5pZCksIHVzZXIubmFtZSkpO1xyXG5cclxuICAgIHVzZXJzVGFibGVCb2R5LmFwcGVuZENoaWxkKG5ld1Jvdyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRSZXN1bHRSb3dzID0gcm93cyA9PiB7XHJcbiAgICByb3dzLmZvckVhY2goYWRkUm93KTtcclxuICB9XHJcblxyXG4gIGlmIChsb2FkZXIpIHtcclxuXHJcbiAgICBjb25zdCBsb2FkZXJQYWdlU2l6ZSA9IGxvYWRlci5nZXRBdHRyaWJ1dGUoXCJwYWdlLXNpemVcIik7XHJcblxyXG4gICAgbmV3IExhenlMb2FkZXIobG9hZGVyLCBhc3luYyBkb25lID0+IHtcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIG5leHQgcGFnZSBpbmRleFxyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBnZXRTZWFyY2hFbmRwb2ludCgpO1xyXG5cclxuICAgICAgICAvLyBEbyB0aGUgc2VhcmNoXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goZW5kcG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1Jlc3VsdHMgPSByZXN1bHRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIC8vIFdlIGRvbnQga25vdyBpZiB0aGVyZSB3aWxsIGJlIG1vcmUgcmVzdWx0cywgYnV0IGl0cyBsaWtlbHkgaWYgd2UgcmV0dXJuIGEgZnVsbCBwYWdlIG9mIHJlc3VsdHNcclxuICAgICAgICBsZXQgbW9yZVJlc3VsdHNMaWtlbHkgPSBoYXNSZXN1bHRzO1xyXG4gICAgICAgIGlmIChsb2FkZXJQYWdlU2l6ZSkge1xyXG4gICAgICAgICAgLy8gV2UgbWF5IG5vdCBoYXZlIHRoaXMgYXR0cmlidXRlLCBidXQgaWYgd2UgZG8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgZnVsbC4gSWYgbm90IHRoZXJlIHNob3VsZCBiZSBubyBtb3JlIHJlc3VsdHMgdG8gZmV0Y2hcclxuICAgICAgICAgIG1vcmVSZXN1bHRzTGlrZWx5ID0gcmVzdWx0cy5sZW5ndGggPT09IHBhcnNlSW50KGxvYWRlclBhZ2VTaXplLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzUmVzdWx0cykgeyAgICAgICAgICBcclxuICAgICAgICAgIGFkZFJlc3VsdFJvd3MocmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb25lKG1vcmVSZXN1bHRzTGlrZWx5KTsgIFxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoKGUpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsYXp5IGxvYWQgcGFnZSAke2N1cnJlbnRQYWdlfSBvZiBBRCB1c2Vyc2ApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgLy8gSWdub3JlIGN1cnJlbnQgZmFpbGVkIHBhZ2UsIHNvIHdpbGwgdHJ5IGFnYWluXHJcbiAgICAgICAgY3VycmVudFBhZ2UtLTtcclxuICAgICAgICBkb25lKHRydWUpOyAvLyBDYWxsIGRvbmUgd2l0aCBtb3JlIHRvIGxvYWQuXHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCB0byBkbyBoZXJlLiBJZiBlbnBvaW50IGlzIGRvd24sIHdlIHdvdWxkIGdldCBsb3RzIG9mIGNvbnNvbGUgZXJyb3JzIGF0IHRoZSBtb21lbnQuLi4uXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9LCB7IGRlYnVnOiBmYWxzZSwgcGVla0Rpc3RhbmNlOiA1MCB9KTtcclxuICB9ICBcclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqICBIYW5kbGUgdGhlIGNsaWNraW5nIG9mIGEgc2VhcmNoIGZpZWxkcyB4IGljb24uICBcclxuICogIEJsYW5rcyB0aGUgZmllbGQgYW5kIG9wdGlvbmFsbHkgcmVkaXJlY3QgbWludXMgcXVlcnkgc3RyaW5nIHBhcmFtXHJcbiAqICBzcGVjaWZpZWQgb24gdGhlIHNwYW4uZm9ybV9faW5wdXQtLWNsZWFyIChkYXRhLXBhcmFtLW5hbWUpXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qIEJ1aWxkIGFuZCByZWRpcmVjdCB0byBwYXRoIG1pbnVzIHRoZSBzcGVjaWZpZWQgcGFyYW0gbmFtZSBpbiBxdWVyeSBzdHJpbmcgKi9cclxuZnVuY3Rpb24gcmVkaXJlY3RXaXRob3V0U2VhcmNoKHBhcmFtTmFtZSkge1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgICBjb25zdCB7b3JpZ2luLCBwYXRobmFtZX0gPSB3aW5kb3cubG9jYXRpb247XHJcbiAgICB1cmxQYXJhbXMuZGVsZXRlKHBhcmFtTmFtZSk7XHJcbiAgICBjb25zdCBuZXdDcml0ZXJpYSA9IHVybFBhcmFtcy50b1N0cmluZygpID8gYD8ke3VybFBhcmFtc31gIDogJyc7ICAgIFxyXG4gICAgY29uc3QgbmV3UGF0aCA9IGAke29yaWdpbn0ke3BhdGhuYW1lfSR7bmV3Q3JpdGVyaWF9YDtcclxuICAgIFxyXG4gICAgLy8gT25seSByZWRpcmVjdCBpZiBwYXJhbXMgd2l0aCBjaGFuZ2UgaS5lLiBub3QganVzdCBjbGVhcmluZyBzZWFyY2ggZmllbGRcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gbmV3UGF0aCkgeyAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdQYXRoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQ2xlYXIgYSBzZWFyY2ggZmllbGQgd2hlbiB0aGUgaW5wdXRzIGNsZWFyIGJ1dHRvbiBpcyBjbGlja2VkICovXHJcbmZ1bmN0aW9uIGNsZWFyU2VhcmNoKGUpIHtcclxuICAgIHZhciB0b0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tLXNlYXJjaCA+IC5mb3JtX19pbnB1dC0tc2VhcmNoJyk7XHJcbiAgICB0b0NsZWFyLmZvckVhY2godGMgPT4gdGMudmFsdWUgPSAnJyk7XHJcblxyXG4gICAgLy8gVG9kbyB0cnkgYW5kIGdldCBhdHRyaWJ1dGUsIGFuZCByZWRpcmVjdCBpZiBoYXMgaXQuXHJcbiAgICBjb25zdCBwYXJhbVRvUmVtb3ZlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtLW5hbWUnKTtcclxuICAgIGlmIChwYXJhbVRvUmVtb3ZlKSB7XHJcbiAgICAgICAgcmVkaXJlY3RXaXRob3V0U2VhcmNoKHBhcmFtVG9SZW1vdmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY2xlYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0LS1jbGVhcicpO1xyXG5cclxuY2xlYXJCdXR0b25zLmZvckVhY2goY2IgPT4gY2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclNlYXJjaCkpOyIsIi8qIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sXHJcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLy8gZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xyXG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3BidG4nKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG5pZiAoYWRkR3JvdXBCdXR0b24pIHtcclxuXHJcbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XHJcblxyXG5pZiAoY2xvc2VTaWRlYmFyKSB7XHJcblxyXG5jbG9zZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xyXG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIC8vIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlUXVlcnlQYXJhbSA9IHBhcmFtID0+IHtcclxuICAgICAgICBpZih1cmxQYXJhbXMuaGFzKHBhcmFtKSl7XHJcbiAgICAgICAgICAgIHVybFBhcmFtcy5kZWxldGUocGFyYW0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9Pz0ke3VybFBhcmFtcy50b1N0cmluZygpfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWN0UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdDb250YWN0QWRkZWQnKTtcclxuICAgIGNvbnN0IE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcclxuICAgIGNvbnN0IE1lc3NhZ2VTZW50UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdNZXNzYWdlU2VudCcpO1xyXG4gICAgY29uc3QgRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtID0gdXJsUGFyYW1zLmdldCgnRm9yY2VDb250YWN0VXBkYXRlZCcpO1xyXG5cclxuICAgIGxldCBzbmFja2Jhck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBpZiAoY29udGFjdFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdDb250YWN0QWRkZWQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IGNvbnRhY3QgaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE9yZ2FuaXNhdGlvblBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdPcmdhbmlzYXRpb25BZGRlZCcpO1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgb3JnYW5pc2F0aW9uIGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG4gICAgfSBlbHNlIGlmIChNZXNzYWdlU2VudFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICAvKiBcclxuICAgICAgICAgICAgQml0IGhhY2t5LCBidXQgY2xlYXJpbmcgdGhlIHNlc3Npb25TdG9yYWdlIGhlcmUgdG8gY2xlYXIgbWVzc2FnZSBzdGF0ZSBoZXJlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJDb3VyaWVyTWVzc2FnZVVzZXJzXCIpXHJcbiAgICAgICAgcmVtb3ZlUXVlcnlQYXJhbSgnTWVzc2FnZVNlbnQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTWVzc2FnZSBzZW50JztcclxuICAgIH0gZWxzZSBpZiAoRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtICYmIEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdGb3JjZUNvbnRhY3RVcGRhdGVkJyk7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ1BlcnNvbmFsIGNvbnRhY3QgZGV0YWlscyB1cGRhdGVkJztcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xyXG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxufSkoXCIjc25hY2tiYXJcIik7XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuXHJcbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcclxuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoXCJ0YWJsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==