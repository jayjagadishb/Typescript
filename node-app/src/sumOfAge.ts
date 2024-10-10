interface User5 {
  Aname: string;
  age: number;
}

function SumAge(user1: User5, user2: User5) {
  return user1.age + user2.age;
}

const res = SumAge({ Aname: "jay", age: 21 }, { Aname: "raj", age: 21 });

console.log(res);
