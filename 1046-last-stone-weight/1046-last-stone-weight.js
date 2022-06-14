/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap = new MaxPriorityQueue();
    for (let stone of stones) heap.enqueue(stone);
    
    while (heap.size() > 1) {
        heap.enqueue(heap.dequeue().element - heap.dequeue().element);
    }
    return heap.front().element;
};