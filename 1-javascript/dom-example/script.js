let worker = null;
let loaded = 0;

function increment() {
	document.getElementById("counter").innerHTML = loaded + "%";
	document.getElementById("drink").style.top = 100 - loaded * 0.9 + "%";

	if (loaded === 25) fadeIn(document.querySelector("#cubes div:nth-child(1)"), 100);
	if (loaded === 50) fadeIn(document.querySelector("#cubes div:nth-child(2)"), 100);
	if (loaded === 75) fadeIn(document.querySelector("#cubes div:nth-child(3)"), 100);
	if (loaded === 100) {
		fadeIn(document.getElementById("lemon"), 100);
		fadeIn(document.getElementById("straw"), 300);
		loaded = 0;
		stopLoading();
		setTimeout(startLoading, 1000);
	} else {
		loaded++;
	}
}

function startLoading() {
	document.getElementById("lemon").style.display = "none";
	document.getElementById("straw").style.display = "none";
	document.querySelectorAll("#cubes div").forEach((div) => (div.style.display = "none"));
	worker = setInterval(increment, 30);
}

function stopLoading() {
	clearInterval(worker);
}

function fadeIn(element, duration) {
	if (!element) return;
	element.style.opacity = 0;
	element.style.display = "block";
	let opacity = 0;
	const increment = 30 / duration;

	function increase() {
		opacity += increment;
		if (opacity <= 1) {
			element.style.opacity = opacity;
			requestAnimationFrame(increase);
		}
	}
	increase();
}

startLoading();
