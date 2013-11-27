(function(root) {
  var A = root.A = (root.A || {});

  var Ship = A.Ship = function() {
    A.MovingObject.call(
      this,
      [A.Game.DIM_X / 2, A.Game.DIM_Y / 2],
      [0,0], 10,
      "yellow"
    );
  };

  Ship.inherits(A.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    if (_.all(this.vel, function(el) { return el === 0; })) {
      return null;
    };

    var x = this.vel[0];
    var y = this.vel[1];
    var speed = Math.sqrt((x * x) + (y * y));
    var dir = [(x / speed), (y / speed)];

    return (new A.Bullet(_.clone(this.pos), dir));
  };

})(this);