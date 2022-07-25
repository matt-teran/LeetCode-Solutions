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
var isValidBST = function(root) {
    const dfs = (node, l, r) => {
        if (!node) return true;
        
        return node.val > l && node.val < r &&
            dfs(node.left, l, node.val) &&
            dfs(node.right, node.val, r);
    };
    
    return dfs(root, -Infinity, Infinity);
};