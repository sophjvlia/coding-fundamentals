const catCard = document.querySelector('.card__container');

const ENDPOINT = 'https://api.thecatapi.com/v1/breeds';

async function getCats() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    console.log(data);
    return data; 
}

async function displayCats() {  
    const cats = await getCats();

    for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];

        cats.forEach((cat) => { 
            catCard.innerHTML += `
                <div class="cat__card">
                    <div>
                        <img class="cat__image" id="cat-image" src="${cat.image.url}">

                        <h3 class="cat__info" id="cat-name">${cat.name}</h3>

                        <p class="cat__info" id="cat-info">${cat.description}</p>
                    </div>

                    <div class="profile__link">
                        <a href="./cat-profile.html">Profile</a>
                    </div>
                </div>
            ` 
        });
    } 
}

window.addEventListener('load', async() => {
    await displayCats();
})