$(function () {
    var startX, endX, changeX;
    var carousel_inner = $(".carousel-inner")[0];
    var carousel = $(".carousel");

    carousel_inner.addEventListener("touchstart", function (e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend", function (e) {
            endX = e.changedTouches[0].clientX;
            changeX = endX - startX;
            if (changeX > 0) {
                carousel.carousel('prev');
            }
            else if (changeX < 0) {
                carousel.carousel('next');
            }
        }
    )
});