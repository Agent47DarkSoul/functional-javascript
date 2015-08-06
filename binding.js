var assert = require('assert');

var person = {
  firstName: 'Danish',
  lastName: 'Satkut',
  getName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

function invoker (reason, fn) {
  console.log('Reason: ', reason);
  return fn();
};

(function () {
  var answer = person.getName();
  assert(answer === 'Danish Satkut', answer);
})();

(function () {
  var answer = invoker('Having Fun', person.getName);
  assert(answer === "Danish Satkut", answer);
})();
