document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.menu');
    const ul = document.querySelector('.menu-list');
    const links = document.querySelectorAll('.menu-list-anchor');
    const siteTitle = document.querySelector('.site-title');
    const siteTitleAnchor = siteTitle.querySelector('a');
    const hamburger = document.querySelector('.hamburger');
    function scrollInto() {
        console.log(links)

        for (const a of links) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                ul.classList.remove('menu-list--active');
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

        if (document.body.scrollTop > 950 && window.innerWidth > 1250 || document.documentElement.scrollTop > 950 && window.innerWidth > 1250) {
            nav.classList.remove('menu');
            nav.classList.add('fixed_menu');
            for (const a of links) {
                a.style.color = "#000";
                a.style.textShadow = "none";
            }
            siteTitleAnchor.style.color = "#000";
            siteTitleAnchor.style.textShadow = "none";
            siteTitle.style.paddingTop = "23px";
        }
        else {
            nav.classList.remove('fixed_menu');
            nav.classList.add('menu');
            for (const a of links) {
                a.style.color = "#fff";
                a.style.textShadow = "black 0.1em 0.1em 0.2em";
            }
            siteTitleAnchor.style.color = "#fff";
            siteTitleAnchor.style.textShadow = "black 0.1em 0.1em 0.2em";
            siteTitle.style.paddingTop = "6px";
        }
    }

    function hamburgerMenu() {
        hamburger.addEventListener('click', function () {
            ul.classList.toggle('menu-list--active');
        });
    }

    scrollInto();
    hamburgerMenu();
    window.onscroll = function () { fixedMenu() };
});