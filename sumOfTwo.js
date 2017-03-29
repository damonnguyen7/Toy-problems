// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, 
//where one number is taken from a and the other from b, that can be added together to get a sum of v. 
//Return true if such a pair exists, otherwise return false.

function sumOfTwo(a, b, v) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }
  return false;
}
