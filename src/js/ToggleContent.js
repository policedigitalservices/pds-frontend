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
            if (responses[key].querySelector("[class~='response-option']").value.length == 0) {
                responses[key].style.display = 'none';
            }

            if (responses[key].querySelector("#remove_response") != null) {
                responses[key].querySelector("#remove_response").addEventListener("click", function(el) {
                    el.preventDefault();
                    console.log('button clicked ' + key);
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

            keyArray.every(function(key){

                if (responses[key].style.display === 'block') {
                    responses[key].querySelector("[class~='response-option']").value = '';
                    responses[key].style.display = 'none';
                    return false;
                }

                return true;

            });
        }

    })("#Responses");
}


if (document.getElementById('addPhone') !=null) {

    (function (selector) {

        var addPhoneInput = document.getElementById(selector);

        addPhoneInput.style.display = 'none';
        var addResponseButton = document.querySelector("#addPhoneBtn");

        addResponseButton.addEventListener("click", function(el) {
            console.log('Add Phone clicked');
            el.preventDefault();
            addPhoneInput.style.display = 'block';
            addResponseButton.blur();
            addResponseButton.disabled = true;

        })

    })("addPhone");

}


if (document.getElementById('addEmail') !=null) {

    (function (selector) {

        var addPhoneInput = document.getElementById(selector);

        addPhoneInput.style.display = 'none';
        var addResponseButton = document.querySelector("#addEmailBtn");

        addResponseButton.addEventListener("click", function(el) {
            console.log('Add Phone clicked');
            el.preventDefault();
            addPhoneInput.style.display = 'block';
            addResponseButton.blur();
            addResponseButton.disabled = true;

        })

    })("addEmail");

}
