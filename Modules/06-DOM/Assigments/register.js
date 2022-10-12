const registerButton = document.querySelector('.register-button')
const panel = document.querySelector('.wrapper')
const closeButton = document.querySelector('.close-button') 

registerButton.addEventListener('click', () => {
    panel.classList.remove('hidden')
    panel.classList.add('slide-in') 
}) 

closeButton.addEventListener('click', () => {
    panel.classList.remove('slide-in')
    panel.classList.add('hidden')
}) 