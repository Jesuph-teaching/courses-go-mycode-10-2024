class Attack {
	name;
	power;
	sideEffect;
	constructor(name, power, sideEffect) {
		this.name = name;
		this.power = power;
		this.sideEffect = sideEffect;
	}
}
class Fighter {
	name;
	health;
	attacks = [];

	constructor(name, health, attacks) {
		this.name = name;
		this.health = health;
		this.attacks = attacks;
	}
	getHit(power) {
		this.health -= power;
	}
	attack(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		opponent.getHit(currentAttack.power);
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			this.health -= currentAttack.sideEffect;
		}
	}
	isAlive() {
		return this.health > 0;
	}
}

class Warrior extends Fighter {
	constructor(name, health) {
		const defaultAttacks = [
			new Attack("Darbt bou3bou3", 23, 23),
			new Attack("Fire force", 15),
			new Attack("death grip", 20, 5),
			new Attack("mental break down", 10, -4),
			new Attack("wasmou", 5),
			new Attack("drunken brawler", 0, -5),
			new Attack("electric punch", 20, 0),
			new Attack("harsh strike", 18, 4),
		];
		super(name, health, defaultAttacks);
	}
	getHit(power) {
		this.health -= power * 0.8;
	}
}
class Mage extends Fighter {
	constructor(name, health) {
		const defaultAttacks = [
			new Attack("Darbt bou3bou3", 23, 23),
			new Attack("Fire force", 15),
			new Attack("death grip", 20, 5),
			new Attack("mental break down", 10, -4),
			new Attack("wasmou", 5),
			new Attack("drunken brawler", 0, -5),
			new Attack("electric punch", 20, 0),
			new Attack("harsh strike", 18, 4),
		];
		super(name, health, defaultAttacks);
	}
	attack(opponent) {
		const randomIndex = Math.floor(Math.random() * this.attacks.length);
		const currentAttack = this.attacks[randomIndex];
		opponent.getHit(currentAttack.power);
		console.log(
			`${this.name} has attacked with ${currentAttack.name}, ${currentAttack.power} damage and side effect of ${currentAttack.sideEffect} `
		);
		if (currentAttack.sideEffect) {
			if (Math.random() < 0.3) this.health += Math.abs(currentAttack.sideEffect);
			else this.health -= currentAttack.sideEffect;
		}
	}
}

class Referee {
	constructor() {}
	startMatch(fighter1, fighter2) {
		if (!fighter1 || !fighter2) {
			throw new Error("There is at least one fighter missing");
		}
		let turn = fighter1;
		const interval = setInterval(() => {
			const opponent = turn === fighter1 ? fighter2 : fighter1;
			if (!turn.isAlive()) {
				console.log(`fighter ${turn.name} has died, ${opponent.name} has won`);
				clearInterval(interval);
				return;
			}
			turn.attack(opponent);

			turn = opponent;
		}, 1000);
	}
}

const referee = new Referee();
const thor = new Warrior("Thor", 250);
const Gandalf = new Warrior("Gandalf", 250);
referee.startMatch(thor, Gandalf);
