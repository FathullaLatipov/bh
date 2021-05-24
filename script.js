$(window).load(function() {
        setTimeout(function() {
            $('#preloader').velocity({
                opacity: 0.1,
                translateY: "-80px"
            }, {
                duration: 400,
                complete: function() {
                    $('#hola').velocity({
                        translateY: "-100%"
                    }, {
                        duration: 1000,
                        easing: [0.7, 0, 0.3, 1],
                        complete: function() {
                            $('.home').addClass('animate-border divide');
                        }
                    })
                }
            })
        }, 1000)
    })
    // mobile menu
var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
    toggle.classList.toggle("menu-open");
};

function toggleMenu() {
    menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);