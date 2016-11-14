/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
  A -> B -> C
      ^    |
      |    v
      E <- D
 
 suppose turtle moved k steps
 then rabbit moved 2k steps 
 
 s = A -> B 
 t = B -> C -> D 
 2k = s + mr + t 
 k = s + nr + t
 s = k - nr - t
    (m-n)r
 s = xr - t
 2k - k = k = (m - n)r
 
 
//this.next = null - not a cycle linkedList 
var detectCycle = function(head) {
    var rabbit = head,
        turtle = head;   
    while (rabbit !== null && rabbit.next !== null) {
        rabbit = rabbit.next.next;
        turtle = turtle.next;
        if (rabbit === turtle) {
            break;
        }
    }
    
    if (rabbit === null && rabbit.next === null) {
        return null;
    }
    //reset turtle to head
    turtle = head;
    while(rabbit !== turtle) {
      turtle = turtle.next;
      rabbit = rabbit.next;
    }
    return rabbit;
};
