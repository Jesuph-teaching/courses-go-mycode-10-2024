const _ = require("lodash");

const listOfNotes = [13, 24, "youcef", 54, 675, 76];
const clearList = _.without(listOfNotes, 675, 54, 4);
console.log(clearList);
function hello() {
	console.log("hello");
}
const debouncedCall = _.debounce(hello, 2000);
