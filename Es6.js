 // Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.

// You don't need the function keyword, the return keyword, and the curly brackets.

// Example
// // ES5
 var x = function(x, y) {
    return x * y;
 }


 const x = (x, y) => x * y;

 /////////////////////////////
 
// Object Destructuring
// Destructuring assignment makes it easy to assign array values and object properties to variables.

// Example
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;
/////////////////////////////////////


// Array Destructuring
// Destructuring assignment makes it easy to assign array values and object properties to variables.

// Example
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;

///////////////////////////////////////////



// The Spread (...) Operator
// The ... operator expands an iterable (like an array) into more elements:

Example
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

//////////////////////////////////////////////
// The For/Of Loop
// The JavaScript for/of statement loops through the values of an iterable objects.

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

/////////////////////////////////////////////////////
// maps
const fruit = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);



///////////////////////////////////////////////////////
/// sets 
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

///////////////////////////////////////////////
////// classes
// Classes are templates for JavaScript Objects.

// Use the keyword class to create a class.

// Always add a method named constructor():

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  ///////////////////////////////////////////
  //////promises

 
// A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

// "Producing Code" can take some time and "Consuming Code" must wait for the result.

const myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise).
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
 /////////////////////////////////////////////

// Array find()
// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of ) the first element that is larger than 18:

// Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//////////////////////////////////////////////////////
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

// Example
const number = [4, 9, 16, 25, 29];
let firs = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
///////////////////////////////////////////////////////
// The Math.trunc() Method
// Math.trunc(x) returns the integer part of x:

// Example
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4

////////////////////////////////////////////////
// Modules
// Modules are imported in two different ways:

// Import from named exports
// Import named exports from the file person.js:

import { name, age } from "./person.js";
//////////////////////////////////////////////////


    