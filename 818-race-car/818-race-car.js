/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    const initialState = [0, 1];
    const visited = new Set();
    const q = [initialState];
    visited.add(initialState.join('#'));
    
    for (let level = 0; q.length; level++) {
        for (let i = q.length; i > 0; i--) {
            const [pos, spd] = q.shift();
            
            if (pos === target) return level;
            
            let newState = [pos+spd, spd * 2];
            let key = newState.join('#');
            if (!visited.has(key) && 0 < newState[0] && newState[0] < target * 2) {
                q.push(newState);
                visited.add(key);
            }
            
            newState = [pos, spd > 0 ? -1 : 1];
            key = newState.join('#');
            if (!visited.has(key) && 0 < newState[0] && pos < target * 2) {
                q.push(newState);
                visited.add(key);
            }
        }
    }
    return -1;
};