// 7. Closures - function + its lexical scope of variables

function outer (){
    let count = 0;
    return function inner(){
        count++;
        console.log(count);

    }
}

let ans=outer;

ans()
ans()
ans()