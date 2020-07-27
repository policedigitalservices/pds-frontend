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
  } else {
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
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/GroupsTree.js ./src/js/side.js ./src/js/ToggleContent.js ./src/js/ToggleSidebar.js ./src/js/tables.js ./src/js/SeeAll.js ./src/js/menu.js ./src/js/snackbar.js ./src/js/SelectListTags.js ***!
  \****************************************************************************************************************************************************************************************************************/
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
module.exports = __webpack_require__(/*! ./src/js/SelectListTags.js */"./src/js/SelectListTags.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VsZWN0TGlzdFRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJsZXMuanMiXSwibmFtZXMiOlsiZ3JvdXBFeGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VDaGVja2JveGVzIiwiaGFzQXR0cmlidXRlIiwidXNlU2luZ2xlU2VsZWN0Q2hlY2tib3giLCJsb2NrUm9vdE5vZGUiLCJzZWxlY3RvciIsImludGlhbGx5U2VsZWN0ZWROb2RlcyIsImdyb3VwU2VsZWN0IiwiZ3JvdXBUZXh0YXJlYSIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZWxlY3RlZE9wdGlvbnNOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicGF0aFRvVW5jaGVjayIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjYlNlbGVjdG9yIiwiY2hlY2JveFRvVW5jaGVjayIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImJ1aWxkQ2hlY2tib3giLCJwYXJlbnRDaGVja2VkIiwiY2hlY2tib3giLCJ0eXBlIiwic2V0QXR0cmlidXRlIiwibmFtZSIsImlkIiwibmV3UGFyZW50U2VsZWN0ZWQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsImxhYmVsIiwiY2hlY2tTcGFuIiwiYm9yZGVyU3BhbiIsImFwcGVuZENoaWxkIiwiYnVpbGRDaGVja2JveExhYmVsIiwiY2hlY2tib3hMYWJlbCIsImlubmVySFRNTCIsImZvciIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwicGFyZW50Tm9kZSIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5zIiwiY2hpbGRDaGVja2JveGVzIiwiaGlkZGVuRmllbGQiLCJzdHJ1Y3R1cmUiLCJvcHRpb25faSIsIm9wdGlvbiIsInNlZ21lbnRzIiwic3BsaXQiLCJub2RlVG9DaGVjayIsInNlZ21lbnRfaSIsInNlZyIsInRyZWVDb250YWluZXIiLCJhY3RpdmVDaGlsZHJlbiIsImFjX2kiLCJhY3RpdmVDaGlsZCIsImRpc3BsYXlDaGlsZEtleXMiLCJjdXJyVGV4dCIsImN1cnJQYXRoIiwib2JqIiwiZWxlbWVudFRvQWRkVG8iLCJsZXZlbCIsInBhcmVudHNDaGVja2VkIiwiY2hpbGRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudENoZWNrZWRTdGF0ZSIsImNoaWxkTGlzdEl0ZW0iLCJjaGlsZExpc3QiLCJja19pIiwiY2hpbGRLZXkiLCJyZXBsYWNlQ2hpbGQiLCJzaG93TW9yZVRhYmxlQnV0dG9ucyIsImZvckVhY2giLCJzaG93QWxsQnV0dG9uIiwidGFibGVJZCIsInRhYmxlIiwiZGVmYXVsdEl0ZW1MaW1pdCIsInBhc3NlZEl0ZW1MaW1pdCIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwibGltaXRUb1VzZSIsImlzTmFOIiwidGFibGVCb2R5IiwidEJvZGllcyIsInRhYmxlQm9keUxlbmd0aCIsInJvd3MiLCJib2R5Um93Iiwic3R5bGUiLCJkaXNwbGF5IiwiZWwiLCJTZWxlY3RMaXN0VGFncyIsInNlbGVjdElkIiwicmV2ZXJ0R3JvdXBzSWQiLCJvblVwZGF0ZUZ1bmMiLCJ0YWdPcHRpb25zIiwicmV2ZXJ0QnRuIiwibyIsInBvcHVsYXRlVGFncyIsImFsbE9wdGlvbnMiLCJzb21lIiwidGFncyIsInRhcmdldFZhbCIsImRhdGFzZXQiLCJ2YWwiLCJhZnRlciIsInNlbGVjdGVkT3B0aW9ucyIsImZpbHRlciIsInQiLCJtYWtlVGFnIiwidGFnIiwiY3JlYXRlVGV4dE5vZGUiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsInJlc3BvbnNlcyIsImtleUFycmF5IiwiYWRkUmVzcG9uc2VCdXR0b24iLCJibHVyIiwiYWRkUmVzcG9uc2UiLCJyZW1vdmVSZXNwb25zZSIsInZhbGlkYXRlUmVzcG9uc2UiLCJldmVyeSIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZXN0IiwibWVudSIsIm1lbnVCdXR0b24iLCJtZW51Q2hpbGQiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsIngiLCJ5Iiwic25hY2tiYXJTdG9yYWdlSXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzbmFja2JhciIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiY29udGFjdFBhcmFtIiwiZ2V0IiwiT3JnYW5pc2F0aW9uUGFyYW0iLCJzbmFja2Jhck1lc3NhZ2UiLCJzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkiLCJKU09OIiwicGFyc2UiLCJsb2NhdGlvbnMiLCJpbmNsdWRlcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7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QUFhO0FBRTVDLFVBQUksQ0FBQ29FLHdCQUF3QixDQUFDRyxTQUF6QixDQUFtQ0MsUUFBbkMsQ0FBNEN2TSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JNLFFBQTVELENBQUwsRUFBNEU7QUFFeEU0TCxnQ0FBd0IsQ0FBQ0csU0FBekIsQ0FBbUN2TixJQUFuQyxDQUF3Q2lCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQk0sUUFBeEQ7QUFDQVAsY0FBTSxDQUFDd0wsWUFBUCxDQUFvQmdCLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDSixJQUFJLENBQUNLLFNBQUwsQ0FBZU4sd0JBQWYsQ0FBeEM7QUFFSDtBQUNKLEtBUkQ7QUFTSDs7QUFFRCxNQUFJRCxlQUFKLEVBQXFCO0FBQ2pCUixZQUFRLENBQUNsTixTQUFULENBQW1CQyxHQUFuQixDQUF1QixrQkFBdkI7QUFDQWlOLFlBQVEsQ0FBQzlJLFNBQVQsR0FBcUJzSixlQUFyQjtBQUVBUSxjQUFVLENBQUMsWUFBVTtBQUNqQmhCLGNBQVEsQ0FBQ2xOLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLGtCQUExQjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKLENBekRELEVBeURHLFdBekRILEU7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlIiwiZmlsZSI6ImRpc3QvanMvc2NyaXB0cy5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIiB2YXIgZ3JvdXBFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBcIik7XG4gICAgaWYoZ3JvdXBFeGlzdCl7XG5cbiAgICAgICAgdmFyIHVzZUNoZWNrYm94ZXMgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13aXRoLWNoZWNrYm94Jyk7XG4gICAgICAgIHZhciB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtc2luZ2xlLXNlbGVjdC1jaGVja2JveCcpO1xuICAgICAgICB2YXIgbG9ja1Jvb3ROb2RlID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9jay1yb290Jyk7XG5cbihmdW5jdGlvbiAoc2VsZWN0b3IsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XG5cbiAgICAvL0NoZWNrIG9uIHBhZ2Ugd2hldGhlciBHcm91cCBNdWx0aSBTZWxlY3QgZXhpc3RzXG4gICAgdmFyIGludGlhbGx5U2VsZWN0ZWROb2RlcyA9IFtdO1xuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBTZWxlY3RvclwiKTtcbiAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcblxuICAgIC8vIElmIHRoZSBHcm91cCBNdWx0aSBTZWxlY3QgZG9lcyBleGlzdCwgaGlkZSBpdCAoaWYgSlMgZW5hYmxlZClcbiAgICBpZiAoZ3JvdXBTZWxlY3QgIT09IG51bGwpIHtcbiAgICAgICAgZ3JvdXBTZWxlY3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgICBncm91cFRleHRhcmVhLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcblxuICAgICAgICAvLyBHcmFiIGFsbCB0aGUgaXRlbXMgdGhhdCBzaG91bGQgYmUgc2VsZWN0ZWRcbiAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uc05vZGVzID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uOmNoZWNrZWQnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkT3B0aW9uc05vZGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgaW50aWFsbHlTZWxlY3RlZE5vZGVzLnB1c2goc2VsZWN0ZWRPcHRpb25zTm9kZXNbaV0udmFsdWUgfHwgXCJcXFxcXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XG4gICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi50YWc+LmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXBhdGgnKSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXRoVG9VbmNoZWNrID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcGF0aFwiKS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIik7XG4gICAgICAgICAgICAgICAgdmFyIGNiU2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1jaGVja2JveF0uR3JvdXBJdGVtW3ZhbHVlPVwiJytwYXRoVG9VbmNoZWNrKydcIl0nO1xuICAgICAgICAgICAgICAgIHZhciBjaGVjYm94VG9VbmNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYlNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2JveFRvVW5jaGVjaykge1xuICAgICAgICAgICAgICAgICAgICBjaGVjYm94VG9VbmNoZWNrLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgc2VhcmNoUGFydHMgPSAoZnVuY3Rpb24gZ2V0VXJsVmFycygpIHtcbiAgICAgICAgdmFyIHZhcnMgPSB7fTtcbiAgICAgICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCBmdW5jdGlvbihtLGtleSx2YWx1ZSkge1xuICAgICAgICAgICAgdmFyc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFycztcbiAgICB9KSgpO1xuXG4gICAgdmFyIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2dyb3VwPVwiO1xuICAgIHZhciBncm91cFBhcmFtID0gc2VhcmNoUGFydHMuZ3JvdXA7XG4gICAgdmFyIHNlYXJjaFBhcmFtID0gc2VhcmNoUGFydHMuU2VhcmNoO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gYnVpbGQgdGhlIHBhdGhcbiAgICBmdW5jdGlvbiBnZXRQYWdlUGF0aEZvckdyb3VwKGdyb3VwKSB7XG4gICAgICB2YXIgZ3JwID0gZ3JvdXAgPT09IFwiXCIgPyBcIlxcXFxcIiA6IGdyb3VwO1xuICAgICAgcmV0dXJuIHBhZ2VQYXRoICsgZ3JwO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBub2RlIGJlaW5nIGFkZCBzaG91bGQgYmUgb3BlbiBpLmUuIHRvIHJldmVhbCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGdyb3VwXG4gICAgZnVuY3Rpb24gc2hvdWxkUGFyZW50QmVPcGVuKHBhdGgpIHtcbiAgICAgICAgaWYgKCFncm91cFBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggKyBcIlxcXFxcIik7XG4gICAgICAgIHJldHVybiBncm91cFBhcmFtLnN0YXJ0c1dpdGgocGF0aFRvQ2hlY2spICYmIGdyb3VwUGFyYW0gIT0gcGF0aFRvQ2hlY2s7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkZWQgaXMgdGhlIGN1cnJlbnRseVNlbGVjdGVkR3JvdXBcbiAgICBmdW5jdGlvbiBpc1NlbGVjdGVkR3JvdXAocGF0aCkge1xuICAgICAgICB2YXIgcGFyYW1zVG9DaGVjayA9IGRlY29kZVVSSUNvbXBvbmVudChncm91cFBhcmFtIHx8IFwiXFxcXFwiKTtcbiAgICAgICAgdmFyIHBhdGhUb0NoZWNrID0gKHBhdGggfHwgXCJcXFxcXCIpO1xuXG4gICAgICAgIHJldHVybiBwYXJhbXNUb0NoZWNrID09PSBwYXRoVG9DaGVjaztcbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgbGluayBmb3IgdGhlIGdyb3VwXG4gICAgZnVuY3Rpb24gYnVpbGRMaW5rKHRleHQsIHBhdGgpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGxpbmsuaHJlZiA9IGdldFBhZ2VQYXRoRm9yR3JvdXAocGF0aCk7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rXCIpO1xuXG4gICAgICAgIC8vIE5CLiAgT3JpZ2luYWxseSB3ZSBkaWRudCB3YW50IHRoZSBjdXJyZW50IGNsYXNzIHRvIGJlIGFkZGVkIGlmIGRvaW5nIGEgc2VhcmNoLCBidXQgdGhpbmsgd2UgZG8gbm93LlxuICAgICAgICAvLyBpZiAoKCFzZWFyY2hQYXJhbSkgJiYgIGlzU2VsZWN0ZWRHcm91cChwYXRoKSkge1xuICAgICAgICAvLyBpZiAoaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XG4gICAgICAgIC8vICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGluay0tY3VycmVudFwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gbGluaztcbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggbGFiZWwgZm9yIHRoZSBncm91cFxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3godGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xuICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIkdyb3VwSXRlbVwiKTtcbiAgICAgICAgY2hlY2tib3gubmFtZSA9IHRleHQ7XG4gICAgICAgIGNoZWNrYm94LnZhbHVlID0gcGF0aDtcbiAgICAgICAgY2hlY2tib3guaWQgPSB0ZXh0O1xuICAgICAgICB2YXIgbmV3UGFyZW50U2VsZWN0ZWQgPSBwYXJlbnRDaGVja2VkO1xuXG4gICAgICAgIGlmIChwYXRoID09PSAnXFxcXCcgJiYgbG9ja1Jvb3ROb2RlKSB7XG4gICAgICAgICAgICAvLyBJbiB0aGlzIG1vZGUgdGhlIHJvb3Qgbm9kZSBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIGNoZWNrZWQgQlVUIHRoZSBjaGlsZHJlbiBvZiB0aGlzIG5vZGUgc2hvdWxkIGFjdCBhcyB0aG91Z2ggaXQgaXNudCBjaGVja2VkIHNvIHdlIGRvbnQgdXBkYXRlIHRoZSBzZWxlY3RlZCBzdGF0ZVxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q2hlY2tlZCAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcbiAgICAgICAgICAgIC8vIElmIGEgcGFyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYWxsIGl0cyBjaGlsZHJlbiBzaG91bGQgYmUgZGlzYWJsZWQgYW5kIHVuY2hlY2tlZFxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBub3QgY2hlY2tlZCBpdHMgY2hpbGRyZW4gc2VsZWN0ZWQgc3RhdGUgZGVwZW5kIG9uIHRoZSBjaGlsZHMgdmFsdWUsIGFuZCBub3QgYmUgZGlzYWJsZWRcbiAgICAgICAgICAgIHZhciBuZXdDaGVja2VkID0gaW50aWFsbHlTZWxlY3RlZE5vZGVzLmluZGV4T2YocGF0aCB8fCAnXFxcXCcpID49IDA7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gbmV3Q2hlY2tlZDtcbiAgICAgICAgICAgIG5ld1BhcmVudFNlbGVjdGVkID0gbmV3Q2hlY2tlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0eWxlIGFzIGEgcmFkaW8gYnV0dG9uXG4gICAgICAgIGlmICh1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94Jyk7XG4gICAgICAgICAgICB2YXIgY2hlY2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgY2hlY2tTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19jaGVjaycpO1xuICAgICAgICAgICAgdmFyIGJvcmRlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBib3JkZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19ib3JkZXInKTtcbiAgICAgICAgICAgIGJvcmRlclNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja1NwYW4pO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoYm9yZGVyU3Bhbik7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdyYWRpby1jaGVja2JveF9faW5wdXQnKTtcbiAgICAgICAgICAgIGNoZWNrYm94ID0gbGFiZWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2NoZWNrYm94LCBuZXdQYXJlbnRTZWxlY3RlZH07XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGJ1aWxkIGNoZWNrYm94IGZvciB0aGUgZ3JvdXBcbiAgICBmdW5jdGlvbiBidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkge1xuICAgICAgICB2YXIgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNoZWNrYm94TGFiZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgY2hlY2tib3hMYWJlbC5mb3IgPSB0ZXh0O1xuICAgICAgICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0ZXh0KTtcblxuICAgICAgICByZXR1cm4gY2hlY2tib3hMYWJlbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2ZlclZhbHVlcygpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcblxuICAgICAgICB2YXIgZWxlbXM9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Hcm91cEl0ZW0nKVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7aTxlbGVtcy5sZW5ndGg7aSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9ja1Jvb3ROb2RlICYmICEoZWxlbXNbaV0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vLW9wZXJhdGlvblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbXNbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWxlbXNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlR3JvdXBGaWVsZChkYXRhKSB7XG5cbiAgICAgICAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xuICAgICAgICBpZiAodGV4dGFyZWEpIHtcbiAgICAgICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdHcm91cFNlbGVjdG9yJyk7XG5cbiAgICAgICAgICAgIHZhciBleGlzdGluZ09wdGlvblZhbHVlcyA9IEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5tYXAob3B0ID0+IG9wdC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfaSA9IDA7IGRhdGFfaSA8IGRhdGEubGVuZ3RoOyBkYXRhX2krKyl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGFfY3VycmVudCA9IGRhdGFbZGF0YV9pXTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YV9jdXJyZW50ID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj5BbGwgQ29udGFjdCBHcm91cHM8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gdGV4dGFyZWEuaW5uZXJIVE1MICsgJzxkaXYgY2xhc3M9XCJ0YWdcIj4nICsgZGF0YV9jdXJyZW50LnN1YnN0cmluZygxKSArICc8aSBjbGFzcz1cImJ1dHRvbl9faWNvblwiIGRhdGEtcGF0aD1cIicrIGRhdGFfY3VycmVudCArJ1wiPmNsZWFyPC9pPjwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBvcHRpb24gZXhpc3RzIC0gYWRkIGl0IGlmIG5vdFxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ09wdGlvblZhbHVlcy5pbmRleE9mKGRhdGFfY3VycmVudCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gZGF0YV9jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gZGF0YV9jdXJyZW50O1wiXCJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBkYXRhLmluZGV4T2YoZWxlbWVudC5vcHRpb25zW2ldLnZhbHVlKSA+PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKHBhcmVudCwgdGV4dCwgcGF0aCwgcGFyZW50Q2hlY2tlZCkge1xuICAgICAgICBpZiAodXNlQ2hlY2tib3hlcyB8fCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xuXG4gICAgICAgICAgICAvLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCB0aGUgYmxhbmsgdmFsdWUgZm9yICdBbGwgQ29udGFjdCBHcm91cHMnXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcXFxcXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZENoZWNrYm94TGFiZWwodGV4dCwgcGF0aCkpO1xuICAgICAgICAgICAgdmFyIGNoZWNrYm94UmVzdWx0ID0gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGVja2JveFJlc3VsdC5jaGVja2JveCk7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tib3hSZXN1bHQubmV3UGFyZW50U2VsZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGxpbmsgdG8gcmVmcmVzaCBwYWdlIHdpdGggc2VsZWN0ZWQgbm9kZS5cbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidWlsZExpbmsodGV4dCwgcGF0aCkpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudENoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGN1cnJlbnQsIGNoaWxkcmVuLCB1cGRhdGVyRm4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMb29wQ2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9vcENoaWxkICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlckZuKGN1cnJlbnRMb29wQ2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayhlLCBjaGVja2JveCkge1xuXG4gICAgICAgIHZhciBwYXJlbnRMaSA9IGNoZWNrYm94LnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XG5cbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSBvbmx5IG9uZSBpdGVtIGNhbiBiZSBzZWxlY3RlZCwgYW5kIHRoZSBzZWxlY3RlZCBpdGVtIGNhbm5vdCBiZSBkZXNlbGV0ZWQuXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHZhciBhbGxHcm91cENoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBhbGxHcm91cENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50TGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudCcpKXtcblxuXG4gICAgICAgICAgICB2YXIgY2hpbGRDaGVja2JveGVzID0gcGFyZW50TGkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveCcpO1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VG9VcGRhdGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoQ2hlY2tib3hFeGNsdWRpbmdDdXJyZW50KGNoZWNrYm94LCBjaGlsZENoZWNrYm94ZXMsIGZ1bmN0aW9uKGNoZWNrYm94VG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR3JhYiB0aGUgc2VsZWN0IGxpc3QgYW5kIGFsbCBvZiBpdHMgb3B0aW9uc1xuICAgIHZhciBncm91cFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHZhciBvcHRpb25zID0gZ3JvdXBTZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcblxuICAgIHZhciBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBoaWRkZW5GaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJHcm91cFwiKTtcbiAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IGdyb3VwUGFyYW0gfHwgJ1xcXFwnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGNvbGxlY3Rpb25zIHdpdGggc3RhcnRpbmcga2V5IGZvciB0aGUgcm9vdC5cbiAgICB2YXIgc3RydWN0dXJlID0geyBcIlxcXFxcIjoge30gfTtcblxuICAgIC8vIEJ1aWxkIG9uIHRoZSBiYXNlIHN0cnVjdHVyZSBieSBsb29waW5nIHRocm91Z2ggZWFjaCBzZWxlY3QgaXRlbS5cbiAgICBmb3IgKHZhciBvcHRpb25faT0wOyBvcHRpb25faTxvcHRpb25zLmxlbmd0aDsgb3B0aW9uX2krKykge1xuXG4gICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW29wdGlvbl9pXTtcblxuICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSB0aGUgZ3JvdXAgbmFtZSBpbnRvIGFsbCBpdHMgcGF0aCBzZWdtZW50c1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gb3B0aW9uLnRleHRDb250ZW50LnNwbGl0KFwiXFxcXFwiKTtcbiAgICAgICAgICAgIC8vIFN0YXJ0IGF0IHRoZSByb290IGVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZVRvQ2hlY2sgPSBzdHJ1Y3R1cmVbXCJcXFxcXCJdO1xuXG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IGVuc3VyZSB0aGF0IGFsbCBsZXZlbHMgb2YgdGhlIHN0cnVjdHVyZSBhcmUgaW4gcGxhY2UuXG4gICAgICAgICAgICBmb3IgKHZhciBzZWdtZW50X2k9MDsgc2VnbWVudF9pPHNlZ21lbnRzLmxlbmd0aDsgc2VnbWVudF9pKyspIHtcblxuICAgICAgICAgICAgICAgIHZhciBzZWcgPSBzZWdtZW50c1tzZWdtZW50X2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlZyAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb0NoZWNrW3NlZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrW3NlZ10gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub2RlVG9DaGVjayA9IG5vZGVUb0NoZWNrW3NlZ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIGJhc2UgZWxlbWVudCB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkXG4gICAgdmFyIHRyZWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XG4gICAgdHJlZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3QtLXJvb3RcIik7XG5cblxuICAgIC8vIEhhbmRsZSBhbGwgdGhlIGNsaWNrcyBhdCB0aGUgcGFyZW50IGxldmVsXG4gICAgdHJlZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIC8vIEhhbmRsZSBjaGVja2JveCBpdGVtcyBiZWluZyBzZWxlY3RlZC5cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpKSB7XG4gICAgICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrKGUsIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2ZlclZhbHVlcygpO1xuXG4gICAgICAgIC8vIFdlIG9ubHkgY2FyZSBhYm91dCBjbGlja3Mgb24gZWxlbWVudHMgdGhhdCBhcmUgcGFyZW50c1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIuZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1wYXJlbnRcIikpIHtcbiAgICAgICAgICAgIC8vIElmIGFuIG9wZW4gcGFyZW50IGl0ZW0gaXMgY2xpY2tlZCwgY2xvc2UgaXQsIGJ1dCBhbHNvIGFsbCBpdHMgb3BlbiBkZXNjZW5kYW50cy5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZHJlbiA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICBcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGFjX2k9MDsgYWNfaTxhY3RpdmVDaGlsZHJlbi5sZW5ndGg7IGFjX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ2hpbGQgPSBhY3RpdmVDaGlsZHJlblthY19pXTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE9wZW4gYW55IGNsb3NlZCBwYXJlbnRzIHRoYXQgYXJlIGNsaWNrZWQuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAgUmVjdXJzaXZlIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIHRoZSBzZWxlY3QgbGlzdCBmcm9tIHRoZSBwcmV2aW91cyBub2RlIHN0cnVjdHVyZS5cbiAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlDaGlsZEtleXMoY3VyclRleHQsIGN1cnJQYXRoLCBvYmosIGVsZW1lbnRUb0FkZFRvLCBsZXZlbCwgcGFyZW50c0NoZWNrZWQpIHtcblxuICAgICAgICB2YXIgY2hpbGRLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgICB2YXIgcGFyZW50Q2hlY2tlZFN0YXRlID0gcGFyZW50c0NoZWNrZWQ7XG5cbiAgICAgICAgdmFyIGNoaWxkTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cFwiKTtcblxuICAgICAgICBpZiAoIXVzZUNoZWNrYm94ZXMgJiYgIXVzZVNpbmdsZVNlbGVjdENoZWNrYm94ICYmIGlzU2VsZWN0ZWRHcm91cChjdXJyUGF0aCkpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSBjdXJyZW50IHN0YXRlIHdoZW4gaW4gdGhlICdsaW5rIG1vZGUnXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWN1cnJlbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYXQgdGhlIGJvdHRvbSBvZiBhIGJyYW5jaCBpLmUuIG5vIGNoaWxkcmVuIHRvIHByb2Nlc3NcblxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcblxuICAgICAgICAgICAgZWxlbWVudFRvQWRkVG8uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0SXRlbSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbm9kZSBoYXMgY2hpbGRyZW4gdG8gcHJvY2Vzc1xuXG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKTtcblxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAxIHx8IHNob3VsZFBhcmVudEJlT3BlbihjdXJyUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuIGZpcnN0IGxldmVsIGNoaWxkcmVuIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZSA9IGFwcGVuZENoaWxkcmVuRm9yTW9kZShjaGlsZExpc3RJdGVtLCBjdXJyVGV4dCwgY3VyclBhdGgsIHBhcmVudENoZWNrZWRTdGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIHJlYWR5IHRvIGJlIHBvcHVsYXRlZCB3aXRoIHRoZSBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgdmFyIGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpc3RcIik7XG4gICAgICAgICAgICBjaGlsZExpc3RJdGVtLmFwcGVuZENoaWxkKGNoaWxkTGlzdCk7XG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcbiAgICAgICAgICAgIC8vIENhbGwgcmVjdXJzaXZlbHkgd2l0aCB1cGRhdGVkIHBhcmFtcyBmb3IgZWFjaCBjaGlsZCBub2RlXG5cbiAgICAgICAgICAgIGZvciAodmFyIGNrX2k9MDsgY2tfaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGNrX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkS2V5c1tja19pXTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEtleSAhPT0gJ0FsbCBjb250YWN0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNoaWxkS2V5cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyUGF0aCArIFwiXFxcXFwiICsgY2hpbGRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2NoaWxkS2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENoZWNrZWRTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgaW5pdGlhbCBjYWxsIG9mIHRoZSByZWN1cnNpdmUgZnVuY3Rpb24gc3RhcnRpbmcgYXQgdGhlIHJvb3QuXG4gICAgZGlzcGxheUNoaWxkS2V5cyhcIkFsbCBDb250YWN0IEdyb3Vwc1wiLCBcIlwiLCBzdHJ1Y3R1cmVbXCJcXFxcXCJdLCB0cmVlQ29udGFpbmVyLCAxLCBmYWxzZSk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBzZWxlY3QgbGlzdCB3aXRoIHRoZSBuZXcgdHJlZVxuICAgIGdyb3VwU2VsZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRyZWVDb250YWluZXIsIGdyb3VwU2VsZWN0KTtcblxuICAgIHRyZWVDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChoaWRkZW5GaWVsZCk7XG5cbiAgICB0cmFuc2ZlclZhbHVlcygpO1xuXG59KShcIiNHcm91cFwiLCB1c2VDaGVja2JveGVzLCB1c2VTaW5nbGVTZWxlY3RDaGVja2JveCk7XG59XG4iLCIvKipcbiAqICBVU0FHRTogVG8gdXNlIHRoaXMgY29udHJvbCB5b3UgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgdG8gdGhlIGJ1dHRvbiB0aGF0IHNob3VsZCBiZSBkb2luZyB0aGUgc2hvdyBhbGwuXG4gKiBcbiAqICBkYXRhLXNob3dhbGwtdGFibGUtaWQ9XCI8PGlkIG9mIHRhYmxlIHRvIGJlIGVmZmVjdGVkPj5cIlxuICogXG4gKiAgT1BUSU9OQUw6IFVzZSB0aGUgZm9sbG93aW5nIGF0dHJ0aWJ1dGVzIHRvIGFkanVzdCB0aGUgYmVoYXZpb3JcbiAqIFxuICogIGRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0PVwiMjBcIiAtIHNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzaG93IGluaXRpYWxseS4gIERlZmF1bHQgaXMgMTBcbiAqICBcbiAqL1xuXG52YXIgc2hvd01vcmVUYWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1zaG93YWxsLXRhYmxlLWlkXScpO1xuXG5zaG93TW9yZVRhYmxlQnV0dG9ucy5mb3JFYWNoKHNob3dBbGxCdXR0b24gPT4ge1xuICB2YXIgdGFibGVJZCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLXRhYmxlLWlkXCIpO1xuXG4gIHZhciB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYmxlSWQpO1xuICBpZiAodGFibGUpIHtcblxuICAgIHZhciBkZWZhdWx0SXRlbUxpbWl0ID0gMTA7ICAgIFxuICAgIHZhciBwYXNzZWRJdGVtTGltaXQgPSBzaG93QWxsQnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvd2FsbC1pdGVtLWxpbWl0XCIpO1xuICAgIHZhciBwYXJzZWRJdGVtTGltaXQgPSBwYXJzZUludChwYXNzZWRJdGVtTGltaXQsIDEwKTtcbiAgICB2YXIgbGltaXRUb1VzZSA9IGlzTmFOKHBhcnNlZEl0ZW1MaW1pdCkgPyBkZWZhdWx0SXRlbUxpbWl0IDogcGFyc2VkSXRlbUxpbWl0O1xuICAgIFxuICAgIC8vIFdlIGRvbnQgd2FudCB0aGUgaGVhZGVyc1xuICAgIHZhciB0YWJsZUJvZHkgPSB0YWJsZS50Qm9kaWVzWzBdO1xuICAgIGlmICghdGFibGVCb2R5KSB7IHJldHVybjsgfVxuXG4gICAgdmFyIHRhYmxlQm9keUxlbmd0aCA9IHRhYmxlQm9keS5yb3dzLmxlbmd0aDtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMSwgYm9keVJvdzsgYm9keVJvdyA9IHRhYmxlQm9keS5yb3dzW2ktMV07IGkrKykge1xuICAgICAgaWYgKGkgPiBsaW1pdFRvVXNlKSB7XG4gICAgICAgIGJvZHlSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0YWJsZUJvZHlMZW5ndGggPD0gbGltaXRUb1VzZSkgeyBzaG93QWxsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgfVxuXG4gICAgc2hvd0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCkgPT4ge1xuICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgQXJyYXkuZnJvbSh0YWJsZUJvZHkucm93cykuZm9yRWFjaChmdW5jdGlvbihib2R5Um93KSB7XG4gICAgICAgIGJvZHlSb3cuc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XG4gICAgICB9KTtcblxuICAgICAgZWwudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIvKioqKioqIFxuXG4gIENyZWF0ZXMgYSB0YWcgbGlzdCBmcm9tIGEgc2VsZWN0IGVsZW1lbnRcblxuICB1c2FnZTpcblxuICBuZXcgU2VsZWN0TGlzdFRhZyhzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYykuXG5cbiAgLSBzZWxlY3RJZCAocmVxdWlyZWQpOiBUaGUgaWQgb2YgdGhlIHNlbGVjdCBlbGVtZW50IGFjdGluZyBhcyB0aGUgc291cmNlIChtdXN0IGhhdmUgbXVsdGlwbGUgYXR0cmlidXRlLCBhbmQgYWxsIGl0ZW1zIHNob3VsZCBiZSBtYXJrZWQgYXMgc2VsZWN0ZWQpXG5cbiAgLSByZXZlcnRHcm91cHMgKG9wdGlpb25hbCk6IFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgY2xpY2tlZCB0byByZXZlcnQgc2VsZWN0ZWQgb3B0aW9ucyAoc2hvdWxkIGhhdmUgaXMtaGlkZGVuIGNsYXNzIHRvIHN0YXJ0KVxuXG4gIC0gb25VcGRhdGVGdW5jIChyZXF1aXJlZCk6IEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYSB0YWcgaGFzIGJlZW4gcmVtb3ZlZCwgb3Igb3B0aW9ucyBhcmUgcmV2ZXJ0ZWQuLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggdHdvIHBhcmFtcywgc2VsZWN0ZWRPcHRpb25zIGFuZCBhbGxPcHRpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGludGVuZGVkIHRvIG1ha2UgdGhlIGNvbnRyb2wgbW9yZSBmbGV4aWJsZSBpLmUuIG91ciBmaXJzdCB1c2FnZSBpcyB0byB1cGRhdGUgbGFiZWwgd2l0aCBzZWxlY3RlZCBpdGVtcyB0ZXh0IGVsc2V3aGVyZSBvbiBwYWdlIHdpdGhvdXQgZnVydGhlciBjb3VwbGluZy5cblxuKioqKioqL1xuY2xhc3MgU2VsZWN0TGlzdFRhZ3Mge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RJZCwgcmV2ZXJ0R3JvdXBzSWQsIG9uVXBkYXRlRnVuYyA9ICgpID0+IHt9KSB7XG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyA9IG9uVXBkYXRlRnVuYztcblxuICAgICAgdGhpcy50YWdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpO1xuICAgICAgdGhpcy50YWdPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgXG4gICAgICB0aGlzLnJldmVydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJldmVydEdyb3Vwc0lkKTtcbiAgICAgIHRoaXMucmV2ZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMudGFnT3B0aW9ucy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG8gPT4gby5zZWxlY3RlZCA9IHRydWUpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFsbE9wdGlvbnMgPSBbLi4udGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXTtcbiAgICAgIGlmICh0aGlzLmFsbE9wdGlvbnMuc29tZShvID0+ICFvLnNlbGVjdGVkKSkge1xuICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXG4gICAgICB0aGlzLnRhZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCdpJykpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRWYWwgPSBlLnRhcmdldC5kYXRhc2V0LnZhbDtcbiAgICAgICAgICBjb25zdCBvID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicrdGFyZ2V0VmFsKydcIl0nKTtcbiAgICAgICAgICAgICAgaWYobyl7XG4gICAgICAgICAgICAgICAgICBvLnNlbGVjdGVkID0gZmFsc2U7ICAgXG4gICAgICAgICAgICAgICAgICB0aGlzLnJldmVydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTsgICAgICBcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFnT3B0aW9ucy5hZnRlcih0aGlzLnRhZ3MpO1xuXG4gICAgICB0aGlzLnBvcHVsYXRlVGFncygpO1xuICB9XG5cbiAgcG9wdWxhdGVUYWdzKCkge1xuICAgICAgdGhpcy50YWdzLmlubmVySFRNTCA9ICcnOyAgICAgIFxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpO1xuICAgICAgc2VsZWN0ZWRPcHRpb25zLmZvckVhY2godCA9PiB7XG4gICAgICAgIHRoaXMudGFncy5hcHBlbmRDaGlsZCh0aGlzLm1ha2VUYWcodC5pbm5lclRleHQsIHQudmFsdWUpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vblVwZGF0ZUZ1bmMoc2VsZWN0ZWRPcHRpb25zLCB0aGlzLmFsbE9wdGlvbnMpO1xuICAgIH1cblxuICBtYWtlVGFnKHRleHQsIHZhbHVlKSB7XG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uX19pY29uXCIpOyAgICAgIFxuICAgICAgaS5kYXRhc2V0LnZhbD12YWx1ZTtcbiAgICAgIGkuaW5uZXJUZXh0ID0gXCJjbGVhclwiXG5cbiAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycpO1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChpKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRhZztcbiAgICB9O1xufVxuXG4vLyBTaG91bGQgaGF2ZSBhIHNlY3Rpb24gbGlrZSB0aGlzIGZvciBlYWNoIHBhZ2UgdGhlIGNvbnRyb2wgaXMgdXNlZCBvbiwgdW5sZXNzIHdlIHdhbnQgaXQgYmVoYXZlIGV4YWN0bHkgdGhlIHNhbWUgYXMgYSBwcmV2aW91cyB2ZXJzaW9uIChpbmNsdWRpbmcgaWRzIGFuZCB1cGRhdGUgZnVuY3Rpb24pIFxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InKSkge1xuXG4gIC8vIFByZXBhcmUgYW4gdXBkYXRlIGZ1bmN0aW9uIGlmIHJlcXVpcmVkIChvcHRpb25hbCBwYXJhbWV0ZXIpXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVzcG9uc2VHcm91cHNMYWJlbFNwYW4nKTtcbiAgY29uc3Qgb25VcGRhdGVGdW5jID0gKHNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHBsdXJhbGlzZWRHcm91cHMgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAxID8gJ2dyb3VwJyA6ICdncm91cHMnO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gYFNlbmQgdG8gJHtzZWxlY3RlZE9wdGlvbnMubGVuZ3RofSByZXNwb25zZSAke3BsdXJhbGlzZWRHcm91cHN9YDtcbiAgfVxuXG4gIC8vIEluaXRpYWxpc2UgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbnRyb2xcbiAgbmV3IFNlbGVjdExpc3RUYWdzKCdGb2xsb3d1cEdyb3VwU2VsZWN0b3InLCAncmV2ZXJ0X2dyb3VwcycsIG9uVXBkYXRlRnVuYyk7IFxufVxuIiwiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZXMnKSAhPW51bGwpIHtcblxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuICAgICAgICB2YXIgcmVzcG9uc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3BvbnNlLWZpZWxkJyk7XG4gICAgICAgIHZhciBrZXlBcnJheSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlcyk7XG4gICAgICAgIHZhciBhZGRSZXNwb25zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX3Jlc3BvbnNlXCIpO1xuXG4gICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlQnV0dG9uLmJsdXIoKTtcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlKCk7XG5cbiAgICAgICAgfSlcblxuICAgICAgICBrZXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG5cbiAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBrZXkpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIltjbGFzc349J3Jlc3BvbnNlLW9wdGlvbiddXCIpLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlX3Jlc3BvbnNlXCIpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiI3JlbW92ZV9yZXNwb25zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVzcG9uc2Uoa2V5KTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShrZXkpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBhZGRSZXNwb25zZShwYXJzZUludChrZXkpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRSZXNwb25zZShrZXkpIHtcblxuICAgICAgICAgICAga2V5QXJyYXkuZXZlcnkoZnVuY3Rpb24oa2V5KXtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVSZXNwb25zZShrZXkpIHtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgJiYgcmVzcG9uc2VzW2tleV0uZGF0YXNldC5rZXkgPT0ga2V5KSB7XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHJlc3BvbnNlc1trZXldKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9KShcIiNSZXNwb25zZXNcIik7XG59XG5cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQaG9uZScpICE9bnVsbCkge1xuXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICAgIHZhciBhZGRQaG9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgICAgICB2YXIgYWRkUGhvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFBob25lQnRuXCIpO1xuXG4gICAgICAgIGFkZFBob25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkUGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uYmx1cigpO1xuICAgICAgICAgICAgYWRkUGhvbmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIH0pXG5cbiAgICB9KShcImFkZFBob25lXCIpO1xuXG59XG5cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRFbWFpbCcpICE9bnVsbCkge1xuXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICAgIHZhciBhZGRFbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgICAgICB2YXIgYWRkRW1haWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEVtYWlsQnRuXCIpO1xuXG4gICAgICAgIGFkZEVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkRW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uYmx1cigpO1xuICAgICAgICAgICAgYWRkRW1haWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIH0pO1xuICAgIH0pKFwiYWRkRW1haWxcIik7XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcblxuICAgIChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcblxuICAgICAgICBhZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcblxuICAgICAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNhdmVHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZV9ncm91cFwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzYXZlR3JvdXBCdXR0b24gIT1udWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pKFwiYWRkX2dyb3VwXCIpO1xufVxuXG52YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcblxuaWYgKGdyb3VwVGV4dGFyZWEgIT0gbnVsbCkge1xuICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldDIgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XG5cbiAgICAgICAgaWYgKHRhcmdldDIubWF0Y2hlcyhcIi5idXR0b25fX2ljb25cIikgJiYgdGFyZ2V0Mi5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XG5cbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRHcm91cEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xuICAgICAgICAgICAgICAgIHNhdmVHcm91cEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKSAhPW51bGwpIHtcblxuICAgIHZhciBpbnB1dEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmlucHV0LXZhbGlkYXRpb24tZXJyb3InKTtcbiAgICB2YXIgaW5wdXRFcnJvcnNBcnJheSA9IE9iamVjdC5rZXlzKGlucHV0RXJyb3JzKTtcblxuICAgIGlucHV0RXJyb3JzQXJyYXkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEVycm9yc1trZXldKTtcbiAgICAgICAgaW5wdXRFcnJvcnNba2V5XS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhpZGRlblwiKTtcblxuICAgIH0pO1xufVxuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4vLyAgICAgdmFyIGdyb3VwVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XG5cbi8vICAgICBpZiAoZ3JvdXBUZXh0YXJlYSAhPT0gbnVsbCkge1xuLy8gICAgICAgICBncm91cFRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTaWRlYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS0tYWN0aXZlXCIpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gfSkoXCIjU2lkZWJhclwiKTtcblxuIiwiKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XG5cbiAgICBpZiAobWVudSkge1xuXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XG5cbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxufSkoJyNzZWFyY2gnKTtcblxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgLy9nZXQgZGl2IElEIHdpdGhvdXQgI1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvXiMvLCAnJykpO1xuXG4gICAgLy8gY29uc29sZS5sb2cobWVudSk7XG5cbiAgICBpZiAobWVudSkge1xuXG4gICAgICAgIHZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICdCdXR0b24nKTtcbiAgICAgICAgdmFyIG1lbnVDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbi5kYXRhc2V0LnRhcmdldCk7XG5cbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdG9yICsgJyBjbGlja2VkJyk7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbWVudUNoaWxkLmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgICAgICBpZiAoIW1lbnUuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxufSkoJyNtZW51Jyk7IiwiLyogV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbixcbnRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuXG4vLyBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xuLy8gICAgdmFyIGFzaWRlRXhpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpO1xuLy8gICAgIGlmKGFzaWRlRXhpc3Qpe1xuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzaWRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhc2lkZS0tYWN0aXZlXCIpO1xuLy8gfVxuLy8gfVxuXG4vLyBDbG9zZSB0aGUgZHJvcGRvd24gbWVudSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XG4gICAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XG4gICAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XG4gICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxudmFyIGFkZEdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfZ3JvdXBcIik7XG5cbmlmIChhZGRHcm91cEJ1dHRvbikge1xuXG5hZGRHcm91cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xuICAgIH0pXG59XG5cbnZhciBjbG9zZVNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Vfc2lkZWJhcicpO1xuXG5pZiAoY2xvc2VTaWRlYmFyKSB7XG5cbmNsb3NlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICB2YXIgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgLy8gaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgLy8gICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgaWYgKCF4LmNsYXNzTGlzdC5jb250YWlucygnYXNpZGUtLWFjdGl2ZScpKSB7XG4gICAgICAgIHguY2xhc3NMaXN0LmFkZCgnYXNpZGUtLWFjdGl2ZScpO1xuICAgICAgICAvLyB5LmNsYXNzTGlzdC5hZGQoJ21haW4tLWhpZGRlbicpO1xuICAgICAgLy8gfVxuICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcbiAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKCdhc2lkZS0tYWN0aXZlJyk7XG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0taGlkZGVuJyk7XG4gICAgICAvLyB9XG4gIH1cblxuXG59XG4iLCIvLyB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblxuICAgIGNvbnN0IHNuYWNrYmFyU3RvcmFnZUl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NuYWNrYmFyJyk7XG4gICAgY29uc3Qgc25hY2tiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgdmFyIGNvbnRhY3RQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ0NvbnRhY3RBZGRlZCcpO1xuICAgIHZhciBPcmdhbmlzYXRpb25QYXJhbSA9IHVybFBhcmFtcy5nZXQoJ09yZ2FuaXNhdGlvbkFkZGVkJyk7XG4gICAgdmFyIHNuYWNrYmFyTWVzc2FnZSA9ICcnO1xuXG4gICAgLy9jaGVjayBpZiBsb2NhbFN0cm9yYWdlICdzbmFja2JhcicgZXhpc3RzIGFuZCBpZiBpdCBkb2VzbnQgc2V0dXAgb2JqZWN0IHJlYWR5IGZvciBldmVudExpc3RlbmVyXG4gICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW0gIT09IG51bGwpIHtcblxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gSlNPTi5wYXJzZShzbmFja2JhclN0b3JhZ2VJdGVtKTtcblxuICAgICAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBhbHJlYWR5IGNvbnRhaW5zIGN1cnJlbnQgcGFnZSBwYXRoXG4gICAgICAgIGlmIChzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcblxuICAgICAgICAgICAgLy9pZiBpdCBkb2VzIHRoZW4gaGlkZSB0aGUgc25hY2tiYXJcbiAgICAgICAgICAgIHNuYWNrYmFyLmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdmFyIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSA9ICB7XG4gICAgICAgICAgICBsb2NhdGlvbnMgOiBuZXcgQXJyYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhY3RQYXJhbSA9PT0gJ1RydWUnKSB7XG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgY29udGFjdCBoYXMgYmVlbiBjcmVhdGVkJztcblxuICAgIH0gZWxzZSBpZiAoT3JnYW5pc2F0aW9uUGFyYW0gPT09ICdUcnVlJykge1xuICAgICAgICBzbmFja2Jhck1lc3NhZ2UgPSAnTmV3IG9yZ2FuaXNhdGlvbiBoYXMgYmVlbiBjcmVhdGVkJztcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNuYWNrYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuXG4gICAgICAgICAgICBpZiAoIXNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xuXG4gICAgICAgICAgICAgICAgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5LmxvY2F0aW9ucy5wdXNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzbmFja2JhcicsIEpTT04uc3RyaW5naWZ5KHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheSkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHNuYWNrYmFyTWVzc2FnZSkge1xuICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QuYWRkKCdzbmFja2Jhci0tYWN0aXZlJyk7XG4gICAgICAgIHNuYWNrYmFyLmlubmVySFRNTCA9IHNuYWNrYmFyTWVzc2FnZTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzbmFja2Jhci5jbGFzc0xpc3QucmVtb3ZlKCdzbmFja2Jhci0tYWN0aXZlJyk7XG4gICAgICAgIH0sIDM1MDApO1xuICAgIH1cblxufSkoXCIjc25hY2tiYXJcIik7XG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbi8vICAgICAvL2Z1bmN0aW9uIHRvIG1ha2Ugd2hvbGUgdGFibGUgdHIgY2xpY2thYmxlXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgdHInKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cbi8vICAgICAgICAgaWYgKGVsLmRhdGFzZXQuaHJlZiAhPW51bGwpIHtcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpO1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5kYXRhc2V0LmhyZWY7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyB9KShcInRhYmxlXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==