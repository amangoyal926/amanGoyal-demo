// const { error } = require("console");

const prompt = require("prompt-sync")({sigint:true});
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom message
// addddddlert("Welcome guest!");

// In the following example alddrt is wrong so i put this in try catch block so that it will not throw error

// The finally statement lets you execute code, after try and catch, regardless of the result
try{
  alddrt("Welcome guest!");
}catch(err){
  console.log(err.message);
}finally{
  console.log("The finally block will execute definately");
}

// Throw keyword
// let age = prompt("Enter the age of person who is applying for driving licence");
// myfunction(age);
// function myfunction(age){
//   try{
//     if(age<2){
//       throw new Error("You are a baby");
//     }
//     else if(age<10){
//       throw new Error("You should play with toy car, not with a real car");
//     }      
//     else if(age<15){
//       throw new Error("You should consuntrate on your studies");
//     }
//     else if(age<18){
//       throw new Error("You can apply for learning licence");
//     }
//     else{
//       alerttt("hello");
//     }
//   }catch(error){
//     console.log(error.message);
//   }
  
// }