const gameBoard = document.querySelector("#gameboard");
const gameTopBoard = document.querySelector("#topBoard");
const gameBottomBoard = document.querySelector("#bottomBoard");

// 40 letters in total 
const width = 8;
const height = 5;

const startPositionKorean = [
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
];

const startPositionSounds = [
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
];

function createTopBoard() {
    startPositionKorean.forEach((letter, i) => {
        const { picture } = letter
        const block = document.createElement('div');
        block.classList.add('block');
        if (picture != undefined) { block.innerHTML = picture; }
        block.setAttribute('block-id', i);
        gameTopBoard.append(block);
    })
}

function createBottomBoard() {
    startPositionSounds.forEach((letter, i) => {
        const { picture } = letter;
        const block = document.createElement('div');
        block.classList.add('block');
        if (picture != undefined) { block.innerHTML = picture; }
        block.setAttribute('square-id', i);
        block.setAttribute('draggable', true);
        gameBottomBoard.append(block);
    })
}

createTopBoard();
createBottomBoard();


const allBlocks = document.querySelectorAll("#gameboard .block");

allBlocks.forEach(block => {
    block.addEventListener('dragstart', dragStart);
    block.addEventListener('drop', dragDrop)
});

let dragStartId = null;
let draggedElement = null;

function dragStart(e) {
    dragStartId = e.target.firstChild.getAttribute('id');
    draggedElement = e.target;
}

function dragDrop(e) {
    e.stopPropagation();
    e.target.parentNode.append()
    console.log(e);
}