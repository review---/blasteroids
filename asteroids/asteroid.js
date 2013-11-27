Function.prototype.inherits = function (BaseClass) {
  function Surrogate () {};
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
};

(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel, 50, "aquamarine");
  };

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function() {
    var x, y, xVel, yVel;
    // should have class constants for the canvas size
    // we'll figure it out when we get to game
    x = Math.random() * 500;
    y = Math.random() * 500;
    xVel = Math.random() * 10;
    yVel = Math.random() * 10;

    return new Asteroid([x, y], [xVel, yVel]);
  };

})(this);