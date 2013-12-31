(function(root) {
  var A = root.A = (root.A || {});

  var Asteroid = A.Asteroid = function(pos, vel, radius) {
    A.MovingObject.call(this, pos, vel, radius, "aquamarine");
  };

  Asteroid.inherits(A.MovingObject);

  Asteroid.randomAsteroid = function() {
    var x, y, xVel, yVel;

    x = Math.random() * A.Game.DIM_X;
    y = Math.random() * A.Game.DIM_Y;
    // Write better random velocities later...
    var negateX = Math.random() > 0.5 ? 1 : -1;
    var negateY = Math.random() > 0.5 ? 1 : -1;

    xVel = Math.random() * 3 * negateX;
    yVel = Math.random() * 3 * negateY;

    var radius = Math.random() * 30 + 5;

    return new Asteroid([x, y], [xVel, yVel], radius);
  };

})(this);