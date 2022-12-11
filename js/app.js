const navMenu = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const nav = document.getElementById('nav')

navMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-show')

    if(!menu.src.match('icon-hamburger.svg')) {
        menu.src = './images/icon-hamburger.svg';
    } else {
        menu.src = './images/icon-close.svg'
    }
})

const productBtn = document.getElementById('product-btn')
const companyBtn = document.getElementById('company-btn')
const connectBtn = document.getElementById('connect-btn')

productBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropDown();
})

companyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropDown();
})

connectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropDown();
})