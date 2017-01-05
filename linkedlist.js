/*
Creating a Linked List:
*/

//function to instantiate node
function Node(value) {
  this.value = value;
  this.next = null;
}

//function to instantiate linked list
function LinkedList() {
  var list = {
    head: null,
    tail: null
  }

  //add node to the tail
  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = new Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
  }

  //remove from head
  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  }

  list.contains = function(target){
    var doesContain = false;
    function searchLinkedList(node){
      if (target === node.value) {
        doesContain = true;
      }
      if (null === node.next) {
        return null;
      }
      searchLinkedList(node.next);
    }
    searchLinkedList(list.head);
    return doesContain;
  };

  return list;
}




module.exports = {
  LinkedList: LinkedList,
  Node: Node
}