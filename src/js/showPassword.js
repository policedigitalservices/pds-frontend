/**
 *  USAGE: To use this control you must add the following attribute to the button that should be doing the show all.
 *
 *  data-showall-table-id="<<id of table to be effected>>"
 *
 *  OPTIONAL: Use the following attrtibutes to adjust the behavior
 *
 *  data-showall-item-limit="20" - sets the number of items to show initially.  Default is 10
 *
 */

var showPassword = document.querySelectorAll('i[data-password]');

console.log(showPassword);
console.log('hello word');

showPassword.forEach(showPasswordButton => {

  var passwordID = showPasswordButton.getAttribute("data-password");

  console.log('hello: ' + passwordID);


  showPasswordButton.addEventListener('click', (el) => {
      el.preventDefault();
      // el.empty();
      console.log(showPasswordButton);
      if (showPasswordButton.innerHTML === "visibility") {
    showPasswordButton.innerHTML = "visibility_off";
  } else {
    showPasswordButton.innerHTML = "visibility";
  }

      console.log('clicjed');
      var input = document.getElementById(passwordID);

      passwordID.type = "text";


      // el.target.style.display = "none";

      if (input.type === "password") {
                input.type = "text";
            }
            else {
                input.type = "password";
            }
    });


});
