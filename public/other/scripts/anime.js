const img = document.querySelector(".photo")
let api_url = 'https://cors-demo.glitch.me/'

async function getImage() {
    fetch(api_url, {mode:'cors'}).then(
        raw => raw.json()
    ).then(req => {
        console.log(req)
    })
    .catch(error => console.warn(`Hey! We can't do that: ${error}`))
}