var Swipes = new Swiper('.swiper-container', {
    direction: 'vertical',
    speed: 1500,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(document).ready(function () {
    $(".mainContainer").on("click", function () {
        $(".hamburgDiv").removeClass("animate");
        $(".NavbarTogle").removeClass("NavbarTogleClass")
        $(".uparToggleNav").removeClass("uparToggleNavClass")

    })
    $(".menu,.hamburgDiv").on("click", function () {
        $(".hamburgDiv").toggleClass("animate");
        $(".NavbarTogle").toggleClass("NavbarTogleClass")
        $(".uparToggleNav").toggleClass("uparToggleNavClass")
    })
})

