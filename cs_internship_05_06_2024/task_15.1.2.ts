// Multi level inheritance
class Animal{
    constructor(public name:string){}
    speak(){
      console.log(this.name+" "+"makes a noise")
    }
  }
  
  class Dog extends Animal{
    constructor(public name:string){
      super(name);
    }
    speak(){
      console.log(this.name+" "+"barks")
    }
  }
  class labrador extends Dog{
    constructor(public name:string){
      super(name);
    }
    speak(){
      console.log(this.name+" "+"the labrador barks loudly")
    }
  }
  const puppy=new labrador("muku");
  puppy.speak();