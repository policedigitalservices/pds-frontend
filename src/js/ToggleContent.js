if (document.getElementById('Responses') !=null) {

    (function (selector) {

        var responses = document.querySelectorAll('.response-field');
        var keyArray = Object.keys(responses);
        var addResponseButton = document.querySelector("#add_response");

        addResponseButton.addEventListener("click", function(el) {
            el.preventDefault();
            addResponseButton.blur();
            addResponse();

        })

        keyArray.forEach(function(key){

            responses[key].setAttribute('data-key', key);

            if (responses[key].querySelector("[class~='response-option']").value.length == 0) {
                responses[key].style.display = 'none';
            }

            if (responses[key].querySelector("#remove_response") != null) {
                responses[key].querySelector("#remove_response").addEventListener("click", function(el) {
                    el.preventDefault();
                    removeResponse(key);

                })
            }

        });

        function validateResponse(key) {
            if (responses[key].querySelector("[class~='response-option']").value.length != 0) {
                addResponse(parseInt(key) + 1);
            }
        }

        function addResponse(key) {

            keyArray.every(function(key){

                if (responses[key].style.display === 'none') {
                    responses[key].style.display = 'block';
                    return false;
                }

                return true;

            });
        }

        function removeResponse(key) {

            if (responses[key].style.display === 'block' && responses[key].dataset.key == key) {

                responses[key].parentNode.appendChild(responses[key]);
                responses[key].querySelector("[class~='response-option']").value = '';
                responses[key].style.display = 'none';
                return false;
            }

        }

    })("#Responses");
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
            addGroupButton.classList.add("is-hidden");
            addGroupButton.blur();
            addGroupButton.disabled = true;

            if (document.getElementById('add_group') !=null) {

                var saveGroupButton = document.querySelector("#save_group");
                saveGroupButton.classList.remove("is-hidden");

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
        console.log(inputErrors[key]);
        inputErrors[key].closest('form').classList.remove("is-hidden");

    });
}
