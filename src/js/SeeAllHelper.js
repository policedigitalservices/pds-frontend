class SeeAllHelper {

    constructor(itemsSelector, seeAllSelector, passedOptions = {}) {

        this._seeAll = document.querySelector(seeAllSelector);
        this._allItems = Array.from(document.querySelectorAll(itemsSelector));

        console.log(this._allItems);

        const defaults = { itemLimit: 10, showLessText: "See Less" };
        this._options = { ...passedOptions, ...defaults };
        this._itemLimit = this._options.itemLimit;

        this._showLessText = this._options.showLessText;
        this._showMoreText = this._seeAll.textContent;

        this._showingAll = false;

        this._seeAll.addEventListener('click', e => {
            e.preventDefault();
            if (this._showingAll) {
                alert('hiding');
                this._hideExcessItems();
            }
            else {
                alert('showing');
                this._showAllItems();
            }

            this._showingAll = !this._showingAll;
            this._seeAll.textContent = this._showingAll ? this._showLessText : this._showMoreText;
        });

        // IF NO ITEMS
        if (this._allItems.length <= this._itemLimit) {
            this._seeAll.style.display = 'none';
            this._showingAll = false;
            return;
        } else {
            // Capture the original visibitly so it can be restored i.e. display block, display visiable etc
            this._originalVisibilityOfItems = this._allItems[0].style.display;
            this._hideExcessItems();
        }

    }

    _setShowAllVisibility(visible) {
        this._seeAll.style.display = visible 
            ? this._originalVisibilityOfSeeAll 
            : "none";
    }

    _showAllItems() {
        console.log(this._originalVisibilityOfItems);
        this._allItems.forEach(item => {
            console.log('in item');
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
        this._allItems = Array.from(document.querySelectorAll(itemsSelector));
        
        if (this._allItems.length <= this._itemLimit) {
            this._showingAll = true;
            this._seeAll.style.display = 'none';
        }

        this._hideExcessItems();
    }
}

export default SeeAllHelper;