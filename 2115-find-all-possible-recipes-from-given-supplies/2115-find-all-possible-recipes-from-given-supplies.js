/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const n = recipes.length;
    const supply = new Set(supplies);
    const seen = new Set();
    const result = new Set();
    const adj = {};
    for (let i = 0; i < n; i++) adj[recipes[i]] = ingredients[i];
    for (let i = 0; i < n; i++) {
        for (let ingredient of ingredients[i]) {
            if (!(ingredient in adj)) adj[ingredient] = [];
        }
    }
    
    const dfs = (recipe) => {
        if (seen.has(recipe)) {
            return false;
        }

        if (adj[recipe].length === 0) {
            return supply.has(recipe);
        }

        seen.add(recipe);
        for (let i of adj[recipe]) {
            if (!dfs(i)) return false;
        }

        seen.delete(recipe);
        supply.add(recipe);
        return true;
    }
    
    for (let recipe of recipes) {
        if (dfs(recipe)) result.add(recipe);
    }
    
    return [...result];
};