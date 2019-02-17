console.log(`It works!`);


let firstDiv = document.getElementsByTagName("div")[0];
console.log(firstDiv);

let firstDivId = document.getElementById("first");
console.log(firstDivId);

let allParagraphs = document.getElementsByTagName("p");
let allParagraphs02 = document.querySelectorAll("p");
console.log(allParagraphs);

let allDivs = document.getElementsByTagName("div");
let lastDiv = allDivs[allDivs.lenght - 1];
console.log(lastDiv);

let h3InLast = lastDiv.getElementsByTagName("h3");
let h1InLast = lastDiv.querySelector("h1");
console.log(h3InLast);
console.log(h1InLast);

let secondDiv = firstDiv.nextElementSibling;
let secondDivText = secondDiv.innerText;
console.log(secondDivText);

