type Users = Record<string, { age: number; name: string }>;

const users: Users = {
  "jay@123": { age: 21, name: "jay" },
  "raj@223": { age: 22, name: "hippo" },
};
console.log(users);
