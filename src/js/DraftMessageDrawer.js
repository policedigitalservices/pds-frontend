import BottomDrawer from './BottomDrawer';

export default class DraftMessageDrawer {
    constructor(numberOfRecipients, totalSelector=".draft-message-drawer__total") {
        this._totalsElement = document.querySelector(totalSelector);
        if (!this._totalsElement) { throw Error(`No element matching the passed in selector ${totalSelector}`); }
        this._bottomDrawer = new BottomDrawer();
        this.update(numberOfRecipients);
    }    

    update(numberOfRecipients) {
        this._totalsElement.innerText = numberOfRecipients;
        numberOfRecipients ? this._bottomDrawer.show() : this._bottomDrawer.hide();
    }
}