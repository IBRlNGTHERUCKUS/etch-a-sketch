const gridContainer = document.querySelector('.gridContainer');
let gridWidth = 16;
let gridHeight = 16;

for (let i = 0; i < gridHeight; i++) {
    const tempGridRow = document.createElement('div');
    tempGridRow.classList.add('gridRow');
    for (let j = 0; j < gridWidth; j++) {
        const tempCell = document.createElement('div');
        tempCell.classList.add('gridCell');
        tempGridRow.appendChild(tempCell);
    }
    gridContainer.appendChild(tempGridRow);
}