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
        const qLen = q.length;
        let cur = [];
        for (let i = 0; i < qLen; i++) {
            let node = q.shift();
            
            if (node) {
                cur.push(node.val);
                q.push(node.left, node.right);
            }
            
        }
        if (cur.length) result.push(cur);
    }
    return result;
};