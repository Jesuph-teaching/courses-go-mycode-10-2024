let students = localStorage.getItem("Students");
if (!students) students = [];
else students = JSON.parse(students);
function addStudent() {
	const name = prompt("give me your name");
	const age = prompt("Give me your age");
	students.push({ name, age: Number(age) });
	saveStudents();
}

function saveStudents() {
	if (students.length > 0) localStorage.setItem("Students", JSON.stringify(students));
	else localStorage.removeItem("Students");
}
function clearData() {
	localStorage.clear();
}

addStudent();

alert(JSON.stringify(students));
