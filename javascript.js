// default grid dimension and set up
const container = document.querySelector('#container');
const containerSize = 480;
let defaultGrid = 16;
createGrids(defaultGrid);
hover('black');
clearFill();


// user input grid size
const addGrid = document.querySelector('#grid');
addGrid.addEventListener('click', () => {

    let gridConfig = prompt('Grid:');

    if (gridConfig > 100) {
        alert('Maximum grid size is 100.');
        return;
    } else if (gridConfig < 5) {
        alert('Minimum grid size is 5.');
    } else {
        removeGrids();
        createGrids(gridConfig);
        hover('black');
        clearFill();
    }

});

// clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    clearFill();
});

// color
const black = document.querySelector('#black');
black.addEventListener('click', () => {
    hover('black');
});

const white = document.querySelector('#white');
white.addEventListener('click', () => {
    hover('white');
});

const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', () => {
    rainbowHover();
});


// themes
const body = document.querySelector('body');

const light = document.querySelector('#light');
light.addEventListener('click', () => {
    body.style.backgroundColor = 'transparent';
});

const dark = document.querySelector('#dark');
dark.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
});




// functions

function createGrids(gridConfig) {

    let gridSize = containerSize / gridConfig;

    for (let i = Math.pow(gridConfig, 2); i > 0; i--) {

        let grid = document.createElement('div');

        grid.setAttribute('style', `border: 1px solid grey; box-sizing: border-box; 
            height: ${gridSize}px; width: ${gridSize}px`);
        
        grid.setAttribute('class', 'grid');

        container.appendChild(grid);
    }

}

function removeGrids() {

    let panel = document.querySelectorAll('.grid');

    panel.forEach(square => {
        square.remove();
    });

}

function hover(color) {

    let panel = document.querySelectorAll('.grid');
    
    panel.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = color;
        });
    });

}

function rainbowHover() {

    let panel = document.querySelectorAll('.grid');
    
    panel.forEach(square => {
    square.addEventListener('mouseover', () => {
        
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        
        square.style.backgroundColor = `rgb(${r},${g},${b})`;

        });
    });

}

function clearFill() {
    
    let panel = document.querySelectorAll('.grid');

        panel.forEach(square => {
            square.style.backgroundColor = 'transparent';
        });

}