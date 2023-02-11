//пошук елемента вводу та виводу
const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

//додаємо слухача події до input
textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value.trim();

    //якщо інпут порожній, 
    //у спані повинен відображатися рядок "Anonymous"
    if(event.currentTarget.value.trim() === '') {
        textOutput.textContent = "Anonymous";
    }
});

