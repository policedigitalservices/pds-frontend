/*
 Class that facilitate the hiding and showing of the bottom bar.
*/
export default class BottomDrawer {
    constructor() {
        console.log('Creating bottom drawer here');
        this._openClass = "bottom-drawer-open";
    }

    show() {
        document.body.classList.add(this._openClass);
    }

    hide() {
        document.body.classList.remove(this._openClass);
    }

    isOpen() {
        return document.body.classList.contains(this._openClass);
    }
};