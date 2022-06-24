/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root;
    let res = root;
    
    // while (true) {
        if (p.val > res.val && q.val > res.val) {
            // res = res.right;
            return lowestCommonAncestor(root.right, p, q);
        } else if (p.val < res.val && q.val < res.val) {
            // res = res.left;
            return lowestCommonAncestor(root.left, p, q)
        } else {
            return root;
            // return res;
        }
    // }
    // return res;
};