/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let continueDFS = true;
    const itineraries = [];
    const itn = ["JFK"];
    const adj = {};
    let count = 0;
    for (let ticket of tickets) {
        adj[ticket[0]] ? adj[ticket[0]].push(ticket[1]) : adj[ticket[0]] = [ticket[1]];
    }
    
    for (let dep in adj) {
        adj[dep].sort();
    }

    const dfs = (dep) => {
        if (!continueDFS) return;
        if (itn.length === tickets.length + 1) {
            continueDFS = false;
            return itineraries.push([...itn])
        };
        if (adj[dep] === undefined || !adj[dep].length) return;
        let arrivalLen = adj[dep].length;
        for (let i = 0; i < arrivalLen; i++) {
            
            let arrivals = [...adj[dep]];
            let arr = adj[dep].shift();
            itn.push(arr);
            dfs(arr);
            itn.pop();
            adj[dep].push(arr);
        }
    }
    dfs("JFK");
    return itineraries[0];
};

var findSmallestLexical = (itineraries) => {
    let map = {};
    for (let itn of itineraries) {
        map[itn.join('')] = itn;
    }
    
    
    
    return map[Object.keys(map).sort()[0]];
}