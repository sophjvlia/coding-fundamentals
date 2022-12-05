const userImage = document.querySelector('#user-image')
const userName = document.querySelector('#user-name')
const userBio = document.querySelector('#user-bio')
const userJoin = document.querySelector('#user-join')
const getForm = document.querySelector('#get-form')
const getButton = document.querySelector('#get-button')

function formatDate(date) {
    return [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join('/');
  }

getForm.addEventListener('click', async function(e) {
    e.preventDefault() 
    const ENDPOINT = 'https://api.github.com/users/'
    const username = document.getElementById('input-value').value 


    await fetch(ENDPOINT+username) 
        .then((response) => response.json())
        .then((data) => {
            userImage.src = data.avatar_url
            userName.textContent = data.login

            if (data.bio === '') {
                userBio.textContent = 'Null'
            } else {
                userBio.textContent = data.bio
            }

            // I was unable to convert the date into DD/MM/YYYY format.
            userJoin.textContent = `Joined on: ${data.created_at}` 
        })
        .catch((error) => {
            console.log('Error') 
        })
}) 
