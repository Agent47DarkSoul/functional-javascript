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

var answer = fibonacci(20);
assert(answer === 6765, 'Fibonacci failed: ' + answer);