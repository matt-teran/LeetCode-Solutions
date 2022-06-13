// WordDictionary Node
var Node = function() {
    this.children = {};
    this.endOfWord = false;
}
var WordDictionary = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for (let char of word) {
        node = node.children[char] = node.children[char] || new Node();
    }
    node.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, start=0, node=this.root) {
    if (start === word.length) return node.endOfWord;
    for (let i = start; i < word.length; i++) {
        if (word[i] === '.') {
            for (let key in node.children) {
                if (this.search(word, i + 1, node.children[key])) return true;
            }
            return false;
        } else {
            if (!(word[i] in node.children)) return false;
            node = node.children[word[i]];
        }
    }
    return node.endOfWord;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */