// Marked Price of Different Commodities , it has been assumed to be the same in all the Store in the vicinity.

let prices = {
  salt: 20,
  suger: 30,
  flour: 20,
  ghee: 420,
  rice: 40,
  milk: 40,
  termeric: 80,
  chilliPowder: 40,
  pulse: 120,
  mustardOil: 150,
  refinedOil: 120,
  rajma: 140,
  peanut: 120,
  gramflour: 200,
  dryFruits: 600,
};
// Different Stores and their listed discounts on the commodities availabel in their Stores.
let stores = {
  store1: {
    discounts: {
      salt: 10,
      suger: 15,
      flour: 10,
      ghee: 20,
      rice: 5,
      milk: 0,
      termeric: 10,
      chilliPowder: 0,
      pulse: 14,
      mustardOil: 5,
      refinedOil: 10,
      rajma: 6,
      peanut: 15,
      gramflour: 25,
      dryFruits: 15,
    },
  },
  store2: {
    discounts: {
      salt: 10,
      suger: 12,
      flour: 18,
      ghee: 17,
      rice: 15,
      milk: 4,
      termeric: 8,
      chilliPowder: 5,
      pulse: 6,
      mustardOil: 8,
      refinedOil: 15,
      rajma: 9,
      peanut: 12,
      gramflour: 18,
      dryFruits: 22,
    },
  },
  store3: {
    discounts: {
      salt: 0,
      suger: 8,
      flour: 12,
      ghee: 25,
      rice: 10,
      milk: 5,
      termeric: 13,
      chilliPowder: 10,
      pulse: 12,
      mustardOil: 15,
      refinedOil: 16,
      rajma: 10,
      peanut: 25,
      gramflour: 15,
      dryFruits: 20,
    },
  },
  store4: {
    discounts: {
      salt: 12,
      suger: 15,
      flour: 16,
      ghee: 14,
      rice: 11,
      milk: 7,
      termeric: 15,
      chilliPowder: 5,
      pulse: 14,
      mustardOil: 9,
      refinedOil: 18,
      rajma: 5,
      peanut: 5,
      gramflour: 35,
      dryFruits: 30,
    },
  },

  store5: {
    discounts: {
      salt: 10,
      suger: 5,
      flour: 10,
      ghee: 20,
      rice: 5,
      milk: 0,
      termeric: 10,
      chilliPowder: 0,
      pulse: 2,
      mustardOil: 5,
      refinedOil: 10,
      rajma: 6,
      peanut: 15,
      gramflour: 25,
      dryFruits: 5,
    },
  },
};

// Sample Recipies for preparing a variety of delicious Dishes of food.

let recipe1 = {
  ingredients: ['dryFruits', 'suger', 'flour', 'ghee', 'peanut', 'milk'],
};

let recipe2 = {
  ingredients: ['pulse', 'rice', 'peanut', 'mustardOil', 'termeric', 'salt'],
};

let recipe3 = {
  ingredients: ['salt', 'rice', 'termeric', 'chilliPowder'],
};

let recipe4 = {
  ingredients: ['mustardOil', 'flour', 'gramflour', 'refinedOil', 'salt'],
};

let recipe5 = {
  ingredients: ['rajma', 'pulse', 'chilliPowder', 'ghee', 'salt', 'mustardOil'],
};

// Function for findng out the best combination of shops where one can find the all the ingridients for a recipe at minimum cost.
// This function accepts a recipe as an argument and will return a list of shops from which to buy the required ingridient  at minimum cost.

function getShopComboForRecipe(recipe) {
  let shopCombinationForRecipe = [];
  let priceDiscounts = [];

  for (let j = 0; j < recipe.ingredients.length; j++) {
    for (let i = 1; i <= 5; i++) {
      priceDiscounts.push(stores[`store${i}`].discounts[recipe.ingredients[j]]);
    }
    shopCombinationForRecipe.push({
      [recipe.ingredients[j]]: `store${
        priceDiscounts.lastIndexOf(Math.max(...priceDiscounts)) + 1
      }`,
    });
    priceDiscounts = [];
  }
  return shopCombinationForRecipe;
}
// Examples
console.log(getShopComboForRecipe(recipe1));
console.log(getShopComboForRecipe(recipe2));
console.log(getShopComboForRecipe(recipe3));
console.log(getShopComboForRecipe(recipe4));
console.log(getShopComboForRecipe(recipe5));
