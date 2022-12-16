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

let hiddenWord = document.getElementsByClassName('hidden-word');

function addUnderscore() {
    let hiddenWord = document.getElementById('hidden-word');
    for (let char in word) {
        hiddenWord.appendChild(underscore.cloneNode(true));
        console.log(char);
    }
}
//add event to retry button
function removeUnderscore() {
    let hiddenWord = document.getElementById('hidden-word');
    hiddenWord.replaceChild('')
}
let retry = document.getElementById('retry');
retry.addEventListener("click", function() {
    userWord.style.display  = 'flex';
    let hiddenWord = document.getElementById('hidden-word');
    hiddenWord.innerHTML = '';
});


//replace the underscore with the corresponding letter
let keys = document.querySelectorAll('button.key');
keys.forEach(key => {
key.addEventListener('click', function() {
    let hiddenWord = document.getElementById('hidden-word');
    hiddenWord.innerHTML += '<p>' + key.textContent + '</p>';
    }
)})


