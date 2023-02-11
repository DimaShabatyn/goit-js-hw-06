function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//пошук елементів
const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color') ;
const spanColor = document.querySelector('span.color');

//додаємо слухача подій
changeColorBtn.addEventListener('click', randomColor)

function randomColor(event) {

  //рандомний колір
  let color = getRandomHexColor();

  //заливка бекграунда рандомним кольором
  body.style.backgroundColor = color;

  //публікуємо назву/шифр кольору в спан
  spanColor.textContent = color;
}