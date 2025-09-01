// class
// blueprint for creating object with shared properties and methods

// const user1 = {
//   name: "abc",
//   email: "abc@gmail.com",
//   password: "123456",
//   greet() {
//     console.log("Hello I am ", this.name);
//   },
//   getName() {
//     return this.name;
//   },
// };

// const user2 = {
//   name: "user2",
//   email: "abc@gmail.com",
//   password: "123456",
//   greet() {
//     console.log("Hello I am ", this);
//   },
//   getName() {
//     return this.name;
//   },
// };


// user2.greet()

//! suntax
class Class_name{
    constructor(){
        // initialization
    }
}

class User {
    name;
    email;
    #password;
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.#password = password
    }

    getName(){
        return this.name;
    }

    greet () {
        console.log('Hello I am ',this.name)
    }

}


// const user1 = new User('abc','abc@gmail.com','123456')
const user2 = new User('xyz','xyz@gmail.com','123456')




// console.log(user1)
// console.log(user2)
// console.log(user1.getName())
// console.log(user2.#password)
// user1.greet()

//* inheritance


//* student
// name email password, roll, section, faculty


class Student extends User {
    faculty;
    roll;
    section;
    constructor(name,email,password,faculty,section,roll){ 
        super(name,email,password) // * call parent constructor
        this.faculty = faculty;
        this.roll = roll ;
        this.section = section
    }

}

const stu1 = new Student('abc','abc@gmail.com','123456','BCT',"A",24)
// console.log(stu1.#pasword) //Private field '#pasword' must be declared in an enclosing class




//* static
class MathHelper {

    // 
    static add (a,b){
        return a + b
    }
      static mult (a,b){
        return a * b
    }
}


// const math = new MathHelper()

console.log(MathHelper.add(12,34))
console.log(MathHelper.mult(19,45))


// TODO:
//* 1. inheritance -> vehicle , car, bus
//* 2. class Account (inital_amt,acc_name)
// private amt, name
// methods
// deposit
// withdraw
// get balance
// get details