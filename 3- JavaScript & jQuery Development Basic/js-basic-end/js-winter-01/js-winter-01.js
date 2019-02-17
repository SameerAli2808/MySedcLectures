console.log(`It's connected!`);

let numRanksArray = [];
let digits;
let writtin = "";
let writtin01 = "";
let messege = "";
let messegeNum = "";
let finalWriteNumber = [];
let unitsNumbersArray = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tensNumbersArray = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let teensNumbersArray = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninetenn"]
let ranksNames = ["", "thousand", "million", "bilion (milliard)", "trillion (billion)", "quadrillion (billiard)", "quintillion (trillion)", "sextillion (trilliard)", "septillion (quadrillion)", "octillion (quadrilliard)", "nonillion (quintillion)", "decillion (quintilliard)"]

function rank(digits, absInput) {
    let check = digits % 3;
    if(check == 0) {
        let ranks = Math.floor(digits / 3);
        for(i = 3; i <= ranks*3; i=i+3) {
            numRanksArray.push(absInput.toString().substr(-i, 3));
        }
        return ranks;
    } else {
        let ranks = Math.floor(digits / 3) + 1;
        for(i = 3; i <= ranks*3; i=i+3) {
            if(i < digits){
                numRanksArray.push(absInput.toString().substr(-i, 3));
            } else {
                numRanksArray.push(absInput.toString().substr(-i, check));
            }
        }
        return ranks;
    };
}

function writeNumber(rankValue) {
    writtin = "";
    writtin01 = "";
    let units = rankValue.toString().substr(-1);
    let tens = rankValue.toString().slice(-2,-1);
    let hundreds = rankValue.toString().slice(-3,-2);
    
    if(rankValue < 10) {
        writtin = unitsNumbersArray[units];
    } else if(rankValue < 20) {
        writtin = teensNumbersArray[units];
    } else if(rankValue < 100 && units != 0) {
        writtin = `${tensNumbersArray[tens-1]}-${unitsNumbersArray[units]}`;
    } else if(rankValue < 100 && units == 0) {
        writtin = tensNumbersArray[tens-1];
    } else {
        let num = parseInt(rankValue.toString().slice(-2));
        if(num == 0) {
            writtin01 = "";
        } else if(num < 10) {
            writtin01 = unitsNumbersArray[num];
        } else if(num < 20) {
            writtin01 = teensNumbersArray[units];
        } else if(num < 100 && units != 0) {
            writtin01 = `${tensNumbersArray[tens-1]}-${unitsNumbersArray[units]}`;
        } else if(num < 100 && units == 0) {
            writtin01 = tensNumbersArray[tens-1];
        }
        writtin = `${unitsNumbersArray[hundreds]} hundred ${writtin01}`;
    }   
    return writtin;
}

function printNumber(input) {
    if(input < 0) {
        messege = `minus `;
        messegeNum = `- `;
    }

    for(i = numRanksArray.length; i > 1; i--){
        messegeNum += `${numRanksArray[i-1]},`;
    }
    messegeNum += `${numRanksArray[0]}`;
    
    
    if(input == 0) {
        messege = `zero`;
    } else {
        for(i = finalWriteNumber.length; i > 0; i--) {
            if(finalWriteNumber[i-1] === "") {
                messege += `${finalWriteNumber[i-1]}`;
            } else {
                messege += `${finalWriteNumber[i-1]} ${ranksNames[i-1]} `;
            }
        }
    }

    $("h2").text(`The number ${messegeNum} is writtin like:`)
    $("h3").text(`${messege}`);

    finalWriteNumber = [];
    messege = "";
    messegeNum = "";
}

$(document).ready(function() {
    $("button").click(function() {
        numRanksArray = [];
        let input = $("input").val();
        let absInput;
        if(input >= 0){
            absInput = input;
            digits = absInput.toString().length;
        } else {
            absInput = input * -1;
            digits = absInput.toString().length;
        }
        
        rank(digits, absInput);

        for(i = 0; i < numRanksArray.length; i++) {
            finalWriteNumber.push(`${writeNumber(numRanksArray[i], i)}`);
        }

        printNumber(input);
    })
});

