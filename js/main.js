/* Мобильное меню */

const mobileMenuOpenBtn = document.querySelector('.page-header__burger-btn')
const mobileMenu = document.querySelector('.page-header__nav')
const mobileLogoBLock = document.querySelector('.page-header__logo-box')
const mobileBurgerBtn = document.querySelector('.page-header__burger-btn')


function mobileHidden() {
    if (mobileMenu.classList.contains('page-header__nav--mobile-close') === true) {
        mobileMenu.classList.remove('page-header__nav--mobile-close')
    }
}


mobileMenuOpenBtn.addEventListener('click', function () {
    mobileBurgerBtn.classList.toggle('page-header__burger-btn--close');

    if (mobileMenu.classList.contains('page-header__nav--mobile-open') === true) {
        mobileMenu.classList.add('page-header__nav--mobile-close')
        mobileMenu.classList.remove('page-header__nav--mobile-open')
        setTimeout(mobileHidden, 1000);
    } else {
        mobileMenu.classList.remove('page-header__nav--mobile-close')
        mobileMenu.classList.add('page-header__nav--mobile-open')
    }
});

/* --------------------------*/