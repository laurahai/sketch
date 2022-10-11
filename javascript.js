
/*GRID*/
let gridContainer = document.querySelector('.grid-container');

function createGridBoxes(size) {
    for (let i=1; i <= size; i++) {
        let row = document.createElement('div');
        row.classList.add('rows');
        gridContainer.appendChild(row);

        for (let j = 1; j <= size; j++) {
            let column = document.createElement('div');
            column.classList.add('grid-boxes');
            row.append(column);
        }
    }
}

createGridBoxes(24);
hover();

/*HOVER*/

function hover() {
    let gridBoxes = document.querySelectorAll('.grid-boxes');
    
    gridBoxes.forEach( box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('new-bgc');
        })
    } );
}

/*CHANGE GRID SIZE WITH BUTTON*/
let resizeBtn = document.querySelector('.resize-button')
resizeBtn.addEventListener('click', () => {
    let userNumber = window.prompt('Please enter a number from 1 to 100');
    while (userNumber < 1 || userNumber > 100) {
        userNumber = prompt('Please ensure the number is between 1 and 100, inclusive');
    }
    console.log(userNumber);

    let rows = document.querySelectorAll('.rows');
    rows.forEach( row => {
        gridContainer.removeChild(row);
    });
    
    createGridBoxes(userNumber);
    hover();
    
});

/*CLEAR GRID*/
let clearBtn = document.querySelector('.clear-button')
clearBtn.addEventListener('click', () => {
    let gridBoxes = document.querySelectorAll('.grid-boxes');
    gridBoxes.forEach( box => {
        box.classList.remove('new-bgc');
    });
    
});

/*RESIZE*/
// let clientW = gridContainer.offsetWidth;
// gridContainer.style.height = `${clientW}px`;





