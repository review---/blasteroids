(function(root) {
  var A = root.A = (root.A || {});

  var Game = A.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new A.Ship();
    this.intervalID;
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.FPS = 30;
  Game.SPEED = 0.5

  Game.prototype.addAsteroids = function(n) {
    for (var i = 0; i < n; i++) {
      this.asteroids.push(A.Asteroid.randomAsteroid());
    };
  };

  Game.prototype.draw = function() {
    console.log(this);
    var c = this.ctx;
    c.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    // draw ship
    this.ship.draw(c);

    // draw asteroids
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(c);
    };
  };

  Game.prototype.move = function() {
    this.ship.move();

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    };
  };

  Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
    this.draw();
  };

  Game.prototype.start = function(n) {
    this.bindKeyHandlers();
    this.addAsteroids(n);
    this.intervalID = window.setInterval(
      this.step.bind(this),
      (1000 / Game.FPS)
    );
  };

  Game.prototype.stop = function() {
    window.clearInterval(this.intervalID);
  };

  Game.prototype.checkCollisions = function() {
    var game = this;
    this.asteroids.forEach( function(asteroid) {
      if (asteroid.isCollidedWith(game.ship)) {
        game.stop();
        alert("You dead.");
      };
    });
  };

  Game.prototype.bindKeyHandlers = function() {
    var game = this

    key('w, up', function() { return game.ship.power([ 0,-Game.SPEED]); });
    key('a, left', function() { return game.ship.power([-Game.SPEED, 0]); });
    key('s, down', function() { return game.ship.power([ 0, Game.SPEED]); });
    key('d, right', function() { return game.ship.power([ Game.SPEED, 0]); });
  };

})(this);