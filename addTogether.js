//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//Calling this returned function with a single argument will then return the sum:
//var sumTwoAnd = addTogether(2);
//sumTwoAnd(3) returns 5.
//If either argument isn't a valid number, return undefined.

function addTogether() {
  const args = Array.prototype.slice.call(arguments, 0);
  if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
    return args[0] + args[1];
  } else if (typeof args[0] === 'number' && args[1] === undefined) {
    return function() {
      const childArgs = Array.prototype.slice.call(arguments, 0);
      if (typeof childArgs[0] === 'number') {
        return args[0] + childArgs[0];
      } else {
        return undefined;
      }
    }
  }
  return undefined;
}

addTogether(2,3);