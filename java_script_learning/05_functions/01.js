// // Function

// function f1(a){ //  Here a is known as Parameter: When we define
//     console.log(a)
// }
// f1("a") //  Here "a" is known as Argument: When we call
// // a



// function sum1(x,y){
//     console.log(x+y)
// }
// sum1(1,2)
// // 3
// console.log(sum1(1,2))  //  Undefined because Function is not ruturning anything
// // undefined



// function sum2(x,y){
//     return x+y
// }
// console.log(sum2(1,2))
// // 3



// function f1(a){
//     return `${a} is live`
// }
// f1("ishu")  //  Nothing will print because we haven't console.log anywhere
// console.log(f1("ishu"))
// // ishu is live



// function n(name){
//     return `${name} is live`
// }
// console.log(n("shreshth"))
// // shreshth is live
// console.log(n())
// // undefined is live

// function n1(name){
//     // if(name===undefined){    //  Multiple ways to apply If statement
//     // if(name==undefined){
//     if(!name){
//         console.log(`Please enter name`)
//         return
//     }
//     return `${name} is live`
// }
// console.log(n1("shreshth"))
// // shreshth is live
// console.log(n1())
// // Please enter name
// // undefined