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




var DraftMessageDrawer = /*#__PURE__*/function () {
  function DraftMessageDrawer(numberOfRecipients) {
    var totalSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".draft-message-drawer__total";

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DraftMessageDrawer);

    this._totalsElement = document.querySelector(totalSelector);

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
      var highestVisibleYPos = window.scrollY + window.innerHeight;
      var documentHeight = document.body.clientHeight;
      var loadMoreTriggerPos = Math.min(this._loader.offsetTop + this._config.peekDistance, documentHeight);
      var peekPositionVisible = highestVisibleYPos >= loadMoreTriggerPos;
      var shouldLoadMore = peekPositionVisible;

      this._conditionalDebugLog('Doing load more check ...');

      this._conditionalDebugLog({
        'Top position of loader element': this._loader.offsetTop,
        'Config peek distance': this._config.peekDistance,
        'Y co-ordinate when more should be loaded (including peek, constrained to doc height)': loadMoreTriggerPos,
        'Current Y position of scroll': window.scrollY,
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

/***/ "./src/js/Start.js":
/*!*************************!*\
  !*** ./src/js/Start.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Remove the no-js class so we are able to tell that js is enabled
// Useful for hiding elements when js not available.
document.body.classList.remove('no-js');

/***/ }),

/***/ "./src/js/ToggleContent.js":
/*!*********************************!*\
  !*** ./src/js/ToggleContent.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.getElementById('Responses') != null) {
  (function (selector) {
    var responses = document.querySelectorAll('.response-field');
    var keyArray = Object.keys(responses);
    var addResponseButton = document.querySelector("#add_response");
    addResponseButton.addEventListener("click", function (el) {
      el.preventDefault();
      addResponseButton.blur();
      addResponse();
    });
    keyArray.forEach(function (key) {
      responses[key].setAttribute('data-key', key);

      if (responses[key].querySelector("[class~='response-option']").value.length == 0) {
        responses[key].style.display = 'none';
      }

      if (responses[key].querySelector("#remove_response") != null) {
        responses[key].querySelector("#remove_response").addEventListener("click", function (el) {
          el.preventDefault();
          removeResponse(key);
        });
      }
    });

    function validateResponse(key) {
      if (responses[key].querySelector("[class~='response-option']").value.length != 0) {
        addResponse(parseInt(key) + 1);
      }
    }

    function addResponse(key) {
      keyArray.every(function (key) {
        if (responses[key].style.display === 'none') {
          responses[key].style.display = 'block';
          return false;
        }

        return true;
      });
    }

    function removeResponse(key) {
      if (responses[key].style.display === 'block' && responses[key].dataset.key == key) {
        responses[key].parentNode.appendChild(responses[key]);
        responses[key].querySelector("[class~='response-option']").value = '';
        responses[key].style.display = 'none';
        return false;
      }
    }
  })("#Responses");
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
      if (!menu.contains(e.target)) {
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
/* harmony import */ var _IdCookieHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdCookieHelper */ "./src/js/IdCookieHelper.js");
/* harmony import */ var _SelectListTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SelectListTags */ "./src/js/SelectListTags.js");
/* 
    This script is specific to the staff compose page.
*/


var main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-compose')) {
  var ch = new _IdCookieHelper__WEBPACK_IMPORTED_MODULE_0__["default"]('CourierMessageUserIds');

  var onUpdateFunc = function onUpdateFunc(selectedOptions, allOptions) {
    ch.setIds(selectedOptions.map(function (x) {
      return x.value;
    }));
  };

  new _SelectListTags__WEBPACK_IMPORTED_MODULE_1__["default"]('AscStaffSelector', null, onUpdateFunc);
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

  var getSearchEndpoint = function getSearchEndpoint() {
    return "https://<<SOME_URL>>/ad-staff?page=".concat(currentPage);
  }; // Add listeners for the checkboxes


  document.getElementById('table-select-staff').addEventListener('change', function (_ref) {
    var target = _ref.target;

    if (target.matches('input[type=checkbox]')) {
      var newTotal = target.checked ? ch.add(target.value) : ch.remove(target.value);
      dmd.update(newTotal);
    }
  });

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
    newRow.appendChild(createCellWithText('PUT NAME HERE FROM USER'));
    newRow.appendChild(createCellWithText('PUT COLLAR HERE FROM USER'));
    newRow.appendChild(createCellWithText('PUT EMAIL HERE FROM USER'));
    newRow.appendChild(createCellWithText('PUT PHONE HERE FROM USER'));
    newRow.appendChild(createCheckboxField('PUT COLLAR HERE', ch.hasId('PUT COLLAR HERE')));
    usersTableBody.append(newRow);
  };

  var addResultRows = function addResultRows(rows) {
    rows.forEach(addRow);
  };

  if (loader) {
    new _LazyLoader__WEBPACK_IMPORTED_MODULE_4__["default"](loader, /*#__PURE__*/function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(done) {
        var endpoint, response, results, hasResults;
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
                hasResults = results.length > 0;

                if (hasResults) {
                  addResultRows(results);
                }

                done(hasResults);
                _context.next = 20;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                console.error("Failed to lazy load page ".concat(currentPage, " of AD users"));
                console.error(_context.t0); // Ignore current failed page, so will try again

                currentPage--;
                done(true); // Call done with more to load.
                // TODO: What to do here. If enpoint is down, we would get lots of console errors at the moment....

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
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
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/Start.js ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/SelectListTags.js ./src/js/pages/SelectStaffForMessage.js ./src/js/pages/ComposeStaffMessage.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
module.exports = __webpack_require__(/*! ./src/js/pages/ComposeStaffMessage.js */"./src/js/pages/ComposeStaffMessage.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9MYXp5TG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWVBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlbGVjdExpc3RUYWdzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db21wb3NlU3RhZmZNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9TZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJsZXMuanMiXSwibmFtZXMiOlsiQm90dG9tRHJhd2VyIiwiX29wZW5DbGFzcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwiRHJhZnRNZXNzYWdlRHJhd2VyIiwibnVtYmVyT2ZSZWNpcGllbnRzIiwidG90YWxTZWxlY3RvciIsIl90b3RhbHNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwiX2JvdHRvbURyYXdlciIsInVwZGF0ZSIsImlubmVyVGV4dCIsInNob3ciLCJoaWRlIiwiZ3JvdXBFeGlzdCIsImdldEVsZW1lbnRCeUlkIiwidXNlQ2hlY2tib3hlcyIsImhhc0F0dHJpYnV0ZSIsInVzZVNpbmdsZVNlbGVjdENoZWNrYm94IiwibG9ja1Jvb3ROb2RlIiwic2VsZWN0b3IiLCJpbnRpYWxseVNlbGVjdGVkTm9kZXMiLCJncm91cFNlbGVjdCIsImdyb3VwVGV4dGFyZWEiLCJwYXJlbnRFbGVtZW50Iiwic2VsZWN0ZWRPcHRpb25zTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInB1c2giLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsInBhdGhUb1VuY2hlY2siLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiY2JTZWxlY3RvciIsImNoZWNib3hUb1VuY2hlY2siLCJjbGljayIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImJ1aWxkQ2hlY2tib3giLCJwYXJlbnRDaGVja2VkIiwiY2hlY2tib3giLCJ0eXBlIiwic2V0QXR0cmlidXRlIiwibmFtZSIsImlkIiwibmV3UGFyZW50U2VsZWN0ZWQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsImxhYmVsIiwiY2hlY2tTcGFuIiwiYm9yZGVyU3BhbiIsImFwcGVuZENoaWxkIiwiYnVpbGRDaGVja2JveExhYmVsIiwiY2hlY2tib3hMYWJlbCIsImlubmVySFRNTCIsImZvciIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwicGFyZW50Tm9kZSIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkQ2hlY2tib3hlcyIsImhpZGRlbkZpZWxkIiwic3RydWN0dXJlIiwib3B0aW9uX2kiLCJvcHRpb24iLCJzZWdtZW50cyIsInNwbGl0Iiwibm9kZVRvQ2hlY2siLCJzZWdtZW50X2kiLCJzZWciLCJ0cmVlQ29udGFpbmVyIiwiYWN0aXZlQ2hpbGRyZW4iLCJhY19pIiwiYWN0aXZlQ2hpbGQiLCJkaXNwbGF5Q2hpbGRLZXlzIiwiY3VyclRleHQiLCJjdXJyUGF0aCIsIm9iaiIsImVsZW1lbnRUb0FkZFRvIiwibGV2ZWwiLCJwYXJlbnRzQ2hlY2tlZCIsImNoaWxkS2V5cyIsIk9iamVjdCIsImtleXMiLCJwYXJlbnRDaGVja2VkU3RhdGUiLCJjaGlsZExpc3RJdGVtIiwiY2hpbGRMaXN0IiwiY2tfaSIsImNoaWxkS2V5IiwicmVwbGFjZUNoaWxkIiwiSWRDb29raWVIZWxwZXIiLCJfbmFtZSIsIl9pZHMiLCJTZXQiLCJfaW5pdGlhbGlzZSIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3BlcnNpc3QiLCJtYXRjaGluZ1ZhbHVlVG9TcGxpdCIsImZpbHRlciIsImlkcyIsImdldElkcyIsImpvaW5lZElkcyIsImpvaW4iLCJuZXdDb29raWUiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJzaXplIiwiZGVsZXRlIiwiaGFzIiwiQ291cmllckxhenlMb2FkZXIiLCJsb2FkZXJFbGVtZW50IiwibG9hZGVyRm4iLCJjb25maWdPYmoiLCJjb25maWdEZWZhdWx0cyIsImxvYWRlckNsYXNzIiwibG9hZGVyTG9hZGluZ0NsYXNzIiwiZGVib3VuY2VNcyIsInBlZWtEaXN0YW5jZSIsImRlYnVnIiwiX2xvYWRlciIsIl9sb2FkZXJGdW5jIiwiX2NvbmZpZyIsIl9oYXNMaXN0ZW5lcnNBZGRlZCIsIl9sYXp5TG9hZENoZWNrIiwiZGVib3VuY2UiLCJfZG9Mb2FkTW9yZUNoZWNrIiwiX2NvbmRpdGlvbmFsRGVidWdMb2ciLCJfc3RvcExpc3RlbmluZyIsIl9kb25lU2VhcmNoaW5nIiwiX3N0YXJ0TGlzdGVuaW5nIiwiYmluZCIsInZpc2libGUiLCJtb3JlVG9Mb2FkIiwiX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b0RlYnVnIiwibG9nZ2VyRnVuYyIsImNvbnNvbGUiLCJsb2ciLCJoaWdoZXN0VmlzaWJsZVlQb3MiLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImxvYWRNb3JlVHJpZ2dlclBvcyIsIk1hdGgiLCJtaW4iLCJvZmZzZXRUb3AiLCJwZWVrUG9zaXRpb25WaXNpYmxlIiwic2hvdWxkTG9hZE1vcmUiLCJ0YWJsZSIsInNob3dNb3JlVGFibGVCdXR0b25zIiwiZm9yRWFjaCIsInNob3dBbGxCdXR0b24iLCJ0YWJsZUlkIiwiZGVmYXVsdEl0ZW1MaW1pdCIsInBhc3NlZEl0ZW1MaW1pdCIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwibGltaXRUb1VzZSIsImlzTmFOIiwidGFibGVCb2R5IiwidEJvZGllcyIsInRhYmxlQm9keUxlbmd0aCIsInJvd3MiLCJib2R5Um93Iiwic3R5bGUiLCJkaXNwbGF5IiwiZWwiLCJTZWxlY3RMaXN0VGFncyIsInNlbGVjdElkIiwicmV2ZXJ0R3JvdXBzSWQiLCJvblVwZGF0ZUZ1bmMiLCJ0YWdPcHRpb25zIiwicmV2ZXJ0QnRuIiwibyIsInBvcHVsYXRlVGFncyIsImFsbE9wdGlvbnMiLCJzb21lIiwidGFncyIsInRhcmdldFZhbCIsImRhdGFzZXQiLCJ2YWwiLCJhZnRlciIsInNlbGVjdGVkT3B0aW9ucyIsInQiLCJtYWtlVGFnIiwidGFnIiwiY3JlYXRlVGV4dE5vZGUiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsInJlc3BvbnNlcyIsImtleUFycmF5IiwiYWRkUmVzcG9uc2VCdXR0b24iLCJibHVyIiwiYWRkUmVzcG9uc2UiLCJyZW1vdmVSZXNwb25zZSIsInZhbGlkYXRlUmVzcG9uc2UiLCJldmVyeSIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNsb3Nlc3QiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm1lbnUiLCJtZW51QnV0dG9uIiwibWVudUNoaWxkIiwibWFpbiIsImNoIiwic2V0SWRzIiwieCIsImRtZCIsImxvYWRlciIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJuZXdUb3RhbCIsImNyZWF0ZUNoZWNrYm94RmllbGQiLCJjZWxsIiwiaW5wdXQiLCJjcmVhdGVDZWxsV2l0aFRleHQiLCJhZGRSb3ciLCJ1c2VyIiwibmV3Um93IiwiaGFzSWQiLCJhcHBlbmQiLCJhZGRSZXN1bHRSb3dzIiwiTGF6eUxvYWRlciIsImRvbmUiLCJlbmRwb2ludCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0cyIsImhhc1Jlc3VsdHMiLCJlcnJvciIsIm9uY2xpY2siLCJldmVudCIsImRyb3Bkb3ducyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvcGVuRHJvcGRvd24iLCJ0b2dnbGVTaWRlYmFyIiwiY2xvc2VTaWRlYmFyIiwieSIsInNuYWNrYmFyU3RvcmFnZUl0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic25hY2tiYXIiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImNvbnRhY3RQYXJhbSIsImdldCIsIk9yZ2FuaXNhdGlvblBhcmFtIiwiTWVzc2FnZVNlbnRQYXJhbSIsInNuYWNrYmFyTWVzc2FnZSIsInNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSIsIkpTT04iLCJwYXJzZSIsImxvY2F0aW9ucyIsImluY2x1ZGVzIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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UyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTNE0sRUFBVCxFQUFhO0FBRTVDLFVBQUksQ0FBQzJHLHdCQUF3QixDQUFDRyxTQUF6QixDQUFtQ0MsUUFBbkMsQ0FBNEM3UyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JNLFFBQTVELENBQUwsRUFBNEU7QUFFeEVrUyxnQ0FBd0IsQ0FBQ0csU0FBekIsQ0FBbUM1VCxJQUFuQyxDQUF3Q2dCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQk0sUUFBeEQ7QUFDQVAsY0FBTSxDQUFDNlIsWUFBUCxDQUFvQmlCLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDSixJQUFJLENBQUNLLFNBQUwsQ0FBZU4sd0JBQWYsQ0FBeEM7QUFFSDtBQUNKLEtBUkQ7QUFTSDs7QUFFRCxNQUFJRCxlQUFKLEVBQXFCO0FBQ2pCVCxZQUFRLENBQUM3VSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixrQkFBdkI7QUFDQTRVLFlBQVEsQ0FBQ25QLFNBQVQsR0FBcUI0UCxlQUFyQjtBQUVBdEQsY0FBVSxDQUFDLFlBQVU7QUFDakI2QyxjQUFRLENBQUM3VSxTQUFULENBQW1CRSxNQUFuQixDQUEwQixrQkFBMUI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUFFSixDQTVERCxFQTRERyxXQTVESCxFOzs7Ozs7Ozs7OztBQ0ZBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZSIsImZpbGUiOiJkaXN0L2pzL3NjcmlwdHMuZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qXHJcbiBDbGFzcyB0aGF0IGZhY2lsaXRhdGUgdGhlIGhpZGluZyBhbmQgc2hvd2luZyBvZiB0aGUgYm90dG9tIGJhci5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX29wZW5DbGFzcyA9IFwiYm90dG9tLWRyYXdlci1vcGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT3BlbigpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgQm90dG9tRHJhd2VyIGZyb20gJy4vQm90dG9tRHJhd2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0TWVzc2FnZURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlJlY2lwaWVudHMsIHRvdGFsU2VsZWN0b3I9XCIuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RvdGFsXCIpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b3RhbFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3RvdGFsc0VsZW1lbnQpIHsgdGhyb3cgRXJyb3IoYE5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHBhc3NlZCBpbiBzZWxlY3RvciAke3RvdGFsU2VsZWN0b3J9YCk7IH1cclxuICAgICAgICB0aGlzLl9ib3R0b21EcmF3ZXIgPSBuZXcgQm90dG9tRHJhd2VyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgdXBkYXRlKG51bWJlck9mUmVjaXBpZW50cykge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQuaW5uZXJUZXh0ID0gbnVtYmVyT2ZSZWNpcGllbnRzO1xyXG4gICAgICAgIG51bWJlck9mUmVjaXBpZW50cyA/IHRoaXMuX2JvdHRvbURyYXdlci5zaG93KCkgOiB0aGlzLl9ib3R0b21EcmF3ZXIuaGlkZSgpO1xyXG4gICAgfVxyXG59IiwiIHZhciBncm91cEV4aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFwiKTtcclxuICAgIGlmKGdyb3VwRXhpc3Qpe1xyXG5cclxuICAgICAgICB2YXIgdXNlQ2hlY2tib3hlcyA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtY2hlY2tib3gnKTtcclxuICAgICAgICB2YXIgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLXNpbmdsZS1zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgICB2YXIgbG9ja1Jvb3ROb2RlID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9jay1yb290Jyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgIC8vQ2hlY2sgb24gcGFnZSB3aGV0aGVyIEdyb3VwIE11bHRpIFNlbGVjdCBleGlzdHNcclxuICAgIHZhciBpbnRpYWxseVNlbGVjdGVkTm9kZXMgPSBbXTtcclxuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBTZWxlY3RvclwiKTtcclxuICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuICAgIC8vIElmIHRoZSBHcm91cCBNdWx0aSBTZWxlY3QgZG9lcyBleGlzdCwgaGlkZSBpdCAoaWYgSlMgZW5hYmxlZClcclxuICAgIGlmIChncm91cFNlbGVjdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGdyb3VwU2VsZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICBncm91cFRleHRhcmVhLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgLy8gR3JhYiBhbGwgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkXHJcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uc05vZGVzID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE9wdGlvbnNOb2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgaW50aWFsbHlTZWxlY3RlZE5vZGVzLnB1c2goc2VsZWN0ZWRPcHRpb25zTm9kZXNbaV0udmFsdWUgfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudGFnPi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoVG9VbmNoZWNrID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGF0aFwiKS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2JTZWxlY3RvciA9ICdpbnB1dFt0eXBlPWNoZWNrYm94XS5Hcm91cEl0ZW1bdmFsdWU9XCInK3BhdGhUb1VuY2hlY2srJ1wiXSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2JveFRvVW5jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2JTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2JveFRvVW5jaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNib3hUb1VuY2hlY2suY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWFyY2hQYXJ0cyA9IChmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xyXG4gICAgICAgIHZhciB2YXJzID0ge307XHJcbiAgICAgICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCBmdW5jdGlvbihtLGtleSx2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2dyb3VwPVwiO1xyXG4gICAgdmFyIGdyb3VwUGFyYW0gPSBzZWFyY2hQYXJ0cy5ncm91cDtcclxuICAgIHZhciBzZWFyY2hQYXJhbSA9IHNlYXJjaFBhcnRzLlNlYXJjaDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBidWlsZCB0aGUgcGF0aFxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVBhdGhGb3JHcm91cChncm91cCkge1xyXG4gICAgICB2YXIgZ3JwID0gZ3JvdXAgPT09IFwiXCIgPyBcIlxcXFxcIiA6IGdyb3VwO1xyXG4gICAgICByZXR1cm4gcGFnZVBhdGggKyBncnA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkIHNob3VsZCBiZSBvcGVuIGkuZS4gdG8gcmV2ZWFsIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIHNob3VsZFBhcmVudEJlT3BlbihwYXRoKSB7XHJcbiAgICAgICAgaWYgKCFncm91cFBhcmFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggKyBcIlxcXFxcIik7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwUGFyYW0uc3RhcnRzV2l0aChwYXRoVG9DaGVjaykgJiYgZ3JvdXBQYXJhbSAhPSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGRlZCBpcyB0aGUgY3VycmVudGx5U2VsZWN0ZWRHcm91cFxyXG4gICAgZnVuY3Rpb24gaXNTZWxlY3RlZEdyb3VwKHBhdGgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zVG9DaGVjayA9IGRlY29kZVVSSUNvbXBvbmVudChncm91cFBhcmFtIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCB8fCBcIlxcXFxcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXNUb0NoZWNrID09PSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgbGluayBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZExpbmsodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgbGluay5ocmVmID0gZ2V0UGFnZVBhdGhGb3JHcm91cChwYXRoKTtcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlua1wiKTtcclxuXHJcbiAgICAgICAgLy8gTkIuICBPcmlnaW5hbGx5IHdlIGRpZG50IHdhbnQgdGhlIGN1cnJlbnQgY2xhc3MgdG8gYmUgYWRkZWQgaWYgZG9pbmcgYSBzZWFyY2gsIGJ1dCB0aGluayB3ZSBkbyBub3cuXHJcbiAgICAgICAgLy8gaWYgKCghc2VhcmNoUGFyYW0pICYmICBpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcclxuICAgICAgICAvLyBpZiAoaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XHJcbiAgICAgICAgLy8gICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gbGluaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggbGFiZWwgZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiR3JvdXBJdGVtXCIpO1xyXG4gICAgICAgIGNoZWNrYm94Lm5hbWUgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94LnZhbHVlID0gcGF0aDtcclxuICAgICAgICBjaGVja2JveC5pZCA9IHRleHQ7XHJcbiAgICAgICAgdmFyIG5ld1BhcmVudFNlbGVjdGVkID0gcGFyZW50Q2hlY2tlZDtcclxuXHJcbiAgICAgICAgaWYgKHBhdGggPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGRpc2FibGVkIGFuZCBjaGVja2VkIEJVVCB0aGUgY2hpbGRyZW4gb2YgdGhpcyBub2RlIHNob3VsZCBhY3QgYXMgdGhvdWdoIGl0IGlzbnQgY2hlY2tlZCBzbyB3ZSBkb250IHVwZGF0ZSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENoZWNrZWQgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYWxsIGl0cyBjaGlsZHJlbiBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgbm90IGNoZWNrZWQgaXRzIGNoaWxkcmVuIHNlbGVjdGVkIHN0YXRlIGRlcGVuZCBvbiB0aGUgY2hpbGRzIHZhbHVlLCBhbmQgbm90IGJlIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHZhciBuZXdDaGVja2VkID0gaW50aWFsbHlTZWxlY3RlZE5vZGVzLmluZGV4T2YocGF0aCB8fCAnXFxcXCcpID49IDA7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgICAgICBuZXdQYXJlbnRTZWxlY3RlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdHlsZSBhcyBhIHJhZGlvIGJ1dHRvblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjaGVja1NwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2NoZWNrJyk7XHJcbiAgICAgICAgICAgIHZhciBib3JkZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19ib3JkZXInKTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tTcGFuKTtcclxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoYm9yZGVyU3Bhbik7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19pbnB1dCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveCA9IGxhYmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtjaGVja2JveCwgbmV3UGFyZW50U2VsZWN0ZWR9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjaGVja2JveExhYmVsLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5mb3IgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2tib3hMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFuc2ZlclZhbHVlcygpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgZWxlbXM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Hcm91cEl0ZW0nKVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8ZWxlbXMubGVuZ3RoO2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb2NrUm9vdE5vZGUgJiYgIShlbGVtc1tpXS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOby1vcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbXNbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChlbGVtc1tpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSkge1xyXG5cclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcbiAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR3JvdXBTZWxlY3RvcicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nT3B0aW9uVmFsdWVzID0gQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfaSA9IDA7IGRhdGFfaSA8IGRhdGEubGVuZ3RoOyBkYXRhX2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9jdXJyZW50ID0gZGF0YVtkYXRhX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj5BbGwgQ29udGFjdCBHcm91cHM8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+JyArIGRhdGFfY3VycmVudC5zdWJzdHJpbmcoMSkgKyAnPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgb3B0aW9uIGV4aXN0cyAtIGFkZCBpdCBpZiBub3RcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ09wdGlvblZhbHVlcy5pbmRleE9mKGRhdGFfY3VycmVudCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gZGF0YV9jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhX2N1cnJlbnQ7XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uc1tpXS5zZWxlY3RlZCA9IGRhdGEuaW5kZXhPZihlbGVtZW50Lm9wdGlvbnNbaV0udmFsdWUpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKHBhcmVudCwgdGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIGlmICh1c2VDaGVja2JveGVzIHx8IHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCB0aGUgYmxhbmsgdmFsdWUgZm9yICdBbGwgQ29udGFjdCBHcm91cHMnXHJcbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXFxcXFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRDaGVja2JveExhYmVsKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrYm94UmVzdWx0ID0gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKTtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmNoZWNrYm94KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94UmVzdWx0Lm5ld1BhcmVudFNlbGVjdGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGluayB0byByZWZyZXNoIHBhZ2Ugd2l0aCBzZWxlY3RlZCBub2RlLlxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRMaW5rKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudENoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY3VycmVudCwgY2hpbGRyZW4sIHVwZGF0ZXJGbikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRMb29wQ2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMb29wQ2hpbGQgIT09IGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZXJGbihjdXJyZW50TG9vcENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKGUsIGNoZWNrYm94KSB7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRMaSA9IGNoZWNrYm94LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gY2Fubm90IGJlIGRlc2VsZXRlZC5cclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbGxHcm91cENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGFsbEdyb3VwQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXJlbnRMaS5jbGFzc0xpc3QuY29udGFpbnMoJ2dyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50Jykpe1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjaGlsZENoZWNrYm94ZXMgPSBwYXJlbnRMaS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JhYiB0aGUgc2VsZWN0IGxpc3QgYW5kIGFsbCBvZiBpdHMgb3B0aW9uc1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcblxyXG4gICAgdmFyIGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZ3JvdXBQYXJhbSB8fCAnXFxcXCc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGNvbGxlY3Rpb25zIHdpdGggc3RhcnRpbmcga2V5IGZvciB0aGUgcm9vdC5cclxuICAgIHZhciBzdHJ1Y3R1cmUgPSB7IFwiXFxcXFwiOiB7fSB9O1xyXG5cclxuICAgIC8vIEJ1aWxkIG9uIHRoZSBiYXNlIHN0cnVjdHVyZSBieSBsb29waW5nIHRocm91Z2ggZWFjaCBzZWxlY3QgaXRlbS5cclxuICAgIGZvciAodmFyIG9wdGlvbl9pPTA7IG9wdGlvbl9pPG9wdGlvbnMubGVuZ3RoOyBvcHRpb25faSsrKSB7XHJcblxyXG4gICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW29wdGlvbl9pXTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSB0aGUgZ3JvdXAgbmFtZSBpbnRvIGFsbCBpdHMgcGF0aCBzZWdtZW50c1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBvcHRpb24udGV4dENvbnRlbnQuc3BsaXQoXCJcXFxcXCIpO1xyXG4gICAgICAgICAgICAvLyBTdGFydCBhdCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgbm9kZVRvQ2hlY2sgPSBzdHJ1Y3R1cmVbXCJcXFxcXCJdO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yIGVhY2ggc2VnbWVudCBlbnN1cmUgdGhhdCBhbGwgbGV2ZWxzIG9mIHRoZSBzdHJ1Y3R1cmUgYXJlIGluIHBsYWNlLlxyXG4gICAgICAgICAgICBmb3IgKHZhciBzZWdtZW50X2k9MDsgc2VnbWVudF9pPHNlZ21lbnRzLmxlbmd0aDsgc2VnbWVudF9pKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnID0gc2VnbWVudHNbc2VnbWVudF9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VnICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlVG9DaGVja1tzZWddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrW3NlZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2sgPSBub2RlVG9DaGVja1tzZWddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBiYXNlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHBvcHVsYXRlZFxyXG4gICAgdmFyIHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0LS1yb290XCIpO1xyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgYWxsIHRoZSBjbGlja3MgYXQgdGhlIHBhcmVudCBsZXZlbFxyXG4gICAgdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjaGVja2JveCBpdGVtcyBiZWluZyBzZWxlY3RlZC5cclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljayhlLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgLy8gV2Ugb25seSBjYXJlIGFib3V0IGNsaWNrcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBwYXJlbnRzXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuIG9wZW4gcGFyZW50IGl0ZW0gaXMgY2xpY2tlZCwgY2xvc2UgaXQsIGJ1dCBhbHNvIGFsbCBpdHMgb3BlbiBkZXNjZW5kYW50cy5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZHJlbiA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYWNfaT0wOyBhY19pPGFjdGl2ZUNoaWxkcmVuLmxlbmd0aDsgYWNfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gYWN0aXZlQ2hpbGRyZW5bYWNfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9wZW4gYW55IGNsb3NlZCBwYXJlbnRzIHRoYXQgYXJlIGNsaWNrZWQuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGJ1aWxkcyB0aGUgc2VsZWN0IGxpc3QgZnJvbSB0aGUgcHJldmlvdXMgbm9kZSBzdHJ1Y3R1cmUuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNoaWxkS2V5cyhjdXJyVGV4dCwgY3VyclBhdGgsIG9iaiwgZWxlbWVudFRvQWRkVG8sIGxldmVsLCBwYXJlbnRzQ2hlY2tlZCkge1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudENoZWNrZWRTdGF0ZSA9IHBhcmVudHNDaGVja2VkO1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICghdXNlQ2hlY2tib3hlcyAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggJiYgaXNTZWxlY3RlZEdyb3VwKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgY3VycmVudCBzdGF0ZSB3aGVuIGluIHRoZSAnbGluayBtb2RlJ1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWN1cnJlbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoaWxkS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhdCB0aGUgYm90dG9tIG9mIGEgYnJhbmNoIGkuZS4gbm8gY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGlzIG5vZGUgaGFzIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHNob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3QuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0XCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBDYWxsIHJlY3Vyc2l2ZWx5IHdpdGggdXBkYXRlZCBwYXJhbXMgZm9yIGVhY2ggY2hpbGQgbm9kZVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgY2tfaT0wOyBja19pIDwgY2hpbGRLZXlzLmxlbmd0aDsgY2tfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRLZXkgPSBjaGlsZEtleXNbY2tfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkS2V5ICE9PSAnQWxsIGNvbnRhY3RzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDaGlsZEtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtjaGlsZEtleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzdGFydGluZyBhdCB0aGUgcm9vdC5cclxuICAgIGRpc3BsYXlDaGlsZEtleXMoXCJBbGwgQ29udGFjdCBHcm91cHNcIiwgXCJcIiwgc3RydWN0dXJlW1wiXFxcXFwiXSwgdHJlZUNvbnRhaW5lciwgMSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgdGhlIHNlbGVjdCBsaXN0IHdpdGggdGhlIG5ldyB0cmVlXHJcbiAgICBncm91cFNlbGVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0cmVlQ29udGFpbmVyLCBncm91cFNlbGVjdCk7XHJcblxyXG4gICAgdHJlZUNvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcclxuXHJcbiAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxufSkoXCIjR3JvdXBcIiwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpO1xyXG59XHJcbiIsIi8vIFN0b3JlIGEgdW5pcXVlIHNldCBvZiBpZHMgaW5zaWRlIGEgY29va2llXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkQ29va2llSGVscGVye1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5faWRzID0gbmV3IFNldCh0aGlzLl9pbml0aWFsaXNlKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBQb3B1bGF0ZSBzdGFydCBpZHMsIGluaXRpYWxpc2VzIGNvb2tpZSBpZiBub3QgcHJlc2VudFxyXG4gICAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGRvY3VtZW50LmNvb2tpZTtcclxuXHJcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWVTdHJpbmcuc3BsaXQoJzsgJyk7XHJcbiAgICAgIGNvbnN0IG1hdGNoaW5nQ29va2llID0gY29va2llcy5maW5kKGMgPT4gYy5zdGFydHNXaXRoKGAke3RoaXMuX25hbWV9PWApKTtcclxuXHJcbiAgICAgIGlmICghbWF0Y2hpbmdDb29raWUpIHsgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLl9wZXJzaXN0KFtdKTsgICBcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWF0Y2hpbmdWYWx1ZVRvU3BsaXQgPSBtYXRjaGluZ0Nvb2tpZS5zcGxpdCgnPScpWzFdO1xyXG4gICAgICByZXR1cm4gbWF0Y2hpbmdWYWx1ZVRvU3BsaXQuc3BsaXQoJ3wnKS5maWx0ZXIoaSA9PiBpKTsgICAvLyBTcGxpdCBhbmQgcmVtb3ZlIGVtcHR5IHZhbHVlc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTYXZlIHRoZSBuZXcgaWRzIHRvIHRoZSBjb29raWUgYWZ0ZXIgdXBkYXRlXHJcbiAgICBfdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBpZHMgPSB0aGlzLmdldElkcygpO1xyXG4gICAgICB0aGlzLl9wZXJzaXN0KGlkcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNhdmUgdGhlIHBhc3NlZCBpbiBpZHMgdG8gdGhlIGNvb2tpZVxyXG4gICAgX3BlcnNpc3QoaWRzKSB7ICAgIFxyXG4gICAgICBjb25zdCBqb2luZWRJZHMgPSBpZHMuam9pbignfCcpO1xyXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgY29va2llIGNvbnRhaW5pbmcgc2VsZWN0ZWQgaWRzLiAgU2V0IHRvIHNhbWUgc2l0ZSBzdHJpY3QgYW5kIHBhdGggdG8gcm9vdFxyXG4gICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2pvaW5lZElkc307IHBhdGg9Lzsgc2FtZXNpdGU9U3RyaWN0YFxyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNldCBhbGwgdGhlIGlkcyBpbiBvbmUgaGl0LiBSZXR1cm5zIHRoZSBuZXcgY291bnQuXHJcbiAgICBzZXRJZHMoaWRzID0gW10pIHtcclxuICAgICAgdGhpcy5faWRzID0gbmV3IFNldChpZHMpO1xyXG4gICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm5zIHRoZSBjb3VudCBvZiBpdGVtcyBpbiB0aGUgc2VsZWN0aW9uLlxyXG4gICAgZ2V0SWRzKCkge1xyXG4gICAgICBjb25zdCBpZHMgPSBBcnJheS5mcm9tKHRoaXMuX2lkcylcclxuICAgICAgcmV0dXJuIGlkcztcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaWRzIGN1cnJlbnRseSBpbiB0aGUgc2V0LlxyXG4gICAgZ2V0Q291bnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pZHMuc2l6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmVtb3ZlIG9uZSBvciBtb3JlIGlkcy4gUmV0dXJuIHRoZSBuZXcgY291bnRcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICB0aGlzLl9pZHMuZGVsZXRlKGlkKTsgICAgICBcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbmUgb3IgbW9yZSBpZHMuIFJldHVybnMgdGhlIG5ldyBjb3VudFxyXG4gICAgYWRkKGlkKSB7XHJcbiAgICAgIHRoaXMuX2lkcy5hZGQoaWQpO1xyXG4gICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEb2VzIHRoZSBzZXQgY29udGFpbiB0aGUgcGFzc2VkIGluIGFycmF5IGl0ZW0uXHJcbiAgICBoYXNJZChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZHMuaGFzKGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG4vKipcclxuICBDbGFzcyB0byBtYW5hZ2UgdGhlIGxvYWQgb24gc2Nyb2xsIGZ1bmN0aW9uYWxpdHkgZm9yIGEgcGFnZS5cclxuICBXaGVuIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBzZXJ2ZXIgc2lkZSBpdCBzaG91bGQgaGlkZSB0aGUgbG9hZGVyIGVsZW1lbnQgaWYgbm8gbW9yZSByZXN1bHRzIHRvIGxvYWQuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJpZXJMYXp5TG9hZGVyIHtcclxuICBcclxuICAvKipcclxuICAgIENvbnN0cnVjdG9yXHJcbiAgICBQYXJhbXNcclxuICAgICAtIGxvYWRlckVsZW1lbnQgKHJlcXVpcmVkKTogVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGxvYWRlclxyXG4gICAgIC0gbG9hZGVyRm4gKHJlcXVpcmVkKTogVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byBsb2FkIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cy4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3aWxsIGJlIHBhc3NlZCBhIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uIHdpdGggYSBib29sIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXRoZXIgb3Igbm90IHRoZXJlIGFyZSBtb3JlIGl0ZW1zIHRvIGxvYWQuXHJcbiAgICAgLSBjb25maWdPYmogKG9wdGlvbmFsKTogIEFuIG9iamVjdCB3aG9zZSBrZXkgYW5kIHZhbHVlcyB3aWxsIG92ZXJyaWRlIGRlZmF1bHQgY29uZmlnIHNldHRpbmdzLlxyXG4gICovICAgICAgICAgICAgICAgICAgICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgbG9hZGVyRWxlbWVudCwgXHJcbiAgICAgIGxvYWRlckZuLCBcclxuICAgICAgY29uZmlnT2JqID0ge31cclxuICApIHtcclxuICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICBEZWZhdWx0IGNvbmZpZyBzZXR0aW5nc1xyXG4gICAgKi9cclxuICAgIGNvbnN0IGNvbmZpZ0RlZmF1bHRzID0ge1xyXG4gICAgICBsb2FkZXJDbGFzczogJ2xvYWRlcicsICAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50XHJcbiAgICAgIGxvYWRlckxvYWRpbmdDbGFzczogJ2xvYWRlci0tbG9hZGluZycsIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnQgd2hlbiBzZWFyY2hpbmdcclxuICAgICAgZGVib3VuY2VNczogMTAwLCAvLyBob3cgbG9uZyB0byB3YWl0IGJldHdlZW4gZXZlbnRzIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgcGVla0Rpc3RhbmNlOiAwLCAvLyBob3cgbXVjaCBvZiBsb2FkaW5nIGVsZW1lbnQgc2hvdWxkIGJlIG9uIHNjcmVuIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgZGVidWc6IGZhbHNlICAvLyB3aGV0aGVyIG9yIG5vdCB0byBsb2cgZGVidWcgaW5mbyB0byBjb25zb2xlLlxyXG4gICAgfTtcclxuICAgICAgICBcclxuICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlckVsZW1lbnQ7XHJcbiAgICB0aGlzLl9sb2FkZXJGdW5jID0gbG9hZGVyRm47XHJcbiAgICAgICAgXHJcbiAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdHMgYW5kIHBhc3NlZCBpbiBjb25maWdcclxuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnRGVmYXVsdHMsIC4uLmNvbmZpZ09iaiB9O1xyXG4gICAgXHJcbiAgICAvLyBUcmFjayB3aGV0aGVyIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQgb3IgcmVtb3ZlZFxyXG4gICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgXHJcbiAgICBpZiAoIXRoaXMuX2xvYWRlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ051bGwgbG9hZGVyIGVsZW1lbnQgcHJvdmlkZWQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIG9uIHRoZSBsb2FkZXJzIGNsYXNzIGZyb20gdGhlIGNvbmZpZ1xyXG4gICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmxvYWRlckNsYXNzKTtcclxuICAgIFxyXG4gICAgLy8gRGVib3VuY2UgdGhlIGNoZWNrXHJcbiAgICB0aGlzLl9sYXp5TG9hZENoZWNrID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLl9kb0xvYWRNb3JlQ2hlY2soKSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0NhbGxpbmcgbG9hZCBtb3JlIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fc3RvcExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlYXJjaCBmdW5jdGlvbiAmIHBhc3MgaW4gdGhlIGRvbmUgc2VhcmNoaW5nIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyRnVuYyh0aGlzLl9kb25lU2VhcmNoaW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdOb3QgcmVhZHkgdG8gcmVsb2FkIHlldCcpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLl9jb25maWcuZGVib3VuY2VNcyk7XHJcbiAgICBcclxuICAgIC8vIEFkZCB0aGUgZXZlbnRzIChhbHNvIGRvZXMgaW5pdGlhbCBjaGVjaylcclxuICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9kb25lU2VhcmNoaW5nID0gdGhpcy5fZG9uZVNlYXJjaGluZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBcclxuICBfc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KHZpc2libGUpIHtcclxuICAgIGlmKHZpc2libGUpIHtcclxuICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBoYW5ka2xlIHJlc3VsdHMgY29taW5nIGJhY2sgaW5cclxuICBfZG9uZVNlYXJjaGluZyhtb3JlVG9Mb2FkKSB7XHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKGBfZG9uZVNlYXJjaGluZyBjYWxsYmFjayBjYWxsZWQgd2l0aCBtb3JlIHRvIGxvYWQgJHttb3JlVG9Mb2FkfWApO1xyXG4gICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcykgXHJcbiAgICBpZiAobW9yZVRvTG9hZCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdBbGwgZG9uZSAtIGhpZGluZyBsb2FkZXIgZWxlbWVudCcpO1xyXG4gICAgICB0aGlzLl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBXaXJlIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgZG8gaW5pdGlhbCBjaGVjay5cclxuICBfc3RhcnRMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkKSB7ICAgICAgXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhZGRlZCcpO1xyXG4gICAgICB0aGlzLl9sYXp5TG9hZENoZWNrKCk7XHJcbiAgICB9ICBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFscmVhZHkgaW4gcGxhY2UnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnNcclxuICBfc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgICBcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIHJlbW92ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vIExpc3RlbmVycyB0byByZW1vdmUnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gSGVscGVyIHRvIGxvZyBvbmx5IGlmIGRlYnVnZ2luZyBlbmFibGVkXHJcbiAgX2NvbmRpdGlvbmFsRGVidWdMb2codG9EZWJ1ZywgbG9nZ2VyRnVuYyA9IGNvbnNvbGUubG9nLCApIHtcclxuICAgIGlmICh0aGlzLl9jb25maWcuZGVidWcpIHtcclxuICAgICAgbG9nZ2VyRnVuYyh0b0RlYnVnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBEbyB0aGUgY2hlY2sgdG8gc2VlIGlmIHNjcmVlbiBzb21ld2hlcmUgaXQgc2hvdWxkIGJlIGxvYWRlZC5cclxuICBfZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcclxuICAgIGNvbnN0IGhpZ2hlc3RWaXNpYmxlWVBvcyA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9IE1hdGgubWluKCh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSksIGRvY3VtZW50SGVpZ2h0KTtcclxuICAgIGNvbnN0IHBlZWtQb3NpdGlvblZpc2libGUgPSBoaWdoZXN0VmlzaWJsZVlQb3MgPj0gbG9hZE1vcmVUcmlnZ2VyUG9zO1xyXG4gICAgY29uc3Qgc2hvdWxkTG9hZE1vcmUgPSBwZWVrUG9zaXRpb25WaXNpYmxlO1xyXG4gICAgXHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdEb2luZyBsb2FkIG1vcmUgY2hlY2sgLi4uJyk7ICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyh7IFxyXG4gICAgICAnVG9wIHBvc2l0aW9uIG9mIGxvYWRlciBlbGVtZW50JzogdGhpcy5fbG9hZGVyLm9mZnNldFRvcCxcclxuICAgICAgJ0NvbmZpZyBwZWVrIGRpc3RhbmNlJzogdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSxcclxuICAgICAgJ1kgY28tb3JkaW5hdGUgd2hlbiBtb3JlIHNob3VsZCBiZSBsb2FkZWQgKGluY2x1ZGluZyBwZWVrLCBjb25zdHJhaW5lZCB0byBkb2MgaGVpZ2h0KSc6IGxvYWRNb3JlVHJpZ2dlclBvcyxcclxuICAgICAgJ0N1cnJlbnQgWSBwb3NpdGlvbiBvZiBzY3JvbGwnOiB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgJ1RoZSBpbnRlcm5hbCBzaXplIG9mIHRoZSB3aW5kb3cnOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICdUaGUgbWF4IHkgcG9zaXRpb24gdmlzaWJsZSc6IGhpZ2hlc3RWaXNpYmxlWVBvcyxcclxuICAgICAgJ1RoZSBoZWlnaHQgb2YgZG9jdW1lbnQnOiBkb2N1bWVudEhlaWdodCxcclxuICAgICAgJ0lzIHBlZWsgcG9zaXRpb24gdmlzaWJsZSc6IHBlZWtQb3NpdGlvblZpc2libGUsXHJcbiAgICAgICdJcyB0aGUgbG9hZCBtb3JlIHBvc2l0aW9uIHZpc2libGUsIG9yIGF0IGRvYyBlbmQnOiBzaG91bGRMb2FkTW9yZSxcclxuICAgIH0sIGNvbnNvbGUudGFibGUpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHNob3VsZExvYWRNb3JlO1xyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLXRhYmxlLWlkPVwiPDxpZCBvZiB0YWJsZSB0byBiZSBlZmZlY3RlZD4+XCJcclxuICogXHJcbiAqICBPUFRJT05BTDogVXNlIHRoZSBmb2xsb3dpbmcgYXR0cnRpYnV0ZXMgdG8gYWRqdXN0IHRoZSBiZWhhdmlvclxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcclxuICogIFxyXG4gKi9cclxuXHJcbnZhciBzaG93TW9yZVRhYmxlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLXNob3dhbGwtdGFibGUtaWRdJyk7XHJcblxyXG5zaG93TW9yZVRhYmxlQnV0dG9ucy5mb3JFYWNoKHNob3dBbGxCdXR0b24gPT4ge1xyXG4gIHZhciB0YWJsZUlkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtdGFibGUtaWRcIik7XHJcblxyXG4gIHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYmxlSWQpO1xyXG4gIGlmICh0YWJsZSkge1xyXG5cclxuICAgIHZhciBkZWZhdWx0SXRlbUxpbWl0ID0gMTA7ICAgIFxyXG4gICAgdmFyIHBhc3NlZEl0ZW1MaW1pdCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWl0ZW0tbGltaXRcIik7XHJcbiAgICB2YXIgcGFyc2VkSXRlbUxpbWl0ID0gcGFyc2VJbnQocGFzc2VkSXRlbUxpbWl0LCAxMCk7XHJcbiAgICB2YXIgbGltaXRUb1VzZSA9IGlzTmFOKHBhcnNlZEl0ZW1MaW1pdCkgPyBkZWZhdWx0SXRlbUxpbWl0IDogcGFyc2VkSXRlbUxpbWl0O1xyXG4gICAgXHJcbiAgICAvLyBXZSBkb250IHdhbnQgdGhlIGhlYWRlcnNcclxuICAgIHZhciB0YWJsZUJvZHkgPSB0YWJsZS50Qm9kaWVzWzBdO1xyXG4gICAgaWYgKCF0YWJsZUJvZHkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHRhYmxlQm9keS5yb3dzLmxlbmd0aDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDEsIGJvZHlSb3c7IGJvZHlSb3cgPSB0YWJsZUJvZHkucm93c1tpLTFdOyBpKyspIHtcclxuICAgICAgaWYgKGkgPiBsaW1pdFRvVXNlKSB7XHJcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFibGVCb2R5TGVuZ3RoIDw9IGxpbWl0VG9Vc2UpIHsgc2hvd0FsbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IH1cclxuXHJcbiAgICBzaG93QWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsKSA9PiB7XHJcbiAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBBcnJheS5mcm9tKHRhYmxlQm9keS5yb3dzKS5mb3JFYWNoKGZ1bmN0aW9uKGJvZHlSb3cpIHtcclxuICAgICAgICBib2R5Um93LnN0eWxlLmRpc3BsYXkgPSBcInRhYmxlLXJvd1wiO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCIvKioqKioqIFxyXG5cclxuICBDcmVhdGVzIGEgdGFnIGxpc3QgZnJvbSBhIHNlbGVjdCBlbGVtZW50XHJcblxyXG4gIHVzYWdlOlxyXG5cclxuICBuZXcgU2VsZWN0TGlzdFRhZyhzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYykuXHJcblxyXG4gIC0gc2VsZWN0SWQgKHJlcXVpcmVkKTogVGhlIGlkIG9mIHRoZSBzZWxlY3QgZWxlbWVudCBhY3RpbmcgYXMgdGhlIHNvdXJjZSAobXVzdCBoYXZlIG11bHRpcGxlIGF0dHJpYnV0ZSwgYW5kIGFsbCBpdGVtcyBzaG91bGQgYmUgbWFya2VkIGFzIHNlbGVjdGVkKVxyXG5cclxuICAtIHJldmVydEdyb3VwcyAob3B0aW9uYWwpOiBUaGUgaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNsaWNrZWQgdG8gcmV2ZXJ0IHNlbGVjdGVkIG9wdGlvbnMgKHNob3VsZCBoYXZlIGlzLWhpZGRlbiBjbGFzcyB0byBzdGFydClcclxuXHJcbiAgLSBvblVwZGF0ZUZ1bmMgKHJlcXVpcmVkKTogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIHRhZyBoYXMgYmVlbiByZW1vdmVkLCBvciBvcHRpb25zIGFyZSByZXZlcnRlZC4uIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gcGFyYW1zLCBzZWxlY3RlZE9wdGlvbnMgYW5kIGFsbE9wdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBpbnRlbmRlZCB0byBtYWtlIHRoZSBjb250cm9sIG1vcmUgZmxleGlibGUgaS5lLiBvdXIgZmlyc3QgdXNhZ2UgaXMgdG8gdXBkYXRlIGxhYmVsIHdpdGggc2VsZWN0ZWQgaXRlbXMgdGV4dCBlbHNld2hlcmUgb24gcGFnZSB3aXRob3V0IGZ1cnRoZXIgY291cGxpbmcuXHJcblxyXG4qKioqKiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdExpc3RUYWdzIHtcclxuICBjb25zdHJ1Y3RvcihzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYyA9ICgpID0+IHt9KSB7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jID0gb25VcGRhdGVGdW5jO1xyXG5cclxuICAgICAgdGhpcy50YWdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpO1xyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcblxyXG4gICAgICBpZiAocmV2ZXJ0R3JvdXBzSWQpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJldmVydEdyb3Vwc0lkKTtcclxuICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcclxuICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFsbE9wdGlvbnMgPSBbLi4udGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXTtcclxuICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuICYmIHRoaXMuYWxsT3B0aW9ucy5zb21lKG8gPT4gIW8uc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgIFxyXG4gICAgICB0aGlzLnRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZS50YXJnZXQubWF0Y2hlcygnaScpKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRWYWwgPSBlLnRhcmdldC5kYXRhc2V0LnZhbDtcclxuICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyt0YXJnZXRWYWwrJ1wiXScpO1xyXG4gICAgICAgICAgICAgIGlmKG8pe1xyXG4gICAgICAgICAgICAgICAgICBvLnNlbGVjdGVkID0gZmFsc2U7ICAgXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuYWZ0ZXIodGhpcy50YWdzKTtcclxuXHJcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVRhZ3MoKSB7XHJcbiAgICAgIHRoaXMudGFncy5pbm5lckhUTUwgPSAnJzsgICAgICBcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xyXG4gICAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICB0aGlzLnRhZ3MuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVGFnKHQuaW5uZXJUZXh0LCB0LnZhbHVlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyhzZWxlY3RlZE9wdGlvbnMsIHRoaXMuYWxsT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gIG1ha2VUYWcodGV4dCwgdmFsdWUpIHtcclxuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX19pY29uXCIpOyAgICAgIFxyXG4gICAgICBpLmRhdGFzZXQudmFsPXZhbHVlO1xyXG4gICAgICBpLmlubmVyVGV4dCA9IFwiY2xlYXJcIlxyXG5cclxuICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRhZztcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFNob3VsZCBoYXZlIGEgc2VjdGlvbiBsaWtlIHRoaXMgZm9yIGVhY2ggcGFnZSB0aGUgY29udHJvbCBpcyB1c2VkIG9uLCB1bmxlc3Mgd2Ugd2FudCBpdCBiZWhhdmUgZXhhY3RseSB0aGUgc2FtZSBhcyBhIHByZXZpb3VzIHZlcnNpb24gKGluY2x1ZGluZyBpZHMgYW5kIHVwZGF0ZSBmdW5jdGlvbikgXHJcbi8vICpCZXR0ZXIgc3RpbGwqIC0gaGF2ZSBpbiBzZXBlcmF0ZSBzY3JpcHQgZmlsZSBzY29wZWQgdG8gc3BlY2lmaWMgcGFnZSAobGlrZSB3aXRoIFNlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcylcclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InKSkge1xyXG5cclxuICAvLyBQcmVwYXJlIGFuIHVwZGF0ZSBmdW5jdGlvbiBpZiByZXF1aXJlZCAob3B0aW9uYWwgcGFyYW1ldGVyKVxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VHcm91cHNMYWJlbFNwYW4nKTtcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCBwbHVyYWxpc2VkR3JvdXBzID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMSA/ICdncm91cCcgOiAnZ3JvdXBzJztcclxuICAgIHNwYW4uaW5uZXJUZXh0ID0gYFNlbmQgdG8gJHtzZWxlY3RlZE9wdGlvbnMubGVuZ3RofSByZXNwb25zZSAke3BsdXJhbGlzZWRHcm91cHN9YDtcclxuICB9XHJcblxyXG4gIC8vIEluaXRpYWxpc2UgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbnRyb2xcclxuICBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicsICdyZXZlcnRfZ3JvdXBzJywgb25VcGRhdGVGdW5jKTsgXHJcbn1cclxuIiwiXHJcbi8vIFJlbW92ZSB0aGUgbm8tanMgY2xhc3Mgc28gd2UgYXJlIGFibGUgdG8gdGVsbCB0aGF0IGpzIGlzIGVuYWJsZWRcclxuLy8gVXNlZnVsIGZvciBoaWRpbmcgZWxlbWVudHMgd2hlbiBqcyBub3QgYXZhaWxhYmxlLlxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7IiwiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZXMnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciByZXNwb25zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2UtZmllbGQnKTtcclxuICAgICAgICB2YXIga2V5QXJyYXkgPSBPYmplY3Qua2V5cyhyZXNwb25zZXMpO1xyXG4gICAgICAgIHZhciBhZGRSZXNwb25zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX3Jlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRSZXNwb25zZSgpO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBrZXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZXNba2V5XS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5Jywga2V5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiI3JlbW92ZV9yZXNwb25zZVwiKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiI3JlbW92ZV9yZXNwb25zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlc3BvbnNlKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3N+PSdyZXNwb25zZS1vcHRpb24nXVwiKS52YWx1ZS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWRkUmVzcG9uc2UocGFyc2VJbnQoa2V5KSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRSZXNwb25zZShrZXkpIHtcclxuXHJcbiAgICAgICAgICAgIGtleUFycmF5LmV2ZXJ5KGZ1bmN0aW9uKGtleSl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlUmVzcG9uc2Uoa2V5KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyAmJiByZXNwb25zZXNba2V5XS5kYXRhc2V0LmtleSA9PSBrZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHJlc3BvbnNlc1trZXldKTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3N+PSdyZXNwb25zZS1vcHRpb24nXVwiKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSkoXCIjUmVzcG9uc2VzXCIpO1xyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZScpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZFBob25lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZFBob25lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQaG9uZUJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkUGhvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pKFwiYWRkUGhvbmVcIik7XHJcblxyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZEVtYWlsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRFbWFpbEJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkRW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pKFwiYWRkRW1haWxcIik7XHJcblxyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVHcm91cEJ1dHRvbiAhPW51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSkoXCJhZGRfZ3JvdXBcIik7XHJcbn1cclxuXHJcbnZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuaWYgKGdyb3VwVGV4dGFyZWEgIT0gbnVsbCkge1xyXG4gICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldDIgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldDIubWF0Y2hlcyhcIi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Mi5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcblxyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpICE9bnVsbCkge1xyXG5cclxuICAgIHZhciBpbnB1dEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKTtcclxuICAgIHZhciBpbnB1dEVycm9yc0FycmF5ID0gT2JqZWN0LmtleXMoaW5wdXRFcnJvcnMpO1xyXG5cclxuICAgIGlucHV0RXJyb3JzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RXJyb3JzW2tleV0pO1xyXG4gICAgICAgIGlucHV0RXJyb3JzW2tleV0uY2xvc2VzdCgnZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuLy8gICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcbi8vICAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcblxyXG4vLyB9KShcIiNTaWRlYmFyXCIpO1xyXG5cclxuIiwiLyogXHJcbiAgRGVib3VuY2UgZnVuY3Rpb24gcHJldmVudCBleGNlc3NpdmUgY2FsbHMgb24gc2Nyb2xsLlxyXG4gIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cclxuKi9cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xyXG5cdHZhciB0aW1lb3V0O1xyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHR9O1xyXG5cdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHR9O1xyXG59OyIsIihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnJlcGxhY2UoL14jLywgJycpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbiAgICBpZiAobWVudSkge1xyXG5cclxuICAgICAgICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XHJcblxyXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QuYWRkKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkpe1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkoJyNzZWFyY2gnKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnJlcGxhY2UoL14jLywgJycpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbiAgICBpZiAobWVudSkge1xyXG5cclxuICAgICAgICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XHJcblxyXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QuYWRkKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkpe1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkoJyNtZW51Jyk7IiwiLyogXHJcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc3RhZmYgY29tcG9zZSBwYWdlLlxyXG4qL1xyXG5cclxuaW1wb3J0IElkQ29va2llSGVscGVyIGZyb20gJy4uL0lkQ29va2llSGVscGVyJztcclxuaW1wb3J0IFNlbGVjdExpc3RUYWdzIGZyb20gJy4uL1NlbGVjdExpc3RUYWdzJztcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5pZiAobWFpbiAmJiBtYWluLmNsYXNzTGlzdC5jb250YWlucygnYXNjLXN0YWZmLWNvbXBvc2UnKSkge1xyXG5cclxuICBjb25zdCBjaCA9IG5ldyBJZENvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VySWRzJyk7XHJcbiAgXHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgY2guc2V0SWRzKHNlbGVjdGVkT3B0aW9ucy5tYXAoeCA9PiB4LnZhbHVlKSk7XHJcbiAgfVxyXG4gIFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxyXG4qL1xyXG5pbXBvcnQgSWRDb29raWVIZWxwZXIgZnJvbSAnLi4vSWRDb29raWVIZWxwZXInO1xyXG5pbXBvcnQgRHJhZnRNZXNzYWdlRHJhd2VyIGZyb20gJy4uL0RyYWZ0TWVzc2FnZURyYXdlcic7XHJcbmltcG9ydCBMYXp5TG9hZGVyIGZyb20gJy4uL0xhenlMb2FkZXInO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtaW5kZXgnKSkge1xyXG5cclxuICBjb25zdCBjaCA9IG5ldyBJZENvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VySWRzJyk7XHJcbiAgY29uc3QgZG1kID0gbmV3IERyYWZ0TWVzc2FnZURyYXdlcihjaC5nZXRDb3VudCgpKTtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcblxyXG4gIGNvbnN0IHVzZXJzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcbiAgbGV0IHVzZXJzVGFibGVCb2R5O1xyXG4gIGlmKHVzZXJzVGFibGUpIHtcclxuICAgdXNlcnNUYWJsZUJvZHkgPSB1c2Vyc1RhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cclxuICBjb25zdCBnZXRTZWFyY2hFbmRwb2ludCA9ICgpID0+IGBodHRwczovLzw8U09NRV9VUkw+Pi9hZC1zdGFmZj9wYWdlPSR7Y3VycmVudFBhZ2V9YDtcclxuICBcclxuICAvLyBBZGQgbGlzdGVuZXJzIGZvciB0aGUgY2hlY2tib3hlc1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoe3RhcmdldH0pID0+IHtcclxuICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0LmNoZWNrZWQgPyBjaC5hZGQodGFyZ2V0LnZhbHVlKSA6IGNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjcmVhdGVDaGVja2JveEZpZWxkID0gKHZhbHVlLCBjaGVja2VkKSA9PiB7ICBcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jZWxsJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlQ2VsbFdpdGhUZXh0ID0gdGV4dCA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUm93ID0gdXNlciA9PiB7XHJcbiAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQoJ1BVVCBOQU1FIEhFUkUgRlJPTSBVU0VSJykpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCgnUFVUIENPTExBUiBIRVJFIEZST00gVVNFUicpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQoJ1BVVCBFTUFJTCBIRVJFIEZST00gVVNFUicpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQoJ1BVVCBQSE9ORSBIRVJFIEZST00gVVNFUicpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveEZpZWxkKCdQVVQgQ09MTEFSIEhFUkUnLCBjaC5oYXNJZCgnUFVUIENPTExBUiBIRVJFJykpKTtcclxuXHJcbiAgICB1c2Vyc1RhYmxlQm9keS5hcHBlbmQobmV3Um93KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFJlc3VsdFJvd3MgPSByb3dzID0+IHtcclxuICAgIHJvd3MuZm9yRWFjaChhZGRSb3cpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlmIChsb2FkZXIpIHtcclxuICAgIG5ldyBMYXp5TG9hZGVyKGxvYWRlciwgYXN5bmMgZG9uZSA9PiB7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBuZXh0IHBhZ2UgaW5kZXhcclxuICAgICAgICBjdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0U2VhcmNoRW5kcG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIHNlYXJjaFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGVuZHBvaW50KTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSZXN1bHRzID0gcmVzdWx0cy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICBpZiAoaGFzUmVzdWx0cykgeyAgICAgICAgICBcclxuICAgICAgICAgIGFkZFJlc3VsdFJvd3MocmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb25lKGhhc1Jlc3VsdHMpOyAgXHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxhenkgbG9hZCBwYWdlICR7Y3VycmVudFBhZ2V9IG9mIEFEIHVzZXJzYCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAvLyBJZ25vcmUgY3VycmVudCBmYWlsZWQgcGFnZSwgc28gd2lsbCB0cnkgYWdhaW5cclxuICAgICAgICBjdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIGRvbmUodHJ1ZSk7IC8vIENhbGwgZG9uZSB3aXRoIG1vcmUgdG8gbG9hZC5cclxuICAgICAgICAvLyBUT0RPOiBXaGF0IHRvIGRvIGhlcmUuIElmIGVucG9pbnQgaXMgZG93biwgd2Ugd291bGQgZ2V0IGxvdHMgb2YgY29uc29sZSBlcnJvcnMgYXQgdGhlIG1vbWVudC4uLi5cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0sIHsgZGVidWc6IGZhbHNlLCBwZWVrRGlzdGFuY2U6IDUwIH0pO1xyXG4gIH0gIFxyXG59XHJcbiIsIi8qIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sXHJcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLy8gZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xyXG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3BidG4nKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG5pZiAoYWRkR3JvdXBCdXR0b24pIHtcclxuXHJcbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XHJcblxyXG5pZiAoY2xvc2VTaWRlYmFyKSB7XHJcblxyXG5jbG9zZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xyXG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIC8vIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xyXG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG5cclxuICAgIHZhciBjb250YWN0UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdDb250YWN0QWRkZWQnKTtcclxuICAgIHZhciBPcmdhbmlzYXRpb25QYXJhbSA9IHVybFBhcmFtcy5nZXQoJ09yZ2FuaXNhdGlvbkFkZGVkJyk7XHJcbiAgICB2YXIgTWVzc2FnZVNlbnRQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ01lc3NhZ2VTZW50Jyk7XHJcblxyXG4gICAgdmFyIHNuYWNrYmFyTWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGV4aXN0cyBhbmQgaWYgaXQgZG9lc250IHNldHVwIG9iamVjdCByZWFkeSBmb3IgZXZlbnRMaXN0ZW5lclxyXG4gICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW0gIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9IEpTT04ucGFyc2Uoc25hY2tiYXJTdG9yYWdlSXRlbSk7XHJcblxyXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcclxuICAgICAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgICAvL2lmIGl0IGRvZXMgdGhlbiBoaWRlIHRoZSBzbmFja2JhclxyXG4gICAgICAgICAgICBzbmFja2Jhci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9ucyA6IG5ldyBBcnJheSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWN0UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgY29udGFjdCBoYXMgYmVlbiBjcmVhdGVkJztcclxuXHJcbiAgICB9IGVsc2UgaWYgKE9yZ2FuaXNhdGlvblBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IG9yZ2FuaXNhdGlvbiBoYXMgYmVlbiBjcmVhdGVkJztcclxuICAgIH0gZWxzZSBpZiAoTWVzc2FnZVNlbnRQYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ01lc3NhZ2Ugc2VudCc7XHJcbiAgICB9IGVsc2UgaWYgKHNuYWNrYmFyKSB7XHJcbiAgICAgICAgc25hY2tiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMucHVzaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xyXG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxufSkoXCIjc25hY2tiYXJcIik7XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuXHJcbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcclxuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoXCJ0YWJsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==