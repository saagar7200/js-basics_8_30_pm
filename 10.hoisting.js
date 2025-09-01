// var a;
// var b;
// * hoisting
// js default behavior  -> of moving all vaiables and function declaration to the top of the scope
// 1. declaration
// 2. initialization

// console.log(a) //undefined


//  a = 10; 

// console.log(a) // 10

//  b = 40


// b = 50

// Memory creation phase (context creation phase) -> js scans the code and stores fuction and variable declaration in memory
// a -> undefined -> 10
// b -> 50
// let d -> <empty> ->  40 -> 
//  sayHello :() {
//     console.log('Hello')
// }
 // execution phase

// * variable hoisting

// ? var

console.log(c)
var c = 100
// var -> hoisted -> but initialized as undefined

//  var c
// console.log(c) // undefined
//  c = 100

// ? let & const (TDZ (temporal dead zone))

// console.log(d)

let d = 40
console.log(d)



const e = 400
console.log(e)

//* let & const -> hoisted but in TDZ 


// ? function declaration

sayHello() // Hello

function sayHello () {
    console.log('Hello')
}




// ? function expression

console.log(typeof sayHi)
sayHi() // undefined()

// 2()


var sayHi = function(){
    


    console.log('Hi')
}

var x = 20

// 






