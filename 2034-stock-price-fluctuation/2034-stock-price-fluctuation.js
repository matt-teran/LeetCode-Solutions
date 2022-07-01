
var StockPrice = function() {
    // intialize w/ feed hashmap, latest integer, and min and max heaps
    this.feed = {};
    this.latest = -Infinity;
    this.min = new MinPriorityQueue({compare: (a,b) => a[0] > b[0]});
    this.max = new MaxPriorityQueue({compare: (a,b) => a[0] < b[0]})
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    // If timestamp is latest
    // Update latest variable
    // if (timestamp > this.latest) this.latest = timestamp; 
    
    this.latest = Math.max(this.latest, timestamp);
    this.feed[timestamp] = price;
    this.min.enqueue([price,timestamp]);
    this.max.enqueue([price,timestamp]);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.feed[this.latest];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    while (this.feed[this.max.front()[1]] !== this.max.front()[0]) this.max.dequeue();
    return this.max.front()[0];
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    while (this.feed[this.min.front()[1]] !== this.min.front()[0]) this.min.dequeue();
    return this.min.front()[0];
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */