(function(root) {
  var A = root.A = (root.A || {});

  var Ship = A.Ship = function() {
    A.MovingObject.call(
      this,
      [A.Game.DIM_X / 2, A.Game.DIM_Y / 2],
      [0,1], 0, 10,
      "yellow"
    );
  };

  Ship.inherits(A.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.speed += impulse;
  };

  Ship.prototype.turn = function(angle) {
    // note that angle needs to be in radians...
    var x, y, xNew, yNew;

    x = this.dir[0];
    y = this.dir[1];

    xNew = x * Math.cos(angle) - y * Math.sin(angle);
    yNew = x * Math.sin(angle) + y * Math.cos(angle);

    this.dir = [xNew, yNew];
  };

  Ship.prototype.fireBullet = function() {
    return (new A.Bullet(_.clone(this.pos), this.dir));
  };

})(this);
