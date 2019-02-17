console.log("This script works great!");

/* *************************** */
/* *****  Calculator App ***** */
/* *************************** */

// Getting the global variables.
let result = document.getElementById("result");
let btnSum = document.getElementById("sum");
let btnSub = document.getElementById("sub");
let btnMul = document.getElementById("mul");
let btnDvs = document.getElementById("dvs");
let btnSqr = document.getElementById("sqr");
let btnClear = document.getElementById("clear");

// Clearing all fields.
btnClear.addEventListener("click", function() {
        document.getElementById("input_01").value = "";
        document.getElementById("input_02").value = "";
        result.innerText = "";
})

// Calculation functions.
function sumFunc(numOne, numTwo) {
        result.innerHTML = `${numOne} + ${numTwo} = ${numOne + numTwo}`;
}

function subFunc(numOne, numTwo) {
        result.innerHTML = `${numOne} &#150; ${numTwo} = ${numOne - numTwo}`;
}

function mulFunc(numOne, numTwo) {
        result.innerHTML = `${numOne} &#215; ${numTwo} = ${numOne * numTwo}`;
}

function dvsFunc(numOne, numTwo) {
        result.innerHTML = `${numOne} &#247; ${numTwo} = ${numOne / numTwo}`;
}

function sqrFunc(numOne, numTwo) {
        result.innerHTML = `${numOne}&#178; = ${numOne ** 2}`;
}

// Event Listeners.
btnSum.addEventListener("click", function() {
        let numOne = parseInt(document.getElementById("input_01").value);
        let numTwo = parseInt(document.getElementById("input_02").value);
        sumFunc(numOne, numTwo);
})

btnSub.addEventListener("click", function() {
        let numOne = parseInt(document.getElementById("input_01").value);
        let numTwo = parseInt(document.getElementById("input_02").value);
        subFunc(numOne, numTwo);
})

btnMul.addEventListener("click", function() {
        let numOne = parseInt(document.getElementById("input_01").value);
        let numTwo = parseInt(document.getElementById("input_02").value);
        mulFunc(numOne, numTwo);
})

btnDvs.addEventListener("click", function() {
        let numOne = parseInt(document.getElementById("input_01").value);
        let numTwo = parseInt(document.getElementById("input_02").value);
        dvsFunc(numOne, numTwo);
})

btnSqr.addEventListener("click", function() {
        let numOne = parseInt(document.getElementById("input_01").value);
        let numTwo = parseInt(document.getElementById("input_02").value);
        sqrFunc(numOne, numTwo);
})

