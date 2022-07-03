/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let sum = w.reduce((acc, num) => acc + num); // n
    this.probs = w.map((weight, i) => ({prob: weight / sum, i})); // n
    // this.probs.sort((a,b) => a.prob - b.prob); // n log n
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let pick = Math.random();
    let prev = 0;
    for (const {prob, i} of this.probs) { // n
        if (pick < prob + prev) return i;
        prev += prob;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */