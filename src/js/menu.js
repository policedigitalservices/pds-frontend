(function (selector) {

    //get div ID without #
    var menu = document.getElementById(selector.replace(/^#/, ''));

    console.log(menu);

    if (menu) {

        var menuButton = document.querySelector(selector + 'Button');
        var menuChild = document.querySelector(menuButton.dataset.target);

        menuButton.addEventListener("click", function(el) {
            console.log(selector + ' clicked');
            el.preventDefault();
            menuChild.classList.add("menu--active");
        });

        window.addEventListener('click', function(e){

            if (!menu.contains(e.target)){
                menuChild.classList.remove("menu--active");
            }

        });

    }

})('#search');

(function (selector) {

    //get div ID without #
    var menu = document.getElementById(selector.replace(/^#/, ''));

    console.log(menu);

    if (menu) {

        var menuButton = document.querySelector(selector + 'Button');
        var menuChild = document.querySelector(menuButton.dataset.target);

        menuButton.addEventListener("click", function(el) {
            console.log(selector + ' clicked');
            el.preventDefault();
            menuChild.classList.add("menu--active");
        });

        window.addEventListener('click', function(e){

            if (!menu.contains(e.target)){
                menuChild.classList.remove("menu--active");
            }

        });

    }

})('#menu');