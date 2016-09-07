/* Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. 
It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. 
Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. 
(Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

*/


function mergeSort (arr) {
  if (arr.length > 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2)
      left = mergeSort(arr.slice(0 , mid)),
      right = mergeSort(arr.slice(mid));

  return mergeHelper(left, right);
}
    
  function mergeHelper(arr1, arr2) {
    var results = [];
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] < arr2[0]) {
        results.push(arr1[0]);
        arr1 = arr1.slice(1);
      } else {
        results.push(arr1[0]);
        arr2 = arr2.slice(1);
      }
    }
    if (arr1.length) {
      return results.concat(arr1);
    } else {
      return results.concat(arr2)
    }
  }