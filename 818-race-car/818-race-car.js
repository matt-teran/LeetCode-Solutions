const racecar = (target) => {
    // create our initial state, we start at position 0 with speed 1
	const initialState = [0,1];
    // initialize our BFS queue with this state
	const q = [['', initialState]];
    // initialize visited set w/ initial state
	const visited = new Set([initialState.join('#')]);

	for (let level = 0; q.length; level++) {
		for (let k = q.length; k > 0; k--) {
			let [instr, [pos, spd]] = q.shift();
			if (pos === target) {
                console.log(instr);
                return level;
            };
			let nxtState = [pos + spd, spd * 2]
			let key = nxtState.join('#');
			if (!visited.has(key) && 0 < nxtState[0] && nxtState[0] < target * 2) {
				q.push([instr.concat('A'), nxtState]);
				visited.add(key);
			}
			nxtState = [pos, spd > 0 ? -1 : 1];
			key = nxtState.join('#');
			if (!visited.has(key) && 0 < nxtState[0] && nxtState[0] < target * 2) {
				q.push([instr.concat('R'), nxtState]);
				visited.add(key);
			}
		}
	}

	return -1;
}