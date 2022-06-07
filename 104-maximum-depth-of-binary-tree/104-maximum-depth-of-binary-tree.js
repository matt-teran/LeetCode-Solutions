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
var maxDepth = function(root) {
    if (!root) return root;
    
    let depth = 0;
    
    const drill = (node, count) => {
        count++;
        if (node.left) drill(node.left, count);
        if (node.right) drill(node.right, count);
        
        if (count > depth) depth = count;
    }
    
    drill(root, depth);
    
    return depth;
};