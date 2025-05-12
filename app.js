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
  const bread_recommendations = {
    bread: {
      avocado: {
        drink: {
          recommended: 'Coffee',
          calories: 100,
        },
        donut: {
          recommended: 'Chocolate Donut',
          calories: 200,
        }
      },
      tuna: {
        drink: {
          recommended: 'Tea',
          calories: 120,
        },
        donut: {
          recommended: 'Maple Donut',
          calories: 210,
        }
      },
      blt: {
        drink: {
          recommended: 'Vanilla',
          calories: 220,
        },
        donut: {
          recommended: 'Vanilla Donut',
          calories: 160,
        }
      },
      strawberry: {        
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
      coffee: {
        bread: {
          recommended: 'Avocado Toast',
          calories: 179,
        },
        donut: {
          recommended: 'Chocolate Donut',
          calories: 200,
        }
      },
      tea: {
        bread: {
          recommended: 'Tuna Sandwich',
          calories: 250,
        },
        donut: {
          recommended: 'Maple Donut',
          calories: 210,
        }
      },
      vanilla: {
        bread: {
          recommended: 'BLT Sandwich',
          calories: 320,
        },
        donut: {
          recommended: 'Vanilla Donut',
          calories: 160,
        }
      },
      maple: {
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
      chocolate: {
        bread: {
          recommended: 'Avocado Toast',
          calories: 179,
        }, 
        drink: {
          recommended: 'Coffee',
          calories: 100,
        }
      }, 
      strawberry: {
        bread: {
          recommended: 'Strawberry Toast',
          calories: 150,
        },
        drink: {
          recommended: 'Maple',
          calories: 230,
        }
      },
      vanilla: {
        bread: {
          recommended: 'BLT Sandwich',
          calories: 320,
        }, 
        drink: {
          recommended: 'Vanilla',
          calories: 220,
        }
      },
      maple: {
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
      avocado: {
        donut: "The rich chocolate donut complements the creamy avocado toast",
        drink: "Coffee's bold flavor balances the creamy avocado"
      },
      tuna: {
        donut: "The maple donut adds sweetness to the savory tuna sandwich",
        drink: "Tea's subtle flavor pairs well with the tuna's richness"
      },
      blt: {
        donut: "Vanilla donut provides a sweet contrast to the savory BLT",
        drink: "Vanilla drink enhances the smoky bacon flavors"
      },
      strawberry: {
        donut: "Strawberry donut matches the fruity toast flavor",
        drink: "Maple drink adds a warm sweetness to the strawberry toast"
      }
    },
    donut: {
      chocolate: {
        bread: "Avocado toast's creaminess balances the rich chocolate",
        drink: "Coffee's boldness complements the chocolate donut"
      },
      strawberry: {
        bread: "Strawberry donut pairs perfectly with strawberry toast",
        drink: "Maple drink adds a warm sweetness to the strawberry donut"
      },
      vanilla: {
        bread: "Vanilla donut provides a sweet contrast to the savory BLT",
        drink: "Vanilla drink enhances the donut's sweet flavor"
      },
      maple: {
        bread: "Maple donut adds sweetness to the savory tuna sandwich",
        drink: "Tea's subtle flavor balances the maple sweetness"
      }
    },
    drinks: {
      coffee: {
        bread: "Coffee's bold flavor balances the creamy avocado toast",
        donut: "Coffee's boldness complements the chocolate donut"
      },
      tea: {
        bread: "Tea's subtle flavor pairs well with the tuna's richness",
        donut: "Tea's subtle flavor balances the maple sweetness"
      },
      vanilla: {
        bread: "Vanilla drink enhances the smoky bacon flavors",
        donut: "Vanilla drink enhances the donut's sweet flavor"
      },
      maple: {
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
      `<p>Recommended Donut: ${bread_recommendations[category][item]['donut']['recommended']}</p>
       <p class="reason">${getPairingReason(category, item, 'donut')}</p>
       <p>Recommended Drink: ${bread_recommendations[category][item]['drink']['recommended']}</p>
       <p class="reason">${getPairingReason(category, item, 'drink')}</p>`;
  } else if (category === 'donut') {
    document.getElementById('recipeRecommendations').innerHTML = 
      `<p>Recommended Bread: ${donut_recommendations[category][item]['bread']['recommended']}</p>
       <p class="reason">${getPairingReason(category, item, 'bread')}</p>
       <p>Recommended Drink: ${donut_recommendations[category][item]['drink']['recommended']}</p>
       <p class="reason">${getPairingReason(category, item, 'drink')}</p>`;
  } else if (category === 'drinks') {
    document.getElementById('recipeRecommendations').innerHTML = 
      `<p>Recommended Bread: ${drink_recommendations[category][item]['bread']['recommended']}</p>
       <p class="reason">${getPairingReason(category, item, 'bread')}</p>
       <p>Recommended Donut: ${drink_recommendations[category][item]['donut']['recommended']}</p>
       <p class="reason">${getPairingReason(category, item, 'donut')}</p>`;
  }
}
