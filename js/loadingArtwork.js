
function loadArtwork(id){
        const artworkDisplay = document.querySelector('#artwork_display');
        const image = artworkDisplay.firstElementChild;
        const name = document.querySelector('#artwork_text > h1');
        const description = document.querySelector('#artwork_text > p');

        const existingData = JSON.parse(sessionStorage.getItem('artworkData')) || [];
        const index = existingData.findIndex(data => data.uid === id);

        if (index !== -1) {

            const data = existingData[index];
            console.log(data);
            name.innerHTML = data.title;
            description.innerHTML = data.description;
            image.src = data.image;
            
        } else {

            console.error('Artwork data not found.');
        }
}
// Load artwork data from sessionStorage using id in url
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    if (uid) {
        loadArtwork(uid);
    }
}