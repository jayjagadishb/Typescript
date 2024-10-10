type User4 = {
  readonly name: string;
  readonly age: number;
};

const user3: User4 = {
  name: "sam",
  age: 21,
};

//user3.age = 12  {Cannot assign to 'age' because it is a read-only property.}

//it can be written as Readonly<User4>

interface Config {
  endpoint: string;
  apikey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.exp.com",
  apikey: "abcdef654",
};
