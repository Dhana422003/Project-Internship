var Direction;
(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["top"] = 2] = "top";
    Direction[Direction["bottom"] = 3] = "bottom";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("moving ".concat(Direction[direction].toLowerCase()));
}
move(Direction.left);
