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
    let n = getHeight(root);
    // travel down the tree
    // when you reach the end, return [height, val]
    let map = {};
    
    const result = [];
    for (let i = 0; i < n; i++) result.push([]);
    
    const dfs = (node) => {
        if (!node) return -1;
        
        let ans = 1 + Math.max(dfs(node.right),dfs(node.left));
        result[ans].push(node.val);
        return ans;
    }
    dfs(root);
    // result.sort((a,b) => a[0] - b[0]);
    // for (let node of result) {
        // map[node[0]] ? map[node[0]].push(node[1]) : map[node[0]] = [node[1]];
    // }
    return result;
};