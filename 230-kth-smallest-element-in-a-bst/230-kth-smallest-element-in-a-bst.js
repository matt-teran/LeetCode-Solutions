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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let n = 0;
    let node = root;
    let stack = [];
    
    while (true) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        let popped = stack.pop();
        n++;
        if (n === k) return popped.val;
        
        node = popped.right;
    }
};