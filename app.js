const userInput = document.querySelector('#userInput');
const userOutput = document.querySelector('#userOutput');

userInput.addEventListener('input', function (e) {
    userOutput.innerText = userInput.value;
});