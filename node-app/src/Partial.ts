//partial makes all properties of a type optional, creating a type with the same properties but each
//marked as optional.

interface User7 {
  name: string;
  id: string;
  age: number;
  email: string;
  password: string;
}

type UpdateDatas = Pick<User7, "name" | "age" | "email">;

type UpdateOptionalData = Partial<UpdateDatas>;

function updateUser1(updateProps: UpdateOptionalData) {
  //database operations
}
