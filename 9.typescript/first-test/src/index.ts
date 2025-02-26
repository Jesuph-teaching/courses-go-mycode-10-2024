type GenderT = "Male" | "Female";

type Tuples = [number, string];

interface BookI {
  name: string;
  stock?: number;
}
/* interface MangaI {
  title: string;
  volume: number;
}
type MediaT = MangaI & BookI; */
type RoleT = "User" | "Admin" | "DG" | "RH" | "Karim";

interface UserI {
  name: string;
  age: number;
  isMale: boolean;
  role: RoleT;
  favoriteBook?: BookI;
}

const user1: UserI = {
  name: "Youcef Madadi",
  age: 27,
  isMale: true,
  role: "User",
  favoriteBook: {
    name: "Quran",
    stock: 100,
  },
};
const users: UserI[] = [
  user1,
  {
    name: "Mhamed Zitouni",
    age: 34,
    isMale: true,
    role: "User",
    favoriteBook: {
      name: "mein kampf",
      stock: 1,
    },
  },
  {
    name: "Chaima",
    age: 23,
    isMale: false,
    role: "User",
  },
];

users.forEach((user) => {
  console.log(
    `User ${user.name} is ${user.age} years old, and ${getGender(
      user
    )}. My favorite Book is : ${
      user.favoriteBook ? user.favoriteBook.name : "~no book~"
    }`
  );
});

function getGender(user: UserI): GenderT {
  return user.isMale ? "Male" : "Female";
}

/* 
"dev:tsx": "tsx watch ./index.ts", // doesn't show errors but fast
"dev": "nodemon --ext .ts,.tsx --exec \"tsc ./index.ts & node ./index.js\"" // shows errors but slow
*/

const t: Tuples = [54, "43"];

enum Colors {
  Red = "rgb(255,0,0);",
  Blue = "rgb(0,0,255);",
  Green = "rgb(0,255,0);",
}

const colors: Colors[] = [Colors.Red, Colors.Blue];

switch (colors[0]) {
  case Colors.Red:
    console.log("i just got red");
    break;
  case Colors.Blue:
    console.log("i just got blue");
    break;
  case Colors.Green:
    console.log("i just got green");
    break;
  default: {
    console.log("got no correct color");
  }
}

enum Gender {
  Male = "m",
  Female = "f",
}
console.log(Gender.Female);
const user: {
  gender: Gender;
  name: string;
} = {
  gender: Gender.Male,
  name: "The male",
};

enum Levels {
  beginner,
  intermediate,
  advanced,
}

interface IUser<X = number> {
  name: string;
  age: number;
  grades: X[];
}
interface GradesI {
  subject: string;
  note: number;
}

const u1: IUser<GradesI> = {
  name: "The user",
  age: 28,
  grades: [
    { subject: "Math", note: 12 },
    { subject: "Physics", note: 14 },
  ],
};

u1.grades.map((grade) => {
  if (typeof grade === "object") console.log(grade.subject);
  else console.log(grade);
});
interface CartProduct<P> {
  product: P;
  quantity: number;
}
interface CartI<P = string> {
  products: CartProduct<P>[];
}
interface ProductI {
  id: string;
  price: number;
  //...
}

function prepareForBackend(cart: CartI<ProductI>): CartI {
  return {
    ...cart,
    products: cart.products.map((product) => ({
      product: product.product.id,
      quantity: product.quantity,
    })),
  };
}

// function pluckKey<ProductI>(elm: ProductI, key: keyof ProductI) {
function pluckKey<X>(elm: X, key: keyof X) {
  return elm[key];
}
const p: ProductI = {
  id: "fdsgsd",
  price: 324,
};

pluckKey(p, "id");
pluckKey(u1, "grades");

type SimpleUserT = Pick<UserI, "name" | "age">;

type RestUserT = Omit<UserI, keyof SimpleUserT>;

const su1: SimpleUserT = { name: user1.name, age: user1.age };
const ru1: RestUserT = {
  favoriteBook: user1.favoriteBook,
  isMale: user1.isMale,
  role: user1.role,
};

type OptionalUserT = Partial<UserI>;
const ou: OptionalUserT = {
  age: 234,
};
