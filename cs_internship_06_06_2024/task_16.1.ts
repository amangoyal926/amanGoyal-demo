// Generics in TypeScript allow you to create reusable components that can work with a variety of data types while maintaining type safety. They enable you to write flexible and type-safe code by parameterizing types in functions, classes, and interfaces.

// Generic function example 
function identity<T>(arg: T): T {
    return arg;
  }
  // calling generic function with a number
  let output1= identity<number>(5);
  console.log(output1);
  
  // calling generic function with a string
  let output2=identity<string>("hello");
  console.log(output2);
  
  // Generic class example
  class GenericClass<T>{
    value: T;
    constructor(value:T){
      this.value=value;    
    }
    getValue(){
      return this.value;
    }
  }
  // creating instances of generic class with different types
  let numberInstance=new GenericClass<number>(10);
  console.log(numberInstance.getValue());
  
  let stringInstance=new GenericClass<string>("world");
  console.log(stringInstance.getValue());
  
  //Generics are particularly useful when you want to write reusable code that can work with various data types without sacrificing type safety. They are commonly used in libraries, data structures, and algorithms to create flexible and type-safe components. 