// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum CardinalDirections{
    North,
    South,
    East,
    West
  }
  let currentDirection = CardinalDirections.North;
  console.log(currentDirection)
  
  // Numeric Enums - Initialized
  // You can set the value of the first numeric enum and have it auto increment from that:
  enum CardinalDirections2{
    North=1,
    South,
    East,
    West
  }
  let currentDirection2 = CardinalDirections2.North;
  console.log(currentDirection2)
  
  // Numeric Enums - Fully Initialized
  // You can assign unique number values for each enum value. Then the values will not incremented automatically:
  enum statusCode{
    NotFound=404,
    Success=200,
    Accepted=202,
    BadRequest=400
  }
  console.log(statusCode.NotFound)
  
  // String Enum
  // Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
  enum CardinalDirections3{
    North="North",
    East="East",
    South="South",
    West="West"
  }
  console.log(CardinalDirections3.North)
  
  // Interfaces
  // Interfaces are similar to type aliases, except they only apply to object types.
  interface Rectangle {
    height: number,
    width: number
  }
  const rectangle: Rectangle={
    height:20,
    width:10
  }
  
  // Extending Interfaces
  // Interfaces can extend each other's definition.
  interface Rectangle2 {
    height: number,
    width: number
  }
  
  interface coloredRectangle extends Rectangle2{
    color: string
  }
  
  const coloredRectangle : coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle.height)
  
  