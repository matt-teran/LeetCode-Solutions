/**
 * @param {string} s
 * @return {boolean}
 */

// inputs: string
// output: bool whether or not it's a palindrome
// constraints: string length > 0
// edge case: string length of 1
var isPalindrome = function(s) {
    // remove all non-alphanumeric chars from string
    s = s.replace(/[^0-9a-z]/gi, '');
    // turn string to lowercase
    s = s.toLowerCase();
    // set two pointers, one at the begninng and one at end
    let i = 0;
    let j = s.length - 1;
    // if the two values are equal, increment pointer i and decrement pointer j
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    // continue until i is greater than or equal to j
    // return true
    return true;
};
