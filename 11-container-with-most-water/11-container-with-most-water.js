/**
 * @param {number[]} height
 * @return {number}
 */
// inputs: array of integers
// output: total area integer
// constraints: array length > 2 | array[n] >= 0 
// edge cases: na
var maxArea = function(height) {
    // keep track of largest area
    let largestArea = 0;
    // set two pointers, i at the begining, j at the end
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let currentArea = Math.min(height[i], height[j]) * (j - i);
        if (currentArea > largestArea) largestArea = currentArea;
        height[i] > height[j] ? j-- : i++;
    }
    // multiply the lesser pointer by the distance between the two and compare to the largest area
    // return largest
    return largestArea;
};

//Input: height = [1,8,6,2,5,4,8,3,7]
