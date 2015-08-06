var assert = require('assert');

var fibonacci = (function () {
  var _mem = [];

  return function (number) {
    if (number < 2) { return number; }
    else {
      if (_mem[number] === undefined) {
        _mem[number] = fibonacci(number - 1) + fibonacci(number - 2);
      }

      return _mem[number];
    }
  };
})();

var factorial = (function () {
  var _mem = [];

  return function (number) {
    if(number === 0) { return 1; }
    else {
      if (_mem[number] === undefined) {
        console.log('Calculating for: ', number);
        _mem[number] = number * factorial(number - 1);
      }

      return _mem[number];
    }
  };
})();

(function () {
  var answer = fibonacci(20);
  assert(answer === 6765, 'Fibonacci failed: ' + answer);
})();


(function () {
  var answer = factorial(5);
  assert(answer === 120, 'Factorial failed: ' + answer);
})();


(function () {
  var answer = factorial(10);
  assert(answer === 3628800, 'Factorial failed: ' + answer);
})();
