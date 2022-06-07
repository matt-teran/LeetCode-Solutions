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
    // create a head node for our new list
    // we can use this head as our return value in the end
    let head = new ListNode();
    // the tail is what we'll use to traverse and update the new list
    let tail = head;
    
    // continue these operations while both l1 and l2 are not null
    //   because if one is null, you can't compare it to a number
    while(l1 && l2) {
        // compare two numbers, append the smaller one to the tail, and update the node to the next one
        if (l1.val > l2.val) {
            tail.next = l2;
            l2 = l2.next;
        } else {
            tail.next = l1;
            l1 = l1.next;
        }
        // traverse to the end of the tail
        tail = tail.next;
    }
    // add any remaining values from the l1 or l2, whichever is not null
    if (l1) {
        tail.next = l1;
    } else if (l2) {
        tail.next = l2
    }
    // return all but our dummy head node
    return head.next;
};