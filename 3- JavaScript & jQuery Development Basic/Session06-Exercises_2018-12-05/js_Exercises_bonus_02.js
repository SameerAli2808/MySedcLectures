console.log("This script works great!");

/* *************************** */
/* *****  Login App ***** */
/* *************************** */

// Getting the global variables.
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let btnLogin = document.getElementById("login");

// Declaring Database.
let usersArray = ["sameer", "mustafa", "ahmed", "ammar"];
let passArray = ["1234", "1234", "1234", "1234"];

// Checking login information.
function loginCheck() {
        let username = user.value;
        let password = pass.value;
        for (let i = 0; i < usersArray.length; i++) {
                if(usersArray[i] === username && passArray[i] === password) {
                        document.getElementById("greet").innerHTML = `Hello ${username}`;
                        user.value = "";
                        pass.value = "";
                        return;
                }   
        }
        document.getElementById("greet").innerHTML = `Wrong username or password!`;
        user.value = "";
        pass.value = "";
        return;
}

// Event Listeners.
btnLogin.addEventListener("click", function() {
        loginCheck();
})
