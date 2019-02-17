/*------------------------------------*/
/* Concatenaiting First and Last Name */
/*------------------------------------*/

/* Declaring the arrays */
let firstName = ["Sameer", "Sinisha", "Omar", "Salam", "Akram"];
let lastName = ["Ali", "Petkovski", "AlHadithi", "AzZubaidi", "AdDilfi"];
let fullName = [];
let checkValue = 0;

/* Function to concatenate first and last name from two arrays */
function nameConcate(firstArray, lastArray){
    // Checking if is there any not String value in the first names array.
    for(itemCheck of firstArray){
        if(typeof(itemCheck) !== "string"){
            return checkValue = `There's a not String item in the first names array!`;
        }
    }
    // Checking if is there any not String value in the last names array.
    for(itemCheck of lastArray){
        if(typeof(itemCheck) !== "string"){
            return checkValue = `There's a not String item in the last names array!`;
        }
    }
    // Checking if both arrays have equale numbers of items, then fill the full name array.
    if(firstArray.lenght == lastArray.lenght){
        for(let i = 0; i < firstArray.length; i++){
            fullName.push(`${i+1}- ${firstArray[i]} ${lastArray[i]}`);
        }
    } else {
        alert(`Check the arrays, they might not have the same number of names!`);
    }
}

nameConcate(firstName, lastName); // Calling the function.
/* Checking if the check value doesn't equel 0 then alert the error message,
if not then print the full names new array */
if(checkValue !== 0){
    alert(checkValue);
} else {console.log(fullName);}
