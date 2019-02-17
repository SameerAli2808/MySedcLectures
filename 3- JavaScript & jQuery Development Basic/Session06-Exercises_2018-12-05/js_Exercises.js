console.log("This script works great!");

// Task 01
let a;
a = 7;
let b = 8;
let c = a + b;
console.log(c);
document.getElementById("task_01").innerHTML = `${a} + ${b} = ${c}`;

// Task 02
let intVar = 7;
let booVar = true;
let strVar = "OK";
console.log(`Type of integer variable is: ${typeof(intVar)}`);
console.log(`Type of Boolean variable is: ${typeof(booVar)}`);
console.log(`Type of string variable is: ${typeof(strVar)}`);
document.getElementById("task_02").innerHTML = `Value of integer variable is (${intVar}) and it's type is: ${typeof(intVar)}</br>
Value of Boolean variable is (${booVar}) and it's type is: ${typeof(booVar)}</br>
Value of string variable is (${strVar}) and it's type is: ${typeof(strVar)}`;

// Task 03
let varOne, varTwo;
varOne = 10; varTwo = 3;
let varDiv = varOne / varTwo;
let varWhole = Math.floor(varDiv);
let varRem = varOne % varTwo;
console.log(`The division result is: ${varDiv}`);
console.log(`The whole number result is: ${varWhole}`);
console.log(`The reminder result is: ${varRem}`);
document.getElementById("task_03").innerHTML = `The division result is: ${varDiv}</br>
The whole number result is: ${varWhole}</br>
The reminder result is: ${varRem}`;

// Task 04
let name;
name = "Sameer";
let lastName = "Ali";
console.log(`Hello ${name} ${lastName}`);
document.getElementById("task_04").innerHTML = `Hello ${name} ${lastName}`;

// Task 05
let firstNum = 4;
let secondNum = 7;
if(firstNum > secondNum){
        console.log(`Out of the numbers ${firstNum} & ${secondNum} is: ${firstNum}`);
        document.getElementById("task_05").innerHTML = `The larger number of the numbers ${firstNum} & ${secondNum} is: ${firstNum}`;
} else{
        console.log(`Out of the numbers ${firstNum} & ${secondNum} is: ${secondNum}`);
        document.getElementById("task_05").innerHTML = `The larger number of the numbers ${firstNum} & ${secondNum} is: ${secondNum}`; 
}

// Task 06
let checkNum = 4;
if(checkNum % 2 == 0 || checkNum > 100){
        console.log(`The number ${checkNum} is cool`);
        document.getElementById("task_06").innerHTML = `The number ${checkNum} is cool`;
} else{
        console.log(`The number ${checkNum} is not cool`);
        document.getElementById("task_06").innerHTML = `The number ${checkNum} is not cool`;
}

// Task 07
let denAmount; let eurAmount;
let exchangeValue = 61.5;
denAmount = 1000;
eurAmount = denAmount / exchangeValue;
document.getElementById("task_07").innerHTML = `Hence the exchange value is ${exchangeValue}, then ${denAmount} Denars will be ${eurAmount.toFixed(2)} Euros.`;

// Task 08
let day;
day = "Monday";
switch(day){
        case "Monday":
                document.getElementById("task_08").innerHTML = `It's ${day}, I am at SEDC`;
        break;
        case "Tuesday":
                document.getElementById("task_08").innerHTML = `It's ${day}, I am free`;
        break;
        case "Wednesday":
                document.getElementById("task_08").innerHTML = `It's ${day}, I am at SEDC`;
        break;
        case "Thursday":
                document.getElementById("task_08").innerHTML = `It's ${day}, I am free`;
        break;
        case "Friday":
                document.getElementById("task_08").innerHTML = `It's ${day}, I am free`;
        break;
        case "Saturday":
                document.getElementById("task_08").innerHTML = `It's ${day}, I am not sure`;
        break;
        case "Sunday":
                document.getElementById("task_08").innerHTML = `It's ${day}, I am free`;
        break;
        default:
                document.getElementById("task_08").innerHTML = `Are you sure there's a day called ${day}!`;
        break;
}

// Task 09
let intArray; let strArray;
intArray = [5, 8, 9, 25, 45, 76];
strArray = ["Sameer", "Sinisha", "Mustafa", "Azzahra", "Murtadha", "Haider"];
document.getElementById("task_09").innerHTML = `The first value of the integer array is ${intArray[0]}</br>`;
document.getElementById("task_09").innerHTML += `The first value of the string array is ${strArray[0]}</br>`;
document.getElementById("task_09").innerHTML += `The integer array elements are: `;
for(i = 0; i < intArray.length; i++){
        if(i == intArray.length - 1){document.getElementById("task_09").innerHTML += `${intArray[i]}.</br>`;}
        else{document.getElementById("task_09").innerHTML += `${intArray[i]}, `}
}
document.getElementById("task_09").innerHTML += `The string array elements are: `;
for(i = 0; i < strArray.length; i++){
        if(i == strArray.length - 1){document.getElementById("task_09").innerHTML += `${strArray[i]}.</br>`;}
        else{document.getElementById("task_09").innerHTML += `${strArray[i]}, `}
}
intArray[0] = 9;
strArray[0] = "Anyone";
intArray[99] = 123;
document.getElementById("task_09").innerHTML += `The lenght of the integer array after adding is: ${strArray.length}</br>`;
document.getElementById("task_09").innerHTML += intArray + `</br>`;
document.getElementById("task_09").innerHTML += `The 99<sup>th</sup> element of the integer array is: ${intArray[98]}</br>`;
document.getElementById("task_09").innerHTML += `The string array <b>before</b> pushing is: ${strArray}</br>`;
strArray.push("Everyone");
document.getElementById("task_09").innerHTML += `The string array <b>after</b> pushing is: ${strArray}</br>`;
document.getElementById("task_09").innerHTML += `The string array <b>before</b> poping is: ${strArray}</br>`;
strArray.pop();
document.getElementById("task_09").innerHTML += `The string array <b>after</b> pushing is: ${strArray}</br>`;
document.getElementById("task_09").innerHTML += `The 1000<sup>th</sup> element of the integer array is: ${intArray[999]}</br>`;
document.getElementById("task_09").innerHTML += `The 1000<sup>th</sup> element of the string array is: ${strArray[999]}</br>`;

// Task 10
let counter = 1;
while(counter <= 10){
        console.log(counter);
        document.getElementById("task_10").innerHTML += `${counter}</br>`;
        counter++;
}

// Tassk 11
let counter11 = 1;
while(counter11 <= 20){
        console.log(counter11);
        document.getElementById("task_11").innerHTML += `${counter11}</br>`;
        counter11 += 2;
}

// Task 12
let sumArray = [2, 5, 34, 56, 87, 124, 2, 7, 8];
let sumValue = 0;
for(i = 0; i < sumArray.length; i++){
        sumValue += sumArray[i];
}
console.log(`The summation of the array elements is: ${sumValue}`);
document.getElementById("task_12").innerHTML = `The summation of the numbers ${sumArray} is: ${sumValue}`;

// Task 13
let sumPostArray = [2, 5, -34, 56, 87, 124, -2, 7, -8];
let sumPostValue = 0;
for(i = 0; i < sumPostArray.length; i++){
        if(sumPostArray[i] > 0){
                sumPostValue += sumPostArray[i];
        }
}
console.log(`The summation of the posetive numbers in the array is: ${sumPostValue}`);
document.getElementById("task_13").innerHTML = `The summation of the posetive numbers in the array ${sumPostArray} is: ${sumPostValue}`;

// Task 14
let orgArray = [2, 5, -34, 56, 87, 124, -2, 7, -8];
let revArray = [];
for(i = orgArray.length; i != 0; i--){
        console.log(orgArray[i-1]);
        revArray.push(orgArray[i-1]);
}
console.log(revArray);
document.getElementById("task_14").innerHTML = `The oreginal array is: ${orgArray}</br>`;
document.getElementById("task_14").innerHTML += `The reversed array is: ${revArray}`;

// Task 15
let aveArray = [2, 5, -34, 56, 87, 124, -2, 7, -8];
let sumArrValue = 0;
for(i = 0; i < aveArray.length; i++){
        sumArrValue += aveArray[i];
}
let aveValue = sumArrValue / aveArray.length;
document.getElementById("task_15").innerHTML = `The average of the numbers in the array ${aveArray} is: ${aveValue}`;

// Task 16
function prtName(){
        console.log("Sameer");
        document.getElementById("task_16").innerHTML = `Sameer`;
}
prtName();

// Task 17
function prtArgName(name){
        console.log(`Hello ${name}`);
        document.getElementById("task_17").innerHTML = `Hello ${name}`;
}
prtArgName("Sameer");

// Task 18
function addFunc(numOne, numTwo){
        let numSum = numOne + numTwo;
        document.getElementById("task_18").innerHTML = `The summation of ${numOne} & ${numTwo} is ${numSum}`;
        return numSum;
}
addFunc(4, 12);

// Task 19
function oddEven(numCheck){
        if(numCheck % 2 == 0){
                document.getElementById("task_19").innerHTML =`The number ${numCheck} is even number`;    
        } else{
                document.getElementById("task_19").innerHTML = `The number ${numCheck} is odd number`;
        }
}
oddEven(9);

// Task 20
function numOfEven(){
        let evenCounter = 0;
        for(i = 0; i < arguments.length; i++){
                if(arguments[i] % 2 == 0){
                        evenCounter++;
                }
        }
        document.getElementById("task_20").innerHTML = `The number of even numbers in the array is: ${evenCounter}`;
}
numOfEven(4, 8, 12, 34, 63, 99, 23, 42);

// Task 21
let selectedHeader = document.getElementById("to_be_choose");
document.getElementById("task_21").innerHTML = `This element had been selected:</br>"${selectedHeader.innerText}"`;

// Task 22
let pOne = document.getElementsByClassName("pOne")[0];
let pTwo = document.getElementsByClassName("pTwo")[0];
document.getElementById("task_22").innerHTML = `This is the first p: ${pOne.innerText}</br>`;
document.getElementById("task_22").innerHTML += `This is the second p: ${pTwo.innerText}</br>`;

// Task 23
let firstH3 = document.getElementsByTagName("h3")[0];
document.getElementById("task_23").innerHTML = `This is the first H3: ${firstH3.innerText}</br>`;

// Task 24
let findSecondParagraph = document.getElementsByTagName("div")[0].lastElementChild;
document.getElementById("task_24").innerHTML = `The second p element is: ${findSecondParagraph.innerText}`;

// Task 25
let header01 = document.getElementById("change");
header01.innerHTML = `This had been changed`;

// Task 26
let tableChange = document.getElementsByTagName("ul")[0];
for(f = 1; f <= 5; f++){
        tableChange.innerHTML += `<li>${f}</li>`;
}
