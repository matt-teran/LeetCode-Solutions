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
    let result = root.val;
    
    const dfs = (root) => {
        
        if (!root) return 0;
        // root = root.val;
        
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);
        
        result = Math.max(result, root.val + leftMax + rightMax);
        
        return Math.max(root.val + leftMax, root.val + rightMax);
    }
    
    dfs(root);
    
    return result;
};