function fact (number, accumulator) {
  if (number == 0) { return accumulator; }
  else { return fact(number - 1, number * accumulator); }
}

function factorial(n) {
  return fact(n, 1);
}

exports.factorial = factorial;
