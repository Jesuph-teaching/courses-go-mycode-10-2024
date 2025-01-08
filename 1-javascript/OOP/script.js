class User {
	firstName;
	lastName;
	isLoggedIn = false;
	post = [];
	payment = 0;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	login(password) {
		if (password === "password") this.isLoggedIn = true;
		else throw new Error("Password incorrect");
	}
	logout() {
		this.isLoggedIn = false;
	}
	publishPost(text) {
		if (this.isLoggedIn) this.post.push(text);
		else throw new Error("You can't post while not logged in");
	}
	toString() {
		return `${this.getFullName()} and my payment ${this.payment}`;
	}
	/* toString() {
		return `My name is ${this.getFullName()} and i'm currently ${this.isLoggedIn ? "logged in" : "not logged in"}`;
	} */
	assignPayment(payment) {
		this.payment = payment;
	}
}

const user1 = new User("Youcef", "Madadi");
const user2 = new User("Raouf", "Meziane");

try {
	user1.publishPost("news on the sea");
} catch (error) {
	console.error(error);
}
try {
	user2.login("somethingelse");
} catch (error) {
	console.error(error);
}
user1.login("password");
console.log(user1.toString());
console.log(String(user2));
console.log("" + user2);

class Admin extends User {
	role;
	constructor({ firstName = "Sami", lastName = "Hide" }, role) {
		super(firstName, lastName);
		this.role = role;
	}
	doesHaveAccess(action, ...values) {
		switch (action) {
			case "assign-payment": {
				if (this.role === "RH" || this.role === "SuperAdmin") {
					values.forEach((user) => {
						user.assignPayment(70000);
					});
					setTimeout(() => {
						console.log(String(values));
					}, 1000);
				} else throw new Error("You don't have the role to assign payment");
				break;
			}
			case "add-new-employee": {
				if (this.role === "RH" || this.role === "SuperAdmin") {
					alert("new employee " + values);
				} else throw new Error("You don't have the role to add new employee");
				break;
			}
			case "create-marketing-plan": {
				if (this.role === "CMO" || this.role === "SuperAdmin") {
					alert("created marketing plan");
				} else throw new Error("You don't have access to create marketing plan");
				break;
			}
			default: {
				throw new Error("We don't have this action");
			}
		}
	}
}
const admin1 = new Admin({ firstName: "Mhamed" }, "RH");

/* admin1.doesHaveAccess("add-new-employee", user1, user2);
admin1.doesHaveAccess("assign-payment", user1, user2);
admin1.doesHaveAccess("create-marketing-plan"); */
//user1.doesHaveAccess("add-new-employee", user1, user2);
console.log(user1 instanceof Admin, admin1 instanceof Admin);
