let module1 = require("./module1");
let module2 = require("./module2");
let unique = require("uniq");

console.log(module1.data,module1.demo);
module1.getData();

console.log(module2.age);
console.log(unique([3,2,1,9,3,7,6,1,3,5,8]));
