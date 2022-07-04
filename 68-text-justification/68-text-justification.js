/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    // Construct the result one line at a time
    // Keep track of result array and current line array
    // Keep track of number of letters
    const result = [];
    let current = [];
    let numberOfLetters = 0;

    // Iterate words
    for (const word of words) {
        
        // If we add a word, check if the length would be greater than maxWidth
        const potentialSumOfCharacters = numberOfLetters + word.length + current.length;
        if (potentialSumOfCharacters > maxWidth) {
            // If it is, calculate the number of spaces we need to add, and add them after every word except the last
            const spacesToAdd = maxWidth - numberOfLetters;
            for (let i = 0; i < spacesToAdd; i++) {
                let j = i % (current.length - 1 || 1);
			    current[j] = current[j] + ' ';
            }
            // After the spaces were added, join the current line and push it result
            result.push(current.join(''));
            
            // Reset current and number of letters
            current = [];
            numberOfLetters = 0;
        }
        
        // it isn't, just add the word and increase the number of letters by word length
        current.push(word);
        numberOfLetters += word.length;
    }
    result.push(current.join(' '));
    result[result.length - 1] = result.at(-1).padEnd(maxWidth);
    // let leftJust = maxWidth - numberOfLetters - (current.length === 1 ? 0 : current.length);
    // leftJust > 0 && current.push(' '.repeat(leftJust));
    // current.length === 2 ? result.push(current.join('')) : result.push(current.join(' '));
    return result;
};