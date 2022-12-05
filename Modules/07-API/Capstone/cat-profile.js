// I managed to display 5 pictures of the same cat only.

const picture = document.querySelector('.picture__container');

const ENDPOINT = 'https://api.thecatapi.com/v1/breeds';

async function getCats() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    console.log(data);
    return data; 
}

async function displayPictures() {  
    const cats = await getCats();

    for (let i = 0; i < 5; i++) {
        const cat = cats[i];

        cats.slice(-1).forEach((cat) => { 
            picture.innerHTML += `
                <img class="picture" src="${cat.image.url}" alt="cat">
            ` 
        });
    } 
}

window.addEventListener('load', async() => {
    await displayPictures();
})
