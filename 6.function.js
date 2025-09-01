// * block of code  -> design to perform a specific task
//* allow to reuse code (logic)
//  {

//  }


// to define a fuction 
//  use -> fuction keyword

// * ssyntax
// function function_name (){
   // function body
// }

console.log("first")


//* 1. function definition -> writing code
function greet (){
    console.log('Hello world')
}

//* 2.calling a function -> executing code
// function_name()

console.log("second")


// greet()

// ? Parameter & argument

function greetUser (name){
    console.log('hello ',name)
}

// greetUser('Ram')

// arg -> Ram
// parameter -> name

// * multiple parameters
function add(a,b){
    // console.log(a)
    // console.log(b)
    console.log(a + b)
}


// add(12,34)
// add(120,4)

// ? return statement
//! return keyword

function multiply (a,b){
    // console.log(a * b)
    const result = a * b;
    return result
}


// const result =  12 * 4
// const result =  multiply(12,4)
// console.log("result",result)


// const result3 =  multiply(54,2)

// console.log("result",result3)



// ! Types of functions

// ? 1. Function Declaration
function greetUser (name){
    console.log('hello ',name)
}

//? 2. Function Expression

// const x = 20 + 2

// const sayHi =  function  (name){
//     console.log("hi "+ name)
// }

// sayHi('John')



//? 3. arrow function
// const diff =  (a,b) => {
//         console.log(a - b)
// }

// diff(10,4)
// const diff =  (a,b) =>  a - b;

// console.log(diff(100,80))




// default parameters

const diff =  (a,b=0) => {
        console.log(a - b)
}

// diff(12,5)
// diff(12)

const sayHi =  function  (name='Guest'){
    console.log("hi "+ name)
}

// sayHi()
// sayHi('John')


// * callback function



function parentFunc (callback){

    callback()
  

}


// function parentFunc2 (){

//     return () =>{
//         console.log('returned func')
//     }

// }

function child (){
    console.log('Hello from children')
}


parentFunc(child)



parentFunc(() =>{
    console.log('Hello World')
})


// HOF
// ->  function that takes fuction as input or return fuction or both




