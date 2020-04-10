function createSquare(config) {
  var newSquare = { color: "white", area: 100 };
  if (config.test) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.test;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

var mySquare = createSquare({ p1: 1, color: "black" });

console.log(mySquare);
