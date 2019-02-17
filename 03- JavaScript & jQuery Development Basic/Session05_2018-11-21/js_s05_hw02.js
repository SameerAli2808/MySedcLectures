/*---------------------------------------------*/
/* Print All Numbers From an Array and The Sum */
/*---------------------------------------------*/

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Initializing the array
let numberSum = 0; // Initializing the summation variable
let firstHeader = document.getElementsByTagName("h1")[0]; // Getting the first header

/* Printing the number array */
firstHeader.innerHTML += `<p>Now we will get the array printed ...</p>`
firstHeader.innerHTML += `<ul>` // Opening the list
// Printing the list elements & get the summation
for(i = 0; i < numberArray.length; i++){
    firstHeader.innerHTML += `<li> ${numberArray[i]} </li>`
    numberSum += numberArray[i];
}
firstHeader.innerHTML += `</ul> <br>` // Closing the list

/* Printing the final result - same idea of printing the array - */
firstHeader.innerHTML += `The summation of the array numbers is: ${numberArray[0]}`
for(i = 1; i < numberArray.length; i++){
    firstHeader.innerHTML += ` + ${numberArray[i]}`
}
firstHeader.innerHTML += ` = ${numberSum}`
