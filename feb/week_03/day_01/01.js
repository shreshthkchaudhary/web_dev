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