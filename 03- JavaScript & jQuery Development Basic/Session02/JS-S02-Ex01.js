// console.log("Hello from Java Script");

// var someString = "Hello" + " " + "World";
// console.log(someString);

// var sedc = " and SEDC students";
// var result = someString + sedc;
// console.log(result);

// var result2 = `Goodbye world ${sedc}`;
// console.log(result2);



// var ex1 = 5 > 2;
// var ex2 = 2 == "2";
// var ex3 = 2 != "2";
// var ex4 = "Hello" == "Hello";

// console.log(`Ex1 = ${ex1}`);
// console.log(`Ex2 = ${ex2}`);
// console.log(`Ex3 = ${ex3}`);
// console.log(`Ex4 = ${ex4}`);

// var ex5 = !(5 < 3);
// console.log(`Ex5 = ${ex5}`);

// var val1 = 2;
// var val2 = 3;
// switch(val1){
// 	case 2:
// 	console.log("Case: 2 = 2");
// 	break;
// 	case 3:
// 	console.log("2 < 3");
// 	break;
// }

var value1 = prompt();
var value2 = prompt();
// var value1 = 120;
// var value2 = 130;
var valueToCompare = 100;
var value1Compare, value2Compare;
value1 = parseInt(value1);
value2 = parseInt(value2);
value1Compare = Math.abs(value1 - valueToCompare);
value2Compare = Math.abs(value2 - valueToCompare);
if (value1Compare < value2Compare) {console.log(`${value1} is clooser than ${value2}`)} 
	else if (value2Compare < value1Compare) {console.log(`${value2} is clooser than ${value1}`)}
		else {console.log("Both are the same difirence")};
