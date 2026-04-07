// const name = require("./operations")

// console.log(name(5,9))
// console.log(name.add(5,10))

// Destructuring
const {addition:sum, sub} = require("./operation")

console.log(sum(5,6))
console.log(sub(5,6))
// console.log(mul(5,6))
// console.log(divide(5,6))