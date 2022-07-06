/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    while (n !== 1) {
        let sum = 0;
        for (const num of n.toString()) {
            sum += Number(num) ** 2;
        }
        if (seen.has(sum)) return false;
        seen.add(sum);
        n = sum;
    }
    return true;
};

2
4
16
37
58
89
145
42
18
65
61
67