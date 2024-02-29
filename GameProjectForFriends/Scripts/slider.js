$(document).ready(function () {
    var currentIndex = 0;
    var slideCount = $(".play-card-card").length;
    var slideWidth = $(".play-card-card").outerWidth();

    $(".next-btn").click(function () {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;  // Циклическая прокрутка, если достигнут конец
        }
        updateSlider();
    });

    $(".prev-btn").click(function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - 1;  // Циклическая прокрутка, если достигнуто начало
        }
        updateSlider();
    });

    function updateSlider() {
        var translateValue = -currentIndex * slideWidth;
        $(".slider").css("transform", "translateX(" + translateValue + "px)");
        updateButtons();
    }

    function updateButtons() {
        $(".prev-btn").prop("disabled", currentIndex === 0);
        $(".next-btn").prop("disabled", currentIndex === slideCount - 1);
    }

    updateButtons();
});
