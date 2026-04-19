// // this:

// const o1={
//     id:123,
//     name:"shreshth",
//     message:function(){
//         console.log(`Welcome ${this.name}`)
//     }
// }
// o1.message()
// // Welcome shreshth
// o1.name="ishu"
// o1.message()
// // Welcome ishu


// console.log(this)   //  This returns an empty object
// // {}
// // If we do this in browser we'll get global Object window
// // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}


// function f1(){
//     console.log(this)
//     // Object [global]{....}
// }
// f1()




// //  Arrow function:
// f2 = () => {
//     console.log(this)
//     // {}
// }
// f2()

// f3 = (n1,n2)=>{
//     return n1+n2
// }
// console.log(f3(2,4))
// // 6



// // Implicit return:
// // let f4 = (n1,n2) => (n1+n2)
// let f4 = (n1,n2) => n1+n2   //  If we use curly bracket then we have to use return If we dont use curly bracket then there is No necessary use return
// console.log(f4(5,4))
// // 9



// // When we need to return Object:
// let f5 =(n1,n2) => {a:1}
// console.log(f5(1,1))
// // undefined
// let f6 =(n1,n2) => ({a:1})
// console.log(f6(1,1))
// // { a: 1 }