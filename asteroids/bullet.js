(function(root) {
  var A = root.A = (root.A || {});


  var Bullet = A.Bullet = function(pos, dir) {
    var SPEED = 30;
    var vel = [dir[0] * SPEED , dir[1] * SPEED];
    A.MovingObject.call(this, pos, vel, 4, "");
  };

  Bullet.inherits(A.MovingObject);

})(this);