//шукаємо елементи li
let categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

//перебирання кожного елемента item
categories.forEach(item => {
console.log(`Category: ${item.firstElementChild.textContent}`);
console.log(`Elements: ${item.lastElementChild.children.length}`)
});