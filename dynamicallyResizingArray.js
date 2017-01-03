/*
Dynamically Resizing Array - 
An ArrayList, or a dynamically resizing array, is an array that resizes itself as needed while still providing O(1) access 
A typical implementation is that when a vector is full, the array doubles in size Each doubling takes O(n) time, but happens so 
rarely that its amortized time is still O(1)
*/

function dynamicArray(arr, input) {
  var double = arr.length * 2;
  if (arr[arr.length - 1] !== null) {
    for (var i = arr.length; i < double; i++) {
      arr.push(null);
    }
  } else {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === null) {
        arr[j] = input;
        break;
      }
    }
  }
  return arr
}