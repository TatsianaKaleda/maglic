// Для фильтра картинок work-section
function filterSelection(filteredItem, elem) {
    var galleryItems = document.getElementsByClassName("picture");
    $('.gallery-filter.active').removeClass('active');
    $(elem).addClass('active');
    $(galleryItems).fadeOut(300);
    setTimeout(function () {
        $(filteredItem).fadeIn(300);
    }, 300);
}

// для карусели с отзывами
$('#myCarousel').on('slide.bs.carousel', function (e) {
    var avatars = document.getElementsByClassName("review-avatar");
    for (var i = 0; i < avatars.length; i ++) {
        $(avatars[i]).removeClass('active');
        if (+avatars[i].dataset.slideTo === e.to) {
            $(avatars[i]).addClass('active');
        }
    }
});

// для открытия новой страницы
function goToServicesPage() {
    window.location.href = "services-page.html";
} 

// ф-ция для будстраповской формы
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

// для прелоида при загрузке страницы
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});

// для счетчика
$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
// мобильное меню