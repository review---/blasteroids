(function(root) {
  var A = root.A = (root.A || {});

  var Ship = A.Ship = function() {
    A.MovingObject.call(this, [A.Game.DIM_X / 2, A.Game.DIM_Y / 2], [0,0], 5, "pink");
  };

  Ship.inherits(A.MovingObject);

})(this);