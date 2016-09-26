/*
Create a function called reverseLinkedList that takes an linked
*/

var reverseLinkedList = function(linkedList) {
  var node = linkedList;
  var previous = null;
  while (node) {
    var temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  return previous;
}
