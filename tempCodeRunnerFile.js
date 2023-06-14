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