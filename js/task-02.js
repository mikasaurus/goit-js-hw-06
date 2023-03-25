const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.getElementById('ingredients');

ingredients.forEach(item => {
  const li = document.createElement('li');
  li.innerText = item;
  list.appendChild(li);
});
