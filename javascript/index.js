//start the game

const submit = document.getElementById('submit');

let userWord = document.getElementById('user-word');
let userWordPlaceholder = document.getElementById('user-word-placeholder');

let word = '';

let regex = /[A-Za-z]/gm
//hide the page and get the word value

submit.addEventListener("click", function hide() {
    if (userWordPlaceholder.value !== '' && regex.test(userWordPlaceholder.value)) {
    userWord.style.display  = 'none';
    word = userWordPlaceholder.value.toLowerCase();
    userWordPlaceholder.value = '';
    console.log(word);
    appendChar();    
    addUnderscore();


} else {
    alert('Invalid Input');
}
});

userWordPlaceholder.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
    submit.click();
}
})

//display an underscore for every letter
let underscore = document.createElement('div');
underscore.classList.add('underscore');

let hiddenWord = document.getElementById('hidden-word');

function addUnderscore() {
    let hiddenWord = document.getElementById('hidden-word');
    for (let char in wordArr) {
        hiddenWord.appendChild(underscore.cloneNode(true));
        console.log(char);
    }
}

//get a random word

function getRandomWord() {
    word = randomWordArr[randomNum]
    appendChar();
    addUnderscore();
    return word, wordArr;
}

let randomWordButton = document.getElementById('randomWord');
randomWordButton.addEventListener('click', () => {
    word = getRandomWord();
    userWord.style.display = 'none';

})

//get random number
function getRandomNumber() {
    return Math.floor(Math.random() * 50);
  }
  
  let randomNum = getRandomNumber();
  

//word data base 
let randomWordArr = [
    "time",
    "year",
    "way",
    "day",
    "man",
    "thing",
    "woman",
    "life",
    "hand",
    "part",
    "place",
    "case",
    "group",
    "problem",
    "eye",
    "friend",
    "point",
    "home",
    "water",
    "room",
    "mother",
    "area",
    "money",
    "story",
    "fact",
    "month",
    "lot",
    "right",
    "study",
    "book",
    "eye",
    "job",
    "word",
    "business",
    "issue",
    "side",
    "kind",
    "head",
    "house",
    "service",
    "friend",
    "father",
    "power",
    "hour",
    "game",
    "line",
    "end",
    "member",
    "law",
    "car",
    "city",
    "community",
    "name",
    "president",
    "team",
    "minute",
    "idea",
    "kid"
  ];
//replace the underscore with the corresponding letter
let wordArr = [];
function appendChar() {
    for (let char in word) {
        if(word[char].match(regex)){
            wordArr.push(word[char]);
        }
        }
    return wordArr;
}

let hiddenWordChild = hiddenWord.getElementsByClassName('underscore');

let score = 0;
let error = 0;

let result = document.getElementById('result');

let keys = document.querySelectorAll('button.key');
keys.forEach(key => {
    key.addEventListener('click', function() {
    const indexes = [];
    for (let index = 0; index < wordArr.length; index++) {
    if (wordArr[index] === key.textContent) {
        indexes.push(index);
        }
    }
    console.log(indexes)
    let i = indexes[0]
    let j = indexes[1]
    let k = indexes[2]

    if (i!== undefined) {
    let hiddenWord = document.getElementById('hidden-word');
    hiddenWordChild[i].style.height = 'auto';
    hiddenWordChild[i].style.width = 'auto';
    hiddenWordChild[i].style.backgroundColor = 'transparent';
    hiddenWordChild[i].style.fontSize = 'calc(10px + 5vw)';
    hiddenWordChild[i].innerHTML = key.textContent;
    score++;
    result.textContent = 'RIGHT';
    result.style.color = 'var(--yellow)';
    key.style.backgroundColor = 'var(--yellow)';
    key.style.color = 'var(--dark-blue)';
    key.disabled = true;
    key.style.cursor = 'default';
    }

    if (j!== undefined) {
        let hiddenWord = document.getElementById('hidden-word');
    hiddenWordChild[j].style.height = 'auto';
    hiddenWordChild[j].style.width = 'auto';
    hiddenWordChild[j].style.backgroundColor = 'transparent';
    hiddenWordChild[j].style.fontSize = 'calc(10px + 5vw)';
    hiddenWordChild[j].innerHTML = key.textContent;
    score++;
    }
    if (k!== undefined) {
        let hiddenWord = document.getElementById('hidden-word');
    hiddenWordChild[k].style.height = 'auto';
    hiddenWordChild[k].style.width = 'auto';
    hiddenWordChild[k].style.backgroundColor = 'transparent';
    hiddenWordChild[k].style.fontSize = 'calc(10px + 5vw)';
    hiddenWordChild[k].innerHTML = key.textContent;
    score++;
    }
     else if (i == undefined) {
        key.disabled = true;
        key.style.backgroundColor = 'var(--light-blue)';
        key.style.color = 'var(--white)';
        key.style.cursor = 'default';
        error++;
        result.innerText = 'WRONG';
        result.style.color = 'var(--red)';
    }
    
    if (score == wordArr.length) {
        let win = document.getElementById('win');
        win.style.display = 'flex';    
    }
    if (error == 7) {
        let lose = document.getElementById('lose');
        lose.style.display = 'flex';
    }

    if (error == 1) {
        document.getElementById('hangmanDrawing1').style.display = 'block';
    }

    if (error == 2) {
        document.getElementById('hangmanDrawing2').style.display = 'block';
    }

    if (error == 3) {
        document.getElementById('hangmanDrawing3').style.display = 'block';
    }

    if (error == 4) {
        document.getElementById('hangmanDrawing4').style.display = 'block';
    }

    if (error == 5) {
        document.getElementById('hangmanDrawing5').style.display = 'block';
    }

    if (error == 6) {
        document.getElementById('hangmanDrawing6').style.display = 'block';
    }

    if (error == 7) {
        document.getElementById('hangmanDrawing7').style.display = 'block';
    }

})})
  
