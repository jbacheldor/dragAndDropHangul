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
    const menuSVG = createSVG('rect', 199, 57, "#C8EBFF", 28.5, "menuOption");
    block.append(menuSVG);
    block.addEventListener('click', startGame);
});

const bgStars = createBackgroundStars(81, 120, 'M56.5979 295.854C57.1966 294.011 59.8034 294.011 60.4021 295.854L64.8986 309.693C65.1664 310.517 65.9343 311.075 66.8008 311.075H81.3519C83.2893 311.075 84.0949 313.554 82.5274 314.693L70.7553 323.246C70.0544 323.755 69.7611 324.658 70.0288 325.482L74.5253 339.321C75.124 341.164 73.0151 342.696 71.4477 341.557L59.6756 333.004C58.9746 332.495 58.0254 332.495 57.3244 333.004L45.5523 341.557C43.9849 342.696 41.876 341.164 42.4747 339.321L46.9712 325.482C47.2389 324.658 46.9456 323.755 46.2447 323.246L34.4726 314.693C32.9051 313.554 33.7107 311.075 35.6481 311.075H50.1992C51.0657 311.075 51.8336 310.517 52.1014 309.693L56.5979 295.854Z');
menuScreen.append(bgStars);

function createBackgroundStars(boxWidth, boxHeight, path) {
    var xmlns = "http://www.w3.org/2000/svg";

    // this creates the svg box view element
    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "width", boxWidth);
    svgElem.setAttributeNS(null, "height", boxHeight);
    svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svgElem.setAttributeNS(null, "fill", "none");
    svgElem.setAttributeNS(null, "id", "backgroundStarSvg");
    svgElem.style.display = "block";


    var g = document.createElementNS(xmlns, "g");
    g.setAttributeNS(null, 'id', 'menuStarsGroup');
    svgElem.appendChild(g);
    // g.setAttributeNS(null, 'opacity', '0.7');


    const star = document.createElementNS(xmlns, "path");
    star.setAttributeNS(null, "id", "backgroundStarSvg1");
    star.setAttributeNS(null, "d", 'M48.5979 64.8541C49.1966 63.0115 51.8034 63.0115 52.4021 64.8541L56.8986 78.693C57.1664 79.5171 57.9343 80.075 58.8008 80.075H73.3519C75.2893 80.075 76.0949 82.5542 74.5274 83.693L62.7553 92.2459C62.0544 92.7552 61.7611 93.658 62.0288 94.482L66.5253 108.321C67.124 110.164 65.0151 111.696 63.4477 110.557L51.6756 102.004C50.9746 101.495 50.0254 101.495 49.3244 102.004L37.5523 110.557C35.9849 111.696 33.876 110.164 34.4747 108.321L38.9712 94.482C39.2389 93.658 38.9456 92.7552 38.2447 92.2459L26.4726 83.693C24.9051 82.5542 25.7107 80.075 27.6481 80.075H42.1992C43.0657 80.075 43.8336 79.5171 44.1014 78.693L48.5979 64.8541Z');
    star.setAttributeNS(null, "fill", "#F5E12A");
    g.append(star);

    const star2 = document.createElementNS(xmlns, "path");
    star2.setAttributeNS(null, "id", "backgroundStarSvg2");
    star2.setAttributeNS(null, "d", 'M23.0979 29.8541C23.6966 28.0115 26.3034 28.0115 26.9021 29.8541L30.1638 39.8926C30.4316 40.7167 31.1995 41.2746 32.0659 41.2746H42.621C44.5585 41.2746 45.364 43.7538 43.7966 44.8926L35.2574 51.0967C34.5564 51.606 34.2631 52.5088 34.5308 53.3328L37.7925 63.3713C38.3912 65.2139 36.2823 66.7462 34.7148 65.6074L26.1756 59.4032C25.4746 58.894 24.5254 58.894 23.8244 59.4033L15.2852 65.6074C13.7177 66.7462 11.6088 65.2139 12.2075 63.3713L15.4692 53.3328C15.7369 52.5088 15.4436 51.606 14.7426 51.0967L6.20338 44.8926C4.63595 43.7538 5.44151 41.2746 7.37895 41.2746H17.9341C18.8005 41.2746 19.5684 40.7167 19.8362 39.8926L23.0979 29.8541Z');
    star2.setAttributeNS(null, "fill", "#F5E12A");
    g.append(star2);

    const star3 = document.createElementNS(xmlns, "path");
    star3.setAttributeNS(null, "id", "backgroundStarSvg3");
    star3.setAttributeNS(null, "d", 'M38.0979 5.8541C38.6966 4.01148 41.3034 4.01148 41.9021 5.8541L42.9187 8.98278C43.1864 9.80682 43.9543 10.3647 44.8208 10.3647H48.1105C50.0479 10.3647 50.8535 12.844 49.2861 13.9828L46.6246 15.9164C45.9237 16.4257 45.6303 17.3284 45.8981 18.1525L46.9147 21.2812C47.5134 23.1238 45.4044 24.656 43.837 23.5172L41.1756 21.5836C40.4746 21.0743 39.5254 21.0743 38.8244 21.5836L36.163 23.5172C34.5956 24.656 32.4866 23.1238 33.0853 21.2812L34.1019 18.1525C34.3697 17.3284 34.0763 16.4257 33.3754 15.9164L30.714 13.9828C29.1465 12.844 29.9521 10.3647 31.8895 10.3647H35.1792C36.0457 10.3647 36.8136 9.80682 37.0813 8.98278L38.0979 5.8541Z');
    star3.setAttributeNS(null, "fill", "#F5E12A");
    g.append(star3);

    svgElem.appendChild(g);

    return svgElem;
}

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