/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let results = [];
// look at a query
    for (let i = 0; i < queries.length; i++){
        let result = 0;
// for each query, check if the points are within a distance of query radius
        for (let j = 0; j < points.length; j++) {
            // if any points are, increment result
            if ((points[j][0] - queries[i][0]) * (points[j][0] - queries[i][0]) + (points[j][1] - queries[i][1]) * (points[j][1] - queries[i][1]) <= queries[i][2] * queries[i][2]) {
                result++;
            }
        }
        results.push(result);
// return result        
    }
    return results;

};