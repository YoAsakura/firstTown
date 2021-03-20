/* Мобильное меню */

const mobileMenuOpenBtn = document.querySelector('.page-header__burger-btn')
const mobileMenu = document.querySelector('.page-header__nav')
const mobileLogoBLock = document.querySelector('.page-header__logo-box')

mobileMenuOpenBtn.addEventListener('click', function(){
    mobileLogoBLock.classList.toggle('page-header__logo-box--blue-back');
    mobileMenu.classList.toggle('page-header__nav--mobile-open');
});

 /* --------------------------*/
