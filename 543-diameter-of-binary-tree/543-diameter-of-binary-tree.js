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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    const dfs = (node) => {
        if (!node) return 0;
        
        const [l, r] = [dfs(node.left), dfs(node.right)];
        
        diameter = Math.max(diameter, l + r);
        
        return 1 + Math.max(l, r);
    };
    
    dfs(root);
    
    return diameter;    
};