// Abstraction
abstract class Shape{
    abstract calculateArea(): number;
  }
  class Circle extends Shape{
    
    constructor(private radius:number){
      super();
    }
    
    calculateArea():number{
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape{
    constructor(private width: number, private height: number){
      super();
    }
    calculateArea(): number{
      return this.width * this.height;
    }
  }
  const circle  = new Circle(5);
  console.log("Area of circle "+circle.calculateArea());
  const rectange = new Rectangle(5,4);
  console.log("Area of rectangle "+rectange.calculateArea());
  
  // Polymorphism
  // Polymorphism allows objects of different types to be treated as objects of a common superclass. it enables code to work with objects of multiple types in a uniform way.
  class Animal{
    speak(){
      console.log("Animal makes a noise");
    }
  }
  class Dog extends Animal{
    speak(){
      console.log("Dog Barks");
    }
  }
  class Cat extends Animal{
    speak(){
      console.log("Cat meows");
    }
  }
  function makeSpeak(animal: Animal){
    animal.speak();
  }
  const animal= new Animal();
  const dog= new Dog();
  const cat= new Cat();
  
  makeSpeak(animal);
  makeSpeak(dog);
  makeSpeak(cat);
  
  // Encapsulation
  class BankAccount{
    private balance: number;
    constructor(initialBalance: number){
      this.balance=initialBalance;
    }
    deposit(amount: number){
      this.balance+=amount;
    }
    withdraw(amount: number){
      if(this.balance >= amount){
        this.balance-=amount;
      }else{
        console.log("Insufficient balance");
      }
    }
    getBalance():number{
      return this.balance;
    }
  }
  
  const account=new BankAccount(1000);
  account.deposit(500);
  account.withdraw(200);
  console.log("Remaining balance: "+account.getBalance());
  