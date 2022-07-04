/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let sum = w.reduce((acc, num) => acc + num);
    this.prob = w.map((weight, i) => [weight/sum, i]);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const pick = Math.random();
    let prev = 0;
    for (const [prob, i] of this.prob) {
        prev += prob;
        if (pick < prev) return i;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */