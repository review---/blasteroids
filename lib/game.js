(function(root) {
  var A = root.A = (root.A || {});

  var Game = A.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new A.Ship();
    this.bullets = [];
    this.intervalID;
    this.elapsedTime = 0;
    this.points = 0
    this.img = new Image();
    this.img.src = 'background.jpeg';
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 800;
  Game.FPS = 30;
  Game.SPEED = 0.5;

  Game.prototype.addAsteroids = function(n) {
    for (var i = 0; i < n; i++) {
      this.asteroids.push(A.Asteroid.randomAsteroid());
    };
  };

  Game.prototype.draw = function() {
    var c = this.ctx;
    c.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    // draw background
    this.ctx.drawImage(this.img, -500, -200);

    // draw ship
    this.ship.draw(c);

    // draw bullets
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(c);
    };

    // draw asteroids
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(c);
    };

    // show pointage and the current time
    this.ctx.fillStyle = "white";
    this.ctx.font = "" + 12+"pt Helvetica ";
    this.ctx.fillText(
      "Time: " + this.elapsedTime,
      A.Game.DIM_X - 100,
      A.Game.DIM_Y - 50
    );
    this.ctx.fillText(
      "Points: " + this.score(),
       A.Game.DIM_X - 100,
       A.Game.DIM_Y - 25
     );
  };

  Game.prototype.move = function() {
    this.ship.move();

    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
    };

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    };
  };

  Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
    this.expireBullets();
    this.elapsedTime++;
    this.draw();
    this.checkForWin();
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

    // Ship smacks into asteroid?
    this.asteroids.forEach( function(asteroid) {
      if (asteroid.isCollidedWith(game.ship)) {
        game.stop();
        alert("You died. Reload to try again.");
      };
    });

    // Asteroids blasted to HELL?!?!?!
    this.bullets.forEach ( function(bullet) {
      bullet.hitAsteroids(game);
    });

    this.bullets = _.compact(this.bullets);
  };

  Game.prototype.bindKeyHandlers = function() {
    var game = this

    // movement, note that we're giving #turn an angle in radians
    key('w, up', function() { game.ship.power(Game.SPEED); });
    key('a, left', function() { game.ship.turn(Math.PI / 18); });
    key('s, down', function() { game.ship.power(-Game.SPEED); });
    key('d, right', function() { game.ship.turn(-Math.PI / 18); });

    // pew, pew, pew
    key('space', function() { game.fireBullet(); });
  };

  Game.prototype.fireBullet = function() {
    var bullet = this.ship.fireBullet();

    if (bullet) {
     this.bullets.push(bullet);
    }
  };

  Game.prototype.removeBullet = function(bullet) {
    var i = this.bullets.indexOf(bullet);
    this.bullets[i] = undefined;
  };

  Game.prototype.removeAsteroid = function(asteroid) {
    var i = this.asteroids.indexOf(asteroid);
    this.asteroids[i] = undefined;
    this.asteroids = _.compact(this.asteroids);
    this.points += 200;
  };

  Game.prototype.expireBullets = function() {
    for (var i = 0; i < this.bullets.length; i++) {
      var bullet = this.bullets[i];

      if (Date.now() - bullet.startTime > 500) {
        this.removeBullet(bullet);
      };
    };

    this.bullets = _.compact(this.bullets);
  };

  Game.prototype.checkForWin = function() {
    if (this.asteroids.length === 0) {
      this.stop();
      alert("You Win! Final Score: " + this.score());
    };
  };

  Game.prototype.score = function() {
    return this.points - this.elapsedTime;
  };

})(this);
