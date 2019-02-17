console.log("This script works great!");

let header = document.getElementById("printGreeting");
let btnGreeting = document.getElementById("greeting");
let inputGreeting = document.getElementById("anyName");


function gettingName(){
    header.innerText = "";
    let inputName = inputGreeting.value;
    header.innerText = `Hello ${inputName}`;
    inputGreeting.value = "";
}

btnGreeting.addEventListener("click", function(){
    gettingName();
})

