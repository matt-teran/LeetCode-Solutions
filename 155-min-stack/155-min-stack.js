
var MinStack = function() {
    this.stack = [];
    this.min;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min === undefined) {
        this.min = val;
        this.stack.push({val, prevMin: this.min});
    } else if (this.min > val) {
        this.stack.push({val, prevMin: this.min});
        this.min = val;
    } else {
        this.stack.push({val, prevMin: this.min})
    }
    return val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 1) {
        this.min = this.stack[this.stack.length - 1].prevMin;
    } else {
        this.min = undefined;
    }
    
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */