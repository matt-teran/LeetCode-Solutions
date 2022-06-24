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
var countNodes = function(root) {
    if (!root) return 0;
    let count = 0;
    
    let q = [root];
    while (q.length) {
        let qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            let node = q.shift();
            if (node) {
                count++;
                q.push(node.left, node.right);
            }
        }
    }
    
    return count;
};