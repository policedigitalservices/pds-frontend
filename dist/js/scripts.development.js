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
      var idsJson = JSON.stringify(ids || []);
      var newCookie = "".concat(this._name, "=").concat(idsJson, ";"); // console.log(newCookie);

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

    this.allOptions = _toConsumableArray(this.tagOptions.querySelectorAll('option'));

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
  var ch = new _IdCookieHelper__WEBPACK_IMPORTED_MODULE_0__["default"]('CourierMessageUserIds'); // This should move to the new compose page

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
/* harmony import */ var _IdCookieHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdCookieHelper */ "./src/js/IdCookieHelper.js");
/* harmony import */ var _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DraftMessageDrawer */ "./src/js/DraftMessageDrawer.js");
/* 
    This script is specific to the search staff page.
*/

 // import LazyLoader from './LazyLoader';

var main = document.querySelector('main');

if (main && main.classList.contains('asc-staff-index')) {
  var ch = new _IdCookieHelper__WEBPACK_IMPORTED_MODULE_0__["default"]('CourierMessageUserIds');
  var dmd = new _DraftMessageDrawer__WEBPACK_IMPORTED_MODULE_1__["default"](ch.getCount()); // TODO: Proper selector for this

  document.getElementById('table-select-staff').addEventListener('change', function (_ref) {
    var target = _ref.target;

    if (target.matches('input[type=checkbox]')) {
      var newTotal = target.checked ? ch.add(target.value) : ch.remove(target.value);
      dmd.update(newTotal);
    }
  });
} //  SAMPLE OF DUMMY CODE THAT WAS RUNNING ON CODE PEN - FOR REMINDER OF HOW TO IMPLMENT 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0JvdHRvbURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRHJhZnRNZXNzYWdlRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Hcm91cHNUcmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9JZENvb2tpZUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VlQWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TZWxlY3RMaXN0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL0NvbXBvc2VTdGFmZk1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2VzL1NlbGVjdFN0YWZmRm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYmxlcy5qcyJdLCJuYW1lcyI6WyJCb3R0b21EcmF3ZXIiLCJfb3BlbkNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJEcmFmdE1lc3NhZ2VEcmF3ZXIiLCJudW1iZXJPZlJlY2lwaWVudHMiLCJ0b3RhbFNlbGVjdG9yIiwiX3RvdGFsc0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJfYm90dG9tRHJhd2VyIiwidXBkYXRlIiwiaW5uZXJUZXh0Iiwic2hvdyIsImhpZGUiLCJncm91cEV4aXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VDaGVja2JveGVzIiwiaGFzQXR0cmlidXRlIiwidXNlU2luZ2xlU2VsZWN0Q2hlY2tib3giLCJsb2NrUm9vdE5vZGUiLCJzZWxlY3RvciIsImludGlhbGx5U2VsZWN0ZWROb2RlcyIsImdyb3VwU2VsZWN0IiwiZ3JvdXBUZXh0YXJlYSIsInBhcmVudEVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvbnNOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicGF0aFRvVW5jaGVjayIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjYlNlbGVjdG9yIiwiY2hlY2JveFRvVW5jaGVjayIsImNsaWNrIiwic2VhcmNoUGFydHMiLCJnZXRVcmxWYXJzIiwidmFycyIsInBhcnRzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibSIsImtleSIsInBhZ2VQYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJncm91cFBhcmFtIiwiZ3JvdXAiLCJzZWFyY2hQYXJhbSIsIlNlYXJjaCIsImdldFBhZ2VQYXRoRm9yR3JvdXAiLCJncnAiLCJzaG91bGRQYXJlbnRCZU9wZW4iLCJwYXRoIiwicGF0aFRvQ2hlY2siLCJzdGFydHNXaXRoIiwiaXNTZWxlY3RlZEdyb3VwIiwicGFyYW1zVG9DaGVjayIsImRlY29kZVVSSUNvbXBvbmVudCIsImJ1aWxkTGluayIsInRleHQiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYnVpbGRDaGVja2JveCIsInBhcmVudENoZWNrZWQiLCJjaGVja2JveCIsInR5cGUiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiaWQiLCJuZXdQYXJlbnRTZWxlY3RlZCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm5ld0NoZWNrZWQiLCJpbmRleE9mIiwibGFiZWwiLCJjaGVja1NwYW4iLCJib3JkZXJTcGFuIiwiYXBwZW5kQ2hpbGQiLCJidWlsZENoZWNrYm94TGFiZWwiLCJjaGVja2JveExhYmVsIiwiaW5uZXJIVE1MIiwiZm9yIiwidHJhbnNmZXJWYWx1ZXMiLCJkYXRhIiwiZWxlbXMiLCJwb3B1bGF0ZUdyb3VwRmllbGQiLCJ0ZXh0YXJlYSIsImVsZW1lbnQiLCJleGlzdGluZ09wdGlvblZhbHVlcyIsIkFycmF5IiwiZnJvbSIsIm9wdGlvbnMiLCJtYXAiLCJvcHQiLCJkYXRhX2kiLCJkYXRhX2N1cnJlbnQiLCJzdWJzdHJpbmciLCJuZXdPcHRpb24iLCJzZWxlY3RlZCIsImFwcGVuZENoaWxkcmVuRm9yTW9kZSIsInBhcmVudCIsImNoZWNrYm94UmVzdWx0IiwiZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudCIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInVwZGF0ZXJGbiIsImN1cnJlbnRMb29wQ2hpbGQiLCJoYW5kbGVDaGVja2JveENsaWNrIiwicGFyZW50TGkiLCJwYXJlbnROb2RlIiwiYWxsR3JvdXBDaGVja2JveGVzIiwiY2hlY2tib3hUb1VwZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRDaGVja2JveGVzIiwiaGlkZGVuRmllbGQiLCJzdHJ1Y3R1cmUiLCJvcHRpb25faSIsIm9wdGlvbiIsInNlZ21lbnRzIiwic3BsaXQiLCJub2RlVG9DaGVjayIsInNlZ21lbnRfaSIsInNlZyIsInRyZWVDb250YWluZXIiLCJhY3RpdmVDaGlsZHJlbiIsImFjX2kiLCJhY3RpdmVDaGlsZCIsImRpc3BsYXlDaGlsZEtleXMiLCJjdXJyVGV4dCIsImN1cnJQYXRoIiwib2JqIiwiZWxlbWVudFRvQWRkVG8iLCJsZXZlbCIsInBhcmVudHNDaGVja2VkIiwiY2hpbGRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudENoZWNrZWRTdGF0ZSIsImNoaWxkTGlzdEl0ZW0iLCJjaGlsZExpc3QiLCJja19pIiwiY2hpbGRLZXkiLCJyZXBsYWNlQ2hpbGQiLCJJZENvb2tpZUhlbHBlciIsIl9uYW1lIiwiX2lkcyIsIlNldCIsIl9pbml0aWFsaXNlIiwiY29va2llU3RyaW5nIiwiY29va2llIiwiY29va2llcyIsIm1hdGNoaW5nQ29va2llIiwiZmluZCIsImMiLCJfcGVyc2lzdCIsIm1hdGNoaW5nVmFsdWVKU09OIiwiSlNPTiIsInBhcnNlIiwiaWRzIiwiZ2V0SWRzIiwiaWRzSnNvbiIsInN0cmluZ2lmeSIsIm5ld0Nvb2tpZSIsIl91cGRhdGUiLCJnZXRDb3VudCIsInNpemUiLCJkZWxldGUiLCJoYXMiLCJzaG93TW9yZVRhYmxlQnV0dG9ucyIsImZvckVhY2giLCJzaG93QWxsQnV0dG9uIiwidGFibGVJZCIsInRhYmxlIiwiZGVmYXVsdEl0ZW1MaW1pdCIsInBhc3NlZEl0ZW1MaW1pdCIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwibGltaXRUb1VzZSIsImlzTmFOIiwidGFibGVCb2R5IiwidEJvZGllcyIsInRhYmxlQm9keUxlbmd0aCIsInJvd3MiLCJib2R5Um93Iiwic3R5bGUiLCJkaXNwbGF5IiwiZWwiLCJTZWxlY3RMaXN0VGFncyIsInNlbGVjdElkIiwicmV2ZXJ0R3JvdXBzSWQiLCJvblVwZGF0ZUZ1bmMiLCJ0YWdPcHRpb25zIiwicmV2ZXJ0QnRuIiwibyIsInBvcHVsYXRlVGFncyIsImFsbE9wdGlvbnMiLCJzb21lIiwidGFncyIsInRhcmdldFZhbCIsImRhdGFzZXQiLCJ2YWwiLCJhZnRlciIsInNlbGVjdGVkT3B0aW9ucyIsImZpbHRlciIsInQiLCJtYWtlVGFnIiwidGFnIiwiY3JlYXRlVGV4dE5vZGUiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsInJlc3BvbnNlcyIsImtleUFycmF5IiwiYWRkUmVzcG9uc2VCdXR0b24iLCJibHVyIiwiYWRkUmVzcG9uc2UiLCJyZW1vdmVSZXNwb25zZSIsInZhbGlkYXRlUmVzcG9uc2UiLCJldmVyeSIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZXN0IiwibWVudSIsIm1lbnVCdXR0b24iLCJtZW51Q2hpbGQiLCJtYWluIiwiY2giLCJzZXRJZHMiLCJ4IiwiZG1kIiwibmV3VG90YWwiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsInkiLCJzbmFja2JhclN0b3JhZ2VJdGVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNuYWNrYmFyIiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJjb250YWN0UGFyYW0iLCJnZXQiLCJPcmdhbmlzYXRpb25QYXJhbSIsIk1lc3NhZ2VTZW50UGFyYW0iLCJzbmFja2Jhck1lc3NhZ2UiLCJzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkiLCJsb2NhdGlvbnMiLCJpbmNsdWRlcyIsInNldEl0ZW0iLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIs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QkFBZ0IsS0FBSyxNQUF6QixFQUFpQztBQUNwQ0MsbUJBQWUsR0FBRyxjQUFsQjtBQUNILEdBRk0sTUFFQSxJQUFJVCxRQUFKLEVBQWM7QUFDakJBLFlBQVEsQ0FBQ3BPLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVNvSyxFQUFULEVBQWE7QUFFNUMsVUFBSSxDQUFDMEUsd0JBQXdCLENBQUNDLFNBQXpCLENBQW1DQyxRQUFuQyxDQUE0Q2xPLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQk0sUUFBNUQsQ0FBTCxFQUE0RTtBQUV4RXlOLGdDQUF3QixDQUFDQyxTQUF6QixDQUFtQ2pQLElBQW5DLENBQXdDZ0IsTUFBTSxDQUFDQyxRQUFQLENBQWdCTSxRQUF4RDtBQUNBUCxjQUFNLENBQUNvTixZQUFQLENBQW9CZSxPQUFwQixDQUE0QixVQUE1QixFQUF3QzNHLElBQUksQ0FBQ0ssU0FBTCxDQUFlbUcsd0JBQWYsQ0FBeEM7QUFFSDtBQUNKLEtBUkQ7QUFTSDs7QUFFRCxNQUFJRCxlQUFKLEVBQXFCO0FBQ2pCVCxZQUFRLENBQUNwUSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixrQkFBdkI7QUFDQW1RLFlBQVEsQ0FBQzFLLFNBQVQsR0FBcUJtTCxlQUFyQjtBQUVBSyxjQUFVLENBQUMsWUFBVTtBQUNqQmQsY0FBUSxDQUFDcFEsU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsa0JBQTFCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBRUosQ0E1REQsRUE0REcsV0E1REgsRTs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGUiLCJmaWxlIjoiZGlzdC9qcy9zY3JpcHRzLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiLypcclxuIENsYXNzIHRoYXQgZmFjaWxpdGF0ZSB0aGUgaGlkaW5nIGFuZCBzaG93aW5nIG9mIHRoZSBib3R0b20gYmFyLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3R0b21EcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlbkNsYXNzID0gXCJib3R0b20tZHJhd2VyLW9wZW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX29wZW5DbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLl9vcGVuQ2xhc3MpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBCb3R0b21EcmF3ZXIgZnJvbSAnLi9Cb3R0b21EcmF3ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZnRNZXNzYWdlRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlck9mUmVjaXBpZW50cywgdG90YWxTZWxlY3Rvcj1cIi5kcmFmdC1tZXNzYWdlLWRyYXdlcl9fdG90YWxcIikge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvdGFsU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghdGhpcy5fdG90YWxzRWxlbWVudCkgeyB0aHJvdyBFcnJvcihgTm8gZWxlbWVudCBtYXRjaGluZyB0aGUgcGFzc2VkIGluIHNlbGVjdG9yICR7dG90YWxTZWxlY3Rvcn1gKTsgfVxyXG4gICAgICAgIHRoaXMuX2JvdHRvbURyYXdlciA9IG5ldyBCb3R0b21EcmF3ZXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZShudW1iZXJPZlJlY2lwaWVudHMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICB1cGRhdGUobnVtYmVyT2ZSZWNpcGllbnRzKSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxzRWxlbWVudC5pbm5lclRleHQgPSBudW1iZXJPZlJlY2lwaWVudHM7XHJcbiAgICAgICAgbnVtYmVyT2ZSZWNpcGllbnRzID8gdGhpcy5fYm90dG9tRHJhd2VyLnNob3coKSA6IHRoaXMuX2JvdHRvbURyYXdlci5oaWRlKCk7XHJcbiAgICB9XHJcbn0iLCIgdmFyIGdyb3VwRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwXCIpO1xyXG4gICAgaWYoZ3JvdXBFeGlzdCl7XHJcblxyXG4gICAgICAgIHZhciB1c2VDaGVja2JveGVzID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtc2luZ2xlLXNlbGVjdC1jaGVja2JveCcpO1xyXG4gICAgICAgIHZhciBsb2NrUm9vdE5vZGUgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2NrLXJvb3QnKTtcclxuXHJcbihmdW5jdGlvbiAoc2VsZWN0b3IsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgLy9DaGVjayBvbiBwYWdlIHdoZXRoZXIgR3JvdXAgTXVsdGkgU2VsZWN0IGV4aXN0c1xyXG4gICAgdmFyIGludGlhbGx5U2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFNlbGVjdG9yXCIpO1xyXG4gICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG4gICAgLy8gSWYgdGhlIEdyb3VwIE11bHRpIFNlbGVjdCBkb2VzIGV4aXN0LCBoaWRlIGl0IChpZiBKUyBlbmFibGVkKVxyXG4gICAgaWYgKGdyb3VwU2VsZWN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZ3JvdXBTZWxlY3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgIGdyb3VwVGV4dGFyZWEucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAvLyBHcmFiIGFsbCB0aGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgc2VsZWN0ZWRcclxuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25zTm9kZXMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb246Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkT3B0aW9uc05vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICBpbnRpYWxseVNlbGVjdGVkTm9kZXMucHVzaChzZWxlY3RlZE9wdGlvbnNOb2Rlc1tpXS52YWx1ZSB8fCBcIlxcXFxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi50YWc+LmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhUb1VuY2hlY2sgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBjYlNlbGVjdG9yID0gJ2lucHV0W3R5cGU9Y2hlY2tib3hdLkdyb3VwSXRlbVt2YWx1ZT1cIicrcGF0aFRvVW5jaGVjaysnXCJdJztcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjYm94VG9VbmNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVjYm94VG9VbmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2JveFRvVW5jaGVjay5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlYXJjaFBhcnRzID0gKGZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XHJcbiAgICAgICAgdmFyIHZhcnMgPSB7fTtcclxuICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksIGZ1bmN0aW9uKG0sa2V5LHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgcGFnZVBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/Z3JvdXA9XCI7XHJcbiAgICB2YXIgZ3JvdXBQYXJhbSA9IHNlYXJjaFBhcnRzLmdyb3VwO1xyXG4gICAgdmFyIHNlYXJjaFBhcmFtID0gc2VhcmNoUGFydHMuU2VhcmNoO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGJ1aWxkIHRoZSBwYXRoXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlUGF0aEZvckdyb3VwKGdyb3VwKSB7XHJcbiAgICAgIHZhciBncnAgPSBncm91cCA9PT0gXCJcIiA/IFwiXFxcXFwiIDogZ3JvdXA7XHJcbiAgICAgIHJldHVybiBwYWdlUGF0aCArIGdycDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGQgc2hvdWxkIGJlIG9wZW4gaS5lLiB0byByZXZlYWwgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBncm91cFxyXG4gICAgZnVuY3Rpb24gc2hvdWxkUGFyZW50QmVPcGVuKHBhdGgpIHtcclxuICAgICAgICBpZiAoIWdyb3VwUGFyYW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCArIFwiXFxcXFwiKTtcclxuICAgICAgICByZXR1cm4gZ3JvdXBQYXJhbS5zdGFydHNXaXRoKHBhdGhUb0NoZWNrKSAmJiBncm91cFBhcmFtICE9IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZGVkIGlzIHRoZSBjdXJyZW50bHlTZWxlY3RlZEdyb3VwXHJcbiAgICBmdW5jdGlvbiBpc1NlbGVjdGVkR3JvdXAocGF0aCkge1xyXG4gICAgICAgIHZhciBwYXJhbXNUb0NoZWNrID0gZGVjb2RlVVJJQ29tcG9uZW50KGdyb3VwUGFyYW0gfHwgXCJcXFxcXCIpO1xyXG4gICAgICAgIHZhciBwYXRoVG9DaGVjayA9IChwYXRoIHx8IFwiXFxcXFwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1RvQ2hlY2sgPT09IHBhdGhUb0NoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBsaW5rIGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkTGluayh0ZXh0LCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBsaW5rLmhyZWYgPSBnZXRQYWdlUGF0aEZvckdyb3VwKHBhdGgpO1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rXCIpO1xyXG5cclxuICAgICAgICAvLyBOQi4gIE9yaWdpbmFsbHkgd2UgZGlkbnQgd2FudCB0aGUgY3VycmVudCBjbGFzcyB0byBiZSBhZGRlZCBpZiBkb2luZyBhIHNlYXJjaCwgYnV0IHRoaW5rIHdlIGRvIG5vdy5cclxuICAgICAgICAvLyBpZiAoKCFzZWFyY2hQYXJhbSkgJiYgIGlzU2VsZWN0ZWRHcm91cChwYXRoKSkge1xyXG4gICAgICAgIC8vIGlmIChpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcclxuICAgICAgICAvLyAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpbmstLWN1cnJlbnRcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBsYWJlbCBmb3IgdGhlIGdyb3VwXHJcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94KHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJHcm91cEl0ZW1cIik7XHJcbiAgICAgICAgY2hlY2tib3gubmFtZSA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBwYXRoO1xyXG4gICAgICAgIGNoZWNrYm94LmlkID0gdGV4dDtcclxuICAgICAgICB2YXIgbmV3UGFyZW50U2VsZWN0ZWQgPSBwYXJlbnRDaGVja2VkO1xyXG5cclxuICAgICAgICBpZiAocGF0aCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgdGhlIHJvb3Qgbm9kZSBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIGNoZWNrZWQgQlVUIHRoZSBjaGlsZHJlbiBvZiB0aGlzIG5vZGUgc2hvdWxkIGFjdCBhcyB0aG91Z2ggaXQgaXNudCBjaGVja2VkIHNvIHdlIGRvbnQgdXBkYXRlIHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q2hlY2tlZCAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBzZWxlY3RlZCBhbGwgaXRzIGNoaWxkcmVuIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgdW5jaGVja2VkXHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBub3QgY2hlY2tlZCBpdHMgY2hpbGRyZW4gc2VsZWN0ZWQgc3RhdGUgZGVwZW5kIG9uIHRoZSBjaGlsZHMgdmFsdWUsIGFuZCBub3QgYmUgZGlzYWJsZWRcclxuICAgICAgICAgICAgdmFyIG5ld0NoZWNrZWQgPSBpbnRpYWxseVNlbGVjdGVkTm9kZXMuaW5kZXhPZihwYXRoIHx8ICdcXFxcJykgPj0gMDtcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IG5ld0NoZWNrZWQ7XHJcbiAgICAgICAgICAgIG5ld1BhcmVudFNlbGVjdGVkID0gbmV3Q2hlY2tlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN0eWxlIGFzIGEgcmFkaW8gYnV0dG9uXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIHZhciBjaGVja1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNoZWNrU3Bhbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9fY2hlY2snKTtcclxuICAgICAgICAgICAgdmFyIGJvcmRlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGJvcmRlclNwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2JvcmRlcicpO1xyXG4gICAgICAgICAgICBib3JkZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja1NwYW4pO1xyXG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChib3JkZXJTcGFuKTtcclxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ID0gbGFiZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge2NoZWNrYm94LCBuZXdQYXJlbnRTZWxlY3RlZH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGNoZWNrYm94IGZvciB0aGUgZ3JvdXBcclxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNoZWNrYm94TGFiZWwuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgICAgICBjaGVja2JveExhYmVsLmZvciA9IHRleHQ7XHJcbiAgICAgICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVja2JveExhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zZmVyVmFsdWVzKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gW107XHJcblxyXG4gICAgICAgIHZhciBlbGVtcz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkdyb3VwSXRlbScpXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7aTxlbGVtcy5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2tSb290Tm9kZSAmJiAhKGVsZW1zW2ldLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vLW9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtc1tpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVsZW1zW2ldLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKSB7XHJcblxyXG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcclxuICAgICAgICBpZiAodGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdHcm91cFNlbGVjdG9yJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdPcHRpb25WYWx1ZXMgPSBBcnJheS5mcm9tKGVsZW1lbnQub3B0aW9ucykubWFwKG9wdCA9PiBvcHQudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgZGF0YV9pID0gMDsgZGF0YV9pIDwgZGF0YS5sZW5ndGg7IGRhdGFfaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhX2N1cnJlbnQgPSBkYXRhW2RhdGFfaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IHRleHRhcmVhLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPkFsbCBDb250YWN0IEdyb3VwczxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj4nICsgZGF0YV9jdXJyZW50LnN1YnN0cmluZygxKSArICc8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBvcHRpb24gZXhpc3RzIC0gYWRkIGl0IGlmIG5vdFxyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nT3B0aW9uVmFsdWVzLmluZGV4T2YoZGF0YV9jdXJyZW50KSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBkYXRhX2N1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGRhdGFfY3VycmVudDtcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vcHRpb25zW2ldLnNlbGVjdGVkID0gZGF0YS5pbmRleE9mKGVsZW1lbnQub3B0aW9uc1tpXS52YWx1ZSkgPj0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbkZvck1vZGUocGFyZW50LCB0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKHVzZUNoZWNrYm94ZXMgfHwgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIHRoZSBibGFuayB2YWx1ZSBmb3IgJ0FsbCBDb250YWN0IEdyb3VwcydcclxuICAgICAgICAgICAgaWYgKHBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcXFxcXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tib3hSZXN1bHQgPSBidWlsZENoZWNrYm94KHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hSZXN1bHQuY2hlY2tib3gpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3hSZXN1bHQubmV3UGFyZW50U2VsZWN0ZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaW5rIHRvIHJlZnJlc2ggcGFnZSB3aXRoIHNlbGVjdGVkIG5vZGUuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZExpbmsodGV4dCwgcGF0aCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjdXJyZW50LCBjaGlsZHJlbiwgdXBkYXRlckZuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudExvb3BDaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudExvb3BDaGlsZCAhPT0gY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlckZuKGN1cnJlbnRMb29wQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgY2hlY2tib3gpIHtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudExpID0gY2hlY2tib3gucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgb25seSBvbmUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQsIGFuZCB0aGUgc2VsZWN0ZWQgaXRlbSBjYW5ub3QgYmUgZGVzZWxldGVkLlxyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFsbEdyb3VwQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdCBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG4gICAgICAgICAgICAgICAgZm9yRWFjaENoZWNrYm94RXhjbHVkaW5nQ3VycmVudChjaGVja2JveCwgYWxsR3JvdXBDaGVja2JveGVzLCBmdW5jdGlvbihjaGVja2JveFRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhcmVudExpLmNsYXNzTGlzdC5jb250YWlucygnZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnQnKSl7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNoaWxkQ2hlY2tib3hlcyA9IHBhcmVudExpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3gnKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcmFiIHRoZSBzZWxlY3QgbGlzdCBhbmQgYWxsIG9mIGl0cyBvcHRpb25zXHJcbiAgICB2YXIgZ3JvdXBTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIHZhciBvcHRpb25zID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuXHJcbiAgICB2YXIgaGlkZGVuRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkdyb3VwXCIpO1xyXG4gICAgaGlkZGVuRmllbGQudmFsdWUgPSBncm91cFBhcmFtIHx8ICdcXFxcJztcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGJhc2UgY29sbGVjdGlvbnMgd2l0aCBzdGFydGluZyBrZXkgZm9yIHRoZSByb290LlxyXG4gICAgdmFyIHN0cnVjdHVyZSA9IHsgXCJcXFxcXCI6IHt9IH07XHJcblxyXG4gICAgLy8gQnVpbGQgb24gdGhlIGJhc2Ugc3RydWN0dXJlIGJ5IGxvb3BpbmcgdGhyb3VnaCBlYWNoIHNlbGVjdCBpdGVtLlxyXG4gICAgZm9yICh2YXIgb3B0aW9uX2k9MDsgb3B0aW9uX2k8b3B0aW9ucy5sZW5ndGg7IG9wdGlvbl9pKyspIHtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbb3B0aW9uX2ldO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIFNlcGVyYXRlIHRoZSBncm91cCBuYW1lIGludG8gYWxsIGl0cyBwYXRoIHNlZ21lbnRzXHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IG9wdGlvbi50ZXh0Q29udGVudC5zcGxpdChcIlxcXFxcIik7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IGF0IHRoZSByb290IGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHZhciBub2RlVG9DaGVjayA9IHN0cnVjdHVyZVtcIlxcXFxcIl07XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IGVuc3VyZSB0aGF0IGFsbCBsZXZlbHMgb2YgdGhlIHN0cnVjdHVyZSBhcmUgaW4gcGxhY2UuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHNlZ21lbnRfaT0wOyBzZWdtZW50X2k8c2VnbWVudHMubGVuZ3RoOyBzZWdtZW50X2krKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWcgPSBzZWdtZW50c1tzZWdtZW50X2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWcgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb0NoZWNrW3NlZ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2tbc2VnXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrW3NlZ107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGJhc2UgZWxlbWVudCB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkXHJcbiAgICB2YXIgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRyZWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saXN0XCIpO1xyXG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3RcIik7XHJcblxyXG5cclxuICAgIC8vIEhhbmRsZSBhbGwgdGhlIGNsaWNrcyBhdCB0aGUgcGFyZW50IGxldmVsXHJcbiAgICB0cmVlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGNoZWNrYm94IGl0ZW1zIGJlaW5nIHNlbGVjdGVkLlxyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrKGUsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cmFuc2ZlclZhbHVlcygpO1xyXG5cclxuICAgICAgICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgY2xpY2tzIG9uIGVsZW1lbnRzIHRoYXQgYXJlIHBhcmVudHNcclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIuZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnRcIikpIHtcclxuICAgICAgICAgICAgLy8gSWYgYW4gb3BlbiBwYXJlbnQgaXRlbSBpcyBjbGlja2VkLCBjbG9zZSBpdCwgYnV0IGFsc28gYWxsIGl0cyBvcGVuIGRlc2NlbmRhbnRzLlxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkcmVuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhY19pPTA7IGFjX2k8YWN0aXZlQ2hpbGRyZW4ubGVuZ3RoOyBhY19pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGQgPSBhY3RpdmVDaGlsZHJlblthY19pXTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT3BlbiBhbnkgY2xvc2VkIHBhcmVudHMgdGhhdCBhcmUgY2xpY2tlZC5cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICAgUmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIHRoZSBzZWxlY3QgbGlzdCBmcm9tIHRoZSBwcmV2aW91cyBub2RlIHN0cnVjdHVyZS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q2hpbGRLZXlzKGN1cnJUZXh0LCBjdXJyUGF0aCwgb2JqLCBlbGVtZW50VG9BZGRUbywgbGV2ZWwsIHBhcmVudHNDaGVja2VkKSB7XHJcblxyXG4gICAgICAgIHZhciBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50Q2hlY2tlZFN0YXRlID0gcGFyZW50c0NoZWNrZWQ7XHJcblxyXG4gICAgICAgIHZhciBjaGlsZExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VDaGVja2JveGVzICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCAmJiBpc1NlbGVjdGVkR3JvdXAoY3VyclBhdGgpKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSBjdXJyZW50IHN0YXRlIHdoZW4gaW4gdGhlICdsaW5rIG1vZGUnXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tY3VycmVudFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hpbGRLZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGF0IHRoZSBib3R0b20gb2YgYSBicmFuY2ggaS5lLiBubyBjaGlsZHJlbiB0byBwcm9jZXNzXHJcblxyXG4gICAgICAgICAgICBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgbm9kZSBoYXMgY2hpbGRyZW4gdG8gcHJvY2Vzc1xyXG5cclxuICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IDEgfHwgc2hvdWxkUGFyZW50QmVPcGVuKGN1cnJQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiBmaXJzdCBsZXZlbCBjaGlsZHJlbiBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnRDaGVja2VkU3RhdGUgPSBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250YWluZXIgcmVhZHkgdG8gYmUgcG9wdWxhdGVkIHdpdGggdGhlIGNoaWxkIG5vZGVzXHJcbiAgICAgICAgICAgIHZhciBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIC8vIENhbGwgcmVjdXJzaXZlbHkgd2l0aCB1cGRhdGVkIHBhcmFtcyBmb3IgZWFjaCBjaGlsZCBub2RlXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBja19pPTA7IGNrX2kgPCBjaGlsZEtleXMubGVuZ3RoOyBja19pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkS2V5c1tja19pXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRLZXkgIT09ICdBbGwgY29udGFjdHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNoaWxkS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyclBhdGggKyBcIlxcXFxcIiArIGNoaWxkS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2NoaWxkS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGluaXRpYWwgY2FsbCBvZiB0aGUgcmVjdXJzaXZlIGZ1bmN0aW9uIHN0YXJ0aW5nIGF0IHRoZSByb290LlxyXG4gICAgZGlzcGxheUNoaWxkS2V5cyhcIkFsbCBDb250YWN0IEdyb3Vwc1wiLCBcIlwiLCBzdHJ1Y3R1cmVbXCJcXFxcXCJdLCB0cmVlQ29udGFpbmVyLCAxLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gUmVwbGFjZSB0aGUgc2VsZWN0IGxpc3Qgd2l0aCB0aGUgbmV3IHRyZWVcclxuICAgIGdyb3VwU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRyZWVDb250YWluZXIsIGdyb3VwU2VsZWN0KTtcclxuXHJcbiAgICB0cmVlQ29udGFpbmVyLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaGlkZGVuRmllbGQpO1xyXG5cclxuICAgIHRyYW5zZmVyVmFsdWVzKCk7XHJcblxyXG59KShcIiNHcm91cFwiLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCk7XHJcbn1cclxuIiwiLy8gU3RvcmUgYSB1bmlxdWUgc2V0IG9mIGlkcyBpbnNpZGUgYSBjb29raWVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRDb29raWVIZWxwZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl9pZHMgPSBuZXcgU2V0KHRoaXMuX2luaXRpYWxpc2UoKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFBvcHVsYXRlIHN0YXJ0IGlkcywgaW5pdGlhbGlzZXMgY29va2llIGlmIG5vdCBwcmVzZW50XHJcbiAgICBfaW5pdGlhbGlzZSgpIHtcclxuICAgICAgY29uc3QgY29va2llU3RyaW5nID0gZG9jdW1lbnQuY29va2llO1xyXG5cclxuICAgICAgY29uc3QgY29va2llcyA9IGNvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcclxuICAgICAgY29uc3QgbWF0Y2hpbmdDb29raWUgPSBjb29raWVzLmZpbmQoYyA9PiBjLnN0YXJ0c1dpdGgoYCR7dGhpcy5fbmFtZX09YCkpO1xyXG5cclxuICAgICAgaWYgKCFtYXRjaGluZ0Nvb2tpZSkgeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3BlcnNpc3QoW10pOyAgIFxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgbWF0Y2hpbmdWYWx1ZUpTT04gPSBtYXRjaGluZ0Nvb2tpZS5zcGxpdCgnPScpWzFdO1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShtYXRjaGluZ1ZhbHVlSlNPTik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNhdmUgdGhlIG5ldyBpZHMgdG8gdGhlIGNvb2tpZSBhZnRlciB1cGRhdGVcclxuICAgIF91cGRhdGUoKSB7XHJcbiAgICAgIGNvbnN0IGlkcyA9IHRoaXMuZ2V0SWRzKCk7XHJcbiAgICAgIHRoaXMuX3BlcnNpc3QoaWRzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2F2ZSB0aGUgcGFzc2VkIGluIGlkcyB0byB0aGUgY29va2llXHJcbiAgICBfcGVyc2lzdChpZHMpIHsgICAgXHJcbiAgICAgIGNvbnN0IGlkc0pzb24gPSBKU09OLnN0cmluZ2lmeShpZHMgfHwgW10pO1xyXG4gICAgICBjb25zdCBuZXdDb29raWUgPSBgJHt0aGlzLl9uYW1lfT0ke2lkc0pzb259O2BcclxuICAgICAgLy8gY29uc29sZS5sb2cobmV3Q29va2llKTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gbmV3Q29va2llO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTZXQgYWxsIHRoZSBpZHMgaW4gb25lIGhpdC4gUmV0dXJucyB0aGUgbmV3IGNvdW50LlxyXG4gICAgc2V0SWRzKGlkcyA9IFtdKSB7XHJcbiAgICAgIHRoaXMuX2lkcyA9IG5ldyBTZXQoaWRzKTtcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJucyB0aGUgY291bnQgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdGlvbi5cclxuICAgIGdldElkcygpIHtcclxuICAgICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbSh0aGlzLl9pZHMpXHJcbiAgICAgIHJldHVybiBpZHM7XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGlkcyBjdXJyZW50bHkgaW4gdGhlIHNldC5cclxuICAgIGdldENvdW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWRzLnNpemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlbW92ZSBvbmUgb3IgbW9yZSBpZHMuIFJldHVybiB0aGUgbmV3IGNvdW50XHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgdGhpcy5faWRzLmRlbGV0ZShpZCk7ICAgICAgXHJcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgb25lIG9yIG1vcmUgaWRzLiBSZXR1cm5zIHRoZSBuZXcgY291bnRcclxuICAgIGFkZChpZCkge1xyXG4gICAgICB0aGlzLl9pZHMuYWRkKGlkKTtcclxuICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9lcyB0aGUgc2V0IGNvbnRhaW4gdGhlIHBhc3NlZCBpbiBhcnJheSBpdGVtLlxyXG4gICAgaGFzSWQoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRzLmhhcyhpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiAgVVNBR0U6IFRvIHVzZSB0aGlzIGNvbnRyb2wgeW91IG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlIHRvIHRoZSBidXR0b24gdGhhdCBzaG91bGQgYmUgZG9pbmcgdGhlIHNob3cgYWxsLlxyXG4gKiBcclxuICogIGRhdGEtc2hvd2FsbC10YWJsZS1pZD1cIjw8aWQgb2YgdGFibGUgdG8gYmUgZWZmZWN0ZWQ+PlwiXHJcbiAqIFxyXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcclxuICogXHJcbiAqICBkYXRhLXNob3dhbGwtaXRlbS1saW1pdD1cIjIwXCIgLSBzZXRzIHRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2hvdyBpbml0aWFsbHkuICBEZWZhdWx0IGlzIDEwXHJcbiAqICBcclxuICovXHJcblxyXG52YXIgc2hvd01vcmVUYWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1zaG93YWxsLXRhYmxlLWlkXScpO1xyXG5cclxuc2hvd01vcmVUYWJsZUJ1dHRvbnMuZm9yRWFjaChzaG93QWxsQnV0dG9uID0+IHtcclxuICB2YXIgdGFibGVJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLXRhYmxlLWlkXCIpO1xyXG5cclxuICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlkKTtcclxuICBpZiAodGFibGUpIHtcclxuXHJcbiAgICB2YXIgZGVmYXVsdEl0ZW1MaW1pdCA9IDEwOyAgICBcclxuICAgIHZhciBwYXNzZWRJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xyXG4gICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHBhc3NlZEl0ZW1MaW1pdCwgMTApO1xyXG4gICAgdmFyIGxpbWl0VG9Vc2UgPSBpc05hTihwYXJzZWRJdGVtTGltaXQpID8gZGVmYXVsdEl0ZW1MaW1pdCA6IHBhcnNlZEl0ZW1MaW1pdDtcclxuICAgIFxyXG4gICAgLy8gV2UgZG9udCB3YW50IHRoZSBoZWFkZXJzXHJcbiAgICB2YXIgdGFibGVCb2R5ID0gdGFibGUudEJvZGllc1swXTtcclxuICAgIGlmICghdGFibGVCb2R5KSB7IHJldHVybjsgfVxyXG5cclxuICAgIHZhciB0YWJsZUJvZHlMZW5ndGggPSB0YWJsZUJvZHkucm93cy5sZW5ndGg7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgPSAxLCBib2R5Um93OyBib2R5Um93ID0gdGFibGVCb2R5LnJvd3NbaS0xXTsgaSsrKSB7XHJcbiAgICAgIGlmIChpID4gbGltaXRUb1VzZSkge1xyXG4gICAgICAgIGJvZHlSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhYmxlQm9keUxlbmd0aCA8PSBsaW1pdFRvVXNlKSB7IHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9XHJcblxyXG4gICAgc2hvd0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4ge1xyXG4gICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgQXJyYXkuZnJvbSh0YWJsZUJvZHkucm93cykuZm9yRWFjaChmdW5jdGlvbihib2R5Um93KSB7XHJcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJ0YWJsZS1yb3dcIjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiLyoqKioqKiBcclxuXHJcbiAgQ3JlYXRlcyBhIHRhZyBsaXN0IGZyb20gYSBzZWxlY3QgZWxlbWVudFxyXG5cclxuICB1c2FnZTpcclxuXHJcbiAgbmV3IFNlbGVjdExpc3RUYWcoc2VsZWN0SWQsIHJldmVydEdyb3Vwc0lkLCBvblVwZGF0ZUZ1bmMpLlxyXG5cclxuICAtIHNlbGVjdElkIChyZXF1aXJlZCk6IFRoZSBpZCBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgYWN0aW5nIGFzIHRoZSBzb3VyY2UgKG11c3QgaGF2ZSBtdWx0aXBsZSBhdHRyaWJ1dGUsIGFuZCBhbGwgaXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZClcclxuXHJcbiAgLSByZXZlcnRHcm91cHMgKG9wdGlpb25hbCk6IFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgY2xpY2tlZCB0byByZXZlcnQgc2VsZWN0ZWQgb3B0aW9ucyAoc2hvdWxkIGhhdmUgaXMtaGlkZGVuIGNsYXNzIHRvIHN0YXJ0KVxyXG5cclxuICAtIG9uVXBkYXRlRnVuYyAocmVxdWlyZWQpOiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgdGFnIGhhcyBiZWVuIHJlbW92ZWQsIG9yIG9wdGlvbnMgYXJlIHJldmVydGVkLi4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHR3byBwYXJhbXMsIHNlbGVjdGVkT3B0aW9ucyBhbmQgYWxsT3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGludGVuZGVkIHRvIG1ha2UgdGhlIGNvbnRyb2wgbW9yZSBmbGV4aWJsZSBpLmUuIG91ciBmaXJzdCB1c2FnZSBpcyB0byB1cGRhdGUgbGFiZWwgd2l0aCBzZWxlY3RlZCBpdGVtcyB0ZXh0IGVsc2V3aGVyZSBvbiBwYWdlIHdpdGhvdXQgZnVydGhlciBjb3VwbGluZy5cclxuXHJcbioqKioqKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TGlzdFRhZ3Mge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jID0gKCkgPT4ge30pIHtcclxuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMgPSBvblVwZGF0ZUZ1bmM7XHJcblxyXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmIChyZXZlcnRHcm91cHNJZCkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmV2ZXJ0R3JvdXBzSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnJldmVydEJ0bikge1xyXG4gICAgICAgICAgdGhpcy5yZXZlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IFsuLi50aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldO1xyXG4gICAgICBpZiAodGhpcy5yZXZlcnRCdG4gJiYgdGhpcy5hbGxPcHRpb25zLnNvbWUobyA9PiAhby5zZWxlY3RlZCkpIHtcclxuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXHJcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xyXG4gICAgICAgICAgY29uc3QgbyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInK3RhcmdldFZhbCsnXCJdJyk7XHJcbiAgICAgICAgICAgICAgaWYobyl7XHJcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmV2ZXJ0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudGFnT3B0aW9ucy5hZnRlcih0aGlzLnRhZ3MpO1xyXG5cclxuICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlVGFncygpIHtcclxuICAgICAgdGhpcy50YWdzLmlubmVySFRNTCA9ICcnOyAgICAgIFxyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFsbE9wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCk7XHJcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgIHRoaXMudGFncy5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUYWcodC5pbm5lclRleHQsIHQudmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jKHNlbGVjdGVkT3B0aW9ucywgdGhpcy5hbGxPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgbWFrZVRhZyh0ZXh0LCB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBpLmNsYXNzTGlzdC5hZGQoXCJidXR0b25fX2ljb25cIik7ICAgICAgXHJcbiAgICAgIGkuZGF0YXNldC52YWw9dmFsdWU7XHJcbiAgICAgIGkuaW5uZXJUZXh0ID0gXCJjbGVhclwiXHJcblxyXG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoaSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGFnO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gU2hvdWxkIGhhdmUgYSBzZWN0aW9uIGxpa2UgdGhpcyBmb3IgZWFjaCBwYWdlIHRoZSBjb250cm9sIGlzIHVzZWQgb24sIHVubGVzcyB3ZSB3YW50IGl0IGJlaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGFzIGEgcHJldmlvdXMgdmVyc2lvbiAoaW5jbHVkaW5nIGlkcyBhbmQgdXBkYXRlIGZ1bmN0aW9uKSBcclxuLy8gKkJldHRlciBzdGlsbCogLSBoYXZlIGluIHNlcGVyYXRlIHNjcmlwdCBmaWxlIHNjb3BlZCB0byBzcGVjaWZpYyBwYWdlIChsaWtlIHdpdGggU2VsZWN0U3RhZmZGb3JNZXNzYWdlLmpzKVxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicpKSB7XHJcblxyXG4gIC8vIFByZXBhcmUgYW4gdXBkYXRlIGZ1bmN0aW9uIGlmIHJlcXVpcmVkIChvcHRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZUdyb3Vwc0xhYmVsU3BhbicpO1xyXG4gIGNvbnN0IG9uVXBkYXRlRnVuYyA9IChzZWxlY3RlZE9wdGlvbnMsIGFsbE9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHBsdXJhbGlzZWRHcm91cHMgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAxID8gJ2dyb3VwJyA6ICdncm91cHMnO1xyXG4gICAgc3Bhbi5pbm5lclRleHQgPSBgU2VuZCB0byAke3NlbGVjdGVkT3B0aW9ucy5sZW5ndGh9IHJlc3BvbnNlICR7cGx1cmFsaXNlZEdyb3Vwc31gO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGlzZSBhbiBpbnN0YW5jZSBvZiB0aGUgY29udHJvbFxyXG4gIG5ldyBTZWxlY3RMaXN0VGFncygnRm9sbG93dXBHcm91cFNlbGVjdG9yJywgJ3JldmVydF9ncm91cHMnLCBvblVwZGF0ZUZ1bmMpOyBcclxufVxyXG4iLCJcclxuLy8gUmVtb3ZlIHRoZSBuby1qcyBjbGFzcyBzbyB3ZSBhcmUgYWJsZSB0byB0ZWxsIHRoYXQganMgaXMgZW5hYmxlZFxyXG4vLyBVc2VmdWwgZm9yIGhpZGluZyBlbGVtZW50cyB3aGVuIGpzIG5vdCBhdmFpbGFibGUuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTsiLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlcycpICE9bnVsbCkge1xyXG5cclxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAgICAgdmFyIHJlc3BvbnNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNwb25zZS1maWVsZCcpO1xyXG4gICAgICAgIHZhciBrZXlBcnJheSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlcyk7XHJcbiAgICAgICAgdmFyIGFkZFJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfcmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhZGRSZXNwb25zZUJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlKCk7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGtleUFycmF5LmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBrZXkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3N+PSdyZXNwb25zZS1vcHRpb24nXVwiKS52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlX3Jlc3BvbnNlXCIpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlX3Jlc3BvbnNlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVzcG9uc2Uoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKGtleSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIltjbGFzc349J3Jlc3BvbnNlLW9wdGlvbiddXCIpLnZhbHVlLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRSZXNwb25zZShwYXJzZUludChrZXkpICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFJlc3BvbnNlKGtleSkge1xyXG5cclxuICAgICAgICAgICAga2V5QXJyYXkuZXZlcnkoZnVuY3Rpb24oa2V5KXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVSZXNwb25zZShrZXkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snICYmIHJlc3BvbnNlc1trZXldLmRhdGFzZXQua2V5ID09IGtleSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocmVzcG9uc2VzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIltjbGFzc349J3Jlc3BvbnNlLW9wdGlvbiddXCIpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KShcIiNSZXNwb25zZXNcIik7XHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkUGhvbmVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkUGhvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFBob25lQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRQaG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZFBob25lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSkoXCJhZGRQaG9uZVwiKTtcclxuXHJcbn1cclxuXHJcblxyXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkRW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICB2YXIgYWRkRW1haWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEVtYWlsQnRuXCIpO1xyXG5cclxuICAgICAgICBhZGRFbWFpbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFkZEVtYWlsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkoXCJhZGRFbWFpbFwiKTtcclxuXHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZUdyb3VwQnV0dG9uICE9bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KShcImFkZF9ncm91cFwiKTtcclxufVxyXG5cclxudmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG5pZiAoZ3JvdXBUZXh0YXJlYSAhPSBudWxsKSB7XHJcbiAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0MiA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0Mi5tYXRjaGVzKFwiLmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcclxuXHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC12YWxpZGF0aW9uLWVycm9yJykgIT1udWxsKSB7XHJcblxyXG4gICAgdmFyIGlucHV0RXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpO1xyXG4gICAgdmFyIGlucHV0RXJyb3JzQXJyYXkgPSBPYmplY3Qua2V5cyhpbnB1dEVycm9ycyk7XHJcblxyXG4gICAgaW5wdXRFcnJvcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRFcnJvcnNba2V5XSk7XHJcbiAgICAgICAgaW5wdXRFcnJvcnNba2V5XS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4vLyAgICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XHJcblxyXG4vLyAgICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcclxuLy8gICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImFzaWRlLS1hY3RpdmVcIik7XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuXHJcbi8vIH0pKFwiI1NpZGViYXJcIik7XHJcblxyXG4iLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjc2VhcmNoJyk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xyXG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVCdXR0b24uZGF0YXNldC50YXJnZXQpO1xyXG5cclxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RvciArICcgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCcjbWVudScpOyIsIi8qIFxyXG4gICAgVGhpcyBzY3JpcHQgaXMgc3BlY2lmaWMgdG8gdGhlIHN0YWZmIGNvbXBvc2UgcGFnZS5cclxuKi9cclxuXHJcbmltcG9ydCBJZENvb2tpZUhlbHBlciBmcm9tICcuLi9JZENvb2tpZUhlbHBlcic7XHJcbmltcG9ydCBTZWxlY3RMaXN0VGFncyBmcm9tICcuLi9TZWxlY3RMaXN0VGFncyc7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1jb21wb3NlJykpIHtcclxuXHJcbiAgY29uc3QgY2ggPSBuZXcgSWRDb29raWVIZWxwZXIoJ0NvdXJpZXJNZXNzYWdlVXNlcklkcycpO1xyXG4gIFxyXG4gIC8vIFRoaXMgc2hvdWxkIG1vdmUgdG8gdGhlIG5ldyBjb21wb3NlIHBhZ2VcclxuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XHJcbiAgICBjaC5zZXRJZHMoc2VsZWN0ZWRPcHRpb25zLm1hcCh4ID0+IHgudmFsdWUpKTtcclxuICB9XHJcbiAgXHJcbiAgbmV3IFNlbGVjdExpc3RUYWdzKCdBc2NTdGFmZlNlbGVjdG9yJywgbnVsbCwgb25VcGRhdGVGdW5jKTsgXHJcbn1cclxuIiwiLyogXHJcbiAgICBUaGlzIHNjcmlwdCBpcyBzcGVjaWZpYyB0byB0aGUgc2VhcmNoIHN0YWZmIHBhZ2UuXHJcbiovXHJcblxyXG5pbXBvcnQgSWRDb29raWVIZWxwZXIgZnJvbSAnLi4vSWRDb29raWVIZWxwZXInO1xyXG5pbXBvcnQgRHJhZnRNZXNzYWdlRHJhd2VyIGZyb20gJy4uL0RyYWZ0TWVzc2FnZURyYXdlcic7XHJcbi8vIGltcG9ydCBMYXp5TG9hZGVyIGZyb20gJy4vTGF6eUxvYWRlcic7XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuaWYgKG1haW4gJiYgbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FzYy1zdGFmZi1pbmRleCcpKSB7XHJcblxyXG4gIGNvbnN0IGNoID0gbmV3IElkQ29va2llSGVscGVyKCdDb3VyaWVyTWVzc2FnZVVzZXJJZHMnKTtcclxuICBjb25zdCBkbWQgPSBuZXcgRHJhZnRNZXNzYWdlRHJhd2VyKGNoLmdldENvdW50KCkpO1xyXG4gIFxyXG4gIC8vIFRPRE86IFByb3BlciBzZWxlY3RvciBmb3IgdGhpc1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1zZWxlY3Qtc3RhZmYnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoe3RhcmdldH0pID0+IHtcclxuICAgIGlmICh0YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0LmNoZWNrZWQgPyBjaC5hZGQodGFyZ2V0LnZhbHVlKSA6IGNoLnJlbW92ZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGRtZC51cGRhdGUobmV3VG90YWwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8gIFNBTVBMRSBPRiBEVU1NWSBDT0RFIFRIQVQgV0FTIFJVTk5JTkcgT04gQ09ERSBQRU4gLSBGT1IgUkVNSU5ERVIgT0YgSE9XIFRPIElNUExNRU5UIFxyXG4vKlxyXG5cclxuY29uc3QgY29udGFjdHNMb2FkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzLWxvYWRlcicpO1xyXG5cclxuaWYgKGNvbnRhY3RzTG9hZGVyRWxlbWVudCkge1xyXG4gIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1saXN0Jyk7XHJcbiAgXHJcbiAgY29uc3QgY3JlYXRlRHVtbXlSb3cgPSBpZCA9PiB7XHJcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1Rlc3QgSXRlbSAnICsgaWQ7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pbm5lclRleHQgPSAnTmVtbyBsYWJvcnVtIGFzcGVyaW9yZXMgbW9sZXN0aWFlIGVhcnVtIGFjY3VzYW50aXVtIGFsaWFzIHByb3ZpZGVudCBjb21tb2RpIHBvcnJvIGEgaWxsdW0gc29sdXRhIGRvbG9yZSBpcHNhLCBkZWJpdGlzIGRlbGVuaXRpIGJlYXRhZSBwbGFjZWF0IHBvc3NpbXVzIGNvbnNlcXV1bnR1ciBkb2xvcnVtPyBMYXVkYW50aXVtIGFjY3VzYW11cyBuYW0gbnVtcXVhbSwgcGVyc3BpY2lhdGlzIHF1b2QgZGljdGEgZG9sb3IuJztcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICByZXR1cm4gaXRlbURpdjtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGNoZWNrSWZNb3JlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW1zTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbXMtbGlzdCA+IC5pdGVtJykubGVuZ3RoIDwgMTAwO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBpbnNlcnREdW1teVJvd3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYXhSb3dzID0gaXRlbXNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtcy1saXN0ID4gLml0ZW0nKS5sZW5ndGg7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICB2YXIgZHVtbXlJdGVtID0gY3JlYXRlRHVtbXlSb3cobWF4Um93cyArIGkgKyAxKTtcclxuICAgICAgaXRlbXNMaXN0LmFwcGVuZENoaWxkKGR1bW15SXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTZWFyY2hSZXN1bHRzID0gKGRvbmVTZWFyY2hpbmcpID0+IHtcclxuICAgICAgLy8gQWRkIGluIHNvbWUgZHVtbXkgcm93cy4uLlxyXG4gICAgICBpbnNlcnREdW1teVJvd3MoKTtcclxuICAgICAgY29uc3QgbW9yZVRvTG9hZCA9IGNoZWNrSWZNb3JlKCk7XHJcbiAgICAgIGRvbmVTZWFyY2hpbmcobW9yZVRvTG9hZCk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBjb250YWN0c0xvYWRlciA9IG5ldyBDb3VyaWVyTGF6eUxvYWRlcihjb250YWN0c0xvYWRlckVsZW1lbnQsIChkb25lKSA9PiB7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBoYW5kbGVTZWFyY2hSZXN1bHRzKGRvbmUpOyAgICBcclxuICAgIH0sIDUwMCk7XHJcbiAgICBcclxuICB9LCB7IGRlYnVnOiBmYWxzZSwgcGVla0Rpc3RhbmNlOiA1MCB9KTtcclxufVxyXG5cclxuKi9cclxuXHJcblxyXG4iLCIvKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLFxyXG50b2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuXHJcbi8vIGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XHJcbi8vICAgIHZhciBhc2lkZUV4aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2lkZVwiKTtcclxuLy8gICAgIGlmKGFzaWRlRXhpc3Qpe1xyXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFzaWRlLS1hY3RpdmVcIik7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIG1lbnUgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcclxuICAgIHZhciBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcGRvd24tY29udGVudFwiKTtcclxuICAgIHZhciBpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgb3BlbkRyb3Bkb3duID0gZHJvcGRvd25zW2ldO1xyXG4gICAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbnZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xyXG5cclxuaWYgKGFkZEdyb3VwQnV0dG9uKSB7XHJcblxyXG5hZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbnZhciBjbG9zZVNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Vfc2lkZWJhcicpO1xyXG5cclxuaWYgKGNsb3NlU2lkZWJhcikge1xyXG5cclxuY2xvc2VTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcclxuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcclxuICB2YXIgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAvLyBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gIC8vICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaWYgKCF4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdhc2lkZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8geS5jbGFzc0xpc3QuYWRkKCdtYWluLS1oaWRkZW4nKTtcclxuICAgICAgLy8gfVxyXG4gIH0gZWxzZSBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xyXG4gICAgICAgIHguY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0taGlkZGVuJyk7XHJcbiAgICAgIC8vIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCIvLyB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblxyXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgY29uc3Qgc25hY2tiYXJTdG9yYWdlSXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc25hY2tiYXInKTtcclxuICAgIGNvbnN0IHNuYWNrYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICB2YXIgY29udGFjdFBhcmFtID0gdXJsUGFyYW1zLmdldCgnQ29udGFjdEFkZGVkJyk7XHJcbiAgICB2YXIgT3JnYW5pc2F0aW9uUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdPcmdhbmlzYXRpb25BZGRlZCcpO1xyXG4gICAgdmFyIE1lc3NhZ2VTZW50UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdNZXNzYWdlU2VudCcpO1xyXG5cclxuICAgIHZhciBzbmFja2Jhck1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcclxuICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBhbHJlYWR5IGNvbnRhaW5zIGN1cnJlbnQgcGFnZSBwYXRoXHJcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG5cclxuICAgICAgICAgICAgLy9pZiBpdCBkb2VzIHRoZW4gaGlkZSB0aGUgc25hY2tiYXJcclxuICAgICAgICAgICAgc25hY2tiYXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSAge1xyXG4gICAgICAgICAgICBsb2NhdGlvbnMgOiBuZXcgQXJyYXkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGFjdFBhcmFtID09PSAnVHJ1ZScpIHtcclxuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IGNvbnRhY3QgaGFzIGJlZW4gY3JlYXRlZCc7XHJcblxyXG4gICAgfSBlbHNlIGlmIChPcmdhbmlzYXRpb25QYXJhbSA9PT0gJ1RydWUnKSB7XHJcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBvcmdhbmlzYXRpb24gaGFzIGJlZW4gY3JlYXRlZCc7XHJcbiAgICB9IGVsc2UgaWYgKE1lc3NhZ2VTZW50UGFyYW0gPT09ICdUcnVlJykge1xyXG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdNZXNzYWdlIHNlbnQnO1xyXG4gICAgfSBlbHNlIGlmIChzbmFja2Jhcikge1xyXG4gICAgICAgIHNuYWNrYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLnB1c2god2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc25hY2tiYXInLCBKU09OLnN0cmluZ2lmeShzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzbmFja2Jhck1lc3NhZ2UpIHtcclxuICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QuYWRkKCdzbmFja2Jhci0tYWN0aXZlJyk7XHJcbiAgICAgICAgc25hY2tiYXIuaW5uZXJIVE1MID0gc25hY2tiYXJNZXNzYWdlO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NuYWNrYmFyLS1hY3RpdmUnKTtcclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuXHJcbn0pKFwiI3NuYWNrYmFyXCIpO1xyXG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG4vLyAgICAgLy9mdW5jdGlvbiB0byBtYWtlIHdob2xlIHRhYmxlIHRyIGNsaWNrYWJsZVxyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgdHInKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XHJcblxyXG4vLyAgICAgICAgIGlmIChlbC5kYXRhc2V0LmhyZWYgIT1udWxsKSB7XHJcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xyXG4vLyAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcclxuLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuZGF0YXNldC5ocmVmO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuXHJcbi8vIH0pKFwidGFibGVcIik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=