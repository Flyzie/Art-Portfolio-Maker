
    const container = document.querySelector('.mainGrid');
    const popupAdd = document.querySelector('.popupAdd');
    const piece = document.querySelector('.piece-1')

    const btn = document.querySelector('#btn');
    const btnClose = document.querySelector('#btnClose')
    const btnFinalize = document.querySelector('#popupFinalize');
    const removeBtn = document.querySelector('#btnRemove');

    const name = document.querySelector('#name');
    const dsc = document.querySelector('#description'); 
    const fileSelector = document.querySelector('#Artwork');

    

    function generateId(){
        return "id" + Math.random().toString(16).slice(2);
    }

    function assignId(element, id){
        
        element.setAttribute('uid', id);
    }

    function createDivFromData(data) {
        const content = document.createElement('div');
        const label = document.createElement('h1');
        const description = document.createElement('p');
        const image = document.createElement('img');
        const textBox = document.createElement('div');
        const removeBtn = document.createElement('button');
        const closeIcon = document.createElement('img');
        const imageLinker = document.createElement('a');
    
        imageLinker.id = 'image_linker';
        imageLinker.href = '/html/artwork.html';
    
        content.classList.add('piece-1');
        removeBtn.classList.add('btnRemove');
        closeIcon.src = "/img/cross.png";
        removeBtn.id = 'btnRemove';
        textBox.classList.add('textBox');
    
        label.innerHTML = data.title;
        description.innerHTML = data.description;
        image.setAttribute('src', data.image);
    
        removeBtn.appendChild(closeIcon);
        textBox.appendChild(label);
        textBox.appendChild(description);
        imageLinker.appendChild(image);
        content.appendChild(imageLinker);
        content.appendChild(removeBtn);
        content.appendChild(textBox);
    
        assignId(removeBtn, data.uid);
        assignId(content, data.uid);
    
        removeBtn.addEventListener('click', function () {
            removeDivFromData(data.uid);
        });

        imageLinker.addEventListener('click', function(){
            console.log('Artwork clicked');
            imageLinker.href = '/html/artwork.html?uid=' + data.uid;
        });
    
        container.appendChild(content);
        popupAdd.classList.remove('open');
    }

    // Function to remove div from sessionStorage
    function removeDivFromData(id) {
        // Remove the div from the DOM
        const divToRemove = document.querySelector('.piece-1[uid="' + id + '"]');
        divToRemove.remove();

        // Retrieve existing data from sessionStorage
        const existingData = JSON.parse(sessionStorage.getItem('artworkData')) || [];

        // Find the index of the data to be removed
        const index = existingData.findIndex(data => data.uid === id);

        // Remove the data from the existing data array
        if (index !== -1) {
            existingData.splice(index, 1);
        }

        // Save the updated data back to sessionStorage
        sessionStorage.setItem('artworkData', JSON.stringify(existingData));
    }
    
    // Function to load data to sessionStorage
    function loadToJSON(name, description) {
        const newData = {
            uid: generateId(),
            title: name,
            description: description,
            image: URL.createObjectURL(fileSelector.files[0])
        };
    
        // Get existing data from sessionStorage
        const existingData = JSON.parse(sessionStorage.getItem('artworkData')) || [];
    
        // Add new data to the existing data
        existingData.push(newData);
    
        // Save the updated data back to sessionStorage
        sessionStorage.setItem('artworkData', JSON.stringify(existingData));

        // Call the function to create a div from the new data
        createDivFromData(newData);
    }

    function updateFromJSONFile(id){
        const selectedDiv = document.querySelector('.piece-1[uid="' + id + '"]');
        const myRequest = new Request("/json/storage.json");

        fetch(myRequest)
        .then(response => response.json()) 
        .then(data => {
            console.log(data);
        // Find the specific object in the data array that matches the id
        const specificData = data.find(item => item.uid === id);

        if (specificData) {
            const children = selectedDiv.childNodes;

            for(const child of children){

                if(child.tagName == 'DIV'){
                    const label = child.querySelector('h1');
                    const description = child.querySelector('p');
                    label.innerHTML = specificData.title;
                    description.innerHTML = specificData.description;
        
                }
                if(child.tagName == 'A'){
                   const image =  child.querySelector('img');
                   image.setAttribute('src', specificData.image);
                }
            }
        } else {
            console.error('No data found with the specified id');
        }

        const existingData = JSON.parse(sessionStorage.getItem('artworkData')) || [];
        existingData.push(specificData);
        sessionStorage.setItem('artworkData', JSON.stringify(existingData));
        });
    }

    function updateArtwork(id){

    }

    
    // Add this block of code to retrieve and display existing data during page load
    window.onload = function () {
        const existingData = JSON.parse(sessionStorage.getItem('artworkData')) || [];
        existingData.forEach((data) => {
            createDivFromData(data);
        });

    };

    btn.addEventListener('click', () => {
        popupAdd.classList.add('open');
    });

    btnClose.addEventListener('click', () => {
        popupAdd.classList.remove('open');
    });
    
    btnFinalize.addEventListener('click', () => {
        loadToJSON(name.value, dsc.value);
        console.log('session storage: ',JSON.parse(sessionStorage.getItem('artworkData')));
    });
    
