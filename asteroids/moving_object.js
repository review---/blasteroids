Function.prototype.inherits = function (BaseClass) {
  function Surrogate () {};
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
};

(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var MovingObject = Asteroids.MovingObjects = function (pos, vel, rad, color) {
    this.pos = pos;
    this.vel = vel;
    // stupid naming to shrink line
    this.radius = rad;
    this.color = color;
  };

  MovingObject.prototype.move = function() {
    // be sure that vel units are sane.
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var changeX = this.pos[0] - otherObject.pos[0];
    var changeY = this.pos[1] - otherObject.pos[1];
    var dist = Math.sqrt(Math.pow(changeX, 2) + Math.pow(changeY, 2));

    return (dist < otherObject.radius + this.radius);
  };
})(this);