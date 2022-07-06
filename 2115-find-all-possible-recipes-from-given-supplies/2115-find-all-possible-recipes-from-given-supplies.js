/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    // Create Supply hashset
    // Create an adjacency list
    // Create result
    
    // Iterate recipes
    // Iterate recipe's ingredients (DFS)
    // If a recipe has no ingredients, and it's in the supply set => true
    const N = recipes.length;
    const supply = new Set(supplies);
    const visited = new Set();
    const adj = {};
    const result = [];
    for (let i = 0; i < N; i++) adj[recipes[i]] = ingredients[i];
    
    const dfs = (recipe) => {
        if (supply.has(recipe)) return true;
        if (visited.has(recipe) || !(recipe in adj)) return false;
        
        visited.add(recipe);
        
        for (const i of adj[recipe]) {
            if (!dfs(i)) return false;
        }
        
        visited.delete(recipe);
        
        return true;
    }
    
    for (const recipe of recipes) {
        if (dfs(recipe)) result.push(recipe);
    }
    
    return result;
};