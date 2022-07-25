/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    const find = (node) => {
        if (!node) return 0;
        
        let l = Math.max(find(node.left), 0);
        let r = Math.max(find(node.right), 0);
        maxSum = Math.max(maxSum, node.val + l + r);
        
        return node.val + Math.max(l, r);
    }
    find(root);
    return maxSum;
};