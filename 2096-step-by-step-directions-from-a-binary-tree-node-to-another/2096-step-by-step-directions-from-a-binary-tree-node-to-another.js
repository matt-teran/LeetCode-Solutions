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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const memo = {};
    const shortDfs = (node) => {
        if (!node) return -Infinity;
        if (node.val === startValue) return 0;
        return 1 + Math.max(shortDfs(node.left), shortDfs(node.right));
    }
    
    const destDfs = (node) => {
        if (!node) return 'F';
        if (node.val === destValue) return '';
        
        let right = 'R'.concat(destDfs(node.right));
        return right.at(-1) !== 'F' ? right : 'L'.concat(destDfs(node.left));
    }
    const dfs = (node, target) => {
        if (!node) return false;
        if (node.val === target) return true;
        
        return dfs(node.left, target) || dfs(node.right, target);
    }
    
    let smallestAncestor = root;
    const q = [root];
    while (q.length) {
        let qLen = q.length;
        let con = false;
        for (let i = 0; i < qLen; i++) {
            let node = q.shift();
            if (node) {
                q.push(node.left, node.right);
                if (dfs(node, startValue) && dfs(node, destValue)) {
                    smallestAncestor = node;
                    con = true;
                }
            }
        }
        if (!con) {
            return 'U'.repeat(shortDfs(smallestAncestor)).concat(destDfs(smallestAncestor));
        };
    }
};