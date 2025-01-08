### **Exercise 1: Pet Management System**

**Objective:** Create a pet management system where a `Player` can adopt and interact with different types of pets. This exercise involves inheritance and interactions.

#### Instructions:

1. **Base Class:** Create a `Pet` class with:

    - Properties: `name` (string), `happiness` (number), `hunger` (number).
    - Methods:
        - `feed()`: Reduces hunger by 10 but increases happiness by 5.
        - `play()`: Increases happiness by 10 but increases hunger by 5.

2. **Child Classes:** Create two child classes that inherit from `Pet`:

    - `Dog`: Overrides `play()` to increase happiness by 15 instead of 10.
    - `Cat`: Overrides `feed()` to increase happiness by only 3.

3. **Manager Class:** Create a `Player` class with:

    - Properties: `name` (string), `pets` (array).
    - Methods:
        - `adoptPet(pet)`: Adds a pet to the player's list of pets.
        - `interactWithPet(petName, action)`: Finds a pet by its name and performs the given action (`feed` or `play`).

4. **Interaction:** Create a scenario where:
    - A player adopts a dog and a cat.
    - The player feeds and plays with the pets, and the results are logged.

#### Expected Output Example:

```javascript
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

const player = new Player("Alice");

player.adoptPet(dog);
player.adoptPet(cat);

player.interactWithPet("Buddy", "play");
player.interactWithPet("Whiskers", "feed");
```

---

### **Exercise 2: Battle Arena with Fighters**

**Objective:** Create a battle arena where fighters (of different types) battle each other, with a referee managing the matches.

#### Instructions:

1. **Base Class:** Create a `Fighter` class with:

    - Properties: `name` (string), `health` (number), `attackPower` (number).
    - Methods:
        - `attack(opponent)`: Reduces the opponent's health by the attackPower.

2. **Child Classes:** Create two child classes:

    - `Warrior`: Reduces the damage taken from attacks by 20%.
    - `Mage`: Has a special ability `castSpell(opponent)` that deals double damage but reduces its own health by 10.

3. **Manager Class:** Create a `Referee` class with:

    - Methods:
        - `startMatch(fighter1, fighter2)`: Runs the battle, where each fighter alternates attacking until one's health reaches 0. Announce the winner.

4. **Interaction:** Simulate a battle between a `Warrior` and a `Mage`, with a referee managing the fight.

#### Expected Output Example:

```javascript
const warrior = new Warrior("Thor", 100, 15);
const mage = new Mage("Gandalf", 80, 20);

const referee = new Referee();
referee.startMatch(warrior, mage);

// Output Example:
// Thor attacks Gandalf! Gandalf's health: 65
// Gandalf casts a spell on Thor! Thor's health: 70
// ... (battle continues)
// Winner: Thor!
```

---

### **Exercise 3: Zoo Simulation**

**Objective:** Build a zoo simulation where animals have unique behaviors, and a zookeeper manages their actions.

#### Instructions:

1. **Base Class:** Create an `Animal` class with:

    - Properties: `name` (string), `species` (string), `energy` (number).
    - Methods:
        - `eat(foodAmount)`: Increases energy by the food amount.
        - `makeSound()`: Logs a generic sound and reduces energy by 2.

2. **Child Classes:** Create two subclasses:

    - `Lion`: Overrides `makeSound()` to log "Roar!" and reduces energy by 5.
    - `Monkey`: Overrides `makeSound()` to log "Ooh ooh aah aah!" and reduces energy by 3.

3. **Manager Class:** Create a `ZooKeeper` class with:

    - Properties: `name` (string), `animals` (array).
    - Methods:
        - `addAnimal(animal)`: Adds an animal to the zoo.
        - `manageAnimal(name, action, value)`: Finds the animal by name and performs the action (`eat` or `makeSound`).

4. **Interaction:** Create a simulation where the zookeeper manages the animals' feeding and sounds.

#### Expected Output Example:

```javascript
const lion = new Lion("Simba", "Lion", 50);
const monkey = new Monkey("George", "Monkey", 30);

const zookeeper = new ZooKeeper("Joe");

zookeeper.addAnimal(lion);
zookeeper.addAnimal(monkey);

zookeeper.manageAnimal("Simba", "makeSound");
zookeeper.manageAnimal("George", "eat", 10);
```
