/**
 *  USAGE: To use this control you must add the following attribute to the button that should be doing the show all.
 * 
 *  data-showall-container-id="<<id of container to be effected>>"
 * 
 *  OPTIONAL: Use the following attrtibutes to adjust the behavior
 * 
 *  data-showall-item-limit="20" - sets the number of items to show initially.  Default is 10
 *  
 *  data-showall-count-id - id of a field that should be updated with a count of the items
 * 
 *  data-showall-item-selector - a selector to get the item from with the container.  This is required if the container is not a table
 */

 export class SeeAllAttributeHelper {
     constructor() {
        var showMoreButtons = document.querySelectorAll('[data-showall-container-id]');

        showMoreButtons.forEach(showAllButton => {
        
            var containerId = showAllButton.getAttribute("data-showall-container-id");
            var itemSelector = showAllButton.getAttribute("data-showall-item-selector");
            var showAllItemLimit = showAllButton.getAttribute("data-showall-item-limit");
            var showAllItemCountId = showAllButton.getAttribute("data-showall-count-id");
            var buttonId = showAllButton.id;

            if (!buttonId) {
                return;
            };

            var container = document.getElementById(containerId);
            
            if (!container) {
                showAllButton.style.display = 'none';
                return;
            }

            let selectorToUse;

            if (itemSelector) {
                selectorToUse = `#${containerId} ${itemSelector}`;
            } else if (container.tagName === "TABLE") {
                selectorToUse = `#${containerId} tbody tr`;
            } else {
                console.error("No child selector available");
                return;
            }
            
            var parsedItemLimit = parseInt(showAllItemLimit, 10);

            let options = {};

            if (!isNaN(parsedItemLimit)) { 
                options = {...options, itemLimit: parsedItemLimit};
            }

            if(showAllItemCountId) {
                options = {...options, countFieldId: showAllItemCountId};
            }

            new SeeAllHelper(selectorToUse, `#${buttonId}`, options);
        });
     }
 }

export class SeeAllHelper {

    constructor(itemsSelector, seeAllSelector, passedOptions = {}) {

        this._itemsSelector = itemsSelector;
        this._seeAll = document.querySelector(seeAllSelector);

        if (!this._seeAll) {
            // Running on a page without see all buttton, so stop after counts.
            return;
        }

        this._originalVisibilityOfSeeAll = this._seeAll.style.display;

        const defaults = { itemLimit: 5, showLessText: "See Less", countFieldId: null };
        this._options = { ...defaults, ...passedOptions };
        this._itemLimit = this._options.itemLimit;

        this._showLessText = this._options.showLessText;
        this._showMoreText = this._seeAll.textContent;

        this._countField = this._options.countFieldId ? document.getElementById(this._options.countFieldId) : null;

        this._showingAll = false;

        this._seeAll.addEventListener('click', e => {
            e.preventDefault();
            if (this._showingAll) {
                this._hideExcessItems();
            }
            else {
                this._showAllItems();
            }

            this._showingAll = !this._showingAll;
            this._seeAll.textContent = this._showingAll ? this._showLessText : this._showMoreText;
        });

        this.recalculate();
    }

    _showAllItems() {
        this._allItems.forEach(item => {
            item.style.display = this._originalVisibilityOfItems;
        })
    }

    _hideExcessItems() {
        this._allItems.forEach((item, index) => {
            const toCheck = index + 1;
            
            item.style.display = toCheck > this._itemLimit ?
                "none" :
                this._originalVisibilityOfItems;
        });
    }

    recalculate() {    
        this._allItems = Array.from(document.querySelectorAll(this._itemsSelector));

        if (this._countField) {
            this._countField.textContent = this._allItems.length;
        }

        if(!this._seeAll) return;

        if (this._allItems.length <= this._itemLimit) {
            this._seeAll.style.display = 'none';
        } else {
            if (!this._originalVisibilityOfItems) {
                this._originalVisibilityOfItems = this._allItems[0].style.display;
            }
            this._seeAll.style.display = this._originalVisibilityOfSeeAll;
        }

        if (!this._showingAll)  { this._hideExcessItems(); }
    }
}
