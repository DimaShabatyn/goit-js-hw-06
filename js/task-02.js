const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//знаходимо список ul
const list = document.querySelector('#ingredients');

//масив, для додавання елементів списку
const listItemsArray = [];

//перебираємо кожен елемент заданого масиву
ingredients.forEach(ingredient => {

  //створення елементу списку у розмітці
  const listItem = document.createElement('li');

  //додаємо назву інгредієнта як його текстовий вміст
  listItem.textContent = ingredient;

  //додаємо елементу клас item
  listItem.classList.add('item');

  //запушимо кожний елемент у загальний масив
  listItemsArray.push(listItem);
})

//в головну ul розгортаємо масив з усіма li
list.prepend(...listItemsArray);