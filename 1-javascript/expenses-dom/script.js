/* const expense = {
	description: "",
	amount: 0,
	category: "",
	date: "2025-01-05",
}; */

let expenses = [];
const expensesKey = "my-test-expenses";
function saveExpenses() {
	localStorage.setItem(expensesKey, JSON.stringify(expenses));
}

function loadExpenses() {
	expenses = JSON.parse(localStorage.getItem(expensesKey)) || [];
	UpdateDisplay();
}

/* Logic of the app */
/* menu Buttons */
const addButton = document.querySelector("#add_action");
const displayExpenses = document.querySelector("#display_expenses");
const getTotalButton = document.querySelector("#get_total_action");
const getExpensesByCategoryButton = document.querySelector("#get_expenses_by_category_action");
const closeButton = document.querySelector("#close_button");
/* sections and forms */
const displayShow = document.querySelector("#expenses_display_show");
const displayTotal = document.querySelector("#total_display");
const addForm = document.querySelector("#add_Expense");
const ExpenseByCategorySection = document.querySelector("#Expense_by_Category");
const ExpenseByCategoryInput = document.querySelector('#Expense_by_Category [name="category"]');
const ExpenseByCategoryDisplay = document.querySelector("#Expense_by_Category #Expense_by_Category_display");

function initialize() {
	addForm.classList.add("hidden");
	displayShow.classList.add("hidden");
	displayTotal.classList.add("hidden");
	ExpenseByCategorySection.classList.add("hidden");
}
/* events */
closeButton.addEventListener("click", () => {
	initialize();
});
displayExpenses.addEventListener("click", () => {
	initialize();
	displayShow.classList.toggle("hidden");
});
getExpensesByCategoryButton.addEventListener("click", () => {
	initialize();

	ExpenseByCategorySection.classList.toggle("hidden");
});
addButton.addEventListener("click", () => {
	initialize();
	addForm.classList.toggle("hidden");
});
getTotalButton.addEventListener("click", () => {
	initialize();
	getTotal();
	displayTotal.classList.toggle("hidden");
});
addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	AddExpense();
});
ExpenseByCategoryInput.addEventListener("change", (e) => {
	const filteredExpenses = getExpensesByCategory(ExpenseByCategoryInput.value);
	ExpenseByCategoryDisplay.innerHTML = "";
	filteredExpenses.forEach((expense) => {
		ExpenseByCategoryDisplay.appendChild(ExpenseToNode(expense));
	});
});
/* functions */
function AddExpense() {
	const expense = {
		description: addForm.elements["description"].value,
		amount: Number(addForm.elements["amount"].value),
		category: addForm.elements["category"].value,
		date: addForm.elements["date"].value,
	};
	addForm.reset();
	expenses.push(expense);
	saveExpenses();
	UpdateDisplay();
}
function UpdateDisplay() {
	/* displayShow.innerHTML = expenses
		.map((expense) => {
			return `<div class="expense-card">
				<h3>${expense.category}</h3>
				<p>${expense.description}</p>
				<p>${expense.amount} DZD - ${expense.date}</p>
			</div>`;
		})
		.join("<br/>"); */
	const displayNodes = expenses.map(ExpenseToNode);
	displayNodes.forEach((node) => {
		displayShow.appendChild(node);
	});
}

function getTotal() {
	const totalExpenses = expenses.reduce((total, expense) => {
		total += expense.amount;
		return total;
	}, 0);
	displayTotal.innerHTML = `<h3>${totalExpenses} DZD</h3>`;
}
function ExpenseToNode(expense) {
	/* return `<div class="expense-card">
				<h3>${expense.category}</h3>
				<p>${expense.description}</p>
				<p>${expense.amount} DZD - ${expense.date}</p>
			</div>` */
	const card = document.createElement("div");
	card.classList.add("expense-card");
	const h3 = document.createElement("h3");
	h3.innerText = expense.category;
	const description = document.createElement("p");
	description.innerText = expense.description;
	const details = document.createElement("p");
	details.innerText = `${expense.amount} DZD - ${expense.date}`;
	card.appendChild(h3);
	card.appendChild(description);
	card.appendChild(details);
	return card;
}
function getExpensesByCategory(category) {
	return expenses.filter((expense) => expense.category === category);
}
// on first load
initialize();
loadExpenses();
