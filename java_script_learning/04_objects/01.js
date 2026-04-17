// Object can be declared using two method Literals and Constructor:

// Singleton
// Constructor makes Singleton
// Literals don't make Singleton

// // object Constructor:
// Object.create


// object Literals:
let sym=Symbol("s1")    // This is how to Declare symbol
const o1={
    n:"name",
    r:11,
    "city":"up",
    [sym]:"hi"  // This is how to use symbol

}
// console.log(o1)
// // { n: 'name', r: 11 }
// console.log(o1.n)
// // name
// console.log(o1["r"])
// // 11
// console.log(o1[sym])    //  This is how to access symbol Wake me up
// // hi
// console.log(o1["city"])
// console.log(o1.city)
// // up

// o1.city="uk"
// console.log(o1["city"])
// // uk

// Object.freeze(o1)   //  This freezes the above object and no changes will be applied after this
// o1.city="bihar"
// console.log(o1["city"])
// // uk
// console.log(o1)
// // { n: 'name', r: 11, city: 'uk', Symbol(s1): 'hi' }


// o1.f1 = function(){
//     console.log("f1 is on")
// }
// console.log(o1.f1)
// // [Function (anonymous)]
// console.log(o1.f1())
// // f1 is on
// // undefined

// o1.f2 = function(){
//     console.log(`f2 is on, ${this.n}`)
// }
// console.log(o1.f2())
// // f2 is on, name
// // undefined