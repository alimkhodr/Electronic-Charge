var container = document.getElementById('slider-container');
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else if (w < 901) {
        slidesPerPage = 2;
    } else if (w < 1101) {
        slidesPerPage = 3;
    } else {
        slidesPerPage = 4;
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition = slidesCount;
    }
    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    updateButtons();
}

function updateButtons() {
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    } else {
        buttons[0].classList.remove('inactive');
    }

    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    } else {
        buttons[1].classList.remove('inactive');
    }
}

function slideRight() {
    if (currentPosition > 0) {
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    } else {
        currentPosition = slidesCount;
        currentMargin = -currentPosition * (100 / slidesPerPage);
    }
    slider.style.marginLeft = currentMargin + '%';
    updateButtons();
}

function slideLeft() {
    if (currentPosition < slidesCount) {
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    } else {
        currentPosition = 0;
        currentMargin = 0;
    }
    slider.style.marginLeft = currentMargin + '%';
    updateButtons();
}

setParams(containerWidth);
