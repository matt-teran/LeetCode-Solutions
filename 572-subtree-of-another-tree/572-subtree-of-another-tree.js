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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSubtree = function(root, subRoot) {
    if (!subRoot) return true;
    let res = false;
    
    var isSameTree = (n1, n2) => {
        if (!n1 && !n2) return true;
        if (n1?.val !== n2?.val) return false;

        return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right);
    }
    
    const dfs = (node) => {
        if (!node) return false;
        if (node.val === subRoot.val && isSameTree(node, subRoot)) return res = true;
        
        dfs(node.left);
        dfs(node.right);
    };
    
    dfs(root);

    return res;
};