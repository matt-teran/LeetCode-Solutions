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
    // traverse tree
    // if any root node value === subroot value => compare the trees
    // else skip
    let res = false;
    const dfs = (node) => {
        if (!node) return node;
        
        if (node.val === subRoot.val) {
            if (compare(node, subRoot)) {
                res = true;
                return;
            }
        }
        
        dfs(node.left);
        dfs(node.right);
    }
    
    const compare = (a, b) => {
        if (a === null && b === null) {
            return true;
        } else if (a === null || b === null || a.val !== b.val) {
            return false;
        }
        
        return compare(a.left, b.left) && compare(a.right, b.right);
    }
    
    dfs(root);
    
    return res;
};