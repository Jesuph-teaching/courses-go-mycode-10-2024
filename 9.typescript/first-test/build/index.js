"use strict";
const user1 = {
    name: "Youcef Madadi",
    age: 27,
    isMale: true,
    role: "User",
    favoriteBook: {
        name: "Quran",
        stock: 100,
    },
};
const users = [
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
    console.log(`User ${user.name} is ${user.age} years old, and ${getGender(user)}. My favorite Book is : ${user.favoriteBook ? user.favoriteBook.name : "~no book~"}`);
});
function getGender(user) {
    return user.isMale ? "Male" : "Female";
}
/*
"dev:tsx": "tsx watch ./index.ts", // doesn't show errors but fast
"dev": "nodemon --ext .ts,.tsx --exec \"tsc ./index.ts & node ./index.js\"" // shows errors but slow
*/
const t = [54, "43"];
var Colors;
(function (Colors) {
    Colors["Red"] = "rgb(255,0,0);";
    Colors["Blue"] = "rgb(0,0,255);";
    Colors["Green"] = "rgb(0,255,0);";
})(Colors || (Colors = {}));
const colors = [Colors.Red, Colors.Blue];
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
var Gender;
(function (Gender) {
    Gender["Male"] = "m";
    Gender["Female"] = "f";
})(Gender || (Gender = {}));
console.log(Gender.Female);
const user = {
    gender: Gender.Male,
    name: "The male",
};
var Levels;
(function (Levels) {
    Levels[Levels["beginner"] = 0] = "beginner";
    Levels[Levels["intermediate"] = 1] = "intermediate";
    Levels[Levels["advanced"] = 2] = "advanced";
})(Levels || (Levels = {}));
const u1 = {
    name: "The user",
    age: 28,
    grades: [
        { subject: "Math", note: 12 },
        { subject: "Physics", note: 14 },
    ],
};
u1.grades.map((grade) => {
    if (typeof grade === "object")
        console.log(grade.subject);
    else
        console.log(grade);
});
function prepareForBackend(cart) {
    return Object.assign(Object.assign({}, cart), { products: cart.products.map((product) => ({
            product: product.product.id,
            quantity: product.quantity,
        })) });
}
// function pluckKey<ProductI>(elm: ProductI, key: keyof ProductI) {
function pluckKey(elm, key) {
    return elm[key];
}
const p = {
    id: "fdsgsd",
    price: 324,
};
pluckKey(p, "id");
pluckKey(u1, "grades");
const su1 = { name: user1.name, age: user1.age };
const ru1 = {
    favoriteBook: user1.favoriteBook,
    isMale: user1.isMale,
    role: user1.role,
};
const ou = {
    age: 234,
};
