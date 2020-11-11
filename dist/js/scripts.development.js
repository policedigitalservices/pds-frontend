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

/***/ "./src/js/messagesView.js":
/*!********************************!*\
  !*** ./src/js/messagesView.js ***!
  \********************************/
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
if (document.body.contains(document.querySelector(".dark-mode"))) {
  window.scrollTo(0, document.querySelector(".dark-mode").scrollHeight);
}

;

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

/***/ "./src/js/showPassword.js":
/*!********************************!*\
  !*** ./src/js/showPassword.js ***!
  \********************************/
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
var showPassword = document.querySelectorAll('i[data-password]');
console.log(showPassword);
console.log('hello word');
showPassword.forEach(function (showPasswordButton) {
  var passwordID = showPasswordButton.getAttribute("data-password");
  console.log('hello: ' + passwordID);
  showPasswordButton.addEventListener('click', function (el) {
    el.preventDefault(); // el.empty();

    console.log(showPasswordButton);

    if (showPasswordButton.innerHTML === "visibility") {
      showPasswordButton.innerHTML = "visibility_off";
    } else {
      showPasswordButton.innerHTML = "visibility";
    }

    console.log('clicjed');
    var input = document.getElementById(passwordID);
    passwordID.type = "text"; // el.target.style.display = "none";

    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
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

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/scss/styles.scss ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/showPassword.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/hint-snackbar.js ./src/js/SelectListTags.js ./src/js/linkify-tables.js ./src/js/search.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ./src/js/pages/CourierProfile.js ./src/js/messagesView.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/Start.js */"./src/js/Start.js");
__webpack_require__(/*! ./src/scss/styles.scss */"./src/scss/styles.scss");
__webpack_require__(/*! ./src/js/GroupsTree.js */"./src/js/GroupsTree.js");
__webpack_require__(/*! ./src/js/side.js */"./src/js/side.js");
__webpack_require__(/*! ./src/js/ToggleContent.js */"./src/js/ToggleContent.js");
__webpack_require__(/*! ./src/js/ToggleSidebar.js */"./src/js/ToggleSidebar.js");
__webpack_require__(/*! ./src/js/tables.js */"./src/js/tables.js");
__webpack_require__(/*! ./src/js/SeeAll.js */"./src/js/SeeAll.js");
__webpack_require__(/*! ./src/js/showPassword.js */"./src/js/showPassword.js");
__webpack_require__(/*! ./src/js/menu.js */"./src/js/menu.js");
__webpack_require__(/*! ./src/js/snackbar.js */"./src/js/snackbar.js");
__webpack_require__(/*! ./src/js/hint-snackbar.js */"./src/js/hint-snackbar.js");
__webpack_require__(/*! ./src/js/SelectListTags.js */"./src/js/SelectListTags.js");
__webpack_require__(/*! ./src/js/linkify-tables.js */"./src/js/linkify-tables.js");
__webpack_require__(/*! ./src/js/search.js */"./src/js/search.js");
__webpack_require__(/*! ./src/js/pages/SelectStaffForMessage.js */"./src/js/pages/SelectStaffForMessage.js");
__webpack_require__(/*! ./src/js/pages/ComposeStaffMessage.js */"./src/js/pages/ComposeStaffMessage.js");
__webpack_require__(/*! ./src/js/pages/CourierProfile.js */"./src/js/pages/CourierProfile.js");
module.exports = __webpack_require__(/*! ./src/js/messagesView.js */"./src/js/messagesView.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saW5raWZ5LXRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVzc2FnZXNWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db21wb3NlU3RhZmZNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db3VyaWVyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Nob3dQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6WyJCb3R0b21EcmF3ZXIiLCJfb3BlbkNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJEcmFmdE1lc3NhZ2VEcmF3ZXIiLCJudW1iZXJPZlJlY2lwaWVudHMiLCJ0b3RhbFNlbGVjdG9yIiwiY29va2llSGVscGVyIiwiU2ltcGxlQ29va2llSGVscGVyIiwiX3RvdGFsc0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXQiLCJFcnJvciIsIl9ib3R0b21EcmF3ZXIiLCJ1cGRhdGUiLCJpbm5lclRleHQiLCJzaG93IiwiaGlkZSIsImdyb3VwRXhpc3QiLCJnZXRFbGVtZW50QnlJZCIsInVzZUNoZWNrYm94ZXMiLCJoYXNBdHRyaWJ1dGUiLCJ1c2VTaW5nbGVTZWxlY3RDaGVja2JveCIsImxvY2tSb290Tm9kZSIsInNlbGVjdG9yIiwiaW50aWFsbHlTZWxlY3RlZE5vZGVzIiwiZ3JvdXBTZWxlY3QiLCJncm91cFRleHRhcmVhIiwidGFnc1NlZUFsbEhlbHBlciIsInBhcmVudEVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvbnNOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInZhbHVlIiwiaXRlbUxpbWl0IiwiU2VlQWxsSGVscGVyIiwiY291bnRGaWVsZElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicGF0aFRvVW5jaGVjayIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjYlNlbGVjdG9yIiwiY2hlY2JveFRvVW5jaGVjayIsImNsaWNrIiwicmVjYWxjdWxhdGUiLCJzZWFyY2hQYXJ0cyIsImdldFVybFZhcnMiLCJ2YXJzIiwicGFydHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtIiwia2V5IiwicGFnZVBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImdyb3VwUGFyYW0iLCJncm91cCIsInNlYXJjaFBhcmFtIiwiU2VhcmNoIiwiZ2V0UGFnZVBhdGhGb3JHcm91cCIsImdycCIsInNob3VsZFBhcmVudEJlT3BlbiIsInBhdGgiLCJwYXRoVG9DaGVjayIsInN0YXJ0c1dpdGgiLCJpc1NlbGVjdGVkR3JvdXAiLCJwYXJhbXNUb0NoZWNrIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYnVpbGRMaW5rIiwidGV4dCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYnVpbGRMYWJlbCIsInBhcmVudENoZWNrZWQiLCJuZXdQYXJlbnRTZWxlY3RlZCIsImxhYmVsIiwidG9nZ2xlU3BhbiIsIm91dGVyU3BhbiIsImNoZWNrYm94IiwidHlwZSIsIm5hbWUiLCJpZCIsImFwcGVuZENoaWxkIiwiY2hlY2tlZCIsImRpc2FibGVkIiwibmV3Q2hlY2tlZCIsImluZGV4T2YiLCJ0cmFuc2ZlclZhbHVlcyIsImRhdGEiLCJlbGVtcyIsInBvcHVsYXRlR3JvdXBGaWVsZCIsInRleHRhcmVhIiwiZWxlbWVudCIsImV4aXN0aW5nT3B0aW9uVmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwib3B0aW9ucyIsIm1hcCIsIm9wdCIsImRhdGFfaSIsImRhdGFfY3VycmVudCIsInN1YnN0cmluZyIsIm5ld09wdGlvbiIsInNlbGVjdGVkIiwiYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlIiwicGFyZW50IiwiY2hlY2tib3hSZXN1bHQiLCJmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50IiwiY3VycmVudCIsImNoaWxkcmVuIiwidXBkYXRlckZuIiwiY3VycmVudExvb3BDaGlsZCIsImhhbmRsZUNoZWNrYm94Q2xpY2siLCJwYXJlbnRMaSIsImNsb3Nlc3QiLCJhbGxHcm91cENoZWNrYm94ZXMiLCJjaGVja2JveFRvVXBkYXRlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZENoZWNrYm94ZXMiLCJoaWRkZW5GaWVsZCIsInNldEF0dHJpYnV0ZSIsInN0cnVjdHVyZSIsIm9wdGlvbl9pIiwib3B0aW9uIiwic2VnbWVudHMiLCJzcGxpdCIsIm5vZGVUb0NoZWNrIiwic2VnbWVudF9pIiwic2VnIiwidHJlZUNvbnRhaW5lciIsImNsb3Nlc3RMaSIsImFjdGl2ZUNoaWxkcmVuIiwiYWNfaSIsImFjdGl2ZUNoaWxkIiwiZGlzcGxheUNoaWxkS2V5cyIsImN1cnJUZXh0IiwiY3VyclBhdGgiLCJvYmoiLCJlbGVtZW50VG9BZGRUbyIsImxldmVsIiwicGFyZW50c0NoZWNrZWQiLCJjaGlsZEtleXMiLCJPYmplY3QiLCJrZXlzIiwicGFyZW50Q2hlY2tlZFN0YXRlIiwiY2hpbGRMaXN0SXRlbSIsImNoaWxkTGlzdCIsImNrX2kiLCJjaGlsZEtleSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJJZFNlc3Npb25TdG9yYWdlSGVscGVyIiwiX25hbWUiLCJpbml0aWFsIiwiX2luaXRpYWxpc2UiLCJfaXRlbXMiLCJNYXAiLCJmb3JFYWNoIiwic2V0Iiwic2VsZWN0ZWRJdGVtc0pzb24iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJfcGVyc2lzdCIsIkpTT04iLCJwYXJzZSIsIml0ZW1zIiwiZ2V0SXRlbXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX3VwZGF0ZSIsImdldENvdW50IiwiaWRzIiwiaWRzVG9LZWVwIiwiZ2V0SWRzIiwiaW5jbHVkZXMiLCJzaXplIiwiZGVsZXRlIiwiZW50cmllcyIsImhhcyIsInNldEl0ZW1zIiwiQ291cmllckxhenlMb2FkZXIiLCJsb2FkZXJFbGVtZW50IiwibG9hZGVyRm4iLCJjb25maWdPYmoiLCJjb25maWdEZWZhdWx0cyIsImxvYWRlckNsYXNzIiwibG9hZGVyTG9hZGluZ0NsYXNzIiwiZGVib3VuY2VNcyIsInBlZWtEaXN0YW5jZSIsImRlYnVnIiwiX2xvYWRlciIsIl9sb2FkZXJGdW5jIiwiX21haW4iLCJfY29uZmlnIiwiX2hhc0xpc3RlbmVyc0FkZGVkIiwiX2xhenlMb2FkQ2hlY2siLCJkZWJvdW5jZSIsIl9kb0xvYWRNb3JlQ2hlY2siLCJfY29uZGl0aW9uYWxEZWJ1Z0xvZyIsIl9zdG9wTGlzdGVuaW5nIiwiX2RvbmVTZWFyY2hpbmciLCJfc3RhcnRMaXN0ZW5pbmciLCJiaW5kIiwidmlzaWJsZSIsIm1vcmVUb0xvYWQiLCJfc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvRGVidWciLCJsb2dnZXJGdW5jIiwiY29uc29sZSIsImxvZyIsImhpZ2hlc3RWaXNpYmxlWVBvcyIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibG9hZE1vcmVUcmlnZ2VyUG9zIiwiTWF0aCIsIm1pbiIsIm9mZnNldFRvcCIsInBlZWtQb3NpdGlvblZpc2libGUiLCJzaG91bGRMb2FkTW9yZSIsInRhYmxlIiwiU2VlQWxsQXR0cmlidXRlSGVscGVyIiwic2hvd01vcmVCdXR0b25zIiwic2hvd0FsbEJ1dHRvbiIsImNvbnRhaW5lcklkIiwiaXRlbVNlbGVjdG9yIiwic2hvd0FsbEl0ZW1MaW1pdCIsInNob3dBbGxJdGVtQ291bnRJZCIsImJ1dHRvbklkIiwiY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwic2VsZWN0b3JUb1VzZSIsInRhZ05hbWUiLCJlcnJvciIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwiaXNOYU4iLCJpdGVtc1NlbGVjdG9yIiwic2VlQWxsU2VsZWN0b3IiLCJwYXNzZWRPcHRpb25zIiwiX2l0ZW1zU2VsZWN0b3IiLCJfc2VlQWxsIiwiX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsIiwiZGVmYXVsdHMiLCJzaG93TGVzc1RleHQiLCJfb3B0aW9ucyIsIl9pdGVtTGltaXQiLCJfc2hvd0xlc3NUZXh0IiwiX3Nob3dNb3JlVGV4dCIsIl9jb3VudEZpZWxkIiwiX3Nob3dpbmdBbGwiLCJfaGlkZUV4Y2Vzc0l0ZW1zIiwiX3Nob3dBbGxJdGVtcyIsIl9hbGxJdGVtcyIsIml0ZW0iLCJfb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcyIsImluZGV4IiwidG9DaGVjayIsIlNlbGVjdExpc3RUYWdzIiwic2VsZWN0SWQiLCJyZXZlcnRHcm91cHNJZCIsIm9uVXBkYXRlRnVuYyIsInRhZ09wdGlvbnMiLCJyZXZlcnRCdG4iLCJvIiwicG9wdWxhdGVUYWdzIiwiYWxsT3B0aW9ucyIsInNvbWUiLCJ0YWdzIiwidGFyZ2V0VmFsIiwiZGF0YXNldCIsInZhbCIsImFmdGVyIiwic2VsZWN0ZWRPcHRpb25zIiwiZmlsdGVyIiwidCIsIm1ha2VUYWciLCJ0YWciLCJjcmVhdGVUZXh0Tm9kZSIsInJlcG9sdWxhdGVUYWdzIiwic3BhbiIsInBsdXJhbGlzZWRHcm91cHMiLCJjb29raWVTdHJpbmciLCJjb29raWUiLCJjb29raWVzIiwibWF0Y2hpbmdDb29raWUiLCJmaW5kIiwiYyIsIl92YWx1ZSIsIm5ld0Nvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3BvbnNlcyIsInJlc3BvbnNlc0xpc3QiLCJyZXNwb25zZSIsImlkeCIsInRyaW0iLCJzaG93Rmlyc3RFbXB5SXRlbSIsImN1cnJlbnRSZXNwb25zZSIsImNvcHlJdGVtc0ZvcndhcmQiLCJwcmV2SW5wdXQiLCJpbnB1dCIsInJlbW92ZUxhc3RFbXB0eUl0ZW0iLCJyZW1vdmVJZHgiLCJhZGRSZXNwb25zZUJ1dHRvbiIsImVsIiwiYmx1ciIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic25hY2tiYXJTdG9yYWdlSXRlbSIsImxvY2FsU3RvcmFnZSIsInNuYWNrYmFyIiwic25hY2tiYXJTdG9yYWdlSXRlbUFycmF5IiwibG9jYXRpb25zIiwicm93c1RvTGlua2lmeSIsImhhbmRsZVJvd0NsaWNrIiwiY29sVG9QYXJzZSIsInJvdyIsImNvbCIsIm1lbnUiLCJtZW51QnV0dG9uIiwibWVudUNoaWxkIiwic2Nyb2xsVG8iLCJtYWluIiwiYWRkQnRuIiwic3ViamVjdElucHV0IiwibWVzc2FnZUlucHV0IiwicmVzZW5kSW5wdXQiLCJyZXNwb25zZU9wdGlvbnMiLCJjb29raWVNZXNzYWdlSGVscGVyIiwiY29va2llQXV0b1Jlc2VuZEhlbHBlciIsImNvb2tpZVJlc3BvbnNlSGVscGVyIiwiaWRzU2Vzc2lvbkhlbHBlciIsImdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nIiwibm9uRW1wdHlPcHRpb25zIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImpvaW4iLCJmaWx0ZXJCeUlkcyIsIngiLCJzZWxlY3RPcHRpb25zIiwic2x0IiwiZGlzY2FyZEJ0biIsImNsZWFySXRlbXMiLCJuZXdQaG9uZVJvdyIsIm5ld1Bob25lIiwiY2xhc3NOYW1lIiwiX3JlbnVtYmVySW5wdXRzIiwiaWRlbnRpZmllciIsImlucHV0cyIsImlucCIsInNwbiIsIm5ld0VtYWlsUm93IiwiYWRkUGhvbmVCdG4iLCJhZGRFbWFpbEJ0biIsInJlbW92ZUVtYWlsQnV0dG9ucyIsInJlbW92ZVBob25lQnV0dG9ucyIsImVtYWlsc1NlY3Rpb24iLCJzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUiLCJwaG9uZXNTZWN0aW9uIiwic2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlIiwiaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUiLCJzZWN0aW9uIiwiY29udGFjdFByb2ZpbGVGb3JtIiwiaW5wdXRzRm9yU2VsZWN0b3IiLCJkaXIiLCJmb3JtR3JvdXAiLCJpZFNoIiwiZG1kIiwibG9hZGVyIiwiYWxsQ2hlY2tib3hlc0luVGFibGUiLCJpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkIiwiY2IiLCJoYXNJZCIsImFsbENoZWNrYm94ZXNTZWxlY3RlZCIsImV2ZXJ5IiwiYWxsQ29udGFjdHMiLCJoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UiLCJjb21iaW5lRm4iLCJhbGxDb250YWN0c0Rpc3BsYXllZCIsImV4aXN0aW5nQ29udGFjdHMiLCJuZXdJdGVtcyIsImRlc2VsZWN0QWxsIiwidG9EZXNlbGVjdCIsImV4aXN0aW5nSXRlbXMiLCJhbGxJdGVtc0Zvckdyb3VwIiwic2VsZWN0QWxsIiwidG9TZWxlY3QiLCJncm91cEl0ZW1zVG9BZGQiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJ0b2dnbGVTZWxlY3RBbGxDaGVja2JveCIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjcml0ZXJpYUtleSIsInNlYXJjaENyaXRlcmlhU3RyaW5nIiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJzdGFmZlRhYmxlIiwibmV3VG90YWwiLCJjcmVhdGVDaGVja2JveEZpZWxkIiwiY2VsbCIsImNyZWF0ZUNlbGxXaXRoVGV4dCIsImFkZFJvdyIsInVzZXIiLCJuZXdSb3ciLCJjb2xsYXIiLCJlbWFpbCIsInBob25lQ2VsbCIsInBob25lVGV4dE5vZGUiLCJwaG9uZU51bWJlckNvdW50IiwicGhvbmVOdW1iZXIiLCJiYWRnZSIsImFkZFJlc3VsdFJvd3MiLCJyb3dzIiwibG9hZGVyUGFnZVNpemUiLCJMYXp5TG9hZGVyIiwiZG9uZSIsImVuZHBvaW50IiwiZmV0Y2giLCJqc29uIiwicmVzdWx0cyIsImhhc1Jlc3VsdHMiLCJtb3JlUmVzdWx0c0xpa2VseSIsInJlZGlyZWN0V2l0aG91dFNlYXJjaCIsInBhcmFtTmFtZSIsIm5ld0NyaXRlcmlhIiwidG9TdHJpbmciLCJuZXdQYXRoIiwiYXNzaWduIiwiY2xlYXJTZWFyY2giLCJ0b0NsZWFyIiwidGMiLCJwYXJhbVRvUmVtb3ZlIiwiY2xlYXJCdXR0b25zIiwic2hvd1Bhc3N3b3JkIiwic2hvd1Bhc3N3b3JkQnV0dG9uIiwicGFzc3dvcmRJRCIsIm9uY2xpY2siLCJldmVudCIsImRyb3Bkb3ducyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvcGVuRHJvcGRvd24iLCJ0b2dnbGVTaWRlYmFyIiwiY2xvc2VTaWRlYmFyIiwieSIsInJlbW92ZVF1ZXJ5UGFyYW0iLCJwYXJhbSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsImNvbnRhY3RQYXJhbSIsIk9yZ2FuaXNhdGlvblBhcmFtIiwiTWVzc2FnZVNlbnRQYXJhbSIsIkZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSIsInNuYWNrYmFyTWVzc2FnZSIsInJlbW92ZUl0ZW0iLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFFQSxlOzs7Ozs7Ozs7OztBQ2JBLHVDIiwiZmlsZSI6ImpzL3NjcmlwdHMuZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKlxuIENsYXNzIHRoYXQgZmFjaWxpdGF0ZSB0aGUgaGlkaW5nIGFuZCBzaG93aW5nIG9mIHRoZSBib3R0b20gYmFyLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbURyYXdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX29wZW5DbGFzcyA9IFwiYm90dG9tLWRyYXdlci1vcGVuXCI7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuX29wZW5DbGFzcyk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX29wZW5DbGFzcyk7XG4gICAgfVxuXG4gICAgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fb3BlbkNsYXNzKTtcbiAgICB9XG59OyIsImltcG9ydCBCb3R0b21EcmF3ZXIgZnJvbSAnLi9Cb3R0b21EcmF3ZXInO1xuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuL1NpbXBsZUNvb2tpZUhlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0TWVzc2FnZURyYXdlciB7XG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZSZWNpcGllbnRzLCB0b3RhbFNlbGVjdG9yPVwiLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190b3RhbFwiKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVGl0bGUnKTtcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG90YWxTZWxlY3Rvcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdGl0bGUnKS50ZXh0Q29udGVudCA9IGNvb2tpZUhlbHBlci5nZXQoKSB8fCAnVW50aXRsZWQnO1xuICAgICAgICBpZiAoIXRoaXMuX3RvdGFsc0VsZW1lbnQpIHsgdGhyb3cgRXJyb3IoYE5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHBhc3NlZCBpbiBzZWxlY3RvciAke3RvdGFsU2VsZWN0b3J9YCk7IH1cbiAgICAgICAgdGhpcy5fYm90dG9tRHJhd2VyID0gbmV3IEJvdHRvbURyYXdlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpO1xuICAgIH0gICAgXG5cbiAgICB1cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQuaW5uZXJUZXh0ID0gbnVtYmVyT2ZSZWNpcGllbnRzO1xuICAgICAgICBudW1iZXJPZlJlY2lwaWVudHMgPyB0aGlzLl9ib3R0b21EcmF3ZXIuc2hvdygpIDogdGhpcy5fYm90dG9tRHJhd2VyLmhpZGUoKTtcbiAgICB9XG59IiwiIGltcG9ydCB7U2VlQWxsSGVscGVyfSBmcm9tICcuL1NlZUFsbEhlbHBlcic7XG4gXG4gdmFyIGdyb3VwRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwXCIpO1xuICAgIGlmKGdyb3VwRXhpc3Qpe1xuXG4gICAgICAgIHZhciB1c2VDaGVja2JveGVzID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1jaGVja2JveCcpO1xuICAgICAgICB2YXIgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLXNpbmdsZS1zZWxlY3QtY2hlY2tib3gnKTtcbiAgICAgICAgdmFyIGxvY2tSb290Tm9kZSA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLWxvY2stcm9vdCcpO1xuXG4oZnVuY3Rpb24gKHNlbGVjdG9yLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xuXG4gICAgLy9DaGVjayBvbiBwYWdlIHdoZXRoZXIgR3JvdXAgTXVsdGkgU2VsZWN0IGV4aXN0c1xuICAgIHZhciBpbnRpYWxseVNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwU2VsZWN0b3JcIik7XG4gICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XG4gICAgXG4gICAgbGV0IHRhZ3NTZWVBbGxIZWxwZXIgPSBudWxsO1xuXG4gICAgLy8gSWYgdGhlIEdyb3VwIE11bHRpIFNlbGVjdCBkb2VzIGV4aXN0LCBoaWRlIGl0IChpZiBKUyBlbmFibGVkKVxuICAgIGlmIChncm91cFNlbGVjdCAhPT0gbnVsbCkge1xuICAgICAgICBncm91cFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgIGdyb3VwVGV4dGFyZWEucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuXG4gICAgICAgIC8vIEdyYWIgYWxsIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZFxuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25zTm9kZXMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb246Y2hlY2tlZCcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRPcHRpb25zTm9kZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICBpbnRpYWxseVNlbGVjdGVkTm9kZXMucHVzaChzZWxlY3RlZE9wdGlvbnNOb2Rlc1tpXS52YWx1ZSB8fCBcIlxcXFxcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcblxuICAgICAgICBjb25zdCBpdGVtTGltaXQgPSAyMTtcblxuICAgICAgICB0YWdzU2VlQWxsSGVscGVyICA9IG5ldyBTZWVBbGxIZWxwZXIoJyNHcm91cFRleHRhcmVhID4gLnRhZycsICcjc2VlTW9yZUdyb3VwcycsIHsgaXRlbUxpbWl0LCBjb3VudEZpZWxkSWQ6ICdncm91cHNDb3VudCcgfSk7XG5cbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhUb1VuY2hlY2sgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgY2JTZWxlY3RvciA9ICdpbnB1dFt0eXBlPWNoZWNrYm94XS50cmVldmlld19fY2hlY2tib3hbdmFsdWU9XCInK3BhdGhUb1VuY2hlY2srJ1wiXSc7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNib3hUb1VuY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNiU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVjYm94VG9VbmNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNib3hUb1VuY2hlY2suY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzZWFyY2hQYXJ0cyA9IChmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xuICAgICAgICB2YXIgdmFycyA9IHt9O1xuICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksIGZ1bmN0aW9uKG0sa2V5LHZhbHVlKSB7XG4gICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJzO1xuICAgIH0pKCk7XG5cbiAgICB2YXIgcGFnZVBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/Z3JvdXA9XCI7XG4gICAgdmFyIGdyb3VwUGFyYW0gPSBzZWFyY2hQYXJ0cy5ncm91cDtcbiAgICB2YXIgc2VhcmNoUGFyYW0gPSBzZWFyY2hQYXJ0cy5TZWFyY2g7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBidWlsZCB0aGUgcGF0aFxuICAgIGZ1bmN0aW9uIGdldFBhZ2VQYXRoRm9yR3JvdXAoZ3JvdXApIHtcbiAgICAgIHZhciBncnAgPSBncm91cCA9PT0gXCJcIiA/IFwiXFxcXFwiIDogZ3JvdXA7XG4gICAgICByZXR1cm4gcGFnZVBhdGggKyBncnA7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkIHNob3VsZCBiZSBvcGVuIGkuZS4gdG8gcmV2ZWFsIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZ3JvdXBcbiAgICBmdW5jdGlvbiBzaG91bGRQYXJlbnRCZU9wZW4ocGF0aCkge1xuICAgICAgICBpZiAoIWdyb3VwUGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCArIFwiXFxcXFwiKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwUGFyYW0uc3RhcnRzV2l0aChwYXRoVG9DaGVjaykgJiYgZ3JvdXBQYXJhbSAhPSBwYXRoVG9DaGVjaztcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGRlZCBpcyB0aGUgY3VycmVudGx5U2VsZWN0ZWRHcm91cFxuICAgIGZ1bmN0aW9uIGlzU2VsZWN0ZWRHcm91cChwYXRoKSB7XG4gICAgICAgIHZhciBwYXJhbXNUb0NoZWNrID0gZGVjb2RlVVJJQ29tcG9uZW50KGdyb3VwUGFyYW0gfHwgXCJcXFxcXCIpO1xuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCB8fCBcIlxcXFxcIik7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtc1RvQ2hlY2sgPT09IHBhdGhUb0NoZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkTGluayh0ZXh0LCBwYXRoKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgIGxpbmsuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3RyZWV2aWV3X19pdGVtLXRvZ2dsZSc+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3RyZWV2aWV3X19pdGVtLWNvbnRlbnQnPiR7dGV4dH08L3NwYW4+XG4gICAgICAgIGA7XG4gICAgICAgIGxpbmsuaHJlZiA9IGdldFBhZ2VQYXRoRm9yR3JvdXAocGF0aCk7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtLWxpbmtcIik7XG5cbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRMYWJlbCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XG5cbiAgICAgICAgdmFyIG5ld1BhcmVudFNlbGVjdGVkID0gcGFyZW50Q2hlY2tlZDtcblxuICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tbGFiZWxcIik7XG4gICAgICAgIHZhciB0b2dnbGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b2dnbGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19pdGVtLXRvZ2dsZScpO1xuICAgICAgICB2YXIgb3V0ZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBvdXRlclNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBvdXRlclNwYW4uY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2l0ZW0tY29udGVudCcpO1xuICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja2JveC5uYW1lID0gdGV4dDtcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBwYXRoO1xuICAgICAgICBjaGVja2JveC5pZCA9IHRleHQ7XG4gICAgICAgIG91dGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIG91dGVyU3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0b2dnbGVTcGFuKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQob3V0ZXJTcGFuKTtcblxuICAgICAgICBpZiAocGF0aCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGRpc2FibGVkIGFuZCBjaGVja2VkIEJVVCB0aGUgY2hpbGRyZW4gb2YgdGhpcyBub2RlIHNob3VsZCBhY3QgYXMgdGhvdWdoIGl0IGlzbnQgY2hlY2tlZCBzbyB3ZSBkb250IHVwZGF0ZSB0aGUgc2VsZWN0ZWQgc3RhdGVcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENoZWNrZWQgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIHNlbGVjdGVkIGFsbCBpdHMgY2hpbGRyZW4gc2hvdWxkIGJlIGRpc2FibGVkIGFuZCB1bmNoZWNrZWRcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgbm90IGNoZWNrZWQgaXRzIGNoaWxkcmVuIHNlbGVjdGVkIHN0YXRlIGRlcGVuZCBvbiB0aGUgY2hpbGRzIHZhbHVlLCBhbmQgbm90IGJlIGRpc2FibGVkXG4gICAgICAgICAgICB2YXIgbmV3Q2hlY2tlZCA9IGludGlhbGx5U2VsZWN0ZWROb2Rlcy5pbmRleE9mKHBhdGggfHwgJ1xcXFwnKSA+PSAwO1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IG5ld0NoZWNrZWQ7XG4gICAgICAgICAgICBuZXdQYXJlbnRTZWxlY3RlZCA9IG5ld0NoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0cmVldmlld19fY2hlY2tib3gnKTtcblxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19jaGVja2JveC0tcmFkaW8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7bGFiZWwsIG5ld1BhcmVudFNlbGVjdGVkfTtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNmZXJWYWx1ZXMoKSB7XG4gICAgICAgIHZhciBkYXRhID0gW107XG5cbiAgICAgICAgdmFyIGVsZW1zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJlZXZpZXdfX2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPGVsZW1zLmxlbmd0aDtpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NrUm9vdE5vZGUgJiYgIShlbGVtc1tpXS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8tb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtc1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChlbGVtc1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpIHtcblxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XG4gICAgICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dyb3VwU2VsZWN0b3InKTtcblxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nT3B0aW9uVmFsdWVzID0gQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgZGF0YV9pID0gMDsgZGF0YV9pIDwgZGF0YS5sZW5ndGg7IGRhdGFfaSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9jdXJyZW50ID0gZGF0YVtkYXRhX2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPkFsbCBDb250YWN0IEdyb3VwczxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPicgKyBkYXRhX2N1cnJlbnQuc3Vic3RyaW5nKDEpICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIG9wdGlvbiBleGlzdHMgLSBhZGQgaXQgaWYgbm90XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nT3B0aW9uVmFsdWVzLmluZGV4T2YoZGF0YV9jdXJyZW50KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBkYXRhX2N1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhX2N1cnJlbnQ7XCJcIlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uc1tpXS5zZWxlY3RlZCA9IGRhdGEuaW5kZXhPZihlbGVtZW50Lm9wdGlvbnNbaV0udmFsdWUpID49IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuRm9yTW9kZShwYXJlbnQsIHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcbiAgICAgICAgaWYgKHVzZUNoZWNrYm94ZXMgfHwgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcblxuICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgdGhlIGJsYW5rIHZhbHVlIGZvciAnQWxsIENvbnRhY3QgR3JvdXBzJ1xuICAgICAgICAgICAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXFxcXFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY2hlY2tib3hSZXN1bHQgPSBidWlsZExhYmVsKHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpO1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmxhYmVsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94UmVzdWx0Lm5ld1BhcmVudFNlbGVjdGVkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxpbmsgdG8gcmVmcmVzaCBwYWdlIHdpdGggc2VsZWN0ZWQgbm9kZS5cbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZExpbmsodGV4dCwgcGF0aCkpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudENoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGN1cnJlbnQsIGNoaWxkcmVuLCB1cGRhdGVyRm4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMb29wQ2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9vcENoaWxkICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlckZuKGN1cnJlbnRMb29wQ2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayhlLCBjaGVja2JveCkge1xuXG4gICAgICAgIHZhciBwYXJlbnRMaSA9IGNoZWNrYm94LmNsb3Nlc3QoJ2xpJyk7XG5cbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XG5cbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSBvbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCwgYW5kIHRoZSByb290IGl0ZW0gY2Fubm90IGJlIGRlc2VsZXRlZC5cbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFsbEdyb3VwQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmVldmlld19fbGlzdC0tcm9vdCBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGFsbEdyb3VwQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRMaS5jbGFzc0xpc3QuY29udGFpbnMoJ3RyZWV2aWV3X19pdGVtLS1wYXJlbnQnKSl7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZENoZWNrYm94ZXMgPSBwYXJlbnRMaS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR3JhYiB0aGUgc2VsZWN0IGxpc3QgYW5kIGFsbCBvZiBpdHMgb3B0aW9uc1xuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHZhciBvcHRpb25zID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcblxuICAgIHZhciBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcbiAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IGdyb3VwUGFyYW0gfHwgJ1xcXFwnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGNvbGxlY3Rpb25zIHdpdGggc3RhcnRpbmcga2V5IGZvciB0aGUgcm9vdC5cbiAgICB2YXIgc3RydWN0dXJlID0geyBcIlxcXFxcIjoge30gfTtcblxuICAgIC8vIEJ1aWxkIG9uIHRoZSBiYXNlIHN0cnVjdHVyZSBieSBsb29waW5nIHRocm91Z2ggZWFjaCBzZWxlY3QgaXRlbS5cbiAgICBmb3IgKHZhciBvcHRpb25faT0wOyBvcHRpb25faTxvcHRpb25zLmxlbmd0aDsgb3B0aW9uX2krKykge1xuXG4gICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW29wdGlvbl9pXTtcblxuICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSB0aGUgZ3JvdXAgbmFtZSBpbnRvIGFsbCBpdHMgcGF0aCBzZWdtZW50c1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gb3B0aW9uLnRleHRDb250ZW50LnNwbGl0KFwiXFxcXFwiKTtcbiAgICAgICAgICAgIC8vIFN0YXJ0IGF0IHRoZSByb290IGVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZVRvQ2hlY2sgPSBzdHJ1Y3R1cmVbXCJcXFxcXCJdO1xuXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IGVuc3VyZSB0aGF0IGFsbCBsZXZlbHMgb2YgdGhlIHN0cnVjdHVyZSBhcmUgaW4gcGxhY2UuXG4gICAgICAgICAgICBmb3IgKHZhciBzZWdtZW50X2k9MDsgc2VnbWVudF9pPHNlZ21lbnRzLmxlbmd0aDsgc2VnbWVudF9pKyspIHtcblxuICAgICAgICAgICAgICAgIHZhciBzZWcgPSBzZWdtZW50c1tzZWdtZW50X2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlZyAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb0NoZWNrW3NlZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrW3NlZ10gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrW3NlZ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIGJhc2UgZWxlbWVudCB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkXG4gICAgdmFyIHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2xpc3RcIik7XG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2xpc3QtLXJvb3RcIik7XG5cblxuICAgIC8vIEhhbmRsZSBhbGwgdGhlIGNsaWNrcyBhdCB0aGUgcGFyZW50IGxldmVsXG4gICAgdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIC8vIEhhbmRsZSBjaGVja2JveCBpdGVtcyBiZWluZyBzZWxlY3RlZC5cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XG4gICAgICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrKGUsIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2ZlclZhbHVlcygpO1xuXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi50cmVldmlld19faXRlbS10b2dnbGVcIikpIHtcblxuICAgICAgICAgICAgdmFyIGNsb3Nlc3RMaSA9IHRhcmdldC5jbG9zZXN0KCdsaScpO1xuXG4gICAgICAgICAgICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgY2xpY2tzIG9uIGVsZW1lbnRzIHRoYXQgYXJlIHBhcmVudHNcbiAgICAgICAgICAgIGlmIChjbG9zZXN0TGkubWF0Y2hlcyhcIi50cmVldmlld19faXRlbS0tcGFyZW50XCIpKSB7XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhbiBvcGVuIHBhcmVudCBpdGVtIGlzIGNsaWNrZWQsIGNsb3NlIGl0LCBidXQgYWxzbyBhbGwgaXRzIG9wZW4gZGVzY2VuZGFudHMuXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RMaS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmVldmlld19faXRlbS0tb3BlblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0TGkuY2xhc3NMaXN0LnJlbW92ZShcInRyZWV2aWV3X19pdGVtLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGRyZW4gPSBjbG9zZXN0TGkucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRyZWV2aWV3X19pdGVtLS1vcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhY19pPTA7IGFjX2k8YWN0aXZlQ2hpbGRyZW4ubGVuZ3RoOyBhY19pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZCA9IGFjdGl2ZUNoaWxkcmVuW2FjX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInRyZWV2aWV3X19pdGVtLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9wZW4gYW55IGNsb3NlZCBwYXJlbnRzIHRoYXQgYXJlIGNsaWNrZWQuXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RMaS5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAgUmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIHRoZSBzZWxlY3QgbGlzdCBmcm9tIHRoZSBwcmV2aW91cyBub2RlIHN0cnVjdHVyZS5cbiAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaGlsZEtleXMoY3VyclRleHQsIGN1cnJQYXRoLCBvYmosIGVsZW1lbnRUb0FkZFRvLCBsZXZlbCwgcGFyZW50c0NoZWNrZWQpIHtcblxuICAgICAgICB2YXIgY2hpbGRLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgICB2YXIgcGFyZW50Q2hlY2tlZFN0YXRlID0gcGFyZW50c0NoZWNrZWQ7XG5cbiAgICAgICAgdmFyIGNoaWxkTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtXCIpO1xuXG4gICAgICAgIGlmICghdXNlQ2hlY2tib3hlcyAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggJiYgaXNTZWxlY3RlZEdyb3VwKGN1cnJQYXRoKSkge1xuICAgICAgICAgICAgLy8gT25seSBhZGQgdGhlIGN1cnJlbnQgc3RhdGUgd2hlbiBpbiB0aGUgJ2xpbmsgbW9kZSdcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtLS1jdXJyZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGlsZEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGF0IHRoZSBib3R0b20gb2YgYSBicmFuY2ggaS5lLiBubyBjaGlsZHJlbiB0byBwcm9jZXNzXG5cbiAgICAgICAgICAgIGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIG5vZGUgaGFzIGNoaWxkcmVuIHRvIHByb2Nlc3NcblxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tLXBhcmVudFwiKTtcblxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHNob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuIGZpcnN0IGxldmVsIGNoaWxkcmVuIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICAgIFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZSA9IGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgdmFyIGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2xpc3RcIik7XG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcbiAgICAgICAgICAgIC8vIENhbGwgcmVjdXJzaXZlbHkgd2l0aCB1cGRhdGVkIHBhcmFtcyBmb3IgZWFjaCBjaGlsZCBub2RlXG5cbiAgICAgICAgICAgIGZvciAodmFyIGNrX2k9MDsgY2tfaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGNrX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkS2V5c1tja19pXTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEtleSAhPT0gJ0FsbCBjb250YWN0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNoaWxkS2V5cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyUGF0aCArIFwiXFxcXFwiICsgY2hpbGRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2NoaWxkS2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgaW5pdGlhbCBjYWxsIG9mIHRoZSByZWN1cnNpdmUgZnVuY3Rpb24gc3RhcnRpbmcgYXQgdGhlIHJvb3QuXG4gICAgZGlzcGxheUNoaWxkS2V5cyhcIkFsbCBDb250YWN0IEdyb3Vwc1wiLCBcIlwiLCBzdHJ1Y3R1cmVbXCJcXFxcXCJdLCB0cmVlQ29udGFpbmVyLCAxLCBmYWxzZSk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBzZWxlY3QgbGlzdCB3aXRoIHRoZSBuZXcgdHJlZVxuICAgIGdyb3VwU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRyZWVDb250YWluZXIsIGdyb3VwU2VsZWN0KTtcblxuICAgIHRyZWVDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoaWRkZW5GaWVsZCk7XG5cbiAgICB0cmFuc2ZlclZhbHVlcygpO1xuXG59KShcIiNHcm91cFwiLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCk7XG59XG4iLCIvLyBTdG9yZSBzZWxlY3RlZCB1c2VycyBpbnNpZGUgc2Vzc2lvbiBzdG9yYWdlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZFNlc3Npb25TdG9yYWdlSGVscGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIGNvbnN0IGluaXRpYWwgPSB0aGlzLl9pbml0aWFsaXNlKCk7XG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgaW5pdGlhbC5mb3JFYWNoKCh7aWQsIG5hbWV9KSA9PiB0aGlzLl9pdGVtcy5zZXQoaWQsIG5hbWUpKTtcbiAgfVxuICBcbiAgLy8gUG9wdWxhdGUgc3RhcnQgaWRzLCBpbml0aWFsaXNlcyBjb29raWUgaWYgbm90IHByZXNlbnRcbiAgX2luaXRpYWxpc2UoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtc0pzb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRoaXMuX25hbWUpO1xuICAgIGlmICghc2VsZWN0ZWRJdGVtc0pzb24pIHsgICAgICAgICAgICAgICBcbiAgICAgIHRoaXMuX3BlcnNpc3QoW10pOyAgIFxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZWxlY3RlZEl0ZW1zSnNvbik7XG4gIH1cbiAgXG4gIC8vIFNhdmUgdGhlIG5ldyBpZHMgdG8gdGhlIHNlc3Npb24gc3RvcmFnZSBhZnRlciB1cGRhdGVcbiAgX3VwZGF0ZSgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB0aGlzLl9wZXJzaXN0KGl0ZW1zKTtcbiAgfVxuICBcbiAgLy8gU2F2ZSB0aGUgcGFzc2VkIGluIGlkcyB0byB0aGUgY29va2llXG4gIF9wZXJzaXN0KGl0ZW1zKSB7ICAgIFxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5fbmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgfVxuICBcbiAgLy8gU2V0IGFsbCB0aGUgaXRlbXMgaW4gb25lIGhpdC4gUmV0dXJucyB0aGUgbmV3IGNvdW50LlxuICBzZXRJdGVtcyhpdGVtcyA9IFtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XG4gICAgaXRlbXMuZm9yRWFjaChpID0+IHRoaXMuX2l0ZW1zLnNldChpLmlkLCBpLm5hbWUpKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cbiAgZ2V0SWRzKCkge1xuICAgIGNvbnN0IGlkcyA9IEFycmF5LmZyb20odGhpcy5faXRlbXMua2V5cygpKTtcbiAgICByZXR1cm4gaWRzO1xuICB9ICBcblxuICAvLyBSZW1vdmUgYWxsIG1hcCBpdGVtcyB3aG9zZSBpZHMgYXJlIG5vdCBpbiB0aGUgcGFzc2VkIGluIGxpc3RcbiAgZmlsdGVyQnlJZHMoaWRzVG9LZWVwKSB7XG4gICAgY29uc3QgaWRzID0gdGhpcy5nZXRJZHMoKTtcbiAgICByZXR1cm4gaWRzLmZvckVhY2goaSA9PiB7XG4gICAgICBpZiAoIWlkc1RvS2VlcC5pbmNsdWRlcyhpKSkge1xuICAgICAgICB0aGlzLnJlbW92ZShpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSAgXG4gIFxuICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgY3VycmVudGx5IGluIHRoZSBtYXAuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5zaXplO1xuICB9XG4gIFxuICAvLyBSZW1vdmUgaXRlbSBieSBpdHMgaWQuIFJldHVybiB0aGUgbmV3IGNvdW50XG4gIHJlbW92ZShpZCkge1xuICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShpZCk7ICAgICAgXG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgfVxuICBcbiAgLy8gQWRkIG9uZSBvciBtb3JlIGl0ZW1zLiBSZXR1cm5zIHRoZSBuZXcgY291bnRcbiAgYWRkKGlkLCBuYW1lKSB7XG4gICAgdGhpcy5faXRlbXMuc2V0KGlkLCBuYW1lKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICB9XG5cbiAgLy8gUmV0dXJuIGFsbCBpdGVtcyBpbiBhcnJheSBmb3JtYXRcbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXRlbXMuZW50cmllcygpKS5tYXAoKFtpZCwgbmFtZV0pID0+ICh7IGlkLCBuYW1lIH0pKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgbmFtZSBmb3IgYSBwYXNzZWQgaWRcbiAgZ2V0TmFtZShpZCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5nZXQoaWQpO1xuICB9XG5cbiAgLy8gRG9lcyB0aGUgbWFwIGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBpZC5cbiAgaGFzSWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaGFzKGlkKTtcbiAgfVxuXG4gIC8vIEVtcHRpZXMgdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgaXRlbXMgaW4gdGhlIG1hcC5cbiAgY2xlYXJJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRJdGVtcyhbXSk7XG4gIH1cbn1cbiIsIi8qXG4gIFRPRE86IFN3aXRjaCB0byB1c2luZyBpbnRlcmVjdGlvbiBvYnNlcnZlclxuKi9cblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuL1V0aWxpdGllcyc7XG5cbi8qKlxuICBDbGFzcyB0byBtYW5hZ2UgdGhlIGxvYWQgb24gc2Nyb2xsIGZ1bmN0aW9uYWxpdHkgZm9yIGEgcGFnZS5cbiAgV2hlbiB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgc2VydmVyIHNpZGUgaXQgc2hvdWxkIGhpZGUgdGhlIGxvYWRlciBlbGVtZW50IGlmIG5vIG1vcmUgcmVzdWx0cyB0byBsb2FkLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJpZXJMYXp5TG9hZGVyIHtcbiAgXG4gIC8qKlxuICAgIENvbnN0cnVjdG9yXG4gICAgUGFyYW1zXG4gICAgIC0gbG9hZGVyRWxlbWVudCAocmVxdWlyZWQpOiBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcyB0aGUgbG9hZGVyXG4gICAgIC0gbG9hZGVyRm4gKHJlcXVpcmVkKTogVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byBsb2FkIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cy4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIGEgYm9vbCBmb3IgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hldGhlciBvciBub3QgdGhlcmUgYXJlIG1vcmUgaXRlbXMgdG8gbG9hZC5cbiAgICAgLSBjb25maWdPYmogKG9wdGlvbmFsKTogIEFuIG9iamVjdCB3aG9zZSBrZXkgYW5kIHZhbHVlcyB3aWxsIG92ZXJyaWRlIGRlZmF1bHQgY29uZmlnIHNldHRpbmdzLlxuICAqLyAgICAgICAgICAgICAgICAgICAgXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9hZGVyRWxlbWVudCwgXG4gICAgICBsb2FkZXJGbiwgXG4gICAgICBjb25maWdPYmogPSB7fVxuICApIHtcbiAgICAgICAgXG4gICAgLyoqXG4gICAgICBEZWZhdWx0IGNvbmZpZyBzZXR0aW5nc1xuICAgICovXG4gICAgY29uc3QgY29uZmlnRGVmYXVsdHMgPSB7XG4gICAgICBsb2FkZXJDbGFzczogJ2xvYWRlcicsICAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50XG4gICAgICBsb2FkZXJMb2FkaW5nQ2xhc3M6ICdsb2FkZXItLWxvYWRpbmcnLCAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50IHdoZW4gc2VhcmNoaW5nXG4gICAgICBkZWJvdW5jZU1zOiAxMDAsIC8vIGhvdyBsb25nIHRvIHdhaXQgYmV0d2VlbiBldmVudHMgYmVmb3JlIGNhbGxpbmcgbG9hZFxuICAgICAgcGVla0Rpc3RhbmNlOiAwLCAvLyBob3cgbXVjaCBvZiBsb2FkaW5nIGVsZW1lbnQgc2hvdWxkIGJlIG9uIHNjcmVuIGJlZm9yZSBjYWxsaW5nIGxvYWRcbiAgICAgIGRlYnVnOiBmYWxzZSAgLy8gd2hldGhlciBvciBub3QgdG8gbG9nIGRlYnVnIGluZm8gdG8gY29uc29sZS5cbiAgICB9O1xuICAgICAgICBcbiAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXJFbGVtZW50O1xuICAgIHRoaXMuX2xvYWRlckZ1bmMgPSBsb2FkZXJGbjtcbiAgICB0aGlzLl9tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBcbiAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdHMgYW5kIHBhc3NlZCBpbiBjb25maWdcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZ0RlZmF1bHRzLCAuLi5jb25maWdPYmogfTtcbiAgICBcbiAgICAvLyBUcmFjayB3aGV0aGVyIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQgb3IgcmVtb3ZlZFxuICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgIFxuICAgICAgICBcbiAgICBpZiAoIXRoaXMuX2xvYWRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGxvYWRlciBlbGVtZW50IHByb3ZpZGVkJyk7XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCBvbiB0aGUgbG9hZGVycyBjbGFzcyBmcm9tIHRoZSBjb25maWdcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyQ2xhc3MpO1xuICAgIFxuICAgIC8vIERlYm91bmNlIHRoZSBjaGVja1xuICAgIHRoaXMuX2xhenlMb2FkQ2hlY2sgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICBpZih0aGlzLl9kb0xvYWRNb3JlQ2hlY2soKSkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQ2FsbGluZyBsb2FkIG1vcmUgZnVuY3Rpb24nKTtcbiAgICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcyk7XG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlYXJjaCBmdW5jdGlvbiAmIHBhc3MgaW4gdGhlIGRvbmUgc2VhcmNoaW5nIGNhbGxiYWNrXG4gICAgICAgIHRoaXMuX2xvYWRlckZ1bmModGhpcy5fZG9uZVNlYXJjaGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdOb3QgcmVhZHkgdG8gcmVsb2FkIHlldCcpO1xuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWJvdW5jZU1zKTtcbiAgICBcbiAgICAvLyBBZGQgdGhlIGV2ZW50cyAoYWxzbyBkb2VzIGluaXRpYWwgY2hlY2spXG4gICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICAgICAgXG4gICAgdGhpcy5fZG9uZVNlYXJjaGluZyA9IHRoaXMuX2RvbmVTZWFyY2hpbmcuYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSh2aXNpYmxlKSB7XG4gICAgaWYodmlzaWJsZSkge1xuICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBoYW5ka2xlIHJlc3VsdHMgY29taW5nIGJhY2sgaW5cbiAgX2RvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCkge1xuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coYF9kb25lU2VhcmNoaW5nIGNhbGxiYWNrIGNhbGxlZCB3aXRoIG1vcmUgdG8gbG9hZCAke21vcmVUb0xvYWR9YCk7XG4gICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcykgXG4gICAgaWYgKG1vcmVUb0xvYWQpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQWxsIGRvbmUgLSBoaWRpbmcgbG9hZGVyIGVsZW1lbnQnKTtcbiAgICAgIHRoaXMuX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eShmYWxzZSk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBXaXJlIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgZG8gaW5pdGlhbCBjaGVjay5cbiAgX3N0YXJ0TGlzdGVuaW5nKCkge1xuICAgIGlmICghdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHsgICAgICBcbiAgICAgIHRoaXMuX21haW4uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhZGRlZCcpO1xuICAgICAgdGhpcy5fbGF6eUxvYWRDaGVjaygpO1xuICAgIH0gIGVsc2Uge1xuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFscmVhZHkgaW4gcGxhY2UnKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gIF9zdG9wTGlzdGVuaW5nKCkge1xuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkge1xuICAgICAgdGhpcy5fbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgICBcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyByZW1vdmVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vIExpc3RlbmVycyB0byByZW1vdmUnKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEhlbHBlciB0byBsb2cgb25seSBpZiBkZWJ1Z2dpbmcgZW5hYmxlZFxuICBfY29uZGl0aW9uYWxEZWJ1Z0xvZyh0b0RlYnVnLCBsb2dnZXJGdW5jID0gY29uc29sZS5sb2csICkge1xuICAgIGlmICh0aGlzLl9jb25maWcuZGVidWcpIHtcbiAgICAgIGxvZ2dlckZ1bmModG9EZWJ1ZylcbiAgICB9XG4gIH1cbiAgXG4gIC8vIERvIHRoZSBjaGVjayB0byBzZWUgaWYgc2NyZWVuIHNvbWV3aGVyZSBpdCBzaG91bGQgYmUgbG9hZGVkLlxuICBfZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcblxuICAgIGNvbnN0IGhpZ2hlc3RWaXNpYmxlWVBvcyA9IHRoaXMuX21haW4uc2Nyb2xsVG9wICsgdGhpcy5fbWFpbi5jbGllbnRIZWlnaHQ7IC8vd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gIHRoaXMuX21haW4uc2Nyb2xsSGVpZ2h0OyAvL2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgbG9hZE1vcmVUcmlnZ2VyUG9zID0gTWF0aC5taW4oKHRoaXMuX2xvYWRlci5vZmZzZXRUb3AgKyB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlKSwgZG9jdW1lbnRIZWlnaHQpOyBcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XG4gICAgXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXG4gICAgICAnVG9wIHBvc2l0aW9uIG9mIGxvYWRlciBlbGVtZW50JzogdGhpcy5fbG9hZGVyLm9mZnNldFRvcCxcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxuICAgICAgLy8nQ3VycmVudCBZIHBvc2l0aW9uIG9mIHNjcm9sbCc6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIC8vICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgJ1RoZSBtYXggeSBwb3NpdGlvbiB2aXNpYmxlJzogaGlnaGVzdFZpc2libGVZUG9zLFxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxuICAgICAgJ0lzIHRoZSBsb2FkIG1vcmUgcG9zaXRpb24gdmlzaWJsZSwgb3IgYXQgZG9jIGVuZCc6IHNob3VsZExvYWRNb3JlLFxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcbiAgICBcbiAgICByZXR1cm4gc2hvdWxkTG9hZE1vcmU7XG4gIH07XG59XG5cbi8qXG5cbmRvTG9hZE1vcmVDaGVjaygpIHsgICAgXG4gICAgY29uc3QgaGlnaGVzdFZpc2libGVZUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSAodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpOyAgLy8gTWF0aC5taW4oKHRoaXMuX2xvYWRlci5vZmZzZXRUb3AgKyB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlKSwgZG9jdW1lbnRIZWlnaHQpOyBcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XG4gICAgXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXG4gICAgICAnVG9wIHBvc2l0aW9uIG9mIGxvYWRlciBlbGVtZW50JzogdGhpcy5fbG9hZGVyLm9mZnNldFRvcCxcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxuICAgICAgJ0N1cnJlbnQgWSBwb3NpdGlvbiBvZiBzY3JvbGwnOiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAnVGhlIGludGVybmFsIHNpemUgb2YgdGhlIHdpbmRvdyc6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICdUaGUgbWF4IHkgcG9zaXRpb24gdmlzaWJsZSc6IGhpZ2hlc3RWaXNpYmxlWVBvcyxcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXG4gICAgICAnSXMgcGVlayBwb3NpdGlvbiB2aXNpYmxlJzogcGVla1Bvc2l0aW9uVmlzaWJsZSxcbiAgICAgICdJcyB0aGUgbG9hZCBtb3JlIHBvc2l0aW9uIHZpc2libGUsIG9yIGF0IGRvYyBlbmQnOiBzaG91bGRMb2FkTW9yZSxcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXG4gICAgXG4gICAgcmV0dXJuIHNob3VsZExvYWRNb3JlO1xuICB9O1xuXG4qLyIsIlxuaW1wb3J0IHtTZWVBbGxBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4vU2VlQWxsSGVscGVyJztcblxubmV3IFNlZUFsbEF0dHJpYnV0ZUhlbHBlcigpO1xuIiwiLyoqXG4gKiAgVVNBR0U6IFRvIHVzZSB0aGlzIGNvbnRyb2wgeW91IG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlIHRvIHRoZSBidXR0b24gdGhhdCBzaG91bGQgYmUgZG9pbmcgdGhlIHNob3cgYWxsLlxuICogXG4gKiAgZGF0YS1zaG93YWxsLWNvbnRhaW5lci1pZD1cIjw8aWQgb2YgY29udGFpbmVyIHRvIGJlIGVmZmVjdGVkPj5cIlxuICogXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcbiAqIFxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcbiAqICBcbiAqICBkYXRhLXNob3dhbGwtY291bnQtaWQgLSBpZCBvZiBhIGZpZWxkIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgd2l0aCBhIGNvdW50IG9mIHRoZSBpdGVtc1xuICogXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tc2VsZWN0b3IgLSBhIHNlbGVjdG9yIHRvIGdldCB0aGUgaXRlbSBmcm9tIHdpdGggdGhlIGNvbnRhaW5lci4gIFRoaXMgaXMgcmVxdWlyZWQgaWYgdGhlIGNvbnRhaW5lciBpcyBub3QgYSB0YWJsZVxuICovXG5cbiBleHBvcnQgY2xhc3MgU2VlQWxsQXR0cmlidXRlSGVscGVyIHtcbiAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBzaG93TW9yZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zaG93YWxsLWNvbnRhaW5lci1pZF0nKTtcblxuICAgICAgICBzaG93TW9yZUJ1dHRvbnMuZm9yRWFjaChzaG93QWxsQnV0dG9uID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29udGFpbmVySWQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1jb250YWluZXItaWRcIik7XG4gICAgICAgICAgICB2YXIgaXRlbVNlbGVjdG9yID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtaXRlbS1zZWxlY3RvclwiKTtcbiAgICAgICAgICAgIHZhciBzaG93QWxsSXRlbUxpbWl0ID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtaXRlbS1saW1pdFwiKTtcbiAgICAgICAgICAgIHZhciBzaG93QWxsSXRlbUNvdW50SWQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1jb3VudC1pZFwiKTtcbiAgICAgICAgICAgIHZhciBidXR0b25JZCA9IHNob3dBbGxCdXR0b24uaWQ7XG5cbiAgICAgICAgICAgIGlmICghYnV0dG9uSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RvclRvVXNlO1xuXG4gICAgICAgICAgICBpZiAoaXRlbVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JUb1VzZSA9IGAjJHtjb250YWluZXJJZH0gJHtpdGVtU2VsZWN0b3J9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLnRhZ05hbWUgPT09IFwiVEFCTEVcIikge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yVG9Vc2UgPSBgIyR7Y29udGFpbmVySWR9IHRib2R5IHRyYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGNoaWxkIHNlbGVjdG9yIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBwYXJzZWRJdGVtTGltaXQgPSBwYXJzZUludChzaG93QWxsSXRlbUxpbWl0LCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge307XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VkSXRlbUxpbWl0KSkgeyBcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnMsIGl0ZW1MaW1pdDogcGFyc2VkSXRlbUxpbWl0fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoc2hvd0FsbEl0ZW1Db3VudElkKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zLCBjb3VudEZpZWxkSWQ6IHNob3dBbGxJdGVtQ291bnRJZH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ldyBTZWVBbGxIZWxwZXIoc2VsZWN0b3JUb1VzZSwgYCMke2J1dHRvbklkfWAsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgfVxuIH1cblxuZXhwb3J0IGNsYXNzIFNlZUFsbEhlbHBlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihpdGVtc1NlbGVjdG9yLCBzZWVBbGxTZWxlY3RvciwgcGFzc2VkT3B0aW9ucyA9IHt9KSB7XG5cbiAgICAgICAgdGhpcy5faXRlbXNTZWxlY3RvciA9IGl0ZW1zU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX3NlZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VlQWxsU2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghdGhpcy5fc2VlQWxsKSB7XG4gICAgICAgICAgICAvLyBSdW5uaW5nIG9uIGEgcGFnZSB3aXRob3V0IHNlZSBhbGwgYnV0dHRvbiwgc28gc3RvcCBhZnRlciBjb3VudHMuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZlNlZUFsbCA9IHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5O1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0geyBpdGVtTGltaXQ6IDUsIHNob3dMZXNzVGV4dDogXCJTZWUgTGVzc1wiLCBjb3VudEZpZWxkSWQ6IG51bGwgfTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4uZGVmYXVsdHMsIC4uLnBhc3NlZE9wdGlvbnMgfTtcbiAgICAgICAgdGhpcy5faXRlbUxpbWl0ID0gdGhpcy5fb3B0aW9ucy5pdGVtTGltaXQ7XG5cbiAgICAgICAgdGhpcy5fc2hvd0xlc3NUZXh0ID0gdGhpcy5fb3B0aW9ucy5zaG93TGVzc1RleHQ7XG4gICAgICAgIHRoaXMuX3Nob3dNb3JlVGV4dCA9IHRoaXMuX3NlZUFsbC50ZXh0Q29udGVudDtcblxuICAgICAgICB0aGlzLl9jb3VudEZpZWxkID0gdGhpcy5fb3B0aW9ucy5jb3VudEZpZWxkSWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9vcHRpb25zLmNvdW50RmllbGRJZCkgOiBudWxsO1xuXG4gICAgICAgIHRoaXMuX3Nob3dpbmdBbGwgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9zZWVBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG93aW5nQWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZUV4Y2Vzc0l0ZW1zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93QWxsSXRlbXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ0FsbCA9ICF0aGlzLl9zaG93aW5nQWxsO1xuICAgICAgICAgICAgdGhpcy5fc2VlQWxsLnRleHRDb250ZW50ID0gdGhpcy5fc2hvd2luZ0FsbCA/IHRoaXMuX3Nob3dMZXNzVGV4dCA6IHRoaXMuX3Nob3dNb3JlVGV4dDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuICAgIH1cblxuICAgIF9zaG93QWxsSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9oaWRlRXhjZXNzSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSB0b0NoZWNrID4gdGhpcy5faXRlbUxpbWl0ID9cbiAgICAgICAgICAgICAgICBcIm5vbmVcIiA6XG4gICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVjYWxjdWxhdGUoKSB7ICAgIFxuICAgICAgICB0aGlzLl9hbGxJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pdGVtc1NlbGVjdG9yKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvdW50RmllbGQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvdW50RmllbGQudGV4dENvbnRlbnQgPSB0aGlzLl9hbGxJdGVtcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5fc2VlQWxsKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCA8PSB0aGlzLl9pdGVtTGltaXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcyA9IHRoaXMuX2FsbEl0ZW1zWzBdLnN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zZWVBbGwuc3R5bGUuZGlzcGxheSA9IHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9zaG93aW5nQWxsKSAgeyB0aGlzLl9oaWRlRXhjZXNzSXRlbXMoKTsgfVxuICAgIH1cbn1cbiIsIi8qKioqKiogXG5cbiAgQ3JlYXRlcyBhIHRhZyBsaXN0IGZyb20gYSBzZWxlY3QgZWxlbWVudFxuXG4gIHVzYWdlOlxuXG4gIG5ldyBTZWxlY3RMaXN0VGFnKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jKS5cblxuICAtIHNlbGVjdElkIChyZXF1aXJlZCk6IFRoZSBpZCBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgYWN0aW5nIGFzIHRoZSBzb3VyY2UgKG11c3QgaGF2ZSBtdWx0aXBsZSBhdHRyaWJ1dGUsIGFuZCBhbGwgaXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZClcblxuICAtIHJldmVydEdyb3VwcyAob3B0aW9uYWwpOiBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNsaWNrZWQgdG8gcmV2ZXJ0IHNlbGVjdGVkIG9wdGlvbnMgKHNob3VsZCBoYXZlIGlzLWhpZGRlbiBjbGFzcyB0byBzdGFydClcblxuICAtIG9uVXBkYXRlRnVuYyAocmVxdWlyZWQpOiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgdGFnIGhhcyBiZWVuIHJlbW92ZWQsIG9yIG9wdGlvbnMgYXJlIHJldmVydGVkLi4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHR3byBwYXJhbXMsIHNlbGVjdGVkT3B0aW9ucyBhbmQgYWxsT3B0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBpbnRlbmRlZCB0byBtYWtlIHRoZSBjb250cm9sIG1vcmUgZmxleGlibGUgaS5lLiBvdXIgZmlyc3QgdXNhZ2UgaXMgdG8gdXBkYXRlIGxhYmVsIHdpdGggc2VsZWN0ZWQgaXRlbXMgdGV4dCBlbHNld2hlcmUgb24gcGFnZSB3aXRob3V0IGZ1cnRoZXIgY291cGxpbmcuXG5cbiAgLSBpdGVtcyAob3B0aW9uYWwpOiAgSHRtbCBvcHRpb24gZWxlbWVudHMgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdW5kZXJseWluZyBzZWxlY3QgbGlzdCBiZWZvcmUgdGFncyBnZW5lcmF0ZWQuIFxuXG4qKioqKiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RMaXN0VGFncyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jID0gKCkgPT4ge30sIG9wdGlvbnMgPSBudWxsKSB7XG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyA9IG9uVXBkYXRlRnVuYztcblxuICAgICAgdGhpcy50YWdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpO1xuICAgICAgdGhpcy50YWdPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuXG4gICAgICBpZiAocmV2ZXJ0R3JvdXBzSWQpIHtcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXZlcnRHcm91cHNJZCk7XG4gICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xuICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IHRydWUpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gdGhpcy50YWdPcHRpb25zLmFwcGVuZENoaWxkKG8pKTtcbiAgICAgIH1cblxuICAgICAgLy8gTm93IGhhbmRsZXMgcGFzc2VkIGluIHNlbGVjdCBvcHRpb25zXG4gICAgICB0aGlzLmFsbE9wdGlvbnMgPSBvcHRpb25zIHx8IFsuLi50aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldO1xuXG4gICAgICBpZiAodGhpcy5yZXZlcnRCdG4gJiYgdGhpcy5hbGxPcHRpb25zLnNvbWUobyA9PiAhby5zZWxlY3RlZCkpIHtcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcbiAgICAgIHRoaXMudGFncy5jbGFzc0xpc3QuYWRkKCd0YWdzJyk7XG4gICAgICB0aGlzLnRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRWYWwgPSBlLnRhcmdldC5kYXRhc2V0LnZhbDtcbiAgICAgICAgICBjb25zdCBvID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicrdGFyZ2V0VmFsKydcIl0nKTtcbiAgICAgICAgICAgICAgaWYobyl7XG4gICAgICAgICAgICAgICAgICBvLnNlbGVjdGVkID0gZmFsc2U7ICAgXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7ICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuYWZ0ZXIodGhpcy50YWdzKTtcblxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcbiAgfVxuXG4gIHBvcHVsYXRlVGFncygpIHtcbiAgICAgIHRoaXMudGFncy5pbm5lckhUTUwgPSAnJzsgICAgICBcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWxsT3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKTtcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICB0aGlzLnRhZ3MuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVGFnKHQuaW5uZXJUZXh0LCB0LnZhbHVlKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jKHNlbGVjdGVkT3B0aW9ucywgdGhpcy5hbGxPcHRpb25zKTtcbiAgICB9XG5cbiAgbWFrZVRhZyh0ZXh0LCB2YWx1ZSkge1xuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGkuY2xhc3NMaXN0LmFkZChcImJ1dHRvbl9faWNvblwiKTsgICAgICBcbiAgICAgIGkuZGF0YXNldC52YWw9dmFsdWU7XG4gICAgICBpLmlubmVyVGV4dCA9IFwiY2xlYXJcIlxuXG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICBcbiAgICAgIHJldHVybiB0YWc7XG4gICAgfTtcblxuICAvLyBEZXNlbGVjdCBhbGwgdGhlIG9wdGlvbnMgaW4gdGhlIHVuZGVybHlpbmcgc2VsZWN0IGxpc3QuICBPcHRpb25hbGx5IHJlZ25lcmF0ZWQgdGhlIHRhZ3MgbGlzdC4gXG4gIC8vIE9wdGlvbmFsIGFzIG5vdCB3b3J0aCBvdmVyaGVhZCBpZiBkb250IG5lZWQgaXQuIFxuICBjbGVhckl0ZW1zKHJlcG9sdWxhdGVUYWdzID0gZmFsc2UpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IG8uc2VsZWN0ZWQgPSBmYWxzZSk7XG5cbiAgICBpZiAocmVwb2x1bGF0ZVRhZ3MpIHsgICAgICBcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFNob3VsZCBoYXZlIGEgc2VjdGlvbiBsaWtlIHRoaXMgZm9yIGVhY2ggcGFnZSB0aGUgY29udHJvbCBpcyB1c2VkIG9uLCB1bmxlc3Mgd2Ugd2FudCBpdCBiZWhhdmUgZXhhY3RseSB0aGUgc2FtZSBhcyBhIHByZXZpb3VzIHZlcnNpb24gKGluY2x1ZGluZyBpZHMgYW5kIHVwZGF0ZSBmdW5jdGlvbikgXG4vLyAqQmV0dGVyIHN0aWxsKiAtIGhhdmUgaW4gc2VwZXJhdGUgc2NyaXB0IGZpbGUgc2NvcGVkIHRvIHNwZWNpZmljIHBhZ2UgKGxpa2Ugd2l0aCBTZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMpXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicpKSB7XG5cbiAgLy8gUHJlcGFyZSBhbiB1cGRhdGUgZnVuY3Rpb24gaWYgcmVxdWlyZWQgKG9wdGlvbmFsIHBhcmFtZXRlcilcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZUdyb3Vwc0xhYmVsU3BhbicpO1xuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsaXNlZEdyb3VwcyA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnZ3JvdXAnIDogJ2dyb3Vwcyc7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBgU2VuZCB0byAke3NlbGVjdGVkT3B0aW9ucy5sZW5ndGh9IHJlc3BvbnNlICR7cGx1cmFsaXNlZEdyb3Vwc31gO1xuICB9XG5cbiAgLy8gSW5pdGlhbGlzZSBhbiBpbnN0YW5jZSBvZiB0aGUgY29udHJvbFxuICBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicsICdyZXZlcnRfZ3JvdXBzJywgb25VcGRhdGVGdW5jKTsgXG59XG4iLCIvLyBTdG9yZSBhIHNpbXBsZSB2YWx1ZSBpbiBhIGNvb2tpZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlQ29va2llSGVscGVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgXG4gICAgICB0aGlzLl9pbml0aWFsaXNlKCk7XG4gICAgfVxuXG4gICAgX2luaXRpYWxpc2UoKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGRvY3VtZW50LmNvb2tpZTtcblxuICAgICAgICBjb25zdCBjb29raWVzID0gY29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xuICAgICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBtYXRjaGluZ0Nvb2tpZSA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGluZ0Nvb2tpZS5zcGxpdCgnPScpWzFdKSA6ICcnO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9OyBwYXRoPS87IHNhbWVzaXRlPVN0cmljdGBcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmV3Q29va2llO1xuICAgIH1cblxuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbn1cblxuIiwiXG4vLyBSZW1vdmUgdGhlIG5vLWpzIGNsYXNzIHNvIHdlIGFyZSBhYmxlIHRvIHRlbGwgdGhhdCBqcyBpcyBlbmFibGVkXG4vLyBVc2VmdWwgZm9yIGhpZGluZyBlbGVtZW50cyB3aGVuIGpzIG5vdCBhdmFpbGFibGUuXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2pzJyk7IiwiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZXMnKSAhPSBudWxsKSB7XG5cblxuICAgIChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIHJlc3BvbnNlIGZpZWxkcyBhbmQgdGhlIHJlc3BvbnNlIGxpc3RcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLWZpZWxkJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9ucy1saXN0Jyk7XG5cbiAgICAgICAgLy8gSGlkZSBhbGwgdGhlIGVtcHR5IHJlc3BvbnNlIGZpZWxkc1xuICAgICAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKSAudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwb25zZS5kYXRhc2V0LmtleSA9IGlkeDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmV2ZWFscyB0aGUgZmlyc3QgaGlkZGVuIGl0ZW1cbiAgICAgICAgY29uc3Qgc2hvd0ZpcnN0RW1weUl0ZW0gPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXNwb25zZSA9IHJlc3BvbnNlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gV2hlbiBhbiBpdGVtIGlzIHJlbW92ZWQsIGNvcHkgYWxsIHZhbHVlcyBmb3J3YXJkIHRvIGZpbGwgZ2Fwc1xuICAgICAgICBjb25zdCBjb3B5SXRlbXNGb3J3YXJkID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSBpbmRleCArIDE7IGlkeCA8IHJlc3BvbnNlcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldklucHV0ID0gcmVzcG9uc2VzW2lkeC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gcmVzcG9uc2VzW2lkeF0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgIHByZXZJbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vXG4gICAgICAgIGNvbnN0IHJlbW92ZUxhc3RFbXB0eUl0ZW0gPSAocmVtb3ZlSWR4KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFzIGFsbCBjb3BpZWQgZm9yd2FyZCBibGFuayBsYXN0IGl0ZW0gb3V0XG4gICAgICAgICAgICByZXNwb25zZXNbcmVzcG9uc2VzLmxlbmd0aC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJykudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIGJhY2t3YXJkcyBhbmQgaGlkZSBsYXN0IHZpc2libGUgaXRlbVxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gKHJlc3BvbnNlcy5sZW5ndGgtMSk7IGlkeCA+PSByZW1vdmVJZHg7IGlkeC0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1tpZHhdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXNbaWR4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFkZFJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfcmVzcG9uc2VcIik7XG5cbiAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYmx1cigpO1xuICAgICAgICAgICAgc2hvd0ZpcnN0RW1weUl0ZW0oKTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIHJlc3BvbnNlc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1yZXNwb25zZScpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUlkeCA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xuICAgICAgICAgICAgICAgIGNvcHlJdGVtc0ZvcndhcmQocmVtb3ZlSWR4KTtcbiAgICAgICAgICAgICAgICByZW1vdmVMYXN0RW1wdHlJdGVtKHJlbW92ZUlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG59XG5cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZScpICE9bnVsbCkge1xuXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICAgIHZhciBhZGRQaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgICAgICB2YXIgYWRkUGhvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFBob25lQnRuXCIpO1xuXG4gICAgICAgIGFkZFBob25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkUGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uYmx1cigpO1xuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIH0pXG5cbiAgICB9KShcImFkZFBob25lXCIpO1xuXG59XG5cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbCcpICE9bnVsbCkge1xuXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICAgIHZhciBhZGRFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgICAgICB2YXIgYWRkRW1haWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEVtYWlsQnRuXCIpO1xuXG4gICAgICAgIGFkZEVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkRW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uYmx1cigpO1xuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIH0pO1xuICAgIH0pKFwiYWRkRW1haWxcIik7XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcblxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcblxuICAgICAgICBhZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcblxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzYXZlR3JvdXBCdXR0b24gIT1udWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pKFwiYWRkX2dyb3VwXCIpO1xufVxuXG52YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcblxuaWYgKGdyb3VwVGV4dGFyZWEgIT0gbnVsbCkge1xuICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldDIgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XG5cbiAgICAgICAgaWYgKHRhcmdldDIubWF0Y2hlcyhcIi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Mi5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XG5cbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xuICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKSAhPW51bGwpIHtcblxuICAgIHZhciBpbnB1dEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKTtcbiAgICB2YXIgaW5wdXRFcnJvcnNBcnJheSA9IE9iamVjdC5rZXlzKGlucHV0RXJyb3JzKTtcblxuICAgIGlucHV0RXJyb3JzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEVycm9yc1trZXldKTtcbiAgICAgICAgaW5wdXRFcnJvcnNba2V5XS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcblxuICAgIH0pO1xufVxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4vLyAgICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XG5cbi8vICAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xuLy8gICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS0tYWN0aXZlXCIpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gfSkoXCIjU2lkZWJhclwiKTtcblxuIiwiLyogXG4gIERlYm91bmNlIGZ1bmN0aW9uIHByZXZlbnQgZXhjZXNzaXZlIGNhbGxzIG9uIHNjcm9sbC5cbiAgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcblx0dmFyIHRpbWVvdXQ7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0fTtcbn07IiwiXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cblxuICAgIC8vIGNoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcbiAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbSAhPT0gbnVsbCkge1xuXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xuXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgLy9pZiBpdCBkb2VzIHRoZW4gaGlkZSB0aGUgc25hY2tiYXJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XG4gICAgICAgICAgICBsb2NhdGlvbnMgOiBuZXcgQXJyYXkoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChzbmFja2Jhcikge1xuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGlmICghc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufSkoXCIjaGludC1zbmFja2JhclwiKTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogIFdpcmUgdXAgdGFibGVzIHNvIHRoYXQgd2hvbGUgcm93IGNhbiBiZSBjbGlja2VkLCByYXRoZXIgdGhhbiBpbmRpdmlkdWFsIGNlbGxzXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2V0IGFsbCB0YWJsZSByb3dzIHRoYXQgc2hvdWxkIGJlIGNsaWNrYWJsZVxuY29uc3Qgcm93c1RvTGlua2lmeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlW2RhdGEtbGlua2FibGUtY2VsbF0gPiB0Ym9keSA+IHRyJyk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBjbGlja1xuY29uc3QgaGFuZGxlUm93Q2xpY2sgPSBlID0+IHtcblxuICAvLyBGaW5kIHRoZSBjb2x1bW4gdGhhdCBzaG91bGQgY29udGFpbiB0aGUgbGlua1xuICBjb25zdCB0YWJsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RhYmxlJyk7XG4gIGNvbnN0IGNvbFRvUGFyc2UgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlua2FibGUtY2VsbCcpO1xuXG4gIC8vIEdldCB0aGUgY2xpY2tlZCByb3csIGFzIG1heWJlIGEgdGQgY2xpY2tlZC5cbiAgY29uc3Qgcm93ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcblxuICB0cnkge1xuICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSBsaW5rIHRoYXQgc2hvdWxkIGJlIGNsaWNrZWQuXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQoY29sVG9QYXJzZSwxMCkgKyAxO1xuICAgIGNvbnN0IGxpbmsgPSByb3cucXVlcnlTZWxlY3RvcihgdGQ6bnRoLWNoaWxkKCR7Y29sfSkgYWApO1xuICAgIFxuICAgIC8vIENsaWNrIHRoZSBsaW5rIG9yIHJlcG9ydCBmYWlsdXJlIHRvIGZpbmRcbiAgICBpZiAobGluaykge1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gbGluayBmb3VuZCBpbiBjb2x1bW4gc3BlY2lmaWVkIGJ5IFtkYXRhLWxpbmthYmxlLWNlbGxdJyk7XG4gICAgfVxuICB9XG4gIGNhdGNoIHtcbiAgICAvLyBXYXJuIG9mIGludmFsaWQgY29sdW1uIHNwZWNpZmllZC5cblx0Y29uc29sZS5lcnJvcignSW52YWxpZCB2YWx1ZSBzcGVjaWZpZWQgYnkgW2RhdGEtbGlua2FibGUtY2VsbF0nKTtcbiAgfVxufTtcblxuLy8gV2lyZSB1cCB0aGUgbGlzdGVuZXJzXG5yb3dzVG9MaW5raWZ5LmZvckVhY2gocm93ID0+IHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJvd0NsaWNrKSk7IiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XG5cbiAgICBpZiAobWVudSkge1xuXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XG5cbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxufSkoJyNzZWFyY2gnKTtcblxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XG5cbiAgICBpZiAobWVudSkge1xuXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XG5cbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAgJiYgbWVudUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59KSgnI21lbnUnKTsiLCIvKipcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXG4gKlxuICogIGRhdGEtc2hvd2FsbC10YWJsZS1pZD1cIjw8aWQgb2YgdGFibGUgdG8gYmUgZWZmZWN0ZWQ+PlwiXG4gKlxuICogIE9QVElPTkFMOiBVc2UgdGhlIGZvbGxvd2luZyBhdHRydGlidXRlcyB0byBhZGp1c3QgdGhlIGJlaGF2aW9yXG4gKlxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcbiAqXG4gKi9cblxuaWYoZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstbW9kZVwiKSkpe1xud2luZG93LnNjcm9sbFRvKDAsZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLW1vZGVcIikuc2Nyb2xsSGVpZ2h0KTtcbn07XG4iLCIvKiBcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc3RhZmYgY29tcG9zZSBwYWdlLlxuKi9cblxuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuLi9TaW1wbGVDb29raWVIZWxwZXInO1xuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XG5pbXBvcnQgU2VsZWN0TGlzdFRhZ3MgZnJvbSAnLi4vU2VsZWN0TGlzdFRhZ3MnO1xuaW1wb3J0IHtTZWVBbGxIZWxwZXJ9IGZyb20gJy4uL1NlZUFsbEhlbHBlcic7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtY29tcG9zZScpKSB7XG5cbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jb250YWN0Jyk7XG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0X2lucHV0Jyk7XG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnB1dF9NZXNzYWdlJyk7XG4gIGNvbnN0IHJlc2VuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X0F1dG9SZXNlbmRTY2hlZHVsZScpO1xuICBjb25zdCByZXNwb25zZU9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1vcHRpb24nKSk7XG5cbiAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xuICBjb25zdCBjb29raWVNZXNzYWdlSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VDb250ZW50Jyk7XG4gIGNvbnN0IGNvb2tpZUF1dG9SZXNlbmRIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVJlc2VuZCcpO1xuICBjb25zdCBjb29raWVSZXNwb25zZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzcG9uc2VzJyk7XG4gIGNvbnN0IGlkc1Nlc3Npb25IZWxwZXIgPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xuICBcbiAgY29uc3QgZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm9uRW1wdHlPcHRpb25zID0gcmVzcG9uc2VPcHRpb25zLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICBpZiAoY3Vyci52YWx1ZSkge1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgY3Vyci52YWx1ZV07XG4gICAgICB9XG4gIFxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIG5vbkVtcHR5T3B0aW9ucy5qb2luKCd8fCcpO1xuICB9O1xuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb29raWVIZWxwZXIuc2V0KHN1YmplY3RJbnB1dC52YWx1ZSk7XG4gICAgY29va2llTWVzc2FnZUhlbHBlci5zZXQobWVzc2FnZUlucHV0LnZhbHVlKTtcbiAgICBjb29raWVBdXRvUmVzZW5kSGVscGVyLnNldChyZXNlbmRJbnB1dC52YWx1ZSk7ICBcbiAgICBjb29raWVSZXNwb25zZUhlbHBlci5zZXQoZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhZ3NTZWVBbGxIZWxwZXIgPSBuZXcgU2VlQWxsSGVscGVyKCcjQXNjU3RhZmZTZWxlY3RvciArIGRpdiA+IC50YWcnLCAnI3NlZU1vcmVSZWNpcGllbnRzJywgeyBpdGVtTGltaXQ6IDIxLCBjb3VudEZpZWxkSWQ6ICdyZWNpcGllbnRzQ291bnQnIH0pO1xuICBcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xuICAgIGlkc1Nlc3Npb25IZWxwZXIuZmlsdGVyQnlJZHMoc2VsZWN0ZWRPcHRpb25zLm1hcCh4ID0+IHgudmFsdWUpKTtcbiAgICB0YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RPcHRpb25zID0gaWRzU2Vzc2lvbkhlbHBlci5nZXRJdGVtcygpLm1hcCgoe2lkLCBuYW1lfSk9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBvcHRpb24udmFsdWUgPSBpZDtcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gbmFtZTtcbiAgICByZXR1cm4gb3B0aW9uO1xuICB9KTtcbiAgXG4gIGNvbnN0IHNsdCA9IG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYywgc2VsZWN0T3B0aW9ucyk7IFxuXG4gIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcblxuICBjb25zdCBkaXNjYXJkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkRpc2NhcmQnKTtcbiAgZGlzY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZHNTZXNzaW9uSGVscGVyLmNsZWFySXRlbXMoKTtcbiAgICBzbHQuY2xlYXJJdGVtcygpO1xuICAgIHRhZ3NTZWVBbGxIZWxwZXIoKTtcbiAgfSk7XG5cblxufVxuIiwiXG4vLyBDaGVjayB3ZSBhcmUgb24gdGhlIGNvcnJlY3QgcGFnZS5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluLmNvdXJpZXItcHJvZmlsZS1wYWdlJyk7XG5cbmlmIChtYWluKSB7XG5cbiAgICAvLyBHcmFiIGFsbCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBvbmx5IHNob3cgd2hlbiBqcyBlbmFibGVkXG4gICAgY29uc3QgYWRkUGhvbmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmVCdG4nKTtcbiAgICBjb25zdCBhZGRFbWFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbEJ0bicpO1xuICAgIGNvbnN0IHJlbW92ZUVtYWlsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKTtcbiAgICBjb25zdCByZW1vdmVQaG9uZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSk7XG4gICAgXG4gICAgLy8gU2hvdyBhbGwgdGhlIGpzIG9ubHkgYnV0dG9uc1xuICAgIFthZGRQaG9uZUJ0biwgYWRkRW1haWxCdG4sIC4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbWFpbHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZW1haWxzJyk7XG4gICAgXG4gICAgZW1haWxzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYW5rJyk7XG4gICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGhvbmVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBob25lcycpO1xuICAgIFxuICAgIHBob25lc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4geyAgICAgICAgXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYW5rJyk7XG4gICAgICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGVtcHR5IHBob25lIGJveGVzLCBvciBlbWFpbCBib3hlc1xuICAgIGNvbnN0IGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlID0gKHNlY3Rpb24sIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHNlY3Rpb25cbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgICAgICAgIC5zb21lKHggPT4geC52YWx1ZS50cmltKCkgPT09ICcnKTtcbiAgICB9O1xuXG4gICAgLy8gU2hvdWxkIG5vdCBoYXZlIGFuZCBhZGQgZW1haWwgYnV0dG9uIGlmIGFscmVhZHkgYSBibGFuayBvbmUgYXZhaWxhYmxlXG4gICAgY29uc3Qgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlID0gKCkgPT4ge1xuICAgICAgICBhZGRQaG9uZUJ0bi5zdHlsZS5kaXNwbGF5ID0gaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUocGhvbmVzU2VjdGlvbiwgJy5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0JykgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgIH1cblxuICAgIC8vIFNob3VsZCBub3QgaGF2ZSBhbmQgYWRkIHBob25lIGJ1dHRvbiBpZiBhbHJlYWR5IGEgYmxhbmsgb25lIGF2YWlsYWJsZVxuICAgIGNvbnN0IHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSA9ICgpID0+IHtcbiAgICAgICAgYWRkRW1haWxCdG4uc3R5bGUuZGlzcGxheSA9ICBoYXNFbXB0eUNvbnRhY3RCb3hlRm9yVHlwZShlbWFpbHNTZWN0aW9uLCAnLmlucHV0LS1wcm9maWxlLWVtYWlsID4gaW5wdXQnKSA/ICdub25lJyA6ICdibG9jayc7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBmb3JtLCB0byBhZGQgcmVtb3ZlIGxpc3RlbmVycyB0b1xuICAgIGNvbnN0IGNvbnRhY3RQcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXByb2ZpbGUtZm9ybScpOyAgIFxuXG4gICAgWy4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LmFkZCgnaW5wdXRfX3dpdGhhY3Rpb24nKTtcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBleGNlc3MgaW5wdXRzIG9mIHRoZXNlIHR5cGVzIG9uIGxvYWQgKEFkZGVkIGZvciBub24ganMgcHVycG9zZXMpLlxuICAgIFtcIi5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0XCIsIFwiLmlucHV0LS1wcm9maWxlLWVtYWlsID4gaW5wdXRcIl0uZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0c0ZvclNlbGVjdG9yID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICAgICAgaWYgKGlucHV0c0ZvclNlbGVjdG9yLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGlucHV0c0ZvclNlbGVjdG9yLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgY29ycmVjdCBzdGFydCBzdGF0ZSBmb3IgZW1haWwgYW5kIHBob25lIGFkZCBidXR0b25zXG4gICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XG4gICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XG5cbiAgICAvLyBBZGQgYSBuZXcgcGhvbmUgcm93XG4gICAgZnVuY3Rpb24gbmV3UGhvbmVSb3coKSB7ICAgICAgICBcblxuICAgICAgICBjb25zdCBuZXdQaG9uZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UGhvbmUuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1waG9uZVwiO1xuICAgICAgICBuZXdQaG9uZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIHBob25lIG51bWJlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSBidG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmVcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cInBob25lX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIG5ld1Bob25lO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBnYXBzIGluIGluZGV4IHNlcXVlbmNlc1xuICAgIGZ1bmN0aW9uIF9yZW51bWJlcklucHV0cyhzZWxlY3RvciwgaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnAgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wLmlkID0gYCR7aWRlbnRpZmllcn1fJHtpbmRleH1fYDtcbiAgICAgICAgICAgIGlucC5uYW1lID0gYCR7aWRlbnRpZmllcn1bJHtpbmRleH1dYDtcbiAgICAgICAgICAgIGNvbnN0IHNwbiA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsbXNnLWZvcicsIGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIG5ldyBlbWFpbCByb3dcbiAgICBmdW5jdGlvbiBuZXdFbWFpbFJvdygpIHsgICAgXG4gICAgICAgIGNvbnN0IG5ld0VtYWlsUm93ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgXG4gICAgICAgIG5ld0VtYWlsUm93LmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtZW1haWxcIjsgIFxuICAgICAgICBuZXdFbWFpbFJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhbiBlbWFpbCBhZGRyZXNzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmVtb3ZlICBidG4tcmVtb3ZlLWNvbnRhY3QtZW1haWxcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cImVtYWlsX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIG5ld0VtYWlsUm93O1xuICAgIH1cblxuICAgIC8vIFdpcmUgdXAgdGhlIGJ1dHRvbiBsaXN0ZW5lcnNcbiAgICBhZGRQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld1Bob25lUm93KCkpO1xuICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xuICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcbiAgICB9KTtcbiAgICBcbiAgICBhZGRFbWFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld0VtYWlsUm93KCkpXG4gICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcbiAgICAgICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XG4gICAgfSk7ICBcblxuICAgIC8vIEhhbmRsZSB0aGUgcmVtb3ZlIG9uIHRoZSBwYXJlbnQgZm9ybSwgc28gdGhhdCB3aWxsIHdvcmsgZm9yIG5ldyBpdGVtcyBhZGRlZCBhZnRlciBsb2FkLlxuICAgIGNvbnRhY3RQcm9maWxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykgIHx8IGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgYWxsIHRoZSBpbnB1dHMgaW4gdGhlIHBhcmVudCBzZWN0aW9uXG4gICAgICAgICAgICBjb25zdCBpbnB1dHMgPSBlLnRhcmdldC5jbG9zZXN0KCdzZWN0aW9uJykucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgYmxhbmsgaXQgLSBlbHNlIHJlbW92ZSBpdFxuICAgICAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHNbMF0udmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwYXJlbnQgZm9ybSBncm91cCBjb250YWluaW5nIGVtYWlsIG9yIHBob25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZSgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpIHtcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLXBob25lJywgJ0lucHV0LlBlcnNvbmFsUGhvbmVOdW1iZXJzJyk7XG4gICAgICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpIHtcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcbiAgICAgICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiLyogXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxuKi9cbmltcG9ydCBJZFNlc3Npb25TdG9yYWdlSGVscGVyIGZyb20gJy4uL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXInO1xuaW1wb3J0IERyYWZ0TWVzc2FnZURyYXdlciBmcm9tICcuLi9EcmFmdE1lc3NhZ2VEcmF3ZXInO1xuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi4vTGF6eUxvYWRlcic7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtaW5kZXgnKSkge1xuXG4gIGNvbnN0IGlkU2ggPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xuICBjb25zdCBkbWQgPSBuZXcgRHJhZnRNZXNzYWdlRHJhd2VyKGlkU2guZ2V0Q291bnQoKSk7XG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcblxuICBjb25zdCBhbGxDaGVja2JveGVzSW5UYWJsZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0YWJsZS1zZWxlY3Qtc3RhZmYgW3R5cGU9Y2hlY2tib3hdXCIpKTtcblxuICAvLyBDaGVjayBhbGwgaXRlbXMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgaXRlbXNUaGF0U2hvdWxkQmVTZWxlY3RlZCA9IGFsbENoZWNrYm94ZXNJblRhYmxlLmZpbHRlcihjYiA9PiBpZFNoLmhhc0lkKGNiLnZhbHVlKSk7XG4gIGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQuZm9yRWFjaChpID0+IGkuY2hlY2tlZCA9IHRydWUpO1xuXG4gIGNvbnN0IGFsbENoZWNrYm94ZXNTZWxlY3RlZCA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLmV2ZXJ5KGNiID0+IGNiLmNoZWNrZWQpO1xuICBcbiAgLy8gY29uc3QgYWxsQ29udGFjdElkcyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiBjYi52YWx1ZSk7XG4gIGNvbnN0IGFsbENvbnRhY3RzID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUubWFwKGNiID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNiLnZhbHVlLFxuICAgICAgbmFtZTogY2IuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhY3QtbmFtZScpXG4gICAgfVxuICB9KTtcblxuICAvLyBVc2VzIGEgcGFzc2VkIGluICdjb21iaW5lcicgZnVuY3Rpb24gdG8gZGVjaWRlZCBob3cgdG8gZWl0aGVyIGFkZCBvciByZW1vdmUgc2VsZWN0ZWQgcmVzdWx0cyB0byB0aG9zZSBmcm9tIG90aGVyIHBhZ2VzLlxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UgPSAoY29tYmluZUZuKSA9PiB7XG4gICAgY29uc3QgYWxsQ29udGFjdHNEaXNwbGF5ZWQgPSBhbGxDb250YWN0cygpO1xuICAgIGNvbnN0IGV4aXN0aW5nQ29udGFjdHMgPSBpZFNoLmdldEl0ZW1zKCk7XG4gICAgY29uc3QgbmV3SXRlbXMgPSBjb21iaW5lRm4oZXhpc3RpbmdDb250YWN0cywgYWxsQ29udGFjdHNEaXNwbGF5ZWQpOyAgXG5cbiAgICBpZFNoLnNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgICBkbWQudXBkYXRlKG5ld0l0ZW1zLmxlbmd0aCk7XG4gIH1cblxuICAvLyBSZW1vdmUgYWxsIHRoZSBpZHMgdGhhdCB3ZXJlIGNvbnRhaW5lZCBpbiB0aGlzIHJlc3VsdHMgcGFnZS4gIEtlZXAgcmVzdWx0IGZyb20gb3RoZXIgcGFnZXMgc2VsZWN0ZWRcbiAgY29uc3QgZGVzZWxlY3RBbGwgPSAodG9EZXNlbGVjdCkgPT4ge1xuICAgIHRvRGVzZWxlY3QuZm9yRWFjaCh0b0Rlc2VsZWN0ID0+IHRvRGVzZWxlY3QuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IGV4aXN0aW5nSXRlbXMuZmlsdGVyKCh7aWR9KSA9PiAhYWxsSXRlbXNGb3JHcm91cC5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpKTtcbiAgfVxuXG4gIC8vIEFkZCBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxuICBjb25zdCBzZWxlY3RBbGwgPSAodG9TZWxlY3QpID0+IHtcbiAgICB0b1NlbGVjdC5mb3JFYWNoKHRvU2VsZWN0ID0+IHRvU2VsZWN0LmNoZWNrZWQgPSB0cnVlKTsgICAgXG5cbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IHtcblxuICAgICAgLy8gZ2V0IGFsbCBpdGVtcyBvbiB0aGUgcGFnZSBub3QgaW4gdGhlIGV4aXN0aW5nIHJlc3VsdHNcbiAgICAgIGNvbnN0IGdyb3VwSXRlbXNUb0FkZCA9IGFsbEl0ZW1zRm9yR3JvdXAuZmlsdGVyKCh7aWR9KSA9PiAhZXhpc3RpbmdJdGVtcy5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpO1xuXG4gICAgICAvLyBNZXJnZSB0aGUgbmV3IGl0ZW1zIGluXG4gICAgICByZXR1cm4gWy4uLmV4aXN0aW5nSXRlbXMsIC4uLmdyb3VwSXRlbXNUb0FkZF07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgIFxuXG4gICAgdGFyZ2V0LmNoZWNrZWQgP1xuICAgICAgc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKSA6XG4gICAgICBkZXNlbGVjdEFsbChhbGxDaGVja2JveGVzSW5UYWJsZSk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVTZWxlY3RBbGxDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYlNlbGVjdEFsbCBbdHlwZT1jaGVja2JveF0nKTtcbiAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XG4gICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlKTtcblxuICAgIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xuICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXNlcnNUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcbiAgbGV0IHVzZXJzVGFibGVCb2R5O1xuICBpZih1c2Vyc1RhYmxlKSB7XG4gICB1c2Vyc1RhYmxlQm9keSA9IHVzZXJzVGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50UGFnZSA9IDE7XG5cbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgY29uc3QgY3JpdGVyaWFLZXkgPSAnY3JpdGVyaWEnO1xuICBcbiAgbGV0IHNlYXJjaENyaXRlcmlhU3RyaW5nID0gdXJsUGFyYW1zLmhhcyhjcml0ZXJpYUtleSkgPyBgP2NyaXRlcmlhPSR7dXJsUGFyYW1zLmdldChjcml0ZXJpYUtleSl9YCA6ICcnO1xuXG4gIGNvbnN0IGdldFNlYXJjaEVuZHBvaW50ID0gKCkgPT4gYCR7bG9jYXRpb24ub3JpZ2lufS9Gb3JjZS9Db250YWN0cy8ke2N1cnJlbnRQYWdlfSR7c2VhcmNoQ3JpdGVyaWFTdHJpbmd9YDtcbiAgXG4gIC8vIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBjaGVja2JveGVzXG4gIGNvbnN0IHN0YWZmVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XG5cbiAgaWYgKHN0YWZmVGFibGUpIHtcbiAgICBzdGFmZlRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICh7dGFyZ2V0fSkgPT4ge1xuICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VG90YWwgPSB0YXJnZXQuY2hlY2tlZCA/IGlkU2guYWRkKHRhcmdldC52YWx1ZSwgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKSkgOiBpZFNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xuICAgICAgICAgIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAvLyBJZiB1bmNoZWNrZWQgZGVzZWxlY3QgdGhlIGNoZWNrIGFsbC5cbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAvLyBJZiBjaGVja2VkIHNlZSBpZiBhbGwgYXJlIG5vdyBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xuICAgICAgfVxuICAgIH0pOyAgfSAgXG5cbiAgY29uc3QgY3JlYXRlQ2hlY2tib3hGaWVsZCA9ICh2YWx1ZSwgY2hlY2tlZCwgbmFtZSkgPT4geyAgXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jZWxsJyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhY3QtbmFtZScsIG5hbWUpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlQ2VsbFdpdGhUZXh0ID0gdGV4dCA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2VsbC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgY29uc3QgYWRkUm93ID0gdXNlciA9PiB7XG4gICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5uYW1lKSk7XG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLmNvbGxhcikpO1xuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5lbWFpbCkpO1xuICAgIGNvbnN0IHBob25lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgcGhvbmVUZXh0Tm9kZSAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh1c2VyLnBob25lTnVtYmVyQ291bnQgPiAxID8gYCAke3VzZXIucGhvbmVOdW1iZXJ9YCA6IHVzZXIucGhvbmVOdW1iZXIpO1xuICAgIFxuICAgIGlmICh1c2VyLnBob25lTnVtYmVyQ291bnQgPiAxKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgICBiYWRnZS5jbGFzc0xpc3QuYWRkKCdiYWRnZScpO1xuICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSB1c2VyLnBob25lTnVtYmVyQ291bnQ7XG4gICAgICBwaG9uZUNlbGwuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgIH1cblxuICAgIHBob25lQ2VsbC5hcHBlbmRDaGlsZChwaG9uZVRleHROb2RlKTtcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQocGhvbmVDZWxsKTtcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3hGaWVsZCh1c2VyLmlkLCBpZFNoLmhhc0lkKHVzZXIuaWQpLCB1c2VyLm5hbWUpKTtcblxuICAgIHVzZXJzVGFibGVCb2R5LmFwcGVuZENoaWxkKG5ld1Jvdyk7XG4gIH1cblxuICBjb25zdCBhZGRSZXN1bHRSb3dzID0gcm93cyA9PiB7XG4gICAgcm93cy5mb3JFYWNoKGFkZFJvdyk7XG4gIH1cblxuICBpZiAobG9hZGVyKSB7XG5cbiAgICBjb25zdCBsb2FkZXJQYWdlU2l6ZSA9IGxvYWRlci5nZXRBdHRyaWJ1dGUoXCJwYWdlLXNpemVcIik7XG5cbiAgICBuZXcgTGF6eUxvYWRlcihsb2FkZXIsIGFzeW5jIGRvbmUgPT4ge1xuICBcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIGluZGV4XG4gICAgICAgIGN1cnJlbnRQYWdlKys7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0U2VhcmNoRW5kcG9pbnQoKTtcblxuICAgICAgICAvLyBEbyB0aGUgc2VhcmNoXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGVuZHBvaW50KTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zdCBoYXNSZXN1bHRzID0gcmVzdWx0cy5sZW5ndGggPiAwO1xuXG4gICAgICAgIC8vIFdlIGRvbnQga25vdyBpZiB0aGVyZSB3aWxsIGJlIG1vcmUgcmVzdWx0cywgYnV0IGl0cyBsaWtlbHkgaWYgd2UgcmV0dXJuIGEgZnVsbCBwYWdlIG9mIHJlc3VsdHNcbiAgICAgICAgbGV0IG1vcmVSZXN1bHRzTGlrZWx5ID0gaGFzUmVzdWx0cztcbiAgICAgICAgaWYgKGxvYWRlclBhZ2VTaXplKSB7XG4gICAgICAgICAgLy8gV2UgbWF5IG5vdCBoYXZlIHRoaXMgYXR0cmlidXRlLCBidXQgaWYgd2UgZG8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgZnVsbC4gSWYgbm90IHRoZXJlIHNob3VsZCBiZSBubyBtb3JlIHJlc3VsdHMgdG8gZmV0Y2hcbiAgICAgICAgICBtb3JlUmVzdWx0c0xpa2VseSA9IHJlc3VsdHMubGVuZ3RoID09PSBwYXJzZUludChsb2FkZXJQYWdlU2l6ZSwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc1Jlc3VsdHMpIHsgICAgICAgICAgXG4gICAgICAgICAgYWRkUmVzdWx0Um93cyhyZXN1bHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbmUobW9yZVJlc3VsdHNMaWtlbHkpOyAgXG4gICAgICB9XG4gICAgICBjYXRjaChlKSB7ICAgICAgICBcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxhenkgbG9hZCBwYWdlICR7Y3VycmVudFBhZ2V9IG9mIEFEIHVzZXJzYCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8vIElnbm9yZSBjdXJyZW50IGZhaWxlZCBwYWdlLCBzbyB3aWxsIHRyeSBhZ2FpblxuICAgICAgICBjdXJyZW50UGFnZS0tO1xuICAgICAgICBkb25lKHRydWUpOyAvLyBDYWxsIGRvbmUgd2l0aCBtb3JlIHRvIGxvYWQuXG4gICAgICAgIC8vIFRPRE86IFdoYXQgdG8gZG8gaGVyZS4gSWYgZW5wb2ludCBpcyBkb3duLCB3ZSB3b3VsZCBnZXQgbG90cyBvZiBjb25zb2xlIGVycm9ycyBhdCB0aGUgbW9tZW50Li4uLlxuICAgICAgfVxuICAgICAgXG4gICAgfSwgeyBkZWJ1ZzogZmFsc2UsIHBlZWtEaXN0YW5jZTogNTAgfSk7XG4gIH0gIFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogIEhhbmRsZSB0aGUgY2xpY2tpbmcgb2YgYSBzZWFyY2ggZmllbGRzIHggaWNvbi4gIFxuICogIEJsYW5rcyB0aGUgZmllbGQgYW5kIG9wdGlvbmFsbHkgcmVkaXJlY3QgbWludXMgcXVlcnkgc3RyaW5nIHBhcmFtXG4gKiAgc3BlY2lmaWVkIG9uIHRoZSBzcGFuLmZvcm1fX2lucHV0LS1jbGVhciAoZGF0YS1wYXJhbS1uYW1lKVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiBCdWlsZCBhbmQgcmVkaXJlY3QgdG8gcGF0aCBtaW51cyB0aGUgc3BlY2lmaWVkIHBhcmFtIG5hbWUgaW4gcXVlcnkgc3RyaW5nICovXG5mdW5jdGlvbiByZWRpcmVjdFdpdGhvdXRTZWFyY2gocGFyYW1OYW1lKSB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgIGNvbnN0IHtvcmlnaW4sIHBhdGhuYW1lfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB1cmxQYXJhbXMuZGVsZXRlKHBhcmFtTmFtZSk7XG4gICAgY29uc3QgbmV3Q3JpdGVyaWEgPSB1cmxQYXJhbXMudG9TdHJpbmcoKSA/IGA/JHt1cmxQYXJhbXN9YCA6ICcnOyAgICBcbiAgICBjb25zdCBuZXdQYXRoID0gYCR7b3JpZ2lufSR7cGF0aG5hbWV9JHtuZXdDcml0ZXJpYX1gO1xuICAgIFxuICAgIC8vIE9ubHkgcmVkaXJlY3QgaWYgcGFyYW1zIHdpdGggY2hhbmdlIGkuZS4gbm90IGp1c3QgY2xlYXJpbmcgc2VhcmNoIGZpZWxkXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSBuZXdQYXRoKSB7ICAgICAgICBcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdQYXRoKTtcbiAgICB9XG59XG5cbi8qIENsZWFyIGEgc2VhcmNoIGZpZWxkIHdoZW4gdGhlIGlucHV0cyBjbGVhciBidXR0b24gaXMgY2xpY2tlZCAqL1xuZnVuY3Rpb24gY2xlYXJTZWFyY2goZSkge1xuICAgIHZhciB0b0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tLXNlYXJjaCA+IC5mb3JtX19pbnB1dC0tc2VhcmNoJyk7XG4gICAgdG9DbGVhci5mb3JFYWNoKHRjID0+IHRjLnZhbHVlID0gJycpO1xuXG4gICAgLy8gVG9kbyB0cnkgYW5kIGdldCBhdHRyaWJ1dGUsIGFuZCByZWRpcmVjdCBpZiBoYXMgaXQuXG4gICAgY29uc3QgcGFyYW1Ub1JlbW92ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbS1uYW1lJyk7XG4gICAgaWYgKHBhcmFtVG9SZW1vdmUpIHtcbiAgICAgICAgcmVkaXJlY3RXaXRob3V0U2VhcmNoKHBhcmFtVG9SZW1vdmUpO1xuICAgIH1cbn1cblxubGV0IGNsZWFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19pbnB1dC0tY2xlYXInKTtcblxuY2xlYXJCdXR0b25zLmZvckVhY2goY2IgPT4gY2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclNlYXJjaCkpOyIsIi8qKlxuICogIFVTQUdFOiBUbyB1c2UgdGhpcyBjb250cm9sIHlvdSBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSB0byB0aGUgYnV0dG9uIHRoYXQgc2hvdWxkIGJlIGRvaW5nIHRoZSBzaG93IGFsbC5cbiAqXG4gKiAgZGF0YS1zaG93YWxsLXRhYmxlLWlkPVwiPDxpZCBvZiB0YWJsZSB0byBiZSBlZmZlY3RlZD4+XCJcbiAqXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcbiAqXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tbGltaXQ9XCIyMFwiIC0gc2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgaW5pdGlhbGx5LiAgRGVmYXVsdCBpcyAxMFxuICpcbiAqL1xuXG52YXIgc2hvd1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaVtkYXRhLXBhc3N3b3JkXScpO1xuXG5jb25zb2xlLmxvZyhzaG93UGFzc3dvcmQpO1xuY29uc29sZS5sb2coJ2hlbGxvIHdvcmQnKTtcblxuc2hvd1Bhc3N3b3JkLmZvckVhY2goc2hvd1Bhc3N3b3JkQnV0dG9uID0+IHtcblxuICB2YXIgcGFzc3dvcmRJRCA9IHNob3dQYXNzd29yZEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhc3N3b3JkXCIpO1xuXG4gIGNvbnNvbGUubG9nKCdoZWxsbzogJyArIHBhc3N3b3JkSUQpO1xuXG5cbiAgc2hvd1Bhc3N3b3JkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsKSA9PiB7XG4gICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gZWwuZW1wdHkoKTtcbiAgICAgIGNvbnNvbGUubG9nKHNob3dQYXNzd29yZEJ1dHRvbik7XG4gICAgICBpZiAoc2hvd1Bhc3N3b3JkQnV0dG9uLmlubmVySFRNTCA9PT0gXCJ2aXNpYmlsaXR5XCIpIHtcbiAgICBzaG93UGFzc3dvcmRCdXR0b24uaW5uZXJIVE1MID0gXCJ2aXNpYmlsaXR5X29mZlwiO1xuICB9IGVsc2Uge1xuICAgIHNob3dQYXNzd29yZEJ1dHRvbi5pbm5lckhUTUwgPSBcInZpc2liaWxpdHlcIjtcbiAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnY2xpY2plZCcpO1xuICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFzc3dvcmRJRCk7XG5cbiAgICAgIHBhc3N3b3JkSUQudHlwZSA9IFwidGV4dFwiO1xuXG5cbiAgICAgIC8vIGVsLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgIGlmIChpbnB1dC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICAgICAgfVxuICAgIH0pO1xuXG5cbn0pO1xuIiwiLyogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbixcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuXG4vLyBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xuLy8gICAgIGlmKGFzaWRlRXhpc3Qpe1xuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhc2lkZS0tYWN0aXZlXCIpO1xuLy8gfVxuLy8gfVxuXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XG4gICAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XG5cbmlmIChhZGRHcm91cEJ1dHRvbikge1xuXG5hZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xuICAgIH0pXG59XG5cbnZhciBjbG9zZVNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Vfc2lkZWJhcicpO1xuXG5pZiAoY2xvc2VTaWRlYmFyKSB7XG5cbmNsb3NlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICB2YXIgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgLy8gaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgaWYgKCF4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XG4gICAgICAgIHguY2xhc3NMaXN0LmFkZCgnYXNpZGUtLWFjdGl2ZScpO1xuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xuICAgICAgLy8gfVxuICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0taGlkZGVuJyk7XG4gICAgICAvLyB9XG4gIH1cblxuXG59XG4iLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuICAgIGNvbnN0IHJlbW92ZVF1ZXJ5UGFyYW0gPSBwYXJhbSA9PiB7XG4gICAgICAgIGlmKHVybFBhcmFtcy5oYXMocGFyYW0pKXtcbiAgICAgICAgICAgIHVybFBhcmFtcy5kZWxldGUocGFyYW0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT89JHt1cmxQYXJhbXMudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhY3RQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0NvbnRhY3RBZGRlZCcpO1xuICAgIGNvbnN0IE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcbiAgICBjb25zdCBNZXNzYWdlU2VudFBhcmFtID0gdXJsUGFyYW1zLmdldCgnTWVzc2FnZVNlbnQnKTtcbiAgICBjb25zdCBGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdGb3JjZUNvbnRhY3RVcGRhdGVkJyk7XG5cbiAgICBsZXQgc25hY2tiYXJNZXNzYWdlID0gJyc7XG5cbiAgICBpZiAoY29udGFjdFBhcmFtID09PSAnVHJ1ZScpIHtcbiAgICAgICAgcmVtb3ZlUXVlcnlQYXJhbSgnQ29udGFjdEFkZGVkJyk7XG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgY29udGFjdCBoYXMgYmVlbiBjcmVhdGVkJztcbiAgICB9IGVsc2UgaWYgKE9yZ2FuaXNhdGlvblBhcmFtID09PSAnVHJ1ZScpIHtcbiAgICAgICAgcmVtb3ZlUXVlcnlQYXJhbSgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBvcmdhbmlzYXRpb24gaGFzIGJlZW4gY3JlYXRlZCc7XG4gICAgfSBlbHNlIGlmIChNZXNzYWdlU2VudFBhcmFtID09PSAnVHJ1ZScpIHtcbiAgICAgICAgLyogXG4gICAgICAgICAgICBCaXQgaGFja3ksIGJ1dCBjbGVhcmluZyB0aGUgc2Vzc2lvblN0b3JhZ2UgaGVyZSB0byBjbGVhciBtZXNzYWdlIHN0YXRlIGhlcmUuIFxuICAgICAgICAqL1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiQ291cmllck1lc3NhZ2VVc2Vyc1wiKVxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdNZXNzYWdlU2VudCcpO1xuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTWVzc2FnZSBzZW50JztcbiAgICB9IGVsc2UgaWYgKEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSAmJiBGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ0ZvcmNlQ29udGFjdFVwZGF0ZWQnKTtcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ1BlcnNvbmFsIGNvbnRhY3QgZGV0YWlscyB1cGRhdGVkJztcbiAgICB9IFxuXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xuICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QuYWRkKCdzbmFja2Jhci0tYWN0aXZlJyk7XG4gICAgICAgIHNuYWNrYmFyLmlubmVySFRNTCA9IHNuYWNrYmFyTWVzc2FnZTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QucmVtb3ZlKCdzbmFja2Jhci0tYWN0aXZlJyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cblxufSkoXCIjc25hY2tiYXJcIik7XG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgdHInKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyB9KShcInRhYmxlXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==