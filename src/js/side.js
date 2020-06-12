/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuToggle() {
  document.getElementById("aside").classList.toggle("aside--active");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('aside--active')) {
        openDropdown.classList.remove('aside--active');
      }
    }
  }
}


var addGroupButton = document.querySelector("#add_group");

addGroupButton.addEventListener("click", function(el) {

        // addGroupButton.style.display = 'none';
        el.preventDefault();
        toggleSidebar();
    })



function toggleSidebar() {
  var x = document.getElementById("Sidebar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}