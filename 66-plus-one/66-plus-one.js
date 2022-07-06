/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // keep track if carrying a one
  // reverse loop
    for (let i = digits.length - 1; i > -1; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            return digits;
        }
    }
    console.log(0)
    digits.push(0);
    digits[0] = 1;
    return digits;
  // add one to iteration, if equal to 10 => set carry to true, set 10 to 0
  // else set carry to false, set iteration to + 1
};