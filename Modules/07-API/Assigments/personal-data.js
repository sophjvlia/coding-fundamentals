const nameText = document.querySelector('#name')
const ageText = document.querySelector('#age')
const hobbiesList = document.querySelector('#hobbies')
const fetchMe = document.querySelector('#fetch-me') 

const ENDPOINT = 'https://gist.githubusercontent.com/sophjvlia/a960d0211a3f02669adf09e34cec0d36/raw/ef364069e36df302c8bd864cf045c7a0d12e910c/me.json'

async function getData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()
 
    return data  
}

function displayData({ name, age, hobbies}) {
    nameText.textContent = name
    ageText.textContent = age
    hobbies.forEach((hobby) => {
        hobbiesList.innerHTML += `
            <li>${hobby}</li>
        `
    }) 
}

fetchMe.addEventListener('click', async () => {
    const data = await getData()

    displayData(data)  
})