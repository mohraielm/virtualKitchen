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
        sidebarImg = '<img src="images/Cup.png" alt="Drink" class="recipe-image cup" style="width: 150px; height: auto;">';
        sidebarName = 'Drink';
        recipeList = `
            <li class="recipe-item" onclick="showRecipe('drinks', 'coffee')">
                <img src="images/coffee.png" alt="Coffee" class="recipe-image">
                <p>Coffee</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('drinks', 'tea')">
                <img src="images/tea.png" alt="Tea" class="recipe-image">
                <p>Tea</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('drinks', 'vanilla')">
                <img src="images/vanilla.png" alt="Vanilla" class="recipe-image">
                <p>Vanilla</p>
            </li>
            <li class="recipe-item" onclick="showRecipe('drinks', 'maple')">
                <img src="images/maple.png" alt="Maple" class="recipe-image">
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
// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Check URL parameters on page load
window.onload = function() {
  const item = getUrlParameter('item');
  if (item) {
    // Determine category based on current page
    let category;
    if (window.location.pathname.includes('bread')) {
      category = 'bread';
    } else if (window.location.pathname.includes('donut')) {
      category = 'donut';
    } else if (window.location.pathname.includes('drinks')) {
      category = 'drinks';
    }
    if (category) {
      showRecipe(category, item);
    }
  }
};

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
      coffee: { img: 'images/coffee.png', name: 'Coffee', calories: 100 },
      tea: { img: 'images/tea.png', name: 'Tea', calories: 120 },
      vanilla: { img: 'images/vanilla.png', name: 'Vanilla', calories: 220 },
      maple: { img: 'images/maple.png', name: 'Maple', calories: 230 },
    }
  };

  const bread_recommendations = {
    bread: {
      'Avocado Toast': {
        drink: {
          recommended: 'Coffee',
          calories: 100,
        },
        donut: {
          recommended: 'Chocolate Donut',
          calories: 200,
        }
      },
      'Tuna Sandwich': {
        drink: {
          recommended: 'Tea',
          calories: 120,
        },
        donut: {
          recommended: 'Maple Donut',
          calories: 210,
        }
      },
      'BLT Sandwich': {
        drink: {
          recommended: 'Vanilla',
          calories: 220,
        },
        donut: {
          recommended: 'Vanilla Donut',
          calories: 160,
        }
      },
      'Strawberry Toast': {        
        drink: {
          recommended: 'Maple',
          calories: 230,
        },
        donut: {
          recommended: 'Strawberry Donut',
          calories: 180,
        }
      }
    }
  }
  const drink_recommendations = {
    drinks: {
      'Coffee': {
        bread: {
          recommended: 'Avocado Toast',
          calories: 179,
        },
        donut: {
          recommended: 'Chocolate Donut',
          calories: 200,
        }
      },
      'Tea': {
        bread: {
          recommended: 'Tuna Sandwich',
          calories: 250,
        },
        donut: {
          recommended: 'Maple Donut',
          calories: 210,
        }
      },
      'Vanilla': {
        bread: {
          recommended: 'BLT Sandwich',
          calories: 320,
        },
        donut: {
          recommended: 'Vanilla Donut',
          calories: 160,
        }
      },
      'Maple': {
        bread: {
          recommended: 'Strawberry Toast',
          calories: 150,
        },
        donut: {
          recommended: 'Strawberry Donut',
          calories: 180,
        }
      }
    }
  }
  const donut_recommendations = {
    donut: {
      'Chocolate Donut': {
        bread: {
          recommended: 'Avocado Toast',
          calories: 179,
        }, 
        drink: {
          recommended: 'Coffee',
          calories: 100,
        }
      }, 
      'Strawberry Donut': {
        bread: {
          recommended: 'Strawberry Toast',
          calories: 150,
        },
        drink: {
          recommended: 'Maple',
          calories: 230,
        }
      },
      'Vanilla Donut': {
        bread: {
          recommended: 'BLT Sandwich',
          calories: 320,
        }, 
        drink: {
          recommended: 'Vanilla',
          calories: 220,
        }
      },
      'Maple Donut': {
        bread: {
          recommended: 'Tuna Sandwich',
          calories: 250,
        },
        drink: {
          recommended: 'Tea',
          calories: 120,
        }
      }
    }
  }
  
function getPairingReason(category, item, type) {
  const reasons = {
    bread: {
      'Avocado Toast': {
        donut: "The rich chocolate donut complements the creamy avocado toast",
        drink: "Coffee's bold flavor balances the creamy avocado"
      },
      'Tuna Sandwich': {
        donut: "The maple donut adds sweetness to the savory tuna sandwich",
        drink: "Tea's subtle flavor pairs well with the tuna's richness"
      },
      'BLT Sandwich': {
        donut: "Vanilla donut provides a sweet contrast to the savory BLT",
        drink: "Vanilla drink enhances the smoky bacon flavors"
      },
      'Strawberry Toast': {
        donut: "Strawberry donut matches the fruity toast flavor",
        drink: "Maple drink adds a warm sweetness to the strawberry toast"
      }
    },
    donut: {
      'Chocolate Donut': {
        bread: "Avocado toast's creaminess balances the rich chocolate",
        drink: "Coffee's boldness complements the chocolate donut"
      },
      'Strawberry Donut': {
        bread: "Strawberry donut pairs perfectly with strawberry toast",
        drink: "Maple drink adds a warm sweetness to the strawberry donut"
      },
      'Vanilla Donut': {
        bread: "Vanilla donut provides a sweet contrast to the savory BLT",
        drink: "Vanilla drink enhances the donut's sweet flavor"
      },
      'Maple Donut': {
        bread: "Maple donut adds sweetness to the savory tuna sandwich",
        drink: "Tea's subtle flavor balances the maple sweetness"
      }
    },
    drinks: {
      'Coffee': {
        bread: "Coffee's bold flavor balances the creamy avocado toast",
        donut: "Coffee's boldness complements the chocolate donut"
      },
      'Tea': {
        bread: "Tea's subtle flavor pairs well with the tuna's richness",
        donut: "Tea's subtle flavor balances the maple sweetness"
      },
      'Vanilla': {
        bread: "Vanilla drink enhances the smoky bacon flavors",
        donut: "Vanilla drink enhances the donut's sweet flavor"
      },
      'Maple': {
        bread: "Maple drink adds a warm sweetness to the strawberry toast",
        donut: "Maple drink adds a warm sweetness to the strawberry donut"
      }
    }
  };
  return reasons[category][item][type];
}

  const recommendationsMap = {
    bread: {
      obj: bread_recommendations.bread,
      keys: [
        { label: "Recommended Donut", key: "donut" },
        { label: "Recommended Drink", key: "drink" }
      ]
    },
    donut: {
      obj: donut_recommendations.donut,
      keys: [
        { label: "Recommended Bread", key: "bread" },
        { label: "Recommended Drink", key: "drink" }
      ]
    },
    drinks: {
      obj: drink_recommendations.drinks,
      keys: [
        { label: "Recommended Bread", key: "bread" },
        { label: "Recommended Donut", key: "donut" }
      ]
    }
  };

  const food = details[category][item];
  document.getElementById('modalRecipeDetails').innerHTML = `
    <img src="${food.img}" alt="${food.name}" class="recipe-image">
    <p style="font-size: 2rem; font-weight: bold; margin: 20px 0 10px 0;">${food.name}</p>
    <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 30px;">${food.calories} Calories</p>
  `;

  // dynamically build recommendations
  const recObj = recommendationsMap[category].obj[food.name];
  const recKeys = recommendationsMap[category].keys;
  let recommendationsHTML = recKeys.map(rec => {
    const recommended = recObj[rec.key].recommended;
    const reason = getPairingReason(category, food.name, rec.key);
    return `
      <p><b>${rec.label}:</b> ${recommended}</p>
      <p class="reason">${reason}</p>
    `;
  }).join('');

  document.getElementById('modalRecipeRecommendations').innerHTML = recommendationsHTML;
}