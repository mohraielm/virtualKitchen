console.log('CS4080 Virtual Kitchen');

// Get modal elements
const modal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.querySelector('.close-button');

// Close modal when clicking the X button
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showRecipeModal(category) {
    // Sidebar image and name
    let sidebarImg = '';
    let sidebarName = '';
    let recipeList = '';
    if (category === 'bread') {
        sidebarImg = '<img src="images/Bread.png" alt="Bread" class="recipe-image bread">';
        sidebarName = 'Bread';
        recipeList = `
            <li class="recipe-item" onclick="showRecipe('bread', 'avocado')">
                <img src="images/emoji.png" alt="Avocado Toast" class="recipe-image">
                <p>Avocado Toast</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('bread', 'tuna')">
                <img src="images/emoji.png" alt="Tuna Sandwich" class="recipe-image">
                <p>Tuna Sandwich</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('bread', 'blt')">
                <img src="images/emoji.png" alt="BLT Sandwich" class="recipe-image">
                <p>BLT Sandwich</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('bread', 'strawberry')">
                <img src="images/emoji.png" alt="Strawberry Toast" class="recipe-image">
                <p>Strawberry Toast</p>
            </li>`;
    } else if (category === 'donut') {
        sidebarImg = '<img src="images/Donut.png" alt="Donut" class="recipe-image donut">';
        sidebarName = 'Donut';
        recipeList = `
            <li class="recipe-item" onclick="showRecipe('donut', 'chocolate')">
                <img src="images/emoji.png" alt="Chocolate Donut" class="recipe-image">
                <p>Chocolate Donut</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('donut', 'strawberry')">
                <img src="images/emoji.png" alt="Strawberry Donut" class="recipe-image">
                <p>Strawberry Donut</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('donut', 'vanilla')">
                <img src="images/emoji.png" alt="Vanilla Donut" class="recipe-image">
                <p>Vanilla Donut</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('donut', 'maple')">
                <img src="images/emoji.png" alt="Maple Donut" class="recipe-image">
                <p>Maple Donut</p>
            </li>`;
    } else if (category === 'drinks') {
        sidebarImg = '<img src="images/Cup.png" alt="Drink" class="recipe-image cup">';
        sidebarName = 'Drink';
        recipeList = `
            <li class="recipe-item" onclick="showRecipe('drinks', 'coffee')">
                <img src="images/emoji.png" alt="Coffee" class="recipe-image">
                <p>Coffee</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('drinks', 'tea')">
                <img src="images/emoji.png" alt="Tea" class="recipe-image">
                <p>Tea</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('drinks', 'vanilla')">
                <img src="images/emoji.png" alt="Vanilla" class="recipe-image">
                <p>Vanilla</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('drinks', 'maple')">
                <img src="images/emoji.png" alt="Maple" class="recipe-image">
                <p>Maple</p>
            </li>`;
    }
    modalContent.innerHTML = `
      <div class="recipe-page">
        <main class="sidebar">
          <div class="recipe-title">
            ${sidebarImg}
            <p>${sidebarName}</p>
          </div>
          <ul class="recipes-list">
            ${recipeList}
          </ul>
        </main>
        <div class="recipe-container">
          <div class="recipe-details" id="modalRecipeDetails"></div>
          <div class="recipe-recommendations" id="modalRecipeRecommendations"></div>
        </div>
      </div>
    `;
    modal.style.display = "block";
}

function showRecipe(category, item) {
  const details = {
    bread: {
      avocado: { img: 'images/emoji.png', name: 'Avocado Toast', calories: 179 },
      tuna: { img: 'images/emoji.png', name: 'Tuna Sandwich', calories: 250 },
      blt: { img: 'images/emoji.png', name: 'BLT Sandwich', calories: 320 },
      strawberry: { img: 'images/emoji.png', name: 'Strawberry Toast', calories: 150 },
    },
    donut: {
      chocolate: { img: 'images/emoji.png', name: 'Chocolate Donut', calories: 200 },
      strawberry: { img: 'images/emoji.png', name: 'Strawberry Donut', calories: 180 },
      vanilla: { img: 'images/emoji.png', name: 'Vanilla Donut', calories: 160 },
      maple: { img: 'images/emoji.png', name: 'Maple Donut', calories: 210 },
    },
    drinks: {
      coffee: { img: 'images/emoji.png', name: 'Coffee', calories: 100 },
      tea: { img: 'images/emoji.png', name: 'Tea', calories: 120 },
      vanilla: { img: 'images/emoji.png', name: 'Vanilla', calories: 220 },
      maple: { img: 'images/emoji.png', name: 'Maple', calories: 230 },
    }
  };
  const food = details[category][item];
  document.getElementById('modalRecipeDetails').innerHTML = `
    <img src="${food.img}" alt="${food.name}" class="recipe-image">
    <p style="font-size: 2rem; font-weight: bold; margin: 20px 0 10px 0;">${food.name}</p>
    <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 30px;">${food.calories} Calories</p>
  `;
  document.getElementById('modalRecipeRecommendations').innerHTML = '';
}