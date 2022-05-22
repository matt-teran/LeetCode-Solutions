/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    const map = {
        "X++": () => result++,
        "++X": () => result++,
        "--X": () => result--,
        "X--": () => result--
    }
    operations.forEach(operation => {
        map[operation]();
    })
    return result;
};