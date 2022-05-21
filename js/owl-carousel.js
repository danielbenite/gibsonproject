$(document).ready(function () {
    $(".gb-slider-main").owlCarousel({
        margin: -5,
        loop: true,
        center: true,
        mergeFit: false,
        autoWidth: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            1200: {
                items: 1
            }
        },
        autoplay: false,
        autoplayTimeout: 6000,
    });
})

$(document).ready(function () {
    $(".gb-slider-brands").owlCarousel({
        margin: 90,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 5
            },

            600: {
                items: 5
            },

            1200: {
                items: 5
            }
        },
        autoplay: false,
        autoplayTimeout: 6000,
    });
})

$(document).ready(function () {
    $(".gb-slider-fresh").owlCarousel({
        margin: 0,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 4
            },

            600: {
                items: 4
            },

            1200: {
                items: 4
            }
        },
        autoplay: false,
        autoplayTimeout: 6000,
    });
})

$(document).ready(function () {
    $(".gb-slider-best").owlCarousel({
        margin: 0,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },

            600: {
                items: 3
            },

            1200: {
                items: 3
            }
        },
        autoplay: false,
        autoplayTimeout: 6000,
    });
})