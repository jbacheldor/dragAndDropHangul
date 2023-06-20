const menuScreen = document.querySelector("#menuScreen");
const gameTopBoard = document.querySelector("#topBoard");
const gameBottomBoard = document.querySelector("#bottomBoard");
const filterSection = document.querySelector("#filterSection");

// 40 letters in total 
const width = 8;
const height = 5;
let optionSelected = false;

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
    switch (e.target.innerHTML) {
        case 'Both':
            break;
        case 'Final':
            break;
        case 'Initial':
            break;

    }
    menuScreen.remove();
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

// let startPositionKoreanCharacters2 = new Map([]);

// function randomizeArray(set) {
//     let items = AlphabetHangul.size;
//     let count;
//     items.forEach(() => {
//         count = Math.floor(Math.random() * items);
//         console.log("current count", count);
//         console.log("start position: ", startPositionKoreanCharacters2);
//         console.log("items ! ", items);
//         startPositionKoreanCharacters2.push(items[count]);
//         delete items[count];
//     })
//     return startPositionKoreanCharacters2;
// }

// console.log(randomizeArray(AlphabetHangul));
// console.log(startPositionKoreanCharacters2);

// you have a list of hash values 
// for each value 



function createBottomBoard() {
    Alphabet.forEach((romanjiLetter) => {
        const { romanjiFinalLetter, romanji } = romanjiLetter;
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('romanji');
        if (romanjiFinalLetter != undefined) { block.innerHTML = romanjiFinalLetter; }
        block.setAttribute('draggable', true);
        block.setAttribute('id', romanji);
        gameBottomBoard.append(block)
    });
}

function createTopBoard() {
    // if create board option is final character
    // then if the romanji contains "t" change the answer to "t"
    Alphabet.forEach((hangulLetter) => {
        const { hangulLetterElement, classification, romanji } = hangulLetter;
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('hangul');
        if (hangulLetterElement != undefined) { block.innerHTML = hangulLetterElement; }
        if (classification != null) { block.setAttribute('type', classification) };
        if (romanji != null) { block.setAttribute('answer', romanji) };
        block.setAttribute('id', romanji);
        gameTopBoard.append(block);
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
    draggedElement = e.target.firstChild;
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    e.stopPropagation();
    let draggedId = draggedElement.parentNode.getAttribute('id');
    console.log(draggedId);
    let targetAnswer = e.target.parentNode.getAttribute('answer');
    console.log(targetAnswer);
    if (e.target.parentNode.classList.contains('hangul') && (draggedId === targetAnswer)) {
        e.target.parentNode.append(draggedElement);
        e.target.remove();
    }
}