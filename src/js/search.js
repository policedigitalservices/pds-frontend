/*********************************************************************
 *  Handle the clicking of a search fields x icon.  
 *  Blanks the field and optionally redirect minus query string param
 *  specified on the span.form__input--clear (data-param-name)
 ********************************************************************/

/* Build and redirect to path minus the specified param name in query string */
function redirectWithoutSearch(paramName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const {origin, pathname} = window.location;
    urlParams.delete(paramName);
    const newCriteria = urlParams.toString() ? `?${urlParams}` : '';    
    const newPath = `${origin}${pathname}${newCriteria}`;
    
    // Only redirect if params with change i.e. not just clearing search field
    if (window.location.href !== newPath) {        
        window.location.assign(newPath);
    }
}

/* Clear a search field when the inputs clear button is clicked */
function clearSearch(e) {
    debugger;
    var toClear = document.querySelectorAll('.form--search > .form__input--search');
    toClear.forEach(tc => tc.value = '');

    // Todo try and get attribute, and redirect if has it.
    const paramToRemove = e.target.getAttribute('data-param-name');
    if (paramToRemove) {
        redirectWithoutSearch(paramToRemove);
    }
}

let clearButtons = document.querySelectorAll('.form__input--clear');

clearButtons.forEach(cb => cb.addEventListener('click', clearSearch));