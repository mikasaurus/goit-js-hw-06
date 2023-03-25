const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

const elementCount = numberOfCategories.forEach(ele => {
  console.log(
    `Category: ${ele.querySelector('h2').textContent}\nElements: ${
      ele.querySelector('ul').childElementCount
    }`
  );
});
