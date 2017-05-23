//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  const arrays = Array.prototype.slice.call(arguments, 0);
  return arrays.reduce(function(result, subArray) {
    for (var i = 0; i < subArray.length; i++) {
      if (result.indexOf(subArray[i]) === -1) {
        result.push(subArray[i]);
      }
    }
    return result;
  }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //[1, 3, 2, 5, 4]