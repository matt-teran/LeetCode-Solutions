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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    const q = [root];
    while (q.length) {
        const cur = [];
        for (let i = q.length; i > 0; i--) {
            let node = q.shift();
            
            if (!node) continue;
            
            cur.push(node.val);
            q.push(node.left, node.right);
        }
        
        if (cur.length) result.push(cur);
    }
    return result;
};