/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let laserCount = 0;
    // • loop through array
    bank.forEach((str, i) => {
        // • loop through each binary string
        for (let j = 0; j < str.length; j++) {
            // • for each security device, find the next binary string with a security device
            if (str[j] === '1') {
                for (let k = i + 1; k < bank.length; k++) {
                    if (bank[k].includes('1')) {
                        laserCount += bank[k].split('').filter(char => char === '1').length;
                        break;
                    }
                }
            }
            // • increase laser count for each security device in that next binary string
            // • end loop if only one string remains        
        }
        
    })
    return laserCount;
};