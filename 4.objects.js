// name email password
// let name = ''
// let email = ''
// let password = ''


// non primitive [object, array, function]

// let user = {
//     name: 'alice',
//     email: 'alice@gmail.com',
//     passwoard:'123456',
//     age:32
// }

//* why to use  -> help to write  organized , readble, scalable code


// ? how to create object
//* 1. object literal  (most common way) -> {}
let user = {
    email: 'alice@gmail.com',
    password:'123456',
}



// new Object() constructor

let car = new Object()

//? 1. assigning properties
//* a. dot notation
user.name = 'Alice'
// car.brand  = 'Toyota'
//* b. bracket notation
user['age'] = 29
// car['year'] = 2021

// ? 2. Accessing Properties
// * a. dot
// const name = user.name
// console.log(user.name)
// * b. bracket
// const password = user['passwoard']

// console.log(user['passwoard'])

// console.log(user)

// dynamic key

let key = 'email'
// console.log(user.key) // undefined
// console.log(user[key]) //alice@gmail.com

// space
// console.log(user["user password"]) 



// ? 3.modifying properties
user.email = 'abc@gmail.com'



// console.log(user)
//? 4. deleting

delete user.password;



let user1 = {
    email: 'alice@gmail.com',
    password:'123456',
    address:{
        district:'Kathmandu',
        state:'Bagmati'
    }
}

console.log(user1.email)

console.log(user1.address.district)
// console.log(user1.address?.district)
console.log(user1['address']['state'])




// Methods [funtions inside object]

let x = 10 

// let objWithMethod = {
//     name:'Charlie',
//     greet:function(){
//             console.log("hello world")
//     }
// }

// console.log(x)

// x = 20


// console.log(x)

// objWithMethod.greet()

// objWithMethod.greet = function (){
//     console.log('hi')
// }

// objWithMethod.greet()



// Object()
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))



