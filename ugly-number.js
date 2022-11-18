/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
Given an integer n, return true if n is an ugly number.

Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

14 / 2 = 7
14 / 3 = not an integer

*/

let x = false;

function isUgly(n) {
  for (i = 1; i < 10; i++) {
    if (isInt(n / i)) {
      if (i === 2 || i === 3 || i === 5) x = true;
    }
  }
  return x;
}

function isInt(value) {
  return (
    !isNaN(value) &&
    (function (x) {
      return (x | 0) === x;
    })(parseFloat(value))
  );
}

console.log(isUgly(9));
