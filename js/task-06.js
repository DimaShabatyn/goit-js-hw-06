//пошук елемента інпут
const validationInput = document.querySelector('#validation-input');
// console.log(validationInput);
// console.dir(validationInput);
// console.log(validationInput.dataset.length)

const validDataLength = validationInput.dataset.length;
// console.log(validDataLength);//6
// console.log(validationInput.getAttribute('data-length'));//6

//додаємо слухача події
// validationInput.addEventListener('blur', event => {
    // event.preventDefault();
//     const inputLength = event.currentTarget.value.length;
//     //перевіримо на кількість введених символів, а саме 6
//     if(inputLength === Number(validDataLength)) {
//         validationInput.classList.add('valid');
//         validationInput.classList.remove('invalid');
    
//     } else if(inputLength !== Number(validDataLength) && event.currentTarget.value.length !== 0) {
//         validationInput.classList.add('invalid');
//         validationInput.classList.remove('valid');
//     } else {
//         validationInput.classList.remove('valid');
//         validationInput.classList.remove('invalid');
//     }
// });

//другий варіант
validationInput.addEventListener('blur', checkValid);

// function checkValid(event) {
    // event.preventDefault();
//     const inputLength = event.currentTarget.value.length;
//     //перевіримо на кількість введених символів, а саме 6
//     if(inputLength === Number(validDataLength)) {
//         validationInput.classList.add('valid');
//         validationInput.classList.remove('invalid');

//     //перевіримо на кількість введених символів, а саме, якщо не 6
//     } else if(inputLength !== Number(validDataLength) && inputLength !== 0) {
//         validationInput.classList.add('invalid');
//         validationInput.classList.remove('valid');
//     } else {
//         validationInput.classList.remove('valid');
//         validationInput.classList.remove('invalid');
//     }
// }

function checkValid(event) {
    event.preventDefault();
    const inputLength = event.currentTarget.value.length;
    //перевіримо на кількість введених символів, а саме 6
    if(inputLength === Number(validDataLength)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');

    //перевіримо на кількість введених символів, а саме, якщо не 6
    }
    
    if(inputLength !== Number(validDataLength)) {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    } 

    if (inputLength === 0) {
        validationInput.classList.remove('valid');
        validationInput.classList.remove('invalid');
    }
}