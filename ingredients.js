const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("The ingredients to make banana bread (using a while loop):");
let i = 0;
while (i<ingredients.length) {
  console.log(ingredients[i]);
  i++;
};
console.log('\n');

// Write a for loop that prints out the contents of ingredients:
console.log("The ingredients to make banana bread (using a for loop):");
for (i=0;i<ingredients.length;i++){
  console.log(ingredients[i]);
};
console.log('\n');

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("The ingredients to make banana bread in reverse order (using a for loop):");
const reverseIngredients = ingredients.reverse();
for (i=0;i<reverseIngredients.length;i++){
  console.log(reverseIngredients[i]);
};