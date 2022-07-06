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
    for (const item of supplies) {
        adj[item] = []
        indegree[item] = 0;
    };
    for (const [recipe, ing] of zip(recipes, ingredients)) {
        if (!adj[recipe]) adj[recipe] = [];
        indegree[recipe] = 0;
        
        for (const i of ing) {
            
            adj[i] ? adj[i].push(recipe) : adj[i] = [recipe];
            
            indegree[recipe]++;
        }
        if (recipe === 'izcad') console.log(adj);
        // if (recipe === 'izcad') console.log(indegree);
    }
    const q = [...supplies];
    // for (const key in indegree) if (!indegree[key]) q.push(key);
    // console.log(adj);
    while (q.length) {
        const src = q.shift();
        if (src === 'g') console.log(adj['g'])
        for (const dest of adj[src]) {
            
            indegree[dest]--;
            if (indegree[dest] === 0) q.push(dest);
            
        }
        // result.push(src);
        if (!supply.has(src)) result.push(src);
    }
    // console.log(q);
    return result;
};