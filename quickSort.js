/*
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. 
When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.
It is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.
*/

function quickSort(array) {
  var left = [],
      right = [],
      pivot = array[0];
  if (array.length === 0) {
    return array;
  }
  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
