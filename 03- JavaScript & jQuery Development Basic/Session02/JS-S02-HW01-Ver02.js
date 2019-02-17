var numberIndex, numberValue, numberTotal = 0, numberAverage, i;
alert(`Please, enter how many numbers you want to the average of:`);
numberIndex = prompt();
numberIndex = parseInt(numberIndex);
for (i = 0; i < numberIndex; i++) {
	alert(`Enter your ${i+1} number:`)
	numberValue = prompt();
    numberValue = parseInt(numberValue);
    while(isNaN(numberValue) || (numberValue < 0)) {
	   alert(`Enter a positive number, please ...`);
	   numberValue = prompt();
       numberValue = parseInt(numberValue);
    }
    numberTotal += numberValue;
}
numberAverage = numberTotal / numberIndex;
console.log(`The average of the ${numberIndex} numbers you entered = ${numberAverage}`);
alert(`The average of the ${numberIndex} numbers you entered = ${numberAverage}`);