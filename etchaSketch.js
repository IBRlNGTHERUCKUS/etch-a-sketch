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

function paintCell (e, color) {
    const cell = e.target;
    if (e.target.className === 'gridCell') {
        cell.style.background = `rgb(${color.red}, ${color.green}, ${color.blue})`;
    }
}
function getRandomRGB(){
    let color = {
        red: null, 
        green: null,
        blue: null
    }
    for (let key in color) {
        color[key] = Math.floor(Math.random() * 255)
    }
    return color;
}

let color = getRandomRGB();

document.addEventListener('mouseover', 
    (e)=>{paintCell(e, getRandomRGB());})