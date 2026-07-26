function Pet(name, type, age, owner) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner;
    this.id = Symbol(name);


    this.getDescription = function() {
        return `${this.name} is a ${this.type} and is ${this.age} years old.`;
    };

    this.haveBirthday = function () {
        this.age ++;
    };

    this.getOwnerName = function () {
        return this.owner?.name || "none";
    };
    this.getID = function() {
        return this.id;
    };

}

const pet1 = new Pet("Kirby", "Cat", 6, { name: "Jim" });
const pet2 = new Pet("Tucker", "Dog", 5);
const pet3 = new Pet("Sky", "Lizard", 2, { name: "Tom" });

const pets = [pet1, pet2, pet3];


console.log("Pet Information:");
for (const pet of pets) {
    console.log("Name:", pet.name);
    console.log("Type:", pet.type);
    console.log("Age:", pet.age);
    console.log("Owner:", pet.getOwnerName());
    console.log("Description:", pet.getDescription());
    console.log("ID:", pet.getID());
}


pet2.haveBirthday();

console.log("After Birthday:");
console.log("Name:", pet2.name);
console.log("Type:", pet2.type);
console.log("Age:", pet2.age);
console.log("Owner:", pet2.getOwnerName());
console.log("Description:", pet2.getDescription());


console.log("Current Date and Time:");
console.log(new Date());

/* 
What does this refer to in your constructor and methods?
This refers to the new object being created in the constructor and methods calls the specific object.

What does optional chaining do in your code?
This allows for checking if an object exists or if it's undefined. If it is undefined, it returns. If it exists, it returns the owner's name.
It is so the code does not produce a possible error.

Why might the Date object be useful in a JS program?
Date is extremely important depending on what your task is. Calendars or Countdowns need the Date object to function.
Timestamps are also a big example of Date object use.
*/
