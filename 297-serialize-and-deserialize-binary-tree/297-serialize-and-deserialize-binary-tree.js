/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = [];
    
    const dfs = (root) => {
        if (!root) {
            result.push(null);
            return;
        };
        
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);

    return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let preorder = JSON.parse(data);
    let i = 0;
    
    const dfs = () => {
        
        if (preorder[i] === null) {
            i++;
            return null;
        };
        let node = new TreeNode(preorder[i]);
        i++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */