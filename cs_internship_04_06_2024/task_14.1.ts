class Person{
    firstName : string;
    lastName : string;
    age : number;
  
    constructor(firstName:string,lastName:string,age:number){
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;
    }
    display() :void{
      console.log("firstName : "+this.firstName+", "+"lastName : "+this.lastName+", "+"age : "+this.age+" ")
    }
  }
  
  let person1=new Person("Rahul","Garg",20);
  person1.display();
  let person2=new Person("Nitin","Kaushik",20);
  person2.display();