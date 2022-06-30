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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    let xNode;
    const dfs = (node) => {
        if (!node) return 0;
        if (node.val === x) {
            xNode = node;
            return 0;
        }
        
        return 1 + dfs(node.left) + dfs(node.right);
    }
    const above = dfs(root);
    const left = dfs(xNode.left);
    const right = dfs(xNode.right);
    
    return (above > left + right || left > right + above || right > left + above);
};