/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.n = nums.length;
    // Store the tree in an array of size N * 2
    this.tree = Array(this.n * 2);
    // Build the tree
    this.buildTree(nums);
};

NumArray.prototype.buildTree = function(nums) {
    // Populate the tree array with the leaf nodes (aka start from the bottom)
	for (let i = this.n; i < 2 * this.n; i++) this.tree[i] = nums[i - this.n];
    
    // Populate the parent nodes from the lead nodes up
	for (let i = this.n - 1; i > 0; i--) this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    // convert the index of the nums array, to the index of the leaf node in the tree
    index += this.n;
    
    // update the value of the leaf node
    this.tree[index] = val;
    
    // now to update the parent nodes
    while (index > 0) {
        let left = index; // - index % 2;
        let right = index; // + (1 - index % 2);
        
        index % 2 ? left-- : right++;
        // if (index % 2 === 1) { 
        //     left = index - 1; 
        // } else {
        //     right = index + 1;
        // }
        
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