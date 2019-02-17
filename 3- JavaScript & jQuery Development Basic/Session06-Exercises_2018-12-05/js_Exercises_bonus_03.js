console.log("This script works great!");

/* *************************** */
/* *****  Bingo App ***** */
/* *************************** */

// Getting the global variables.
let btnBingo = document.getElementById("bingo");

// Declaring Database.
let bingoNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32 ,33 ,34 ,35, 36, 37];
let bingoWin = [1, 2, 3, 4, 5];

for (let i = 0; i < bingoNum.length; i++) {
        document.getElementById("numbers").innerHTML += `<li>${bingoNum[i]}</li>`;
}

// Event Listeners.
btnBingo.addEventListener("click", function() {
        let num01 = document.getElementById("bingo01").value;
        let num02 = document.getElementById("bingo02").value;
        let num03 = document.getElementById("bingo03").value;
        let num04 = document.getElementById("bingo04").value;
        let num05 = document.getElementById("bingo05").value;
        let bingoUser = [num01, num02, num03, num04, num05];
        let checkValue01 = 0;
        let checkValue02 = 0;
        let checkValue03 = 0;
        let checkValue04 = 0;
        let checkValue05 = 0;

        for (i = 0; i < bingoUser.length; i++) {
                if (bingoWin[0] == bingoUser[i]) {
                        checkValue01 += 1;
                }
                if (bingoWin[1] == bingoUser[i]) {
                        checkValue02 += 1;
                }
                if (bingoWin[2] == bingoUser[i]) {
                        checkValue03 += 1;
                }
                if (bingoWin[3] == bingoUser[i]) {
                        checkValue04 += 1;
                }
                if (bingoWin[4] == bingoUser[i]) {
                        checkValue05 += 1;
                }
        }
        if (checkValue01 == 1 && checkValue02 == 1 && checkValue03 == 1 && checkValue04 == 1 && checkValue05 == 1) {
                document.getElementById("result").innerHTML = `Congradulations ... You Won $1,000,000`;
        } else {
                document.getElementById("result").innerHTML = `More luck next time!`; 
        }
})
