/* Program to calculater the average of three numbers
that they must be not letters or negetive*/

alert(`Please, enter 3 positive numbers`);
var number01, number02, number03;             // Declearing the 3 numbers variables.
var numbersAverage;
alert(`Enter 1st number, please!`);
number01 = prompt();                         // Asking the user to enter the 1st number.
number01 = parseInt(number01);               // Converting the entrance to integer.
// Checking if the 1st number is an integer.
while(isNaN(number01) || (number01 < 0)) {
	alert(`Enter a positive number, please ...`);
	number01 = prompt();
    number01 = parseInt(number01);
}
alert(`Enter 2nd number, please!`);
number02 = prompt();                         // Asking the user to enter the 2nd number.
number02 = parseInt(number02);               // Converting the entrance to integer.
// Checking if the 2nd number is an integer.
while(isNaN(number02) || (number02 < 0)) {
	alert(`Enter a positive number, please ...`);
	number02 = prompt();
    number02 = parseInt(number02);
}
alert(`Enter 3rd number, please!`);
number03 = prompt();                         // Asking the user to enter the 3rd number.
number03 = parseInt(number03);               // Converting the entrance to integer.
// Checking if the 3rd number is an integer.
while(isNaN(number03) || (number03 < 0)) {
	alert(`Enter a positive number, please ...`);
	number03 = prompt();
    number03 = parseInt(number03);
}
numbersAverage = (number01 + number02 + number03) / 3;
console.log(`The average of your three numbers = ${numbersAverage}`);
alert(`The average of your three numbers = ${numbersAverage}`);