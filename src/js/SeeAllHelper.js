class SeeAllHelper {

    constructor(itemsSelector, seeAllSelector, passedOptions = {}) {

        this._itemsSelector = itemsSelector;
        this._seeAll = document.querySelector(seeAllSelector);
        this._originalVisibilityOfSeeAll = this._seeAll.style.display;

        const defaults = { itemLimit: 3, showLessText: "See Less" };
        this._options = { ...passedOptions, ...defaults };
        this._itemLimit = this._options.itemLimit;

        this._showLessText = this._options.showLessText;
        this._showMoreText = this._seeAll.textContent;

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

    _setShowAllVisibility(visible) {
        this._seeAll.style.display = visible 
            ? this._originalVisibilityOfSeeAll 
            : "none";
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

    // Call this when you remove an item
    recalculate() {    
        this._allItems = Array.from(document.querySelectorAll(this._itemsSelector));

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

export default SeeAllHelper;