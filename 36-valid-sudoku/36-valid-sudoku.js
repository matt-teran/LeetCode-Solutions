/**
 * @param {character[][]} board
 * @return {boolean}
 */

// inputs: char[][]
// output: boolean
// constraints: input is a sudoku board | each char is 1-9 or .
// edge cases: empty board

var isValidSudoku = function(board) {
    // keep track of result
    // check each 3x3 box for dups
    let hash = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') continue;
            let r = Math.floor(i / 3);
            let c = Math.floor(j / 3);
            if (JSON.stringify([r, c]) in hash) {
                if (hash[JSON.stringify([r, c])].has(board[i][j])) {
                    return false;
                } else {
                    hash[JSON.stringify([r, c])].add(board[i][j]);
                }
            } else {
                hash[JSON.stringify([r, c])] = new Set(board[i][j])
            }
        }
    }
    console.log(hash);
    // check each row for dups
    for (let row of board) {
        let hashset = new Set();
        for (let char of row) {
            if (char === '.') continue;
            if (hashset.has(char)) {
                return false;
            } else {
                hashset.add(char);
            }
        }
    }
    // check each col for dups
    for (let i = 0; i < board.length; i++) {
        let hashset = new Set();
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] === '.') continue;
            if (hashset.has(board[j][i])) {
                return false;
            } else {
                hashset.add(board[j][i]);
            }
        }
    }
    return true;
};