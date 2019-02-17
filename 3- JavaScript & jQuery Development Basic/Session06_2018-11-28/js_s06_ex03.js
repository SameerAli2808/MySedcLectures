console.log("This script works great!");

let phoneBook = [];

let phoneName = document.getElementById("phoneName");
let phoneNumber = document.getElementById("phoneNumber");
let btnAdd = document.getElementById("adding");
let printPhoneBook = document.getElementById("printPhoneBook");
let btnShow = document.getElementById("showPhoneBook");

// function addPhoneRegester(name, number, element){
//     element.innerHTML += `<li> ${name} ... ${number}</li>`;
// }

btnAdd.addEventListener("click", function(){
    let name = phoneName.value;
    let number = parseInt(phoneNumber.value);
        if(name !== "" && isNaN(number) === false){
        phoneBook.push(name);
        phoneBook.push(number);
        phoneName.value = "";
        phoneNumber.value = "";
    } else{
        phoneName.value = "";
        phoneNumber.value = "";
        alert(`Enter Name and Number, please!`);
    }  
})

btnShow.addEventListener("click", function(){
    if(phoneBook.length !== 0){
        let counter = 0;
        printPhoneBook.innerHTML = "";
        printPhoneBook.innerHTML += `<thead><th>##</th><th>Full Name</th><th>Phone Number</th></thead><tbody>`;
        for(i = 0; i < phoneBook.length; i+=2){
            counter ++;
            printPhoneBook.innerHTML += `<td>${counter}</td><td>${phoneBook[i]}</td><td>${phoneBook[i+1]}</td>`; 
        }
        printPhoneBook.innerHTML += `</tbody>`;
    } else {
        alert(`Sorry, there is no data to be shown!`);
    }
})

