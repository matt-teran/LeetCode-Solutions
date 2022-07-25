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
    const getHeight = (node) => {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }
    
    const validate = (node) => {
        if (!node) return true;
        
        const [l, r] = [getHeight(node.left), getHeight(node.right)];
        
        if (Math.abs(l - r) > 1) return false;
        
        return validate(node.left) && validate(node.right);
    }
    
    return validate(root);
};