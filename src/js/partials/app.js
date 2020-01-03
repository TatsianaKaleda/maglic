function filterSelection(filteredItem, elem) {
    var galleryItems = document.getElementsByClassName("picture");
    $('.gallery-filter.active').removeClass('active');
    $(elem).addClass('active');
    $(galleryItems).fadeOut(300);
    setTimeout(function () {
        $(filteredItem).fadeIn(300);
    }, 300);
}