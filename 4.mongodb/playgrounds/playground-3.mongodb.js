// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("gomycode-2");

const studentsOlderThan22 = db.students.find({ age: { $gt: 22 } }).toArray();
const studentsYoungerThan22 = db.students.find({ age: { $lte: 22 } }).toArray();
const average =
  studentsOlderThan22.reduce((acc, student) => {
    return acc + student.age;
  }, 0) / studentsOlderThan22.length;
const studentsYoungerThan22Ids = studentsYoungerThan22.map(
  (student) => student._id
);
const result = db.students.updateMany(
  { _id: { $in: studentsYoungerThan22Ids } },
  {
    $set: {
      age: average,
    },
  }
);

db.students.find();
