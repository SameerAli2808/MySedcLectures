/*-----------------------------------------*/
/* Changing Headers' and Paragraphs' Texts */
/*-----------------------------------------*/

// Getting all the headers of the HTML
let allHeaders01 = document.getElementsByTagName("h1");
console.log(allHeaders01);
let allHeaders03 = document.getElementsByTagName("h3");
console.log(allHeaders03);

// Getting all the paragraphs of the HTML
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
let allTexts = document.getElementsByTagName("text");
console.log(allTexts);

// Changing the text of all headers and paragraphs
for(i = 0; i < allHeaders01.length; i++){
    allHeaders01[i].innerText += " ... If you say so!";
}
for(i = 0; i < allHeaders03.length; i++){
    allHeaders03[i].innerText += " ... If you say so!";
}
for(i = 0; i < allParagraphs.length; i++){
    allParagraphs[i].innerText += " ... If you say so!";
}
for(i = 0; i < allTexts.length; i++){
    allTexts[i].innerText += " ... If you say so!";
}
