const menuBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav__list');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('is-active');
    
    menuBtn.classList.toggle('is-active');
});


document.querySelectorAll('.items a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('is-active');
    });
});
