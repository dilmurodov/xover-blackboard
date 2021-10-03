const board = document.querySelector("#board");
const SQUARE_NUMBER = 5000;
const colors = [ '#99B898','#FECEAB', '#FF847C', '#E84A5F', '#2A363B', '#E5FCC2', '#9DE0AD', '#212930', '#868F98', '#57527E', '#003066', '#892034']
for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    const color = getColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #0000';
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}