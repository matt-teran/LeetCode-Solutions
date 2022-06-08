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
var dfs = (root) => {
    if (!root) return 0;
    return 1 + Math.max(dfs(root.left), dfs(root.right));
}
var diameterOfBinaryTree = function(root) {
    let result = 0;
    var dfs = (root) => {
        if (!root) return -1;
        let left = dfs(root.left) // 1
        let right = dfs(root.right); // 1
        result = Math.max(result, left + right + 2); // 4
        
        return 1 + Math.max(left, right); // 2
    }
    
    dfs(root);
    
    return result;
};