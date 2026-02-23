let a = document.querySelector("#bt1");
// a.onclick = () => {
//     console.log('here');
//     let a=0;
//     a++
//     console.log(a)
// }

// let b = document.querySelector("#bt2");
// b.ondblclick = () => {
//     console.log('here here');
// }

// let c = document.querySelector("div");
// c.onmouseover = () =>{
//     // style.backgroundColor="black";
//     console.log('hi')
// }


// event listeners
// while using event name in this we remove on form event name like onclick becomes click
a.addEventListener("dblclick",(event) =>{
    console.log("button 1 on going")
    // console.log(event.clientY)
})
let b = document.querySelector("#bt2");
b.addEventListener("click",()=>{
    console.log("button 2")
})

b.removeEventListener("click")
