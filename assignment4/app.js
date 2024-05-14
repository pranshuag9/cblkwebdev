
var x = 1;
console.log(x);
function a(){
    x=10;
    console.log(x);
}

a();

//Output:
// 1
// 10

// -----------------------------------

let x = 10;
console.log(x);
function a(){
    x=100;
    console.log(x);
}
a();
x=1000;

//Output:
// 10
// 100

// -----------------------------------

const x = 100;
console.log(x);
function a(){
    x=10;
    console.log(x);
}
a();

//Output:
// 100
// TypeError: Assignment to constant variable.

// -----------------------------------

function a(){
    console.log(x);
}
a();
var x=2

//Output:
// undefined

// -----------------------------------

let x;
function b(){
    console.log(x);
}
b();
x=2;

//Output:
// undefined

// -----------------------------------

function a(){
    console.log(x);
}
a();
let x=2 

//Output:
// ReferenceError: Cannot access 'x' before initialization

// -----------------------------------

var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);

//Output:
// 10
// 20
// 30
// 2

// ----------------------------------
 

function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    return y;
}
var z =  x();
console.log(z);
z();

//Output:
// function y(){}
// 7

// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();

//Output:
// 6
// 6
// 6
// 6
// 6
// 6

// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        function close(i){
                setTimeout(function(){
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();

//Output:
// interview
// interview
// interview
// interview
// interview
// interview
// 0
// 1
// 2
// 3

// -----------------------------------

const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}

// question1: make copy of the object and manipulate values inthe new copied object
// question2: print all the properties using appropriate for loop 

// answer1:
const newPerson = {...person};
newPerson.name = "webdev";
newPerson.age = 200;
newPerson.isAutherised = true;
newPerson.isUnicorn = false;
newPerson.bestDomain = "webdev";
console.log(newPerson);

//answer2:
for(let key in person){
    console.log(key, person[key]);
}


// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop

/*
Ans1:
GEC means Global Execution Context. It is the default or main execution context. 
It is responsible for creating the global object, this keyword, outer environment, 
and setting up memory heap and call stack. It is created when the JavaScript code is executed.

Ans2:
Single-threaded means that JavaScript code is executed in a single thread.
It means that only one task can be executed at a time. It is synchronous in nature.

Ans3:
Hoisting is a JavaScript mechanism where variables and function declarations are 
moved to the top of their containing scope before code execution.

Ans4:
The callback queue is a data structure that holds callback functions that are
waiting to be executed after the completion of the current execution stack.

Ans5:
Let and const are hoisted but not initialized. They are hoisted to the top of their
block scope but are not initialized until the actual declaration is encountered in the code.
This is known as the "dead temporal zone".

Ans6:
Block scope refers to the scope of variables that are defined within a block of code,
such as within curly braces {}. Global scope refers to the scope of variables that are
defined outside of any block of code.

Ans7:
Closure is a feature in JavaScript where an inner function has access to the outer
function's variables and parameters, even after the outer function has finished executing.
This allows for data encapsulation and privacy in JavaScript.

Ans8:
The event loop is a mechanism in JavaScript that allows for asynchronous code execution.
It continuously checks the call stack and the callback queue, moving functions from the
callback queue to the call stack when the call stack is empty.

Ans9:
Asynchronous code in JavaScript allows for non-blocking code execution. It allows for
functions to be executed independently of the main program flow, improving performance
and responsiveness.

Ans10:
The forEach loop is a method in JavaScript that allows for iterating over an array or
collection of elements. It executes a provided function once for each element in the array.
It is an alternative to traditional for loops for iterating over arrays.
*/
