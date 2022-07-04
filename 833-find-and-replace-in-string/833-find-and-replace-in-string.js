/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    const k = indices.length;
    const conversions = [];
    for (let i = 0; i < k; i++) conversions.push({i: indices[i], source: sources[i], target: targets[i]});
    conversions.sort((a,b) => a.i - b.i);
    console.log(conversions)
    let constructed = '';
    let i = 0;
    let j = 0;
    while (i < s.length) {
        if (j < conversions.length && i === conversions[j].i) {
            if (s.indexOf(conversions[j].source, conversions[j].i) === conversions[j].i) {
                constructed = constructed + conversions[j].target;
                i += conversions[j].source.length;
            } else {
                constructed = constructed + s[i];
                i++;
            }
            j++;
        } else {
            constructed = constructed + s[i];
            i++;
        }
    }
    return constructed;
};

// 0b1d