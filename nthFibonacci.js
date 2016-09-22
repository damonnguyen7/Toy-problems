/*
Fibonacci sequence, and characterized by the fact that every number in it is the sum of the two preceding ones
Constrait: DO NOT use a recursive solution to this problem. Your solution must run in linear time.
*/

var nthFibonacci = function(n) {
  var results = [0, 1],
  for (var i = 2; i <= n; i++) {
    var last = results[results.length - 1];
    var secondLast = results[results.length - 2];
    results.push(last + secondLast);
  }
  return results[n];
}
