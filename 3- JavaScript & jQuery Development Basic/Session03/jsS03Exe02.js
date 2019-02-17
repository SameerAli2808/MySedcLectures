function celsiusToFahrenhite(cValue){
    let tempFahrenhite = (cValue * (9/5)) + 32;
    return tempFahrenhite;
}

function FahrenhiteToCelsius(fValue){
    let tempCelsius = (fValue - 32) * 5/9;
    return tempCelsius;
}

let personChoice = prompt("Enter f for Fahrenhite or c for Celsius")
if (personChoice === "f") {
    let tempFahrenhite = parseInt(prompt("Enter Temperature in Fehrenhite, please ..."));
    alert(`The temperature in Celsius is ${FahrenhiteToCelsius(tempFahrenhite)}`);
    if (personChoice === "c"){
        let tempCelsius = parseInt(prompt("Enter Temperature in Celsius, please ..."));
        alert(`The temperature in Fahrenhite is ${celsiusToFahrenhite(tempCelsius)}`);}
        else {
            alert(`Something went wrong`);
        }
    }



