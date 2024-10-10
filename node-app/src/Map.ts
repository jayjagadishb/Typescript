type User8 = {
  name: string;
  age: number;
  email: string;
};

const users2 = new Map<string, User8>();

users2.set("jat", { name: "jatto", age: 21, email: "jatto@gmail.com" });
users2.set("dalle", { name: "phone", age: 30, email: "sarah@qd1" });

const data = users2.get("jat");
console.log(data);
