Function.prototype.inherits = function(superObj) {
  function Surrogate() {};
  Surrogate.prototype = superObj.prototype;
  this.prototype = new Surrogate();
};

// function Animal(name) {
//   this.name = name;
// };
//
// Animal.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.name);
// };
//
// function Dog(name) {
//   Animal.call(this, name);
// };
//
// Dog.inherits(Animal);
//
// Dog.prototype.bark = function () {
//   console.log("Bark!");
// };
//
// var d = new Dog("jenkins");
// d.sayHello();
