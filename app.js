const gameBoard = document.querySelector("#gameboard");
const gameTopBoard = document.querySelector("#topBoard");
const gameBottomBoard = document.querySelector("#bottomBoard");

// 40 letters in total 
const width = 8;
const height = 5;

const startPositionKoreanRomanji = [
    king, rook, pawn, queen, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
];

const startPositionKoreanCharacters = [
    king, rook, pawn, queen, queen, queen, queen, queen,
    queen, queen, queen, queen, queen, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, king, king, king, king, king, king,
    king, king, queen, queen, queen, queen, queen, queen,
];

function createTopBoard() {
    startPositionKoreanRomanji.forEach((letter, i) => {
        const { picture } = letter
        const block = document.createElement('div');
        block.classList.add('block');
        if (picture != undefined) { block.innerHTML = picture; }
        block.setAttribute('block-id', i);
        gameTopBoard.append(block);
    })
}

function createBottomBoard() {
    startPositionKoreanCharacters.forEach((letter, i) => {
        const { picture } = letter;
        const block = document.createElement('div');
        block.classList.add('block');
        if (picture != undefined) { block.innerHTML = picture; }
        block.setAttribute('block-id', i);
        block.setAttribute('draggable', true);
        gameBottomBoard.append(block);
    })
}

createTopBoard();
createBottomBoard();


const allBlocks = document.querySelectorAll("#gameboard .block");

allBlocks.forEach(block => {
    block.addEventListener('dragstart', dragStart);
    block.addEventListener('dragover', dragOver);
    block.addEventListener('drop', dragDrop);
});

let dragStartPosition;
let draggedElement;

function dragStart(e) {
    dragStartPosition = e.target.parentNode.getAttribute('block-id');
    // dragStartPosition = e.target.firstChild.getAttribute('id');
    draggedElement = e.target.firstChild;
    console.log(draggedElement);
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    e.stopPropagation();
    e.target.parentNode.append(draggedElement);
    console.log(e.target);
    e.target.remove();

    let match;
    let nomatch;
}