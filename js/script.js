document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu-list-anchor');
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
})