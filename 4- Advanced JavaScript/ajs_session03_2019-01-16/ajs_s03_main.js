

// *********************** Pure Function *************************************
// Best example is the Math built-in function
let names = ['Petrov', 'Sulejmanov', 'Cavkov', 'Donev', 'Mitev', 'Artemov'];
function addLastName(sentArray) {
    let fullNames = [];
    let lastName = 'ski';
    for(i = 0; i < sentArray.length; i++) {
        text = `${sentArray[i]}` + `ski`;
        fullNames.push(text);
    }
    // console.log(fullNames);
}
addLastName(names);

// ECMA 6 Ver.
const addSki = arr => {
    let fullNames = [];
    arr.forEach(lastName => fullNames.push(`${lastName}ski`));
    fullNames = arr.map(fullName => `${fullName}ski`); // ............ Using "map" function
    // console.log(fullNames);
    return fullNames;
}

addSki(names);

//********************************** Recurcive Functions ************************
// Recursion is the function that recall itself 
function factorial(num) {
    if(num === 1) {
        return 1
    }
    // console.log(num);
    return num * factorial(num - 1)
}

// ECMA 6 Ver.
const factorialNew = num => num === 1 ? 1 : num * factorialNew(--num);
// console.log(factorial(6));


//***************************** Closure Function ********************************************
(
    a => {
        return b => {
            // console.log(a + b);
        }
})(5)(5)

    // let sumWithFive = outer(5)(5);
    // console.log(sumWithFive);

/******************************** Exercis 02 ***************************/

let source = {
    name: "root",
    weight: 10,
    children: [
        {
            name: "one",
            weight: 1,
            children: [
                {
                    name: "one-one",
                    weight: 11,
                    children: [
                        {
                            name: "one-one-one",
                            weight: 111,
                            children: []
                        },
                        {
                            name: "one-one-two",
                            weight: 112,
                            children: []
                        },
                        {
                            name: "one-one-three",
                            weight: 113,
                            children: []
                        }
                    ]
                },
                {
                    name: "one-two",
                    weight: 12,
                    children: []
                }
            ]
        },
        {
            name: "two",
            weight: 2,
            children: [
                {
                    name: "two-one",
                    weight: 21,
                    children: []
                },
                {
                    name: "two-two",
                    weight: 22,
                    children: []
                }
            ]
        }
    ]
}



const sumWeight = (source) => {
    let totalWeight = source.weight 
        + source.children[0].weight 
            + source.children[0].children[0].weight
                + source.children[0].children[0].children[0].weight + source.children[0].children[0].children[1].weight +source.children[0].children[0].children[2].weight
            + source.children[0].children[1].weight
        + source.children[1].weight
            + source.children[1].children[0].weight + source.children[1].children[1].weight;

    return totalWeight;
}
console.log(sumWeight(source));





/*
const makeTree = (source, weight) => {

    const entries = Object.entries(source).filter(c => c[weight].value === 10);
    return entries;



    // let node = {}
    // console.log(node)
    // categories
    // .filter(c => c[weight])
    // .forEach(c => node[c.children] = makeTree(source, c.children))
    // return node;
}

console.log(makeTree(source.children, 'weight'));












let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'black labrador', parent: 'dogs' },
    { id: 'white labrador', parent: 'dogs' },
    { id: 'yellow labrador', parent: 'dogs' },
    { id: 'mexican labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
];


*/




