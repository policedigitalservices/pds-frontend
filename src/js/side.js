/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

// function menuToggle() {
//    var asideExist = document.getElementById("aside");
//     if(asideExist){
//   document.getElementById("aside").classList.toggle("aside--active");
// }
// }

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

const sidebar = document.getElementById("sidebar");

const toggleActivePanel = panel => {
  if(sidebar.hasAttribute('data-active') && sidebar.getAttribute('data-active') === panel) {
    // Close the side bar if already open
    sidebar.removeAttribute('data-active');
  } else {
    // Otherwise show the new panel
    sidebar.setAttribute('data-active', panel);
  }
  
}

const addGroupButton = document.querySelector("#add_group");

if (addGroupButton) {

  addGroupButton.addEventListener("click", function(el) {
        el.preventDefault();
        toggleActivePanel('groups');
  })
}

const addAttributesButton = document.querySelector("#add_attribute");

if (addAttributesButton) {

  addAttributesButton.addEventListener("click", function(el) {
        el.preventDefault();
        toggleActivePanel('attributes');
    })
}

const closeSidebar = document.querySelector('#close_sidebar');

if (closeSidebar) {

closeSidebar.addEventListener("click", function(el) {
        el.preventDefault();
        closeSideBar();
    })
}


function closeSideBar() {
  sidebar.removeAttribute('data-active');
}