console.log(`It's connected!`);

let petTypeArray = [];

function Pet(name, type, breed, preferredFood, age, isHealthy, owner) {
    this.name = name;
    this.type = type;
    this.breed = breed;
    this.preferredFood = preferredFood;
    this.age = age;
    this.isHealthy = isHealthy;
    this.owner = owner;
    this.eat = function() {
        return (`The ${this.type} ${this.name} eats ${this.preferredFood}`);
    };
    this.adopt = function(person) {
        this.owner = person;
    };
    this.isAdopted = function() {
        if(this.owner === "") {
            return "Not adopted";
        } else {
            return `Yes, adopted by ${this.owner}`;
        }
    }
}

let petArray = [
    new Pet ("Teddy", "Dog", "Maltezer", "Bones", 2, true, ""),
    new Pet ("Dily", "Cat", "Something", "Fishes", 4, true, ""),
    new Pet ("Silly", "Fish", "Golden", "Fish food", 1, true, ""),
    new Pet ("Bombo", "Bird", "Don't Know", "Bread", 7, true, ""),
    new Pet ("Fasty", "Turtil", "Ball", "Sea food", 24, true, "")
]

console.log(petArray);


function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.adopt = function(adoptType) {
        for(i=0; i<petArray.length; i++) {
            if(petArray[i].type === adoptType) {
                petArray[i].adopt(this);
            }
        }
    }
}

let personArray = [
    new Person ("Sameer", "Ali", "40"),
    new Person ("Sinisha", "Petkovski", "40")
];

personArray[0].adopt("Cat");

console.log(personArray);


