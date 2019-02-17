// function Person({name, lastName}) {
//     this.name = name;
//     this.lastName = lastName;
// }

// Person.prototype.sayName = function() {
//     return `Hi my name is ${this.name} ${this.lastName}`
// }

// function Programmer(obj) {
//     let {languages} = obj
//     this.languages = languages;
//     Person.call(this, obj);
// }

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.turnCoffeeIntoCode = function() {
//     return `I turn coffee into code like a pro !!`
// }

// let template = {
//     name: 'Sameer',
//     lastName: 'Ali',
//     languages: ['JavaScript', 'C#'],
// }

// let me = new Programmer(template);
// me
// console.log(me.sayName());

// class Person {
//     constructor(name, lastName) {   /*function Person*/
//         this.name = name;
//         this.lastName = lastName;
//     }

//     sayName() { /*Person.prototype*/
//         return `Hi my name is ${this.name} ${this.lastName}`
//     }
// }

// class Programmer extends Person {
//     constructor(name, lastName, languages) {
//         super(name, lastName);      /*Person.call(this, name, lastName)*/
//         this.languages = languages;
//     }

//     turnCoffeeIntoCode() {
//         return `I turn coffee into code like a pro !!`
//     }       
// }

// let me = new Programmer('Sameer', 'Ali', ['JavaScript', 'C#']);

// Animal propertie: name, breed, age, legs, tail, function makeSound 'I go ${this.sound}'
// Dog properties: owner, dogSound
// Cat properties: roommate, catSound

class Animal {
    constructor({name, breed, age, legs, tail, sound}) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.legs = legs;
        this.tail = tail;
        this.sound = sound;
    }
    makeSound() {
        return `I go ${this.sound}`
    }
}

class Dog extends Animal {
    constructor({name, breed, age, legs, tail, sound, owner}) {
        super({name, breed, age, legs, tail, sound});
        this.owner = owner;
    }
    myOwner() {
        return `My Owner is ${this.owner}`
    }       
}

class Cat extends Animal {
    constructor({name, breed, age, legs, tail, sound, roommate}) {
        super({name, breed, age, legs, tail, sound});
        this.roommate = roommate;
    }
    myRoommate() {
        return `My roommate is ${this.roommate}`
    }       
}

let infoTeddy = {
    name: 'Teddy',
    breed: 'Maltazer',
    age: 2,
    legs: 4,
    tail: 'Middume',
    sound: 'Woof Woof',
    owner: 'Sinisha'
}

let teddy = new Dog(infoTeddy);

console.log(teddy.makeSound())
let dogName = teddy.name;

dogName



