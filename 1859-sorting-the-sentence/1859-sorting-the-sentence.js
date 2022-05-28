/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // • split words into array
    return s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]).map(word => word.substring(0, word.length - 1)).join(' ');
    // • sort words by the index
    // • join words with a space separating
    // • return
};