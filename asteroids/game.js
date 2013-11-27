(function(root) {
  var A = root.A = (root.A || {});

  var Game = A.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = [];
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.FPS = 30;

  Game.prototype.addAsteroids = function(n) {
    for (var i = 0; i < n; i++) {
      this.asteroids.push(A.Asteroid.randomAsteroid());
    };
  };

  Game.prototype.draw = function() {
    console.log(this);
    var c = this.ctx;
    c.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(c);
    };
  };

  Game.prototype.move = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    };
  };

  Game.prototype.step = function() {
    this.move();
    this.draw();
  };

  Game.prototype.start = function(n) {
    // magic???
    this.addAsteroids(n);
    window.setInterval(this.step.bind(this), (1000 / Game.FPS));
  }


})(this);