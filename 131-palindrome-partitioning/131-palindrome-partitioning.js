/**
 * @param {string} s
 * @return {string[][]}
 */
String.prototype.isPalindrome = function(l, r){
    while (l < r) {
        if (this[l] !== this[r]) return false;
        l++;
        r--;
    }
    
    return true;
}

var partition = function(s) {
    let result = [];
    let part = [];

    const dfs = (i) => {
        if (i === s.length) return result.push([...part]);

        for (let j = i; j < s.length; j++) {
            if (s.isPalindrome(i, j)) {
                part.push(s.slice(i, j + 1));
                dfs(j + 1);
                part.pop();
            }
        }
    }
    dfs(0);
    return result;
};