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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    
    // let node = root;
    const swap = (node) => {
        if (node === null) return;
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        swap(node.left);
        swap(node.right);
    }
    swap(root);
    
    return root;
};