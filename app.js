//  USING AN ARRAY INSIDE OF AN OBJECT
const adventurer = {
	name: "Medivh",
	hitPoint: 10,
	belongings: ["staff", "sword", "potions", "daggers"],
	companion: {
		name: "jax",
		type: "firefly",
		belongings: ["potions", "crystals", "rings"],
	},
};

// ACCESS THE VALUES IN THE PLAYERS BELONGINGS ARRAY
console.log(adventurer.belongings);

// ACCESS ADVENTURER'S FIRST BELONGING
console.log(`${adventurer.name}'s first belongin: ${adventurer.belongings[0]}`);

// ITERATE OVER AN ARRAY WITHIN AN OBJECT
for (let i = 0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}

// ACCESS NESTED ELEMENTS WITHIN OUR OBJECT
console.log(
	`${adventurer.name}'s companion's name is ${adventurer.companion.name}`
);
console.log(
	`${adventurer.companion.name}'s belongings is ${adventurer.companion.belongings[2]}`
);

//
const movies = [
	{ title: "SpiderMan" },
	{ title: "A Goofy Movie" },
	{ title: "A Christmas Story" },
];

console.log(movies[0]);
console.log(movies[0].title);
console.log("-------------------------------------");
// LOOPING OVER ARRAY OF OBJECTS
for (let i = 0; i < movies.length; i++) {
	console.log(movies[i].title);
}
console.log("-------------------------------------");

// COMBINE OBJECTS, ARRAYS AND FUNCTIONS
const foo = {
	arr: [1, 2, 3],
	obj: {
		prop: "My object's property",
	},
	doSomething: () => {
		console.log("I did something!");
	},
};

console.log(foo.arr[0]);
console.log(foo.obj.prop);
foo.doSomething();
console.log("-------------------------------------");

// AN ARRAY OF ARRAYS
const bar = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	() => {
		console.log("I am a function within this array!");
	},
];

console.log(bar[0]);
console.log(bar[0][1]);
console.log(bar[3]());
console.log("-------------------------------------");

//
const player = {
	name: "Josh the great",
	health: 1000,
	power: 1000,
	stamina: 1000,
};

const bigBadBoss = {
	name: "Magnardo the Merciless",
	health: 1000000000000000000,
	power: 10000000000000000,
	stamina: Infinity,
};
//

class Character {
	constructor(
		name,
		arms = 2,
		legs = 2,
		eyes = "brown",
		hair = "black",
		lovesDogs,
		lovesCats
	) {
		this.name = name;
		this.arms = arms;
		this.eyes = eyes;
		this.hair = hair;
		this.legs = legs;
		this.lovesDogs = lovesDogs;
		this.lovesCats = lovesCats || true;
	}

	greet(otherCharacter) {
		console.log(`Hello, ${otherCharacter}`);
	}

	smite() {
		console.log(`I smite thee, vile creature!!`);
	}

	changeHairColor(newColor) {
		this.hair = newColor;
	}
}

const Alexander = new Character("Alexander", 2, 2, "red", "grey");
const Brock = new Character();

console.log(Alexander);
console.log(typeof Alexander);
Alexander.greet("Brock");
Brock.greet("Alexander");
Brock.smite();
Alexander.changeHairColor("purple");
console.log(Alexander);
console.log("-------------------------------------");
