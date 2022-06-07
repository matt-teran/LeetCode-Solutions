/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return head;
    let stack = [head];
    
    let node = head;
    
    while (node.next !== null) {
        stack.push(node.next);
        node = node.next;
    }
    head = stack.pop();
    node = head;
    while (stack.length > 0) {
        node.next = stack.pop();
        node = node.next;
    }
    node.next = null;
    return head;
};