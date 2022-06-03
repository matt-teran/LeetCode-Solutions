/**
 * @param {number[]} height
 * @return {number}
 */
//inputs: integer array
// output: total rainwater integer
// constraints: height length > 0 | height[i] >= 0
// edge cases: na
var trap = function(height) {
    if (height.length ===0) return 0;
    // keep track of total rainwater
    let total = 0;
    // set two pointers, i - start | j - end
    let i = 0;
    let j = height.length - 1;
    let leftMax = height[i];
    let rightMax = height[j];
    // multiply lesser pointer by distance then
    while (i < j) {
        if (leftMax < rightMax) {
            i++;
            leftMax = Math.max(leftMax, height[i]);
            total += leftMax - height[i];
        } else {
            j--;
            rightMax = Math.max(rightMax, height[j]);
            total += rightMax - height[j];
        }
        
    }
    // subtract the spots taken up by land then
    // add it to total rainwater
    // increment the lesser pointer
    // return total rainwater
    return total;
};