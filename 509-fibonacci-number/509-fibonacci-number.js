/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const cache = {};
    const calculate = (n) => {
        if (n < 2) return n;
        if (n in cache) return cache[n];
        cache[n] = calculate(n-1) + calculate(n-2);
        return cache[n];
    }
    return calculate(n)
};