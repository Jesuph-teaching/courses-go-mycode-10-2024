const fs = require("node:fs");
const path = require("path");
const os = require("os");
const p = "./docs/file.txt";

const base = path.basename(p);
const ext = path.extname(p);
const dir = path.dirname(p);
const homedir = os.homedir();
const newFile = path.join(dir, "new-File" + ext);
const totalmem = os.totalmem();
fs.readFile(
	"./data.txt",
	{
		encoding: "utf-8",
	},
	function (error, data) {
		if (error) console.error(error);
		else console.log(data);
	}
);
fs.writeFile(newFile, "empty", (error) => {
	if (error) console.error(error);
});
