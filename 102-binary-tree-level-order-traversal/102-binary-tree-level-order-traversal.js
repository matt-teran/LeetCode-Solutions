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
    if (!root) return [];
    const res = [];
    let q = [root];
    let node = root;
    while (q.length) {
        let qLen = q.length;
        let level = [];
        for (let i = 0; i < qLen; i++) {
            let node = q.shift();
            if (node){
                level.push(node.val);
                q.push(node.left)
                q.push(node.right)
            }
        }
        level.length && res.push(level);
    }
    return res;
};