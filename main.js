
    
    //const content = document.createElement('div');
    const label = document.createElement('h1');
    const description = document.createElement('p');
    const image = document.createElement('img');

    const container = document.querySelector('.mainGrid');
    const popupAdd = document.querySelector('.popupAdd');
    const btn = document.querySelector('#btn');
    const btnFinalize = document.querySelector('#popupFinalize');
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
        const closeBtn = document.createElement('button');
        const closeIcon = document.createElement('img');
    
        content.classList.add('piece-1');
        content.style.gridColumnStart = colNrS;
        content.style.gridColumnEnd = colNrE;
        content.style.gridRowStart = rowNrS;
        content.style.gridRowEnd = rowNrE;

        closeBtn.classList.add('closeBtn');
        closeIcon.src = "cross.png";

        textBox.classList.add('textBox');
        
        label.innerHTML = document.getElementById('name').value;
        description.innerHTML = document.getElementById('description').value;

        image.setAttribute('src', URL.createObjectURL(fileSelector.files[0]));

        closeBtn.appendChild(closeIcon);
        textBox.appendChild(label);
        textBox.appendChild(description);
        content.appendChild(image);
        content.appendChild(closeBtn);
        content.appendChild(textBox);
        
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

    function removeDiv(){
        
    }

    btn.addEventListener('click', () => {
        popupAdd.classList.add('open');
    });
    
    btnFinalize.addEventListener('click', createDiv);
    
