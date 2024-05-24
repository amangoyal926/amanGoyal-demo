// const { text } = require("stream/consumers");

// -- Object.values() --
// Object.values() is used for returning enumerable property values of a simple array, array-like object, and array-like object with random key ordering.

let check = ["x", "y", "z"];
console.log(Object.values(check));

let object = { 0: "23", 1: ";", 2: "true" };
console.log(Object.values(object));

// In the following example, this object has 3 property values in random ordering and the Object.value() method returns the enumerable property values of this array in ascending orderof the value of indices.
let object2 = { 70: "x", 21: "y", 35: "z" };
console.log(Object.values(object2));

let array = { 40: "10", 30: "5", 20: "12", 10: "4" };
console.log(Object.values(array));

// -- Object.keys() --
// The Object.keys() method returns an array with the keys of an object.
const person = {
  firstName: "john",
  lastName: "doe",
  age: 50,
  eyeColor: "blue",
};
console.log(Object.keys(person));

const person2 = {
  firstName: "john",
  lastName: "doe",
  age: 50,
  eyeColor: "blue",
};
Object.defineProperty(person2, "age", { enumerable: false });
console.log(Object.keys(person2));

// Use Object.keys() on arrays

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Object.keys(fruits));

// Use Object.keys() on string
const fruit = "Banana";
console.log(Object.keys(fruit));

// -- Using Object.entries() --
//JavaScript Object.entries() method is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter.
console.log(Object.entries(fruits));

// Javascript String methods

let string = "abcdefghijklmnopqrstuvwxyz";
console.log(string.length);

// charAt method is used to return index of the character in a string
console.log(string.charAt(0));

// charCodeAt() method is used to return the unicode of the character in a string
console.log(string.charCodeAt(0));

// at method is used to return character at the specified index
console.log(string.at(0));
// we can use following syntax to do this as well
console.log(string[0]);

// Extracting string parts
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

// If you omit the second parameter, the method will slice out the rest of the string:
console.log(text.slice(7));
// If a parameter is negative, the position is counted from the end of the string:
console.log(text.slice(-12));

// Javascript string substring
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(text.substring(7, 13));

// substr()
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// If the first parameter is negative, the position counts from the end of the string.
console.log(text.substring(7, 6));

// toUpperCase and toLowerCase is used to convert the string to upper case or lower case
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// concat joins 2 or more string

let text1 = "HEllo";
let text2 = "World";
console.log(text1.concat(" " + text2));

// The trim() method removes whitespace from both sides of a string:

let text3 = "    Hello World    ";
console.log(text3.trim());

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(text3.trimStart());

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(text3.trimEnd());

// padStart
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
let text4 = "5";
console.log(text4.padStart(4, "0"));

// padEnd
// The padEnd() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
console.log(text4.padEnd(4, "0"));

// The repeat() method returns a string with a number of copies of a string.
console.log(text1.repeat(5));

// The replace() method replaces a specified value with another value in a string:
console.log(text2.replace("World", "Javascript"));

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let sampleText = "please use Microsoft products and Microsoft services";
console.log(sampleText.replace(/microsoft/i, "apple"));
// To replace all matches, use a regular expression with a /g flag (global match):
console.log(sampleText.replace(/microsoft/g, "apple"));

// converting a string to an array

let newString="This is my new String";
const arr=newString.split(" ");
console.log(arr);