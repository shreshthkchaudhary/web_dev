// let name1 ="ram";
// console.log(name1, typeof(name1));

// name1=10;
// console.log(name1, typeof(name1));

// name1 = true;
// console.log(name1, typeof(name1));


// Dynamically type 


// 3. Hoisting -


// // 1. in case of "var"
// console.log(n);
// var n="name";
// console.log(n);

// console.log(n);
// let n="name";
// console.log(n);

// // 2. in case of "function"
// hello();
// function hello(){
//     console.log("hello dev");
// }
// hello();

// // 3. in case of "arrow function"
// add();
// let add=()=>{
//     console.log("hello");
// }
// add()


// 4. Lexical Scope -


// hello()
// function hello(){
//     console.log(n);
//     console.log(id);

//     var n = "ram";
//     let id = 123;

//     if(true){
//         n = "radha"
//         console.log(n);
//         console.log(id);
//     }
//     console.log(n);
//     console.log(id);
// }


// hello()
// function hello(){
//     console.log(n);
//     console.log(id);

//     var n = "ram";

//     if(true){
//         let id = 123;
//         n = "radha"
//         console.log(n);
//         console.log(id);
//     }
//     console.log(n);
//     console.log(id);
// }


// hello()
// function hello(){
//     console.log(n);
//     console.log(id);

//     let id = 123;
    

//     if(true){
//         id = 1234;
//         var n = "ram";
//         console.log(n);
//         console.log(id);
//     }
//     console.log(n);
//     console.log(id);
// }


// hello()
// console.log(n);
// function hello(){
//     console.log(n);
//     var n="ram"
//     console.log(n);
// };


// 5. Execution Context -

console.log("start");
console.log(one());

function three(){
    return "Hello aspiring developers"
}

function one(){
    console.log(name);
    var name ="radhe radhe";
    three();
    return name;
    console.log(name);
}
console.log("mid");
two()

console.log("end");
one()

function two (){
    // console.log(age);   //error
    let age =25;
    console.log(three());
    console.log(age);
}

console.log(two());

// start

// undefined
// radhe radhe

// mid

// age is not defined
// 25

// end





