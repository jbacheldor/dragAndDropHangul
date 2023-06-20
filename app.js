const menuScreen = document.querySelector("#menuScreen");
const body = document.querySelector("#body");
const gameTopBoard = document.querySelector("#topBoard");
const gameBottomBoard = document.querySelector("#bottomBoard");
const gameBoard = document.querySelector("#gameboard");

// 40 letters in total 
const width = 8;
const height = 5;
let optionSelected;

// is it good to create this each time? or can we just store the element 
function createGameBoard() {
    // body.append(gameBoard);

    const gameBoard = document.createElement('div');
    gameBoard.setAttribute('id', 'gameboard');
    body.append(gameBoard);
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.innerHTML = "한글 Matching";
    gameBoard.append(header);
    const filterSection = document.createElement('div');
    filterSection.setAttribute('id', 'filterSection');
    gameBoard.append(filterSection);
    // create 
    const topBoard = document.createElement('div');
    topBoard.setAttribute('id', 'topBoard');
    gameBoard.append(topBoard);
    // create the bottom
    const bottomBoard = document.createElement('div');
    bottomBoard.setAttribute('id', 'bottomBoard');
    gameBoard.append(bottomBoard);
    // create the footer
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    document.createElement('div');

    Icons.forEach((icons)=> {
        const { iconElement } = icons;
        const icon = document.createElement('div');
        icon.innerHTML = iconElement;
        icon.classList.add('footerIcon');
        footer.append(icon);
    })

    gameBoard.append(footer);
    const footerIcons = document.querySelectorAll("#footer .footerIcon");
    footerIcons.forEach(icon => {
        icon.addEventListener('click', iconClick);
    })
}

// this is currently breaking - need to find a way to add and remove screens - building them up must be time consuming
function iconClick(e) {
    switch(e.target.parentNode.parentNode.getAttribute('id')){
        case 'homeButton':
            const gameBoard = document.querySelector("#gameboard");
            body.remove(gameBoard);
            const menuScreen = document.querySelector("#menuScreen");
            body.append(menuScreen);
            break;
        case 'backgroundMusic':
            console.log("clicky");
            break;
        case 'noMusic':
            console.log("clicky");
            break;
        case 'music':
            console.log("clicky");
            break;   
}}

let romanjiOptions = [
    "Initial",
    "Final",
    "Both"
]

romanjiOptions.forEach((option) => {
    const button = document.createElement('div');
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

    filtering(filterOptions);

    const allFilters = document.querySelectorAll("#gameboard .filter");

    allFilters.forEach(filter => {
        filter.addEventListener('click', clickFilter);
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

function randomizeElements() {
    let alphabetArray = Array.from(Alphabet, ([name, value]) => ({ name, value }));

    let currentIndex = alphabetArray.length,  randomIndex;
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [alphabetArray[currentIndex], alphabetArray[randomIndex]] = [
            alphabetArray[randomIndex], alphabetArray[currentIndex]];
      }

      return alphabetArray;
}

function createBottomBoard() {
    const gameBottomBoard = document.querySelector("#bottomBoard");
    let randomLetters = randomizeElements(Alphabet);
    switch (optionSelected) {
        case 'Initial':
            randomLetters.forEach((romanjiLetter, i) => {
                const { romanjiInitialLetter, romanji } = randomLetters[i].value;
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
            randomLetters.forEach((romanjiLetter, i) => {
                const { romanjiFinalLetter, romanji } = randomLetters[i].value;
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
            randomLetters.forEach((romanjiLetter, i) => {
                const { romanjiBothLetter, romanji } = randomLetters[i].value;
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
    const gameTopBoard = document.querySelector("#topBoard");
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
