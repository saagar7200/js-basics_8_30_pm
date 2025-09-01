//? operators 
//* symbols or keywords used to perform operations on values or variables

// ! 1. Arithmetic 
// *  ->     + , - , * , ** (exponential), /, % , ++ (increment) , -- (decrement)

// console.log(10 + 20)
let a = 10
let b = 100
let c = a - b

// console.log(++a) // 11
// console.log(a++) // 11

// a++  // => a = a + 1
// ++a  // => a = a + 1

// console.log(a) // 12

// console.log(c)
// console.log(2 ** 10)
// console.log(10 % 2)



// ! 2. Assignment operators
// used to assign values to variables
//  = , += ,-+ ,/=, *= ...

let d = 'hello'
let e = d

// console.log(d,e)

let f = 12
let g = 20
 
 f += 10 // f = f + 1
 f += g // f = f + 1
//  console.log(f)


//! 3. Comparision op.
// used to compare to variables


// == (loose) , !=
// console.log( 5 == '5')
// console.log( 5 != '5')

// === (strict) ,!==
// console.log( 5 === '5')
// console.log( 5 !== '5')

// > < >= <=

// console.log(19 <= 17)



// ! 4.  logical op


//* And  (&&) -> 
// a && b -> true && ture => true
// a && b -> true && false => false
// a && b -> false && true => false
// a && b -> false && false => false

// console.log( true && false) 


//* or  (||)
// a || b -> true || ture => true
// a || b -> true || false => true
// a || b -> false || true => true
// a || b -> false || false => false

let h = false
let i = true
// console.log(h || i)

//* not (!)
// negation
// console.log(!h)
// console.log(!i)


// ! 5. tyoeof op.

console.log(typeof h === 'boolean')
console.log(typeof d)
console.log(typeof a)



//!6. string operators

// console.log("hello" + ' ' + "world")
let x = 'hello'
x += '!'

// console.log(x)

// bitwise 
// and ( & ) , or (|) , xor (^)
// console.log(5 & 1)



//! type coercion
// process of automatic ot implicit converting one types of data to another

let j = 10
let k = '10'

// console.log(j + k)

// explicit
// String() , Number() , Boolean()
// console.log(Number(j) + Number(k))













