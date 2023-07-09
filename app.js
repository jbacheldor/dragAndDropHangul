const menuScreen = document.querySelector("#menuScreen");
const body = document.querySelector("#body");
let gameTopBoard;
let gameBottomBoard;
let gameBoardElement;
let footer;
var Interval;
var seconds = 00;
var tens = 00;
var mins = 00;

// 40 letters in total 
const width = 8;
const height = 5;
let optionSelected;
let gameStarted = false;

// this is for reset or when you return home after initial creation
function removeGameBoard() {
    document.querySelector('#gameboard').remove();
    gameBoardElement = document.querySelector('#gameboard');
}

function createSVG(type, boxWidth, boxHeight, color, rx, className) {
    var xmlns = "http://www.w3.org/2000/svg";

    // this creates the svg box view element
    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "width", boxWidth);
    svgElem.setAttributeNS(null, "height", boxHeight);
    svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svgElem.setAttributeNS(null, "fill", "none");
    svgElem.setAttributeNS(null, "id", "backgroundSvg");
    svgElem.setAttributeNS(null, "class", className);
    svgElem.style.display = "block";

    // this is for grouping the elements
    // var g = document.createElementNS(xmlns, "g");
    // svgElem.appendChild(g);
    // g.setAttributeNS(null, 'opacity', '0.7');


    switch (type) {
        case 'rect':
            const rect = document.createElementNS(xmlns, "rect");
            rect.setAttributeNS(null, "width", boxWidth);
            rect.setAttributeNS(null, "height", boxHeight);
            rect.setAttributeNS(null, "rx", rx);
            rect.setAttributeNS(null, "fill", color);
            rect.setAttributeNS(null, 'opacity', '0.7');
            svgElem.appendChild(rect);
            break;
        case 'path':
            break;
        case 'star':
            const star = document.createElementNS(xmlns, "path");
            star.setAttributeNS(null, "d", 'M19.6958 3.70821C20.8932 0.0229664 26.1068 0.0229616 27.3042 3.7082L29.8986 11.693C30.4341 13.3411 31.97 14.4569 33.7029 14.4569H42.0986C45.9735 14.4569 47.5846 19.4154 44.4497 21.693L37.6575 26.6279C36.2555 27.6465 35.6689 29.4519 36.2044 31.1L38.7988 39.0848C39.9962 42.7701 35.7783 45.8346 32.6434 43.557L25.8511 38.6221C24.4492 37.6035 22.5508 37.6035 21.1489 38.6221L14.3566 43.557C11.2217 45.8346 7.0038 42.7701 8.20121 39.0848L10.7956 31.1C11.3311 29.4519 10.7445 27.6465 9.34254 26.6279L2.55026 21.693C-0.584595 19.4154 1.0265 14.4569 4.9014 14.4569H13.2971C15.03 14.4569 16.5659 13.3411 17.1014 11.693L19.6958 3.70821Z');
            star.setAttributeNS(null, "fill", color);
            svgElem.appendChild(star);
            break;
        case 'circle':

            break;
        default:
            break;
    }

    // draw linear gradient
    // var defs = document.createElementNS(xmlns, "defs");
    // var grad = document.createElementNS(xmlns, "linearGradient");
    // grad.setAttributeNS(null, "id", "gradient");
    // grad.setAttributeNS(null, "x1", "0%");
    // grad.setAttributeNS(null, "x2", "0%");
    // grad.setAttributeNS(null, "y1", "100%");
    // grad.setAttributeNS(null, "y2", "0%");
    // var stopTop = document.createElementNS(xmlns, "stop");
    // stopTop.setAttributeNS(null, "offset", "0%");
    // stopTop.setAttributeNS(null, "stop-color", "#ff0000");
    // grad.appendChild(stopTop);
    // var stopBottom = document.createElementNS(xmlns, "stop");
    // stopBottom.setAttributeNS(null, "offset", "100%");
    // stopBottom.setAttributeNS(null, "stop-color", "#0000ff");
    // grad.appendChild(stopBottom);
    // defs.appendChild(grad);
    // g.appendChild(defs);

    // draw borders
    // var coords = "M 0, 0";
    // coords += " l 0, 300";
    // coords += " l 300, 0";
    // coords += " l 0, -300";
    // coords += " l -300, 0";

    // var path = document.createElementNS(xmlns, "path");
    // path.setAttributeNS(null, 'stroke', "#000000");
    // path.setAttributeNS(null, 'stroke-width', 10);
    // path.setAttributeNS(null, 'stroke-linejoin', "round");
    // path.setAttributeNS(null, 'd', coords);
    // path.setAttributeNS(null, 'fill', "url(#gradient)");
    // path.setAttributeNS(null, 'opacity', 1.0);
    // g.appendChild(path);

    // var svgContainer = document.getElementById("svgContainer");
    // svgContainer.appendChild(svgElem);
    return svgElem;
}

function createGameBoard(input) {
    let gameBoard;
    // creating main board
    gameBoard = document.createElement('div');
    gameBoard.setAttribute('id', 'gameboard');
    body.append(gameBoard);
    gameBoardElement = document.querySelector("#gameboard");

    // creating main header 
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.innerHTML = "한글 Matching: " + input;
    gameBoard.append(header);

    // creating filter section
    const filterSection = document.createElement('div');
    filterSection.setAttribute('id', 'filterSection');
    gameBoardElement.append(filterSection);
    createFilterSection();

    // create top board
    const topBoard = document.createElement('div');
    topBoard.setAttribute('id', 'topBoard');
    gameBoard.append(topBoard);
    createTopBoard();

    // create the bottom board
    const bottomBoard = document.createElement('div');
    bottomBoard.setAttribute('id', 'bottomBoard');
    gameBoard.append(bottomBoard);
    createBottomBoard();

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    const test = createSVG('rect', 525, 40, "#C8EBFF", 16.5);
    footer.append(test);
    gameBoardElement.append(footer);

    createFooterSection();
    // https://codepen.io/cathydutton/pen/xxpOOw

    gameTopBoard = document.querySelector("#topBoard");
    gameBottomBoard = document.querySelector("#bottomBoard");
    const allBlocks = document.querySelectorAll("#gameboard .block");

    allBlocks.forEach(block => {
        block.addEventListener('dragstart', dragStart);
        block.addEventListener('dragover', dragOver);
        block.addEventListener('drop', dragDrop);
    });
}

function createFilterSection() {

    filtering(filterOptions);

    const allFilters = document.querySelectorAll("#gameboard .filterText");


    allFilters.forEach(filter => {
        filter.addEventListener('click', clickFilter);
        // maybe come back to this and do something incrementally 
        const filterSVG = createSVG('rect', 70, 45, "#C8EBFF", 22.5, "filterSvg");
        filter.parentNode.append(filterSVG);
    });
}

function createFooterSection() {
    // create the footer
    const footer = document.querySelector("#footer");
    const iconWrapper = document.createElement('div');
    iconWrapper.setAttribute('id', 'iconWrapper');
    // populate the footer icons
    Icons.forEach((icons) => {
        const { iconElement } = icons;
        const icon = document.createElement('div');
        icon.innerHTML = iconElement;
        icon.firstChild.classList.add('icon');
        icon.classList.add('footerIcon');
        iconWrapper.append(icon);
    })
    footer.append(iconWrapper);

    gameBoardElement.append(footer);
    const footerIcons = document.querySelectorAll("#gameboard .icon");
    footerIcons.forEach(icon => {
        icon.addEventListener('click', iconClick);
    })

}

function reset() {
    gameStarted = false;
    removeGameBoard();
    createGameBoard(input);
}

function startTimer() {
    const appendMilli = document.querySelector("#milli");
    const appendSeconds = document.querySelector("#seconds");
    const appendMins = document.querySelector("#mins");

    tens++;

    if (tens <= 9) {
        appendMilli.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendMilli.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendMilli.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        appendSeconds.innerHTML = 00;
        seconds = 00;
        mins++;
        appendMins.innerHTML = "0" + mins;
        appendSeconds.innerHTML = "0" + 0;
    }

    if (mins > 9) {
        appendMins.innerHTML = mins;
    }

    // it's messin up here
    if (mins > 59) {
        stopTimer();
    }

}


function stopTimer() {
    clearInterval(Interval);
    seconds = 00;
    tens = 00;
    mins = 00;
}

function iconClick(e) {
    stopTimer();
    switch (e.target.getAttribute('id')) {
        case 'homeButton':
            gameStarted = false;
            removeGameBoard();
            body.append(menuScreen);
            break;
        case 'resetButton':
            reset();
            break;
        default:
            console.log("If you're hitting here, something is broken");
    }
}

let menuOptionsList = [
    "Initial",
    "Final",
    "Both"
]


menuOptionsList.forEach((option) => {
    const button = document.createElement('div');
    button.classList.add('options');
    const menuText = document.createElement('div');
    menuText.classList.add('menuText');
    menuText.innerHTML = option;
    button.append(menuText);
    menuScreen.append(button);
})

const menuOptions = document.querySelectorAll("#menuScreen .options");

menuOptions.forEach(block => {
    block.addEventListener('click', startGame);
    const filterSVG = createSVG('rect', 199, 57, "#C8EBFF", 28.5, "menuOption");
    block.append(filterSVG);
});

let input;

function startGame(e) {
    optionSelected = false;
    optionSelected = e.target.innerHTML
    menuScreen.remove();
    input = e.target.innerHTML;
    createGameBoard(e.target.innerHTML);
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
        filter.classList.add('filter');
        const filterText = document.createElement('div');
        filterText.classList.add('filterText');
        filterText.setAttribute('canChangeFilter', true);
        filterText.setAttribute('filterType', filterOption);
        filterText.setAttribute('filterOn', false);
        filterText.innerHTML = filterOption;
        filter.append(filterText);
        filterSection.append(filter);
    })
}


function clickFilter(e) {
    var type = e.target.getAttribute('filtertype');
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

    let currentIndex = alphabetArray.length,
        randomIndex;
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [alphabetArray[currentIndex], alphabetArray[randomIndex]] = [
            alphabetArray[randomIndex], alphabetArray[currentIndex]
        ];
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
                block.firstChild.classList.add('answer');
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
                block.firstChild.classList.add('answer');
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
                block.firstChild.classList.add('answer');
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
        // need to come in here and do this for a few others i think
        if (optionSelected === "Final" && romanji.includes('t')) {
            block.setAttribute('answer', "t");
        } else {
            block.setAttribute('answer', romanji);
        }
        if (hangulLetterElement != undefined) { block.innerHTML = hangulLetterElement; }
        if (classification != null) { block.setAttribute('type', classification) };
        block.setAttribute('id', romanji);
        const star = createSVG('star', 47, 45, "#F5E12A", 0);
        block.append(star);
        gameTopBoard.append(block);
    })
}
let dragStartPosition;
let draggedElement;

function GameStarted() {
    gameStarted = true;
    startTimer();
    const filter = document.querySelectorAll(".filter");
    filter.forEach((filters) => {
            filters.setAttribute('canChangeFilter', false);
        })
        // timer starts 
}

function dragStart(e) {
    if (gameStarted != true) {
        GameStarted();
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
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
    let isActive = e.target.getAttribute('clickable') === false;
    if (e.target.parentNode.classList.contains('hangul') && (draggedId === targetAnswer) && (isActive === false)) {
        e.target.parentNode.append(draggedElement);
        e.target.remove();
    }
}