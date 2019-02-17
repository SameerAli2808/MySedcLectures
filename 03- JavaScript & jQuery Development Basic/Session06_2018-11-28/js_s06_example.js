console.log("This script works great!");

//*****************************************
//*****           EXAMPLES            *****
//*****   The Groceries App with UI   *****
//*****************************************

// Global Variables
let groceries = [];

// Selectors
let resultDiv = document.getElementById("result").firstElementChild;
let messageDiv = document.getElementById("message");
let addItemRow = document.getElementById("addItem");
let findItemRow = document.getElementById("findItem");
let deleteItemRow = document.getElementById("deleteItem");
let getGroceriesRow = document.getElementById("getGroceries");

// Function: Printing All Groceries
function showGroceriesList(element){
    if(groceries.length === 0){
        return "No groceries on your list yet!"
    }
    element.innerHTML = "";
    for(let listItem of groceries){
        if (listItem !== null){
            element.innerHTML += `<li>${listItem}</li>`;
        }
    }
    return "Your Groceries:"
}

// Function: Adding Item to The List
function addToGroceriesList(item){
    if (typeof (item) === "string" && item.length > 1){
        groceries.push(item);
        return `You have added ${item} to the list!`;
    } else {
        return `The item ${item} was not added to the list. sorry.`;
    }
}

// Function: Checking for an Item in The List
function checkForItemInGroceriesList(item){
    for (let listItem of groceries){
        if (listItem === item){
            return `The item ${item} was found!`;
        }
    }
    return `There was no ${item} item in the list!`;
}

// Function: Deleting Item from The List
function deleteItemFromGroceries(item){
    for(let i = 0; i < groceries.length; i++){
        if (groceries[i] === item){
            groceries[i] = null;
            return `The item ${item} was deleted!`
        }
    }
    return `No item like ${item} to delete!`;
}

// Event Listener: Add Item On Click
addItemRow.querySelector("button").addEventListener("click", function(){
    let message = addToGroceriesList(addItemRow.querySelector("input").value);
    addItemRow.querySelector("input").value = "";
    messageDiv.innerText = message;
    showGroceriesList(resultDiv);
});

// Event Listener: Find Item On Click
findItemRow.querySelector("button").addEventListener("click", function(){
    let message = checkForItemInGroceriesList(findItemRow.querySelector("input").value);
    findItemRow.querySelector("input").value = "";
    messageDiv.innerText = message;
    showGroceriesList(resultDiv);
});

// Event Listener: Delete Item On Click
deleteItemRow.querySelector("button").addEventListener("click", function(){
    let message = deleteItemFromGroceries(deleteItemRow.querySelector("input").value);
    deleteItemRow.querySelector("input").value = "";
    messageDiv.innerText = message;
    showGroceriesList(resultDiv);
});

// Event Listener: Get Item On Click
getGroceriesRow.querySelector("button").addEventListener("click", function(){
    let message = showGroceriesList(resultDiv);
    messageDiv.innerText = message;
});




