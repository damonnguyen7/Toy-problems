/*
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

My solution is a bit abstract, so I will explain what I am doing:
1. The first thing I did was sort the input array descending order.
2. I found the product of the first and last two numbers of the input array. If the input array has negative numbers and since
the array is sorted the last two numbers could be potentially negative and multiplying two negatives give us a positive.
Multiplying the last two numbers can potentially be greater than multiplying the first two numbers. 
3. I than compare greatestProduct to the product of the first three numbers and returning the greatest product.

eval(array.slice(0, 3).join('*')):
I sliced the first 3 numbers and created a new array ex. [3,2,1]. 
I joined the array with an * character giving me a string '3*2*1'
When I invoke eval('3*2*1') it will evual the string expression returning 6.


*/

function largestProductOfThree (array) {
  array.sort(function(a, b) {
    return b - a;
  });
  var greatestProduct = array[0] * array[array.length - 1] * array[array.length - 2];
  return greatestProduct > eval(array.slice(0, 3).join('*')) ? greatestProduct : eval(array.slice(0, 3).join('*'));
}