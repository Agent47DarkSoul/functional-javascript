function factorial(n) {
  function loop (number, accumulator) {
    if (number == 0) { return accumulator; }
    else { return loop(number - 1, number * accumulator); }
  }

  return loop(n, 1);
}

exports.factorial = factorial;
