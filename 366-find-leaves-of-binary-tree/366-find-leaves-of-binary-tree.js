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
var findLeaves = function(root) {
    const getHeight = (node) => {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }
    const N = getHeight(root);
    
    const result = Array(N);
    for (let i = 0; i < N; i++) result[i] = [];
    console.log(result);
    const dfs = (node) => {
        if (!node) return -1;
        let resultIndex =  1 + Math.max(dfs(node.left), dfs(node.right));
        result[resultIndex].push(node.val);
        return resultIndex;
    }
    dfs(root);
    return result;
};