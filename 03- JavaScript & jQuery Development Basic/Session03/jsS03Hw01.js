/*--------------------------------------*/
/* *** Human vs. Dog Age Conversion *** */
/*--------------------------------------*/

// Declaring the dog vs. human age converting arrays.
var smallDog = [0, 15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80];
var mediumDog = [0, 15, 24, 28, 32, 36, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87];
var bigDog = [0, 15, 24, 28, 32, 36, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 120];
var i; // Declaring for loop variable.
// Declaring the default values of the dogs ages per their sizes.
var smallDogAge = "- In small size dogs years, your age is more than 16 years old.";
var mediumDogAge = "- In medium size dogs years, your age is more than 16 years old.";
var bigDogAge = "- In big size dogs years, your age is more than 16 years old.";
// -----------------------------------------------------------------------------------------
humanVsDogAge(); // Calling the function.
// -----------------------------------------------------------------------------------------
/* *** Creating a function to convert the ages. *** */
function humanVsDogAge() {
    // The user choosing to convert his age or his dog's
    while((convertChoice !== 1) && (convertChoice !== 2)){
        var convertChoice = parseInt(prompt(`Enter:\n 1 - to convert Human age \n 2 - to convert Dog age`));
    }
    //-----------------------------------
    if(convertChoice === 1){
        var humanAge = parseInt(prompt(`Enter the human age, please:`)); //the user to enter his age
        // Fitching the dog age comparing with the human age, for all three categories.
        for (i = 0;i < smallDog.length; i++){
            if ((humanAge > smallDog[i]) && (humanAge <= smallDog[i+1])){
                smallDogAge = `- In small size dogs years, your age is between ${i} and ${i+1} years old.`;
            }
            if ((humanAge > mediumDog[i]) && (humanAge <= mediumDog[i+1])){
                mediumDogAge = `- In medium size dogs years, your age is between ${i} and ${i+1} years old.`;
            }
            if ((humanAge > bigDog[i]) && (humanAge <= bigDog[i+1])){
                bigDogAge = `- In big size dogs years, your age is between ${i} and ${i+1} years old.`;
            }
        }
        alert(`${smallDogAge}\n${mediumDogAge}\n${bigDogAge}`); //elarting the final result for the dog age.
    }
    //-------------------------------------
    if(convertChoice === 2){
        var dogAge = parseInt(prompt(`Enter the dog age, please:`)); // the user to enter the dog age.
        // Fitching the human age comparing with the dog age, for all three categories.
        if(dogAge <= 16){
            alert(`In human years, your dog would be\n==> ${smallDog[dogAge]} years old if it's small size\n==> ${mediumDog[dogAge]} years old if it's medium size\n==> ${bigDog[dogAge]} years old if it's big size`);
        }
        // the default final result.
        else{alert(`In human years, your dog would be\n==> older than 80 years old if it's small size\n==> older than 87 years old if it's medium size\n==> older than 120 years old if it's big size`);}
    }
}