/**
 * Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
var sortedArrayToBST = function(nums) {
    
    const helper = (l, r) => {
        if (l > r) return null;
        let i = Math.floor((r+l)/2);
        let root = new TreeNode(nums[i]);
        root.left = helper(l, i - 1);
        root.right = helper(i + 1, r);
        return root;
    }
    
    return helper(0, nums.length - 1);
    
    
};