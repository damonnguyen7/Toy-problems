/* Given an array of numbers, calculate the greatest contiguous sum of numbers in it. 
   A single array item will count as a contiguous sum. 

  Input: [1, 2, 3] Output: 6
  Input: [4, -1, 5] Output: 8
  Input: [10, -11, 11] Output: 11
  Input: [1, 2, 3, -6, 4, 5, 6] Output: 15
  
*/

/*
//create parent function sumArray which take an input array.
  //create a function sumAll that will sum up all the number in the arguments array.
  //if the array length is greater than 1
    //instantiate total and assign to sum of all elements in input array
    //instantiate sliceFirst and assign to sum of all element in array minus the first element.
    //instantiate sliceFirst and assign to sum of all element in array minus the last element.
    //Return the largest sum out of total, sliceFirst, and sliceLast.
  //return first element in array.
*/

function sumArray (array) {
 function sumAll(array) {
   return array.reduce(function(sum,number) {
     return sum + number;
   });
 }
 if (array.length > 1) { 
   var total = sumAll(array); 
   var sliceFirst = sumArray(array.slice(1)); 
   var sliceLast = sumArray(array.slice(0,-1)); 
   return Math.max(total,sliceFirst,sliceLast); 
 }
 return array[0]; 
}