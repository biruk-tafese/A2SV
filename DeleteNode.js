/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // Copy the value of the next node into the current node
    node.val = node.next.val;
    // Remove the next node from the list
    node.next = node.next.next;
};
