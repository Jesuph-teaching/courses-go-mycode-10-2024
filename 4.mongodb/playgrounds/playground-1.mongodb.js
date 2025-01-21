// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("gomycode-test");

db.cars.find();
db.cars.find({ model: "Corolla" });

const session = db.getMongo().startSession();
try {
  session.startTransaction();
  // code here to execute on db
  db.cars.updateOne(
    { model: "Model 3" },
    {
      $inc: {
        year: 2,
      },
    }
  );
  const car = db.cars.findOne({ model: "Corolla2" });

  if (!car) throw new Error("Couldn't find car");
  if (!car.year) throw new Error("car doesn't have a year");
  car.updateOne({ $inc: { year: -2 } });

  session.commitTransaction();
} catch (e) {
  console.log(e);
  session.abortTransaction();
} finally {
  session.endSession();
}
//db.cars.updateOne({ model: "Corolla2" }, { $unset: { year: "" } });
db.cars.find();
