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

  Ship.prototype.turnClockwise = function() {
    if (this.dir[0] === 0 && this.dir[1] === 1) {
      this.dir = [1,1];
    } else if (this.dir[0] === 1 && this.dir[1] === 1) {
      this.dir = [1,0];
    } else if (this.dir[0] === 1 && this.dir[1] === 0) {
      this.dir = [1,-1];
    } else if (this.dir[0] === 1 && this.dir[1] === -1) {
      this.dir = [0,-1]
    } else if (this.dir[0] === 0 && this.dir[1] === -1) {
      this.dir = [-1,-1]
    } else if (this.dir[0] === -1 && this.dir[1] === -1) {
      this.dir = [-1,0]
    } else if (this.dir[0] === -1 && this.dir[1] === 0) {
      this.dir = [-1,1]
    } else {
      this.dir = [0,1]
    };
  };

  Ship.prototype.turnCounterClockwise = function() {
    if (this.dir[0] === 0 && this.dir[1] === 1) {
      this.dir = [-1,1];
    } else if (this.dir[0] === -1 && this.dir[1] === 1) {
      this.dir = [-1,0];
    } else if (this.dir[0] === -1 && this.dir[1] === 0) {
      this.dir = [-1,-1];
    } else if (this.dir[0] === -1 && this.dir[1] === -1) {
      this.dir = [0,-1]
    } else if (this.dir[0] === 0 && this.dir[1] === -1) {
      this.dir = [1,-1]
    } else if (this.dir[0] === 1 && this.dir[1] === -1) {
      this.dir = [1,0]
    } else if (this.dir[0] === 1 && this.dir[1] === 0) {
      this.dir = [1,1]
    } else {
      this.dir = [0,1]
    };
  };

  Ship.prototype.fireBullet = function() {
    if (_.all(this.vel(), function(el) { return el === 0; })) {
      return null;
    };

    var x = this.vel()[0];
    var y = this.vel()[1];
    var speed = Math.sqrt((x * x) + (y * y));
    var dir = [(x / speed), (y / speed)];

    return (new A.Bullet(_.clone(this.pos), dir));
  };

})(this);
