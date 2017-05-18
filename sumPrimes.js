//Sum all the prime numbers up to and including the provided number.
//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//The provided number may not be a prime.

function sumPrimes(num) {
  let primeNumbers = [];
  const isPrime = (number) => {
    if(number < 2) return false;
      for (let i = 2; i < number; i++) {
        if(number % i === 0) {
          return false;
        }
      }
      return true;
  }
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return eval(primeNumbers.join('+'));
}

sumPrimes(10); //=> 17