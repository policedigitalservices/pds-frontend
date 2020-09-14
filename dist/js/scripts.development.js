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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQm90dG9tRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0RyYWZ0TWVzc2FnZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR3JvdXBzVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvSWRDb29raWVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xhenlMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VsZWN0TGlzdFRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NpbXBsZUNvb2tpZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGludC1zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ29tcG9zZVN0YWZmTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZXMvQ291cmllclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL1NlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmxlcy5qcyJdLCJuYW1lcyI6WyJCb3R0b21EcmF3ZXIiLCJfb3BlbkNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJDaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIiLCJidXR0b25TZWxlY3RvciIsImNoZWNrYm94U2VsZWN0b3IiLCJfYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwiX2NoZWNrYm94IiwiY2hlY2tlZCIsIl9kaXNhYmxlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJfZW5hYmxlQnV0dG9uIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiRHJhZnRNZXNzYWdlRHJhd2VyIiwibnVtYmVyT2ZSZWNpcGllbnRzIiwidG90YWxTZWxlY3RvciIsImNvb2tpZUhlbHBlciIsIlNpbXBsZUNvb2tpZUhlbHBlciIsIl90b3RhbHNFbGVtZW50IiwidGV4dENvbnRlbnQiLCJnZXQiLCJfYm90dG9tRHJhd2VyIiwidXBkYXRlIiwiaW5uZXJUZXh0Iiwic2hvdyIsImhpZGUiLCJncm91cEV4aXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VDaGVja2JveGVzIiwiaGFzQXR0cmlidXRlIiwidXNlU2luZ2xlU2VsZWN0Q2hlY2tib3giLCJsb2NrUm9vdE5vZGUiLCJzZWxlY3RvciIsImludGlhbGx5U2VsZWN0ZWROb2RlcyIsImdyb3VwU2VsZWN0IiwiZ3JvdXBUZXh0YXJlYSIsInBhcmVudEVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvbnNOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInZhbHVlIiwibWF0Y2hlcyIsInBhdGhUb1VuY2hlY2siLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiY2JTZWxlY3RvciIsImNoZWNib3hUb1VuY2hlY2siLCJjbGljayIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJidWlsZENoZWNrYm94IiwicGFyZW50Q2hlY2tlZCIsImNoZWNrYm94IiwidHlwZSIsIm5hbWUiLCJpZCIsIm5ld1BhcmVudFNlbGVjdGVkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsImxhYmVsIiwiY2hlY2tTcGFuIiwiYm9yZGVyU3BhbiIsImFwcGVuZENoaWxkIiwiYnVpbGRDaGVja2JveExhYmVsIiwiY2hlY2tib3hMYWJlbCIsImlubmVySFRNTCIsImZvciIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwicGFyZW50Tm9kZSIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkQ2hlY2tib3hlcyIsImhpZGRlbkZpZWxkIiwic3RydWN0dXJlIiwib3B0aW9uX2kiLCJvcHRpb24iLCJzZWdtZW50cyIsInNwbGl0Iiwibm9kZVRvQ2hlY2siLCJzZWdtZW50X2kiLCJzZWciLCJ0cmVlQ29udGFpbmVyIiwiYWN0aXZlQ2hpbGRyZW4iLCJhY19pIiwiYWN0aXZlQ2hpbGQiLCJkaXNwbGF5Q2hpbGRLZXlzIiwiY3VyclRleHQiLCJjdXJyUGF0aCIsIm9iaiIsImVsZW1lbnRUb0FkZFRvIiwibGV2ZWwiLCJwYXJlbnRzQ2hlY2tlZCIsImNoaWxkS2V5cyIsIk9iamVjdCIsImtleXMiLCJwYXJlbnRDaGVja2VkU3RhdGUiLCJjaGlsZExpc3RJdGVtIiwiY2hpbGRMaXN0IiwiY2tfaSIsImNoaWxkS2V5IiwicmVwbGFjZUNoaWxkIiwiSWRDb29raWVIZWxwZXIiLCJfbmFtZSIsIl9pZHMiLCJTZXQiLCJfaW5pdGlhbGlzZSIsImNvb2tpZVN0cmluZyIsImNvb2tpZSIsImNvb2tpZXMiLCJtYXRjaGluZ0Nvb2tpZSIsImZpbmQiLCJjIiwiX3BlcnNpc3QiLCJtYXRjaGluZ1ZhbHVlVG9TcGxpdCIsImZpbHRlciIsImlkcyIsImdldElkcyIsImpvaW5lZElkcyIsImpvaW4iLCJuZXdDb29raWUiLCJfdXBkYXRlIiwiZ2V0Q291bnQiLCJzaXplIiwiZGVsZXRlIiwiaGFzIiwiQ291cmllckxhenlMb2FkZXIiLCJsb2FkZXJFbGVtZW50IiwibG9hZGVyRm4iLCJjb25maWdPYmoiLCJjb25maWdEZWZhdWx0cyIsImxvYWRlckNsYXNzIiwibG9hZGVyTG9hZGluZ0NsYXNzIiwiZGVib3VuY2VNcyIsInBlZWtEaXN0YW5jZSIsImRlYnVnIiwiX2xvYWRlciIsIl9sb2FkZXJGdW5jIiwiX2NvbmZpZyIsIl9oYXNMaXN0ZW5lcnNBZGRlZCIsIl9sYXp5TG9hZENoZWNrIiwiZGVib3VuY2UiLCJfZG9Mb2FkTW9yZUNoZWNrIiwiX2NvbmRpdGlvbmFsRGVidWdMb2ciLCJfc3RvcExpc3RlbmluZyIsIl9kb25lU2VhcmNoaW5nIiwiX3N0YXJ0TGlzdGVuaW5nIiwiYmluZCIsInZpc2libGUiLCJtb3JlVG9Mb2FkIiwiX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b0RlYnVnIiwibG9nZ2VyRnVuYyIsImNvbnNvbGUiLCJsb2ciLCJoaWdoZXN0VmlzaWJsZVlQb3MiLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJsb2FkTW9yZVRyaWdnZXJQb3MiLCJNYXRoIiwibWluIiwib2Zmc2V0VG9wIiwicGVla1Bvc2l0aW9uVmlzaWJsZSIsInNob3VsZExvYWRNb3JlIiwidGFibGUiLCJzaG93TW9yZVRhYmxlQnV0dG9ucyIsImZvckVhY2giLCJzaG93QWxsQnV0dG9uIiwidGFibGVJZCIsImRlZmF1bHRJdGVtTGltaXQiLCJwYXNzZWRJdGVtTGltaXQiLCJwYXJzZWRJdGVtTGltaXQiLCJwYXJzZUludCIsImxpbWl0VG9Vc2UiLCJpc05hTiIsInRhYmxlQm9keSIsInRCb2RpZXMiLCJ0YWJsZUJvZHlMZW5ndGgiLCJyb3dzIiwiYm9keVJvdyIsInN0eWxlIiwiZGlzcGxheSIsImVsIiwiU2VsZWN0TGlzdFRhZ3MiLCJzZWxlY3RJZCIsInJldmVydEdyb3Vwc0lkIiwib25VcGRhdGVGdW5jIiwidGFnT3B0aW9ucyIsInJldmVydEJ0biIsIm8iLCJwb3B1bGF0ZVRhZ3MiLCJhbGxPcHRpb25zIiwic29tZSIsInRhZ3MiLCJ0YXJnZXRWYWwiLCJkYXRhc2V0IiwidmFsIiwiYWZ0ZXIiLCJzZWxlY3RlZE9wdGlvbnMiLCJ0IiwibWFrZVRhZyIsInRhZyIsImNyZWF0ZVRleHROb2RlIiwic3BhbiIsInBsdXJhbGlzZWRHcm91cHMiLCJfdmFsdWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXNwb25zZXMiLCJyZXNwb25zZXNMaXN0IiwicmVzcG9uc2UiLCJpZHgiLCJ0cmltIiwic2hvd0ZpcnN0RW1weUl0ZW0iLCJjdXJyZW50UmVzcG9uc2UiLCJjb3B5SXRlbXNGb3J3YXJkIiwiaW5kZXgiLCJwcmV2SW5wdXQiLCJpbnB1dCIsInJlbW92ZUxhc3RFbXB0eUl0ZW0iLCJyZW1vdmVJZHgiLCJhZGRSZXNwb25zZUJ1dHRvbiIsImJsdXIiLCJhZGRQaG9uZUlucHV0IiwiYWRkUGhvbmVCdXR0b24iLCJhZGRFbWFpbElucHV0IiwiYWRkRW1haWxCdXR0b24iLCJhZGRHcm91cEJ1dHRvbiIsInNhdmVHcm91cEJ1dHRvbiIsInRhcmdldDIiLCJpbnB1dEVycm9ycyIsImlucHV0RXJyb3JzQXJyYXkiLCJjbG9zZXN0IiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzbmFja2JhclN0b3JhZ2VJdGVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNuYWNrYmFyIiwic25hY2tiYXJTdG9yYWdlSXRlbUFycmF5IiwiSlNPTiIsInBhcnNlIiwibG9jYXRpb25zIiwiaW5jbHVkZXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibWVudSIsIm1lbnVCdXR0b24iLCJtZW51Q2hpbGQiLCJtYWluIiwiYWRkQnRuIiwic3ViamVjdElucHV0IiwibWVzc2FnZUlucHV0IiwicmVzZW5kSW5wdXQiLCJyZXNwb25zZU9wdGlvbnMiLCJjb29raWVNZXNzYWdlSGVscGVyIiwiY29va2llQXV0b1Jlc2VuZEhlbHBlciIsImNvb2tpZVJlc3BvbnNlSGVscGVyIiwiY29va2llSWRzSGVscGVyIiwiZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmciLCJub25FbXB0eU9wdGlvbnMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic2V0Iiwic2V0SWRzIiwieCIsIm5ld1Bob25lUm93IiwibmV3UGhvbmUiLCJjbGFzc05hbWUiLCJfcmVudW1iZXJJbnB1dHMiLCJpZGVudGlmaWVyIiwiaW5wdXRzIiwiaW5wIiwic3BuIiwibmV3RW1haWxSb3ciLCJhZGRQaG9uZUJ0biIsImFkZEVtYWlsQnRuIiwicmVtb3ZlRW1haWxCdXR0b25zIiwicmVtb3ZlUGhvbmVCdXR0b25zIiwiY29udGFjdFByb2ZpbGVGb3JtIiwiZW1wdHlJbnB1dHNUb1JlbW92ZSIsImVtcHR5SW5wdXQiLCJmb3JtR3JvdXAiLCJjaCIsImRtZCIsImxvYWRlciIsInVzZXJzVGFibGUiLCJ1c2Vyc1RhYmxlQm9keSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjcml0ZXJpYUtleSIsInNlYXJjaENyaXRlcmlhU3RyaW5nIiwiZ2V0U2VhcmNoRW5kcG9pbnQiLCJzdGFmZlRhYmxlIiwibmV3VG90YWwiLCJjcmVhdGVDaGVja2JveEZpZWxkIiwiY2VsbCIsImNyZWF0ZUNlbGxXaXRoVGV4dCIsImFkZFJvdyIsInVzZXIiLCJuZXdSb3ciLCJjb2xsYXIiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiaGFzSWQiLCJ0b1N0cmluZyIsImFkZFJlc3VsdFJvd3MiLCJsb2FkZXJQYWdlU2l6ZSIsIkxhenlMb2FkZXIiLCJkb25lIiwiZW5kcG9pbnQiLCJmZXRjaCIsImpzb24iLCJyZXN1bHRzIiwiaGFzUmVzdWx0cyIsIm1vcmVSZXN1bHRzTGlrZWx5IiwiZXJyb3IiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsInkiLCJjb250YWN0UGFyYW0iLCJPcmdhbmlzYXRpb25QYXJhbSIsIk1lc3NhZ2VTZW50UGFyYW0iLCJGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0iLCJzbmFja2Jhck1lc3NhZ2UiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFD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QUFDQSxNQUFJNlgsd0JBQXdCLEdBQUd4QyxTQUFTLENBQUNyVixHQUFWLENBQWMscUJBQWQsQ0FBL0I7QUFFQSxNQUFJOFgsZUFBZSxHQUFHLEVBQXRCOztBQUVBLE1BQUlKLFlBQVksS0FBSyxNQUFyQixFQUE2QjtBQUN6QkksbUJBQWUsR0FBRyw4QkFBbEI7QUFDSCxHQUZELE1BRU8sSUFBSUgsaUJBQWlCLEtBQUssTUFBMUIsRUFBa0M7QUFDckNHLG1CQUFlLEdBQUcsbUNBQWxCO0FBQ0gsR0FGTSxNQUVBLElBQUlGLGdCQUFnQixLQUFLLE1BQXpCLEVBQWlDO0FBQ3BDRSxtQkFBZSxHQUFHLGNBQWxCO0FBQ0gsR0FGTSxNQUVBLElBQUlELHdCQUF3QixJQUFJQSx3QkFBd0IsQ0FBQ0UsV0FBekIsT0FBMkMsTUFBM0UsRUFBbUY7QUFDdEZELG1CQUFlLEdBQUcsa0NBQWxCO0FBQ0g7O0FBRUQsTUFBSUEsZUFBSixFQUFxQjtBQUNqQi9GLFlBQVEsQ0FBQ3pULFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUF2QjtBQUNBd1QsWUFBUSxDQUFDcE4sU0FBVCxHQUFxQm1ULGVBQXJCO0FBRUFuRyxjQUFVLENBQUMsWUFBVTtBQUNqQkksY0FBUSxDQUFDelQsU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsa0JBQTFCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBRUosQ0FoQ0QsRUFnQ0csV0FoQ0gsRTs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGUiLCJmaWxlIjoiZGlzdC9qcy9zY3JpcHRzLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKlxyXG4gQ2xhc3MgdGhhdCBmYWNpbGl0YXRlIHRoZSBoaWRpbmcgYW5kIHNob3dpbmcgb2YgdGhlIGJvdHRvbSBiYXIuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdHRvbURyYXdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9vcGVuQ2xhc3MgPSBcImJvdHRvbS1kcmF3ZXItb3BlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcbn07IiwiLy8gRGlzYWJsZXMgYW5kIGVuYWJsZXMgYSBidXR0b24gYnkgd2hldGhlciBvciBub3QgYSBjaGVja2JveCBpcyBzZWxlY3RlZC5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hEaXNhYmxlQnV0dG9uSGVscGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1dHRvblNlbGVjdG9yLCBjaGVja2JveFNlbGVjdG9yKSB7XHJcbiAgICAgICAgLy8gR3JhYiB0aGUgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b25TZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9idXR0b24pIHRocm93IG5ldyBFcnJvcihcIkJ1dHRvbiBzZWxlY3RvciBkb2VzbnQgbWF0Y2ggYW4gZWxlbWVudFwiKTtcclxuICAgICAgICAvLyBHcmFiIHRoZSBjaGVja2JveFxyXG4gICAgICAgIHRoaXMuX2NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjaGVja2JveFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrYm94KSB0aHJvdyBuZXcgRXJyb3IoXCJDaGVja2JveCBzZWxlY3RvciBkb2VzbnQgbWF0Y2ggYW4gZWxlbWVudFwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVzcGVjdCB0aGUgY2hlY2tib3hlcyBzdGFydGluZyBzdGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYW5kIGV2ZW50IGxpc3RlbmVyIHRoYXQgZW5hYmxlcyBhbmQgZGlzYWJsZXMgdGhlIGJ1dHRvbi5cclxuICAgICAgICB0aGlzLl9jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID9cclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXNhYmxlcyB0aGUgYnV0dG9uXHJcbiAgICBfZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLl9idXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuYWJsZXMgdGhlIGJ1dHRvblxyXG4gICAgX2VuYWJsZUJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLl9idXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuL0JvdHRvbURyYXdlcic7XHJcbmltcG9ydCBTaW1wbGVDb29raWVIZWxwZXIgZnJvbSAnLi9TaW1wbGVDb29raWVIZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZnRNZXNzYWdlRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlck9mUmVjaXBpZW50cywgdG90YWxTZWxlY3Rvcj1cIi5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdG90YWxcIikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVGl0bGUnKTtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b3RhbFNlbGVjdG9yKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZnQtbWVzc2FnZS1kcmF3ZXJfX3RpdGxlJykudGV4dENvbnRlbnQgPSBjb29raWVIZWxwZXIuZ2V0KCkgfHwgJ1VudGl0bGVkJztcclxuICAgICAgICBpZiAoIXRoaXMuX3RvdGFsc0VsZW1lbnQpIHsgdGhyb3cgRXJyb3IoYE5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHBhc3NlZCBpbiBzZWxlY3RvciAke3RvdGFsU2VsZWN0b3J9YCk7IH1cclxuICAgICAgICB0aGlzLl9ib3R0b21EcmF3ZXIgPSBuZXcgQm90dG9tRHJhd2VyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgdXBkYXRlKG51bWJlck9mUmVjaXBpZW50cykge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQuaW5uZXJUZXh0ID0gbnVtYmVyT2ZSZWNpcGllbnRzO1xyXG4gICAgICAgIG51bWJlck9mUmVjaXBpZW50cyA/IHRoaXMuX2JvdHRvbURyYXdlci5zaG93KCkgOiB0aGlzLl9ib3R0b21EcmF3ZXIuaGlkZSgpO1xyXG4gICAgfVxyXG59IiwiIHZhciBncm91cEV4aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFwiKTtcclxuICAgIGlmKGdyb3VwRXhpc3Qpe1xyXG5cclxuICAgICAgICB2YXIgdXNlQ2hlY2tib3hlcyA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtY2hlY2tib3gnKTtcclxuICAgICAgICB2YXIgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLXNpbmdsZS1zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgICB2YXIgbG9ja1Jvb3ROb2RlID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9jay1yb290Jyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgIC8vQ2hlY2sgb24gcGFnZSB3aGV0aGVyIEdyb3VwIE11bHRpIFNlbGVjdCBleGlzdHNcclxuICAgIHZhciBpbnRpYWxseVNlbGVjdGVkTm9kZXMgPSBbXTtcclxuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBTZWxlY3RvclwiKTtcclxuICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuICAgIC8vIElmIHRoZSBHcm91cCBNdWx0aSBTZWxlY3QgZG9lcyBleGlzdCwgaGlkZSBpdCAoaWYgSlMgZW5hYmxlZClcclxuICAgIGlmIChncm91cFNlbGVjdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGdyb3VwU2VsZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICBncm91cFRleHRhcmVhLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgLy8gR3JhYiBhbGwgdGhlIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkXHJcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uc05vZGVzID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE9wdGlvbnNOb2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgaW50aWFsbHlTZWxlY3RlZE5vZGVzLnB1c2goc2VsZWN0ZWRPcHRpb25zTm9kZXNbaV0udmFsdWUgfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudGFnPi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoVG9VbmNoZWNrID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGF0aFwiKS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2JTZWxlY3RvciA9ICdpbnB1dFt0eXBlPWNoZWNrYm94XS5Hcm91cEl0ZW1bdmFsdWU9XCInK3BhdGhUb1VuY2hlY2srJ1wiXSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2JveFRvVW5jaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2JTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2JveFRvVW5jaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNib3hUb1VuY2hlY2suY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWFyY2hQYXJ0cyA9IChmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xyXG4gICAgICAgIHZhciB2YXJzID0ge307XHJcbiAgICAgICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCBmdW5jdGlvbihtLGtleSx2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2dyb3VwPVwiO1xyXG4gICAgdmFyIGdyb3VwUGFyYW0gPSBzZWFyY2hQYXJ0cy5ncm91cDtcclxuICAgIHZhciBzZWFyY2hQYXJhbSA9IHNlYXJjaFBhcnRzLlNlYXJjaDtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBidWlsZCB0aGUgcGF0aFxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVBhdGhGb3JHcm91cChncm91cCkge1xyXG4gICAgICB2YXIgZ3JwID0gZ3JvdXAgPT09IFwiXCIgPyBcIlxcXFxcIiA6IGdyb3VwO1xyXG4gICAgICByZXR1cm4gcGFnZVBhdGggKyBncnA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkIHNob3VsZCBiZSBvcGVuIGkuZS4gdG8gcmV2ZWFsIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIHNob3VsZFBhcmVudEJlT3BlbihwYXRoKSB7XHJcbiAgICAgICAgaWYgKCFncm91cFBhcmFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggKyBcIlxcXFxcIik7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwUGFyYW0uc3RhcnRzV2l0aChwYXRoVG9DaGVjaykgJiYgZ3JvdXBQYXJhbSAhPSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGRlZCBpcyB0aGUgY3VycmVudGx5U2VsZWN0ZWRHcm91cFxyXG4gICAgZnVuY3Rpb24gaXNTZWxlY3RlZEdyb3VwKHBhdGgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zVG9DaGVjayA9IGRlY29kZVVSSUNvbXBvbmVudChncm91cFBhcmFtIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCB8fCBcIlxcXFxcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXNUb0NoZWNrID09PSBwYXRoVG9DaGVjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgbGluayBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZExpbmsodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgbGluay5ocmVmID0gZ2V0UGFnZVBhdGhGb3JHcm91cChwYXRoKTtcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlua1wiKTtcclxuXHJcbiAgICAgICAgLy8gTkIuICBPcmlnaW5hbGx5IHdlIGRpZG50IHdhbnQgdGhlIGN1cnJlbnQgY2xhc3MgdG8gYmUgYWRkZWQgaWYgZG9pbmcgYSBzZWFyY2gsIGJ1dCB0aGluayB3ZSBkbyBub3cuXHJcbiAgICAgICAgLy8gaWYgKCghc2VhcmNoUGFyYW0pICYmICBpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcclxuICAgICAgICAvLyBpZiAoaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XHJcbiAgICAgICAgLy8gICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gbGluaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggbGFiZWwgZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiR3JvdXBJdGVtXCIpO1xyXG4gICAgICAgIGNoZWNrYm94Lm5hbWUgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94LnZhbHVlID0gcGF0aDtcclxuICAgICAgICBjaGVja2JveC5pZCA9IHRleHQ7XHJcbiAgICAgICAgdmFyIG5ld1BhcmVudFNlbGVjdGVkID0gcGFyZW50Q2hlY2tlZDtcclxuXHJcbiAgICAgICAgaWYgKHBhdGggPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIHRoZSByb290IG5vZGUgc2hvdWxkIGJlIGRpc2FibGVkIGFuZCBjaGVja2VkIEJVVCB0aGUgY2hpbGRyZW4gb2YgdGhpcyBub2RlIHNob3VsZCBhY3QgYXMgdGhvdWdoIGl0IGlzbnQgY2hlY2tlZCBzbyB3ZSBkb250IHVwZGF0ZSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENoZWNrZWQgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYWxsIGl0cyBjaGlsZHJlbiBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgbm90IGNoZWNrZWQgaXRzIGNoaWxkcmVuIHNlbGVjdGVkIHN0YXRlIGRlcGVuZCBvbiB0aGUgY2hpbGRzIHZhbHVlLCBhbmQgbm90IGJlIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHZhciBuZXdDaGVja2VkID0gaW50aWFsbHlTZWxlY3RlZE5vZGVzLmluZGV4T2YocGF0aCB8fCAnXFxcXCcpID49IDA7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgICAgICBuZXdQYXJlbnRTZWxlY3RlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdHlsZSBhcyBhIHJhZGlvIGJ1dHRvblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBjaGVja1NwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2NoZWNrJyk7XHJcbiAgICAgICAgICAgIHZhciBib3JkZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19ib3JkZXInKTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tTcGFuKTtcclxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoYm9yZGVyU3Bhbik7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19pbnB1dCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveCA9IGxhYmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtjaGVja2JveCwgbmV3UGFyZW50U2VsZWN0ZWR9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkge1xyXG4gICAgICAgIHZhciBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjaGVja2JveExhYmVsLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5mb3IgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2tib3hMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFuc2ZlclZhbHVlcygpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgZWxlbXM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Hcm91cEl0ZW0nKVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8ZWxlbXMubGVuZ3RoO2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb2NrUm9vdE5vZGUgJiYgIShlbGVtc1tpXS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOby1vcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbXNbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChlbGVtc1tpXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSkge1xyXG5cclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcbiAgICAgICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnR3JvdXBTZWxlY3RvcicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nT3B0aW9uVmFsdWVzID0gQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfaSA9IDA7IGRhdGFfaSA8IGRhdGEubGVuZ3RoOyBkYXRhX2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9jdXJyZW50ID0gZGF0YVtkYXRhX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj5BbGwgQ29udGFjdCBHcm91cHM8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+JyArIGRhdGFfY3VycmVudC5zdWJzdHJpbmcoMSkgKyAnPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgb3B0aW9uIGV4aXN0cyAtIGFkZCBpdCBpZiBub3RcclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ09wdGlvblZhbHVlcy5pbmRleE9mKGRhdGFfY3VycmVudCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gZGF0YV9jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhX2N1cnJlbnQ7XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uc1tpXS5zZWxlY3RlZCA9IGRhdGEuaW5kZXhPZihlbGVtZW50Lm9wdGlvbnNbaV0udmFsdWUpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKHBhcmVudCwgdGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIGlmICh1c2VDaGVja2JveGVzIHx8IHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCB0aGUgYmxhbmsgdmFsdWUgZm9yICdBbGwgQ29udGFjdCBHcm91cHMnXHJcbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXFxcXFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRDaGVja2JveExhYmVsKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrYm94UmVzdWx0ID0gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKTtcclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmNoZWNrYm94KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94UmVzdWx0Lm5ld1BhcmVudFNlbGVjdGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGluayB0byByZWZyZXNoIHBhZ2Ugd2l0aCBzZWxlY3RlZCBub2RlLlxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnVpbGRMaW5rKHRleHQsIHBhdGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudENoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY3VycmVudCwgY2hpbGRyZW4sIHVwZGF0ZXJGbikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRMb29wQ2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMb29wQ2hpbGQgIT09IGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZXJGbihjdXJyZW50TG9vcENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKGUsIGNoZWNrYm94KSB7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRMaSA9IGNoZWNrYm94LnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gY2Fubm90IGJlIGRlc2VsZXRlZC5cclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbGxHcm91cENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGFsbEdyb3VwQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXJlbnRMaS5jbGFzc0xpc3QuY29udGFpbnMoJ2dyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50Jykpe1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjaGlsZENoZWNrYm94ZXMgPSBwYXJlbnRMaS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JhYiB0aGUgc2VsZWN0IGxpc3QgYW5kIGFsbCBvZiBpdHMgb3B0aW9uc1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcblxyXG4gICAgdmFyIGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZ3JvdXBQYXJhbSB8fCAnXFxcXCc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGNvbGxlY3Rpb25zIHdpdGggc3RhcnRpbmcga2V5IGZvciB0aGUgcm9vdC5cclxuICAgIHZhciBzdHJ1Y3R1cmUgPSB7IFwiXFxcXFwiOiB7fSB9O1xyXG5cclxuICAgIC8vIEJ1aWxkIG9uIHRoZSBiYXNlIHN0cnVjdHVyZSBieSBsb29waW5nIHRocm91Z2ggZWFjaCBzZWxlY3QgaXRlbS5cclxuICAgIGZvciAodmFyIG9wdGlvbl9pPTA7IG9wdGlvbl9pPG9wdGlvbnMubGVuZ3RoOyBvcHRpb25faSsrKSB7XHJcblxyXG4gICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW29wdGlvbl9pXTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSB0aGUgZ3JvdXAgbmFtZSBpbnRvIGFsbCBpdHMgcGF0aCBzZWdtZW50c1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBvcHRpb24udGV4dENvbnRlbnQuc3BsaXQoXCJcXFxcXCIpO1xyXG4gICAgICAgICAgICAvLyBTdGFydCBhdCB0aGUgcm9vdCBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgbm9kZVRvQ2hlY2sgPSBzdHJ1Y3R1cmVbXCJcXFxcXCJdO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yIGVhY2ggc2VnbWVudCBlbnN1cmUgdGhhdCBhbGwgbGV2ZWxzIG9mIHRoZSBzdHJ1Y3R1cmUgYXJlIGluIHBsYWNlLlxyXG4gICAgICAgICAgICBmb3IgKHZhciBzZWdtZW50X2k9MDsgc2VnbWVudF9pPHNlZ21lbnRzLmxlbmd0aDsgc2VnbWVudF9pKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnID0gc2VnbWVudHNbc2VnbWVudF9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VnICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlVG9DaGVja1tzZWddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrW3NlZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2sgPSBub2RlVG9DaGVja1tzZWddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBiYXNlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHBvcHVsYXRlZFxyXG4gICAgdmFyIHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0LS1yb290XCIpO1xyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgYWxsIHRoZSBjbGlja3MgYXQgdGhlIHBhcmVudCBsZXZlbFxyXG4gICAgdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjaGVja2JveCBpdGVtcyBiZWluZyBzZWxlY3RlZC5cclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljayhlLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgLy8gV2Ugb25seSBjYXJlIGFib3V0IGNsaWNrcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBwYXJlbnRzXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuIG9wZW4gcGFyZW50IGl0ZW0gaXMgY2xpY2tlZCwgY2xvc2UgaXQsIGJ1dCBhbHNvIGFsbCBpdHMgb3BlbiBkZXNjZW5kYW50cy5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZHJlbiA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYWNfaT0wOyBhY19pPGFjdGl2ZUNoaWxkcmVuLmxlbmd0aDsgYWNfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gYWN0aXZlQ2hpbGRyZW5bYWNfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9wZW4gYW55IGNsb3NlZCBwYXJlbnRzIHRoYXQgYXJlIGNsaWNrZWQuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0IGJ1aWxkcyB0aGUgc2VsZWN0IGxpc3QgZnJvbSB0aGUgcHJldmlvdXMgbm9kZSBzdHJ1Y3R1cmUuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUNoaWxkS2V5cyhjdXJyVGV4dCwgY3VyclBhdGgsIG9iaiwgZWxlbWVudFRvQWRkVG8sIGxldmVsLCBwYXJlbnRzQ2hlY2tlZCkge1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudENoZWNrZWRTdGF0ZSA9IHBhcmVudHNDaGVja2VkO1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICghdXNlQ2hlY2tib3hlcyAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggJiYgaXNTZWxlY3RlZEdyb3VwKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgY3VycmVudCBzdGF0ZSB3aGVuIGluIHRoZSAnbGluayBtb2RlJ1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWN1cnJlbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoaWxkS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhdCB0aGUgYm90dG9tIG9mIGEgYnJhbmNoIGkuZS4gbm8gY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGlzIG5vZGUgaGFzIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHNob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3QuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0XCIpO1xyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBDYWxsIHJlY3Vyc2l2ZWx5IHdpdGggdXBkYXRlZCBwYXJhbXMgZm9yIGVhY2ggY2hpbGQgbm9kZVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgY2tfaT0wOyBja19pIDwgY2hpbGRLZXlzLmxlbmd0aDsgY2tfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRLZXkgPSBjaGlsZEtleXNbY2tfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkS2V5ICE9PSAnQWxsIGNvbnRhY3RzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDaGlsZEtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtjaGlsZEtleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzdGFydGluZyBhdCB0aGUgcm9vdC5cclxuICAgIGRpc3BsYXlDaGlsZEtleXMoXCJBbGwgQ29udGFjdCBHcm91cHNcIiwgXCJcIiwgc3RydWN0dXJlW1wiXFxcXFwiXSwgdHJlZUNvbnRhaW5lciwgMSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgdGhlIHNlbGVjdCBsaXN0IHdpdGggdGhlIG5ldyB0cmVlXHJcbiAgICBncm91cFNlbGVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0cmVlQ29udGFpbmVyLCBncm91cFNlbGVjdCk7XHJcblxyXG4gICAgdHJlZUNvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcclxuXHJcbiAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxufSkoXCIjR3JvdXBcIiwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpO1xyXG59XHJcbiIsIi8vIFN0b3JlIGEgdW5pcXVlIHNldCBvZiBpZHMgaW5zaWRlIGEgY29va2llXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkQ29va2llSGVscGVye1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5faWRzID0gbmV3IFNldCh0aGlzLl9pbml0aWFsaXNlKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBQb3B1bGF0ZSBzdGFydCBpZHMsIGluaXRpYWxpc2VzIGNvb2tpZSBpZiBub3QgcHJlc2VudFxyXG4gICAgX2luaXRpYWxpc2UoKSB7XHJcbiAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGRvY3VtZW50LmNvb2tpZTtcclxuXHJcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWVTdHJpbmcuc3BsaXQoJzsgJyk7XHJcbiAgICAgIGNvbnN0IG1hdGNoaW5nQ29va2llID0gY29va2llcy5maW5kKGMgPT4gYy5zdGFydHNXaXRoKGAke3RoaXMuX25hbWV9PWApKTtcclxuXHJcbiAgICAgIGlmICghbWF0Y2hpbmdDb29raWUpIHsgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLl9wZXJzaXN0KFtdKTsgICBcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWF0Y2hpbmdWYWx1ZVRvU3BsaXQgPSBtYXRjaGluZ0Nvb2tpZS5zcGxpdCgnPScpWzFdO1xyXG4gICAgICByZXR1cm4gbWF0Y2hpbmdWYWx1ZVRvU3BsaXQuc3BsaXQoJ3wnKS5maWx0ZXIoaSA9PiBpKTsgICAvLyBTcGxpdCBhbmQgcmVtb3ZlIGVtcHR5IHZhbHVlc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTYXZlIHRoZSBuZXcgaWRzIHRvIHRoZSBjb29raWUgYWZ0ZXIgdXBkYXRlXHJcbiAgICBfdXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBpZHMgPSB0aGlzLmdldElkcygpO1xyXG4gICAgICB0aGlzLl9wZXJzaXN0KGlkcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNhdmUgdGhlIHBhc3NlZCBpbiBpZHMgdG8gdGhlIGNvb2tpZVxyXG4gICAgX3BlcnNpc3QoaWRzKSB7ICAgIFxyXG4gICAgICBjb25zdCBqb2luZWRJZHMgPSBpZHMuam9pbignfCcpO1xyXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgY29va2llIGNvbnRhaW5pbmcgc2VsZWN0ZWQgaWRzLiAgU2V0IHRvIHNhbWUgc2l0ZSBzdHJpY3QgYW5kIHBhdGggdG8gcm9vdFxyXG4gICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2pvaW5lZElkc307IHBhdGg9Lzsgc2FtZXNpdGU9U3RyaWN0YFxyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNldCBhbGwgdGhlIGlkcyBpbiBvbmUgaGl0LiBSZXR1cm5zIHRoZSBuZXcgY291bnQuXHJcbiAgICBzZXRJZHMoaWRzID0gW10pIHtcclxuICAgICAgdGhpcy5faWRzID0gbmV3IFNldChpZHMpO1xyXG4gICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm5zIHRoZSBjb3VudCBvZiBpdGVtcyBpbiB0aGUgc2VsZWN0aW9uLlxyXG4gICAgZ2V0SWRzKCkge1xyXG4gICAgICBjb25zdCBpZHMgPSBBcnJheS5mcm9tKHRoaXMuX2lkcylcclxuICAgICAgcmV0dXJuIGlkcztcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaWRzIGN1cnJlbnRseSBpbiB0aGUgc2V0LlxyXG4gICAgZ2V0Q291bnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pZHMuc2l6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmVtb3ZlIG9uZSBvciBtb3JlIGlkcy4gUmV0dXJuIHRoZSBuZXcgY291bnRcclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICB0aGlzLl9pZHMuZGVsZXRlKGlkKTsgICAgICBcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbmUgb3IgbW9yZSBpZHMuIFJldHVybnMgdGhlIG5ldyBjb3VudFxyXG4gICAgYWRkKGlkKSB7XHJcbiAgICAgIHRoaXMuX2lkcy5hZGQoaWQpO1xyXG4gICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEb2VzIHRoZSBzZXQgY29udGFpbiB0aGUgcGFzc2VkIGluIGFycmF5IGl0ZW0uXHJcbiAgICBoYXNJZChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZHMuaGFzKGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG4vKipcclxuICBDbGFzcyB0byBtYW5hZ2UgdGhlIGxvYWQgb24gc2Nyb2xsIGZ1bmN0aW9uYWxpdHkgZm9yIGEgcGFnZS5cclxuICBXaGVuIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZCBzZXJ2ZXIgc2lkZSBpdCBzaG91bGQgaGlkZSB0aGUgbG9hZGVyIGVsZW1lbnQgaWYgbm8gbW9yZSByZXN1bHRzIHRvIGxvYWQuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJpZXJMYXp5TG9hZGVyIHtcclxuICBcclxuICAvKipcclxuICAgIENvbnN0cnVjdG9yXHJcbiAgICBQYXJhbXNcclxuICAgICAtIGxvYWRlckVsZW1lbnQgKHJlcXVpcmVkKTogVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGxvYWRlclxyXG4gICAgIC0gbG9hZGVyRm4gKHJlcXVpcmVkKTogVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byBsb2FkIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cy4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3aWxsIGJlIHBhc3NlZCBhIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uIHdpdGggYSBib29sIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXRoZXIgb3Igbm90IHRoZXJlIGFyZSBtb3JlIGl0ZW1zIHRvIGxvYWQuXHJcbiAgICAgLSBjb25maWdPYmogKG9wdGlvbmFsKTogIEFuIG9iamVjdCB3aG9zZSBrZXkgYW5kIHZhbHVlcyB3aWxsIG92ZXJyaWRlIGRlZmF1bHQgY29uZmlnIHNldHRpbmdzLlxyXG4gICovICAgICAgICAgICAgICAgICAgICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgbG9hZGVyRWxlbWVudCwgXHJcbiAgICAgIGxvYWRlckZuLCBcclxuICAgICAgY29uZmlnT2JqID0ge31cclxuICApIHtcclxuICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICBEZWZhdWx0IGNvbmZpZyBzZXR0aW5nc1xyXG4gICAgKi9cclxuICAgIGNvbnN0IGNvbmZpZ0RlZmF1bHRzID0ge1xyXG4gICAgICBsb2FkZXJDbGFzczogJ2xvYWRlcicsICAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50XHJcbiAgICAgIGxvYWRlckxvYWRpbmdDbGFzczogJ2xvYWRlci0tbG9hZGluZycsIC8vIHRoZSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgbG9hZGVyIGVsZW1lbnQgd2hlbiBzZWFyY2hpbmdcclxuICAgICAgZGVib3VuY2VNczogMTAwLCAvLyBob3cgbG9uZyB0byB3YWl0IGJldHdlZW4gZXZlbnRzIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgcGVla0Rpc3RhbmNlOiAwLCAvLyBob3cgbXVjaCBvZiBsb2FkaW5nIGVsZW1lbnQgc2hvdWxkIGJlIG9uIHNjcmVuIGJlZm9yZSBjYWxsaW5nIGxvYWRcclxuICAgICAgZGVidWc6IGZhbHNlICAvLyB3aGV0aGVyIG9yIG5vdCB0byBsb2cgZGVidWcgaW5mbyB0byBjb25zb2xlLlxyXG4gICAgfTtcclxuICAgICAgICBcclxuICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlckVsZW1lbnQ7XHJcbiAgICB0aGlzLl9sb2FkZXJGdW5jID0gbG9hZGVyRm47XHJcbiAgICAgICAgXHJcbiAgICAvLyBNZXJnZSB0aGUgZGVmYXVsdHMgYW5kIHBhc3NlZCBpbiBjb25maWdcclxuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnRGVmYXVsdHMsIC4uLmNvbmZpZ09iaiB9O1xyXG4gICAgXHJcbiAgICAvLyBUcmFjayB3aGV0aGVyIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQgb3IgcmVtb3ZlZFxyXG4gICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgXHJcbiAgICBpZiAoIXRoaXMuX2xvYWRlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ051bGwgbG9hZGVyIGVsZW1lbnQgcHJvdmlkZWQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIG9uIHRoZSBsb2FkZXJzIGNsYXNzIGZyb20gdGhlIGNvbmZpZ1xyXG4gICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmxvYWRlckNsYXNzKTtcclxuICAgIFxyXG4gICAgLy8gRGVib3VuY2UgdGhlIGNoZWNrXHJcbiAgICB0aGlzLl9sYXp5TG9hZENoZWNrID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLl9kb0xvYWRNb3JlQ2hlY2soKSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0NhbGxpbmcgbG9hZCBtb3JlIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fc3RvcExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlYXJjaCBmdW5jdGlvbiAmIHBhc3MgaW4gdGhlIGRvbmUgc2VhcmNoaW5nIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyRnVuYyh0aGlzLl9kb25lU2VhcmNoaW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdOb3QgcmVhZHkgdG8gcmVsb2FkIHlldCcpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLl9jb25maWcuZGVib3VuY2VNcyk7XHJcbiAgICBcclxuICAgIC8vIEFkZCB0aGUgZXZlbnRzIChhbHNvIGRvZXMgaW5pdGlhbCBjaGVjaylcclxuICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9kb25lU2VhcmNoaW5nID0gdGhpcy5fZG9uZVNlYXJjaGluZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBcclxuICBfc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KHZpc2libGUpIHtcclxuICAgIGlmKHZpc2libGUpIHtcclxuICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBoYW5ka2xlIHJlc3VsdHMgY29taW5nIGJhY2sgaW5cclxuICBfZG9uZVNlYXJjaGluZyhtb3JlVG9Mb2FkKSB7XHJcbiAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKGBfZG9uZVNlYXJjaGluZyBjYWxsYmFjayBjYWxsZWQgd2l0aCBtb3JlIHRvIGxvYWQgJHttb3JlVG9Mb2FkfWApO1xyXG4gICAgdGhpcy5fbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmxvYWRlckxvYWRpbmdDbGFzcykgXHJcbiAgICBpZiAobW9yZVRvTG9hZCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdBbGwgZG9uZSAtIGhpZGluZyBsb2FkZXIgZWxlbWVudCcpO1xyXG4gICAgICB0aGlzLl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBXaXJlIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgZG8gaW5pdGlhbCBjaGVjay5cclxuICBfc3RhcnRMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkKSB7ICAgICAgXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbkNoYW5nZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhZGRlZCcpO1xyXG4gICAgICB0aGlzLl9sYXp5TG9hZENoZWNrKCk7XHJcbiAgICB9ICBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIGFscmVhZHkgaW4gcGxhY2UnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnNcclxuICBfc3RvcExpc3RlbmluZygpIHtcclxuICAgIGlmICh0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSBmYWxzZTsgICAgICBcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTGlzdGVuZXJzIHJlbW92ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ05vIExpc3RlbmVycyB0byByZW1vdmUnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gSGVscGVyIHRvIGxvZyBvbmx5IGlmIGRlYnVnZ2luZyBlbmFibGVkXHJcbiAgX2NvbmRpdGlvbmFsRGVidWdMb2codG9EZWJ1ZywgbG9nZ2VyRnVuYyA9IGNvbnNvbGUubG9nLCApIHtcclxuICAgIGlmICh0aGlzLl9jb25maWcuZGVidWcpIHtcclxuICAgICAgbG9nZ2VyRnVuYyh0b0RlYnVnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBEbyB0aGUgY2hlY2sgdG8gc2VlIGlmIHNjcmVlbiBzb21ld2hlcmUgaXQgc2hvdWxkIGJlIGxvYWRlZC5cclxuICBfZG9Mb2FkTW9yZUNoZWNrKCkgeyAgICBcclxuICAgIGNvbnN0IGhpZ2hlc3RWaXNpYmxlWVBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgIGNvbnN0IGxvYWRNb3JlVHJpZ2dlclBvcyA9IE1hdGgubWluKCh0aGlzLl9sb2FkZXIub2Zmc2V0VG9wICsgdGhpcy5fY29uZmlnLnBlZWtEaXN0YW5jZSksIGRvY3VtZW50SGVpZ2h0KTsgXHJcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcclxuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcclxuICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcclxuICAgICAgJ1RvcCBwb3NpdGlvbiBvZiBsb2FkZXIgZWxlbWVudCc6IHRoaXMuX2xvYWRlci5vZmZzZXRUb3AsXHJcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXHJcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXHJcbiAgICAgICdDdXJyZW50IFkgcG9zaXRpb24gb2Ygc2Nyb2xsJzogd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAnVGhlIGludGVybmFsIHNpemUgb2YgdGhlIHdpbmRvdyc6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgJ1RoZSBtYXggeSBwb3NpdGlvbiB2aXNpYmxlJzogaGlnaGVzdFZpc2libGVZUG9zLFxyXG4gICAgICAnVGhlIGhlaWdodCBvZiBkb2N1bWVudCc6IGRvY3VtZW50SGVpZ2h0LFxyXG4gICAgICAnSXMgcGVlayBwb3NpdGlvbiB2aXNpYmxlJzogcGVla1Bvc2l0aW9uVmlzaWJsZSxcclxuICAgICAgJ0lzIHRoZSBsb2FkIG1vcmUgcG9zaXRpb24gdmlzaWJsZSwgb3IgYXQgZG9jIGVuZCc6IHNob3VsZExvYWRNb3JlLFxyXG4gICAgfSwgY29uc29sZS50YWJsZSk7IFxyXG4gICAgXHJcbiAgICByZXR1cm4gc2hvdWxkTG9hZE1vcmU7XHJcbiAgfTtcclxufVxyXG4iLCIvKipcclxuICogIFVTQUdFOiBUbyB1c2UgdGhpcyBjb250cm9sIHlvdSBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSB0byB0aGUgYnV0dG9uIHRoYXQgc2hvdWxkIGJlIGRvaW5nIHRoZSBzaG93IGFsbC5cclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtdGFibGUtaWQ9XCI8PGlkIG9mIHRhYmxlIHRvIGJlIGVmZmVjdGVkPj5cIlxyXG4gKiBcclxuICogIE9QVElPTkFMOiBVc2UgdGhlIGZvbGxvd2luZyBhdHRydGlidXRlcyB0byBhZGp1c3QgdGhlIGJlaGF2aW9yXHJcbiAqIFxyXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tbGltaXQ9XCIyMFwiIC0gc2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgaW5pdGlhbGx5LiAgRGVmYXVsdCBpcyAxMFxyXG4gKiAgXHJcbiAqL1xyXG5cclxudmFyIHNob3dNb3JlVGFibGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEtc2hvd2FsbC10YWJsZS1pZF0nKTtcclxuXHJcbnNob3dNb3JlVGFibGVCdXR0b25zLmZvckVhY2goc2hvd0FsbEJ1dHRvbiA9PiB7XHJcbiAgdmFyIHRhYmxlSWQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC10YWJsZS1pZFwiKTtcclxuXHJcbiAgdmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFibGVJZCk7XHJcbiAgaWYgKHRhYmxlKSB7XHJcblxyXG4gICAgdmFyIGRlZmF1bHRJdGVtTGltaXQgPSAxMDsgICAgXHJcbiAgICB2YXIgcGFzc2VkSXRlbUxpbWl0ID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtaXRlbS1saW1pdFwiKTtcclxuICAgIHZhciBwYXJzZWRJdGVtTGltaXQgPSBwYXJzZUludChwYXNzZWRJdGVtTGltaXQsIDEwKTtcclxuICAgIHZhciBsaW1pdFRvVXNlID0gaXNOYU4ocGFyc2VkSXRlbUxpbWl0KSA/IGRlZmF1bHRJdGVtTGltaXQgOiBwYXJzZWRJdGVtTGltaXQ7XHJcbiAgICBcclxuICAgIC8vIFdlIGRvbnQgd2FudCB0aGUgaGVhZGVyc1xyXG4gICAgdmFyIHRhYmxlQm9keSA9IHRhYmxlLnRCb2RpZXNbMF07XHJcbiAgICBpZiAoIXRhYmxlQm9keSkgeyByZXR1cm47IH1cclxuXHJcbiAgICB2YXIgdGFibGVCb2R5TGVuZ3RoID0gdGFibGVCb2R5LnJvd3MubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpID0gMSwgYm9keVJvdzsgYm9keVJvdyA9IHRhYmxlQm9keS5yb3dzW2ktMV07IGkrKykge1xyXG4gICAgICBpZiAoaSA+IGxpbWl0VG9Vc2UpIHtcclxuICAgICAgICBib2R5Um93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YWJsZUJvZHlMZW5ndGggPD0gbGltaXRUb1VzZSkgeyBzaG93QWxsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgfVxyXG5cclxuICAgIHNob3dBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZWwpID0+IHtcclxuICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIEFycmF5LmZyb20odGFibGVCb2R5LnJvd3MpLmZvckVhY2goZnVuY3Rpb24oYm9keVJvdykge1xyXG4gICAgICAgIGJvZHlSb3cuc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWwudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIi8qKioqKiogXHJcblxyXG4gIENyZWF0ZXMgYSB0YWcgbGlzdCBmcm9tIGEgc2VsZWN0IGVsZW1lbnRcclxuXHJcbiAgdXNhZ2U6XHJcblxyXG4gIG5ldyBTZWxlY3RMaXN0VGFnKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jKS5cclxuXHJcbiAgLSBzZWxlY3RJZCAocmVxdWlyZWQpOiBUaGUgaWQgb2YgdGhlIHNlbGVjdCBlbGVtZW50IGFjdGluZyBhcyB0aGUgc291cmNlIChtdXN0IGhhdmUgbXVsdGlwbGUgYXR0cmlidXRlLCBhbmQgYWxsIGl0ZW1zIHNob3VsZCBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQpXHJcblxyXG4gIC0gcmV2ZXJ0R3JvdXBzIChvcHRpb25hbCk6IFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgY2xpY2tlZCB0byByZXZlcnQgc2VsZWN0ZWQgb3B0aW9ucyAoc2hvdWxkIGhhdmUgaXMtaGlkZGVuIGNsYXNzIHRvIHN0YXJ0KVxyXG5cclxuICAtIG9uVXBkYXRlRnVuYyAocmVxdWlyZWQpOiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgdGFnIGhhcyBiZWVuIHJlbW92ZWQsIG9yIG9wdGlvbnMgYXJlIHJldmVydGVkLi4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHR3byBwYXJhbXMsIHNlbGVjdGVkT3B0aW9ucyBhbmQgYWxsT3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGludGVuZGVkIHRvIG1ha2UgdGhlIGNvbnRyb2wgbW9yZSBmbGV4aWJsZSBpLmUuIG91ciBmaXJzdCB1c2FnZSBpcyB0byB1cGRhdGUgbGFiZWwgd2l0aCBzZWxlY3RlZCBpdGVtcyB0ZXh0IGVsc2V3aGVyZSBvbiBwYWdlIHdpdGhvdXQgZnVydGhlciBjb3VwbGluZy5cclxuXHJcbioqKioqKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TGlzdFRhZ3Mge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jID0gKCkgPT4ge30pIHtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMgPSBvblVwZGF0ZUZ1bmM7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmIChyZXZlcnRHcm91cHNJZCkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmV2ZXJ0R3JvdXBzSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgdGhpcy5yZXZlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IFsuLi50aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldO1xyXG4gICAgICBpZiAodGhpcy5yZXZlcnRCdG4gJiYgdGhpcy5hbGxPcHRpb25zLnNvbWUobyA9PiAhby5zZWxlY3RlZCkpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXHJcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xyXG4gICAgICAgICAgY29uc3QgbyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInK3RhcmdldFZhbCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgaWYobyl7XHJcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5hZnRlcih0aGlzLnRhZ3MpO1xyXG5cclxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlVGFncygpIHtcclxuICAgICAgdGhpcy50YWdzLmlubmVySFRNTCA9ICcnOyAgICAgIFxyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFsbE9wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCk7XHJcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFncy5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUYWcodC5pbm5lclRleHQsIHQudmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jKHNlbGVjdGVkT3B0aW9ucywgdGhpcy5hbGxPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgbWFrZVRhZyh0ZXh0LCB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBpLmNsYXNzTGlzdC5hZGQoXCJidXR0b25fX2ljb25cIik7ICAgICAgXHJcbiAgICAgIGkuZGF0YXNldC52YWw9dmFsdWU7XHJcbiAgICAgIGkuaW5uZXJUZXh0ID0gXCJjbGVhclwiXHJcblxyXG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoaSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGFnO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gU2hvdWxkIGhhdmUgYSBzZWN0aW9uIGxpa2UgdGhpcyBmb3IgZWFjaCBwYWdlIHRoZSBjb250cm9sIGlzIHVzZWQgb24sIHVubGVzcyB3ZSB3YW50IGl0IGJlaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGFzIGEgcHJldmlvdXMgdmVyc2lvbiAoaW5jbHVkaW5nIGlkcyBhbmQgdXBkYXRlIGZ1bmN0aW9uKSBcclxuLy8gKkJldHRlciBzdGlsbCogLSBoYXZlIGluIHNlcGVyYXRlIHNjcmlwdCBmaWxlIHNjb3BlZCB0byBzcGVjaWZpYyBwYWdlIChsaWtlIHdpdGggU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzKVxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicpKSB7XHJcblxyXG4gIC8vIFByZXBhcmUgYW4gdXBkYXRlIGZ1bmN0aW9uIGlmIHJlcXVpcmVkIChvcHRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZUdyb3Vwc0xhYmVsU3BhbicpO1xyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHBsdXJhbGlzZWRHcm91cHMgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAxID8gJ2dyb3VwJyA6ICdncm91cHMnO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBgU2VuZCB0byAke3NlbGVjdGVkT3B0aW9ucy5sZW5ndGh9IHJlc3BvbnNlICR7cGx1cmFsaXNlZEdyb3Vwc31gO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGlzZSBhbiBpbnN0YW5jZSBvZiB0aGUgY29udHJvbFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnRm9sbG93dXBHcm91cFNlbGVjdG9yJywgJ3JldmVydF9ncm91cHMnLCBvblVwZGF0ZUZ1bmMpOyBcclxufVxyXG4iLCIvLyBTdG9yZSBhIHNpbXBsZSB2YWx1ZSBpbiBhIGNvb2tpZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDb29raWVIZWxwZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5faW5pdGlhbGlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0aWFsaXNlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IGRvY3VtZW50LmNvb2tpZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IGNvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbWF0Y2hpbmdDb29raWUgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hpbmdDb29raWUuc3BsaXQoJz0nKVsxXSkgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9OyBwYXRoPS87IHNhbWVzaXRlPVN0cmljdGBcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuZXdDb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbi8vIFJlbW92ZSB0aGUgbm8tanMgY2xhc3Mgc28gd2UgYXJlIGFibGUgdG8gdGVsbCB0aGF0IGpzIGlzIGVuYWJsZWRcclxuLy8gVXNlZnVsIGZvciBoaWRpbmcgZWxlbWVudHMgd2hlbiBqcyBub3QgYXZhaWxhYmxlLlxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnanMnKTsiLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlcycpICE9IG51bGwpIHtcclxuXHJcblxyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIHJlc3BvbnNlIGZpZWxkcyBhbmQgdGhlIHJlc3BvbnNlIGxpc3RcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2UtZmllbGQnKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbnMtbGlzdCcpO1xyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0aGUgZW1wdHkgcmVzcG9uc2UgZmllbGRzXHJcbiAgICAgICAgcmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zZS1vcHRpb24nKSAudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhc2V0LmtleSA9IGlkeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmV2ZWFscyB0aGUgZmlyc3QgaGlkZGVuIGl0ZW1cclxuICAgICAgICBjb25zdCBzaG93Rmlyc3RFbXB5SXRlbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXNwb25zZSA9IHJlc3BvbnNlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzcG9uc2Uuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc3BvbnNlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFdoZW4gYW4gaXRlbSBpcyByZW1vdmVkLCBjb3B5IGFsbCB2YWx1ZXMgZm9yd2FyZCB0byBmaWxsIGdhcHNcclxuICAgICAgICBjb25zdCBjb3B5SXRlbXNGb3J3YXJkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IGluZGV4ICsgMTsgaWR4IDwgcmVzcG9uc2VzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZJbnB1dCA9IHJlc3BvbnNlc1tpZHgtMV0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpOztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gcmVzcG9uc2VzW2lkeF0ucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgcHJldklucHV0LnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUxhc3RFbXB0eUl0ZW0gPSAocmVtb3ZlSWR4KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBcyBhbGwgY29waWVkIGZvcndhcmQgYmxhbmsgbGFzdCBpdGVtIG91dFxyXG4gICAgICAgICAgICByZXNwb25zZXNbcmVzcG9uc2VzLmxlbmd0aC0xXS5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9uJykudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gR28gdGhyb3VnaCBiYWNrd2FyZHMgYW5kIGhpZGUgbGFzdCB2aXNpYmxlIGl0ZW1cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gKHJlc3BvbnNlcy5sZW5ndGgtMSk7IGlkeCA+PSByZW1vdmVJZHg7IGlkeC0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzW2lkeF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhZGRSZXNwb25zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX3Jlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBzaG93Rmlyc3RFbXB5SXRlbSgpO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXNwb25zZXNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcuYnRuLXJlbW92ZS1yZXNwb25zZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUlkeCA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29weUl0ZW1zRm9yd2FyZChyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGFzdEVtcHR5SXRlbShyZW1vdmVJZHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZScpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZFBob25lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZFBob25lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQaG9uZUJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkUGhvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pKFwiYWRkUGhvbmVcIik7XHJcblxyXG59XHJcblxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGFkZEVtYWlsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRFbWFpbEJ0blwiKTtcclxuXHJcbiAgICAgICAgYWRkRW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pKFwiYWRkRW1haWxcIik7XHJcblxyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVHcm91cEJ1dHRvbiAhPW51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSkoXCJhZGRfZ3JvdXBcIik7XHJcbn1cclxuXHJcbnZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuaWYgKGdyb3VwVGV4dGFyZWEgIT0gbnVsbCkge1xyXG4gICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldDIgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldDIubWF0Y2hlcyhcIi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Mi5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcblxyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpICE9bnVsbCkge1xyXG5cclxuICAgIHZhciBpbnB1dEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKTtcclxuICAgIHZhciBpbnB1dEVycm9yc0FycmF5ID0gT2JqZWN0LmtleXMoaW5wdXRFcnJvcnMpO1xyXG5cclxuICAgIGlucHV0RXJyb3JzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RXJyb3JzW2tleV0pO1xyXG4gICAgICAgIGlucHV0RXJyb3JzW2tleV0uY2xvc2VzdCgnZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG5cclxuLy8gICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcbi8vICAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS0tYWN0aXZlXCIpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcblxyXG4vLyB9KShcIiNTaWRlYmFyXCIpO1xyXG5cclxuIiwiLyogXHJcbiAgRGVib3VuY2UgZnVuY3Rpb24gcHJldmVudCBleGNlc3NpdmUgY2FsbHMgb24gc2Nyb2xsLlxyXG4gIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cclxuKi9cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xyXG5cdHZhciB0aW1lb3V0O1xyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0aWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHR9O1xyXG5cdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHR9O1xyXG59OyIsIlxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgY29uc3Qgc25hY2tiYXJTdG9yYWdlSXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc25hY2tiYXInKTtcclxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcclxuICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBhbHJlYWR5IGNvbnRhaW5zIGN1cnJlbnQgcGFnZSBwYXRoXHJcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAvL2lmIGl0IGRvZXMgdGhlbiBoaWRlIHRoZSBzbmFja2JhclxyXG4gICAgICAgICAgICBzbmFja2Jhci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSAge1xyXG4gICAgICAgICAgICBsb2NhdGlvbnMgOiBuZXcgQXJyYXkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHNuYWNrYmFyKSB7XHJcbiAgICAgICAgc25hY2tiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGlmICghc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLnB1c2god2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc25hY2tiYXInLCBKU09OLnN0cmluZ2lmeShzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59KShcIiNoaW50LXNuYWNrYmFyXCIpO1xyXG4iLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkgICYmIG1lbnVDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSgnI21lbnUnKTsiLCIvKiBcclxuICAgIFRoaXMgc2NyaXB0IGlzIHNwZWNpZmljIHRvIHRoZSBzdGFmZiBjb21wb3NlIHBhZ2UuXHJcbiovXHJcblxyXG5pbXBvcnQgU2ltcGxlQ29va2llSGVscGVyIGZyb20gJy4uL1NpbXBsZUNvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBJZENvb2tpZUhlbHBlciBmcm9tICcuLi9JZENvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBTZWxlY3RMaXN0VGFncyBmcm9tICcuLi9TZWxlY3RMaXN0VGFncyc7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1jb21wb3NlJykpIHtcclxuXHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jb250YWN0Jyk7XHJcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmplY3RfaW5wdXQnKTtcclxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5wdXRfTWVzc2FnZScpO1xyXG4gIGNvbnN0IHJlc2VuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lucHV0X0F1dG9SZXNlbmRTY2hlZHVsZScpO1xyXG4gIGNvbnN0IHJlc3BvbnNlT3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLW9wdGlvbicpKTtcclxuXHJcbiAgY29uc3QgY29va2llSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VUaXRsZScpO1xyXG4gIGNvbnN0IGNvb2tpZU1lc3NhZ2VIZWxwZXIgPSBuZXcgU2ltcGxlQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZUNvbnRlbnQnKTtcclxuICBjb25zdCBjb29raWVBdXRvUmVzZW5kSGVscGVyID0gbmV3IFNpbXBsZUNvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VSZXNlbmQnKTtcclxuICBjb25zdCBjb29raWVSZXNwb25zZUhlbHBlciA9IG5ldyBTaW1wbGVDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlUmVzcG9uc2VzJyk7XHJcbiAgXHJcbiAgY29uc3QgY29va2llSWRzSGVscGVyID0gbmV3IElkQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJJZHMnKTtcclxuXHJcbiAgY29uc3QgZ2V0UmVzcG9uc2VPcHRpb25WYWx1ZXNTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBub25FbXB0eU9wdGlvbnMgPSByZXNwb25zZU9wdGlvbnMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgaWYgKGN1cnIudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFjYywgY3Vyci52YWx1ZV07XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5vbkVtcHR5T3B0aW9ucy5qb2luKCd8fCcpO1xyXG4gIH07XHJcblxyXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvb2tpZUhlbHBlci5zZXQoc3ViamVjdElucHV0LnZhbHVlKTtcclxuICAgIGNvb2tpZU1lc3NhZ2VIZWxwZXIuc2V0KG1lc3NhZ2VJbnB1dC52YWx1ZSk7XHJcbiAgICBjb29raWVBdXRvUmVzZW5kSGVscGVyLnNldChyZXNlbmRJbnB1dC52YWx1ZSk7ICBcclxuICAgIGNvb2tpZVJlc3BvbnNlSGVscGVyLnNldChnZXRSZXNwb25zZU9wdGlvblZhbHVlc1N0cmluZygpKTtcclxuICB9KTtcclxuICBcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBjb29raWVJZHNIZWxwZXIuc2V0SWRzKHNlbGVjdGVkT3B0aW9ucy5tYXAoeCA9PiB4LnZhbHVlKSk7XHJcbiAgfVxyXG4gIFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnQXNjU3RhZmZTZWxlY3RvcicsIG51bGwsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsImltcG9ydCBDaGVja2JveERpc2FibGVCdXR0b25IZWxwZXIgZnJvbSAnLi4vQ2hlY2tib3hEaXNhYmxlQnV0dG9uSGVscGVyJztcclxuXHJcbi8vIENoZWNrIHdlIGFyZSBvbiB0aGUgY29ycmVjdCBwYWdlLlxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbi5jb3VyaWVyLXByb2ZpbGUtcGFnZScpO1xyXG5cclxuaWYgKG1haW4pIHtcclxuICAgIFxyXG4gICAgbmV3IENoZWNrYm94RGlzYWJsZUJ1dHRvbkhlbHBlcignI2J0blNhdmUnLCAnI0lucHV0X1ByaXZhY3lQb2xpY3knKTtcclxuXHJcbiAgICAvLyBHcmFiIGFsbCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBvbmx5IHNob3cgd2hlbiBqcyBlbmFibGVkXHJcbiAgICBjb25zdCBhZGRQaG9uZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZUJ0bicpO1xyXG4gICAgY29uc3QgYWRkRW1haWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRW1haWxCdG4nKTtcclxuICAgIGNvbnN0IHJlbW92ZUVtYWlsQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKTtcclxuICAgIGNvbnN0IHJlbW92ZVBob25lQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IHRoZSBmb3JtLCB0byBhZGQgcmVtb3ZlIGxpc3RlbmVycyB0b1xyXG4gICAgY29uc3QgY29udGFjdFByb2ZpbGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtcHJvZmlsZS1mb3JtJyk7XHJcblxyXG4gICAgLy8gU2hvdyBhbGwgdGhlIGpzIG9ubHkgYnV0dG9uc1xyXG4gICAgW2FkZFBob25lQnRuLCBhZGRFbWFpbEJ0biwgLi4ucmVtb3ZlRW1haWxCdXR0b25zLCAuLi5yZW1vdmVQaG9uZUJ1dHRvbnNdLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgWy4uLnJlbW92ZUVtYWlsQnV0dG9ucywgLi4ucmVtb3ZlUGhvbmVCdXR0b25zXS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKS5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fd2l0aGFjdGlvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBlbXB0eSBpbnB1dHMgYWRkZWQgZm9yIG5vbiBqcyBwdXJwb3Nlc1xyXG4gICAgY29uc3QgZW1wdHlJbnB1dHNUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC0tcHJvZmlsZS1waG9uZTpsYXN0LW9mLXR5cGUsIC5pbnB1dC0tcHJvZmlsZS1lbWFpbDpsYXN0LW9mLXR5cGUnKTtcclxuICAgIGVtcHR5SW5wdXRzVG9SZW1vdmUuZm9yRWFjaChlbXB0eUlucHV0ID0+IGVtcHR5SW5wdXQucmVtb3ZlKCkpO1xyXG5cclxuICAgIC8vIEFkZCBhIG5ldyBwaG9uZSByb3dcclxuICAgIGZ1bmN0aW9uIG5ld1Bob25lUm93KCkgeyAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Bob25lICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld1Bob25lLmNsYXNzTmFtZSA9IFwiZm9ybV9fZ3JvdXAgaW5wdXRfX3dpdGhhY3Rpb24gaW5wdXQtLXByb2ZpbGUtcGhvbmVcIjtcclxuICAgICAgICBuZXdQaG9uZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm1fX2lucHV0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmVtb3ZlIGJ0bi1yZW1vdmUtY29udGFjdC1waG9uZVwiPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLXZhbGlkYXRpb24tdmFsaWRcIiBkYXRhLXZhbG1zZy1mb3I9XCJwaG9uZV92YWxpZGF0aW9uXCIgZGF0YS12YWxtc2ctcmVwbGFjZT1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gbmV3UGhvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3JlbnVtYmVySW5wdXRzKHNlbGVjdG9yLCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5wID0gaW5wdXQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wLmlkID0gYCR7aWRlbnRpZmllcn1fJHtpbmRleH1fYDtcclxuICAgICAgICAgICAgaW5wLm5hbWUgPSBgJHtpZGVudGlmaWVyfVske2luZGV4fV1gO1xyXG4gICAgICAgICAgICBjb25zdCBzcG4gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsbXNnLWZvcicsIGAke2lkZW50aWZpZXJ9WyR7aW5kZXh9XWApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGEgbmV3IGVtYWlsIHJvd1xyXG4gICAgZnVuY3Rpb24gbmV3RW1haWxSb3coKSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0VtYWlsUm93ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuY2xhc3NOYW1lID0gXCJmb3JtX19ncm91cCBpbnB1dF9fd2l0aGFjdGlvbiBpbnB1dC0tcHJvZmlsZS1lbWFpbFwiOyAgXHJcbiAgICAgICAgbmV3RW1haWxSb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZSAgYnRuLXJlbW92ZS1jb250YWN0LWVtYWlsXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtdmFsaWRhdGlvbi12YWxpZFwiIGRhdGEtdmFsbXNnLWZvcj1cImVtYWlsX3ZhbGlkYXRpb25cIiBkYXRhLXZhbG1zZy1yZXBsYWNlPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBuZXdFbWFpbFJvdztcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaXJlIHVwIHRoZSBidXR0b24gbGlzdGVuZXJzXHJcbiAgICBhZGRQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChuZXdQaG9uZVJvdygpKTtcclxuICAgICAgICBfcmVudW1iZXJJbnB1dHMoJy5pbnB1dC0tcHJvZmlsZS1waG9uZScsICdJbnB1dC5QZXJzb25hbFBob25lTnVtYmVycycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGFkZEVtYWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnc2VjdGlvbicpLmFwcGVuZENoaWxkKG5ld0VtYWlsUm93KCkpXHJcbiAgICAgICAgX3JlbnVtYmVySW5wdXRzKCcuaW5wdXQtLXByb2ZpbGUtZW1haWwnLCAnSW5wdXQuUGVyc29uYWxFbWFpbEFkZHJlc3NlcycpO1xyXG4gICAgfSk7ICBcclxuXHJcbiAgICAvLyBIYW5kbGUgdGhlIHJlbW92ZSBvbiB0aGUgcGFyZW50IGZvcm0sIHNvIHRoYXQgd2lsbCB3b3JrIGZvciBuZXcgaXRlbXMgYWRkZWQgYWZ0ZXIgbG9hZC5cclxuICAgIGNvbnRhY3RQcm9maWxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5idG4tcmVtb3ZlLWNvbnRhY3QtcGhvbmUnKSAgfHwgZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwYXJlbnQgZm9ybSBncm91cCBjb250YWluaW5nIGVtYWlsIG9yIHBob25lLlxyXG4gICAgICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybV9fZ3JvdXAnKTtcclxuICAgICAgICAgICAgaWYgKGZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybUdyb3VwLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1waG9uZScpKSB7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLXBob25lJywgJ0lucHV0LlBlcnNvbmFsUGhvbmVOdW1iZXJzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bi1yZW1vdmUtY29udGFjdC1lbWFpbCcpKSB7XHJcbiAgICAgICAgICAgIF9yZW51bWJlcklucHV0cygnLmlucHV0LS1wcm9maWxlLWVtYWlsJywgJ0lucHV0LlBlcnNvbmFsRW1haWxBZGRyZXNzZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxyXG4qL1xyXG5pbXBvcnQgSWRDb29raWVIZWxwZXIgZnJvbSAnLi4vSWRDb29raWVIZWxwZXInO1xyXG5pbXBvcnQgRHJhZnRNZXNzYWdlRHJhd2VyIGZyb20gJy4uL0RyYWZ0TWVzc2FnZURyYXdlcic7XHJcbmltcG9ydCBMYXp5TG9hZGVyIGZyb20gJy4uL0xhenlMb2FkZXInO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmlmIChtYWluICYmIG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2Mtc3RhZmYtaW5kZXgnKSkge1xyXG5cclxuICBjb25zdCBjaCA9IG5ldyBJZENvb2tpZUhlbHBlcignQ291cmllck1lc3NhZ2VVc2VySWRzJyk7XHJcbiAgY29uc3QgZG1kID0gbmV3IERyYWZ0TWVzc2FnZURyYXdlcihjaC5nZXRDb3VudCgpKTtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcblxyXG4gIGNvbnN0IHVzZXJzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtc2VsZWN0LXN0YWZmJyk7XHJcbiAgbGV0IHVzZXJzVGFibGVCb2R5O1xyXG4gIGlmKHVzZXJzVGFibGUpIHtcclxuICAgdXNlcnNUYWJsZUJvZHkgPSB1c2Vyc1RhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgfVxyXG5cclxuICBsZXQgY3VycmVudFBhZ2UgPSAxO1xyXG5cclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgY29uc3QgY3JpdGVyaWFLZXkgPSAnY3JpdGVyaWEnO1xyXG4gIFxyXG4gIGxldCBzZWFyY2hDcml0ZXJpYVN0cmluZyA9IHVybFBhcmFtcy5oYXMoY3JpdGVyaWFLZXkpID8gYD9jcml0ZXJpYT0ke3VybFBhcmFtcy5nZXQoY3JpdGVyaWFLZXkpfWAgOiAnJztcclxuXHJcbiAgY29uc3QgZ2V0U2VhcmNoRW5kcG9pbnQgPSAoKSA9PiBgJHtsb2NhdGlvbi5vcmlnaW59L0ZvcmNlL0NvbnRhY3RzLyR7Y3VycmVudFBhZ2V9JHtzZWFyY2hDcml0ZXJpYVN0cmluZ31gO1xyXG4gIFxyXG4gIC8vIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBjaGVja2JveGVzXHJcbiAgY29uc3Qgc3RhZmZUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKTtcclxuXHJcbiAgaWYgKHN0YWZmVGFibGUpIHtcclxuICAgIHN0YWZmVGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKHt0YXJnZXR9KSA9PiB7XHJcbiAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3VG90YWwgPSB0YXJnZXQuY2hlY2tlZCA/IGNoLmFkZCh0YXJnZXQudmFsdWUpIDogY2gucmVtb3ZlKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBkbWQudXBkYXRlKG5ld1RvdGFsKTtcclxuICAgICAgfVxyXG4gICAgfSk7ICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IGNyZWF0ZUNoZWNrYm94RmllbGQgPSAodmFsdWUsIGNoZWNrZWQpID0+IHsgIFxyXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNlbGwnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICBpbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVDZWxsV2l0aFRleHQgPSB0ZXh0ID0+IHtcclxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRSb3cgPSB1c2VyID0+IHtcclxuICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLm5hbWUpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5jb2xsYXIpKTtcclxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChjcmVhdGVDZWxsV2l0aFRleHQodXNlci5lbWFpbCkpO1xyXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGNyZWF0ZUNlbGxXaXRoVGV4dCh1c2VyLnBob25lTnVtYmVyKSk7XHJcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3hGaWVsZCh1c2VyLmlkLCBjaC5oYXNJZCh1c2VyLmlkLnRvU3RyaW5nKCkpKSk7XHJcblxyXG4gICAgdXNlcnNUYWJsZUJvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFJlc3VsdFJvd3MgPSByb3dzID0+IHtcclxuICAgIHJvd3MuZm9yRWFjaChhZGRSb3cpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlmIChsb2FkZXIpIHtcclxuXHJcbiAgICBjb25zdCBsb2FkZXJQYWdlU2l6ZSA9IGxvYWRlci5nZXRBdHRyaWJ1dGUoXCJwYWdlLXNpemVcIik7XHJcblxyXG4gICAgbmV3IExhenlMb2FkZXIobG9hZGVyLCBhc3luYyBkb25lID0+IHtcclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBHZXQgdGhlIG5leHQgcGFnZSBpbmRleFxyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBnZXRTZWFyY2hFbmRwb2ludCgpO1xyXG5cclxuICAgICAgICAvLyBEbyB0aGUgc2VhcmNoXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goZW5kcG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1Jlc3VsdHMgPSByZXN1bHRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIC8vIFdlIGRvbnQga25vdyBpZiB0aGVyZSB3aWxsIGJlIG1vcmUgcmVzdWx0cywgYnV0IGl0cyBsaWtlbHkgaWYgd2UgcmV0dXJuIGEgZnVsbCBwYWdlIG9mIHJlc3VsdHNcclxuICAgICAgICBsZXQgbW9yZVJlc3VsdHNMaWtlbHkgPSBoYXNSZXN1bHRzO1xyXG4gICAgICAgIGlmIChsb2FkZXJQYWdlU2l6ZSkge1xyXG4gICAgICAgICAgLy8gV2UgbWF5IG5vdCBoYXZlIHRoaXMgYXR0cmlidXRlLCBidXQgaWYgd2UgZG8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgZnVsbC4gSWYgbm90IHRoZXJlIHNob3VsZCBiZSBubyBtb3JlIHJlc3VsdHMgdG8gZmV0Y2hcclxuICAgICAgICAgIG1vcmVSZXN1bHRzTGlrZWx5ID0gcmVzdWx0cy5sZW5ndGggPT09IHBhcnNlSW50KGxvYWRlclBhZ2VTaXplLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzUmVzdWx0cykgeyAgICAgICAgICBcclxuICAgICAgICAgIGFkZFJlc3VsdFJvd3MocmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb25lKG1vcmVSZXN1bHRzTGlrZWx5KTsgIFxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoKGUpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsYXp5IGxvYWQgcGFnZSAke2N1cnJlbnRQYWdlfSBvZiBBRCB1c2Vyc2ApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgLy8gSWdub3JlIGN1cnJlbnQgZmFpbGVkIHBhZ2UsIHNvIHdpbGwgdHJ5IGFnYWluXHJcbiAgICAgICAgY3VycmVudFBhZ2UtLTtcclxuICAgICAgICBkb25lKHRydWUpOyAvLyBDYWxsIGRvbmUgd2l0aCBtb3JlIHRvIGxvYWQuXHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCB0byBkbyBoZXJlLiBJZiBlbnBvaW50IGlzIGRvd24sIHdlIHdvdWxkIGdldCBsb3RzIG9mIGNvbnNvbGUgZXJyb3JzIGF0IHRoZSBtb21lbnQuLi4uXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9LCB7IGRlYnVnOiBmYWxzZSwgcGVla0Rpc3RhbmNlOiA1MCB9KTtcclxuICB9ICBcclxufVxyXG4iLCIvKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLFxyXG50b2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuXHJcbi8vIGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbi8vICAgIHZhciBhc2lkZUV4aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKTtcclxuLy8gICAgIGlmKGFzaWRlRXhpc3Qpe1xyXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFzaWRlLS1hY3RpdmVcIik7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIG1lbnUgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcclxuICAgIHZhciBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcGRvd24tY29udGVudFwiKTtcclxuICAgIHZhciBpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgb3BlbkRyb3Bkb3duID0gZHJvcGRvd25zW2ldO1xyXG4gICAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbnZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuaWYgKGFkZEdyb3VwQnV0dG9uKSB7XHJcblxyXG5hZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbnZhciBjbG9zZVNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Vfc2lkZWJhcicpO1xyXG5cclxuaWYgKGNsb3NlU2lkZWJhcikge1xyXG5cclxuY2xvc2VTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcclxuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcclxuICB2YXIgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAvLyBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gIC8vICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaWYgKCF4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QuYWRkKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH0gZWxzZSBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIHguY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0taGlkZGVuJyk7XHJcbiAgICAgIC8vIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG5cclxuICAgIHZhciBjb250YWN0UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdDb250YWN0QWRkZWQnKTtcclxuICAgIHZhciBPcmdhbmlzYXRpb25QYXJhbSA9IHVybFBhcmFtcy5nZXQoJ09yZ2FuaXNhdGlvbkFkZGVkJyk7XHJcbiAgICB2YXIgTWVzc2FnZVNlbnRQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ01lc3NhZ2VTZW50Jyk7XHJcbiAgICB2YXIgRm9yY2VDb250YWN0VXBkYXRlZFBhcmFtID0gdXJsUGFyYW1zLmdldCgnRm9yY2VDb250YWN0VXBkYXRlZCcpO1xyXG5cclxuICAgIHZhciBzbmFja2Jhck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBpZiAoY29udGFjdFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IGNvbnRhY3QgaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE9yZ2FuaXNhdGlvblBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IG9yZ2FuaXNhdGlvbiBoYXMgYmVlbiBjcmVhdGVkJztcclxuICAgIH0gZWxzZSBpZiAoTWVzc2FnZVNlbnRQYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ01lc3NhZ2Ugc2VudCc7XHJcbiAgICB9IGVsc2UgaWYgKEZvcmNlQ29udGFjdFVwZGF0ZWRQYXJhbSAmJiBGb3JjZUNvbnRhY3RVcGRhdGVkUGFyYW0udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ1BlcnNvbmFsIGNvbnRhY3QgZGV0YWlscyB1cGRhdGVkJztcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xyXG4gICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5hZGQoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG5cclxufSkoXCIjc25hY2tiYXJcIik7XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSB0cicpLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcclxuXHJcbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcclxuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gfSkoXCJ0YWJsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==