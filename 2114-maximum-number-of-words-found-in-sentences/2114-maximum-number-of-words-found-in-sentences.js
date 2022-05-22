/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result = 0;
    sentences.forEach(sentence => {
        if (sentence.split(' ').length > result) result = sentence.split(' ').length
    })
    return result
};