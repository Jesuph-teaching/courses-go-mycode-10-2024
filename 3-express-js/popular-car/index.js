const express = require("express");
const path = require("path");
const app = express();
const PORT = 4545;
const fastCars = ["Hellcat", "A45", "C63S", "RS6"];
const popularCars = ["R4", "golf 8", "clio", "E36"];

app.use("/public", express.static("./public"));

app.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "./views/home.html"), (err) => {
		if (err) next();
	});
});

app.get("/fast-cars", (req, res) => {
	res.send(`<h1>Fast cars</h2>
            <ul>
            ${fastCars.map((car) => `<li>${car}</li>`).join("")}
            </ul>
        `);
});

app.get("/popular-cars", (req, res) => {
	res.send(`<h1>Popular cars</h2>
            <ul>
            ${popularCars.map((car) => `<li>${car}</li>`).join("")}
            </ul>
        `);
});
app.get("*", (req, res) => {
	res.send("not - found");
});
app.listen(PORT, () => {
	console.log(`The server started in port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
