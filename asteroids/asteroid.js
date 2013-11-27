Function.prototype.inherits = function (BaseClass) {
  function Surrogate () {};
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
};

(function(root) {
  var A = root.A = (root.A || {});

  var Asteroid = A.Asteroid = function(pos, vel) {
    A.MovingObject.call(this, pos, vel, 15, "aquamarine");
  };

  Asteroid.inherits(A.MovingObject);

  Asteroid.randomAsteroid = function() {
    var x, y, xVel, yVel;

    x = Math.random() * A.Game.DIM_X;
    y = Math.random() * A.Game.DIM_Y;
    // Write better random velocities later...
    xVel = Math.random() * 10;
    yVel = Math.random() * 10;

    return new Asteroid([x, y], [xVel, yVel]);
  };

})(this);