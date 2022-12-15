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
    console.log(word);
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


