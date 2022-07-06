/**
 * @param {string[]} words
 * @return {string}
 */
var zipWords = (a, b) => {
    if (!a || !b) return null;
    [a,b] = [a.split(''), b.split('')];
    return a.map((el,i) => [el,b[i]])
}

var alienOrder = function(words) {
    const UNORDERED_CHARS = new Set(words.join(''))
    const adj = {};
    const indegree = {};
    
    for (const char of UNORDERED_CHARS) {
        adj[char] = [];
        indegree[char] = 0;
    }
    
    for (const [w1, w2] of _.zip(words.slice(0, words.length - 1), words.slice(1))) {
        // Check that word2 is not a prefix of word1
        if (w2 && w1.length > w2.length && w1.startsWith(w2)) return '';
        // if (!w2) continue;
        // Find the first nonmatch and insert the relation
        for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
            if (w1[j] !== w2[j]) {
                adj[w1[j]].push(w2[j]);
                indegree[w2[j]]++;
                break;
            }
        }
    }
    const result = [];
    const q = [];
    for (const key in indegree) if (!indegree[key]) q.push(key);
    while (q.length) {
        let c1 = q.shift();
        result.push(c1);
        
        for (const c2 of adj[c1]) {
            indegree[c2]--;
            if (!indegree[c2]) q.push(c2);
        }
    }
    return result.length === UNORDERED_CHARS.size ? result.join('') : '';
};