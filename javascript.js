
var gridContainer = document.querySelector('.grid-container');

function createGridBoxes(size) {
    for (let i=1; i <= size; i++) {
        let row = document.createElement('div');
        row.classList.add('rows');
        gridContainer.appendChild(row);

        for (let j = 1; j <= size; j++) {
            let column = document.createElement('div');
            column.classList.add('columns');
            row.append(column);
        }
    }
}

createGridBoxes(16);