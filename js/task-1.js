// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const itemsList = document.querySelector('#categories');
const items = itemsList.querySelectorAll('li.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const itemsName = item.querySelector('h2').textContent;
  const itemsCategory = item.querySelectorAll('ul li');
  console.log(`Category: ${itemsName}`);
  console.log(`Elements: ${itemsCategory.length}`);
});
