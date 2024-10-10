enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function doSomething(KeyPressed: Direction) {
  //do something
  if (KeyPressed == Direction.Up) {
  }
  //
}

doSomething(Direction.Right);
doSomething(Direction.Down);

//In TypeScript, an enum (short for "enumeration") is a special type that allows you to define a collection of related values and associate them with friendly names. Enums help improve the readability and maintainability of code by giving meaningful names to a set of values, rather than using raw numbers or strings.
