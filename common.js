function factorial(n) {
  function loop (number, accumulator) {
    if (number == 0) { return accumulator; }
    else { return loop(number - 1, number * accumulator); }
  }

  return loop(n, 1);
}

function buildSequencer(sequenceOperation, initialValue) {
  return function (operation) {
    return function(from, to) {
      function loop(current, accumulator) {
        if (current > to) { return accumulator; }
        else {
          // This changes for different problems
          var accumulation = sequenceOperation(accumulator, operation(current));

          // This will always be like this
          return loop(current + 1, accumulation)
        }
      }

      return loop(from, initialValue);
    }
  }
}

exports.factorial = factorial;
exports.buildSequencer = buildSequencer;