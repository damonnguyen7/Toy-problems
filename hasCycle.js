/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Generally, we assume that a linked list will terminate in a null next pointer, as follows:
A -> B -> C -> D -> E -> null

A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 A -> B -> C
      ^    |
      |    v
      E <- D
*/

var hasCycle = function(linkedList) {
  var rabbit = linkedList, //Create two pointers rabbit and turtle 
      turtle = linkedList, //We want to traverse the input linkList simultaneously
      turtleLag = true; //Slow down the turtle traversal rate by half.

  while (rabbit = rabbit.next) { //Moving the rabbit to the next node. If the next node is null than we know that the linkList is not a cycle
    if (rabbit === turtle) { //if the rabbit ever catches up to the turtle by seeing if they point to the same object in memory we know that it is a linkList cycle
      return true;
    }
    if (!turtleLag) { //If the turtleLag is false
      turtle = turtle.next; //we can move the turtle to the next node.
    }
    turtleLag = !turtleLag; //every iteration the turtle will lag by one iteration
  }

  return false; // If we don't run the while loop we know that the input linkList is not a cycle linkList.
}