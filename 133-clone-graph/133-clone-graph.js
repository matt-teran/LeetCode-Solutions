/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const map = new Map();
    
    const dfs = (node) => {
        if (!node) return node;
        if (map.has(node)) return map.get(node);
        
        const copy = new Node(node.val);
        
        map.set(node, copy);
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        
        return copy;
    }
    
    return dfs(node);
};