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
    let heap = new MinPriorityQueue();
    
    const q = [root];
    while (q.length) {
        for (let i = q.length; i > 0; i--) {
            let node = q.shift();
            
            if (!node) continue;
            heap.enqueue(node.val);
            q.push(node.left, node.right);
        }
    }
    
    while (k > 1) {
        heap.dequeue();
        k--;
    }

    return heap.front().element;
};