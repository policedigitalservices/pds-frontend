
(function (selector) {

    const snackbarStorageItem = window.localStorage.getItem('snackbar');
    const snackbar = document.querySelector(selector);


    // check if localStrorage 'snackbar' exists and if it doesnt setup object ready for eventListener
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
    
    if (snackbar) {
        snackbar.addEventListener("click", function(el) {
            if (!snackbarStorageItemArray.locations.includes(window.location.pathname)) {
                snackbarStorageItemArray.locations.push(window.location.pathname);
                window.localStorage.setItem('snackbar', JSON.stringify(snackbarStorageItemArray));
            }
        })
    }

})("#hint-snackbar");
