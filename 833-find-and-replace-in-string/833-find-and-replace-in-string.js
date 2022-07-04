/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let k = indices.length;
    
    // Split the string input into an array
    let constructed = s.split('');
    
    // Zip indices, sources, and targets together into conversions
    let conversions = indices.map((index, i) => [index, sources[i], targets[i]]);

    // Iterate conversions
    for (const [index, source, target] of conversions) {
        // If arrayed string doesn't start with source at index, continue
        if (!s.startsWith(source, index)) continue;
        
        // Set arrayed string at index to target
        constructed[index] = target;
        
        // Set the length of 
        constructed.splice(index+1, source.length - 1, ...Array(source.length - 1).fill(''));
        console.log(constructed);
        // for (let j = index + 1; j < source.length + index; j++) {
        //     constructed[j] = '';
        // }
    }

    return constructed.join('');
};
