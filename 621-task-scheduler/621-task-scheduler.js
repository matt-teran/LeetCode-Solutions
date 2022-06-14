/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (!n) return tasks.length;
    let counter = {};
    let maxHeap = new MaxPriorityQueue();
    let q = [];
    let time = 0;
    
    for (let task of tasks) counter[task] ? counter[task]++ : counter[task] = 1;
    for (let cnt of Object.values(counter)) maxHeap.enqueue(cnt);
    // console.log(maxHeap.dequeue());
    while (maxHeap.size() > 0 || q.length > 0) {
        time++;
        
        if (maxHeap.size() > 0) {
            let count = maxHeap.dequeue().element - 1;
            count > 0 && q.push([count, time + n]);
        }
        if (q.length && q[0][1] === time) {
            maxHeap.enqueue(q.shift()[0]);
        }
    }
    return time;
};