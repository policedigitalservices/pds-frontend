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
        el.style.display = "";
    });

    [...removeEmailButtons, ...removePhoneButtons].forEach(el => {
        el.closest('.form__group').classList.add('input__withaction');
    });

    // Add a new phone row
    function newPhoneRow() {        

        const newPhone  = document.createElement('div');
        newPhone.className = "form__group input__withaction input--profile-phone";
        newPhone.innerHTML = `
            <input class="form__input" autocomplete="off" type="text" name="phone" value="">
            <button class="button button--remove btn-remove-contact-phone">Remove</button>
            <span class="field-validation-valid" data-valmsg-for="phone_validation" data-valmsg-replace="true"></span>
        `;
        return newPhone;
    }

    function _renumberInputs(selector, identifier) {
        const inputs = document.querySelectorAll(selector);

        inputs.forEach((input, index) => {
            const inp = input.querySelector('input');
            inp.id = `${identifier}_${index}_`;
            inp.name = `${identifier}[${index}]`;
            const spn = input.querySelector('span');
            spn.setAttribute('data-valmsg-for', `${identifier}[${index}]`)
        });
    }

    // Add a new email row
    function newEmailRow() {    
        const newEmailRow  = document.createElement('div');  
        newEmailRow.className = "form__group input__withaction input--profile-email";  
        newEmailRow.innerHTML = `
            <input class="form__input" autocomplete="off" type="text" name="email" value="">
            <button class="button button--remove  btn-remove-contact-email">Remove</button>
            <span class="field-validation-valid" data-valmsg-for="email_validation" data-valmsg-replace="true"></span>
        `;
        return newEmailRow;
    }

    // Wire up the button listeners
    addPhoneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('section').appendChild(newPhoneRow());
        _renumberInputs('.input--profile-phone', 'Input_PersonalPhoneNumbers');
    });
    addEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('section').appendChild(newEmailRow())
        _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
    });  

    // Handle the remove on the parent form, so that will work for new items added after load.
    contactProfileForm.addEventListener('click', (e) => {
        if (e.target.matches('.btn-remove-contact-phone')  || e.target.matches('.btn-remove-contact-email')) {
            e.preventDefault();
            
            // Remove parent form group containing email or phone.
            const formGroup = e.target.closest('.form__group');
            if (formGroup) {
                formGroup.remove();
            }
        }

        if (e.target.matches('.btn-remove-contact-phone')) {
            _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');
        }

        if (e.target.matches('.btn-remove-contact-email')) {
            _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
        }
    });
}