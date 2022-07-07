/**
 * @param {number} target
 * @return {number}
 */
const racecar = (target) => {
    const state = [0, 1] // pos, spd
    const q = [state];
    const visited = new Set(state.join('#'));
    
    for (let level = 0; q.length; level++) {
        for (let i = q.length; i > 0; i--) {
            let [pos, spd] = q.shift();
        
            if (pos === target) return level;

            let newState = [pos + spd, spd * 2];
            if (!visited.has(newState.join('#')) && pos > -1 && pos < target * 2) {
                q.push(newState);
                visited.add(newState.join('#'))
            }

            newState = [pos, spd > 0 ? -1 : 1];
            if (!visited.has(newState.join('#')) && pos > -1 && pos < target * 2) {
                q.push(newState);
                visited.add(newState.join('#'))
            }
        }
    }
};