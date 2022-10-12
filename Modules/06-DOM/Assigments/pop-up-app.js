const addButton = document.querySelector('.add__button')
const notification = document.querySelector('.notification')
const deleteButton = document.querySelector('.cta__button')

addButton.addEventListener('click', () => {
    notification.classList.add('show') 
})

deleteButton.addEventListener('click', () => {
    notification.classList.remove('show')
})