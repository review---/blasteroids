var __ = require("underscore");

function sum() {
  var sum = 0

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  };

  return sum;
};

// console.log(sum(1, 2, 3, 4) == 10);
// console.log(sum(1, 2, 3, 4, 5) == 15);

Function.prototype.myBind = function(obj) {
  var args1 = Array.prototype.slice.call(arguments).slice(1);
  var self = this;

  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    var args = args1.concat(args2);
    self.apply(obj, args);
  };
};

// var cat = { name: "Sennacy" };
// var myFunction = function(a,b,c) { console.log(this.name + a + b + c); };
// var myBoundFunction = myFunction.myBind(cat, 1, 2);
// myBoundFunction(3);

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(num1) {
    numbers.push(num1);

    if (numbers.length === numArgs) {
      return __.inject(numbers, function (sum, num2) {
        return sum + num2;
      });
    } else {
      return _curriedSum;
    };
  };

  return _curriedSum;
};
//
// var sum = curriedSum(4);
// console.log(sum(5)(1)(8)(1));

Function.prototype.curry = function(numArgs) {
  var args = [];
  var self = this;

  function _curriedVals(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return self.apply(self, args);
    } else {
      return _curriedVals;
    };
  };

  return _curriedVals;
};

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// var f1 = sumThree.curry(3);
// var f2 = f1(4);
// var f3 = f2(20);
// var result = f3(3);
//
// console.log(sumThree.curry(3)(4)(20)(3));
// console.log(result);