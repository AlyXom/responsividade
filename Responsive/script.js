let button = document.querySelector('.botao')
const body = document.querySelector('main')
let nav = document.querySelector('nav')

button.addEventListener('click', cross)
body.addEventListener('click', menu)

function cross() {
    if (button.src="menu-burger.svg") {
        button.src="cross.svg"
        nav.style.cssText = 'transition: .3s;margin-left: 4px;visibility: visible';
    }
} 

function menu() {
    if (button.src) {
        button.src="menu-burger.svg"
        nav.style.cssText= 'margin-left: -102;transition: .3s;';
    }
}