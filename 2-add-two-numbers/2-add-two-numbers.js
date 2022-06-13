/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let node = dummy;
    let n1 = l1;
    let n2 = l2;
    let carry = false;
    while (n1 && n2) {
        let sum = n1.val + n2.val
        if (carry) sum++;
        if (sum > 9) {
            node.next = new ListNode(sum - 10);
            carry = true;
        } else {
            node.next = new ListNode(sum);
            carry = false;
        }
        
        node = node.next;
        n1 = n1.next;
        n2 = n2.next;
    }
    while (n1) {
        let sum = n1.val;
        if (carry) sum++;
        if (sum > 9) {
            node.next = new ListNode(sum - 10);
            carry = true;
        } else {
            node.next = new ListNode(sum);
            carry = false;
        }
        n1 = n1.next;
        node = node.next;
    }
    while (n2) {
        let sum = n2.val;
        if (carry) sum++;
        if (sum > 9) {
            node.next = new ListNode(sum - 10);
            carry = true;
        } else {
            node.next = new ListNode(sum);
            carry = false;
        }
        n2 = n2.next;
        node = node.next;
    }
    
    if (carry) node.next= new ListNode(1)
    
    return dummy.next;
};