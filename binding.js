var assert = require('assert');

var person = {
  firstName: 'Danish',
  lastName: 'Satkut',
  getName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

Function.prototype.bindIt = function(context) {
  var fn = this;

  return function () {
    return fn.apply(context, arguments);
  };
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
  var answer = invoker('Having Fun', person.getName.bindIt(person));
  assert(answer === "Danish Satkut", answer);
})();
