/* Student Registry Form */

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let btnRegister = document.getElementById("register");
let studentList = document.getElementById("studentList");
let counter = 0;

let studentArray = [];
function Student(studentFirstName, studentLastName, studentAge) {
    this.studentFirstName = studentFirstName;
    this.studentLastName = studentLastName;
    this.studentAge = studentAge;
}

btnRegister.addEventListener("click", function() {
    if(firstName.value !== "" && lastName.value !== "" && age.value) {
        let student = new Student (firstName.value, lastName.value, age.value);
        studentArray[counter] = student;
        if (studentArray.length !== 0) {
            document.getElementById("studentList").innerHTML = "";
            document.getElementById("studentList").innerHTML = "<td>#</td><td>First Name</td><td>Last Name</td><td>Age</td>"
            for (let i = 0; i < studentArray.length; i++) {
                document.getElementById("studentList").innerHTML += `<td>${i+1}</td><td>${studentArray[i].studentFirstName}</td><td>${studentArray[i].studentLastName}</td><td>${studentArray[i].studentAge}</td>`;       
            }
        } else {
            document.getElementById("studentList").innerHTML = `There is nothing to be shown`;
        }
        firstName.value = "";
        lastName.value = "";
        age.value = "";
        counter++;
    }
})





