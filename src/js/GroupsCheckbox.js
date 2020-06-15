﻿
(function (selector) {

    //Check on page whether Group Multi Select exists
    var groupSelect = document.getElementById("GroupSelector");
    var groupTextarea = document.getElementById("GroupTextarea");

    // If the Group Multi Select does exist, hide it (if JS enabled)
    if (groupSelect !== null) {
        groupSelect.parentElement.classList.add("is-hidden");
        groupTextarea.parentElement.classList.remove("is-hidden");
    };


    // Fetch the base path that the selected group will be appended to
    var pagePath = (function () {
        var url = new URL(window.location.href);
        return url.origin + url.pathname + "?group=";
    })();

    // Fetch the currently selected group from the url
    var groupParam = (function () {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("group");
    })();

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
        var pathToCheck = path + "\\";
        return groupParam.startsWith(pathToCheck) && groupParam != pathToCheck;
    }

    // Function to check if the node being add is the currentlySelectedGroup
    function isSelectedGroup(path) {
        var paramsToCheck = groupParam || "\\";
        var pathToCheck = path + "\\";
        return paramsToCheck === pathToCheck;
    }

    // Helper function to build link for the group
    function buildCheckbox(text, path) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("class", "GroupItem");
        checkbox.name = text;
        checkbox.value = path;
        // checkbox.value = text;
        checkbox.id = text;

        return checkbox;
    }

    // Helper function to build link for the group
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

                if (elems[i].checked) {

                    data.push(elems[i].value);
                }
            }

            populateGroupField(data);

            // return data;
    }

    function populateGroupField(data) {
        var textarea = document.getElementById("GroupTextarea");
        textarea.innerHTML = '';
        console.log(data);

        for(var i = 0; i < data.length; i++){
    textarea.innerHTML = textarea.innerHTML + '<div class="tag">' + data[i].substring(1) + '<i class="button__icon">clear</i></div>';
}
//         var messages = map(data, function(item){
//     return '<li>' + item + '</li>';
// });


        // textarea.innerHTML = data.join(", ");




        var element = document.getElementById('GroupSelector'); //Change to the id of the select
        // if (element)
        // {
            for (var i = 0; i < element.options.length; i++) {
                element.options[i].selected = data.indexOf(element.options[i].value) >= 0;

            }
            // for (var i = 0; i < select.options.length; i++)
            // {
            //     //Select options matching array values, unselect others
            //     select.options[i].selected = in_array(select.options[i].value, data, false);
            // }
        // }




    }

    // Grab the select list and all of its options
    var groupSelect = document.querySelector(selector);
    // console.log(groupSelect);
    var options = groupSelect.querySelectorAll("option");

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "Group");
    hiddenField.value = groupParam || '\\';

    // Create the base collections with starting key for the root.
    var structure = { "\\": {} };

    // Build on the base structure by looping through each select item.
    options.forEach(function (option) {
        if (option.textContent !== "") {
            // Seperate the group name into all its path segments
            var segments = option.textContent.split("\\");
            // Start at the root element.
            var nodeToCheck = structure["\\"];

            // For each segment ensure that all levels of the structure are in place.
            segments.forEach(function (seg) {
                if (seg !== "") {
                    if (!nodeToCheck[seg]) {
                        nodeToCheck[seg] = {};
                    }
                    nodeToCheck = nodeToCheck[seg];
                }
            });
        }
    });

    // The base element that will be populated
    var treeContainer = document.createElement("ul");
    treeContainer.classList.add("group-selector__list");

    // Handle all the clicks at the parent level
    treeContainer.addEventListener("click", function (e) {
        var target = e.target;

        transferValues();

        // We only care about clicks on elements that are parents
        if (target.matches(".group-selector__group--parent")) {
            // If an open parent item is clicked, close it, but also all its open descendants.
            if (target.classList.contains("group-selector__group--active")) {
                target.classList.remove("group-selector__group--active");
                var activeChildren = target.querySelectorAll(
                    ".group-selector__group--active"
                );
                activeChildren.forEach(function (activeChild) {
                    activeChild.classList.remove("group-selector__group--active");
                });
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
    function displayChildKeys(currText, currPath, obj, elementToAddTo, level) {
        var childKeys = Object.keys(obj);

        if (!childKeys.length) {
            // This is at the bottom i.e. no children to process

            // Create the link to refresh page with selected node.
            var childListItemCheckbox = buildCheckbox(currText, currPath);
            var childListItemLabel = buildCheckboxLabel(currText, currPath);

            // Add the link into an li, and append to the parent container
            var childListItem = document.createElement("li");
            childListItem.classList.add("group-selector__group");
            childListItem.appendChild(childListItemLabel);
            childListItem.appendChild(childListItemCheckbox);
            elementToAddTo.appendChild(childListItem);
        } else {
            // This node has children to process

            // Create the link to refresh page with selected node.
            var childListItemWithChildrenCheckbox = buildCheckbox(currText, currPath);
            var childListItemWithChildrenLabel = buildCheckboxLabel(currText, currPath);

            // Create the li with the link contained
            var childListItemWithChildren = document.createElement("li");
            childListItemWithChildren.classList.add(
                "group-selector__group",
                "group-selector__group--parent"
            );

            if (level === 1 || shouldParentBeOpen(currPath)) {
                // Open first level children by default
                childListItemWithChildren.classList.add(
                    "group-selector__group--active"
                );
            }

            childListItemWithChildren.appendChild(childListItemWithChildrenLabel);
            childListItemWithChildren.appendChild(childListItemWithChildrenCheckbox);

            // Create the container ready to be populated with the child nodes
            var childList = document.createElement("ul");
            childList.classList.add("group-selector__list");
            childListItemWithChildren.appendChild(childList);
            elementToAddTo.appendChild(childListItemWithChildren);
            // Call recursively with updated params for each child node
            childKeys.forEach(function (childKey) {
                displayChildKeys(
                    childKey,
                    currPath + "\\" + childKey,
                    obj[childKey],
                    childList,
                    level + 1
                );
            });
        }
    }

    // The initial call of the recursive function starting at the root.
    displayChildKeys("\\", "", structure["\\"], treeContainer, 1);

    // Replace the select list with the new tree
    groupSelect.replaceWith(treeContainer);
    treeContainer.parentNode.appendChild(hiddenField);

})("#GroupCheckboxes");