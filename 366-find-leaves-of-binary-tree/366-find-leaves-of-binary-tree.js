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
    // travel down the tree
    // when you reach the end, return [height, val]
    const result = [];
    let map = {};
    const dfs = (node) => {
        if (!node) return -1;
        
        let ans = 1 + Math.max(dfs(node.right),dfs(node.left));
        result.push([ans, node.val]);
        return ans;
    }
    dfs(root);
    result.sort((a,b) => a[0] - b[0]);
    for (let node of result) {
        map[node[0]] ? map[node[0]].push(node[1]) : map[node[0]] = [node[1]];
    }
    return Object.values(map);
};