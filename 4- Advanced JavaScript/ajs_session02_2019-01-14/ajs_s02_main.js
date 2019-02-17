

// const sum = (a, b) => a + b;
// const sum02 = a => a + 2;
// const sum02 = a => b => a + b;

// function number(a) {
//     return a;
//     console.log(a);
// }


// let result = sum(3, number(6), 2);


// const sumArrow = (name, lastName) => 
//     if(arguments[2] === undefined) {
//         return `${name} ${lastName}`;
//     }
//     return `${name} ${arguments[2]} ${lastName}`;


/* Write a function that returns the sum of all numbers between 0 and 
the number parameter that we pass tp that function */
const sum  = num => {
    let tempValue = 0;
    for(i = 0; i <= num; i++) {
        tempValue += i;
    }
    return tempValue;
}

console.log(sum(4));




// next lecture will be about
// 1- callback function
// 2- recursive function
// 3- IIFe function
// 4- closures