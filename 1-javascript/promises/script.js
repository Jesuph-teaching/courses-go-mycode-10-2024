var MoviesDataBase = {
	"Avengers: Endgame": {
		Title: "Avengers: Endgame",
		Year: 2019,
		Rate: 8.4,
		Raters: 2675,
	},
	"Pirates of the Caribbean: The Curse of the Black Pearl": {
		Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
		Year: 2003,
		Rate: 7.7,
		Raters: 4856,
	},
	"Pulp Fiction": { Title: "Pulp Fiction", Year: 1994, Rate: 8.9, Raters: 10 },
};

function receiveMovie(title) {
	return new Promise((resolve, reject) => {
		if (MoviesDataBase[title]) {
			resolve(MoviesDataBase[title]);
		} else {
			reject(new Error(`There is no movie with the name ${title}`));
		}
	});
}
function RateMovie(movie, newRate) {
	const { Rate, Raters } = movie;
	movie.Rate = Number(((Rate * Raters + newRate) / (Raters + 1)).toFixed(2));
	movie.Raters++;
	return movie;
}
receiveMovie("Pulp Fiction")
	.then((movie) => {
		return RateMovie(movie, 0);
	})
	.then((res) => console.log(res))
	.catch((error) => {
		console.error(error);
		return "hello";
	});

receiveMovie("Green Mile")
	.then((movie) => {
		return RateMovie(movie, 5);
	})
	.then(console.log)
	.catch((error) => {
		console.error(error);
		return "hello";
	})
	.then((res) => console.log(res));
