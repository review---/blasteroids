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
    this.dir = this.rotate(this.dir, angle);
  };

  Ship.prototype.fireBullet = function() {
    return (new A.Bullet(_.clone(this.pos), this.dir));
  };

  Ship.prototype.draw = function(ctx) {
    var frontX, frontY;

    frontX = this.pos[0] + this.dir[0] * this.radius;
    frontY = this.pos[1] + this.dir[1] * this.radius;

    backDir1 = this.rotate(this.dir, ((5 * Math.PI)/6))
    backX1 = this.pos[0] + backDir1[0] * this.radius;
    backY1 = this.pos[1] + backDir1[1] * this.radius;

    backDir2 = this.rotate(this.dir, ((-5 * Math.PI)/6))
    backX2 = this.pos[0] + backDir2[0] * this.radius;
    backY2 = this.pos[1] + backDir2[1] * this.radius;


    ctx.moveTo(frontX, frontY);
    ctx.lineTo(backX1, backY1);
    ctx.lineTo(backX2, backY2);
    ctx.lineTo(frontX, frontY);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'turquoise';

    ctx.stroke();
    ctx.closePath();
  };

})(this);
