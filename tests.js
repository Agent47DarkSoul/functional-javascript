(function productsTest () {
  var assert = require('assert');
  var FP = require('./products');
  var common = require('./common');

  var sumOfIntegers = FP.product(function (n) { return n; })(1, 4);
  assert(sumOfIntegers === 24, 'Product of integers failed: ' + sumOfIntegers);

  var sumOfCubes = FP.product(function (n) { return n * n * n; })(1, 3);
  assert(sumOfCubes === 216, 'Product of cubes failed: ' + sumOfIntegers);

  var sumOfFactorials = FP.product(function (n) { return common.factorial(n); })(1, 3);
  assert(sumOfFactorials === 12, 'Products of factorials failed: ' + sumOfFactorials);

  function advancedFactorial (number) {
    var basicProduct = FP.product(function (n) { return n; });
    return basicProduct(1, number);
  }

  var factorialResult = advancedFactorial(5);
  assert(factorialResult === 120, 'Factorial using FP.product failed: ' + factorialResult);
})();

(function sumsTest () {
  var assert = require('assert');
  var FP = require('./sums');
  var common = require('./common');

  var sumOfNumbers = FP.sum(function (n) { return n; });
  var numbersResult = sumOfNumbers(1, 3);
  assert(numbersResult === 6, 'Sum of numbers failed: Expected 6, Got ' + numbersResult);

  var sumOfCubes = FP.sum(function (n) { return n * n * n; });
  var cubesResult = sumOfCubes(1, 3);
  assert(cubesResult === 36, 'Sum of cubes failed: Expected 36, Got ' + cubesResult);

  var sumOfFactorials = FP.sum(common.factorial);
  var factorialsResult = sumOfFactorials(1, 3);
  assert(factorialsResult === 9, 'Sum of factorials failed: Expected 9, Got ' + factorialsResult);
})();