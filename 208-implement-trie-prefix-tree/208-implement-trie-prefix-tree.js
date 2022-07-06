var TrieNode = function() {
    this.children = {};
    this.endOfWord = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (const char of word) {
        if (char in node.children) {
            node = node.children[char];
        } else {
            node = node.children[char] = new TrieNode();
        }
    }
    node.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (const char of word) {
        if (char in node.children) {
            node = node.children[char];
        } else {
            return false;
        }
    }
    return node.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const char of prefix) {
        if (char in node.children) {
            node = node.children[char];
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */