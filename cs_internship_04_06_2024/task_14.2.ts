class AccessSpecifierExample{
    public publicProperty : string;
    private privateProperty : string;
    protected protectedProperty : string;
  
    constructor(publicValue: string, privateValue: string, protectedValue: string){
      this.publicProperty = publicValue;
      this.privateProperty = privateValue;
      this.protectedProperty = protectedValue;
    }
    public getPublicProperty():string{
      return this.publicProperty;
    }
  
    private getPrivateProperty():string{
      return this.privateProperty;
    }
  
    protected getProtectedProperty():string{
      return this.protectedProperty;
    }
  }
  let example = new AccessSpecifierExample("Public Property","Private Property","Protected Property");
  
  console.log("public Property:"+example.publicProperty)
  console.log("public Property:"+example.getPublicProperty())
  
  // this will throw error because private property can be accessed 
  // within the class
  
  // console.log("private Property:"+example.privateProperty)
  // console.log("private Property:"+example.getPrivateProperty())
  
  // this will throw error because protected property can be accessed 
  // within the class and its subclasses
  
  // console.log("protected Property:"+example.protectedProperty)
  // console.log("protected Property:"+example.getProtectedProperty())