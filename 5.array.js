// let time1 = 10
// let time2 = 20

// let user1 = 'alice'
// let user2 = 'john'

// let persons ={

// }

// let person1 ={
    
// }

//* array -> special type os variable that can store multiple vlues in single place/variable -> number indexed (0 indexed)

// * key points
// 1. ordered -> position of elements matters
// 2. indexed -> each value/ element has a numeric key ->  stating from 0
// 3. flexible -> can hold any types of values (mixed) -> stirng, num, object , bool ....

//! creating Array 

// 2 ways 
//? 1. array literal []

const numbers = [1,2,40,50,56,57]

// ? 2. Array constructor:

// const arr = new Array(1,2,3,4,5,6)

console.log(numbers)


// Index -> 


//! accessing arrray elements:
const firstEl = numbers[0]
// console.log("first",firstEl)
// console.log("2nd",numbers[1])

//? Modify
// * change on spacific index
numbers[2] = 200

// console.log(numbers)


//! length
console.log(numbers.length)
// console.log("last el",numbers[numbers.length - 1])



// ! adding & removing elements

// * from end index
// ? add
// array.push()
// const pushRet = numbers.push(12,67)
// console.log(pushRet)

// ? remove
// array.pop()

// const latEl =  numbers.pop()
// console.log(latEl)


// * from start 
// ? add 
// array.unshift()
// numbers.unshift(87,98)
// numbers[0] = 87

// * remove
// array.shift()
// console.log(numbers.shift())
// delete numbers[0]

console.log(numbers)

//TODO: array methods

//* mutating
// splice(start_index , delete_count, item1, item2 ,...itemn)

// numbers.splice(2,3,987,64)



console.log(numbers)
