const { reverse } = require("dns");

// we can initialize array using this syntax
let arr = [10, 20, 34, 60, 42];
// method to see the type of array or any object
console.log(typeof arr);
// method to change array to string
let b = arr.toString(arr);

console.log(b);
console.log(typeof b);
// method to joing any string in array and the new object will be string
let c = arr.join("_");

console.log(c);
console.log(typeof c);
// method to delete element from array
arr.pop();

// method to add a new element
arr.push(45);

// shift method is used to remove 1st element from the array
arr.shift();

// unshift method is used to add element at the begining of the array
arr.unshift(100);

// method to delete element from the array
delete arr[0];

console.log(arr);
// concat method is used to add two or more array in a new array

let arr1 = [10, 20, 30, 40];
let arr2 = [67, 32, 40, 44, 111];

let newArr = arr1.concat(arr2);
console.log(newArr);

// sort method is used to sort the array in alphabetical order

arr2.sort();
console.log(arr2);

// we can make a compare function to sort the array in ascending or descending order

let compare = function (a, b) {
  return a - b;
};
arr2.sort(compare);

// reverse function is used to reverse an array
arr2.reverse();

// The splice() method adds and/or removes array elements. The splice() method overwrites the original array.

arr2.splice(2, 3, 100, 200, 300);
console.log(arr2);

let num = arr2.slice(2, 4);
console.log(num);

// -- javascript objects --

const car = {
  type: "fiet",
  model: "500",
  color: "white",
};

const person = {
  firstName: "john",
  lastName: "Doe",
  age: 50,
  eyecolor: "blue",
};

// using new keyword
const person1 = new Object();
person1.name = "will";
person1.lName = "smith";
person1.age = 23;

// accessing object properties

console.log(person1.name);
console.log(person1["name"]);

// Accessing javascript properties
// let age =person1.age;
// let age=person1["age"];

// adding new properties
person1.nationality = "indian";

//deleting properties
delete person1.nationality;

// console.log(person1);

// nested objects
// property values
myobj = {
  name: "harry",
  age: 30,
  myCars: {
    car1: "ford",
    car2: "bmw",
    car3: "fiat",
  },
};
// You can access nested objects using the dot notation or the bracket notation:

// console.log(myobj.myCars.car1);
// console.log(myobj.myCars["car2"]);
// console.log(myobj["myCars"]["car2"]);

// let p1="myCars";
// let p2="car2";
// console.log(myobj[p1][p2]);

// using Object.values()
const person3 = {
  name: "john",
  age: 30,
  city: "new york",
};

// create an array
const myArr = Object.values(person3);
console.log(myArr);

// Using Object.entries();
// Object.entries make it simple to use objects in loops
const fruits={
  Bananas:300,
  Oranges:200,
  Apples:500
};
for(let [fruit,value] of Object.entries(fruits)){
  console.log(fruit,value);
}

// using JSON.stringify()
const person4={
  name: "mohit",
  age:30,
  city:"gurugram"
};

let mystring=JSON.stringify(person4);
console.log(mystring);