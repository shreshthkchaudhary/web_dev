// 6. Timer

// runs only once after delay(ms)
// setTimeout(()=>{
//     console.log("Hello developers");
// },2000)

// runs in loop
setInterval(()=>{
    console.log("Hello developers");
},0)


console.log("Start")
setTimeout(()=>{
    console.log("Hello1 developers");
},0)
console.log("End")

// event loop is a fundamental mechanical that helps javascript to perform asyncronus operation while maintaining a syncronus programming language.