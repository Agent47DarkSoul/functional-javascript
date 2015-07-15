function sumOfOperation(from, to, operation) {
  if (from > to) {
    return 0;
  } else {
    return operation(from) + sumOfOperation(from + 1, to, operation);
  }
}

var result = sumOfOperation(1, 3, function (n) { return n; });
console.log('Result: ' + result);

result = sumOfOperation(1, 3, function (n) { return n * n * n; });
console.log('Result: ' + result);

var factorial = function (n) {
  if (n == 0) { return 1; }
  else { return n * factorial(n - 1); }
}


result = sumOfOperation(1, 3, factorial);
console.log('Result: ' + result);
