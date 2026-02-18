// 7. Event Loop

console.log("Start");
setInterval(()=>{
console.log(three())
},15000)

console.log("Mid");

setTimeout(()=>{
    two()
},10000)

function one(){
    console.log(name);
    var name="rahul";
    three();
    return "ram"
}

function three(){
    return "hello developers"
}

setTimeout(()=>{
    one()
},5000)

console.log("End");

function two (){
    console.log("error");
    console.log(three());
    let age = 25;

}



// start
// mid
// end
// undefined
