const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
function categoriesDescriber(arr) {
  arr.forEach(item => {
    console.log(
      `Category: ${item.querySelector("h2").textContent}
Elements: ${item.querySelectorAll("li").length}`
      )
  });
  
}
categoriesDescriber(allCategories);