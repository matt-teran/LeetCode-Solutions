/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let largest = [...candies].sort((a, b) => b - a)[0] - extraCandies;
    
    return candies.map(candy => candy < largest ? false : true);
    
};