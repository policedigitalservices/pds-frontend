 var groupExist = document.getElementById("Group");
    if(groupExist){

        var useCheckboxes = groupExist.hasAttribute('data-with-checkbox');

(function (selector, useCheckboxes) {

    //Check on page whether Group Multi Select exists
    var groupSelect = document.getElementById("GroupSelector");
    var groupTextarea = document.getElementById("GroupTextarea");

    // If the Group Multi Select does exist, hide it (if JS enabled)
    if (groupSelect !== null) {
        groupSelect.parentElement.classList.add("is-hidden");
        groupTextarea.parentElement.classList.remove("is-hidden");
    };

    var searchParts = (function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        console.log(parts);
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
        var pathToCheck = path + "\\";
        return groupParam.startsWith(pathToCheck) && groupParam != pathToCheck;
    }

    // Function to check if the node being added is the currentlySelectedGroup
    function isSelectedGroup(path) {
        var paramsToCheck = groupParam || "\\";
        var pathToCheck = path || "\\";
        return paramsToCheck === pathToCheck;
    }

    // Helper function to build link for the group
    function buildLink(text, path) {
        var link = document.createElement("a");
        link.textContent = text;
        link.href = getPagePathForGroup(path);
        link.classList.add("group-selector__link");

        // We dont want the current class to be added if doing a search
        if ((!searchParam) &&  isSelectedGroup(path)) {
            link.classList.add("group-selector__link--current");
        }
        return link;
    }

    // Helper function to build checkbox label for the group
    function buildCheckbox(text, path) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("class", "GroupItem");
        checkbox.name = text;
        checkbox.value = path;
        checkbox.id = text;

        return checkbox;
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

                if (elems[i].checked) {

                    data.push(elems[i].value);
                }
            }

            populateGroupField(data);
    }
    
    function populateGroupField(data) {
        var textarea = document.getElementById("GroupTextarea");
        textarea.innerHTML = '';

        for (var i = 0; i < data.length; i++){
            textarea.innerHTML = textarea.innerHTML + '<div class="tag">' + data[i].substring(1) + '<i class="button__icon">clear</i></div>';
        }

        var element = document.getElementById('GroupSelector'); //Change to the id of the select

            for (var i = 0; i < element.options.length; i++) {
                element.options[i].selected = data.indexOf(element.options[i].value) >= 0;

            }
    }

    function appendChildrenForMode(parent, text, path) {
        if (useCheckboxes) {
            parent.appendChild(buildCheckboxLabel(text, path));
            parent.appendChild(buildCheckbox(text, path));
        } else {
            // Create the link to refresh page with selected node.
            parent.appendChild(buildLink(text, path));
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
    function displayChildKeys(currText, currPath, obj, elementToAddTo, level) {
        var childKeys = Object.keys(obj);

        if (!childKeys.length) {
            // This is at the bottom i.e. no children to process

            // Add the link into an li, and append to the parent container
            var childListItem = document.createElement("li");
            childListItem.classList.add("group-selector__group");
            
            appendChildrenForMode(childListItem, currText, currPath);
            
            elementToAddTo.appendChild(childListItem);

        } else {
            // This node has children to process

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

            appendChildrenForMode(childListItemWithChildren, currText, currPath);

            // Create the container ready to be populated with the child nodes
            var childList = document.createElement("ul");
            childList.classList.add("group-selector__list");
            childListItemWithChildren.appendChild(childList);            
            elementToAddTo.appendChild(childListItemWithChildren);
            // Call recursively with updated params for each child node
          
            for (var ck_i=0; ck_i < childKeys.length; ck_i++) {
                var childKey = childKeys[ck_i];

                if (childKey !== 'All contacts') {
                    displayChildKeys(
                            childKey,
                            currPath + "\\" + childKey,
                            obj[childKey],
                            childList,
                            level + 1
                        );
                    }
            }
          
        }
    }

    // The initial call of the recursive function starting at the root.
    displayChildKeys("All Contact Groups", "", structure["\\"], treeContainer, 1);

    // Replace the select list with the new tree
    groupSelect.parentNode.replaceChild(treeContainer, groupSelect);

    treeContainer.parentNode.appendChild(hiddenField);

})("#Group", useCheckboxes);
}
