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
    
    // let max = root.val;
    
    const dfs = (node, max) => {
        if (node.val >= max) {
            max = node.val;
            result++;
        }
        
        if (node.left) dfs(node.left, max);
        if (node.right) dfs(node.right, max)
    }
    dfs(root, root.val);
    
    return result;
};