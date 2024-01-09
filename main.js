
    
    //const content = document.createElement('div');
    const label = document.createElement('h1');
    const description = document.createElement('p');
    const image = document.createElement('img');

    const container = document.querySelector('.mainGrid');
    const popupAdd = document.querySelector('.popupAdd');
    const piece = document.querySelector('.piece-1')

    const btn = document.querySelector('#btn');
    const btnFinalize = document.querySelector('#popupFinalize');
    const removeBtn = document.querySelector('#btnRemove');

    const name = document.querySelector('#name');
    const dsc = document.querySelector('#description'); 
    const fileSelector = document.querySelector('#Artwork');

    function removeDiv(id){
        const divToRemove = document.querySelector('.piece-1[uid="' + id + '"]');
        divToRemove.remove();
    }

    function generateId(){
        return "id" + Math.random().toString(16).slice(2);
    }

    function assignId(element, id){
        
        element.setAttribute('uid', id);
    }
    
    function createDiv(){
        const content = document.createElement('div');
        const label = document.createElement('h1');
        const description = document.createElement('p');
        const image = document.createElement('img');
        const textBox = document.createElement('div');
        const removeBtn = document.createElement('button');
        const closeIcon = document.createElement('img');
        const imageLinker = document.createElement('a')

        const uniqueId = generateId();

        imageLinker.id = 'image_linker';
        imageLinker.href = 'artwork.html';
    
        content.classList.add('piece-1');

        removeBtn.classList.add('btnRemove');
        closeIcon.src = "cross.png";
        removeBtn.id = 'btnRemove';

        textBox.classList.add('textBox');
        
        label.innerHTML = document.getElementById('name').value;
        description.innerHTML = document.getElementById('description').value;

        image.setAttribute('src', URL.createObjectURL(fileSelector.files[0]));

        removeBtn.appendChild(closeIcon);
        textBox.appendChild(label);
        textBox.appendChild(description);
        imageLinker.appendChild(image);
        content.appendChild(imageLinker);
        content.appendChild(removeBtn);
        content.appendChild(textBox);

        assignId(removeBtn, uniqueId);
        assignId(content, uniqueId);

        removeBtn.addEventListener('click', function() {
            removeDiv(uniqueId);
        });
    
        container.appendChild(content);

        popupAdd.classList.remove('open');
    }


    removeBtn.addEventListener('click', ()=> {
        if(removeBtn.getAttribute('uid') == piece.getAttribute('uid')){
            removeDiv(removeBtn.getAttribute('uid'));
        }else{
            console.log('error');
        }
    });

    btn.addEventListener('click', () => {
        popupAdd.classList.add('open');
    });
    
    btnFinalize.addEventListener('click', createDiv);
    
