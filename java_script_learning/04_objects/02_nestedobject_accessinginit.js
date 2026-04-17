// const o1 = Object();
// const o2 = {};
// console.log(o1,o2);
// // {} {}



// //  Nested object:
// let o1 = {
//     id:123,
//     fullname:{
//         firstname:"shreshth",
//         lastname:"chaudhary"
//     }
// }
// console.log(o1)
// // { id: 123, fullname: { firstname: 'shreshth', lastname: 'chaudhary' } }
// console.log(o1.fullname.firstname)
// // shreshth
// console.log(o1.firstname)   //  Can't directly access The Nested Object
// // undefined



// // Combining Multiple objects in one object:
// let o1={
//     1:"a",
//     2:"b"
// }
// let o2={
//     3:"c",
//     4:"d"
// }
// let o3 = Object.assign({},o1,o2)
// console.log(o3)
// // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// let o4 = {...o1, ...o2}
// console.log(o4)
// // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



// //  Accessing Object Inside list:
// let o1=[{1:"a",2:"b"},{1:"a",2:"b"},{1:"a",2:"b"}]
// console.log(o1[1][2])
// // b



// //  Accessing keys and values & entries:
// let o1 = {
//     a:1,
//     b:2,
//     c:3
// }
// //  Object.keys and Object.values always give Array
// console.log(Object.keys(o1))
// // [ 'a', 'b', 'c' ]
// console.log(Object.values(o1))
// // [ 1, 2, 3 ]
// //  Object.entries always gives array in array
// console.log(Object.entries(o1))
// // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]