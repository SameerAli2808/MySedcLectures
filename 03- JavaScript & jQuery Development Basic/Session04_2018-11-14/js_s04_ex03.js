/*--------------------*/
/* Seconds Calculator */
/*--------------------*/

/* Asking the user to enter the value of seconds */
let secondsValue = parseInt(prompt(`Kindly, enter the value of seconds you want to convert:`));

/* Checking if the entered value is not string or vegetive number */
while(!secondsValue || (secondsValue < 0)){
    secondsValue = parseInt(prompt(`Kindly, enter the value of seconds you want to convert:`));
}

//var finalValue; //the final calulcated value of time.

/* Function to convert the seconds value to day, hours, minute and hours. */
function calculateTime(seconds){
    let day, hur, min, sec, dayValue, hurValue, minValue, secValue;
    //var finalValue;
    day = Math.floor(seconds / 86400); // calculating the days value.
    hur = Math.floor(seconds / 3600) - (day * 24); // calculating the hours value.
    min = Math.floor(seconds % 3600 / 60); // calculating the minutes value.
    sec = Math.floor(seconds % 3600 % 60); // calculating the seconds value.

    /* Here will check the time values that we got, if it's 0, 1 or more */
    dayValue = day > 0 ? (day == 1 ? `There are ${day} day: ` : `There are ${day} days: `) : `There are 0 day: `;
    hurValue = hur > 0 ? (hur == 1 ? `${hur} hour: ` : `${hur} hours: `) : `0 hour: `;
    minValue = min > 0 ? (min == 1 ? `${min} minute: ` : `${min} minutes: `) : `0 minute: `;
    secValue = sec > 0 ? (sec == 1 ? `${sec} second.` : `${sec} seconds.`) : `0 second.`;

    return finalValue = dayValue + hurValue + minValue + secValue;
    //return finalValue;
}

calculateTime(secondsValue); // Calling the function
alert(finalValue);
//console.log(calculateTime(secondsValue));
console.log(finalValue);