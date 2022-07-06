/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const WORD_KEY = '$';

    
    const trie = {};
    for (const word of words) {
        let node = trie;
        for (const letter of word) {
            // Retrieve the next node; If not found, create an empty node
            if (!(letter in node)) {
                node[letter] = {};
            }
            node = node[letter];
        }
        // Mark the existence of a word in trie node
        node[WORD_KEY] = word;
    }
    console.log(trie);
    const ROWS = board.length;
    const COLS = board[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];

    const matchedWords = [];

    const backtrack = (row, col, parent) => {
        const letter = board[row][col];
        const currentNode = parent[letter];

        // Check if we find a match of word
        if (WORD_KEY in currentNode) {
            // We remove the matched word to avoid duplicates,
            //  as well as avoiding using a hashset for results.
            matchedWords.push(currentNode[WORD_KEY]);
            delete currentNode[WORD_KEY];
        }

        // Before the exploration, mark the cell as visited
        board[row][col] = '#';

        // Explore the neighbors in 4 directions, i.e. up, right, down, left
        for (const [dr,dc] of DIR) {
            let [r, c] = [row + dr, col + dc];
            if (board?.[r]?.[c] === undefined || !(board[r][c] in currentNode)) continue;
            backtrack(r, c, currentNode);
        }

        // End of exploration, we restore the cell
        board[row][col] = letter;

        // Optimization: incrementally remove the matched leaf node in Trie
        if (!currentNode) delete parent[letter]
    }
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // Starting from each of the cells
            if (board[r][c] in trie) {
                backtrack(r, c, trie);
            }
        }
    }
    return matchedWords;
};