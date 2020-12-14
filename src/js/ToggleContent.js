if (document.getElementById('Responses') != null) {


    (function () {

        // Find all the response fields and the response list
        const responses = document.querySelectorAll('.response-field');
        const responsesList = document.querySelector('.response-options-list');

        // Hide all the empty response fields
        responses.forEach((response, idx) => {
            if (response.querySelector('.response-option') .value.trim() === '') {
                response.style.display = 'none';
            }
            response.dataset.key = idx;
        });

        // Reveals the first hidden item
        const showFirstEmpyItem = () => {
            for (var i = 0; i < responses.length; i++) {
                const currentResponse = responses[i];
                if (currentResponse.style.display === 'none') {
                    currentResponse.style.display = 'block';
                    return;
                }
            }
        };

        // When an item is removed, copy all values forward to fill gaps
        const copyItemsForward = (index) => {
            for (var idx = index + 1; idx < responses.length; idx++) {
                const prevInput = responses[idx-1].querySelector('.response-option');;
                const input = responses[idx].querySelector('.response-option');
                prevInput.value = input.value;
            }
        };

        //
        const removeLastEmptyItem = (removeIdx) => {
            
            // As all copied forward blank last item out
            responses[responses.length-1].querySelector('.response-option').value = "";

            // Go through backwards and hide last visible item
            for (var idx = (responses.length-1); idx >= removeIdx; idx--) {
                if (responses[idx].style.display !== 'none') {
                    responses[idx].style.display = 'none';
                    return;
                }
            }
        }

        var addResponseButton = document.querySelector("#add_response");

        addResponseButton.addEventListener("click", function(el) {
            el.preventDefault();
            addResponseButton.blur();
            showFirstEmpyItem();

        })

        responsesList.addEventListener('click', (e) => {
                        
            const target = e.target;

            if (target.matches('.btn-remove-response')) {
                e.preventDefault();
                const parent = target.parentNode;
                const removeIdx = parseInt(parent.dataset.key, 10);
                copyItemsForward(removeIdx);
                removeLastEmptyItem(removeIdx);
            }
        });
    })();
}

if (document.getElementById('addPhone') !=null) {

    (function (selector) {
        var addPhoneInput = document.getElementById(selector);
        var addPhoneButton = document.querySelector("#addPhoneBtn");

        addPhoneButton.addEventListener("click", function(el) {

            el.preventDefault();
            addPhoneInput.classList.remove("is-hidden");
            addPhoneButton.blur();
            addPhoneButton.disabled = true;

        })

    })("addPhone");
}

if (document.getElementById('addEmail') !=null) {

    (function (selector) {

        var addEmailInput = document.getElementById(selector);
        var addEmailButton = document.querySelector("#addEmailBtn");

        addEmailButton.addEventListener("click", function(el) {

            el.preventDefault();
            addEmailInput.classList.remove("is-hidden");
            addEmailButton.blur();
            addEmailButton.disabled = true;

        });
    })("addEmail");

}

if (document.getElementById('add_group') !=null) {
    (function (selector) {

        var addGroupButton = document.querySelector("#add_group");

        addGroupButton.addEventListener("click", function(el) {
            el.preventDefault();


            if (document.getElementById('add_group') !=null) {

                var saveGroupButton = document.querySelector("#save_group");

                if (saveGroupButton !=null) {
                    addGroupButton.classList.add("is-hidden");
            addGroupButton.blur();
            addGroupButton.disabled = true;
                    saveGroupButton.classList.remove("is-hidden");
                }

            }
        })
    })("add_group");
}

var groupTextarea = document.getElementById("GroupTextarea");

if (groupTextarea != null) {
    groupTextarea.addEventListener('click', function(e) {

        var target2 = e.target;
        var addGroupButton = document.querySelector("#add_group");

        if (target2.matches(".button__icon") && target2.hasAttribute('data-path')) {

            addGroupButton.classList.add("is-hidden");
            addGroupButton.blur();
            addGroupButton.disabled = true;

            if (document.getElementById('add_group') !=null) {

                var saveGroupButton = document.querySelector("#save_group");
                saveGroupButton.classList.remove("is-hidden");

            }
        }
    });
}

if (document.querySelectorAll('input.input-validation-error') !=null) {

    var inputErrors = document.querySelectorAll('input.input-validation-error');
    var inputErrorsArray = Object.keys(inputErrors);

    inputErrorsArray.forEach(function(key){

        inputErrors[key].closest('form').classList.remove("is-hidden");

    });
}
