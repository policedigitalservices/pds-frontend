(function (selector) {

    const snackbar = document.querySelector(selector);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const removeQueryParam = param => {
        if(urlParams.has(param)){
            urlParams.delete(param);            
            window.history.replaceState({}, document.title, `${window.location.pathname}?=${urlParams.toString()}`);
        }
    }

    const contactParam = urlParams.get('ContactAdded');
    const OrganisationParam = urlParams.get('OrganisationAdded');
    const MessageSentParam = urlParams.get('MessageSent');
    const ForceContactUpdatedParam = urlParams.get('ForceContactUpdated');

    let snackbarMessage = '';

    if (contactParam === 'True') {
        removeQueryParam('ContactAdded');
        snackbarMessage = 'New contact has been created';
    } else if (OrganisationParam === 'True') {
        removeQueryParam('OrganisationAdded');
        snackbarMessage = 'New organisation has been created';
    } else if (MessageSentParam === 'True') {
        /* 
            Bit hacky, but clearing the sessionStorage here to clear message state here. 
        */
        sessionStorage.removeItem("CourierMessageUsers")
        removeQueryParam('MessageSent');
        snackbarMessage = 'Message sent';
    } else if (ForceContactUpdatedParam && ForceContactUpdatedParam.toLowerCase() === 'true') {
        removeQueryParam('ForceContactUpdated');
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
