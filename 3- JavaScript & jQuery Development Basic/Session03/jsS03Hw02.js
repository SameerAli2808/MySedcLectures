/*-------------------------------------*/
/* *** ATM - Auto Transfer Machine *** */
/*-------------------------------------*/

let customerAccountValue = 1000; // Declaring the money amount in the bank account
let withdrawAmount = parseInt(prompt(`Enter the money amount that you want to withdraw, please.`)); // The user entering the withdrawn amount.

atmFunction(withdrawAmount); // Calling the ATM function

// -----------------------------------------------------------------------------------------
/* *** Creating a function of ATM. *** */
function atmFunction(moneyAmount){    
    if(moneyAmount <= customerAccountValue){
        remainAmount = customerAccountValue - moneyAmount;
        alert(`You are withdrawing ${withdrawAmount}Eur\nYou will have ${remainAmount}Eur remained in your bank account.`)
    } else{
        alert(`Sorry, you dont have enough money in your bank account.`)
    }

}