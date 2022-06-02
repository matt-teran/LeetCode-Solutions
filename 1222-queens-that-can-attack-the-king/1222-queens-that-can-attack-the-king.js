/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */

// inputs: array of cords, cords
// output: array of cords
// constraints: queens.length > 0, all cords must be valid, max cord is 7, one piece per cell
// edge case: 
var queensAttacktheKing = function(queens, king) {
    let result = [];
    queens = queens.map(queen => JSON.stringify(queen));
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            for (let k = 1; k < 9; k++) {
                let row = king[0] + i * k;
                let col = king[1] + j * k;
                if (queens.includes(JSON.stringify([row, col]))) {
                    result.push([row, col]);
                    break;
                }
            }
        }
    }
    return result;
};
// # class Solution(object):
// #     def queensAttacktheKing(self, queens, king):
// #         res = []
// #         queens = {(i, j) for i, j in queens}
// #         for i in [-1, 0, 1]:
// #             for j in [-1, 0, 1]:
// #                 for k in xrange(1, 8):
// #                     x, y = king[0] + i * k, king[1] + j * k
// #                     if (x, y) in queens:
// #                         res.append([x, y])
// #                         break
// #         return res