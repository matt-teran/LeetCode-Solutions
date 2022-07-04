/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let k = indices.length;
    let constructed = s.split('');
    let conversions = indices.map((index, i) => [index, sources[i], targets[i]]);

    for (const [index, source, target] of conversions) {
        if (!s.startsWith(source, index)) continue;
        constructed[index] = target;
        
        for (let j = index + 1; j < source.length + index; j++) {
            constructed[j] = '';
        }
    }

    return constructed.join('');
};

// 0b1d