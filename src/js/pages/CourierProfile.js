import CheckboxDisableButtonHelper from '../CheckboxDisableButtonHelper';

// Check we are on the correct page.
const main = document.querySelector('main.courier-profile-page');

if (main) {
    
    //new CheckboxDisableButtonHelper('#btnSave', '#cbAcceptTerms');

    // Grab all the buttons that are only show when js enabled
    const addPhoneBtn = document.getElementById('addPhoneBtn');
    const addEmailBtn = document.getElementById('addEmailBtn');
    const removeEmailButtons = Array.from(document.querySelectorAll('.btn-remove-contact-email'));
    const removePhoneButtons = Array.from(document.querySelectorAll('.btn-remove-contact-phone'));
    
    // Get the form, to add remove listeners to
    const contactProfileForm = document.getElementById('contact-profile-form');

    // Show all the js only buttons
    [addPhoneBtn, addEmailBtn, ...removeEmailButtons, ...removePhoneButtons].forEach(el => {
        el.style.display = 'inline-block';
    });

    // Wire up the button listeners
    addPhoneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Add phone Button clicked');
    });
    addEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Add email Button clicked');
    });  

    // Handle the remove on the parent form, so that will work for new items added after load.
    contactProfileForm.addEventListener('click', (e) => {
        if (e.target.matches('.btn-remove-contact-phone')  || e.target.matches('.btn-remove-contact-email')) {
            // Remove parent form group containing email or phone.
            const formGroup = e.target.closest('.form__group');
            if (formGroup) {
                formGroup.remove();
            }
        }
    });

}