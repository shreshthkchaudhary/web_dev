// // Scope: {}


// //  These are declared in Global Scope
// var a = 0
// let b = 1
// const c = 2
// console.log(a,b,c)
// // 0 1 2

// if(true){
//     //  These are declared in Block Scope
//     var a = 9   //  Var don't care about Scope That's why we use LET and CONST
//     let b = 3
//     const c = 4
//     console.log(a,b,c)
//     // 9 3 4
// }

// console.log(a,b,c)
// // 9 1 2



// // Scope in Nested function:

// let c = 3
// function f1(){
//     let a = 1
//     console.log(a,c)    //  c can be accessed because c is declared in Global Scope
//     // 1 3
//     function f2 (){
//         let b = 2
//         console.log(a,b,c)    //  a and c can be accessed because a and c is declared in Global Scope of f2
//         // 1 2 3
//     }
//     f2()
//     // console.log(a,b,c)    //  Can't access b because a is in Scope{}
//     // // b is not defined
// }
// f1()
// // console.log(a,b,c)    //  Can't access a because a is in Scope{}
// // // a is not defined

// // // Child function can access elements from parent function but parent function Can't access elements from child Function !!




// // Expression: When a function is stored In a variable
// let f1 = function (n){
//     return n
// }
// console.log(f1("Expression"))
// // Expression


// // Hosting:

// console.log(f2("Hosting1")) //  It don't matters where the function is declared A function can be called anywhere Even before Declaring it
// // Hosting1
// function f2 (n){
//     return n
// }
// console.log(f2("Hosting2"))
// // Hosting2


// // console.log(f1("Expression"))    //   Hosting don't works when the function is stored in a variable
// // // Cannot access 'f1' before initialization
// let f1 = function (n){
//     return n
// }
// console.log(f1("Expression"))
// // Expression