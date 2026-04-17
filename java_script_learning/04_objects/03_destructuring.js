//  Destructuring:
let o1={
    abcd:1,
    bcde:2,
    cdef:3
}
let {abcd}=o1   //  Now using key we can directly access key and value from object
console.log(abcd)
// 1
let {abcd:a}=o1 //  Destructuring: Now using short key we can directly access key and value from object 
console.log(a)
// 1