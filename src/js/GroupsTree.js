 import {SeeAllHelper} from './SeeAllHelper';
 
/*
  TODO:  This could do with more refactoring.  This is too tangled up with the tags area.  
  These should be separate components that dont know about each other (except their public interfaces).  
  These should then be tied together on containing pages
*/

const treeviewDefaults = {
    sourceSelector: "#Group",
    useCheckboxes: false,
    useSingleSelectCheckbox: false,
    lockRootNode: false,
    destinationTagsSelector: "#GroupTextarea",
    destinationSelectSelector: "#GroupSelector",
    tagSelector: "#GroupTextarea > .tag",
    defaultOptionValue: "\\",
    seeAllCountLimit: 21,
    seeMoreGroupsSelector: "#seeMoreGroups",
    countFieldId: 'groupsCount',
    treeviewId: 'treeview-groups',
    isGroupsStructure: true,
};
export class TreeView { 
    constructor(options) {
        this._settings = {...treeviewDefaults, ...options};
        this._initiallySelectedNodes = [];
        this._sourceSelect = document.querySelector(this._settings.sourceSelector);
        this._destinationTags = document.querySelector(this._settings.destinationTagsSelector);
        this._destinationSelect = document.querySelector(this._settings.destinationSelectSelector);
        this._tagsSeeAllHelper = null;
        this._searchParts = null;
        this._treeContainer = null;
        this._pagePath = "";
        this._groupParam = "";
        this._searchParam = "";
        this._initialiseDestinationSelect();
        this._intiailiseDestinationTags();
        this._initialiseSearchParts();
        this._initialiseTreeView();
    }

    _initialiseDestinationSelect() {
        
        if (this._destinationSelect) {
            this._destinationSelect.parentElement.classList.add("is-hidden");
            this._destinationTags.parentElement.classList.remove("is-hidden");
            this._initiallySelectedNodes = Array.from(this._destinationSelect.querySelectorAll('option:checked')).map(option => option.value || this._settings.defaultOptionValue);
        }
    }

    _intiailiseDestinationTags() {
        if (this._destinationTags) {
    
            this._tagsSeeAllHelper  = new SeeAllHelper(this._settings.tagSelector, this._settings.seeMoreGroupsSelector, { itemLimit: this._settings.seeAllCountLimit, countFieldId: this._settings.countFieldId });
    
            this._destinationTags.addEventListener('click', e => {

                const target = e.target;
    
                if (target.matches(".tag>.button__icon") && target.hasAttribute('data-path')) {
                    const pathToUncheck = target.getAttribute("data-path").replace(/\\/g, "\\\\");
                    const cbSelector = `#${this._settings.treeviewId} input[type=checkbox].treeview__checkbox[value="${pathToUncheck}"]`;
                    const checboxToUncheck = document.querySelector(cbSelector);
                    if (checboxToUncheck) {
                        checboxToUncheck.click();
                    }
    
                    this._tagsSeeAllHelper.recalculate();
                }
            });
        }
    }

    _initialiseSearchParts() {
        const vars = {};
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m,key,value) => {
            vars[key] = value;
        });
        this._searchParts = {...vars};
        this._pagePath = window.location.origin + window.location.pathname + "?group=";
        this._groupParam = this._searchParts.group;
        this._searchParam = this._searchParts.Search;
    }

    _getPagePathForGroup(group) {
        const grp = group === "" ? "\\" : group;
        return this._pagePath + grp;
      }

    _shouldParentBeOpen(path) {
        if (!this._groupParam) {
            return false;
        }
        const pathToCheck = (path + "\\");
        return this._groupParam.startsWith(pathToCheck) && this._groupParam != pathToCheck;
    }

    _isSelectedGroup(path) {
        const paramsToCheck = decodeURIComponent(this._groupParam || "\\");
        const pathToCheck = (path || "\\");

        return paramsToCheck === pathToCheck;
    }

    _buildLink(text, path) {
        
        const link = document.createElement("a");

        link.innerHTML = `
            <span class='treeview__item-toggle'></span>
            <span class='treeview__item-content'>${text}</span>
        `;
        link.href = this._getPagePathForGroup(path);
        link.classList.add("treeview__item-link");

        return link;
    }

    _buildLabel(text, path, parentChecked) {

        let newParentSelected = parentChecked;

        const label = document.createElement('label');
        label.classList.add("treeview__item-label");
        const toggleSpan = document.createElement('span');
        toggleSpan.classList.add('treeview__item-toggle');
        const outerSpan = document.createElement('span');
        outerSpan.textContent = text;
        outerSpan.classList.add('treeview__item-content');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = text;
        checkbox.value = path;
        checkbox.id = text;
        outerSpan.appendChild(checkbox);
        outerSpan.appendChild(document.createElement('span'));
        if (this._settings.isGroupsStructure) {
            const toggleSpan = document.createElement('span');
            toggleSpan.classList.add('treeview__item-toggle');
            label.appendChild(toggleSpan);
        }
        
        label.appendChild(outerSpan);

        if (path === '\\' && this._settings.lockRootNode) {
            // In this mode the root node should be disabled and checked BUT the children of this node should act as though it isnt checked so we dont update the selected state
            checkbox.checked = true;
            checkbox.disabled = true;
        } else if (parentChecked && !this._settings.useSingleSelectCheckbox) {
            // If a parent node is selected all its children should be disabled and unchecked
            checkbox.checked = false;
            checkbox.disabled = true;
        }
        else {
            // If a parent node is not checked its children selected state depend on the childs value, and not be disabled
            const newChecked = this._initiallySelectedNodes.indexOf(path || '\\') >= 0;
            checkbox.checked = newChecked;
            newParentSelected = newChecked;
        }

        checkbox.classList.add('treeview__checkbox');

        if (this._settings.useSingleSelectCheckbox) {
            checkbox.classList.add('treeview__checkbox--radio');
        }

        return {label, newParentSelected};
    }

    _transferValues() {
        
        const elems = Array.from(document.querySelectorAll(`#${this._settings.treeviewId} .treeview__checkbox`));

        const data = elems.reduce((prev, currentElem) => {
            if ((this._settings.lockRootNode && !(currentElem.value)) || !currentElem.checked) return prev;        

            return {
                ...prev, 
                [currentElem.value]: currentElem.closest('span').innerText
            }
        }, {});

            this._populateTagsArea(data);
    }

    _populateTagsArea(data) {
        if (this._destinationTags) {
            this._destinationTags.innerHTML = '';

            const destinationOptionsArray = Array.from(this._destinationSelect.options);

            const existingOptionValues = destinationOptionsArray.map(opt => opt.value);

            const data_keys = Object.keys(data)

            data_keys.forEach(data_current => {
                if (data_current === '\\' && this._settings.lockRootNode) {
                    // No Op
                } else if (data_current === '\\') {
                    this._destinationTags.innerHTML = this._destinationTags.innerHTML + '<div class="tag">All Contact Groups<i class="button__icon" data-path="'+ data_current +'">clear</i></div>';
                } 
                else if (data_current.startsWith('\\')) {
                    this._destinationTags.innerHTML = this._destinationTags.innerHTML + '<div class="tag">' + data_current.substring(1) + '<i class="button__icon" data-path="'+ data_current +'">clear</i></div>';
                }
                else {
                    this._destinationTags.innerHTML = this._destinationTags.innerHTML + '<div class="tag">' + data[data_current] + '<i class="button__icon" data-path="'+ data_current +'">clear</i></div>';
                }

                // Ensure the option exists - add it if not
                if (existingOptionValues.indexOf(data_current) < 0) {
                    const newOption = document.createElement('option');
                    newOption.selected = true;
                    newOption.value = data_current;
                    newOption.innerText = data[data_current];
                    this._destinationSelect.appendChild(newOption);
                }
            })

            destinationOptionsArray.forEach(option => {
                option.selected = data_keys.indexOf(option.value) >= 0;
            });

            this._tagsSeeAllHelper.recalculate();
        }
    }

    _appendChildrenForMode(parent, text, path, parentChecked) {
        if (this._settings.useCheckboxes || this._settings.useSingleSelectCheckbox) {

            // Temporary workaround the blank value for 'All Contact Groups'
            if (path === '') {
                path = "\\";
            }
            
            const checkboxResult = this._buildLabel(text, path, parentChecked);
            parent.appendChild(checkboxResult.label);
            
            return checkboxResult.newParentSelected;

        } else {
            // Create the link to refresh page with selected node.
            parent.appendChild(this._buildLink(text, path));
            return parentChecked;
        }
    }

    _forEachCheckboxExcludingCurrent(current, children, updaterFn) {
        children.forEach(currentLoopChild => {
            if (currentLoopChild !== current) {
                updaterFn(currentLoopChild);
            }
        });
    }

    _handleCheckboxClick(e, checkbox) {

        const parentLi = checkbox.closest('li');

        if (this._settings.useSingleSelectCheckbox) {
            // In this mode only one item can be selected, and the root item cannot be deseleted.
            if (checkbox.checked) {
                const allGroupCheckboxes = document.querySelectorAll(`#${this._settings.treeviewId}.treeview__list--root input[type=checkbox]`);
                this._forEachCheckboxExcludingCurrent(checkbox, allGroupCheckboxes, checkboxToUpdate => {
                    checkboxToUpdate.checked = false;
                });
            }
            else {
                e.preventDefault();
                checkbox.checked = true;
            }
        }
        else if (parentLi.classList.contains('treeview__item--parent')){

            const childCheckboxes = parentLi.querySelectorAll('input[type=checkbox]');
            if (checkbox.checked) {
                this._forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, checkboxToUpdate => {
                    checkboxToUpdate.disabled = true;
                    checkboxToUpdate.checked = false;
                });
            } else {
                this._forEachCheckboxExcludingCurrent(checkbox, childCheckboxes, checkboxToUpdate => {
                    checkboxToUpdate.disabled = false;
                });
            }
        }
    }

    _initialiseTreeView() {
        // Grab the select list and all of its options
        const options = this._sourceSelect.querySelectorAll("option");

        const hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", "Group");
        hiddenField.value = this._groupParam || '\\';

        const populateStructure = this._settings.isGroupsStructure ?
            () => {
                const structure = { "\\": {} };

                // Build on the base structure by looping through each select item.
                options.forEach(option => {
                    if (option.textContent !== "") {
                        // Seperate the group name into all its path segments
                        const segments = option.textContent.split("\\");
                        // Start at the root element.
                        let nodeToCheck = structure["\\"];

                        // For each segment ensure that all levels of the structure are in place.
                        segments.forEach(seg => {
                            if (seg !== "") {
                                if (!nodeToCheck[seg]) {
                                    nodeToCheck[seg] = {};
                                }
                                nodeToCheck = nodeToCheck[seg];
                            }
                        });
                    }
                });  
                return structure;
            } :
            () => Array.from(options).reduce((structure, current) => {
                    return {
                        ...structure,
                        [current.value]: current.textContent
                    };
                }, {});

        const structure = populateStructure();
        
        // The base element that will be populated
        const treeContainer = document.createElement("ul");
        treeContainer.id = this._settings.treeviewId;
        treeContainer.classList.add("treeview__list");
        treeContainer.classList.add("treeview__list--root");

        if (!this._settings.isGroupsStructure) {
            treeContainer.classList.add('treeview__list--bulletless');
        }

        // Handle all the clicks at the parent level
        treeContainer.addEventListener("click", e => {
            const target = e.target;

            // Handle checkbox items being selected.
            if (target.matches('input[type=checkbox]')) {
                this._handleCheckboxClick(e, target);
            }

            this._transferValues();

            if (target.matches(".treeview__item-toggle")) {

                const closestLi = target.closest('li');

                // We only care about clicks on elements that are parents
                if (closestLi.matches(".treeview__item--parent")) {

                    e.preventDefault();

                    // If an open parent item is clicked, close it, but also all its open descendants.
                    if (closestLi.classList.contains("treeview__item--open")) {
                        closestLi.classList.remove("treeview__item--open");
                        const activeChildren = closestLi.querySelectorAll(
                            ".treeview__item--open"
                        );

                        activeChildren.forEach(activeChild => {
                            activeChild.classList.remove("treeview__item--open");
                        });
                    }
                    // Open any closed parents that are clicked.
                    else {
                        closestLi.classList.add("treeview__item--open");
                    }
                }
            }
        });

        if (this._settings.isGroupsStructure) {
            this._displayChildKeys("All Contact Groups", "", structure["\\"], treeContainer, 1, false);
        } else {
            this._displayFlatStructure(treeContainer, structure);
        }           

        // Replace the select list with the new tree
        this._sourceSelect.parentNode.replaceChild(treeContainer, this._sourceSelect);
    
        treeContainer.parentNode.appendChild(hiddenField);
    
        this._transferValues();
    }

    _displayFlatStructure(treeContainer, obj) {
        Object.entries(obj).forEach(([key, value]) => {
            const childListItem = document.createElement("li");
            childListItem.classList.add("treeview__item");
            this._appendChildrenForMode(childListItem, value, key, false)
            treeContainer.appendChild(childListItem);
        });
    }

    _displayChildKeys(currText, currPath, obj, elementToAddTo, level, parentsChecked) {

        const childKeys = Object.keys(obj);

        let parentCheckedState = parentsChecked;

        const childListItem = document.createElement("li");
        childListItem.classList.add("treeview__item");

        if (!this._settings.useCheckboxes && !this._settings.useSingleSelectCheckbox && this._isSelectedGroup(currPath)) {
            // Only add the current state when in the 'link mode'
            childListItem.classList.add("treeview__item--current");
        }

        if (!childKeys.length) {
            // This is at the bottom of a branch i.e. no children to process

            this._appendChildrenForMode(childListItem, currText, currPath, parentCheckedState);

            elementToAddTo.appendChild(childListItem);

        } else {
            // This node has children to process

            childListItem.classList.add("treeview__item--parent");

            if (level === 1 || this._shouldParentBeOpen(currPath)) {
                // Open first level children by default
                childListItem.classList.add(
                    "treeview__item--open"
                );
            }

            parentCheckedState = this._appendChildrenForMode(childListItem, currText, currPath, parentCheckedState);

            // Create the container ready to be populated with the child nodes
            const childList = document.createElement("ul");
            childList.classList.add("treeview__list");
            childListItem.appendChild(childList);
            elementToAddTo.appendChild(childListItem);
            // Call recursively with updated params for each child node

            childKeys.forEach(childKey => {
                if (childKey !== 'All contacts') {
                    this._displayChildKeys(
                        childKey,
                        currPath + "\\" + childKey,
                        obj[childKey],
                        childList,
                        level + 1,
                        parentCheckedState
                    );
                }
            });           

        }
    }
}

/*  Allow the old stuff to keep working in the same manner post refactor i.e. controlled by attributes */
const sourceSelect = document.getElementById("Group");

if (sourceSelect) {
    new TreeView({
        useCheckboxes: sourceSelect.hasAttribute('data-with-checkbox'),
        useSingleSelectCheckbox: sourceSelect.hasAttribute('data-with-single-select-checkbox'),
        lockRootNode: sourceSelect.hasAttribute('data-lock-root')
    });
}
