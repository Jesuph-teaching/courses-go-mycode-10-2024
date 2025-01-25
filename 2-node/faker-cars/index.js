// CJS
const { faker } = require("@faker-js/faker");
const { writeFile } = require("node:fs/promises");

function generateCar() {
  return {
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    year: faker.number.int({ min: 1960, max: 2024 }),
    features: [faker.vehicle.color(), faker.vehicle.fuel()],
  };
}

const cars = Array.from({ length: 8 }).map(generateCar);

writeFile("./cars.json", JSON.stringify(cars, null, 4))
  .then(() => {
    console.log("done");
  })
  .catch((err) => console.error(err));
