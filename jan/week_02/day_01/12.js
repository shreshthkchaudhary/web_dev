function HOF(callback){
    console.log(1);
    callback();
    console.log(2);

}


function greet(){
    console.log(3);
}

HOF(greet);