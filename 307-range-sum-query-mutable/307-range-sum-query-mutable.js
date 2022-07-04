/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.tree = Array(nums.length * 2);
    this.nums = nums;
    this.n = nums.length;
    this.buildSegTree(0, 0, this.n - 1)
};

NumArray.prototype.buildSegTree = function(i, lo, hi) {
    // Leaf node
    if (lo === hi) {
        this.tree[i] = this.nums[lo];
        return;
    }
    
    let m = lo + Math.floor((hi - lo) / 2);
    this.buildSegTree(2 * i + 1, lo, m);
    this.buildSegTree(2 * i + 2, m + 1, hi);
    this.tree[i] = this.tree[2 * i + 1] + this.tree[2 * i + 2];
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val, i=0, lo=0, hi=this.n-1) {
    if (lo === hi) return this.tree[i] = val;

    let mid = lo + Math.floor((hi - lo) / 2);
    if (index > mid) {
        this.update(index, val, 2 * i + 2, mid + 1, hi);
    } else {
        this.update(index, val, 2 * i + 1, lo, mid);
    }

    this.tree[i] = this.tree[2 * i + 1] + this.tree[2 * i + 2];
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const querySegTree = (treeIndex, lo, hi, i, j) => {
        
        // Return 0 (null) if segment is completely out of range
        if (lo > j || hi < i)  return 0;

        // Range matches segment exactly => 
        if (i === lo && j === hi) return this.tree[treeIndex];
        
        
        let mid = lo + Math.floor((hi - lo) / 2);

        // Partial overlap of segment and range, so we query deeper
        if (i > mid) return querySegTree(2 * treeIndex + 2, mid + 1, hi, i, j);
        if (j <= mid) return querySegTree(2 * treeIndex + 1, lo, mid, i, j);

        let leftQuery = querySegTree(2 * treeIndex + 1, lo, mid, i, mid);
        let rightQuery = querySegTree(2 * treeIndex + 2, mid + 1, hi, mid + 1, j);

        return leftQuery + rightQuery;
    }
    
    return querySegTree(0, 0, this.n - 1, left, right);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */