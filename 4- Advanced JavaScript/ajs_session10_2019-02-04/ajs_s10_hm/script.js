/************ Task 1 ************/
/* Create a constructor function for Person with properties { name, lastName, dateOfBirth, hometown }
    and add functions sayFullName() and age() to the prototype of the Person constructor function
*/
function Person({name, lastName, dateOfBirth, hometown}) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.hometown = hometown;
}
Person.prototype.sayFullName = function(){return `The full name is: ${this.name} ${this.lastName}`}
Person.prototype.age = function(){return `The age is: ${new Date().getFullYear() - this.dateOfBirth} years`}

/************ Task 2 ************/
/* Write a constructor function for Trainer with properties { name, lastName, dateOfBirth, hometown, course,
    yearsOfTeaching } that will have access to the functions from the Person prototype plus a function to its
    own prototype that will say the number of years the trainer has been teaching given course

    (bonus) use the Person constructor to create the mutual properties
    (bonus) use destructing for the parameters 
*/
function Trainer(obj) {
    let {course, yearsOfTeaching} = obj;
    this.course = course;
    this.yearsOfTeaching = yearsOfTeaching;
    Person.call(this, obj); 
}
Trainer.prototype = Object.create(Person.prototype);
Trainer.prototype.sayYearsOfTeaching = function(){return `The teaching years of ${this.course} are ${this.yearsOfTeaching}`};

let igor = {
    name:`Igor`,
    lastName: `Mitkovski`,
    dateOfBirth:1989,
    hometown: `Bitola`,
    course: `Advanced JavaSript`,
    yearsOfTeaching: 3,
}
console.log(igor);
igorTrainer = new Trainer(igor);
console.log(igorTrainer);

document.getElementById("div01").innerHTML = igorTrainer.sayFullName();
document.getElementById("div02").innerHTML = igorTrainer.age();
document.getElementById("div03").innerHTML = igorTrainer.sayYearsOfTeaching();

/************ Task 3 ************/
/* (bonus) Write a function that can be called on any array and return the sum of all the elements in that
    array that are numbers i.e.

    let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33] 
    arr.getSumOfNumbers(...) // output 52
*/

Array.prototype.mySumNumbers = function(callback) {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            result += this[i];
        }
    }    
    return result;
}

let myArray = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33]
let result = myArray.mySumNumbers(el => typeof(el) === 'number')
document.getElementById("div04").innerHTML = `The summation of numbers in the array <b>${myArray}</b> = ${result}`;

/************ Task 4 ************/
/* (bonus) Write a function that can be called on any object and return its keys and its values in seperate
    arrays, fillout predefined variables keys and values with the correct array i.e.

    let keys = [], values = []
    let person = {
    name: 'Martina',
    middleName: 'Luther',
    lastName: 'Queen'
    }
    person.getKeysAndVals() // with the return result fill the variables acordingly
    // expected
    keys === ['name', 'middleName', 'lastName']
    values === ['Martina', 'Luther', 'Queen']
*/

let person = {
name: 'Martina',
middleName: 'Luther',
lastName: 'Queen'
}

Object.prototype.getKeysAndVals = function() {
    let keys = Object.keys(this);
    let values = Object.values(this);
    return [keys, values];
}

let [key, value] = person.getKeysAndVals();
console.log(key, value)
document.getElementById("div05").innerHTML = `The keys are: ${key}`;
document.getElementById("div06").innerHTML = `The values are: ${value}`;





