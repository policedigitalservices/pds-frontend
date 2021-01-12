
// Check we are on the correct page.
const main = document.querySelector('main.courier-profile-page');

if (main) {

    // Grab all the buttons that are only show when js enabled
    const addPhoneBtn = document.getElementById('addPhoneBtn');
    const addEmailBtn = document.getElementById('addEmailBtn');
    const removeEmailButtons = Array.from(document.querySelectorAll('.btn-remove-contact-email'));
    const removePhoneButtons = Array.from(document.querySelectorAll('.btn-remove-contact-phone'));
    const btnSave = document.querySelector('#contact-profile-form #btnSave');
    
    // Show all the js only buttons
    [addPhoneBtn, addEmailBtn, ...removeEmailButtons, ...removePhoneButtons].forEach(el => {
        el.style.display = "";
    });

    const emailsSection = document.querySelector('.form-emails');
    emailsSection.addEventListener('keydown', e => {
        if(e.keyCode == 13) {
            e.preventDefault();
            btnSave.click();
            return false;
          }
    });
    emailsSection.addEventListener('input', e => {
        e.target.closest('.form__group').classList.remove('blank');
        setAddEmailButtonVisibilityIfApplicable();
    });

    const phonesSection = document.querySelector('.form-phones');
    phonesSection.addEventListener('keydown', e => {
        if(e.keyCode == 13) {
            e.preventDefault();            
            btnSave.click();
            return false;
          }
    });
    phonesSection.addEventListener('input', e => {   
        e.target.closest('.form__group').classList.remove('blank');
        setAddPhoneButtonVisibilityIfApplicable();
    });

    // Check if any empty phone boxes, or email boxes
    const hasEmptyContactBoxeForType = (section, selector) => {
        return Array.from(section
            .querySelectorAll(selector))
            .some(x => x.value.trim() === '');
    };

    // Should not have and add email button if already a blank one available
    const setAddPhoneButtonVisibilityIfApplicable = () => {
        addPhoneBtn.style.display = hasEmptyContactBoxeForType(phonesSection, '.input--profile-phone > input') ? 'none' : 'block';
    }

    // Should not have and add phone button if already a blank one available
    const setAddEmailButtonVisibilityIfApplicable = () => {
        addEmailBtn.style.display =  hasEmptyContactBoxeForType(emailsSection, '.input--profile-email > input') ? 'none' : 'block';
    }

    // Get the form, to add remove listeners to
    const contactProfileForm = document.getElementById('contact-profile-form');   

    [...removeEmailButtons, ...removePhoneButtons].forEach(el => {
        el.closest('.form__group').classList.add('input__withaction');
    });

    // Remove excess inputs of these types on load (Added for non js purposes).
    [".input--profile-phone > input", ".input--profile-email > input"].forEach(selector => {
        const inputsForSelector = Array.from(document.querySelectorAll(selector));

        if (inputsForSelector.length > 1) {
            inputsForSelector.forEach(input => {
                if (input.value.trim() === '') {
                    input.closest('.form__group').remove();
                }
            })

            _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');
            _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
        }
    });

    // Set correct start state for email and phone add buttons
    setAddPhoneButtonVisibilityIfApplicable();
    setAddEmailButtonVisibilityIfApplicable();

    // Add a new phone row
    function newPhoneRow() {        

        const newPhone  = document.createElement('div');
        newPhone.className = "form__group input__withaction input--profile-phone";
        newPhone.innerHTML = `
            <input class="form__input" autocomplete="off" type="text" name="phone" value="" placeholder="Add a phone number">
            <button class="button button--remove btn-remove-contact-phone">Remove</button>
            <span class="field-validation-valid" data-valmsg-for="phone_validation" data-valmsg-replace="true"></span>
        `;
        return newPhone;
    }

    // Remove gaps in index sequences
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
            <input class="form__input" autocomplete="off" type="text" name="email" value="" placeholder="Add an email address">
            <button class="button button--remove  btn-remove-contact-email">Remove</button>
            <span class="field-validation-valid" data-valmsg-for="email_validation" data-valmsg-replace="true"></span>
        `;
        return newEmailRow;
    }

    // Wire up the button listeners
    addPhoneBtn.addEventListener('click', e => {
        e.preventDefault();
        e.target.closest('section').appendChild(newPhoneRow());
        _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');
        setAddPhoneButtonVisibilityIfApplicable();
    });
    
    addEmailBtn.addEventListener('click', e => {
        e.preventDefault();
        e.target.closest('section').appendChild(newEmailRow())
        _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
        setAddEmailButtonVisibilityIfApplicable();
    });  

    // Handle the remove on the parent form, so that will work for new items added after load.
    contactProfileForm.addEventListener('click', (e) => {
        if (e.target.matches('.btn-remove-contact-phone')  || e.target.matches('.btn-remove-contact-email')) {
            e.preventDefault();
            
            // Get all the inputs in the parent section
            const inputs = e.target.closest('section').querySelectorAll('input');

            // If only one blank it - else remove it
            if (inputs.length === 1) {
                inputs[0].value = '';
            } else {
                 // Remove parent form group containing email or phone.
                const formGroup = e.target.closest('.form__group');
                if (formGroup) {
                    formGroup.remove();                
                }
            }           
        }

        if (e.target.matches('.btn-remove-contact-phone')) {
            _renumberInputs('.input--profile-phone', 'Input.PersonalPhoneNumbers');
            setAddPhoneButtonVisibilityIfApplicable();
        }

        if (e.target.matches('.btn-remove-contact-email')) {
            _renumberInputs('.input--profile-email', 'Input.PersonalEmailAddresses');
            setAddEmailButtonVisibilityIfApplicable();
        }
    });
}