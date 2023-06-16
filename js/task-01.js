const categoryItems = document.querySelectorAll('li.item');
const numberOfCategories = categoryItems.length;
console.log("Number of categories:", numberOfCategories);

categoryItems.forEach((categoryItem) => {
 
  const categoryName = categoryItem.querySelector('h2').textContent;
  console.log('Category:', categoryName);

  const itemList = categoryItem.querySelector('ul');

  const itemLength = itemList.querySelectorAll('li').length;
  console.log('Elements:', itemLength);
});