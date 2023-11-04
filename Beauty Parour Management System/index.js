const menu = () => {
    // var a = document.getElementById('menu').classList.toggle('show');
    ele = document.getElementById('menu').classList.toggle('show');
    console.log(a);
}



const slides = document.querySelectorAll(".slide");
let counter = 0;
const intervalTime = 3000; // Change this to adjust the interval time (in milliseconds)
let slideInterval;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const startSlideShow = () => {
    slideInterval = setInterval(() => {
        counter++;
        if (counter >= slides.length) {
            counter = 0;
        }
        slideImage();
    }, intervalTime);
}

const stopSlideShow = () => {
    clearInterval(slideInterval);
}

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
    stopSlideShow(); // Stop the auto slide when user manually navigates
}

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImage();
    stopSlideShow(); // Stop the auto slide when user manually navigates
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

startSlideShow();


