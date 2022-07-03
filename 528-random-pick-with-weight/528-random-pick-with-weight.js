/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = w.reduce((acc, num) => acc + num);
    this.probs = w.map((weight, i) => {
        return {prob: weight / this.sum, i};
    }).sort((a,b) => a.prob - b.prob)
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let pick = Math.random();
    let prev = 0;
    for (const {prob, i} of this.probs) {
        if (pick < prob + prev) return i;
        prev += prob;
    }
    return this.probs.at(-1).i;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */