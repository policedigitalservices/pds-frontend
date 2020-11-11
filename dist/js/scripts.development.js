/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId]) {
/******/      return installedModules[moduleId].exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.l = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/    }
/******/  };
/******/
/******/  // define __esModule on exports
/******/  __webpack_require__.r = function(exports) {
/******/    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/    }
/******/    Object.defineProperty(exports, '__esModule', { value: true });
/******/  };
/******/
/******/  // create a fake namespace object
/******/  // mode & 1: value is a module id, require it
/******/  // mode & 2: merge all properties of value into the ns
/******/  // mode & 4: return value when already ns object
/******/  // mode & 8|1: behave like require
/******/  __webpack_require__.t = function(value, mode) {
/******/    if(mode & 1) value = __webpack_require__(value);
/******/    if(mode & 8) return value;
/******/    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/    var ns = Object.create(null);
/******/    __webpack_require__.r(ns);
/******/    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/    if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/    return ns;
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./src/js/fileInput.js":
/*!*****************************!*\
  !*** ./src/js/fileInput.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var upload = document.getElementById('upload');

if (upload) {
  var uploadOnChange = function uploadOnChange() {
    var filename = this.value;
    var lastIndex = filename.lastIndexOf("\\");

    if (lastIndex >= 0) {
      filename = filename.substring(lastIndex + 1);
    }

    document.getElementById('filename').value = filename;
  };

  upload.onchange = uploadOnChange;
}

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
showPassword.forEach(function (showPasswordButton) {
  var passwordID = showPasswordButton.getAttribute("data-password");
  showPasswordButton.addEventListener('click', function (el) {
    el.preventDefault(); // el.empty();

    if (showPasswordButton.innerHTML === "visibility") {
      showPasswordButton.innerHTML = "visibility_off";
    } else {
      showPasswordButton.innerHTML = "visibility";
    }

    var input = document.getElementById(passwordID);
    passwordID.type = "text";

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
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/scss/styles.scss ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/showPassword.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/hint-snackbar.js ./src/js/SelectListTags.js ./src/js/linkify-tables.js ./src/js/search.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ./src/js/pages/CourierProfile.js ./src/js/messagesView.js ./src/js/fileInput.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
__webpack_require__(/*! ./src/js/messagesView.js */"./src/js/messagesView.js");
module.exports = __webpack_require__(/*! ./src/js/fileInput.js */"./src/js/fileInput.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2ltcGxlQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9maWxlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hpbnQtc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpbmtpZnktdGFibGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZXNzYWdlc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL0NvbXBvc2VTdGFmZk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL0NvdXJpZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9TZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hvd1Bhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFibGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbIkJvdHRvbURyYXdlciIsIl9vcGVuQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIkRyYWZ0TWVzc2FnZURyYXdlciIsIm51bWJlck9mUmVjaXBpZW50cyIsInRvdGFsU2VsZWN0b3IiLCJjb29raWVIZWxwZXIiLCJTaW1wbGVDb29raWVIZWxwZXIiLCJfdG90YWxzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImdldCIsIkVycm9yIiwiX2JvdHRvbURyYXdlciIsInVwZGF0ZSIsImlubmVyVGV4dCIsInNob3ciLCJoaWRlIiwiZ3JvdXBFeGlzdCIsImdldEVsZW1lbnRCeUlkIiwidXNlQ2hlY2tib3hlcyIsImhhc0F0dHJpYnV0ZSIsInVzZVNpbmdsZVNlbGVjdENoZWNrYm94IiwibG9ja1Jvb3ROb2RlIiwic2VsZWN0b3IiLCJpbnRpYWxseVNlbGVjdGVkTm9kZXMiLCJncm91cFNlbGVjdCIsImdyb3VwVGV4dGFyZWEiLCJ0YWdzU2VlQWxsSGVscGVyIiwicGFyZW50RWxlbWVudCIsInNlbGVjdGVkT3B0aW9uc05vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidmFsdWUiLCJpdGVtTGltaXQiLCJTZWVBbGxIZWxwZXIiLCJjb3VudEZpZWxkSWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJwYXRoVG9VbmNoZWNrIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImNiU2VsZWN0b3IiLCJjaGVjYm94VG9VbmNoZWNrIiwiY2xpY2siLCJyZWNhbGN1bGF0ZSIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJidWlsZExhYmVsIiwicGFyZW50Q2hlY2tlZCIsIm5ld1BhcmVudFNlbGVjdGVkIiwibGFiZWwiLCJ0b2dnbGVTcGFuIiwib3V0ZXJTcGFuIiwiY2hlY2tib3giLCJ0eXBlIiwibmFtZSIsImlkIiwiYXBwZW5kQ2hpbGQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwiY2xvc2VzdCIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkQ2hlY2tib3hlcyIsImhpZGRlbkZpZWxkIiwic2V0QXR0cmlidXRlIiwic3RydWN0dXJlIiwib3B0aW9uX2kiLCJvcHRpb24iLCJzZWdtZW50cyIsInNwbGl0Iiwibm9kZVRvQ2hlY2siLCJzZWdtZW50X2kiLCJzZWciLCJ0cmVlQ29udGFpbmVyIiwiY2xvc2VzdExpIiwiYWN0aXZlQ2hpbGRyZW4iLCJhY19pIiwiYWN0aXZlQ2hpbGQiLCJkaXNwbGF5Q2hpbGRLZXlzIiwiY3VyclRleHQiLCJjdXJyUGF0aCIsIm9iaiIsImVsZW1lbnRUb0FkZFRvIiwibGV2ZWwiLCJwYXJlbnRzQ2hlY2tlZCIsImNoaWxkS2V5cyIsIk9iamVjdCIsImtleXMiLCJwYXJlbnRDaGVja2VkU3RhdGUiLCJjaGlsZExpc3RJdGVtIiwiY2hpbGRMaXN0IiwiY2tfaSIsImNoaWxkS2V5IiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsIklkU2Vzc2lvblN0b3JhZ2VIZWxwZXIiLCJfbmFtZSIsImluaXRpYWwiLCJfaW5pdGlhbGlzZSIsIl9pdGVtcyIsIk1hcCIsImZvckVhY2giLCJzZXQiLCJzZWxlY3RlZEl0ZW1zSnNvbiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIl9wZXJzaXN0IiwiSlNPTiIsInBhcnNlIiwiaXRlbXMiLCJnZXRJdGVtcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJpZHMiLCJpZHNUb0tlZXAiLCJnZXRJZHMiLCJpbmNsdWRlcyIsInNpemUiLCJkZWxldGUiLCJlbnRyaWVzIiwiaGFzIiwic2V0SXRlbXMiLCJDb3VyaWVyTGF6eUxvYWRlciIsImxvYWRlckVsZW1lbnQiLCJsb2FkZXJGbiIsImNvbmZpZ09iaiIsImNvbmZpZ0RlZmF1bHRzIiwibG9hZGVyQ2xhc3MiLCJsb2FkZXJMb2FkaW5nQ2xhc3MiLCJkZWJvdW5jZU1zIiwicGVla0Rpc3RhbmNlIiwiZGVidWciLCJfbG9hZGVyIiwiX2xvYWRlckZ1bmMiLCJfbWFpbiIsIl9jb25maWciLCJfaGFzTGlzdGVuZXJzQWRkZWQiLCJfbGF6eUxvYWRDaGVjayIsImRlYm91bmNlIiwiX2RvTG9hZE1vcmVDaGVjayIsIl9jb25kaXRpb25hbERlYnVnTG9nIiwiX3N0b3BMaXN0ZW5pbmciLCJfZG9uZVNlYXJjaGluZyIsIl9zdGFydExpc3RlbmluZyIsImJpbmQiLCJ2aXNpYmxlIiwibW9yZVRvTG9hZCIsIl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9EZWJ1ZyIsImxvZ2dlckZ1bmMiLCJjb25zb2xlIiwibG9nIiwiaGlnaGVzdFZpc2libGVZUG9zIiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkTW9yZVRyaWdnZXJQb3MiLCJNYXRoIiwibWluIiwib2Zmc2V0VG9wIiwicGVla1Bvc2l0aW9uVmlzaWJsZSIsInNob3VsZExvYWRNb3JlIiwidGFibGUiLCJTZWVBbGxBdHRyaWJ1dGVIZWxwZXIiLCJzaG93TW9yZUJ1dHRvbnMiLCJzaG93QWxsQnV0dG9uIiwiY29udGFpbmVySWQiLCJpdGVtU2VsZWN0b3IiLCJzaG93QWxsSXRlbUxpbWl0Iiwic2hvd0FsbEl0ZW1Db3VudElkIiwiYnV0dG9uSWQiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzZWxlY3RvclRvVXNlIiwidGFnTmFtZSIsImVycm9yIiwicGFyc2VkSXRlbUxpbWl0IiwicGFyc2VJbnQiLCJpc05hTiIsIml0ZW1zU2VsZWN0b3IiLCJzZWVBbGxTZWxlY3RvciIsInBhc3NlZE9wdGlvbnMiLCJfaXRlbXNTZWxlY3RvciIsIl9zZWVBbGwiLCJfb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGwiLCJkZWZhdWx0cyIsInNob3dMZXNzVGV4dCIsIl9vcHRpb25zIiwiX2l0ZW1MaW1pdCIsIl9zaG93TGVzc1RleHQiLCJfc2hvd01vcmVUZXh0IiwiX2NvdW50RmllbGQiLCJfc2hvd2luZ0FsbCIsIl9oaWRlRXhjZXNzSXRlbXMiLCJfc2hvd0FsbEl0ZW1zIiwiX2FsbEl0ZW1zIiwiaXRlbSIsIl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zIiwiaW5kZXgiLCJ0b0NoZWNrIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaWx0ZXIiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwicmVwb2x1bGF0ZVRhZ3MiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3ZhbHVlIiwibmV3Q29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzcG9uc2VzIiwicmVzcG9uc2VzTGlzdCIsInJlc3BvbnNlIiwiaWR4IiwidHJpbSIsInNob3dGaXJzdEVtcHlJdGVtIiwiY3VycmVudFJlc3BvbnNlIiwiY29weUl0ZW1zRm9yd2FyZCIsInByZXZJbnB1dCIsImlucHV0IiwicmVtb3ZlTGFzdEVtcHR5SXRlbSIsInJlbW92ZUlkeCIsImFkZFJlc3BvbnNlQnV0dG9uIiwiZWwiLCJibHVyIiwiYWRkUGhvbmVJbnB1dCIsImFkZFBob25lQnV0dG9uIiwiYWRkRW1haWxJbnB1dCIsImFkZEVtYWlsQnV0dG9uIiwiYWRkR3JvdXBCdXR0b24iLCJzYXZlR3JvdXBCdXR0b24iLCJ0YXJnZXQyIiwiaW5wdXRFcnJvcnMiLCJpbnB1dEVycm9yc0FycmF5IiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1cGxvYWQiLCJ1cGxvYWRPbkNoYW5nZSIsImZpbGVuYW1lIiwibGFzdEluZGV4IiwibGFzdEluZGV4T2YiLCJvbmNoYW5nZSIsInNuYWNrYmFyU3RvcmFnZUl0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJzbmFja2JhciIsInNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSIsImxvY2F0aW9ucyIsInJvd3NUb0xpbmtpZnkiLCJoYW5kbGVSb3dDbGljayIsImNvbFRvUGFyc2UiLCJyb3ciLCJjb2wiLCJtZW51IiwibWVudUJ1dHRvbiIsIm1lbnVDaGlsZCIsInNjcm9sbFRvIiwibWFpbiIsImFkZEJ0biIsInN1YmplY3RJbnB1dCIsIm1lc3NhZ2VJbnB1dCIsInJlc2VuZElucHV0IiwicmVzcG9uc2VPcHRpb25zIiwiY29va2llTWVzc2FnZUhlbHBlciIsImNvb2tpZUF1dG9SZXNlbmRIZWxwZXIiLCJjb29raWVSZXNwb25zZUhlbHBlciIsImlkc1Nlc3Npb25IZWxwZXIiLCJnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZyIsIm5vbkVtcHR5T3B0aW9ucyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJqb2luIiwiZmlsdGVyQnlJZHMiLCJ4Iiwic2VsZWN0T3B0aW9ucyIsInNsdCIsImRpc2NhcmRCdG4iLCJjbGVhckl0ZW1zIiwibmV3UGhvbmVSb3ciLCJuZXdQaG9uZSIsImNsYXNzTmFtZSIsIl9yZW51bWJlcklucHV0cyIsImlkZW50aWZpZXIiLCJpbnB1dHMiLCJpbnAiLCJzcG4iLCJuZXdFbWFpbFJvdyIsImFkZFBob25lQnRuIiwiYWRkRW1haWxCdG4iLCJyZW1vdmVFbWFpbEJ1dHRvbnMiLCJyZW1vdmVQaG9uZUJ1dHRvbnMiLCJlbWFpbHNTZWN0aW9uIiwic2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlIiwicGhvbmVzU2VjdGlvbiIsInNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSIsImhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlIiwic2VjdGlvbiIsImNvbnRhY3RQcm9maWxlRm9ybSIsImlucHV0c0ZvclNlbGVjdG9yIiwiZGlyIiwiZm9ybUdyb3VwIiwiaWRTaCIsImRtZCIsImxvYWRlciIsImFsbENoZWNrYm94ZXNJblRhYmxlIiwiaXRlbXNUaGF0U2hvdWxkQmVTZWxlY3RlZCIsImNiIiwiaGFzSWQiLCJhbGxDaGVja2JveGVzU2VsZWN0ZWQiLCJldmVyeSIsImFsbENvbnRhY3RzIiwiaGFuZGxlU2VsZWN0aW9uZENoYW5nZU1lcmdlIiwiY29tYmluZUZuIiwiYWxsQ29udGFjdHNEaXNwbGF5ZWQiLCJleGlzdGluZ0NvbnRhY3RzIiwibmV3SXRlbXMiLCJkZXNlbGVjdEFsbCIsInRvRGVzZWxlY3QiLCJleGlzdGluZ0l0ZW1zIiwiYWxsSXRlbXNGb3JHcm91cCIsInNlbGVjdEFsbCIsInRvU2VsZWN0IiwiZ3JvdXBJdGVtc1RvQWRkIiwiaGFuZGxlU2VsZWN0QWxsQ2hhbmdlIiwidG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3giLCJ1c2Vyc1RhYmxlIiwidXNlcnNUYWJsZUJvZHkiLCJjdXJyZW50UGFnZSIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiY3JpdGVyaWFLZXkiLCJzZWFyY2hDcml0ZXJpYVN0cmluZyIsImdldFNlYXJjaEVuZHBvaW50Iiwic3RhZmZUYWJsZSIsIm5ld1RvdGFsIiwiY3JlYXRlQ2hlY2tib3hGaWVsZCIsImNlbGwiLCJjcmVhdGVDZWxsV2l0aFRleHQiLCJhZGRSb3ciLCJ1c2VyIiwibmV3Um93IiwiY29sbGFyIiwiZW1haWwiLCJwaG9uZUNlbGwiLCJwaG9uZVRleHROb2RlIiwicGhvbmVOdW1iZXJDb3VudCIsInBob25lTnVtYmVyIiwiYmFkZ2UiLCJhZGRSZXN1bHRSb3dzIiwicm93cyIsImxvYWRlclBhZ2VTaXplIiwiTGF6eUxvYWRlciIsImRvbmUiLCJlbmRwb2ludCIsImZldGNoIiwianNvbiIsInJlc3VsdHMiLCJoYXNSZXN1bHRzIiwibW9yZVJlc3VsdHNMaWtlbHkiLCJyZWRpcmVjdFdpdGhvdXRTZWFyY2giLCJwYXJhbU5hbWUiLCJuZXdDcml0ZXJpYSIsInRvU3RyaW5nIiwibmV3UGF0aCIsImFzc2lnbiIsImNsZWFyU2VhcmNoIiwidG9DbGVhciIsInRjIiwicGFyYW1Ub1JlbW92ZSIsImNsZWFyQnV0dG9ucyIsInNob3dQYXNzd29yZCIsInNob3dQYXNzd29yZEJ1dHRvbiIsInBhc3N3b3JkSUQiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsInkiLCJyZW1vdmVRdWVyeVBhcmFtIiwicGFyYW0iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJjb250YWN0UGFyYW0iLCJPcmdhbmlzYXRpb25QYXJhbSIsIk1lc3NhZ2VTZW50UGFyYW0iLCJGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0iLCJzbmFja2Jhck1lc3NhZ2UiLCJyZW1vdmVJdGVtIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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TUFBM0UsRUFBbUY7QUFDdEZYLG9CQUFnQixDQUFDLHFCQUFELENBQWhCO0FBQ0FTLG1CQUFlLEdBQUcsa0NBQWxCO0FBQ0g7O0FBRUQsTUFBSUEsZUFBSixFQUFxQjtBQUNqQnBKLFlBQVEsQ0FBQzNWLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUF2QjtBQUNBMFYsWUFBUSxDQUFDM1EsU0FBVCxHQUFxQitaLGVBQXJCO0FBRUE3SixjQUFVLENBQUMsWUFBVTtBQUNqQlMsY0FBUSxDQUFDM1YsU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsa0JBQTFCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBRUosQ0EvQ0QsRUErQ0csV0EvQ0gsRTs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGU7Ozs7Ozs7Ozs7O0FDYkEsdUMiLCJmaWxlIjoianMvc2NyaXB0cy5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qXG4gQ2xhc3MgdGhhdCBmYWNpbGl0YXRlIHRoZSBoaWRpbmcgYW5kIHNob3dpbmcgb2YgdGhlIGJvdHRvbSBiYXIuXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tRHJhd2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fb3BlbkNsYXNzID0gXCJib3R0b20tZHJhd2VyLW9wZW5cIjtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5fb3BlbkNsYXNzKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fb3BlbkNsYXNzKTtcbiAgICB9XG5cbiAgICBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl9vcGVuQ2xhc3MpO1xuICAgIH1cbn07IiwiaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuL0JvdHRvbURyYXdlcic7XG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4vU2ltcGxlQ29va2llSGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZnRNZXNzYWdlRHJhd2VyIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlJlY2lwaWVudHMsIHRvdGFsU2VsZWN0b3I9XCIuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RvdGFsXCIpIHtcbiAgICAgICAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b3RhbFNlbGVjdG9yKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190aXRsZScpLnRleHRDb250ZW50ID0gY29va2llSGVscGVyLmdldCgpIHx8ICdVbnRpdGxlZCc7XG4gICAgICAgIGlmICghdGhpcy5fdG90YWxzRWxlbWVudCkgeyB0aHJvdyBFcnJvcihgTm8gZWxlbWVudCBtYXRjaGluZyB0aGUgcGFzc2VkIGluIHNlbGVjdG9yICR7dG90YWxTZWxlY3Rvcn1gKTsgfVxuICAgICAgICB0aGlzLl9ib3R0b21EcmF3ZXIgPSBuZXcgQm90dG9tRHJhd2VyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKG51bWJlck9mUmVjaXBpZW50cyk7XG4gICAgfSAgICBcblxuICAgIHVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpIHtcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudC5pbm5lclRleHQgPSBudW1iZXJPZlJlY2lwaWVudHM7XG4gICAgICAgIG51bWJlck9mUmVjaXBpZW50cyA/IHRoaXMuX2JvdHRvbURyYXdlci5zaG93KCkgOiB0aGlzLl9ib3R0b21EcmF3ZXIuaGlkZSgpO1xuICAgIH1cbn0iLCIgaW1wb3J0IHtTZWVBbGxIZWxwZXJ9IGZyb20gJy4vU2VlQWxsSGVscGVyJztcbiBcbiB2YXIgZ3JvdXBFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XG4gICAgaWYoZ3JvdXBFeGlzdCl7XG5cbiAgICAgICAgdmFyIHVzZUNoZWNrYm94ZXMgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLWNoZWNrYm94Jyk7XG4gICAgICAgIHZhciB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtc2luZ2xlLXNlbGVjdC1jaGVja2JveCcpO1xuICAgICAgICB2YXIgbG9ja1Jvb3ROb2RlID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9jay1yb290Jyk7XG5cbihmdW5jdGlvbiAoc2VsZWN0b3IsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XG5cbiAgICAvL0NoZWNrIG9uIHBhZ2Ugd2hldGhlciBHcm91cCBNdWx0aSBTZWxlY3QgZXhpc3RzXG4gICAgdmFyIGludGlhbGx5U2VsZWN0ZWROb2RlcyA9IFtdO1xuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBTZWxlY3RvclwiKTtcbiAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcbiAgICBcbiAgICBsZXQgdGFnc1NlZUFsbEhlbHBlciA9IG51bGw7XG5cbiAgICAvLyBJZiB0aGUgR3JvdXAgTXVsdGkgU2VsZWN0IGRvZXMgZXhpc3QsIGhpZGUgaXQgKGlmIEpTIGVuYWJsZWQpXG4gICAgaWYgKGdyb3VwU2VsZWN0ICE9PSBudWxsKSB7XG4gICAgICAgIGdyb3VwU2VsZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG5cbiAgICAgICAgLy8gR3JhYiBhbGwgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnNOb2RlcyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE9wdGlvbnNOb2Rlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgIGludGlhbGx5U2VsZWN0ZWROb2Rlcy5wdXNoKHNlbGVjdGVkT3B0aW9uc05vZGVzW2ldLnZhbHVlIHx8IFwiXFxcXFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1MaW1pdCA9IDIxO1xuXG4gICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIgID0gbmV3IFNlZUFsbEhlbHBlcignI0dyb3VwVGV4dGFyZWEgPiAudGFnJywgJyNzZWVNb3JlR3JvdXBzJywgeyBpdGVtTGltaXQsIGNvdW50RmllbGRJZDogJ2dyb3Vwc0NvdW50JyB9KTtcblxuICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudGFnPi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aFRvVW5jaGVjayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIikucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpO1xuICAgICAgICAgICAgICAgIHZhciBjYlNlbGVjdG9yID0gJ2lucHV0W3R5cGU9Y2hlY2tib3hdLnRyZWV2aWV3X19jaGVja2JveFt2YWx1ZT1cIicrcGF0aFRvVW5jaGVjaysnXCJdJztcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2JveFRvVW5jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2JTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNib3hUb1VuY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2JveFRvVW5jaGVjay5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHNlYXJjaFBhcnRzID0gKGZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XG4gICAgICAgIHZhciB2YXJzID0ge307XG4gICAgICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24obSxrZXksdmFsdWUpIHtcbiAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgfSkoKTtcblxuICAgIHZhciBwYWdlUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBcIj9ncm91cD1cIjtcbiAgICB2YXIgZ3JvdXBQYXJhbSA9IHNlYXJjaFBhcnRzLmdyb3VwO1xuICAgIHZhciBzZWFyY2hQYXJhbSA9IHNlYXJjaFBhcnRzLlNlYXJjaDtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGJ1aWxkIHRoZSBwYXRoXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVBhdGhGb3JHcm91cChncm91cCkge1xuICAgICAgdmFyIGdycCA9IGdyb3VwID09PSBcIlwiID8gXCJcXFxcXCIgOiBncm91cDtcbiAgICAgIHJldHVybiBwYWdlUGF0aCArIGdycDtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGQgc2hvdWxkIGJlIG9wZW4gaS5lLiB0byByZXZlYWwgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBncm91cFxuICAgIGZ1bmN0aW9uIHNob3VsZFBhcmVudEJlT3BlbihwYXRoKSB7XG4gICAgICAgIGlmICghZ3JvdXBQYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoICsgXCJcXFxcXCIpO1xuICAgICAgICByZXR1cm4gZ3JvdXBQYXJhbS5zdGFydHNXaXRoKHBhdGhUb0NoZWNrKSAmJiBncm91cFBhcmFtICE9IHBhdGhUb0NoZWNrO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZGVkIGlzIHRoZSBjdXJyZW50bHlTZWxlY3RlZEdyb3VwXG4gICAgZnVuY3Rpb24gaXNTZWxlY3RlZEdyb3VwKHBhdGgpIHtcbiAgICAgICAgdmFyIHBhcmFtc1RvQ2hlY2sgPSBkZWNvZGVVUklDb21wb25lbnQoZ3JvdXBQYXJhbSB8fCBcIlxcXFxcIik7XG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoIHx8IFwiXFxcXFwiKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zVG9DaGVjayA9PT0gcGF0aFRvQ2hlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRMaW5rKHRleHQsIHBhdGgpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgbGluay5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ndHJlZXZpZXdfX2l0ZW0tdG9nZ2xlJz48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ndHJlZXZpZXdfX2l0ZW0tY29udGVudCc+JHt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICAgICAgbGluay5ocmVmID0gZ2V0UGFnZVBhdGhGb3JHcm91cChwYXRoKTtcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tbGlua1wiKTtcblxuICAgICAgICByZXR1cm4gbGluaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZExhYmVsKHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcblxuICAgICAgICB2YXIgbmV3UGFyZW50U2VsZWN0ZWQgPSBwYXJlbnRDaGVja2VkO1xuXG4gICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS1sYWJlbFwiKTtcbiAgICAgICAgdmFyIHRvZ2dsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZ2dsZVNwYW4uY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2l0ZW0tdG9nZ2xlJyk7XG4gICAgICAgIHZhciBvdXRlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG91dGVyU3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIG91dGVyU3Bhbi5jbGFzc0xpc3QuYWRkKCd0cmVldmlld19faXRlbS1jb250ZW50Jyk7XG4gICAgICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrYm94Lm5hbWUgPSB0ZXh0O1xuICAgICAgICBjaGVja2JveC52YWx1ZSA9IHBhdGg7XG4gICAgICAgIGNoZWNrYm94LmlkID0gdGV4dDtcbiAgICAgICAgb3V0ZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgb3V0ZXJTcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRvZ2dsZVNwYW4pO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChvdXRlclNwYW4pO1xuXG4gICAgICAgIGlmIChwYXRoID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgdGhlIHJvb3Qgbm9kZSBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIGNoZWNrZWQgQlVUIHRoZSBjaGlsZHJlbiBvZiB0aGlzIG5vZGUgc2hvdWxkIGFjdCBhcyB0aG91Z2ggaXQgaXNudCBjaGVja2VkIHNvIHdlIGRvbnQgdXBkYXRlIHRoZSBzZWxlY3RlZCBzdGF0ZVxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q2hlY2tlZCAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYWxsIGl0cyBjaGlsZHJlbiBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIHVuY2hlY2tlZFxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBub3QgY2hlY2tlZCBpdHMgY2hpbGRyZW4gc2VsZWN0ZWQgc3RhdGUgZGVwZW5kIG9uIHRoZSBjaGlsZHMgdmFsdWUsIGFuZCBub3QgYmUgZGlzYWJsZWRcbiAgICAgICAgICAgIHZhciBuZXdDaGVja2VkID0gaW50aWFsbHlTZWxlY3RlZE5vZGVzLmluZGV4T2YocGF0aCB8fCAnXFxcXCcpID49IDA7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gbmV3Q2hlY2tlZDtcbiAgICAgICAgICAgIG5ld1BhcmVudFNlbGVjdGVkID0gbmV3Q2hlY2tlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RyZWV2aWV3X19jaGVja2JveCcpO1xuXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndHJlZXZpZXdfX2NoZWNrYm94LS1yYWRpbycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtsYWJlbCwgbmV3UGFyZW50U2VsZWN0ZWR9O1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2ZlclZhbHVlcygpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcblxuICAgICAgICB2YXIgZWxlbXM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmVldmlld19fY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8ZWxlbXMubGVuZ3RoO2krKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvY2tSb290Tm9kZSAmJiAhKGVsZW1zW2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOby1vcGVyYXRpb25cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1zW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVsZW1zW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSkge1xuXG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcbiAgICAgICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR3JvdXBTZWxlY3RvcicpO1xuXG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdPcHRpb25WYWx1ZXMgPSBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBkYXRhX2kgPSAwOyBkYXRhX2kgPCBkYXRhLmxlbmd0aDsgZGF0YV9pKyspe1xuICAgICAgICAgICAgICAgIHZhciBkYXRhX2N1cnJlbnQgPSBkYXRhW2RhdGFfaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+QWxsIENvbnRhY3QgR3JvdXBzPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+JyArIGRhdGFfY3VycmVudC5zdWJzdHJpbmcoMSkgKyAnPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgb3B0aW9uIGV4aXN0cyAtIGFkZCBpdCBpZiBub3RcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdPcHRpb25WYWx1ZXMuaW5kZXhPZihkYXRhX2N1cnJlbnQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGRhdGFfY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGRhdGFfY3VycmVudDtcIlwiXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zW2ldLnNlbGVjdGVkID0gZGF0YS5pbmRleE9mKGVsZW1lbnQub3B0aW9uc1tpXS52YWx1ZSkgPj0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFnc1NlZUFsbEhlbHBlci5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKHBhcmVudCwgdGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xuICAgICAgICBpZiAodXNlQ2hlY2tib3hlcyB8fCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xuXG4gICAgICAgICAgICAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCB0aGUgYmxhbmsgdmFsdWUgZm9yICdBbGwgQ29udGFjdCBHcm91cHMnXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcXFxcXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjaGVja2JveFJlc3VsdCA9IGJ1aWxkTGFiZWwodGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCk7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hSZXN1bHQubGFiZWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3hSZXN1bHQubmV3UGFyZW50U2VsZWN0ZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGluayB0byByZWZyZXNoIHBhZ2Ugd2l0aCBzZWxlY3RlZCBub2RlLlxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkTGluayh0ZXh0LCBwYXRoKSk7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY3VycmVudCwgY2hpbGRyZW4sIHVwZGF0ZXJGbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudExvb3BDaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMb29wQ2hpbGQgIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVyRm4oY3VycmVudExvb3BDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKGUsIGNoZWNrYm94KSB7XG5cbiAgICAgICAgdmFyIHBhcmVudExpID0gY2hlY2tib3guY2xvc2VzdCgnbGknKTtcblxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcblxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCBhbmQgdGhlIHJvb3QgaXRlbSBjYW5ub3QgYmUgZGVzZWxldGVkLlxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWxsR3JvdXBDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyZWV2aWV3X19saXN0LS1yb290IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgYWxsR3JvdXBDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudExpLmNsYXNzTGlzdC5jb250YWlucygndHJlZXZpZXdfX2l0ZW0tLXBhcmVudCcpKXtcblxuICAgICAgICAgICAgdmFyIGNoaWxkQ2hlY2tib3hlcyA9IHBhcmVudExpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHcmFiIHRoZSBzZWxlY3QgbGlzdCBhbmQgYWxsIG9mIGl0cyBvcHRpb25zXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdmFyIG9wdGlvbnMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xuXG4gICAgdmFyIGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkdyb3VwXCIpO1xuICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZ3JvdXBQYXJhbSB8fCAnXFxcXCc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGJhc2UgY29sbGVjdGlvbnMgd2l0aCBzdGFydGluZyBrZXkgZm9yIHRoZSByb290LlxuICAgIHZhciBzdHJ1Y3R1cmUgPSB7IFwiXFxcXFwiOiB7fSB9O1xuXG4gICAgLy8gQnVpbGQgb24gdGhlIGJhc2Ugc3RydWN0dXJlIGJ5IGxvb3BpbmcgdGhyb3VnaCBlYWNoIHNlbGVjdCBpdGVtLlxuICAgIGZvciAodmFyIG9wdGlvbl9pPTA7IG9wdGlvbl9pPG9wdGlvbnMubGVuZ3RoOyBvcHRpb25faSsrKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbb3B0aW9uX2ldO1xuXG4gICAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIC8vIFNlcGVyYXRlIHRoZSBncm91cCBuYW1lIGludG8gYWxsIGl0cyBwYXRoIHNlZ21lbnRzXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBvcHRpb24udGV4dENvbnRlbnQuc3BsaXQoXCJcXFxcXCIpO1xuICAgICAgICAgICAgLy8gU3RhcnQgYXQgdGhlIHJvb3QgZWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlVG9DaGVjayA9IHN0cnVjdHVyZVtcIlxcXFxcIl07XG5cbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHNlZ21lbnQgZW5zdXJlIHRoYXQgYWxsIGxldmVscyBvZiB0aGUgc3RydWN0dXJlIGFyZSBpbiBwbGFjZS5cbiAgICAgICAgICAgIGZvciAodmFyIHNlZ21lbnRfaT0wOyBzZWdtZW50X2k8c2VnbWVudHMubGVuZ3RoOyBzZWdtZW50X2krKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ21lbnRzW3NlZ21lbnRfaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VnICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvQ2hlY2tbc2VnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2tbc2VnXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2tbc2VnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgYmFzZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWRcbiAgICB2YXIgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19fbGlzdFwiKTtcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19fbGlzdC0tcm9vdFwiKTtcblxuXG4gICAgLy8gSGFuZGxlIGFsbCB0aGUgY2xpY2tzIGF0IHRoZSBwYXJlbnQgbGV2ZWxcbiAgICB0cmVlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gSGFuZGxlIGNoZWNrYm94IGl0ZW1zIGJlaW5nIHNlbGVjdGVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcbiAgICAgICAgICAgIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zZmVyVmFsdWVzKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRyZWV2aWV3X19pdGVtLXRvZ2dsZVwiKSkge1xuXG4gICAgICAgICAgICB2YXIgY2xvc2VzdExpID0gdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG5cbiAgICAgICAgICAgIC8vIFdlIG9ubHkgY2FyZSBhYm91dCBjbGlja3Mgb24gZWxlbWVudHMgdGhhdCBhcmUgcGFyZW50c1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3RMaS5tYXRjaGVzKFwiLnRyZWV2aWV3X19pdGVtLS1wYXJlbnRcIikpIHtcblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGFuIG9wZW4gcGFyZW50IGl0ZW0gaXMgY2xpY2tlZCwgY2xvc2UgaXQsIGJ1dCBhbHNvIGFsbCBpdHMgb3BlbiBkZXNjZW5kYW50cy5cbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdExpLmNsYXNzTGlzdC5jb250YWlucyhcInRyZWV2aWV3X19pdGVtLS1vcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RMaS5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZHJlbiA9IGNsb3Nlc3RMaS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIudHJlZXZpZXdfX2l0ZW0tLW9wZW5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGFjX2k9MDsgYWNfaTxhY3RpdmVDaGlsZHJlbi5sZW5ndGg7IGFjX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gYWN0aXZlQ2hpbGRyZW5bYWNfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXZpZXdfX2l0ZW0tLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3BlbiBhbnkgY2xvc2VkIHBhcmVudHMgdGhhdCBhcmUgY2xpY2tlZC5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdExpLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS0tb3BlblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIHNlbGVjdCBsaXN0IGZyb20gdGhlIHByZXZpb3VzIG5vZGUgc3RydWN0dXJlLlxuICAgICovXG4gICAgZnVuY3Rpb24gZGlzcGxheUNoaWxkS2V5cyhjdXJyVGV4dCwgY3VyclBhdGgsIG9iaiwgZWxlbWVudFRvQWRkVG8sIGxldmVsLCBwYXJlbnRzQ2hlY2tlZCkge1xuXG4gICAgICAgIHZhciBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgIHZhciBwYXJlbnRDaGVja2VkU3RhdGUgPSBwYXJlbnRzQ2hlY2tlZDtcblxuICAgICAgICB2YXIgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW1cIik7XG5cbiAgICAgICAgaWYgKCF1c2VDaGVja2JveGVzICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCAmJiBpc1NlbGVjdGVkR3JvdXAoY3VyclBhdGgpKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgY3VycmVudCBzdGF0ZSB3aGVuIGluIHRoZSAnbGluayBtb2RlJ1xuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidHJlZXZpZXdfX2l0ZW0tLWN1cnJlbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYXQgdGhlIGJvdHRvbSBvZiBhIGJyYW5jaCBpLmUuIG5vIGNoaWxkcmVuIHRvIHByb2Nlc3NcblxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcblxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbm9kZSBoYXMgY2hpbGRyZW4gdG8gcHJvY2Vzc1xuXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19faXRlbS0tcGFyZW50XCIpO1xuXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IDEgfHwgc2hvdWxkUGFyZW50QmVPcGVuKGN1cnJQYXRoKSkge1xuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmVldmlld19faXRlbS0tb3BlblwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250YWluZXIgcmVhZHkgdG8gYmUgcG9wdWxhdGVkIHdpdGggdGhlIGNoaWxkIG5vZGVzXG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgY2hpbGRMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0cmVldmlld19fbGlzdFwiKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0KTtcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xuICAgICAgICAgICAgLy8gQ2FsbCByZWN1cnNpdmVseSB3aXRoIHVwZGF0ZWQgcGFyYW1zIGZvciBlYWNoIGNoaWxkIG5vZGVcblxuICAgICAgICAgICAgZm9yICh2YXIgY2tfaT0wOyBja19pIDwgY2hpbGRLZXlzLmxlbmd0aDsgY2tfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGRLZXlzW2NrX2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkS2V5ICE9PSAnQWxsIGNvbnRhY3RzJykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q2hpbGRLZXlzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hpbGRLZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzdGFydGluZyBhdCB0aGUgcm9vdC5cbiAgICBkaXNwbGF5Q2hpbGRLZXlzKFwiQWxsIENvbnRhY3QgR3JvdXBzXCIsIFwiXCIsIHN0cnVjdHVyZVtcIlxcXFxcIl0sIHRyZWVDb250YWluZXIsIDEsIGZhbHNlKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIHNlbGVjdCBsaXN0IHdpdGggdGhlIG5ldyB0cmVlXG4gICAgZ3JvdXBTZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodHJlZUNvbnRhaW5lciwgZ3JvdXBTZWxlY3QpO1xuXG4gICAgdHJlZUNvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcblxuICAgIHRyYW5zZmVyVmFsdWVzKCk7XG5cbn0pKFwiI0dyb3VwXCIsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KTtcbn1cbiIsIi8vIFN0b3JlIHNlbGVjdGVkIHVzZXJzIGluc2lkZSBzZXNzaW9uIHN0b3JhZ2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgY29uc3QgaW5pdGlhbCA9IHRoaXMuX2luaXRpYWxpc2UoKTtcbiAgICB0aGlzLl9pdGVtcyA9IG5ldyBNYXAoKTtcbiAgICBpbml0aWFsLmZvckVhY2goKHtpZCwgbmFtZX0pID0+IHRoaXMuX2l0ZW1zLnNldChpZCwgbmFtZSkpO1xuICB9XG4gIFxuICAvLyBQb3B1bGF0ZSBzdGFydCBpZHMsIGluaXRpYWxpc2VzIGNvb2tpZSBpZiBub3QgcHJlc2VudFxuICBfaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zSnNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5fbmFtZSk7XG4gICAgaWYgKCFzZWxlY3RlZEl0ZW1zSnNvbikgeyAgICAgICAgICAgICAgIFxuICAgICAgdGhpcy5fcGVyc2lzdChbXSk7ICAgXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKHNlbGVjdGVkSXRlbXNKc29uKTtcbiAgfVxuICBcbiAgLy8gU2F2ZSB0aGUgbmV3IGlkcyB0byB0aGUgc2Vzc2lvbiBzdG9yYWdlIGFmdGVyIHVwZGF0ZVxuICBfdXBkYXRlKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIHRoaXMuX3BlcnNpc3QoaXRlbXMpO1xuICB9XG4gIFxuICAvLyBTYXZlIHRoZSBwYXNzZWQgaW4gaWRzIHRvIHRoZSBjb29raWVcbiAgX3BlcnNpc3QoaXRlbXMpIHsgICAgXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9uYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuICB9XG4gIFxuICAvLyBTZXQgYWxsIHRoZSBpdGVtcyBpbiBvbmUgaGl0LiBSZXR1cm5zIHRoZSBuZXcgY291bnQuXG4gIHNldEl0ZW1zKGl0ZW1zID0gW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IG5ldyBNYXAoKTtcbiAgICBpdGVtcy5mb3JFYWNoKGkgPT4gdGhpcy5faXRlbXMuc2V0KGkuaWQsIGkubmFtZSkpO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBjb3VudCBvZiBpdGVtcyBpbiB0aGUgc2VsZWN0aW9uLlxuICBnZXRJZHMoKSB7XG4gICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbSh0aGlzLl9pdGVtcy5rZXlzKCkpO1xuICAgIHJldHVybiBpZHM7XG4gIH0gIFxuXG4gIC8vIFJlbW92ZSBhbGwgbWFwIGl0ZW1zIHdob3NlIGlkcyBhcmUgbm90IGluIHRoZSBwYXNzZWQgaW4gbGlzdFxuICBmaWx0ZXJCeUlkcyhpZHNUb0tlZXApIHtcbiAgICBjb25zdCBpZHMgPSB0aGlzLmdldElkcygpO1xuICAgIHJldHVybiBpZHMuZm9yRWFjaChpID0+IHtcbiAgICAgIGlmICghaWRzVG9LZWVwLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9ICBcbiAgXG4gIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBjdXJyZW50bHkgaW4gdGhlIG1hcC5cbiAgZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNpemU7XG4gIH1cbiAgXG4gIC8vIFJlbW92ZSBpdGVtIGJ5IGl0cyBpZC4gUmV0dXJuIHRoZSBuZXcgY291bnRcbiAgcmVtb3ZlKGlkKSB7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGlkKTsgICAgICBcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICB9XG4gIFxuICAvLyBBZGQgb25lIG9yIG1vcmUgaXRlbXMuIFJldHVybnMgdGhlIG5ldyBjb3VudFxuICBhZGQoaWQsIG5hbWUpIHtcbiAgICB0aGlzLl9pdGVtcy5zZXQoaWQsIG5hbWUpO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gIH1cblxuICAvLyBSZXR1cm4gYWxsIGl0ZW1zIGluIGFycmF5IGZvcm1hdFxuICBnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pdGVtcy5lbnRyaWVzKCkpLm1hcCgoW2lkLCBuYW1lXSkgPT4gKHsgaWQsIG5hbWUgfSkpO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBuYW1lIGZvciBhIHBhc3NlZCBpZFxuICBnZXROYW1lKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmdldChpZCk7XG4gIH1cblxuICAvLyBEb2VzIHRoZSBtYXAgY29udGFpbiB0aGUgcGFzc2VkIGluIGlkLlxuICBoYXNJZChpZCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5oYXMoaWQpO1xuICB9XG5cbiAgLy8gRW1wdGllcyB0aGUgbGlzdCBvZiBzZWxlY3RlZCBpdGVtcyBpbiB0aGUgbWFwLlxuICBjbGVhckl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLnNldEl0ZW1zKFtdKTtcbiAgfVxufVxuIiwiLypcbiAgVE9ETzogU3dpdGNoIHRvIHVzaW5nIGludGVyZWN0aW9uIG9ic2VydmVyXG4qL1xuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vVXRpbGl0aWVzJztcblxuLyoqXG4gIENsYXNzIHRvIG1hbmFnZSB0aGUgbG9hZCBvbiBzY3JvbGwgZnVuY3Rpb25hbGl0eSBmb3IgYSBwYWdlLlxuICBXaGVuIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBzZXJ2ZXIgc2lkZSBpdCBzaG91bGQgaGlkZSB0aGUgbG9hZGVyIGVsZW1lbnQgaWYgbm8gbW9yZSByZXN1bHRzIHRvIGxvYWQuXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cmllckxhenlMb2FkZXIge1xuICBcbiAgLyoqXG4gICAgQ29uc3RydWN0b3JcbiAgICBQYXJhbXNcbiAgICAgLSBsb2FkZXJFbGVtZW50IChyZXF1aXJlZCk6IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBsb2FkZXJcbiAgICAgLSBsb2FkZXJGbiAocmVxdWlyZWQpOiBUaGUgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIGxvYWQgdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzLiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3aWxsIGJlIHBhc3NlZCBhIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uIHdpdGggYSBib29sIGZvciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgbW9yZSBpdGVtcyB0byBsb2FkLlxuICAgICAtIGNvbmZpZ09iaiAob3B0aW9uYWwpOiAgQW4gb2JqZWN0IHdob3NlIGtleSBhbmQgdmFsdWVzIHdpbGwgb3ZlcnJpZGUgZGVmYXVsdCBjb25maWcgc2V0dGluZ3MuXG4gICovICAgICAgICAgICAgICAgICAgICBcbiAgY29uc3RydWN0b3IoXG4gICAgICBsb2FkZXJFbGVtZW50LCBcbiAgICAgIGxvYWRlckZuLCBcbiAgICAgIGNvbmZpZ09iaiA9IHt9XG4gICkge1xuICAgICAgICBcbiAgICAvKipcbiAgICAgIERlZmF1bHQgY29uZmlnIHNldHRpbmdzXG4gICAgKi9cbiAgICBjb25zdCBjb25maWdEZWZhdWx0cyA9IHtcbiAgICAgIGxvYWRlckNsYXNzOiAnbG9hZGVyJywgIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnRcbiAgICAgIGxvYWRlckxvYWRpbmdDbGFzczogJ2xvYWRlci0tbG9hZGluZycsIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnQgd2hlbiBzZWFyY2hpbmdcbiAgICAgIGRlYm91bmNlTXM6IDEwMCwgLy8gaG93IGxvbmcgdG8gd2FpdCBiZXR3ZWVuIGV2ZW50cyBiZWZvcmUgY2FsbGluZyBsb2FkXG4gICAgICBwZWVrRGlzdGFuY2U6IDAsIC8vIGhvdyBtdWNoIG9mIGxvYWRpbmcgZWxlbWVudCBzaG91bGQgYmUgb24gc2NyZW4gYmVmb3JlIGNhbGxpbmcgbG9hZFxuICAgICAgZGVidWc6IGZhbHNlICAvLyB3aGV0aGVyIG9yIG5vdCB0byBsb2cgZGVidWcgaW5mbyB0byBjb25zb2xlLlxuICAgIH07XG4gICAgICAgIFxuICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlckVsZW1lbnQ7XG4gICAgdGhpcy5fbG9hZGVyRnVuYyA9IGxvYWRlckZuO1xuICAgIHRoaXMuX21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIFxuICAgIC8vIE1lcmdlIHRoZSBkZWZhdWx0cyBhbmQgcGFzc2VkIGluIGNvbmZpZ1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnRGVmYXVsdHMsIC4uLmNvbmZpZ09iaiB9O1xuICAgIFxuICAgIC8vIFRyYWNrIHdoZXRoZXIgbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZCBvciByZW1vdmVkXG4gICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgXG4gICAgICAgIFxuICAgIGlmICghdGhpcy5fbG9hZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ051bGwgbG9hZGVyIGVsZW1lbnQgcHJvdmlkZWQnKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWRkIG9uIHRoZSBsb2FkZXJzIGNsYXNzIGZyb20gdGhlIGNvbmZpZ1xuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJDbGFzcyk7XG4gICAgXG4gICAgLy8gRGVib3VuY2UgdGhlIGNoZWNrXG4gICAgdGhpcy5fbGF6eUxvYWRDaGVjayA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGlmKHRoaXMuX2RvTG9hZE1vcmVDaGVjaygpKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdDYWxsaW5nIGxvYWQgbW9yZSBmdW5jdGlvbicpO1xuICAgICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKTtcbiAgICAgICAgdGhpcy5fc3RvcExpc3RlbmluZygpO1xuICAgICAgICBcbiAgICAgICAgLy8gY2FsbCB0aGUgc2VhcmNoIGZ1bmN0aW9uICYgcGFzcyBpbiB0aGUgZG9uZSBzZWFyY2hpbmcgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5fbG9hZGVyRnVuYyh0aGlzLl9kb25lU2VhcmNoaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vdCByZWFkeSB0byByZWxvYWQgeWV0Jyk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlYm91bmNlTXMpO1xuICAgIFxuICAgIC8vIEFkZCB0aGUgZXZlbnRzIChhbHNvIGRvZXMgaW5pdGlhbCBjaGVjaylcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xuICAgICAgICBcbiAgICB0aGlzLl9kb25lU2VhcmNoaW5nID0gdGhpcy5fZG9uZVNlYXJjaGluZy5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBfc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KHZpc2libGUpIHtcbiAgICBpZih2aXNpYmxlKSB7XG4gICAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhbmRrbGUgcmVzdWx0cyBjb21pbmcgYmFjayBpblxuICBfZG9uZVNlYXJjaGluZyhtb3JlVG9Mb2FkKSB7XG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyhgX2RvbmVTZWFyY2hpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggbW9yZSB0byBsb2FkICR7bW9yZVRvTG9hZH1gKTtcbiAgICB0aGlzLl9sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcubG9hZGVyTG9hZGluZ0NsYXNzKSBcbiAgICBpZiAobW9yZVRvTG9hZCkge1xuICAgICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdBbGwgZG9uZSAtIGhpZGluZyBsb2FkZXIgZWxlbWVudCcpO1xuICAgICAgdGhpcy5fc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIFdpcmUgdXAgZXZlbnQgbGlzdGVuZXJzIGFuZCBkbyBpbml0aWFsIGNoZWNrLlxuICBfc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkgeyAgICAgIFxuICAgICAgdGhpcy5fbWFpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFkZGVkJyk7XG4gICAgICB0aGlzLl9sYXp5TG9hZENoZWNrKCk7XG4gICAgfSAgZWxzZSB7XG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWxyZWFkeSBpbiBwbGFjZScpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgX3N0b3BMaXN0ZW5pbmcoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkKSB7XG4gICAgICB0aGlzLl9tYWluLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IGZhbHNlOyAgICAgIFxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIHJlbW92ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm8gTGlzdGVuZXJzIHRvIHJlbW92ZScpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gSGVscGVyIHRvIGxvZyBvbmx5IGlmIGRlYnVnZ2luZyBlbmFibGVkXG4gIF9jb25kaXRpb25hbERlYnVnTG9nKHRvRGVidWcsIGxvZ2dlckZ1bmMgPSBjb25zb2xlLmxvZywgKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kZWJ1Zykge1xuICAgICAgbG9nZ2VyRnVuYyh0b0RlYnVnKVxuICAgIH1cbiAgfVxuICBcbiAgLy8gRG8gdGhlIGNoZWNrIHRvIHNlZSBpZiBzY3JlZW4gc29tZXdoZXJlIGl0IHNob3VsZCBiZSBsb2FkZWQuXG4gIF9kb0xvYWRNb3JlQ2hlY2soKSB7ICAgIFxuXG4gICAgY29uc3QgaGlnaGVzdFZpc2libGVZUG9zID0gdGhpcy5fbWFpbi5zY3JvbGxUb3AgKyB0aGlzLl9tYWluLmNsaWVudEhlaWdodDsgLy93aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSAgdGhpcy5fbWFpbi5zY3JvbGxIZWlnaHQ7IC8vZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxuICAgIGNvbnN0IHBlZWtQb3NpdGlvblZpc2libGUgPSBoaWdoZXN0VmlzaWJsZVlQb3MgPj0gbG9hZE1vcmVUcmlnZ2VyUG9zO1xuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcbiAgICBcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdEb2luZyBsb2FkIG1vcmUgY2hlY2sgLi4uJyk7ICAgIFxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxuICAgICAgJ0NvbmZpZyBwZWVrIGRpc3RhbmNlJzogdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSxcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXG4gICAgICAvLydDdXJyZW50IFkgcG9zaXRpb24gb2Ygc2Nyb2xsJzogd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgLy8gJ1RoZSBpbnRlcm5hbCBzaXplIG9mIHRoZSB3aW5kb3cnOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXG4gICAgICAnVGhlIGhlaWdodCBvZiBkb2N1bWVudCc6IGRvY3VtZW50SGVpZ2h0LFxuICAgICAgJ0lzIHBlZWsgcG9zaXRpb24gdmlzaWJsZSc6IHBlZWtQb3NpdGlvblZpc2libGUsXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXG4gICAgfSwgY29uc29sZS50YWJsZSk7IFxuICAgIFxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcbiAgfTtcbn1cblxuLypcblxuZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9ICh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSk7ICAvLyBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxuICAgIGNvbnN0IHBlZWtQb3NpdGlvblZpc2libGUgPSBoaWdoZXN0VmlzaWJsZVlQb3MgPj0gbG9hZE1vcmVUcmlnZ2VyUG9zO1xuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcbiAgICBcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdEb2luZyBsb2FkIG1vcmUgY2hlY2sgLi4uJyk7ICAgIFxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxuICAgICAgJ0NvbmZpZyBwZWVrIGRpc3RhbmNlJzogdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSxcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXG4gICAgICAnQ3VycmVudCBZIHBvc2l0aW9uIG9mIHNjcm9sbCc6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgJ1RoZSBtYXggeSBwb3NpdGlvbiB2aXNpYmxlJzogaGlnaGVzdFZpc2libGVZUG9zLFxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxuICAgICAgJ0lzIHRoZSBsb2FkIG1vcmUgcG9zaXRpb24gdmlzaWJsZSwgb3IgYXQgZG9jIGVuZCc6IHNob3VsZExvYWRNb3JlLFxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcbiAgICBcbiAgICByZXR1cm4gc2hvdWxkTG9hZE1vcmU7XG4gIH07XG5cbiovIiwiXG5pbXBvcnQge1NlZUFsbEF0dHJpYnV0ZUhlbHBlcn0gZnJvbSAnLi9TZWVBbGxIZWxwZXInO1xuXG5uZXcgU2VlQWxsQXR0cmlidXRlSGVscGVyKCk7XG4iLCIvKipcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXG4gKiBcbiAqICBkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkPVwiPDxpZCBvZiBjb250YWluZXIgdG8gYmUgZWZmZWN0ZWQ+PlwiXG4gKiBcbiAqICBPUFRJT05BTDogVXNlIHRoZSBmb2xsb3dpbmcgYXR0cnRpYnV0ZXMgdG8gYWRqdXN0IHRoZSBiZWhhdmlvclxuICogXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tbGltaXQ9XCIyMFwiIC0gc2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgaW5pdGlhbGx5LiAgRGVmYXVsdCBpcyAxMFxuICogIFxuICogIGRhdGEtc2hvd2FsbC1jb3VudC1pZCAtIGlkIG9mIGEgZmllbGQgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCB3aXRoIGEgY291bnQgb2YgdGhlIGl0ZW1zXG4gKiBcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1zZWxlY3RvciAtIGEgc2VsZWN0b3IgdG8gZ2V0IHRoZSBpdGVtIGZyb20gd2l0aCB0aGUgY29udGFpbmVyLiAgVGhpcyBpcyByZXF1aXJlZCBpZiB0aGUgY29udGFpbmVyIGlzIG5vdCBhIHRhYmxlXG4gKi9cblxuIGV4cG9ydCBjbGFzcyBTZWVBbGxBdHRyaWJ1dGVIZWxwZXIge1xuICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNob3dNb3JlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNob3dhbGwtY29udGFpbmVyLWlkXScpO1xuXG4gICAgICAgIHNob3dNb3JlQnV0dG9ucy5mb3JFYWNoKHNob3dBbGxCdXR0b24gPT4ge1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb250YWluZXJJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWNvbnRhaW5lci1pZFwiKTtcbiAgICAgICAgICAgIHZhciBpdGVtU2VsZWN0b3IgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLXNlbGVjdG9yXCIpO1xuICAgICAgICAgICAgdmFyIHNob3dBbGxJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xuICAgICAgICAgICAgdmFyIHNob3dBbGxJdGVtQ291bnRJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWNvdW50LWlkXCIpO1xuICAgICAgICAgICAgdmFyIGJ1dHRvbklkID0gc2hvd0FsbEJ1dHRvbi5pZDtcblxuICAgICAgICAgICAgaWYgKCFidXR0b25JZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yVG9Vc2U7XG5cbiAgICAgICAgICAgIGlmIChpdGVtU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclRvVXNlID0gYCMke2NvbnRhaW5lcklkfSAke2l0ZW1TZWxlY3Rvcn1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gXCJUQUJMRVwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JUb1VzZSA9IGAjJHtjb250YWluZXJJZH0gdGJvZHkgdHJgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gY2hpbGQgc2VsZWN0b3IgYXZhaWxhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHNob3dBbGxJdGVtTGltaXQsIDEwKTtcblxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcblxuICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZWRJdGVtTGltaXQpKSB7IFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7Li4ub3B0aW9ucywgaXRlbUxpbWl0OiBwYXJzZWRJdGVtTGltaXR9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihzaG93QWxsSXRlbUNvdW50SWQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gey4uLm9wdGlvbnMsIGNvdW50RmllbGRJZDogc2hvd0FsbEl0ZW1Db3VudElkfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3IFNlZUFsbEhlbHBlcihzZWxlY3RvclRvVXNlLCBgIyR7YnV0dG9uSWR9YCwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICB9XG4gfVxuXG5leHBvcnQgY2xhc3MgU2VlQWxsSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGl0ZW1zU2VsZWN0b3IsIHNlZUFsbFNlbGVjdG9yLCBwYXNzZWRPcHRpb25zID0ge30pIHtcblxuICAgICAgICB0aGlzLl9pdGVtc1NlbGVjdG9yID0gaXRlbXNTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc2VlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWVBbGxTZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9zZWVBbGwpIHtcbiAgICAgICAgICAgIC8vIFJ1bm5pbmcgb24gYSBwYWdlIHdpdGhvdXQgc2VlIGFsbCBidXR0dG9uLCBzbyBzdG9wIGFmdGVyIGNvdW50cy5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mU2VlQWxsID0gdGhpcy5fc2VlQWxsLnN0eWxlLmRpc3BsYXk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7IGl0ZW1MaW1pdDogNSwgc2hvd0xlc3NUZXh0OiBcIlNlZSBMZXNzXCIsIGNvdW50RmllbGRJZDogbnVsbCB9O1xuICAgICAgICB0aGlzLl9vcHRpb25zID0geyAuLi5kZWZhdWx0cywgLi4ucGFzc2VkT3B0aW9ucyB9O1xuICAgICAgICB0aGlzLl9pdGVtTGltaXQgPSB0aGlzLl9vcHRpb25zLml0ZW1MaW1pdDtcblxuICAgICAgICB0aGlzLl9zaG93TGVzc1RleHQgPSB0aGlzLl9vcHRpb25zLnNob3dMZXNzVGV4dDtcbiAgICAgICAgdGhpcy5fc2hvd01vcmVUZXh0ID0gdGhpcy5fc2VlQWxsLnRleHRDb250ZW50O1xuXG4gICAgICAgIHRoaXMuX2NvdW50RmllbGQgPSB0aGlzLl9vcHRpb25zLmNvdW50RmllbGRJZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX29wdGlvbnMuY291bnRGaWVsZElkKSA6IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc2hvd2luZ0FsbCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3NlZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dpbmdBbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlRXhjZXNzSXRlbXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dBbGxJdGVtcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaG93aW5nQWxsID0gIXRoaXMuX3Nob3dpbmdBbGw7XG4gICAgICAgICAgICB0aGlzLl9zZWVBbGwudGV4dENvbnRlbnQgPSB0aGlzLl9zaG93aW5nQWxsID8gdGhpcy5fc2hvd0xlc3NUZXh0IDogdGhpcy5fc2hvd01vcmVUZXh0O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgX3Nob3dBbGxJdGVtcygpIHtcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXM7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2hpZGVFeGNlc3NJdGVtcygpIHtcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvQ2hlY2sgPSBpbmRleCArIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IHRvQ2hlY2sgPiB0aGlzLl9pdGVtTGltaXQgP1xuICAgICAgICAgICAgICAgIFwibm9uZVwiIDpcbiAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWNhbGN1bGF0ZSgpIHsgICAgXG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2l0ZW1zU2VsZWN0b3IpKTtcblxuICAgICAgICBpZiAodGhpcy5fY291bnRGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5fY291bnRGaWVsZC50ZXh0Q29udGVudCA9IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLl9zZWVBbGwpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5fYWxsSXRlbXMubGVuZ3RoIDw9IHRoaXMuX2l0ZW1MaW1pdCkge1xuICAgICAgICAgICAgdGhpcy5fc2VlQWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX29yaWdpbmFsVmlzaWJpbGl0eU9mSXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFZpc2liaWxpdHlPZkl0ZW1zID0gdGhpcy5fYWxsSXRlbXNbMF0uc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NlZUFsbC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fb3JpZ2luYWxWaXNpYmlsaXR5T2ZTZWVBbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3Nob3dpbmdBbGwpICB7IHRoaXMuX2hpZGVFeGNlc3NJdGVtcygpOyB9XG4gICAgfVxufVxuIiwiLyoqKioqKiBcblxuICBDcmVhdGVzIGEgdGFnIGxpc3QgZnJvbSBhIHNlbGVjdCBlbGVtZW50XG5cbiAgdXNhZ2U6XG5cbiAgbmV3IFNlbGVjdExpc3RUYWcoc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMpLlxuXG4gIC0gc2VsZWN0SWQgKHJlcXVpcmVkKTogVGhlIGlkIG9mIHRoZSBzZWxlY3QgZWxlbWVudCBhY3RpbmcgYXMgdGhlIHNvdXJjZSAobXVzdCBoYXZlIG11bHRpcGxlIGF0dHJpYnV0ZSwgYW5kIGFsbCBpdGVtcyBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkKVxuXG4gIC0gcmV2ZXJ0R3JvdXBzIChvcHRpb25hbCk6IFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgY2xpY2tlZCB0byByZXZlcnQgc2VsZWN0ZWQgb3B0aW9ucyAoc2hvdWxkIGhhdmUgaXMtaGlkZGVuIGNsYXNzIHRvIHN0YXJ0KVxuXG4gIC0gb25VcGRhdGVGdW5jIChyZXF1aXJlZCk6IEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSB0YWcgaGFzIGJlZW4gcmVtb3ZlZCwgb3Igb3B0aW9ucyBhcmUgcmV2ZXJ0ZWQuLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggdHdvIHBhcmFtcywgc2VsZWN0ZWRPcHRpb25zIGFuZCBhbGxPcHRpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGludGVuZGVkIHRvIG1ha2UgdGhlIGNvbnRyb2wgbW9yZSBmbGV4aWJsZSBpLmUuIG91ciBmaXJzdCB1c2FnZSBpcyB0byB1cGRhdGUgbGFiZWwgd2l0aCBzZWxlY3RlZCBpdGVtcyB0ZXh0IGVsc2V3aGVyZSBvbiBwYWdlIHdpdGhvdXQgZnVydGhlciBjb3VwbGluZy5cblxuICAtIGl0ZW1zIChvcHRpb25hbCk6ICBIdG1sIG9wdGlvbiBlbGVtZW50cyB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB1bmRlcmx5aW5nIHNlbGVjdCBsaXN0IGJlZm9yZSB0YWdzIGdlbmVyYXRlZC4gXG5cbioqKioqKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdExpc3RUYWdzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMgPSAoKSA9PiB7fSwgb3B0aW9ucyA9IG51bGwpIHtcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jID0gb25VcGRhdGVGdW5jO1xuXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XG4gICAgICB0aGlzLnRhZ09wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG5cbiAgICAgIGlmIChyZXZlcnRHcm91cHNJZCkge1xuICAgICAgICB0aGlzLnJldmVydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJldmVydEdyb3Vwc0lkKTtcbiAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XG4gICAgICAgICAgdGhpcy5yZXZlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiB0aGlzLnRhZ09wdGlvbnMuYXBwZW5kQ2hpbGQobykpO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3cgaGFuZGxlcyBwYXNzZWQgaW4gc2VsZWN0IG9wdGlvbnNcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IG9wdGlvbnMgfHwgWy4uLnRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKV07XG5cbiAgICAgIGlmICh0aGlzLnJldmVydEJ0biAmJiB0aGlzLmFsbE9wdGlvbnMuc29tZShvID0+ICFvLnNlbGVjdGVkKSkge1xuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgIFxuICAgICAgdGhpcy50YWdzLmNsYXNzTGlzdC5hZGQoJ3RhZ3MnKTtcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJ2knKSkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xuICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyt0YXJnZXRWYWwrJ1wiXScpO1xuICAgICAgICAgICAgICBpZihvKXtcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTsgICAgICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFnT3B0aW9ucy5hZnRlcih0aGlzLnRhZ3MpO1xuXG4gICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xuICB9XG5cbiAgcG9wdWxhdGVUYWdzKCkge1xuICAgICAgdGhpcy50YWdzLmlubmVySFRNTCA9ICcnOyAgICAgIFxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xuICAgICAgc2VsZWN0ZWRPcHRpb25zLmZvckVhY2godCA9PiB7XG4gICAgICAgIHRoaXMudGFncy5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUYWcodC5pbm5lclRleHQsIHQudmFsdWUpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMoc2VsZWN0ZWRPcHRpb25zLCB0aGlzLmFsbE9wdGlvbnMpO1xuICAgIH1cblxuICBtYWtlVGFnKHRleHQsIHZhbHVlKSB7XG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX19pY29uXCIpOyAgICAgIFxuICAgICAgaS5kYXRhc2V0LnZhbD12YWx1ZTtcbiAgICAgIGkuaW5uZXJUZXh0ID0gXCJjbGVhclwiXG5cbiAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChpKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRhZztcbiAgICB9O1xuXG4gIC8vIERlc2VsZWN0IGFsbCB0aGUgb3B0aW9ucyBpbiB0aGUgdW5kZXJseWluZyBzZWxlY3QgbGlzdC4gIE9wdGlvbmFsbHkgcmVnbmVyYXRlZCB0aGUgdGFncyBsaXN0LiBcbiAgLy8gT3B0aW9uYWwgYXMgbm90IHdvcnRoIG92ZXJoZWFkIGlmIGRvbnQgbmVlZCBpdC4gXG4gIGNsZWFySXRlbXMocmVwb2x1bGF0ZVRhZ3MgPSBmYWxzZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IGZhbHNlKTtcblxuICAgIGlmIChyZXBvbHVsYXRlVGFncykgeyAgICAgIFxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2hvdWxkIGhhdmUgYSBzZWN0aW9uIGxpa2UgdGhpcyBmb3IgZWFjaCBwYWdlIHRoZSBjb250cm9sIGlzIHVzZWQgb24sIHVubGVzcyB3ZSB3YW50IGl0IGJlaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGFzIGEgcHJldmlvdXMgdmVyc2lvbiAoaW5jbHVkaW5nIGlkcyBhbmQgdXBkYXRlIGZ1bmN0aW9uKSBcbi8vICpCZXR0ZXIgc3RpbGwqIC0gaGF2ZSBpbiBzZXBlcmF0ZSBzY3JpcHQgZmlsZSBzY29wZWQgdG8gc3BlY2lmaWMgcGFnZSAobGlrZSB3aXRoIFNlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcylcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sbG93dXBHcm91cFNlbGVjdG9yJykpIHtcblxuICAvLyBQcmVwYXJlIGFuIHVwZGF0ZSBmdW5jdGlvbiBpZiByZXF1aXJlZCAob3B0aW9uYWwgcGFyYW1ldGVyKVxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlR3JvdXBzTGFiZWxTcGFuJyk7XG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBwbHVyYWxpc2VkR3JvdXBzID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMSA/ICdncm91cCcgOiAnZ3JvdXBzJztcbiAgICBzcGFuLmlubmVyVGV4dCA9IGBTZW5kIHRvICR7c2VsZWN0ZWRPcHRpb25zLmxlbmd0aH0gcmVzcG9uc2UgJHtwbHVyYWxpc2VkR3JvdXBzfWA7XG4gIH1cblxuICAvLyBJbml0aWFsaXNlIGFuIGluc3RhbmNlIG9mIHRoZSBjb250cm9sXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnRm9sbG93dXBHcm91cFNlbGVjdG9yJywgJ3JldmVydF9ncm91cHMnLCBvblVwZGF0ZUZ1bmMpOyBcbn1cbiIsIi8vIFN0b3JlIGEgc2ltcGxlIHZhbHVlIGluIGEgY29va2llXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDb29raWVIZWxwZXJ7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICBcbiAgICAgIHRoaXMuX2luaXRpYWxpc2UoKTtcbiAgICB9XG5cbiAgICBfaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgY29uc3QgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llO1xuXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWVTdHJpbmcuc3BsaXQoJzsgJyk7XG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ29va2llID0gY29va2llcy5maW5kKGMgPT4gYy5zdGFydHNXaXRoKGAke3RoaXMuX25hbWV9PWApKTtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IG1hdGNoaW5nQ29va2llID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoaW5nQ29va2llLnNwbGl0KCc9JylbMV0pIDogJyc7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld0Nvb2tpZSA9IGAke3RoaXMuX25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX07IHBhdGg9Lzsgc2FtZXNpdGU9U3RyaWN0YFxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XG4gICAgfVxuXG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxufVxuXG4iLCJcbi8vIFJlbW92ZSB0aGUgbm8tanMgY2xhc3Mgc28gd2UgYXJlIGFibGUgdG8gdGVsbCB0aGF0IGpzIGlzIGVuYWJsZWRcbi8vIFVzZWZ1bCBmb3IgaGlkaW5nIGVsZW1lbnRzIHdoZW4ganMgbm90IGF2YWlsYWJsZS5cbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnanMnKTsiLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlcycpICE9IG51bGwpIHtcblxuXG4gICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgcmVzcG9uc2UgZmllbGRzIGFuZCB0aGUgcmVzcG9uc2UgbGlzdFxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2UtZmllbGQnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb25zLWxpc3QnKTtcblxuICAgICAgICAvLyBIaWRlIGFsbCB0aGUgZW1wdHkgcmVzcG9uc2UgZmllbGRzXG4gICAgICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpIC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFzZXQua2V5ID0gaWR4O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXZlYWxzIHRoZSBmaXJzdCBoaWRkZW4gaXRlbVxuICAgICAgICBjb25zdCBzaG93Rmlyc3RFbXB5SXRlbSA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlc3BvbnNlID0gcmVzcG9uc2VzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNwb25zZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBXaGVuIGFuIGl0ZW0gaXMgcmVtb3ZlZCwgY29weSBhbGwgdmFsdWVzIGZvcndhcmQgdG8gZmlsbCBnYXBzXG4gICAgICAgIGNvbnN0IGNvcHlJdGVtc0ZvcndhcmQgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IGluZGV4ICsgMTsgaWR4IDwgcmVzcG9uc2VzLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2SW5wdXQgPSByZXNwb25zZXNbaWR4LTFdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKTs7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSByZXNwb25zZXNbaWR4XS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgcHJldklucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9cbiAgICAgICAgY29uc3QgcmVtb3ZlTGFzdEVtcHR5SXRlbSA9IChyZW1vdmVJZHgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQXMgYWxsIGNvcGllZCBmb3J3YXJkIGJsYW5rIGxhc3QgaXRlbSBvdXRcbiAgICAgICAgICAgIHJlc3BvbnNlc1tyZXNwb25zZXMubGVuZ3RoLTFdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKS52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggYmFja3dhcmRzIGFuZCBoaWRlIGxhc3QgdmlzaWJsZSBpdGVtXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSAocmVzcG9uc2VzLmxlbmd0aC0xKTsgaWR4ID49IHJlbW92ZUlkeDsgaWR4LS0pIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlc1tpZHhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWRkUmVzcG9uc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9yZXNwb25zZVwiKTtcblxuICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBzaG93Rmlyc3RFbXB5SXRlbSgpO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzcG9uc2VzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLXJlc3BvbnNlJykpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSWR4ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XG4gICAgICAgICAgICAgICAgY29weUl0ZW1zRm9yd2FyZChyZW1vdmVJZHgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RFbXB0eUl0ZW0ocmVtb3ZlSWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcbn1cblxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lJykgIT1udWxsKSB7XG5cbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICAgICAgdmFyIGFkZFBob25lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gICAgICAgIHZhciBhZGRQaG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUGhvbmVCdG5cIik7XG5cbiAgICAgICAgYWRkUGhvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG5cbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRQaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgfSlcblxuICAgIH0pKFwiYWRkUGhvbmVcIik7XG5cbn1cblxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsJykgIT1udWxsKSB7XG5cbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICAgICAgdmFyIGFkZEVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gICAgICAgIHZhciBhZGRFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRW1haWxCdG5cIik7XG5cbiAgICAgICAgYWRkRW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG5cbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRFbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgfSk7XG4gICAgfSkoXCJhZGRFbWFpbFwiKTtcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xuXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xuXG4gICAgICAgIGFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVHcm91cEJ1dHRvbiAhPW51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkoXCJhZGRfZ3JvdXBcIik7XG59XG5cbnZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xuXG5pZiAoZ3JvdXBUZXh0YXJlYSAhPSBudWxsKSB7XG4gICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0MiA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcblxuICAgICAgICBpZiAodGFyZ2V0Mi5tYXRjaGVzKFwiLmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcblxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcblxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XG4gICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpICE9bnVsbCkge1xuXG4gICAgdmFyIGlucHV0RXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpO1xuICAgIHZhciBpbnB1dEVycm9yc0FycmF5ID0gT2JqZWN0LmtleXMoaW5wdXRFcnJvcnMpO1xuXG4gICAgaW5wdXRFcnJvcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RXJyb3JzW2tleV0pO1xuICAgICAgICBpbnB1dEVycm9yc1trZXldLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuXG4gICAgfSk7XG59XG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbi8vICAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcblxuLy8gICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XG4vLyAgICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImFzaWRlLS1hY3RpdmVcIik7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyB9KShcIiNTaWRlYmFyXCIpO1xuXG4iLCIvKiBcbiAgRGVib3VuY2UgZnVuY3Rpb24gcHJldmVudCBleGNlc3NpdmUgY2FsbHMgb24gc2Nyb2xsLlxuICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXG4qL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuXHR2YXIgdGltZW91dDtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHR9O1xufTsiLCJ2YXIgdXBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZCcpO1xuXG5pZiAodXBsb2FkKSB7XG5cbiAgdXBsb2FkLm9uY2hhbmdlID0gdXBsb2FkT25DaGFuZ2U7XG4gIGZ1bmN0aW9uIHVwbG9hZE9uQ2hhbmdlKCkge1xuICAgIHZhciBmaWxlbmFtZSA9IHRoaXMudmFsdWU7XG4gICAgdmFyIGxhc3RJbmRleCA9IGZpbGVuYW1lLmxhc3RJbmRleE9mKFwiXFxcXFwiKTtcbiAgICBpZiAobGFzdEluZGV4ID49IDApIHtcbiAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuc3Vic3RyaW5nKGxhc3RJbmRleCArIDEpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZW5hbWUnKS52YWx1ZSA9IGZpbGVuYW1lO1xuICB9XG59IiwiXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cblxuICAgIC8vIGNoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcbiAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbSAhPT0gbnVsbCkge1xuXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xuXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgLy9pZiBpdCBkb2VzIHRoZW4gaGlkZSB0aGUgc25hY2tiYXJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XG4gICAgICAgICAgICBsb2NhdGlvbnMgOiBuZXcgQXJyYXkoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChzbmFja2Jhcikge1xuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGlmICghc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufSkoXCIjaGludC1zbmFja2JhclwiKTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogIFdpcmUgdXAgdGFibGVzIHNvIHRoYXQgd2hvbGUgcm93IGNhbiBiZSBjbGlja2VkLCByYXRoZXIgdGhhbiBpbmRpdmlkdWFsIGNlbGxzXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2V0IGFsbCB0YWJsZSByb3dzIHRoYXQgc2hvdWxkIGJlIGNsaWNrYWJsZVxuY29uc3Qgcm93c1RvTGlua2lmeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlW2RhdGEtbGlua2FibGUtY2VsbF0gPiB0Ym9keSA+IHRyJyk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBjbGlja1xuY29uc3QgaGFuZGxlUm93Q2xpY2sgPSBlID0+IHtcblxuICAvLyBGaW5kIHRoZSBjb2x1bW4gdGhhdCBzaG91bGQgY29udGFpbiB0aGUgbGlua1xuICBjb25zdCB0YWJsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RhYmxlJyk7XG4gIGNvbnN0IGNvbFRvUGFyc2UgPSB0YWJsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlua2FibGUtY2VsbCcpO1xuXG4gIC8vIEdldCB0aGUgY2xpY2tlZCByb3csIGFzIG1heWJlIGEgdGQgY2xpY2tlZC5cbiAgY29uc3Qgcm93ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcblxuICB0cnkge1xuICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSBsaW5rIHRoYXQgc2hvdWxkIGJlIGNsaWNrZWQuXG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQoY29sVG9QYXJzZSwxMCkgKyAxO1xuICAgIGNvbnN0IGxpbmsgPSByb3cucXVlcnlTZWxlY3RvcihgdGQ6bnRoLWNoaWxkKCR7Y29sfSkgYWApO1xuICAgIFxuICAgIC8vIENsaWNrIHRoZSBsaW5rIG9yIHJlcG9ydCBmYWlsdXJlIHRvIGZpbmRcbiAgICBpZiAobGluaykge1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gbGluayBmb3VuZCBpbiBjb2x1bW4gc3BlY2lmaWVkIGJ5IFtkYXRhLWxpbmthYmxlLWNlbGxdJyk7XG4gICAgfVxuICB9XG4gIGNhdGNoIHtcbiAgICAvLyBXYXJuIG9mIGludmFsaWQgY29sdW1uIHNwZWNpZmllZC5cblx0Y29uc29sZS5lcnJvcignSW52YWxpZCB2YWx1ZSBzcGVjaWZpZWQgYnkgW2RhdGEtbGlua2FibGUtY2VsbF0nKTtcbiAgfVxufTtcblxuLy8gV2lyZSB1cCB0aGUgbGlzdGVuZXJzXG5yb3dzVG9MaW5raWZ5LmZvckVhY2gocm93ID0+IHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJvd0NsaWNrKSk7IiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XG5cbiAgICBpZiAobWVudSkge1xuXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XG5cbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxufSkoJyNzZWFyY2gnKTtcblxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XG5cbiAgICBpZiAobWVudSkge1xuXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XG5cbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKCFtZW51LmNvbnRhaW5zKGUudGFyZ2V0KSAgJiYgbWVudUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59KSgnI21lbnUnKTsiLCIvKipcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXG4gKlxuICogIGRhdGEtc2hvd2FsbC10YWJsZS1pZD1cIjw8aWQgb2YgdGFibGUgdG8gYmUgZWZmZWN0ZWQ+PlwiXG4gKlxuICogIE9QVElPTkFMOiBVc2UgdGhlIGZvbGxvd2luZyBhdHRydGlidXRlcyB0byBhZGp1c3QgdGhlIGJlaGF2aW9yXG4gKlxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcbiAqXG4gKi9cblxuaWYoZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstbW9kZVwiKSkpe1xud2luZG93LnNjcm9sbFRvKDAsZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLW1vZGVcIikuc2Nyb2xsSGVpZ2h0KTtcbn07XG4iLCIvKiBcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc3RhZmYgY29tcG9zZSBwYWdlLlxuKi9cblxuaW1wb3J0IFNpbXBsZUNvb2tpZUhlbHBlciBmcm9tICcuLi9TaW1wbGVDb29raWVIZWxwZXInO1xuaW1wb3J0IElkU2Vzc2lvblN0b3JhZ2VIZWxwZXIgZnJvbSAnLi4vSWRTZXNzaW9uU3RvcmFnZUhlbHBlcic7XG5pbXBvcnQgU2VsZWN0TGlzdFRhZ3MgZnJvbSAnLi4vU2VsZWN0TGlzdFRhZ3MnO1xuaW1wb3J0IHtTZWVBbGxIZWxwZXJ9IGZyb20gJy4uL1NlZUFsbEhlbHBlcic7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtY29tcG9zZScpKSB7XG5cbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jb250YWN0Jyk7XG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0X2lucHV0Jyk7XG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnB1dF9NZXNzYWdlJyk7XG4gIGNvbnN0IHJlc2VuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X0F1dG9SZXNlbmRTY2hlZHVsZScpO1xuICBjb25zdCByZXNwb25zZU9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1vcHRpb24nKSk7XG5cbiAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xuICBjb25zdCBjb29raWVNZXNzYWdlSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VDb250ZW50Jyk7XG4gIGNvbnN0IGNvb2tpZUF1dG9SZXNlbmRIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVJlc2VuZCcpO1xuICBjb25zdCBjb29raWVSZXNwb25zZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzcG9uc2VzJyk7XG4gIGNvbnN0IGlkc1Nlc3Npb25IZWxwZXIgPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xuICBcbiAgY29uc3QgZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm9uRW1wdHlPcHRpb25zID0gcmVzcG9uc2VPcHRpb25zLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICBpZiAoY3Vyci52YWx1ZSkge1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgY3Vyci52YWx1ZV07XG4gICAgICB9XG4gIFxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIG5vbkVtcHR5T3B0aW9ucy5qb2luKCd8fCcpO1xuICB9O1xuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb29raWVIZWxwZXIuc2V0KHN1YmplY3RJbnB1dC52YWx1ZSk7XG4gICAgY29va2llTWVzc2FnZUhlbHBlci5zZXQobWVzc2FnZUlucHV0LnZhbHVlKTtcbiAgICBjb29raWVBdXRvUmVzZW5kSGVscGVyLnNldChyZXNlbmRJbnB1dC52YWx1ZSk7ICBcbiAgICBjb29raWVSZXNwb25zZUhlbHBlci5zZXQoZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhZ3NTZWVBbGxIZWxwZXIgPSBuZXcgU2VlQWxsSGVscGVyKCcjQXNjU3RhZmZTZWxlY3RvciArIGRpdiA+IC50YWcnLCAnI3NlZU1vcmVSZWNpcGllbnRzJywgeyBpdGVtTGltaXQ6IDIxLCBjb3VudEZpZWxkSWQ6ICdyZWNpcGllbnRzQ291bnQnIH0pO1xuICBcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xuICAgIGlkc1Nlc3Npb25IZWxwZXIuZmlsdGVyQnlJZHMoc2VsZWN0ZWRPcHRpb25zLm1hcCh4ID0+IHgudmFsdWUpKTtcbiAgICB0YWdzU2VlQWxsSGVscGVyLnJlY2FsY3VsYXRlKCk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RPcHRpb25zID0gaWRzU2Vzc2lvbkhlbHBlci5nZXRJdGVtcygpLm1hcCgoe2lkLCBuYW1lfSk9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBvcHRpb24udmFsdWUgPSBpZDtcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gbmFtZTtcbiAgICByZXR1cm4gb3B0aW9uO1xuICB9KTtcbiAgXG4gIGNvbnN0IHNsdCA9IG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYywgc2VsZWN0T3B0aW9ucyk7IFxuXG4gIHRhZ3NTZWVBbGxIZWxwZXIucmVjYWxjdWxhdGUoKTtcblxuICBjb25zdCBkaXNjYXJkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkRpc2NhcmQnKTtcbiAgZGlzY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZHNTZXNzaW9uSGVscGVyLmNsZWFySXRlbXMoKTtcbiAgICBzbHQuY2xlYXJJdGVtcygpO1xuICAgIHRhZ3NTZWVBbGxIZWxwZXIoKTtcbiAgfSk7XG5cblxufVxuIiwiXG4vLyBDaGVjayB3ZSBhcmUgb24gdGhlIGNvcnJlY3QgcGFnZS5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluLmNvdXJpZXItcHJvZmlsZS1wYWdlJyk7XG5cbmlmIChtYWluKSB7XG5cbiAgICAvLyBHcmFiIGFsbCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBvbmx5IHNob3cgd2hlbiBqcyBlbmFibGVkXG4gICAgY29uc3QgYWRkUGhvbmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmVCdG4nKTtcbiAgICBjb25zdCBhZGRFbWFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbEJ0bicpO1xuICAgIGNvbnN0IHJlbW92ZUVtYWlsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKTtcbiAgICBjb25zdCByZW1vdmVQaG9uZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSk7XG4gICAgXG4gICAgLy8gU2hvdyBhbGwgdGhlIGpzIG9ubHkgYnV0dG9uc1xuICAgIFthZGRQaG9uZUJ0biwgYWRkRW1haWxCdG4sIC4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbWFpbHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZW1haWxzJyk7XG4gICAgXG4gICAgZW1haWxzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYW5rJyk7XG4gICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGhvbmVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBob25lcycpO1xuICAgIFxuICAgIHBob25lc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4geyAgICAgICAgXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JsYW5rJyk7XG4gICAgICAgIHNldEFkZFBob25lQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGVtcHR5IHBob25lIGJveGVzLCBvciBlbWFpbCBib3hlc1xuICAgIGNvbnN0IGhhc0VtcHR5Q29udGFjdEJveGVGb3JUeXBlID0gKHNlY3Rpb24sIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHNlY3Rpb25cbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAgICAgICAgIC5zb21lKHggPT4geC52YWx1ZS50cmltKCkgPT09ICcnKTtcbiAgICB9O1xuXG4gICAgLy8gU2hvdWxkIG5vdCBoYXZlIGFuZCBhZGQgZW1haWwgYnV0dG9uIGlmIGFscmVhZHkgYSBibGFuayBvbmUgYXZhaWxhYmxlXG4gICAgY29uc3Qgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlID0gKCkgPT4ge1xuICAgICAgICBhZGRQaG9uZUJ0bi5zdHlsZS5kaXNwbGF5ID0gaGFzRW1wdHlDb250YWN0Qm94ZUZvclR5cGUocGhvbmVzU2VjdGlvbiwgJy5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0JykgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgIH1cblxuICAgIC8vIFNob3VsZCBub3QgaGF2ZSBhbmQgYWRkIHBob25lIGJ1dHRvbiBpZiBhbHJlYWR5IGEgYmxhbmsgb25lIGF2YWlsYWJsZVxuICAgIGNvbnN0IHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSA9ICgpID0+IHtcbiAgICAgICAgYWRkRW1haWxCdG4uc3R5bGUuZGlzcGxheSA9ICBoYXNFbXB0eUNvbnRhY3RCb3hlRm9yVHlwZShlbWFpbHNTZWN0aW9uLCAnLmlucHV0LS1wcm9maWxlLWVtYWlsID4gaW5wdXQnKSA/ICdub25lJyA6ICdibG9jayc7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBmb3JtLCB0byBhZGQgcmVtb3ZlIGxpc3RlbmVycyB0b1xuICAgIGNvbnN0IGNvbnRhY3RQcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXByb2ZpbGUtZm9ybScpOyAgIFxuXG4gICAgWy4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuY2xvc2VzdCgnLmZvcm1fX2dyb3VwJykuY2xhc3NMaXN0LmFkZCgnaW5wdXRfX3dpdGhhY3Rpb24nKTtcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBleGNlc3MgaW5wdXRzIG9mIHRoZXNlIHR5cGVzIG9uIGxvYWQgKEFkZGVkIGZvciBub24ganMgcHVycG9zZXMpLlxuICAgIFtcIi5pbnB1dC0tcHJvZmlsZS1waG9uZSA+IGlucHV0XCIsIFwiLmlucHV0LS1wcm9maWxlLWVtYWlsID4gaW5wdXRcIl0uZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0c0ZvclNlbGVjdG9yID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICAgICAgaWYgKGlucHV0c0ZvclNlbGVjdG9yLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGlucHV0c0ZvclNlbGVjdG9yLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xuICAgICAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgY29ycmVjdCBzdGFydCBzdGF0ZSBmb3IgZW1haWwgYW5kIHBob25lIGFkZCBidXR0b25zXG4gICAgc2V0QWRkUGhvbmVCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XG4gICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XG5cbiAgICAvLyBBZGQgYSBuZXcgcGhvbmUgcm93XG4gICAgZnVuY3Rpb24gbmV3UGhvbmVSb3coKSB7ICAgICAgICBcblxuICAgICAgICBjb25zdCBuZXdQaG9uZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UGhvbmUuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1waG9uZVwiO1xuICAgICAgICBuZXdQaG9uZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIHBob25lIG51bWJlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSBidG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmVcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cInBob25lX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIG5ld1Bob25lO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBnYXBzIGluIGluZGV4IHNlcXVlbmNlc1xuICAgIGZ1bmN0aW9uIF9yZW51bWJlcklucHV0cyhzZWxlY3RvciwgaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnAgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wLmlkID0gYCR7aWRlbnRpZmllcn1fJHtpbmRleH1fYDtcbiAgICAgICAgICAgIGlucC5uYW1lID0gYCR7aWRlbnRpZmllcn1bJHtpbmRleH1dYDtcbiAgICAgICAgICAgIGNvbnN0IHNwbiA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsbXNnLWZvcicsIGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIG5ldyBlbWFpbCByb3dcbiAgICBmdW5jdGlvbiBuZXdFbWFpbFJvdygpIHsgICAgXG4gICAgICAgIGNvbnN0IG5ld0VtYWlsUm93ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgXG4gICAgICAgIG5ld0VtYWlsUm93LmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtZW1haWxcIjsgIFxuICAgICAgICBuZXdFbWFpbFJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIkFkZCBhbiBlbWFpbCBhZGRyZXNzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmVtb3ZlICBidG4tcmVtb3ZlLWNvbnRhY3QtZW1haWxcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cImVtYWlsX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIG5ld0VtYWlsUm93O1xuICAgIH1cblxuICAgIC8vIFdpcmUgdXAgdGhlIGJ1dHRvbiBsaXN0ZW5lcnNcbiAgICBhZGRQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld1Bob25lUm93KCkpO1xuICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xuICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcbiAgICB9KTtcbiAgICBcbiAgICBhZGRFbWFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld0VtYWlsUm93KCkpXG4gICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcbiAgICAgICAgc2V0QWRkRW1haWxCdXR0b25WaXNpYmlsaXR5SWZBcHBsaWNhYmxlKCk7XG4gICAgfSk7ICBcblxuICAgIC8vIEhhbmRsZSB0aGUgcmVtb3ZlIG9uIHRoZSBwYXJlbnQgZm9ybSwgc28gdGhhdCB3aWxsIHdvcmsgZm9yIG5ldyBpdGVtcyBhZGRlZCBhZnRlciBsb2FkLlxuICAgIGNvbnRhY3RQcm9maWxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykgIHx8IGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtZW1haWwnKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgYWxsIHRoZSBpbnB1dHMgaW4gdGhlIHBhcmVudCBzZWN0aW9uXG4gICAgICAgICAgICBjb25zdCBpbnB1dHMgPSBlLnRhcmdldC5jbG9zZXN0KCdzZWN0aW9uJykucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgICAgICAgLy8gSWYgb25seSBvbmUgYmxhbmsgaXQgLSBlbHNlIHJlbW92ZSBpdFxuICAgICAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHNbMF0udmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwYXJlbnQgZm9ybSBncm91cCBjb250YWluaW5nIGVtYWlsIG9yIHBob25lLlxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZSgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpIHtcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLXBob25lJywgJ0lucHV0LlBlcnNvbmFsUGhvbmVOdW1iZXJzJyk7XG4gICAgICAgICAgICBzZXRBZGRQaG9uZUJ1dHRvblZpc2liaWxpdHlJZkFwcGxpY2FibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpIHtcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcbiAgICAgICAgICAgIHNldEFkZEVtYWlsQnV0dG9uVmlzaWJpbGl0eUlmQXBwbGljYWJsZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiLyogXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxuKi9cbmltcG9ydCBJZFNlc3Npb25TdG9yYWdlSGVscGVyIGZyb20gJy4uL0lkU2Vzc2lvblN0b3JhZ2VIZWxwZXInO1xuaW1wb3J0IERyYWZ0TWVzc2FnZURyYXdlciBmcm9tICcuLi9EcmFmdE1lc3NhZ2VEcmF3ZXInO1xuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi4vTGF6eUxvYWRlcic7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtaW5kZXgnKSkge1xuXG4gIGNvbnN0IGlkU2ggPSBuZXcgSWRTZXNzaW9uU3RvcmFnZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VycycpO1xuICBjb25zdCBkbWQgPSBuZXcgRHJhZnRNZXNzYWdlRHJhd2VyKGlkU2guZ2V0Q291bnQoKSk7XG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcblxuICBjb25zdCBhbGxDaGVja2JveGVzSW5UYWJsZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0YWJsZS1zZWxlY3Qtc3RhZmYgW3R5cGU9Y2hlY2tib3hdXCIpKTtcblxuICAvLyBDaGVjayBhbGwgaXRlbXMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgaXRlbXNUaGF0U2hvdWxkQmVTZWxlY3RlZCA9IGFsbENoZWNrYm94ZXNJblRhYmxlLmZpbHRlcihjYiA9PiBpZFNoLmhhc0lkKGNiLnZhbHVlKSk7XG4gIGl0ZW1zVGhhdFNob3VsZEJlU2VsZWN0ZWQuZm9yRWFjaChpID0+IGkuY2hlY2tlZCA9IHRydWUpO1xuXG4gIGNvbnN0IGFsbENoZWNrYm94ZXNTZWxlY3RlZCA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLmV2ZXJ5KGNiID0+IGNiLmNoZWNrZWQpO1xuICBcbiAgLy8gY29uc3QgYWxsQ29udGFjdElkcyA9ICgpID0+IGFsbENoZWNrYm94ZXNJblRhYmxlLm1hcChjYiA9PiBjYi52YWx1ZSk7XG4gIGNvbnN0IGFsbENvbnRhY3RzID0gKCkgPT4gYWxsQ2hlY2tib3hlc0luVGFibGUubWFwKGNiID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNiLnZhbHVlLFxuICAgICAgbmFtZTogY2IuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhY3QtbmFtZScpXG4gICAgfVxuICB9KTtcblxuICAvLyBVc2VzIGEgcGFzc2VkIGluICdjb21iaW5lcicgZnVuY3Rpb24gdG8gZGVjaWRlZCBob3cgdG8gZWl0aGVyIGFkZCBvciByZW1vdmUgc2VsZWN0ZWQgcmVzdWx0cyB0byB0aG9zZSBmcm9tIG90aGVyIHBhZ2VzLlxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UgPSAoY29tYmluZUZuKSA9PiB7XG4gICAgY29uc3QgYWxsQ29udGFjdHNEaXNwbGF5ZWQgPSBhbGxDb250YWN0cygpO1xuICAgIGNvbnN0IGV4aXN0aW5nQ29udGFjdHMgPSBpZFNoLmdldEl0ZW1zKCk7XG4gICAgY29uc3QgbmV3SXRlbXMgPSBjb21iaW5lRm4oZXhpc3RpbmdDb250YWN0cywgYWxsQ29udGFjdHNEaXNwbGF5ZWQpOyAgXG5cbiAgICBpZFNoLnNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgICBkbWQudXBkYXRlKG5ld0l0ZW1zLmxlbmd0aCk7XG4gIH1cblxuICAvLyBSZW1vdmUgYWxsIHRoZSBpZHMgdGhhdCB3ZXJlIGNvbnRhaW5lZCBpbiB0aGlzIHJlc3VsdHMgcGFnZS4gIEtlZXAgcmVzdWx0IGZyb20gb3RoZXIgcGFnZXMgc2VsZWN0ZWRcbiAgY29uc3QgZGVzZWxlY3RBbGwgPSAodG9EZXNlbGVjdCkgPT4ge1xuICAgIHRvRGVzZWxlY3QuZm9yRWFjaCh0b0Rlc2VsZWN0ID0+IHRvRGVzZWxlY3QuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IGV4aXN0aW5nSXRlbXMuZmlsdGVyKCh7aWR9KSA9PiAhYWxsSXRlbXNGb3JHcm91cC5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpKTtcbiAgfVxuXG4gIC8vIEFkZCBhbGwgdGhlIGlkcyB0aGF0IHdlcmUgY29udGFpbmVkIGluIHRoaXMgcmVzdWx0cyBwYWdlLiAgS2VlcCByZXN1bHQgZnJvbSBvdGhlciBwYWdlcyBzZWxlY3RlZFxuICBjb25zdCBzZWxlY3RBbGwgPSAodG9TZWxlY3QpID0+IHtcbiAgICB0b1NlbGVjdC5mb3JFYWNoKHRvU2VsZWN0ID0+IHRvU2VsZWN0LmNoZWNrZWQgPSB0cnVlKTsgICAgXG5cbiAgICBoYW5kbGVTZWxlY3Rpb25kQ2hhbmdlTWVyZ2UoKGV4aXN0aW5nSXRlbXMsIGFsbEl0ZW1zRm9yR3JvdXApID0+IHtcblxuICAgICAgLy8gZ2V0IGFsbCBpdGVtcyBvbiB0aGUgcGFnZSBub3QgaW4gdGhlIGV4aXN0aW5nIHJlc3VsdHNcbiAgICAgIGNvbnN0IGdyb3VwSXRlbXNUb0FkZCA9IGFsbEl0ZW1zRm9yR3JvdXAuZmlsdGVyKCh7aWR9KSA9PiAhZXhpc3RpbmdJdGVtcy5tYXAoaSA9PiBpLmlkKS5pbmNsdWRlcyhpZCkpO1xuXG4gICAgICAvLyBNZXJnZSB0aGUgbmV3IGl0ZW1zIGluXG4gICAgICByZXR1cm4gWy4uLmV4aXN0aW5nSXRlbXMsIC4uLmdyb3VwSXRlbXNUb0FkZF07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgIFxuXG4gICAgdGFyZ2V0LmNoZWNrZWQgP1xuICAgICAgc2VsZWN0QWxsKGFsbENoZWNrYm94ZXNJblRhYmxlKSA6XG4gICAgICBkZXNlbGVjdEFsbChhbGxDaGVja2JveGVzSW5UYWJsZSk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVTZWxlY3RBbGxDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYlNlbGVjdEFsbCBbdHlwZT1jaGVja2JveF0nKTtcbiAgaWYgKHRvZ2dsZVNlbGVjdEFsbENoZWNrYm94KSB7XG4gICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlKTtcblxuICAgIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xuICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXNlcnNUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcbiAgbGV0IHVzZXJzVGFibGVCb2R5O1xuICBpZih1c2Vyc1RhYmxlKSB7XG4gICB1c2Vyc1RhYmxlQm9keSA9IHVzZXJzVGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50UGFnZSA9IDE7XG5cbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgY29uc3QgY3JpdGVyaWFLZXkgPSAnY3JpdGVyaWEnO1xuICBcbiAgbGV0IHNlYXJjaENyaXRlcmlhU3RyaW5nID0gdXJsUGFyYW1zLmhhcyhjcml0ZXJpYUtleSkgPyBgP2NyaXRlcmlhPSR7dXJsUGFyYW1zLmdldChjcml0ZXJpYUtleSl9YCA6ICcnO1xuXG4gIGNvbnN0IGdldFNlYXJjaEVuZHBvaW50ID0gKCkgPT4gYCR7bG9jYXRpb24ub3JpZ2lufS9Gb3JjZS9Db250YWN0cy8ke2N1cnJlbnRQYWdlfSR7c2VhcmNoQ3JpdGVyaWFTdHJpbmd9YDtcbiAgXG4gIC8vIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBjaGVja2JveGVzXG4gIGNvbnN0IHN0YWZmVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XG5cbiAgaWYgKHN0YWZmVGFibGUpIHtcbiAgICBzdGFmZlRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICh7dGFyZ2V0fSkgPT4ge1xuICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VG90YWwgPSB0YXJnZXQuY2hlY2tlZCA/IGlkU2guYWRkKHRhcmdldC52YWx1ZSwgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250YWN0LW5hbWUnKSkgOiBpZFNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xuICAgICAgICAgIGlmICh0b2dnbGVTZWxlY3RBbGxDaGVja2JveCkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAvLyBJZiB1bmNoZWNrZWQgZGVzZWxlY3QgdGhlIGNoZWNrIGFsbC5cbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxDaGVja2JveGVzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAvLyBJZiBjaGVja2VkIHNlZSBpZiBhbGwgYXJlIG5vdyBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0QWxsQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xuICAgICAgfVxuICAgIH0pOyAgfSAgXG5cbiAgY29uc3QgY3JlYXRlQ2hlY2tib3hGaWVsZCA9ICh2YWx1ZSwgY2hlY2tlZCwgbmFtZSkgPT4geyAgXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jZWxsJyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRhY3QtbmFtZScsIG5hbWUpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlQ2VsbFdpdGhUZXh0ID0gdGV4dCA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2VsbC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgY29uc3QgYWRkUm93ID0gdXNlciA9PiB7XG4gICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5uYW1lKSk7XG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLmNvbGxhcikpO1xuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5lbWFpbCkpO1xuICAgIGNvbnN0IHBob25lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgcGhvbmVUZXh0Tm9kZSAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh1c2VyLnBob25lTnVtYmVyQ291bnQgPiAxID8gYCAke3VzZXIucGhvbmVOdW1iZXJ9YCA6IHVzZXIucGhvbmVOdW1iZXIpO1xuICAgIFxuICAgIGlmICh1c2VyLnBob25lTnVtYmVyQ291bnQgPiAxKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgICBiYWRnZS5jbGFzc0xpc3QuYWRkKCdiYWRnZScpO1xuICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSB1c2VyLnBob25lTnVtYmVyQ291bnQ7XG4gICAgICBwaG9uZUNlbGwuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgIH1cblxuICAgIHBob25lQ2VsbC5hcHBlbmRDaGlsZChwaG9uZVRleHROb2RlKTtcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQocGhvbmVDZWxsKTtcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3hGaWVsZCh1c2VyLmlkLCBpZFNoLmhhc0lkKHVzZXIuaWQpLCB1c2VyLm5hbWUpKTtcblxuICAgIHVzZXJzVGFibGVCb2R5LmFwcGVuZENoaWxkKG5ld1Jvdyk7XG4gIH1cblxuICBjb25zdCBhZGRSZXN1bHRSb3dzID0gcm93cyA9PiB7XG4gICAgcm93cy5mb3JFYWNoKGFkZFJvdyk7XG4gIH1cblxuICBpZiAobG9hZGVyKSB7XG5cbiAgICBjb25zdCBsb2FkZXJQYWdlU2l6ZSA9IGxvYWRlci5nZXRBdHRyaWJ1dGUoXCJwYWdlLXNpemVcIik7XG5cbiAgICBuZXcgTGF6eUxvYWRlcihsb2FkZXIsIGFzeW5jIGRvbmUgPT4ge1xuICBcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIGluZGV4XG4gICAgICAgIGN1cnJlbnRQYWdlKys7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0U2VhcmNoRW5kcG9pbnQoKTtcblxuICAgICAgICAvLyBEbyB0aGUgc2VhcmNoXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGVuZHBvaW50KTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zdCBoYXNSZXN1bHRzID0gcmVzdWx0cy5sZW5ndGggPiAwO1xuXG4gICAgICAgIC8vIFdlIGRvbnQga25vdyBpZiB0aGVyZSB3aWxsIGJlIG1vcmUgcmVzdWx0cywgYnV0IGl0cyBsaWtlbHkgaWYgd2UgcmV0dXJuIGEgZnVsbCBwYWdlIG9mIHJlc3VsdHNcbiAgICAgICAgbGV0IG1vcmVSZXN1bHRzTGlrZWx5ID0gaGFzUmVzdWx0cztcbiAgICAgICAgaWYgKGxvYWRlclBhZ2VTaXplKSB7XG4gICAgICAgICAgLy8gV2UgbWF5IG5vdCBoYXZlIHRoaXMgYXR0cmlidXRlLCBidXQgaWYgd2UgZG8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgZnVsbC4gSWYgbm90IHRoZXJlIHNob3VsZCBiZSBubyBtb3JlIHJlc3VsdHMgdG8gZmV0Y2hcbiAgICAgICAgICBtb3JlUmVzdWx0c0xpa2VseSA9IHJlc3VsdHMubGVuZ3RoID09PSBwYXJzZUludChsb2FkZXJQYWdlU2l6ZSwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc1Jlc3VsdHMpIHsgICAgICAgICAgXG4gICAgICAgICAgYWRkUmVzdWx0Um93cyhyZXN1bHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbmUobW9yZVJlc3VsdHNMaWtlbHkpOyAgXG4gICAgICB9XG4gICAgICBjYXRjaChlKSB7ICAgICAgICBcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxhenkgbG9hZCBwYWdlICR7Y3VycmVudFBhZ2V9IG9mIEFEIHVzZXJzYCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8vIElnbm9yZSBjdXJyZW50IGZhaWxlZCBwYWdlLCBzbyB3aWxsIHRyeSBhZ2FpblxuICAgICAgICBjdXJyZW50UGFnZS0tO1xuICAgICAgICBkb25lKHRydWUpOyAvLyBDYWxsIGRvbmUgd2l0aCBtb3JlIHRvIGxvYWQuXG4gICAgICAgIC8vIFRPRE86IFdoYXQgdG8gZG8gaGVyZS4gSWYgZW5wb2ludCBpcyBkb3duLCB3ZSB3b3VsZCBnZXQgbG90cyBvZiBjb25zb2xlIGVycm9ycyBhdCB0aGUgbW9tZW50Li4uLlxuICAgICAgfVxuICAgICAgXG4gICAgfSwgeyBkZWJ1ZzogZmFsc2UsIHBlZWtEaXN0YW5jZTogNTAgfSk7XG4gIH0gIFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogIEhhbmRsZSB0aGUgY2xpY2tpbmcgb2YgYSBzZWFyY2ggZmllbGRzIHggaWNvbi4gIFxuICogIEJsYW5rcyB0aGUgZmllbGQgYW5kIG9wdGlvbmFsbHkgcmVkaXJlY3QgbWludXMgcXVlcnkgc3RyaW5nIHBhcmFtXG4gKiAgc3BlY2lmaWVkIG9uIHRoZSBzcGFuLmZvcm1fX2lucHV0LS1jbGVhciAoZGF0YS1wYXJhbS1uYW1lKVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiBCdWlsZCBhbmQgcmVkaXJlY3QgdG8gcGF0aCBtaW51cyB0aGUgc3BlY2lmaWVkIHBhcmFtIG5hbWUgaW4gcXVlcnkgc3RyaW5nICovXG5mdW5jdGlvbiByZWRpcmVjdFdpdGhvdXRTZWFyY2gocGFyYW1OYW1lKSB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgIGNvbnN0IHtvcmlnaW4sIHBhdGhuYW1lfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB1cmxQYXJhbXMuZGVsZXRlKHBhcmFtTmFtZSk7XG4gICAgY29uc3QgbmV3Q3JpdGVyaWEgPSB1cmxQYXJhbXMudG9TdHJpbmcoKSA/IGA/JHt1cmxQYXJhbXN9YCA6ICcnOyAgICBcbiAgICBjb25zdCBuZXdQYXRoID0gYCR7b3JpZ2lufSR7cGF0aG5hbWV9JHtuZXdDcml0ZXJpYX1gO1xuICAgIFxuICAgIC8vIE9ubHkgcmVkaXJlY3QgaWYgcGFyYW1zIHdpdGggY2hhbmdlIGkuZS4gbm90IGp1c3QgY2xlYXJpbmcgc2VhcmNoIGZpZWxkXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSBuZXdQYXRoKSB7ICAgICAgICBcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdQYXRoKTtcbiAgICB9XG59XG5cbi8qIENsZWFyIGEgc2VhcmNoIGZpZWxkIHdoZW4gdGhlIGlucHV0cyBjbGVhciBidXR0b24gaXMgY2xpY2tlZCAqL1xuZnVuY3Rpb24gY2xlYXJTZWFyY2goZSkge1xuICAgIHZhciB0b0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tLXNlYXJjaCA+IC5mb3JtX19pbnB1dC0tc2VhcmNoJyk7XG4gICAgdG9DbGVhci5mb3JFYWNoKHRjID0+IHRjLnZhbHVlID0gJycpO1xuXG4gICAgLy8gVG9kbyB0cnkgYW5kIGdldCBhdHRyaWJ1dGUsIGFuZCByZWRpcmVjdCBpZiBoYXMgaXQuXG4gICAgY29uc3QgcGFyYW1Ub1JlbW92ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbS1uYW1lJyk7XG4gICAgaWYgKHBhcmFtVG9SZW1vdmUpIHtcbiAgICAgICAgcmVkaXJlY3RXaXRob3V0U2VhcmNoKHBhcmFtVG9SZW1vdmUpO1xuICAgIH1cbn1cblxubGV0IGNsZWFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19pbnB1dC0tY2xlYXInKTtcblxuY2xlYXJCdXR0b25zLmZvckVhY2goY2IgPT4gY2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclNlYXJjaCkpOyIsIi8qKlxuICogIFVTQUdFOiBUbyB1c2UgdGhpcyBjb250cm9sIHlvdSBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSB0byB0aGUgYnV0dG9uIHRoYXQgc2hvdWxkIGJlIGRvaW5nIHRoZSBzaG93IGFsbC5cbiAqXG4gKiAgZGF0YS1zaG93YWxsLXRhYmxlLWlkPVwiPDxpZCBvZiB0YWJsZSB0byBiZSBlZmZlY3RlZD4+XCJcbiAqXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcbiAqXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tbGltaXQ9XCIyMFwiIC0gc2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgaW5pdGlhbGx5LiAgRGVmYXVsdCBpcyAxMFxuICpcbiAqL1xuXG52YXIgc2hvd1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaVtkYXRhLXBhc3N3b3JkXScpO1xuXG5zaG93UGFzc3dvcmQuZm9yRWFjaChzaG93UGFzc3dvcmRCdXR0b24gPT4ge1xuXG4gIHZhciBwYXNzd29yZElEID0gc2hvd1Bhc3N3b3JkQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcGFzc3dvcmRcIik7XG5cbiAgc2hvd1Bhc3N3b3JkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsKSA9PiB7XG4gICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gZWwuZW1wdHkoKTtcbiAgICAgIGlmIChzaG93UGFzc3dvcmRCdXR0b24uaW5uZXJIVE1MID09PSBcInZpc2liaWxpdHlcIikge1xuICAgIHNob3dQYXNzd29yZEJ1dHRvbi5pbm5lckhUTUwgPSBcInZpc2liaWxpdHlfb2ZmXCI7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1Bhc3N3b3JkQnV0dG9uLmlubmVySFRNTCA9IFwidmlzaWJpbGl0eVwiO1xuICB9XG5cbiAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhc3N3b3JkSUQpO1xuXG4gICAgICBwYXNzd29yZElELnR5cGUgPSBcInRleHRcIjtcblxuICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgICAgICB9XG4gICAgfSk7XG5cblxufSk7XG4iLCIvKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLFxudG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBkcm9wZG93biBjb250ZW50ICovXG5cbi8vIGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XG4vLyAgICB2YXIgYXNpZGVFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIik7XG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFzaWRlLS1hY3RpdmVcIik7XG4vLyB9XG4vLyB9XG5cbi8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcbiAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcbiAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG52YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcblxuaWYgKGFkZEdyb3VwQnV0dG9uKSB7XG5cbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XG4gICAgfSlcbn1cblxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XG5cbmlmIChjbG9zZVNpZGViYXIpIHtcblxuY2xvc2VTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAvLyBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAvLyAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcbiAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdhc2lkZS0tYWN0aXZlJyk7XG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LmFkZCgnbWFpbi0taGlkZGVuJyk7XG4gICAgICAvLyB9XG4gIH0gZWxzZSBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xuICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcbiAgICAgIC8vIH1cbiAgfVxuXG5cbn1cbiIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuXG4gICAgY29uc3QgcmVtb3ZlUXVlcnlQYXJhbSA9IHBhcmFtID0+IHtcbiAgICAgICAgaWYodXJsUGFyYW1zLmhhcyhwYXJhbSkpe1xuICAgICAgICAgICAgdXJsUGFyYW1zLmRlbGV0ZShwYXJhbSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9Pz0ke3VybFBhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdFBhcmFtID0gdXJsUGFyYW1zLmdldCgnQ29udGFjdEFkZGVkJyk7XG4gICAgY29uc3QgT3JnYW5pc2F0aW9uUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdPcmdhbmlzYXRpb25BZGRlZCcpO1xuICAgIGNvbnN0IE1lc3NhZ2VTZW50UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdNZXNzYWdlU2VudCcpO1xuICAgIGNvbnN0IEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0ZvcmNlQ29udGFjdFVwZGF0ZWQnKTtcblxuICAgIGxldCBzbmFja2Jhck1lc3NhZ2UgPSAnJztcblxuICAgIGlmIChjb250YWN0UGFyYW0gPT09ICdUcnVlJykge1xuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdDb250YWN0QWRkZWQnKTtcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBjb250YWN0IGhhcyBiZWVuIGNyZWF0ZWQnO1xuICAgIH0gZWxzZSBpZiAoT3JnYW5pc2F0aW9uUGFyYW0gPT09ICdUcnVlJykge1xuICAgICAgICByZW1vdmVRdWVyeVBhcmFtKCdPcmdhbmlzYXRpb25BZGRlZCcpO1xuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IG9yZ2FuaXNhdGlvbiBoYXMgYmVlbiBjcmVhdGVkJztcbiAgICB9IGVsc2UgaWYgKE1lc3NhZ2VTZW50UGFyYW0gPT09ICdUcnVlJykge1xuICAgICAgICAvKiBcbiAgICAgICAgICAgIEJpdCBoYWNreSwgYnV0IGNsZWFyaW5nIHRoZSBzZXNzaW9uU3RvcmFnZSBoZXJlIHRvIGNsZWFyIG1lc3NhZ2Ugc3RhdGUgaGVyZS4gXG4gICAgICAgICovXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJDb3VyaWVyTWVzc2FnZVVzZXJzXCIpXG4gICAgICAgIHJlbW92ZVF1ZXJ5UGFyYW0oJ01lc3NhZ2VTZW50Jyk7XG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdNZXNzYWdlIHNlbnQnO1xuICAgIH0gZWxzZSBpZiAoRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtICYmIEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmVtb3ZlUXVlcnlQYXJhbSgnRm9yY2VDb250YWN0VXBkYXRlZCcpO1xuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnUGVyc29uYWwgY29udGFjdCBkZXRhaWxzIHVwZGF0ZWQnO1xuICAgIH0gXG5cbiAgICBpZiAoc25hY2tiYXJNZXNzYWdlKSB7XG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcbiAgICAgICAgc25hY2tiYXIuaW5uZXJIVE1MID0gc25hY2tiYXJNZXNzYWdlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxuXG59KShcIiNzbmFja2JhclwiKTtcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuLy8gICAgIC8vZnVuY3Rpb24gdG8gbWFrZSB3aG9sZSB0YWJsZSB0ciBjbGlja2FibGVcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblxuLy8gICAgICAgICBpZiAoZWwuZGF0YXNldC5ocmVmICE9bnVsbCkge1xuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XG4vLyAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmRhdGFzZXQuaHJlZjtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG5cbi8vIH0pKFwidGFibGVcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9