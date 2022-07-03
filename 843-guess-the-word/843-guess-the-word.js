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
    const hasEnoughMatches = (word, guessed, threshold) => {
        let matches = 0;
        for (let i = 0; i < word.length; i++) if (word[i] === guessed[i]) matches++;
        return matches === threshold;
    };
    while (true) {
        const randomIndex = Math.floor(Math.random() * wordlist.length);
        const guessed = wordlist.splice(randomIndex, 1)[0];
        const matches = master.guess(guessed);
        if (matches === 6) return guessed;
        wordlist = wordlist.filter(word => hasEnoughMatches(word, guessed, matches));
    }
};