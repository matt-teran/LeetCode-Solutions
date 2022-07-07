/**
 * @param {number} target
 * @return {number}
 */
const racecar = (target) => {

    let q = [[0, 1, 0]];

    while (q.length) {
        let [pos, spd, n] = q.shift();
        if (pos === target) return n;
        q.push([pos+spd, spd*2, n+1]);
        if (spd > 0) {
            if (pos + spd > target) q.push([pos, -1, n+1]);
        } else {
            if (pos + spd < target) q.push([pos, 1, n+1]);
        }
    }
};