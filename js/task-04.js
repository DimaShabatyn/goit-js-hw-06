//створення та ініціалізація змінної
let counterValue = 0;

//пошук елементів
let valueCounter = document.querySelector('#value');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

//додаємо слухачів кліків на кнопки
minusBtn.addEventListener("click", () => {
    counterValue -= 1;
    //оновлюю інтерфейс новим значенням змінної counterValue
    valueCounter.textContent = counterValue;
});

plusBtn.addEventListener("click", () => {
    counterValue += 1;
    //оновлюю інтерфейс новим значенням змінної counterValue
    valueCounter.textContent = counterValue;
});