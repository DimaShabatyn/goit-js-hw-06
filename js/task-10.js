function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const tapeNumber = document.querySelector('input[type="number"]');
console.dir(tapeNumber);
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
divBoxes.style.display = 'flex';
divBoxes.style.flexWrap = 'wrap';
divBoxes.style.alignItems = 'center';
divBoxes.style.marginTop = '30px';

createBtn.addEventListener('click', () => {
if (Number(tapeNumber.value.trim()) < Number(tapeNumber.min) || Number(tapeNumber.value.trim()) > Number(tapeNumber.max)) {
  alert('Please select from 1 to 100 numbers');
} else {
  createBoxes(tapeNumber.value.trim())
};
tapeNumber.value = '';
})

destroyBtn.addEventListener('click', () => {
tapeNumber.value = '';
divBoxes.innerHTML = '';
})

function createBoxes(amount) { 
  const boxes = [];
  let size = 30;
    for (let i = 0; i < amount; i+=1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxes.push(div);
  }
  divBoxes.insertAdjacentHTML('beforeend', boxes.join(''));
}