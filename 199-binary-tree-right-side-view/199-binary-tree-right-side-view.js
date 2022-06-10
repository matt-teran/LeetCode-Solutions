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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    
    while (queue.length) {
        let qLen = queue.length;
        let level = [];
        
        for (let i = 0; i < qLen; i++) {
            let node = queue.shift();
            
            if (node) {
                level.push(node.val);
                queue.push(node.left, node.right);
            }
        }
        if (level.length > 0) result.push(level.at(-1));
    }
    
    return result;
};