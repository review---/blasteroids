(function(root) {
  var A = root.A = (root.A || {});

  var Asteroid = A.Asteroid = function(pos, dir, speed, radius) {
    A.MovingObject.call(this, pos, dir, speed, radius, "aquamarine");
  };

  Asteroid.inherits(A.MovingObject);

  Asteroid.randomAsteroid = function() {
    var x, y, xDir, yDir, speed, radius;

    x = Math.random() * A.Game.DIM_X;
    y = Math.random() * A.Game.DIM_Y;
    xDir = Math.random() > 0.5 ? 1 : -1;
    yDir = Math.random() > 0.5 ? 1 : -1;

    speed = Math.random() * 3

    radius = Math.random() * 30 + 5;

    return new Asteroid([x, y], [xDir, yDir], speed, radius);
  };

})(this);
