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
    
    let nums = [];
    let queue = [root]
    while (queue.length) {
        let qLen = queue.length;
        for (let i = 0; i < qLen; i++) {
            let node = queue.shift();
            if (node) {
                queue.push(node.left, node.right);
                nums.push(node.val);
            }
        }
    }
    nums.sort((a, b) => a - b);
    return nums[k - 1];
};