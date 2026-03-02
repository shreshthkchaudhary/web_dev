// curring

// function add(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d
//             }
//         }
//     }
// }

// let ans = add(1)(2)(3)(4);
// console.log(ans);


// let sum = (a) =>{
//     return (b) => {
//         return (c) => {
//             return (d) => {
//                 return a+b+c+d
//             }
//         }
//     }
// }

// let sum = (a) => (b) => (c) => (d) => a+b+c+d

console.log(sum(1)(2)(3)(4))