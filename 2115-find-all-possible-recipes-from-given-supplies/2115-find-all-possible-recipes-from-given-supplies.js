/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const supply = new Set(supplies);
    const adj = {};
    for (let i = 0; i < recipes.length; i++) adj[recipes[i]] = ingredients[i];
    for (let i = 0; i < ingredients.length; i++) {
        for (const ingredient of ingredients[i]) if (!(ingredient in adj)) adj[ingredient] = [];
    }
    const visited = new Set();
    const result = new Set();
    
    const dfs = (recipe) => {
        if (visited.has(recipe)) return false
        if (adj[recipe].length === 0) return supply.has(recipe);
        
        visited.add(recipe);
        for (const ingredient of adj[recipe]) {
            if (!dfs(ingredient)) return false;
        }
        visited.delete(recipe);
        
        supply.add(recipe);
        return true;
    }
    
    for (const recipe of recipes) {
        if (dfs(recipe)) result.add(recipe);
    }
    
    return [...result]
};