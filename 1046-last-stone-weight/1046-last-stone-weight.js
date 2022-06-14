/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap = new MaxPriorityQueue();
    for (let stone of stones) heap.enqueue(stone);
    
    while (heap.size() > 1) {
        const x = heap.dequeue().element;
        const y = heap.dequeue().element;
        if (x !== y) heap.enqueue(x-y)
    }
    heap.enqueue(0);
    return heap.front().element;
};