const gridContainer = document.getElementById('grid-container');
let containerWidth = gridContainer.clientWidth;
let input = 16;
let totalSquares = Math.pow(input, 2);


function makeGrid() {
    const sideLength = Math.round(containerWidth / input);
    const sideLengthStr = sideLength + 'px';

    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        gridContainer.appendChild(newSquare);
        newSquare.style.width = sideLengthStr;
        newSquare.style.height = sideLengthStr;
    }
}

makeGrid();