//пошук форми
const loginForm = document.querySelector('.login-form');

// //додаємо слухач подій на форму
// loginForm.addEventListener('submit', event => {
//     //сторінка не повинна перезавантажуватися
//     event.preventDefault();
//     // console.dir(event.currentTarget)
//     // console.log(event.currentTarget.elements.email.value)
//     // console.log(event.currentTarget.elements.password.value)

//     // if(event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
//     //     return alert("Please fill in all the fields!");
//     // }

//     const {
//         elements: { email, password }
//     } = event.currentTarget;
//     // Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
//     // що всі поля повинні бути заповнені.
//     if (email.value === "" || password.value === "") {
//         return alert("Please fill in all the fields!");
//     }

//     //Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
//     //де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
//     //Для доступу до елементів форми використовуй властивість elements
//     const formData = {Email: email.value, Password: password.value}
//     console.log(formData);

//     //очисти значення полів форми методом reset
//     event.currentTarget.reset();

//     //варіант з formData
//     // const formData = new FormData(event.currentTarget);

//     // formData.forEach((value, name) => {
//         // if (value === "") {
//         //     return alert("Please fill in all the fields!");
//         // }
//     //     console.log(`${name} ${value}`);
//     // });
//     // console.log(formData)
//     // event.currentTarget.reset();
// })


loginForm.addEventListener('submit', formData);
function formData(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    const formData = {Email: email.value, Password: password.value}
    console.log(formData);
    event.currentTarget.reset();
}