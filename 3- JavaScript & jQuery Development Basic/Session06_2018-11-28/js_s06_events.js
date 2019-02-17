console.log("This script works great!");

// function funcOne(){
//     console.log(`The event fired from the HTML handler`);
// }

// function funcTwo(){
//     console.log(`Traditional handler`);
// }

// let myBtn = document.getElementById("myBtn");
// myBtn.onclick = funcTwo;
// myBtn.onmouseover = funcTwo;

// function funcThree(){
//     console.log("The input!");
// }
// let myInput = document.getElementById("myInput");
// // myInput.onkeydown = funcThree;
// // myInput.onkeyup = funcThree;


// function funcFour(){
//     console.log(myInput.Value);
// }
// let myOtherBtn = document.getElementById("myOtherBtn");
// myOtherBtn.onclick = funcFour;


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let containerDiv = document.getElementById("container");
let header = document.getElementsByTagName("h1")[0];

// btn1.addEventListener("click", function(){
//     console.log(`Hey! Button 1 here!`);
// },true);

btn2.addEventListener("click", function(){
    console.log(`Hey! Button 2 here!`);
},true);

// containerDiv.addEventListener("click", function(){
//     console.log(`Hey! Div Container here!`);
// },true);

// document.addEventListener("click", function(){
//     console.log(`Hey! Document King here!`);
// },true);

btn1.addEventListener("click", function(){
    console.log(`Hey! Button 1 here!`);
    header.innerText = "We changed this!";
},true);


btn2.addEventListener("click", function(e){
    console.log(`Hey! Button 2 here!`);
    console.log(e.target);
},true);



