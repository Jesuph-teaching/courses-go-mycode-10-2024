const express = require("express");
const path = require("node:path");
const app = express();
const port = 4343;

app.set("view engine", "ejs");
// app.set("views", "./views");
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const students = [
	{
		name: "Aymen",
		profilePicture: "https://i.ytimg.com/vi/jm4m4iRC-fU/hq720.jpg",
	},
	{ name: "Farouk", profilePicture: "https://www.carvision.dz/wp-content/uploads/2020/12/2009-dacia-logan-facelift-23-scaled.jpg" },
	{ name: "Karim", profilePicture: "https://www.shutterstock.com/image-photo/copenhagen-denmark-30-vintage-1980s-260nw-2339839799.jpg" },
	{ name: "Mhamed", profilePicture: "https://radical-mag.com/wp-content/uploads/2017/04/DSC6115.jpg" },
];
const teacher = "Youcef";

app.use("/public", express.static("./public"));
// '/public/css/style.css'
// '/public/js/index.js'
app.get("/", (req, res, next) => {
	res.locals.students = students;
	res.locals.teacher = teacher;
	res.render("home", (err, html) => {
		if (err) res.send("Error :" + err);
		else res.send(html);
	});
});

app.post("/create", (req, res) => {
	students.push(req.body);
	res.send("received");
});

app.get("*", (req, res) => {
	res.send("Page not found");
});

app.listen(port, () => {
	console.log(`Server started on ${port}`);
	console.log(`http://localhost:${port}`);
});
