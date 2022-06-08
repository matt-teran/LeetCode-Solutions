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
    let res = root;
    
    // traverse the tree
    // search tree at node for p && q vals
    // if exist, continue search on left and right nodes
    // else => kill recursion
    
    const contains = (node, s) => {
        if (!node) return null;
        if (node.val === s.val) return true;
        
        return contains(node.left, s) || contains(node.right, s);
    };
    
    const dfs = (node) => {
        if (!node) return null;
        
        if (contains(node, p) && contains(node, q)) {
            res = node;
            dfs(node.left);
            dfs(node.right);
        };
    }
    
    dfs(root);
    
    return res;
};