
    
    const content = document.createElement('div');
    const label = document.createElement('h1');
    const description = document.createElement('p');

    const container = document.querySelector('.mainGrid');
    const popupAdd = document.querySelector('.popupAdd');
    const btn = document.querySelector('#btn');
    const btnFinalize = document.querySelector('#popupFinalize');
    const name = document.querySelector('#name');
    const dsc = document.querySelector('#description');

    let rowNrS = 1;
    let rowNrE = 2;
    let colNrS = 3;
    let colNrE = 4;

    function createDiv(){
        const content = document.createElement('div');
        const label = document.createElement('h1');
        const description = document.createElement('p');



        content.classList.add('piece-1');
        content.style.gridColumnStart = colNrS;
        content.style.gridColumnEnd = colNrE;
        content.style.gridRowStart = rowNrS;
        content.style.gridRowEnd = rowNrE;
        container.appendChild(content);

        label.innerHTML = document.getElementById('name').value;
        description.innerHTML = document.getElementById('description').value;

        content.appendChild(label);
        content.appendChild(description);






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

    btn.addEventListener('click', () => {
        popupAdd.classList.add('open');
    });
    btnFinalize.addEventListener('click', createDiv);
    
