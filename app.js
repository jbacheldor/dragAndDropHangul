const gameTopBoard = document.querySelector("#topBoard");
const gameBottomBoard = document.querySelector("#bottomBoard");
const filterSection = document.querySelector("#filterSection");

// 40 letters in total 
const width = 8;
const height = 5;

const startPositionKoreanCharacters = [
    gk, rl, dt, n, m, bp, st, ng,
    gk, rl, dt, n, m, bp, st, ng,
    gk, rl, dt, n, m, bp, st, ng,
    gk, rl, dt, n, m, bp, st, ng,
    gk, rl, dt, n, m, bp, st, ng,
];

const startPositionKoreanRomanji = [
    gkHangul, rlHangul, dtHangul, nHangul, mHangul, bpHangul, stHangul, ngHangul,
    gkHangul, rlHangul, dtHangul, nHangul, mHangul, bpHangul, stHangul, ngHangul,
    gkHangul, rlHangul, dtHangul, nHangul, mHangul, bpHangul, stHangul, ngHangul,
    gkHangul, rlHangul, dtHangul, nHangul, mHangul, bpHangul, stHangul, ngHangul,
    gkHangul, rlHangul, dtHangul, nHangul, mHangul, bpHangul, stHangul, ngHangul,
];


const filterOptions = [
    "Consonant",
    "Tense Consonant",
    "Aspirated Cosonant",
    "Vowels",
    "Y Vowels",
    "W Vowels",
    "Diphthongs"
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
    console.log(e.target);
    const type = e.target.getAttribute('filtertype');
    const string = "[type=\"" + type + "\"]";
    console.log(string);
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
    AlphabetRomanjiLetters.forEach((romanjiLetter, i) => {
        const { picture } = romanjiLetter;
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('romanji');
        if (picture != undefined) { block.innerHTML = picture; }
        block.setAttribute('block-id', i);
        gameBottomBoard.append(block)
    });
    // startPositionKoreanRomanji.forEach((letter, i) => {
    //     const { picture } = letter
    //     const block = document.createElement('div');
    //     block.classList.add('block');
    //     block.classList.add('romanji');
    //     if (picture != undefined) { block.innerHTML = picture; }
    //     block.setAttribute('block-id', i);
    //     gameTopBoard.append(block);
    // })
}

function createTopBoard() {

    AlphabetHangulLetters.forEach((hangulLetter, i) => {
            const { picture } = hangulLetter;
            const block = document.createElement('div');
            block.classList.add('block');
            block.classList.add('hangul');
            if (picture != undefined) { block.innerHTML = picture; }
            block.setAttribute('block-id', i);
            block.setAttribute('draggable', true);
            gameTopBoard.append(block);
        })
        // startPositionKoreanCharacters.forEach((letter, i) => {
        //     const { picture } = letter;
        //     const block = document.createElement('div');
        //     block.classList.add('block');
        //     block.classList.add('hangul');
        //     if (picture != undefined) { block.innerHTML = picture; }
        //     block.setAttribute('block-id', i);
        //     block.setAttribute('draggable', true);
        //     gameBottomBoard.append(block);
        // })
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
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    e.stopPropagation();
    let draggedId = draggedElement.getAttribute('id');

    let targetAnswer = e.target.getAttribute('answer');
    console.log(draggedElement);
    if (e.target.parentNode.classList.contains('romanji') && (draggedId === targetAnswer)) {
        e.target.parentNode.append(draggedElement);
        e.target.remove();
    }
}