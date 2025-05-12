console.log('CS4080 Virtual Kitchen');

function showRecipe(category, item) {
  // replace images with those from folder (rn placeholder images)
  // directly manipulating html elements
  const details = {
    bread: {
      avocado: '<img src="images/emoji.png" alt="Avocado Toast"><p>179 Calories</p>',
      tuna: '<img src="images/emoji.png" alt="Tuna Sandwich"><p>250 Calories</p>',
      blt: '<img src="images/emoji.png" alt="BLT Sandwich"><p>320 Calories</p>',
      strawberry: '<img src="images/emoji.png" alt="Strawberry Toast"><p>150 Calories</p>',
    },
    donut: {
      chocolate: '<img src="images/emoji.png" alt="Chocolate Donut"><p>200 Calories</p>',
      strawberry: '<img src="images/emoji.png" alt="Strawberry Donut"><p>180 Calories</p>',
      vanilla: '<img src="images/emoji.png" alt="Vanilla Donut"><p>160 Calories</p>',
      maple: '<img src="images/emoji.png" alt="Maple Donut"><p>210 Calories</p>',
    },
    drinks: {
      coffee: '<img src="images/emoji.png" alt="Coffee"><p>100 Calories</p>',
      tea: '<img src="images/emoji.png" alt="Tea"><p>120 Calories</p>',
      vanilla: '<img src="images/emoji.png" alt="Vanilla"><p>220 Calories</p>',
      maple: '<img src="images/emoji.png" alt="Maple"><p>230 Calories</p>',
    }
  };
  document.getElementById('recipeDetails').innerHTML = details[category][item] || '';
}