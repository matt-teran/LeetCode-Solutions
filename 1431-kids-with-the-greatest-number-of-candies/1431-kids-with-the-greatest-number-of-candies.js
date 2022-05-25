/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let largest = candies[0] - extraCandies;
    
    for (let i = 1; i < candies.length; i++) {
        if (largest < candies[i] - extraCandies) {
            largest = candies[i] - extraCandies;
        }
    }
    
    
    return candies.map(candy => candy < largest ? false : true);
    
};