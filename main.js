
    const container = document.querySelector('.mainGrid');
    const content = document.createElement('div');
    const btn = document.querySelector('#btn');

    let rowNrS = 1;
    let rowNrE = 2;
    let colNrS = 3;
    let colNrE = 4;

    function createDiv(){
        const content = document.createElement('div');

        content.classList.add('piece-1');
        content.style.gridColumnStart = colNrS;
        content.style.gridColumnEnd = colNrE;
        content.style.gridRowStart = rowNrS;
        content.style.gridRowEnd = rowNrE;
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
    
    }

    btn.addEventListener('click', createDiv);
    
