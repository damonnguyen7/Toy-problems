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

  //remove node
  list.removeNode = function(target, linkedList) {
    var result;
    var current;
    var next;
    var error = 'argument target should be a integer';

    if (typeof target !== 'number') {
      return error;
    }

    function removeNode(node) {
      node.next = node.next.next;
    }

    function targetFinder(node) {
      current = node;
      next = node.next;
      
      if (current && current.next === null) {
        if (current.value === target) {
          list.head = null;
          list.tail = null;
          return result = null;
        } else if (current.value !== target) {
          result = list.head;
        }
      }
      if (current.value === target) {
        list.head = current.next;
        return result = list.head;
      }
      if (next.value === target) {
        removeNode(current);
        return result = list.head;
      }
      targetFinder(node.next);
    }

    targetFinder(linkedList);
    return result;
  }

  //remove duplicate  node
  list.removeDuplicateNode = function() {
    var current;
    var previous;
    var nodeTracker = [];

    function nodeRemover(node) {
      if (nodeTracker.indexOf(node.value) > - 1 && node.next === null) {
        list.tail = previous;
      }
      if (nodeTracker.indexOf(node.value) === -1) {
        nodeTracker.push(node.value);
        previous = node;
        nodeRemover(previous.next);
      } else {
        previous.next = node.next;
        if (node.next !== null) {
          nodeRemover(node.next);
        }
      }
    }
    nodeRemover(list.head);
  }

  //find nth node to last node
  list.nthToLast = function(nth, linkedList) {
    var result;
    var counter = 0;
    if (typeof nth !== 'number') {
      return 'nth must be a number type';
    }
    function sliceLink(node) {
      if (node.next === null) {
        result = node;
      }
      if (counter === nth) {
        list.head = node;
        return result = list.head;
      } else {
        counter++;
        sliceLink(node.next);
      }
    }
    sliceLink(linkedList);
    return result;
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