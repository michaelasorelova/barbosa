window.addEventListener('load', () => {
    const menu = document.querySelector('.nav__menu');
    const toggle = document.querySelector('.nav__toggle');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('uil-multiply');
        toggle.classList.toggle('uil-bars');
    });
});
