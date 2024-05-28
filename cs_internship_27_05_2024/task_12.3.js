//A static method in JavaScript is a method that has a static keyword prepended to itself. Such methods cannot be accessed through instantiated objects but could be accessed through the class name. This is because static methods belong to the class directly.
class Animal{
    constructor(name){
      this.name=Animal.capitalize(name);
    }
    walk(){
      console.log("Animal "+Animal.capitalize(this.name)+" is walking")
    }
    static capitalize(name){
      return name.charAt(0).toUpperCase()+name.substr(1,name.length);
    }
  }
  j=new Animal("jack");
  j.walk();
  