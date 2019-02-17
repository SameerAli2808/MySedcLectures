console.log("The script is running smoothly!");

// Functions
function doSomething(){
    console.log("My function is working fine.");
    console.log("Thanks for asking!");
}

doSomething();
doSomething();
doSomething();

// Arguments and parameters
function greetPerson(name){
    console.log(`Hello there ${name}!`);
}
greetPerson("Martin");
greetPerson("Bob");
greetPerson(23);

function greetPerson2(firstName, lastName){
    console.log(`Hello there ${firstName} ${lastName}!`);
}

greetPerson2("Martin", "Panovski");
greetPerson("Martin");
greetPerson("Bob");
greetPerson(23);

var name = "Martin";
function greetSomeone(){
    console.log(`Hello there ${name}!`);
}
greetSomeone();
name = "Dragan";
greetSomeone();
name = "Bob";

// Returning values
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(`Calculating ${num1} and ${num2}`);
    return result;
    console.log(`Goodbye!`); // this will not execute
}

var funcResult = sumNumbers(2,3);
console.log(funcResult);
console.log(sumNumbers(2,3));

var test = funcResult + 5;

var test1 = sumNumbers(5,5) + 10;

// Exercise 1
function sumNumbers(num1, num2){
    var result = num1 + num2;
    return result;
}

function subtractNumbers(num1, num2){
    var result = num1 - num2;
    return result;
}

function multiplyNumbers(num1, num2){
    var result = num1 * num2;
    return result;
}

function divideNumbers(num1, num2){
    var result = num1 / num2;
    return result;
}

// Inputs and parsing
let number1 = prompt("Enter the first number:");
// console.log(typeof(number1));
number1 = parseInt(number1);

let number2 = parseInt(prompt("Enter the second number:"));

console.log(multiplyNumbers(number1, number2));

console.log(parseInt("3.5"));
console.log(parseFloat("3.5"));

console.log(parseInt("3"));
console.log(parseFloat("3"));


// Exercise 2
function farToCel(celsius){
    let result = celsius * 1.8 + 32;
    return result;
}
function celToFar(farenheits){
    let result = (5/9) * (farenheits-32);
    return result;  
}
let personChoice = prompt("Enter F for farenheit and C for celsius");
let personInput = parseInt(prompt("Please enter value:"));
if(personChoice === "F"){
    console.log(`${celToFar(personInput)}C`);
} else if(personChoice === "C"){
    console.log(`${farToCel(personInput)}F`);
} else {
    console.log("ERROR!");
}




