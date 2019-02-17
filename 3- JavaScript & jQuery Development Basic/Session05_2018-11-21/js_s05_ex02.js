console.log(`It works!`);

let userWeight = parseInt(prompt(`Enter your weight in kg, please:`));

function weightInChickens(weightInKg){
    let userInChicken = weightInKg / 0.5;
    return userInChicken;
}

let myVar = weightInChickens(userWeight);
console.log(myVar);


let getBody = document.getElementsByTagName("body")[0];
getBody.innerHTML += `<h2>Your weight in Chicken is .......</h2>`;
getBody.innerHTML += `<p></p>`;
getBody.innerHTML += `${myVar}`;

