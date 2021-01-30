const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsAttachedItem = ingredients.map(ingredient => {
  const ingredientsListItem = document.createElement('li');
  ingredientsListItem.textContent = ingredient;

  return ingredientsListItem;
})

ingredientsList.append(...ingredientsAttachedItem);