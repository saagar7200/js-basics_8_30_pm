//* control flow
// -> order in wich instructions in program are executed
// js -> top to bottom & left to right


//* control statements
// ? 1. sequential -> default
// ? 2. conditionals -> 
// ? 3. looping (iteration ) -> 

// * sequential 
// console.log('first statement')
// console.log('2nd statement')
// console.log('3rd statement')

// * conditionals 
// ? if statement

const age = 17


// console.log('first statement')
if(age >=18){

    console.log('you can vote')
}
// console.log('3rd statement')

//? if... else
if(age >=18){

    console.log('you can vote')
}else{
    console.log('you can not vote')

}


// if... else.if....else

    const mark = 59

    if(mark >=90 ){
        console.log('Grade A')
    }else if(mark >=60){
            console.log('Grade B')
    }else{
        console.log("Grade C")
    }


// truthy and falsy values
// falsy 
// 0 ,-0 , false , enpty string('') , null , undifined , NAN

// thruthy
// 1,2,3 , true , non_empty_string , {} , []

const num = '0'

// if([]){
//     console.log('truthy value')
// }

// * switch case

const day = 7

// switch(day){
//     case 1 : 
//         console.log('sunday')
//         break;
//     case 2:
//         console.log('Monday')
//         break;
//     case 3: 
//         console.log('Tuesday')
//         break;
//     default :
//         console.log('enter day between 1-3')
// }

switch(day){
    case 1 :
    case 7 : {
        console.log('weekend')
        break;
    }
    case 2:
    case 3: 
    case 4: 
    case 5: 
    case 6:{
        console.log('work day')
        break;
    } 
    default :
        console.log('enter day between 1-7')
}







