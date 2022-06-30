
var StockPrice = function() {
    this.feed = {};
    this.latestTime = -Infinity;
    this.min = new MinPriorityQueue({compare: (a,b) => a[0] > b[0]});
    this.max = new MaxPriorityQueue({compare: (a,b) => a[0] < b[0]});
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    // timestamp is greater than latest time
    if (timestamp > this.latestTime) {
        // update the latest time with our new latest time
        this.latestTime = timestamp;
        
        // set up price in the feed hash
        this.feed[this.latestTime] = price;
        
        // add this new price to both heaps
        this.min.enqueue([price, timestamp]);
        this.max.enqueue([price, timestamp]);
        // timestamp needs updating
    } else {
        // update the price in our feed hash
        this.feed[timestamp] = price;
        // add the new price to both heaps
        this.min.enqueue([price,timestamp]);
        this.max.enqueue([price,timestamp]);
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.feed[this.latestTime];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    // while the front of the queue is not 
    while (this.feed[this.max.front()[1]] !== this.max.front()[0]) {
        this.max.dequeue();
    }
    return this.max.front()[0];
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    while (this.feed[this.min.front()[1]] !== this.min.front()[0]) {
        this.min.dequeue();
    }
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