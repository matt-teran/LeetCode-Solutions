/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// inputs: sorted array of integers
// output: array of indexes
// constraints: array length > 1
// edge cases
var twoSum = function(numbers, target) {
    // set two pointers, beginning and end
    let i = 0;
    let j = numbers.length - 1;
    // if sum of both is greater than, decrement j pointer
    while (i < j) {
        if (numbers[i] + numbers[j] > target) {
            j--;
        } else if (numbers[i] + numbers[j] < target) {
            i++;
        } else {
            return [i + 1, j + 1];
        }
    }
    // if less, increment i pointer
    // else return indexes
};