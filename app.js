console.log('CS4080 Virtual Kitchen');

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
  // replace images with those from folder (rn placeholder images)
  // directly manipulating html elements
  const details = {
    bread: {
      'Avocado Toast': '<img src="images/emoji.png" alt="Avocado Toast"><p>179 Calories</p>',
      'Tuna Sandwich': '<img src="images/emoji.png" alt="Tuna Sandwich"><p>250 Calories</p>',
      'BLT Sandwich': '<img src="images/emoji.png" alt="BLT Sandwich"><p>320 Calories</p>',
      'Strawberry Toast': '<img src="images/emoji.png" alt="Strawberry Toast"><p>150 Calories</p>',
    },
    donut: {
      'Chocolate Donut': '<img src="images/emoji.png" alt="Chocolate Donut"><p>200 Calories</p>',
      'Strawberry Donut': '<img src="images/emoji.png" alt="Strawberry Donut"><p>180 Calories</p>',
      'Vanilla Donut': '<img src="images/emoji.png" alt="Vanilla Donut"><p>160 Calories</p>',
      'Maple Donut': '<img src="images/emoji.png" alt="Maple Donut"><p>210 Calories</p>',
    },
    drinks: {
      'Coffee': '<img src="images/emoji.png" alt="Coffee"><p>100 Calories</p>',
      'Tea': '<img src="images/emoji.png" alt="Tea"><p>120 Calories</p>',
      'Vanilla': '<img src="images/emoji.png" alt="Vanilla"><p>220 Calories</p>',
      'Maple': '<img src="images/emoji.png" alt="Maple"><p>230 Calories</p>',
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

  // display recipe details 
  document.getElementById('recipeDetails').innerHTML = details[category][item] || '';
  // display recipe recommendations
  if (category === 'bread') {
    document.getElementById('recipeRecommendations').innerHTML = 
      `<p>Recommended Donut: <a href="donut_recipes.html?item=${bread_recommendations[category][item]['donut']['recommended']}" onclick="showRecipe('donut', '${bread_recommendations[category][item]['donut']['recommended']}')">${bread_recommendations[category][item]['donut']['recommended']}</a></p>
       <p class="reason">${getPairingReason(category, item, 'donut')}</p>
       <p>Recommended Drink: <a href="drinks_recipes.html?item=${bread_recommendations[category][item]['drink']['recommended']}" onclick="showRecipe('drinks', '${bread_recommendations[category][item]['drink']['recommended']}')">${bread_recommendations[category][item]['drink']['recommended']}</a></p>
       <p class="reason">${getPairingReason(category, item, 'drink')}</p>`;
  } else if (category === 'donut') {
    document.getElementById('recipeRecommendations').innerHTML = 
      `<p>Recommended Bread: <a href="bread_recipes.html?item=${donut_recommendations[category][item]['bread']['recommended']}" onclick="showRecipe('bread', '${donut_recommendations[category][item]['bread']['recommended']}')">${donut_recommendations[category][item]['bread']['recommended']}</a></p>
       <p class="reason">${getPairingReason(category, item, 'bread')}</p>
       <p>Recommended Drink: <a href="drinks_recipes.html?item=${donut_recommendations[category][item]['drink']['recommended']}" onclick="showRecipe('drinks', '${donut_recommendations[category][item]['drink']['recommended']}')">${donut_recommendations[category][item]['drink']['recommended']}</a></p>
       <p class="reason">${getPairingReason(category, item, 'drink')}</p>`;
  } else if (category === 'drinks') {
    document.getElementById('recipeRecommendations').innerHTML = 
      `<p>Recommended Bread: <a href="bread_recipes.html?item=${drink_recommendations[category][item]['bread']['recommended']}" onclick="showRecipe('bread', '${drink_recommendations[category][item]['bread']['recommended']}')">${drink_recommendations[category][item]['bread']['recommended']}</a></p>
       <p class="reason">${getPairingReason(category, item, 'bread')}</p>
       <p>Recommended Donut: <a href="donut_recipes.html?item=${drink_recommendations[category][item]['donut']['recommended']}" onclick="showRecipe('donut', '${drink_recommendations[category][item]['donut']['recommended']}')">${drink_recommendations[category][item]['donut']['recommended']}</a></p>
       <p class="reason">${getPairingReason(category, item, 'donut')}</p>`;
  }
}
