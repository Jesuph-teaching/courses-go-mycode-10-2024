const express = require("express");

const app = express();
const PORT = 4545;

app.set("view engine", "ejs");

app.use("/public", express.static("./public"));

const brands = [
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
	{ image: "/public/images/ford.svg", title: "Ford" },
	{ image: "/public/images/Tesla.svg", title: "Tesla" },
	{ image: "/public/images/Toyota.svg", title: "Toyota" },
];
const bodyTypes = [
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
	{ image: "/public/images/crossover.svg", title: "Crossover" },
	{ image: "/public/images/suv.svg", title: "SUV" },
	{ image: "/public/images/wagon.svg", title: "Wagon" },
];
app.get("/", (req, res) => {
	res.locals.brands = brands;
	res.locals.bodyTypes = bodyTypes;
	res.render("home");
});
app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
