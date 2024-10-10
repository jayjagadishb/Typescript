interface User6 {
  name: string;
  id: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User6, "name" | "age" | "email">;

function updateUser(updateProps: UpdateProps) {
  //database operations
}

//it allows you to create a new type by selecting a set of properties {keys} from an existing type or interface.
