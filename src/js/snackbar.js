(function (selector) {

    const snackbar = document.querySelector(selector);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var contactParam = urlParams.get('ContactAdded');
    var OrganisationParam = urlParams.get('OrganisationAdded');
    var MessageSentParam = urlParams.get('MessageSent');
    var ForceContactUpdatedParam = urlParams.get('ForceContactUpdated');

    var snackbarMessage = '';

    if (contactParam === 'True') {
        snackbarMessage = 'New contact has been created';
    } else if (OrganisationParam === 'True') {
        snackbarMessage = 'New organisation has been created';
    } else if (MessageSentParam === 'True') {
        /* 
            Bit hacky, but clearing the sessionStorage here to clear message state here. 
        */
        sessionStorage.removeItem("CourierMessageUsers")
        snackbarMessage = 'Message sent';
    } else if (ForceContactUpdatedParam && ForceContactUpdatedParam.toLowerCase() === 'true') {
        snackbarMessage = 'Personal contact details updated';
    } 

    if (snackbarMessage) {
        snackbar.classList.add('snackbar--active');
        snackbar.innerHTML = snackbarMessage;

        setTimeout(function(){
            snackbar.classList.remove('snackbar--active');
        }, 5000);
    }

})("#snackbar");
