const menu_toggle = document.querySelector('.nav-menu-toggle');
const menu_icon = document.querySelector('.nav-menu-toggle ion-icon');
const menu = document.querySelector('.nav-menu');

menu_toggle.addEventListener('click', (e) => {
    e.preventDefault();

    if(menu.dataset.open == '1') {
        gsap.to(menu, {height: 0});
        menu_icon.setAttribute("name", "menu");
        menu.dataset.open = 0;
    } else {
        menu_icon.setAttribute("name", "close");
        gsap.to(menu, {height: 'auto'});
        menu.dataset.open = 1;
    }

});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // If screen is larger than mobile/tablet size, close the menu
        gsap.to(menu, { height: 'auto' });
        menu_icon.setAttribute("name", "menu");
        menu.dataset.open = 0;
    } else {
        // If screen is mobile/tablet size, keep menu closed initially
        gsap.to(menu, { height: 0 });
        menu_icon.setAttribute("name", "menu");
        menu.dataset.open = 0;
    }
});

$(document).ready(function(){
    $('.galleryslider').slick({
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000, // Speed of the autoplay in milliseconds
        dots: true, // Show dots for navigation
        arrows: false, // Show arrows for navigation
 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


