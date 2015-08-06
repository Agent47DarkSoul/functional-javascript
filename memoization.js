var assert = require('assert');

Function.prototype.memoizer = (function() {
  // this => the actual function we want to memoize

  return (function () {
    var _mem = [];

    return function (fn, args) {
      if (_mem[args[0]] === undefined) {
        // console.log('Generating ', fn.name, args[0]);
        _mem[args[0]] = fn.apply(fn, args);
      }

      return _mem[args[0]];
    };
  })();
});

Function.prototype.memoize = function() {
  var fn = this;
  var memoized = fn.memoizer();

  return function () {
    return memoized(fn, arguments);
  }
};

var fibonacci = (function (number) {
  if (number < 2) { return number; }
  else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}).memoize();

var factorial = (function (number) {
  if(number === 0) { return 1; }
  else { return number * factorial(number - 1); }
}).memoize();

(function () {
  var answer = fibonacci(20);
  assert(answer === 6765, 'Fibonacci failed: ' + answer);
})();

(function () {
  var answer = fibonacci(22);
  assert(answer === 17711, 'Fibonacci failed: ' + answer);
})();


(function () {
  var answer = factorial(5);
  assert(answer === 120, 'Factorial failed: ' + answer);
})();


(function () {
  var answer = factorial(10);
  assert(answer === 3628800, 'Factorial failed: ' + answer);
})();
