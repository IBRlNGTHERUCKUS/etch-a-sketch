
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
let colorType = 'rgb'

for (let i = 0; i < gridHeight; i++) {
    const tempGridRow = document.createElement('div');
    tempGridRow.classList.add('gridRow');
    for (let j = 0; j < gridWidth; j++) {
        const tempCell = document.createElement('div');
        tempCell.classList.add('gridCell');
        tempCell.setAttribute('data-brightness', '100');
        tempGridRow.appendChild(tempCell);
    }
    gridContainer.appendChild(tempGridRow);
}

function paintCell (e) {
    const cell = e.target;
    if (cell.className === 'gridCell') {
        // Allow support for both color formats
        if (colorType == 'pastel'){
            let color = getRandomHSL();
            cell.style.background = `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`;
        }
        else if (colorType === 'rgb'){
            let color = getRandomRGB();
            cell.style.background = `rgb(${color.red}, ${color.green}, ${color.blue})`;
        }
            cell.classList.add('painted');
    }
    // darken if cell is rehovered
    else if (cell.className === 'gridCell painted') {
        let brightness = cell.dataset.brightness - 20;
        cell.dataset.brightness = cell.dataset.brightness - 20;
        cell.style.filter = `brightness(${brightness}%)`;
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


function getRandomHSL(){
    return HSL = {
        hue: Math.floor(Math.random() * 360),
        saturation: 90,
        lightness: 70,
    }
}

function resetCells(){
    const allCells = document.querySelectorAll('.gridCell');
    // reset cells
    for (const cell of allCells) {
        cell.style.background = 'white';
        cell.style.filter = 'brightness(100%)'
        cell.classList.remove('painted');
        cell.dataset.brightness = '100';
    }
}

document.addEventListener('mouseover', paintCell) 
//    (e)=>{paintCell(e, getRandomHSL());})

const sliderBox = document.querySelector('.switch');
const slider = document.querySelector('.slider');
slider.addEventListener('click', handleSlider);
function handleSlider() {
    animateSlider();
    resetCells();
    if (colorType == 'pastel'){
        colorType = 'rgb';
    }
    else {
        colorType = 'pastel';
    }

}
function animateSlider() {
    slider.style.width = '100%';
    setTimeout(()=>{
        sliderBox.classList.toggle('right');
        slider.style.width = '40%';
    }, 350)
    
}