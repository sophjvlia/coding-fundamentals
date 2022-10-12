const commandPalette = document.querySelector('.wrapper')

window.addEventListener('keydown', checkKeyPress)

function checkKeyPress(event) {
    if (event.ctrlKey && event.key == 'k') {
        event.preventDefault();
        commandPalette.classList.remove('hidden')
    }
} 