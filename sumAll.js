//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

var sumAll = (array) => {
  let total = 0;
  const max = Math.max(array[0], array[1]);
  const min = Math.min(array[0], array[1]);
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]); //=> should return 10.