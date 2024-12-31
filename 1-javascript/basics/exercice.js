/* var length;
do {
	length = Number(prompt("Enter the length of the rect"));
} while (Number.isNaN(length));
var width;
do {
	width = Number(prompt("Enter the width of the rect"));
} while (Number.isNaN(width));
 */
//alert(`The area of this rect is ${width * length}`);
const arr1 = [8, 4];
const arr2 = [6, 12];
const combined = arr1.concat(arr2);
console.log(combined);
console.log("removed from combined", combined.splice(1, 2, 34, 56, 876, 987, 9708));
console.log("combined", combined);
(function () {
	console.log("hello");
	return 8;
})();
