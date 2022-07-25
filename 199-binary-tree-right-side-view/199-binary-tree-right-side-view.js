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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const q = [root];
    const result = [];
    while (q.length) {
        result.push(q.at(-1).val);
        for (let i = q.length; i > 0; i--) {
            let node = q.shift();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    
    return result;
};