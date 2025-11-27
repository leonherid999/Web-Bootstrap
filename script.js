document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".carousel-indicator");

    let currentIndex = 0;
    let intervalTime = 4000;
    let autoPlay;

    function goToSlide(index) {
        const oldSlide = slides[currentIndex];
        const newSlide = slides[index];

        oldSlide.classList.add("fade-out");

        indicators[currentIndex].classList.remove("current-slide");
        indicators[index].classList.add("current-slide");

        currentIndex = index;

        newSlide.classList.add("current-slide");

        setTimeout(() => {
            oldSlide.classList.remove("current-slide", "fade-out");
        }, 1000);
    }

    function nextSlide() {
        let next = (currentIndex + 1) % slides.length;
        goToSlide(next);
    }

    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, intervalTime);
    }

    function restartAutoPlay() {
        clearInterval(autoPlay);
        startAutoPlay();
    }

    document.querySelector(".next").addEventListener("click", () => {
        nextSlide();
        restartAutoPlay();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        let prev = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prev);
        restartAutoPlay();
    });

    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            goToSlide(i);
            restartAutoPlay();
        });
    });

    startAutoPlay();
});

