const menuScreen = document.querySelector("#menuScreen");
const body = document.querySelector("#body");

// 40 letters in total 
const width = 8;
const height = 5;
let optionSelected;

// if optionselected not equal to null then

function createGameBoard() {
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('id', 'gameboard');
    const header = document.createElement('div');
    header.classList.add('id', 'header');
    header.innerHTML = "한글 Matching";
    gameBoard.append(header);
    const filterSection = document.createElement('div');
    filterSection.classList.add('id', 'filterSection');
    gameBoard.append(filterSection);
    const topBoard = document.createElement('div');
    filterSection.classList.add('id', 'topBoard');
    gameBoard.append(topBoard);
    const bottomBoard = document.createElement('div');
    filterSection.classList.add('id', 'bottomBoard');
    gameBoard.append(bottomBoard);

    const gameTopBoard = document.querySelector("#topBoard");
    const gameBottomBoard = document.querySelector("#bottomBoard");
}

let romanjiOptions = [
    "Initial",
    "Final",
    "Both"
]

romanjiOptions.forEach((option) => {
    const button = document.createElement('button');
    button.classList.add('options');
    button.innerHTML = option;
    menuScreen.append(button);
})

const menuOptions = document.querySelectorAll("#menuScreen .options");

menuOptions.forEach(block => {
    block.addEventListener('click', startGame);
});

function startGame(e) {
    optionSelected = false;
    optionSelected = e.target.innerHTML
    menuScreen.remove();
    createGameBoard();
    createTopBoard();
    createBottomBoard();

    const allBlocks = document.querySelectorAll("#gameboard .block");

    allBlocks.forEach(block => {
        block.addEventListener('dragstart', dragStart);
        block.addEventListener('dragover', dragOver);
        block.addEventListener('drop', dragDrop);
    });

    // body.prepend(menuScreen);
}

const filterOptions = [
    "Plain Consonant",
    "Tense Consonant",
    "Aspirated Consonant",
    "Vowel",
    "Y Vowel",
    "Diphthong"
]

function filtering(options) {
    const filterSection = document.querySelector("#filterSection");
    options.forEach((filterOption) => {
        const filter = document.createElement('div');
        filter.innerHTML = filterOption;
        filter.classList.add('filter');
        filter.setAttribute('filterType', filterOption);
        filter.setAttribute('filterOn', false);
        filterSection.append(filter);
    })
}

filtering(filterOptions);

const allFilters = document.querySelectorAll("#gameboard .filter");

const allHangulCharacters = document.querySelectorAll("#gameboard .hangul");
const allRomanjiCharacters = document.querySelectorAll("#gameboard .romanji");

allFilters.forEach(filter => {
    filter.addEventListener('click', clickFilter);
});

function clickFilter(e) {
    const type = e.target.getAttribute('filtertype');
    const string = "[type=\"" + type + "\"]";
    if (e.target.getAttribute('filteron') === "false") {
        e.target.setAttribute('filteron', true);
        const result = document.querySelectorAll(string);
        result.forEach(res => {
            res.parentNode.setAttribute('draggable', false);
            res.setAttribute('clickable', false);
        })
    } else {
        e.target.setAttribute('filteron', false);
        const result = document.querySelectorAll(string);
        result.forEach(res => {
            res.setAttribute('clickable', true);
            res.parentNode.setAttribute('draggable', true);
        })
    }
}

function createBottomBoard() {
    switch (optionSelected) {
        case 'Initial':
            Alphabet.forEach((romanjiLetter) => {
                const { romanjiInitialLetter, romanji } = romanjiLetter;
                const block = document.createElement('div');
                block.classList.add('block');
                block.classList.add('romanji');
                if (romanjiInitialLetter != undefined) { block.innerHTML = romanjiInitialLetter; }
                block.setAttribute('draggable', true);
                block.setAttribute('id', romanji);
                gameBottomBoard.append(block);
            });
            break;
        case 'Final':
            Alphabet.forEach((romanjiLetter) => {
                const { romanjiFinalLetter, romanji } = romanjiLetter;
                const block = document.createElement('div');
                block.classList.add('block');
                block.classList.add('romanji');
                if (romanjiFinalLetter != undefined) { block.innerHTML = romanjiFinalLetter; }
                block.setAttribute('draggable', true);
                if (optionSelected === "Final" && romanji.includes('t')) {
                    block.setAttribute('id', "t");
                } else {
                    block.setAttribute('id', romanji);
                }
                gameBottomBoard.append(block);
            });
            break;
        default:
            Alphabet.forEach((romanjiLetter) => {
                const { romanjiBothLetter, romanji } = romanjiLetter;
                const block = document.createElement('div');
                block.classList.add('block');
                block.classList.add('romanji');
                if (romanjiBothLetter != undefined) { block.innerHTML = romanjiBothLetter; }
                block.setAttribute('draggable', true);
                block.setAttribute('id', romanji);
                gameBottomBoard.append(block);
            });
    }
}

function createTopBoard() {
    Alphabet.forEach((hangulLetter) => {
        const { hangulLetterElement, classification, romanji } = hangulLetter;
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('hangul');
        if (optionSelected === "Final" && romanji.includes('t')) {
            block.setAttribute('answer', "t");
        } else {
            block.setAttribute('answer', romanji);
        }
        if (hangulLetterElement != undefined) { block.innerHTML = hangulLetterElement; }
        if (classification != null) { block.setAttribute('type', classification) };
        block.setAttribute('id', romanji);
        gameTopBoard.append(block);
    })
}
let dragStartPosition;
let draggedElement;

function dragStart(e) {
    dragStartPosition = e.target.parentNode.getAttribute('block-id');
    draggedElement = e.target.firstChild;
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    e.stopPropagation();
    let draggedId = draggedElement.parentNode.getAttribute('id');
    let targetAnswer = e.target.parentNode.getAttribute('answer');
    if (e.target.parentNode.classList.contains('hangul') && (draggedId === targetAnswer)) {
        e.target.parentNode.append(draggedElement);
        e.target.remove();
    }
}