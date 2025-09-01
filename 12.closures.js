//* closure
// a closure is formed when a function remembers the variables from its outer scope/function even outer function executed.

const func1 = (name) => {
  let x = 30;
  console.log("func1");
};

let c = 10 + 20;

const func12 = () => {
  console.log("func12");
};

func1("abc");
func12();
func1("xyz");

// EC
// GEC
// stack

const outer = (name) => {
  let outer_var = "hello from outer";

  const inner = () => {
    console.log(outer_var);
  };

  // inner()
  return inner;
};

const sum = outer();
// console.log(sum)
// sum();

// function
// execution context

// data encapsulation / private variables

function counter() {
  let count = 0; //outer func vriable

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

// const counter1 = counter() // 0
// counter1() //1
// counter1() //2
// counter1() //3
// counter1() //4

// const counter2 = counter() //0

// counter2() // 1 
// counter1() //5
// counter2() // 2


// 

const trackCount  = (initial_count = 0,) =>{
    let count = initial_count

    return {
        increment:()=>{
            count+=1
            console.log(count)
        },
        decrement:()=>{
            count-=1
            console.log(count)
        },
        reset:()=>{
            count = 0
            console.log(count)
        }

    }
}

// create a clouser
const count1 = trackCount(10)
count1.increment() // 11
// count1.increment()
// count1.increment()
// count1.increment()
// count1.increment()
// count1.decrement()
// count1.decrement() //

// const count2 = trackCount()

// count2.increment()


// TODO
// bankAccount(initial_amt, acc_name)
// deposit(mount ) => 
// withdraw
// getBalance
// get details => {name,balance}

