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
var goodNodes = function(root) {
    if (!root) return 0;
    let result = 0;
    const dfs = (node, highest) => {
        if (!node) return;
        if (node.val >= highest) result++;
        
        dfs(node.left, Math.max(highest, node.val));
        dfs(node.right, Math.max(highest, node.val));
    }
    
    dfs(root, root.val);
    
    return result;
};