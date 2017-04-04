//Write a method to generate the nth Fibonacci number.
function fibonacci(n) {
  if (n === 0) {
    return n;
  }
  else if (n === 1) {
    return 1;
  } 
  else if (n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

fibonacci(6); //=> 8
fibonacci(7); //=> 13