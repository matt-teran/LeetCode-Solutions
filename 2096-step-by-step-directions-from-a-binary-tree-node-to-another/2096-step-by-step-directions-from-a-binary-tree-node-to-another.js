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
    const getDir = (node, target, dir) => {
        if (!node) return false;
        if (node.val === target) return dir;
        
        return getDir(node.left, target, dir+'L') || getDir(node.right, target, dir+'R');
    }
    let startDir = getDir(root, startValue, '');
    let destDir = getDir(root, destValue, '');
    while (startDir[0] === destDir[0]) {
        startDir = startDir.slice(1);
        destDir = destDir.slice(1);
    }
    
    return 'U'.repeat(startDir.length) + destDir;
};