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
    // if input is null, return empty array
    if (!root) return [];
    
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let level = [];
        const qLen = queue.length;
        
        for (let i = 0; i < qLen; i++) {
            let node = queue.shift();
            
            if (node) {
                level.push(node.val);
                queue.push(node.left, node.right);
            }
        }
        
        if (level.length > 0) result.push(level);
    }
    
    return result;
    // look at the root node, push its children into a queue
    // look at the nodes in the queue, remove them while pushing their children into the queue
    // each time we repopulate the queue, we'll push the set of removed nodes to the result
    // then when the queue is empty, we'll return the result
};