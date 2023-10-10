const btn = document.querySelector('.menu__btn');
const nav = document.querySelector('.header__nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});