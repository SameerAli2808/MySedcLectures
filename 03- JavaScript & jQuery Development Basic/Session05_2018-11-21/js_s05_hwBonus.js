/*--------------------------*/
/* Creat a Food Recipe Page */
/*--------------------------*/

let recipeName = prompt(`What's your recipe name?`) // Getting the recipe name from the user
let recipeIngredients = []; // Declaring the recipe ingredients array

/* Getting the number of ingrediants from the user and checking if it's number type */
let recipeItemsNumber = parseInt(prompt(`How many ingredients your recipe has?`));
while(isNaN(recipeItemsNumber) === true){
    recipeItemsNumber = parseInt(prompt(`Enter the NUMBER of your recipe ingrediants, please`));
}

/* Writing the name of the recipe in the heading of the table */
let tableHead = document.getElementById("th");
tableHead.innerHTML = `<th>Recipe to make: <b>${recipeName}</b></th>`;

/* Writing the ingrediants in the table */
let tableBody = document.getElementById("tb");
for(i = 0; i < recipeItemsNumber; i++){
    recipeIngredients.push (prompt(`What the ingrediant No. ${i+1} is?`));
    tableBody.innerHTML += `<tr><td>${recipeIngredients[i]}</td></tr>`;
}
