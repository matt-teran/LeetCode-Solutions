/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
    if (tree.length === 1) return tree[0]
    let hash = {}
    for (let i = 0; i < tree.length; i++) hash[tree[i].val] = i;

    for (let node of tree) {
        
        if (node.children.length === 0) {
            delete hash[node.val];
        } else {
            for (let child of node.children) {
                delete hash[child.val];
            }
        }
    }
    // console.log(hash)
    for (let key in hash) return tree[hash[key]];
    // return false;
};