/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const hash = {};
    for (let i = 0; i < preorder.length; i++) {
        hash[inorder[i]] = i;
    }
    
    let i = 0;
    
    const arrayToTree = (l, r) => {
        if (l > r) return null;
        
        let rootVal = preorder[i++];
        let root = new TreeNode(rootVal);
        
        root.left = arrayToTree(l, hash[rootVal] - 1);
        root.right = arrayToTree(hash[rootVal] + 1, r);
        
        return root;
    }
    
    
    return arrayToTree(0, preorder.length- 1);
};