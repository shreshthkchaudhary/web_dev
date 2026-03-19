// Callback

// function sum(a,b) {
//     console.log(a+b);
// }
// function calc (a,b, sumCallback) {
//     sumCallback(a,b);
// }

// calc(1,2,sum)


// Nesting

// for(let i=0; i<5; i++) {
//     let str ="";
//     for (let j=0; j<5; j++){
//         str = str + j;
//     }
//     console.log(i, str);
// }


// Callback Hell - Nested Callback

// function getData(dataID,getNextData){
//     setTimeout(()=>{
//         console.log("Data",dataID);
//         if (getNextData) {
//             getNextData();
//         }
//     },500);
// }

// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4)
//         });
//     });
// });


// Promises

// let promise = new Promise((resolve, reject)=>{
//     console.log("i am ")
//     // resolve(123);
//     reject(321);
// })

// function getData(dataID,getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             // console.log("Data",dataID);
//             // resolve("success");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         },500);
//     });
// }


const getPromise=() => {
    return new Promise((resolve, reject)=>{
        console.log("i am ")
        resolve(123);
        // reject(321);
    })
}

let promise = getPromise();
promise.then(()=>{
    console.log("promise fulfilled");
});
