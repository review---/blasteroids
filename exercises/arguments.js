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