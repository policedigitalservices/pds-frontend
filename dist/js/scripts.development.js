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
/*! exports provided: TreeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return TreeView; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SeeAllHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeeAllHelper */ "./src/js/SeeAllHelper.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/*
  TODO:  This could do with more refactoring.  This is too tangled up with the tags area.  
  These should be separate components that dont know about each other (except their public interfaces).  
  These should then be tied together on containing pages
*/

var treeviewDefaults = {
  sourceSelector: "#Group",
  useCheckboxes: false,
  useSingleSelectCheckbox: false,
  lockRootNode: false,
  destinationTagsSelector: "#GroupTextarea",
  destinationSelectSelector: "#GroupSelector",
  tagSelector: "#GroupTextarea > .tag",
  defaultOptionValue: "\\",
  seeAllCountLimit: 21,
  seeMoreGroupsSelector: "#seeMoreGroups",
  countFieldId: 'groupsCount',
  treeviewId: 'treeview-groups',
  isGroupsStructure: true
};
var TreeView = /*#__PURE__*/function () {
  function TreeView(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TreeView);

    this._settings = _objectSpread(_objectSpread({}, treeviewDefaults), options);
    this._initiallySelectedNodes = [];
    this._sourceSelect = document.querySelector(this._settings.sourceSelector);
    this._destinationTags = document.querySelector(this._settings.destinationTagsSelector);
    this._destinationSelect = document.querySelector(this._settings.destinationSelectSelector);
    this._tagsSeeAllHelper = null;
    this._searchParts = null;
    this._treeContainer = null;
    this._pagePath = "";
    this._groupParam = "";
    this._searchParam = "";

    this._initialiseDestinationSelect();

    this._intiailiseDestinationTags();

    this._initialiseSearchParts();

    this._initialiseTreeView();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TreeView, [{
    key: "_initialiseDestinationSelect",
    value: function _initialiseDestinationSelect() {
      var _this = this;

      if (this._destinationSelect) {
        this._destinationSelect.parentElement.classList.add("is-hidden");

        this._destinationTags.parentElement.classList.remove("is-hidden");

        this._initiallySelectedNodes = Array.from(this._destinationSelect.querySelectorAll('option:checked')).map(function (option) {
          return option.value || _this._settings.defaultOptionValue;
        });
      }
    }
  }, {
    key: "_intiailiseDestinationTags",
    value: function _intiailiseDestinationTags() {
      var _this2 = this;

      if (this._destinationTags) {
        this._tagsSeeAllHelper = new _SeeAllHelper__WEBPACK_IMPORTED_MODULE_4__["SeeAllHelper"](this._settings.tagSelector, this._settings.seeMoreGroupsSelector, {
          itemLimit: this._settings.seeAllCountLimit,
          countFieldId: this._settings.countFieldId
        });

        this._destinationTags.addEventListener('click', function (e) {
          var target = e.target;

          if (target.matches(".tag>.button__icon") && target.hasAttribute('data-path')) {
            var pathToUncheck = target.getAttribute("data-path").replace(/\\/g, "\\\\");
            var cbSelector = "#".concat(_this2._settings.treeviewId, " input[type=checkbox].treeview__checkbox[value=\"").concat(pathToUncheck, "\"]");
            var checboxToUncheck = document.querySelector(cbSelector);

            if (checboxToUncheck) {
              checboxToUncheck.click();
            }

            _this2._tagsSeeAllHelper.recalculate();
          }
        });
      }
    }
  }, {
    key: "_initialiseSearchParts",
    value: function _initialiseSearchParts() {
      var vars = {};
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
      });
      this._searchParts = _objectSpread({}, vars);
      this._pagePath = window.location.origin + window.location.pathname + "?group=";
      this._groupParam = this._searchParts.group;
      this._searchParam = this._searchParts.Search;
    }
  }, {
    key: "_getPagePathForGroup",
    value: function _getPagePathForGroup(group) {
      var grp = group === "" ? "\\" : group;
      return this._pagePath + grp;
    }
  }, {
    key: "_shouldParentBeOpen",
    value: function _shouldParentBeOpen(path) {
      if (!this._groupParam) {
        return false;
      }

      var pathToCheck = path + "\\";
      return this._groupParam.startsWith(pathToCheck) && this._groupParam != pathToCheck;
    }
  }, {
    key: "_isSelectedGroup",
    value: function _isSelectedGroup(path) {
      var paramsToCheck = decodeURIComponent(this._groupParam || "\\");
      var pathToCheck = path || "\\";
      return paramsToCheck === pathToCheck;
    }
  }, {
    key: "_buildLink",
    value: function _buildLink(text, path) {
      var link = document.createElement("a");
      link.innerHTML = "\n            <span class='treeview__item-toggle'></span>\n            <span class='treeview__item-content'>".concat(text, "</span>\n        ");
      link.href = this._getPagePathForGroup(path);
      link.classList.add("treeview__item-link");
      return link;
    }
  }, {
    key: "_buildLabel",
    value: function _buildLabel(text, path, parentChecked) {
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

      if (this._settings.isGroupsStructure) {
        var _toggleSpan = document.createElement('span');

        _toggleSpan.classList.add('treeview__item-toggle');

        label.appendChild(_toggleSpan);
      }

      label.appendChild(outerSpan);

      if (path === '\\' && this._settings.lockRootNode) {
        // In this mode the root node should be disabled and checked BUT the children of this node should act as though it isnt checked so we dont update the selected state
        checkbox.checked = true;
        checkbox.disabled = true;
      } else if (parentChecked && !this._settings.useSingleSelectCheckbox) {
        // If a parent node is selected all its children should be disabled and unchecked
        checkbox.checked = false;
        checkbox.disabled = true;
      } else {
        // If a parent node is not checked its children selected state depend on the childs value, and not be disabled
        var newChecked = this._initiallySelectedNodes.indexOf(path || '\\') >= 0;
        checkbox.checked = newChecked;
        newParentSelected = newChecked;
      }

      checkbox.classList.add('treeview__checkbox');

      if (this._settings.useSingleSelectCheckbox) {
        checkbox.classList.add('treeview__checkbox--radio');
      }

      return {
        label: label,
        newParentSelected: newParentSelected
      };
    }
  }, {
    key: "_transferValues",
    value: function _transferValues() {
      var _this3 = this;

      var elems = Array.from(document.querySelectorAll("#".concat(this._settings.treeviewId, " .treeview__checkbox")));
      var data = elems.reduce(function (prev, currentElem) {
        if (_this3._settings.lockRootNode && !currentElem.value || !currentElem.checked) return prev;
        return _objectSpread(_objectSpread({}, prev), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, currentElem.value, currentElem.closest('span').innerText));
      }, {});

      this._populateTagsArea(data);
    }
  }, {
    key: "_populateTagsArea",
    value: function _populateTagsArea(data) {
      var _this4 = this;

      if (this._destinationTags) {
        this._destinationTags.innerHTML = '';
        var destinationOptionsArray = Array.from(this._destinationSelect.options);
        var existingOptionValues = destinationOptionsArray.map(function (opt) {
          return opt.value;
        });
        var data_keys = Object.keys(data);
        data_keys.forEach(function (data_current) {
          if (data_current === '\\' && _this4._settings.lockRootNode) {// No Op
          } else if (data_current === '\\') {
            _this4._destinationTags.innerHTML = _this4._destinationTags.innerHTML + '<div class="tag">All Contact Groups<i class="button__icon" data-path="' + data_current + '">clear</i></div>';
          } else if (data_current.startsWith('\\')) {
            _this4._destinationTags.innerHTML = _this4._destinationTags.innerHTML + '<div class="tag">' + data_current.substring(1) + '<i class="button__icon" data-path="' + data_current + '">clear</i></div>';
          } else {
            _this4._destinationTags.innerHTML = _this4._destinationTags.innerHTML + '<div class="tag">' + data[data_current] + '<i class="button__icon" data-path="' + data_current + '">clear</i></div>';
          } // Ensure the option exists - add it if not


          if (existingOptionValues.indexOf(data_current) < 0) {
            var newOption = document.createElement('option');
            newOption.selected = true;
            newOption.value = data_current;
            newOption.innerText = data[data_current];

            _this4._destinationSelect.appendChild(newOption);
          }
        });
        destinationOptionsArray.forEach(function (option) {
          option.selected = data_keys.indexOf(option.value) >= 0;
        });

        this._tagsSeeAllHelper.recalculate();
      }
    }
  }, {
    key: "_appendChildrenForMode",
    value: function _appendChildrenForMode(parent, text, path, parentChecked) {
      if (this._settings.useCheckboxes || this._settings.useSingleSelectCheckbox) {
        // Temporary workaround the blank value for 'All Contact Groups'
        if (path === '') {
          path = "\\";
        }

        var checkboxResult = this._buildLabel(text, path, parentChecked);

        parent.appendChild(checkboxResult.label);
        return checkboxResult.newParentSelected;
      } else {
        // Create the link to refresh page with selected node.
        parent.appendChild(this._buildLink(text, path));
        return parentChecked;
      }
    }
  }, {
    key: "_forEachCheckboxExcludingCurrent",
    value: function _forEachCheckboxExcludingCurrent(current, children, updaterFn) {
      children.forEach(function (currentLoopChild) {
        if (currentLoopChild !== current) {
          updaterFn(currentLoopChild);
        }
      });
    }
  }, {
    key: "_handleCheckboxClick",
    value: function _handleCheckboxClick(e, checkbox) {
      var parentLi = checkbox.closest('li');

      if (this._settings.useSingleSelectCheckbox) {
        // In this mode only one item can be selected, and the root item cannot be deseleted.
        if (checkbox.checked) {
          var allGroupCheckboxes = document.querySelectorAll("#".concat(this._settings.treeviewId, ".treeview__list--root input[type=checkbox]"));

          this._forEachCheckboxExcludingCurrent(checkbox, allGroupCheckboxes, function (checkboxToUpdate) {
            checkboxToUpdate.checked = false;
          });
        } else {
          e.preventDefault();
          checkbox.checked = true;
        }
      } else if (parentLi.classList.contains('treeview__item--parent')) {
        var childCheckboxes = parentLi.querySelectorAll('input[type=checkbox]');

        if (checkbox.checked) {
          this._forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, function (checkboxToUpdate) {
            checkboxToUpdate.disabled = true;
            checkboxToUpdate.checked = false;
          });
        } else {
          this._forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, function (checkboxToUpdate) {
            checkboxToUpdate.disabled = false;
          });
        }
      }
    }
  }, {
    key: "_initialiseTreeView",
    value: function _initialiseTreeView() {
      var _this5 = this;

      // Grab the select list and all of its options
      var options = this._sourceSelect.querySelectorAll("option");

      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "Group");
      hiddenField.value = this._groupParam || '\\';
      var populateStructure = this._settings.isGroupsStructure ? function () {
        var structure = {
          "\\": {}
        }; // Build on the base structure by looping through each select item.

        options.forEach(function (option) {
          if (option.textContent !== "") {
            // Seperate the group name into all its path segments
            var segments = option.textContent.split("\\"); // Start at the root element.

            var nodeToCheck = structure["\\"]; // For each segment ensure that all levels of the structure are in place.

            segments.forEach(function (seg) {
              if (seg !== "") {
                if (!nodeToCheck[seg]) {
                  nodeToCheck[seg] = {};
                }

                nodeToCheck = nodeToCheck[seg];
              }
            });
          }
        });
        return structure;
      } : function () {
        return Array.from(options).reduce(function (structure, current) {
          return _objectSpread(_objectSpread({}, structure), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, current.value, current.textContent));
        }, {});
      };
      var structure = populateStructure(); // The base element that will be populated

      var treeContainer = document.createElement("ul");
      treeContainer.id = this._settings.treeviewId;
      treeContainer.classList.add("treeview__list");
      treeContainer.classList.add("treeview__list--root");

      if (!this._settings.isGroupsStructure) {
        treeContainer.classList.add('treeview__list--bulletless');
      } // Handle all the clicks at the parent level


      treeContainer.addEventListener("click", function (e) {
        var target = e.target; // Handle checkbox items being selected.

        if (target.matches('input[type=checkbox]')) {
          _this5._handleCheckboxClick(e, target);
        }

        _this5._transferValues();

        if (target.matches(".treeview__item-toggle")) {
          var closestLi = target.closest('li'); // We only care about clicks on elements that are parents

          if (closestLi.matches(".treeview__item--parent")) {
            e.preventDefault(); // If an open parent item is clicked, close it, but also all its open descendants.

            if (closestLi.classList.contains("treeview__item--open")) {
              closestLi.classList.remove("treeview__item--open");
              var activeChildren = closestLi.querySelectorAll(".treeview__item--open");
              activeChildren.forEach(function (activeChild) {
                activeChild.classList.remove("treeview__item--open");
              });
            } // Open any closed parents that are clicked.
            else {
                closestLi.classList.add("treeview__item--open");
              }
          }
        }
      });

      if (this._settings.isGroupsStructure) {
        this._displayChildKeys("All Contact Groups", "", structure["\\"], treeContainer, 1, false);
      } else {
        this._displayFlatStructure(treeContainer, structure);
      } // Replace the select list with the new tree


      this._sourceSelect.parentNode.replaceChild(treeContainer, this._sourceSelect);

      treeContainer.parentNode.appendChild(hiddenField);

      this._transferValues();
    }
  }, {
    key: "_displayFlatStructure",
    value: function _displayFlatStructure(treeContainer, obj) {
      var _this6 = this;

      Object.entries(obj).forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var childListItem = document.createElement("li");
        childListItem.classList.add("treeview__item");

        _this6._appendChildrenForMode(childListItem, value, key, false);

        treeContainer.appendChild(childListItem);
      });
    }
  }, {
    key: "_displayChildKeys",
    value: function _displayChildKeys(currText, currPath, obj, elementToAddTo, level, parentsChecked) {
      var _this7 = this;

      var childKeys = Object.keys(obj);
      var parentCheckedState = parentsChecked;
      var childListItem = document.createElement("li");
      childListItem.classList.add("treeview__item");

      if (!this._settings.useCheckboxes && !this._settings.useSingleSelectCheckbox && this._isSelectedGroup(currPath)) {
        // Only add the current state when in the 'link mode'
        childListItem.classList.add("treeview__item--current");
      }

      if (!childKeys.length) {
        // This is at the bottom of a branch i.e. no children to process
        this._appendChildrenForMode(childListItem, currText, currPath, parentCheckedState);

        elementToAddTo.appendChild(childListItem);
      } else {
        // This node has children to process
        childListItem.classList.add("treeview__item--parent");

        if (level === 1 || this._shouldParentBeOpen(currPath)) {
          // Open first level children by default
          childListItem.classList.add("treeview__item--open");
        }

        parentCheckedState = this._appendChildrenForMode(childListItem, currText, currPath, parentCheckedState); // Create the container ready to be populated with the child nodes

        var childList = document.createElement("ul");
        childList.classList.add("treeview__list");
        childListItem.appendChild(childList);
        elementToAddTo.appendChild(childListItem); // Call recursively with updated params for each child node

        childKeys.forEach(function (childKey) {
          if (childKey !== 'All contacts') {
            _this7._displayChildKeys(childKey, currPath + "\\" + childKey, obj[childKey], childList, level + 1, parentCheckedState);
          }
        });
      }
    }
  }]);

  return TreeView;
}();
/*  Allow the old stuff to keep working in the same manner post refactor i.e. controlled by attributes */

var sourceSelect = document.getElementById("Group");

if (sourceSelect) {
  new TreeView({
    useCheckboxes: sourceSelect.hasAttribute('data-with-checkbox'),
    useSingleSelectCheckbox: sourceSelect.hasAttribute('data-with-single-select-checkbox'),
    lockRootNode: sourceSelect.hasAttribute('data-lock-root')
  });
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
  var menu = document.getElementById(selector.replace(/^#/, ''));

  if (menu) {
    var menuButton = document.querySelector(selector + 'Button');
    var menuChild = document.querySelector(menuButton.dataset.target);
    menuButton.addEventListener("click", function (el) {
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
  var menu = document.getElementById(selector.replace(/^#/, ''));

  if (menu) {
    var menuButton = document.querySelector(selector + 'Button');
    var menuChild = document.querySelector(menuButton.dataset.target);
    menuButton.addEventListener("click", function (el) {
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

/***/ "./src/js/pages/AddGroup.js":
/*!**********************************!*\
  !*** ./src/js/pages/AddGroup.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupsTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GroupsTree */ "./src/js/GroupsTree.js");

var main = document.querySelector('main.courier-add-group');

if (main) {
  new _GroupsTree__WEBPACK_IMPORTED_MODULE_0__["TreeView"]({
    useCheckboxes: true,
    isGroupsStructure: false,
    sourceSelector: "#Attributes",
    destinationTagsSelector: "#AttributesArea",
    destinationSelectSelector: "#AttributesSelector",
    tagSelector: "#AttributesArea > .tag",
    seeMoreGroupsSelector: "#seeMoreAttributes",
    countFieldId: 'attributesCount',
    treeviewId: 'treeviewAttributes'
  });
}

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

var sidebar = document.getElementById("sidebar");

var toggleActivePanel = function toggleActivePanel(panel) {
  if (sidebar.hasAttribute('data-active') && sidebar.getAttribute('data-active') === panel) {
    // Close the side bar if already open
    sidebar.removeAttribute('data-active');
  } else {
    // Otherwise show the new panel
    sidebar.setAttribute('data-active', panel);
  }
};

var addGroupButton = document.querySelector("#add_group");

if (addGroupButton) {
  addGroupButton.addEventListener("click", function (el) {
    el.preventDefault();
    toggleActivePanel('groups');
  });
}

var addAttributesButton = document.querySelector("#add_attribute");

if (addAttributesButton) {
  addAttributesButton.addEventListener("click", function (el) {
    el.preventDefault();
    toggleActivePanel('attributes');
  });
}

var closeSidebar = document.querySelector('#close_sidebar');

if (closeSidebar) {
  closeSidebar.addEventListener("click", function (el) {
    el.preventDefault();
    closeSideBar();
  });
}

function closeSideBar() {
  sidebar.removeAttribute('data-active');
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
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/hint-snackbar.js ./src/js/SelectListTags.js ./src/js/linkify-tables.js ./src/js/search.js ./src/js/pages/AddGroup.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ./src/js/pages/CourierProfile.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
__webpack_require__(/*! ./src/js/pages/AddGroup.js */"./src/js/pages/AddGroup.js");
__webpack_require__(/*! ./src/js/pages/SelectStaffForMessage.js */"./src/js/pages/SelectStaffForMessage.js");
__webpack_require__(/*! ./src/js/pages/ComposeStaffMessage.js */"./src/js/pages/ComposeStaffMessage.js");
module.exports = __webpack_require__(/*! ./src/js/pages/CourierProfile.js */"./src/js/pages/CourierProfile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saW5raWZ5LXRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQWRkR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL0NvbXBvc2VTdGFmZk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL0NvdXJpZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9TZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmxlcy5qcyJdLCJuYW1lcyI6WyJCb3R0b21EcmF3ZXIiLCJfb3BlbkNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJEcmFmdE1lc3NhZ2VEcmF3ZXIiLCJudW1iZXJPZlJlY2lwaWVudHMiLCJ0b3RhbFNlbGVjdG9yIiwiY29va2llSGVscGVyIiwiU2ltcGxlQ29va2llSGVscGVyIiwiX3RvdGFsc0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXQiLCJFcnJvciIsIl9ib3R0b21EcmF3ZXIiLCJ1cGRhdGUiLCJpbm5lclRleHQiLCJzaG93IiwiaGlkZSIsInRyZWV2aWV3RGVmYXVsdHMiLCJzb3VyY2VTZWxlY3RvciIsInVzZUNoZWNrYm94ZXMiLCJ1c2VTaW5nbGVTZWxlY3RDaGVja2JveCIsImxvY2tSb290Tm9kZSIsImRlc3RpbmF0aW9uVGFnc1NlbGVjdG9yIiwiZGVzdGluYXRpb25TZWxlY3RTZWxlY3RvciIsInRhZ1NlbGVjdG9yIiwiZGVmYXVsdE9wdGlvblZhbHVlIiwic2VlQWxsQ291bnRMaW1pdCIsInNlZU1vcmVHcm91cHNTZWxlY3RvciIsImNvdW50RmllbGRJZCIsInRyZWV2aWV3SWQiLCJpc0dyb3Vwc1N0cnVjdHVyZSIsIlRyZWVWaWV3Iiwib3B0aW9ucyIsIl9zZXR0aW5ncyIsIl9pbml0aWFsbHlTZWxlY3RlZE5vZGVzIiwiX3NvdXJjZVNlbGVjdCIsIl9kZXN0aW5hdGlvblRhZ3MiLCJfZGVzdGluYXRpb25TZWxlY3QiLCJfdGFnc1NlZUFsbEhlbHBlciIsIl9zZWFyY2hQYXJ0cyIsIl90cmVlQ29udGFpbmVyIiwiX3BhZ2VQYXRoIiwiX2dyb3VwUGFyYW0iLCJfc2VhcmNoUGFyYW0iLCJfaW5pdGlhbGlzZURlc3RpbmF0aW9uU2VsZWN0IiwiX2ludGlhaWxpc2VEZXN0aW5hdGlvblRhZ3MiLCJfaW5pdGlhbGlzZVNlYXJjaFBhcnRzIiwiX2luaXRpYWxpc2VUcmVlVmlldyIsInBhcmVudEVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwib3B0aW9uIiwidmFsdWUiLCJTZWVBbGxIZWxwZXIiLCJpdGVtTGltaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJoYXNBdHRyaWJ1dGUiLCJwYXRoVG9VbmNoZWNrIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImNiU2VsZWN0b3IiLCJjaGVjYm94VG9VbmNoZWNrIiwiY2xpY2siLCJyZWNhbGN1bGF0ZSIsInZhcnMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtIiwia2V5Iiwib3JpZ2luIiwicGF0aG5hbWUiLCJncm91cCIsIlNlYXJjaCIsImdycCIsInBhdGgiLCJwYXRoVG9DaGVjayIsInN0YXJ0c1dpdGgiLCJwYXJhbXNUb0NoZWNrIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidGV4dCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiX2dldFBhZ2VQYXRoRm9yR3JvdXAiLCJwYXJlbnRDaGVja2VkIiwibmV3UGFyZW50U2VsZWN0ZWQiLCJsYWJlbCIsInRvZ2dsZVNwYW4iLCJvdXRlclNwYW4iLCJjaGVja2JveCIsInR5cGUiLCJuYW1lIiwiaWQiLCJhcHBlbmRDaGlsZCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm5ld0NoZWNrZWQiLCJpbmRleE9mIiwiZWxlbXMiLCJkYXRhIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnRFbGVtIiwiY2xvc2VzdCIsIl9wb3B1bGF0ZVRhZ3NBcmVhIiwiZGVzdGluYXRpb25PcHRpb25zQXJyYXkiLCJleGlzdGluZ09wdGlvblZhbHVlcyIsIm9wdCIsImRhdGFfa2V5cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsIl9idWlsZExhYmVsIiwiX2J1aWxkTGluayIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInVwZGF0ZXJGbiIsImN1cnJlbnRMb29wQ2hpbGQiLCJwYXJlbnRMaSIsImFsbEdyb3VwQ2hlY2tib3hlcyIsIl9mb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50IiwiY2hlY2tib3hUb1VwZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRDaGVja2JveGVzIiwiaGlkZGVuRmllbGQiLCJzZXRBdHRyaWJ1dGUiLCJwb3B1bGF0ZVN0cnVjdHVyZSIsInN0cnVjdHVyZSIsInNlZ21lbnRzIiwic3BsaXQiLCJub2RlVG9DaGVjayIsInNlZyIsInRyZWVDb250YWluZXIiLCJfaGFuZGxlQ2hlY2tib3hDbGljayIsIl90cmFuc2ZlclZhbHVlcyIsImNsb3Nlc3RMaSIsImFjdGl2ZUNoaWxkcmVuIiwiYWN0aXZlQ2hpbGQiLCJfZGlzcGxheUNoaWxkS2V5cyIsIl9kaXNwbGF5RmxhdFN0cnVjdHVyZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJvYmoiLCJlbnRyaWVzIiwiY2hpbGRMaXN0SXRlbSIsIl9hcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJjdXJyVGV4dCIsImN1cnJQYXRoIiwiZWxlbWVudFRvQWRkVG8iLCJsZXZlbCIsInBhcmVudHNDaGVja2VkIiwiY2hpbGRLZXlzIiwicGFyZW50Q2hlY2tlZFN0YXRlIiwiX2lzU2VsZWN0ZWRHcm91cCIsImxlbmd0aCIsIl9zaG91bGRQYXJlbnRCZU9wZW4iLCJjaGlsZExpc3QiLCJjaGlsZEtleSIsInNvdXJjZVNlbGVjdCIsImdldEVsZW1lbnRCeUlkIiwiSWRTZXNzaW9uU3RvcmFnZUhlbHBlciIsIl9uYW1lIiwiaW5pdGlhbCIsIl9pbml0aWFsaXNlIiwiX2l0ZW1zIiwiTWFwIiwic2V0Iiwic2VsZWN0ZWRJdGVtc0pzb24iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJfcGVyc2lzdCIsIkpTT04iLCJwYXJzZSIsIml0ZW1zIiwiZ2V0SXRlbXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaSIsIl91cGRhdGUiLCJnZXRDb3VudCIsImlkcyIsImlkc1RvS2VlcCIsImdldElkcyIsImluY2x1ZGVzIiwic2l6ZSIsImRlbGV0ZSIsImhhcyIsInNldEl0ZW1zIiwiQ291cmllckxhenlMb2FkZXIiLCJsb2FkZXJFbGVtZW50IiwibG9hZGVyRm4iLCJjb25maWdPYmoiLCJjb25maWdEZWZhdWx0cyIsImxvYWRlckNsYXNzIiwibG9hZGVyTG9hZGluZ0NsYXNzIiwiZGVib3VuY2VNcyIsInBlZWtEaXN0YW5jZSIsImRlYnVnIiwiX2xvYWRlciIsIl9sb2FkZXJGdW5jIiwiX21haW4iLCJfY29uZmlnIiwiX2hhc0xpc3RlbmVyc0FkZGVkIiwiX2xhenlMb2FkQ2hlY2siLCJkZWJvdW5jZSIsIl9kb0xvYWRNb3JlQ2hlY2siLCJfY29uZGl0aW9uYWxEZWJ1Z0xvZyIsIl9zdG9wTGlzdGVuaW5nIiwiX2RvbmVTZWFyY2hpbmciLCJfc3RhcnRMaXN0ZW5pbmciLCJiaW5kIiwidmlzaWJsZSIsIm1vcmVUb0xvYWQiLCJfc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvRGVidWciLCJsb2dnZXJGdW5jIiwiY29uc29sZSIsImxvZyIsImhpZ2hlc3RWaXNpYmxlWVBvcyIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibG9hZE1vcmVUcmlnZ2VyUG9zIiwiTWF0aCIsIm1pbiIsIm9mZnNldFRvcCIsInBlZWtQb3NpdGlvblZpc2libGUiLCJzaG91bGRMb2FkTW9yZSIsInRhYmxlIiwiU2VlQWxsQXR0cmlidXRlSGVscGVyIiwic2hvd01vcmVCdXR0b25zIiwic2hvd0FsbEJ1dHRvbiIsImNvbnRhaW5lcklkIiwiaXRlbVNlbGVjdG9yIiwic2hvd0FsbEl0ZW1MaW1pdCIsInNob3dBbGxJdGVtQ291bnRJZCIsImJ1dHRvbklkIiwiY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwic2VsZWN0b3JUb1VzZSIsInRhZ05hbWUiLCJlcnJvciIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwiaXNOYU4iLCJpdGVtc1NlbGVjdG9yIiwic2VlQWxsU2VsZWN0b3IiLCJwYXNzZWRPcHRpb25zIiwiX2l0ZW1zU2VsZWN0b3IiLCJfc2VlQWxsIiwiX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsIiwiZGVmYXVsdHMiLCJzaG93TGVzc1RleHQiLCJfb3B0aW9ucyIsIl9pdGVtTGltaXQiLCJfc2hvd0xlc3NUZXh0IiwiX3Nob3dNb3JlVGV4dCIsIl9jb3VudEZpZWxkIiwiX3Nob3dpbmdBbGwiLCJfaGlkZUV4Y2Vzc0l0ZW1zIiwiX3Nob3dBbGxJdGVtcyIsIl9hbGxJdGVtcyIsIml0ZW0iLCJfb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcyIsImluZGV4IiwidG9DaGVjayIsIlNlbGVjdExpc3RUYWdzIiwic2VsZWN0SWQiLCJyZXZlcnRHcm91cHNJZCIsIm9uVXBkYXRlRnVuYyIsInRhZ09wdGlvbnMiLCJyZXZlcnRCdG4iLCJvIiwicG9wdWxhdGVUYWdzIiwiYWxsT3B0aW9ucyIsInNvbWUiLCJ0YWdzIiwidGFyZ2V0VmFsIiwiZGF0YXNldCIsInZhbCIsImFmdGVyIiwic2VsZWN0ZWRPcHRpb25zIiwiZmlsdGVyIiwidCIsIm1ha2VUYWciLCJ0YWciLCJjcmVhdGVUZXh0Tm9kZSIsInJlcG9sdWxhdGVUYWdzIiwic3BhbiIsInBsdXJhbGlzZWRHcm91cHMiLCJjb29raWVTdHJpbmciLCJjb29raWUiLCJjb29raWVzIiwibWF0Y2hpbmdDb29raWUiLCJmaW5kIiwiYyIsIl92YWx1ZSIsIm5ld0Nvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3BvbnNlcyIsInJlc3BvbnNlc0xpc3QiLCJyZXNwb25zZSIsImlkeCIsInRyaW0iLCJzaG93Rmlyc3RFbXB5SXRlbSIsImN1cnJlbnRSZXNwb25zZSIsImNvcHlJdGVtc0ZvcndhcmQiLCJwcmV2SW5wdXQiLCJpbnB1dCIsInJlbW92ZUxhc3RFbXB0eUl0ZW0iLCJyZW1vdmVJZHgiLCJhZGRSZXNwb25zZUJ1dHRvbiIsImVsIiwiYmx1ciIsInNlbGVjdG9yIiwiYWRkUGhvbmVJbnB1dCIsImFkZFBob25lQnV0dG9uIiwiYWRkRW1haWxJbnB1dCIsImFkZEVtYWlsQnV0dG9uIiwiYWRkR3JvdXBCdXR0b24iLCJzYXZlR3JvdXBCdXR0b24iLCJncm91cFRleHRhcmVhIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic25hY2tiYXJTdG9yYWdlSXRlbSIsImxvY2FsU3RvcmFnZSIsInNuYWNrYmFyIiwic25hY2tiYXJTdG9yYWdlSXRlbUFycmF5IiwibG9jYXRpb25zIiwicHVzaCIsInJvd3NUb0xpbmtpZnkiLCJoYW5kbGVSb3dDbGljayIsImNvbFRvUGFyc2UiLCJyb3ciLCJjb2wiLCJtZW51IiwibWVudUJ1dHRvbiIsIm1lbnVDaGlsZCIsIm1haW4iLCJhZGRCdG4iLCJzdWJqZWN0SW5wdXQiLCJtZXNzYWdlSW5wdXQiLCJyZXNlbmRJbnB1dCIsInJlc3BvbnNlT3B0aW9ucyIsImNvb2tpZU1lc3NhZ2VIZWxwZXIiLCJjb29raWVBdXRvUmVzZW5kSGVscGVyIiwiY29va2llUmVzcG9uc2VIZWxwZXIiLCJpZHNTZXNzaW9uSGVscGVyIiwiZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmciLCJub25FbXB0eU9wdGlvbnMiLCJhY2MiLCJjdXJyIiwiam9pbiIsInRhZ3NTZWVBbGxIZWxwZXIiLCJmaWx0ZXJCeUlkcyIsIngiLCJzZWxlY3RPcHRpb25zIiwic2x0IiwiZGlzY2FyZEJ0biIsImNsZWFySXRlbXMiLCJuZXdQaG9uZVJvdyIsIm5ld1Bob25lIiwiY2xhc3NOYW1lIiwiX3JlbnVtYmVySW5wdXRzIiwiaWRlbnRpZmllciIsImlucHV0cyIsImlucCIsInNwbiIsIm5ld0VtYWlsUm93IiwiYWRkUGhvbmVCdG4iLCJhZGRFbWFpbEJ0biIsInJlbW92ZUVtYWlsQnV0dG9ucyIsInJlbW92ZVBob25lQnV0dG9ucyIsImVtYWlsc1NlY3Rpb24iLCJzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUiLCJwaG9uZXNTZWN0aW9uIiwic2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlIiwiaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUiLCJzZWN0aW9uIiwiY29udGFjdFByb2ZpbGVGb3JtIiwiaW5wdXRzRm9yU2VsZWN0b3IiLCJkaXIiLCJmb3JtR3JvdXAiLCJpZFNoIiwiZG1kIiwibG9hZGVyIiwiYWxsQ2hlY2tib3hlc0luVGFibGUiLCJpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkIiwiY2IiLCJoYXNJZCIsImFsbENoZWNrYm94ZXNTZWxlY3RlZCIsImV2ZXJ5IiwiYWxsQ29udGFjdHMiLCJoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UiLCJjb21iaW5lRm4iLCJhbGxDb250YWN0c0Rpc3BsYXllZCIsImV4aXN0aW5nQ29udGFjdHMiLCJuZXdJdGVtcyIsImRlc2VsZWN0QWxsIiwidG9EZXNlbGVjdCIsImV4aXN0aW5nSXRlbXMiLCJhbGxJdGVtc0Zvckdyb3VwIiwic2VsZWN0QWxsIiwidG9TZWxlY3QiLCJncm91cEl0ZW1zVG9BZGQiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJ0b2dnbGVTZWxlY3RBbGxDaGVja2JveCIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjcml0ZXJpYUtleSIsInNlYXJjaENyaXRlcmlhU3RyaW5nIiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJzdGFmZlRhYmxlIiwibmV3VG90YWwiLCJjcmVhdGVDaGVja2JveEZpZWxkIiwiY2VsbCIsImNyZWF0ZUNlbGxXaXRoVGV4dCIsImFkZFJvdyIsInVzZXIiLCJuZXdSb3ciLCJjb2xsYXIiLCJlbWFpbCIsInBob25lQ2VsbCIsInBob25lVGV4dE5vZGUiLCJwaG9uZU51bWJlckNvdW50IiwicGhvbmVOdW1iZXIiLCJiYWRnZSIsImFkZFJlc3VsdFJvd3MiLCJyb3dzIiwibG9hZGVyUGFnZVNpemUiLCJMYXp5TG9hZGVyIiwiZG9uZSIsImVuZHBvaW50IiwiZmV0Y2giLCJqc29uIiwicmVzdWx0cyIsImhhc1Jlc3VsdHMiLCJtb3JlUmVzdWx0c0xpa2VseSIsInJlZGlyZWN0V2l0aG91dFNlYXJjaCIsInBhcmFtTmFtZSIsIm5ld0NyaXRlcmlhIiwidG9TdHJpbmciLCJuZXdQYXRoIiwiYXNzaWduIiwiY2xlYXJTZWFyY2giLCJ0b0NsZWFyIiwidGMiLCJwYXJhbVRvUmVtb3ZlIiwiY2xlYXJCdXR0b25zIiwib25jbGljayIsImV2ZW50IiwiZHJvcGRvd25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9wZW5Ecm9wZG93biIsInNpZGViYXIiLCJ0b2dnbGVBY3RpdmVQYW5lbCIsInBhbmVsIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlc0J1dHRvbiIsImNsb3NlU2lkZWJhciIsImNsb3NlU2lkZUJhciIsInJlbW92ZVF1ZXJ5UGFyYW0iLCJwYXJhbSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsImNvbnRhY3RQYXJhbSIsIk9yZ2FuaXNhdGlvblBhcmFtIiwiTWVzc2FnZVNlbnRQYXJhbSIsIkZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSIsInNuYWNrYmFyTWVzc2FnZSIsInJlbW92ZUl0ZW0iLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNKQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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bEI7QUFDSCxHQUhELE1BR08sSUFBSUgsaUJBQWlCLEtBQUssTUFBMUIsRUFBa0M7QUFDckNOLG9CQUFnQixDQUFDLG1CQUFELENBQWhCO0FBQ0FTLG1CQUFlLEdBQUcsbUNBQWxCO0FBQ0gsR0FITSxNQUdBLElBQUlGLGdCQUFnQixLQUFLLE1BQXpCLEVBQWlDO0FBQ3BDOzs7QUFHQWpVLGtCQUFjLENBQUNvVSxVQUFmLENBQTBCLHFCQUExQjtBQUNBVixvQkFBZ0IsQ0FBQyxhQUFELENBQWhCO0FBQ0FTLG1CQUFlLEdBQUcsY0FBbEI7QUFDSCxHQVBNLE1BT0EsSUFBSUQsd0JBQXdCLElBQUlBLHdCQUF3QixDQUFDRyxXQUF6QixPQUEyQyxNQUEzRSxFQUFtRjtBQUN0Rlgsb0JBQWdCLENBQUMscUJBQUQsQ0FBaEI7QUFDQVMsbUJBQWUsR0FBRyxrQ0FBbEI7QUFDSDs7QUFFRCxNQUFJQSxlQUFKLEVBQXFCO0FBQ2pCckosWUFBUSxDQUFDcFcsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsa0JBQXZCO0FBQ0FtVyxZQUFRLENBQUMxUSxTQUFULEdBQXFCK1osZUFBckI7QUFFQXhKLGNBQVUsQ0FBQyxZQUFVO0FBQ2pCRyxjQUFRLENBQUNwVyxTQUFULENBQW1CRSxNQUFuQixDQUEwQixrQkFBMUI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUFFSixDQS9DRCxFQStDRyxXQS9DSCxFOzs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZSIsImZpbGUiOiJkaXN0L2pzL3NjcmlwdHMuZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKlxyXG4gQ2xhc3MgdGhhdCBmYWNpbGl0YXRlIHRoZSBoaWRpbmcgYW5kIHNob3dpbmcgb2YgdGhlIGJvdHRvbSBiYXIuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9vcGVuQ2xhc3MgPSBcImJvdHRvbS1kcmF3ZXItb3BlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuL0JvdHRvbURyYXdlcic7XHJcbmltcG9ydCBTaW1wbGVDb29raWVIZWxwZXIgZnJvbSAnLi9TaW1wbGVDb29raWVIZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZnRNZXNzYWdlRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlck9mUmVjaXBpZW50cywgdG90YWxTZWxlY3Rvcj1cIi5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdG90YWxcIikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVGl0bGUnKTtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b3RhbFNlbGVjdG9yKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RpdGxlJykudGV4dENvbnRlbnQgPSBjb29raWVIZWxwZXIuZ2V0KCkgfHwgJ1VudGl0bGVkJztcclxuICAgICAgICBpZiAoIXRoaXMuX3RvdGFsc0VsZW1lbnQpIHsgdGhyb3cgRXJyb3IoYE5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHBhc3NlZCBpbiBzZWxlY3RvciAke3RvdGFsU2VsZWN0b3J9YCk7IH1cclxuICAgICAgICB0aGlzLl9ib3R0b21EcmF3ZXIgPSBuZXcgQm90dG9tRHJhd2VyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgdXBkYXRlKG51bWJlck9mUmVjaXBpZW50cykge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQuaW5uZXJUZXh0ID0gbnVtYmVyT2ZSZWNpcGllbnRzO1xyXG4gICAgICAgIG51bWJlck9mUmVjaXBpZW50cyA/IHRoaXMuX2JvdHRvbURyYXdlci5zaG93KCkgOiB0aGlzLl9ib3R0b21EcmF3ZXIuaGlkZSgpO1xyXG4gICAgfVxyXG59IiwiIGltcG9ydCB7U2VlQWxsSGVscGVyfSBmcm9tICcuL1NlZUFsbEhlbHBlcic7XHJcbiBcclxuLypcclxuICBUT0RPOiAgVGhpcyBjb3VsZCBkbyB3aXRoIG1vcmUgcmVmYWN0b3JpbmcuICBUaGlzIGlzIHRvbyB0YW5nbGVkIHVwIHdpdGggdGhlIHRhZ3MgYXJlYS4gIFxyXG4gIFRoZXNlIHNob3VsZCBiZSBzZXBhcmF0ZSBjb21wb25lbnRzIHRoYXQgZG9udCBrbm93IGFib3V0IGVhY2ggb3RoZXIgKGV4Y2VwdCB0aGVpciBwdWJsaWMgaW50ZXJmYWNlcykuICBcclxuICBUaGVzZSBzaG91bGQgdGhlbiBiZSB0aWVkIHRvZ2V0aGVyIG9uIGNvbnRhaW5pbmcgcGFnZXNcclxuKi9cclxuXHJcbmNvbnN0IHRyZWV2aWV3RGVmYXVsdHMgPSB7XHJcbiAgICBzb3VyY2VTZWxlY3RvcjogXCIjR3JvdXBcIixcclxuICAgIHVzZUNoZWNrYm94ZXM6IGZhbHNlLFxyXG4gICAgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3g6IGZhbHNlLFxyXG4gICAgbG9ja1Jvb3ROb2RlOiBmYWxzZSxcclxuICAgIGRlc3RpbmF0aW9uVGFnc1NlbGVjdG9yOiBcIiNHcm91cFRleHRhcmVhXCIsXHJcbiAgICBkZXN0aW5hdGlvblNlbGVjdFNlbGVjdG9yOiBcIiNHcm91cFNlbGVjdG9yXCIsXHJcbiAgICB0YWdTZWxlY3RvcjogXCIjR3JvdXBUZXh0YXJlYSA+IC50YWdcIixcclxuICAgIGRlZmF1bHRPcHRpb25WYWx1ZTogXCJcXFxcXCIsXHJcbiAgICBzZWVBbGxDb3VudExpbWl0OiAyMSxcclxuICAgIHNlZU1vcmVHcm91cHNTZWxlY3RvcjogXCIjc2VlTW9yZUdyb3Vwc1wiLFxyXG4gICAgY291bnRGaWVsZElkOiAnZ3JvdXBzQ291bnQnLFxyXG4gICAgdHJlZXZpZXdJZDogJ3RyZWV2aWV3LWdyb3VwcycsXHJcbiAgICBpc0dyb3Vwc1N0cnVjdHVyZTogdHJ1ZSxcclxufTtcclxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3IHsgXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSB7Li4udHJlZXZpZXdEZWZhdWx0cywgLi4ub3B0aW9uc307XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGx5U2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3NvdXJjZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc2V0dGluZ3Muc291cmNlU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc2V0dGluZ3MuZGVzdGluYXRpb25UYWdzU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZXR0aW5ncy5kZXN0aW5hdGlvblNlbGVjdFNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLl90YWdzU2VlQWxsSGVscGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zZWFyY2hQYXJ0cyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdHJlZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcGFnZVBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2dyb3VwUGFyYW0gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaFBhcmFtID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pbml0aWFsaXNlRGVzdGluYXRpb25TZWxlY3QoKTtcclxuICAgICAgICB0aGlzLl9pbnRpYWlsaXNlRGVzdGluYXRpb25UYWdzKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZVNlYXJjaFBhcnRzKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZVRyZWVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxpc2VEZXN0aW5hdGlvblNlbGVjdCgpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5fZGVzdGluYXRpb25TZWxlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVzdGluYXRpb25TZWxlY3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kZXN0aW5hdGlvblRhZ3MucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsbHlTZWxlY3RlZE5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLl9kZXN0aW5hdGlvblNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb246Y2hlY2tlZCcpKS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSB8fCB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0T3B0aW9uVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaW50aWFpbGlzZURlc3RpbmF0aW9uVGFncygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVzdGluYXRpb25UYWdzKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5fdGFnc1NlZUFsbEhlbHBlciAgPSBuZXcgU2VlQWxsSGVscGVyKHRoaXMuX3NldHRpbmdzLnRhZ1NlbGVjdG9yLCB0aGlzLl9zZXR0aW5ncy5zZWVNb3JlR3JvdXBzU2VsZWN0b3IsIHsgaXRlbUxpbWl0OiB0aGlzLl9zZXR0aW5ncy5zZWVBbGxDb3VudExpbWl0LCBjb3VudEZpZWxkSWQ6IHRoaXMuX3NldHRpbmdzLmNvdW50RmllbGRJZCB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9kZXN0aW5hdGlvblRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aFRvVW5jaGVjayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIikucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNiU2VsZWN0b3IgPSBgIyR7dGhpcy5fc2V0dGluZ3MudHJlZXZpZXdJZH0gaW5wdXRbdHlwZT1jaGVja2JveF0udHJlZXZpZXdfX2NoZWNrYm94W3ZhbHVlPVwiJHtwYXRoVG9VbmNoZWNrfVwiXWA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2JveFRvVW5jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2JTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNib3hUb1VuY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2JveFRvVW5jaGVjay5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0aWFsaXNlU2VhcmNoUGFydHMoKSB7XHJcbiAgICAgICAgY29uc3QgdmFycyA9IHt9O1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgKG0sa2V5LHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaFBhcnRzID0gey4uLnZhcnN9O1xyXG4gICAgICAgIHRoaXMuX3BhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2dyb3VwPVwiO1xyXG4gICAgICAgIHRoaXMuX2dyb3VwUGFyYW0gPSB0aGlzLl9zZWFyY2hQYXJ0cy5ncm91cDtcclxuICAgICAgICB0aGlzLl9zZWFyY2hQYXJhbSA9IHRoaXMuX3NlYXJjaFBhcnRzLlNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UGFnZVBhdGhGb3JHcm91cChncm91cCkge1xyXG4gICAgICAgIGNvbnN0IGdycCA9IGdyb3VwID09PSBcIlwiID8gXCJcXFxcXCIgOiBncm91cDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZVBhdGggKyBncnA7XHJcbiAgICAgIH1cclxuXHJcbiAgICBfc2hvdWxkUGFyZW50QmVPcGVuKHBhdGgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2dyb3VwUGFyYW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXRoVG9DaGVjayA9IChwYXRoICsgXCJcXFxcXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cFBhcmFtLnN0YXJ0c1dpdGgocGF0aFRvQ2hlY2spICYmIHRoaXMuX2dyb3VwUGFyYW0gIT0gcGF0aFRvQ2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzU2VsZWN0ZWRHcm91cChwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zVG9DaGVjayA9IGRlY29kZVVSSUNvbXBvbmVudCh0aGlzLl9ncm91cFBhcmFtIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICBjb25zdCBwYXRoVG9DaGVjayA9IChwYXRoIHx8IFwiXFxcXFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1RvQ2hlY2sgPT09IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIF9idWlsZExpbmsodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICAgICAgbGluay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd0cmVldmlld19faXRlbS10b2dnbGUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3RyZWV2aWV3X19pdGVtLWNvbnRlbnQnPiR7dGV4dH08L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsaW5rLmhyZWYgPSB0aGlzLl9nZXRQYWdlUGF0aEZvckdyb3VwKHBhdGgpO1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtLWxpbmtcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIF9idWlsZExhYmVsKHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgbGV0IG5ld1BhcmVudFNlbGVjdGVkID0gcGFyZW50Q2hlY2tlZDtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS1sYWJlbFwiKTtcclxuICAgICAgICBjb25zdCB0b2dnbGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRvZ2dsZVNwYW4uY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2l0ZW0tdG9nZ2xlJyk7XHJcbiAgICAgICAgY29uc3Qgb3V0ZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIG91dGVyU3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgb3V0ZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19pdGVtLWNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjaGVja2JveC5uYW1lID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveC52YWx1ZSA9IHBhdGg7XHJcbiAgICAgICAgY2hlY2tib3guaWQgPSB0ZXh0O1xyXG4gICAgICAgIG91dGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgb3V0ZXJTcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmlzR3JvdXBzU3RydWN0dXJlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNwYW4uY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2l0ZW0tdG9nZ2xlJyk7XHJcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRvZ2dsZVNwYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChvdXRlclNwYW4pO1xyXG5cclxuICAgICAgICBpZiAocGF0aCA9PT0gJ1xcXFwnICYmIHRoaXMuX3NldHRpbmdzLmxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgdGhlIHJvb3Qgbm9kZSBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIGNoZWNrZWQgQlVUIHRoZSBjaGlsZHJlbiBvZiB0aGlzIG5vZGUgc2hvdWxkIGFjdCBhcyB0aG91Z2ggaXQgaXNudCBjaGVja2VkIHNvIHdlIGRvbnQgdXBkYXRlIHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q2hlY2tlZCAmJiAhdGhpcy5fc2V0dGluZ3MudXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBzZWxlY3RlZCBhbGwgaXRzIGNoaWxkcmVuIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgdW5jaGVja2VkXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBub3QgY2hlY2tlZCBpdHMgY2hpbGRyZW4gc2VsZWN0ZWQgc3RhdGUgZGVwZW5kIG9uIHRoZSBjaGlsZHMgdmFsdWUsIGFuZCBub3QgYmUgZGlzYWJsZWRcclxuICAgICAgICAgICAgY29uc3QgbmV3Q2hlY2tlZCA9IHRoaXMuX2luaXRpYWxseVNlbGVjdGVkTm9kZXMuaW5kZXhPZihwYXRoIHx8ICdcXFxcJykgPj0gMDtcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgICAgIG5ld1BhcmVudFNlbGVjdGVkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19jaGVja2JveCcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MudXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2NoZWNrYm94LS1yYWRpbycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtsYWJlbCwgbmV3UGFyZW50U2VsZWN0ZWR9O1xyXG4gICAgfVxyXG5cclxuICAgIF90cmFuc2ZlclZhbHVlcygpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7dGhpcy5fc2V0dGluZ3MudHJlZXZpZXdJZH0gLnRyZWV2aWV3X19jaGVja2JveGApKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGVsZW1zLnJlZHVjZSgocHJldiwgY3VycmVudEVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLl9zZXR0aW5ncy5sb2NrUm9vdE5vZGUgJiYgIShjdXJyZW50RWxlbS52YWx1ZSkpIHx8ICFjdXJyZW50RWxlbS5jaGVja2VkKSByZXR1cm4gcHJldjsgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnByZXYsIFxyXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRFbGVtLnZhbHVlXTogY3VycmVudEVsZW0uY2xvc2VzdCgnc3BhbicpLmlubmVyVGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcG9wdWxhdGVUYWdzQXJlYShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBfcG9wdWxhdGVUYWdzQXJlYShkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3RpbmF0aW9uVGFncykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZXN0aW5hdGlvblRhZ3MuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbk9wdGlvbnNBcnJheSA9IEFycmF5LmZyb20odGhpcy5fZGVzdGluYXRpb25TZWxlY3Qub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ09wdGlvblZhbHVlcyA9IGRlc3RpbmF0aW9uT3B0aW9uc0FycmF5Lm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFfa2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXHJcblxyXG4gICAgICAgICAgICBkYXRhX2tleXMuZm9yRWFjaChkYXRhX2N1cnJlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnICYmIHRoaXMuX3NldHRpbmdzLmxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIE9wXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdGluYXRpb25UYWdzLmlubmVySFRNTCA9IHRoaXMuX2Rlc3RpbmF0aW9uVGFncy5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPkFsbCBDb250YWN0IEdyb3VwczxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhX2N1cnJlbnQuc3RhcnRzV2l0aCgnXFxcXCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdGluYXRpb25UYWdzLmlubmVySFRNTCA9IHRoaXMuX2Rlc3RpbmF0aW9uVGFncy5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPicgKyBkYXRhX2N1cnJlbnQuc3Vic3RyaW5nKDEpICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uVGFncy5pbm5lckhUTUwgPSB0aGlzLl9kZXN0aW5hdGlvblRhZ3MuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj4nICsgZGF0YVtkYXRhX2N1cnJlbnRdICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIG9wdGlvbiBleGlzdHMgLSBhZGQgaXQgaWYgbm90XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdPcHRpb25WYWx1ZXMuaW5kZXhPZihkYXRhX2N1cnJlbnQpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gZGF0YV9jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhW2RhdGFfY3VycmVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVzdGluYXRpb25TZWxlY3QuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uT3B0aW9uc0FycmF5LmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGRhdGFfa2V5cy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPj0gMDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9hcHBlbmRDaGlsZHJlbkZvck1vZGUocGFyZW50LCB0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnVzZUNoZWNrYm94ZXMgfHwgdGhpcy5fc2V0dGluZ3MudXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIHRoZSBibGFuayB2YWx1ZSBmb3IgJ0FsbCBDb250YWN0IEdyb3VwcydcclxuICAgICAgICAgICAgaWYgKHBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcXFxcXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94UmVzdWx0ID0gdGhpcy5fYnVpbGRMYWJlbCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKTtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmxhYmVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveFJlc3VsdC5uZXdQYXJlbnRTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaW5rIHRvIHJlZnJlc2ggcGFnZSB3aXRoIHNlbGVjdGVkIG5vZGUuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9idWlsZExpbmsodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2ZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY3VycmVudCwgY2hpbGRyZW4sIHVwZGF0ZXJGbikge1xyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY3VycmVudExvb3BDaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9vcENoaWxkICE9PSBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVyRm4oY3VycmVudExvb3BDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlQ2hlY2tib3hDbGljayhlLCBjaGVja2JveCkge1xyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRMaSA9IGNoZWNrYm94LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy51c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgb25seSBvbmUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQsIGFuZCB0aGUgcm9vdCBpdGVtIGNhbm5vdCBiZSBkZXNlbGV0ZWQuXHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxHcm91cENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt0aGlzLl9zZXR0aW5ncy50cmVldmlld0lkfS50cmVldmlld19fbGlzdC0tcm9vdCBpbnB1dFt0eXBlPWNoZWNrYm94XWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgYWxsR3JvdXBDaGVja2JveGVzLCBjaGVja2JveFRvVXBkYXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFyZW50TGkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmVldmlld19faXRlbS0tcGFyZW50Jykpe1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hpbGRDaGVja2JveGVzID0gcGFyZW50TGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgY2hlY2tib3hUb1VwZGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgY2hlY2tib3hUb1VwZGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxpc2VUcmVlVmlldygpIHtcclxuICAgICAgICAvLyBHcmFiIHRoZSBzZWxlY3QgbGlzdCBhbmQgYWxsIG9mIGl0cyBvcHRpb25zXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX3NvdXJjZVNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcclxuICAgICAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IHRoaXMuX2dyb3VwUGFyYW0gfHwgJ1xcXFwnO1xyXG5cclxuICAgICAgICBjb25zdCBwb3B1bGF0ZVN0cnVjdHVyZSA9IHRoaXMuX3NldHRpbmdzLmlzR3JvdXBzU3RydWN0dXJlID9cclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RydWN0dXJlID0geyBcIlxcXFxcIjoge30gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBvbiB0aGUgYmFzZSBzdHJ1Y3R1cmUgYnkgbG9vcGluZyB0aHJvdWdoIGVhY2ggc2VsZWN0IGl0ZW0uXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlcGVyYXRlIHRoZSBncm91cCBuYW1lIGludG8gYWxsIGl0cyBwYXRoIHNlZ21lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRzID0gb3B0aW9uLnRleHRDb250ZW50LnNwbGl0KFwiXFxcXFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgYXQgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVUb0NoZWNrID0gc3RydWN0dXJlW1wiXFxcXFwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIHNlZ21lbnQgZW5zdXJlIHRoYXQgYWxsIGxldmVscyBvZiB0aGUgc3RydWN0dXJlIGFyZSBpbiBwbGFjZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMuZm9yRWFjaChzZWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlZyAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvQ2hlY2tbc2VnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVja1tzZWddID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2tbc2VnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7ICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHJ1Y3R1cmU7XHJcbiAgICAgICAgICAgIH0gOlxyXG4gICAgICAgICAgICAoKSA9PiBBcnJheS5mcm9tKG9wdGlvbnMpLnJlZHVjZSgoc3RydWN0dXJlLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RydWN0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY3VycmVudC52YWx1ZV06IGN1cnJlbnQudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICBjb25zdCBzdHJ1Y3R1cmUgPSBwb3B1bGF0ZVN0cnVjdHVyZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRoZSBiYXNlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHBvcHVsYXRlZFxyXG4gICAgICAgIGNvbnN0IHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgdHJlZUNvbnRhaW5lci5pZCA9IHRoaXMuX3NldHRpbmdzLnRyZWV2aWV3SWQ7XHJcbiAgICAgICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2xpc3RcIik7XHJcbiAgICAgICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2xpc3QtLXJvb3RcIik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuaXNHcm91cHNTdHJ1Y3R1cmUpIHtcclxuICAgICAgICAgICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmVldmlld19fbGlzdC0tYnVsbGV0bGVzcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGFsbCB0aGUgY2xpY2tzIGF0IHRoZSBwYXJlbnQgbGV2ZWxcclxuICAgICAgICB0cmVlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgY2hlY2tib3ggaXRlbXMgYmVpbmcgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2hlY2tib3hDbGljayhlLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2ZlclZhbHVlcygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRyZWV2aWV3X19pdGVtLXRvZ2dsZVwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RMaSA9IHRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgY2FyZSBhYm91dCBjbGlja3Mgb24gZWxlbWVudHMgdGhhdCBhcmUgcGFyZW50c1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RMaS5tYXRjaGVzKFwiLnRyZWV2aWV3X19pdGVtLS1wYXJlbnRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbiBvcGVuIHBhcmVudCBpdGVtIGlzIGNsaWNrZWQsIGNsb3NlIGl0LCBidXQgYWxzbyBhbGwgaXRzIG9wZW4gZGVzY2VuZGFudHMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RMaS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmVldmlld19faXRlbS0tb3BlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0TGkuY2xhc3NMaXN0LnJlbW92ZShcInRyZWV2aWV3X19pdGVtLS1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVDaGlsZHJlbiA9IGNsb3Nlc3RMaS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIudHJlZXZpZXdfX2l0ZW0tLW9wZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGRyZW4uZm9yRWFjaChhY3RpdmVDaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIGFueSBjbG9zZWQgcGFyZW50cyB0aGF0IGFyZSBjbGlja2VkLlxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0TGkuY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtLS1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuaXNHcm91cHNTdHJ1Y3R1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheUNoaWxkS2V5cyhcIkFsbCBDb250YWN0IEdyb3Vwc1wiLCBcIlwiLCBzdHJ1Y3R1cmVbXCJcXFxcXCJdLCB0cmVlQ29udGFpbmVyLCAxLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheUZsYXRTdHJ1Y3R1cmUodHJlZUNvbnRhaW5lciwgc3RydWN0dXJlKTtcclxuICAgICAgICB9ICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgc2VsZWN0IGxpc3Qgd2l0aCB0aGUgbmV3IHRyZWVcclxuICAgICAgICB0aGlzLl9zb3VyY2VTZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodHJlZUNvbnRhaW5lciwgdGhpcy5fc291cmNlU2VsZWN0KTtcclxuICAgIFxyXG4gICAgICAgIHRyZWVDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoaWRkZW5GaWVsZCk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLl90cmFuc2ZlclZhbHVlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kaXNwbGF5RmxhdFN0cnVjdHVyZSh0cmVlQ29udGFpbmVyLCBvYmopIHtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbVwiKTtcclxuICAgICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIHZhbHVlLCBrZXksIGZhbHNlKVxyXG4gICAgICAgICAgICB0cmVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9kaXNwbGF5Q2hpbGRLZXlzKGN1cnJUZXh0LCBjdXJyUGF0aCwgb2JqLCBlbGVtZW50VG9BZGRUbywgbGV2ZWwsIHBhcmVudHNDaGVja2VkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnRDaGVja2VkU3RhdGUgPSBwYXJlbnRzQ2hlY2tlZDtcclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbVwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy51c2VDaGVja2JveGVzICYmICF0aGlzLl9zZXR0aW5ncy51c2VTaW5nbGVTZWxlY3RDaGVja2JveCAmJiB0aGlzLl9pc1NlbGVjdGVkR3JvdXAoY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSBjdXJyZW50IHN0YXRlIHdoZW4gaW4gdGhlICdsaW5rIG1vZGUnXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRyZWV2aWV3X19pdGVtLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGlsZEtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYXQgdGhlIGJvdHRvbSBvZiBhIGJyYW5jaCBpLmUuIG5vIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBub2RlIGhhcyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS0tcGFyZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHRoaXMuX3Nob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gdGhpcy5fYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdC5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIC8vIENhbGwgcmVjdXJzaXZlbHkgd2l0aCB1cGRhdGVkIHBhcmFtcyBmb3IgZWFjaCBjaGlsZCBub2RlXHJcblxyXG4gICAgICAgICAgICBjaGlsZEtleXMuZm9yRWFjaChjaGlsZEtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRLZXkgIT09ICdBbGwgY29udGFjdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzcGxheUNoaWxkS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2NoaWxkS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogIEFsbG93IHRoZSBvbGQgc3R1ZmYgdG8ga2VlcCB3b3JraW5nIGluIHRoZSBzYW1lIG1hbm5lciBwb3N0IHJlZmFjdG9yIGkuZS4gY29udHJvbGxlZCBieSBhdHRyaWJ1dGVzICovXHJcbmNvbnN0IHNvdXJjZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XHJcblxyXG5pZiAoc291cmNlU2VsZWN0KSB7XHJcbiAgICBuZXcgVHJlZVZpZXcoe1xyXG4gICAgICAgIHVzZUNoZWNrYm94ZXM6IHNvdXJjZVNlbGVjdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1jaGVja2JveCcpLFxyXG4gICAgICAgIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94OiBzb3VyY2VTZWxlY3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtc2luZ2xlLXNlbGVjdC1jaGVja2JveCcpLFxyXG4gICAgICAgIGxvY2tSb290Tm9kZTogc291cmNlU2VsZWN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2NrLXJvb3QnKVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gU3RvcmUgc2VsZWN0ZWQgdXNlcnMgaW5zaWRlIHNlc3Npb24gc3RvcmFnZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZFNlc3Npb25TdG9yYWdlSGVscGVyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIGNvbnN0IGluaXRpYWwgPSB0aGlzLl9pbml0aWFsaXNlKCk7XHJcbiAgICB0aGlzLl9pdGVtcyA9IG5ldyBNYXAoKTtcclxuICAgIGluaXRpYWwuZm9yRWFjaCgoe2lkLCBuYW1lfSkgPT4gdGhpcy5faXRlbXMuc2V0KGlkLCBuYW1lKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFBvcHVsYXRlIHN0YXJ0IGlkcywgaW5pdGlhbGlzZXMgY29va2llIGlmIG5vdCBwcmVzZW50XHJcbiAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zSnNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5fbmFtZSk7XHJcbiAgICBpZiAoIXNlbGVjdGVkSXRlbXNKc29uKSB7ICAgICAgICAgICAgICAgXHJcbiAgICAgIHRoaXMuX3BlcnNpc3QoW10pOyAgIFxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZWxlY3RlZEl0ZW1zSnNvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNhdmUgdGhlIG5ldyBpZHMgdG8gdGhlIHNlc3Npb24gc3RvcmFnZSBhZnRlciB1cGRhdGVcclxuICBfdXBkYXRlKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcbiAgICB0aGlzLl9wZXJzaXN0KGl0ZW1zKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gU2F2ZSB0aGUgcGFzc2VkIGluIGlkcyB0byB0aGUgY29va2llXHJcbiAgX3BlcnNpc3QoaXRlbXMpIHsgICAgXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuX25hbWUsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNldCBhbGwgdGhlIGl0ZW1zIGluIG9uZSBoaXQuIFJldHVybnMgdGhlIG5ldyBjb3VudC5cclxuICBzZXRJdGVtcyhpdGVtcyA9IFtdKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IG5ldyBNYXAoKTtcclxuICAgIGl0ZW1zLmZvckVhY2goaSA9PiB0aGlzLl9pdGVtcy5zZXQoaS5pZCwgaS5uYW1lKSk7XHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIHRoZSBjb3VudCBvZiBpdGVtcyBpbiB0aGUgc2VsZWN0aW9uLlxyXG4gIGdldElkcygpIHtcclxuICAgIGNvbnN0IGlkcyA9IEFycmF5LmZyb20odGhpcy5faXRlbXMua2V5cygpKTtcclxuICAgIHJldHVybiBpZHM7XHJcbiAgfSAgXHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgbWFwIGl0ZW1zIHdob3NlIGlkcyBhcmUgbm90IGluIHRoZSBwYXNzZWQgaW4gbGlzdFxyXG4gIGZpbHRlckJ5SWRzKGlkc1RvS2VlcCkge1xyXG4gICAgY29uc3QgaWRzID0gdGhpcy5nZXRJZHMoKTtcclxuICAgIHJldHVybiBpZHMuZm9yRWFjaChpID0+IHtcclxuICAgICAgaWYgKCFpZHNUb0tlZXAuaW5jbHVkZXMoaSkpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZShpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSAgXHJcbiAgXHJcbiAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGN1cnJlbnRseSBpbiB0aGUgbWFwLlxyXG4gIGdldENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNpemU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSBpdGVtIGJ5IGl0cyBpZC4gUmV0dXJuIHRoZSBuZXcgY291bnRcclxuICByZW1vdmUoaWQpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShpZCk7ICAgICAgXHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFkZCBvbmUgb3IgbW9yZSBpdGVtcy4gUmV0dXJucyB0aGUgbmV3IGNvdW50XHJcbiAgYWRkKGlkLCBuYW1lKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5zZXQoaWQsIG5hbWUpO1xyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIGFsbCBpdGVtcyBpbiBhcnJheSBmb3JtYXRcclxuICBnZXRJdGVtcygpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zLmVudHJpZXMoKSkubWFwKChbaWQsIG5hbWVdKSA9PiAoeyBpZCwgbmFtZSB9KSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgdGhlIG5hbWUgZm9yIGEgcGFzc2VkIGlkXHJcbiAgZ2V0TmFtZShpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmdldChpZCk7XHJcbiAgfVxyXG5cclxuICAvLyBEb2VzIHRoZSBtYXAgY29udGFpbiB0aGUgcGFzc2VkIGluIGlkLlxyXG4gIGhhc0lkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaGFzKGlkKTtcclxuICB9XHJcblxyXG4gIC8vIEVtcHRpZXMgdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgaXRlbXMgaW4gdGhlIG1hcC5cclxuICBjbGVhckl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0SXRlbXMoW10pO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4gIFRPRE86IFN3aXRjaCB0byB1c2luZyBpbnRlcmVjdGlvbiBvYnNlcnZlclxyXG4qL1xyXG5cclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG4vKipcclxuICBDbGFzcyB0byBtYW5hZ2UgdGhlIGxvYWQgb24gc2Nyb2xsIGZ1bmN0aW9uYWxpdHkgZm9yIGEgcGFnZS5cclxuICBXaGVuIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBzZXJ2ZXIgc2lkZSBpdCBzaG91bGQgaGlkZSB0aGUgbG9hZGVyIGVsZW1lbnQgaWYgbm8gbW9yZSByZXN1bHRzIHRvIGxvYWQuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJpZXJMYXp5TG9hZGVyIHtcclxuICBcclxuICAvKipcclxuICAgIENvbnN0cnVjdG9yXHJcbiAgICBQYXJhbXNcclxuICAgICAtIGxvYWRlckVsZW1lbnQgKHJlcXVpcmVkKTogVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGxvYWRlclxyXG4gICAgIC0gbG9hZGVyRm4gKHJlcXVpcmVkKTogVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byBsb2FkIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cy4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3aWxsIGJlIHBhc3NlZCBhIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uIHdpdGggYSBib29sIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXRoZXIgb3Igbm90IHRoZXJlIGFyZSBtb3JlIGl0ZW1zIHRvIGxvYWQuXHJcbiAgICAgLSBjb25maWdPYmogKG9wdGlvbmFsKTogIEFuIG9iamVjdCB3aG9zZSBrZXkgYW5kIHZhbHVlcyB3aWxsIG92ZXJyaWRlIGRlZmF1bHQgY29uZmlnIHNldHRpbmdzLlxyXG4gICovICAgICAgICAgICAgICAgICAgICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgbG9hZGVyRWxlbWVudCwgXHJcbiAgICAgIGxvYWRlckZuLCBcclxuICAgICAgY29uZmlnT2JqID0ge31cclxuICApIHtcclxuICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICBEZWZhdWx0IGNvbmZpZyBzZXR0aW5nc1xyXG4gICAgKi9cclxuICAgIGNvbnN0IGNvbmZpZ0RlZmF1bHRzID0ge1xyXG4gICAgICBsb2FkZXJDbGFzczogJ2xvYWRlcicsICAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50XHJcbiAgICAgIGxvYWRlckxvYWRpbmdDbGFzczogJ2xvYWRlci0tbG9hZGluZycsIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnQgd2hlbiBzZWFyY2hpbmdcclxuICAgICAgZGVib3VuY2VNczogMTAwLCAvLyBob3cgbG9uZyB0byB3YWl0IGJldHdlZW4gZXZlbnRzIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgcGVla0Rpc3RhbmNlOiAwLCAvLyBob3cgbXVjaCBvZiBsb2FkaW5nIGVsZW1lbnQgc2hvdWxkIGJlIG9uIHNjcmVuIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgZGVidWc6IGZhbHNlICAvLyB3aGV0aGVyIG9yIG5vdCB0byBsb2cgZGVidWcgaW5mbyB0byBjb25zb2xlLlxyXG4gICAgfTtcclxuICAgICAgICBcclxuICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlckVsZW1lbnQ7XHJcbiAgICB0aGlzLl9sb2FkZXJGdW5jID0gbG9hZGVyRm47XHJcbiAgICB0aGlzLl9tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBwYXNzZWQgaW4gY29uZmlnXHJcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZ0RlZmF1bHRzLCAuLi5jb25maWdPYmogfTtcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgd2hldGhlciBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkIG9yIHJlbW92ZWRcclxuICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgaWYgKCF0aGlzLl9sb2FkZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGxvYWRlciBlbGVtZW50IHByb3ZpZGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbiB0aGUgbG9hZGVycyBjbGFzcyBmcm9tIHRoZSBjb25maWdcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJDbGFzcyk7XHJcbiAgICBcclxuICAgIC8vIERlYm91bmNlIHRoZSBjaGVja1xyXG4gICAgdGhpcy5fbGF6eUxvYWRDaGVjayA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5fZG9Mb2FkTW9yZUNoZWNrKCkpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdDYWxsaW5nIGxvYWQgbW9yZSBmdW5jdGlvbicpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHRoZSBzZWFyY2ggZnVuY3Rpb24gJiBwYXNzIGluIHRoZSBkb25lIHNlYXJjaGluZyBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2xvYWRlckZ1bmModGhpcy5fZG9uZVNlYXJjaGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm90IHJlYWR5IHRvIHJlbG9hZCB5ZXQnKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlYm91bmNlTXMpO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgdGhlIGV2ZW50cyAoYWxzbyBkb2VzIGluaXRpYWwgY2hlY2spXHJcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fZG9uZVNlYXJjaGluZyA9IHRoaXMuX2RvbmVTZWFyY2hpbmcuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgXHJcbiAgX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSh2aXNpYmxlKSB7XHJcbiAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGtsZSByZXN1bHRzIGNvbWluZyBiYWNrIGluXHJcbiAgX2RvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCkge1xyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyhgX2RvbmVTZWFyY2hpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggbW9yZSB0byBsb2FkICR7bW9yZVRvTG9hZH1gKTtcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpIFxyXG4gICAgaWYgKG1vcmVUb0xvYWQpIHtcclxuICAgICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQWxsIGRvbmUgLSBoaWRpbmcgbG9hZGVyIGVsZW1lbnQnKTtcclxuICAgICAgdGhpcy5fc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gV2lyZSB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIGRvIGluaXRpYWwgY2hlY2suXHJcbiAgX3N0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkgeyAgICAgIFxyXG4gICAgICB0aGlzLl9tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhZGRlZCcpO1xyXG4gICAgICB0aGlzLl9sYXp5TG9hZENoZWNrKCk7XHJcbiAgICB9ICBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFscmVhZHkgaW4gcGxhY2UnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnNcclxuICBfc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkge1xyXG4gICAgICB0aGlzLl9tYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAgICAgIFxyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgcmVtb3ZlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm8gTGlzdGVuZXJzIHRvIHJlbW92ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBIZWxwZXIgdG8gbG9nIG9ubHkgaWYgZGVidWdnaW5nIGVuYWJsZWRcclxuICBfY29uZGl0aW9uYWxEZWJ1Z0xvZyh0b0RlYnVnLCBsb2dnZXJGdW5jID0gY29uc29sZS5sb2csICkge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kZWJ1Zykge1xyXG4gICAgICBsb2dnZXJGdW5jKHRvRGVidWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIERvIHRoZSBjaGVjayB0byBzZWUgaWYgc2NyZWVuIHNvbWV3aGVyZSBpdCBzaG91bGQgYmUgbG9hZGVkLlxyXG4gIF9kb0xvYWRNb3JlQ2hlY2soKSB7ICAgIFxyXG5cclxuICAgIGNvbnN0IGhpZ2hlc3RWaXNpYmxlWVBvcyA9IHRoaXMuX21haW4uc2Nyb2xsVG9wICsgdGhpcy5fbWFpbi5jbGllbnRIZWlnaHQ7IC8vd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSAgdGhpcy5fbWFpbi5zY3JvbGxIZWlnaHQ7IC8vZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9IE1hdGgubWluKCh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSksIGRvY3VtZW50SGVpZ2h0KTsgXHJcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcclxuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcclxuICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcclxuICAgICAgJ1RvcCBwb3NpdGlvbiBvZiBsb2FkZXIgZWxlbWVudCc6IHRoaXMuX2xvYWRlci5vZmZzZXRUb3AsXHJcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXHJcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXHJcbiAgICAgIC8vJ0N1cnJlbnQgWSBwb3NpdGlvbiBvZiBzY3JvbGwnOiB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgIC8vICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXHJcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXHJcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxyXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXHJcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcclxuICB9O1xyXG59XHJcblxyXG4vKlxyXG5cclxuZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcclxuICAgIGNvbnN0IGhpZ2hlc3RWaXNpYmxlWVBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9ICh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSk7ICAvLyBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxyXG4gICAgY29uc3QgcGVla1Bvc2l0aW9uVmlzaWJsZSA9IGhpZ2hlc3RWaXNpYmxlWVBvcyA+PSBsb2FkTW9yZVRyaWdnZXJQb3M7XHJcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XHJcbiAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0RvaW5nIGxvYWQgbW9yZSBjaGVjayAuLi4nKTsgICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXHJcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxyXG4gICAgICAnQ29uZmlnIHBlZWsgZGlzdGFuY2UnOiB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlLFxyXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxyXG4gICAgICAnQ3VycmVudCBZIHBvc2l0aW9uIG9mIHNjcm9sbCc6IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgJ1RoZSBpbnRlcm5hbCBzaXplIG9mIHRoZSB3aW5kb3cnOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICdUaGUgbWF4IHkgcG9zaXRpb24gdmlzaWJsZSc6IGhpZ2hlc3RWaXNpYmxlWVBvcyxcclxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcclxuICAgICAgJ0lzIHBlZWsgcG9zaXRpb24gdmlzaWJsZSc6IHBlZWtQb3NpdGlvblZpc2libGUsXHJcbiAgICAgICdJcyB0aGUgbG9hZCBtb3JlIHBvc2l0aW9uIHZpc2libGUsIG9yIGF0IGRvYyBlbmQnOiBzaG91bGRMb2FkTW9yZSxcclxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHNob3VsZExvYWRNb3JlO1xyXG4gIH07XHJcblxyXG4qLyIsIlxyXG5pbXBvcnQge1NlZUFsbEF0dHJpYnV0ZUhlbHBlcn0gZnJvbSAnLi9TZWVBbGxIZWxwZXInO1xyXG5cclxubmV3IFNlZUFsbEF0dHJpYnV0ZUhlbHBlcigpO1xyXG4iLCIvKipcclxuICogIFVTQUdFOiBUbyB1c2UgdGhpcyBjb250cm9sIHlvdSBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSB0byB0aGUgYnV0dG9uIHRoYXQgc2hvdWxkIGJlIGRvaW5nIHRoZSBzaG93IGFsbC5cclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkPVwiPDxpZCBvZiBjb250YWluZXIgdG8gYmUgZWZmZWN0ZWQ+PlwiXHJcbiAqIFxyXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1saW1pdD1cIjIwXCIgLSBzZXRzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2hvdyBpbml0aWFsbHkuICBEZWZhdWx0IGlzIDEwXHJcbiAqICBcclxuICogIGRhdGEtc2hvd2FsbC1jb3VudC1pZCAtIGlkIG9mIGEgZmllbGQgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCB3aXRoIGEgY291bnQgb2YgdGhlIGl0ZW1zXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tc2VsZWN0b3IgLSBhIHNlbGVjdG9yIHRvIGdldCB0aGUgaXRlbSBmcm9tIHdpdGggdGhlIGNvbnRhaW5lci4gIFRoaXMgaXMgcmVxdWlyZWQgaWYgdGhlIGNvbnRhaW5lciBpcyBub3QgYSB0YWJsZVxyXG4gKi9cclxuXHJcbiBleHBvcnQgY2xhc3MgU2VlQWxsQXR0cmlidXRlSGVscGVyIHtcclxuICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgc2hvd01vcmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2hvd2FsbC1jb250YWluZXItaWRdJyk7XHJcblxyXG4gICAgICAgIHNob3dNb3JlQnV0dG9ucy5mb3JFYWNoKHNob3dBbGxCdXR0b24gPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVySWQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1jb250YWluZXItaWRcIik7XHJcbiAgICAgICAgICAgIHZhciBpdGVtU2VsZWN0b3IgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLXNlbGVjdG9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgc2hvd0FsbEl0ZW1MaW1pdCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWl0ZW0tbGltaXRcIik7XHJcbiAgICAgICAgICAgIHZhciBzaG93QWxsSXRlbUNvdW50SWQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1jb3VudC1pZFwiKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbklkID0gc2hvd0FsbEJ1dHRvbi5pZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnV0dG9uSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3JUb1VzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yVG9Vc2UgPSBgIyR7Y29udGFpbmVySWR9ICR7aXRlbVNlbGVjdG9yfWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLnRhZ05hbWUgPT09IFwiVEFCTEVcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JUb1VzZSA9IGAjJHtjb250YWluZXJJZH0gdGJvZHkgdHJgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGNoaWxkIHNlbGVjdG9yIGF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHNob3dBbGxJdGVtTGltaXQsIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZEl0ZW1MaW1pdCkpIHsgXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnMsIGl0ZW1MaW1pdDogcGFyc2VkSXRlbUxpbWl0fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc2hvd0FsbEl0ZW1Db3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnMsIGNvdW50RmllbGRJZDogc2hvd0FsbEl0ZW1Db3VudElkfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV3IFNlZUFsbEhlbHBlcihzZWxlY3RvclRvVXNlLCBgIyR7YnV0dG9uSWR9YCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gfVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlZUFsbEhlbHBlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaXRlbXNTZWxlY3Rvciwgc2VlQWxsU2VsZWN0b3IsIHBhc3NlZE9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtc1NlbGVjdG9yID0gaXRlbXNTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9zZWVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlZUFsbFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZWVBbGwpIHtcclxuICAgICAgICAgICAgLy8gUnVubmluZyBvbiBhIHBhZ2Ugd2l0aG91dCBzZWUgYWxsIGJ1dHR0b24sIHNvIHN0b3AgYWZ0ZXIgY291bnRzLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZlNlZUFsbCA9IHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5O1xyXG5cclxuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHsgaXRlbUxpbWl0OiA1LCBzaG93TGVzc1RleHQ6IFwiU2VlIExlc3NcIiwgY291bnRGaWVsZElkOiBudWxsIH07XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4uZGVmYXVsdHMsIC4uLnBhc3NlZE9wdGlvbnMgfTtcclxuICAgICAgICB0aGlzLl9pdGVtTGltaXQgPSB0aGlzLl9vcHRpb25zLml0ZW1MaW1pdDtcclxuXHJcbiAgICAgICAgdGhpcy5fc2hvd0xlc3NUZXh0ID0gdGhpcy5fb3B0aW9ucy5zaG93TGVzc1RleHQ7XHJcbiAgICAgICAgdGhpcy5fc2hvd01vcmVUZXh0ID0gdGhpcy5fc2VlQWxsLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICB0aGlzLl9jb3VudEZpZWxkID0gdGhpcy5fb3B0aW9ucy5jb3VudEZpZWxkSWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9vcHRpb25zLmNvdW50RmllbGRJZCkgOiBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9zaG93aW5nQWxsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3NlZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG93aW5nQWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlRXhjZXNzSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dBbGxJdGVtcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nQWxsID0gIXRoaXMuX3Nob3dpbmdBbGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZUFsbC50ZXh0Q29udGVudCA9IHRoaXMuX3Nob3dpbmdBbGwgPyB0aGlzLl9zaG93TGVzc1RleHQgOiB0aGlzLl9zaG93TW9yZVRleHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd0FsbEl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXM7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfaGlkZUV4Y2Vzc0l0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvQ2hlY2sgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSB0b0NoZWNrID4gdGhpcy5faXRlbUxpbWl0ID9cclxuICAgICAgICAgICAgICAgIFwibm9uZVwiIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGUoKSB7ICAgIFxyXG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2l0ZW1zU2VsZWN0b3IpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvdW50RmllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY291bnRGaWVsZC50ZXh0Q29udGVudCA9IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9zZWVBbGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCA8PSB0aGlzLl9pdGVtTGltaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VlQWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zID0gdGhpcy5fYWxsSXRlbXNbMF0uc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZWVBbGwuc3R5bGUuZGlzcGxheSA9IHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zaG93aW5nQWxsKSAgeyB0aGlzLl9oaWRlRXhjZXNzSXRlbXMoKTsgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKioqKiogXHJcblxyXG4gIENyZWF0ZXMgYSB0YWcgbGlzdCBmcm9tIGEgc2VsZWN0IGVsZW1lbnRcclxuXHJcbiAgdXNhZ2U6XHJcblxyXG4gIG5ldyBTZWxlY3RMaXN0VGFnKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jKS5cclxuXHJcbiAgLSBzZWxlY3RJZCAocmVxdWlyZWQpOiBUaGUgaWQgb2YgdGhlIHNlbGVjdCBlbGVtZW50IGFjdGluZyBhcyB0aGUgc291cmNlIChtdXN0IGhhdmUgbXVsdGlwbGUgYXR0cmlidXRlLCBhbmQgYWxsIGl0ZW1zIHNob3VsZCBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQpXHJcblxyXG4gIC0gcmV2ZXJ0R3JvdXBzIChvcHRpb25hbCk6IFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgY2xpY2tlZCB0byByZXZlcnQgc2VsZWN0ZWQgb3B0aW9ucyAoc2hvdWxkIGhhdmUgaXMtaGlkZGVuIGNsYXNzIHRvIHN0YXJ0KVxyXG5cclxuICAtIG9uVXBkYXRlRnVuYyAocmVxdWlyZWQpOiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgdGFnIGhhcyBiZWVuIHJlbW92ZWQsIG9yIG9wdGlvbnMgYXJlIHJldmVydGVkLi4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHR3byBwYXJhbXMsIHNlbGVjdGVkT3B0aW9ucyBhbmQgYWxsT3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGludGVuZGVkIHRvIG1ha2UgdGhlIGNvbnRyb2wgbW9yZSBmbGV4aWJsZSBpLmUuIG91ciBmaXJzdCB1c2FnZSBpcyB0byB1cGRhdGUgbGFiZWwgd2l0aCBzZWxlY3RlZCBpdGVtcyB0ZXh0IGVsc2V3aGVyZSBvbiBwYWdlIHdpdGhvdXQgZnVydGhlciBjb3VwbGluZy5cclxuXHJcbiAgLSBpdGVtcyAob3B0aW9uYWwpOiAgSHRtbCBvcHRpb24gZWxlbWVudHMgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdW5kZXJseWluZyBzZWxlY3QgbGlzdCBiZWZvcmUgdGFncyBnZW5lcmF0ZWQuIFxyXG5cclxuKioqKioqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RMaXN0VGFncyB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IG51bGwpIHtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMgPSBvblVwZGF0ZUZ1bmM7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmIChyZXZlcnRHcm91cHNJZCkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmV2ZXJ0R3JvdXBzSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgdGhpcy5yZXZlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gdGhpcy50YWdPcHRpb25zLmFwcGVuZENoaWxkKG8pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTm93IGhhbmRsZXMgcGFzc2VkIGluIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IG9wdGlvbnMgfHwgWy4uLnRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKV07XHJcblxyXG4gICAgICBpZiAodGhpcy5yZXZlcnRCdG4gJiYgdGhpcy5hbGxPcHRpb25zLnNvbWUobyA9PiAhby5zZWxlY3RlZCkpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgIFxyXG4gICAgICB0aGlzLnRhZ3MuY2xhc3NMaXN0LmFkZCgndGFncycpO1xyXG4gICAgICB0aGlzLnRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZS50YXJnZXQubWF0Y2hlcygnaScpKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRWYWwgPSBlLnRhcmdldC5kYXRhc2V0LnZhbDtcclxuICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyt0YXJnZXRWYWwrJ1wiXScpO1xyXG4gICAgICAgICAgICAgIGlmKG8pe1xyXG4gICAgICAgICAgICAgICAgICBvLnNlbGVjdGVkID0gZmFsc2U7ICAgXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuYWZ0ZXIodGhpcy50YWdzKTtcclxuXHJcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVRhZ3MoKSB7XHJcbiAgICAgIHRoaXMudGFncy5pbm5lckhUTUwgPSAnJzsgICAgICBcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xyXG4gICAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICB0aGlzLnRhZ3MuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVGFnKHQuaW5uZXJUZXh0LCB0LnZhbHVlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyhzZWxlY3RlZE9wdGlvbnMsIHRoaXMuYWxsT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gIG1ha2VUYWcodGV4dCwgdmFsdWUpIHtcclxuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX19pY29uXCIpOyAgICAgIFxyXG4gICAgICBpLmRhdGFzZXQudmFsPXZhbHVlO1xyXG4gICAgICBpLmlubmVyVGV4dCA9IFwiY2xlYXJcIlxyXG5cclxuICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRhZztcclxuICAgIH07XHJcblxyXG4gIC8vIERlc2VsZWN0IGFsbCB0aGUgb3B0aW9ucyBpbiB0aGUgdW5kZXJseWluZyBzZWxlY3QgbGlzdC4gIE9wdGlvbmFsbHkgcmVnbmVyYXRlZCB0aGUgdGFncyBsaXN0LiBcclxuICAvLyBPcHRpb25hbCBhcyBub3Qgd29ydGggb3ZlcmhlYWQgaWYgZG9udCBuZWVkIGl0LiBcclxuICBjbGVhckl0ZW1zKHJlcG9sdWxhdGVUYWdzID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gZmFsc2UpO1xyXG5cclxuICAgIGlmIChyZXBvbHVsYXRlVGFncykgeyAgICAgIFxyXG4gICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU2hvdWxkIGhhdmUgYSBzZWN0aW9uIGxpa2UgdGhpcyBmb3IgZWFjaCBwYWdlIHRoZSBjb250cm9sIGlzIHVzZWQgb24sIHVubGVzcyB3ZSB3YW50IGl0IGJlaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGFzIGEgcHJldmlvdXMgdmVyc2lvbiAoaW5jbHVkaW5nIGlkcyBhbmQgdXBkYXRlIGZ1bmN0aW9uKSBcclxuLy8gKkJldHRlciBzdGlsbCogLSBoYXZlIGluIHNlcGVyYXRlIHNjcmlwdCBmaWxlIHNjb3BlZCB0byBzcGVjaWZpYyBwYWdlIChsaWtlIHdpdGggU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzKVxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicpKSB7XHJcblxyXG4gIC8vIFByZXBhcmUgYW4gdXBkYXRlIGZ1bmN0aW9uIGlmIHJlcXVpcmVkIChvcHRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZUdyb3Vwc0xhYmVsU3BhbicpO1xyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHBsdXJhbGlzZWRHcm91cHMgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAxID8gJ2dyb3VwJyA6ICdncm91cHMnO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBgU2VuZCB0byAke3NlbGVjdGVkT3B0aW9ucy5sZW5ndGh9IHJlc3BvbnNlICR7cGx1cmFsaXNlZEdyb3Vwc31gO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGlzZSBhbiBpbnN0YW5jZSBvZiB0aGUgY29udHJvbFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnRm9sbG93dXBHcm91cFNlbGVjdG9yJywgJ3JldmVydF9ncm91cHMnLCBvblVwZGF0ZUZ1bmMpOyBcclxufVxyXG4iLCIvLyBTdG9yZSBhIHNpbXBsZSB2YWx1ZSBpbiBhIGNvb2tpZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDb29raWVIZWxwZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5faW5pdGlhbGlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0aWFsaXNlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGRvY3VtZW50LmNvb2tpZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IGNvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbWF0Y2hpbmdDb29raWUgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hpbmdDb29raWUuc3BsaXQoJz0nKVsxXSkgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9OyBwYXRoPS87IHNhbWVzaXRlPVN0cmljdGBcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbi8vIFJlbW92ZSB0aGUgbm8tanMgY2xhc3Mgc28gd2UgYXJlIGFibGUgdG8gdGVsbCB0aGF0IGpzIGlzIGVuYWJsZWRcclxuLy8gVXNlZnVsIGZvciBoaWRpbmcgZWxlbWVudHMgd2hlbiBqcyBub3QgYXZhaWxhYmxlLlxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnanMnKTsiLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlcycpICE9IG51bGwpIHtcclxuXHJcblxyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIHJlc3BvbnNlIGZpZWxkcyBhbmQgdGhlIHJlc3BvbnNlIGxpc3RcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2UtZmllbGQnKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbnMtbGlzdCcpO1xyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0aGUgZW1wdHkgcmVzcG9uc2UgZmllbGRzXHJcbiAgICAgICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKSAudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhc2V0LmtleSA9IGlkeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmV2ZWFscyB0aGUgZmlyc3QgaGlkZGVuIGl0ZW1cclxuICAgICAgICBjb25zdCBzaG93Rmlyc3RFbXB5SXRlbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXNwb25zZSA9IHJlc3BvbnNlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFdoZW4gYW4gaXRlbSBpcyByZW1vdmVkLCBjb3B5IGFsbCB2YWx1ZXMgZm9yd2FyZCB0byBmaWxsIGdhcHNcclxuICAgICAgICBjb25zdCBjb3B5SXRlbXNGb3J3YXJkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IGluZGV4ICsgMTsgaWR4IDwgcmVzcG9uc2VzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZJbnB1dCA9IHJlc3BvbnNlc1tpZHgtMV0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpOztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gcmVzcG9uc2VzW2lkeF0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgcHJldklucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUxhc3RFbXB0eUl0ZW0gPSAocmVtb3ZlSWR4KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBcyBhbGwgY29waWVkIGZvcndhcmQgYmxhbmsgbGFzdCBpdGVtIG91dFxyXG4gICAgICAgICAgICByZXNwb25zZXNbcmVzcG9uc2VzLmxlbmd0aC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJykudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gR28gdGhyb3VnaCBiYWNrd2FyZHMgYW5kIGhpZGUgbGFzdCB2aXNpYmxlIGl0ZW1cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gKHJlc3BvbnNlcy5sZW5ndGgtMSk7IGlkeCA+PSByZW1vdmVJZHg7IGlkeC0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhZGRSZXNwb25zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX3Jlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBzaG93Rmlyc3RFbXB5SXRlbSgpO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXNwb25zZXNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1yZXNwb25zZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUlkeCA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29weUl0ZW1zRm9yd2FyZChyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGFzdEVtcHR5SXRlbShyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBhZGRQaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRQaG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUGhvbmVCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZFBob25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KShcImFkZFBob25lXCIpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkRW1haWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEVtYWlsQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRFbWFpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkoXCJhZGRFbWFpbFwiKTtcclxuXHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVHcm91cEJ1dHRvbiAhPW51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSkoXCJhZGRfZ3JvdXBcIik7XHJcbn1cclxuXHJcbnZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuaWYgKGdyb3VwVGV4dGFyZWEgIT0gbnVsbCkge1xyXG4gICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldDIgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldDIubWF0Y2hlcyhcIi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Mi5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcblxyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpICE9bnVsbCkge1xyXG5cclxuICAgIHZhciBpbnB1dEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKTtcclxuICAgIHZhciBpbnB1dEVycm9yc0FycmF5ID0gT2JqZWN0LmtleXMoaW5wdXRFcnJvcnMpO1xyXG5cclxuICAgIGlucHV0RXJyb3JzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG5cclxuICAgICAgICBpbnB1dEVycm9yc1trZXldLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbi8vICAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xyXG4vLyAgICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2lkZWJhclwiKS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG5cclxuLy8gfSkoXCIjU2lkZWJhclwiKTtcclxuXHJcbiIsIi8qIFxyXG4gIERlYm91bmNlIGZ1bmN0aW9uIHByZXZlbnQgZXhjZXNzaXZlIGNhbGxzIG9uIHNjcm9sbC5cclxuICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXHJcbiovXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcclxuXHR2YXIgdGltZW91dDtcclxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0fTtcclxufTsiLCJcclxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIGNvbnN0IHNuYWNrYmFyU3RvcmFnZUl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NuYWNrYmFyJyk7XHJcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cclxuXHJcbiAgICAvLyBjaGVjayBpZiBsb2NhbFN0cm9yYWdlICdzbmFja2JhcicgZXhpc3RzIGFuZCBpZiBpdCBkb2VzbnQgc2V0dXAgb2JqZWN0IHJlYWR5IGZvciBldmVudExpc3RlbmVyXHJcbiAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gSlNPTi5wYXJzZShzbmFja2JhclN0b3JhZ2VJdGVtKTtcclxuXHJcbiAgICAgICAgLy9jaGVjayBpZiBsb2NhbFN0cm9yYWdlICdzbmFja2JhcicgYWxyZWFkeSBjb250YWlucyBjdXJyZW50IHBhZ2UgcGF0aFxyXG4gICAgICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgICAgICAgLy9pZiBpdCBkb2VzIHRoZW4gaGlkZSB0aGUgc25hY2tiYXJcclxuICAgICAgICAgICAgc25hY2tiYXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gIHtcclxuICAgICAgICAgICAgbG9jYXRpb25zIDogbmV3IEFycmF5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChzbmFja2Jhcikge1xyXG4gICAgICAgIHNuYWNrYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBpZiAoIXNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NuYWNrYmFyJywgSlNPTi5zdHJpbmdpZnkoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSkoXCIjaGludC1zbmFja2JhclwiKTtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qICBXaXJlIHVwIHRhYmxlcyBzbyB0aGF0IHdob2xlIHJvdyBjYW4gYmUgY2xpY2tlZCwgcmF0aGVyIHRoYW4gaW5kaXZpZHVhbCBjZWxsc1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIEdldCBhbGwgdGFibGUgcm93cyB0aGF0IHNob3VsZCBiZSBjbGlja2FibGVcclxuY29uc3Qgcm93c1RvTGlua2lmeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlW2RhdGEtbGlua2FibGUtY2VsbF0gPiB0Ym9keSA+IHRyJyk7XHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lciB0byBoYW5kbGUgY2xpY2tcclxuY29uc3QgaGFuZGxlUm93Q2xpY2sgPSBlID0+IHtcclxuXHJcbiAgLy8gRmluZCB0aGUgY29sdW1uIHRoYXQgc2hvdWxkIGNvbnRhaW4gdGhlIGxpbmtcclxuICBjb25zdCB0YWJsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RhYmxlJyk7XHJcbiAgY29uc3QgY29sVG9QYXJzZSA9IHRhYmxlLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rYWJsZS1jZWxsJyk7XHJcblxyXG4gIC8vIEdldCB0aGUgY2xpY2tlZCByb3csIGFzIG1heWJlIGEgdGQgY2xpY2tlZC5cclxuICBjb25zdCByb3cgPSBlLnRhcmdldC5jbG9zZXN0KCd0cicpO1xyXG5cclxuICB0cnkge1xyXG4gICAgICAvLyBUcnkgYW5kIGZpbmQgdGhlIGxpbmsgdGhhdCBzaG91bGQgYmUgY2xpY2tlZC5cclxuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNvbFRvUGFyc2UsMTApICsgMTtcclxuICAgIGNvbnN0IGxpbmsgPSByb3cucXVlcnlTZWxlY3RvcihgdGQ6bnRoLWNoaWxkKCR7Y29sfSkgYWApO1xyXG4gICAgXHJcbiAgICAvLyBDbGljayB0aGUgbGluayBvciByZXBvcnQgZmFpbHVyZSB0byBmaW5kXHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gbGluayBmb3VuZCBpbiBjb2x1bW4gc3BlY2lmaWVkIGJ5IFtkYXRhLWxpbmthYmxlLWNlbGxdJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoIHtcclxuICAgIC8vIFdhcm4gb2YgaW52YWxpZCBjb2x1bW4gc3BlY2lmaWVkLlxyXG5cdGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdmFsdWUgc3BlY2lmaWVkIGJ5IFtkYXRhLWxpbmthYmxlLWNlbGxdJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gV2lyZSB1cCB0aGUgbGlzdGVuZXJzXHJcbnJvd3NUb0xpbmtpZnkuZm9yRWFjaChyb3cgPT4gcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUm93Q2xpY2spKTsiLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpICAmJiBtZW51Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkoJyNtZW51Jyk7IiwiaW1wb3J0IHtUcmVlVmlld30gZnJvbSAnLi4vR3JvdXBzVHJlZSc7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbi5jb3VyaWVyLWFkZC1ncm91cCcpO1xyXG5cclxuaWYgKG1haW4pIHtcclxuXHJcbiAgICBuZXcgVHJlZVZpZXcoe1xyXG4gICAgICAgIHVzZUNoZWNrYm94ZXM6IHRydWUsXHJcbiAgICAgICAgaXNHcm91cHNTdHJ1Y3R1cmU6IGZhbHNlLFxyXG4gICAgICAgIHNvdXJjZVNlbGVjdG9yOiBcIiNBdHRyaWJ1dGVzXCIsXHJcbiAgICAgICAgZGVzdGluYXRpb25UYWdzU2VsZWN0b3I6IFwiI0F0dHJpYnV0ZXNBcmVhXCIsXHJcbiAgICAgICAgZGVzdGluYXRpb25TZWxlY3RTZWxlY3RvcjogXCIjQXR0cmlidXRlc1NlbGVjdG9yXCIsXHJcbiAgICAgICAgdGFnU2VsZWN0b3I6IFwiI0F0dHJpYnV0ZXNBcmVhID4gLnRhZ1wiLFxyXG4gICAgICAgIHNlZU1vcmVHcm91cHNTZWxlY3RvcjogXCIjc2VlTW9yZUF0dHJpYnV0ZXNcIixcclxuICAgICAgICBjb3VudEZpZWxkSWQ6ICdhdHRyaWJ1dGVzQ291bnQnLFxyXG4gICAgICAgIHRyZWV2aWV3SWQ6ICd0cmVldmlld0F0dHJpYnV0ZXMnXHJcbiAgICB9KTtcclxufSIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHN0YWZmIGNvbXBvc2UgcGFnZS5cclxuKi9cclxuXHJcbmltcG9ydCBTaW1wbGVDb29raWVIZWxwZXIgZnJvbSAnLi4vU2ltcGxlQ29va2llSGVscGVyJztcclxuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XHJcbmltcG9ydCBTZWxlY3RMaXN0VGFncyBmcm9tICcuLi9TZWxlY3RMaXN0VGFncyc7XHJcbmltcG9ydCB7U2VlQWxsSGVscGVyfSBmcm9tICcuLi9TZWVBbGxIZWxwZXInO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtY29tcG9zZScpKSB7XHJcblxyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY29udGFjdCcpO1xyXG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0X2lucHV0Jyk7XHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X01lc3NhZ2UnKTtcclxuICBjb25zdCByZXNlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnB1dF9BdXRvUmVzZW5kU2NoZWR1bGUnKTtcclxuICBjb25zdCByZXNwb25zZU9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1vcHRpb24nKSk7XHJcblxyXG4gIGNvbnN0IGNvb2tpZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVGl0bGUnKTtcclxuICBjb25zdCBjb29raWVNZXNzYWdlSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VDb250ZW50Jyk7XHJcbiAgY29uc3QgY29va2llQXV0b1Jlc2VuZEhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzZW5kJyk7XHJcbiAgY29uc3QgY29va2llUmVzcG9uc2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVJlc3BvbnNlcycpO1xyXG4gIGNvbnN0IGlkc1Nlc3Npb25IZWxwZXIgPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xyXG4gIFxyXG4gIGNvbnN0IGdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgbm9uRW1wdHlPcHRpb25zID0gcmVzcG9uc2VPcHRpb25zLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGN1cnIudmFsdWVdO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiBub25FbXB0eU9wdGlvbnMuam9pbignfHwnKTtcclxuICB9O1xyXG5cclxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb29raWVIZWxwZXIuc2V0KHN1YmplY3RJbnB1dC52YWx1ZSk7XHJcbiAgICBjb29raWVNZXNzYWdlSGVscGVyLnNldChtZXNzYWdlSW5wdXQudmFsdWUpO1xyXG4gICAgY29va2llQXV0b1Jlc2VuZEhlbHBlci5zZXQocmVzZW5kSW5wdXQudmFsdWUpOyAgXHJcbiAgICBjb29raWVSZXNwb25zZUhlbHBlci5zZXQoZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRhZ3NTZWVBbGxIZWxwZXIgPSBuZXcgU2VlQWxsSGVscGVyKCcjQXNjU3RhZmZTZWxlY3RvciArIGRpdiA+IC50YWcnLCAnI3NlZU1vcmVSZWNpcGllbnRzJywgeyBpdGVtTGltaXQ6IDIxLCBjb3VudEZpZWxkSWQ6ICdyZWNpcGllbnRzQ291bnQnIH0pO1xyXG4gIFxyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGlkc1Nlc3Npb25IZWxwZXIuZmlsdGVyQnlJZHMoc2VsZWN0ZWRPcHRpb25zLm1hcCh4ID0+IHgudmFsdWUpKTtcclxuICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBpZHNTZXNzaW9uSGVscGVyLmdldEl0ZW1zKCkubWFwKCh7aWQsIG5hbWV9KT0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IGlkO1xyXG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IHNsdCA9IG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYywgc2VsZWN0T3B0aW9ucyk7IFxyXG5cclxuICB0YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XHJcblxyXG4gIGNvbnN0IGRpc2NhcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuRGlzY2FyZCcpO1xyXG4gIGRpc2NhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZHNTZXNzaW9uSGVscGVyLmNsZWFySXRlbXMoKTtcclxuICAgIHNsdC5jbGVhckl0ZW1zKCk7XHJcbiAgICB0YWdzU2VlQWxsSGVscGVyKCk7XHJcbiAgfSk7XHJcblxyXG5cclxufVxyXG4iLCJcclxuLy8gQ2hlY2sgd2UgYXJlIG9uIHRoZSBjb3JyZWN0IHBhZ2UuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluLmNvdXJpZXItcHJvZmlsZS1wYWdlJyk7XHJcblxyXG5pZiAobWFpbikge1xyXG5cclxuICAgIC8vIEdyYWIgYWxsIHRoZSBidXR0b25zIHRoYXQgYXJlIG9ubHkgc2hvdyB3aGVuIGpzIGVuYWJsZWRcclxuICAgIGNvbnN0IGFkZFBob25lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lQnRuJyk7XHJcbiAgICBjb25zdCBhZGRFbWFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbEJ0bicpO1xyXG4gICAgY29uc3QgcmVtb3ZlRW1haWxCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpO1xyXG4gICAgY29uc3QgcmVtb3ZlUGhvbmVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpO1xyXG4gICAgXHJcbiAgICAvLyBTaG93IGFsbCB0aGUganMgb25seSBidXR0b25zXHJcbiAgICBbYWRkUGhvbmVCdG4sIGFkZEVtYWlsQnRuLCAuLi5yZW1vdmVFbWFpbEJ1dHRvbnMsIC4uLnJlbW92ZVBob25lQnV0dG9uc10uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBlbWFpbHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZW1haWxzJyk7XHJcbiAgICBcclxuICAgIGVtYWlsc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYW5rJyk7XHJcbiAgICAgICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwaG9uZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGhvbmVzJyk7XHJcbiAgICBcclxuICAgIHBob25lc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxhbmsnKTtcclxuICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGFueSBlbXB0eSBwaG9uZSBib3hlcywgb3IgZW1haWwgYm94ZXNcclxuICAgIGNvbnN0IGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlID0gKHNlY3Rpb24sIHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oc2VjdGlvblxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXHJcbiAgICAgICAgICAgIC5zb21lKHggPT4geC52YWx1ZS50cmltKCkgPT09ICcnKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2hvdWxkIG5vdCBoYXZlIGFuZCBhZGQgZW1haWwgYnV0dG9uIGlmIGFscmVhZHkgYSBibGFuayBvbmUgYXZhaWxhYmxlXHJcbiAgICBjb25zdCBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUGhvbmVCdG4uc3R5bGUuZGlzcGxheSA9IGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlKHBob25lc1NlY3Rpb24sICcuaW5wdXQtLXByb2ZpbGUtcGhvbmUgPiBpbnB1dCcpID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG91bGQgbm90IGhhdmUgYW5kIGFkZCBwaG9uZSBidXR0b24gaWYgYWxyZWFkeSBhIGJsYW5rIG9uZSBhdmFpbGFibGVcclxuICAgIGNvbnN0IHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSA9ICgpID0+IHtcclxuICAgICAgICBhZGRFbWFpbEJ0bi5zdHlsZS5kaXNwbGF5ID0gIGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlKGVtYWlsc1NlY3Rpb24sICcuaW5wdXQtLXByb2ZpbGUtZW1haWwgPiBpbnB1dCcpID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdGhlIGZvcm0sIHRvIGFkZCByZW1vdmUgbGlzdGVuZXJzIHRvXHJcbiAgICBjb25zdCBjb250YWN0UHJvZmlsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wcm9maWxlLWZvcm0nKTsgICBcclxuXHJcbiAgICBbLi4ucmVtb3ZlRW1haWxCdXR0b25zLCAuLi5yZW1vdmVQaG9uZUJ1dHRvbnNdLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5hZGQoJ2lucHV0X193aXRoYWN0aW9uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZW1vdmUgZXhjZXNzIGlucHV0cyBvZiB0aGVzZSB0eXBlcyBvbiBsb2FkIChBZGRlZCBmb3Igbm9uIGpzIHB1cnBvc2VzKS5cclxuICAgIFtcIi5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0XCIsIFwiLmlucHV0LS1wcm9maWxlLWVtYWlsID4gaW5wdXRcIl0uZm9yRWFjaChzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzRm9yU2VsZWN0b3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0c0ZvclNlbGVjdG9yLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgaW5wdXRzRm9yU2VsZWN0b3IuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmUnLCAnSW5wdXQuUGVyc29uYWxQaG9uZU51bWJlcnMnKTtcclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNldCBjb3JyZWN0IHN0YXJ0IHN0YXRlIGZvciBlbWFpbCBhbmQgcGhvbmUgYWRkIGJ1dHRvbnNcclxuICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcblxyXG4gICAgLy8gQWRkIGEgbmV3IHBob25lIHJvd1xyXG4gICAgZnVuY3Rpb24gbmV3UGhvbmVSb3coKSB7ICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UGhvbmUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3UGhvbmUuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1waG9uZVwiO1xyXG4gICAgICAgIG5ld1Bob25lLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybV9faW5wdXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBwaG9uZSBudW1iZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSBidG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmVcIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWVsZC12YWxpZGF0aW9uLXZhbGlkXCIgZGF0YS12YWxtc2ctZm9yPVwicGhvbmVfdmFsaWRhdGlvblwiIGRhdGEtdmFsbXNnLXJlcGxhY2U9XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Bob25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBnYXBzIGluIGluZGV4IHNlcXVlbmNlc1xyXG4gICAgZnVuY3Rpb24gX3JlbnVtYmVySW5wdXRzKHNlbGVjdG9yLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wID0gaW5wdXQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wLmlkID0gYCR7aWRlbnRpZmllcn1fJHtpbmRleH1fYDtcclxuICAgICAgICAgICAgaW5wLm5hbWUgPSBgJHtpZGVudGlmaWVyfVske2luZGV4fV1gO1xyXG4gICAgICAgICAgICBjb25zdCBzcG4gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsbXNnLWZvcicsIGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGEgbmV3IGVtYWlsIHJvd1xyXG4gICAgZnVuY3Rpb24gbmV3RW1haWxSb3coKSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0VtYWlsUm93ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1lbWFpbFwiOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhbiBlbWFpbCBhZGRyZXNzXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1yZW1vdmUgIGJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbFwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJlbWFpbF92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3RW1haWxSb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2lyZSB1cCB0aGUgYnV0dG9uIGxpc3RlbmVyc1xyXG4gICAgYWRkUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCdzZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3UGhvbmVSb3coKSk7XHJcbiAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmUnLCAnSW5wdXQuUGVyc29uYWxQaG9uZU51bWJlcnMnKTtcclxuICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRFbWFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChuZXdFbWFpbFJvdygpKVxyXG4gICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgICAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pOyAgXHJcblxyXG4gICAgLy8gSGFuZGxlIHRoZSByZW1vdmUgb24gdGhlIHBhcmVudCBmb3JtLCBzbyB0aGF0IHdpbGwgd29yayBmb3IgbmV3IGl0ZW1zIGFkZGVkIGFmdGVyIGxvYWQuXHJcbiAgICBjb250YWN0UHJvZmlsZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykgIHx8IGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHZXQgYWxsIHRoZSBpbnB1dHMgaW4gdGhlIHBhcmVudCBzZWN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0cyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgYmxhbmsgaXQgLSBlbHNlIHJlbW92ZSBpdFxyXG4gICAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzWzBdLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBhcmVudCBmb3JtIGdyb3VwIGNvbnRhaW5pbmcgZW1haWwgb3IgcGhvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtR3JvdXAucmVtb3ZlKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpIHtcclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmUnLCAnSW5wdXQuUGVyc29uYWxQaG9uZU51bWJlcnMnKTtcclxuICAgICAgICAgICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgICAgICAgICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzZWFyY2ggc3RhZmYgcGFnZS5cclxuKi9cclxuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XHJcbmltcG9ydCBEcmFmdE1lc3NhZ2VEcmF3ZXIgZnJvbSAnLi4vRHJhZnRNZXNzYWdlRHJhd2VyJztcclxuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi4vTGF6eUxvYWRlcic7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1pbmRleCcpKSB7XHJcblxyXG4gIGNvbnN0IGlkU2ggPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xyXG4gIGNvbnN0IGRtZCA9IG5ldyBEcmFmdE1lc3NhZ2VEcmF3ZXIoaWRTaC5nZXRDb3VudCgpKTtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcblxyXG4gIGNvbnN0IGFsbENoZWNrYm94ZXNJblRhYmxlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RhYmxlLXNlbGVjdC1zdGFmZiBbdHlwZT1jaGVja2JveF1cIikpO1xyXG5cclxuICAvLyBDaGVjayBhbGwgaXRlbXMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkID0gYWxsQ2hlY2tib3hlc0luVGFibGUuZmlsdGVyKGNiID0+IGlkU2guaGFzSWQoY2IudmFsdWUpKTtcclxuICBpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkLmZvckVhY2goaSA9PiBpLmNoZWNrZWQgPSB0cnVlKTtcclxuXHJcbiAgY29uc3QgYWxsQ2hlY2tib3hlc1NlbGVjdGVkID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUuZXZlcnkoY2IgPT4gY2IuY2hlY2tlZCk7XHJcbiAgXHJcbiAgLy8gY29uc3QgYWxsQ29udGFjdElkcyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiBjYi52YWx1ZSk7XHJcbiAgY29uc3QgYWxsQ29udGFjdHMgPSAoKSA9PiBhbGxDaGVja2JveGVzSW5UYWJsZS5tYXAoY2IgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IGNiLnZhbHVlLFxyXG4gICAgICBuYW1lOiBjYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJylcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVXNlcyBhIHBhc3NlZCBpbiAnY29tYmluZXInIGZ1bmN0aW9uIHRvIGRlY2lkZWQgaG93IHRvIGVpdGhlciBhZGQgb3IgcmVtb3ZlIHNlbGVjdGVkIHJlc3VsdHMgdG8gdGhvc2UgZnJvbSBvdGhlciBwYWdlcy5cclxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UgPSAoY29tYmluZUZuKSA9PiB7XHJcbiAgICBjb25zdCBhbGxDb250YWN0c0Rpc3BsYXllZCA9IGFsbENvbnRhY3RzKCk7XHJcbiAgICBjb25zdCBleGlzdGluZ0NvbnRhY3RzID0gaWRTaC5nZXRJdGVtcygpO1xyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBjb21iaW5lRm4oZXhpc3RpbmdDb250YWN0cywgYWxsQ29udGFjdHNEaXNwbGF5ZWQpOyAgXHJcblxyXG4gICAgaWRTaC5zZXRJdGVtcyhuZXdJdGVtcyk7XHJcbiAgICBkbWQudXBkYXRlKG5ld0l0ZW1zLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgYWxsIHRoZSBpZHMgdGhhdCB3ZXJlIGNvbnRhaW5lZCBpbiB0aGlzIHJlc3VsdHMgcGFnZS4gIEtlZXAgcmVzdWx0IGZyb20gb3RoZXIgcGFnZXMgc2VsZWN0ZWRcclxuICBjb25zdCBkZXNlbGVjdEFsbCA9ICh0b0Rlc2VsZWN0KSA9PiB7XHJcbiAgICB0b0Rlc2VsZWN0LmZvckVhY2godG9EZXNlbGVjdCA9PiB0b0Rlc2VsZWN0LmNoZWNrZWQgPSBmYWxzZSk7XHJcbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IGV4aXN0aW5nSXRlbXMuZmlsdGVyKCh7aWR9KSA9PiAhYWxsSXRlbXNGb3JHcm91cC5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpKTtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxyXG4gIGNvbnN0IHNlbGVjdEFsbCA9ICh0b1NlbGVjdCkgPT4ge1xyXG4gICAgdG9TZWxlY3QuZm9yRWFjaCh0b1NlbGVjdCA9PiB0b1NlbGVjdC5jaGVja2VkID0gdHJ1ZSk7ICAgIFxyXG5cclxuICAgIGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSgoZXhpc3RpbmdJdGVtcywgYWxsSXRlbXNGb3JHcm91cCkgPT4ge1xyXG5cclxuICAgICAgLy8gZ2V0IGFsbCBpdGVtcyBvbiB0aGUgcGFnZSBub3QgaW4gdGhlIGV4aXN0aW5nIHJlc3VsdHNcclxuICAgICAgY29uc3QgZ3JvdXBJdGVtc1RvQWRkID0gYWxsSXRlbXNGb3JHcm91cC5maWx0ZXIoKHtpZH0pID0+ICFleGlzdGluZ0l0ZW1zLm1hcChpID0+IGkuaWQpLmluY2x1ZGVzKGlkKSk7XHJcblxyXG4gICAgICAvLyBNZXJnZSB0aGUgbmV3IGl0ZW1zIGluXHJcbiAgICAgIHJldHVybiBbLi4uZXhpc3RpbmdJdGVtcywgLi4uZ3JvdXBJdGVtc1RvQWRkXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgIFxyXG5cclxuICAgIHRhcmdldC5jaGVja2VkID9cclxuICAgICAgc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKSA6XHJcbiAgICAgIGRlc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NiU2VsZWN0QWxsIFt0eXBlPWNoZWNrYm94XScpO1xyXG4gIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xyXG4gICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlKTtcclxuXHJcbiAgICBpZiAoYWxsQ2hlY2tib3hlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2Vyc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLXNlbGVjdC1zdGFmZicpO1xyXG4gIGxldCB1c2Vyc1RhYmxlQm9keTtcclxuICBpZih1c2Vyc1RhYmxlKSB7XHJcbiAgIHVzZXJzVGFibGVCb2R5ID0gdXNlcnNUYWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gIGNvbnN0IGNyaXRlcmlhS2V5ID0gJ2NyaXRlcmlhJztcclxuICBcclxuICBsZXQgc2VhcmNoQ3JpdGVyaWFTdHJpbmcgPSB1cmxQYXJhbXMuaGFzKGNyaXRlcmlhS2V5KSA/IGA/Y3JpdGVyaWE9JHt1cmxQYXJhbXMuZ2V0KGNyaXRlcmlhS2V5KX1gIDogJyc7XHJcblxyXG4gIGNvbnN0IGdldFNlYXJjaEVuZHBvaW50ID0gKCkgPT4gYCR7bG9jYXRpb24ub3JpZ2lufS9Gb3JjZS9Db250YWN0cy8ke2N1cnJlbnRQYWdlfSR7c2VhcmNoQ3JpdGVyaWFTdHJpbmd9YDtcclxuICBcclxuICAvLyBBZGQgbGlzdGVuZXJzIGZvciB0aGUgY2hlY2tib3hlc1xyXG4gIGNvbnN0IHN0YWZmVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcblxyXG4gIGlmIChzdGFmZlRhYmxlKSB7XHJcbiAgICBzdGFmZlRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICh7dGFyZ2V0fSkgPT4ge1xyXG4gICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0LmNoZWNrZWQgPyBpZFNoLmFkZCh0YXJnZXQudmFsdWUsIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJykpIDogaWRTaC5yZW1vdmUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgdW5jaGVja2VkIGRlc2VsZWN0IHRoZSBjaGVjayBhbGwuXHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbENoZWNrYm94ZXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgY2hlY2tlZCBzZWUgaWYgYWxsIGFyZSBub3cgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgIH0gIFxyXG5cclxuICBjb25zdCBjcmVhdGVDaGVja2JveEZpZWxkID0gKHZhbHVlLCBjaGVja2VkLCBuYW1lKSA9PiB7ICBcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jZWxsJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJywgbmFtZSk7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlQ2VsbFdpdGhUZXh0ID0gdGV4dCA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUm93ID0gdXNlciA9PiB7XHJcbiAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5uYW1lKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuY29sbGFyKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuZW1haWwpKTtcclxuICAgIGNvbnN0IHBob25lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjb25zdCBwaG9uZVRleHROb2RlICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHVzZXIucGhvbmVOdW1iZXJDb3VudCA+IDEgPyBgICR7dXNlci5waG9uZU51bWJlcn1gIDogdXNlci5waG9uZU51bWJlcik7XHJcbiAgICBcclxuICAgIGlmICh1c2VyLnBob25lTnVtYmVyQ291bnQgPiAxKSB7XHJcbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcclxuICAgICAgYmFkZ2UuY2xhc3NMaXN0LmFkZCgnYmFkZ2UnKTtcclxuICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSB1c2VyLnBob25lTnVtYmVyQ291bnQ7XHJcbiAgICAgIHBob25lQ2VsbC5hcHBlbmRDaGlsZChiYWRnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGhvbmVDZWxsLmFwcGVuZENoaWxkKHBob25lVGV4dE5vZGUpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKHBob25lQ2VsbCk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3hGaWVsZCh1c2VyLmlkLCBpZFNoLmhhc0lkKHVzZXIuaWQpLCB1c2VyLm5hbWUpKTtcclxuXHJcbiAgICB1c2Vyc1RhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUmVzdWx0Um93cyA9IHJvd3MgPT4ge1xyXG4gICAgcm93cy5mb3JFYWNoKGFkZFJvdyk7XHJcbiAgfVxyXG5cclxuICBpZiAobG9hZGVyKSB7XHJcblxyXG4gICAgY29uc3QgbG9hZGVyUGFnZVNpemUgPSBsb2FkZXIuZ2V0QXR0cmlidXRlKFwicGFnZS1zaXplXCIpO1xyXG5cclxuICAgIG5ldyBMYXp5TG9hZGVyKGxvYWRlciwgYXN5bmMgZG9uZSA9PiB7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBuZXh0IHBhZ2UgaW5kZXhcclxuICAgICAgICBjdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0U2VhcmNoRW5kcG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIHNlYXJjaFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGVuZHBvaW50KTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSZXN1bHRzID0gcmVzdWx0cy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAvLyBXZSBkb250IGtub3cgaWYgdGhlcmUgd2lsbCBiZSBtb3JlIHJlc3VsdHMsIGJ1dCBpdHMgbGlrZWx5IGlmIHdlIHJldHVybiBhIGZ1bGwgcGFnZSBvZiByZXN1bHRzXHJcbiAgICAgICAgbGV0IG1vcmVSZXN1bHRzTGlrZWx5ID0gaGFzUmVzdWx0cztcclxuICAgICAgICBpZiAobG9hZGVyUGFnZVNpemUpIHtcclxuICAgICAgICAgIC8vIFdlIG1heSBub3QgaGF2ZSB0aGlzIGF0dHJpYnV0ZSwgYnV0IGlmIHdlIGRvIGNoZWNrIGlmIHRoZSBwYWdlIGlzIGZ1bGwuIElmIG5vdCB0aGVyZSBzaG91bGQgYmUgbm8gbW9yZSByZXN1bHRzIHRvIGZldGNoXHJcbiAgICAgICAgICBtb3JlUmVzdWx0c0xpa2VseSA9IHJlc3VsdHMubGVuZ3RoID09PSBwYXJzZUludChsb2FkZXJQYWdlU2l6ZSwgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc1Jlc3VsdHMpIHsgICAgICAgICAgXHJcbiAgICAgICAgICBhZGRSZXN1bHRSb3dzKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9uZShtb3JlUmVzdWx0c0xpa2VseSk7ICBcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlKSB7ICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbGF6eSBsb2FkIHBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgQUQgdXNlcnNgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIC8vIElnbm9yZSBjdXJyZW50IGZhaWxlZCBwYWdlLCBzbyB3aWxsIHRyeSBhZ2FpblxyXG4gICAgICAgIGN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgZG9uZSh0cnVlKTsgLy8gQ2FsbCBkb25lIHdpdGggbW9yZSB0byBsb2FkLlxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgdG8gZG8gaGVyZS4gSWYgZW5wb2ludCBpcyBkb3duLCB3ZSB3b3VsZCBnZXQgbG90cyBvZiBjb25zb2xlIGVycm9ycyBhdCB0aGUgbW9tZW50Li4uLlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSwgeyBkZWJ1ZzogZmFsc2UsIHBlZWtEaXN0YW5jZTogNTAgfSk7XHJcbiAgfSAgXHJcbn1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiAgSGFuZGxlIHRoZSBjbGlja2luZyBvZiBhIHNlYXJjaCBmaWVsZHMgeCBpY29uLiAgXHJcbiAqICBCbGFua3MgdGhlIGZpZWxkIGFuZCBvcHRpb25hbGx5IHJlZGlyZWN0IG1pbnVzIHF1ZXJ5IHN0cmluZyBwYXJhbVxyXG4gKiAgc3BlY2lmaWVkIG9uIHRoZSBzcGFuLmZvcm1fX2lucHV0LS1jbGVhciAoZGF0YS1wYXJhbS1uYW1lKVxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKiBCdWlsZCBhbmQgcmVkaXJlY3QgdG8gcGF0aCBtaW51cyB0aGUgc3BlY2lmaWVkIHBhcmFtIG5hbWUgaW4gcXVlcnkgc3RyaW5nICovXHJcbmZ1bmN0aW9uIHJlZGlyZWN0V2l0aG91dFNlYXJjaChwYXJhbU5hbWUpIHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgY29uc3Qge29yaWdpbiwgcGF0aG5hbWV9ID0gd2luZG93LmxvY2F0aW9uO1xyXG4gICAgdXJsUGFyYW1zLmRlbGV0ZShwYXJhbU5hbWUpO1xyXG4gICAgY29uc3QgbmV3Q3JpdGVyaWEgPSB1cmxQYXJhbXMudG9TdHJpbmcoKSA/IGA/JHt1cmxQYXJhbXN9YCA6ICcnOyAgICBcclxuICAgIGNvbnN0IG5ld1BhdGggPSBgJHtvcmlnaW59JHtwYXRobmFtZX0ke25ld0NyaXRlcmlhfWA7XHJcbiAgICBcclxuICAgIC8vIE9ubHkgcmVkaXJlY3QgaWYgcGFyYW1zIHdpdGggY2hhbmdlIGkuZS4gbm90IGp1c3QgY2xlYXJpbmcgc2VhcmNoIGZpZWxkXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgIT09IG5ld1BhdGgpIHsgICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obmV3UGF0aCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIENsZWFyIGEgc2VhcmNoIGZpZWxkIHdoZW4gdGhlIGlucHV0cyBjbGVhciBidXR0b24gaXMgY2xpY2tlZCAqL1xyXG5mdW5jdGlvbiBjbGVhclNlYXJjaChlKSB7XHJcbiAgICB2YXIgdG9DbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLS1zZWFyY2ggPiAuZm9ybV9faW5wdXQtLXNlYXJjaCcpO1xyXG4gICAgdG9DbGVhci5mb3JFYWNoKHRjID0+IHRjLnZhbHVlID0gJycpO1xyXG5cclxuICAgIC8vIFRvZG8gdHJ5IGFuZCBnZXQgYXR0cmlidXRlLCBhbmQgcmVkaXJlY3QgaWYgaGFzIGl0LlxyXG4gICAgY29uc3QgcGFyYW1Ub1JlbW92ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbS1uYW1lJyk7XHJcbiAgICBpZiAocGFyYW1Ub1JlbW92ZSkge1xyXG4gICAgICAgIHJlZGlyZWN0V2l0aG91dFNlYXJjaChwYXJhbVRvUmVtb3ZlKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGNsZWFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19pbnB1dC0tY2xlYXInKTtcclxuXHJcbmNsZWFyQnV0dG9ucy5mb3JFYWNoKGNiID0+IGNiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJTZWFyY2gpKTsiLCIvKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLFxyXG50b2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuXHJcbi8vIGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbi8vICAgIHZhciBhc2lkZUV4aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKTtcclxuLy8gICAgIGlmKGFzaWRlRXhpc3Qpe1xyXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFzaWRlLS1hY3RpdmVcIik7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIG1lbnUgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcclxuICAgIHZhciBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcGRvd24tY29udGVudFwiKTtcclxuICAgIHZhciBpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgb3BlbkRyb3Bkb3duID0gZHJvcGRvd25zW2ldO1xyXG4gICAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcclxuXHJcbmNvbnN0IHRvZ2dsZUFjdGl2ZVBhbmVsID0gcGFuZWwgPT4ge1xyXG4gIGlmKHNpZGViYXIuaGFzQXR0cmlidXRlKCdkYXRhLWFjdGl2ZScpICYmIHNpZGViYXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScpID09PSBwYW5lbCkge1xyXG4gICAgLy8gQ2xvc2UgdGhlIHNpZGUgYmFyIGlmIGFscmVhZHkgb3BlblxyXG4gICAgc2lkZWJhci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE90aGVyd2lzZSBzaG93IHRoZSBuZXcgcGFuZWxcclxuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsIHBhbmVsKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmNvbnN0IGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG5pZiAoYWRkR3JvdXBCdXR0b24pIHtcclxuXHJcbiAgYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVBY3RpdmVQYW5lbCgnZ3JvdXBzJyk7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgYWRkQXR0cmlidXRlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2F0dHJpYnV0ZVwiKTtcclxuXHJcbmlmIChhZGRBdHRyaWJ1dGVzQnV0dG9uKSB7XHJcblxyXG4gIGFkZEF0dHJpYnV0ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVBY3RpdmVQYW5lbCgnYXR0cmlidXRlcycpO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY2xvc2VTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlX3NpZGViYXInKTtcclxuXHJcbmlmIChjbG9zZVNpZGViYXIpIHtcclxuXHJcbmNsb3NlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNsb3NlU2lkZUJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsb3NlU2lkZUJhcigpIHtcclxuICBzaWRlYmFyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnKTtcclxufSIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlUXVlcnlQYXJhbSA9IHBhcmFtID0+IHtcclxuICAgICAgICBpZih1cmxQYXJhbXMuaGFzKHBhcmFtKSl7XHJcbiAgICAgICAgICAgIHVybFBhcmFtcy5kZWxldGUocGFyYW0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9Pz0ke3VybFBhcmFtcy50b1N0cmluZygpfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWN0UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdDb250YWN0QWRkZWQnKTtcclxuICAgIGNvbnN0IE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcclxuICAgIGNvbnN0IE1lc3NhZ2VTZW50UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdNZXNzYWdlU2VudCcpO1xyXG4gICAgY29uc3QgRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtID0gdXJsUGFyYW1zLmdldCgnRm9yY2VDb250YWN0VXBkYXRlZCcpO1xyXG5cclxuICAgIGxldCBzbmFja2Jhck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBpZiAoY29udGFjdFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdDb250YWN0QWRkZWQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IGNvbnRhY3QgaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE9yZ2FuaXNhdGlvblBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdPcmdhbmlzYXRpb25BZGRlZCcpO1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgb3JnYW5pc2F0aW9uIGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG4gICAgfSBlbHNlIGlmIChNZXNzYWdlU2VudFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICAvKiBcclxuICAgICAgICAgICAgQml0IGhhY2t5LCBidXQgY2xlYXJpbmcgdGhlIHNlc3Npb25TdG9yYWdlIGhlcmUgdG8gY2xlYXIgbWVzc2FnZSBzdGF0ZSBoZXJlLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJDb3VyaWVyTWVzc2FnZVVzZXJzXCIpXHJcbiAgICAgICAgcmVtb3ZlUXVlcnlQYXJhbSgnTWVzc2FnZVNlbnQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTWVzc2FnZSBzZW50JztcclxuICAgIH0gZWxzZSBpZiAoRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtICYmIEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdGb3JjZUNvbnRhY3RVcGRhdGVkJyk7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ1BlcnNvbmFsIGNvbnRhY3QgZGV0YWlscyB1cGRhdGVkJztcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xyXG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxufSkoXCIjc25hY2tiYXJcIik7XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuXHJcbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcclxuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoXCJ0YWJsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==