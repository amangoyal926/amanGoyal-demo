const prompt = require("prompt-sync")({sigint:true});

// simple interest

let principle = prompt("Enter the principle amount");
let rate = prompt("Enter the rate");
let time = prompt("Enter the time");

try{
  if(isNaN(principle) || principle<=0){
    throw new Error("Please enter a valid princple amount");
  }
  if(isNaN(rate) || rate<=0){
    throw new Error("Please enter a valid rate");
  }
  if(isNaN(time) || time<=0){
    throw new Error("Please enter a valid time");
  }
}catch(error){
  console.log(error.message);
  return;
}
console.log("The value of simple interest is "+ (principle * rate * time)/100);

// compound interset

let principle1 = prompt("Enter the principle amount");
let rate1 = prompt("Enter the rate");
let time1 = prompt("Enter the time");

try{
  if(isNaN(principle1) || principle1<=0){
    throw new Error("Please enter a valid princple amount");
  }
  if(isNaN(rate1) || rate1<=0){
    throw new Error("Please enter a valid rate");
  }
  if(isNaN(time1) || time1<=0){
    throw new Error("Please enter a valid time");
  }
}catch(error){
  console.log(error.message);
  return;
}

let amount = (principle1 * (1 + (rate1/100)) * time1);
console.log("The value of compond interest is "+amount);

