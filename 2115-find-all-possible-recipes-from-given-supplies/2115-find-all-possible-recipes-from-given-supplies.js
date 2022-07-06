/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const result = [];
    const seen = new Set(supplies);
    const zip = (arr1, arr2) => arr1.map((el, i) => [el, arr2[i]]);

    const dq = zip(recipes, ingredients);
    console.log(dq);
    let prevSize = seen.size - 1;

    while (seen.size > prevSize) {
        prevSize = seen.size;
        for (let i = 0; i < dq.length; i++) {
            let [r, ing] = dq.shift();
            if (ing.every(i => seen.has(i))) {
                result.push(r);
                seen.add(r);
            } else {
                dq.push([r, ing]);
            }
        }
    }
    return result;
};