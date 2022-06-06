/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if (temperatures.length === 1) return [0];
    let result = new Array(temperatures.length).fill(0);
    // let result = [];
    // let map = {};
    // map[temperatures[0]] = 0;
    let stack = [[temperatures[0], 0]];
    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
            result[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
            stack.pop();
        }
        stack.push([temperatures[i], i]);
    }
    
    return result
};