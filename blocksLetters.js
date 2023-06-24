const Alphabet = new Map([
    ["g/k", {
        "hangulLetterElement": '<div class="letter">ㄱ</div',
        "romanjiInitialLetter": '<div class="letter">g</div',
        "romanjiFinalLetter": '<div class="letter">g</div',
        "romanjiBothLetter": '<div class="letter">g/k</div',
        "classification": "Plain Consonant",
        "character": "ㄱ",
        "romanji": "g/k",
    }],
    ["n", {
        "hangulLetterElement": '<div class="letter" id="n">ㄴ</div',
        "romanjiInitialLetter": '<div class="letter" id="n">n</div',
        "romanjiFinalLetter": '<div class="letter" id="n">n</div',
        "romanjiBothLetter": '<div class="letter" id="n">n</div',
        "classification": "Plain Consonant",
        "character": "ㄴ",
        "romanji": "n",
    }],
    ["d/t", {
        "hangulLetterElement": '<div class="letter" id="d/t" type="Plain Consonant">ㄷ</div',
        "romanjiInitialLetter": '<div class="letter" id="d">d</div',
        "romanjiFinalLetter": '<div class="letter" id="t">t</div',
        "romanjiBothLetter": '<div class="letter" id="d/t">d/t</div',
        "classification": "Plain Consonant",
        "character": "ㄷ",
        "romanji": "d/t",
    }],
    ["r/l", {
        "hangulLetterElement": '<div class="letter" id="r/l" type="Plain Consonant">ㄹ</div',
        "romanjiInitialLetter": '<div class="letter" id="r">r</div',
        "romanjiFinalLetter": '<div class="letter" id="l">l</div',
        "romanjiBothLetter": '<div class="letter" id="r/l">r/l</div',
        "classification": "Plain Consonant",
        "character": "ㄹ",
        "romanji": "r/l",
    }],
    ["m", {
        "hangulLetterElement": '<div class="letter" id="m" type="Plain Consonant">ㅁ</div',
        "romanjiInitialLetter": '<div class="letter" id="m">m</div',
        "romanjiFinalLetter": '<div class="letter" id="m">m</div',
        "romanjiBothLetter": '<div class="letter" id="m">m</div',
        "classification": "Plain Consonant",
        "character": "ㅁ",
        "romanji": "m",
    }],
    ["b/p", {
        "hangulLetterElement": '<div class="letter" id="b/p" type="Plain Consonant">ㅂ</div',
        "romanjiInitialLetter": '<div class="letter" id="b">b</div',
        "romanjiFinalLetter": '<div class="letter" id="p">p</div',
        "romanjiBothLetter": '<div class="letter" id="b/p">b/p</div',
        "classification": "Plain Consonant",
        "character": "ㅂ",
        "romanji": "b/p",
    }],
    ["s/t", {
        "hangulLetterElement": '<div class="letter" id="s/t" type="Plain Consonant">ㅅ</div',
        "romanjiInitialLetter": '<div class="letter" id="s">s</div',
        "romanjiFinalLetter": '<div class="letter" id="t">t</div',
        "romanjiBothLetter": '<div class="letter" id="s/t">s/t</div',
        "classification": "Plain Consonant",
        "character": "ㅅ",
        "romanji": "s/t",
    }],
    ["ng", {
        "hangulLetterElement": '<div class="letter" id="ng" type="Plain Consonant">ㅇ</div',
        "romanjiInitialLetter": '<div class="letter" id="ng">ng</div',
        "romanjiFinalLetter": '<div class="letter" id="ng">ng</div',
        "romanjiBothLetter": '<div class="letter" id="ng">ng</div',
        "classification": "Plain Consonant",
        "character": "ㅇ",
        "romanji": "ng",
    }],
    ["j/t", {
        "hangulLetterElement": '<div class="letter" id="j/t" type="Plain Consonant">ㅈ</div',
        "romanjiInitialLetter": '<div class="letter" id="j">j</div',
        "romanjiFinalLetter": '<div class="letter" id="t">t</div',
        "romanjiBothLetter": '<div class="letter" id="j/t">j/t</div',
        "classification": "Plain Consonant",
        "character": "ㅈ",
        "romanji": "j/t",
    }],
    ["h/t", {
        "hangulLetterElement": '<div class="letter" id="h/t" type="Plain Consonant">ㅎ</div',
        "romanjiInitialLetter": '<div class="letter" id="h">h</div',
        "romanjiFinalLetter": '<div class="letter" id="t">t</div',
        "romanjiBothLetter": '<div class="letter" id="h/t">h/t</div',
        "classification": "Plain Consonant",
        "character": "ㅎ",
        "romanji": "h/t",
    }],
    ["kk", {
        "hangulLetterElement": '<div class="letter" id="kk" type="Tense Consonant">ㄲ</div',
        "romanjiInitialLetter": '<div class="letter" id="kk">kk</div',
        "romanjiFinalLetter": '<div class="letter" id="kk">kk</div',
        "romanjiBothLetter": '<div class="letter" id="kk">kk</div',
        "classification": "Tense Consonant",
        "character": "ㄲ",
        "romanji": "kk/k",
    }],
    ["tt", {
        "hangulLetterElement": '<div class="letter" id="tt" type="Tense Consonant">ㄸ</div',
        "romanjiInitialLetter": '<div class="letter" id="tt">tt</div',
        "romanjiFinalLetter": '<div class="letter" id="tt">tt</div',
        "romanjiBothLetter": '<div class="letter" id="tt">tt</div',
        "classification": "Tense Consonant",
        "character": "ㄸ",
        "romanji": "tt",
    }],
    ["pp", {
        "hangulLetterElement": '<div class="letter" id="pp" type="Tense Consonant">ㅃ</div',
        "romanjiInitialLetter": '<div class="letter" id="pp">pp</div',
        "romanjiFinalLetter": '<div class="letter" id="pp">pp</div',
        "romanjiBothLetter": '<div class="letter" id="pp">pp</div',
        "classification": "Tense Consonant",
        "character": "ㅃ",
        "romanji": "pp",
    }],
    ["ss", {
        "hangulLetterElement": '<div class="letter" id="ss" type="Tense Consonant">ㅆ</div',
        "romanjiInitialLetter": '<div class="letter" id="ss">ss</div',
        "romanjiFinalLetter": '<div class="letter" id="ss">t</div',
        "romanjiBothLetter": '<div class="letter" id="ss">ss</div',
        "classification": "Tense Consonant",
        "character": "ㅆ",
        "romanji": "ss/t",
    }],
    ["jj", {
        "hangulLetterElement": '<div class="letter" id="jj" type="Tense Consonant">ㅉ</div',
        "romanjiInitialLetter": '<div class="letter" id="jj">jj</div',
        "romanjiFinalLetter": '<div class="letter" id="jj">jj</div',
        "romanjiBothLetter": '<div class="letter" id="jj">jj</div',
        "classification": "Tense Consonant",
        "character": "ㅉ",
        "romanji": "jj",
    }],
    ["p", {
        "hangulLetterElement": '<div class="letter" id="p" type="Aspirated Consonant">ㅍ</div',
        "romanjiInitialLetter": '<div class="letter" id="p">p</div',
        "romanjiFinalLetter": '<div class="letter" id="p">p</div',
        "romanjiBothLetter": '<div class="letter" id="p">p</div',
        "classification": "Aspirated Consonant",
        "character": "ㅍ",
        "romanji": "p",
    }],
    ["ch/t", {
        "hangulLetterElement": '<div class="letter" id="ch/t" type="Aspirated Consonant">ㅊ</div',
        "romanjiInitialLetter": '<div class="letter" id="ch">ch</div',
        "romanjiFinalLetter": '<div class="letter" id="t">t</div',
        "romanjiBothLetter": '<div class="letter" id="ch/t">ch/t</div',
        "classification": "Aspirated Consonant",
        "character": "ㅊ",
        "romanji": "ch/t",
    }],
    ["k", {
        "hangulLetterElement": '<div class="letter" id="k" type="Aspirated Consonant">ㅋ</div',
        "romanjiInitialLetter": '<div class="letter" id="k">k</div',
        "romanjiFinalLetter": '<div class="letter" id="k">k</div',
        "romanjiBothLetter": '<div class="letter" id="k">k</div',
        "classification": "Aspirated Consonant",
        "character": "ㅋ",
        "romanji": "k",
    }],
    ["t", {
        "hangulLetterElement": '<div class="letter" id="t" type="Aspirated Consonant">ㅌ</div',
        "romanjiInitialLetter": '<div class="letter" id="t">t</div',
        "romanjiFinalLetter": '<div class="letter" id="t">t</div',
        "romanjiBothLetter": '<div class="letter" id="t">t</div',
        "classification": "Aspirated Consonant",
        "character": "ㅌ",
        "romanji": "t",
    }],
    ["a", {
        "hangulLetterElement": '<div class="letter" id="a" type="Vowel">ㅏ</div',
        "romanjiInitialLetter": '<div class="letter" id="a">a</div',
        "romanjiFinalLetter": '<div class="letter" id="a">a</div',
        "romanjiBothLetter": '<div class="letter" id="a">a</div',
        "classification": "Vowel",
        "character": "ㅏ",
        "romanji": "a",
    }],
    ["ae", {
        "hangulLetterElement": '<div class="letter" id="ae" type="Vowel">ㅐ</div',
        "romanjiInitialLetter": '<div class="letter" id="ae">ae</div',
        "romanjiFinalLetter": '<div class="letter" id="ae">ae</div',
        "romanjiBothLetter": '<div class="letter" id="ae">ae</div',
        "classification": "Vowel",
        "character": "ㅐ",
        "romanji": "ae",
    }],
    ["eo", {
        "hangulLetterElement": '<div class="letter" id="eo" type="Vowel">ㅓ</div',
        "romanjiInitialLetter": '<div class="letter" id="eo">eo</div',
        "romanjiFinalLetter": '<div class="letter" id="eo">eo</div',
        "romanjiBothLetter": '<div class="letter" id="eo">eo</div',
        "classification": "Vowel",
        "character": "ㅓ",
        "romanji": "eo",
    }],
    ["e", {
        "hangulLetterElement": '<div class="letter" id="e" type="Vowel">ㅔ</div',
        "romanjiInitialLetter": '<div class="letter" id="e">e</div',
        "romanjiFinalLetter": '<div class="letter" id="e">e</div',
        "romanjiBothLetter": '<div class="letter" id="e">e</div',
        "classification": "Vowel",
        "character": "ㅔ",
        "romanji": "e",
    }],
    ["eu", {
        "hangulLetterElement": '<div class="letter" id="eu" type="Vowel">ㅡ</div',
        "romanjiInitialLetter": '<div class="letter" id="eu">eu</div',
        "romanjiFinalLetter": '<div class="letter" id="eu">eu</div',
        "romanjiBothLetter": '<div class="letter" id="eu">eu</div',
        "classification": "Vowel",
        "character": "ㅡ",
        "romanji": "eu",
    }],
    ["i", {
        "hangulLetterElement": '<div class="letter" id="i" type="Vowel">ㅣ</div',
        "romanjiInitialLetter": '<div class="letter" id="i">i</div',
        "romanjiFinalLetter": '<div class="letter" id="i">i</div',
        "romanjiBothLetter": '<div class="letter" id="i">i</div',
        "classification": "Vowel",
        "character": "ㅣ",
        "romanji": "i",
    }],
    ["o", {
        "hangulLetterElement": '<div class="letter" id="o" type="Vowel">ㅗ</div',
        "romanjiInitialLetter": '<div class="letter" id="o">o</div',
        "romanjiFinalLetter": '<div class="letter" id="o">o</div',
        "romanjiBothLetter": '<div class="letter" id="o">o</div',
        "classification": "Vowel",
        "character": "ㅗ",
        "romanji": "o",
    }],
    ["u", {
        "hangulLetterElement": '<div class="letter" id="u" type="Vowel">ㅜ</div',
        "romanjiInitialLetter": '<div class="letter" id="u">u</div',
        "romanjiFinalLetter": '<div class="letter" id="u">u</div',
        "romanjiBothLetter": '<div class="letter" id="u">u</div',
        "classification": "Vowel",
        "character": "ㅜ",
        "romanji": "u",
    }],
    ["ya", {
        "hangulLetterElement": '<div class="letter" id="ya" type="Y Vowel">ㅑ</div',
        "romanjiInitialLetter": '<div class="letter" id="ya">ya</div',
        "romanjiFinalLetter": '<div class="letter" id="ya">ya</div',
        "romanjiBothLetter": '<div class="letter" id="ya">ya</div',
        "classification": "Y Vowel",
        "character": "ㅑ",
        "romanji": "ya",
    }],
    ["yae", {
        "hangulLetterElement": '<div class="letter" id="yae" type="Y Vowel">ㅒ</div',
        "romanjiInitialLetter": '<div class="letter" id="yae">yae</div',
        "romanjiFinalLetter": '<div class="letter" id="yae">yae</div',
        "romanjiBothLetter": '<div class="letter" id="yae">yae</div',
        "classification": "Y Vowel",
        "character": "ㅒ",
        "romanji": "yae",
    }],
    ["yeo", {
        "hangulLetterElement": '<div class="letter" id="yeo" type="Y Vowel">ㅕ</div',
        "romanjiInitialLetter": '<div class="letter" id="yeo">yeo</div',
        "romanjiFinalLetter": '<div class="letter" id="yeo">yeo</div',
        "romanjiBothLetter": '<div class="letter" id="yeo">yeo</div',
        "classification": "Y Vowel",
        "character": "ㅕ",
        "romanji": "yeo",
    }],
    ["ye", {
        "hangulLetterElement": '<div class="letter" id="ye" type="Y Vowel">ㅖ</div',
        "romanjiInitialLetter": '<div class="letter" id="ye">ye</div',
        "romanjiFinalLetter": '<div class="letter" id="ye">ye</div',
        "romanjiBothLetter": '<div class="letter" id="ye">ye</div',
        "classification": "Y Vowel",
        "character": "ㅖ",
        "romanji": "ye",
    }],
    ["yo", {
        "hangulLetterElement": '<div class="letter" id="yo" type="Y Vowel">ㅛ</div',
        "romanjiInitialLetter": '<div class="letter" id="yo">yo</div',
        "romanjiFinalLetter": '<div class="letter" id="yo">yo</div',
        "romanjiBothLetter": '<div class="letter" id="yo">yo</div',
        "classification": "Y Vowel",
        "character": "ㅛ",
        "romanji": "yo",
    }],
    ["yu", {
        "hangulLetterElement": '<div class="letter" id="yu" type="Y Vowel">ㅠ</div',
        "romanjiInitialLetter": '<div class="letter" id="yu">yu</div',
        "romanjiFinalLetter": '<div class="letter" id="yu">yu</div',
        "romanjiBothLetter": '<div class="letter" id="yu">yu</div',
        "classification": "Y Vowel",
        "character": "ㅠ",
        "romanji": "yu",
    }],
    ["wa", {
        "hangulLetterElement": '<div class="letter" id="wa" type="Diphthong">ㅘ</div',
        "romanjiInitialLetter": '<div class="letter" id="wa">wa</div',
        "romanjiFinalLetter": '<div class="letter" id="wa">wa</div',
        "romanjiBothLetter": '<div class="letter" id="wa">wa</div',
        "classification": "Diphthong",
        "character": "ㅘ",
        "romanji": "wa",
    }],
    ["wae", {
        "hangulLetterElement": '<div class="letter" id="wae" type="Diphthong">ㅙ</div',
        "romanjiInitialLetter": '<div class="letter" id="wae">wae</div',
        "romanjiFinalLetter": '<div class="letter" id="wae">wae</div',
        "romanjiBothLetter": '<div class="letter" id="wae">wae</div',
        "classification": "Diphthong",
        "character": "ㅙ",
        "romanji": "wae",
    }],
    ["oe", {
        "hangulLetterElement": '<div class="letter" id="oe" type="Diphthong">ㅚ</div',
        "romanjiInitialLetter": '<div class="letter" id="oe">oe</div',
        "romanjiFinalLetter": '<div class="letter" id="oe">oe</div',
        "romanjiBothLetter": '<div class="letter" id="oe">oe</div',
        "classification": "Diphthong",
        "character": "ㅚ",
        "romanji": "oe",
    }],
    ["wo", {
        "hangulLetterElement": '<div class="letter" id="wo" type="Diphthong">ㅝ</div',
        "romanjiInitialLetter": '<div class="letter" id="wo">wo</div',
        "romanjiFinalLetter": '<div class="letter" id="wo">wo</div',
        "romanjiBothLetter": '<div class="letter" id="wo">wo</div',
        "classification": "Diphthong",
        "character": "ㅝ",
        "romanji": "wo",
    }],
    ["we", {
        "hangulLetterElement": '<div class="letter" id="we" type="Diphthong">ㅞ</div',
        "romanjiInitialLetter": '<div class="letter" id="we">we</div',
        "romanjiFinalLetter": '<div class="letter" id="we">we</div',
        "romanjiBothLetter": '<div class="letter" id="we">we</div',
        "classification": "Diphthong",
        "character": "ㅞ",
        "romanji": "we",
    }],
    ["wi", {
        "hangulLetterElement": '<div class="letter">ㅟ</div',
        "romanjiInitialLetter": '<div class="letter">wi</div',
        "romanjiFinalLetter": '<div class="letter">wi</div',
        "romanjiBothLetter": '<div class="letter">wi</div',
        "classification": "Diphthong",
        "character": "ㅟ",
        "romanji": "wi",
    }],
    ["ui", {
        "hangulLetterElement": '<div class="letter">ㅢ</div',
        "romanjiInitialLetter": '<div class="letter">ui</div',
        "romanjiFinalLetter": '<div class="letter">ui</div',
        "romanjiBothLetter": '<div class="letter">ui</div',
        "classification": "Diphthong",
        "character": "ㅢ",
        "romanji": "ui",
    }],
]);

// does this need to be a hash map
const Icons = new Map([
    ["Timer", {
        "iconElement": '<div id="timer"><div id="mins">00</div>:<div id="seconds">00</div>:<div id="milli">0</div></div>'
    }],
    ["Home", {
        "iconElement": '<div id="homeButton"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></div>',
    }],
    ["Reset", {
        "iconElement": '<div id="resetButton">Reset</div>',
    }],
])