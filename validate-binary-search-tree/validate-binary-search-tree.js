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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const validate = (node, l, r) => {
        if (!node) return true;
        if (node.val <= l || node.val >= r) return false;
        // console.log(node);
        return validate(node.left, l, node.val) && validate(node.right, node.val, r);
    }
    return validate(root, -Infinity, Infinity);
};