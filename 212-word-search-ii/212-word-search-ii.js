/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const WORD_KEY = '$';

    //////////////////////////////////// IMPLEMENT TRIE
    const trie = new Map();
    for (const word of words) {
        let node = trie;
        for (const letter of word) {
            if (!(node.has(letter))) {
                node.set(letter, new Map());
            }
            node = node.get(letter);
        }
        node.set(WORD_KEY, word)
    }
    
    
    const result = [];

    const backtrack = (row, col, parent) => {
        const letter = board[row][col];
        const currentNode = parent.get(letter); // trie.d

        if (currentNode.has(WORD_KEY)) {
            result.push(currentNode.get(WORD_KEY));
            currentNode.delete(WORD_KEY);
        }

        board[row][col] = '#';

        for (const [dr,dc] of DIR) {
            const [r, c] = [row + dr, col + dc];
            if (!board?.[r]?.[c] || !currentNode.has(board[r][c])) continue;
            backtrack(r, c, currentNode);
        }

        board[row][col] = letter;

        // Optimization: incrementally remove the matched leaf node in Trie
        if (!currentNode.size) parent.delete(letter)
    }
    
    ////////////////////////////////////////// APPLY BACKTRACKING
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // Starting from each of the cells
            if (trie.has(board[r][c])) {
                backtrack(r, c, trie);
            }
        }
    }
    return result;
};