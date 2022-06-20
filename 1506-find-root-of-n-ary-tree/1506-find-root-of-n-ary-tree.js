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
    let sum = 0;
    for (let node of tree) {
        sum += node.val;
        for (let child of node.children) sum -= child.val
    }
    for (let node of tree) if (node.val === sum) return node;
};