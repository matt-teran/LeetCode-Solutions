/**
 * @param {number} target
 * @return {number}
 */
const racecar = (target) => {
    const state = [0, 1] // pos, spd
    const q = [['', state]];
    const visited = new Set(state.join('#'));
    
    for (let level = 0; q.length; level++) {
        for (let i = q.length; i > 0; i--) {
            let [dir, [pos, spd]] = q.shift();
        
            if (pos === target) {
                console.log(dir.split('R'));
                return level;
            }

            let newState = [pos + spd, spd * 2];
            if (!visited.has(newState.join('#')) && pos > -1 && pos <= target*2) {
                q.push([dir+'A', newState]);
                visited.add(newState.join('#'))
            }
            
            if (spd > 0) {
                newState = [pos, -1]
                if (spd + pos > target && !visited.has(newState.join('#'))) {
                    visited.add(newState.join('#'));
                    q.push([dir+'R', newState]);
                }
            } else {
                newState = [pos, 1]
                if (spd + pos < target && !visited.has(newState.join('#'))) {
                    visited.add(newState.join('#'));
                    q.push([dir+'R', newState]);
                }
            }
        }
    }
};