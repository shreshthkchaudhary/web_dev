// // Modern String use Method

// const a = "a"
// const b = "b"

// // old method:
// console.log(a+b+"c")

// // Modern method:
// console.log(`${a}${b}c`)



// const gameName = new String('abc')      

// // // String Operations :
// console.log(`
//     typeof : ${typeof gameName}
//     length : ${gameName.length}
//     toUpperCase() : ${gameName.toUpperCase()}
//     indexing[1] : ${gameName[1]}
//     charAt(2) : ${gameName.charAt(2)}
//     indexOf("a") : ${gameName.indexOf("a")}
//     substring(0,2) : ${gameName.substring(0,2)}
//     slice(0,2) : ${gameName.slice(0,2)}`)
//     // typeof : object
//     // length : 3
//     // toUpperCase() : ABC
//     // indexing[1] : b
//     // charAt(2) : c
//     // indexOf("a") : 0
//     // substring(0,2) : ab
//     // slice(0,2) : ab


// let b ='   asdf  '
// console.log(`
//     trim() : ${b.trim()}`)
    // // trim() : asdf


// let c ="0x0dummy0x0@gmail.com"
// console.log(`
//     replace("0x0","1x1") : ${c.replace("0x0","1x1")}
//     replaceAll("0x0","1x1") : ${c.replaceAll("0x0","1x1")}
//     includes("dummy")/("abc"): ${c.includes("dummy")} , ${c.includes("abc")}
//     split("x") : ${c.split("x")}`)
//     // replace("0x0","1x1") : 1x1dummy0x0@gmail.com
//     // replaceAll("0x0","1x1") : 1x1dummy1x1@gmail.com
//     // includes("dummy")/("abc"): true , false
//     // split("x") : 0,0dummy0,0@gmail.com