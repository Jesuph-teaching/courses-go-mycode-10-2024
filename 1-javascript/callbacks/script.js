function Greet(name) {
	console.log(`greeting ${name}`);
}
const students = ["Mhamed", "Raid", "Farouk"];

console.log("for of");
for (const student of students) {
	Greet(student);
}
console.log("for each");
students.forEach(Greet);

/* ------------------- Example 2 ---------------------- */

const values = [34, 543, 143, 63, 21];
function Formula1(val) {
	return (val ** 2 + 6) / 4;
}
function Formula2(val) {
	return (val ** 2 + 6) / (val * 4);
}

const x = CalculateTotal(values, Formula1);
const y = CalculateTotal(values, Formula2);

console.log(values, { x, y });
function CalculateTotal(arr, formula) {
	return arr.reduce((acc, val) => {
		acc += formula(val);
		return acc;
	}, 0);
}
const complicatedValues = [
	{ x: 4, y: 5 },
	{ x: 43, y: 9 },
	{ x: 4, y: 34 },
	{ x: 8, y: 6 },
	{ x: 1, y: 26 },
];
function Pythagoras(val) {
	return Math.sqrt(val.x ** 2 + val.y ** 2);
}
function Div(val) {
	return val.x / val.y;
}
const x1 = CalculateTotal(complicatedValues, Pythagoras);
const y1 = CalculateTotal(complicatedValues, Div);
console.log(complicatedValues, { x1, y1 });
/* 
var acc=0;
for(const x of values){
    acc += formula(x);
}

*/
/* ------------------- Example 3 ---------------------- */
const values2 = [34, 543, 143, 63, 21];
// equalst array.map
/* function ArrayMap(array, callback) {
	const newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(callback(array[i], i, array));
	}
	return newArray;
} */
function ArrayMap(callback) {
	const newArray = [];
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i], i, this));
	}
	return newArray;
}
const x2 = values2.map(Formula1);

//const x3 = ArrayMap(values2,Formula1);
Array.prototype.ArrayMap = ArrayMap;
const x3 = values2.ArrayMap(Formula1);

console.log({ x3, x2 });
