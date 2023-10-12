const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
function createList(arr) {
  const listItems = arr.map(el => {
    const list = document.createElement('li');
    list.textContent = el;
    list.classList.add('item');
    return list;
  })
  ingredientsList.append(...listItems);
}

createList(ingredients);