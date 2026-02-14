//15. Array Higher Order Function Methods

// a) map()

// let arr = [1, 2, 3, 4, 5];

// arr.map((el,i,arr)=>{
// console.log(el,i,arr);

// })

// let ans = arr.map((el)=>{
//     return el+6
// })
// console.log(ans);


// b) filter()

// let arr = [1, 2, 3, 4, 5];

// let ans = arr.filter((el)=>el%2==1)

// console.log(ans);


// c) sort()


// let arr = [10,5,20,25,30];

// let ans = arr.sort((b,a)=>a-b)

// console.log(ans);




// d) reduce() -> return single data type value


let arr = [1,2,3,4,5];

let ans = arr.reduce((acc,el)=>{
    return acc+el
},"")

console.log(ans);



// let arr = ["h","e","l","l","o"];

// let bag = "";

// for(let i=0;i<arr.length;i++){
//     bag+=arr[i]
// }

// console.log(bag);





// e) forEach()





// f) includes()

// let arr = [1,2,3,4,5];