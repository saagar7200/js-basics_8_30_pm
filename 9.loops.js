//* 3. looping control statements

// a. while loop 
// while(condition){
    // task
// }


let i = 8
//? while loop
while(i <=7){

    console.log('while',i)

    i++    

}

//? do-while loop

// syntax
// do{
    // loop body
// }while(condition)

do{
    console.log('do-while',i)
    i++

}while(i<=7)




//? for loop

// syntax
// for(let i = 0 ; condition , update/increment){
//     body
// }


// for(let i = 1; i<= 7; i++){
//     console.log(i)
// }


// for..of loop
// loop through values of iterables (arr,string)
const arr = [23,54,75,68,90]
const str = 'hello word!'

// for(let value of arr){
//     console.log(value)
// }
// for(let char of str){
//     console.log(char)
// }



// for...in
// 
const person = {
    name:'abc',
    email:'abc@gmail.com',
    age:29
}

// for(let key in person){
//     console.log(key)

// }



// ! Jump statements 
// to control loops


// 1. break / return

console.log('break')

for(let i = 1; i<= 10; i++){
    console.log(i)

    if(i === 5){
        break;
    }

}




// 2. continue
console.log('continue')
for(let i = 1; i<= 10; i++){
    
    if(i % 2 === 0){
        continue;
    }
    console.log(i)

}

// print odd numbers between 1-10 




