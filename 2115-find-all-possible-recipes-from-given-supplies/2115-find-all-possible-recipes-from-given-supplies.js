/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const available = new Set(supplies);
    const result = [];
    const ingredientToRecipe = {};
    const inDegree = {};
    const zip = (a, b) => a.map((el,i) => [el, b[i]]);

    for (const [rcp, ingredient] of zip(recipes, ingredients)) {
        let nonAvailable = 0;
        for (const ing of ingredient) {
            if (!available.has(ing)) {
                nonAvailable++;
                if (!(ing in ingredientToRecipe)) ingredientToRecipe[ing] = new Set();
                ingredientToRecipe[ing].add(rcp);
            }
        }
        if (nonAvailable === 0) {
            result.push(rcp);
        } else {
            inDegree[rcp] = nonAvailable;
        }
    }
    for (const rcp of result) {
        if (rcp in ingredientToRecipe) {
            for (const recipe of ingredientToRecipe[rcp]) {
                inDegree[recipe]--;
                if (inDegree[recipe] === 0) result.push(recipe);
            }
            delete ingredientToRecipe[rcp];
        }
    }
    return result;
};