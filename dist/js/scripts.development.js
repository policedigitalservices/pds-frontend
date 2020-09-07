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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    if (!this_button) throw new Error("Button selector doesnt match an element"); // Grab the checkbox

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
      saveButton.removeAttribute('disabled');
      saveButton.classList.remove('disabled');
    } // Enables the button

  }, {
    key: "_enableButton",
    value: function _enableButton() {
      saveButton.setAttribute('disabled', 'disabled');
      saveButton.classList.add('disabled');
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

/***/ "./src/js/IdCookieHelper.js":
/*!**********************************!*\
  !*** ./src/js/IdCookieHelper.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdCookieHelper; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



// Store a unique set of ids inside a cookie
var IdCookieHelper = /*#__PURE__*/function () {
  function IdCookieHelper(name) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IdCookieHelper);

    this._name = name;
    this._ids = new Set(this._initialise());
  } // Populate start ids, initialises cookie if not present


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(IdCookieHelper, [{
    key: "_initialise",
    value: function _initialise() {
      var _this = this;

      var cookieString = document.cookie;
      var cookies = cookieString.split('; ');
      var matchingCookie = cookies.find(function (c) {
        return c.startsWith("".concat(_this._name, "="));
      });

      if (!matchingCookie) {
        this._persist([]);

        return [];
      }

      var matchingValueToSplit = matchingCookie.split('=')[1];
      return matchingValueToSplit.split('|').filter(function (i) {
        return i;
      }); // Split and remove empty values
    } // Save the new ids to the cookie after update

  }, {
    key: "_update",
    value: function _update() {
      var ids = this.getIds();

      this._persist(ids);
    } // Save the passed in ids to the cookie

  }, {
    key: "_persist",
    value: function _persist(ids) {
      var joinedIds = ids.join('|'); // Create a new cookie containing selected ids.  Set to same site strict and path to root

      var newCookie = "".concat(this._name, "=").concat(joinedIds, "; path=/; samesite=Strict");
      document.cookie = newCookie;
    } // Set all the ids in one hit. Returns the new count.

  }, {
    key: "setIds",
    value: function setIds() {
      var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this._ids = new Set(ids);

      this._update();

      return this.getCount();
    } // Returns the count of items in the selection.

  }, {
    key: "getIds",
    value: function getIds() {
      var ids = Array.from(this._ids);
      return ids;
    } // Returns the number of ids currently in the set.

  }, {
    key: "getCount",
    value: function getCount() {
      return this._ids.size;
    } // Remove one or more ids. Return the new count

  }, {
    key: "remove",
    value: function remove(id) {
      this._ids.delete(id);

      this._update();

      return this.getCount();
    } // Add one or more ids. Returns the new count

  }, {
    key: "add",
    value: function add(id) {
      this._ids.add(id);

      this._update();

      return this.getCount();
    } // Does the set contain the passed in array item.

  }, {
    key: "hasId",
    value: function hasId(id) {
      return this._ids.has(id);
    }
  }]);

  return IdCookieHelper;
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

    this.allOptions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.tagOptions.querySelectorAll('option'));

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
/* harmony import */ var _IdCookieHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IdCookieHelper */ "./src/js/IdCookieHelper.js");
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
  var cookieIdsHelper = new _IdCookieHelper__WEBPACK_IMPORTED_MODULE_2__["default"]('CourierMessageUserIds');

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
    cookieIdsHelper.setIds(selectedOptions.map(function (x) {
      return x.value;
    }));
  };

  new _SelectListTags__WEBPACK_IMPORTED_MODULE_3__["default"]('AscStaffSelector', null, onUpdateFunc);
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
    newPhone.innerHTML = "\n            <input class=\"form__input\" autocomplete=\"off\" type=\"text\" name=\"phone\" value=\"\">\n            <button style=\"display: inline-block;\" class=\"button button--remove btn-remove-contact-phone\">Remove</button>\n            <span class=\"field-validation-valid\" data-valmsg-for=\"phone_validation\" data-valmsg-replace=\"true\"></span>\n        ";
    return newPhone;
  }; // Update the index used for model binding phones


  var renumberPhonesInputs = function renumberPhonesInputs() {
    var phoneInputs = document.querySelectorAll('.input--profile-phone');
    debugger;
    phoneInputs.forEach(function (phone, index) {
      var inp = phone.querySelector('input');
      inp.id = "Input_PersonalPhoneNumbers_".concat(index, "_");
      inp.name = "Input_PersonalPhoneNumbers[".concat(index, "]");
      var spn = phone.querySelector('span');
      spn.setAttribute('data-valmsg-for', "Input_PersonalPhoneNumbers[".concat(index, "]"));
    });
  }; // Add a new email row


  var newEmailRow = function newEmailRow() {
    var newEmailRow = document.createElement('div');
    newEmailRow.className = "form__group input__withaction input--profile-email";
    newEmailRow.innerHTML = "\n            <input class=\"form__input\" autocomplete=\"off\" type=\"text\" name=\"email\" value=\"\">\n            <button style=\"display: inline-block;\" class=\"button button--remove  btn-remove-contact-email\">Remove</button>\n            <span class=\"field-validation-valid\" data-valmsg-for=\"email_validation\" data-valmsg-replace=\"true\"></span>\n        ";
    return newEmailRow;
  }; // Update the index used for model binding emails


  var renumberlEmailsInputs = function renumberlEmailsInputs() {
    var emailInputs = document.querySelectorAll('.input--profile-email');
    debugger;
    emailInputs.forEach(function (email, index) {
      var inp = email.querySelector('input');
      inp.id = "Input.PersonalEmailAddresses_".concat(index, "_");
      inp.name = "Input.PersonalEmailAddresses[".concat(index, "]");
      var spn = email.querySelector('span');
      spn.setAttribute('data-valmsg-for', "Input.PersonalEmailAddresses[".concat(index, "]"));
    });
  }; // Wire up the button listeners


  //new CheckboxDisableButtonHelper('#btnSave', '#cbAcceptTerms');
  // Grab all the buttons that are only show when js enabled
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
  });
  addPhoneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('section').appendChild(newPhoneRow());
    renumberPhonesInputs();
  });
  addEmailBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('section').appendChild(newEmailRow());
    renumberlEmailsInputs();
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
      renumberPhonesInputs();
    }

    if (e.target.matches('.btn-remove-contact-email')) {
      renumberlEmailsInputs();
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
/* harmony import */ var _IdCookieHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IdCookieHelper */ "./src/js/IdCookieHelper.js");
/* harmony import */ var _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DraftMessageDrawer */ "./src/js/DraftMessageDrawer.js");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LazyLoader */ "./src/js/LazyLoader.js");



/* 
    This script is specific to the search staff page.
*/



var main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-index')) {
  var ch = new _IdCookieHelper__WEBPACK_IMPORTED_MODULE_2__["default"]('CourierMessageUserIds');
  var dmd = new _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_3__["default"](ch.getCount());
  var loader = document.querySelector('.loader');
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
    staffTable.addEventListener('change', function (_ref) {
      var target = _ref.target;

      if (target.matches('input[type=checkbox]')) {
        var newTotal = target.checked ? ch.add(target.value) : ch.remove(target.value);
        dmd.update(newTotal);
      }
    });
  }

  var createCheckboxField = function createCheckboxField(value, checked) {
    var cell = document.createElement('td');
    cell.classList.add('checkbox-cell');
    var label = document.createElement('label');
    label.classList.add('checkbox');
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.value = value;
    input.checked = checked;
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
    newRow.appendChild(createCheckboxField(user.id, ch.hasId(user.id.toString())));
    usersTableBody.appendChild(newRow);
  };

  var addResultRows = function addResultRows(rows) {
    rows.forEach(addRow);
  };

  if (loader) {
    var loaderPageSize = loader.getAttribute("page-size");
    new _LazyLoader__WEBPACK_IMPORTED_MODULE_4__["default"](loader, /*#__PURE__*/function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(done) {
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
        return _ref2.apply(this, arguments);
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

// window.localStorage.clear();
(function (selector) {
  var snackbarStorageItem = window.localStorage.getItem('snackbar');
  var snackbar = document.querySelector(selector);
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var contactParam = urlParams.get('ContactAdded');
  var OrganisationParam = urlParams.get('OrganisationAdded');
  var MessageSentParam = urlParams.get('MessageSent');
  var snackbarMessage = ''; //check if localStrorage 'snackbar' exists and if it doesnt setup object ready for eventListener

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

  if (contactParam === 'True') {
    snackbarMessage = 'New contact has been created';
  } else if (OrganisationParam === 'True') {
    snackbarMessage = 'New organisation has been created';
  } else if (MessageSentParam === 'True') {
    snackbarMessage = 'Message sent';
  } else if (snackbar) {
    snackbar.addEventListener("click", function (el) {
      if (!snackbarStorageItemArray.locations.includes(window.location.pathname)) {
        snackbarStorageItemArray.locations.push(window.location.pathname);
        window.localStorage.setItem('snackbar', JSON.stringify(snackbarStorageItemArray));
      }
    });
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
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/SelectListTags.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ./src/js/pages/CourierProfile.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
__webpack_require__(/*! ./src/js/SelectListTags.js */"./src/js/SelectListTags.js");
__webpack_require__(/*! ./src/js/pages/SelectStaffForMessage.js */"./src/js/pages/SelectStaffForMessage.js");
__webpack_require__(/*! ./src/js/pages/ComposeStaffMessage.js */"./src/js/pages/ComposeStaffMessage.js");
module.exports = __webpack_require__(/*! ./src/js/pages/CourierProfile.js */"./src/js/pages/CourierProfile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0RyYWZ0TWVzc2FnZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR3JvdXBzVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvSWRDb29raWVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VsZWN0TGlzdFRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NpbXBsZUNvb2tpZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ29tcG9zZVN0YWZmTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ291cmllclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL1NlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmxlcy5qcyJdLCJuYW1lcyI6WyJCb3R0b21EcmF3ZXIiLCJfb3BlbkNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJDaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIiLCJidXR0b25TZWxlY3RvciIsImNoZWNrYm94U2VsZWN0b3IiLCJfYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInRoaXNfYnV0dG9uIiwiRXJyb3IiLCJfY2hlY2tib3giLCJjaGVja2VkIiwiX2Rpc2FibGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIl9lbmFibGVCdXR0b24iLCJzYXZlQnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiRHJhZnRNZXNzYWdlRHJhd2VyIiwibnVtYmVyT2ZSZWNpcGllbnRzIiwidG90YWxTZWxlY3RvciIsImNvb2tpZUhlbHBlciIsIlNpbXBsZUNvb2tpZUhlbHBlciIsIl90b3RhbHNFbGVtZW50IiwidGV4dENvbnRlbnQiLCJnZXQiLCJfYm90dG9tRHJhd2VyIiwidXBkYXRlIiwiaW5uZXJUZXh0Iiwic2hvdyIsImhpZGUiLCJncm91cEV4aXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VDaGVja2JveGVzIiwiaGFzQXR0cmlidXRlIiwidXNlU2luZ2xlU2VsZWN0Q2hlY2tib3giLCJsb2NrUm9vdE5vZGUiLCJzZWxlY3RvciIsImludGlhbGx5U2VsZWN0ZWROb2RlcyIsImdyb3VwU2VsZWN0IiwiZ3JvdXBUZXh0YXJlYSIsInBhcmVudEVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvbnNOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInZhbHVlIiwibWF0Y2hlcyIsInBhdGhUb1VuY2hlY2siLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiY2JTZWxlY3RvciIsImNoZWNib3hUb1VuY2hlY2siLCJjbGljayIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJidWlsZENoZWNrYm94IiwicGFyZW50Q2hlY2tlZCIsImNoZWNrYm94IiwidHlwZSIsIm5hbWUiLCJpZCIsIm5ld1BhcmVudFNlbGVjdGVkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsImxhYmVsIiwiY2hlY2tTcGFuIiwiYm9yZGVyU3BhbiIsImFwcGVuZENoaWxkIiwiYnVpbGRDaGVja2JveExhYmVsIiwiY2hlY2tib3hMYWJlbCIsImlubmVySFRNTCIsImZvciIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwicGFyZW50Tm9kZSIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkQ2hlY2tib3hlcyIsImhpZGRlbkZpZWxkIiwic3RydWN0dXJlIiwib3B0aW9uX2kiLCJvcHRpb24iLCJzZWdtZW50cyIsInNwbGl0Iiwibm9kZVRvQ2hlY2siLCJzZWdtZW50X2kiLCJzZWciLCJ0cmVlQ29udGFpbmVyIiwiYWN0aXZlQ2hpbGRyZW4iLCJhY19pIiwiYWN0aXZlQ2hpbGQiLCJkaXNwbGF5Q2hpbGRLZXlzIiwiY3VyclRleHQiLCJjdXJyUGF0aCIsIm9iaiIsImVsZW1lbnRUb0FkZFRvIiwibGV2ZWwiLCJwYXJlbnRzQ2hlY2tlZCIsImNoaWxkS2V5cyIsIk9iamVjdCIsImtleXMiLCJwYXJlbnRDaGVja2VkU3RhdGUiLCJjaGlsZExpc3RJdGVtIiwiY2hpbGRMaXN0IiwiY2tfaSIsImNoaWxkS2V5IiwicmVwbGFjZUNoaWxkIiwiSWRDb29raWVIZWxwZXIiLCJfbmFtZSIsIl9pZHMiLCJTZXQiLCJfaW5pdGlhbGlzZSIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3BlcnNpc3QiLCJtYXRjaGluZ1ZhbHVlVG9TcGxpdCIsImZpbHRlciIsImlkcyIsImdldElkcyIsImpvaW5lZElkcyIsImpvaW4iLCJuZXdDb29raWUiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJzaXplIiwiZGVsZXRlIiwiaGFzIiwiQ291cmllckxhenlMb2FkZXIiLCJsb2FkZXJFbGVtZW50IiwibG9hZGVyRm4iLCJjb25maWdPYmoiLCJjb25maWdEZWZhdWx0cyIsImxvYWRlckNsYXNzIiwibG9hZGVyTG9hZGluZ0NsYXNzIiwiZGVib3VuY2VNcyIsInBlZWtEaXN0YW5jZSIsImRlYnVnIiwiX2xvYWRlciIsIl9sb2FkZXJGdW5jIiwiX2NvbmZpZyIsIl9oYXNMaXN0ZW5lcnNBZGRlZCIsIl9sYXp5TG9hZENoZWNrIiwiZGVib3VuY2UiLCJfZG9Mb2FkTW9yZUNoZWNrIiwiX2NvbmRpdGlvbmFsRGVidWdMb2ciLCJfc3RvcExpc3RlbmluZyIsIl9kb25lU2VhcmNoaW5nIiwiX3N0YXJ0TGlzdGVuaW5nIiwiYmluZCIsInZpc2libGUiLCJtb3JlVG9Mb2FkIiwiX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b0RlYnVnIiwibG9nZ2VyRnVuYyIsImNvbnNvbGUiLCJsb2ciLCJoaWdoZXN0VmlzaWJsZVlQb3MiLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkTW9yZVRyaWdnZXJQb3MiLCJNYXRoIiwibWluIiwib2Zmc2V0VG9wIiwicGVla1Bvc2l0aW9uVmlzaWJsZSIsInNob3VsZExvYWRNb3JlIiwidGFibGUiLCJzaG93TW9yZVRhYmxlQnV0dG9ucyIsImZvckVhY2giLCJzaG93QWxsQnV0dG9uIiwidGFibGVJZCIsImRlZmF1bHRJdGVtTGltaXQiLCJwYXNzZWRJdGVtTGltaXQiLCJwYXJzZWRJdGVtTGltaXQiLCJwYXJzZUludCIsImxpbWl0VG9Vc2UiLCJpc05hTiIsInRhYmxlQm9keSIsInRCb2RpZXMiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzIiwiYm9keVJvdyIsInN0eWxlIiwiZGlzcGxheSIsImVsIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwic3BhbiIsInBsdXJhbGlzZWRHcm91cHMiLCJfdmFsdWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXNwb25zZXMiLCJyZXNwb25zZXNMaXN0IiwicmVzcG9uc2UiLCJpZHgiLCJ0cmltIiwic2hvd0ZpcnN0RW1weUl0ZW0iLCJjdXJyZW50UmVzcG9uc2UiLCJjb3B5SXRlbXNGb3J3YXJkIiwiaW5kZXgiLCJwcmV2SW5wdXQiLCJpbnB1dCIsInJlbW92ZUxhc3RFbXB0eUl0ZW0iLCJyZW1vdmVJZHgiLCJhZGRSZXNwb25zZUJ1dHRvbiIsImJsdXIiLCJhZGRQaG9uZUlucHV0IiwiYWRkUGhvbmVCdXR0b24iLCJhZGRFbWFpbElucHV0IiwiYWRkRW1haWxCdXR0b24iLCJhZGRHcm91cEJ1dHRvbiIsInNhdmVHcm91cEJ1dHRvbiIsInRhcmdldDIiLCJpbnB1dEVycm9ycyIsImlucHV0RXJyb3JzQXJyYXkiLCJjbG9zZXN0IiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJtZW51IiwibWVudUJ1dHRvbiIsIm1lbnVDaGlsZCIsIm1haW4iLCJhZGRCdG4iLCJzdWJqZWN0SW5wdXQiLCJtZXNzYWdlSW5wdXQiLCJyZXNlbmRJbnB1dCIsInJlc3BvbnNlT3B0aW9ucyIsImNvb2tpZU1lc3NhZ2VIZWxwZXIiLCJjb29raWVBdXRvUmVzZW5kSGVscGVyIiwiY29va2llUmVzcG9uc2VIZWxwZXIiLCJjb29raWVJZHNIZWxwZXIiLCJnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZyIsIm5vbkVtcHR5T3B0aW9ucyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJzZXQiLCJzZXRJZHMiLCJ4IiwibmV3UGhvbmVSb3ciLCJuZXdQaG9uZSIsImNsYXNzTmFtZSIsInJlbnVtYmVyUGhvbmVzSW5wdXRzIiwicGhvbmVJbnB1dHMiLCJwaG9uZSIsImlucCIsInNwbiIsIm5ld0VtYWlsUm93IiwicmVudW1iZXJsRW1haWxzSW5wdXRzIiwiZW1haWxJbnB1dHMiLCJlbWFpbCIsImFkZFBob25lQnRuIiwiYWRkRW1haWxCdG4iLCJyZW1vdmVFbWFpbEJ1dHRvbnMiLCJyZW1vdmVQaG9uZUJ1dHRvbnMiLCJjb250YWN0UHJvZmlsZUZvcm0iLCJmb3JtR3JvdXAiLCJjaCIsImRtZCIsImxvYWRlciIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjcml0ZXJpYUtleSIsInNlYXJjaENyaXRlcmlhU3RyaW5nIiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJzdGFmZlRhYmxlIiwibmV3VG90YWwiLCJjcmVhdGVDaGVja2JveEZpZWxkIiwiY2VsbCIsImNyZWF0ZUNlbGxXaXRoVGV4dCIsImFkZFJvdyIsInVzZXIiLCJuZXdSb3ciLCJjb2xsYXIiLCJwaG9uZU51bWJlciIsImhhc0lkIiwidG9TdHJpbmciLCJhZGRSZXN1bHRSb3dzIiwibG9hZGVyUGFnZVNpemUiLCJMYXp5TG9hZGVyIiwiZG9uZSIsImVuZHBvaW50IiwiZmV0Y2giLCJqc29uIiwicmVzdWx0cyIsImhhc1Jlc3VsdHMiLCJtb3JlUmVzdWx0c0xpa2VseSIsImVycm9yIiwib25jbGljayIsImV2ZW50IiwiZHJvcGRvd25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9wZW5Ecm9wZG93biIsInRvZ2dsZVNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJ5Iiwic25hY2tiYXJTdG9yYWdlSXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzbmFja2JhciIsImNvbnRhY3RQYXJhbSIsIk9yZ2FuaXNhdGlvblBhcmFtIiwiTWVzc2FnZVNlbnRQYXJhbSIsInNuYWNrYmFyTWVzc2FnZSIsInNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSIsIkpTT04iLCJwYXJzZSIsImxvY2F0aW9ucyIsImluY2x1ZGVzIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0MsUUFBUCxDQUFnQk0sUUFBeEQ7QUFDQVAsY0FBTSxDQUFDOFUsWUFBUCxDQUFvQlksT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NKLElBQUksQ0FBQ0ssU0FBTCxDQUFlTix3QkFBZixDQUF4QztBQUVIO0FBQ0osS0FSRDtBQVNIOztBQUVELE1BQUlELGVBQUosRUFBcUI7QUFDakJKLFlBQVEsQ0FBQzlZLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUF2QjtBQUNBNlksWUFBUSxDQUFDdlMsU0FBVCxHQUFxQjJTLGVBQXJCO0FBRUEzRixjQUFVLENBQUMsWUFBVTtBQUNqQnVGLGNBQVEsQ0FBQzlZLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGtCQUExQjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKLENBNURELEVBNERHLFdBNURILEU7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlIiwiZmlsZSI6ImRpc3QvanMvc2NyaXB0cy5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLypcclxuIENsYXNzIHRoYXQgZmFjaWxpdGF0ZSB0aGUgaGlkaW5nIGFuZCBzaG93aW5nIG9mIHRoZSBib3R0b20gYmFyLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3R0b21EcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlbkNsYXNzID0gXCJib3R0b20tZHJhd2VyLW9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG59OyIsIi8vIERpc2FibGVzIGFuZCBlbmFibGVzIGEgYnV0dG9uIGJ5IHdoZXRoZXIgb3Igbm90IGEgY2hlY2tib3ggaXMgc2VsZWN0ZWQuXHJcbmNsYXNzIENoZWNrYm94RGlzYWJsZUJ1dHRvbkhlbHBlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b25TZWxlY3RvciwgY2hlY2tib3hTZWxlY3Rvcikge1xyXG4gICAgICAgIC8vIEdyYWIgdGhlIGJ1dHRvblxyXG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghdGhpc19idXR0b24pIHRocm93IG5ldyBFcnJvcihcIkJ1dHRvbiBzZWxlY3RvciBkb2VzbnQgbWF0Y2ggYW4gZWxlbWVudFwiKTtcclxuICAgICAgICAvLyBHcmFiIHRoZSBjaGVja2JveFxyXG4gICAgICAgIHRoaXMuX2NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjaGVja2JveFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrYm94KSB0aHJvdyBuZXcgRXJyb3IoXCJDaGVja2JveCBzZWxlY3RvciBkb2VzbnQgbWF0Y2ggYW4gZWxlbWVudFwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVzcGVjdCB0aGUgY2hlY2tib3hlcyBzdGFydGluZyBzdGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYW5kIGV2ZW50IGxpc3RlbmVyIHRoYXQgZW5hYmxlcyBhbmQgZGlzYWJsZXMgdGhlIGJ1dHRvbi5cclxuICAgICAgICB0aGlzLl9jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID9cclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNhYmxlcyB0aGUgYnV0dG9uXHJcbiAgICBfZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgICAgICBzYXZlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW5hYmxlcyB0aGUgYnV0dG9uXHJcbiAgICBfZW5hYmxlQnV0dG9uKCkge1xyXG4gICAgICAgIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCb3R0b21EcmF3ZXIgZnJvbSAnLi9Cb3R0b21EcmF3ZXInO1xyXG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4vU2ltcGxlQ29va2llSGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0TWVzc2FnZURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlJlY2lwaWVudHMsIHRvdGFsU2VsZWN0b3I9XCIuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RvdGFsXCIpIHtcclxuICAgICAgICBjb25zdCBjb29raWVIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG90YWxTZWxlY3Rvcik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190aXRsZScpLnRleHRDb250ZW50ID0gY29va2llSGVscGVyLmdldCgpIHx8ICdVbnRpdGxlZCc7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b3RhbHNFbGVtZW50KSB7IHRocm93IEVycm9yKGBObyBlbGVtZW50IG1hdGNoaW5nIHRoZSBwYXNzZWQgaW4gc2VsZWN0b3IgJHt0b3RhbFNlbGVjdG9yfWApOyB9XHJcbiAgICAgICAgdGhpcy5fYm90dG9tRHJhd2VyID0gbmV3IEJvdHRvbURyYXdlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKG51bWJlck9mUmVjaXBpZW50cyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50LmlubmVyVGV4dCA9IG51bWJlck9mUmVjaXBpZW50cztcclxuICAgICAgICBudW1iZXJPZlJlY2lwaWVudHMgPyB0aGlzLl9ib3R0b21EcmF3ZXIuc2hvdygpIDogdGhpcy5fYm90dG9tRHJhd2VyLmhpZGUoKTtcclxuICAgIH1cclxufSIsIiB2YXIgZ3JvdXBFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XHJcbiAgICBpZihncm91cEV4aXN0KXtcclxuXHJcbiAgICAgICAgdmFyIHVzZUNoZWNrYm94ZXMgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94ID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1zaW5nbGUtc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIGxvY2tSb290Tm9kZSA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLWxvY2stcm9vdCcpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3RvciwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAvL0NoZWNrIG9uIHBhZ2Ugd2hldGhlciBHcm91cCBNdWx0aSBTZWxlY3QgZXhpc3RzXHJcbiAgICB2YXIgaW50aWFsbHlTZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwU2VsZWN0b3JcIik7XHJcbiAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbiAgICAvLyBJZiB0aGUgR3JvdXAgTXVsdGkgU2VsZWN0IGRvZXMgZXhpc3QsIGhpZGUgaXQgKGlmIEpTIGVuYWJsZWQpXHJcbiAgICBpZiAoZ3JvdXBTZWxlY3QgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEdyYWIgYWxsIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZFxyXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnNOb2RlcyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRPcHRpb25zTm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgIGludGlhbGx5U2VsZWN0ZWROb2Rlcy5wdXNoKHNlbGVjdGVkT3B0aW9uc05vZGVzW2ldLnZhbHVlIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aFRvVW5jaGVjayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIikucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiU2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1jaGVja2JveF0uR3JvdXBJdGVtW3ZhbHVlPVwiJytwYXRoVG9VbmNoZWNrKydcIl0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNib3hUb1VuY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNiU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNib3hUb1VuY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjYm94VG9VbmNoZWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VhcmNoUGFydHMgPSAoZnVuY3Rpb24gZ2V0VXJsVmFycygpIHtcclxuICAgICAgICB2YXIgdmFycyA9IHt9O1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24obSxrZXksdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhcnM7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBwYWdlUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBcIj9ncm91cD1cIjtcclxuICAgIHZhciBncm91cFBhcmFtID0gc2VhcmNoUGFydHMuZ3JvdXA7XHJcbiAgICB2YXIgc2VhcmNoUGFyYW0gPSBzZWFyY2hQYXJ0cy5TZWFyY2g7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gYnVpbGQgdGhlIHBhdGhcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2VQYXRoRm9yR3JvdXAoZ3JvdXApIHtcclxuICAgICAgdmFyIGdycCA9IGdyb3VwID09PSBcIlwiID8gXCJcXFxcXCIgOiBncm91cDtcclxuICAgICAgcmV0dXJuIHBhZ2VQYXRoICsgZ3JwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZCBzaG91bGQgYmUgb3BlbiBpLmUuIHRvIHJldmVhbCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBzaG91bGRQYXJlbnRCZU9wZW4ocGF0aCkge1xyXG4gICAgICAgIGlmICghZ3JvdXBQYXJhbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoICsgXCJcXFxcXCIpO1xyXG4gICAgICAgIHJldHVybiBncm91cFBhcmFtLnN0YXJ0c1dpdGgocGF0aFRvQ2hlY2spICYmIGdyb3VwUGFyYW0gIT0gcGF0aFRvQ2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkZWQgaXMgdGhlIGN1cnJlbnRseVNlbGVjdGVkR3JvdXBcclxuICAgIGZ1bmN0aW9uIGlzU2VsZWN0ZWRHcm91cChwYXRoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtc1RvQ2hlY2sgPSBkZWNvZGVVUklDb21wb25lbnQoZ3JvdXBQYXJhbSB8fCBcIlxcXFxcIik7XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggfHwgXCJcXFxcXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFyYW1zVG9DaGVjayA9PT0gcGF0aFRvQ2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGxpbmsgZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRMaW5rKHRleHQsIHBhdGgpIHtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGdldFBhZ2VQYXRoRm9yR3JvdXAocGF0aCk7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpbmtcIik7XHJcblxyXG4gICAgICAgIC8vIE5CLiAgT3JpZ2luYWxseSB3ZSBkaWRudCB3YW50IHRoZSBjdXJyZW50IGNsYXNzIHRvIGJlIGFkZGVkIGlmIGRvaW5nIGEgc2VhcmNoLCBidXQgdGhpbmsgd2UgZG8gbm93LlxyXG4gICAgICAgIC8vIGlmICgoIXNlYXJjaFBhcmFtKSAmJiAgaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XHJcbiAgICAgICAgLy8gaWYgKGlzU2VsZWN0ZWRHcm91cChwYXRoKSkge1xyXG4gICAgICAgIC8vICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGluay0tY3VycmVudFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIGxpbms7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGNoZWNrYm94IGxhYmVsIGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3godGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkdyb3VwSXRlbVwiKTtcclxuICAgICAgICBjaGVja2JveC5uYW1lID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveC52YWx1ZSA9IHBhdGg7XHJcbiAgICAgICAgY2hlY2tib3guaWQgPSB0ZXh0O1xyXG4gICAgICAgIHZhciBuZXdQYXJlbnRTZWxlY3RlZCA9IHBhcmVudENoZWNrZWQ7XHJcblxyXG4gICAgICAgIGlmIChwYXRoID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSB0aGUgcm9vdCBub2RlIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgY2hlY2tlZCBCVVQgdGhlIGNoaWxkcmVuIG9mIHRoaXMgbm9kZSBzaG91bGQgYWN0IGFzIHRob3VnaCBpdCBpc250IGNoZWNrZWQgc28gd2UgZG9udCB1cGRhdGUgdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDaGVja2VkICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIHNlbGVjdGVkIGFsbCBpdHMgY2hpbGRyZW4gc2hvdWxkIGJlIGRpc2FibGVkIGFuZCB1bmNoZWNrZWRcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIG5vdCBjaGVja2VkIGl0cyBjaGlsZHJlbiBzZWxlY3RlZCBzdGF0ZSBkZXBlbmQgb24gdGhlIGNoaWxkcyB2YWx1ZSwgYW5kIG5vdCBiZSBkaXNhYmxlZFxyXG4gICAgICAgICAgICB2YXIgbmV3Q2hlY2tlZCA9IGludGlhbGx5U2VsZWN0ZWROb2Rlcy5pbmRleE9mKHBhdGggfHwgJ1xcXFwnKSA+PSAwO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICAgICAgbmV3UGFyZW50U2VsZWN0ZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3R5bGUgYXMgYSByYWRpbyBidXR0b25cclxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY2hlY2tTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19jaGVjaycpO1xyXG4gICAgICAgICAgICB2YXIgYm9yZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9fYm9yZGVyJyk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrU3Bhbik7XHJcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGJvcmRlclNwYW4pO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9faW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tib3ggPSBsYWJlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7Y2hlY2tib3gsIG5ld1BhcmVudFNlbGVjdGVkfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveExhYmVsKHRleHQsIHBhdGgpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuZm9yID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0ZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94TGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhbnNmZXJWYWx1ZXMoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuR3JvdXBJdGVtJylcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPGVsZW1zLmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9ja1Jvb3ROb2RlICYmICEoZWxlbXNbaV0udmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8tb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1zW2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWxlbXNbaV0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpIHtcclxuXHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG4gICAgICAgIGlmICh0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dyb3VwU2VsZWN0b3InKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBleGlzdGluZ09wdGlvblZhbHVlcyA9IEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBkYXRhX2kgPSAwOyBkYXRhX2kgPCBkYXRhLmxlbmd0aDsgZGF0YV9pKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFfY3VycmVudCA9IGRhdGFbZGF0YV9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+QWxsIENvbnRhY3QgR3JvdXBzPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPicgKyBkYXRhX2N1cnJlbnQuc3Vic3RyaW5nKDEpICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIG9wdGlvbiBleGlzdHMgLSBhZGQgaXQgaWYgbm90XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdPcHRpb25WYWx1ZXMuaW5kZXhPZihkYXRhX2N1cnJlbnQpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGRhdGFfY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gZGF0YV9jdXJyZW50O1wiXCJcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBkYXRhLmluZGV4T2YoZWxlbWVudC5vcHRpb25zW2ldLnZhbHVlKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuRm9yTW9kZShwYXJlbnQsIHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuICAgICAgICBpZiAodXNlQ2hlY2tib3hlcyB8fCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgdGhlIGJsYW5rIHZhbHVlIGZvciAnQWxsIENvbnRhY3QgR3JvdXBzJ1xyXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBcIlxcXFxcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSk7XHJcbiAgICAgICAgICAgIHZhciBjaGVja2JveFJlc3VsdCA9IGJ1aWxkQ2hlY2tib3godGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGVja2JveFJlc3VsdC5jaGVja2JveCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveFJlc3VsdC5uZXdQYXJlbnRTZWxlY3RlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxpbmsgdG8gcmVmcmVzaCBwYWdlIHdpdGggc2VsZWN0ZWQgbm9kZS5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkTGluayh0ZXh0LCBwYXRoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRDaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGN1cnJlbnQsIGNoaWxkcmVuLCB1cGRhdGVyRm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50TG9vcENoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9vcENoaWxkICE9PSBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVyRm4oY3VycmVudExvb3BDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayhlLCBjaGVja2JveCkge1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50TGkgPSBjaGVja2JveC5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSBvbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCwgYW5kIHRoZSBzZWxlY3RlZCBpdGVtIGNhbm5vdCBiZSBkZXNlbGV0ZWQuXHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWxsR3JvdXBDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyb3VwLXNlbGVjdG9yX19saXN0LS1yb290IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBhbGxHcm91cENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFyZW50TGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudCcpKXtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY2hpbGRDaGVja2JveGVzID0gcGFyZW50TGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyYWIgdGhlIHNlbGVjdCBsaXN0IGFuZCBhbGwgb2YgaXRzIG9wdGlvbnNcclxuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgdmFyIG9wdGlvbnMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG5cclxuICAgIHZhciBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiR3JvdXBcIik7XHJcbiAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IGdyb3VwUGFyYW0gfHwgJ1xcXFwnO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBjb2xsZWN0aW9ucyB3aXRoIHN0YXJ0aW5nIGtleSBmb3IgdGhlIHJvb3QuXHJcbiAgICB2YXIgc3RydWN0dXJlID0geyBcIlxcXFxcIjoge30gfTtcclxuXHJcbiAgICAvLyBCdWlsZCBvbiB0aGUgYmFzZSBzdHJ1Y3R1cmUgYnkgbG9vcGluZyB0aHJvdWdoIGVhY2ggc2VsZWN0IGl0ZW0uXHJcbiAgICBmb3IgKHZhciBvcHRpb25faT0wOyBvcHRpb25faTxvcHRpb25zLmxlbmd0aDsgb3B0aW9uX2krKykge1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tvcHRpb25faV07XHJcblxyXG4gICAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgLy8gU2VwZXJhdGUgdGhlIGdyb3VwIG5hbWUgaW50byBhbGwgaXRzIHBhdGggc2VnbWVudHNcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gb3B0aW9uLnRleHRDb250ZW50LnNwbGl0KFwiXFxcXFwiKTtcclxuICAgICAgICAgICAgLy8gU3RhcnQgYXQgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgICAgICAgICAgdmFyIG5vZGVUb0NoZWNrID0gc3RydWN0dXJlW1wiXFxcXFwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHNlZ21lbnQgZW5zdXJlIHRoYXQgYWxsIGxldmVscyBvZiB0aGUgc3RydWN0dXJlIGFyZSBpbiBwbGFjZS5cclxuICAgICAgICAgICAgZm9yICh2YXIgc2VnbWVudF9pPTA7IHNlZ21lbnRfaTxzZWdtZW50cy5sZW5ndGg7IHNlZ21lbnRfaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ21lbnRzW3NlZ21lbnRfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlZyAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvQ2hlY2tbc2VnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVja1tzZWddID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2tbc2VnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgYmFzZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWRcclxuICAgIHZhciB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdFwiKTtcclxuXHJcblxyXG4gICAgLy8gSGFuZGxlIGFsbCB0aGUgY2xpY2tzIGF0IHRoZSBwYXJlbnQgbGV2ZWxcclxuICAgIHRyZWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgY2hlY2tib3ggaXRlbXMgYmVpbmcgc2VsZWN0ZWQuXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyYW5zZmVyVmFsdWVzKCk7XHJcblxyXG4gICAgICAgIC8vIFdlIG9ubHkgY2FyZSBhYm91dCBjbGlja3Mgb24gZWxlbWVudHMgdGhhdCBhcmUgcGFyZW50c1xyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKSkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbiBvcGVuIHBhcmVudCBpdGVtIGlzIGNsaWNrZWQsIGNsb3NlIGl0LCBidXQgYWxzbyBhbGwgaXRzIG9wZW4gZGVzY2VuZGFudHMuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGRyZW4gPSB0YXJnZXQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICBcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGFjX2k9MDsgYWNfaTxhY3RpdmVDaGlsZHJlbi5sZW5ndGg7IGFjX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZCA9IGFjdGl2ZUNoaWxkcmVuW2FjX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBPcGVuIGFueSBjbG9zZWQgcGFyZW50cyB0aGF0IGFyZSBjbGlja2VkLlxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIHNlbGVjdCBsaXN0IGZyb20gdGhlIHByZXZpb3VzIG5vZGUgc3RydWN0dXJlLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaGlsZEtleXMoY3VyclRleHQsIGN1cnJQYXRoLCBvYmosIGVsZW1lbnRUb0FkZFRvLCBsZXZlbCwgcGFyZW50c0NoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRDaGVja2VkU3RhdGUgPSBwYXJlbnRzQ2hlY2tlZDtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXVzZUNoZWNrYm94ZXMgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94ICYmIGlzU2VsZWN0ZWRHcm91cChjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgLy8gT25seSBhZGQgdGhlIGN1cnJlbnQgc3RhdGUgd2hlbiBpbiB0aGUgJ2xpbmsgbW9kZSdcclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGlsZEtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYXQgdGhlIGJvdHRvbSBvZiBhIGJyYW5jaCBpLmUuIG5vIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBub2RlIGhhcyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMSB8fCBzaG91bGRQYXJlbnRCZU9wZW4oY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuIGZpcnN0IGxldmVsIGNoaWxkcmVuIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgICAgICBcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZSA9IGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRhaW5lciByZWFkeSB0byBiZSBwb3B1bGF0ZWQgd2l0aCB0aGUgY2hpbGQgbm9kZXNcclxuICAgICAgICAgICAgdmFyIGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5hcHBlbmRDaGlsZChjaGlsZExpc3QpO1xyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuICAgICAgICAgICAgLy8gQ2FsbCByZWN1cnNpdmVseSB3aXRoIHVwZGF0ZWQgcGFyYW1zIGZvciBlYWNoIGNoaWxkIG5vZGVcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGNrX2k9MDsgY2tfaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGNrX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGRLZXlzW2NrX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEtleSAhPT0gJ0FsbCBjb250YWN0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q2hpbGRLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyUGF0aCArIFwiXFxcXFwiICsgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hpbGRLZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgaW5pdGlhbCBjYWxsIG9mIHRoZSByZWN1cnNpdmUgZnVuY3Rpb24gc3RhcnRpbmcgYXQgdGhlIHJvb3QuXHJcbiAgICBkaXNwbGF5Q2hpbGRLZXlzKFwiQWxsIENvbnRhY3QgR3JvdXBzXCIsIFwiXCIsIHN0cnVjdHVyZVtcIlxcXFxcIl0sIHRyZWVDb250YWluZXIsIDEsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIHRoZSBzZWxlY3QgbGlzdCB3aXRoIHRoZSBuZXcgdHJlZVxyXG4gICAgZ3JvdXBTZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodHJlZUNvbnRhaW5lciwgZ3JvdXBTZWxlY3QpO1xyXG5cclxuICAgIHRyZWVDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoaWRkZW5GaWVsZCk7XHJcblxyXG4gICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbn0pKFwiI0dyb3VwXCIsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KTtcclxufVxyXG4iLCIvLyBTdG9yZSBhIHVuaXF1ZSBzZXQgb2YgaWRzIGluc2lkZSBhIGNvb2tpZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZENvb2tpZUhlbHBlcntcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX2lkcyA9IG5ldyBTZXQodGhpcy5faW5pdGlhbGlzZSgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUG9wdWxhdGUgc3RhcnQgaWRzLCBpbml0aWFsaXNlcyBjb29raWUgaWYgbm90IHByZXNlbnRcclxuICAgIF9pbml0aWFsaXNlKCkge1xyXG4gICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBkb2N1bWVudC5jb29raWU7XHJcblxyXG4gICAgICBjb25zdCBjb29raWVzID0gY29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xyXG4gICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XHJcblxyXG4gICAgICBpZiAoIW1hdGNoaW5nQ29va2llKSB7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdChbXSk7ICAgXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hdGNoaW5nVmFsdWVUb1NwbGl0ID0gbWF0Y2hpbmdDb29raWUuc3BsaXQoJz0nKVsxXTtcclxuICAgICAgcmV0dXJuIG1hdGNoaW5nVmFsdWVUb1NwbGl0LnNwbGl0KCd8JykuZmlsdGVyKGkgPT4gaSk7ICAgLy8gU3BsaXQgYW5kIHJlbW92ZSBlbXB0eSB2YWx1ZXNcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2F2ZSB0aGUgbmV3IGlkcyB0byB0aGUgY29va2llIGFmdGVyIHVwZGF0ZVxyXG4gICAgX3VwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgaWRzID0gdGhpcy5nZXRJZHMoKTtcclxuICAgICAgdGhpcy5fcGVyc2lzdChpZHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTYXZlIHRoZSBwYXNzZWQgaW4gaWRzIHRvIHRoZSBjb29raWVcclxuICAgIF9wZXJzaXN0KGlkcykgeyAgICBcclxuICAgICAgY29uc3Qgam9pbmVkSWRzID0gaWRzLmpvaW4oJ3wnKTtcclxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IGNvb2tpZSBjb250YWluaW5nIHNlbGVjdGVkIGlkcy4gIFNldCB0byBzYW1lIHNpdGUgc3RyaWN0IGFuZCBwYXRoIHRvIHJvb3RcclxuICAgICAgY29uc3QgbmV3Q29va2llID0gYCR7dGhpcy5fbmFtZX09JHtqb2luZWRJZHN9OyBwYXRoPS87IHNhbWVzaXRlPVN0cmljdGBcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gbmV3Q29va2llO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTZXQgYWxsIHRoZSBpZHMgaW4gb25lIGhpdC4gUmV0dXJucyB0aGUgbmV3IGNvdW50LlxyXG4gICAgc2V0SWRzKGlkcyA9IFtdKSB7XHJcbiAgICAgIHRoaXMuX2lkcyA9IG5ldyBTZXQoaWRzKTtcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cclxuICAgIGdldElkcygpIHtcclxuICAgICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbSh0aGlzLl9pZHMpXHJcbiAgICAgIHJldHVybiBpZHM7XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGlkcyBjdXJyZW50bHkgaW4gdGhlIHNldC5cclxuICAgIGdldENvdW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWRzLnNpemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlbW92ZSBvbmUgb3IgbW9yZSBpZHMuIFJldHVybiB0aGUgbmV3IGNvdW50XHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgdGhpcy5faWRzLmRlbGV0ZShpZCk7ICAgICAgXHJcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgb25lIG9yIG1vcmUgaWRzLiBSZXR1cm5zIHRoZSBuZXcgY291bnRcclxuICAgIGFkZChpZCkge1xyXG4gICAgICB0aGlzLl9pZHMuYWRkKGlkKTtcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9lcyB0aGUgc2V0IGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBhcnJheSBpdGVtLlxyXG4gICAgaGFzSWQoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRzLmhhcyhpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuLyoqXHJcbiAgQ2xhc3MgdG8gbWFuYWdlIHRoZSBsb2FkIG9uIHNjcm9sbCBmdW5jdGlvbmFsaXR5IGZvciBhIHBhZ2UuXHJcbiAgV2hlbiB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgc2VydmVyIHNpZGUgaXQgc2hvdWxkIGhpZGUgdGhlIGxvYWRlciBlbGVtZW50IGlmIG5vIG1vcmUgcmVzdWx0cyB0byBsb2FkLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VyaWVyTGF6eUxvYWRlciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICBDb25zdHJ1Y3RvclxyXG4gICAgUGFyYW1zXHJcbiAgICAgLSBsb2FkZXJFbGVtZW50IChyZXF1aXJlZCk6IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBsb2FkZXJcclxuICAgICAtIGxvYWRlckZuIChyZXF1aXJlZCk6IFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlIG9mIHJlc3VsdHMuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIGEgYm9vbCBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgbW9yZSBpdGVtcyB0byBsb2FkLlxyXG4gICAgIC0gY29uZmlnT2JqIChvcHRpb25hbCk6ICBBbiBvYmplY3Qgd2hvc2Uga2V5IGFuZCB2YWx1ZXMgd2lsbCBvdmVycmlkZSBkZWZhdWx0IGNvbmZpZyBzZXR0aW5ncy5cclxuICAqLyAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGxvYWRlckVsZW1lbnQsIFxyXG4gICAgICBsb2FkZXJGbiwgXHJcbiAgICAgIGNvbmZpZ09iaiA9IHt9XHJcbiAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAgRGVmYXVsdCBjb25maWcgc2V0dGluZ3NcclxuICAgICovXHJcbiAgICBjb25zdCBjb25maWdEZWZhdWx0cyA9IHtcclxuICAgICAgbG9hZGVyQ2xhc3M6ICdsb2FkZXInLCAgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudFxyXG4gICAgICBsb2FkZXJMb2FkaW5nQ2xhc3M6ICdsb2FkZXItLWxvYWRpbmcnLCAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgIGRlYm91bmNlTXM6IDEwMCwgLy8gaG93IGxvbmcgdG8gd2FpdCBiZXR3ZWVuIGV2ZW50cyBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIHBlZWtEaXN0YW5jZTogMCwgLy8gaG93IG11Y2ggb2YgbG9hZGluZyBlbGVtZW50IHNob3VsZCBiZSBvbiBzY3JlbiBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIGRlYnVnOiBmYWxzZSAgLy8gd2hldGhlciBvciBub3QgdG8gbG9nIGRlYnVnIGluZm8gdG8gY29uc29sZS5cclxuICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXJFbGVtZW50O1xyXG4gICAgdGhpcy5fbG9hZGVyRnVuYyA9IGxvYWRlckZuO1xyXG4gICAgICAgIFxyXG4gICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBwYXNzZWQgaW4gY29uZmlnXHJcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZ0RlZmF1bHRzLCAuLi5jb25maWdPYmogfTtcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgd2hldGhlciBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkIG9yIHJlbW92ZWRcclxuICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgaWYgKCF0aGlzLl9sb2FkZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGxvYWRlciBlbGVtZW50IHByb3ZpZGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbiB0aGUgbG9hZGVycyBjbGFzcyBmcm9tIHRoZSBjb25maWdcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJDbGFzcyk7XHJcbiAgICBcclxuICAgIC8vIERlYm91bmNlIHRoZSBjaGVja1xyXG4gICAgdGhpcy5fbGF6eUxvYWRDaGVjayA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5fZG9Mb2FkTW9yZUNoZWNrKCkpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdDYWxsaW5nIGxvYWQgbW9yZSBmdW5jdGlvbicpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHRoZSBzZWFyY2ggZnVuY3Rpb24gJiBwYXNzIGluIHRoZSBkb25lIHNlYXJjaGluZyBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2xvYWRlckZ1bmModGhpcy5fZG9uZVNlYXJjaGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm90IHJlYWR5IHRvIHJlbG9hZCB5ZXQnKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlYm91bmNlTXMpO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgdGhlIGV2ZW50cyAoYWxzbyBkb2VzIGluaXRpYWwgY2hlY2spXHJcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fZG9uZVNlYXJjaGluZyA9IHRoaXMuX2RvbmVTZWFyY2hpbmcuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgXHJcbiAgX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSh2aXNpYmxlKSB7XHJcbiAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGtsZSByZXN1bHRzIGNvbWluZyBiYWNrIGluXHJcbiAgX2RvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCkge1xyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyhgX2RvbmVTZWFyY2hpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggbW9yZSB0byBsb2FkICR7bW9yZVRvTG9hZH1gKTtcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpIFxyXG4gICAgaWYgKG1vcmVUb0xvYWQpIHtcclxuICAgICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQWxsIGRvbmUgLSBoaWRpbmcgbG9hZGVyIGVsZW1lbnQnKTtcclxuICAgICAgdGhpcy5fc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gV2lyZSB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIGRvIGluaXRpYWwgY2hlY2suXHJcbiAgX3N0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkgeyAgICAgIFxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWRkZWQnKTtcclxuICAgICAgdGhpcy5fbGF6eUxvYWRDaGVjaygpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhbHJlYWR5IGluIHBsYWNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXHJcbiAgX3N0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgICAgXHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyByZW1vdmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdObyBMaXN0ZW5lcnMgdG8gcmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhlbHBlciB0byBsb2cgb25seSBpZiBkZWJ1Z2dpbmcgZW5hYmxlZFxyXG4gIF9jb25kaXRpb25hbERlYnVnTG9nKHRvRGVidWcsIGxvZ2dlckZ1bmMgPSBjb25zb2xlLmxvZywgKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgIGxvZ2dlckZ1bmModG9EZWJ1ZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gRG8gdGhlIGNoZWNrIHRvIHNlZSBpZiBzY3JlZW4gc29tZXdoZXJlIGl0IHNob3VsZCBiZSBsb2FkZWQuXHJcbiAgX2RvTG9hZE1vcmVDaGVjaygpIHsgICAgXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7IFxyXG4gICAgY29uc3QgcGVla1Bvc2l0aW9uVmlzaWJsZSA9IGhpZ2hlc3RWaXNpYmxlWVBvcyA+PSBsb2FkTW9yZVRyaWdnZXJQb3M7XHJcbiAgICBjb25zdCBzaG91bGRMb2FkTW9yZSA9IHBlZWtQb3NpdGlvblZpc2libGU7XHJcbiAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0RvaW5nIGxvYWQgbW9yZSBjaGVjayAuLi4nKTsgICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKHsgXHJcbiAgICAgICdUb3AgcG9zaXRpb24gb2YgbG9hZGVyIGVsZW1lbnQnOiB0aGlzLl9sb2FkZXIub2Zmc2V0VG9wLFxyXG4gICAgICAnQ29uZmlnIHBlZWsgZGlzdGFuY2UnOiB0aGlzLl9jb25maWcucGVla0Rpc3RhbmNlLFxyXG4gICAgICAnWSBjby1vcmRpbmF0ZSB3aGVuIG1vcmUgc2hvdWxkIGJlIGxvYWRlZCAoaW5jbHVkaW5nIHBlZWssIGNvbnN0cmFpbmVkIHRvIGRvYyBoZWlnaHQpJzogbG9hZE1vcmVUcmlnZ2VyUG9zLFxyXG4gICAgICAnQ3VycmVudCBZIHBvc2l0aW9uIG9mIHNjcm9sbCc6IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgJ1RoZSBpbnRlcm5hbCBzaXplIG9mIHRoZSB3aW5kb3cnOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICdUaGUgbWF4IHkgcG9zaXRpb24gdmlzaWJsZSc6IGhpZ2hlc3RWaXNpYmxlWVBvcyxcclxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcclxuICAgICAgJ0lzIHBlZWsgcG9zaXRpb24gdmlzaWJsZSc6IHBlZWtQb3NpdGlvblZpc2libGUsXHJcbiAgICAgICdJcyB0aGUgbG9hZCBtb3JlIHBvc2l0aW9uIHZpc2libGUsIG9yIGF0IGRvYyBlbmQnOiBzaG91bGRMb2FkTW9yZSxcclxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHNob3VsZExvYWRNb3JlO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLXRhYmxlLWlkPVwiPDxpZCBvZiB0YWJsZSB0byBiZSBlZmZlY3RlZD4+XCJcclxuICogXHJcbiAqICBPUFRJT05BTDogVXNlIHRoZSBmb2xsb3dpbmcgYXR0cnRpYnV0ZXMgdG8gYWRqdXN0IHRoZSBiZWhhdmlvclxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcclxuICogIFxyXG4gKi9cclxuXHJcbnZhciBzaG93TW9yZVRhYmxlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLXNob3dhbGwtdGFibGUtaWRdJyk7XHJcblxyXG5zaG93TW9yZVRhYmxlQnV0dG9ucy5mb3JFYWNoKHNob3dBbGxCdXR0b24gPT4ge1xyXG4gIHZhciB0YWJsZUlkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtdGFibGUtaWRcIik7XHJcblxyXG4gIHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYmxlSWQpO1xyXG4gIGlmICh0YWJsZSkge1xyXG5cclxuICAgIHZhciBkZWZhdWx0SXRlbUxpbWl0ID0gMTA7ICAgIFxyXG4gICAgdmFyIHBhc3NlZEl0ZW1MaW1pdCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWl0ZW0tbGltaXRcIik7XHJcbiAgICB2YXIgcGFyc2VkSXRlbUxpbWl0ID0gcGFyc2VJbnQocGFzc2VkSXRlbUxpbWl0LCAxMCk7XHJcbiAgICB2YXIgbGltaXRUb1VzZSA9IGlzTmFOKHBhcnNlZEl0ZW1MaW1pdCkgPyBkZWZhdWx0SXRlbUxpbWl0IDogcGFyc2VkSXRlbUxpbWl0O1xyXG4gICAgXHJcbiAgICAvLyBXZSBkb250IHdhbnQgdGhlIGhlYWRlcnNcclxuICAgIHZhciB0YWJsZUJvZHkgPSB0YWJsZS50Qm9kaWVzWzBdO1xyXG4gICAgaWYgKCF0YWJsZUJvZHkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHRhYmxlQm9keS5yb3dzLmxlbmd0aDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDEsIGJvZHlSb3c7IGJvZHlSb3cgPSB0YWJsZUJvZHkucm93c1tpLTFdOyBpKyspIHtcclxuICAgICAgaWYgKGkgPiBsaW1pdFRvVXNlKSB7XHJcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFibGVCb2R5TGVuZ3RoIDw9IGxpbWl0VG9Vc2UpIHsgc2hvd0FsbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IH1cclxuXHJcbiAgICBzaG93QWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsKSA9PiB7XHJcbiAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBBcnJheS5mcm9tKHRhYmxlQm9keS5yb3dzKS5mb3JFYWNoKGZ1bmN0aW9uKGJvZHlSb3cpIHtcclxuICAgICAgICBib2R5Um93LnN0eWxlLmRpc3BsYXkgPSBcInRhYmxlLXJvd1wiO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCIvKioqKioqIFxyXG5cclxuICBDcmVhdGVzIGEgdGFnIGxpc3QgZnJvbSBhIHNlbGVjdCBlbGVtZW50XHJcblxyXG4gIHVzYWdlOlxyXG5cclxuICBuZXcgU2VsZWN0TGlzdFRhZyhzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYykuXHJcblxyXG4gIC0gc2VsZWN0SWQgKHJlcXVpcmVkKTogVGhlIGlkIG9mIHRoZSBzZWxlY3QgZWxlbWVudCBhY3RpbmcgYXMgdGhlIHNvdXJjZSAobXVzdCBoYXZlIG11bHRpcGxlIGF0dHJpYnV0ZSwgYW5kIGFsbCBpdGVtcyBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkKVxyXG5cclxuICAtIHJldmVydEdyb3VwcyAob3B0aW9uYWwpOiBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNsaWNrZWQgdG8gcmV2ZXJ0IHNlbGVjdGVkIG9wdGlvbnMgKHNob3VsZCBoYXZlIGlzLWhpZGRlbiBjbGFzcyB0byBzdGFydClcclxuXHJcbiAgLSBvblVwZGF0ZUZ1bmMgKHJlcXVpcmVkKTogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIHRhZyBoYXMgYmVlbiByZW1vdmVkLCBvciBvcHRpb25zIGFyZSByZXZlcnRlZC4uIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gcGFyYW1zLCBzZWxlY3RlZE9wdGlvbnMgYW5kIGFsbE9wdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBpbnRlbmRlZCB0byBtYWtlIHRoZSBjb250cm9sIG1vcmUgZmxleGlibGUgaS5lLiBvdXIgZmlyc3QgdXNhZ2UgaXMgdG8gdXBkYXRlIGxhYmVsIHdpdGggc2VsZWN0ZWQgaXRlbXMgdGV4dCBlbHNld2hlcmUgb24gcGFnZSB3aXRob3V0IGZ1cnRoZXIgY291cGxpbmcuXHJcblxyXG4qKioqKiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdExpc3RUYWdzIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYyA9ICgpID0+IHt9KSB7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jID0gb25VcGRhdGVGdW5jO1xyXG5cclxuICAgICAgdGhpcy50YWdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpO1xyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcblxyXG4gICAgICBpZiAocmV2ZXJ0R3JvdXBzSWQpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJldmVydEdyb3Vwc0lkKTtcclxuICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcclxuICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFsbE9wdGlvbnMgPSBbLi4udGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXTtcclxuICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuICYmIHRoaXMuYWxsT3B0aW9ucy5zb21lKG8gPT4gIW8uc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgIFxyXG4gICAgICB0aGlzLnRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZS50YXJnZXQubWF0Y2hlcygnaScpKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRWYWwgPSBlLnRhcmdldC5kYXRhc2V0LnZhbDtcclxuICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyt0YXJnZXRWYWwrJ1wiXScpO1xyXG4gICAgICAgICAgICAgIGlmKG8pe1xyXG4gICAgICAgICAgICAgICAgICBvLnNlbGVjdGVkID0gZmFsc2U7ICAgXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuYWZ0ZXIodGhpcy50YWdzKTtcclxuXHJcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVRhZ3MoKSB7XHJcbiAgICAgIHRoaXMudGFncy5pbm5lckhUTUwgPSAnJzsgICAgICBcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xyXG4gICAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICB0aGlzLnRhZ3MuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVGFnKHQuaW5uZXJUZXh0LCB0LnZhbHVlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyhzZWxlY3RlZE9wdGlvbnMsIHRoaXMuYWxsT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gIG1ha2VUYWcodGV4dCwgdmFsdWUpIHtcclxuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX19pY29uXCIpOyAgICAgIFxyXG4gICAgICBpLmRhdGFzZXQudmFsPXZhbHVlO1xyXG4gICAgICBpLmlubmVyVGV4dCA9IFwiY2xlYXJcIlxyXG5cclxuICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRhZztcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFNob3VsZCBoYXZlIGEgc2VjdGlvbiBsaWtlIHRoaXMgZm9yIGVhY2ggcGFnZSB0aGUgY29udHJvbCBpcyB1c2VkIG9uLCB1bmxlc3Mgd2Ugd2FudCBpdCBiZWhhdmUgZXhhY3RseSB0aGUgc2FtZSBhcyBhIHByZXZpb3VzIHZlcnNpb24gKGluY2x1ZGluZyBpZHMgYW5kIHVwZGF0ZSBmdW5jdGlvbikgXHJcbi8vICpCZXR0ZXIgc3RpbGwqIC0gaGF2ZSBpbiBzZXBlcmF0ZSBzY3JpcHQgZmlsZSBzY29wZWQgdG8gc3BlY2lmaWMgcGFnZSAobGlrZSB3aXRoIFNlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcylcclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InKSkge1xyXG5cclxuICAvLyBQcmVwYXJlIGFuIHVwZGF0ZSBmdW5jdGlvbiBpZiByZXF1aXJlZCAob3B0aW9uYWwgcGFyYW1ldGVyKVxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VHcm91cHNMYWJlbFNwYW4nKTtcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCBwbHVyYWxpc2VkR3JvdXBzID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMSA/ICdncm91cCcgOiAnZ3JvdXBzJztcclxuICAgIHNwYW4uaW5uZXJUZXh0ID0gYFNlbmQgdG8gJHtzZWxlY3RlZE9wdGlvbnMubGVuZ3RofSByZXNwb25zZSAke3BsdXJhbGlzZWRHcm91cHN9YDtcclxuICB9XHJcblxyXG4gIC8vIEluaXRpYWxpc2UgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbnRyb2xcclxuICBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicsICdyZXZlcnRfZ3JvdXBzJywgb25VcGRhdGVGdW5jKTsgXHJcbn1cclxuIiwiLy8gU3RvcmUgYSBzaW1wbGUgdmFsdWUgaW4gYSBjb29raWVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlQ29va2llSGVscGVye1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdGlhbGlzZSgpIHtcclxuICAgICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBkb2N1bWVudC5jb29raWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWVTdHJpbmcuc3BsaXQoJzsgJyk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDb29raWUgPSBjb29raWVzLmZpbmQoYyA9PiBjLnN0YXJ0c1dpdGgoYCR7dGhpcy5fbmFtZX09YCkpO1xyXG5cclxuICAgICAgICB0aGlzLl92YWx1ZSA9IG1hdGNoaW5nQ29va2llID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoaW5nQ29va2llLnNwbGl0KCc9JylbMV0pIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q29va2llID0gYCR7dGhpcy5fbmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfTsgcGF0aD0vOyBzYW1lc2l0ZT1TdHJpY3RgXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmV3Q29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG4vLyBSZW1vdmUgdGhlIG5vLWpzIGNsYXNzIHNvIHdlIGFyZSBhYmxlIHRvIHRlbGwgdGhhdCBqcyBpcyBlbmFibGVkXHJcbi8vIFVzZWZ1bCBmb3IgaGlkaW5nIGVsZW1lbnRzIHdoZW4ganMgbm90IGF2YWlsYWJsZS5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2pzJyk7IiwiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZXMnKSAhPSBudWxsKSB7XHJcblxyXG5cclxuICAgIChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSByZXNwb25zZSBmaWVsZHMgYW5kIHRoZSByZXNwb25zZSBsaXN0XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLWZpZWxkJyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb25zLWxpc3QnKTtcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGhlIGVtcHR5IHJlc3BvbnNlIGZpZWxkc1xyXG4gICAgICAgIHJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJykgLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YXNldC5rZXkgPSBpZHg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJldmVhbHMgdGhlIGZpcnN0IGhpZGRlbiBpdGVtXHJcbiAgICAgICAgY29uc3Qgc2hvd0ZpcnN0RW1weUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVzcG9uc2UgPSByZXNwb25zZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNwb25zZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBXaGVuIGFuIGl0ZW0gaXMgcmVtb3ZlZCwgY29weSBhbGwgdmFsdWVzIGZvcndhcmQgdG8gZmlsbCBnYXBzXHJcbiAgICAgICAgY29uc3QgY29weUl0ZW1zRm9yd2FyZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSBpbmRleCArIDE7IGlkeCA8IHJlc3BvbnNlcy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2SW5wdXQgPSByZXNwb25zZXNbaWR4LTFdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKTs7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHJlc3BvbnNlc1tpZHhdLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIHByZXZJbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCByZW1vdmVMYXN0RW1wdHlJdGVtID0gKHJlbW92ZUlkeCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXMgYWxsIGNvcGllZCBmb3J3YXJkIGJsYW5rIGxhc3QgaXRlbSBvdXRcclxuICAgICAgICAgICAgcmVzcG9uc2VzW3Jlc3BvbnNlcy5sZW5ndGgtMV0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggYmFja3dhcmRzIGFuZCBoaWRlIGxhc3QgdmlzaWJsZSBpdGVtXHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IChyZXNwb25zZXMubGVuZ3RoLTEpOyBpZHggPj0gcmVtb3ZlSWR4OyBpZHgtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1tpZHhdLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlc1tpZHhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYWRkUmVzcG9uc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9yZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgc2hvd0ZpcnN0RW1weUl0ZW0oKTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmVzcG9uc2VzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtcmVzcG9uc2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVJZHggPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvcHlJdGVtc0ZvcndhcmQocmVtb3ZlSWR4KTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RFbXB0eUl0ZW0ocmVtb3ZlSWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkoKTtcclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmUnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRQaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRQaG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUGhvbmVCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZFBob25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KShcImFkZFBob25lXCIpO1xyXG5cclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRW1haWwnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRW1haWxCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZEVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KShcImFkZEVtYWlsXCIpO1xyXG5cclxufVxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzYXZlR3JvdXBCdXR0b24gIT1udWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pKFwiYWRkX2dyb3VwXCIpO1xyXG59XHJcblxyXG52YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbmlmIChncm91cFRleHRhcmVhICE9IG51bGwpIHtcclxuICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXQyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQyLm1hdGNoZXMoXCIuYnV0dG9uX19pY29uXCIpICYmIHRhcmdldDIuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG5cclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKSAhPW51bGwpIHtcclxuXHJcbiAgICB2YXIgaW5wdXRFcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJyk7XHJcbiAgICB2YXIgaW5wdXRFcnJvcnNBcnJheSA9IE9iamVjdC5rZXlzKGlucHV0RXJyb3JzKTtcclxuXHJcbiAgICBpbnB1dEVycm9yc0FycmF5LmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEVycm9yc1trZXldKTtcclxuICAgICAgICBpbnB1dEVycm9yc1trZXldLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbi8vICAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xyXG4vLyAgICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2lkZWJhclwiKS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG5cclxuLy8gfSkoXCIjU2lkZWJhclwiKTtcclxuXHJcbiIsIi8qIFxyXG4gIERlYm91bmNlIGZ1bmN0aW9uIHByZXZlbnQgZXhjZXNzaXZlIGNhbGxzIG9uIHNjcm9sbC5cclxuICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXHJcbiovXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcclxuXHR2YXIgdGltZW91dDtcclxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0fTtcclxufTsiLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkgICYmIG1lbnVDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSgnI21lbnUnKTsiLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzdGFmZiBjb21wb3NlIHBhZ2UuXHJcbiovXHJcblxyXG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4uL1NpbXBsZUNvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBJZENvb2tpZUhlbHBlciBmcm9tICcuLi9JZENvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBTZWxlY3RMaXN0VGFncyBmcm9tICcuLi9TZWxlY3RMaXN0VGFncyc7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1jb21wb3NlJykpIHtcclxuXHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jb250YWN0Jyk7XHJcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmplY3RfaW5wdXQnKTtcclxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRfTWVzc2FnZScpO1xyXG4gIGNvbnN0IHJlc2VuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X0F1dG9SZXNlbmRTY2hlZHVsZScpO1xyXG4gIGNvbnN0IHJlc3BvbnNlT3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLW9wdGlvbicpKTtcclxuXHJcbiAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gIGNvbnN0IGNvb2tpZU1lc3NhZ2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZUNvbnRlbnQnKTtcclxuICBjb25zdCBjb29raWVBdXRvUmVzZW5kSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VSZXNlbmQnKTtcclxuICBjb25zdCBjb29raWVSZXNwb25zZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzcG9uc2VzJyk7XHJcbiAgXHJcbiAgY29uc3QgY29va2llSWRzSGVscGVyID0gbmV3IElkQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJJZHMnKTtcclxuXHJcbiAgY29uc3QgZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBub25FbXB0eU9wdGlvbnMgPSByZXNwb25zZU9wdGlvbnMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgaWYgKGN1cnIudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFjYywgY3Vyci52YWx1ZV07XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5vbkVtcHR5T3B0aW9ucy5qb2luKCd8fCcpO1xyXG4gIH07XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvb2tpZUhlbHBlci5zZXQoc3ViamVjdElucHV0LnZhbHVlKTtcclxuICAgIGNvb2tpZU1lc3NhZ2VIZWxwZXIuc2V0KG1lc3NhZ2VJbnB1dC52YWx1ZSk7XHJcbiAgICBjb29raWVBdXRvUmVzZW5kSGVscGVyLnNldChyZXNlbmRJbnB1dC52YWx1ZSk7ICBcclxuICAgIGNvb2tpZVJlc3BvbnNlSGVscGVyLnNldChnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZygpKTtcclxuICB9KTtcclxuICBcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBjb29raWVJZHNIZWxwZXIuc2V0SWRzKHNlbGVjdGVkT3B0aW9ucy5tYXAoeCA9PiB4LnZhbHVlKSk7XHJcbiAgfVxyXG4gIFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsImltcG9ydCBDaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIgZnJvbSAnLi4vQ2hlY2tib3hEaXNhYmxlQnV0dG9uSGVscGVyJztcclxuXHJcbi8vIENoZWNrIHdlIGFyZSBvbiB0aGUgY29ycmVjdCBwYWdlLlxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbi5jb3VyaWVyLXByb2ZpbGUtcGFnZScpO1xyXG5cclxuaWYgKG1haW4pIHtcclxuICAgIFxyXG4gICAgLy9uZXcgQ2hlY2tib3hEaXNhYmxlQnV0dG9uSGVscGVyKCcjYnRuU2F2ZScsICcjY2JBY2NlcHRUZXJtcycpO1xyXG5cclxuICAgIC8vIEdyYWIgYWxsIHRoZSBidXR0b25zIHRoYXQgYXJlIG9ubHkgc2hvdyB3aGVuIGpzIGVuYWJsZWRcclxuICAgIGNvbnN0IGFkZFBob25lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lQnRuJyk7XHJcbiAgICBjb25zdCBhZGRFbWFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbEJ0bicpO1xyXG4gICAgY29uc3QgcmVtb3ZlRW1haWxCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpO1xyXG4gICAgY29uc3QgcmVtb3ZlUGhvbmVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpO1xyXG4gICAgXHJcbiAgICAvLyBHZXQgdGhlIGZvcm0sIHRvIGFkZCByZW1vdmUgbGlzdGVuZXJzIHRvXHJcbiAgICBjb25zdCBjb250YWN0UHJvZmlsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wcm9maWxlLWZvcm0nKTtcclxuXHJcbiAgICAvLyBTaG93IGFsbCB0aGUganMgb25seSBidXR0b25zXHJcbiAgICBbYWRkUGhvbmVCdG4sIGFkZEVtYWlsQnRuLCAuLi5yZW1vdmVFbWFpbEJ1dHRvbnMsIC4uLnJlbW92ZVBob25lQnV0dG9uc10uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBbLi4ucmVtb3ZlRW1haWxCdXR0b25zLCAuLi5yZW1vdmVQaG9uZUJ1dHRvbnNdLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpLmNsYXNzTGlzdC5hZGQoJ2lucHV0X193aXRoYWN0aW9uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBZGQgYSBuZXcgcGhvbmUgcm93XHJcbiAgICBmdW5jdGlvbiBuZXdQaG9uZVJvdygpIHsgICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBuZXdQaG9uZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdQaG9uZS5jbGFzc05hbWUgPSBcImZvcm1fX2dyb3VwIGlucHV0X193aXRoYWN0aW9uIGlucHV0LS1wcm9maWxlLXBob25lXCI7XHJcbiAgICAgICAgbmV3UGhvbmUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSBidG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmVcIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWVsZC12YWxpZGF0aW9uLXZhbGlkXCIgZGF0YS12YWxtc2ctZm9yPVwicGhvbmVfdmFsaWRhdGlvblwiIGRhdGEtdmFsbXNnLXJlcGxhY2U9XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Bob25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaW5kZXggdXNlZCBmb3IgbW9kZWwgYmluZGluZyBwaG9uZXNcclxuICAgIGZ1bmN0aW9uIHJlbnVtYmVyUGhvbmVzSW5wdXRzKCkge1xyXG4gICAgICAgIGNvbnN0IHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LS1wcm9maWxlLXBob25lJyk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgcGhvbmVJbnB1dHMuZm9yRWFjaCgocGhvbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucCA9IHBob25lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucC5pZCA9IGBJbnB1dF9QZXJzb25hbFBob25lTnVtYmVyc18ke2luZGV4fV9gO1xyXG4gICAgICAgICAgICBpbnAubmFtZSA9IGBJbnB1dF9QZXJzb25hbFBob25lTnVtYmVyc1ske2luZGV4fV1gO1xyXG4gICAgICAgICAgICBjb25zdCBzcG4gPSBwaG9uZS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsbXNnLWZvcicsIGBJbnB1dF9QZXJzb25hbFBob25lTnVtYmVyc1ske2luZGV4fV1gKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhIG5ldyBlbWFpbCByb3dcclxuICAgIGZ1bmN0aW9uIG5ld0VtYWlsUm93KCkgeyAgICBcclxuICAgICAgICBjb25zdCBuZXdFbWFpbFJvdyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgIFxyXG4gICAgICAgIG5ld0VtYWlsUm93LmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtZW1haWxcIjsgIFxyXG4gICAgICAgIG5ld0VtYWlsUm93LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybV9faW5wdXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1yZW1vdmUgIGJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbFwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJlbWFpbF92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3RW1haWxSb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBpbmRleCB1c2VkIGZvciBtb2RlbCBiaW5kaW5nIGVtYWlsc1xyXG4gICAgZnVuY3Rpb24gcmVudW1iZXJsRW1haWxzSW5wdXRzKCkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LS1wcm9maWxlLWVtYWlsJyk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgZW1haWxJbnB1dHMuZm9yRWFjaCgoZW1haWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucCA9IGVtYWlsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucC5pZCA9IGBJbnB1dC5QZXJzb25hbEVtYWlsQWRkcmVzc2VzXyR7aW5kZXh9X2A7XHJcbiAgICAgICAgICAgIGlucC5uYW1lID0gYElucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXNbJHtpbmRleH1dYDtcclxuICAgICAgICAgICAgY29uc3Qgc3BuID0gZW1haWwucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICAgICAgICBzcG4uc2V0QXR0cmlidXRlKCdkYXRhLXZhbG1zZy1mb3InLCBgSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3Nlc1ske2luZGV4fV1gKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdpcmUgdXAgdGhlIGJ1dHRvbiBsaXN0ZW5lcnNcclxuICAgIGFkZFBob25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld1Bob25lUm93KCkpO1xyXG4gICAgICAgIHJlbnVtYmVyUGhvbmVzSW5wdXRzKCk7XHJcbiAgICB9KTtcclxuICAgIGFkZEVtYWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld0VtYWlsUm93KCkpXHJcbiAgICAgICAgcmVudW1iZXJsRW1haWxzSW5wdXRzKCk7XHJcbiAgICB9KTsgIFxyXG5cclxuICAgIC8vIEhhbmRsZSB0aGUgcmVtb3ZlIG9uIHRoZSBwYXJlbnQgZm9ybSwgc28gdGhhdCB3aWxsIHdvcmsgZm9yIG5ldyBpdGVtcyBhZGRlZCBhZnRlciBsb2FkLlxyXG4gICAgY29udGFjdFByb2ZpbGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpICB8fCBlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHBhcmVudCBmb3JtIGdyb3VwIGNvbnRhaW5pbmcgZW1haWwgb3IgcGhvbmUuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtX19ncm91cCcpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LXBob25lJykpIHtcclxuICAgICAgICAgICAgcmVudW1iZXJQaG9uZXNJbnB1dHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsJykpIHtcclxuICAgICAgICAgICAgcmVudW1iZXJsRW1haWxzSW5wdXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59IiwiLyogXHJcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc2VhcmNoIHN0YWZmIHBhZ2UuXHJcbiovXHJcbmltcG9ydCBJZENvb2tpZUhlbHBlciBmcm9tICcuLi9JZENvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBEcmFmdE1lc3NhZ2VEcmF3ZXIgZnJvbSAnLi4vRHJhZnRNZXNzYWdlRHJhd2VyJztcclxuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi4vTGF6eUxvYWRlcic7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1pbmRleCcpKSB7XHJcblxyXG4gIGNvbnN0IGNoID0gbmV3IElkQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJJZHMnKTtcclxuICBjb25zdCBkbWQgPSBuZXcgRHJhZnRNZXNzYWdlRHJhd2VyKGNoLmdldENvdW50KCkpO1xyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcclxuXHJcbiAgY29uc3QgdXNlcnNUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcclxuICBsZXQgdXNlcnNUYWJsZUJvZHk7XHJcbiAgaWYodXNlcnNUYWJsZSkge1xyXG4gICB1c2Vyc1RhYmxlQm9keSA9IHVzZXJzVGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50UGFnZSA9IDE7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICBjb25zdCBjcml0ZXJpYUtleSA9ICdjcml0ZXJpYSc7XHJcbiAgXHJcbiAgbGV0IHNlYXJjaENyaXRlcmlhU3RyaW5nID0gdXJsUGFyYW1zLmhhcyhjcml0ZXJpYUtleSkgPyBgP2NyaXRlcmlhPSR7dXJsUGFyYW1zLmdldChjcml0ZXJpYUtleSl9YCA6ICcnO1xyXG5cclxuICBjb25zdCBnZXRTZWFyY2hFbmRwb2ludCA9ICgpID0+IGAke2xvY2F0aW9uLm9yaWdpbn0vRm9yY2UvQ29udGFjdHMvJHtjdXJyZW50UGFnZX0ke3NlYXJjaENyaXRlcmlhU3RyaW5nfWA7XHJcbiAgXHJcbiAgLy8gQWRkIGxpc3RlbmVycyBmb3IgdGhlIGNoZWNrYm94ZXNcclxuICBjb25zdCBzdGFmZlRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLXNlbGVjdC1zdGFmZicpO1xyXG5cclxuICBpZiAoc3RhZmZUYWJsZSkge1xyXG4gICAgc3RhZmZUYWJsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoe3RhcmdldH0pID0+IHtcclxuICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdUb3RhbCA9IHRhcmdldC5jaGVja2VkID8gY2guYWRkKHRhcmdldC52YWx1ZSkgOiBjaC5yZW1vdmUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgIH1cclxuICBcclxuXHJcbiAgY29uc3QgY3JlYXRlQ2hlY2tib3hGaWVsZCA9ICh2YWx1ZSwgY2hlY2tlZCkgPT4geyAgXHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY2VsbCcpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIGlucHV0LmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUNlbGxXaXRoVGV4dCA9IHRleHQgPT4ge1xyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICByZXR1cm4gY2VsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFJvdyA9IHVzZXIgPT4ge1xyXG4gICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIubmFtZSkpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLmNvbGxhcikpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLmVtYWlsKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIucGhvbmVOdW1iZXIpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveEZpZWxkKHVzZXIuaWQsIGNoLmhhc0lkKHVzZXIuaWQudG9TdHJpbmcoKSkpKTtcclxuXHJcbiAgICB1c2Vyc1RhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUmVzdWx0Um93cyA9IHJvd3MgPT4ge1xyXG4gICAgcm93cy5mb3JFYWNoKGFkZFJvdyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaWYgKGxvYWRlcikge1xyXG5cclxuICAgIGNvbnN0IGxvYWRlclBhZ2VTaXplID0gbG9hZGVyLmdldEF0dHJpYnV0ZShcInBhZ2Utc2l6ZVwiKTtcclxuXHJcbiAgICBuZXcgTGF6eUxvYWRlcihsb2FkZXIsIGFzeW5jIGRvbmUgPT4ge1xyXG4gIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIGluZGV4XHJcbiAgICAgICAgY3VycmVudFBhZ2UrKztcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGdldFNlYXJjaEVuZHBvaW50KCk7XHJcblxyXG4gICAgICAgIC8vIERvIHRoZSBzZWFyY2hcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChlbmRwb2ludCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzUmVzdWx0cyA9IHJlc3VsdHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgLy8gV2UgZG9udCBrbm93IGlmIHRoZXJlIHdpbGwgYmUgbW9yZSByZXN1bHRzLCBidXQgaXRzIGxpa2VseSBpZiB3ZSByZXR1cm4gYSBmdWxsIHBhZ2Ugb2YgcmVzdWx0c1xyXG4gICAgICAgIGxldCBtb3JlUmVzdWx0c0xpa2VseSA9IGhhc1Jlc3VsdHM7XHJcbiAgICAgICAgaWYgKGxvYWRlclBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAvLyBXZSBtYXkgbm90IGhhdmUgdGhpcyBhdHRyaWJ1dGUsIGJ1dCBpZiB3ZSBkbyBjaGVjayBpZiB0aGUgcGFnZSBpcyBmdWxsLiBJZiBub3QgdGhlcmUgc2hvdWxkIGJlIG5vIG1vcmUgcmVzdWx0cyB0byBmZXRjaFxyXG4gICAgICAgICAgbW9yZVJlc3VsdHNMaWtlbHkgPSByZXN1bHRzLmxlbmd0aCA9PT0gcGFyc2VJbnQobG9hZGVyUGFnZVNpemUsIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNSZXN1bHRzKSB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYWRkUmVzdWx0Um93cyhyZXN1bHRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbmUobW9yZVJlc3VsdHNMaWtlbHkpOyAgXHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxhenkgbG9hZCBwYWdlICR7Y3VycmVudFBhZ2V9IG9mIEFEIHVzZXJzYCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAvLyBJZ25vcmUgY3VycmVudCBmYWlsZWQgcGFnZSwgc28gd2lsbCB0cnkgYWdhaW5cclxuICAgICAgICBjdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIGRvbmUodHJ1ZSk7IC8vIENhbGwgZG9uZSB3aXRoIG1vcmUgdG8gbG9hZC5cclxuICAgICAgICAvLyBUT0RPOiBXaGF0IHRvIGRvIGhlcmUuIElmIGVucG9pbnQgaXMgZG93biwgd2Ugd291bGQgZ2V0IGxvdHMgb2YgY29uc29sZSBlcnJvcnMgYXQgdGhlIG1vbWVudC4uLi5cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sIHsgZGVidWc6IGZhbHNlLCBwZWVrRGlzdGFuY2U6IDUwIH0pO1xyXG4gIH0gIFxyXG59XHJcbiIsIi8qIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sXHJcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLy8gZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xyXG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3BidG4nKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG5pZiAoYWRkR3JvdXBCdXR0b24pIHtcclxuXHJcbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XHJcblxyXG5pZiAoY2xvc2VTaWRlYmFyKSB7XHJcblxyXG5jbG9zZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xyXG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIC8vIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xyXG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG5cclxuICAgIHZhciBjb250YWN0UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdDb250YWN0QWRkZWQnKTtcclxuICAgIHZhciBPcmdhbmlzYXRpb25QYXJhbSA9IHVybFBhcmFtcy5nZXQoJ09yZ2FuaXNhdGlvbkFkZGVkJyk7XHJcbiAgICB2YXIgTWVzc2FnZVNlbnRQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ01lc3NhZ2VTZW50Jyk7XHJcblxyXG4gICAgdmFyIHNuYWNrYmFyTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGV4aXN0cyBhbmQgaWYgaXQgZG9lc250IHNldHVwIG9iamVjdCByZWFkeSBmb3IgZXZlbnRMaXN0ZW5lclxyXG4gICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW0gIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9IEpTT04ucGFyc2Uoc25hY2tiYXJTdG9yYWdlSXRlbSk7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcclxuICAgICAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgICAvL2lmIGl0IGRvZXMgdGhlbiBoaWRlIHRoZSBzbmFja2JhclxyXG4gICAgICAgICAgICBzbmFja2Jhci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9ucyA6IG5ldyBBcnJheSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWN0UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgY29udGFjdCBoYXMgYmVlbiBjcmVhdGVkJztcclxuXHJcbiAgICB9IGVsc2UgaWYgKE9yZ2FuaXNhdGlvblBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IG9yZ2FuaXNhdGlvbiBoYXMgYmVlbiBjcmVhdGVkJztcclxuICAgIH0gZWxzZSBpZiAoTWVzc2FnZVNlbnRQYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ01lc3NhZ2Ugc2VudCc7XHJcbiAgICB9IGVsc2UgaWYgKHNuYWNrYmFyKSB7XHJcbiAgICAgICAgc25hY2tiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMucHVzaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xyXG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxufSkoXCIjc25hY2tiYXJcIik7XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuXHJcbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcclxuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoXCJ0YWJsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==