// function f(shouldInitialize: boolean) {
//   if (shouldInitialize) {
//     var x = 10;
//   }

//   return x;
// }

// console.log(f(true)); // returns '10'
// console.log(f(false)); // returns 'undefined'

// ---

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}
