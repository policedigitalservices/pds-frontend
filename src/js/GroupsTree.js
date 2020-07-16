 var groupExist = document.getElementById("Group");
    if(groupExist){

        var useCheckboxes = groupExist.hasAttribute('data-with-checkbox');
        var useSingleSelectCheckbox = groupExist.hasAttribute('data-with-single-select-checkbox');
        var lockRootNode = groupExist.hasAttribute('data-lock-root');

(function (selector, useCheckboxes, useSingleSelectCheckbox) {

    //Check on page whether Group Multi Select exists
    var intiallySelectedNodes = [];
    var groupSelect = document.getElementById("GroupSelector");
    var groupTextarea = document.getElementById("GroupTextarea");

    // If the Group Multi Select does exist, hide it (if JS enabled)
    if (groupSelect !== null) {
        groupSelect.parentElement.classList.add("is-hidden");
        groupTextarea.parentElement.classList.remove("is-hidden");

        // Grab all the items that should be selected
        var selectedOptionsNodes = groupSelect.querySelectorAll('option:checked');
        
        for (var i = 0; i < selectedOptionsNodes.length; i++){ 
           intiallySelectedNodes.push(selectedOptionsNodes[i].value || "\\");   
        }
    };

    if (groupTextarea !== null) {
        groupTextarea.addEventListener('click', function(e) {
            var target = e.target;

            if (target.matches(".tag>.button__icon") && target.hasAttribute('data-path')) {
                var pathToUncheck = target.getAttribute("data-path").replace(/\\/g, "\\\\");
                var cbSelector = 'input[type=checkbox].GroupItem[value="'+pathToUncheck+'"]';
                var checboxToUncheck = document.querySelector(cbSelector);
                if (checboxToUncheck) {
                    checboxToUncheck.click();
                }
            }
        });
    }

    var searchParts = (function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    })();

    var pagePath = window.location.origin + window.location.pathname + "?group=";
    var groupParam = searchParts.group;
    var searchParam = searchParts.Search;

    // Function to build the path
    function getPagePathForGroup(group) {
      var grp = group === "" ? "\\" : group;
      return pagePath + grp;
    }

    // Function to check if the node being add should be open i.e. to reveal the currently selected group
    function shouldParentBeOpen(path) {
        if (!groupParam) {
            return false;
        }
        var pathToCheck = (path + "\\");
        return groupParam.startsWith(pathToCheck) && groupParam != pathToCheck;
    }

    // Function to check if the node being added is the currentlySelectedGroup
    function isSelectedGroup(path) {
        var paramsToCheck = groupParam || "\\";
        var pathToCheck = (path || "\\").replace(/ /g, '%20');

        return paramsToCheck === pathToCheck;
    }

    // Helper function to build link for the group
    function buildLink(text, path) {
        var link = document.createElement("a");
        link.textContent = text;
        link.href = getPagePathForGroup(path);
        link.classList.add("group-selector__link");

        // NB.  Originally we didnt want the current class to be added if doing a search, but think we do now.
        // if ((!searchParam) &&  isSelectedGroup(path)) {
        // if (isSelectedGroup(path)) {
        //     link.classList.add("group-selector__link--current");
        // }
        return link;
    }

    // Helper function to build checkbox label for the group
    function buildCheckbox(text, path, parentChecked) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("class", "GroupItem");
        checkbox.name = text;
        checkbox.value = path;
        checkbox.id = text;
        var newParentSelected = parentChecked;

        if (path === '' && lockRootNode) {
            // In this mode the root node should be disabled and checked BUT the children of this node should act as though it isnt checked so we dont update the selected state
            checkbox.checked = true;
            checkbox.disabled = true;
        } else if (parentChecked && !useSingleSelectCheckbox) {
            // If a parent node is selected all its children should be disabled and unchecked
            checkbox.checked = false;
            checkbox.disabled = true;
        }
        else {
            // If a parent node is not checked its children selected state depend on the childs value, and not be disabled
            var newChecked = intiallySelectedNodes.indexOf(path || '\\') >= 0;
            checkbox.checked = newChecked;
            newParentSelected = newChecked;
        }
        
        // Style as a radio button
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

        return {checkbox, newParentSelected};
    }

    // Helper function to build checkbox for the group
    function buildCheckboxLabel(text, path) {
        var checkboxLabel = document.createElement('label');
        checkboxLabel.innerHTML = text;
        checkboxLabel.for = text;
        checkboxLabel.setAttribute("for", text);

        return checkboxLabel;
    }

    function transferValues() {
        var data = [];

        var elems= document.querySelectorAll('.GroupItem')

            for (var i=0;i<elems.length;i++) {

                if (lockRootNode && !(elems[i].value)) {
                    // No-operation
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

            var existingOptionValues = Array.from(element.options).map(opt => opt.value);

            for (var data_i = 0; data_i < data.length; data_i++){
                var data_current = data[data_i];
                textarea.innerHTML = textarea.innerHTML + '<div class="tag">' + data_current.substring(1) + '<i class="button__icon" data-path="'+ data_current +'">clear</i></div>';

                // Ensure the option exists - add it if not
                if (existingOptionValues.indexOf(data_current) < 0) {
                    var newOption = document.createElement('option');
                    newOption.selected = true;
                    newOption.value = data_current;
                    newOption.innerText = data_current;""
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
                forEachCheckboxExcludingCurrent(checkbox, allGroupCheckboxes, function(checkboxToUpdate) {
                    checkboxToUpdate.checked = false;
                });
            } 
            else {
                e.preventDefault();
                checkbox.checked = true;
            }
        }
        else if (parentLi.classList.contains('group-selector__group--parent')){

            
            var childCheckboxes = parentLi.querySelectorAll('input[type=checkbox');
            if (checkbox.checked) {
                forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, function(checkboxToUpdate) {
                    checkboxToUpdate.disabled = true;
                    checkboxToUpdate.checked = false;
                });
            } else {
                forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, function(checkboxToUpdate) {
                    checkboxToUpdate.disabled = false;
                });
            }
        }
    }

    // Grab the select list and all of its options
    var groupSelect = document.querySelector(selector);
    var options = groupSelect.querySelectorAll("option");

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "Group");
    hiddenField.value = groupParam || '\\';

    // Create the base collections with starting key for the root.
    var structure = { "\\": {} };

    // Build on the base structure by looping through each select item.
    for (var option_i=0; option_i<options.length; option_i++) {

        var option = options[option_i];

        if (option.textContent !== "") {
            // Seperate the group name into all its path segments
            var segments = option.textContent.split("\\");
            // Start at the root element.
            var nodeToCheck = structure["\\"];

            // For each segment ensure that all levels of the structure are in place.
            for (var segment_i=0; segment_i<segments.length; segment_i++) {

                var seg = segments[segment_i];

                if (seg !== "") {
                    if (!nodeToCheck[seg]) {
                        nodeToCheck[seg] = {};
                    }
                    nodeToCheck = nodeToCheck[seg];
                }
            }
        }
    }

    // The base element that will be populated
    var treeContainer = document.createElement("ul");
    treeContainer.classList.add("group-selector__list");
    treeContainer.classList.add("group-selector__list--root");


    // Handle all the clicks at the parent level
    treeContainer.addEventListener("click", function (e) {
        var target = e.target;

        // Handle checkbox items being selected.
        if (target.matches('input[type=checkbox]')) {
            handleCheckboxClick(e, target);
        }

        transferValues();

        // We only care about clicks on elements that are parents
        if (target.matches(".group-selector__group--parent")) {
            // If an open parent item is clicked, close it, but also all its open descendants.
            if (target.classList.contains("group-selector__group--active")) {
                target.classList.remove("group-selector__group--active");
                var activeChildren = target.querySelectorAll(
                    ".group-selector__group--active"
                );

                for (var ac_i=0; ac_i<activeChildren.length; ac_i++) {
                    var activeChild = activeChildren[ac_i];
                    activeChild.classList.remove("group-selector__group--active");
                }
            }
            // Open any closed parents that are clicked.
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
                childListItem.classList.add(
                    "group-selector__group--active"
                );
            }

            parentCheckedState = appendChildrenForMode(childListItem, currText, currPath, parentCheckedState);

            // Create the container ready to be populated with the child nodes
            var childList = document.createElement("ul");
            childList.classList.add("group-selector__list");
            childListItem.appendChild(childList);
            elementToAddTo.appendChild(childListItem);
            // Call recursively with updated params for each child node

            for (var ck_i=0; ck_i < childKeys.length; ck_i++) {
                var childKey = childKeys[ck_i];

                if (childKey !== 'All contacts') {
                    displayChildKeys(
                            childKey,
                            currPath + "\\" + childKey,
                            obj[childKey],
                            childList,
                            level + 1,
                            parentCheckedState 
                        );
                    }
            }

        }
    }

    // The initial call of the recursive function starting at the root.
    displayChildKeys("All Contact Groups", "", structure["\\"], treeContainer, 1, false);

    // Replace the select list with the new tree
    groupSelect.parentNode.replaceChild(treeContainer, groupSelect);

    treeContainer.parentNode.appendChild(hiddenField);

    transferValues();

})("#Group", useCheckboxes, useSingleSelectCheckbox);
}
