const colors = [
	{
		r: 23,
		g: 123,
		b: 54,
	},
	{
		r: 34,
		g: 36,
		b: 154,
	},
	{
		r: 123,
		g: 23,
		b: 94,
	},
];

//
function changeColor({ r, g, b }) {
	return {
		r: Math.floor(r * 0.9),
		g: Math.floor(g * 0.9),
		b: Math.floor(b * 0.9),
	};
}
const colors2 = colors.map((c) => {
	return changeColor(c);
});

console.log(colors2, colors);
