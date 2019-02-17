console.log(`It's connected!`);

let mainArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let cleanArray = [];

for(i=1; i<mainArray.length; i++) {
    if(typeof(mainArray[i]) === "number" || typeof(mainArray[i]) === "boolean" || typeof(mainArray[i]) === "string") {
        if(mainArray[i] !== "") {
            cleanArray.push(mainArray[i]);
            console.log(mainArray[i]);
        }
    }
}
console.log(cleanArray);

let text = cleanArray[0];
$(document).ready(function() {
    for(i=1; i<cleanArray.length; i++){
        text += `, ${cleanArray[i]}`;
    }
    $("p").text(`${text}`);
});

