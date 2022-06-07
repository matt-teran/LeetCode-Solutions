/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) return null;
    let dummy = new ListNode(0, head);
    let len = 0;
    let l = dummy;
    let r = head;
    
    while (n > 0 && r) {
        r = r.next;
        n--;
    }
    while (r) {
        r = r.next;
        l = l.next;
    }
    l.next = l.next.next;
    return dummy.next;
};