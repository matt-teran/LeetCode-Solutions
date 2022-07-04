/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let current = [];
    let numberOfLetters = 0;

    for (const word of words) {
        if (numberOfLetters + word.length + current.length > maxWidth) {
            for (let i = 0; i < maxWidth - numberOfLetters; i++) {
                let j = i % (current.length - 1 || 1);
			    current[j] = current[j] + ' ';
            }
            result.push(current.join(''));
            current = [];
            numberOfLetters = 0;
        }
        current.push(word);
        numberOfLetters += word.length;
    }
    let leftJust = maxWidth - numberOfLetters - (current.length === 1 ? 0 : current.length);
    leftJust > 0 && current.push(' '.repeat(leftJust));
    current.length === 2 ? result.push(current.join('')) : result.push(current.join(' '));
    return result;
};