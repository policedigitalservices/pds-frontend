import CheckboxDisableButtonHelper from '../CheckboxDisableButtonHelper';

// Check we are on the correct page.
const main = document.querySelector('main.courier-profile-page');

if (main) {
    new CheckboxDisableButtonHelper('#btnSave', '#cbAcceptTerms');
}