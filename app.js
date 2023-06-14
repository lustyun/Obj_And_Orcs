// //  USING AN ARRAY INSIDE OF AN OBJECT
// const adventurer = {
// 	name: "Medivh",
// 	hitPoint: 10,
// 	belongings: ["staff", "sword", "potions", "daggers"],
// 	companion: {
// 		name: "jax",
// 		type: "firefly",
// 		belongings: ["potions", "crystals", "rings"],
// 	},
// };

// // ACCESS THE VALUES IN THE PLAYERS BELONGINGS ARRAY
// console.log(adventurer.belongings);

// // ACCESS ADVENTURER'S FIRST BELONGING
// console.log(`${adventurer.name}'s first belongin: ${adventurer.belongings[0]}`);

// // ITERATE OVER AN ARRAY WITHIN AN OBJECT
// for (let i = 0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

// // ACCESS NESTED ELEMENTS WITHIN OUR OBJECT
// console.log(
// 	`${adventurer.name}'s companion's name is ${adventurer.companion.name}`
// );
// console.log(
// 	`${adventurer.companion.name}'s belongings is ${adventurer.companion.belongings[2]}`
// );

// //
// const movies = [
// 	{ title: "SpiderMan" },
// 	{ title: "A Goofy Movie" },
// 	{ title: "A Christmas Story" },
// ];

// console.log(movies[0]);
// console.log(movies[0].title);
// console.log("-------------------------------------");
// // LOOPING OVER ARRAY OF OBJECTS
// for (let i = 0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }
// console.log("-------------------------------------");

// // COMBINE OBJECTS, ARRAYS AND FUNCTIONS
// const foo = {
// 	arr: [1, 2, 3],
// 	obj: {
// 		prop: "My object's property",
// 	},
// 	doSomething: () => {
// 		console.log("I did something!");
// 	},
// };

// console.log(foo.arr[0]);
// console.log(foo.obj.prop);
// foo.doSomething();
// console.log("-------------------------------------");

// // AN ARRAY OF ARRAYS
// const bar = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// 	() => {
// 		console.log("I am a function within this array!");
// 	},
// ];

// console.log(bar[0]);
// console.log(bar[0][1]);
// console.log(bar[3]());
// console.log("-------------------------------------");

// //
// const player = {
// 	name: "Josh the great",
// 	health: 1000,
// 	power: 1000,
// 	stamina: 1000,
// };

// const bigBadBoss = {
// 	name: "Magnardo the Merciless",
// 	health: 1000000000000000000,
// 	power: 10000000000000000,
// 	stamina: Infinity,
// };

// class Character {
// 	constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
// 	  this.legs = 2;
// 	  this.arms = 2;
// 	  this.name = name;
// 	  this.age = age;
// 	  this.eyes = eyes;
// 	  this.hair = hair;
// 	  this.lovesCats = lovesCats;
// 	  this.lovesDogs = lovesDogs || true;
// 	}
// 	greet (otherCharacter) {
// 	  console.log('hi ' + otherCharacter + '!');
// 	}
// 	classyGreeting (otherClassyCharacter) {
// 	  console.log('Howdy ' + otherClassyCharacter.name + '!');
// 	}
// 	setHair (hairColor) {
// 	  this.hair = hairColor;
// 	}
// 	smite () {
// 	  console.log('i smited thee.');
// 	}

//   }

//   class Hobbit extends Character {
// 	constructor (name, age, eyes, hair) {
// 	  super(name, age, eyes, hair);
// 	  this.skills = ["thievery", "speed", "willpower"];
// 	}
// 	steal () {
// 	  console.log('lets get away!');
// 	}
// 	greet (otherCharacter) {
// 	  console.log('Greetings ' + otherCharacter);
// 	}
// 	smite () {
// 	  super.smite();
// 	  this.steal();
// 	}
//   }
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   console.log(frodo);

class Car {
	constructor(maker, serialNumber) {
		this.serialNumber = serialNumber;
		this.maker = maker;
	}
	drive() {
		console.log("Vroom Vroom");
	}
}

const newCar = new Car("Mazda", 12345);
console.log(newCar);

class Factory {
	constructor(company) {
		this.company = company;
		this.cars = [];
	}
	generateCar() {
		const newCar = new Car(this.company, this.cars.length);
		this.cars.push(newCar);
	}
	findCar(index) {
		return this.cars[index];
	}
}
const tesla = new Factory("Tesla");
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0));

const porche = new Factory("Porche");
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(porche.findCar(0));
