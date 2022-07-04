/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.n = nums.length;
    this.tree = Array(this.n * 2);
    this.buildTree();
};

NumArray.prototype.buildTree = function() {
	for (let i = this.nums.length, j = 0; i < 2 * this.n; i++, j++) this.tree[i] = this.nums[j];
	for (let i = this.n - 1; i > 0; i--) this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    index += this.n;
    this.tree[index] = val;
    while (index > 0) {
        let left = index;
        let right = index;
        if (index % 2) {
            left = index - 1;
        } else {
            right = index + 1;
        }
        
        this.tree[Math.floor(index / 2)] = this.tree[left] + this.tree[right];
        index = Math.floor(index / 2);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    left += this.n;
    right += this.n;
    let sum = 0;
    while (left <= right) {
        if (left % 2 === 1) {
            sum += this.tree[left];
            left++;
        }
        
        if (right % 2 === 0) {
            sum += this.tree[right];
            right--;
        }
        
        left = Math.floor(left / 2);
        right = Math.floor(right / 2);
    }
    
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */