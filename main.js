const gridContainer = document.getElementById('grid-container');
let containerWidth = gridContainer.clientWidth;
let input = Number(prompt('Choose a number between 1 and 100'));
let totalSquares = Math.pow(input, 2);
console.log(containerWidth);

function makeGrid() {
    const sideLength = containerWidth / input;
    const sideLengthStr = sideLength + 'px';

    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        gridContainer.appendChild(newSquare);
        newSquare.style.width = sideLengthStr;
        newSquare.style.height = sideLengthStr;
    }

    let fullWidth = sideLength * input;
    let fullWidthStr = fullWidth + 'px';
    gridContainer.style.width = fullWidthStr;
    gridContainer.style.height = fullWidthStr;
    console.log(fullWidthStr);
}

makeGrid();