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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saW5raWZ5LXRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ29tcG9zZVN0YWZmTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ291cmllclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL1NlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzLmpzIl0sIm5hbWVzIjpbIkJvdHRvbURyYXdlciIsIl9vcGVuQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIkRyYWZ0TWVzc2FnZURyYXdlciIsIm51bWJlck9mUmVjaXBpZW50cyIsInRvdGFsU2VsZWN0b3IiLCJjb29raWVIZWxwZXIiLCJTaW1wbGVDb29raWVIZWxwZXIiLCJfdG90YWxzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImdldCIsIkVycm9yIiwiX2JvdHRvbURyYXdlciIsInVwZGF0ZSIsImlubmVyVGV4dCIsInNob3ciLCJoaWRlIiwiZ3JvdXBFeGlzdCIsImdldEVsZW1lbnRCeUlkIiwidXNlQ2hlY2tib3hlcyIsImhhc0F0dHJpYnV0ZSIsInVzZVNpbmdsZVNlbGVjdENoZWNrYm94IiwibG9ja1Jvb3ROb2RlIiwic2VsZWN0b3IiLCJpbnRpYWxseVNlbGVjdGVkTm9kZXMiLCJncm91cFNlbGVjdCIsImdyb3VwVGV4dGFyZWEiLCJ0YWdzU2VlQWxsSGVscGVyIiwicGFyZW50RWxlbWVudCIsInNlbGVjdGVkT3B0aW9uc05vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidmFsdWUiLCJpdGVtTGltaXQiLCJTZWVBbGxIZWxwZXIiLCJjb3VudEZpZWxkSWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJwYXRoVG9VbmNoZWNrIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImNiU2VsZWN0b3IiLCJjaGVjYm94VG9VbmNoZWNrIiwiY2xpY2siLCJyZWNhbGN1bGF0ZSIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJidWlsZENoZWNrYm94IiwicGFyZW50Q2hlY2tlZCIsImNoZWNrYm94IiwidHlwZSIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJpZCIsIm5ld1BhcmVudFNlbGVjdGVkIiwiY2hlY2tlZCIsImRpc2FibGVkIiwibmV3Q2hlY2tlZCIsImluZGV4T2YiLCJsYWJlbCIsImNoZWNrU3BhbiIsImJvcmRlclNwYW4iLCJhcHBlbmRDaGlsZCIsImJ1aWxkQ2hlY2tib3hMYWJlbCIsImNoZWNrYm94TGFiZWwiLCJpbm5lckhUTUwiLCJmb3IiLCJ0cmFuc2ZlclZhbHVlcyIsImRhdGEiLCJlbGVtcyIsInBvcHVsYXRlR3JvdXBGaWVsZCIsInRleHRhcmVhIiwiZWxlbWVudCIsImV4aXN0aW5nT3B0aW9uVmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwib3B0aW9ucyIsIm1hcCIsIm9wdCIsImRhdGFfaSIsImRhdGFfY3VycmVudCIsInN1YnN0cmluZyIsIm5ld09wdGlvbiIsInNlbGVjdGVkIiwiYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlIiwicGFyZW50IiwiY2hlY2tib3hSZXN1bHQiLCJmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50IiwiY3VycmVudCIsImNoaWxkcmVuIiwidXBkYXRlckZuIiwiY3VycmVudExvb3BDaGlsZCIsImhhbmRsZUNoZWNrYm94Q2xpY2siLCJwYXJlbnRMaSIsInBhcmVudE5vZGUiLCJhbGxHcm91cENoZWNrYm94ZXMiLCJjaGVja2JveFRvVXBkYXRlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZENoZWNrYm94ZXMiLCJoaWRkZW5GaWVsZCIsInN0cnVjdHVyZSIsIm9wdGlvbl9pIiwib3B0aW9uIiwic2VnbWVudHMiLCJzcGxpdCIsIm5vZGVUb0NoZWNrIiwic2VnbWVudF9pIiwic2VnIiwidHJlZUNvbnRhaW5lciIsImFjdGl2ZUNoaWxkcmVuIiwiYWNfaSIsImFjdGl2ZUNoaWxkIiwiZGlzcGxheUNoaWxkS2V5cyIsImN1cnJUZXh0IiwiY3VyclBhdGgiLCJvYmoiLCJlbGVtZW50VG9BZGRUbyIsImxldmVsIiwicGFyZW50c0NoZWNrZWQiLCJjaGlsZEtleXMiLCJPYmplY3QiLCJrZXlzIiwicGFyZW50Q2hlY2tlZFN0YXRlIiwiY2hpbGRMaXN0SXRlbSIsImNoaWxkTGlzdCIsImNrX2kiLCJjaGlsZEtleSIsInJlcGxhY2VDaGlsZCIsIklkU2Vzc2lvblN0b3JhZ2VIZWxwZXIiLCJfbmFtZSIsImluaXRpYWwiLCJfaW5pdGlhbGlzZSIsIl9pdGVtcyIsIk1hcCIsImZvckVhY2giLCJzZXQiLCJzZWxlY3RlZEl0ZW1zSnNvbiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIl9wZXJzaXN0IiwiSlNPTiIsInBhcnNlIiwiaXRlbXMiLCJnZXRJdGVtcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJpZHMiLCJpZHNUb0tlZXAiLCJnZXRJZHMiLCJpbmNsdWRlcyIsInNpemUiLCJkZWxldGUiLCJlbnRyaWVzIiwiaGFzIiwic2V0SXRlbXMiLCJDb3VyaWVyTGF6eUxvYWRlciIsImxvYWRlckVsZW1lbnQiLCJsb2FkZXJGbiIsImNvbmZpZ09iaiIsImNvbmZpZ0RlZmF1bHRzIiwibG9hZGVyQ2xhc3MiLCJsb2FkZXJMb2FkaW5nQ2xhc3MiLCJkZWJvdW5jZU1zIiwicGVla0Rpc3RhbmNlIiwiZGVidWciLCJfbG9hZGVyIiwiX2xvYWRlckZ1bmMiLCJfbWFpbiIsIl9jb25maWciLCJfaGFzTGlzdGVuZXJzQWRkZWQiLCJfbGF6eUxvYWRDaGVjayIsImRlYm91bmNlIiwiX2RvTG9hZE1vcmVDaGVjayIsIl9jb25kaXRpb25hbERlYnVnTG9nIiwiX3N0b3BMaXN0ZW5pbmciLCJfZG9uZVNlYXJjaGluZyIsIl9zdGFydExpc3RlbmluZyIsImJpbmQiLCJ2aXNpYmxlIiwibW9yZVRvTG9hZCIsIl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9EZWJ1ZyIsImxvZ2dlckZ1bmMiLCJjb25zb2xlIiwibG9nIiwiaGlnaGVzdFZpc2libGVZUG9zIiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkTW9yZVRyaWdnZXJQb3MiLCJNYXRoIiwibWluIiwib2Zmc2V0VG9wIiwicGVla1Bvc2l0aW9uVmlzaWJsZSIsInNob3VsZExvYWRNb3JlIiwidGFibGUiLCJTZWVBbGxBdHRyaWJ1dGVIZWxwZXIiLCJzaG93TW9yZUJ1dHRvbnMiLCJzaG93QWxsQnV0dG9uIiwiY29udGFpbmVySWQiLCJpdGVtU2VsZWN0b3IiLCJzaG93QWxsSXRlbUxpbWl0Iiwic2hvd0FsbEl0ZW1Db3VudElkIiwiYnV0dG9uSWQiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzZWxlY3RvclRvVXNlIiwidGFnTmFtZSIsImVycm9yIiwicGFyc2VkSXRlbUxpbWl0IiwicGFyc2VJbnQiLCJpc05hTiIsIml0ZW1zU2VsZWN0b3IiLCJzZWVBbGxTZWxlY3RvciIsInBhc3NlZE9wdGlvbnMiLCJfaXRlbXNTZWxlY3RvciIsIl9zZWVBbGwiLCJfb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGwiLCJkZWZhdWx0cyIsInNob3dMZXNzVGV4dCIsIl9vcHRpb25zIiwiX2l0ZW1MaW1pdCIsIl9zaG93TGVzc1RleHQiLCJfc2hvd01vcmVUZXh0IiwiX2NvdW50RmllbGQiLCJfc2hvd2luZ0FsbCIsIl9oaWRlRXhjZXNzSXRlbXMiLCJfc2hvd0FsbEl0ZW1zIiwiX2FsbEl0ZW1zIiwiaXRlbSIsIl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zIiwiaW5kZXgiLCJ0b0NoZWNrIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaWx0ZXIiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwicmVwb2x1bGF0ZVRhZ3MiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3ZhbHVlIiwibmV3Q29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzcG9uc2VzIiwicmVzcG9uc2VzTGlzdCIsInJlc3BvbnNlIiwiaWR4IiwidHJpbSIsInNob3dGaXJzdEVtcHlJdGVtIiwiY3VycmVudFJlc3BvbnNlIiwiY29weUl0ZW1zRm9yd2FyZCIsInByZXZJbnB1dCIsImlucHV0IiwicmVtb3ZlTGFzdEVtcHR5SXRlbSIsInJlbW92ZUlkeCIsImFkZFJlc3BvbnNlQnV0dG9uIiwiZWwiLCJibHVyIiwiYWRkUGhvbmVJbnB1dCIsImFkZFBob25lQnV0dG9uIiwiYWRkRW1haWxJbnB1dCIsImFkZEVtYWlsQnV0dG9uIiwiYWRkR3JvdXBCdXR0b24iLCJzYXZlR3JvdXBCdXR0b24iLCJ0YXJnZXQyIiwiaW5wdXRFcnJvcnMiLCJpbnB1dEVycm9yc0FycmF5IiwiY2xvc2VzdCIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic25hY2tiYXJTdG9yYWdlSXRlbSIsImxvY2FsU3RvcmFnZSIsInNuYWNrYmFyIiwic25hY2tiYXJTdG9yYWdlSXRlbUFycmF5IiwibG9jYXRpb25zIiwicm93c1RvTGlua2lmeSIsImhhbmRsZVJvd0NsaWNrIiwiY29sVG9QYXJzZSIsInJvdyIsImNvbCIsIm1lbnUiLCJtZW51QnV0dG9uIiwibWVudUNoaWxkIiwibWFpbiIsImFkZEJ0biIsInN1YmplY3RJbnB1dCIsIm1lc3NhZ2VJbnB1dCIsInJlc2VuZElucHV0IiwicmVzcG9uc2VPcHRpb25zIiwiY29va2llTWVzc2FnZUhlbHBlciIsImNvb2tpZUF1dG9SZXNlbmRIZWxwZXIiLCJjb29raWVSZXNwb25zZUhlbHBlciIsImlkc1Nlc3Npb25IZWxwZXIiLCJnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZyIsIm5vbkVtcHR5T3B0aW9ucyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJqb2luIiwiZmlsdGVyQnlJZHMiLCJ4Iiwic2VsZWN0T3B0aW9ucyIsInNsdCIsImRpc2NhcmRCdG4iLCJjbGVhckl0ZW1zIiwibmV3UGhvbmVSb3ciLCJuZXdQaG9uZSIsImNsYXNzTmFtZSIsIl9yZW51bWJlcklucHV0cyIsImlkZW50aWZpZXIiLCJpbnB1dHMiLCJpbnAiLCJzcG4iLCJuZXdFbWFpbFJvdyIsImFkZFBob25lQnRuIiwiYWRkRW1haWxCdG4iLCJyZW1vdmVFbWFpbEJ1dHRvbnMiLCJyZW1vdmVQaG9uZUJ1dHRvbnMiLCJlbWFpbHNTZWN0aW9uIiwic2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlIiwicGhvbmVzU2VjdGlvbiIsInNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSIsImhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlIiwic2VjdGlvbiIsImNvbnRhY3RQcm9maWxlRm9ybSIsImlucHV0c0ZvclNlbGVjdG9yIiwiZGlyIiwiZm9ybUdyb3VwIiwiaWRTaCIsImRtZCIsImxvYWRlciIsImFsbENoZWNrYm94ZXNJblRhYmxlIiwiaXRlbXNUaGF0U2hvdWxkQmVTZWxlY3RlZCIsImNiIiwiaGFzSWQiLCJhbGxDaGVja2JveGVzU2VsZWN0ZWQiLCJldmVyeSIsImFsbENvbnRhY3RzIiwiaGFuZGxlU2VsZWN0aW9uZENoYW5nZU1lcmdlIiwiY29tYmluZUZuIiwiYWxsQ29udGFjdHNEaXNwbGF5ZWQiLCJleGlzdGluZ0NvbnRhY3RzIiwibmV3SXRlbXMiLCJkZXNlbGVjdEFsbCIsInRvRGVzZWxlY3QiLCJleGlzdGluZ0l0ZW1zIiwiYWxsSXRlbXNGb3JHcm91cCIsInNlbGVjdEFsbCIsInRvU2VsZWN0IiwiZ3JvdXBJdGVtc1RvQWRkIiwiaGFuZGxlU2VsZWN0QWxsQ2hhbmdlIiwidG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3giLCJ1c2Vyc1RhYmxlIiwidXNlcnNUYWJsZUJvZHkiLCJjdXJyZW50UGFnZSIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiY3JpdGVyaWFLZXkiLCJzZWFyY2hDcml0ZXJpYVN0cmluZyIsImdldFNlYXJjaEVuZHBvaW50Iiwic3RhZmZUYWJsZSIsIm5ld1RvdGFsIiwiY3JlYXRlQ2hlY2tib3hGaWVsZCIsImNlbGwiLCJjcmVhdGVDZWxsV2l0aFRleHQiLCJhZGRSb3ciLCJ1c2VyIiwibmV3Um93IiwiY29sbGFyIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImFkZFJlc3VsdFJvd3MiLCJyb3dzIiwibG9hZGVyUGFnZVNpemUiLCJMYXp5TG9hZGVyIiwiZG9uZSIsImVuZHBvaW50IiwiZmV0Y2giLCJqc29uIiwicmVzdWx0cyIsImhhc1Jlc3VsdHMiLCJtb3JlUmVzdWx0c0xpa2VseSIsInJlZGlyZWN0V2l0aG91dFNlYXJjaCIsInBhcmFtTmFtZSIsIm5ld0NyaXRlcmlhIiwidG9TdHJpbmciLCJuZXdQYXRoIiwiYXNzaWduIiwiY2xlYXJTZWFyY2giLCJ0b0NsZWFyIiwidGMiLCJwYXJhbVRvUmVtb3ZlIiwiY2xlYXJCdXR0b25zIiwib25jbGljayIsImV2ZW50IiwiZHJvcGRvd25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9wZW5Ecm9wZG93biIsInRvZ2dsZVNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJ5IiwicmVtb3ZlUXVlcnlQYXJhbSIsInBhcmFtIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwiY29udGFjdFBhcmFtIiwiT3JnYW5pc2F0aW9uUGFyYW0iLCJNZXNzYWdlU2VudFBhcmFtIiwiRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtIiwic25hY2tiYXJNZXNzYWdlIiwicmVtb3ZlSXRlbSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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LFlBQVU7QUFDakJHLGNBQVEsQ0FBQ3ZWLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGtCQUExQjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKLENBL0NELEVBK0NHLFdBL0NILEU7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlIiwiZmlsZSI6ImRpc3QvanMvc2NyaXB0cy5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qXHJcbiBDbGFzcyB0aGF0IGZhY2lsaXRhdGUgdGhlIGhpZGluZyBhbmQgc2hvd2luZyBvZiB0aGUgYm90dG9tIGJhci5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX29wZW5DbGFzcyA9IFwiYm90dG9tLWRyYXdlci1vcGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgQm90dG9tRHJhd2VyIGZyb20gJy4vQm90dG9tRHJhd2VyJztcclxuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuL1NpbXBsZUNvb2tpZUhlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFmdE1lc3NhZ2VEcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZSZWNpcGllbnRzLCB0b3RhbFNlbGVjdG9yPVwiLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190b3RhbFwiKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvdGFsU2VsZWN0b3IpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdGl0bGUnKS50ZXh0Q29udGVudCA9IGNvb2tpZUhlbHBlci5nZXQoKSB8fCAnVW50aXRsZWQnO1xyXG4gICAgICAgIGlmICghdGhpcy5fdG90YWxzRWxlbWVudCkgeyB0aHJvdyBFcnJvcihgTm8gZWxlbWVudCBtYXRjaGluZyB0aGUgcGFzc2VkIGluIHNlbGVjdG9yICR7dG90YWxTZWxlY3Rvcn1gKTsgfVxyXG4gICAgICAgIHRoaXMuX2JvdHRvbURyYXdlciA9IG5ldyBCb3R0b21EcmF3ZXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICB1cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudC5pbm5lclRleHQgPSBudW1iZXJPZlJlY2lwaWVudHM7XHJcbiAgICAgICAgbnVtYmVyT2ZSZWNpcGllbnRzID8gdGhpcy5fYm90dG9tRHJhd2VyLnNob3coKSA6IHRoaXMuX2JvdHRvbURyYXdlci5oaWRlKCk7XHJcbiAgICB9XHJcbn0iLCIgaW1wb3J0IHtTZWVBbGxIZWxwZXJ9IGZyb20gJy4vU2VlQWxsSGVscGVyJztcclxuIFxyXG4gdmFyIGdyb3VwRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwXCIpO1xyXG4gICAgaWYoZ3JvdXBFeGlzdCl7XHJcblxyXG4gICAgICAgIHZhciB1c2VDaGVja2JveGVzID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtc2luZ2xlLXNlbGVjdC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciBsb2NrUm9vdE5vZGUgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2NrLXJvb3QnKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgLy9DaGVjayBvbiBwYWdlIHdoZXRoZXIgR3JvdXAgTXVsdGkgU2VsZWN0IGV4aXN0c1xyXG4gICAgdmFyIGludGlhbGx5U2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFNlbGVjdG9yXCIpO1xyXG4gICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcbiAgICBcclxuICAgIGxldCB0YWdzU2VlQWxsSGVscGVyID0gbnVsbDtcclxuXHJcbiAgICAvLyBJZiB0aGUgR3JvdXAgTXVsdGkgU2VsZWN0IGRvZXMgZXhpc3QsIGhpZGUgaXQgKGlmIEpTIGVuYWJsZWQpXHJcbiAgICBpZiAoZ3JvdXBTZWxlY3QgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEdyYWIgYWxsIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZFxyXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnNOb2RlcyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRPcHRpb25zTm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgIGludGlhbGx5U2VsZWN0ZWROb2Rlcy5wdXNoKHNlbGVjdGVkT3B0aW9uc05vZGVzW2ldLnZhbHVlIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1MaW1pdCA9IDIxO1xyXG5cclxuICAgICAgICB0YWdzU2VlQWxsSGVscGVyICA9IG5ldyBTZWVBbGxIZWxwZXIoJyNHcm91cFRleHRhcmVhID4gLnRhZycsICcjc2VlTW9yZUdyb3VwcycsIHsgaXRlbUxpbWl0LCBjb3VudEZpZWxkSWQ6ICdncm91cHNDb3VudCcgfSk7XHJcblxyXG4gICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi50YWc+LmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhUb1VuY2hlY2sgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYlNlbGVjdG9yID0gJ2lucHV0W3R5cGU9Y2hlY2tib3hdLkdyb3VwSXRlbVt2YWx1ZT1cIicrcGF0aFRvVW5jaGVjaysnXCJdJztcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjYm94VG9VbmNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjYm94VG9VbmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2JveFRvVW5jaGVjay5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWFyY2hQYXJ0cyA9IChmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xyXG4gICAgICAgIHZhciB2YXJzID0ge307XHJcbiAgICAgICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCBmdW5jdGlvbihtLGtleSx2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2dyb3VwPVwiO1xyXG4gICAgdmFyIGdyb3VwUGFyYW0gPSBzZWFyY2hQYXJ0cy5ncm91cDtcclxuICAgIHZhciBzZWFyY2hQYXJhbSA9IHNlYXJjaFBhcnRzLlNlYXJjaDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBidWlsZCB0aGUgcGF0aFxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVBhdGhGb3JHcm91cChncm91cCkge1xyXG4gICAgICB2YXIgZ3JwID0gZ3JvdXAgPT09IFwiXCIgPyBcIlxcXFxcIiA6IGdyb3VwO1xyXG4gICAgICByZXR1cm4gcGFnZVBhdGggKyBncnA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkIHNob3VsZCBiZSBvcGVuIGkuZS4gdG8gcmV2ZWFsIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIHNob3VsZFBhcmVudEJlT3BlbihwYXRoKSB7XHJcbiAgICAgICAgaWYgKCFncm91cFBhcmFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggKyBcIlxcXFxcIik7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwUGFyYW0uc3RhcnRzV2l0aChwYXRoVG9DaGVjaykgJiYgZ3JvdXBQYXJhbSAhPSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGRlZCBpcyB0aGUgY3VycmVudGx5U2VsZWN0ZWRHcm91cFxyXG4gICAgZnVuY3Rpb24gaXNTZWxlY3RlZEdyb3VwKHBhdGgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zVG9DaGVjayA9IGRlY29kZVVSSUNvbXBvbmVudChncm91cFBhcmFtIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCB8fCBcIlxcXFxcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXNUb0NoZWNrID09PSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgbGluayBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZExpbmsodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgbGluay5ocmVmID0gZ2V0UGFnZVBhdGhGb3JHcm91cChwYXRoKTtcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlua1wiKTtcclxuXHJcbiAgICAgICAgLy8gTkIuICBPcmlnaW5hbGx5IHdlIGRpZG50IHdhbnQgdGhlIGN1cnJlbnQgY2xhc3MgdG8gYmUgYWRkZWQgaWYgZG9pbmcgYSBzZWFyY2gsIGJ1dCB0aGluayB3ZSBkbyBub3cuXHJcbiAgICAgICAgLy8gaWYgKCghc2VhcmNoUGFyYW0pICYmICBpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcclxuICAgICAgICAvLyBpZiAoaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XHJcbiAgICAgICAgLy8gICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gbGluaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggbGFiZWwgZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiR3JvdXBJdGVtXCIpO1xyXG4gICAgICAgIGNoZWNrYm94Lm5hbWUgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94LnZhbHVlID0gcGF0aDtcclxuICAgICAgICBjaGVja2JveC5pZCA9IHRleHQ7XHJcbiAgICAgICAgdmFyIG5ld1BhcmVudFNlbGVjdGVkID0gcGFyZW50Q2hlY2tlZDtcclxuXHJcbiAgICAgICAgaWYgKHBhdGggPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGRpc2FibGVkIGFuZCBjaGVja2VkIEJVVCB0aGUgY2hpbGRyZW4gb2YgdGhpcyBub2RlIHNob3VsZCBhY3QgYXMgdGhvdWdoIGl0IGlzbnQgY2hlY2tlZCBzbyB3ZSBkb250IHVwZGF0ZSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENoZWNrZWQgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYWxsIGl0cyBjaGlsZHJlbiBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgbm90IGNoZWNrZWQgaXRzIGNoaWxkcmVuIHNlbGVjdGVkIHN0YXRlIGRlcGVuZCBvbiB0aGUgY2hpbGRzIHZhbHVlLCBhbmQgbm90IGJlIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHZhciBuZXdDaGVja2VkID0gaW50aWFsbHlTZWxlY3RlZE5vZGVzLmluZGV4T2YocGF0aCB8fCAnXFxcXCcpID49IDA7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgICAgICBuZXdQYXJlbnRTZWxlY3RlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdHlsZSBhcyBhIHJhZGlvIGJ1dHRvblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjaGVja1NwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2NoZWNrJyk7XHJcbiAgICAgICAgICAgIHZhciBib3JkZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19ib3JkZXInKTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tTcGFuKTtcclxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoYm9yZGVyU3Bhbik7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19pbnB1dCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveCA9IGxhYmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtjaGVja2JveCwgbmV3UGFyZW50U2VsZWN0ZWR9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjaGVja2JveExhYmVsLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5mb3IgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2tib3hMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFuc2ZlclZhbHVlcygpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgZWxlbXM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Hcm91cEl0ZW0nKVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8ZWxlbXMubGVuZ3RoO2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb2NrUm9vdE5vZGUgJiYgIShlbGVtc1tpXS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOby1vcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbXNbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChlbGVtc1tpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSkge1xyXG5cclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcbiAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR3JvdXBTZWxlY3RvcicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nT3B0aW9uVmFsdWVzID0gQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfaSA9IDA7IGRhdGFfaSA8IGRhdGEubGVuZ3RoOyBkYXRhX2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9jdXJyZW50ID0gZGF0YVtkYXRhX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj5BbGwgQ29udGFjdCBHcm91cHM8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+JyArIGRhdGFfY3VycmVudC5zdWJzdHJpbmcoMSkgKyAnPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgb3B0aW9uIGV4aXN0cyAtIGFkZCBpdCBpZiBub3RcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ09wdGlvblZhbHVlcy5pbmRleE9mKGRhdGFfY3VycmVudCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gZGF0YV9jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhX2N1cnJlbnQ7XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uc1tpXS5zZWxlY3RlZCA9IGRhdGEuaW5kZXhPZihlbGVtZW50Lm9wdGlvbnNbaV0udmFsdWUpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKHBhcmVudCwgdGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIGlmICh1c2VDaGVja2JveGVzIHx8IHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCB0aGUgYmxhbmsgdmFsdWUgZm9yICdBbGwgQ29udGFjdCBHcm91cHMnXHJcbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXFxcXFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRDaGVja2JveExhYmVsKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrYm94UmVzdWx0ID0gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKTtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmNoZWNrYm94KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94UmVzdWx0Lm5ld1BhcmVudFNlbGVjdGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGluayB0byByZWZyZXNoIHBhZ2Ugd2l0aCBzZWxlY3RlZCBub2RlLlxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRMaW5rKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudENoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY3VycmVudCwgY2hpbGRyZW4sIHVwZGF0ZXJGbikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRMb29wQ2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMb29wQ2hpbGQgIT09IGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZXJGbihjdXJyZW50TG9vcENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKGUsIGNoZWNrYm94KSB7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRMaSA9IGNoZWNrYm94LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gY2Fubm90IGJlIGRlc2VsZXRlZC5cclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbGxHcm91cENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGFsbEdyb3VwQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXJlbnRMaS5jbGFzc0xpc3QuY29udGFpbnMoJ2dyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50Jykpe1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjaGlsZENoZWNrYm94ZXMgPSBwYXJlbnRMaS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JhYiB0aGUgc2VsZWN0IGxpc3QgYW5kIGFsbCBvZiBpdHMgb3B0aW9uc1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcblxyXG4gICAgdmFyIGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZ3JvdXBQYXJhbSB8fCAnXFxcXCc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGNvbGxlY3Rpb25zIHdpdGggc3RhcnRpbmcga2V5IGZvciB0aGUgcm9vdC5cclxuICAgIHZhciBzdHJ1Y3R1cmUgPSB7IFwiXFxcXFwiOiB7fSB9O1xyXG5cclxuICAgIC8vIEJ1aWxkIG9uIHRoZSBiYXNlIHN0cnVjdHVyZSBieSBsb29waW5nIHRocm91Z2ggZWFjaCBzZWxlY3QgaXRlbS5cclxuICAgIGZvciAodmFyIG9wdGlvbl9pPTA7IG9wdGlvbl9pPG9wdGlvbnMubGVuZ3RoOyBvcHRpb25faSsrKSB7XHJcblxyXG4gICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW29wdGlvbl9pXTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSB0aGUgZ3JvdXAgbmFtZSBpbnRvIGFsbCBpdHMgcGF0aCBzZWdtZW50c1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBvcHRpb24udGV4dENvbnRlbnQuc3BsaXQoXCJcXFxcXCIpO1xyXG4gICAgICAgICAgICAvLyBTdGFydCBhdCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgbm9kZVRvQ2hlY2sgPSBzdHJ1Y3R1cmVbXCJcXFxcXCJdO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yIGVhY2ggc2VnbWVudCBlbnN1cmUgdGhhdCBhbGwgbGV2ZWxzIG9mIHRoZSBzdHJ1Y3R1cmUgYXJlIGluIHBsYWNlLlxyXG4gICAgICAgICAgICBmb3IgKHZhciBzZWdtZW50X2k9MDsgc2VnbWVudF9pPHNlZ21lbnRzLmxlbmd0aDsgc2VnbWVudF9pKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnID0gc2VnbWVudHNbc2VnbWVudF9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VnICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlVG9DaGVja1tzZWddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrW3NlZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2sgPSBub2RlVG9DaGVja1tzZWddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBiYXNlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHBvcHVsYXRlZFxyXG4gICAgdmFyIHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0LS1yb290XCIpO1xyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgYWxsIHRoZSBjbGlja3MgYXQgdGhlIHBhcmVudCBsZXZlbFxyXG4gICAgdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjaGVja2JveCBpdGVtcyBiZWluZyBzZWxlY3RlZC5cclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljayhlLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgLy8gV2Ugb25seSBjYXJlIGFib3V0IGNsaWNrcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBwYXJlbnRzXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuIG9wZW4gcGFyZW50IGl0ZW0gaXMgY2xpY2tlZCwgY2xvc2UgaXQsIGJ1dCBhbHNvIGFsbCBpdHMgb3BlbiBkZXNjZW5kYW50cy5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZHJlbiA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYWNfaT0wOyBhY19pPGFjdGl2ZUNoaWxkcmVuLmxlbmd0aDsgYWNfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gYWN0aXZlQ2hpbGRyZW5bYWNfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9wZW4gYW55IGNsb3NlZCBwYXJlbnRzIHRoYXQgYXJlIGNsaWNrZWQuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGJ1aWxkcyB0aGUgc2VsZWN0IGxpc3QgZnJvbSB0aGUgcHJldmlvdXMgbm9kZSBzdHJ1Y3R1cmUuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNoaWxkS2V5cyhjdXJyVGV4dCwgY3VyclBhdGgsIG9iaiwgZWxlbWVudFRvQWRkVG8sIGxldmVsLCBwYXJlbnRzQ2hlY2tlZCkge1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudENoZWNrZWRTdGF0ZSA9IHBhcmVudHNDaGVja2VkO1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICghdXNlQ2hlY2tib3hlcyAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggJiYgaXNTZWxlY3RlZEdyb3VwKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgY3VycmVudCBzdGF0ZSB3aGVuIGluIHRoZSAnbGluayBtb2RlJ1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWN1cnJlbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoaWxkS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhdCB0aGUgYm90dG9tIG9mIGEgYnJhbmNoIGkuZS4gbm8gY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGlzIG5vZGUgaGFzIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHNob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3QuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0XCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBDYWxsIHJlY3Vyc2l2ZWx5IHdpdGggdXBkYXRlZCBwYXJhbXMgZm9yIGVhY2ggY2hpbGQgbm9kZVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgY2tfaT0wOyBja19pIDwgY2hpbGRLZXlzLmxlbmd0aDsgY2tfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRLZXkgPSBjaGlsZEtleXNbY2tfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkS2V5ICE9PSAnQWxsIGNvbnRhY3RzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDaGlsZEtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtjaGlsZEtleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzdGFydGluZyBhdCB0aGUgcm9vdC5cclxuICAgIGRpc3BsYXlDaGlsZEtleXMoXCJBbGwgQ29udGFjdCBHcm91cHNcIiwgXCJcIiwgc3RydWN0dXJlW1wiXFxcXFwiXSwgdHJlZUNvbnRhaW5lciwgMSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgdGhlIHNlbGVjdCBsaXN0IHdpdGggdGhlIG5ldyB0cmVlXHJcbiAgICBncm91cFNlbGVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0cmVlQ29udGFpbmVyLCBncm91cFNlbGVjdCk7XHJcblxyXG4gICAgdHJlZUNvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcclxuXHJcbiAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxufSkoXCIjR3JvdXBcIiwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpO1xyXG59XHJcbiIsIi8vIFN0b3JlIHNlbGVjdGVkIHVzZXJzIGluc2lkZSBzZXNzaW9uIHN0b3JhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICBjb25zdCBpbml0aWFsID0gdGhpcy5faW5pdGlhbGlzZSgpO1xyXG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XHJcbiAgICBpbml0aWFsLmZvckVhY2goKHtpZCwgbmFtZX0pID0+IHRoaXMuX2l0ZW1zLnNldChpZCwgbmFtZSkpO1xyXG4gIH1cclxuICBcclxuICAvLyBQb3B1bGF0ZSBzdGFydCBpZHMsIGluaXRpYWxpc2VzIGNvb2tpZSBpZiBub3QgcHJlc2VudFxyXG4gIF9pbml0aWFsaXNlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtc0pzb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRoaXMuX25hbWUpO1xyXG4gICAgaWYgKCFzZWxlY3RlZEl0ZW1zSnNvbikgeyAgICAgICAgICAgICAgIFxyXG4gICAgICB0aGlzLl9wZXJzaXN0KFtdKTsgICBcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VsZWN0ZWRJdGVtc0pzb24pO1xyXG4gIH1cclxuICBcclxuICAvLyBTYXZlIHRoZSBuZXcgaWRzIHRvIHRoZSBzZXNzaW9uIHN0b3JhZ2UgYWZ0ZXIgdXBkYXRlXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgdGhpcy5fcGVyc2lzdChpdGVtcyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNhdmUgdGhlIHBhc3NlZCBpbiBpZHMgdG8gdGhlIGNvb2tpZVxyXG4gIF9wZXJzaXN0KGl0ZW1zKSB7ICAgIFxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9uYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gIH1cclxuICBcclxuICAvLyBTZXQgYWxsIHRoZSBpdGVtcyBpbiBvbmUgaGl0LiBSZXR1cm5zIHRoZSBuZXcgY291bnQuXHJcbiAgc2V0SXRlbXMoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGkgPT4gdGhpcy5faXRlbXMuc2V0KGkuaWQsIGkubmFtZSkpO1xyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cclxuICBnZXRJZHMoKSB7XHJcbiAgICBjb25zdCBpZHMgPSBBcnJheS5mcm9tKHRoaXMuX2l0ZW1zLmtleXMoKSk7XHJcbiAgICByZXR1cm4gaWRzO1xyXG4gIH0gIFxyXG5cclxuICAvLyBSZW1vdmUgYWxsIG1hcCBpdGVtcyB3aG9zZSBpZHMgYXJlIG5vdCBpbiB0aGUgcGFzc2VkIGluIGxpc3RcclxuICBmaWx0ZXJCeUlkcyhpZHNUb0tlZXApIHtcclxuICAgIGNvbnN0IGlkcyA9IHRoaXMuZ2V0SWRzKCk7XHJcbiAgICByZXR1cm4gaWRzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGlmICghaWRzVG9LZWVwLmluY2x1ZGVzKGkpKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gIFxyXG4gIFxyXG4gIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBjdXJyZW50bHkgaW4gdGhlIG1hcC5cclxuICBnZXRDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5zaXplO1xyXG4gIH1cclxuICBcclxuICAvLyBSZW1vdmUgaXRlbSBieSBpdHMgaWQuIFJldHVybiB0aGUgbmV3IGNvdW50XHJcbiAgcmVtb3ZlKGlkKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaWQpOyAgICAgIFxyXG4gICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gIH1cclxuICBcclxuICAvLyBBZGQgb25lIG9yIG1vcmUgaXRlbXMuIFJldHVybnMgdGhlIG5ldyBjb3VudFxyXG4gIGFkZChpZCwgbmFtZSkge1xyXG4gICAgdGhpcy5faXRlbXMuc2V0KGlkLCBuYW1lKTtcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybiBhbGwgaXRlbXMgaW4gYXJyYXkgZm9ybWF0XHJcbiAgZ2V0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pdGVtcy5lbnRyaWVzKCkpLm1hcCgoW2lkLCBuYW1lXSkgPT4gKHsgaWQsIG5hbWUgfSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHRoZSBuYW1lIGZvciBhIHBhc3NlZCBpZFxyXG4gIGdldE5hbWUoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5nZXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gRG9lcyB0aGUgbWFwIGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBpZC5cclxuICBoYXNJZChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmhhcyhpZCk7XHJcbiAgfVxyXG5cclxuICAvLyBFbXB0aWVzIHRoZSBsaXN0IG9mIHNlbGVjdGVkIGl0ZW1zIGluIHRoZSBtYXAuXHJcbiAgY2xlYXJJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnNldEl0ZW1zKFtdKTtcclxuICB9XHJcbn1cclxuIiwiLypcclxuICBUT0RPOiBTd2l0Y2ggdG8gdXNpbmcgaW50ZXJlY3Rpb24gb2JzZXJ2ZXJcclxuKi9cclxuXHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuLyoqXHJcbiAgQ2xhc3MgdG8gbWFuYWdlIHRoZSBsb2FkIG9uIHNjcm9sbCBmdW5jdGlvbmFsaXR5IGZvciBhIHBhZ2UuXHJcbiAgV2hlbiB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgc2VydmVyIHNpZGUgaXQgc2hvdWxkIGhpZGUgdGhlIGxvYWRlciBlbGVtZW50IGlmIG5vIG1vcmUgcmVzdWx0cyB0byBsb2FkLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VyaWVyTGF6eUxvYWRlciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICBDb25zdHJ1Y3RvclxyXG4gICAgUGFyYW1zXHJcbiAgICAgLSBsb2FkZXJFbGVtZW50IChyZXF1aXJlZCk6IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBsb2FkZXJcclxuICAgICAtIGxvYWRlckZuIChyZXF1aXJlZCk6IFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlIG9mIHJlc3VsdHMuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIGEgYm9vbCBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgbW9yZSBpdGVtcyB0byBsb2FkLlxyXG4gICAgIC0gY29uZmlnT2JqIChvcHRpb25hbCk6ICBBbiBvYmplY3Qgd2hvc2Uga2V5IGFuZCB2YWx1ZXMgd2lsbCBvdmVycmlkZSBkZWZhdWx0IGNvbmZpZyBzZXR0aW5ncy5cclxuICAqLyAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGxvYWRlckVsZW1lbnQsIFxyXG4gICAgICBsb2FkZXJGbiwgXHJcbiAgICAgIGNvbmZpZ09iaiA9IHt9XHJcbiAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAgRGVmYXVsdCBjb25maWcgc2V0dGluZ3NcclxuICAgICovXHJcbiAgICBjb25zdCBjb25maWdEZWZhdWx0cyA9IHtcclxuICAgICAgbG9hZGVyQ2xhc3M6ICdsb2FkZXInLCAgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudFxyXG4gICAgICBsb2FkZXJMb2FkaW5nQ2xhc3M6ICdsb2FkZXItLWxvYWRpbmcnLCAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgIGRlYm91bmNlTXM6IDEwMCwgLy8gaG93IGxvbmcgdG8gd2FpdCBiZXR3ZWVuIGV2ZW50cyBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIHBlZWtEaXN0YW5jZTogMCwgLy8gaG93IG11Y2ggb2YgbG9hZGluZyBlbGVtZW50IHNob3VsZCBiZSBvbiBzY3JlbiBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIGRlYnVnOiBmYWxzZSAgLy8gd2hldGhlciBvciBub3QgdG8gbG9nIGRlYnVnIGluZm8gdG8gY29uc29sZS5cclxuICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXJFbGVtZW50O1xyXG4gICAgdGhpcy5fbG9hZGVyRnVuYyA9IGxvYWRlckZuO1xyXG4gICAgdGhpcy5fbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICBcclxuICAgIC8vIE1lcmdlIHRoZSBkZWZhdWx0cyBhbmQgcGFzc2VkIGluIGNvbmZpZ1xyXG4gICAgdGhpcy5fY29uZmlnID0geyAuLi5jb25maWdEZWZhdWx0cywgLi4uY29uZmlnT2JqIH07XHJcbiAgICBcclxuICAgIC8vIFRyYWNrIHdoZXRoZXIgbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZCBvciByZW1vdmVkXHJcbiAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAgICBcclxuICAgICAgICBcclxuICAgIGlmICghdGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTnVsbCBsb2FkZXIgZWxlbWVudCBwcm92aWRlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgb24gdGhlIGxvYWRlcnMgY2xhc3MgZnJvbSB0aGUgY29uZmlnXHJcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyQ2xhc3MpO1xyXG4gICAgXHJcbiAgICAvLyBEZWJvdW5jZSB0aGUgY2hlY2tcclxuICAgIHRoaXMuX2xhenlMb2FkQ2hlY2sgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuX2RvTG9hZE1vcmVDaGVjaygpKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQ2FsbGluZyBsb2FkIG1vcmUgZnVuY3Rpb24nKTtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKTtcclxuICAgICAgICB0aGlzLl9zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2FsbCB0aGUgc2VhcmNoIGZ1bmN0aW9uICYgcGFzcyBpbiB0aGUgZG9uZSBzZWFyY2hpbmcgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLl9sb2FkZXJGdW5jKHRoaXMuX2RvbmVTZWFyY2hpbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vdCByZWFkeSB0byByZWxvYWQgeWV0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWJvdW5jZU1zKTtcclxuICAgIFxyXG4gICAgLy8gQWRkIHRoZSBldmVudHMgKGFsc28gZG9lcyBpbml0aWFsIGNoZWNrKVxyXG4gICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgIHRoaXMuX2RvbmVTZWFyY2hpbmcgPSB0aGlzLl9kb25lU2VhcmNoaW5nLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIFxyXG4gIF9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkodmlzaWJsZSkge1xyXG4gICAgaWYodmlzaWJsZSkge1xyXG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRrbGUgcmVzdWx0cyBjb21pbmcgYmFjayBpblxyXG4gIF9kb25lU2VhcmNoaW5nKG1vcmVUb0xvYWQpIHtcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coYF9kb25lU2VhcmNoaW5nIGNhbGxiYWNrIGNhbGxlZCB3aXRoIG1vcmUgdG8gbG9hZCAke21vcmVUb0xvYWR9YCk7XHJcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKSBcclxuICAgIGlmIChtb3JlVG9Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0FsbCBkb25lIC0gaGlkaW5nIGxvYWRlciBlbGVtZW50Jyk7XHJcbiAgICAgIHRoaXMuX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFdpcmUgdXAgZXZlbnQgbGlzdGVuZXJzIGFuZCBkbyBpbml0aWFsIGNoZWNrLlxyXG4gIF9zdGFydExpc3RlbmluZygpIHtcclxuICAgIGlmICghdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHsgICAgICBcclxuICAgICAgdGhpcy5fbWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWRkZWQnKTtcclxuICAgICAgdGhpcy5fbGF6eUxvYWRDaGVjaygpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhbHJlYWR5IGluIHBsYWNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXHJcbiAgX3N0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHtcclxuICAgICAgdGhpcy5fbWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgICBcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIHJlbW92ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vIExpc3RlbmVycyB0byByZW1vdmUnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gSGVscGVyIHRvIGxvZyBvbmx5IGlmIGRlYnVnZ2luZyBlbmFibGVkXHJcbiAgX2NvbmRpdGlvbmFsRGVidWdMb2codG9EZWJ1ZywgbG9nZ2VyRnVuYyA9IGNvbnNvbGUubG9nLCApIHtcclxuICAgIGlmICh0aGlzLl9jb25maWcuZGVidWcpIHtcclxuICAgICAgbG9nZ2VyRnVuYyh0b0RlYnVnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBEbyB0aGUgY2hlY2sgdG8gc2VlIGlmIHNjcmVlbiBzb21ld2hlcmUgaXQgc2hvdWxkIGJlIGxvYWRlZC5cclxuICBfZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcclxuXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB0aGlzLl9tYWluLnNjcm9sbFRvcCArIHRoaXMuX21haW4uY2xpZW50SGVpZ2h0OyAvL3dpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gIHRoaXMuX21haW4uc2Nyb2xsSGVpZ2h0OyAvL2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxyXG4gICAgY29uc3QgcGVla1Bvc2l0aW9uVmlzaWJsZSA9IGhpZ2hlc3RWaXNpYmxlWVBvcyA+PSBsb2FkTW9yZVRyaWdnZXJQb3M7XHJcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XHJcbiAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0RvaW5nIGxvYWQgbW9yZSBjaGVjayAuLi4nKTsgICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXHJcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxyXG4gICAgICAnQ29uZmlnIHBlZWsgZGlzdGFuY2UnOiB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlLFxyXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxyXG4gICAgICAvLydDdXJyZW50IFkgcG9zaXRpb24gb2Ygc2Nyb2xsJzogd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAvLyAnVGhlIGludGVybmFsIHNpemUgb2YgdGhlIHdpbmRvdyc6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgJ1RoZSBtYXggeSBwb3NpdGlvbiB2aXNpYmxlJzogaGlnaGVzdFZpc2libGVZUG9zLFxyXG4gICAgICAnVGhlIGhlaWdodCBvZiBkb2N1bWVudCc6IGRvY3VtZW50SGVpZ2h0LFxyXG4gICAgICAnSXMgcGVlayBwb3NpdGlvbiB2aXNpYmxlJzogcGVla1Bvc2l0aW9uVmlzaWJsZSxcclxuICAgICAgJ0lzIHRoZSBsb2FkIG1vcmUgcG9zaXRpb24gdmlzaWJsZSwgb3IgYXQgZG9jIGVuZCc6IHNob3VsZExvYWRNb3JlLFxyXG4gICAgfSwgY29uc29sZS50YWJsZSk7IFxyXG4gICAgXHJcbiAgICByZXR1cm4gc2hvdWxkTG9hZE1vcmU7XHJcbiAgfTtcclxufVxyXG5cclxuLypcclxuXHJcbmRvTG9hZE1vcmVDaGVjaygpIHsgICAgXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSAodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpOyAgLy8gTWF0aC5taW4oKHRoaXMuX2xvYWRlci5vZmZzZXRUb3AgKyB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlKSwgZG9jdW1lbnRIZWlnaHQpOyBcclxuICAgIGNvbnN0IHBlZWtQb3NpdGlvblZpc2libGUgPSBoaWdoZXN0VmlzaWJsZVlQb3MgPj0gbG9hZE1vcmVUcmlnZ2VyUG9zO1xyXG4gICAgY29uc3Qgc2hvdWxkTG9hZE1vcmUgPSBwZWVrUG9zaXRpb25WaXNpYmxlO1xyXG4gICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdEb2luZyBsb2FkIG1vcmUgY2hlY2sgLi4uJyk7ICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyh7IFxyXG4gICAgICAnVG9wIHBvc2l0aW9uIG9mIGxvYWRlciBlbGVtZW50JzogdGhpcy5fbG9hZGVyLm9mZnNldFRvcCxcclxuICAgICAgJ0NvbmZpZyBwZWVrIGRpc3RhbmNlJzogdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSxcclxuICAgICAgJ1kgY28tb3JkaW5hdGUgd2hlbiBtb3JlIHNob3VsZCBiZSBsb2FkZWQgKGluY2x1ZGluZyBwZWVrLCBjb25zdHJhaW5lZCB0byBkb2MgaGVpZ2h0KSc6IGxvYWRNb3JlVHJpZ2dlclBvcyxcclxuICAgICAgJ0N1cnJlbnQgWSBwb3NpdGlvbiBvZiBzY3JvbGwnOiB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXHJcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXHJcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxyXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXHJcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcclxuICB9O1xyXG5cclxuKi8iLCJcclxuaW1wb3J0IHtTZWVBbGxBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4vU2VlQWxsSGVscGVyJztcclxuXHJcbm5ldyBTZWVBbGxBdHRyaWJ1dGVIZWxwZXIoKTtcclxuIiwiLyoqXHJcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLWNvbnRhaW5lci1pZD1cIjw8aWQgb2YgY29udGFpbmVyIHRvIGJlIGVmZmVjdGVkPj5cIlxyXG4gKiBcclxuICogIE9QVElPTkFMOiBVc2UgdGhlIGZvbGxvd2luZyBhdHRydGlidXRlcyB0byBhZGp1c3QgdGhlIGJlaGF2aW9yXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tbGltaXQ9XCIyMFwiIC0gc2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgaW5pdGlhbGx5LiAgRGVmYXVsdCBpcyAxMFxyXG4gKiAgXHJcbiAqICBkYXRhLXNob3dhbGwtY291bnQtaWQgLSBpZCBvZiBhIGZpZWxkIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgd2l0aCBhIGNvdW50IG9mIHRoZSBpdGVtc1xyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC1pdGVtLXNlbGVjdG9yIC0gYSBzZWxlY3RvciB0byBnZXQgdGhlIGl0ZW0gZnJvbSB3aXRoIHRoZSBjb250YWluZXIuICBUaGlzIGlzIHJlcXVpcmVkIGlmIHRoZSBjb250YWluZXIgaXMgbm90IGEgdGFibGVcclxuICovXHJcblxyXG4gZXhwb3J0IGNsYXNzIFNlZUFsbEF0dHJpYnV0ZUhlbHBlciB7XHJcbiAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdmFyIHNob3dNb3JlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkXScpO1xyXG5cclxuICAgICAgICBzaG93TW9yZUJ1dHRvbnMuZm9yRWFjaChzaG93QWxsQnV0dG9uID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkXCIpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbVNlbGVjdG9yID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtaXRlbS1zZWxlY3RvclwiKTtcclxuICAgICAgICAgICAgdmFyIHNob3dBbGxJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xyXG4gICAgICAgICAgICB2YXIgc2hvd0FsbEl0ZW1Db3VudElkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtY291bnQtaWRcIik7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25JZCA9IHNob3dBbGxCdXR0b24uaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ1dHRvbklkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yVG9Vc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclRvVXNlID0gYCMke2NvbnRhaW5lcklkfSAke2l0ZW1TZWxlY3Rvcn1gO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSBcIlRBQkxFXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yVG9Vc2UgPSBgIyR7Y29udGFpbmVySWR9IHRib2R5IHRyYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBjaGlsZCBzZWxlY3RvciBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBwYXJzZWRJdGVtTGltaXQgPSBwYXJzZUludChzaG93QWxsSXRlbUxpbWl0LCAxMCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZWRJdGVtTGltaXQpKSB7IFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zLCBpdGVtTGltaXQ6IHBhcnNlZEl0ZW1MaW1pdH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNob3dBbGxJdGVtQ291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zLCBjb3VudEZpZWxkSWQ6IHNob3dBbGxJdGVtQ291bnRJZH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5ldyBTZWVBbGxIZWxwZXIoc2VsZWN0b3JUb1VzZSwgYCMke2J1dHRvbklkfWAsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWVBbGxIZWxwZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGl0ZW1zU2VsZWN0b3IsIHNlZUFsbFNlbGVjdG9yLCBwYXNzZWRPcHRpb25zID0ge30pIHtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNTZWxlY3RvciA9IGl0ZW1zU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fc2VlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWVBbGxTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2VlQWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFJ1bm5pbmcgb24gYSBwYWdlIHdpdGhvdXQgc2VlIGFsbCBidXR0dG9uLCBzbyBzdG9wIGFmdGVyIGNvdW50cy5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGwgPSB0aGlzLl9zZWVBbGwuc3R5bGUuZGlzcGxheTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7IGl0ZW1MaW1pdDogNSwgc2hvd0xlc3NUZXh0OiBcIlNlZSBMZXNzXCIsIGNvdW50RmllbGRJZDogbnVsbCB9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLmRlZmF1bHRzLCAuLi5wYXNzZWRPcHRpb25zIH07XHJcbiAgICAgICAgdGhpcy5faXRlbUxpbWl0ID0gdGhpcy5fb3B0aW9ucy5pdGVtTGltaXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3Nob3dMZXNzVGV4dCA9IHRoaXMuX29wdGlvbnMuc2hvd0xlc3NUZXh0O1xyXG4gICAgICAgIHRoaXMuX3Nob3dNb3JlVGV4dCA9IHRoaXMuX3NlZUFsbC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fY291bnRGaWVsZCA9IHRoaXMuX29wdGlvbnMuY291bnRGaWVsZElkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fb3B0aW9ucy5jb3VudEZpZWxkSWQpIDogbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fc2hvd2luZ0FsbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9zZWVBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvd2luZ0FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZUV4Y2Vzc0l0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93QWxsSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2hvd2luZ0FsbCA9ICF0aGlzLl9zaG93aW5nQWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWVBbGwudGV4dENvbnRlbnQgPSB0aGlzLl9zaG93aW5nQWxsID8gdGhpcy5fc2hvd0xlc3NUZXh0IDogdGhpcy5fc2hvd01vcmVUZXh0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3dBbGxJdGVtcygpIHtcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVFeGNlc3NJdGVtcygpIHtcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gdG9DaGVjayA+IHRoaXMuX2l0ZW1MaW1pdCA/XHJcbiAgICAgICAgICAgICAgICBcIm5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FsY3VsYXRlKCkgeyAgICBcclxuICAgICAgICB0aGlzLl9hbGxJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pdGVtc1NlbGVjdG9yKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb3VudEZpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvdW50RmllbGQudGV4dENvbnRlbnQgPSB0aGlzLl9hbGxJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fc2VlQWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbGxJdGVtcy5sZW5ndGggPD0gdGhpcy5faXRlbUxpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZJdGVtcyA9IHRoaXMuX2FsbEl0ZW1zWzBdLnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2VlQWxsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZlNlZUFsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2hvd2luZ0FsbCkgIHsgdGhpcy5faGlkZUV4Y2Vzc0l0ZW1zKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCIvKioqKioqIFxyXG5cclxuICBDcmVhdGVzIGEgdGFnIGxpc3QgZnJvbSBhIHNlbGVjdCBlbGVtZW50XHJcblxyXG4gIHVzYWdlOlxyXG5cclxuICBuZXcgU2VsZWN0TGlzdFRhZyhzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYykuXHJcblxyXG4gIC0gc2VsZWN0SWQgKHJlcXVpcmVkKTogVGhlIGlkIG9mIHRoZSBzZWxlY3QgZWxlbWVudCBhY3RpbmcgYXMgdGhlIHNvdXJjZSAobXVzdCBoYXZlIG11bHRpcGxlIGF0dHJpYnV0ZSwgYW5kIGFsbCBpdGVtcyBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkKVxyXG5cclxuICAtIHJldmVydEdyb3VwcyAob3B0aW9uYWwpOiBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNsaWNrZWQgdG8gcmV2ZXJ0IHNlbGVjdGVkIG9wdGlvbnMgKHNob3VsZCBoYXZlIGlzLWhpZGRlbiBjbGFzcyB0byBzdGFydClcclxuXHJcbiAgLSBvblVwZGF0ZUZ1bmMgKHJlcXVpcmVkKTogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIHRhZyBoYXMgYmVlbiByZW1vdmVkLCBvciBvcHRpb25zIGFyZSByZXZlcnRlZC4uIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gcGFyYW1zLCBzZWxlY3RlZE9wdGlvbnMgYW5kIGFsbE9wdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBpbnRlbmRlZCB0byBtYWtlIHRoZSBjb250cm9sIG1vcmUgZmxleGlibGUgaS5lLiBvdXIgZmlyc3QgdXNhZ2UgaXMgdG8gdXBkYXRlIGxhYmVsIHdpdGggc2VsZWN0ZWQgaXRlbXMgdGV4dCBlbHNld2hlcmUgb24gcGFnZSB3aXRob3V0IGZ1cnRoZXIgY291cGxpbmcuXHJcblxyXG4gIC0gaXRlbXMgKG9wdGlvbmFsKTogIEh0bWwgb3B0aW9uIGVsZW1lbnRzIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHVuZGVybHlpbmcgc2VsZWN0IGxpc3QgYmVmb3JlIHRhZ3MgZ2VuZXJhdGVkLiBcclxuXHJcbioqKioqKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TGlzdFRhZ3Mge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jID0gKCkgPT4ge30sIG9wdGlvbnMgPSBudWxsKSB7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jID0gb25VcGRhdGVGdW5jO1xyXG5cclxuICAgICAgdGhpcy50YWdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpO1xyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcblxyXG4gICAgICBpZiAocmV2ZXJ0R3JvdXBzSWQpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJldmVydEdyb3Vwc0lkKTtcclxuICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcclxuICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IHRoaXMudGFnT3B0aW9ucy5hcHBlbmRDaGlsZChvKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE5vdyBoYW5kbGVzIHBhc3NlZCBpbiBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICB0aGlzLmFsbE9wdGlvbnMgPSBvcHRpb25zIHx8IFsuLi50aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldO1xyXG5cclxuICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuICYmIHRoaXMuYWxsT3B0aW9ucy5zb21lKG8gPT4gIW8uc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgIFxyXG4gICAgICB0aGlzLnRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZS50YXJnZXQubWF0Y2hlcygnaScpKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRWYWwgPSBlLnRhcmdldC5kYXRhc2V0LnZhbDtcclxuICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyt0YXJnZXRWYWwrJ1wiXScpO1xyXG4gICAgICAgICAgICAgIGlmKG8pe1xyXG4gICAgICAgICAgICAgICAgICBvLnNlbGVjdGVkID0gZmFsc2U7ICAgXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuYWZ0ZXIodGhpcy50YWdzKTtcclxuXHJcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVRhZ3MoKSB7XHJcbiAgICAgIHRoaXMudGFncy5pbm5lckhUTUwgPSAnJzsgICAgICBcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xyXG4gICAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICB0aGlzLnRhZ3MuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVGFnKHQuaW5uZXJUZXh0LCB0LnZhbHVlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyhzZWxlY3RlZE9wdGlvbnMsIHRoaXMuYWxsT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gIG1ha2VUYWcodGV4dCwgdmFsdWUpIHtcclxuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX19pY29uXCIpOyAgICAgIFxyXG4gICAgICBpLmRhdGFzZXQudmFsPXZhbHVlO1xyXG4gICAgICBpLmlubmVyVGV4dCA9IFwiY2xlYXJcIlxyXG5cclxuICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRhZztcclxuICAgIH07XHJcblxyXG4gIC8vIERlc2VsZWN0IGFsbCB0aGUgb3B0aW9ucyBpbiB0aGUgdW5kZXJseWluZyBzZWxlY3QgbGlzdC4gIE9wdGlvbmFsbHkgcmVnbmVyYXRlZCB0aGUgdGFncyBsaXN0LiBcclxuICAvLyBPcHRpb25hbCBhcyBub3Qgd29ydGggb3ZlcmhlYWQgaWYgZG9udCBuZWVkIGl0LiBcclxuICBjbGVhckl0ZW1zKHJlcG9sdWxhdGVUYWdzID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gZmFsc2UpO1xyXG5cclxuICAgIGlmIChyZXBvbHVsYXRlVGFncykgeyAgICAgIFxyXG4gICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gU2hvdWxkIGhhdmUgYSBzZWN0aW9uIGxpa2UgdGhpcyBmb3IgZWFjaCBwYWdlIHRoZSBjb250cm9sIGlzIHVzZWQgb24sIHVubGVzcyB3ZSB3YW50IGl0IGJlaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGFzIGEgcHJldmlvdXMgdmVyc2lvbiAoaW5jbHVkaW5nIGlkcyBhbmQgdXBkYXRlIGZ1bmN0aW9uKSBcclxuLy8gKkJldHRlciBzdGlsbCogLSBoYXZlIGluIHNlcGVyYXRlIHNjcmlwdCBmaWxlIHNjb3BlZCB0byBzcGVjaWZpYyBwYWdlIChsaWtlIHdpdGggU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzKVxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicpKSB7XHJcblxyXG4gIC8vIFByZXBhcmUgYW4gdXBkYXRlIGZ1bmN0aW9uIGlmIHJlcXVpcmVkIChvcHRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZUdyb3Vwc0xhYmVsU3BhbicpO1xyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHBsdXJhbGlzZWRHcm91cHMgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAxID8gJ2dyb3VwJyA6ICdncm91cHMnO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBgU2VuZCB0byAke3NlbGVjdGVkT3B0aW9ucy5sZW5ndGh9IHJlc3BvbnNlICR7cGx1cmFsaXNlZEdyb3Vwc31gO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGlzZSBhbiBpbnN0YW5jZSBvZiB0aGUgY29udHJvbFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnRm9sbG93dXBHcm91cFNlbGVjdG9yJywgJ3JldmVydF9ncm91cHMnLCBvblVwZGF0ZUZ1bmMpOyBcclxufVxyXG4iLCIvLyBTdG9yZSBhIHNpbXBsZSB2YWx1ZSBpbiBhIGNvb2tpZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDb29raWVIZWxwZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5faW5pdGlhbGlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0aWFsaXNlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGRvY3VtZW50LmNvb2tpZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IGNvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbWF0Y2hpbmdDb29raWUgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hpbmdDb29raWUuc3BsaXQoJz0nKVsxXSkgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9OyBwYXRoPS87IHNhbWVzaXRlPVN0cmljdGBcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbi8vIFJlbW92ZSB0aGUgbm8tanMgY2xhc3Mgc28gd2UgYXJlIGFibGUgdG8gdGVsbCB0aGF0IGpzIGlzIGVuYWJsZWRcclxuLy8gVXNlZnVsIGZvciBoaWRpbmcgZWxlbWVudHMgd2hlbiBqcyBub3QgYXZhaWxhYmxlLlxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnanMnKTsiLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlcycpICE9IG51bGwpIHtcclxuXHJcblxyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIHJlc3BvbnNlIGZpZWxkcyBhbmQgdGhlIHJlc3BvbnNlIGxpc3RcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2UtZmllbGQnKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbnMtbGlzdCcpO1xyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0aGUgZW1wdHkgcmVzcG9uc2UgZmllbGRzXHJcbiAgICAgICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKSAudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhc2V0LmtleSA9IGlkeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmV2ZWFscyB0aGUgZmlyc3QgaGlkZGVuIGl0ZW1cclxuICAgICAgICBjb25zdCBzaG93Rmlyc3RFbXB5SXRlbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXNwb25zZSA9IHJlc3BvbnNlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFdoZW4gYW4gaXRlbSBpcyByZW1vdmVkLCBjb3B5IGFsbCB2YWx1ZXMgZm9yd2FyZCB0byBmaWxsIGdhcHNcclxuICAgICAgICBjb25zdCBjb3B5SXRlbXNGb3J3YXJkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IGluZGV4ICsgMTsgaWR4IDwgcmVzcG9uc2VzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZJbnB1dCA9IHJlc3BvbnNlc1tpZHgtMV0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpOztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gcmVzcG9uc2VzW2lkeF0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgcHJldklucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUxhc3RFbXB0eUl0ZW0gPSAocmVtb3ZlSWR4KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBcyBhbGwgY29waWVkIGZvcndhcmQgYmxhbmsgbGFzdCBpdGVtIG91dFxyXG4gICAgICAgICAgICByZXNwb25zZXNbcmVzcG9uc2VzLmxlbmd0aC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJykudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gR28gdGhyb3VnaCBiYWNrd2FyZHMgYW5kIGhpZGUgbGFzdCB2aXNpYmxlIGl0ZW1cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gKHJlc3BvbnNlcy5sZW5ndGgtMSk7IGlkeCA+PSByZW1vdmVJZHg7IGlkeC0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhZGRSZXNwb25zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX3Jlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBzaG93Rmlyc3RFbXB5SXRlbSgpO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXNwb25zZXNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1yZXNwb25zZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUlkeCA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29weUl0ZW1zRm9yd2FyZChyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGFzdEVtcHR5SXRlbShyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZScpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZFBob25lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZFBob25lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQaG9uZUJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkUGhvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pKFwiYWRkUGhvbmVcIik7XHJcblxyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZEVtYWlsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRFbWFpbEJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkRW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pKFwiYWRkRW1haWxcIik7XHJcblxyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVHcm91cEJ1dHRvbiAhPW51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSkoXCJhZGRfZ3JvdXBcIik7XHJcbn1cclxuXHJcbnZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuaWYgKGdyb3VwVGV4dGFyZWEgIT0gbnVsbCkge1xyXG4gICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldDIgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldDIubWF0Y2hlcyhcIi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Mi5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcblxyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpICE9bnVsbCkge1xyXG5cclxuICAgIHZhciBpbnB1dEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKTtcclxuICAgIHZhciBpbnB1dEVycm9yc0FycmF5ID0gT2JqZWN0LmtleXMoaW5wdXRFcnJvcnMpO1xyXG5cclxuICAgIGlucHV0RXJyb3JzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RXJyb3JzW2tleV0pO1xyXG4gICAgICAgIGlucHV0RXJyb3JzW2tleV0uY2xvc2VzdCgnZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuLy8gICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcbi8vICAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcblxyXG4vLyB9KShcIiNTaWRlYmFyXCIpO1xyXG5cclxuIiwiLyogXHJcbiAgRGVib3VuY2UgZnVuY3Rpb24gcHJldmVudCBleGNlc3NpdmUgY2FsbHMgb24gc2Nyb2xsLlxyXG4gIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cclxuKi9cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xyXG5cdHZhciB0aW1lb3V0O1xyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHR9O1xyXG5cdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHR9O1xyXG59OyIsIlxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgY29uc3Qgc25hY2tiYXJTdG9yYWdlSXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc25hY2tiYXInKTtcclxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcclxuICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBhbHJlYWR5IGNvbnRhaW5zIGN1cnJlbnQgcGFnZSBwYXRoXHJcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAvL2lmIGl0IGRvZXMgdGhlbiBoaWRlIHRoZSBzbmFja2JhclxyXG4gICAgICAgICAgICBzbmFja2Jhci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSAge1xyXG4gICAgICAgICAgICBsb2NhdGlvbnMgOiBuZXcgQXJyYXkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHNuYWNrYmFyKSB7XHJcbiAgICAgICAgc25hY2tiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGlmICghc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLnB1c2god2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc25hY2tiYXInLCBKU09OLnN0cmluZ2lmeShzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59KShcIiNoaW50LXNuYWNrYmFyXCIpO1xyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogIFdpcmUgdXAgdGFibGVzIHNvIHRoYXQgd2hvbGUgcm93IGNhbiBiZSBjbGlja2VkLCByYXRoZXIgdGhhbiBpbmRpdmlkdWFsIGNlbGxzXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLy8gR2V0IGFsbCB0YWJsZSByb3dzIHRoYXQgc2hvdWxkIGJlIGNsaWNrYWJsZVxyXG5jb25zdCByb3dzVG9MaW5raWZ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGVbZGF0YS1saW5rYWJsZS1jZWxsXSA+IHRib2R5ID4gdHInKTtcclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBjbGlja1xyXG5jb25zdCBoYW5kbGVSb3dDbGljayA9IGUgPT4ge1xyXG5cclxuICAvLyBGaW5kIHRoZSBjb2x1bW4gdGhhdCBzaG91bGQgY29udGFpbiB0aGUgbGlua1xyXG4gIGNvbnN0IHRhYmxlID0gZS50YXJnZXQuY2xvc2VzdCgndGFibGUnKTtcclxuICBjb25zdCBjb2xUb1BhcnNlID0gdGFibGUuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmthYmxlLWNlbGwnKTtcclxuXHJcbiAgLy8gR2V0IHRoZSBjbGlja2VkIHJvdywgYXMgbWF5YmUgYSB0ZCBjbGlja2VkLlxyXG4gIGNvbnN0IHJvdyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAgIC8vIFRyeSBhbmQgZmluZCB0aGUgbGluayB0aGF0IHNob3VsZCBiZSBjbGlja2VkLlxyXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQoY29sVG9QYXJzZSwxMCkgKyAxO1xyXG4gICAgY29uc3QgbGluayA9IHJvdy5xdWVyeVNlbGVjdG9yKGB0ZDpudGgtY2hpbGQoJHtjb2x9KSBhYCk7XHJcbiAgICBcclxuICAgIC8vIENsaWNrIHRoZSBsaW5rIG9yIHJlcG9ydCBmYWlsdXJlIHRvIGZpbmRcclxuICAgIGlmIChsaW5rKSB7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBsaW5rIGZvdW5kIGluIGNvbHVtbiBzcGVjaWZpZWQgYnkgW2RhdGEtbGlua2FibGUtY2VsbF0nKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2F0Y2gge1xyXG4gICAgLy8gV2FybiBvZiBpbnZhbGlkIGNvbHVtbiBzcGVjaWZpZWQuXHJcblx0Y29uc29sZS5lcnJvcignSW52YWxpZCB2YWx1ZSBzcGVjaWZpZWQgYnkgW2RhdGEtbGlua2FibGUtY2VsbF0nKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBsaXN0ZW5lcnNcclxucm93c1RvTGlua2lmeS5mb3JFYWNoKHJvdyA9PiByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSb3dDbGljaykpOyIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnJlcGxhY2UoL14jLywgJycpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbiAgICBpZiAobWVudSkge1xyXG5cclxuICAgICAgICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XHJcblxyXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QuYWRkKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkpe1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkoJyNzZWFyY2gnKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnJlcGxhY2UoL14jLywgJycpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbiAgICBpZiAobWVudSkge1xyXG5cclxuICAgICAgICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XHJcblxyXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QuYWRkKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAgJiYgbWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjbWVudScpOyIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHN0YWZmIGNvbXBvc2UgcGFnZS5cclxuKi9cclxuXHJcbmltcG9ydCBTaW1wbGVDb29raWVIZWxwZXIgZnJvbSAnLi4vU2ltcGxlQ29va2llSGVscGVyJztcclxuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XHJcbmltcG9ydCBTZWxlY3RMaXN0VGFncyBmcm9tICcuLi9TZWxlY3RMaXN0VGFncyc7XHJcbmltcG9ydCB7U2VlQWxsSGVscGVyfSBmcm9tICcuLi9TZWVBbGxIZWxwZXInO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtY29tcG9zZScpKSB7XHJcblxyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY29udGFjdCcpO1xyXG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0X2lucHV0Jyk7XHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X01lc3NhZ2UnKTtcclxuICBjb25zdCByZXNlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnB1dF9BdXRvUmVzZW5kU2NoZWR1bGUnKTtcclxuICBjb25zdCByZXNwb25zZU9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1vcHRpb24nKSk7XHJcblxyXG4gIGNvbnN0IGNvb2tpZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVGl0bGUnKTtcclxuICBjb25zdCBjb29raWVNZXNzYWdlSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VDb250ZW50Jyk7XHJcbiAgY29uc3QgY29va2llQXV0b1Jlc2VuZEhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzZW5kJyk7XHJcbiAgY29uc3QgY29va2llUmVzcG9uc2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVJlc3BvbnNlcycpO1xyXG4gIGNvbnN0IGlkc1Nlc3Npb25IZWxwZXIgPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xyXG4gIFxyXG4gIGNvbnN0IGdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgbm9uRW1wdHlPcHRpb25zID0gcmVzcG9uc2VPcHRpb25zLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGN1cnIudmFsdWVdO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiBub25FbXB0eU9wdGlvbnMuam9pbignfHwnKTtcclxuICB9O1xyXG5cclxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb29raWVIZWxwZXIuc2V0KHN1YmplY3RJbnB1dC52YWx1ZSk7XHJcbiAgICBjb29raWVNZXNzYWdlSGVscGVyLnNldChtZXNzYWdlSW5wdXQudmFsdWUpO1xyXG4gICAgY29va2llQXV0b1Jlc2VuZEhlbHBlci5zZXQocmVzZW5kSW5wdXQudmFsdWUpOyAgXHJcbiAgICBjb29raWVSZXNwb25zZUhlbHBlci5zZXQoZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRhZ3NTZWVBbGxIZWxwZXIgPSBuZXcgU2VlQWxsSGVscGVyKCcjQXNjU3RhZmZTZWxlY3RvciArIGRpdiA+IC50YWcnLCAnI3NlZU1vcmVSZWNpcGllbnRzJywgeyBpdGVtTGltaXQ6IDIxLCBjb3VudEZpZWxkSWQ6ICdyZWNpcGllbnRzQ291bnQnIH0pO1xyXG4gIFxyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGlkc1Nlc3Npb25IZWxwZXIuZmlsdGVyQnlJZHMoc2VsZWN0ZWRPcHRpb25zLm1hcCh4ID0+IHgudmFsdWUpKTtcclxuICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBpZHNTZXNzaW9uSGVscGVyLmdldEl0ZW1zKCkubWFwKCh7aWQsIG5hbWV9KT0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IGlkO1xyXG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IHNsdCA9IG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYywgc2VsZWN0T3B0aW9ucyk7IFxyXG5cclxuICB0YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XHJcblxyXG4gIGNvbnN0IGRpc2NhcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuRGlzY2FyZCcpO1xyXG4gIGRpc2NhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZHNTZXNzaW9uSGVscGVyLmNsZWFySXRlbXMoKTtcclxuICAgIHNsdC5jbGVhckl0ZW1zKCk7XHJcbiAgICB0YWdzU2VlQWxsSGVscGVyKCk7XHJcbiAgfSk7XHJcblxyXG5cclxufVxyXG4iLCJcclxuLy8gQ2hlY2sgd2UgYXJlIG9uIHRoZSBjb3JyZWN0IHBhZ2UuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluLmNvdXJpZXItcHJvZmlsZS1wYWdlJyk7XHJcblxyXG5pZiAobWFpbikge1xyXG5cclxuICAgIC8vIEdyYWIgYWxsIHRoZSBidXR0b25zIHRoYXQgYXJlIG9ubHkgc2hvdyB3aGVuIGpzIGVuYWJsZWRcclxuICAgIGNvbnN0IGFkZFBob25lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lQnRuJyk7XHJcbiAgICBjb25zdCBhZGRFbWFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbEJ0bicpO1xyXG4gICAgY29uc3QgcmVtb3ZlRW1haWxCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpO1xyXG4gICAgY29uc3QgcmVtb3ZlUGhvbmVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpO1xyXG4gICAgXHJcbiAgICAvLyBTaG93IGFsbCB0aGUganMgb25seSBidXR0b25zXHJcbiAgICBbYWRkUGhvbmVCdG4sIGFkZEVtYWlsQnRuLCAuLi5yZW1vdmVFbWFpbEJ1dHRvbnMsIC4uLnJlbW92ZVBob25lQnV0dG9uc10uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBlbWFpbHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZW1haWxzJyk7XHJcbiAgICBcclxuICAgIGVtYWlsc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYW5rJyk7XHJcbiAgICAgICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwaG9uZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGhvbmVzJyk7XHJcbiAgICBcclxuICAgIHBob25lc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxhbmsnKTtcclxuICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGFueSBlbXB0eSBwaG9uZSBib3hlcywgb3IgZW1haWwgYm94ZXNcclxuICAgIGNvbnN0IGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlID0gKHNlY3Rpb24sIHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oc2VjdGlvblxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXHJcbiAgICAgICAgICAgIC5zb21lKHggPT4geC52YWx1ZS50cmltKCkgPT09ICcnKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2hvdWxkIG5vdCBoYXZlIGFuZCBhZGQgZW1haWwgYnV0dG9uIGlmIGFscmVhZHkgYSBibGFuayBvbmUgYXZhaWxhYmxlXHJcbiAgICBjb25zdCBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkUGhvbmVCdG4uc3R5bGUuZGlzcGxheSA9IGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlKHBob25lc1NlY3Rpb24sICcuaW5wdXQtLXByb2ZpbGUtcGhvbmUgPiBpbnB1dCcpID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG91bGQgbm90IGhhdmUgYW5kIGFkZCBwaG9uZSBidXR0b24gaWYgYWxyZWFkeSBhIGJsYW5rIG9uZSBhdmFpbGFibGVcclxuICAgIGNvbnN0IHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSA9ICgpID0+IHtcclxuICAgICAgICBhZGRFbWFpbEJ0bi5zdHlsZS5kaXNwbGF5ID0gIGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlKGVtYWlsc1NlY3Rpb24sICcuaW5wdXQtLXByb2ZpbGUtZW1haWwgPiBpbnB1dCcpID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdGhlIGZvcm0sIHRvIGFkZCByZW1vdmUgbGlzdGVuZXJzIHRvXHJcbiAgICBjb25zdCBjb250YWN0UHJvZmlsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wcm9maWxlLWZvcm0nKTsgICBcclxuXHJcbiAgICBbLi4ucmVtb3ZlRW1haWxCdXR0b25zLCAuLi5yZW1vdmVQaG9uZUJ1dHRvbnNdLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5hZGQoJ2lucHV0X193aXRoYWN0aW9uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZW1vdmUgZXhjZXNzIGlucHV0cyBvZiB0aGVzZSB0eXBlcyBvbiBsb2FkIChBZGRlZCBmb3Igbm9uIGpzIHB1cnBvc2VzKS5cclxuICAgIFtcIi5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0XCIsIFwiLmlucHV0LS1wcm9maWxlLWVtYWlsID4gaW5wdXRcIl0uZm9yRWFjaChzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzRm9yU2VsZWN0b3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0c0ZvclNlbGVjdG9yLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgaW5wdXRzRm9yU2VsZWN0b3IuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmUnLCAnSW5wdXQuUGVyc29uYWxQaG9uZU51bWJlcnMnKTtcclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNldCBjb3JyZWN0IHN0YXJ0IHN0YXRlIGZvciBlbWFpbCBhbmQgcGhvbmUgYWRkIGJ1dHRvbnNcclxuICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xyXG4gICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcblxyXG4gICAgLy8gQWRkIGEgbmV3IHBob25lIHJvd1xyXG4gICAgZnVuY3Rpb24gbmV3UGhvbmVSb3coKSB7ICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UGhvbmUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3UGhvbmUuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1waG9uZVwiO1xyXG4gICAgICAgIG5ld1Bob25lLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybV9faW5wdXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBwaG9uZSBudW1iZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSBidG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmVcIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWVsZC12YWxpZGF0aW9uLXZhbGlkXCIgZGF0YS12YWxtc2ctZm9yPVwicGhvbmVfdmFsaWRhdGlvblwiIGRhdGEtdmFsbXNnLXJlcGxhY2U9XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Bob25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBnYXBzIGluIGluZGV4IHNlcXVlbmNlc1xyXG4gICAgZnVuY3Rpb24gX3JlbnVtYmVySW5wdXRzKHNlbGVjdG9yLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wID0gaW5wdXQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wLmlkID0gYCR7aWRlbnRpZmllcn1fJHtpbmRleH1fYDtcclxuICAgICAgICAgICAgaW5wLm5hbWUgPSBgJHtpZGVudGlmaWVyfVske2luZGV4fV1gO1xyXG4gICAgICAgICAgICBjb25zdCBzcG4gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsbXNnLWZvcicsIGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGEgbmV3IGVtYWlsIHJvd1xyXG4gICAgZnVuY3Rpb24gbmV3RW1haWxSb3coKSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0VtYWlsUm93ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1lbWFpbFwiOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhbiBlbWFpbCBhZGRyZXNzXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1yZW1vdmUgIGJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbFwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJlbWFpbF92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3RW1haWxSb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2lyZSB1cCB0aGUgYnV0dG9uIGxpc3RlbmVyc1xyXG4gICAgYWRkUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCdzZWN0aW9uJykuYXBwZW5kQ2hpbGQobmV3UGhvbmVSb3coKSk7XHJcbiAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmUnLCAnSW5wdXQuUGVyc29uYWxQaG9uZU51bWJlcnMnKTtcclxuICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRFbWFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChuZXdFbWFpbFJvdygpKVxyXG4gICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgICAgICBzZXRBZGRFbWFpbEJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcclxuICAgIH0pOyAgXHJcblxyXG4gICAgLy8gSGFuZGxlIHRoZSByZW1vdmUgb24gdGhlIHBhcmVudCBmb3JtLCBzbyB0aGF0IHdpbGwgd29yayBmb3IgbmV3IGl0ZW1zIGFkZGVkIGFmdGVyIGxvYWQuXHJcbiAgICBjb250YWN0UHJvZmlsZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykgIHx8IGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHZXQgYWxsIHRoZSBpbnB1dHMgaW4gdGhlIHBhcmVudCBzZWN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0cyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgYmxhbmsgaXQgLSBlbHNlIHJlbW92ZSBpdFxyXG4gICAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzWzBdLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBhcmVudCBmb3JtIGdyb3VwIGNvbnRhaW5pbmcgZW1haWwgb3IgcGhvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtR3JvdXAucmVtb3ZlKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpIHtcclxuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtcGhvbmUnLCAnSW5wdXQuUGVyc29uYWxQaG9uZU51bWJlcnMnKTtcclxuICAgICAgICAgICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgICAgICAgICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzZWFyY2ggc3RhZmYgcGFnZS5cclxuKi9cclxuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XHJcbmltcG9ydCBEcmFmdE1lc3NhZ2VEcmF3ZXIgZnJvbSAnLi4vRHJhZnRNZXNzYWdlRHJhd2VyJztcclxuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi4vTGF6eUxvYWRlcic7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1pbmRleCcpKSB7XHJcblxyXG4gIGNvbnN0IGlkU2ggPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xyXG4gIGNvbnN0IGRtZCA9IG5ldyBEcmFmdE1lc3NhZ2VEcmF3ZXIoaWRTaC5nZXRDb3VudCgpKTtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcblxyXG4gIGNvbnN0IGFsbENoZWNrYm94ZXNJblRhYmxlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RhYmxlLXNlbGVjdC1zdGFmZiBbdHlwZT1jaGVja2JveF1cIikpO1xyXG5cclxuICAvLyBDaGVjayBhbGwgaXRlbXMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkID0gYWxsQ2hlY2tib3hlc0luVGFibGUuZmlsdGVyKGNiID0+IGlkU2guaGFzSWQoY2IudmFsdWUpKTtcclxuICBpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkLmZvckVhY2goaSA9PiBpLmNoZWNrZWQgPSB0cnVlKTtcclxuXHJcbiAgY29uc3QgYWxsQ2hlY2tib3hlc1NlbGVjdGVkID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUuZXZlcnkoY2IgPT4gY2IuY2hlY2tlZCk7XHJcbiAgXHJcbiAgLy8gY29uc3QgYWxsQ29udGFjdElkcyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiBjYi52YWx1ZSk7XHJcbiAgY29uc3QgYWxsQ29udGFjdHMgPSAoKSA9PiBhbGxDaGVja2JveGVzSW5UYWJsZS5tYXAoY2IgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IGNiLnZhbHVlLFxyXG4gICAgICBuYW1lOiBjYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJylcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVXNlcyBhIHBhc3NlZCBpbiAnY29tYmluZXInIGZ1bmN0aW9uIHRvIGRlY2lkZWQgaG93IHRvIGVpdGhlciBhZGQgb3IgcmVtb3ZlIHNlbGVjdGVkIHJlc3VsdHMgdG8gdGhvc2UgZnJvbSBvdGhlciBwYWdlcy5cclxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UgPSAoY29tYmluZUZuKSA9PiB7XHJcbiAgICBjb25zdCBhbGxDb250YWN0c0Rpc3BsYXllZCA9IGFsbENvbnRhY3RzKCk7XHJcbiAgICBjb25zdCBleGlzdGluZ0NvbnRhY3RzID0gaWRTaC5nZXRJdGVtcygpO1xyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBjb21iaW5lRm4oZXhpc3RpbmdDb250YWN0cywgYWxsQ29udGFjdHNEaXNwbGF5ZWQpOyAgXHJcblxyXG4gICAgaWRTaC5zZXRJdGVtcyhuZXdJdGVtcyk7XHJcbiAgICBkbWQudXBkYXRlKG5ld0l0ZW1zLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgYWxsIHRoZSBpZHMgdGhhdCB3ZXJlIGNvbnRhaW5lZCBpbiB0aGlzIHJlc3VsdHMgcGFnZS4gIEtlZXAgcmVzdWx0IGZyb20gb3RoZXIgcGFnZXMgc2VsZWN0ZWRcclxuICBjb25zdCBkZXNlbGVjdEFsbCA9ICh0b0Rlc2VsZWN0KSA9PiB7XHJcbiAgICB0b0Rlc2VsZWN0LmZvckVhY2godG9EZXNlbGVjdCA9PiB0b0Rlc2VsZWN0LmNoZWNrZWQgPSBmYWxzZSk7XHJcbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IGV4aXN0aW5nSXRlbXMuZmlsdGVyKCh7aWR9KSA9PiAhYWxsSXRlbXNGb3JHcm91cC5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpKTtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxyXG4gIGNvbnN0IHNlbGVjdEFsbCA9ICh0b1NlbGVjdCkgPT4ge1xyXG4gICAgdG9TZWxlY3QuZm9yRWFjaCh0b1NlbGVjdCA9PiB0b1NlbGVjdC5jaGVja2VkID0gdHJ1ZSk7ICAgIFxyXG5cclxuICAgIGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSgoZXhpc3RpbmdJdGVtcywgYWxsSXRlbXNGb3JHcm91cCkgPT4ge1xyXG5cclxuICAgICAgLy8gZ2V0IGFsbCBpdGVtcyBvbiB0aGUgcGFnZSBub3QgaW4gdGhlIGV4aXN0aW5nIHJlc3VsdHNcclxuICAgICAgY29uc3QgZ3JvdXBJdGVtc1RvQWRkID0gYWxsSXRlbXNGb3JHcm91cC5maWx0ZXIoKHtpZH0pID0+ICFleGlzdGluZ0l0ZW1zLm1hcChpID0+IGkuaWQpLmluY2x1ZGVzKGlkKSk7XHJcblxyXG4gICAgICAvLyBNZXJnZSB0aGUgbmV3IGl0ZW1zIGluXHJcbiAgICAgIHJldHVybiBbLi4uZXhpc3RpbmdJdGVtcywgLi4uZ3JvdXBJdGVtc1RvQWRkXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgIFxyXG5cclxuICAgIHRhcmdldC5jaGVja2VkID9cclxuICAgICAgc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKSA6XHJcbiAgICAgIGRlc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NiU2VsZWN0QWxsIFt0eXBlPWNoZWNrYm94XScpO1xyXG4gIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xyXG4gICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlKTtcclxuXHJcbiAgICBpZiAoYWxsQ2hlY2tib3hlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2Vyc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLXNlbGVjdC1zdGFmZicpO1xyXG4gIGxldCB1c2Vyc1RhYmxlQm9keTtcclxuICBpZih1c2Vyc1RhYmxlKSB7XHJcbiAgIHVzZXJzVGFibGVCb2R5ID0gdXNlcnNUYWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gIGNvbnN0IGNyaXRlcmlhS2V5ID0gJ2NyaXRlcmlhJztcclxuICBcclxuICBsZXQgc2VhcmNoQ3JpdGVyaWFTdHJpbmcgPSB1cmxQYXJhbXMuaGFzKGNyaXRlcmlhS2V5KSA/IGA/Y3JpdGVyaWE9JHt1cmxQYXJhbXMuZ2V0KGNyaXRlcmlhS2V5KX1gIDogJyc7XHJcblxyXG4gIGNvbnN0IGdldFNlYXJjaEVuZHBvaW50ID0gKCkgPT4gYCR7bG9jYXRpb24ub3JpZ2lufS9Gb3JjZS9Db250YWN0cy8ke2N1cnJlbnRQYWdlfSR7c2VhcmNoQ3JpdGVyaWFTdHJpbmd9YDtcclxuICBcclxuICAvLyBBZGQgbGlzdGVuZXJzIGZvciB0aGUgY2hlY2tib3hlc1xyXG4gIGNvbnN0IHN0YWZmVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcblxyXG4gIGlmIChzdGFmZlRhYmxlKSB7XHJcbiAgICBzdGFmZlRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICh7dGFyZ2V0fSkgPT4ge1xyXG4gICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0LmNoZWNrZWQgPyBpZFNoLmFkZCh0YXJnZXQudmFsdWUsIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJykpIDogaWRTaC5yZW1vdmUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgdW5jaGVja2VkIGRlc2VsZWN0IHRoZSBjaGVjayBhbGwuXHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbENoZWNrYm94ZXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgY2hlY2tlZCBzZWUgaWYgYWxsIGFyZSBub3cgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgIH0gIFxyXG5cclxuICBjb25zdCBjcmVhdGVDaGVja2JveEZpZWxkID0gKHZhbHVlLCBjaGVja2VkLCBuYW1lKSA9PiB7ICBcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jZWxsJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGFjdC1uYW1lJywgbmFtZSk7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlQ2VsbFdpdGhUZXh0ID0gdGV4dCA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUm93ID0gdXNlciA9PiB7XHJcbiAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5uYW1lKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuY29sbGFyKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuZW1haWwpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5waG9uZU51bWJlcikpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrYm94RmllbGQodXNlci5pZCwgaWRTaC5oYXNJZCh1c2VyLmlkKSwgdXNlci5uYW1lKSk7XHJcblxyXG4gICAgdXNlcnNUYWJsZUJvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFJlc3VsdFJvd3MgPSByb3dzID0+IHtcclxuICAgIHJvd3MuZm9yRWFjaChhZGRSb3cpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxvYWRlcikge1xyXG5cclxuICAgIGNvbnN0IGxvYWRlclBhZ2VTaXplID0gbG9hZGVyLmdldEF0dHJpYnV0ZShcInBhZ2Utc2l6ZVwiKTtcclxuXHJcbiAgICBuZXcgTGF6eUxvYWRlcihsb2FkZXIsIGFzeW5jIGRvbmUgPT4ge1xyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIGluZGV4XHJcbiAgICAgICAgY3VycmVudFBhZ2UrKztcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGdldFNlYXJjaEVuZHBvaW50KCk7XHJcblxyXG4gICAgICAgIC8vIERvIHRoZSBzZWFyY2hcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChlbmRwb2ludCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzUmVzdWx0cyA9IHJlc3VsdHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgLy8gV2UgZG9udCBrbm93IGlmIHRoZXJlIHdpbGwgYmUgbW9yZSByZXN1bHRzLCBidXQgaXRzIGxpa2VseSBpZiB3ZSByZXR1cm4gYSBmdWxsIHBhZ2Ugb2YgcmVzdWx0c1xyXG4gICAgICAgIGxldCBtb3JlUmVzdWx0c0xpa2VseSA9IGhhc1Jlc3VsdHM7XHJcbiAgICAgICAgaWYgKGxvYWRlclBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAvLyBXZSBtYXkgbm90IGhhdmUgdGhpcyBhdHRyaWJ1dGUsIGJ1dCBpZiB3ZSBkbyBjaGVjayBpZiB0aGUgcGFnZSBpcyBmdWxsLiBJZiBub3QgdGhlcmUgc2hvdWxkIGJlIG5vIG1vcmUgcmVzdWx0cyB0byBmZXRjaFxyXG4gICAgICAgICAgbW9yZVJlc3VsdHNMaWtlbHkgPSByZXN1bHRzLmxlbmd0aCA9PT0gcGFyc2VJbnQobG9hZGVyUGFnZVNpemUsIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNSZXN1bHRzKSB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYWRkUmVzdWx0Um93cyhyZXN1bHRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbmUobW9yZVJlc3VsdHNMaWtlbHkpOyAgXHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxhenkgbG9hZCBwYWdlICR7Y3VycmVudFBhZ2V9IG9mIEFEIHVzZXJzYCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAvLyBJZ25vcmUgY3VycmVudCBmYWlsZWQgcGFnZSwgc28gd2lsbCB0cnkgYWdhaW5cclxuICAgICAgICBjdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIGRvbmUodHJ1ZSk7IC8vIENhbGwgZG9uZSB3aXRoIG1vcmUgdG8gbG9hZC5cclxuICAgICAgICAvLyBUT0RPOiBXaGF0IHRvIGRvIGhlcmUuIElmIGVucG9pbnQgaXMgZG93biwgd2Ugd291bGQgZ2V0IGxvdHMgb2YgY29uc29sZSBlcnJvcnMgYXQgdGhlIG1vbWVudC4uLi5cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sIHsgZGVidWc6IGZhbHNlLCBwZWVrRGlzdGFuY2U6IDUwIH0pO1xyXG4gIH0gIFxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogIEhhbmRsZSB0aGUgY2xpY2tpbmcgb2YgYSBzZWFyY2ggZmllbGRzIHggaWNvbi4gIFxyXG4gKiAgQmxhbmtzIHRoZSBmaWVsZCBhbmQgb3B0aW9uYWxseSByZWRpcmVjdCBtaW51cyBxdWVyeSBzdHJpbmcgcGFyYW1cclxuICogIHNwZWNpZmllZCBvbiB0aGUgc3Bhbi5mb3JtX19pbnB1dC0tY2xlYXIgKGRhdGEtcGFyYW0tbmFtZSlcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyogQnVpbGQgYW5kIHJlZGlyZWN0IHRvIHBhdGggbWludXMgdGhlIHNwZWNpZmllZCBwYXJhbSBuYW1lIGluIHF1ZXJ5IHN0cmluZyAqL1xyXG5mdW5jdGlvbiByZWRpcmVjdFdpdGhvdXRTZWFyY2gocGFyYW1OYW1lKSB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICAgIGNvbnN0IHtvcmlnaW4sIHBhdGhuYW1lfSA9IHdpbmRvdy5sb2NhdGlvbjtcclxuICAgIHVybFBhcmFtcy5kZWxldGUocGFyYW1OYW1lKTtcclxuICAgIGNvbnN0IG5ld0NyaXRlcmlhID0gdXJsUGFyYW1zLnRvU3RyaW5nKCkgPyBgPyR7dXJsUGFyYW1zfWAgOiAnJzsgICAgXHJcbiAgICBjb25zdCBuZXdQYXRoID0gYCR7b3JpZ2lufSR7cGF0aG5hbWV9JHtuZXdDcml0ZXJpYX1gO1xyXG4gICAgXHJcbiAgICAvLyBPbmx5IHJlZGlyZWN0IGlmIHBhcmFtcyB3aXRoIGNoYW5nZSBpLmUuIG5vdCBqdXN0IGNsZWFyaW5nIHNlYXJjaCBmaWVsZFxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSBuZXdQYXRoKSB7ICAgICAgICBcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKG5ld1BhdGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBDbGVhciBhIHNlYXJjaCBmaWVsZCB3aGVuIHRoZSBpbnB1dHMgY2xlYXIgYnV0dG9uIGlzIGNsaWNrZWQgKi9cclxuZnVuY3Rpb24gY2xlYXJTZWFyY2goZSkge1xyXG4gICAgdmFyIHRvQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS0tc2VhcmNoID4gLmZvcm1fX2lucHV0LS1zZWFyY2gnKTtcclxuICAgIHRvQ2xlYXIuZm9yRWFjaCh0YyA9PiB0Yy52YWx1ZSA9ICcnKTtcclxuXHJcbiAgICAvLyBUb2RvIHRyeSBhbmQgZ2V0IGF0dHJpYnV0ZSwgYW5kIHJlZGlyZWN0IGlmIGhhcyBpdC5cclxuICAgIGNvbnN0IHBhcmFtVG9SZW1vdmUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0tbmFtZScpO1xyXG4gICAgaWYgKHBhcmFtVG9SZW1vdmUpIHtcclxuICAgICAgICByZWRpcmVjdFdpdGhvdXRTZWFyY2gocGFyYW1Ub1JlbW92ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjbGVhckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9faW5wdXQtLWNsZWFyJyk7XHJcblxyXG5jbGVhckJ1dHRvbnMuZm9yRWFjaChjYiA9PiBjYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyU2VhcmNoKSk7IiwiLyogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbixcclxudG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4vLyBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4vLyAgICB2YXIgYXNpZGVFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIik7XHJcbi8vICAgICBpZihhc2lkZUV4aXN0KXtcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XHJcbiAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcclxuICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG52YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbmlmIChhZGRHcm91cEJ1dHRvbikge1xyXG5cclxuYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG52YXIgY2xvc2VTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlX3NpZGViYXInKTtcclxuXHJcbmlmIChjbG9zZVNpZGViYXIpIHtcclxuXHJcbmNsb3NlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XHJcbiAgdmFyIHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgLy8gaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAvLyAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGlmICgheC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIHguY2xhc3NMaXN0LmFkZCgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LmFkZCgnbWFpbi0taGlkZGVuJyk7XHJcbiAgICAgIC8vIH1cclxuICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVRdWVyeVBhcmFtID0gcGFyYW0gPT4ge1xyXG4gICAgICAgIGlmKHVybFBhcmFtcy5oYXMocGFyYW0pKXtcclxuICAgICAgICAgICAgdXJsUGFyYW1zLmRlbGV0ZShwYXJhbSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/PSR7dXJsUGFyYW1zLnRvU3RyaW5nKCl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0NvbnRhY3RBZGRlZCcpO1xyXG4gICAgY29uc3QgT3JnYW5pc2F0aW9uUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdPcmdhbmlzYXRpb25BZGRlZCcpO1xyXG4gICAgY29uc3QgTWVzc2FnZVNlbnRQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ01lc3NhZ2VTZW50Jyk7XHJcbiAgICBjb25zdCBGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdGb3JjZUNvbnRhY3RVcGRhdGVkJyk7XHJcblxyXG4gICAgbGV0IHNuYWNrYmFyTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIGlmIChjb250YWN0UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ0NvbnRhY3RBZGRlZCcpO1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgY29udGFjdCBoYXMgYmVlbiBjcmVhdGVkJztcclxuICAgIH0gZWxzZSBpZiAoT3JnYW5pc2F0aW9uUGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ09yZ2FuaXNhdGlvbkFkZGVkJyk7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBvcmdhbmlzYXRpb24gaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE1lc3NhZ2VTZW50UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIC8qIFxyXG4gICAgICAgICAgICBCaXQgaGFja3ksIGJ1dCBjbGVhcmluZyB0aGUgc2Vzc2lvblN0b3JhZ2UgaGVyZSB0byBjbGVhciBtZXNzYWdlIHN0YXRlIGhlcmUuIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIkNvdXJpZXJNZXNzYWdlVXNlcnNcIilcclxuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdNZXNzYWdlU2VudCcpO1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdNZXNzYWdlIHNlbnQnO1xyXG4gICAgfSBlbHNlIGlmIChGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0gJiYgRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ0ZvcmNlQ29udGFjdFVwZGF0ZWQnKTtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnUGVyc29uYWwgY29udGFjdCBkZXRhaWxzIHVwZGF0ZWQnO1xyXG4gICAgfSBcclxuXHJcbiAgICBpZiAoc25hY2tiYXJNZXNzYWdlKSB7XHJcbiAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LmFkZCgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIHNuYWNrYmFyLmlubmVySFRNTCA9IHNuYWNrYmFyTWVzc2FnZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QucmVtb3ZlKCdzbmFja2Jhci0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcblxyXG59KShcIiNzbmFja2JhclwiKTtcclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIC8vZnVuY3Rpb24gdG8gbWFrZSB3aG9sZSB0YWJsZSB0ciBjbGlja2FibGVcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHRyJykuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG5cclxuLy8gICAgICAgICBpZiAoZWwuZGF0YXNldC5ocmVmICE9bnVsbCkge1xyXG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcclxuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmRhdGFzZXQuaHJlZjtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KShcInRhYmxlXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9