type GenderT = "Male" | "Female";
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
  favoriteBook: BookI;
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
    favoriteBook: {
      name: "Cendrilla",
      stock: 10000,
    },
  },
];

users.forEach((user) => {
  console.log(
    `User ${user.name} is ${user.age} years old, and ${getGender(
      user
    )}. My favorite Book is : ${user.favoriteBook.name}`
  );
});

function getGender(user: UserI): GenderT {
  return user.isMale ? "Male" : "Female";
}

/* 
"dev:tsx": "tsx watch ./index.ts", // doesn't show errors but fast
"dev": "nodemon --ext .ts,.tsx --exec \"tsc ./index.ts & node ./index.js\"" // shows errors but slow
*/
