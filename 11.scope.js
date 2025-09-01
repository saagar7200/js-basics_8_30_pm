// ! Scope

// * Types of scope
// ? 1. Global scope
//  -> variables declared outside of any function or block
let GOBAL_LET = "global let";
var GOBAL_VAR = "global var";
const GOBAL_CONST = "global const";
let outer_var = "I am outer";

// console.log(GOBAL_LET)
// console.log(GOBAL_CONST)
// console.log(GOBAL_VAR)

//? 2.  function scope
function scope() {
  var function_var = "function var";
  const function_const = "function const";
  let function_let = "function let";

  console.log("----function---");
  // console.log(function_const)
  // console.log(function_let)
  // console.log(function_var)

  // console.log(GOBAL_LET)
  // console.log(GOBAL_CONST)
  // console.log(GOBAL_VAR)
}

scope();

// console.log("----global---");
// console.log(function_var)

// ? 3.  block scope

if (true) {
  console.log("----block---");

  var block_var = "block var";
  const block_const = "block const";
  let block_let = "block let";

  // console.log(block_const)
  // console.log(block_let)
  // console.log(block_var)

  // console.log(GOBAL_LET)
  // console.log(GOBAL_CONST)
  // console.log(GOBAL_VAR)
}

console.log("----global---");
// console.log(block_var)

// var ->function scope
// let & const -> block scope

// ? 4. Lexical scope

function outer() {
  let outer_var = "I am outer inner";
//   console.log(outer_var);
  // console.log(inner_var)

  function inner() {
    let inner_var = "I am inner";

    console.log(outer_var);
    console.log(inner_var);
  }

  inner();
}

outer();

//     x = 10
function abc() {
    let x = 0;
    let add = true;
    let double = true;
    
    if (add) {
    // modify change -> x + 10
    x += 10;

    if (double) {
      x *= 2;
      // modify x -> * 2
    }
  }

  // print x;
  console.log(x);
}
abc();

// module
