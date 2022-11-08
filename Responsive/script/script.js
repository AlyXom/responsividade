let button = document.querySelector('.botao')
const body = document.querySelector('main')
let nav = document.querySelector('nav')
let iCross = document.getElementById('cross')

button.addEventListener('click', cross)
iCross.addEventListener('click', menu)

function cross() {
        nav.style.cssText = 'transition: .3s;margin-left: 4px;visibility: visible';

} 

function menu() {
    nav.style.cssText= 'margin-left: -102;transition: .3s;';
}