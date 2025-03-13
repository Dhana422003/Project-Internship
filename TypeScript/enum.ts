enum Direction{
    left,
    right,
    top,
    bottom,
}
function move(direction){
console.log(`moving ${Direction[direction].toLowerCase()}`)
}
move(Direction.left)