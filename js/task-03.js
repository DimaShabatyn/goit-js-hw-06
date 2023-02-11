const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//знаходимо список ul
const list = document.querySelector('.gallery');

//перебираємо масив та ствоюємо для кожного елемента li посилання src та alt-тексту
//за допомогою шаблонного рядка
const htmlMarkup = images.map(({url, alt}) =>
`<li><img class="picture" src="${url}" alt="${alt}" width="250"></li>`)
.join("");
console.log(htmlMarkup);

//за одну операцію додаємо елементи в DOM
list.insertAdjacentHTML("beforeend", htmlMarkup);

//додамо мінімальний набір css
list.style.display = "flex";
list.style.gap = "50px";
list.style.listStyleType = "none";
