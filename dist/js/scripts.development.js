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
      var documentHeight = document.documentElement.scrollHeight;
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
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var criteriaKey = 'criteria';
  var searchCriteriaString = urlParams.has(criteriaKey) ? "?criteria=".concat(urlParams.get(criteriaKey)) : '';

  var getSearchEndpoint = function getSearchEndpoint() {
    return "".concat(location.origin, "/Force/Contacts/").concat(currentPage).concat(searchCriteriaString);
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
    newRow.appendChild(createCellWithText(user.name));
    newRow.appendChild(createCellWithText(user.collar));
    newRow.appendChild(createCellWithText(user.email));
    newRow.appendChild(createCellWithText(user.phoneNumber));
    newRow.appendChild(createCheckboxField(user.collar, ch.hasId(user.collar)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EcmFmdE1lc3NhZ2VEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0lkQ29va2llSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9MYXp5TG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWVBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlbGVjdExpc3RUYWdzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9Db21wb3NlU3RhZmZNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9TZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJsZXMuanMiXSwibmFtZXMiOlsiQm90dG9tRHJhd2VyIiwiX29wZW5DbGFzcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwiRHJhZnRNZXNzYWdlRHJhd2VyIiwibnVtYmVyT2ZSZWNpcGllbnRzIiwidG90YWxTZWxlY3RvciIsIl90b3RhbHNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwiX2JvdHRvbURyYXdlciIsInVwZGF0ZSIsImlubmVyVGV4dCIsInNob3ciLCJoaWRlIiwiZ3JvdXBFeGlzdCIsImdldEVsZW1lbnRCeUlkIiwidXNlQ2hlY2tib3hlcyIsImhhc0F0dHJpYnV0ZSIsInVzZVNpbmdsZVNlbGVjdENoZWNrYm94IiwibG9ja1Jvb3ROb2RlIiwic2VsZWN0b3IiLCJpbnRpYWxseVNlbGVjdGVkTm9kZXMiLCJncm91cFNlbGVjdCIsImdyb3VwVGV4dGFyZWEiLCJwYXJlbnRFbGVtZW50Iiwic2VsZWN0ZWRPcHRpb25zTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInB1c2giLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsInBhdGhUb1VuY2hlY2siLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiY2JTZWxlY3RvciIsImNoZWNib3hUb1VuY2hlY2siLCJjbGljayIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImJ1aWxkQ2hlY2tib3giLCJwYXJlbnRDaGVja2VkIiwiY2hlY2tib3giLCJ0eXBlIiwic2V0QXR0cmlidXRlIiwibmFtZSIsImlkIiwibmV3UGFyZW50U2VsZWN0ZWQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsImxhYmVsIiwiY2hlY2tTcGFuIiwiYm9yZGVyU3BhbiIsImFwcGVuZENoaWxkIiwiYnVpbGRDaGVja2JveExhYmVsIiwiY2hlY2tib3hMYWJlbCIsImlubmVySFRNTCIsImZvciIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwicGFyZW50Tm9kZSIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkQ2hlY2tib3hlcyIsImhpZGRlbkZpZWxkIiwic3RydWN0dXJlIiwib3B0aW9uX2kiLCJvcHRpb24iLCJzZWdtZW50cyIsInNwbGl0Iiwibm9kZVRvQ2hlY2siLCJzZWdtZW50X2kiLCJzZWciLCJ0cmVlQ29udGFpbmVyIiwiYWN0aXZlQ2hpbGRyZW4iLCJhY19pIiwiYWN0aXZlQ2hpbGQiLCJkaXNwbGF5Q2hpbGRLZXlzIiwiY3VyclRleHQiLCJjdXJyUGF0aCIsIm9iaiIsImVsZW1lbnRUb0FkZFRvIiwibGV2ZWwiLCJwYXJlbnRzQ2hlY2tlZCIsImNoaWxkS2V5cyIsIk9iamVjdCIsImtleXMiLCJwYXJlbnRDaGVja2VkU3RhdGUiLCJjaGlsZExpc3RJdGVtIiwiY2hpbGRMaXN0IiwiY2tfaSIsImNoaWxkS2V5IiwicmVwbGFjZUNoaWxkIiwiSWRDb29raWVIZWxwZXIiLCJfbmFtZSIsIl9pZHMiLCJTZXQiLCJfaW5pdGlhbGlzZSIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3BlcnNpc3QiLCJtYXRjaGluZ1ZhbHVlVG9TcGxpdCIsImZpbHRlciIsImlkcyIsImdldElkcyIsImpvaW5lZElkcyIsImpvaW4iLCJuZXdDb29raWUiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJzaXplIiwiZGVsZXRlIiwiaGFzIiwiQ291cmllckxhenlMb2FkZXIiLCJsb2FkZXJFbGVtZW50IiwibG9hZGVyRm4iLCJjb25maWdPYmoiLCJjb25maWdEZWZhdWx0cyIsImxvYWRlckNsYXNzIiwibG9hZGVyTG9hZGluZ0NsYXNzIiwiZGVib3VuY2VNcyIsInBlZWtEaXN0YW5jZSIsImRlYnVnIiwiX2xvYWRlciIsIl9sb2FkZXJGdW5jIiwiX2NvbmZpZyIsIl9oYXNMaXN0ZW5lcnNBZGRlZCIsIl9sYXp5TG9hZENoZWNrIiwiZGVib3VuY2UiLCJfZG9Mb2FkTW9yZUNoZWNrIiwiX2NvbmRpdGlvbmFsRGVidWdMb2ciLCJfc3RvcExpc3RlbmluZyIsIl9kb25lU2VhcmNoaW5nIiwiX3N0YXJ0TGlzdGVuaW5nIiwiYmluZCIsInZpc2libGUiLCJtb3JlVG9Mb2FkIiwiX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b0RlYnVnIiwibG9nZ2VyRnVuYyIsImNvbnNvbGUiLCJsb2ciLCJoaWdoZXN0VmlzaWJsZVlQb3MiLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImxvYWRNb3JlVHJpZ2dlclBvcyIsIk1hdGgiLCJtaW4iLCJvZmZzZXRUb3AiLCJwZWVrUG9zaXRpb25WaXNpYmxlIiwic2hvdWxkTG9hZE1vcmUiLCJ0YWJsZSIsInNob3dNb3JlVGFibGVCdXR0b25zIiwiZm9yRWFjaCIsInNob3dBbGxCdXR0b24iLCJ0YWJsZUlkIiwiZGVmYXVsdEl0ZW1MaW1pdCIsInBhc3NlZEl0ZW1MaW1pdCIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwibGltaXRUb1VzZSIsImlzTmFOIiwidGFibGVCb2R5IiwidEJvZGllcyIsInRhYmxlQm9keUxlbmd0aCIsInJvd3MiLCJib2R5Um93Iiwic3R5bGUiLCJkaXNwbGF5IiwiZWwiLCJTZWxlY3RMaXN0VGFncyIsInNlbGVjdElkIiwicmV2ZXJ0R3JvdXBzSWQiLCJvblVwZGF0ZUZ1bmMiLCJ0YWdPcHRpb25zIiwicmV2ZXJ0QnRuIiwibyIsInBvcHVsYXRlVGFncyIsImFsbE9wdGlvbnMiLCJzb21lIiwidGFncyIsInRhcmdldFZhbCIsImRhdGFzZXQiLCJ2YWwiLCJhZnRlciIsInNlbGVjdGVkT3B0aW9ucyIsInQiLCJtYWtlVGFnIiwidGFnIiwiY3JlYXRlVGV4dE5vZGUiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsInJlc3BvbnNlcyIsImtleUFycmF5IiwiYWRkUmVzcG9uc2VCdXR0b24iLCJibHVyIiwiYWRkUmVzcG9uc2UiLCJyZW1vdmVSZXNwb25zZSIsInZhbGlkYXRlUmVzcG9uc2UiLCJldmVyeSIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNsb3Nlc3QiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm1lbnUiLCJtZW51QnV0dG9uIiwibWVudUNoaWxkIiwibWFpbiIsImNoIiwic2V0SWRzIiwieCIsImRtZCIsImxvYWRlciIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjcml0ZXJpYUtleSIsInNlYXJjaENyaXRlcmlhU3RyaW5nIiwiZ2V0IiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJuZXdUb3RhbCIsImNyZWF0ZUNoZWNrYm94RmllbGQiLCJjZWxsIiwiaW5wdXQiLCJjcmVhdGVDZWxsV2l0aFRleHQiLCJhZGRSb3ciLCJ1c2VyIiwibmV3Um93IiwiY29sbGFyIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImhhc0lkIiwiYXBwZW5kIiwiYWRkUmVzdWx0Um93cyIsIkxhenlMb2FkZXIiLCJkb25lIiwiZW5kcG9pbnQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdHMiLCJoYXNSZXN1bHRzIiwiZXJyb3IiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsInkiLCJzbmFja2JhclN0b3JhZ2VJdGVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNuYWNrYmFyIiwiY29udGFjdFBhcmFtIiwiT3JnYW5pc2F0aW9uUGFyYW0iLCJNZXNzYWdlU2VudFBhcmFtIiwic25hY2tiYXJNZXNzYWdlIiwic25hY2tiYXJTdG9yYWdlSXRlbUFycmF5IiwiSlNPTiIsInBhcnNlIiwibG9jYXRpb25zIiwiaW5jbHVkZXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtC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QU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QyxZQUFVO0FBQ2pCdUQsY0FBUSxDQUFDeFYsU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsa0JBQTFCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBRUosQ0E1REQsRUE0REcsV0E1REgsRTs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGUiLCJmaWxlIjoiZGlzdC9qcy9zY3JpcHRzLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKlxyXG4gQ2xhc3MgdGhhdCBmYWNpbGl0YXRlIHRoZSBoaWRpbmcgYW5kIHNob3dpbmcgb2YgdGhlIGJvdHRvbSBiYXIuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9vcGVuQ2xhc3MgPSBcImJvdHRvbS1kcmF3ZXItb3BlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuL0JvdHRvbURyYXdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFmdE1lc3NhZ2VEcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZSZWNpcGllbnRzLCB0b3RhbFNlbGVjdG9yPVwiLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190b3RhbFwiKSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG90YWxTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b3RhbHNFbGVtZW50KSB7IHRocm93IEVycm9yKGBObyBlbGVtZW50IG1hdGNoaW5nIHRoZSBwYXNzZWQgaW4gc2VsZWN0b3IgJHt0b3RhbFNlbGVjdG9yfWApOyB9XHJcbiAgICAgICAgdGhpcy5fYm90dG9tRHJhd2VyID0gbmV3IEJvdHRvbURyYXdlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKG51bWJlck9mUmVjaXBpZW50cyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50LmlubmVyVGV4dCA9IG51bWJlck9mUmVjaXBpZW50cztcclxuICAgICAgICBudW1iZXJPZlJlY2lwaWVudHMgPyB0aGlzLl9ib3R0b21EcmF3ZXIuc2hvdygpIDogdGhpcy5fYm90dG9tRHJhd2VyLmhpZGUoKTtcclxuICAgIH1cclxufSIsIiB2YXIgZ3JvdXBFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XHJcbiAgICBpZihncm91cEV4aXN0KXtcclxuXHJcbiAgICAgICAgdmFyIHVzZUNoZWNrYm94ZXMgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94ID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1zaW5nbGUtc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIGxvY2tSb290Tm9kZSA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLWxvY2stcm9vdCcpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3RvciwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAvL0NoZWNrIG9uIHBhZ2Ugd2hldGhlciBHcm91cCBNdWx0aSBTZWxlY3QgZXhpc3RzXHJcbiAgICB2YXIgaW50aWFsbHlTZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwU2VsZWN0b3JcIik7XHJcbiAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbiAgICAvLyBJZiB0aGUgR3JvdXAgTXVsdGkgU2VsZWN0IGRvZXMgZXhpc3QsIGhpZGUgaXQgKGlmIEpTIGVuYWJsZWQpXHJcbiAgICBpZiAoZ3JvdXBTZWxlY3QgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEdyYWIgYWxsIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZFxyXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnNOb2RlcyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRPcHRpb25zTm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgIGludGlhbGx5U2VsZWN0ZWROb2Rlcy5wdXNoKHNlbGVjdGVkT3B0aW9uc05vZGVzW2ldLnZhbHVlIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aFRvVW5jaGVjayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIikucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiU2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1jaGVja2JveF0uR3JvdXBJdGVtW3ZhbHVlPVwiJytwYXRoVG9VbmNoZWNrKydcIl0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNib3hUb1VuY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNiU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNib3hUb1VuY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjYm94VG9VbmNoZWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VhcmNoUGFydHMgPSAoZnVuY3Rpb24gZ2V0VXJsVmFycygpIHtcclxuICAgICAgICB2YXIgdmFycyA9IHt9O1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24obSxrZXksdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhcnM7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBwYWdlUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBcIj9ncm91cD1cIjtcclxuICAgIHZhciBncm91cFBhcmFtID0gc2VhcmNoUGFydHMuZ3JvdXA7XHJcbiAgICB2YXIgc2VhcmNoUGFyYW0gPSBzZWFyY2hQYXJ0cy5TZWFyY2g7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gYnVpbGQgdGhlIHBhdGhcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2VQYXRoRm9yR3JvdXAoZ3JvdXApIHtcclxuICAgICAgdmFyIGdycCA9IGdyb3VwID09PSBcIlwiID8gXCJcXFxcXCIgOiBncm91cDtcclxuICAgICAgcmV0dXJuIHBhZ2VQYXRoICsgZ3JwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZCBzaG91bGQgYmUgb3BlbiBpLmUuIHRvIHJldmVhbCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBzaG91bGRQYXJlbnRCZU9wZW4ocGF0aCkge1xyXG4gICAgICAgIGlmICghZ3JvdXBQYXJhbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoICsgXCJcXFxcXCIpO1xyXG4gICAgICAgIHJldHVybiBncm91cFBhcmFtLnN0YXJ0c1dpdGgocGF0aFRvQ2hlY2spICYmIGdyb3VwUGFyYW0gIT0gcGF0aFRvQ2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkZWQgaXMgdGhlIGN1cnJlbnRseVNlbGVjdGVkR3JvdXBcclxuICAgIGZ1bmN0aW9uIGlzU2VsZWN0ZWRHcm91cChwYXRoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtc1RvQ2hlY2sgPSBkZWNvZGVVUklDb21wb25lbnQoZ3JvdXBQYXJhbSB8fCBcIlxcXFxcIik7XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggfHwgXCJcXFxcXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFyYW1zVG9DaGVjayA9PT0gcGF0aFRvQ2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGxpbmsgZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRMaW5rKHRleHQsIHBhdGgpIHtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGdldFBhZ2VQYXRoRm9yR3JvdXAocGF0aCk7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpbmtcIik7XHJcblxyXG4gICAgICAgIC8vIE5CLiAgT3JpZ2luYWxseSB3ZSBkaWRudCB3YW50IHRoZSBjdXJyZW50IGNsYXNzIHRvIGJlIGFkZGVkIGlmIGRvaW5nIGEgc2VhcmNoLCBidXQgdGhpbmsgd2UgZG8gbm93LlxyXG4gICAgICAgIC8vIGlmICgoIXNlYXJjaFBhcmFtKSAmJiAgaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XHJcbiAgICAgICAgLy8gaWYgKGlzU2VsZWN0ZWRHcm91cChwYXRoKSkge1xyXG4gICAgICAgIC8vICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGluay0tY3VycmVudFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIGxpbms7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGNoZWNrYm94IGxhYmVsIGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3godGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkdyb3VwSXRlbVwiKTtcclxuICAgICAgICBjaGVja2JveC5uYW1lID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveC52YWx1ZSA9IHBhdGg7XHJcbiAgICAgICAgY2hlY2tib3guaWQgPSB0ZXh0O1xyXG4gICAgICAgIHZhciBuZXdQYXJlbnRTZWxlY3RlZCA9IHBhcmVudENoZWNrZWQ7XHJcblxyXG4gICAgICAgIGlmIChwYXRoID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSB0aGUgcm9vdCBub2RlIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgY2hlY2tlZCBCVVQgdGhlIGNoaWxkcmVuIG9mIHRoaXMgbm9kZSBzaG91bGQgYWN0IGFzIHRob3VnaCBpdCBpc250IGNoZWNrZWQgc28gd2UgZG9udCB1cGRhdGUgdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDaGVja2VkICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIHNlbGVjdGVkIGFsbCBpdHMgY2hpbGRyZW4gc2hvdWxkIGJlIGRpc2FibGVkIGFuZCB1bmNoZWNrZWRcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIG5vdCBjaGVja2VkIGl0cyBjaGlsZHJlbiBzZWxlY3RlZCBzdGF0ZSBkZXBlbmQgb24gdGhlIGNoaWxkcyB2YWx1ZSwgYW5kIG5vdCBiZSBkaXNhYmxlZFxyXG4gICAgICAgICAgICB2YXIgbmV3Q2hlY2tlZCA9IGludGlhbGx5U2VsZWN0ZWROb2Rlcy5pbmRleE9mKHBhdGggfHwgJ1xcXFwnKSA+PSAwO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICAgICAgbmV3UGFyZW50U2VsZWN0ZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3R5bGUgYXMgYSByYWRpbyBidXR0b25cclxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY2hlY2tTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19jaGVjaycpO1xyXG4gICAgICAgICAgICB2YXIgYm9yZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9fYm9yZGVyJyk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrU3Bhbik7XHJcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGJvcmRlclNwYW4pO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9faW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tib3ggPSBsYWJlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7Y2hlY2tib3gsIG5ld1BhcmVudFNlbGVjdGVkfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveExhYmVsKHRleHQsIHBhdGgpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuZm9yID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0ZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94TGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhbnNmZXJWYWx1ZXMoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuR3JvdXBJdGVtJylcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPGVsZW1zLmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9ja1Jvb3ROb2RlICYmICEoZWxlbXNbaV0udmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8tb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1zW2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWxlbXNbaV0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpIHtcclxuXHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG4gICAgICAgIGlmICh0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dyb3VwU2VsZWN0b3InKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBleGlzdGluZ09wdGlvblZhbHVlcyA9IEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBkYXRhX2kgPSAwOyBkYXRhX2kgPCBkYXRhLmxlbmd0aDsgZGF0YV9pKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFfY3VycmVudCA9IGRhdGFbZGF0YV9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+QWxsIENvbnRhY3QgR3JvdXBzPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPicgKyBkYXRhX2N1cnJlbnQuc3Vic3RyaW5nKDEpICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIG9wdGlvbiBleGlzdHMgLSBhZGQgaXQgaWYgbm90XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdPcHRpb25WYWx1ZXMuaW5kZXhPZihkYXRhX2N1cnJlbnQpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGRhdGFfY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gZGF0YV9jdXJyZW50O1wiXCJcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBkYXRhLmluZGV4T2YoZWxlbWVudC5vcHRpb25zW2ldLnZhbHVlKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuRm9yTW9kZShwYXJlbnQsIHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuICAgICAgICBpZiAodXNlQ2hlY2tib3hlcyB8fCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgdGhlIGJsYW5rIHZhbHVlIGZvciAnQWxsIENvbnRhY3QgR3JvdXBzJ1xyXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBcIlxcXFxcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSk7XHJcbiAgICAgICAgICAgIHZhciBjaGVja2JveFJlc3VsdCA9IGJ1aWxkQ2hlY2tib3godGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGVja2JveFJlc3VsdC5jaGVja2JveCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveFJlc3VsdC5uZXdQYXJlbnRTZWxlY3RlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxpbmsgdG8gcmVmcmVzaCBwYWdlIHdpdGggc2VsZWN0ZWQgbm9kZS5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkTGluayh0ZXh0LCBwYXRoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRDaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGN1cnJlbnQsIGNoaWxkcmVuLCB1cGRhdGVyRm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50TG9vcENoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9vcENoaWxkICE9PSBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVyRm4oY3VycmVudExvb3BDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayhlLCBjaGVja2JveCkge1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50TGkgPSBjaGVja2JveC5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSBvbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCwgYW5kIHRoZSBzZWxlY3RlZCBpdGVtIGNhbm5vdCBiZSBkZXNlbGV0ZWQuXHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWxsR3JvdXBDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyb3VwLXNlbGVjdG9yX19saXN0LS1yb290IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBhbGxHcm91cENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFyZW50TGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudCcpKXtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY2hpbGRDaGVja2JveGVzID0gcGFyZW50TGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyYWIgdGhlIHNlbGVjdCBsaXN0IGFuZCBhbGwgb2YgaXRzIG9wdGlvbnNcclxuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgdmFyIG9wdGlvbnMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG5cclxuICAgIHZhciBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiR3JvdXBcIik7XHJcbiAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IGdyb3VwUGFyYW0gfHwgJ1xcXFwnO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBjb2xsZWN0aW9ucyB3aXRoIHN0YXJ0aW5nIGtleSBmb3IgdGhlIHJvb3QuXHJcbiAgICB2YXIgc3RydWN0dXJlID0geyBcIlxcXFxcIjoge30gfTtcclxuXHJcbiAgICAvLyBCdWlsZCBvbiB0aGUgYmFzZSBzdHJ1Y3R1cmUgYnkgbG9vcGluZyB0aHJvdWdoIGVhY2ggc2VsZWN0IGl0ZW0uXHJcbiAgICBmb3IgKHZhciBvcHRpb25faT0wOyBvcHRpb25faTxvcHRpb25zLmxlbmd0aDsgb3B0aW9uX2krKykge1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tvcHRpb25faV07XHJcblxyXG4gICAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgLy8gU2VwZXJhdGUgdGhlIGdyb3VwIG5hbWUgaW50byBhbGwgaXRzIHBhdGggc2VnbWVudHNcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gb3B0aW9uLnRleHRDb250ZW50LnNwbGl0KFwiXFxcXFwiKTtcclxuICAgICAgICAgICAgLy8gU3RhcnQgYXQgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgICAgICAgICAgdmFyIG5vZGVUb0NoZWNrID0gc3RydWN0dXJlW1wiXFxcXFwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHNlZ21lbnQgZW5zdXJlIHRoYXQgYWxsIGxldmVscyBvZiB0aGUgc3RydWN0dXJlIGFyZSBpbiBwbGFjZS5cclxuICAgICAgICAgICAgZm9yICh2YXIgc2VnbWVudF9pPTA7IHNlZ21lbnRfaTxzZWdtZW50cy5sZW5ndGg7IHNlZ21lbnRfaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ21lbnRzW3NlZ21lbnRfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlZyAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvQ2hlY2tbc2VnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVja1tzZWddID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2tbc2VnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgYmFzZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWRcclxuICAgIHZhciB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdFwiKTtcclxuXHJcblxyXG4gICAgLy8gSGFuZGxlIGFsbCB0aGUgY2xpY2tzIGF0IHRoZSBwYXJlbnQgbGV2ZWxcclxuICAgIHRyZWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgY2hlY2tib3ggaXRlbXMgYmVpbmcgc2VsZWN0ZWQuXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyYW5zZmVyVmFsdWVzKCk7XHJcblxyXG4gICAgICAgIC8vIFdlIG9ubHkgY2FyZSBhYm91dCBjbGlja3Mgb24gZWxlbWVudHMgdGhhdCBhcmUgcGFyZW50c1xyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKSkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbiBvcGVuIHBhcmVudCBpdGVtIGlzIGNsaWNrZWQsIGNsb3NlIGl0LCBidXQgYWxzbyBhbGwgaXRzIG9wZW4gZGVzY2VuZGFudHMuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGRyZW4gPSB0YXJnZXQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICBcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGFjX2k9MDsgYWNfaTxhY3RpdmVDaGlsZHJlbi5sZW5ndGg7IGFjX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZCA9IGFjdGl2ZUNoaWxkcmVuW2FjX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBPcGVuIGFueSBjbG9zZWQgcGFyZW50cyB0aGF0IGFyZSBjbGlja2VkLlxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIHNlbGVjdCBsaXN0IGZyb20gdGhlIHByZXZpb3VzIG5vZGUgc3RydWN0dXJlLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaGlsZEtleXMoY3VyclRleHQsIGN1cnJQYXRoLCBvYmosIGVsZW1lbnRUb0FkZFRvLCBsZXZlbCwgcGFyZW50c0NoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRDaGVja2VkU3RhdGUgPSBwYXJlbnRzQ2hlY2tlZDtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXVzZUNoZWNrYm94ZXMgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94ICYmIGlzU2VsZWN0ZWRHcm91cChjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgLy8gT25seSBhZGQgdGhlIGN1cnJlbnQgc3RhdGUgd2hlbiBpbiB0aGUgJ2xpbmsgbW9kZSdcclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGlsZEtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYXQgdGhlIGJvdHRvbSBvZiBhIGJyYW5jaCBpLmUuIG5vIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBub2RlIGhhcyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMSB8fCBzaG91bGRQYXJlbnRCZU9wZW4oY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuIGZpcnN0IGxldmVsIGNoaWxkcmVuIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgICAgICBcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZSA9IGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRhaW5lciByZWFkeSB0byBiZSBwb3B1bGF0ZWQgd2l0aCB0aGUgY2hpbGQgbm9kZXNcclxuICAgICAgICAgICAgdmFyIGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5hcHBlbmRDaGlsZChjaGlsZExpc3QpO1xyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuICAgICAgICAgICAgLy8gQ2FsbCByZWN1cnNpdmVseSB3aXRoIHVwZGF0ZWQgcGFyYW1zIGZvciBlYWNoIGNoaWxkIG5vZGVcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGNrX2k9MDsgY2tfaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGNrX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGRLZXlzW2NrX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEtleSAhPT0gJ0FsbCBjb250YWN0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q2hpbGRLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyUGF0aCArIFwiXFxcXFwiICsgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hpbGRLZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgaW5pdGlhbCBjYWxsIG9mIHRoZSByZWN1cnNpdmUgZnVuY3Rpb24gc3RhcnRpbmcgYXQgdGhlIHJvb3QuXHJcbiAgICBkaXNwbGF5Q2hpbGRLZXlzKFwiQWxsIENvbnRhY3QgR3JvdXBzXCIsIFwiXCIsIHN0cnVjdHVyZVtcIlxcXFxcIl0sIHRyZWVDb250YWluZXIsIDEsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIHRoZSBzZWxlY3QgbGlzdCB3aXRoIHRoZSBuZXcgdHJlZVxyXG4gICAgZ3JvdXBTZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodHJlZUNvbnRhaW5lciwgZ3JvdXBTZWxlY3QpO1xyXG5cclxuICAgIHRyZWVDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoaWRkZW5GaWVsZCk7XHJcblxyXG4gICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbn0pKFwiI0dyb3VwXCIsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KTtcclxufVxyXG4iLCIvLyBTdG9yZSBhIHVuaXF1ZSBzZXQgb2YgaWRzIGluc2lkZSBhIGNvb2tpZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZENvb2tpZUhlbHBlcntcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX2lkcyA9IG5ldyBTZXQodGhpcy5faW5pdGlhbGlzZSgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUG9wdWxhdGUgc3RhcnQgaWRzLCBpbml0aWFsaXNlcyBjb29raWUgaWYgbm90IHByZXNlbnRcclxuICAgIF9pbml0aWFsaXNlKCkge1xyXG4gICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBkb2N1bWVudC5jb29raWU7XHJcblxyXG4gICAgICBjb25zdCBjb29raWVzID0gY29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xyXG4gICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XHJcblxyXG4gICAgICBpZiAoIW1hdGNoaW5nQ29va2llKSB7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdChbXSk7ICAgXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hdGNoaW5nVmFsdWVUb1NwbGl0ID0gbWF0Y2hpbmdDb29raWUuc3BsaXQoJz0nKVsxXTtcclxuICAgICAgcmV0dXJuIG1hdGNoaW5nVmFsdWVUb1NwbGl0LnNwbGl0KCd8JykuZmlsdGVyKGkgPT4gaSk7ICAgLy8gU3BsaXQgYW5kIHJlbW92ZSBlbXB0eSB2YWx1ZXNcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2F2ZSB0aGUgbmV3IGlkcyB0byB0aGUgY29va2llIGFmdGVyIHVwZGF0ZVxyXG4gICAgX3VwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgaWRzID0gdGhpcy5nZXRJZHMoKTtcclxuICAgICAgdGhpcy5fcGVyc2lzdChpZHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTYXZlIHRoZSBwYXNzZWQgaW4gaWRzIHRvIHRoZSBjb29raWVcclxuICAgIF9wZXJzaXN0KGlkcykgeyAgICBcclxuICAgICAgY29uc3Qgam9pbmVkSWRzID0gaWRzLmpvaW4oJ3wnKTtcclxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IGNvb2tpZSBjb250YWluaW5nIHNlbGVjdGVkIGlkcy4gIFNldCB0byBzYW1lIHNpdGUgc3RyaWN0IGFuZCBwYXRoIHRvIHJvb3RcclxuICAgICAgY29uc3QgbmV3Q29va2llID0gYCR7dGhpcy5fbmFtZX09JHtqb2luZWRJZHN9OyBwYXRoPS87IHNhbWVzaXRlPVN0cmljdGBcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gbmV3Q29va2llO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTZXQgYWxsIHRoZSBpZHMgaW4gb25lIGhpdC4gUmV0dXJucyB0aGUgbmV3IGNvdW50LlxyXG4gICAgc2V0SWRzKGlkcyA9IFtdKSB7XHJcbiAgICAgIHRoaXMuX2lkcyA9IG5ldyBTZXQoaWRzKTtcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cclxuICAgIGdldElkcygpIHtcclxuICAgICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbSh0aGlzLl9pZHMpXHJcbiAgICAgIHJldHVybiBpZHM7XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGlkcyBjdXJyZW50bHkgaW4gdGhlIHNldC5cclxuICAgIGdldENvdW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWRzLnNpemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlbW92ZSBvbmUgb3IgbW9yZSBpZHMuIFJldHVybiB0aGUgbmV3IGNvdW50XHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgdGhpcy5faWRzLmRlbGV0ZShpZCk7ICAgICAgXHJcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgb25lIG9yIG1vcmUgaWRzLiBSZXR1cm5zIHRoZSBuZXcgY291bnRcclxuICAgIGFkZChpZCkge1xyXG4gICAgICB0aGlzLl9pZHMuYWRkKGlkKTtcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9lcyB0aGUgc2V0IGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBhcnJheSBpdGVtLlxyXG4gICAgaGFzSWQoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRzLmhhcyhpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuLyoqXHJcbiAgQ2xhc3MgdG8gbWFuYWdlIHRoZSBsb2FkIG9uIHNjcm9sbCBmdW5jdGlvbmFsaXR5IGZvciBhIHBhZ2UuXHJcbiAgV2hlbiB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgc2VydmVyIHNpZGUgaXQgc2hvdWxkIGhpZGUgdGhlIGxvYWRlciBlbGVtZW50IGlmIG5vIG1vcmUgcmVzdWx0cyB0byBsb2FkLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VyaWVyTGF6eUxvYWRlciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICBDb25zdHJ1Y3RvclxyXG4gICAgUGFyYW1zXHJcbiAgICAgLSBsb2FkZXJFbGVtZW50IChyZXF1aXJlZCk6IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBsb2FkZXJcclxuICAgICAtIGxvYWRlckZuIChyZXF1aXJlZCk6IFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlIG9mIHJlc3VsdHMuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIGEgYm9vbCBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgbW9yZSBpdGVtcyB0byBsb2FkLlxyXG4gICAgIC0gY29uZmlnT2JqIChvcHRpb25hbCk6ICBBbiBvYmplY3Qgd2hvc2Uga2V5IGFuZCB2YWx1ZXMgd2lsbCBvdmVycmlkZSBkZWZhdWx0IGNvbmZpZyBzZXR0aW5ncy5cclxuICAqLyAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGxvYWRlckVsZW1lbnQsIFxyXG4gICAgICBsb2FkZXJGbiwgXHJcbiAgICAgIGNvbmZpZ09iaiA9IHt9XHJcbiAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAgRGVmYXVsdCBjb25maWcgc2V0dGluZ3NcclxuICAgICovXHJcbiAgICBjb25zdCBjb25maWdEZWZhdWx0cyA9IHtcclxuICAgICAgbG9hZGVyQ2xhc3M6ICdsb2FkZXInLCAgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudFxyXG4gICAgICBsb2FkZXJMb2FkaW5nQ2xhc3M6ICdsb2FkZXItLWxvYWRpbmcnLCAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgIGRlYm91bmNlTXM6IDEwMCwgLy8gaG93IGxvbmcgdG8gd2FpdCBiZXR3ZWVuIGV2ZW50cyBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIHBlZWtEaXN0YW5jZTogMCwgLy8gaG93IG11Y2ggb2YgbG9hZGluZyBlbGVtZW50IHNob3VsZCBiZSBvbiBzY3JlbiBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIGRlYnVnOiBmYWxzZSAgLy8gd2hldGhlciBvciBub3QgdG8gbG9nIGRlYnVnIGluZm8gdG8gY29uc29sZS5cclxuICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXJFbGVtZW50O1xyXG4gICAgdGhpcy5fbG9hZGVyRnVuYyA9IGxvYWRlckZuO1xyXG4gICAgICAgIFxyXG4gICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBwYXNzZWQgaW4gY29uZmlnXHJcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZ0RlZmF1bHRzLCAuLi5jb25maWdPYmogfTtcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgd2hldGhlciBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkIG9yIHJlbW92ZWRcclxuICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgaWYgKCF0aGlzLl9sb2FkZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGxvYWRlciBlbGVtZW50IHByb3ZpZGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbiB0aGUgbG9hZGVycyBjbGFzcyBmcm9tIHRoZSBjb25maWdcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJDbGFzcyk7XHJcbiAgICBcclxuICAgIC8vIERlYm91bmNlIHRoZSBjaGVja1xyXG4gICAgdGhpcy5fbGF6eUxvYWRDaGVjayA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5fZG9Mb2FkTW9yZUNoZWNrKCkpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdDYWxsaW5nIGxvYWQgbW9yZSBmdW5jdGlvbicpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHRoZSBzZWFyY2ggZnVuY3Rpb24gJiBwYXNzIGluIHRoZSBkb25lIHNlYXJjaGluZyBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2xvYWRlckZ1bmModGhpcy5fZG9uZVNlYXJjaGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm90IHJlYWR5IHRvIHJlbG9hZCB5ZXQnKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlYm91bmNlTXMpO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgdGhlIGV2ZW50cyAoYWxzbyBkb2VzIGluaXRpYWwgY2hlY2spXHJcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fZG9uZVNlYXJjaGluZyA9IHRoaXMuX2RvbmVTZWFyY2hpbmcuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgXHJcbiAgX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSh2aXNpYmxlKSB7XHJcbiAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGtsZSByZXN1bHRzIGNvbWluZyBiYWNrIGluXHJcbiAgX2RvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCkge1xyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyhgX2RvbmVTZWFyY2hpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggbW9yZSB0byBsb2FkICR7bW9yZVRvTG9hZH1gKTtcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpIFxyXG4gICAgaWYgKG1vcmVUb0xvYWQpIHtcclxuICAgICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQWxsIGRvbmUgLSBoaWRpbmcgbG9hZGVyIGVsZW1lbnQnKTtcclxuICAgICAgdGhpcy5fc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gV2lyZSB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIGRvIGluaXRpYWwgY2hlY2suXHJcbiAgX3N0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkgeyAgICAgIFxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWRkZWQnKTtcclxuICAgICAgdGhpcy5fbGF6eUxvYWRDaGVjaygpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhbHJlYWR5IGluIHBsYWNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXHJcbiAgX3N0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgICAgXHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyByZW1vdmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdObyBMaXN0ZW5lcnMgdG8gcmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhlbHBlciB0byBsb2cgb25seSBpZiBkZWJ1Z2dpbmcgZW5hYmxlZFxyXG4gIF9jb25kaXRpb25hbERlYnVnTG9nKHRvRGVidWcsIGxvZ2dlckZ1bmMgPSBjb25zb2xlLmxvZywgKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgIGxvZ2dlckZ1bmModG9EZWJ1ZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gRG8gdGhlIGNoZWNrIHRvIHNlZSBpZiBzY3JlZW4gc29tZXdoZXJlIGl0IHNob3VsZCBiZSBsb2FkZWQuXHJcbiAgX2RvTG9hZE1vcmVDaGVjaygpIHsgICAgXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9IE1hdGgubWluKCh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSksIGRvY3VtZW50SGVpZ2h0KTsgXHJcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcclxuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcclxuICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcclxuICAgICAgJ1RvcCBwb3NpdGlvbiBvZiBsb2FkZXIgZWxlbWVudCc6IHRoaXMuX2xvYWRlci5vZmZzZXRUb3AsXHJcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXHJcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXHJcbiAgICAgICdDdXJyZW50IFkgcG9zaXRpb24gb2Ygc2Nyb2xsJzogd2luZG93LnNjcm9sbFksXHJcbiAgICAgICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXHJcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXHJcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxyXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXHJcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiAgVVNBR0U6IFRvIHVzZSB0aGlzIGNvbnRyb2wgeW91IG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlIHRvIHRoZSBidXR0b24gdGhhdCBzaG91bGQgYmUgZG9pbmcgdGhlIHNob3cgYWxsLlxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC10YWJsZS1pZD1cIjw8aWQgb2YgdGFibGUgdG8gYmUgZWZmZWN0ZWQ+PlwiXHJcbiAqIFxyXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1saW1pdD1cIjIwXCIgLSBzZXRzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2hvdyBpbml0aWFsbHkuICBEZWZhdWx0IGlzIDEwXHJcbiAqICBcclxuICovXHJcblxyXG52YXIgc2hvd01vcmVUYWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1zaG93YWxsLXRhYmxlLWlkXScpO1xyXG5cclxuc2hvd01vcmVUYWJsZUJ1dHRvbnMuZm9yRWFjaChzaG93QWxsQnV0dG9uID0+IHtcclxuICB2YXIgdGFibGVJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLXRhYmxlLWlkXCIpO1xyXG5cclxuICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlkKTtcclxuICBpZiAodGFibGUpIHtcclxuXHJcbiAgICB2YXIgZGVmYXVsdEl0ZW1MaW1pdCA9IDEwOyAgICBcclxuICAgIHZhciBwYXNzZWRJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xyXG4gICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHBhc3NlZEl0ZW1MaW1pdCwgMTApO1xyXG4gICAgdmFyIGxpbWl0VG9Vc2UgPSBpc05hTihwYXJzZWRJdGVtTGltaXQpID8gZGVmYXVsdEl0ZW1MaW1pdCA6IHBhcnNlZEl0ZW1MaW1pdDtcclxuICAgIFxyXG4gICAgLy8gV2UgZG9udCB3YW50IHRoZSBoZWFkZXJzXHJcbiAgICB2YXIgdGFibGVCb2R5ID0gdGFibGUudEJvZGllc1swXTtcclxuICAgIGlmICghdGFibGVCb2R5KSB7IHJldHVybjsgfVxyXG5cclxuICAgIHZhciB0YWJsZUJvZHlMZW5ndGggPSB0YWJsZUJvZHkucm93cy5sZW5ndGg7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgPSAxLCBib2R5Um93OyBib2R5Um93ID0gdGFibGVCb2R5LnJvd3NbaS0xXTsgaSsrKSB7XHJcbiAgICAgIGlmIChpID4gbGltaXRUb1VzZSkge1xyXG4gICAgICAgIGJvZHlSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhYmxlQm9keUxlbmd0aCA8PSBsaW1pdFRvVXNlKSB7IHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9XHJcblxyXG4gICAgc2hvd0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4ge1xyXG4gICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgQXJyYXkuZnJvbSh0YWJsZUJvZHkucm93cykuZm9yRWFjaChmdW5jdGlvbihib2R5Um93KSB7XHJcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJ0YWJsZS1yb3dcIjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiLyoqKioqKiBcclxuXHJcbiAgQ3JlYXRlcyBhIHRhZyBsaXN0IGZyb20gYSBzZWxlY3QgZWxlbWVudFxyXG5cclxuICB1c2FnZTpcclxuXHJcbiAgbmV3IFNlbGVjdExpc3RUYWcoc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMpLlxyXG5cclxuICAtIHNlbGVjdElkIChyZXF1aXJlZCk6IFRoZSBpZCBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgYWN0aW5nIGFzIHRoZSBzb3VyY2UgKG11c3QgaGF2ZSBtdWx0aXBsZSBhdHRyaWJ1dGUsIGFuZCBhbGwgaXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZClcclxuXHJcbiAgLSByZXZlcnRHcm91cHMgKG9wdGlvbmFsKTogVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBjbGlja2VkIHRvIHJldmVydCBzZWxlY3RlZCBvcHRpb25zIChzaG91bGQgaGF2ZSBpcy1oaWRkZW4gY2xhc3MgdG8gc3RhcnQpXHJcblxyXG4gIC0gb25VcGRhdGVGdW5jIChyZXF1aXJlZCk6IEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSB0YWcgaGFzIGJlZW4gcmVtb3ZlZCwgb3Igb3B0aW9ucyBhcmUgcmV2ZXJ0ZWQuLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggdHdvIHBhcmFtcywgc2VsZWN0ZWRPcHRpb25zIGFuZCBhbGxPcHRpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgaW50ZW5kZWQgdG8gbWFrZSB0aGUgY29udHJvbCBtb3JlIGZsZXhpYmxlIGkuZS4gb3VyIGZpcnN0IHVzYWdlIGlzIHRvIHVwZGF0ZSBsYWJlbCB3aXRoIHNlbGVjdGVkIGl0ZW1zIHRleHQgZWxzZXdoZXJlIG9uIHBhZ2Ugd2l0aG91dCBmdXJ0aGVyIGNvdXBsaW5nLlxyXG5cclxuKioqKioqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RMaXN0VGFncyB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMgPSAoKSA9PiB7fSkge1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyA9IG9uVXBkYXRlRnVuYztcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdElkKTtcclxuICAgICAgdGhpcy50YWdPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG5cclxuICAgICAgaWYgKHJldmVydEdyb3Vwc0lkKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXZlcnRHcm91cHNJZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICB0aGlzLnJldmVydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IG8uc2VsZWN0ZWQgPSB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hbGxPcHRpb25zID0gWy4uLnRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKV07XHJcbiAgICAgIGlmICh0aGlzLnJldmVydEJ0biAmJiB0aGlzLmFsbE9wdGlvbnMuc29tZShvID0+ICFvLnNlbGVjdGVkKSkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgICBcclxuICAgICAgdGhpcy50YWdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJ2knKSkge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0VmFsID0gZS50YXJnZXQuZGF0YXNldC52YWw7XHJcbiAgICAgICAgICBjb25zdCBvID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicrdGFyZ2V0VmFsKydcIl0nKTtcclxuICAgICAgICAgICAgICBpZihvKXtcclxuICAgICAgICAgICAgICAgICAgby5zZWxlY3RlZCA9IGZhbHNlOyAgIFxyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXZlcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTsgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YWdPcHRpb25zLmFmdGVyKHRoaXMudGFncyk7XHJcblxyXG4gICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVUYWdzKCkge1xyXG4gICAgICB0aGlzLnRhZ3MuaW5uZXJIVE1MID0gJyc7ICAgICAgXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWxsT3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKTtcclxuICAgICAgc2VsZWN0ZWRPcHRpb25zLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgdGhpcy50YWdzLmFwcGVuZENoaWxkKHRoaXMubWFrZVRhZyh0LmlubmVyVGV4dCwgdC52YWx1ZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMoc2VsZWN0ZWRPcHRpb25zLCB0aGlzLmFsbE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICBtYWtlVGFnKHRleHQsIHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGkuY2xhc3NMaXN0LmFkZChcImJ1dHRvbl9faWNvblwiKTsgICAgICBcclxuICAgICAgaS5kYXRhc2V0LnZhbD12YWx1ZTtcclxuICAgICAgaS5pbm5lclRleHQgPSBcImNsZWFyXCJcclxuXHJcbiAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnJyk7XHJcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XHJcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChpKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0YWc7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBTaG91bGQgaGF2ZSBhIHNlY3Rpb24gbGlrZSB0aGlzIGZvciBlYWNoIHBhZ2UgdGhlIGNvbnRyb2wgaXMgdXNlZCBvbiwgdW5sZXNzIHdlIHdhbnQgaXQgYmVoYXZlIGV4YWN0bHkgdGhlIHNhbWUgYXMgYSBwcmV2aW91cyB2ZXJzaW9uIChpbmNsdWRpbmcgaWRzIGFuZCB1cGRhdGUgZnVuY3Rpb24pIFxyXG4vLyAqQmV0dGVyIHN0aWxsKiAtIGhhdmUgaW4gc2VwZXJhdGUgc2NyaXB0IGZpbGUgc2NvcGVkIHRvIHNwZWNpZmljIHBhZ2UgKGxpa2Ugd2l0aCBTZWxlY3RTdGFmZkZvck1lc3NhZ2UuanMpXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sbG93dXBHcm91cFNlbGVjdG9yJykpIHtcclxuXHJcbiAgLy8gUHJlcGFyZSBhbiB1cGRhdGUgZnVuY3Rpb24gaWYgcmVxdWlyZWQgKG9wdGlvbmFsIHBhcmFtZXRlcilcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlR3JvdXBzTGFiZWxTcGFuJyk7XHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcGx1cmFsaXNlZEdyb3VwcyA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnZ3JvdXAnIDogJ2dyb3Vwcyc7XHJcbiAgICBzcGFuLmlubmVyVGV4dCA9IGBTZW5kIHRvICR7c2VsZWN0ZWRPcHRpb25zLmxlbmd0aH0gcmVzcG9uc2UgJHtwbHVyYWxpc2VkR3JvdXBzfWA7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXNlIGFuIGluc3RhbmNlIG9mIHRoZSBjb250cm9sXHJcbiAgbmV3IFNlbGVjdExpc3RUYWdzKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InLCAncmV2ZXJ0X2dyb3VwcycsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsIlxyXG4vLyBSZW1vdmUgdGhlIG5vLWpzIGNsYXNzIHNvIHdlIGFyZSBhYmxlIHRvIHRlbGwgdGhhdCBqcyBpcyBlbmFibGVkXHJcbi8vIFVzZWZ1bCBmb3IgaGlkaW5nIGVsZW1lbnRzIHdoZW4ganMgbm90IGF2YWlsYWJsZS5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpOyIsImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VzJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLWZpZWxkJyk7XHJcbiAgICAgICAgdmFyIGtleUFycmF5ID0gT2JqZWN0LmtleXMocmVzcG9uc2VzKTtcclxuICAgICAgICB2YXIgYWRkUmVzcG9uc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9yZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkUmVzcG9uc2UoKTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAga2V5QXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGtleSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIltjbGFzc349J3Jlc3BvbnNlLW9wdGlvbiddXCIpLnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIiNyZW1vdmVfcmVzcG9uc2VcIikgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIiNyZW1vdmVfcmVzcG9uc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZXNwb25zZShrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlUmVzcG9uc2Uoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGFkZFJlc3BvbnNlKHBhcnNlSW50KGtleSkgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkUmVzcG9uc2Uoa2V5KSB7XHJcblxyXG4gICAgICAgICAgICBrZXlBcnJheS5ldmVyeShmdW5jdGlvbihrZXkpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVJlc3BvbnNlKGtleSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgJiYgcmVzcG9uc2VzW2tleV0uZGF0YXNldC5rZXkgPT0ga2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChyZXNwb25zZXNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKFwiI1Jlc3BvbnNlc1wiKTtcclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmUnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRQaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRQaG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUGhvbmVCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZFBob25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KShcImFkZFBob25lXCIpO1xyXG5cclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRW1haWwnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRW1haWxCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZEVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KShcImFkZEVtYWlsXCIpO1xyXG5cclxufVxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzYXZlR3JvdXBCdXR0b24gIT1udWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pKFwiYWRkX2dyb3VwXCIpO1xyXG59XHJcblxyXG52YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbmlmIChncm91cFRleHRhcmVhICE9IG51bGwpIHtcclxuICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXQyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQyLm1hdGNoZXMoXCIuYnV0dG9uX19pY29uXCIpICYmIHRhcmdldDIuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG5cclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKSAhPW51bGwpIHtcclxuXHJcbiAgICB2YXIgaW5wdXRFcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJyk7XHJcbiAgICB2YXIgaW5wdXRFcnJvcnNBcnJheSA9IE9iamVjdC5rZXlzKGlucHV0RXJyb3JzKTtcclxuXHJcbiAgICBpbnB1dEVycm9yc0FycmF5LmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEVycm9yc1trZXldKTtcclxuICAgICAgICBpbnB1dEVycm9yc1trZXldLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbi8vICAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xyXG4vLyAgICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2lkZWJhclwiKS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG5cclxuLy8gfSkoXCIjU2lkZWJhclwiKTtcclxuXHJcbiIsIi8qIFxyXG4gIERlYm91bmNlIGZ1bmN0aW9uIHByZXZlbnQgZXhjZXNzaXZlIGNhbGxzIG9uIHNjcm9sbC5cclxuICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXHJcbiovXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcclxuXHR2YXIgdGltZW91dDtcclxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0fTtcclxufTsiLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjbWVudScpOyIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHN0YWZmIGNvbXBvc2UgcGFnZS5cclxuKi9cclxuXHJcbmltcG9ydCBJZENvb2tpZUhlbHBlciBmcm9tICcuLi9JZENvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBTZWxlY3RMaXN0VGFncyBmcm9tICcuLi9TZWxlY3RMaXN0VGFncyc7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1jb21wb3NlJykpIHtcclxuXHJcbiAgY29uc3QgY2ggPSBuZXcgSWRDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVXNlcklkcycpO1xyXG4gIFxyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGNoLnNldElkcyhzZWxlY3RlZE9wdGlvbnMubWFwKHggPT4geC52YWx1ZSkpO1xyXG4gIH1cclxuICBcclxuICBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0FzY1N0YWZmU2VsZWN0b3InLCBudWxsLCBvblVwZGF0ZUZ1bmMpOyBcclxufVxyXG4iLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzZWFyY2ggc3RhZmYgcGFnZS5cclxuKi9cclxuaW1wb3J0IElkQ29va2llSGVscGVyIGZyb20gJy4uL0lkQ29va2llSGVscGVyJztcclxuaW1wb3J0IERyYWZ0TWVzc2FnZURyYXdlciBmcm9tICcuLi9EcmFmdE1lc3NhZ2VEcmF3ZXInO1xyXG5pbXBvcnQgTGF6eUxvYWRlciBmcm9tICcuLi9MYXp5TG9hZGVyJztcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5pZiAobWFpbiAmJiBtYWluLmNsYXNzTGlzdC5jb250YWlucygnYXNjLXN0YWZmLWluZGV4JykpIHtcclxuXHJcbiAgY29uc3QgY2ggPSBuZXcgSWRDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVXNlcklkcycpO1xyXG4gIGNvbnN0IGRtZCA9IG5ldyBEcmFmdE1lc3NhZ2VEcmF3ZXIoY2guZ2V0Q291bnQoKSk7XHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG5cclxuICBjb25zdCB1c2Vyc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLXNlbGVjdC1zdGFmZicpO1xyXG4gIGxldCB1c2Vyc1RhYmxlQm9keTtcclxuICBpZih1c2Vyc1RhYmxlKSB7XHJcbiAgIHVzZXJzVGFibGVCb2R5ID0gdXNlcnNUYWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gIGNvbnN0IGNyaXRlcmlhS2V5ID0gJ2NyaXRlcmlhJztcclxuICBcclxuICBsZXQgc2VhcmNoQ3JpdGVyaWFTdHJpbmcgPSB1cmxQYXJhbXMuaGFzKGNyaXRlcmlhS2V5KSA/IGA/Y3JpdGVyaWE9JHt1cmxQYXJhbXMuZ2V0KGNyaXRlcmlhS2V5KX1gIDogJyc7XHJcblxyXG4gIGNvbnN0IGdldFNlYXJjaEVuZHBvaW50ID0gKCkgPT4gYCR7bG9jYXRpb24ub3JpZ2lufS9Gb3JjZS9Db250YWN0cy8ke2N1cnJlbnRQYWdlfSR7c2VhcmNoQ3JpdGVyaWFTdHJpbmd9YDtcclxuICBcclxuICAvLyBBZGQgbGlzdGVuZXJzIGZvciB0aGUgY2hlY2tib3hlc1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoe3RhcmdldH0pID0+IHtcclxuICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0LmNoZWNrZWQgPyBjaC5hZGQodGFyZ2V0LnZhbHVlKSA6IGNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjcmVhdGVDaGVja2JveEZpZWxkID0gKHZhbHVlLCBjaGVja2VkKSA9PiB7ICBcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jZWxsJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaW5wdXQuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlQ2VsbFdpdGhUZXh0ID0gdGV4dCA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGNlbGwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUm93ID0gdXNlciA9PiB7XHJcbiAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5uYW1lKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuY29sbGFyKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2VsbFdpdGhUZXh0KHVzZXIuZW1haWwpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5waG9uZU51bWJlcikpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrYm94RmllbGQodXNlci5jb2xsYXIsIGNoLmhhc0lkKHVzZXIuY29sbGFyKSkpO1xyXG5cclxuICAgIHVzZXJzVGFibGVCb2R5LmFwcGVuZChuZXdSb3cpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUmVzdWx0Um93cyA9IHJvd3MgPT4ge1xyXG4gICAgcm93cy5mb3JFYWNoKGFkZFJvdyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaWYgKGxvYWRlcikge1xyXG4gICAgbmV3IExhenlMb2FkZXIobG9hZGVyLCBhc3luYyBkb25lID0+IHtcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIG5leHQgcGFnZSBpbmRleFxyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBnZXRTZWFyY2hFbmRwb2ludCgpO1xyXG5cclxuICAgICAgICAvLyBEbyB0aGUgc2VhcmNoXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goZW5kcG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1Jlc3VsdHMgPSByZXN1bHRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIGlmIChoYXNSZXN1bHRzKSB7ICAgICAgICAgIFxyXG4gICAgICAgICAgYWRkUmVzdWx0Um93cyhyZXN1bHRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbmUoaGFzUmVzdWx0cyk7ICBcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlKSB7ICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbGF6eSBsb2FkIHBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgQUQgdXNlcnNgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIC8vIElnbm9yZSBjdXJyZW50IGZhaWxlZCBwYWdlLCBzbyB3aWxsIHRyeSBhZ2FpblxyXG4gICAgICAgIGN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgZG9uZSh0cnVlKTsgLy8gQ2FsbCBkb25lIHdpdGggbW9yZSB0byBsb2FkLlxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgdG8gZG8gaGVyZS4gSWYgZW5wb2ludCBpcyBkb3duLCB3ZSB3b3VsZCBnZXQgbG90cyBvZiBjb25zb2xlIGVycm9ycyBhdCB0aGUgbW9tZW50Li4uLlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSwgeyBkZWJ1ZzogZmFsc2UsIHBlZWtEaXN0YW5jZTogNTAgfSk7XHJcbiAgfSAgXHJcbn1cclxuIiwiLyogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbixcclxudG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4vLyBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4vLyAgICB2YXIgYXNpZGVFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIik7XHJcbi8vICAgICBpZihhc2lkZUV4aXN0KXtcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XHJcbiAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcclxuICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG52YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbmlmIChhZGRHcm91cEJ1dHRvbikge1xyXG5cclxuYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG52YXIgY2xvc2VTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlX3NpZGViYXInKTtcclxuXHJcbmlmIChjbG9zZVNpZGViYXIpIHtcclxuXHJcbmNsb3NlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XHJcbiAgdmFyIHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgLy8gaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAvLyAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGlmICgheC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIHguY2xhc3NMaXN0LmFkZCgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LmFkZCgnbWFpbi0taGlkZGVuJyk7XHJcbiAgICAgIC8vIH1cclxuICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiLy8gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgIGNvbnN0IHNuYWNrYmFyU3RvcmFnZUl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NuYWNrYmFyJyk7XHJcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgdmFyIGNvbnRhY3RQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0NvbnRhY3RBZGRlZCcpO1xyXG4gICAgdmFyIE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcclxuICAgIHZhciBNZXNzYWdlU2VudFBhcmFtID0gdXJsUGFyYW1zLmdldCgnTWVzc2FnZVNlbnQnKTtcclxuXHJcbiAgICB2YXIgc25hY2tiYXJNZXNzYWdlID0gJyc7XHJcblxyXG4gICAgLy9jaGVjayBpZiBsb2NhbFN0cm9yYWdlICdzbmFja2JhcicgZXhpc3RzIGFuZCBpZiBpdCBkb2VzbnQgc2V0dXAgb2JqZWN0IHJlYWR5IGZvciBldmVudExpc3RlbmVyXHJcbiAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gSlNPTi5wYXJzZShzbmFja2JhclN0b3JhZ2VJdGVtKTtcclxuXHJcbiAgICAgICAgLy9jaGVjayBpZiBsb2NhbFN0cm9yYWdlICdzbmFja2JhcicgYWxyZWFkeSBjb250YWlucyBjdXJyZW50IHBhZ2UgcGF0aFxyXG4gICAgICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgaXQgZG9lcyB0aGVuIGhpZGUgdGhlIHNuYWNrYmFyXHJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gIHtcclxuICAgICAgICAgICAgbG9jYXRpb25zIDogbmV3IEFycmF5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRhY3RQYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBjb250YWN0IGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoT3JnYW5pc2F0aW9uUGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgb3JnYW5pc2F0aW9uIGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG4gICAgfSBlbHNlIGlmIChNZXNzYWdlU2VudFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTWVzc2FnZSBzZW50JztcclxuICAgIH0gZWxzZSBpZiAoc25hY2tiYXIpIHtcclxuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NuYWNrYmFyJywgSlNPTi5zdHJpbmdpZnkoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5KSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc25hY2tiYXJNZXNzYWdlKSB7XHJcbiAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LmFkZCgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIHNuYWNrYmFyLmlubmVySFRNTCA9IHNuYWNrYmFyTWVzc2FnZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QucmVtb3ZlKCdzbmFja2Jhci0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcblxyXG59KShcIiNzbmFja2JhclwiKTtcclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIC8vZnVuY3Rpb24gdG8gbWFrZSB3aG9sZSB0YWJsZSB0ciBjbGlja2FibGVcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHRyJykuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG5cclxuLy8gICAgICAgICBpZiAoZWwuZGF0YXNldC5ocmVmICE9bnVsbCkge1xyXG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcclxuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmRhdGFzZXQuaHJlZjtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KShcInRhYmxlXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9