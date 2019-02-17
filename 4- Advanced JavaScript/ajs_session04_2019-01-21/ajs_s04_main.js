
// let arr = [1, 'Hello', 0, 34, {name: 'Igor'}, NaN, undefined, [1, 2], null];

// // extrat all the truthy values of the 'arr' array.

// let arrTrue = arr.filter(element => !!element);
// /*
// let arrTrue = [];
// for(i = 0; i < arr.length; i++) {
//     if(arr[i]) {
//         arrTrue.push(arr[i]);
//     }
// }
// */
// // console.log(arrTrue);


// // find all the falsy values of the 'arr' array and change them to 'true'.
// let arrFalse = arr.map(element => !element ? 'true' : element);
// /*
// let arrFalse = [];
// for(i = 0; i < arr.length; i++) {
//     if(!arr[i]) {
//         arr[i] = 'true';
//         arrFalse.push(arr[i]);
//     } else {
//         arrFalse.push(arr[i]);
//     }
// }
// */
// // console.log(arrFalse);


// Write a map-like function
let originalArr = [1, 2, 3, 4, null];
function myMap(arr, callback) {
    let newArr = [];
    for(const el of arr) {
        newArr.push(callback(el))
    }
    return newArr;
}

console.log(myMap(originalArr, el => el));

// Write a filter-like function
function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            result.push(arr[i]);
        }
    }    
    return result;
}

console.log(myFilter(originalArr, el => !el ? 'true' : el));
