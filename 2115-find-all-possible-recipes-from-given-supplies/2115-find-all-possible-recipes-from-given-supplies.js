/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var zip = (a,b) => a.map((el,i) => [el, b[i]]);

var findAllRecipes = function(recipes, ingredients, supplies) {
    const result = [];
    
    const supply = new Set(supplies);
    const adj = {};
    const indegree = {};

    for (const [recipe, ing] of zip(recipes, ingredients)) {
        indegree[recipe] = 0;
        
        for (const i of ing) {
            adj[i] ? adj[i].push(recipe) : adj[i] = [recipe];   
            indegree[recipe]++;
        }
    }
    
    const q = [...supplies];
    while (q.length) {
        const src = q.shift();
        for (const dest of adj[src] || []) if (!(indegree[dest]-- - 1)) q.push(dest);
        if (!supply.has(src)) result.push(src);
    }

    return result;
};