
var DetectSquares = function() {
    this.points = {}; // r#c: freq
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [r, c] = point;
    this.points[r+'#'+c] ? this.points[r+'#'+c]++ : this.points[r+'#'+c] = 1;
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const [x1, y1] = point;
    let count = 0;
    for (const point in this.points) {
        let [x3, y3] = point.split('#');
        if (Math.abs(x3-x1) === 0 || Math.abs(x3 - x1) !== Math.abs(y3 - y1)) continue;
        count += this.points[point] *
            (this.points?.[x1 + '#' + y3] || 0) *
            (this.points?.[x3 + '#' + y1] || 0);
    }
    return count;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */