const allCategories = document.querySelector("#categories");
console.log(`Number of categories: ${allCategories.children.length}`);

function categoriesDescriber([...arr]) {
  arr.forEach(item => {
    console.log(
      `Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`
      )
    })
}

categoriesDescriber(allCategories.children);