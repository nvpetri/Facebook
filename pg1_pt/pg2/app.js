const apiKey = '41Ap8BBPuKfQeclpjj3Vv3DpEX0JAFFdG4h92EcxL7RIczK0wuoQ6b5v'
const numberOfImages = 40
const theme = 'gaming setup'
const apiUrl = `https://api.pexels.com/v1/search?query=${theme}&per_page=${numberOfImages}`

fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': apiKey,
        }
    })
    .then(response => response.json())
    .then(data => {
        const photos = data.photos;
        const container = document.getElementById('imagem-container')

        photos.forEach(photo => {
            const imgcontainer = document.createElement('div')
            const imgElement = document.createElement('img')
            imgcontainer.classList.add('imgContainer')
            imgElement.src = photo.src.medium
            imgElement.alt = photo.photographer
            imgcontainer.appendChild(imgElement)
            container.appendChild(imgcontainer)
        });
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error)
    })