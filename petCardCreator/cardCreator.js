function Pet(name, type, age, owner) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner;
    this.id = Symbol(name);


    this.getDescription = function() {
        return this.name + "is a" + this.type + " and is " + this.age + " years old.";
    };

    this.haveBirthday = function () {
        this.age +1;
    };

    this.getOwnerName = function () {
        return this.owner?.name || "none";
    };
    this.getID = function() {
        return this.id;
    };

}

const pet1 = new Pet("Kirby", "cat", 6, { name: "Jim" });
const pet2 = new Pet("Tucker", "dog", 5);
const pet3 = new Pet("Sky", "lizard", 2, { name: "Tom" });

const pets = [pet1, pet2, pet3];

// Display each pet's information
console.log("Pet Information:");
for (const pet of pets) {
    console.log("Name:", pet.name);
    console.log("Type:", pet.type);
    console.log("Age:", pet.age);
    console.log("Owner:", pet.getOwnerName());
    console.log("Description:", pet.getDescription());
    console.log("ID:", pet.getID());
}

// Have a birthday for one pet
pet2.haveBirthday();

console.log("After Birthday:");
console.log("Name:", pet2.name);
console.log("Type:", pet2.type);
console.log("Age:", pet2.age);
console.log("Owner:", pet2.getOwnerName());
console.log("Description:", pet2.getDescription());

// Display the current date and time
console.log("Current Date and Time:");
console.log(new Date());
