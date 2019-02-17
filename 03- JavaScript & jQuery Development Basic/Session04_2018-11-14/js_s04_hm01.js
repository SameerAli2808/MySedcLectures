/*----------------------------------------*/
/* Summation of Max. & Min. Numbers in Array */
/*----------------------------------------*/

let numArray = [2, 5, 8, NaN, 12, true, 76, 12, null, -1, undefined, -52, "ererwre"];

var sumNum; //the summation value.

/* Function to calculate the summation of the max. & min. numbers in an array */
function maxMinSum(){
    let maxNum, minNum; // Declaring variables.
    
    /* Finding first item of type number and set it as max. and min.*/
    maxNum = -Infinity; minNum = Infinity;
    /*
    for(let i = 0; i < numArray.length; i++){
        if(typeof(numArray[i]) === "number"){
            maxNum = numArray[i];
            minNum = numArray[i];
            break;
        }
    }
    */
    /* Checking all the array items, if the item is number,
    then compare its value with max. and min. and if so then set its value insted of thems*/
    for(let arrayNum of numArray){
        if(typeof(arrayNum) === "number"){
            if(arrayNum > maxNum){
                maxNum = arrayNum;
            }
            if(arrayNum < minNum){
                minNum = arrayNum;
            }
        }
    }
    sumNum = maxNum + minNum;
    alert(`Max.: ${maxNum}, Min.: ${minNum}, Sum.: ${sumNum}`);
    return sumNum;
}

maxMinSum(); // Calling the function.