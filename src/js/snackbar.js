(function (selector) {

    const snackbar = document.querySelector(selector);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var contactParam = urlParams.get('ContactAdded');
    var OrganisationParam = urlParams.get('OrganisationAdded');
    var snackbarMessage = '';

    if (contactParam === 'True') {
        snackbarMessage = 'New contact has been created';

    } else if (OrganisationParam === 'True') {
        snackbarMessage = 'New organisation has been created';

    }

    if (snackbarMessage) {
        snackbar.classList.add('snackbar--active');
        snackbar.innerHTML = snackbarMessage;

        setTimeout(function(){
            snackbar.classList.remove('snackbar--active');
        }, 3500);
    }

})("#snackbar");
