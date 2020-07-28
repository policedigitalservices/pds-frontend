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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3Vwc1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NlZUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2VsZWN0TGlzdFRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1RvZ2dsZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90YWJsZXMuanMiXSwibmFtZXMiOlsiZ3JvdXBFeGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VDaGVja2JveGVzIiwiaGFzQXR0cmlidXRlIiwidXNlU2luZ2xlU2VsZWN0Q2hlY2tib3giLCJsb2NrUm9vdE5vZGUiLCJzZWxlY3RvciIsImludGlhbGx5U2VsZWN0ZWROb2RlcyIsImdyb3VwU2VsZWN0IiwiZ3JvdXBUZXh0YXJlYSIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzZWxlY3RlZE9wdGlvbnNOb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicHVzaCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicGF0aFRvVW5jaGVjayIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjYlNlbGVjdG9yIiwiY2hlY2JveFRvVW5jaGVjayIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsInNlYXJjaFBhcnRzIiwiZ2V0VXJsVmFycyIsInZhcnMiLCJwYXJ0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm0iLCJrZXkiLCJwYWdlUGF0aCIsIm9yaWdpbiIsInBhdGhuYW1lIiwiZ3JvdXBQYXJhbSIsImdyb3VwIiwic2VhcmNoUGFyYW0iLCJTZWFyY2giLCJnZXRQYWdlUGF0aEZvckdyb3VwIiwiZ3JwIiwic2hvdWxkUGFyZW50QmVPcGVuIiwicGF0aCIsInBhdGhUb0NoZWNrIiwic3RhcnRzV2l0aCIsImlzU2VsZWN0ZWRHcm91cCIsInBhcmFtc1RvQ2hlY2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJidWlsZExpbmsiLCJ0ZXh0IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImJ1aWxkQ2hlY2tib3giLCJwYXJlbnRDaGVja2VkIiwiY2hlY2tib3giLCJ0eXBlIiwic2V0QXR0cmlidXRlIiwibmFtZSIsImlkIiwibmV3UGFyZW50U2VsZWN0ZWQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJuZXdDaGVja2VkIiwiaW5kZXhPZiIsImxhYmVsIiwiY2hlY2tTcGFuIiwiYm9yZGVyU3BhbiIsImFwcGVuZENoaWxkIiwiYnVpbGRDaGVja2JveExhYmVsIiwiY2hlY2tib3hMYWJlbCIsImlubmVySFRNTCIsImZvciIsInRyYW5zZmVyVmFsdWVzIiwiZGF0YSIsImVsZW1zIiwicG9wdWxhdGVHcm91cEZpZWxkIiwidGV4dGFyZWEiLCJlbGVtZW50IiwiZXhpc3RpbmdPcHRpb25WYWx1ZXMiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwibWFwIiwib3B0IiwiZGF0YV9pIiwiZGF0YV9jdXJyZW50Iiwic3Vic3RyaW5nIiwibmV3T3B0aW9uIiwic2VsZWN0ZWQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZHJlbkZvck1vZGUiLCJwYXJlbnQiLCJjaGVja2JveFJlc3VsdCIsImZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJ1cGRhdGVyRm4iLCJjdXJyZW50TG9vcENoaWxkIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInBhcmVudExpIiwicGFyZW50Tm9kZSIsImFsbEdyb3VwQ2hlY2tib3hlcyIsImNoZWNrYm94VG9VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5zIiwiY2hpbGRDaGVja2JveGVzIiwiaGlkZGVuRmllbGQiLCJzdHJ1Y3R1cmUiLCJvcHRpb25faSIsIm9wdGlvbiIsInNlZ21lbnRzIiwic3BsaXQiLCJub2RlVG9DaGVjayIsInNlZ21lbnRfaSIsInNlZyIsInRyZWVDb250YWluZXIiLCJhY3RpdmVDaGlsZHJlbiIsImFjX2kiLCJhY3RpdmVDaGlsZCIsImRpc3BsYXlDaGlsZEtleXMiLCJjdXJyVGV4dCIsImN1cnJQYXRoIiwib2JqIiwiZWxlbWVudFRvQWRkVG8iLCJsZXZlbCIsInBhcmVudHNDaGVja2VkIiwiY2hpbGRLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmVudENoZWNrZWRTdGF0ZSIsImNoaWxkTGlzdEl0ZW0iLCJjaGlsZExpc3QiLCJja19pIiwiY2hpbGRLZXkiLCJyZXBsYWNlQ2hpbGQiLCJzaG93TW9yZVRhYmxlQnV0dG9ucyIsImZvckVhY2giLCJzaG93QWxsQnV0dG9uIiwidGFibGVJZCIsInRhYmxlIiwiZGVmYXVsdEl0ZW1MaW1pdCIsInBhc3NlZEl0ZW1MaW1pdCIsInBhcnNlZEl0ZW1MaW1pdCIsInBhcnNlSW50IiwibGltaXRUb1VzZSIsImlzTmFOIiwidGFibGVCb2R5IiwidEJvZGllcyIsInRhYmxlQm9keUxlbmd0aCIsInJvd3MiLCJib2R5Um93Iiwic3R5bGUiLCJkaXNwbGF5IiwiZWwiLCJTZWxlY3RMaXN0VGFncyIsInNlbGVjdElkIiwicmV2ZXJ0R3JvdXBzSWQiLCJvblVwZGF0ZUZ1bmMiLCJ0YWdPcHRpb25zIiwicmV2ZXJ0QnRuIiwibyIsInBvcHVsYXRlVGFncyIsImFsbE9wdGlvbnMiLCJzb21lIiwidGFncyIsInRhcmdldFZhbCIsImRhdGFzZXQiLCJ2YWwiLCJhZnRlciIsInNlbGVjdGVkT3B0aW9ucyIsImZpbHRlciIsInQiLCJtYWtlVGFnIiwidGFnIiwiY3JlYXRlVGV4dE5vZGUiLCJzcGFuIiwicGx1cmFsaXNlZEdyb3VwcyIsInJlc3BvbnNlcyIsImtleUFycmF5IiwiYWRkUmVzcG9uc2VCdXR0b24iLCJibHVyIiwiYWRkUmVzcG9uc2UiLCJyZW1vdmVSZXNwb25zZSIsInZhbGlkYXRlUmVzcG9uc2UiLCJldmVyeSIsImFkZFBob25lSW5wdXQiLCJhZGRQaG9uZUJ1dHRvbiIsImFkZEVtYWlsSW5wdXQiLCJhZGRFbWFpbEJ1dHRvbiIsImFkZEdyb3VwQnV0dG9uIiwic2F2ZUdyb3VwQnV0dG9uIiwidGFyZ2V0MiIsImlucHV0RXJyb3JzIiwiaW5wdXRFcnJvcnNBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZXN0IiwibWVudSIsIm1lbnVCdXR0b24iLCJtZW51Q2hpbGQiLCJvbmNsaWNrIiwiZXZlbnQiLCJkcm9wZG93bnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlbkRyb3Bkb3duIiwidG9nZ2xlU2lkZWJhciIsImNsb3NlU2lkZWJhciIsIngiLCJ5Iiwic25hY2tiYXJTdG9yYWdlSXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzbmFja2JhciIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiY29udGFjdFBhcmFtIiwiZ2V0IiwiT3JnYW5pc2F0aW9uUGFyYW0iLCJzbmFja2Jhck1lc3NhZ2UiLCJzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkiLCJKU09OIiwicGFyc2UiLCJsb2NhdGlvbnMiLCJpbmNsdWRlcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7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QW1DLFVBQVM4SSxFQUFULEVBQWE7QUFFNUMsVUFBSSxDQUFDb0Usd0JBQXdCLENBQUNHLFNBQXpCLENBQW1DQyxRQUFuQyxDQUE0Q3ZNLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQk0sUUFBNUQsQ0FBTCxFQUE0RTtBQUV4RTRMLGdDQUF3QixDQUFDRyxTQUF6QixDQUFtQ3ZOLElBQW5DLENBQXdDaUIsTUFBTSxDQUFDQyxRQUFQLENBQWdCTSxRQUF4RDtBQUNBUCxjQUFNLENBQUN3TCxZQUFQLENBQW9CZ0IsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NKLElBQUksQ0FBQ0ssU0FBTCxDQUFlTix3QkFBZixDQUF4QztBQUVIO0FBQ0osS0FSRDtBQVNIOztBQUVELE1BQUlELGVBQUosRUFBcUI7QUFDakJSLFlBQVEsQ0FBQ2xOLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGtCQUF2QjtBQUNBaU4sWUFBUSxDQUFDOUksU0FBVCxHQUFxQnNKLGVBQXJCO0FBRUFRLGNBQVUsQ0FBQyxZQUFVO0FBQ2pCaEIsY0FBUSxDQUFDbE4sU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsa0JBQTFCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBRUosQ0F6REQsRUF5REcsV0F6REgsRTs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGUiLCJmaWxlIjoiZGlzdC9qcy9zY3JpcHRzLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiIHZhciBncm91cEV4aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFwiKTtcbiAgICBpZihncm91cEV4aXN0KXtcblxuICAgICAgICB2YXIgdXNlQ2hlY2tib3hlcyA9IGdyb3VwRXhpc3QuaGFzQXR0cmlidXRlKCdkYXRhLXdpdGgtY2hlY2tib3gnKTtcbiAgICAgICAgdmFyIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94ID0gZ3JvdXBFeGlzdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2l0aC1zaW5nbGUtc2VsZWN0LWNoZWNrYm94Jyk7XG4gICAgICAgIHZhciBsb2NrUm9vdE5vZGUgPSBncm91cEV4aXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2NrLXJvb3QnKTtcblxuKGZ1bmN0aW9uIChzZWxlY3RvciwgdXNlQ2hlY2tib3hlcywgdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcblxuICAgIC8vQ2hlY2sgb24gcGFnZSB3aGV0aGVyIEdyb3VwIE11bHRpIFNlbGVjdCBleGlzdHNcbiAgICB2YXIgaW50aWFsbHlTZWxlY3RlZE5vZGVzID0gW107XG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFNlbGVjdG9yXCIpO1xuICAgIHZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xuXG4gICAgLy8gSWYgdGhlIEdyb3VwIE11bHRpIFNlbGVjdCBkb2VzIGV4aXN0LCBoaWRlIGl0IChpZiBKUyBlbmFibGVkKVxuICAgIGlmIChncm91cFNlbGVjdCAhPT0gbnVsbCkge1xuICAgICAgICBncm91cFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgIGdyb3VwVGV4dGFyZWEucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuXG4gICAgICAgIC8vIEdyYWIgYWxsIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZFxuICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25zTm9kZXMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb246Y2hlY2tlZCcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRPcHRpb25zTm9kZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICBpbnRpYWxseVNlbGVjdGVkTm9kZXMucHVzaChzZWxlY3RlZE9wdGlvbnNOb2Rlc1tpXS52YWx1ZSB8fCBcIlxcXFxcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGdyb3VwVGV4dGFyZWEgIT09IG51bGwpIHtcbiAgICAgICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnRhZz4uYnV0dG9uX19pY29uXCIpICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhUb1VuY2hlY2sgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgY2JTZWxlY3RvciA9ICdpbnB1dFt0eXBlPWNoZWNrYm94XS5Hcm91cEl0ZW1bdmFsdWU9XCInK3BhdGhUb1VuY2hlY2srJ1wiXSc7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNib3hUb1VuY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNiU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVjYm94VG9VbmNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNib3hUb1VuY2hlY2suY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzZWFyY2hQYXJ0cyA9IChmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xuICAgICAgICB2YXIgdmFycyA9IHt9O1xuICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksIGZ1bmN0aW9uKG0sa2V5LHZhbHVlKSB7XG4gICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJzO1xuICAgIH0pKCk7XG5cbiAgICB2YXIgcGFnZVBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/Z3JvdXA9XCI7XG4gICAgdmFyIGdyb3VwUGFyYW0gPSBzZWFyY2hQYXJ0cy5ncm91cDtcbiAgICB2YXIgc2VhcmNoUGFyYW0gPSBzZWFyY2hQYXJ0cy5TZWFyY2g7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBidWlsZCB0aGUgcGF0aFxuICAgIGZ1bmN0aW9uIGdldFBhZ2VQYXRoRm9yR3JvdXAoZ3JvdXApIHtcbiAgICAgIHZhciBncnAgPSBncm91cCA9PT0gXCJcIiA/IFwiXFxcXFwiIDogZ3JvdXA7XG4gICAgICByZXR1cm4gcGFnZVBhdGggKyBncnA7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIG5vZGUgYmVpbmcgYWRkIHNob3VsZCBiZSBvcGVuIGkuZS4gdG8gcmV2ZWFsIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZ3JvdXBcbiAgICBmdW5jdGlvbiBzaG91bGRQYXJlbnRCZU9wZW4ocGF0aCkge1xuICAgICAgICBpZiAoIWdyb3VwUGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCArIFwiXFxcXFwiKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwUGFyYW0uc3RhcnRzV2l0aChwYXRoVG9DaGVjaykgJiYgZ3JvdXBQYXJhbSAhPSBwYXRoVG9DaGVjaztcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgbm9kZSBiZWluZyBhZGRlZCBpcyB0aGUgY3VycmVudGx5U2VsZWN0ZWRHcm91cFxuICAgIGZ1bmN0aW9uIGlzU2VsZWN0ZWRHcm91cChwYXRoKSB7XG4gICAgICAgIHZhciBwYXJhbXNUb0NoZWNrID0gZGVjb2RlVVJJQ29tcG9uZW50KGdyb3VwUGFyYW0gfHwgXCJcXFxcXCIpO1xuICAgICAgICB2YXIgcGF0aFRvQ2hlY2sgPSAocGF0aCB8fCBcIlxcXFxcIik7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtc1RvQ2hlY2sgPT09IHBhdGhUb0NoZWNrO1xuICAgIH1cblxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBsaW5rIGZvciB0aGUgZ3JvdXBcbiAgICBmdW5jdGlvbiBidWlsZExpbmsodGV4dCwgcGF0aCkge1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgbGluay5ocmVmID0gZ2V0UGFnZVBhdGhGb3JHcm91cChwYXRoKTtcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2xpbmtcIik7XG5cbiAgICAgICAgLy8gTkIuICBPcmlnaW5hbGx5IHdlIGRpZG50IHdhbnQgdGhlIGN1cnJlbnQgY2xhc3MgdG8gYmUgYWRkZWQgaWYgZG9pbmcgYSBzZWFyY2gsIGJ1dCB0aGluayB3ZSBkbyBub3cuXG4gICAgICAgIC8vIGlmICgoIXNlYXJjaFBhcmFtKSAmJiAgaXNTZWxlY3RlZEdyb3VwKHBhdGgpKSB7XG4gICAgICAgIC8vIGlmIChpc1NlbGVjdGVkR3JvdXAocGF0aCkpIHtcbiAgICAgICAgLy8gICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19saW5rLS1jdXJyZW50XCIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBsaW5rO1xuICAgIH1cblxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBidWlsZCBjaGVja2JveCBsYWJlbCBmb3IgdGhlIGdyb3VwXG4gICAgZnVuY3Rpb24gYnVpbGRDaGVja2JveCh0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XG4gICAgICAgIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiR3JvdXBJdGVtXCIpO1xuICAgICAgICBjaGVja2JveC5uYW1lID0gdGV4dDtcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBwYXRoO1xuICAgICAgICBjaGVja2JveC5pZCA9IHRleHQ7XG4gICAgICAgIHZhciBuZXdQYXJlbnRTZWxlY3RlZCA9IHBhcmVudENoZWNrZWQ7XG5cbiAgICAgICAgaWYgKHBhdGggPT09ICdcXFxcJyAmJiBsb2NrUm9vdE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEluIHRoaXMgbW9kZSB0aGUgcm9vdCBub2RlIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgY2hlY2tlZCBCVVQgdGhlIGNoaWxkcmVuIG9mIHRoaXMgbm9kZSBzaG91bGQgYWN0IGFzIHRob3VnaCBpdCBpc250IGNoZWNrZWQgc28gd2UgZG9udCB1cGRhdGUgdGhlIHNlbGVjdGVkIHN0YXRlXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDaGVja2VkICYmICF1c2VTaW5nbGVTZWxlY3RDaGVja2JveCkge1xuICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBpcyBzZWxlY3RlZCBhbGwgaXRzIGNoaWxkcmVuIHNob3VsZCBiZSBkaXNhYmxlZCBhbmQgdW5jaGVja2VkXG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBhIHBhcmVudCBub2RlIGlzIG5vdCBjaGVja2VkIGl0cyBjaGlsZHJlbiBzZWxlY3RlZCBzdGF0ZSBkZXBlbmQgb24gdGhlIGNoaWxkcyB2YWx1ZSwgYW5kIG5vdCBiZSBkaXNhYmxlZFxuICAgICAgICAgICAgdmFyIG5ld0NoZWNrZWQgPSBpbnRpYWxseVNlbGVjdGVkTm9kZXMuaW5kZXhPZihwYXRoIHx8ICdcXFxcJykgPj0gMDtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBuZXdDaGVja2VkO1xuICAgICAgICAgICAgbmV3UGFyZW50U2VsZWN0ZWQgPSBuZXdDaGVja2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3R5bGUgYXMgYSByYWRpbyBidXR0b25cbiAgICAgICAgaWYgKHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3gnKTtcbiAgICAgICAgICAgIHZhciBjaGVja1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBjaGVja1NwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2NoZWNrJyk7XG4gICAgICAgICAgICB2YXIgYm9yZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGJvcmRlclNwYW4uY2xhc3NMaXN0LmFkZCgncmFkaW8tY2hlY2tib3hfX2JvcmRlcicpO1xuICAgICAgICAgICAgYm9yZGVyU3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICBib3JkZXJTcGFuLmFwcGVuZENoaWxkKGNoZWNrU3Bhbik7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChib3JkZXJTcGFuKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNoZWNrYm94X19pbnB1dCcpO1xuICAgICAgICAgICAgY2hlY2tib3ggPSBsYWJlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Y2hlY2tib3gsIG5ld1BhcmVudFNlbGVjdGVkfTtcbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgY2hlY2tib3ggZm9yIHRoZSBncm91cFxuICAgIGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSB7XG4gICAgICAgIHZhciBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY2hlY2tib3hMYWJlbC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICBjaGVja2JveExhYmVsLmZvciA9IHRleHQ7XG4gICAgICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRleHQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja2JveExhYmVsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zZmVyVmFsdWVzKCkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuXG4gICAgICAgIHZhciBlbGVtcz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkdyb3VwSXRlbScpXG5cbiAgICAgICAgICAgIGZvciAodmFyIGk9MDtpPGVsZW1zLmxlbmd0aDtpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NrUm9vdE5vZGUgJiYgIShlbGVtc1tpXS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8tb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtc1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChlbGVtc1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3B1bGF0ZUdyb3VwRmllbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVHcm91cEZpZWxkKGRhdGEpIHtcblxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdyb3VwVGV4dGFyZWFcIik7XG4gICAgICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgICAgICAgdGV4dGFyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0dyb3VwU2VsZWN0b3InKTtcblxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nT3B0aW9uVmFsdWVzID0gQXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLm1hcChvcHQgPT4gb3B0LnZhbHVlKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgZGF0YV9pID0gMDsgZGF0YV9pIDwgZGF0YS5sZW5ndGg7IGRhdGFfaSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9jdXJyZW50ID0gZGF0YVtkYXRhX2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfY3VycmVudCA9PT0gJ1xcXFwnICYmIGxvY2tSb290Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhX2N1cnJlbnQgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPkFsbCBDb250YWN0IEdyb3VwczxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSB0ZXh0YXJlYS5pbm5lckhUTUwgKyAnPGRpdiBjbGFzcz1cInRhZ1wiPicgKyBkYXRhX2N1cnJlbnQuc3Vic3RyaW5nKDEpICsgJzxpIGNsYXNzPVwiYnV0dG9uX19pY29uXCIgZGF0YS1wYXRoPVwiJysgZGF0YV9jdXJyZW50ICsnXCI+Y2xlYXI8L2k+PC9kaXY+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIG9wdGlvbiBleGlzdHMgLSBhZGQgaXQgaWYgbm90XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nT3B0aW9uVmFsdWVzLmluZGV4T2YoZGF0YV9jdXJyZW50KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBkYXRhX2N1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBkYXRhX2N1cnJlbnQ7XCJcIlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub3B0aW9uc1tpXS5zZWxlY3RlZCA9IGRhdGEuaW5kZXhPZihlbGVtZW50Lm9wdGlvbnNbaV0udmFsdWUpID49IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbkZvck1vZGUocGFyZW50LCB0ZXh0LCBwYXRoLCBwYXJlbnRDaGVja2VkKSB7XG4gICAgICAgIGlmICh1c2VDaGVja2JveGVzIHx8IHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KSB7XG5cbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIHRoZSBibGFuayB2YWx1ZSBmb3IgJ0FsbCBDb250YWN0IEdyb3VwcydcbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlxcXFxcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkQ2hlY2tib3hMYWJlbCh0ZXh0LCBwYXRoKSk7XG4gICAgICAgICAgICB2YXIgY2hlY2tib3hSZXN1bHQgPSBidWlsZENoZWNrYm94KHRleHQsIHBhdGgsIHBhcmVudENoZWNrZWQpO1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoZWNrYm94UmVzdWx0LmNoZWNrYm94KTtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveFJlc3VsdC5uZXdQYXJlbnRTZWxlY3RlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbGluayB0byByZWZyZXNoIHBhZ2Ugd2l0aCBzZWxlY3RlZCBub2RlLlxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1aWxkTGluayh0ZXh0LCBwYXRoKSk7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Q2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY3VycmVudCwgY2hpbGRyZW4sIHVwZGF0ZXJGbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudExvb3BDaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMb29wQ2hpbGQgIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVyRm4oY3VycmVudExvb3BDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKGUsIGNoZWNrYm94KSB7XG5cbiAgICAgICAgdmFyIHBhcmVudExpID0gY2hlY2tib3gucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAodXNlU2luZ2xlU2VsZWN0Q2hlY2tib3gpIHtcblxuICAgICAgICAgICAgLy8gSW4gdGhpcyBtb2RlIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gY2Fubm90IGJlIGRlc2VsZXRlZC5cbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFsbEdyb3VwQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdCBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGFsbEdyb3VwQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRMaS5jbGFzc0xpc3QuY29udGFpbnMoJ2dyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50Jykpe1xuXG5cbiAgICAgICAgICAgIHZhciBjaGlsZENoZWNrYm94ZXMgPSBwYXJlbnRMaS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94Jyk7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUb1VwZGF0ZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvckVhY2hDaGVja2JveEV4Y2x1ZGluZ0N1cnJlbnQoY2hlY2tib3gsIGNoaWxkQ2hlY2tib3hlcywgZnVuY3Rpb24oY2hlY2tib3hUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRvVXBkYXRlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHcmFiIHRoZSBzZWxlY3QgbGlzdCBhbmQgYWxsIG9mIGl0cyBvcHRpb25zXG4gICAgdmFyIGdyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdmFyIG9wdGlvbnMgPSBncm91cFNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xuXG4gICAgdmFyIGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkdyb3VwXCIpO1xuICAgIGhpZGRlbkZpZWxkLnZhbHVlID0gZ3JvdXBQYXJhbSB8fCAnXFxcXCc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGJhc2UgY29sbGVjdGlvbnMgd2l0aCBzdGFydGluZyBrZXkgZm9yIHRoZSByb290LlxuICAgIHZhciBzdHJ1Y3R1cmUgPSB7IFwiXFxcXFwiOiB7fSB9O1xuXG4gICAgLy8gQnVpbGQgb24gdGhlIGJhc2Ugc3RydWN0dXJlIGJ5IGxvb3BpbmcgdGhyb3VnaCBlYWNoIHNlbGVjdCBpdGVtLlxuICAgIGZvciAodmFyIG9wdGlvbl9pPTA7IG9wdGlvbl9pPG9wdGlvbnMubGVuZ3RoOyBvcHRpb25faSsrKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbb3B0aW9uX2ldO1xuXG4gICAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIC8vIFNlcGVyYXRlIHRoZSBncm91cCBuYW1lIGludG8gYWxsIGl0cyBwYXRoIHNlZ21lbnRzXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBvcHRpb24udGV4dENvbnRlbnQuc3BsaXQoXCJcXFxcXCIpO1xuICAgICAgICAgICAgLy8gU3RhcnQgYXQgdGhlIHJvb3QgZWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlVG9DaGVjayA9IHN0cnVjdHVyZVtcIlxcXFxcIl07XG5cbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHNlZ21lbnQgZW5zdXJlIHRoYXQgYWxsIGxldmVscyBvZiB0aGUgc3RydWN0dXJlIGFyZSBpbiBwbGFjZS5cbiAgICAgICAgICAgIGZvciAodmFyIHNlZ21lbnRfaT0wOyBzZWdtZW50X2k8c2VnbWVudHMubGVuZ3RoOyBzZWdtZW50X2krKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ21lbnRzW3NlZ21lbnRfaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VnICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvQ2hlY2tbc2VnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ2hlY2tbc2VnXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUb0NoZWNrID0gbm9kZVRvQ2hlY2tbc2VnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgYmFzZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWRcbiAgICB2YXIgdHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcbiAgICB0cmVlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdC0tcm9vdFwiKTtcblxuXG4gICAgLy8gSGFuZGxlIGFsbCB0aGUgY2xpY2tzIGF0IHRoZSBwYXJlbnQgbGV2ZWxcbiAgICB0cmVlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gSGFuZGxlIGNoZWNrYm94IGl0ZW1zIGJlaW5nIHNlbGVjdGVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcbiAgICAgICAgICAgIGhhbmRsZUNoZWNrYm94Q2xpY2soZSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zZmVyVmFsdWVzKCk7XG5cbiAgICAgICAgLy8gV2Ugb25seSBjYXJlIGFib3V0IGNsaWNrcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBwYXJlbnRzXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5ncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLXBhcmVudFwiKSkge1xuICAgICAgICAgICAgLy8gSWYgYW4gb3BlbiBwYXJlbnQgaXRlbSBpcyBjbGlja2VkLCBjbG9zZSBpdCwgYnV0IGFsc28gYWxsIGl0cyBvcGVuIGRlc2NlbmRhbnRzLlxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUNoaWxkcmVuID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICAgIFwiLmdyb3VwLXNlbGVjdG9yX19ncm91cC0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYWNfaT0wOyBhY19pPGFjdGl2ZUNoaWxkcmVuLmxlbmd0aDsgYWNfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVDaGlsZCA9IGFjdGl2ZUNoaWxkcmVuW2FjX2ldO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3BlbiBhbnkgY2xvc2VkIHBhcmVudHMgdGhhdCBhcmUgY2xpY2tlZC5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwLS1hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qXG4gICAgICBSZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBidWlsZHMgdGhlIHNlbGVjdCBsaXN0IGZyb20gdGhlIHByZXZpb3VzIG5vZGUgc3RydWN0dXJlLlxuICAgICovXG4gICAgZnVuY3Rpb24gZGlzcGxheUNoaWxkS2V5cyhjdXJyVGV4dCwgY3VyclBhdGgsIG9iaiwgZWxlbWVudFRvQWRkVG8sIGxldmVsLCBwYXJlbnRzQ2hlY2tlZCkge1xuXG4gICAgICAgIHZhciBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgIHZhciBwYXJlbnRDaGVja2VkU3RhdGUgPSBwYXJlbnRzQ2hlY2tlZDtcblxuICAgICAgICB2YXIgY2hpbGRMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY2hpbGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZ3JvdXAtc2VsZWN0b3JfX2dyb3VwXCIpO1xuXG4gICAgICAgIGlmICghdXNlQ2hlY2tib3hlcyAmJiAhdXNlU2luZ2xlU2VsZWN0Q2hlY2tib3ggJiYgaXNTZWxlY3RlZEdyb3VwKGN1cnJQYXRoKSkge1xuICAgICAgICAgICAgLy8gT25seSBhZGQgdGhlIGN1cnJlbnQgc3RhdGUgd2hlbiBpbiB0aGUgJ2xpbmsgbW9kZSdcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tY3VycmVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hpbGRLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhdCB0aGUgYm90dG9tIG9mIGEgYnJhbmNoIGkuZS4gbm8gY2hpbGRyZW4gdG8gcHJvY2Vzc1xuXG4gICAgICAgICAgICBhcHBlbmRDaGlsZHJlbkZvck1vZGUoY2hpbGRMaXN0SXRlbSwgY3VyclRleHQsIGN1cnJQYXRoLCBwYXJlbnRDaGVja2VkU3RhdGUpO1xuXG4gICAgICAgICAgICBlbGVtZW50VG9BZGRUby5hcHBlbmRDaGlsZChjaGlsZExpc3RJdGVtKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhpcyBub2RlIGhhcyBjaGlsZHJlbiB0byBwcm9jZXNzXG5cbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImdyb3VwLXNlbGVjdG9yX19ncm91cC0tcGFyZW50XCIpO1xuXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IDEgfHwgc2hvdWxkUGFyZW50QmVPcGVuKGN1cnJQYXRoKSkge1xuICAgICAgICAgICAgICAgIC8vIE9wZW4gZmlyc3QgbGV2ZWwgY2hpbGRyZW4gYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cC1zZWxlY3Rvcl9fZ3JvdXAtLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlID0gYXBwZW5kQ2hpbGRyZW5Gb3JNb2RlKGNoaWxkTGlzdEl0ZW0sIGN1cnJUZXh0LCBjdXJyUGF0aCwgcGFyZW50Q2hlY2tlZFN0YXRlKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250YWluZXIgcmVhZHkgdG8gYmUgcG9wdWxhdGVkIHdpdGggdGhlIGNoaWxkIG5vZGVzXG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgY2hpbGRMaXN0LmNsYXNzTGlzdC5hZGQoXCJncm91cC1zZWxlY3Rvcl9fbGlzdFwiKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRMaXN0KTtcbiAgICAgICAgICAgIGVsZW1lbnRUb0FkZFRvLmFwcGVuZENoaWxkKGNoaWxkTGlzdEl0ZW0pO1xuICAgICAgICAgICAgLy8gQ2FsbCByZWN1cnNpdmVseSB3aXRoIHVwZGF0ZWQgcGFyYW1zIGZvciBlYWNoIGNoaWxkIG5vZGVcblxuICAgICAgICAgICAgZm9yICh2YXIgY2tfaT0wOyBja19pIDwgY2hpbGRLZXlzLmxlbmd0aDsgY2tfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGRLZXlzW2NrX2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkS2V5ICE9PSAnQWxsIGNvbnRhY3RzJykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q2hpbGRLZXlzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJQYXRoICsgXCJcXFxcXCIgKyBjaGlsZEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hpbGRLZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hlY2tlZFN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBpbml0aWFsIGNhbGwgb2YgdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvbiBzdGFydGluZyBhdCB0aGUgcm9vdC5cbiAgICBkaXNwbGF5Q2hpbGRLZXlzKFwiQWxsIENvbnRhY3QgR3JvdXBzXCIsIFwiXCIsIHN0cnVjdHVyZVtcIlxcXFxcIl0sIHRyZWVDb250YWluZXIsIDEsIGZhbHNlKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIHNlbGVjdCBsaXN0IHdpdGggdGhlIG5ldyB0cmVlXG4gICAgZ3JvdXBTZWxlY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodHJlZUNvbnRhaW5lciwgZ3JvdXBTZWxlY3QpO1xuXG4gICAgdHJlZUNvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcblxuICAgIHRyYW5zZmVyVmFsdWVzKCk7XG5cbn0pKFwiI0dyb3VwXCIsIHVzZUNoZWNrYm94ZXMsIHVzZVNpbmdsZVNlbGVjdENoZWNrYm94KTtcbn1cbiIsIi8qKlxuICogIFVTQUdFOiBUbyB1c2UgdGhpcyBjb250cm9sIHlvdSBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZSB0byB0aGUgYnV0dG9uIHRoYXQgc2hvdWxkIGJlIGRvaW5nIHRoZSBzaG93IGFsbC5cbiAqIFxuICogIGRhdGEtc2hvd2FsbC10YWJsZS1pZD1cIjw8aWQgb2YgdGFibGUgdG8gYmUgZWZmZWN0ZWQ+PlwiXG4gKiBcbiAqICBPUFRJT05BTDogVXNlIHRoZSBmb2xsb3dpbmcgYXR0cnRpYnV0ZXMgdG8gYWRqdXN0IHRoZSBiZWhhdmlvclxuICogXG4gKiAgZGF0YS1zaG93YWxsLWl0ZW0tbGltaXQ9XCIyMFwiIC0gc2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgaW5pdGlhbGx5LiAgRGVmYXVsdCBpcyAxMFxuICogIFxuICovXG5cbnZhciBzaG93TW9yZVRhYmxlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLXNob3dhbGwtdGFibGUtaWRdJyk7XG5cbnNob3dNb3JlVGFibGVCdXR0b25zLmZvckVhY2goc2hvd0FsbEJ1dHRvbiA9PiB7XG4gIHZhciB0YWJsZUlkID0gc2hvd0FsbEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3dhbGwtdGFibGUtaWRcIik7XG5cbiAgdmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFibGVJZCk7XG4gIGlmICh0YWJsZSkge1xuXG4gICAgdmFyIGRlZmF1bHRJdGVtTGltaXQgPSAxMDsgICAgXG4gICAgdmFyIHBhc3NlZEl0ZW1MaW1pdCA9IHNob3dBbGxCdXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93YWxsLWl0ZW0tbGltaXRcIik7XG4gICAgdmFyIHBhcnNlZEl0ZW1MaW1pdCA9IHBhcnNlSW50KHBhc3NlZEl0ZW1MaW1pdCwgMTApO1xuICAgIHZhciBsaW1pdFRvVXNlID0gaXNOYU4ocGFyc2VkSXRlbUxpbWl0KSA/IGRlZmF1bHRJdGVtTGltaXQgOiBwYXJzZWRJdGVtTGltaXQ7XG4gICAgXG4gICAgLy8gV2UgZG9udCB3YW50IHRoZSBoZWFkZXJzXG4gICAgdmFyIHRhYmxlQm9keSA9IHRhYmxlLnRCb2RpZXNbMF07XG4gICAgaWYgKCF0YWJsZUJvZHkpIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgdGFibGVCb2R5TGVuZ3RoID0gdGFibGVCb2R5LnJvd3MubGVuZ3RoO1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAxLCBib2R5Um93OyBib2R5Um93ID0gdGFibGVCb2R5LnJvd3NbaS0xXTsgaSsrKSB7XG4gICAgICBpZiAoaSA+IGxpbWl0VG9Vc2UpIHtcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhYmxlQm9keUxlbmd0aCA8PSBsaW1pdFRvVXNlKSB7IHNob3dBbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9XG5cbiAgICBzaG93QWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsKSA9PiB7XG4gICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBBcnJheS5mcm9tKHRhYmxlQm9keS5yb3dzKS5mb3JFYWNoKGZ1bmN0aW9uKGJvZHlSb3cpIHtcbiAgICAgICAgYm9keVJvdy5zdHlsZS5kaXNwbGF5ID0gXCJ0YWJsZS1yb3dcIjtcbiAgICAgIH0pO1xuXG4gICAgICBlbC50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIi8qKioqKiogXG5cbiAgQ3JlYXRlcyBhIHRhZyBsaXN0IGZyb20gYSBzZWxlY3QgZWxlbWVudFxuXG4gIHVzYWdlOlxuXG4gIG5ldyBTZWxlY3RMaXN0VGFnKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jKS5cblxuICAtIHNlbGVjdElkIChyZXF1aXJlZCk6IFRoZSBpZCBvZiB0aGUgc2VsZWN0IGVsZW1lbnQgYWN0aW5nIGFzIHRoZSBzb3VyY2UgKG11c3QgaGF2ZSBtdWx0aXBsZSBhdHRyaWJ1dGUsIGFuZCBhbGwgaXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhcyBzZWxlY3RlZClcblxuICAtIHJldmVydEdyb3VwcyAob3B0aWlvbmFsKTogVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBjbGlja2VkIHRvIHJldmVydCBzZWxlY3RlZCBvcHRpb25zIChzaG91bGQgaGF2ZSBpcy1oaWRkZW4gY2xhc3MgdG8gc3RhcnQpXG5cbiAgLSBvblVwZGF0ZUZ1bmMgKHJlcXVpcmVkKTogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIHRhZyBoYXMgYmVlbiByZW1vdmVkLCBvciBvcHRpb25zIGFyZSByZXZlcnRlZC4uIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0d28gcGFyYW1zLCBzZWxlY3RlZE9wdGlvbnMgYW5kIGFsbE9wdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgaW50ZW5kZWQgdG8gbWFrZSB0aGUgY29udHJvbCBtb3JlIGZsZXhpYmxlIGkuZS4gb3VyIGZpcnN0IHVzYWdlIGlzIHRvIHVwZGF0ZSBsYWJlbCB3aXRoIHNlbGVjdGVkIGl0ZW1zIHRleHQgZWxzZXdoZXJlIG9uIHBhZ2Ugd2l0aG91dCBmdXJ0aGVyIGNvdXBsaW5nLlxuXG4qKioqKiovXG5jbGFzcyBTZWxlY3RMaXN0VGFncyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdElkLCByZXZlcnRHcm91cHNJZCwgb25VcGRhdGVGdW5jID0gKCkgPT4ge30pIHtcbiAgICAgIHRoaXMub25VcGRhdGVGdW5jID0gb25VcGRhdGVGdW5jO1xuXG4gICAgICB0aGlzLnRhZ09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCk7XG4gICAgICB0aGlzLnRhZ09wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgICBcbiAgICAgIHRoaXMucmV2ZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmV2ZXJ0R3JvdXBzSWQpO1xuICAgICAgdGhpcy5yZXZlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy50YWdPcHRpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25zLmZvckVhY2gobyA9PiBvLnNlbGVjdGVkID0gdHJ1ZSk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IFsuLi50aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldO1xuICAgICAgaWYgKHRoaXMuYWxsT3B0aW9ucy5zb21lKG8gPT4gIW8uc2VsZWN0ZWQpKSB7XG4gICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgICBcbiAgICAgIHRoaXMudGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUudGFyZ2V0Lm1hdGNoZXMoJ2knKSkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldFZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsO1xuICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLnRhZ09wdGlvbnMucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyt0YXJnZXRWYWwrJ1wiXScpO1xuICAgICAgICAgICAgICBpZihvKXtcbiAgICAgICAgICAgICAgICAgIG8uc2VsZWN0ZWQgPSBmYWxzZTsgICBcbiAgICAgICAgICAgICAgICAgIHRoaXMucmV2ZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyAgICAgIFxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVRhZ3MoKTtcbiAgICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWdPcHRpb25zLmFmdGVyKHRoaXMudGFncyk7XG5cbiAgICAgIHRoaXMucG9wdWxhdGVUYWdzKCk7XG4gIH1cblxuICBwb3B1bGF0ZVRhZ3MoKSB7XG4gICAgICB0aGlzLnRhZ3MuaW5uZXJIVE1MID0gJyc7ICAgICAgXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFsbE9wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCk7XG4gICAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgdGhpcy50YWdzLmFwcGVuZENoaWxkKHRoaXMubWFrZVRhZyh0LmlubmVyVGV4dCwgdC52YWx1ZSkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9uVXBkYXRlRnVuYyhzZWxlY3RlZE9wdGlvbnMsIHRoaXMuYWxsT3B0aW9ucyk7XG4gICAgfVxuXG4gIG1ha2VUYWcodGV4dCwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICBpLmNsYXNzTGlzdC5hZGQoXCJidXR0b25fX2ljb25cIik7ICAgICAgXG4gICAgICBpLmRhdGFzZXQudmFsPXZhbHVlO1xuICAgICAgaS5pbm5lclRleHQgPSBcImNsZWFyXCJcblxuICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YWcuY2xhc3NMaXN0LmFkZCgndGFnJyk7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGkpO1xuICAgICAgXG4gICAgICByZXR1cm4gdGFnO1xuICAgIH07XG59XG5cbi8vIFNob3VsZCBoYXZlIGEgc2VjdGlvbiBsaWtlIHRoaXMgZm9yIGVhY2ggcGFnZSB0aGUgY29udHJvbCBpcyB1c2VkIG9uLCB1bmxlc3Mgd2Ugd2FudCBpdCBiZWhhdmUgZXhhY3RseSB0aGUgc2FtZSBhcyBhIHByZXZpb3VzIHZlcnNpb24gKGluY2x1ZGluZyBpZHMgYW5kIHVwZGF0ZSBmdW5jdGlvbikgXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicpKSB7XG5cbiAgLy8gUHJlcGFyZSBhbiB1cGRhdGUgZnVuY3Rpb24gaWYgcmVxdWlyZWQgKG9wdGlvbmFsIHBhcmFtZXRlcilcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZXNwb25zZUdyb3Vwc0xhYmVsU3BhbicpO1xuICBjb25zdCBvblVwZGF0ZUZ1bmMgPSAoc2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcGx1cmFsaXNlZEdyb3VwcyA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnZ3JvdXAnIDogJ2dyb3Vwcyc7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBgU2VuZCB0byAke3NlbGVjdGVkT3B0aW9ucy5sZW5ndGh9IHJlc3BvbnNlICR7cGx1cmFsaXNlZEdyb3Vwc31gO1xuICB9XG5cbiAgLy8gSW5pdGlhbGlzZSBhbiBpbnN0YW5jZSBvZiB0aGUgY29udHJvbFxuICBuZXcgU2VsZWN0TGlzdFRhZ3MoJ0ZvbGxvd3VwR3JvdXBTZWxlY3RvcicsICdyZXZlcnRfZ3JvdXBzJywgb25VcGRhdGVGdW5jKTsgXG59XG4iLCJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlcycpICE9bnVsbCkge1xuXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICAgIHZhciByZXNwb25zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzcG9uc2UtZmllbGQnKTtcbiAgICAgICAgdmFyIGtleUFycmF5ID0gT2JqZWN0LmtleXMocmVzcG9uc2VzKTtcbiAgICAgICAgdmFyIGFkZFJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRfcmVzcG9uc2VcIik7XG5cbiAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkUmVzcG9uc2VCdXR0b24uYmx1cigpO1xuICAgICAgICAgICAgYWRkUmVzcG9uc2UoKTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGtleUFycmF5LmZvckVhY2goZnVuY3Rpb24oa2V5KXtcblxuICAgICAgICAgICAgcmVzcG9uc2VzW2tleV0uc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGtleSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZXNba2V5XS5xdWVyeVNlbGVjdG9yKFwiW2NsYXNzfj0ncmVzcG9uc2Utb3B0aW9uJ11cIikudmFsdWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0ucXVlcnlTZWxlY3RvcihcIiNyZW1vdmVfcmVzcG9uc2VcIikgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlX3Jlc3BvbnNlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZXNwb25zZShrZXkpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKGtleSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3N+PSdyZXNwb25zZS1vcHRpb24nXVwiKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZFJlc3BvbnNlKHBhcnNlSW50KGtleSkgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFJlc3BvbnNlKGtleSkge1xuXG4gICAgICAgICAgICBrZXlBcnJheS5ldmVyeShmdW5jdGlvbihrZXkpe1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXNba2V5XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVJlc3BvbnNlKGtleSkge1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VzW2tleV0uc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJyAmJiByZXNwb25zZXNba2V5XS5kYXRhc2V0LmtleSA9PSBrZXkpIHtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocmVzcG9uc2VzW2tleV0pO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3N+PSdyZXNwb25zZS1vcHRpb24nXVwiKS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlc1trZXldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pKFwiI1Jlc3BvbnNlc1wiKTtcbn1cblxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFBob25lJykgIT1udWxsKSB7XG5cbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICAgICAgdmFyIGFkZFBob25lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gICAgICAgIHZhciBhZGRQaG9uZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUGhvbmVCdG5cIik7XG5cbiAgICAgICAgYWRkUGhvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG5cbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRQaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRQaG9uZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgfSlcblxuICAgIH0pKFwiYWRkUGhvbmVcIik7XG5cbn1cblxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEVtYWlsJykgIT1udWxsKSB7XG5cbiAgICAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICAgICAgdmFyIGFkZEVtYWlsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gICAgICAgIHZhciBhZGRFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRW1haWxCdG5cIik7XG5cbiAgICAgICAgYWRkRW1haWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XG5cbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRFbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5ibHVyKCk7XG4gICAgICAgICAgICBhZGRFbWFpbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgfSk7XG4gICAgfSkoXCJhZGRFbWFpbFwiKTtcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9ncm91cCcpICE9bnVsbCkge1xuXG4gICAgKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgICAgIHZhciBhZGRHcm91cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkX2dyb3VwXCIpO1xuXG4gICAgICAgIGFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuXG4gICAgICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2dyb3VwJykgIT1udWxsKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2F2ZUdyb3VwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlX2dyb3VwXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNhdmVHcm91cEJ1dHRvbiAhPW51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkoXCJhZGRfZ3JvdXBcIik7XG59XG5cbnZhciBncm91cFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJHcm91cFRleHRhcmVhXCIpO1xuXG5pZiAoZ3JvdXBUZXh0YXJlYSAhPSBudWxsKSB7XG4gICAgZ3JvdXBUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0MiA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcblxuICAgICAgICBpZiAodGFyZ2V0Mi5tYXRjaGVzKFwiLmJ1dHRvbl9faWNvblwiKSAmJiB0YXJnZXQyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wYXRoJykpIHtcblxuICAgICAgICAgICAgYWRkR3JvdXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmJsdXIoKTtcbiAgICAgICAgICAgIGFkZEdyb3VwQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfZ3JvdXAnKSAhPW51bGwpIHtcblxuICAgICAgICAgICAgICAgIHZhciBzYXZlR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVfZ3JvdXBcIik7XG4gICAgICAgICAgICAgICAgc2F2ZUdyb3VwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpICE9bnVsbCkge1xuXG4gICAgdmFyIGlucHV0RXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXQtdmFsaWRhdGlvbi1lcnJvcicpO1xuICAgIHZhciBpbnB1dEVycm9yc0FycmF5ID0gT2JqZWN0LmtleXMoaW5wdXRFcnJvcnMpO1xuXG4gICAgaW5wdXRFcnJvcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RXJyb3JzW2tleV0pO1xuICAgICAgICBpbnB1dEVycm9yc1trZXldLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xuXG4gICAgfSk7XG59XG4iLCIvLyAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbi8vICAgICB2YXIgZ3JvdXBUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiR3JvdXBUZXh0YXJlYVwiKTtcblxuLy8gICAgIGlmIChncm91cFRleHRhcmVhICE9PSBudWxsKSB7XG4vLyAgICAgICAgIGdyb3VwVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNpZGViYXJcIikuY2xhc3NMaXN0LmFkZChcImFzaWRlLS1hY3RpdmVcIik7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyB9KShcIiNTaWRlYmFyXCIpO1xuXG4iLCIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcblxuICAgIGlmIChtZW51KSB7XG5cbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xuICAgICAgICB2YXIgbWVudUNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51QnV0dG9uLmRhdGFzZXQudGFyZ2V0KTtcblxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0b3IgKyAnIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59KSgnI3NlYXJjaCcpO1xuXG4oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbiAgICAvL2dldCBkaXYgSUQgd2l0aG91dCAjXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC9eIy8sICcnKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhtZW51KTtcblxuICAgIGlmIChtZW51KSB7XG5cbiAgICAgICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJ0J1dHRvbicpO1xuICAgICAgICB2YXIgbWVudUNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51QnV0dG9uLmRhdGFzZXQudGFyZ2V0KTtcblxuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0b3IgKyAnIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIGVsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBtZW51Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgICAgIGlmICghbWVudS5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgICAgIG1lbnVDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59KSgnI21lbnUnKTsiLCIvKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLFxudG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBkcm9wZG93biBjb250ZW50ICovXG5cbi8vIGZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XG4vLyAgICB2YXIgYXNpZGVFeGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIik7XG4vLyAgICAgaWYoYXNpZGVFeGlzdCl7XG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNpZGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFzaWRlLS1hY3RpdmVcIik7XG4vLyB9XG4vLyB9XG5cbi8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcbiAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcbiAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG52YXIgYWRkR3JvdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9ncm91cFwiKTtcblxuaWYgKGFkZEdyb3VwQnV0dG9uKSB7XG5cbmFkZEdyb3VwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XG4gICAgfSlcbn1cblxudmFyIGNsb3NlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZV9zaWRlYmFyJyk7XG5cbmlmIChjbG9zZVNpZGViYXIpIHtcblxuY2xvc2VTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIHZhciB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAvLyBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAvLyAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBpZiAoIXguY2xhc3NMaXN0LmNvbnRhaW5zKCdhc2lkZS0tYWN0aXZlJykpIHtcbiAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdhc2lkZS0tYWN0aXZlJyk7XG4gICAgICAgIC8vIHkuY2xhc3NMaXN0LmFkZCgnbWFpbi0taGlkZGVuJyk7XG4gICAgICAvLyB9XG4gIH0gZWxzZSBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoJ2FzaWRlLS1hY3RpdmUnKSkge1xuICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLS1hY3RpdmUnKTtcbiAgICAgICAgLy8geS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1oaWRkZW4nKTtcbiAgICAgIC8vIH1cbiAgfVxuXG5cbn1cbiIsIi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4gICAgY29uc3Qgc25hY2tiYXJTdG9yYWdlSXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc25hY2tiYXInKTtcbiAgICBjb25zdCBzbmFja2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgICB2YXIgY29udGFjdFBhcmFtID0gdXJsUGFyYW1zLmdldCgnQ29udGFjdEFkZGVkJyk7XG4gICAgdmFyIE9yZ2FuaXNhdGlvblBhcmFtID0gdXJsUGFyYW1zLmdldCgnT3JnYW5pc2F0aW9uQWRkZWQnKTtcbiAgICB2YXIgc25hY2tiYXJNZXNzYWdlID0gJyc7XG5cbiAgICAvL2NoZWNrIGlmIGxvY2FsU3Ryb3JhZ2UgJ3NuYWNrYmFyJyBleGlzdHMgYW5kIGlmIGl0IGRvZXNudCBzZXR1cCBvYmplY3QgcmVhZHkgZm9yIGV2ZW50TGlzdGVuZXJcbiAgICBpZiAoc25hY2tiYXJTdG9yYWdlSXRlbSAhPT0gbnVsbCkge1xuXG4gICAgICAgIHZhciBzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkgPSBKU09OLnBhcnNlKHNuYWNrYmFyU3RvcmFnZUl0ZW0pO1xuXG4gICAgICAgIC8vY2hlY2sgaWYgbG9jYWxTdHJvcmFnZSAnc25hY2tiYXInIGFscmVhZHkgY29udGFpbnMgY3VycmVudCBwYWdlIHBhdGhcbiAgICAgICAgaWYgKHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMuaW5jbHVkZXMod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSkge1xuXG4gICAgICAgICAgICAvL2lmIGl0IGRvZXMgdGhlbiBoaWRlIHRoZSBzbmFja2JhclxuICAgICAgICAgICAgc25hY2tiYXIuY2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICB2YXIgc25hY2tiYXJTdG9yYWdlSXRlbUFycmF5ID0gIHtcbiAgICAgICAgICAgIGxvY2F0aW9ucyA6IG5ldyBBcnJheSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGFjdFBhcmFtID09PSAnVHJ1ZScpIHtcbiAgICAgICAgc25hY2tiYXJNZXNzYWdlID0gJ05ldyBjb250YWN0IGhhcyBiZWVuIGNyZWF0ZWQnO1xuXG4gICAgfSBlbHNlIGlmIChPcmdhbmlzYXRpb25QYXJhbSA9PT0gJ1RydWUnKSB7XG4gICAgICAgIHNuYWNrYmFyTWVzc2FnZSA9ICdOZXcgb3JnYW5pc2F0aW9uIGhhcyBiZWVuIGNyZWF0ZWQnO1xuXG4gICAgfSBlbHNlIGlmIChzbmFja2Jhcikge1xuICAgICAgICBzbmFja2Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZWwpIHtcblxuICAgICAgICAgICAgaWYgKCFzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkubG9jYXRpb25zLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcblxuICAgICAgICAgICAgICAgIHNuYWNrYmFyU3RvcmFnZUl0ZW1BcnJheS5sb2NhdGlvbnMucHVzaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc25hY2tiYXInLCBKU09OLnN0cmluZ2lmeShzbmFja2JhclN0b3JhZ2VJdGVtQXJyYXkpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmIChzbmFja2Jhck1lc3NhZ2UpIHtcbiAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LmFkZCgnc25hY2tiYXItLWFjdGl2ZScpO1xuICAgICAgICBzbmFja2Jhci5pbm5lckhUTUwgPSBzbmFja2Jhck1lc3NhZ2U7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgc25hY2tiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc25hY2tiYXItLWFjdGl2ZScpO1xuICAgICAgICB9LCAzNTAwKTtcbiAgICB9XG5cbn0pKFwiI3NuYWNrYmFyXCIpO1xuIiwiLy8gKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXG4vLyAgICAgLy9mdW5jdGlvbiB0byBtYWtlIHdob2xlIHRhYmxlIHRyIGNsaWNrYWJsZVxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHRyJykuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXG4vLyAgICAgICAgIGlmIChlbC5kYXRhc2V0LmhyZWYgIT1udWxsKSB7XG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuZGF0YXNldC5ocmVmO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcblxuLy8gfSkoXCJ0YWJsZVwiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=