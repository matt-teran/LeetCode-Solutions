
var DetectSquares = function() {
    this.points = {};
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function([x,y]) {
    this.points[x+'#'+y] ? this.points[x+'#'+y]++ : this.points[x+'#'+y] = 1;
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function([x1,y1]) {
    let count = 0;
    for (const point in this.points) {
        const [x3,y3] = point.split('#');
        
        if (Math.abs(x3-x1) === 0 || Math.abs(x3-x1) !== Math.abs(y3-y1)) continue;
        
        count += this.points[point] * (this.points[x3+'#'+y1] || 0) * (this.points[x1+'#'+y3] || 0);
    }
    
    return count;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */