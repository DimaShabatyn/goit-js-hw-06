//пошук елементів
const rangeControl = document.querySelector('#font-size-control');
console.dir(rangeControl);
const rangeText = document.querySelector('#text');
console.log(rangeText)
//додаємо слухача подій
rangeControl.addEventListener('input', event => {
    rangeText.style.fontSize = `${event.currentTarget.value}px`
})