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