    // localStorage.setItem("hobby",JSON.stringify([1,2,3]))

    // let bb = JSON.parse(localStorage.getItem("hobby"));
    // console.log(bb, typeof bb);

    // localStorage.setItem("obj",JSON.stringify({a:1}))

    // let(a1)=JSON.parse(localStorage.getItem("obj"));
    // console.log(a1);


let obj ={a:1}

console.log(obj, typeof obj);

let jsondata=JSON.stringify(obj);

console.log(jsondata, typeof jsondata);

let jsagain =JSON.parse(jsondata);
 
console.log(jsagain, typeof jsagain);