 var groupExist = document.getElementById("Group");
    if(groupExist){

(function (selector) {
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

    // Fetch the currently selected search criteria from the url
    var searchParam = (function () {
      var urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("Search");
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
            var childListItemLink = buildLink(currText, currPath);

            // Add the link into an li, and append to the parent container
            var childListItem = document.createElement("li");
            childListItem.classList.add("group-selector__group");
            childListItem.appendChild(childListItemLink);
            elementToAddTo.appendChild(childListItem);
        } else {
            // This node has children to process

            // Create the link to refresh page with selected node.
            var childListItemWithChildrenLink = buildLink(currText, currPath);

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
            childListItemWithChildren.appendChild(childListItemWithChildrenLink);

            // Create the container ready to be populated with the child nodes
            var childList = document.createElement("ul");
            childList.classList.add("group-selector__list");
            childListItemWithChildren.appendChild(childList);
            elementToAddTo.appendChild(childListItemWithChildren);
            // Call recursively with updated params for each child node
          childKeys.forEach(function (childKey) {
            if (childKey !== 'All contacts') {
              displayChildKeys(
                    childKey,
                    currPath + "\\" + childKey,
                    obj[childKey],
                    childList,
                    level + 1
                );
            }

            });
        }
    }

    // The initial call of the recursive function starting at the root.
    displayChildKeys("All Contact Groups", "", structure["\\"], treeContainer, 1);

    // Replace the select list with the new tree
    groupSelect.replaceWith(treeContainer);
    treeContainer.parentNode.appendChild(hiddenField);

})("#Group");
}
