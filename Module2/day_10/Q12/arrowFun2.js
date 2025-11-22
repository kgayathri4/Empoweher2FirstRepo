// Arrow function that returns square and cube using implicit return
const sqrCube = n => ({ square: n * n, cube: n * n * n });

// Example input
let num = 5;

// Example output
console.log(sqrCube(num));