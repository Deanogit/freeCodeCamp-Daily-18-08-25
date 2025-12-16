// Factorializer
// Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

// The factorial of zero is 1.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let counter = 1;
    for (let i = 1; i <= n; i++) {
      counter = counter * i;
    }
    console.log(counter);
    return counter;
  }
  // return n;
}

function factorial(n) {
  if (n === 0) return 1;

  let counter = 1;
  for (let i = 1; i <= n; i++) {
    counter *= i;
  }
  return counter;
}

function factorial(n) {
  if (n === 0) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive case
}
