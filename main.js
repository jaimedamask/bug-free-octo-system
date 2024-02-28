const gridContainer = document.getElementById('grid-container');
let containerWidth = gridContainer.clientWidth;

console.log(containerWidth);

const removeChildEls = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

function makeGrid(num) {
    removeChildEls(gridContainer);

    const sideLength = containerWidth / num;
    const sideLengthStr = sideLength + 'px';
    let totalSquares = Math.pow(num, 2);

    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        gridContainer.appendChild(newSquare);
        newSquare.style.width = sideLengthStr;
        newSquare.style.height = sideLengthStr;

        newSquare.addEventListener('mouseenter', function darkenSquare(event) {
            newSquare.classList.add('.darkened');
            console.log('hovered');
        })
    }

    let fullWidth = sideLength * num;
    let fullWidthStr = fullWidth + 'px';
    gridContainer.style.width = fullWidthStr;
    gridContainer.style.height = fullWidthStr;
    console.log(fullWidthStr);

    const squares = Array.from(document.getElementsByClassName('square'));
    
    squares.forEach(square => {
        square.addEventListener('mouseenter', function darkenSquare(event) {
            square.classList.add('darkened');
            console.log('hovered');
        })
    })
    /* document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseenter', darkenSquare => {
            item.classList.add('.darkened');
            console.log('hovered');
        })
    }) */
}

const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', promptUser => {
    let input = Number(prompt('Choose a number between 1 and 100'));

    if (input > 0 && input < 101) {
        makeGrid(input);
        console.log(input);
    } else alert('Please click Start again and choose a number between 1 and 100');
})