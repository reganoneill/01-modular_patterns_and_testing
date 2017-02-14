'use strict';

module.exports = {};

//original solution - works!
// module.exports.greet = function(name){
//   return `hello ${name}`;
// };

//bonus solution - works!
// module.exports.greet = function(){
//   console.log(`hello ${process.argv[2]}`);
// };

//original + bonus solution combined - works!
module.exports.greet = function(name){
  if (process.argv[2]){
    console.log(`hello ${process.argv[2]}`);
    return `hello ${process.argv[2]}`;
  } else {
    console.log(`hello ${name}`);
    return `hello ${name}`;
  }
};
