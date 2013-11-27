(function(root) {
  var A = root.A = (root.A || {});

  var Bullet = A.Bullet = function(pos, dir) {
    var SPEED = 50;
    var vel = [dir[0] * SPEED , dir[1] * SPEED];

    A.MovingObject.call(this, pos, vel, 3, "");

    this.startTime = Date.now();
  };

  Bullet.inherits(A.MovingObject);

  Bullet.prototype.hitAsteroids = function(game) {
    for (var i = 0; i < game.asteroids.length; i++) {
      var asteroid = game.asteroids[i];

      if (this.isCollidedWith(asteroid)) {
        game.removeBullet(this);
        game.removeAsteroid(asteroid);
      };
    };
  };
})(this);