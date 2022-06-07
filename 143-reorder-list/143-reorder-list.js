/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let [slow, fast] = [head, head.next];
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let second = slow.next;
    let prev = slow.next = null;
    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    
    
    let first = head;
    second = prev;
    while (second) {
        let [t1, t2] = [first.next, second.next];
        first.next = second;
        second.next = t1;
        [first, second] = [t1,t2];
    }
};