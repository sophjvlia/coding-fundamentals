const quoteText = document.querySelector('#quote-text')
const quoteAuthor = document.querySelector('#quote-author')
const newQuote = document.querySelector('#new-quote')

function getRandomQuote() {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
        quoteText.textContent = data.content
        quoteAuthor.textContent = `— ${data.author}` 
    })
}

newQuote.addEventListener('click', () => {
    getRandomQuote()
}) 
