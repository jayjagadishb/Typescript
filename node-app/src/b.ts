interface User {
  firstName: string | number;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet1(user: User) {
  console.log("hi there" + user.firstName);
}

isLegal({
  firstName: "jay",
  lastName: "singh",
  age: 21,
});

greet1({
  firstName: 1,
  lastName: "singh",
  age: 21,
});

// extends for class

interface Manager {
  name: string;
}

interface User1 {
  age: string;
}

interface BigPerson extends User1, Manager {
  id: number; // it extends the value of Manager and User1
}
