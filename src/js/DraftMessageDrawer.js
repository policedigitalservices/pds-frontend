import BottomDrawer from './BottomDrawer';
import SimpleCookieHelper from './SimpleCookieHelper';

export default class DraftMessageDrawer {
    constructor(numberOfRecipients, totalSelector=".draft-message-drawer__total") {
        const cookieHelper = new SimpleCookieHelper('CourierMessageTitle');
        this._totalsElement = document.querySelector(totalSelector);
        document.querySelector('.draft-message-drawer__title').textContent = cookieHelper.get() || 'Untitled';
        if (!this._totalsElement) { throw Error(`No element matching the passed in selector ${totalSelector}`); }
        this._bottomDrawer = new BottomDrawer();
        this.update(numberOfRecipients);
    }    

    update(numberOfRecipients) {
        this._totalsElement.innerText = numberOfRecipients;
        numberOfRecipients ? this._bottomDrawer.show() : this._bottomDrawer.hide();
    }
}