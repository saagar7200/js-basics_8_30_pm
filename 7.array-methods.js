// 

// push pop shift unshift splice -> mutating

const numbers = [23,4,5,6,22,76,10,11]

// copying
// non mutating
// 1. slice
const newArr = numbers.slice(2,4)
// console.log(newArr)
// console.log(numbers)


// 2.concat 
// merge  arrays

const mergerd = numbers.concat(newArr)
// console.log(mergerd)


// Searching & checking

// * 1. indexOf()
// console.log(numbers.indexOf(76)) // index of 76 -> 4
// console.log(numbers.indexOf(760)) // -1

//* 2 lastIndexOf()
// console.log(numbers.indexOf(4))
// console.log(numbers.lastIndexOf(4))


// * includes() -> return boolean 
// console.log(numbers.includes(40))




// 



// find -> higher order function

const res = numbers.find((value,index,array) =>  value < 10 )
const index = numbers.findIndex(function(value,index,array){
    return value < 10

})

console.log(res,index)

// const numbers = [23,4,5,6,76,98,4,65]

// loop
// * forEach -> loop through array -> does not return any value
// const res = numbers.forEach((value,index,array)=>{
//     console.log(value,index,array)
//     numbers[index] = value * 2
//     // return value

// })

// console.log(res)
// console.log(numbers)

//! tranformation
// non mutating

// * map()
const doubledArr =  numbers.map((value,index,array) => 'x')
// console.log(numbers)
// console.log(doubledArr)


// * filter(callback)

// const filtered = numbers.filter(function(value){
//     return value > 10
// })

// const filter = numbers.filter((value) => value > 10)
console.log(numbers)

// console.log(filtered)
// console.log(filter)


// * reduce(callback,initial_value)
// reduce array to a single value

const total_sum = numbers.reduce((acc,value) => {

     return acc+=value
},0)

console.log(total_sum)






let x = 10

console.log(x)

const users = ['ram','hari','sita','gita']

// * sort
// mutating
// users.sort()
// const numbers = [23,4,5,6,22,76,10,11] -> [4,5,6,22,10,11,23,76]
// 23,4
// +ve -> swap
// -ve -> no swap
// 0  -> no swap
// numbers.sort((a,b)=> a-b)
// numbers.sort((a,b)=> a - b)
// console.log(numbers)

// reverse
// users.reverse()
// console.log(users)





