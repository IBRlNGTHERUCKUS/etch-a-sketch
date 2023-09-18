
const gridContainer = document.querySelector('.gridContainer');
//Ensure the grid is always a square
//Requires an eventlistener to run this when window is resized
/*
addEventListener('resize', ()=> {
    console.log('resizing..');
if (gridContainer.clientWidth > gridContainer.clientHeight) {
    gridContainer.style.width = `${gridContainer.clientHeight}px`
}
else {
    gridContainer.style.height = `${gridContainer.clientWidth}px`;
}
})
*/
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
    if (cell.className === 'gridCell') {
        cell.style.background = `rgb(${color.red}, ${color.green}, ${color.blue})`;
        cell.classList.add('painted');
    }
    else if (cell.className === 'gridCell painted') {
        let brightness = cell.style.filter;
        brightness = Number(brightness.slice(-4, -6))
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