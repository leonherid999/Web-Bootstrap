document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".carousel-indicator");

    let currentIndex = 0;
    let intervalTime = 4000;
    let autoPlay;

    function goToSlide(index) {
        slides[currentIndex].classList.remove("current-slide");
        indicators[currentIndex].classList.remove("current-slide");

        currentIndex = index;

        slides[currentIndex].classList.add("current-slide");
        indicators[currentIndex].classList.add("current-slide");
    }

    function nextSlide() {
        let next = (currentIndex + 1) % slides.length;
        goToSlide(next);
    }

    // autoplay start
    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, intervalTime);
    }

    function restartAutoPlay() {
        clearInterval(autoPlay);
        startAutoPlay();
    }

    // buttons
    document.querySelector(".next").addEventListener("click", () => {
        nextSlide();
        restartAutoPlay();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        let prev = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prev);
        restartAutoPlay();
    });

    // dot navigation
    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            goToSlide(i);
            restartAutoPlay();
        });
    });

    // start auto
    startAutoPlay();
});
