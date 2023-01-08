window.addEventListener('load', () => {
    const menu = document.querySelector('.nav__menu');
    const toggle = document.querySelector('.nav__toggle');
    const body = document.querySelector('body');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
        toggle.classList.toggle('uil-multiply');
        toggle.classList.toggle('uil-bars');
    });
});
