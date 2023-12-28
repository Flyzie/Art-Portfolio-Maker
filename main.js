
    
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

    

    let rowNrS = 1;
    let rowNrE = 2;
    let colNrS = 3;
    let colNrE = 4;
    
    
    function createDiv(){
        const content = document.createElement('div');
        const label = document.createElement('h1');
        const description = document.createElement('p');
        const image = document.createElement('img');
        const textBox = document.createElement('div');
        const removeBtn = document.createElement('button');
        const closeIcon = document.createElement('img');

        const uniqueId = generateId();
    
        content.classList.add('piece-1');
        content.style.gridColumnStart = colNrS;
        content.style.gridColumnEnd = colNrE;
        content.style.gridRowStart = rowNrS;
        content.style.gridRowEnd = rowNrE;

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
        content.appendChild(image);
        content.appendChild(removeBtn);
        content.appendChild(textBox);

        assignId(removeBtn, uniqueId);
        assignId(content, uniqueId);

        removeBtn.addEventListener('click', function() {
            removeDiv(uniqueId);
        });
    
        container.appendChild(content);

        if(colNrS < 5){
            colNrS++;
            colNrE++;
        }else{
            colNrS=2;
            colNrE=3;

            rowNrS++;
            rowNrE++;
        }
        popupAdd.classList.remove('open');
    }

    function removeDiv(id){
        const divToRemove = document.querySelector('.piece-1[uid="' + id + '"]');
        divToRemove.remove();

        colNrS--;
        colNrE--;
        if(colNrS < 2){
            rowNrS--;
            rowNrE--;

            colNrS = 5;
            colNrE = 6;
        }
    }

    function generateId(){
        return "id" + Math.random().toString(16).slice(2);
    }

    function assignId(element, id){
        
        element.setAttribute('uid', id);
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
    
