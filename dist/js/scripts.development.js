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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0RyYWZ0TWVzc2FnZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR3JvdXBzVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvSWRTZXNzaW9uU3RvcmFnZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTGF6eUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oaW50LXNuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db21wb3NlU3RhZmZNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db3VyaWVyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzLmpzIl0sIm5hbWVzIjpbIkJvdHRvbURyYXdlciIsIl9vcGVuQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIkNoZWNrYm94RGlzYWJsZUJ1dHRvbkhlbHBlciIsImJ1dHRvblNlbGVjdG9yIiwiY2hlY2tib3hTZWxlY3RvciIsIl9idXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJfY2hlY2tib3giLCJjaGVja2VkIiwiX2Rpc2FibGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIl9lbmFibGVCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJEcmFmdE1lc3NhZ2VEcmF3ZXIiLCJudW1iZXJPZlJlY2lwaWVudHMiLCJ0b3RhbFNlbGVjdG9yIiwiY29va2llSGVscGVyIiwiU2ltcGxlQ29va2llSGVscGVyIiwiX3RvdGFsc0VsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdldCIsIl9ib3R0b21EcmF3ZXIiLCJ1cGRhdGUiLCJpbm5lclRleHQiLCJzaG93IiwiaGlkZSIsImdyb3VwRXhpc3QiLCJnZXRFbGVtZW50QnlJZCIsInVzZUNoZWNrYm94ZXMiLCJoYXNBdHRyaWJ1dGUiLCJ1c2VTaW5nbGVTZWxlY3RDaGVja2JveCIsImxvY2tSb290Tm9kZSIsInNlbGVjdG9yIiwiaW50aWFsbHlTZWxlY3RlZE5vZGVzIiwiZ3JvdXBTZWxlY3QiLCJncm91cFRleHRhcmVhIiwicGFyZW50RWxlbWVudCIsInNlbGVjdGVkT3B0aW9uc05vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidmFsdWUiLCJtYXRjaGVzIiwicGF0aFRvVW5jaGVjayIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjYlNlbGVjdG9yIiwiY2hlY2JveFRvVW5jaGVjayIsImNsaWNrIiwic2VhcmNoUGFydHMiLCJnZXRVcmxWYXJzIiwidmFycyIsInBhcnRzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibSIsImtleSIsInBhZ2VQYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJncm91cFBhcmFtIiwiZ3JvdXAiLCJzZWFyY2hQYXJhbSIsIlNlYXJjaCIsImdldFBhZ2VQYXRoRm9yR3JvdXAiLCJncnAiLCJzaG91bGRQYXJlbnRCZU9wZW4iLCJwYXRoIiwicGF0aFRvQ2hlY2siLCJzdGFydHNXaXRoIiwiaXNTZWxlY3RlZEdyb3VwIiwicGFyYW1zVG9DaGVjayIsImRlY29kZVVSSUNvbXBvbmVudCIsImJ1aWxkTGluayIsInRleHQiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsImJ1aWxkQ2hlY2tib3giLCJwYXJlbnRDaGVja2VkIiwiY2hlY2tib3giLCJ0eXBlIiwibmFtZSIsImlkIiwibmV3UGFyZW50U2VsZWN0ZWQiLCJkaXNhYmxlZCIsIm5ld0NoZWNrZWQiLCJpbmRleE9mIiwibGFiZWwiLCJjaGVja1NwYW4iLCJib3JkZXJTcGFuIiwiYXBwZW5kQ2hpbGQiLCJidWlsZENoZWNrYm94TGFiZWwiLCJjaGVja2JveExhYmVsIiwiaW5uZXJIVE1MIiwiZm9yIiwidHJhbnNmZXJWYWx1ZXMiLCJkYXRhIiwiZWxlbXMiLCJwb3B1bGF0ZUdyb3VwRmllbGQiLCJ0ZXh0YXJlYSIsImVsZW1lbnQiLCJleGlzdGluZ09wdGlvblZhbHVlcyIsIkFycmF5IiwiZnJvbSIsIm9wdGlvbnMiLCJtYXAiLCJvcHQiLCJkYXRhX2kiLCJkYXRhX2N1cnJlbnQiLCJzdWJzdHJpbmciLCJuZXdPcHRpb24iLCJzZWxlY3RlZCIsImFwcGVuZENoaWxkcmVuRm9yTW9kZSIsInBhcmVudCIsImNoZWNrYm94UmVzdWx0IiwiZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudCIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInVwZGF0ZXJGbiIsImN1cnJlbnRMb29wQ2hpbGQiLCJoYW5kbGVDaGVja2JveENsaWNrIiwicGFyZW50TGkiLCJwYXJlbnROb2RlIiwiYWxsR3JvdXBDaGVja2JveGVzIiwiY2hlY2tib3hUb1VwZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRDaGVja2JveGVzIiwiaGlkZGVuRmllbGQiLCJzdHJ1Y3R1cmUiLCJvcHRpb25faSIsIm9wdGlvbiIsInNlZ21lbnRzIiwic3BsaXQiLCJub2RlVG9DaGVjayIsInNlZ21lbnRfaSIsInNlZyIsInRyZWVDb250YWluZXIiLCJhY3RpdmVDaGlsZHJlbiIsImFjX2kiLCJhY3RpdmVDaGlsZCIsImRpc3BsYXlDaGlsZEtleXMiLCJjdXJyVGV4dCIsImN1cnJQYXRoIiwib2JqIiwiZWxlbWVudFRvQWRkVG8iLCJsZXZlbCIsInBhcmVudHNDaGVja2VkIiwiY2hpbGRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudENoZWNrZWRTdGF0ZSIsImNoaWxkTGlzdEl0ZW0iLCJjaGlsZExpc3QiLCJja19pIiwiY2hpbGRLZXkiLCJyZXBsYWNlQ2hpbGQiLCJJZFNlc3Npb25TdG9yYWdlSGVscGVyIiwiX25hbWUiLCJpbml0aWFsIiwiX2luaXRpYWxpc2UiLCJfaXRlbXMiLCJNYXAiLCJmb3JFYWNoIiwic2V0Iiwic2VsZWN0ZWRJdGVtc0pzb24iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJfcGVyc2lzdCIsIkpTT04iLCJwYXJzZSIsIml0ZW1zIiwiZ2V0SXRlbXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX3VwZGF0ZSIsImdldENvdW50IiwiaWRzIiwiaWRzVG9LZWVwIiwiZ2V0SWRzIiwiaW5jbHVkZXMiLCJzaXplIiwiZGVsZXRlIiwiZW50cmllcyIsImhhcyIsIkNvdXJpZXJMYXp5TG9hZGVyIiwibG9hZGVyRWxlbWVudCIsImxvYWRlckZuIiwiY29uZmlnT2JqIiwiY29uZmlnRGVmYXVsdHMiLCJsb2FkZXJDbGFzcyIsImxvYWRlckxvYWRpbmdDbGFzcyIsImRlYm91bmNlTXMiLCJwZWVrRGlzdGFuY2UiLCJkZWJ1ZyIsIl9sb2FkZXIiLCJfbG9hZGVyRnVuYyIsIl9jb25maWciLCJfaGFzTGlzdGVuZXJzQWRkZWQiLCJfbGF6eUxvYWRDaGVjayIsImRlYm91bmNlIiwiX2RvTG9hZE1vcmVDaGVjayIsIl9jb25kaXRpb25hbERlYnVnTG9nIiwiX3N0b3BMaXN0ZW5pbmciLCJfZG9uZVNlYXJjaGluZyIsIl9zdGFydExpc3RlbmluZyIsImJpbmQiLCJ2aXNpYmxlIiwibW9yZVRvTG9hZCIsIl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9EZWJ1ZyIsImxvZ2dlckZ1bmMiLCJjb25zb2xlIiwibG9nIiwiaGlnaGVzdFZpc2libGVZUG9zIiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwibG9hZE1vcmVUcmlnZ2VyUG9zIiwiTWF0aCIsIm1pbiIsIm9mZnNldFRvcCIsInBlZWtQb3NpdGlvblZpc2libGUiLCJzaG91bGRMb2FkTW9yZSIsInRhYmxlIiwic2hvd01vcmVUYWJsZUJ1dHRvbnMiLCJzaG93QWxsQnV0dG9uIiwidGFibGVJZCIsImRlZmF1bHRJdGVtTGltaXQiLCJwYXNzZWRJdGVtTGltaXQiLCJwYXJzZWRJdGVtTGltaXQiLCJwYXJzZUludCIsImxpbWl0VG9Vc2UiLCJpc05hTiIsInRhYmxlQm9keSIsInRCb2RpZXMiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzIiwiYm9keVJvdyIsInN0eWxlIiwiZGlzcGxheSIsImVsIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaWx0ZXIiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwic3BhbiIsInBsdXJhbGlzZWRHcm91cHMiLCJjb29raWVTdHJpbmciLCJjb29raWUiLCJjb29raWVzIiwibWF0Y2hpbmdDb29raWUiLCJmaW5kIiwiYyIsIl92YWx1ZSIsIm5ld0Nvb2tpZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3BvbnNlcyIsInJlc3BvbnNlc0xpc3QiLCJyZXNwb25zZSIsImlkeCIsInRyaW0iLCJzaG93Rmlyc3RFbXB5SXRlbSIsImN1cnJlbnRSZXNwb25zZSIsImNvcHlJdGVtc0ZvcndhcmQiLCJpbmRleCIsInByZXZJbnB1dCIsImlucHV0IiwicmVtb3ZlTGFzdEVtcHR5SXRlbSIsInJlbW92ZUlkeCIsImFkZFJlc3BvbnNlQnV0dG9uIiwiYmx1ciIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNsb3Nlc3QiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNuYWNrYmFyU3RvcmFnZUl0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJzbmFja2JhciIsInNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSIsImxvY2F0aW9ucyIsIm1lbnUiLCJtZW51QnV0dG9uIiwibWVudUNoaWxkIiwibWFpbiIsImFkZEJ0biIsInN1YmplY3RJbnB1dCIsIm1lc3NhZ2VJbnB1dCIsInJlc2VuZElucHV0IiwicmVzcG9uc2VPcHRpb25zIiwiY29va2llTWVzc2FnZUhlbHBlciIsImNvb2tpZUF1dG9SZXNlbmRIZWxwZXIiLCJjb29raWVSZXNwb25zZUhlbHBlciIsImlkc1Nlc3Npb25IZWxwZXIiLCJnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZyIsIm5vbkVtcHR5T3B0aW9ucyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJqb2luIiwiZmlsdGVyQnlJZHMiLCJ4Iiwic2VsZWN0T3B0aW9ucyIsIm5ld1Bob25lUm93IiwibmV3UGhvbmUiLCJjbGFzc05hbWUiLCJfcmVudW1iZXJJbnB1dHMiLCJpZGVudGlmaWVyIiwiaW5wdXRzIiwiaW5wIiwic3BuIiwibmV3RW1haWxSb3ciLCJhZGRQaG9uZUJ0biIsImFkZEVtYWlsQnRuIiwicmVtb3ZlRW1haWxCdXR0b25zIiwicmVtb3ZlUGhvbmVCdXR0b25zIiwiY29udGFjdFByb2ZpbGVGb3JtIiwiZW1wdHlJbnB1dHNUb1JlbW92ZSIsImVtcHR5SW5wdXQiLCJmb3JtR3JvdXAiLCJpZFNoIiwiZG1kIiwibG9hZGVyIiwiYWxsQ2hlY2tib3hlc0luVGFibGUiLCJpdGVtc1RoYXRTaG91bGRCZVNlbGVjdGVkIiwiY2IiLCJoYXNJZCIsImFsbENoZWNrYm94ZXNTZWxlY3RlZCIsImV2ZXJ5IiwiYWxsQ29udGFjdHMiLCJoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UiLCJjb21iaW5lRm4iLCJhbGxDb250YWN0c0Rpc3BsYXllZCIsImV4aXN0aW5nQ29udGFjdHMiLCJuZXdJdGVtcyIsInNldEl0ZW1zIiwiZGVzZWxlY3RBbGwiLCJ0b0Rlc2VsZWN0IiwiZXhpc3RpbmdJdGVtcyIsImFsbEl0ZW1zRm9yR3JvdXAiLCJzZWxlY3RBbGwiLCJ0b1NlbGVjdCIsImdyb3VwSXRlbXNUb0FkZCIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsInRvZ2dsZVNlbGVjdEFsbENoZWNrYm94IiwidXNlcnNUYWJsZSIsInVzZXJzVGFibGVCb2R5IiwiY3VycmVudFBhZ2UiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImNyaXRlcmlhS2V5Iiwic2VhcmNoQ3JpdGVyaWFTdHJpbmciLCJnZXRTZWFyY2hFbmRwb2ludCIsInN0YWZmVGFibGUiLCJuZXdUb3RhbCIsImNyZWF0ZUNoZWNrYm94RmllbGQiLCJjZWxsIiwiY3JlYXRlQ2VsbFdpdGhUZXh0IiwiYWRkUm93IiwidXNlciIsIm5ld1JvdyIsImNvbGxhciIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJhZGRSZXN1bHRSb3dzIiwibG9hZGVyUGFnZVNpemUiLCJMYXp5TG9hZGVyIiwiZG9uZSIsImVuZHBvaW50IiwiZmV0Y2giLCJqc29uIiwicmVzdWx0cyIsImhhc1Jlc3VsdHMiLCJtb3JlUmVzdWx0c0xpa2VseSIsImVycm9yIiwib25jbGljayIsImV2ZW50IiwiZHJvcGRvd25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9wZW5Ecm9wZG93biIsInRvZ2dsZVNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJ5IiwiY29udGFjdFBhcmFtIiwiT3JnYW5pc2F0aW9uUGFyYW0iLCJNZXNzYWdlU2VudFBhcmFtIiwiRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtIiwic25hY2tiYXJNZXNzYWdlIiwicmVtb3ZlSXRlbSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFj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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFtQkMsR0FBbkIsQ0FBdUIsa0JBQXZCO0FBQ0FrVSxZQUFRLENBQUM5TixTQUFULEdBQXFCNlUsZUFBckI7QUFFQWxILGNBQVUsQ0FBQyxZQUFVO0FBQ2pCRyxjQUFRLENBQUNuVSxTQUFULENBQW1CRSxNQUFuQixDQUEwQixrQkFBMUI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUFFSixDQXBDRCxFQW9DRyxXQXBDSCxFOzs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZSIsImZpbGUiOiJkaXN0L2pzL3NjcmlwdHMuZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKlxyXG4gQ2xhc3MgdGhhdCBmYWNpbGl0YXRlIHRoZSBoaWRpbmcgYW5kIHNob3dpbmcgb2YgdGhlIGJvdHRvbSBiYXIuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9vcGVuQ2xhc3MgPSBcImJvdHRvbS1kcmF3ZXItb3BlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcbn07IiwiLy8gRGlzYWJsZXMgYW5kIGVuYWJsZXMgYSBidXR0b24gYnkgd2hldGhlciBvciBub3QgYSBjaGVja2JveCBpcyBzZWxlY3RlZC5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hEaXNhYmxlQnV0dG9uSGVscGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1dHRvblNlbGVjdG9yLCBjaGVja2JveFNlbGVjdG9yKSB7XHJcbiAgICAgICAgLy8gR3JhYiB0aGUgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b25TZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9idXR0b24pIHRocm93IG5ldyBFcnJvcihcIkJ1dHRvbiBzZWxlY3RvciBkb2VzbnQgbWF0Y2ggYW4gZWxlbWVudFwiKTtcclxuICAgICAgICAvLyBHcmFiIHRoZSBjaGVja2JveFxyXG4gICAgICAgIHRoaXMuX2NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjaGVja2JveFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrYm94KSB0aHJvdyBuZXcgRXJyb3IoXCJDaGVja2JveCBzZWxlY3RvciBkb2VzbnQgbWF0Y2ggYW4gZWxlbWVudFwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVzcGVjdCB0aGUgY2hlY2tib3hlcyBzdGFydGluZyBzdGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYW5kIGV2ZW50IGxpc3RlbmVyIHRoYXQgZW5hYmxlcyBhbmQgZGlzYWJsZXMgdGhlIGJ1dHRvbi5cclxuICAgICAgICB0aGlzLl9jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID9cclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNhYmxlcyB0aGUgYnV0dG9uXHJcbiAgICBfZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLl9idXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuYWJsZXMgdGhlIGJ1dHRvblxyXG4gICAgX2VuYWJsZUJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLl9idXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuL0JvdHRvbURyYXdlcic7XHJcbmltcG9ydCBTaW1wbGVDb29raWVIZWxwZXIgZnJvbSAnLi9TaW1wbGVDb29raWVIZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZnRNZXNzYWdlRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlck9mUmVjaXBpZW50cywgdG90YWxTZWxlY3Rvcj1cIi5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdG90YWxcIikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVGl0bGUnKTtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b3RhbFNlbGVjdG9yKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RpdGxlJykudGV4dENvbnRlbnQgPSBjb29raWVIZWxwZXIuZ2V0KCkgfHwgJ1VudGl0bGVkJztcclxuICAgICAgICBpZiAoIXRoaXMuX3RvdGFsc0VsZW1lbnQpIHsgdGhyb3cgRXJyb3IoYE5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHBhc3NlZCBpbiBzZWxlY3RvciAke3RvdGFsU2VsZWN0b3J9YCk7IH1cclxuICAgICAgICB0aGlzLl9ib3R0b21EcmF3ZXIgPSBuZXcgQm90dG9tRHJhd2VyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgdXBkYXRlKG51bWJlck9mUmVjaXBpZW50cykge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQuaW5uZXJUZXh0ID0gbnVtYmVyT2ZSZWNpcGllbnRzO1xyXG4gICAgICAgIG51bWJlck9mUmVjaXBpZW50cyA/IHRoaXMuX2JvdHRvbURyYXdlci5zaG93KCkgOiB0aGlzLl9ib3R0b21EcmF3ZXIuaGlkZSgpO1xyXG4gICAgfVxyXG59IiwiIHZhciBncm91cEV4aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFwiKTtcclxuICAgIGlmKGdyb3VwRXhpc3Qpe1xyXG5cclxuICAgICAgICB2YXIgdXNlQ2hlY2tib3hlcyA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtY2hlY2tib3gnKTtcclxuICAgICAgICB2YXIgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLXNpbmdsZS1zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgICB2YXIgbG9ja1Jvb3ROb2RlID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9jay1yb290Jyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgIC8vQ2hlY2sgb24gcGFnZSB3aGV0aGVyIEdyb3VwIE11bHRpIFNlbGVjdCBleGlzdHNcclxuICAgIHZhciBpbnRpYWxseVNlbGVjdGVkTm9kZXMgPSBbXTtcclxuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBTZWxlY3RvclwiKTtcclxuICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuICAgIC8vIElmIHRoZSBHcm91cCBNdWx0aSBTZWxlY3QgZG9lcyBleGlzdCwgaGlkZSBpdCAoaWYgSlMgZW5hYmxlZClcclxuICAgIGlmIChncm91cFNlbGVjdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGdyb3VwU2VsZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICBncm91cFRleHRhcmVhLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgLy8gR3JhYiBhbGwgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkXHJcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uc05vZGVzID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE9wdGlvbnNOb2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgaW50aWFsbHlTZWxlY3RlZE5vZGVzLnB1c2goc2VsZWN0ZWRPcHRpb25zTm9kZXNbaV0udmFsdWUgfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudGFnPi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoVG9VbmNoZWNrID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGF0aFwiKS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2JTZWxlY3RvciA9ICdpbnB1dFt0eXBlPWNoZWNrYm94XS5Hcm91cEl0ZW1bdmFsdWU9XCInK3BhdGhUb1VuY2hlY2srJ1wiXSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2JveFRvVW5jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2JTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2JveFRvVW5jaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNib3hUb1VuY2hlY2suY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWFyY2hQYXJ0cyA9IChmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xyXG4gICAgICAgIHZhciB2YXJzID0ge307XHJcbiAgICAgICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCBmdW5jdGlvbihtLGtleSx2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2dyb3VwPVwiO1xyXG4gICAgdmFyIGdyb3VwUGFyYW0gPSBzZWFyY2hQYXJ0cy5ncm91cDtcclxuICAgIHZhciBzZWFyY2hQYXJhbSA9IHNlYXJjaFBhcnRzLlNlYXJjaDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBidWlsZCB0aGUgcGF0aFxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVBhdGhGb3JHcm91cChncm91cCkge1xyXG4gICAgICB2YXIgZ3JwID0gZ3JvdXAgPT09IFwiXCIgPyBcIlxcXFxcIiA6IGdyb3VwO1xyXG4gICAgICByZXR1cm4gcGFnZVBhdGggKyBncnA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkIHNob3VsZCBiZSBvcGVuIGkuZS4gdG8gcmV2ZWFsIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIHNob3VsZFBhcmVudEJlT3BlbihwYXRoKSB7XHJcbiAgICAgICAgaWYgKCFncm91cFBhcmFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggKyBcIlxcXFxcIik7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwUGFyYW0uc3RhcnRzV2l0aChwYXRoVG9DaGVjaykgJiYgZ3JvdXBQYXJhbSAhPSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGRlZCBpcyB0aGUgY3VycmVudGx5U2VsZWN0ZWRHcm91cFxyXG4gICAgZnVuY3Rpb24gaXNTZWxlY3RlZEdyb3VwKHBhdGgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zVG9DaGVjayA9IGRlY29kZVVSSUNvbXBvbmVudChncm91cFBhcmFtIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCB8fCBcIlxcXFxcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXNUb0NoZWNrID09PSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgbGluayBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZExpbmsodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgbGluay5ocmVmID0gZ2V0UGFnZVBhdGhGb3JHcm91cChwYXRoKTtcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlua1wiKTtcclxuXHJcbiAgICAgICAgLy8gTkIuICBPcmlnaW5hbGx5IHdlIGRpZG50IHdhbnQgdGhlIGN1cnJlbnQgY2xhc3MgdG8gYmUgYWRkZWQgaWYgZG9pbmcgYSBzZWFyY2gsIGJ1dCB0aGluayB3ZSBkbyBub3cuXHJcbiAgICAgICAgLy8gaWYgKCghc2VhcmNoUGFyYW0pICYmICBpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcclxuICAgICAgICAvLyBpZiAoaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XHJcbiAgICAgICAgLy8gICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gbGluaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggbGFiZWwgZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiR3JvdXBJdGVtXCIpO1xyXG4gICAgICAgIGNoZWNrYm94Lm5hbWUgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94LnZhbHVlID0gcGF0aDtcclxuICAgICAgICBjaGVja2JveC5pZCA9IHRleHQ7XHJcbiAgICAgICAgdmFyIG5ld1BhcmVudFNlbGVjdGVkID0gcGFyZW50Q2hlY2tlZDtcclxuXHJcbiAgICAgICAgaWYgKHBhdGggPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGRpc2FibGVkIGFuZCBjaGVja2VkIEJVVCB0aGUgY2hpbGRyZW4gb2YgdGhpcyBub2RlIHNob3VsZCBhY3QgYXMgdGhvdWdoIGl0IGlzbnQgY2hlY2tlZCBzbyB3ZSBkb250IHVwZGF0ZSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENoZWNrZWQgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYWxsIGl0cyBjaGlsZHJlbiBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgbm90IGNoZWNrZWQgaXRzIGNoaWxkcmVuIHNlbGVjdGVkIHN0YXRlIGRlcGVuZCBvbiB0aGUgY2hpbGRzIHZhbHVlLCBhbmQgbm90IGJlIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHZhciBuZXdDaGVja2VkID0gaW50aWFsbHlTZWxlY3RlZE5vZGVzLmluZGV4T2YocGF0aCB8fCAnXFxcXCcpID49IDA7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgICAgICBuZXdQYXJlbnRTZWxlY3RlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdHlsZSBhcyBhIHJhZGlvIGJ1dHRvblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjaGVja1NwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2NoZWNrJyk7XHJcbiAgICAgICAgICAgIHZhciBib3JkZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19ib3JkZXInKTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tTcGFuKTtcclxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoYm9yZGVyU3Bhbik7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19pbnB1dCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveCA9IGxhYmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtjaGVja2JveCwgbmV3UGFyZW50U2VsZWN0ZWR9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjaGVja2JveExhYmVsLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5mb3IgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2tib3hMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFuc2ZlclZhbHVlcygpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgZWxlbXM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Hcm91cEl0ZW0nKVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8ZWxlbXMubGVuZ3RoO2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb2NrUm9vdE5vZGUgJiYgIShlbGVtc1tpXS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOby1vcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbXNbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChlbGVtc1tpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSkge1xyXG5cclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcbiAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR3JvdXBTZWxlY3RvcicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nT3B0aW9uVmFsdWVzID0gQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfaSA9IDA7IGRhdGFfaSA8IGRhdGEubGVuZ3RoOyBkYXRhX2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9jdXJyZW50ID0gZGF0YVtkYXRhX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj5BbGwgQ29udGFjdCBHcm91cHM8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+JyArIGRhdGFfY3VycmVudC5zdWJzdHJpbmcoMSkgKyAnPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgb3B0aW9uIGV4aXN0cyAtIGFkZCBpdCBpZiBub3RcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ09wdGlvblZhbHVlcy5pbmRleE9mKGRhdGFfY3VycmVudCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gZGF0YV9jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhX2N1cnJlbnQ7XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uc1tpXS5zZWxlY3RlZCA9IGRhdGEuaW5kZXhPZihlbGVtZW50Lm9wdGlvbnNbaV0udmFsdWUpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKHBhcmVudCwgdGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIGlmICh1c2VDaGVja2JveGVzIHx8IHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCB0aGUgYmxhbmsgdmFsdWUgZm9yICdBbGwgQ29udGFjdCBHcm91cHMnXHJcbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXFxcXFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRDaGVja2JveExhYmVsKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrYm94UmVzdWx0ID0gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKTtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmNoZWNrYm94KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94UmVzdWx0Lm5ld1BhcmVudFNlbGVjdGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGluayB0byByZWZyZXNoIHBhZ2Ugd2l0aCBzZWxlY3RlZCBub2RlLlxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRMaW5rKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudENoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY3VycmVudCwgY2hpbGRyZW4sIHVwZGF0ZXJGbikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRMb29wQ2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMb29wQ2hpbGQgIT09IGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZXJGbihjdXJyZW50TG9vcENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKGUsIGNoZWNrYm94KSB7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRMaSA9IGNoZWNrYm94LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gY2Fubm90IGJlIGRlc2VsZXRlZC5cclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbGxHcm91cENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGFsbEdyb3VwQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXJlbnRMaS5jbGFzc0xpc3QuY29udGFpbnMoJ2dyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50Jykpe1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjaGlsZENoZWNrYm94ZXMgPSBwYXJlbnRMaS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JhYiB0aGUgc2VsZWN0IGxpc3QgYW5kIGFsbCBvZiBpdHMgb3B0aW9uc1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcblxyXG4gICAgdmFyIGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZ3JvdXBQYXJhbSB8fCAnXFxcXCc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGNvbGxlY3Rpb25zIHdpdGggc3RhcnRpbmcga2V5IGZvciB0aGUgcm9vdC5cclxuICAgIHZhciBzdHJ1Y3R1cmUgPSB7IFwiXFxcXFwiOiB7fSB9O1xyXG5cclxuICAgIC8vIEJ1aWxkIG9uIHRoZSBiYXNlIHN0cnVjdHVyZSBieSBsb29waW5nIHRocm91Z2ggZWFjaCBzZWxlY3QgaXRlbS5cclxuICAgIGZvciAodmFyIG9wdGlvbl9pPTA7IG9wdGlvbl9pPG9wdGlvbnMubGVuZ3RoOyBvcHRpb25faSsrKSB7XHJcblxyXG4gICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW29wdGlvbl9pXTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSB0aGUgZ3JvdXAgbmFtZSBpbnRvIGFsbCBpdHMgcGF0aCBzZWdtZW50c1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBvcHRpb24udGV4dENvbnRlbnQuc3BsaXQoXCJcXFxcXCIpO1xyXG4gICAgICAgICAgICAvLyBTdGFydCBhdCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgbm9kZVRvQ2hlY2sgPSBzdHJ1Y3R1cmVbXCJcXFxcXCJdO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yIGVhY2ggc2VnbWVudCBlbnN1cmUgdGhhdCBhbGwgbGV2ZWxzIG9mIHRoZSBzdHJ1Y3R1cmUgYXJlIGluIHBsYWNlLlxyXG4gICAgICAgICAgICBmb3IgKHZhciBzZWdtZW50X2k9MDsgc2VnbWVudF9pPHNlZ21lbnRzLmxlbmd0aDsgc2VnbWVudF9pKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnID0gc2VnbWVudHNbc2VnbWVudF9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VnICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlVG9DaGVja1tzZWddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrW3NlZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2sgPSBub2RlVG9DaGVja1tzZWddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBiYXNlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHBvcHVsYXRlZFxyXG4gICAgdmFyIHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0LS1yb290XCIpO1xyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgYWxsIHRoZSBjbGlja3MgYXQgdGhlIHBhcmVudCBsZXZlbFxyXG4gICAgdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjaGVja2JveCBpdGVtcyBiZWluZyBzZWxlY3RlZC5cclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljayhlLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgLy8gV2Ugb25seSBjYXJlIGFib3V0IGNsaWNrcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBwYXJlbnRzXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuIG9wZW4gcGFyZW50IGl0ZW0gaXMgY2xpY2tlZCwgY2xvc2UgaXQsIGJ1dCBhbHNvIGFsbCBpdHMgb3BlbiBkZXNjZW5kYW50cy5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZHJlbiA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYWNfaT0wOyBhY19pPGFjdGl2ZUNoaWxkcmVuLmxlbmd0aDsgYWNfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gYWN0aXZlQ2hpbGRyZW5bYWNfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9wZW4gYW55IGNsb3NlZCBwYXJlbnRzIHRoYXQgYXJlIGNsaWNrZWQuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGJ1aWxkcyB0aGUgc2VsZWN0IGxpc3QgZnJvbSB0aGUgcHJldmlvdXMgbm9kZSBzdHJ1Y3R1cmUuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNoaWxkS2V5cyhjdXJyVGV4dCwgY3VyclBhdGgsIG9iaiwgZWxlbWVudFRvQWRkVG8sIGxldmVsLCBwYXJlbnRzQ2hlY2tlZCkge1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudENoZWNrZWRTdGF0ZSA9IHBhcmVudHNDaGVja2VkO1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICghdXNlQ2hlY2tib3hlcyAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggJiYgaXNTZWxlY3RlZEdyb3VwKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgY3VycmVudCBzdGF0ZSB3aGVuIGluIHRoZSAnbGluayBtb2RlJ1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWN1cnJlbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoaWxkS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhdCB0aGUgYm90dG9tIG9mIGEgYnJhbmNoIGkuZS4gbm8gY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGlzIG5vZGUgaGFzIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHNob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3QuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0XCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBDYWxsIHJlY3Vyc2l2ZWx5IHdpdGggdXBkYXRlZCBwYXJhbXMgZm9yIGVhY2ggY2hpbGQgbm9kZVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgY2tfaT0wOyBja19pIDwgY2hpbGRLZXlzLmxlbmd0aDsgY2tfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRLZXkgPSBjaGlsZEtleXNbY2tfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkS2V5ICE9PSAnQWxsIGNvbnRhY3RzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDaGlsZEtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtjaGlsZEtleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzdGFydGluZyBhdCB0aGUgcm9vdC5cclxuICAgIGRpc3BsYXlDaGlsZEtleXMoXCJBbGwgQ29udGFjdCBHcm91cHNcIiwgXCJcIiwgc3RydWN0dXJlW1wiXFxcXFwiXSwgdHJlZUNvbnRhaW5lciwgMSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgdGhlIHNlbGVjdCBsaXN0IHdpdGggdGhlIG5ldyB0cmVlXHJcbiAgICBncm91cFNlbGVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0cmVlQ29udGFpbmVyLCBncm91cFNlbGVjdCk7XHJcblxyXG4gICAgdHJlZUNvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcclxuXHJcbiAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxufSkoXCIjR3JvdXBcIiwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpO1xyXG59XHJcbiIsIi8vIFN0b3JlIHNlbGVjdGVkIHVzZXJzIGluc2lkZSBzZXNzaW9uIHN0b3JhZ2VcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICBjb25zdCBpbml0aWFsID0gdGhpcy5faW5pdGlhbGlzZSgpO1xyXG4gICAgdGhpcy5faXRlbXMgPSBuZXcgTWFwKCk7XHJcbiAgICBpbml0aWFsLmZvckVhY2goKHtpZCwgbmFtZX0pID0+IHRoaXMuX2l0ZW1zLnNldChpZCwgbmFtZSkpO1xyXG4gIH1cclxuICBcclxuICAvLyBQb3B1bGF0ZSBzdGFydCBpZHMsIGluaXRpYWxpc2VzIGNvb2tpZSBpZiBub3QgcHJlc2VudFxyXG4gIF9pbml0aWFsaXNlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtc0pzb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRoaXMuX25hbWUpO1xyXG4gICAgaWYgKCFzZWxlY3RlZEl0ZW1zSnNvbikgeyAgICAgICAgICAgICAgIFxyXG4gICAgICB0aGlzLl9wZXJzaXN0KFtdKTsgICBcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VsZWN0ZWRJdGVtc0pzb24pO1xyXG4gIH1cclxuICBcclxuICAvLyBTYXZlIHRoZSBuZXcgaWRzIHRvIHRoZSBzZXNzaW9uIHN0b3JhZ2UgYWZ0ZXIgdXBkYXRlXHJcbiAgX3VwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgdGhpcy5fcGVyc2lzdChpdGVtcyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNhdmUgdGhlIHBhc3NlZCBpbiBpZHMgdG8gdGhlIGNvb2tpZVxyXG4gIF9wZXJzaXN0KGl0ZW1zKSB7ICAgIFxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9uYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLy8gU2V0IGFsbCB0aGUgaXRlbXMgaW4gb25lIGhpdC4gUmV0dXJucyB0aGUgbmV3IGNvdW50LlxyXG4gIHNldEl0ZW1zKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gbmV3IE1hcCgpO1xyXG4gICAgaXRlbXMuZm9yRWFjaChpID0+IHRoaXMuX2l0ZW1zLnNldChpLmlkLCBpLm5hbWUpKTtcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgdGhlIGNvdW50IG9mIGl0ZW1zIGluIHRoZSBzZWxlY3Rpb24uXHJcbiAgZ2V0SWRzKCkge1xyXG4gICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtcy5rZXlzKCkpO1xyXG4gICAgcmV0dXJuIGlkcztcclxuICB9ICBcclxuXHJcbiAgZmlsdGVyQnlJZHMoaWRzVG9LZWVwKSB7XHJcbiAgICBjb25zdCBpZHMgPSB0aGlzLmdldElkcygpO1xyXG4gICAgcmV0dXJuIGlkcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICBpZiAoIWlkc1RvS2VlcC5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKGkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9ICBcclxuICBcclxuICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgY3VycmVudGx5IGluIHRoZSBtYXAuXHJcbiAgZ2V0Q291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuc2l6ZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmVtb3ZlIGl0ZW0gYnkgaXRzIGlkLiBSZXR1cm4gdGhlIG5ldyBjb3VudFxyXG4gIHJlbW92ZShpZCkge1xyXG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGlkKTsgICAgICBcclxuICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQWRkIG9uZSBvciBtb3JlIGl0ZW1zLiBSZXR1cm5zIHRoZSBuZXcgY291bnRcclxuICBhZGQoaWQsIG5hbWUpIHtcclxuICAgIHRoaXMuX2l0ZW1zLnNldChpZCwgbmFtZSk7XHJcbiAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gYWxsIGl0ZW1zIGluIGFycmF5IGZvcm1hdFxyXG4gIGdldEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXRlbXMuZW50cmllcygpKS5tYXAoKFtpZCwgbmFtZV0pID0+ICh7IGlkLCBuYW1lIH0pKTtcclxuICB9XHJcblxyXG4gIC8vIEdldCB0aGUgbmFtZSBmb3IgYSBwYXNzZWQgaWRcclxuICBnZXROYW1lKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXMuZ2V0KGlkKTtcclxuICB9XHJcblxyXG4gIC8vIERvZXMgdGhlIG1hcCBjb250YWluIHRoZSBwYXNzZWQgaW4gaWQuXHJcbiAgaGFzSWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5oYXMoaWQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuXHJcbi8qKlxyXG4gIENsYXNzIHRvIG1hbmFnZSB0aGUgbG9hZCBvbiBzY3JvbGwgZnVuY3Rpb25hbGl0eSBmb3IgYSBwYWdlLlxyXG4gIFdoZW4gdGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkIHNlcnZlciBzaWRlIGl0IHNob3VsZCBoaWRlIHRoZSBsb2FkZXIgZWxlbWVudCBpZiBubyBtb3JlIHJlc3VsdHMgdG8gbG9hZC5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cmllckxhenlMb2FkZXIge1xyXG4gIFxyXG4gIC8qKlxyXG4gICAgQ29uc3RydWN0b3JcclxuICAgIFBhcmFtc1xyXG4gICAgIC0gbG9hZGVyRWxlbWVudCAocmVxdWlyZWQpOiBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcyB0aGUgbG9hZGVyXHJcbiAgICAgLSBsb2FkZXJGbiAocmVxdWlyZWQpOiBUaGUgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIGxvYWQgdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdpbGwgYmUgcGFzc2VkIGEgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIG9uIGNvbXBsZXRpb24gd2l0aCBhIGJvb2wgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hldGhlciBvciBub3QgdGhlcmUgYXJlIG1vcmUgaXRlbXMgdG8gbG9hZC5cclxuICAgICAtIGNvbmZpZ09iaiAob3B0aW9uYWwpOiAgQW4gb2JqZWN0IHdob3NlIGtleSBhbmQgdmFsdWVzIHdpbGwgb3ZlcnJpZGUgZGVmYXVsdCBjb25maWcgc2V0dGluZ3MuXHJcbiAgKi8gICAgICAgICAgICAgICAgICAgIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBsb2FkZXJFbGVtZW50LCBcclxuICAgICAgbG9hZGVyRm4sIFxyXG4gICAgICBjb25maWdPYmogPSB7fVxyXG4gICkge1xyXG4gICAgICAgIFxyXG4gICAgLyoqXHJcbiAgICAgIERlZmF1bHQgY29uZmlnIHNldHRpbmdzXHJcbiAgICAqL1xyXG4gICAgY29uc3QgY29uZmlnRGVmYXVsdHMgPSB7XHJcbiAgICAgIGxvYWRlckNsYXNzOiAnbG9hZGVyJywgIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnRcclxuICAgICAgbG9hZGVyTG9hZGluZ0NsYXNzOiAnbG9hZGVyLS1sb2FkaW5nJywgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudCB3aGVuIHNlYXJjaGluZ1xyXG4gICAgICBkZWJvdW5jZU1zOiAxMDAsIC8vIGhvdyBsb25nIHRvIHdhaXQgYmV0d2VlbiBldmVudHMgYmVmb3JlIGNhbGxpbmcgbG9hZFxyXG4gICAgICBwZWVrRGlzdGFuY2U6IDAsIC8vIGhvdyBtdWNoIG9mIGxvYWRpbmcgZWxlbWVudCBzaG91bGQgYmUgb24gc2NyZW4gYmVmb3JlIGNhbGxpbmcgbG9hZFxyXG4gICAgICBkZWJ1ZzogZmFsc2UgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGxvZyBkZWJ1ZyBpbmZvIHRvIGNvbnNvbGUuXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyRWxlbWVudDtcclxuICAgIHRoaXMuX2xvYWRlckZ1bmMgPSBsb2FkZXJGbjtcclxuICAgICAgICBcclxuICAgIC8vIE1lcmdlIHRoZSBkZWZhdWx0cyBhbmQgcGFzc2VkIGluIGNvbmZpZ1xyXG4gICAgdGhpcy5fY29uZmlnID0geyAuLi5jb25maWdEZWZhdWx0cywgLi4uY29uZmlnT2JqIH07XHJcbiAgICBcclxuICAgIC8vIFRyYWNrIHdoZXRoZXIgbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZCBvciByZW1vdmVkXHJcbiAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAgICBcclxuICAgICAgICBcclxuICAgIGlmICghdGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTnVsbCBsb2FkZXIgZWxlbWVudCBwcm92aWRlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgb24gdGhlIGxvYWRlcnMgY2xhc3MgZnJvbSB0aGUgY29uZmlnXHJcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyQ2xhc3MpO1xyXG4gICAgXHJcbiAgICAvLyBEZWJvdW5jZSB0aGUgY2hlY2tcclxuICAgIHRoaXMuX2xhenlMb2FkQ2hlY2sgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuX2RvTG9hZE1vcmVDaGVjaygpKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQ2FsbGluZyBsb2FkIG1vcmUgZnVuY3Rpb24nKTtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKTtcclxuICAgICAgICB0aGlzLl9zdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2FsbCB0aGUgc2VhcmNoIGZ1bmN0aW9uICYgcGFzcyBpbiB0aGUgZG9uZSBzZWFyY2hpbmcgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLl9sb2FkZXJGdW5jKHRoaXMuX2RvbmVTZWFyY2hpbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vdCByZWFkeSB0byByZWxvYWQgeWV0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWJvdW5jZU1zKTtcclxuICAgIFxyXG4gICAgLy8gQWRkIHRoZSBldmVudHMgKGFsc28gZG9lcyBpbml0aWFsIGNoZWNrKVxyXG4gICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgIHRoaXMuX2RvbmVTZWFyY2hpbmcgPSB0aGlzLl9kb25lU2VhcmNoaW5nLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIFxyXG4gIF9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkodmlzaWJsZSkge1xyXG4gICAgaWYodmlzaWJsZSkge1xyXG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRrbGUgcmVzdWx0cyBjb21pbmcgYmFjayBpblxyXG4gIF9kb25lU2VhcmNoaW5nKG1vcmVUb0xvYWQpIHtcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coYF9kb25lU2VhcmNoaW5nIGNhbGxiYWNrIGNhbGxlZCB3aXRoIG1vcmUgdG8gbG9hZCAke21vcmVUb0xvYWR9YCk7XHJcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKSBcclxuICAgIGlmIChtb3JlVG9Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0FsbCBkb25lIC0gaGlkaW5nIGxvYWRlciBlbGVtZW50Jyk7XHJcbiAgICAgIHRoaXMuX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFdpcmUgdXAgZXZlbnQgbGlzdGVuZXJzIGFuZCBkbyBpbml0aWFsIGNoZWNrLlxyXG4gIF9zdGFydExpc3RlbmluZygpIHtcclxuICAgIGlmICghdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHsgICAgICBcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFkZGVkJyk7XHJcbiAgICAgIHRoaXMuX2xhenlMb2FkQ2hlY2soKTtcclxuICAgIH0gIGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWxyZWFkeSBpbiBwbGFjZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBSZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyc1xyXG4gIF9zdG9wTGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAgICAgIFxyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgcmVtb3ZlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm8gTGlzdGVuZXJzIHRvIHJlbW92ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBIZWxwZXIgdG8gbG9nIG9ubHkgaWYgZGVidWdnaW5nIGVuYWJsZWRcclxuICBfY29uZGl0aW9uYWxEZWJ1Z0xvZyh0b0RlYnVnLCBsb2dnZXJGdW5jID0gY29uc29sZS5sb2csICkge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kZWJ1Zykge1xyXG4gICAgICBsb2dnZXJGdW5jKHRvRGVidWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIERvIHRoZSBjaGVjayB0byBzZWUgaWYgc2NyZWVuIHNvbWV3aGVyZSBpdCBzaG91bGQgYmUgbG9hZGVkLlxyXG4gIF9kb0xvYWRNb3JlQ2hlY2soKSB7ICAgIFxyXG4gICAgY29uc3QgaGlnaGVzdFZpc2libGVZUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgY29uc3QgbG9hZE1vcmVUcmlnZ2VyUG9zID0gTWF0aC5taW4oKHRoaXMuX2xvYWRlci5vZmZzZXRUb3AgKyB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlKSwgZG9jdW1lbnRIZWlnaHQpOyBcclxuICAgIGNvbnN0IHBlZWtQb3NpdGlvblZpc2libGUgPSBoaWdoZXN0VmlzaWJsZVlQb3MgPj0gbG9hZE1vcmVUcmlnZ2VyUG9zO1xyXG4gICAgY29uc3Qgc2hvdWxkTG9hZE1vcmUgPSBwZWVrUG9zaXRpb25WaXNpYmxlO1xyXG4gICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdEb2luZyBsb2FkIG1vcmUgY2hlY2sgLi4uJyk7ICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyh7IFxyXG4gICAgICAnVG9wIHBvc2l0aW9uIG9mIGxvYWRlciBlbGVtZW50JzogdGhpcy5fbG9hZGVyLm9mZnNldFRvcCxcclxuICAgICAgJ0NvbmZpZyBwZWVrIGRpc3RhbmNlJzogdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSxcclxuICAgICAgJ1kgY28tb3JkaW5hdGUgd2hlbiBtb3JlIHNob3VsZCBiZSBsb2FkZWQgKGluY2x1ZGluZyBwZWVrLCBjb25zdHJhaW5lZCB0byBkb2MgaGVpZ2h0KSc6IGxvYWRNb3JlVHJpZ2dlclBvcyxcclxuICAgICAgJ0N1cnJlbnQgWSBwb3NpdGlvbiBvZiBzY3JvbGwnOiB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXHJcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXHJcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxyXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXHJcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiAgVVNBR0U6IFRvIHVzZSB0aGlzIGNvbnRyb2wgeW91IG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlIHRvIHRoZSBidXR0b24gdGhhdCBzaG91bGQgYmUgZG9pbmcgdGhlIHNob3cgYWxsLlxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC10YWJsZS1pZD1cIjw8aWQgb2YgdGFibGUgdG8gYmUgZWZmZWN0ZWQ+PlwiXHJcbiAqIFxyXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1saW1pdD1cIjIwXCIgLSBzZXRzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2hvdyBpbml0aWFsbHkuICBEZWZhdWx0IGlzIDEwXHJcbiAqICBcclxuICovXHJcblxyXG52YXIgc2hvd01vcmVUYWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1zaG93YWxsLXRhYmxlLWlkXScpO1xyXG5cclxuc2hvd01vcmVUYWJsZUJ1dHRvbnMuZm9yRWFjaChzaG93QWxsQnV0dG9uID0+IHtcclxuICB2YXIgdGFibGVJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLXRhYmxlLWlkXCIpO1xyXG5cclxuICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlkKTtcclxuICBpZiAodGFibGUpIHtcclxuXHJcbiAgICB2YXIgZGVmYXVsdEl0ZW1MaW1pdCA9IDEwOyAgICBcclxuICAgIHZhciBwYXNzZWRJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xyXG4gICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHBhc3NlZEl0ZW1MaW1pdCwgMTApO1xyXG4gICAgdmFyIGxpbWl0VG9Vc2UgPSBpc05hTihwYXJzZWRJdGVtTGltaXQpID8gZGVmYXVsdEl0ZW1MaW1pdCA6IHBhcnNlZEl0ZW1MaW1pdDtcclxuICAgIFxyXG4gICAgLy8gV2UgZG9udCB3YW50IHRoZSBoZWFkZXJzXHJcbiAgICB2YXIgdGFibGVCb2R5ID0gdGFibGUudEJvZGllc1swXTtcclxuICAgIGlmICghdGFibGVCb2R5KSB7IHJldHVybjsgfVxyXG5cclxuICAgIHZhciB0YWJsZUJvZHlMZW5ndGggPSB0YWJsZUJvZHkucm93cy5sZW5ndGg7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgPSAxLCBib2R5Um93OyBib2R5Um93ID0gdGFibGVCb2R5LnJvd3NbaS0xXTsgaSsrKSB7XHJcbiAgICAgIGlmIChpID4gbGltaXRUb1VzZSkge1xyXG4gICAgICAgIGJvZHlSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhYmxlQm9keUxlbmd0aCA8PSBsaW1pdFRvVXNlKSB7IHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9XHJcblxyXG4gICAgc2hvd0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4ge1xyXG4gICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgQXJyYXkuZnJvbSh0YWJsZUJvZHkucm93cykuZm9yRWFjaChmdW5jdGlvbihib2R5Um93KSB7XHJcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJ0YWJsZS1yb3dcIjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiLyoqKioqKiBcclxuXHJcbiAgQ3JlYXRlcyBhIHRhZyBsaXN0IGZyb20gYSBzZWxlY3QgZWxlbWVudFxyXG5cclxuICB1c2FnZTpcclxuXHJcbiAgbmV3IFNlbGVjdExpc3RUYWcoc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMpLlxyXG5cclxuICAtIHNlbGVjdElkIChyZXF1aXJlZCk6IFRoZSBpZCBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgYWN0aW5nIGFzIHRoZSBzb3VyY2UgKG11c3QgaGF2ZSBtdWx0aXBsZSBhdHRyaWJ1dGUsIGFuZCBhbGwgaXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZClcclxuXHJcbiAgLSByZXZlcnRHcm91cHMgKG9wdGlvbmFsKTogVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBjbGlja2VkIHRvIHJldmVydCBzZWxlY3RlZCBvcHRpb25zIChzaG91bGQgaGF2ZSBpcy1oaWRkZW4gY2xhc3MgdG8gc3RhcnQpXHJcblxyXG4gIC0gb25VcGRhdGVGdW5jIChyZXF1aXJlZCk6IEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSB0YWcgaGFzIGJlZW4gcmVtb3ZlZCwgb3Igb3B0aW9ucyBhcmUgcmV2ZXJ0ZWQuLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggdHdvIHBhcmFtcywgc2VsZWN0ZWRPcHRpb25zIGFuZCBhbGxPcHRpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgaW50ZW5kZWQgdG8gbWFrZSB0aGUgY29udHJvbCBtb3JlIGZsZXhpYmxlIGkuZS4gb3VyIGZpcnN0IHVzYWdlIGlzIHRvIHVwZGF0ZSBsYWJlbCB3aXRoIHNlbGVjdGVkIGl0ZW1zIHRleHQgZWxzZXdoZXJlIG9uIHBhZ2Ugd2l0aG91dCBmdXJ0aGVyIGNvdXBsaW5nLlxyXG5cclxuKioqKioqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RMaXN0VGFncyB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IG51bGwpIHtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMgPSBvblVwZGF0ZUZ1bmM7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmIChyZXZlcnRHcm91cHNJZCkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmV2ZXJ0R3JvdXBzSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgdGhpcy5yZXZlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gdGhpcy50YWdPcHRpb25zLmFwcGVuZENoaWxkKG8pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTm93IGhhbmRsZXMgcGFzc2VkIGluIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IG9wdGlvbnMgfHwgWy4uLnRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKV07XHJcblxyXG4gICAgICBpZiAodGhpcy5yZXZlcnRCdG4gJiYgdGhpcy5hbGxPcHRpb25zLnNvbWUobyA9PiAhby5zZWxlY3RlZCkpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXHJcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xyXG4gICAgICAgICAgY29uc3QgbyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInK3RhcmdldFZhbCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgaWYobyl7XHJcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5hZnRlcih0aGlzLnRhZ3MpO1xyXG5cclxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlVGFncygpIHtcclxuICAgICAgdGhpcy50YWdzLmlubmVySFRNTCA9ICcnOyAgICAgIFxyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFsbE9wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCk7XHJcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFncy5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUYWcodC5pbm5lclRleHQsIHQudmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jKHNlbGVjdGVkT3B0aW9ucywgdGhpcy5hbGxPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgbWFrZVRhZyh0ZXh0LCB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBpLmNsYXNzTGlzdC5hZGQoXCJidXR0b25fX2ljb25cIik7ICAgICAgXHJcbiAgICAgIGkuZGF0YXNldC52YWw9dmFsdWU7XHJcbiAgICAgIGkuaW5uZXJUZXh0ID0gXCJjbGVhclwiXHJcblxyXG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoaSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGFnO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gU2hvdWxkIGhhdmUgYSBzZWN0aW9uIGxpa2UgdGhpcyBmb3IgZWFjaCBwYWdlIHRoZSBjb250cm9sIGlzIHVzZWQgb24sIHVubGVzcyB3ZSB3YW50IGl0IGJlaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGFzIGEgcHJldmlvdXMgdmVyc2lvbiAoaW5jbHVkaW5nIGlkcyBhbmQgdXBkYXRlIGZ1bmN0aW9uKSBcclxuLy8gKkJldHRlciBzdGlsbCogLSBoYXZlIGluIHNlcGVyYXRlIHNjcmlwdCBmaWxlIHNjb3BlZCB0byBzcGVjaWZpYyBwYWdlIChsaWtlIHdpdGggU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzKVxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicpKSB7XHJcblxyXG4gIC8vIFByZXBhcmUgYW4gdXBkYXRlIGZ1bmN0aW9uIGlmIHJlcXVpcmVkIChvcHRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZUdyb3Vwc0xhYmVsU3BhbicpO1xyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHBsdXJhbGlzZWRHcm91cHMgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAxID8gJ2dyb3VwJyA6ICdncm91cHMnO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBgU2VuZCB0byAke3NlbGVjdGVkT3B0aW9ucy5sZW5ndGh9IHJlc3BvbnNlICR7cGx1cmFsaXNlZEdyb3Vwc31gO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGlzZSBhbiBpbnN0YW5jZSBvZiB0aGUgY29udHJvbFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnRm9sbG93dXBHcm91cFNlbGVjdG9yJywgJ3JldmVydF9ncm91cHMnLCBvblVwZGF0ZUZ1bmMpOyBcclxufVxyXG4iLCIvLyBTdG9yZSBhIHNpbXBsZSB2YWx1ZSBpbiBhIGNvb2tpZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDb29raWVIZWxwZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5faW5pdGlhbGlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0aWFsaXNlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGRvY3VtZW50LmNvb2tpZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IGNvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbWF0Y2hpbmdDb29raWUgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hpbmdDb29raWUuc3BsaXQoJz0nKVsxXSkgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9OyBwYXRoPS87IHNhbWVzaXRlPVN0cmljdGBcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbi8vIFJlbW92ZSB0aGUgbm8tanMgY2xhc3Mgc28gd2UgYXJlIGFibGUgdG8gdGVsbCB0aGF0IGpzIGlzIGVuYWJsZWRcclxuLy8gVXNlZnVsIGZvciBoaWRpbmcgZWxlbWVudHMgd2hlbiBqcyBub3QgYXZhaWxhYmxlLlxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnanMnKTsiLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlcycpICE9IG51bGwpIHtcclxuXHJcblxyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIHJlc3BvbnNlIGZpZWxkcyBhbmQgdGhlIHJlc3BvbnNlIGxpc3RcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2UtZmllbGQnKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbnMtbGlzdCcpO1xyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0aGUgZW1wdHkgcmVzcG9uc2UgZmllbGRzXHJcbiAgICAgICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKSAudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhc2V0LmtleSA9IGlkeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmV2ZWFscyB0aGUgZmlyc3QgaGlkZGVuIGl0ZW1cclxuICAgICAgICBjb25zdCBzaG93Rmlyc3RFbXB5SXRlbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXNwb25zZSA9IHJlc3BvbnNlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFdoZW4gYW4gaXRlbSBpcyByZW1vdmVkLCBjb3B5IGFsbCB2YWx1ZXMgZm9yd2FyZCB0byBmaWxsIGdhcHNcclxuICAgICAgICBjb25zdCBjb3B5SXRlbXNGb3J3YXJkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IGluZGV4ICsgMTsgaWR4IDwgcmVzcG9uc2VzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZJbnB1dCA9IHJlc3BvbnNlc1tpZHgtMV0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpOztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gcmVzcG9uc2VzW2lkeF0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgcHJldklucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUxhc3RFbXB0eUl0ZW0gPSAocmVtb3ZlSWR4KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBcyBhbGwgY29waWVkIGZvcndhcmQgYmxhbmsgbGFzdCBpdGVtIG91dFxyXG4gICAgICAgICAgICByZXNwb25zZXNbcmVzcG9uc2VzLmxlbmd0aC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJykudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gR28gdGhyb3VnaCBiYWNrd2FyZHMgYW5kIGhpZGUgbGFzdCB2aXNpYmxlIGl0ZW1cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gKHJlc3BvbnNlcy5sZW5ndGgtMSk7IGlkeCA+PSByZW1vdmVJZHg7IGlkeC0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhZGRSZXNwb25zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX3Jlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBzaG93Rmlyc3RFbXB5SXRlbSgpO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXNwb25zZXNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1yZXNwb25zZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUlkeCA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29weUl0ZW1zRm9yd2FyZChyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGFzdEVtcHR5SXRlbShyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZScpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZFBob25lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZFBob25lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQaG9uZUJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkUGhvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pKFwiYWRkUGhvbmVcIik7XHJcblxyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZEVtYWlsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRFbWFpbEJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkRW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pKFwiYWRkRW1haWxcIik7XHJcblxyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVHcm91cEJ1dHRvbiAhPW51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSkoXCJhZGRfZ3JvdXBcIik7XHJcbn1cclxuXHJcbnZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuaWYgKGdyb3VwVGV4dGFyZWEgIT0gbnVsbCkge1xyXG4gICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldDIgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldDIubWF0Y2hlcyhcIi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Mi5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcblxyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpICE9bnVsbCkge1xyXG5cclxuICAgIHZhciBpbnB1dEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKTtcclxuICAgIHZhciBpbnB1dEVycm9yc0FycmF5ID0gT2JqZWN0LmtleXMoaW5wdXRFcnJvcnMpO1xyXG5cclxuICAgIGlucHV0RXJyb3JzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RXJyb3JzW2tleV0pO1xyXG4gICAgICAgIGlucHV0RXJyb3JzW2tleV0uY2xvc2VzdCgnZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuLy8gICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcbi8vICAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcblxyXG4vLyB9KShcIiNTaWRlYmFyXCIpO1xyXG5cclxuIiwiLyogXHJcbiAgRGVib3VuY2UgZnVuY3Rpb24gcHJldmVudCBleGNlc3NpdmUgY2FsbHMgb24gc2Nyb2xsLlxyXG4gIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cclxuKi9cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xyXG5cdHZhciB0aW1lb3V0O1xyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHR9O1xyXG5cdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHR9O1xyXG59OyIsIlxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgY29uc3Qgc25hY2tiYXJTdG9yYWdlSXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc25hY2tiYXInKTtcclxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcclxuICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBhbHJlYWR5IGNvbnRhaW5zIGN1cnJlbnQgcGFnZSBwYXRoXHJcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAvL2lmIGl0IGRvZXMgdGhlbiBoaWRlIHRoZSBzbmFja2JhclxyXG4gICAgICAgICAgICBzbmFja2Jhci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSAge1xyXG4gICAgICAgICAgICBsb2NhdGlvbnMgOiBuZXcgQXJyYXkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHNuYWNrYmFyKSB7XHJcbiAgICAgICAgc25hY2tiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGlmICghc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLnB1c2god2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc25hY2tiYXInLCBKU09OLnN0cmluZ2lmeShzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59KShcIiNoaW50LXNuYWNrYmFyXCIpO1xyXG4iLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkgICYmIG1lbnVDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSgnI21lbnUnKTsiLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzdGFmZiBjb21wb3NlIHBhZ2UuXHJcbiovXHJcblxyXG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4uL1NpbXBsZUNvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBJZFNlc3Npb25TdG9yYWdlSGVscGVyIGZyb20gJy4uL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXInO1xyXG5pbXBvcnQgU2VsZWN0TGlzdFRhZ3MgZnJvbSAnLi4vU2VsZWN0TGlzdFRhZ3MnO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtY29tcG9zZScpKSB7XHJcblxyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY29udGFjdCcpO1xyXG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0X2lucHV0Jyk7XHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X01lc3NhZ2UnKTtcclxuICBjb25zdCByZXNlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnB1dF9BdXRvUmVzZW5kU2NoZWR1bGUnKTtcclxuICBjb25zdCByZXNwb25zZU9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1vcHRpb24nKSk7XHJcblxyXG4gIGNvbnN0IGNvb2tpZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVGl0bGUnKTtcclxuICBjb25zdCBjb29raWVNZXNzYWdlSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VDb250ZW50Jyk7XHJcbiAgY29uc3QgY29va2llQXV0b1Jlc2VuZEhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzZW5kJyk7XHJcbiAgY29uc3QgY29va2llUmVzcG9uc2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVJlc3BvbnNlcycpO1xyXG4gIFxyXG4gIGNvbnN0IGlkc1Nlc3Npb25IZWxwZXIgPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xyXG5cclxuICBjb25zdCBnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5vbkVtcHR5T3B0aW9ucyA9IHJlc3BvbnNlT3B0aW9ucy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICBpZiAoY3Vyci52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBjdXJyLnZhbHVlXTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbm9uRW1wdHlPcHRpb25zLmpvaW4oJ3x8Jyk7XHJcbiAgfTtcclxuXHJcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29va2llSGVscGVyLnNldChzdWJqZWN0SW5wdXQudmFsdWUpO1xyXG4gICAgY29va2llTWVzc2FnZUhlbHBlci5zZXQobWVzc2FnZUlucHV0LnZhbHVlKTtcclxuICAgIGNvb2tpZUF1dG9SZXNlbmRIZWxwZXIuc2V0KHJlc2VuZElucHV0LnZhbHVlKTsgIFxyXG4gICAgY29va2llUmVzcG9uc2VIZWxwZXIuc2V0KGdldFJlc3BvbnNlT3B0aW9uVmFsdWVzU3RyaW5nKCkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGlkc1Nlc3Npb25IZWxwZXIuZmlsdGVyQnlJZHMoc2VsZWN0ZWRPcHRpb25zLm1hcCh4ID0+IHgudmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBpZHNTZXNzaW9uSGVscGVyLmdldEl0ZW1zKCkubWFwKCh7aWQsIG5hbWV9KT0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IGlkO1xyXG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG4gIH0pO1xyXG4gIFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYywgc2VsZWN0T3B0aW9ucyk7IFxyXG59XHJcbiIsImltcG9ydCBDaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIgZnJvbSAnLi4vQ2hlY2tib3hEaXNhYmxlQnV0dG9uSGVscGVyJztcclxuXHJcbi8vIENoZWNrIHdlIGFyZSBvbiB0aGUgY29ycmVjdCBwYWdlLlxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbi5jb3VyaWVyLXByb2ZpbGUtcGFnZScpO1xyXG5cclxuaWYgKG1haW4pIHtcclxuICAgIFxyXG4gICAgbmV3IENoZWNrYm94RGlzYWJsZUJ1dHRvbkhlbHBlcignI2J0blNhdmUnLCAnI0lucHV0X1ByaXZhY3lQb2xpY3knKTtcclxuXHJcbiAgICAvLyBHcmFiIGFsbCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBvbmx5IHNob3cgd2hlbiBqcyBlbmFibGVkXHJcbiAgICBjb25zdCBhZGRQaG9uZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZUJ0bicpO1xyXG4gICAgY29uc3QgYWRkRW1haWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRW1haWxCdG4nKTtcclxuICAgIGNvbnN0IHJlbW92ZUVtYWlsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKTtcclxuICAgIGNvbnN0IHJlbW92ZVBob25lQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IHRoZSBmb3JtLCB0byBhZGQgcmVtb3ZlIGxpc3RlbmVycyB0b1xyXG4gICAgY29uc3QgY29udGFjdFByb2ZpbGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtcHJvZmlsZS1mb3JtJyk7XHJcblxyXG4gICAgLy8gU2hvdyBhbGwgdGhlIGpzIG9ubHkgYnV0dG9uc1xyXG4gICAgW2FkZFBob25lQnRuLCBhZGRFbWFpbEJ0biwgLi4ucmVtb3ZlRW1haWxCdXR0b25zLCAuLi5yZW1vdmVQaG9uZUJ1dHRvbnNdLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgWy4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fd2l0aGFjdGlvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBlbXB0eSBpbnB1dHMgYWRkZWQgZm9yIG5vbiBqcyBwdXJwb3Nlc1xyXG4gICAgY29uc3QgZW1wdHlJbnB1dHNUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC0tcHJvZmlsZS1waG9uZTpsYXN0LW9mLXR5cGUsIC5pbnB1dC0tcHJvZmlsZS1lbWFpbDpsYXN0LW9mLXR5cGUnKTtcclxuICAgIGVtcHR5SW5wdXRzVG9SZW1vdmUuZm9yRWFjaChlbXB0eUlucHV0ID0+IGVtcHR5SW5wdXQucmVtb3ZlKCkpO1xyXG5cclxuICAgIC8vIEFkZCBhIG5ldyBwaG9uZSByb3dcclxuICAgIGZ1bmN0aW9uIG5ld1Bob25lUm93KCkgeyAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Bob25lICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld1Bob25lLmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtcGhvbmVcIjtcclxuICAgICAgICBuZXdQaG9uZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm1fX2lucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmVtb3ZlIGJ0bi1yZW1vdmUtY29udGFjdC1waG9uZVwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJwaG9uZV92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3UGhvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3JlbnVtYmVySW5wdXRzKHNlbGVjdG9yLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wID0gaW5wdXQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wLmlkID0gYCR7aWRlbnRpZmllcn1fJHtpbmRleH1fYDtcclxuICAgICAgICAgICAgaW5wLm5hbWUgPSBgJHtpZGVudGlmaWVyfVske2luZGV4fV1gO1xyXG4gICAgICAgICAgICBjb25zdCBzcG4gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsbXNnLWZvcicsIGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGEgbmV3IGVtYWlsIHJvd1xyXG4gICAgZnVuY3Rpb24gbmV3RW1haWxSb3coKSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0VtYWlsUm93ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1lbWFpbFwiOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSAgYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cImVtYWlsX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBuZXdFbWFpbFJvdztcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaXJlIHVwIHRoZSBidXR0b24gbGlzdGVuZXJzXHJcbiAgICBhZGRQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChuZXdQaG9uZVJvdygpKTtcclxuICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGFkZEVtYWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld0VtYWlsUm93KCkpXHJcbiAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgfSk7ICBcclxuXHJcbiAgICAvLyBIYW5kbGUgdGhlIHJlbW92ZSBvbiB0aGUgcGFyZW50IGZvcm0sIHNvIHRoYXQgd2lsbCB3b3JrIGZvciBuZXcgaXRlbXMgYWRkZWQgYWZ0ZXIgbG9hZC5cclxuICAgIGNvbnRhY3RQcm9maWxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSAgfHwgZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwYXJlbnQgZm9ybSBncm91cCBjb250YWluaW5nIGVtYWlsIG9yIHBob25lLlxyXG4gICAgICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKTtcclxuICAgICAgICAgICAgaWYgKGZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpKSB7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLXBob25lJywgJ0lucHV0LlBlcnNvbmFsUGhvbmVOdW1iZXJzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxyXG4qL1xyXG5pbXBvcnQgSWRTZXNzaW9uU3RvcmFnZUhlbHBlciBmcm9tICcuLi9JZFNlc3Npb25TdG9yYWdlSGVscGVyJztcclxuaW1wb3J0IERyYWZ0TWVzc2FnZURyYXdlciBmcm9tICcuLi9EcmFmdE1lc3NhZ2VEcmF3ZXInO1xyXG5pbXBvcnQgTGF6eUxvYWRlciBmcm9tICcuLi9MYXp5TG9hZGVyJztcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5pZiAobWFpbiAmJiBtYWluLmNsYXNzTGlzdC5jb250YWlucygnYXNjLXN0YWZmLWluZGV4JykpIHtcclxuXHJcbiAgY29uc3QgaWRTaCA9IG5ldyBJZFNlc3Npb25TdG9yYWdlSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJzJyk7XHJcbiAgY29uc3QgZG1kID0gbmV3IERyYWZ0TWVzc2FnZURyYXdlcihpZFNoLmdldENvdW50KCkpO1xyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcclxuXHJcbiAgY29uc3QgYWxsQ2hlY2tib3hlc0luVGFibGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFibGUtc2VsZWN0LXN0YWZmIFt0eXBlPWNoZWNrYm94XVwiKSk7XHJcblxyXG4gIC8vIENoZWNrIGFsbCBpdGVtcyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQgPSBhbGxDaGVja2JveGVzSW5UYWJsZS5maWx0ZXIoY2IgPT4gaWRTaC5oYXNJZChjYi52YWx1ZSkpO1xyXG4gIGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQuZm9yRWFjaChpID0+IGkuY2hlY2tlZCA9IHRydWUpO1xyXG5cclxuICBjb25zdCBhbGxDaGVja2JveGVzU2VsZWN0ZWQgPSAoKSA9PiBhbGxDaGVja2JveGVzSW5UYWJsZS5ldmVyeShjYiA9PiBjYi5jaGVja2VkKTtcclxuICBcclxuICAvLyBjb25zdCBhbGxDb250YWN0SWRzID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUubWFwKGNiID0+IGNiLnZhbHVlKTtcclxuICBjb25zdCBhbGxDb250YWN0cyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogY2IudmFsdWUsXHJcbiAgICAgIG5hbWU6IGNiLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBVc2VzIGEgcGFzc2VkIGluICdjb21iaW5lcicgZnVuY3Rpb24gdG8gZGVjaWRlZCBob3cgdG8gZWl0aGVyIGFkZCBvciByZW1vdmUgc2VsZWN0ZWQgcmVzdWx0cyB0byB0aG9zZSBmcm9tIG90aGVyIHBhZ2VzLlxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSA9IChjb21iaW5lRm4pID0+IHtcclxuICAgIGNvbnN0IGFsbENvbnRhY3RzRGlzcGxheWVkID0gYWxsQ29udGFjdHMoKTtcclxuICAgIGNvbnN0IGV4aXN0aW5nQ29udGFjdHMgPSBpZFNoLmdldEl0ZW1zKCk7XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IGNvbWJpbmVGbihleGlzdGluZ0NvbnRhY3RzLCBhbGxDb250YWN0c0Rpc3BsYXllZCk7ICBcclxuXHJcbiAgICBpZFNoLnNldEl0ZW1zKG5ld0l0ZW1zKTtcclxuICAgIGRtZC51cGRhdGUobmV3SXRlbXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxyXG4gIGNvbnN0IGRlc2VsZWN0QWxsID0gKHRvRGVzZWxlY3QpID0+IHtcclxuICAgIHRvRGVzZWxlY3QuZm9yRWFjaCh0b0Rlc2VsZWN0ID0+IHRvRGVzZWxlY3QuY2hlY2tlZCA9IGZhbHNlKTtcclxuICAgIGhhbmRsZVNlbGVjdGlvbmRDaGFuZ2VNZXJnZSgoZXhpc3RpbmdJdGVtcywgYWxsSXRlbXNGb3JHcm91cCkgPT4gZXhpc3RpbmdJdGVtcy5maWx0ZXIoKHtpZH0pID0+ICFhbGxJdGVtc0Zvckdyb3VwLm1hcChpID0+IGkuaWQpLmluY2x1ZGVzKGlkKSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGFsbCB0aGUgaWRzIHRoYXQgd2VyZSBjb250YWluZWQgaW4gdGhpcyByZXN1bHRzIHBhZ2UuICBLZWVwIHJlc3VsdCBmcm9tIG90aGVyIHBhZ2VzIHNlbGVjdGVkXHJcbiAgY29uc3Qgc2VsZWN0QWxsID0gKHRvU2VsZWN0KSA9PiB7XHJcbiAgICB0b1NlbGVjdC5mb3JFYWNoKHRvU2VsZWN0ID0+IHRvU2VsZWN0LmNoZWNrZWQgPSB0cnVlKTsgICAgXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0aW9uZENoYW5nZU1lcmdlKChleGlzdGluZ0l0ZW1zLCBhbGxJdGVtc0Zvckdyb3VwKSA9PiB7XHJcblxyXG4gICAgICAvLyBnZXQgYWxsIGl0ZW1zIG9uIHRoZSBwYWdlIG5vdCBpbiB0aGUgZXhpc3RpbmcgcmVzdWx0c1xyXG4gICAgICBjb25zdCBncm91cEl0ZW1zVG9BZGQgPSBhbGxJdGVtc0Zvckdyb3VwLmZpbHRlcigoe2lkfSkgPT4gIWV4aXN0aW5nSXRlbXMubWFwKGkgPT4gaS5pZCkuaW5jbHVkZXMoaWQpKTtcclxuXHJcbiAgICAgIC8vIE1lcmdlIHRoZSBuZXcgaXRlbXMgaW5cclxuICAgICAgcmV0dXJuIFsuLi5leGlzdGluZ0l0ZW1zLCAuLi5ncm91cEl0ZW1zVG9BZGRdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgXHJcblxyXG4gICAgdGFyZ2V0LmNoZWNrZWQgP1xyXG4gICAgICBzZWxlY3RBbGwoYWxsQ2hlY2tib3hlc0luVGFibGUpIDpcclxuICAgICAgZGVzZWxlY3RBbGwoYWxsQ2hlY2tib3hlc0luVGFibGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2JTZWxlY3RBbGwgW3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XHJcbiAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UpO1xyXG5cclxuICAgIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xyXG4gICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXJzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcbiAgbGV0IHVzZXJzVGFibGVCb2R5O1xyXG4gIGlmKHVzZXJzVGFibGUpIHtcclxuICAgdXNlcnNUYWJsZUJvZHkgPSB1c2Vyc1RhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgY29uc3QgY3JpdGVyaWFLZXkgPSAnY3JpdGVyaWEnO1xyXG4gIFxyXG4gIGxldCBzZWFyY2hDcml0ZXJpYVN0cmluZyA9IHVybFBhcmFtcy5oYXMoY3JpdGVyaWFLZXkpID8gYD9jcml0ZXJpYT0ke3VybFBhcmFtcy5nZXQoY3JpdGVyaWFLZXkpfWAgOiAnJztcclxuXHJcbiAgY29uc3QgZ2V0U2VhcmNoRW5kcG9pbnQgPSAoKSA9PiBgJHtsb2NhdGlvbi5vcmlnaW59L0ZvcmNlL0NvbnRhY3RzLyR7Y3VycmVudFBhZ2V9JHtzZWFyY2hDcml0ZXJpYVN0cmluZ31gO1xyXG4gIFxyXG4gIC8vIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBjaGVja2JveGVzXHJcbiAgY29uc3Qgc3RhZmZUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcclxuXHJcbiAgaWYgKHN0YWZmVGFibGUpIHtcclxuICAgIHN0YWZmVGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKHt0YXJnZXR9KSA9PiB7XHJcbiAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3VG90YWwgPSB0YXJnZXQuY2hlY2tlZCA/IGlkU2guYWRkKHRhcmdldC52YWx1ZSwgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKSkgOiBpZFNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAvLyBJZiB1bmNoZWNrZWQgZGVzZWxlY3QgdGhlIGNoZWNrIGFsbC5cclxuICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsQ2hlY2tib3hlc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAvLyBJZiBjaGVja2VkIHNlZSBpZiBhbGwgYXJlIG5vdyBzZWxlY3RlZC5cclxuICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RBbGxDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZG1kLnVwZGF0ZShuZXdUb3RhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgfSAgXHJcblxyXG4gIGNvbnN0IGNyZWF0ZUNoZWNrYm94RmllbGQgPSAodmFsdWUsIGNoZWNrZWQsIG5hbWUpID0+IHsgIFxyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNlbGwnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnLCBuYW1lKTtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVDZWxsV2l0aFRleHQgPSB0ZXh0ID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRSb3cgPSB1c2VyID0+IHtcclxuICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLm5hbWUpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5jb2xsYXIpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5lbWFpbCkpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLnBob25lTnVtYmVyKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3hGaWVsZCh1c2VyLmlkLCBpZFNoLmhhc0lkKHVzZXIuaWQpLCB1c2VyLm5hbWUpKTtcclxuXHJcbiAgICB1c2Vyc1RhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUmVzdWx0Um93cyA9IHJvd3MgPT4ge1xyXG4gICAgcm93cy5mb3JFYWNoKGFkZFJvdyk7XHJcbiAgfVxyXG5cclxuICBpZiAobG9hZGVyKSB7XHJcblxyXG4gICAgY29uc3QgbG9hZGVyUGFnZVNpemUgPSBsb2FkZXIuZ2V0QXR0cmlidXRlKFwicGFnZS1zaXplXCIpO1xyXG5cclxuICAgIG5ldyBMYXp5TG9hZGVyKGxvYWRlciwgYXN5bmMgZG9uZSA9PiB7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBuZXh0IHBhZ2UgaW5kZXhcclxuICAgICAgICBjdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0U2VhcmNoRW5kcG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIHNlYXJjaFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGVuZHBvaW50KTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSZXN1bHRzID0gcmVzdWx0cy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAvLyBXZSBkb250IGtub3cgaWYgdGhlcmUgd2lsbCBiZSBtb3JlIHJlc3VsdHMsIGJ1dCBpdHMgbGlrZWx5IGlmIHdlIHJldHVybiBhIGZ1bGwgcGFnZSBvZiByZXN1bHRzXHJcbiAgICAgICAgbGV0IG1vcmVSZXN1bHRzTGlrZWx5ID0gaGFzUmVzdWx0cztcclxuICAgICAgICBpZiAobG9hZGVyUGFnZVNpemUpIHtcclxuICAgICAgICAgIC8vIFdlIG1heSBub3QgaGF2ZSB0aGlzIGF0dHJpYnV0ZSwgYnV0IGlmIHdlIGRvIGNoZWNrIGlmIHRoZSBwYWdlIGlzIGZ1bGwuIElmIG5vdCB0aGVyZSBzaG91bGQgYmUgbm8gbW9yZSByZXN1bHRzIHRvIGZldGNoXHJcbiAgICAgICAgICBtb3JlUmVzdWx0c0xpa2VseSA9IHJlc3VsdHMubGVuZ3RoID09PSBwYXJzZUludChsb2FkZXJQYWdlU2l6ZSwgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc1Jlc3VsdHMpIHsgICAgICAgICAgXHJcbiAgICAgICAgICBhZGRSZXN1bHRSb3dzKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9uZShtb3JlUmVzdWx0c0xpa2VseSk7ICBcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlKSB7ICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbGF6eSBsb2FkIHBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgQUQgdXNlcnNgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIC8vIElnbm9yZSBjdXJyZW50IGZhaWxlZCBwYWdlLCBzbyB3aWxsIHRyeSBhZ2FpblxyXG4gICAgICAgIGN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgZG9uZSh0cnVlKTsgLy8gQ2FsbCBkb25lIHdpdGggbW9yZSB0byBsb2FkLlxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgdG8gZG8gaGVyZS4gSWYgZW5wb2ludCBpcyBkb3duLCB3ZSB3b3VsZCBnZXQgbG90cyBvZiBjb25zb2xlIGVycm9ycyBhdCB0aGUgbW9tZW50Li4uLlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSwgeyBkZWJ1ZzogZmFsc2UsIHBlZWtEaXN0YW5jZTogNTAgfSk7XHJcbiAgfSAgXHJcbn1cclxuIiwiLyogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbixcclxudG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4vLyBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4vLyAgICB2YXIgYXNpZGVFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIik7XHJcbi8vICAgICBpZihhc2lkZUV4aXN0KXtcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XHJcbiAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcclxuICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG52YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbmlmIChhZGRHcm91cEJ1dHRvbikge1xyXG5cclxuYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG52YXIgY2xvc2VTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlX3NpZGViYXInKTtcclxuXHJcbmlmIChjbG9zZVNpZGViYXIpIHtcclxuXHJcbmNsb3NlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XHJcbiAgdmFyIHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgLy8gaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAvLyAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGlmICgheC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIHguY2xhc3NMaXN0LmFkZCgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LmFkZCgnbWFpbi0taGlkZGVuJyk7XHJcbiAgICAgIC8vIH1cclxuICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICB2YXIgY29udGFjdFBhcmFtID0gdXJsUGFyYW1zLmdldCgnQ29udGFjdEFkZGVkJyk7XHJcbiAgICB2YXIgT3JnYW5pc2F0aW9uUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdPcmdhbmlzYXRpb25BZGRlZCcpO1xyXG4gICAgdmFyIE1lc3NhZ2VTZW50UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdNZXNzYWdlU2VudCcpO1xyXG4gICAgdmFyIEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0ZvcmNlQ29udGFjdFVwZGF0ZWQnKTtcclxuXHJcbiAgICB2YXIgc25hY2tiYXJNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgaWYgKGNvbnRhY3RQYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBjb250YWN0IGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG4gICAgfSBlbHNlIGlmIChPcmdhbmlzYXRpb25QYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBvcmdhbmlzYXRpb24gaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE1lc3NhZ2VTZW50UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIC8qIFxyXG4gICAgICAgICAgICBCaXQgaGFja3ksIGJ1dCBjbGVhcmluZyB0aGUgc2Vzc2lvblN0b3JhZ2UgaGVyZSB0byBjbGVhciBtZXNzYWdlIHN0YXRlIGhlcmUuIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcIkNvdXJpZXJNZXNzYWdlVXNlcnNcIilcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTWVzc2FnZSBzZW50JztcclxuICAgIH0gZWxzZSBpZiAoRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtICYmIEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnUGVyc29uYWwgY29udGFjdCBkZXRhaWxzIHVwZGF0ZWQnO1xyXG4gICAgfSBcclxuXHJcbiAgICBpZiAoc25hY2tiYXJNZXNzYWdlKSB7XHJcbiAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LmFkZCgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIHNuYWNrYmFyLmlubmVySFRNTCA9IHNuYWNrYmFyTWVzc2FnZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QucmVtb3ZlKCdzbmFja2Jhci0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcblxyXG59KShcIiNzbmFja2JhclwiKTtcclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIC8vZnVuY3Rpb24gdG8gbWFrZSB3aG9sZSB0YWJsZSB0ciBjbGlja2FibGVcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHRyJykuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG5cclxuLy8gICAgICAgICBpZiAoZWwuZGF0YXNldC5ocmVmICE9bnVsbCkge1xyXG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcclxuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmRhdGFzZXQuaHJlZjtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KShcInRhYmxlXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9