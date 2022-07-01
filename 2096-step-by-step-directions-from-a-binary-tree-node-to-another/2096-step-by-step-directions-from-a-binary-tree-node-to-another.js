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
    let LCA = root;
    const dfs = (node, target) => {
        if (!node) return false;
        if (node.val === target) return true;
        
        return dfs(node.left, target) || dfs(node.right, target);
    }
    const findLCA = (node) => {
        if (!node) return;
        let start = dfs(node, startValue);
        let dest = dfs(node, destValue);
        if (start && dest) LCA = node;
        
        findLCA(node.left);
        findLCA(node.right);
    }
    
    const findStart = (node, dir) => {
        if (!node) return false;
        if (node.val === startValue) return dir;
        
        return findStart(node.left, dir+'L') || findStart(node.right, dir+'R');
    }
    const findDest = (node, dir) => {
        if (!node) return false;
        if (node.val === destValue) return dir;
        
        return findDest(node.left, dir+'L') || findDest(node.right, dir+'R');
    }
    
    // findLCA(root);
    let startDirections = findStart(root, '');
    let endDirections = findDest(root, '');

    while (startDirections[0] === endDirections[0]) {
        startDirections = startDirections.substring(1);
        endDirections = endDirections.substring(1);
    }

    return 'U'.repeat(startDirections.length) + endDirections;
};