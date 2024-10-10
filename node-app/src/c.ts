type User2 = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
};

// we can implement unions and intersections using type but cant using interfaces.
// we can keep one parameter of a function as multiple type.

//Union
type GreetArg = number | string;

function greet2(id: GreetArg) {
  console.log(id);
}

greet2(1);
greet2("hello hippo");

//Intersection
type emp = {
  name: string;
  startDate: Date;
};

interface Manager {
  name: string;
  department: string;
}

type TechLead = emp & Manager;
