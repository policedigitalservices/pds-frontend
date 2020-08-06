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

/***/ "./src/js/BottomDrawer.js":
/*!********************************!*\
  !*** ./src/js/BottomDrawer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BottomDrawer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 Class that facilitate the hiding and showing of the bottom bar.
*/
var BottomDrawer = /*#__PURE__*/function () {
  function BottomDrawer() {
    _classCallCheck(this, BottomDrawer);

    console.log('Creating bottom drawer here');
    this._openClass = "bottom-drawer-open";
  }

  _createClass(BottomDrawer, [{
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
/* harmony import */ var _BottomDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomDrawer */ "./src/js/BottomDrawer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DraftMessageDrawer = /*#__PURE__*/function () {
  function DraftMessageDrawer(numberOfRecipients) {
    var totalSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".draft-message-drawer__total";

    _classCallCheck(this, DraftMessageDrawer);

    this._totalsElement = document.querySelector(totalSelector);

    if (!this._totalsElement) {
      throw Error("No element matching the passed in selector ".concat(totalSelector));
    }

    this._bottomDrawer = new _BottomDrawer__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.update(numberOfRecipients);
  }

  _createClass(DraftMessageDrawer, [{
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Store a unique set of ids inside a cookie
var IdCookieHelper = /*#__PURE__*/function () {
  function IdCookieHelper(name) {
    _classCallCheck(this, IdCookieHelper);

    this._name = name;
    this._ids = new Set(this._initialise());
  } // Populate start ids, initialises cookie if not present


  _createClass(IdCookieHelper, [{
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

      var matchingValueJSON = matchingCookie.split('=')[1];
      return JSON.parse(matchingValueJSON);
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
      var idsJson = JSON.stringify(ids);
      document.cookie = "".concat(this._name, "=").concat(idsJson, ";");
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
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "./src/js/Utilities.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


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

    _classCallCheck(this, CourierLazyLoader);

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


    this._lazyLoadCheck = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function () {
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

  _createClass(CourierLazyLoader, [{
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
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/****** 

  Creates a tag list from a select element

  usage:

  new SelectListTag(selectId, revertGroupsId, onUpdateFunc).

  - selectId (required): The id of the select element acting as the source (must have multiple attribute, and all items should be marked as selected)

  - revertGroups (optiional): The id of the element that will be clicked to revert selected options (should have is-hidden class to start)

  - onUpdateFunc (required): A function called when a tag has been removed, or options are reverted.. This function will be called with two params, selectedOptions and allOptions.
                             This is intended to make the control more flexible i.e. our first usage is to update label with selected items text elsewhere on page without further coupling.

******/
var SelectListTags = /*#__PURE__*/function () {
  function SelectListTags(selectId, revertGroupsId) {
    var _this = this;

    var onUpdateFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    _classCallCheck(this, SelectListTags);

    this.onUpdateFunc = onUpdateFunc;
    this.tagOptions = document.getElementById(selectId);
    this.tagOptions.classList.add('is-hidden');
    this.revertBtn = document.getElementById(revertGroupsId);
    this.revertBtn.addEventListener('click', function (e) {
      e.preventDefault();

      var options = _this.tagOptions.querySelectorAll('option');

      options.forEach(function (o) {
        return o.selected = true;
      });

      _this.populateTags();

      _this.revertBtn.classList.add('is-hidden');
    });
    this.allOptions = _toConsumableArray(this.tagOptions.querySelectorAll('option'));

    if (this.allOptions.some(function (o) {
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

          _this.revertBtn.classList.remove('is-hidden');
        }

        _this.populateTags();
      }
    });
    this.tagOptions.after(this.tags);
    this.populateTags();
  }

  _createClass(SelectListTags, [{
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

/***/ "./src/js/SelectStaffForMessage.js":
/*!*****************************************!*\
  !*** ./src/js/SelectStaffForMessage.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IdCookieHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdCookieHelper */ "./src/js/IdCookieHelper.js");
/* harmony import */ var _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftMessageDrawer */ "./src/js/DraftMessageDrawer.js");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LazyLoader */ "./src/js/LazyLoader.js");
/* 
    This script is specific to the search staff page.
*/



var ch = new _IdCookieHelper__WEBPACK_IMPORTED_MODULE_0__["default"]('CourierMessageUserIds');
var dmd = new _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_1__["default"](ch.getCount());
document.querySelector('.test-checkboxes').addEventListener('change', function (_ref) {
  var target = _ref.target;

  if (target.matches('input[type=checkbox]')) {
    var newTotal = target.checked ? ch.add(target.value) : ch.remove(target.value);
    dmd.update(newTotal);
  }
});
/*

const contactsLoaderElement = document.getElementById('contacts-loader');

if (contactsLoaderElement) {
  const itemsList = document.querySelector('.items-list');
  
  const createDummyRow = id => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    const header = document.createElement('h2');
    header.innerText = 'Test Item ' + id;
    const p = document.createElement('p');
    p.innerText = 'Nemo laborum asperiores molestiae earum accusantium alias provident commodi porro a illum soluta dolore ipsa, debitis deleniti beatae placeat possimus consequuntur dolorum? Laudantium accusamus nam numquam, perspiciatis quod dicta dolor.';
    itemDiv.appendChild(header);
    itemDiv.appendChild(p);
    return itemDiv;
  };
  
  const checkIfMore = () => {
    return itemsList.querySelectorAll('.items-list > .item').length < 100;
  }
  
  const insertDummyRows = () => {
    const maxRows = itemsList.querySelectorAll('.items-list > .item').length;
    
    for (let i = 0; i < 10; i++) {
      var dummyItem = createDummyRow(maxRows + i + 1);
      itemsList.appendChild(dummyItem);
    }
  };
  
  const handleSearchResults = (doneSearching) => {
      // Add in some dummy rows...
      insertDummyRows();
      const moreToLoad = checkIfMore();
      doneSearching(moreToLoad);
  };
  
  const contactsLoader = new CourierLazyLoader(contactsLoaderElement, (done) => {
    
    setTimeout(() => {
      handleSearchResults(done);    
    }, 500);
    
  }, { debug: false, peekDistance: 50 });
}

*/

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
    }, 3500);
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
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/SelectListTags.js ./src/js/SelectStaffForMessage.js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/GroupsTree.js */"./src/js/GroupsTree.js");
__webpack_require__(/*! ./src/js/side.js */"./src/js/side.js");
__webpack_require__(/*! ./src/js/ToggleContent.js */"./src/js/ToggleContent.js");
__webpack_require__(/*! ./src/js/ToggleSidebar.js */"./src/js/ToggleSidebar.js");
__webpack_require__(/*! ./src/js/tables.js */"./src/js/tables.js");
__webpack_require__(/*! ./src/js/SeeAll.js */"./src/js/SeeAll.js");
__webpack_require__(/*! ./src/js/menu.js */"./src/js/menu.js");
__webpack_require__(/*! ./src/js/snackbar.js */"./src/js/snackbar.js");
__webpack_require__(/*! ./src/js/SelectListTags.js */"./src/js/SelectListTags.js");
module.exports = __webpack_require__(/*! ./src/js/SelectStaffForMessage.js */"./src/js/SelectStaffForMessage.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0JvdHRvbURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRHJhZnRNZXNzYWdlRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Hcm91cHNUcmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9JZENvb2tpZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTGF6eUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ub2dnbGVDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ub2dnbGVTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJsZXMuanMiXSwibmFtZXMiOlsiQm90dG9tRHJhd2VyIiwiY29uc29sZSIsImxvZyIsIl9vcGVuQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsIkRyYWZ0TWVzc2FnZURyYXdlciIsIm51bWJlck9mUmVjaXBpZW50cyIsInRvdGFsU2VsZWN0b3IiLCJfdG90YWxzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJFcnJvciIsIl9ib3R0b21EcmF3ZXIiLCJ1cGRhdGUiLCJpbm5lclRleHQiLCJzaG93IiwiaGlkZSIsImdyb3VwRXhpc3QiLCJnZXRFbGVtZW50QnlJZCIsInVzZUNoZWNrYm94ZXMiLCJoYXNBdHRyaWJ1dGUiLCJ1c2VTaW5nbGVTZWxlY3RDaGVja2JveCIsImxvY2tSb290Tm9kZSIsInNlbGVjdG9yIiwiaW50aWFsbHlTZWxlY3RlZE5vZGVzIiwiZ3JvdXBTZWxlY3QiLCJncm91cFRleHRhcmVhIiwicGFyZW50RWxlbWVudCIsInNlbGVjdGVkT3B0aW9uc05vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJwYXRoVG9VbmNoZWNrIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImNiU2VsZWN0b3IiLCJjaGVjYm94VG9VbmNoZWNrIiwiY2xpY2siLCJzZWFyY2hQYXJ0cyIsImdldFVybFZhcnMiLCJ2YXJzIiwicGFydHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtIiwia2V5IiwicGFnZVBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImdyb3VwUGFyYW0iLCJncm91cCIsInNlYXJjaFBhcmFtIiwiU2VhcmNoIiwiZ2V0UGFnZVBhdGhGb3JHcm91cCIsImdycCIsInNob3VsZFBhcmVudEJlT3BlbiIsInBhdGgiLCJwYXRoVG9DaGVjayIsInN0YXJ0c1dpdGgiLCJpc1NlbGVjdGVkR3JvdXAiLCJwYXJhbXNUb0NoZWNrIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYnVpbGRMaW5rIiwidGV4dCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJidWlsZENoZWNrYm94IiwicGFyZW50Q2hlY2tlZCIsImNoZWNrYm94IiwidHlwZSIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJpZCIsIm5ld1BhcmVudFNlbGVjdGVkIiwiY2hlY2tlZCIsImRpc2FibGVkIiwibmV3Q2hlY2tlZCIsImluZGV4T2YiLCJsYWJlbCIsImNoZWNrU3BhbiIsImJvcmRlclNwYW4iLCJhcHBlbmRDaGlsZCIsImJ1aWxkQ2hlY2tib3hMYWJlbCIsImNoZWNrYm94TGFiZWwiLCJpbm5lckhUTUwiLCJmb3IiLCJ0cmFuc2ZlclZhbHVlcyIsImRhdGEiLCJlbGVtcyIsInBvcHVsYXRlR3JvdXBGaWVsZCIsInRleHRhcmVhIiwiZWxlbWVudCIsImV4aXN0aW5nT3B0aW9uVmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwib3B0aW9ucyIsIm1hcCIsIm9wdCIsImRhdGFfaSIsImRhdGFfY3VycmVudCIsInN1YnN0cmluZyIsIm5ld09wdGlvbiIsInNlbGVjdGVkIiwiYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlIiwicGFyZW50IiwiY2hlY2tib3hSZXN1bHQiLCJmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50IiwiY3VycmVudCIsImNoaWxkcmVuIiwidXBkYXRlckZuIiwiY3VycmVudExvb3BDaGlsZCIsImhhbmRsZUNoZWNrYm94Q2xpY2siLCJwYXJlbnRMaSIsInBhcmVudE5vZGUiLCJhbGxHcm91cENoZWNrYm94ZXMiLCJjaGVja2JveFRvVXBkYXRlIiwicHJldmVudERlZmF1bHQiLCJjaGlsZENoZWNrYm94ZXMiLCJoaWRkZW5GaWVsZCIsInN0cnVjdHVyZSIsIm9wdGlvbl9pIiwib3B0aW9uIiwic2VnbWVudHMiLCJzcGxpdCIsIm5vZGVUb0NoZWNrIiwic2VnbWVudF9pIiwic2VnIiwidHJlZUNvbnRhaW5lciIsImFjdGl2ZUNoaWxkcmVuIiwiYWNfaSIsImFjdGl2ZUNoaWxkIiwiZGlzcGxheUNoaWxkS2V5cyIsImN1cnJUZXh0IiwiY3VyclBhdGgiLCJvYmoiLCJlbGVtZW50VG9BZGRUbyIsImxldmVsIiwicGFyZW50c0NoZWNrZWQiLCJjaGlsZEtleXMiLCJPYmplY3QiLCJrZXlzIiwicGFyZW50Q2hlY2tlZFN0YXRlIiwiY2hpbGRMaXN0SXRlbSIsImNoaWxkTGlzdCIsImNrX2kiLCJjaGlsZEtleSIsInJlcGxhY2VDaGlsZCIsIklkQ29va2llSGVscGVyIiwiX25hbWUiLCJfaWRzIiwiU2V0IiwiX2luaXRpYWxpc2UiLCJjb29raWVTdHJpbmciLCJjb29raWUiLCJjb29raWVzIiwibWF0Y2hpbmdDb29raWUiLCJmaW5kIiwiYyIsIl9wZXJzaXN0IiwibWF0Y2hpbmdWYWx1ZUpTT04iLCJKU09OIiwicGFyc2UiLCJpZHMiLCJnZXRJZHMiLCJpZHNKc29uIiwic3RyaW5naWZ5Iiwic2l6ZSIsImRlbGV0ZSIsIl91cGRhdGUiLCJnZXRDb3VudCIsImhhcyIsIkNvdXJpZXJMYXp5TG9hZGVyIiwibG9hZGVyRWxlbWVudCIsImxvYWRlckZuIiwiY29uZmlnT2JqIiwiY29uZmlnRGVmYXVsdHMiLCJsb2FkZXJDbGFzcyIsImxvYWRlckxvYWRpbmdDbGFzcyIsImRlYm91bmNlTXMiLCJwZWVrRGlzdGFuY2UiLCJkZWJ1ZyIsIl9sb2FkZXIiLCJfbG9hZGVyRnVuYyIsIl9jb25maWciLCJfaGFzTGlzdGVuZXJzQWRkZWQiLCJfbGF6eUxvYWRDaGVjayIsImRlYm91bmNlIiwiX2RvTG9hZE1vcmVDaGVjayIsIl9jb25kaXRpb25hbERlYnVnTG9nIiwiX3N0b3BMaXN0ZW5pbmciLCJfZG9uZVNlYXJjaGluZyIsIl9zdGFydExpc3RlbmluZyIsImJpbmQiLCJ2aXNpYmxlIiwibW9yZVRvTG9hZCIsIl9zZXRMb2FkaW5nRWxlbWVudFZpc2liaWxpdHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9EZWJ1ZyIsImxvZ2dlckZ1bmMiLCJoaWdoZXN0VmlzaWJsZVlQb3MiLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImxvYWRNb3JlVHJpZ2dlclBvcyIsIk1hdGgiLCJtaW4iLCJvZmZzZXRUb3AiLCJwZWVrUG9zaXRpb25WaXNpYmxlIiwic2hvdWxkTG9hZE1vcmUiLCJ0YWJsZSIsInNob3dNb3JlVGFibGVCdXR0b25zIiwiZm9yRWFjaCIsInNob3dBbGxCdXR0b24iLCJ0YWJsZUlkIiwiZGVmYXVsdEl0ZW1MaW1pdCIsInBhc3NlZEl0ZW1MaW1pdCIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwibGltaXRUb1VzZSIsImlzTmFOIiwidGFibGVCb2R5IiwidEJvZGllcyIsInRhYmxlQm9keUxlbmd0aCIsInJvd3MiLCJib2R5Um93Iiwic3R5bGUiLCJkaXNwbGF5IiwiZWwiLCJTZWxlY3RMaXN0VGFncyIsInNlbGVjdElkIiwicmV2ZXJ0R3JvdXBzSWQiLCJvblVwZGF0ZUZ1bmMiLCJ0YWdPcHRpb25zIiwicmV2ZXJ0QnRuIiwibyIsInBvcHVsYXRlVGFncyIsImFsbE9wdGlvbnMiLCJzb21lIiwidGFncyIsInRhcmdldFZhbCIsImRhdGFzZXQiLCJ2YWwiLCJhZnRlciIsInNlbGVjdGVkT3B0aW9ucyIsImZpbHRlciIsInQiLCJtYWtlVGFnIiwidGFnIiwiY3JlYXRlVGV4dE5vZGUiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsImNoIiwiZG1kIiwibmV3VG90YWwiLCJyZXNwb25zZXMiLCJrZXlBcnJheSIsImFkZFJlc3BvbnNlQnV0dG9uIiwiYmx1ciIsImFkZFJlc3BvbnNlIiwicmVtb3ZlUmVzcG9uc2UiLCJ2YWxpZGF0ZVJlc3BvbnNlIiwiZXZlcnkiLCJhZGRQaG9uZUlucHV0IiwiYWRkUGhvbmVCdXR0b24iLCJhZGRFbWFpbElucHV0IiwiYWRkRW1haWxCdXR0b24iLCJhZGRHcm91cEJ1dHRvbiIsInNhdmVHcm91cEJ1dHRvbiIsInRhcmdldDIiLCJpbnB1dEVycm9ycyIsImlucHV0RXJyb3JzQXJyYXkiLCJjbG9zZXN0IiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJtZW51IiwibWVudUJ1dHRvbiIsIm1lbnVDaGlsZCIsIm9uY2xpY2siLCJldmVudCIsImRyb3Bkb3ducyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvcGVuRHJvcGRvd24iLCJ0b2dnbGVTaWRlYmFyIiwiY2xvc2VTaWRlYmFyIiwieCIsInkiLCJzbmFja2JhclN0b3JhZ2VJdGVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNuYWNrYmFyIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjb250YWN0UGFyYW0iLCJnZXQiLCJPcmdhbmlzYXRpb25QYXJhbSIsInNuYWNrYmFyTWVzc2FnZSIsInNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSIsImxvY2F0aW9ucyIsImluY2x1ZGVzIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7SUFHcUJBLFk7QUFDakIsMEJBQWM7QUFBQTs7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLG9CQUFsQjtBQUNIOzs7OzJCQUVNO0FBQ0hDLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixD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USxDQUFDeE4sU0FBVCxHQUFxQmdPLGVBQXJCO0FBRUF4QixjQUFVLENBQUMsWUFBVTtBQUNqQmdCLGNBQVEsQ0FBQ2xULFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGtCQUExQjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKLENBekRELEVBeURHLFdBekRILEU7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlIiwiZmlsZSI6ImRpc3QvanMvc2NyaXB0cy5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8qXHJcbiBDbGFzcyB0aGF0IGZhY2lsaXRhdGUgdGhlIGhpZGluZyBhbmQgc2hvd2luZyBvZiB0aGUgYm90dG9tIGJhci5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90dG9tRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBib3R0b20gZHJhd2VyIGhlcmUnKTtcclxuICAgICAgICB0aGlzLl9vcGVuQ2xhc3MgPSBcImJvdHRvbS1kcmF3ZXItb3BlblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fb3BlbkNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuL0JvdHRvbURyYXdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFmdE1lc3NhZ2VEcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZSZWNpcGllbnRzLCB0b3RhbFNlbGVjdG9yPVwiLmRyYWZ0LW1lc3NhZ2UtZHJhd2VyX190b3RhbFwiKSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG90YWxTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b3RhbHNFbGVtZW50KSB7IHRocm93IEVycm9yKGBObyBlbGVtZW50IG1hdGNoaW5nIHRoZSBwYXNzZWQgaW4gc2VsZWN0b3IgJHt0b3RhbFNlbGVjdG9yfWApOyB9XHJcbiAgICAgICAgdGhpcy5fYm90dG9tRHJhd2VyID0gbmV3IEJvdHRvbURyYXdlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKG51bWJlck9mUmVjaXBpZW50cyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpIHtcclxuICAgICAgICB0aGlzLl90b3RhbHNFbGVtZW50LmlubmVyVGV4dCA9IG51bWJlck9mUmVjaXBpZW50cztcclxuICAgICAgICBudW1iZXJPZlJlY2lwaWVudHMgPyB0aGlzLl9ib3R0b21EcmF3ZXIuc2hvdygpIDogdGhpcy5fYm90dG9tRHJhd2VyLmhpZGUoKTtcclxuICAgIH1cclxufSIsIiB2YXIgZ3JvdXBFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XHJcbiAgICBpZihncm91cEV4aXN0KXtcclxuXHJcbiAgICAgICAgdmFyIHVzZUNoZWNrYm94ZXMgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94ID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1zaW5nbGUtc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgICAgdmFyIGxvY2tSb290Tm9kZSA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLWxvY2stcm9vdCcpO1xyXG5cclxuKGZ1bmN0aW9uIChzZWxlY3RvciwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAvL0NoZWNrIG9uIHBhZ2Ugd2hldGhlciBHcm91cCBNdWx0aSBTZWxlY3QgZXhpc3RzXHJcbiAgICB2YXIgaW50aWFsbHlTZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwU2VsZWN0b3JcIik7XHJcbiAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbiAgICAvLyBJZiB0aGUgR3JvdXAgTXVsdGkgU2VsZWN0IGRvZXMgZXhpc3QsIGhpZGUgaXQgKGlmIEpTIGVuYWJsZWQpXHJcbiAgICBpZiAoZ3JvdXBTZWxlY3QgIT09IG51bGwpIHtcclxuICAgICAgICBncm91cFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEdyYWIgYWxsIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZFxyXG4gICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnNOb2RlcyA9IGdyb3VwU2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRPcHRpb25zTm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgIGludGlhbGx5U2VsZWN0ZWROb2Rlcy5wdXNoKHNlbGVjdGVkT3B0aW9uc05vZGVzW2ldLnZhbHVlIHx8IFwiXFxcXFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XHJcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aFRvVW5jaGVjayA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIikucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiU2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1jaGVja2JveF0uR3JvdXBJdGVtW3ZhbHVlPVwiJytwYXRoVG9VbmNoZWNrKydcIl0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNib3hUb1VuY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNiU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNib3hUb1VuY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjYm94VG9VbmNoZWNrLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VhcmNoUGFydHMgPSAoZnVuY3Rpb24gZ2V0VXJsVmFycygpIHtcclxuICAgICAgICB2YXIgdmFycyA9IHt9O1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24obSxrZXksdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhcnM7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBwYWdlUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBcIj9ncm91cD1cIjtcclxuICAgIHZhciBncm91cFBhcmFtID0gc2VhcmNoUGFydHMuZ3JvdXA7XHJcbiAgICB2YXIgc2VhcmNoUGFyYW0gPSBzZWFyY2hQYXJ0cy5TZWFyY2g7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gYnVpbGQgdGhlIHBhdGhcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2VQYXRoRm9yR3JvdXAoZ3JvdXApIHtcclxuICAgICAgdmFyIGdycCA9IGdyb3VwID09PSBcIlwiID8gXCJcXFxcXCIgOiBncm91cDtcclxuICAgICAgcmV0dXJuIHBhZ2VQYXRoICsgZ3JwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZCBzaG91bGQgYmUgb3BlbiBpLmUuIHRvIHJldmVhbCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBzaG91bGRQYXJlbnRCZU9wZW4ocGF0aCkge1xyXG4gICAgICAgIGlmICghZ3JvdXBQYXJhbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoICsgXCJcXFxcXCIpO1xyXG4gICAgICAgIHJldHVybiBncm91cFBhcmFtLnN0YXJ0c1dpdGgocGF0aFRvQ2hlY2spICYmIGdyb3VwUGFyYW0gIT0gcGF0aFRvQ2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkZWQgaXMgdGhlIGN1cnJlbnRseVNlbGVjdGVkR3JvdXBcclxuICAgIGZ1bmN0aW9uIGlzU2VsZWN0ZWRHcm91cChwYXRoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtc1RvQ2hlY2sgPSBkZWNvZGVVUklDb21wb25lbnQoZ3JvdXBQYXJhbSB8fCBcIlxcXFxcIik7XHJcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggfHwgXCJcXFxcXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFyYW1zVG9DaGVjayA9PT0gcGF0aFRvQ2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGxpbmsgZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRMaW5rKHRleHQsIHBhdGgpIHtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGdldFBhZ2VQYXRoRm9yR3JvdXAocGF0aCk7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpbmtcIik7XHJcblxyXG4gICAgICAgIC8vIE5CLiAgT3JpZ2luYWxseSB3ZSBkaWRudCB3YW50IHRoZSBjdXJyZW50IGNsYXNzIHRvIGJlIGFkZGVkIGlmIGRvaW5nIGEgc2VhcmNoLCBidXQgdGhpbmsgd2UgZG8gbm93LlxyXG4gICAgICAgIC8vIGlmICgoIXNlYXJjaFBhcmFtKSAmJiAgaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XHJcbiAgICAgICAgLy8gaWYgKGlzU2VsZWN0ZWRHcm91cChwYXRoKSkge1xyXG4gICAgICAgIC8vICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGluay0tY3VycmVudFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIGxpbms7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGNoZWNrYm94IGxhYmVsIGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3godGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xyXG4gICAgICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkdyb3VwSXRlbVwiKTtcclxuICAgICAgICBjaGVja2JveC5uYW1lID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveC52YWx1ZSA9IHBhdGg7XHJcbiAgICAgICAgY2hlY2tib3guaWQgPSB0ZXh0O1xyXG4gICAgICAgIHZhciBuZXdQYXJlbnRTZWxlY3RlZCA9IHBhcmVudENoZWNrZWQ7XHJcblxyXG4gICAgICAgIGlmIChwYXRoID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSB0aGUgcm9vdCBub2RlIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgY2hlY2tlZCBCVVQgdGhlIGNoaWxkcmVuIG9mIHRoaXMgbm9kZSBzaG91bGQgYWN0IGFzIHRob3VnaCBpdCBpc250IGNoZWNrZWQgc28gd2UgZG9udCB1cGRhdGUgdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDaGVja2VkICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIHNlbGVjdGVkIGFsbCBpdHMgY2hpbGRyZW4gc2hvdWxkIGJlIGRpc2FibGVkIGFuZCB1bmNoZWNrZWRcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIG5vdCBjaGVja2VkIGl0cyBjaGlsZHJlbiBzZWxlY3RlZCBzdGF0ZSBkZXBlbmQgb24gdGhlIGNoaWxkcyB2YWx1ZSwgYW5kIG5vdCBiZSBkaXNhYmxlZFxyXG4gICAgICAgICAgICB2YXIgbmV3Q2hlY2tlZCA9IGludGlhbGx5U2VsZWN0ZWROb2Rlcy5pbmRleE9mKHBhdGggfHwgJ1xcXFwnKSA+PSAwO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICAgICAgbmV3UGFyZW50U2VsZWN0ZWQgPSBuZXdDaGVja2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3R5bGUgYXMgYSByYWRpbyBidXR0b25cclxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgdmFyIGNoZWNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY2hlY2tTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19jaGVjaycpO1xyXG4gICAgICAgICAgICB2YXIgYm9yZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9fYm9yZGVyJyk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrU3Bhbik7XHJcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGJvcmRlclNwYW4pO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9faW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tib3ggPSBsYWJlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7Y2hlY2tib3gsIG5ld1BhcmVudFNlbGVjdGVkfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggZm9yIHRoZSBncm91cFxyXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveExhYmVsKHRleHQsIHBhdGgpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuZm9yID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0ZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94TGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhbnNmZXJWYWx1ZXMoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuR3JvdXBJdGVtJylcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPGVsZW1zLmxlbmd0aDtpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9ja1Jvb3ROb2RlICYmICEoZWxlbXNbaV0udmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8tb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1zW2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWxlbXNbaV0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpIHtcclxuXHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xyXG4gICAgICAgIGlmICh0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dyb3VwU2VsZWN0b3InKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBleGlzdGluZ09wdGlvblZhbHVlcyA9IEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBkYXRhX2kgPSAwOyBkYXRhX2kgPCBkYXRhLmxlbmd0aDsgZGF0YV9pKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFfY3VycmVudCA9IGRhdGFbZGF0YV9pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTCArICc8ZGl2IGNsYXNzPVwidGFnXCI+QWxsIENvbnRhY3QgR3JvdXBzPGkgY2xhc3M9XCJidXR0b25fX2ljb25cIiBkYXRhLXBhdGg9XCInKyBkYXRhX2N1cnJlbnQgKydcIj5jbGVhcjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPicgKyBkYXRhX2N1cnJlbnQuc3Vic3RyaW5nKDEpICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIG9wdGlvbiBleGlzdHMgLSBhZGQgaXQgaWYgbm90XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdPcHRpb25WYWx1ZXMuaW5kZXhPZihkYXRhX2N1cnJlbnQpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGRhdGFfY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gZGF0YV9jdXJyZW50O1wiXCJcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBkYXRhLmluZGV4T2YoZWxlbWVudC5vcHRpb25zW2ldLnZhbHVlKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuRm9yTW9kZShwYXJlbnQsIHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuICAgICAgICBpZiAodXNlQ2hlY2tib3hlcyB8fCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xyXG5cclxuICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgdGhlIGJsYW5rIHZhbHVlIGZvciAnQWxsIENvbnRhY3QgR3JvdXBzJ1xyXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBcIlxcXFxcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSk7XHJcbiAgICAgICAgICAgIHZhciBjaGVja2JveFJlc3VsdCA9IGJ1aWxkQ2hlY2tib3godGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGVja2JveFJlc3VsdC5jaGVja2JveCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveFJlc3VsdC5uZXdQYXJlbnRTZWxlY3RlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxpbmsgdG8gcmVmcmVzaCBwYWdlIHdpdGggc2VsZWN0ZWQgbm9kZS5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkTGluayh0ZXh0LCBwYXRoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRDaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGN1cnJlbnQsIGNoaWxkcmVuLCB1cGRhdGVyRm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50TG9vcENoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9vcENoaWxkICE9PSBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVyRm4oY3VycmVudExvb3BDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayhlLCBjaGVja2JveCkge1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50TGkgPSBjaGVja2JveC5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSBvbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCwgYW5kIHRoZSBzZWxlY3RlZCBpdGVtIGNhbm5vdCBiZSBkZXNlbGV0ZWQuXHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWxsR3JvdXBDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyb3VwLXNlbGVjdG9yX19saXN0LS1yb290IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBhbGxHcm91cENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFyZW50TGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudCcpKXtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY2hpbGRDaGVja2JveGVzID0gcGFyZW50TGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgY2hpbGRDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyYWIgdGhlIHNlbGVjdCBsaXN0IGFuZCBhbGwgb2YgaXRzIG9wdGlvbnNcclxuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgdmFyIG9wdGlvbnMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG5cclxuICAgIHZhciBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiR3JvdXBcIik7XHJcbiAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IGdyb3VwUGFyYW0gfHwgJ1xcXFwnO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBjb2xsZWN0aW9ucyB3aXRoIHN0YXJ0aW5nIGtleSBmb3IgdGhlIHJvb3QuXHJcbiAgICB2YXIgc3RydWN0dXJlID0geyBcIlxcXFxcIjoge30gfTtcclxuXHJcbiAgICAvLyBCdWlsZCBvbiB0aGUgYmFzZSBzdHJ1Y3R1cmUgYnkgbG9vcGluZyB0aHJvdWdoIGVhY2ggc2VsZWN0IGl0ZW0uXHJcbiAgICBmb3IgKHZhciBvcHRpb25faT0wOyBvcHRpb25faTxvcHRpb25zLmxlbmd0aDsgb3B0aW9uX2krKykge1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tvcHRpb25faV07XHJcblxyXG4gICAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgLy8gU2VwZXJhdGUgdGhlIGdyb3VwIG5hbWUgaW50byBhbGwgaXRzIHBhdGggc2VnbWVudHNcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gb3B0aW9uLnRleHRDb250ZW50LnNwbGl0KFwiXFxcXFwiKTtcclxuICAgICAgICAgICAgLy8gU3RhcnQgYXQgdGhlIHJvb3QgZWxlbWVudC5cclxuICAgICAgICAgICAgdmFyIG5vZGVUb0NoZWNrID0gc3RydWN0dXJlW1wiXFxcXFwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHNlZ21lbnQgZW5zdXJlIHRoYXQgYWxsIGxldmVscyBvZiB0aGUgc3RydWN0dXJlIGFyZSBpbiBwbGFjZS5cclxuICAgICAgICAgICAgZm9yICh2YXIgc2VnbWVudF9pPTA7IHNlZ21lbnRfaTxzZWdtZW50cy5sZW5ndGg7IHNlZ21lbnRfaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ21lbnRzW3NlZ21lbnRfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlZyAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvQ2hlY2tbc2VnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVja1tzZWddID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2tbc2VnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgYmFzZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWRcclxuICAgIHZhciB0cmVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XHJcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdFwiKTtcclxuXHJcblxyXG4gICAgLy8gSGFuZGxlIGFsbCB0aGUgY2xpY2tzIGF0IHRoZSBwYXJlbnQgbGV2ZWxcclxuICAgIHRyZWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgY2hlY2tib3ggaXRlbXMgYmVpbmcgc2VsZWN0ZWQuXHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyYW5zZmVyVmFsdWVzKCk7XHJcblxyXG4gICAgICAgIC8vIFdlIG9ubHkgY2FyZSBhYm91dCBjbGlja3Mgb24gZWxlbWVudHMgdGhhdCBhcmUgcGFyZW50c1xyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKSkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbiBvcGVuIHBhcmVudCBpdGVtIGlzIGNsaWNrZWQsIGNsb3NlIGl0LCBidXQgYWxzbyBhbGwgaXRzIG9wZW4gZGVzY2VuZGFudHMuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGRyZW4gPSB0YXJnZXQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICBcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGFjX2k9MDsgYWNfaTxhY3RpdmVDaGlsZHJlbi5sZW5ndGg7IGFjX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZCA9IGFjdGl2ZUNoaWxkcmVuW2FjX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBPcGVuIGFueSBjbG9zZWQgcGFyZW50cyB0aGF0IGFyZSBjbGlja2VkLlxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIHNlbGVjdCBsaXN0IGZyb20gdGhlIHByZXZpb3VzIG5vZGUgc3RydWN0dXJlLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaGlsZEtleXMoY3VyclRleHQsIGN1cnJQYXRoLCBvYmosIGVsZW1lbnRUb0FkZFRvLCBsZXZlbCwgcGFyZW50c0NoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRDaGVja2VkU3RhdGUgPSBwYXJlbnRzQ2hlY2tlZDtcclxuXHJcbiAgICAgICAgdmFyIGNoaWxkTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXVzZUNoZWNrYm94ZXMgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94ICYmIGlzU2VsZWN0ZWRHcm91cChjdXJyUGF0aCkpIHtcclxuICAgICAgICAgICAgLy8gT25seSBhZGQgdGhlIGN1cnJlbnQgc3RhdGUgd2hlbiBpbiB0aGUgJ2xpbmsgbW9kZSdcclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1jdXJyZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGlsZEtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYXQgdGhlIGJvdHRvbSBvZiBhIGJyYW5jaCBpLmUuIG5vIGNoaWxkcmVuIHRvIHByb2Nlc3NcclxuXHJcbiAgICAgICAgICAgIGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBub2RlIGhhcyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMSB8fCBzaG91bGRQYXJlbnRCZU9wZW4oY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuIGZpcnN0IGxldmVsIGNoaWxkcmVuIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgICAgICBcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZSA9IGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRhaW5lciByZWFkeSB0byBiZSBwb3B1bGF0ZWQgd2l0aCB0aGUgY2hpbGQgbm9kZXNcclxuICAgICAgICAgICAgdmFyIGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5hcHBlbmRDaGlsZChjaGlsZExpc3QpO1xyXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcclxuICAgICAgICAgICAgLy8gQ2FsbCByZWN1cnNpdmVseSB3aXRoIHVwZGF0ZWQgcGFyYW1zIGZvciBlYWNoIGNoaWxkIG5vZGVcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGNrX2k9MDsgY2tfaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGNrX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGRLZXlzW2NrX2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEtleSAhPT0gJ0FsbCBjb250YWN0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q2hpbGRLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyUGF0aCArIFwiXFxcXFwiICsgY2hpbGRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hpbGRLZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgaW5pdGlhbCBjYWxsIG9mIHRoZSByZWN1cnNpdmUgZnVuY3Rpb24gc3RhcnRpbmcgYXQgdGhlIHJvb3QuXHJcbiAgICBkaXNwbGF5Q2hpbGRLZXlzKFwiQWxsIENvbnRhY3QgR3JvdXBzXCIsIFwiXCIsIHN0cnVjdHVyZVtcIlxcXFxcIl0sIHRyZWVDb250YWluZXIsIDEsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIHRoZSBzZWxlY3QgbGlzdCB3aXRoIHRoZSBuZXcgdHJlZVxyXG4gICAgZ3JvdXBTZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodHJlZUNvbnRhaW5lciwgZ3JvdXBTZWxlY3QpO1xyXG5cclxuICAgIHRyZWVDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoaWRkZW5GaWVsZCk7XHJcblxyXG4gICAgdHJhbnNmZXJWYWx1ZXMoKTtcclxuXHJcbn0pKFwiI0dyb3VwXCIsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KTtcclxufVxyXG4iLCIvLyBTdG9yZSBhIHVuaXF1ZSBzZXQgb2YgaWRzIGluc2lkZSBhIGNvb2tpZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZENvb2tpZUhlbHBlcntcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX2lkcyA9IG5ldyBTZXQodGhpcy5faW5pdGlhbGlzZSgpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUG9wdWxhdGUgc3RhcnQgaWRzLCBpbml0aWFsaXNlcyBjb29raWUgaWYgbm90IHByZXNlbnRcclxuICAgIF9pbml0aWFsaXNlKCkge1xyXG4gICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBkb2N1bWVudC5jb29raWU7XHJcblxyXG4gICAgICBjb25zdCBjb29raWVzID0gY29va2llU3RyaW5nLnNwbGl0KCc7ICcpO1xyXG4gICAgICBjb25zdCBtYXRjaGluZ0Nvb2tpZSA9IGNvb2tpZXMuZmluZChjID0+IGMuc3RhcnRzV2l0aChgJHt0aGlzLl9uYW1lfT1gKSk7XHJcblxyXG4gICAgICBpZiAoIW1hdGNoaW5nQ29va2llKSB7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fcGVyc2lzdChbXSk7ICAgXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBtYXRjaGluZ1ZhbHVlSlNPTiA9IG1hdGNoaW5nQ29va2llLnNwbGl0KCc9JylbMV07XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKG1hdGNoaW5nVmFsdWVKU09OKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2F2ZSB0aGUgbmV3IGlkcyB0byB0aGUgY29va2llIGFmdGVyIHVwZGF0ZVxyXG4gICAgX3VwZGF0ZSgpIHtcclxuICAgICAgY29uc3QgaWRzID0gdGhpcy5nZXRJZHMoKTtcclxuICAgICAgdGhpcy5fcGVyc2lzdChpZHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTYXZlIHRoZSBwYXNzZWQgaW4gaWRzIHRvIHRoZSBjb29raWVcclxuICAgIF9wZXJzaXN0KGlkcykgeyAgICBcclxuICAgICAgY29uc3QgaWRzSnNvbiA9IEpTT04uc3RyaW5naWZ5KGlkcyk7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke3RoaXMuX25hbWV9PSR7aWRzSnNvbn07YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cclxuICAgIGdldElkcygpIHtcclxuICAgICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbSh0aGlzLl9pZHMpXHJcbiAgICAgIHJldHVybiBpZHM7XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGlkcyBjdXJyZW50bHkgaW4gdGhlIHNldC5cclxuICAgIGdldENvdW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWRzLnNpemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlbW92ZSBvbmUgb3IgbW9yZSBpZHMuIFJldHVybiB0aGUgbmV3IGNvdW50XHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgdGhpcy5faWRzLmRlbGV0ZShpZCk7ICAgICAgXHJcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgb25lIG9yIG1vcmUgaWRzLiBSZXR1cm5zIHRoZSBuZXcgY291bnRcclxuICAgIGFkZChpZCkge1xyXG4gICAgICB0aGlzLl9pZHMuYWRkKGlkKTtcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9lcyB0aGUgc2V0IGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBhcnJheSBpdGVtLlxyXG4gICAgaGFzSWQoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRzLmhhcyhpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuLyoqXHJcbiAgQ2xhc3MgdG8gbWFuYWdlIHRoZSBsb2FkIG9uIHNjcm9sbCBmdW5jdGlvbmFsaXR5IGZvciBhIHBhZ2UuXHJcbiAgV2hlbiB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQgc2VydmVyIHNpZGUgaXQgc2hvdWxkIGhpZGUgdGhlIGxvYWRlciBlbGVtZW50IGlmIG5vIG1vcmUgcmVzdWx0cyB0byBsb2FkLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VyaWVyTGF6eUxvYWRlciB7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICBDb25zdHJ1Y3RvclxyXG4gICAgUGFyYW1zXHJcbiAgICAgLSBsb2FkZXJFbGVtZW50IChyZXF1aXJlZCk6IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBsb2FkZXJcclxuICAgICAtIGxvYWRlckZuIChyZXF1aXJlZCk6IFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlIG9mIHJlc3VsdHMuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gY29tcGxldGlvbiB3aXRoIGEgYm9vbCBmb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIG9yIG5vdCB0aGVyZSBhcmUgbW9yZSBpdGVtcyB0byBsb2FkLlxyXG4gICAgIC0gY29uZmlnT2JqIChvcHRpb25hbCk6ICBBbiBvYmplY3Qgd2hvc2Uga2V5IGFuZCB2YWx1ZXMgd2lsbCBvdmVycmlkZSBkZWZhdWx0IGNvbmZpZyBzZXR0aW5ncy5cclxuICAqLyAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGxvYWRlckVsZW1lbnQsIFxyXG4gICAgICBsb2FkZXJGbiwgXHJcbiAgICAgIGNvbmZpZ09iaiA9IHt9XHJcbiAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAgRGVmYXVsdCBjb25maWcgc2V0dGluZ3NcclxuICAgICovXHJcbiAgICBjb25zdCBjb25maWdEZWZhdWx0cyA9IHtcclxuICAgICAgbG9hZGVyQ2xhc3M6ICdsb2FkZXInLCAgLy8gdGhlIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBsb2FkZXIgZWxlbWVudFxyXG4gICAgICBsb2FkZXJMb2FkaW5nQ2xhc3M6ICdsb2FkZXItLWxvYWRpbmcnLCAvLyB0aGUgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGxvYWRlciBlbGVtZW50IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgIGRlYm91bmNlTXM6IDEwMCwgLy8gaG93IGxvbmcgdG8gd2FpdCBiZXR3ZWVuIGV2ZW50cyBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIHBlZWtEaXN0YW5jZTogMCwgLy8gaG93IG11Y2ggb2YgbG9hZGluZyBlbGVtZW50IHNob3VsZCBiZSBvbiBzY3JlbiBiZWZvcmUgY2FsbGluZyBsb2FkXHJcbiAgICAgIGRlYnVnOiBmYWxzZSAgLy8gd2hldGhlciBvciBub3QgdG8gbG9nIGRlYnVnIGluZm8gdG8gY29uc29sZS5cclxuICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXJFbGVtZW50O1xyXG4gICAgdGhpcy5fbG9hZGVyRnVuYyA9IGxvYWRlckZuO1xyXG4gICAgICAgIFxyXG4gICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBwYXNzZWQgaW4gY29uZmlnXHJcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZ0RlZmF1bHRzLCAuLi5jb25maWdPYmogfTtcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgd2hldGhlciBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkIG9yIHJlbW92ZWRcclxuICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgaWYgKCF0aGlzLl9sb2FkZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGxvYWRlciBlbGVtZW50IHByb3ZpZGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBvbiB0aGUgbG9hZGVycyBjbGFzcyBmcm9tIHRoZSBjb25maWdcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJDbGFzcyk7XHJcbiAgICBcclxuICAgIC8vIERlYm91bmNlIHRoZSBjaGVja1xyXG4gICAgdGhpcy5fbGF6eUxvYWRDaGVjayA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgaWYodGhpcy5fZG9Mb2FkTW9yZUNoZWNrKCkpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdDYWxsaW5nIGxvYWQgbW9yZSBmdW5jdGlvbicpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjYWxsIHRoZSBzZWFyY2ggZnVuY3Rpb24gJiBwYXNzIGluIHRoZSBkb25lIHNlYXJjaGluZyBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2xvYWRlckZ1bmModGhpcy5fZG9uZVNlYXJjaGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnTm90IHJlYWR5IHRvIHJlbG9hZCB5ZXQnKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlYm91bmNlTXMpO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgdGhlIGV2ZW50cyAoYWxzbyBkb2VzIGluaXRpYWwgY2hlY2spXHJcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy5fZG9uZVNlYXJjaGluZyA9IHRoaXMuX2RvbmVTZWFyY2hpbmcuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgXHJcbiAgX3NldExvYWRpbmdFbGVtZW50VmlzaWJpbGl0eSh2aXNpYmxlKSB7XHJcbiAgICBpZih2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGtsZSByZXN1bHRzIGNvbWluZyBiYWNrIGluXHJcbiAgX2RvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCkge1xyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZyhgX2RvbmVTZWFyY2hpbmcgY2FsbGJhY2sgY2FsbGVkIHdpdGggbW9yZSB0byBsb2FkICR7bW9yZVRvTG9hZH1gKTtcclxuICAgIHRoaXMuX2xvYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5sb2FkZXJMb2FkaW5nQ2xhc3MpIFxyXG4gICAgaWYgKG1vcmVUb0xvYWQpIHtcclxuICAgICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnQWxsIGRvbmUgLSBoaWRpbmcgbG9hZGVyIGVsZW1lbnQnKTtcclxuICAgICAgdGhpcy5fc2V0TG9hZGluZ0VsZW1lbnRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gV2lyZSB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIGRvIGluaXRpYWwgY2hlY2suXHJcbiAgX3N0YXJ0TGlzdGVuaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9oYXNMaXN0ZW5lcnNBZGRlZCkgeyAgICAgIFxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2xhenlMb2FkQ2hlY2spO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25DaGFuZ2UnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgdGhpcy5faGFzTGlzdGVuZXJzQWRkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdMaXN0ZW5lcnMgYWRkZWQnKTtcclxuICAgICAgdGhpcy5fbGF6eUxvYWRDaGVjaygpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyBhbHJlYWR5IGluIHBsYWNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXHJcbiAgX3N0b3BMaXN0ZW5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzTGlzdGVuZXJzQWRkZWQpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9sYXp5TG9hZENoZWNrKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uQ2hhbmdlJywgdGhpcy5fbGF6eUxvYWRDaGVjayk7XHJcbiAgICAgIHRoaXMuX2hhc0xpc3RlbmVyc0FkZGVkID0gZmFsc2U7ICAgICAgXHJcbiAgICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coJ0xpc3RlbmVycyByZW1vdmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb25kaXRpb25hbERlYnVnTG9nKCdObyBMaXN0ZW5lcnMgdG8gcmVtb3ZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhlbHBlciB0byBsb2cgb25seSBpZiBkZWJ1Z2dpbmcgZW5hYmxlZFxyXG4gIF9jb25kaXRpb25hbERlYnVnTG9nKHRvRGVidWcsIGxvZ2dlckZ1bmMgPSBjb25zb2xlLmxvZywgKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgIGxvZ2dlckZ1bmModG9EZWJ1ZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gRG8gdGhlIGNoZWNrIHRvIHNlZSBpZiBzY3JlZW4gc29tZXdoZXJlIGl0IHNob3VsZCBiZSBsb2FkZWQuXHJcbiAgX2RvTG9hZE1vcmVDaGVjaygpIHsgICAgXHJcbiAgICBjb25zdCBoaWdoZXN0VmlzaWJsZVlQb3MgPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcbiAgICBjb25zdCBsb2FkTW9yZVRyaWdnZXJQb3MgPSBNYXRoLm1pbigodGhpcy5fbG9hZGVyLm9mZnNldFRvcCArIHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UpLCBkb2N1bWVudEhlaWdodCk7XHJcbiAgICBjb25zdCBwZWVrUG9zaXRpb25WaXNpYmxlID0gaGlnaGVzdFZpc2libGVZUG9zID49IGxvYWRNb3JlVHJpZ2dlclBvcztcclxuICAgIGNvbnN0IHNob3VsZExvYWRNb3JlID0gcGVla1Bvc2l0aW9uVmlzaWJsZTtcclxuICAgIFxyXG4gICAgdGhpcy5fY29uZGl0aW9uYWxEZWJ1Z0xvZygnRG9pbmcgbG9hZCBtb3JlIGNoZWNrIC4uLicpOyAgICBcclxuICAgIHRoaXMuX2NvbmRpdGlvbmFsRGVidWdMb2coeyBcclxuICAgICAgJ1RvcCBwb3NpdGlvbiBvZiBsb2FkZXIgZWxlbWVudCc6IHRoaXMuX2xvYWRlci5vZmZzZXRUb3AsXHJcbiAgICAgICdDb25maWcgcGVlayBkaXN0YW5jZSc6IHRoaXMuX2NvbmZpZy5wZWVrRGlzdGFuY2UsXHJcbiAgICAgICdZIGNvLW9yZGluYXRlIHdoZW4gbW9yZSBzaG91bGQgYmUgbG9hZGVkIChpbmNsdWRpbmcgcGVlaywgY29uc3RyYWluZWQgdG8gZG9jIGhlaWdodCknOiBsb2FkTW9yZVRyaWdnZXJQb3MsXHJcbiAgICAgICdDdXJyZW50IFkgcG9zaXRpb24gb2Ygc2Nyb2xsJzogd2luZG93LnNjcm9sbFksXHJcbiAgICAgICdUaGUgaW50ZXJuYWwgc2l6ZSBvZiB0aGUgd2luZG93Jzogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAnVGhlIG1heCB5IHBvc2l0aW9uIHZpc2libGUnOiBoaWdoZXN0VmlzaWJsZVlQb3MsXHJcbiAgICAgICdUaGUgaGVpZ2h0IG9mIGRvY3VtZW50JzogZG9jdW1lbnRIZWlnaHQsXHJcbiAgICAgICdJcyBwZWVrIHBvc2l0aW9uIHZpc2libGUnOiBwZWVrUG9zaXRpb25WaXNpYmxlLFxyXG4gICAgICAnSXMgdGhlIGxvYWQgbW9yZSBwb3NpdGlvbiB2aXNpYmxlLCBvciBhdCBkb2MgZW5kJzogc2hvdWxkTG9hZE1vcmUsXHJcbiAgICB9LCBjb25zb2xlLnRhYmxlKTsgXHJcbiAgICBcclxuICAgIHJldHVybiBzaG91bGRMb2FkTW9yZTtcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiAgVVNBR0U6IFRvIHVzZSB0aGlzIGNvbnRyb2wgeW91IG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlIHRvIHRoZSBidXR0b24gdGhhdCBzaG91bGQgYmUgZG9pbmcgdGhlIHNob3cgYWxsLlxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC10YWJsZS1pZD1cIjw8aWQgb2YgdGFibGUgdG8gYmUgZWZmZWN0ZWQ+PlwiXHJcbiAqIFxyXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1saW1pdD1cIjIwXCIgLSBzZXRzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2hvdyBpbml0aWFsbHkuICBEZWZhdWx0IGlzIDEwXHJcbiAqICBcclxuICovXHJcblxyXG52YXIgc2hvd01vcmVUYWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1zaG93YWxsLXRhYmxlLWlkXScpO1xyXG5cclxuc2hvd01vcmVUYWJsZUJ1dHRvbnMuZm9yRWFjaChzaG93QWxsQnV0dG9uID0+IHtcclxuICB2YXIgdGFibGVJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLXRhYmxlLWlkXCIpO1xyXG5cclxuICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlkKTtcclxuICBpZiAodGFibGUpIHtcclxuXHJcbiAgICB2YXIgZGVmYXVsdEl0ZW1MaW1pdCA9IDEwOyAgICBcclxuICAgIHZhciBwYXNzZWRJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xyXG4gICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHBhc3NlZEl0ZW1MaW1pdCwgMTApO1xyXG4gICAgdmFyIGxpbWl0VG9Vc2UgPSBpc05hTihwYXJzZWRJdGVtTGltaXQpID8gZGVmYXVsdEl0ZW1MaW1pdCA6IHBhcnNlZEl0ZW1MaW1pdDtcclxuICAgIFxyXG4gICAgLy8gV2UgZG9udCB3YW50IHRoZSBoZWFkZXJzXHJcbiAgICB2YXIgdGFibGVCb2R5ID0gdGFibGUudEJvZGllc1swXTtcclxuICAgIGlmICghdGFibGVCb2R5KSB7IHJldHVybjsgfVxyXG5cclxuICAgIHZhciB0YWJsZUJvZHlMZW5ndGggPSB0YWJsZUJvZHkucm93cy5sZW5ndGg7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgPSAxLCBib2R5Um93OyBib2R5Um93ID0gdGFibGVCb2R5LnJvd3NbaS0xXTsgaSsrKSB7XHJcbiAgICAgIGlmIChpID4gbGltaXRUb1VzZSkge1xyXG4gICAgICAgIGJvZHlSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhYmxlQm9keUxlbmd0aCA8PSBsaW1pdFRvVXNlKSB7IHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9XHJcblxyXG4gICAgc2hvd0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4ge1xyXG4gICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgQXJyYXkuZnJvbSh0YWJsZUJvZHkucm93cykuZm9yRWFjaChmdW5jdGlvbihib2R5Um93KSB7XHJcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJ0YWJsZS1yb3dcIjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiLyoqKioqKiBcclxuXHJcbiAgQ3JlYXRlcyBhIHRhZyBsaXN0IGZyb20gYSBzZWxlY3QgZWxlbWVudFxyXG5cclxuICB1c2FnZTpcclxuXHJcbiAgbmV3IFNlbGVjdExpc3RUYWcoc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMpLlxyXG5cclxuICAtIHNlbGVjdElkIChyZXF1aXJlZCk6IFRoZSBpZCBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgYWN0aW5nIGFzIHRoZSBzb3VyY2UgKG11c3QgaGF2ZSBtdWx0aXBsZSBhdHRyaWJ1dGUsIGFuZCBhbGwgaXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZClcclxuXHJcbiAgLSByZXZlcnRHcm91cHMgKG9wdGlpb25hbCk6IFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgY2xpY2tlZCB0byByZXZlcnQgc2VsZWN0ZWQgb3B0aW9ucyAoc2hvdWxkIGhhdmUgaXMtaGlkZGVuIGNsYXNzIHRvIHN0YXJ0KVxyXG5cclxuICAtIG9uVXBkYXRlRnVuYyAocmVxdWlyZWQpOiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgdGFnIGhhcyBiZWVuIHJlbW92ZWQsIG9yIG9wdGlvbnMgYXJlIHJldmVydGVkLi4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHR3byBwYXJhbXMsIHNlbGVjdGVkT3B0aW9ucyBhbmQgYWxsT3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGludGVuZGVkIHRvIG1ha2UgdGhlIGNvbnRyb2wgbW9yZSBmbGV4aWJsZSBpLmUuIG91ciBmaXJzdCB1c2FnZSBpcyB0byB1cGRhdGUgbGFiZWwgd2l0aCBzZWxlY3RlZCBpdGVtcyB0ZXh0IGVsc2V3aGVyZSBvbiBwYWdlIHdpdGhvdXQgZnVydGhlciBjb3VwbGluZy5cclxuXHJcbioqKioqKi9cclxuY2xhc3MgU2VsZWN0TGlzdFRhZ3Mge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jID0gKCkgPT4ge30pIHtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMgPSBvblVwZGF0ZUZ1bmM7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMucmV2ZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmV2ZXJ0R3JvdXBzSWQpO1xyXG4gICAgICB0aGlzLnJldmVydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvID0+IG8uc2VsZWN0ZWQgPSB0cnVlKTtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IFsuLi50aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldO1xyXG4gICAgICBpZiAodGhpcy5hbGxPcHRpb25zLnNvbWUobyA9PiAhby5zZWxlY3RlZCkpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXHJcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xyXG4gICAgICAgICAgY29uc3QgbyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInK3RhcmdldFZhbCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgaWYobyl7XHJcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7ICAgICAgXHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMuYWZ0ZXIodGhpcy50YWdzKTtcclxuXHJcbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVRhZ3MoKSB7XHJcbiAgICAgIHRoaXMudGFncy5pbm5lckhUTUwgPSAnJzsgICAgICBcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xyXG4gICAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICB0aGlzLnRhZ3MuYXBwZW5kQ2hpbGQodGhpcy5tYWtlVGFnKHQuaW5uZXJUZXh0LCB0LnZhbHVlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyhzZWxlY3RlZE9wdGlvbnMsIHRoaXMuYWxsT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gIG1ha2VUYWcodGV4dCwgdmFsdWUpIHtcclxuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX19pY29uXCIpOyAgICAgIFxyXG4gICAgICBpLmRhdGFzZXQudmFsPXZhbHVlO1xyXG4gICAgICBpLmlubmVyVGV4dCA9IFwiY2xlYXJcIlxyXG5cclxuICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCd0YWcnKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGkpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRhZztcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFNob3VsZCBoYXZlIGEgc2VjdGlvbiBsaWtlIHRoaXMgZm9yIGVhY2ggcGFnZSB0aGUgY29udHJvbCBpcyB1c2VkIG9uLCB1bmxlc3Mgd2Ugd2FudCBpdCBiZWhhdmUgZXhhY3RseSB0aGUgc2FtZSBhcyBhIHByZXZpb3VzIHZlcnNpb24gKGluY2x1ZGluZyBpZHMgYW5kIHVwZGF0ZSBmdW5jdGlvbikgXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sbG93dXBHcm91cFNlbGVjdG9yJykpIHtcclxuXHJcbiAgLy8gUHJlcGFyZSBhbiB1cGRhdGUgZnVuY3Rpb24gaWYgcmVxdWlyZWQgKG9wdGlvbmFsIHBhcmFtZXRlcilcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlR3JvdXBzTGFiZWxTcGFuJyk7XHJcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgcGx1cmFsaXNlZEdyb3VwcyA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnZ3JvdXAnIDogJ2dyb3Vwcyc7XHJcbiAgICBzcGFuLmlubmVyVGV4dCA9IGBTZW5kIHRvICR7c2VsZWN0ZWRPcHRpb25zLmxlbmd0aH0gcmVzcG9uc2UgJHtwbHVyYWxpc2VkR3JvdXBzfWA7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXNlIGFuIGluc3RhbmNlIG9mIHRoZSBjb250cm9sXHJcbiAgbmV3IFNlbGVjdExpc3RUYWdzKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InLCAncmV2ZXJ0X2dyb3VwcycsIG9uVXBkYXRlRnVuYyk7IFxyXG59XHJcbiIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHNlYXJjaCBzdGFmZiBwYWdlLlxyXG4qL1xyXG5cclxuaW1wb3J0IElkQ29va2llSGVscGVyIGZyb20gJy4vSWRDb29raWVIZWxwZXInO1xyXG5pbXBvcnQgRHJhZnRNZXNzYWdlRHJhd2VyIGZyb20gJy4vRHJhZnRNZXNzYWdlRHJhd2VyJztcclxuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi9MYXp5TG9hZGVyJztcclxuXHJcbmNvbnN0IGNoID0gbmV3IElkQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJJZHMnKTtcclxuY29uc3QgZG1kID0gbmV3IERyYWZ0TWVzc2FnZURyYXdlcihjaC5nZXRDb3VudCgpKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0LWNoZWNrYm94ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoe3RhcmdldH0pID0+IHtcclxuICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0LmNoZWNrZWQgPyBjaC5hZGQodGFyZ2V0LnZhbHVlKSA6IGNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qXHJcblxyXG5jb25zdCBjb250YWN0c0xvYWRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdHMtbG9hZGVyJyk7XHJcblxyXG5pZiAoY29udGFjdHNMb2FkZXJFbGVtZW50KSB7XHJcbiAgY29uc3QgaXRlbXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWxpc3QnKTtcclxuICBcclxuICBjb25zdCBjcmVhdGVEdW1teVJvdyA9IGlkID0+IHtcclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSAnVGVzdCBJdGVtICcgKyBpZDtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLmlubmVyVGV4dCA9ICdOZW1vIGxhYm9ydW0gYXNwZXJpb3JlcyBtb2xlc3RpYWUgZWFydW0gYWNjdXNhbnRpdW0gYWxpYXMgcHJvdmlkZW50IGNvbW1vZGkgcG9ycm8gYSBpbGx1bSBzb2x1dGEgZG9sb3JlIGlwc2EsIGRlYml0aXMgZGVsZW5pdGkgYmVhdGFlIHBsYWNlYXQgcG9zc2ltdXMgY29uc2VxdXVudHVyIGRvbG9ydW0/IExhdWRhbnRpdW0gYWNjdXNhbXVzIG5hbSBudW1xdWFtLCBwZXJzcGljaWF0aXMgcXVvZCBkaWN0YSBkb2xvci4nO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIHJldHVybiBpdGVtRGl2O1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgY2hlY2tJZk1vcmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gaXRlbXNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtcy1saXN0ID4gLml0ZW0nKS5sZW5ndGggPCAxMDA7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGluc2VydER1bW15Um93cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1heFJvd3MgPSBpdGVtc0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLml0ZW1zLWxpc3QgPiAuaXRlbScpLmxlbmd0aDtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHZhciBkdW1teUl0ZW0gPSBjcmVhdGVEdW1teVJvdyhtYXhSb3dzICsgaSArIDEpO1xyXG4gICAgICBpdGVtc0xpc3QuYXBwZW5kQ2hpbGQoZHVtbXlJdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaFJlc3VsdHMgPSAoZG9uZVNlYXJjaGluZykgPT4ge1xyXG4gICAgICAvLyBBZGQgaW4gc29tZSBkdW1teSByb3dzLi4uXHJcbiAgICAgIGluc2VydER1bW15Um93cygpO1xyXG4gICAgICBjb25zdCBtb3JlVG9Mb2FkID0gY2hlY2tJZk1vcmUoKTtcclxuICAgICAgZG9uZVNlYXJjaGluZyhtb3JlVG9Mb2FkKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGNvbnRhY3RzTG9hZGVyID0gbmV3IENvdXJpZXJMYXp5TG9hZGVyKGNvbnRhY3RzTG9hZGVyRWxlbWVudCwgKGRvbmUpID0+IHtcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGhhbmRsZVNlYXJjaFJlc3VsdHMoZG9uZSk7ICAgIFxyXG4gICAgfSwgNTAwKTtcclxuICAgIFxyXG4gIH0sIHsgZGVidWc6IGZhbHNlLCBwZWVrRGlzdGFuY2U6IDUwIH0pO1xyXG59XHJcblxyXG4qL1xyXG5cclxuXHJcbiIsImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VzJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLWZpZWxkJyk7XHJcbiAgICAgICAgdmFyIGtleUFycmF5ID0gT2JqZWN0LmtleXMocmVzcG9uc2VzKTtcclxuICAgICAgICB2YXIgYWRkUmVzcG9uc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9yZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkUmVzcG9uc2UoKTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAga2V5QXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGtleSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIltjbGFzc349J3Jlc3BvbnNlLW9wdGlvbiddXCIpLnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIiNyZW1vdmVfcmVzcG9uc2VcIikgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIiNyZW1vdmVfcmVzcG9uc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZXNwb25zZShrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlUmVzcG9uc2Uoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGFkZFJlc3BvbnNlKHBhcnNlSW50KGtleSkgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkUmVzcG9uc2Uoa2V5KSB7XHJcblxyXG4gICAgICAgICAgICBrZXlBcnJheS5ldmVyeShmdW5jdGlvbihrZXkpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVJlc3BvbnNlKGtleSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgJiYgcmVzcG9uc2VzW2tleV0uZGF0YXNldC5rZXkgPT0ga2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChyZXNwb25zZXNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKFwiI1Jlc3BvbnNlc1wiKTtcclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUGhvbmUnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRQaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRQaG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUGhvbmVCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZFBob25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KShcImFkZFBob25lXCIpO1xyXG5cclxufVxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRW1haWwnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBhZGRFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRW1haWxCdG5cIik7XHJcblxyXG4gICAgICAgIGFkZEVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWRkRW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KShcImFkZEVtYWlsXCIpO1xyXG5cclxufVxyXG5cclxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzYXZlR3JvdXBCdXR0b24gIT1udWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pKFwiYWRkX2dyb3VwXCIpO1xyXG59XHJcblxyXG52YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbmlmIChncm91cFRleHRhcmVhICE9IG51bGwpIHtcclxuICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXQyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQyLm1hdGNoZXMoXCIuYnV0dG9uX19pY29uXCIpICYmIHRhcmdldDIuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG5cclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICBzYXZlR3JvdXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKSAhPW51bGwpIHtcclxuXHJcbiAgICB2YXIgaW5wdXRFcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJyk7XHJcbiAgICB2YXIgaW5wdXRFcnJvcnNBcnJheSA9IE9iamVjdC5rZXlzKGlucHV0RXJyb3JzKTtcclxuXHJcbiAgICBpbnB1dEVycm9yc0FycmF5LmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEVycm9yc1trZXldKTtcclxuICAgICAgICBpbnB1dEVycm9yc1trZXldLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbi8vICAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuXHJcbi8vICAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xyXG4vLyAgICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2lkZWJhclwiKS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG5cclxuLy8gfSkoXCIjU2lkZWJhclwiKTtcclxuXHJcbiIsIi8qIFxyXG4gIERlYm91bmNlIGZ1bmN0aW9uIHByZXZlbnQgZXhjZXNzaXZlIGNhbGxzIG9uIHNjcm9sbC5cclxuICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXHJcbiovXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpID0+IHtcclxuXHR2YXIgdGltZW91dDtcclxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0fTtcclxufTsiLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjbWVudScpOyIsIi8qIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sXHJcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLy8gZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcclxuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xyXG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYXNpZGUtLWFjdGl2ZVwiKTtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmRyb3BidG4nKSkge1xyXG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gICAgdmFyIGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZHJvcGRvd25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XHJcblxyXG5pZiAoYWRkR3JvdXBCdXR0b24pIHtcclxuXHJcbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XHJcblxyXG5pZiAoY2xvc2VTaWRlYmFyKSB7XHJcblxyXG5jbG9zZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xyXG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIC8vIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xyXG4gICAgICAvLyB9XHJcbiAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCBzbmFja2JhclN0b3JhZ2VJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzbmFja2JhcicpO1xyXG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgdmFyIGNvbnRhY3RQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0NvbnRhY3RBZGRlZCcpO1xyXG4gICAgdmFyIE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcclxuICAgIHZhciBzbmFja2Jhck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcclxuICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBhbHJlYWR5IGNvbnRhaW5zIGN1cnJlbnQgcGFnZSBwYXRoXHJcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG5cclxuICAgICAgICAgICAgLy9pZiBpdCBkb2VzIHRoZW4gaGlkZSB0aGUgc25hY2tiYXJcclxuICAgICAgICAgICAgc25hY2tiYXIuY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gIHtcclxuICAgICAgICAgICAgbG9jYXRpb25zIDogbmV3IEFycmF5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRhY3RQYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBjb250YWN0IGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoT3JnYW5pc2F0aW9uUGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgb3JnYW5pc2F0aW9uIGhhcyBiZWVuIGNyZWF0ZWQnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoc25hY2tiYXIpIHtcclxuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NuYWNrYmFyJywgSlNPTi5zdHJpbmdpZnkoc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5KSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc25hY2tiYXJNZXNzYWdlKSB7XHJcbiAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LmFkZCgnc25hY2tiYXItLWFjdGl2ZScpO1xyXG4gICAgICAgIHNuYWNrYmFyLmlubmVySFRNTCA9IHNuYWNrYmFyTWVzc2FnZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QucmVtb3ZlKCdzbmFja2Jhci0tYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgMzUwMCk7XHJcbiAgICB9XHJcblxyXG59KShcIiNzbmFja2JhclwiKTtcclxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuLy8gICAgIC8vZnVuY3Rpb24gdG8gbWFrZSB3aG9sZSB0YWJsZSB0ciBjbGlja2FibGVcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHRyJykuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xyXG5cclxuLy8gICAgICAgICBpZiAoZWwuZGF0YXNldC5ocmVmICE9bnVsbCkge1xyXG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcclxuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmRhdGFzZXQuaHJlZjtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyB9KShcInRhYmxlXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9