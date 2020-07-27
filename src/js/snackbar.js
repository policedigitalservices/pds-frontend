// window.localStorage.clear();

(function (selector) {

    const snackbarStorageItem = window.localStorage.getItem('snackbar');
    const snackbar = document.querySelector(selector);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var contactParam = urlParams.get('ContactAdded');
    var OrganisationParam = urlParams.get('OrganisationAdded');
    var snackbarMessage = '';

    //check if localStrorage 'snackbar' exists and if it doesnt setup object ready for eventListener
    if (snackbarStorageItem !== null) {

        var snackbarStorageItemArray = JSON.parse(snackbarStorageItem);

        //check if localStrorage 'snackbar' already contains current page path
        if (snackbarStorageItemArray.locations.includes(window.location.pathname)) {

            //if it does then hide the snackbar
            snackbar.checked = true;

        }

    } else {

        var snackbarStorageItemArray =  {
            locations : new Array()
        }
    }

    if (contactParam === 'True') {
        snackbarMessage = 'New contact has been created';

    } else if (OrganisationParam === 'True') {
        snackbarMessage = 'New organisation has been created';

    } else {
        snackbar.addEventListener("click", function(el) {

            if (!snackbarStorageItemArray.locations.includes(window.location.pathname)) {

                snackbarStorageItemArray.locations.push(window.location.pathname);
                window.localStorage.setItem('snackbar', JSON.stringify(snackbarStorageItemArray));

            }
        })
    }

    if (snackbarMessage) {
        snackbar.classList.add('snackbar--active');
        snackbar.innerHTML = snackbarMessage;

        setTimeout(function(){
            snackbar.classList.remove('snackbar--active');
        }, 3500);
    }

})("#snackbar");
