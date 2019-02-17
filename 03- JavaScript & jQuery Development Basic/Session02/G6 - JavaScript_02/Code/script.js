// Strings
var someString = "Hello" + " " +  "World"; // Hello World with empty space
someString = "Hello" + " World" // Hello world with empty space in the World string
console.log(someString);
var sedc = " and sedc students";

var result = someString + sedc; // Concatanating variables
console.log(result);

var result2 = "Bye world" + sedc; // String concatanation the old way
result2 = `Bye world ${sedc}`; // String concatanation the new way
console.log(result2); 

var newString = `It''s fun 
learning JS`;
// "" '' - basically the same
// `` new whay, allows us to write strings in multiple lines
console.log(newString);

// var brokenString = 'Learning javascript and it's awesome';
var escapedString = 'Learning javascript and it\'s awesome'; // Escaping with \

// Operators
var ex1 = 5 > 2; 
var ex2 = 2 == "2"; 
var ex3 = 2 != "2"; 
var ex4 = "Hello" == "Hel";

console.log(`Ex1 = ${ex1}`);
console.log(`Ex2 = ${ex2}`);
console.log(`Ex3 = ${ex3}`);
console.log(`Ex4 = ${ex4}`);

// Logical operations
var ex5 = !(5 < 3);
console.log(`Ex5 = ${ex5}`);

// Complex logical operations
var ex6 = (true) && (1 < 3);
var ex7 = (0 === "0") || (false);
var ex8 = ("Hello" == "Hello") && !( 0 > 4 );

console.log(`Ex6 = ${ex6}`);
console.log(`Ex7 = ${ex7}`);
console.log(`Ex8 = ${ex8}`);

// Simple if example
var num1 = 7;
var num2 = 7;

if(num1 > num2){
	console.log("One is greater");
} else if(num1 < num2){
	console.log("One is smaller");
} else{
	console.log("They are probobly same!");
}

//Simple switch example
var order = "coffee" // Change the value of the variable order and try the outputs
switch(order){
 case "coffee":
  console.log("You ordered coffee");
  break;
 case "juice":
  console.log("You ordered juice");
  break;
 default:
  console.log("No item like " + order);
  break;
}

// Exercise 1
var num1 = 99;
var num2 = 101;
var test = 100;
var difference1 = test-num1;
var difference2 = test-num2;

if(difference1 < 0){
	difference1 *= -1;
	// difference1 = difference1 * -1;
}
if(difference2 < 0){
	difference2 *= -1;
	// difference2 = difference2 * -1;
}

if(difference1 < difference2){
	console.log(`${num1} is closer!`);
} else if(difference2 < difference1){
	console.log(`${num2} is closer`);
} else{
	console.log(
		`${num1} and ${num2} are at the same distance`);
}