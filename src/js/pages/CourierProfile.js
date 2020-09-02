const main = document.querySelector('main');

if (main && main.classList.contains('courier-profile-page')) {

    // Capture and disable the save button.
    const saveButton = document.getElementById('btn-save');
    saveButton.setAttribute('disabled', 'diabled');

    // Capture and ensure accept terms checkbox is deselected
    const cbAcceptTerms = document.getElementById('cbAcceptTerms');
    cbAcceptTerms.checked = false;

    // Add and event listener that enables and disables the button.
    cbAcceptTerms.addEventListener('change', (e) => {
        e.target.checked ?
            saveButton.removeAttribute('disabled') :
            saveButton.setAttribute('disabled', 'disabled');
    });
}