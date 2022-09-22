const menu = document.querySelector('.menu')

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)