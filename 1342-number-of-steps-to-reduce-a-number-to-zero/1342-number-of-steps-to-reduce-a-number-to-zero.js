/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0;
    for (; num; count++) num % 2 ? num-- : num = num / 2;
    return count;
};