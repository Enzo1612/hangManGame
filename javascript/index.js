//start the game

const submit = document.getElementById('submit');

let userWord = document.getElementById('user-word');
let userWordPlaceholder = document.getElementById('user-word-placeholder');

let word = '';
//hide the page and get the word value

submit.addEventListener("click", function hide() {
    if (userWordPlaceholder.value!== '') {
    userWord.style.display  = 'none';
    word = userWordPlaceholder.value;
    userWordPlaceholder.value = '';
    console.log(word);
    appendChar();
    
    addUnderscore()

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
    for (let char in word) {
        hiddenWord.appendChild(underscore.cloneNode(true));
        console.log(char);
    }
}

//replace the underscore with the corresponding letter
let wordArr = [];
function appendChar() {
    for (let char in word) {
        wordArr.push(word[char]);
        }
    return wordArr;
}

let hiddenWordChild = hiddenWord.getElementsByClassName('underscore');

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
    {let hiddenWord = document.getElementById('hidden-word');
    hiddenWordChild[i].style.height = 'auto';
    hiddenWordChild[i].style.width = 'auto';
    hiddenWordChild[i].style.backgroundColor = 'transparent';
    hiddenWordChild[i].style.fontSize = 'calc(10px + 5vw)';
    hiddenWordChild[i].innerHTML = key.textContent;}
    if (j!== undefined) {
        {let hiddenWord = document.getElementById('hidden-word');
    hiddenWordChild[j].style.height = 'auto';
    hiddenWordChild[j].style.width = 'auto';
    hiddenWordChild[j].style.backgroundColor = 'transparent';
    hiddenWordChild[j].style.fontSize = 'calc(10px + 5vw)';
    hiddenWordChild[j].innerHTML = key.textContent;}
    }
    if (k!== undefined) {
        {let hiddenWord = document.getElementById('hidden-word');
    hiddenWordChild[k].style.height = 'auto';
    hiddenWordChild[k].style.width = 'auto';
    hiddenWordChild[k].style.backgroundColor = 'transparent';
    hiddenWordChild[k].style.fontSize = 'calc(10px + 5vw)';
    hiddenWordChild[k].innerHTML = key.textContent;}
    }
    key.style.backgroundColor = 'var(--yellow)';
    key.style.color = 'var(--dark-blue)';
    key.disabled = true;
    key.style.cursor = 'default';
    
    

    } else {
        key.disabled = true;
        key.style.backgroundColor = 'var(--light-blue)';
        key.style.color = 'var(--white)';
        key.style.cursor = 'default';
    }
})})


