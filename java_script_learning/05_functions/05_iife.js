// //  Immediately Invoked Function Expression (IIFE):

// (function (){
//     console.log("IIFE, I run immediately!")
// })();
// // IIFE, I run immediately!

// (() => {
//     console.log("IIFE, Also runs immediately!")
// })();
// // IIFE, Also runs immediately!


// // Giving Parameters and Arguments:
// ((id)=>{
//     console.log(`${id} is my id`)
// })(123);
// // 123 is my id


// // Named IIFE
// (function f1(){
//     console.log("Named IIFE, I run immediately!")
// })();
// // Named IIFE, I run immediately!


// // // ()() //  First parenthesis is where we write the definition of function And second parenthesis calls that function.
// // Why Use It?
// // 1. Avoid polluting the global scope
// // 2. Create a private scope
// // Variables inside an IIFE are isolated — they can't clash with other code or libraries.
// // One-line summary: IIFE = define a function + call it immediately, mainly to create a private, isolated scope.