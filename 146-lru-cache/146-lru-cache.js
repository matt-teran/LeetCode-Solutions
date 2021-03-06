var Node = function(key, val) {
    this.key = key;
    this.val = val;
    
    this.next = null;
    this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = new Map();
    this.l = new Node();
    this.r = new Node();
    [this.l.next, this.r.prev] = [this.r, this.l];
};

LRUCache.prototype.remove = function(node) {
    [node.prev.next, node.next.prev] = [node.next, node.prev];
    return node;
}

LRUCache.prototype.insert = function(node) {
    [node.prev, node.next] = [this.r.prev, this.r];
    [this.r.prev.next, this.r.prev] = [node, node];
    return node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    return this.insert(this.remove(this.cache.get(key))).val;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
    } else if (this.cache.size === this.cap) {
        this.cache.delete(this.remove(this.l.next).key);
    }
    
    this.cache.set(key, new Node(key, value));
    this.insert(this.cache.get(key));
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */