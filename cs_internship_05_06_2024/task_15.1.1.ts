// Single inheritance 
class Animal{
    constructor(public name: string){
      this.name=name;
    }
  
    speed(){
      console.log(this.name +" "+"makes a noice")
    }
  }
  
  class Dog extends Animal{
    constructor(name: string){
      super(name);
    }
    speak(){
      console.log(this.name+" "+"barks");
    }
  }
  const dog=new Dog("Buddy");
  dog.speak();