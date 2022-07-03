/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    const hasEnoughChars = (word, wordToMatch, threshold) => {
        let count = 0;
        
        for (let i = 0; i < word.length; i++) {
            if (word[i] === wordToMatch[i]) count++;
        }
        
        return threshold === count;
    }
    
    while(true) {
        const i = Math.floor(Math.random() * wordlist.length);
        let guessed = wordlist.splice(i, 1)[0];
        const matched = master.guess(guessed);
        if (matched === 6) return true;
        wordlist = wordlist.filter(word => hasEnoughChars(word, guessed, matched));

    }
};


