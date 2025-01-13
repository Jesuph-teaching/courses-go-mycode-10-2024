const express = require("express");
//const students = ["Fouzi", "Nabil", "Farouk", "Mhamed"];
const app = express();
const PORT = 3000;
/* app.use((req, res, next) => {
	console.log(req.method, req.hostname, req.url);
	next();
}); */
app.get("/", (req, res, next) => {
	console.log(req.method, req.hostname, req.url);
	res.send(`
            <p>welcome to our website, you are in ${req.url}</p>
            <a href="/about-us" > about us</a>
        `);
	/* let i = 0;
	const interval = setInterval(() => {
		if (i < students.length) res.write(students[i] + "\n");
		else {
			res.end();
			clearInterval(interval);
		}
		i++;
	}, 100); */
});

app.get("/about-us", (req, res) => {
	res.send("THis website is just a test that is off-service");
});
app.get("*", (req, res) => {
	res.send("Page not found - 404");
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
