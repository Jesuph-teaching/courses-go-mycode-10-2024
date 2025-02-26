"use strict";
function getContact(contact) {
    return "email" in contact ? contact.email : `0${contact.phone}`;
}
function printStudentDetails(student) {
    const averageGrades = student.grades.reduce((acc, grade) => {
        return acc + grade;
    }, 0) / student.grades.length;
    console.log(`
Student: ${student.name}, Age: ${student.age}
Average Grade: ${averageGrades} | Level: ${student.level}
Contact: ${getContact(student.contact)}
Address: ${student.address.city}, Postal Code: ${student.address.postalCode}
    `);
}
const student1 = {
    id: 0,
    name: "Aymen",
    age: 18,
    grades: [12, 11, 16, 7, 12],
    address: {
        city: "Kouba",
        postalCode: 16006,
    },
    contact: {
        email: "aymen@gmail.com",
    },
    level: "intermediate",
};
const students = [
    student1,
    {
        id: 1,
        name: "Mounir",
        age: 32,
        grades: [14, 14, 6, 12, 5],
        address: {
            city: "Haouch el gazouz",
            postalCode: 0,
        },
        contact: {
            phone: 550000000,
        },
        level: "advanced",
    },
    {
        id: 2,
        name: "Samir",
        age: 14,
        grades: [18, 19, 16, 17, 20],
        address: {
            city: "Kouba",
            postalCode: 0,
        },
        contact: {
            email: "Samir@gmail.com",
        },
        level: "beginner",
    },
];
students.forEach((student) => {
    printStudentDetails(student);
});
function getStudentsByCity(students, city) {
    return students.filter((student) => student.address.city === city);
}
const city = "Kouba";
console.log("----- Student that are from :", city);
getStudentsByCity(students, city).forEach((student) => {
    printStudentDetails(student);
});
