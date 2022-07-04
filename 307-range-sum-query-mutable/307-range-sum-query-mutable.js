/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.tree = [];
    this.n = nums.length;
    const buildSegTree = (arr, treeIndex, lo, hi) => {
        if (lo === hi) {
            this.tree[treeIndex] = arr[lo];
            return;
        }

        let mid = lo + Math.floor((hi - lo) / 2);
        buildSegTree(arr, 2 * treeIndex + 1, lo, mid);
        buildSegTree(arr, 2 * treeIndex + 2, mid + 1, hi);

        this.tree[treeIndex] = this.tree[2 * treeIndex + 1] + this.tree[2 * treeIndex + 2];
    };
    buildSegTree(nums, 0, 0, nums.length - 1);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    const updateValSegTree = (treeIndex, lo, hi, arrIndex, val) => {
        // If leaf node, update element
        if (lo === hi) {
            this.tree[treeIndex] = val;
            return;
        }
        
        // Recurse deeper for appropriate child
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arrIndex > mid) {
            updateValSegTree(2 * treeIndex + 2, mid + 1, hi, arrIndex, val);
        } else if (arrIndex <= mid) {
            updateValSegTree(2 * treeIndex + 1, lo, mid, arrIndex, val);
        }

        // Update non-leaf node
        this.tree[treeIndex] = this.tree[2 * treeIndex + 1] + this.tree[2 * treeIndex + 2];
    }
    updateValSegTree(0, 0, this.n - 1, index, val);
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