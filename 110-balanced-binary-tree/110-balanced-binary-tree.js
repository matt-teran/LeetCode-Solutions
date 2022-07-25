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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const helper = (node) => {
        if (!node) return [true, -1];
        
        const l = helper(node.left);
        if (!l[0]) return [false, 0];
        
        const r = helper(node.right);
        if (!r[0]) return [false, 0];
        
        return [Math.abs(r[1] - l[1]) < 2, 1 + Math.max(l[1], r[1])];
    }
    
    return helper(root)[0];
};