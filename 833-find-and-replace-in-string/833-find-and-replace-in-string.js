/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    const k = indices.length;
    const zipped = indices.map((index, i) => [index, sources[i], targets[i]]);
    const constructed = s.split('');
    for (const [index, source, target] of zipped) {
        if (!s.startsWith(source, index)) continue;
        
        constructed[index] = target;
        
        constructed.splice(index+1, source.length - 1, ...Array(source.length - 1).fill(''));
    }
    
    return constructed.join('');
};