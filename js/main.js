$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(".counter").counterUp({delay:10,time:1200});


$('.row').on('click', '.two', function(){
    var konkretnoDugme = $(this).attr('data-target');
    $(konkretnoDugme).fadeToggle(500);
});


// Hamburger-menu

const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () =>{
    navbar.classList.toggle("change");
});






      



