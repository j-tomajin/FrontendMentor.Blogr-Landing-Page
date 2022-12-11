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

// DROPDOWN
const productBtn = document.getElementById('product-btn')
const companyBtn = document.getElementById('company-btn')
const connectBtn = document.getElementById('connect-btn')

productBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropDown(productBtn)
})

companyBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropDown(companyBtn);
})

connectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropDown(connectBtn);
})

const toggleDropDown = element => {
    const Parent = element.parentElement
    const dropdown = Parent.querySelector('.dropdown')

    dropdown.classList.toggle('show-dropdown')
    Parent.classList.toggle('btn-toggle')
}

document.documentElement.addEventListener("click", function () {
    const dropdownall = document.querySelectorAll('.show-dropdown')
    const btntoggle = document.querySelectorAll('.btn-toggle')

    dropdownall.forEach(element => {
        element.classList.remove('show-dropdown')

        nav.classList.remove('nav-show')

        btntoggle.forEach(element => {
            element.classList.remove('btn-toggle')
        })

        menu.src = './images/icon-hamburger.svg'
    })
});
