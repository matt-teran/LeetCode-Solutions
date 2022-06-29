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
var goodNodes = function(root) {
    let count = 0;
    const dfs = (node, max) => {
        if (!node) return node;
        // console.log(node, max)
        if (node.val >= max) count++;
        dfs(node.left,Math.max(node.val,max));
        dfs(node.right,Math.max(node.val,max));
    }
    dfs(root, root.val);
    return count;
};