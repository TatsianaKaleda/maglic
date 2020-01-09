function filterSelection(filteredItem, elem) {
    var galleryItems = document.getElementsByClassName("picture");
    $('.gallery-filter.active').removeClass('active');
    $(elem).addClass('active');
    $(galleryItems).fadeOut(300);
    setTimeout(function () {
        $(filteredItem).fadeIn(300);
    }, 300);
}

$('#myCarousel').on('slide.bs.carousel', function (e) {
    var avatars = document.getElementsByClassName("review-avatar");
    for (var i = 0; i < avatars.length; i ++) {
        $(avatars[i]).removeClass('active');
        if (+avatars[i].dataset.slideTo === e.to) {
            $(avatars[i]).addClass('active');
        }
    }
});

function goToServicesPage() {
    window.location.href = "services-page.html";
} 

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});

$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});