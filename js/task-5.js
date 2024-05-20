// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль по кліку на
// button.change - color і задає це значення кольору текстовим вмістом для span.color.
//<div class="widget">
// <p>
//  Background color: <span class="color">-</span>
// </p>
// <button type="button" class="change-color">
//    Change color
//  </button>
//</div>;
// Зверни увагу, що функція getRandomHexColor() повертає колір у hex - форматі, в той час як
// колір фону на < body > буде у форматі rgb.Це нормально й не потребує якихось правок.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button.change-color');
const output = document.querySelector('span.color');
button.addEventListener('click', event => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  output.textContent = newColor;
});
