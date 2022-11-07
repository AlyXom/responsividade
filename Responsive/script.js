let button = document.querySelector('.botao')
const body = document.querySelector('main')

button.addEventListener('click', cross)
body.addEventListener('click', menu)

function cross() {
    if (button.src="menu-burger.svg") {
        button.src="cross.svg"
        console.log(button.src)
    }
} 

function menu() {
    if (button.src) {
        button.src="menu-burger.svg"
        console.log(button.src)
    }
}