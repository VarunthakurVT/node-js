var xorshift = require('xorshift');

for (var i = 0; i < 10; i++) {
  console.log(xorshift.random()); // number in range [0, 1)
}