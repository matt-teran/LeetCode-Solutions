/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    if (start.replaceAll(/X/g, '') !== end.replaceAll(/X/g, '')) return false;
    
    let [lstart, lend, rstart, rend] = [[],[],[],[]];
    
    for (let i = 0; i < start.length; i++) {
        if (start[i] === 'L') lstart.push(i);
        if (end[i] === 'L') lend.push(i);
        if (start[i] === 'R') rstart.push(i);
        if (end[i] === 'R') rend.push(i);
    }
    
    const zip = (arr1,arr2) => arr1.map((el, i) => [el, arr2[i]]);
    for (const [i, j] of zip(lstart, lend)) if (i < j) return false;
    for (const [i, j] of zip(rstart, rend)) if (i > j) return false;
    
    return true;
};