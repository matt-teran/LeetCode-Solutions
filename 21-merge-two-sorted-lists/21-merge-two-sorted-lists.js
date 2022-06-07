/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    let tail = head;
    
    
    while(l1 && l2) {
        if (l1.val > l2.val) {
            tail.next = l2;
            l2 = l2.next;
        } else {
            tail.next = l1;
            l1 = l1.next;
        }
        tail = tail.next;
    }
    if (l1) {
        tail.next = l1;
    } else if (l2) {
        tail.next = l2
    }
    return head.next;
};