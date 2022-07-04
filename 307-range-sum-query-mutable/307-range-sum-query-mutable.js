/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    let l = Math.sqrt(nums.length);
    this.length = Math.ceil(nums.length / l);
    
    this.blocks = Array(this.length).fill(0);
    for (let i = 0; i < nums.length; i++) this.blocks[Math.floor(i / this.length)] += nums[i];
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    let blockIndex = Math.floor(index / this.length);
    this.blocks[blockIndex] = this.blocks[blockIndex] - this.nums[index] + val;
    this.nums[index] = val;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
    let startBlock = Math.floor(left / this.length);
    let endBlock = Math.floor(right / this.length);

    if (startBlock === endBlock) {
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
    } else {
        for (let i = left; i < (startBlock + 1) * this.length; i++) sum += this.nums[i];
        for (let i = startBlock + 1; i < endBlock; i++) sum += this.blocks[i];
        for (let i = endBlock * this.length; i <= right; i++) sum += this.nums[i];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */