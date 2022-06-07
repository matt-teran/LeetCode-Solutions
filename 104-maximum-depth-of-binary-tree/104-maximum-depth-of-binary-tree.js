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
    let stack = [[root, 1]];
    let result = 0;
    
    while (stack.length) {
        let [node, depth] = stack.pop();
        
        if (node) {
            result = Math.max(depth, result);
            
            stack.push([node.left, depth + 1])
            stack.push([node.right, depth + 1])
        }
    }
    return result;
};