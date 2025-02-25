var user1 = {
    name: "Youcef Madadi",
    age: 27,
    isMale: true,
    role: "User",
    favoriteBook: {
        name: "Quran",
        stock: 100,
    },
};
var users = [
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
users.forEach(function (user) {
    console.log("User ".concat(user.name, " is ").concat(user.age, " years old, and ").concat(getGender(user), ". My favorite Book is : ").concat(user.favoriteBook.name));
});
function getGender(user) {
    return user.isMale ? "Male" : "Female";
}
/*
"dev:tsx": "tsx watch ./index.ts", // doesn't show errors but fast
"dev": "nodemon --ext .ts,.tsx --exec \"tsc ./index.ts & node ./index.js\"" // shows errors but slow
*/
