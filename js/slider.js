document.addEventListener('DOMContentLoaded', function () {

    function sleep(ms) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + ms);
    }

    const Slider = function (options) {
        this.params = options;
        this.currentSlide = 0;
        this.prev = null;
        this.next = null;
        this.time = null;
        this.slides = null;
        this.dots = [];

        this.getOpinionSlider();
        this.changeSlide(this.currentSlide);

    }

    Slider.prototype.getOpinionSlider = function () {
        this.prev = document.querySelector(this.params.leftClass);
        this.prev.addEventListener('click', this.slidePrev.bind(this));

        this.next = document.querySelector(this.params.rightClass);
        this.next.addEventListener('click', this.slideNext.bind(this));

        this.slides = document.querySelectorAll(this.params.slidesClass);
        this.dots = document.querySelectorAll(this.params.dotsClass);

        for (const dot of this.dots) {
            dot.addEventListener('click', function () {
                this.changeSlide(Number(dot.dataset.index));
            }.bind(this));
        }
    }

    Slider.prototype.changeSlide = function (index) {

        for (slide of this.slides) {
            slide.classList.remove(this.params.activeSlidesClass);
            slide.setAttribute('aria-hidden', true);
        }
        this.slides[index].classList.add(this.params.activeSlidesClass);
        this.slides[index].setAttribute('aria-hidden', false);

        for (dot of this.dots) {
            dot.classList.remove(this.params.activeDotsClass);
        }
        this.dots[index].classList.add(this.params.activeDotsClass);

        this.currentSlide = index;

        clearInterval(this.time);
        this.time = setTimeout(function () {
            this.slideNext();
        }.bind(this), 6000);
    }

    Slider.prototype.slidePrev = function () {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        this.changeSlide(this.currentSlide);
    }

    Slider.prototype.slideNext = function () {
        this.currentSlide++;
        if (this.currentSlide > this.slides.length - 1) {
            this.currentSlide = 0;
        }
        this.changeSlide(this.currentSlide);
    }

    const HappyClientsParams = {
        leftClass: ".happy_clients-left",
        rightClass: ".happy_clients-right",
        slidesClass: ".happy_clients-opinion",
        activeSlidesClass: "happy_clients-active_opinion",
        dotsClass: ".happy_clients-dots-dot",
        activeDotsClass: "happy_clients-dots-active"
    }

    const MainSliderParams = {
        leftClass: ".overlay-left",
        rightClass: ".overlay-right",
        slidesClass: ".overlay",
        activeSlidesClass: "none",
        dotsClass: ".overlay-dots-dot",
        activeDotsClass: "overlay-dots-active"
    }
    const happyClientsSlider = new Slider(HappyClientsParams);
    // const MainSlider = new Slider(MainSliderParams);
})