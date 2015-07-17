var common = require('./common');

function product (operation) {
  return function (from, to) {
    function loop (current_number, accumulator) {
      if (current_number > to) { return accumulator; }
      else {
        return loop(current_number + 1, operation(current_number) * accumulator);
      }
    }

    return loop(from, 1);
  }
}

exports.product = product