// // // console.log('hi')
// var a = 10;
// var a =20;
// a=30;
// var b = 'shreshth';

// let c = 20;


// in const we strictly can't change the variable
// const d = 30; 

// console.log(a,b,c,d);




// let x = 10;
// let y = "10";
// let z = 20;
// console.log(x==y)
// console.log(x===y)
// console.log(x=z)
// console.log(x>z)




// // if else if
// let a = 10;
// let b = 20;
// if (a >= b) {
//     console.log("a<=b");
// } else if (a < b) {
//     console.log("a>b");
// }







// // functions 1

// function sum(a,b) {
//     console.log(a+b)
// }

// // let a = 10;
// // let b = 20;
// sum(20,30)


// // functions 2

// let x = function() {
//     console.log('this is function expression')
// }
// console.log(x)
// x()



// // functions 3

// let x = ()=> {
//     console.log('this is arrow function');
// }

// console.log(x)
// x()



// // // functions 4

// // callback function
// function panner() {
//     console.log('panner lene jana h')
// }

// // higher order functiom
// function sabji(x) {
//     x()
//     console.log('paneer ki sabji banani he')
// }

// sabji(panner)



// // // functions 5

// function parent() {
//     function child() {
//         console.log('this is child function....')

//     }
//     return child()
// }

// let x = parent()
// console.log(x)



// // // functions 6

// function parent() {
//     let y=10;
//     let x=20;
//     console.log(y)
//     function child() {
//         console.log(x)
//     }
//     return child
// }

// let x = parent()
// x()
// // console.log(x)




// alert ('NAAM TO SUNA HI HOGA CHULBUL PANDE');





// let arr1 =[7,1,2,3,4,5,6];
// console.log(arr1)

// // // to arrange values in array in Ascending format

// arr1.sort()
// console.log(arr1)

// // // to arrange values in array in Descending format

// arr1.reverse()
// console.log(arr1)

// // to add item in array

// arr1.push(100,"string")
// console.log(arr1)

// // to remove item in array

// arr1.pop("string")
// console.log(arr1)

// // to add item in array from infront

// arr1.unshift(100,"string")
// console.log(arr1)

// // to remove item in array from infront

// arr1.shift(100)
// console.log(arr1)

// // to add item in array from infront

// arr1.slice(100,"string")
// console.log(arr1)





// // // map method: Applies function to every element to array and return new array

// let array = [1,2,3,4,5,6]

// function sum(element){
//     return element+10
// }

// // console.log(sum(10))
// let new_array = array.map(sum)
// console.log(new_array)



// // // filter
// let array = [1,2,3,4,5];

// function filterElement(element){
//     return(element%2 == 0)
// }

// let new_array = array.filter(filterElement)
// console.log(new_array)



// // // // reduce
// let array = [1,2,3,4,5];
// function totalValue(acc,crr){
//     return acc+crr
// }

// let x=array.reduce(totalValue,0)
// console.log(x)




// let array = [1,2,3,4,5]

// array.splice(2,0,100)
// array.splice(3,0,90)

// console.log(array)



// let person1 ={
//     name : 'Sejal',
//     age : 24,
//     gender : 'Female'
// }
// let person2 ={
//     name : 'Kunal',
//     age : 24,
//     gender : 'Male'
// }
// let person3 ={
//     name : 'Muskan',
//     age : 24,
//     gender : 'Female'
// }




// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.gender)
// console.log(person2.name)
// console.log(person2.age)
// console.log(person2.gender)
// console.log(person3.name)
// console.log(person3.age)
// console.log(person3.gender)

// console.log(person3)



// // // changing value of key
// person3.age=10
// // deleting key
// delete person3.gender


// // // now person4 will use keys of person2 but not create it's own
// let person4 = person2
// person4.age=20
// console.log(person2)
// console.log(person4)


// // // now person4 will not use keys of person2 but it will create it's own
// let person4 = {...person2}
// person4.age=20
// console.log(person2)
// console.log(person4)



// function fun(){
//     // let x=20;

//     let employee = {
//         name:'Ankit',
//         age:45
//     }
//     return employee
// }

// // console.log(fun())
// let value = fun()
// console.log(value)

console.log("ram"&&"shyam")