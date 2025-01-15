const express = require("express");

const app = express();
const PORT = 4545;

app.set("view engine", "ejs");

app.use("/public", express.static("./public"));
app.get("/", (req, res) => {
	res.render("home");
});
app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
