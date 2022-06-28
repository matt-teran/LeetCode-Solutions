const racecar = (target) => {
	const initialState = [0,1];
	const q = [initialState];
	const visited = new Set();
	visited.add(initialState.join('#'));

	for (let level = 0; q.length; level++) {
        let qLen = q.length;
		for (let k = qLen; k > 0; k--) {
			let [pos, spd] = q.shift();
			if (pos === target) return level;
			let nxt = [pos + spd, spd * 2];
			let key = nxt.join('#');
			if (!visited.has(key) && 0 < nxt[0] && nxt[0] < target * 2) {
				q.push(nxt);
				visited.add(key);
			}
			nxt = [pos, spd > 0 ? -1 : 1];
			key = nxt.join('#');
			if (!visited.has(key) && 0 < nxt[0] && nxt[0] < target * 2) {
				q.push(nxt);
				visited.add(key);
			}
		}
	}

	return -1;
}