function findSummation(num1, num2){
    var sumResult = num1 + num2;
    return sumResult;
}

function findSubtraction(num1, num2){
    var subResult = num1 - num2;
    return subResult;
}

function findMultiplication(num1, num2){
    var mulResult = num1 * num2;
    return mulResult;
}

function findDivision(num1, num2){
    var divResult = num1 / num2;
    return divResult;
}

// console.log(findSummation(3,2));
// console.log(findSubtraction(3,2));
// console.log(findMultiplication(3,2));
// console.log(findDivision(3,2));


let number1 = prompt("Enter the first number");
// console.log(number1);
// console.log(typeof(number1));
number1 = parseInt(number1);

let number2 = parseInt(prompt("Enter the second number"));

console.log(findMultiplication(number1, number2));
