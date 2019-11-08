document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu-list-anchor');
    function scrollInto() {
        console.log(links)

        for (const a of links) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                const href = a.getAttribute('href');
                const target = document.querySelector(href);

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        }
    }

    function fixedMenu() {

        if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
            nav.classList.remove('menu');
            nav.classList.add('fixed_menu');
            for (const a of links) {
                a.style.color = "#000";
                a.style.textShadow = "none";
            }
        }
        else {
            nav.classList.remove('fixed_menu');
            nav.classList.add('menu');
            for (const a of links) {
                a.style.color = "#fff";
                a.style.textShadow = "black 0.1em 0.1em 0.2em";
            }
        }
    }

    scrollInto();
    window.onscroll = function () { fixedMenu() };
});