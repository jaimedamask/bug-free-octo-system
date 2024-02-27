const gridContainer = document.getElementById('grid-container');

let input = 16;
let totalSquares = Math.pow(input, 2);


function makeGrid() {
    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        gridContainer.appendChild(newSquare);
    }
}

makeGrid();