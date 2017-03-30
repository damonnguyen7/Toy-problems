/*
Given an array of integers, write a function that determines whether the array contains any duplicates. 
Your function should return true if any element appears at least twice in the array, and it should return 
false if every element is distinct.


For a = [1, 2, 3, 1], the output should be
containsDuplicates(a) = true.
*/

function containsDuplicates(array) {
  var charIndex = {};
  for (var i = 0; i < array.length; i++) {
    if (charIndex[array[i]] === undefined) {
      charIndex[array[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}
