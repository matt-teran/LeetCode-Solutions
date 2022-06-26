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
    
    const maxGain = (node) => {
        if (!node) return 0;
        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);
        
        maxSum = Math.max(maxSum, node.val+leftGain+rightGain);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    maxGain(root);
    return maxSum;
};