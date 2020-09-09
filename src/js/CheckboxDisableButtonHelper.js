// Disables and enables a button by whether or not a checkbox is selected.
export default class CheckboxDisableButtonHelper {
    constructor(buttonSelector, checkboxSelector) {
        // Grab the button
        this._button = document.querySelector(buttonSelector);
        if (!this._button) throw new Error("Button selector doesnt match an element");
        // Grab the checkbox
        this._checkbox = document.querySelector(checkboxSelector);
        if (!this._checkbox) throw new Error("Checkbox selector doesnt match an element");

        // Respect the checkboxes starting state
        if (!this._checkbox.checked) {
            this._disableButton();
        }

        // Add and event listener that enables and disables the button.
        this._checkbox.addEventListener('change', (e) => {
            e.target.checked ?
                this._enableButton() :
                this._disableButton();
        });
    }

    // Disables the button
    _disableButton() {
        this._button.setAttribute('disabled', 'disabled');
        this._button.classList.add('disabled');
    }

    // Enables the button
    _enableButton() {
        this._button.removeAttribute('disabled');
        this._button.classList.remove('disabled');
    }
}