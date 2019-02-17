console.log("This script works great!");

/* *************************** */
/* *****  Recipe App ***** */
/* *************************** */

// Selectors.
let btnAdd = document.getElementById("add");
let btnLong = document.getElementById("longTime");
let btnShort = document.getElementById("shortTime");
let btnAll = document.getElementById("showAll");
let note = document.getElementById("note");

// Declaring Database.
let nameArray = [];
let ingrArray = [];
let timeArray = [];
let btnDelete = [];


// Event Listeners.
btnAdd.addEventListener("click", function() {
        let name = document.getElementById("rcpName").value;
        let ingr = document.getElementById("rcpIngr").value;
        let time = document.getElementById("recTime").value;
        
        if ((name !== "") && (ingr !== "") && (time != "")) {
                nameArray.push(name);
                ingrArray.push(ingr);
                timeArray.push(time);
                note.innerHTML = `You added ${name} recipe to the list.`;
                document.getElementById("rcpName").value = "";
                document.getElementById("rcpIngr").value = "";
                document.getElementById("recTime").value = "";  
        } else {
                note.innerHTML = `All fields are required!`;   
        }
})

btnAll.addEventListener("click", function() {
        if (nameArray.length !== 0) {
                document.getElementById("recipe").innerHTML = "";
                for (let i = 0; i < nameArray.length; i++) {
                document.getElementById("recipe").innerHTML += `<td>${i+1}</td><td>${nameArray[i]}</td><td>${ingrArray[i]}</td><td>${timeArray[i]}</td><td><button id="del${i}">Delete</button></td>`;       
                btnDelete[i] = document.getElementById(`del${i}`);
                }
        } else {
                note.innerHTML = `There is nothing to be shown`;
        }
        deleteFunc();
})

function deleteFunc(){
for (let i = 0; i < btnDelete.length; i++) {
        document.getElementById(`del${i}`).addEventListener("click", function(){
                console.log(i);
                nameArray.splice(i, 1);
                ingrArray.splice(i, 1);
                timeArray.splice(i, 1);
                btnDelete.splice(i, 1);
                document.getElementById("recipe").innerHTML = "";
                for (let x = 0; x < nameArray.length; x++) {
                        if(nameArray[x] !== null) {
                                document.getElementById("recipe").innerHTML += `<td>${x+1}</td><td>${nameArray[x]}</td><td>${ingrArray[x]}</td><td>${timeArray[x]}</td><td><button id="del${x}">Delete</button></td>`;       
                        }   
                }
                deleteFunc();       
        })     
}
}

btnLong.addEventListener("click", function() {
        if (timeArray.length !== 0) {
                document.getElementById("recipe").innerHTML = "";
                let maxTm = -Infinity;
                for (let i = 0; i < timeArray.length; i++) {
                        if (timeArray[i] > maxTm) {
                                maxTm = timeArray[i];
                        }
                }
                for (let x = 0; x < timeArray.length; x++) {
                        if(timeArray[x] === maxTm) {
                                document.getElementById("recipe").innerHTML += `<td>${x+1}</td><td>${nameArray[x]}</td><td>${ingrArray[x]}</td><td>${timeArray[x]}</td>`;       
                        }   
                }
        }
        note.innerHTML = `There is nothing to be shown`;
})

btnShort.addEventListener("click", function() {
        if (timeArray.length !== 0) {
                document.getElementById("recipe").innerHTML = "";
                let minTm = Infinity;
                for (let i = 0; i < timeArray.length; i++) {
                        if (timeArray[i] < minTm) {
                                minTm = timeArray[i];
                        }
                }
                for (let x = 0; x < timeArray.length; x++) {
                        if(timeArray[x] === minTm) {
                                document.getElementById("recipe").innerHTML += `<td>${x+1}</td><td>${nameArray[x]}</td><td>${ingrArray[x]}</td><td>${timeArray[x]}</td>`;       
                        }   
                }
        }
        note.innerHTML = `There is nothing to be shown`;
})



