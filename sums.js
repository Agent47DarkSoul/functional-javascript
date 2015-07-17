function sum (operation) {
  return function(from, to) {
    function loop(current, accumulator) {
      if (current > to) { return accumulator; }
      else {
        // This changes for different problems
        var accumulation = accumulator + operation(current);

        // This will always be like this
        return loop(current + 1, accumulation)
      }
    }

    return loop(from, 0);
  }
}

exports.sum = sum;