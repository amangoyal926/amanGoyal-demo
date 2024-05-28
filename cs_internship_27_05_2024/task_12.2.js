// types of access modifiers

// public
// private
// protected

// public access modifiers-->

// Members marked as public can be accessed from anywhere. Public members are the default in JavaScript classes. They are accessible in and out of the classroom. For example, methods marked as public can be called from anywhere in your code.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   introduce() {
//     console.log("hello , my name is " + this.name);
//   }
// }

// const person = new Person("Alice");
// person.introduce();
// console.log(person.name);

// protected access modifiers-->

// Members marked as private are only accessible within the class itself. Private members are marked with the # symbol. These members are only accessible from within the class itself. They are invisible to external code. Private members provide encapsulation and ensure that the internals of a class remain hidden.


// class Person {
//   #name;
//   constructor (name){
//     this.#name = name;
//   }
//   #sayHello(){
//     console.log("Hello , my name is "+this.#name);
//   }
//   introduce(){
//     // Accessing a private method
//     this.#sayHello();
//   }
// }

// const person= new Person("bob");
// person.introduce();


// the following statement will throw error because private method is not accessible
// console.log(person.#name);


// protected access modifiers-->

// Members marked as protected are accessible within the class and its subclasses. You can use the protected keyword to define protected members. These members maintain a level of encapsulation while allowing access to subclasses.

class Vehicle {
    constructor(speed) {
      if(this.constructor === Vehicle){
        throw new Error("Abstract classes cannot be in instantiated");
      }
      this.speed=speed;
    }
  }
  class Car extends Vehicle { 
    constructor(speed) { 
        super(speed); 
    } 
    getSpeed() { 
        // Accessing the protected member in a subclas 
        return this.speed;
    } 
  } 
  
  const myCar = new Car(60); 
  // Outputs: 60 
  console.log(myCar.getSpeed());