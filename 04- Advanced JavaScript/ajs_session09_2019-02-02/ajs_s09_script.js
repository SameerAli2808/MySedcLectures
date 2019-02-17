// let obj = {
//     name: 'Igor',
//     fullName: `${this.name} Mitkovski`,
//     getFirstName() {
//         this.fullName = `${this.name} Mitkovski`
//     },
//     sayFullName() {
//         return this.fullName
//     }
// }

// let newObj = {
//     name: 'Martin',
// }

// newObj.fullName = obj.fullName;
// arr[0] 
// obj['0']



// obj2 = JSON.parse(JSON.stringify(obj))

// let array = [1, 2, 3]


function displayFullName ({ name, lastName}) {
    return `Hi my name is ${name} ${lastName}`
}
console.log(displayFullName({name:`Sameer`, lastName:`Ali`}));

// Get the second, fourth and seventh values of the array by using destructing
let arry = [1, 'GetMe', 'run', 'GetMe', 666, 'GetRich', 'GetMe', 'DontGetMe', true, () => {}]

let [,second,,fourth,,,seventh] = arry
console.log(second, fourth, seventh)

////////////////////////////////////////////////////////////////////////////////////
function drawES5Chart(options) {
    options = options === undefined ? {} : options;
    var size = options.size === undefined ? 'big' : options.size;
    var cords = options.cords === undefined ? {x: 0, y: 0} : options.cords;
    var radius = options.radius === undefined ? 25 : options.radius;
    console.log(size, cords, radius);
    // now finally do some chart drawing
}
  
drawES5Chart({
cords: {x: 18, y: 30},
radius: 30
});
//////////////////////////////////////////////////////////////////////////////////////

// Using destructing get the value 'GetMe' from our object
let obj = {
    myProp: 'GetMe',
    mySecProp: 'DontGetMe'
}
let {myProp : obj01} = obj;
console.log(`The value from obj: ${obj01}`)

let obj2 = {
    myProp: 'DontGetMe',
    mySecProp: 'DontGetMe',
    myThirdProp: {
        myProp: 'GetMe'
    }
}

// First way
// let {myThirdProp} = obj2
// let {myProp: obj02} = myThirdProp
// console.log(`The value from obj2: ${obj02}`)

// Second way
let {
    myThirdProp: {
        myProp: obj02
    }
} = obj2
console.log(`The value from obj2: ${obj02}`)

let obj3 = {
    myProp: 'DontGetMe',
    mySecProp: 'DontGetMe',
    myThirdProp: {
        myProp: ['DontGetMe', 'DontGetMe', 'GetMe']
    }
}

// First way
/* 
let {myThirdProp: new03} = obj3
let {myProp: newObj03} = new03
let [,,obj03] = newObj03
console.log(`The value from obj3: ${obj03}`) 
*/

// Second way
let {
    myThirdProp:{
        myProp: [,,obj03]
    }
} = obj3
console.log(`The value from obj3: ${obj03}`)

let obj4 = {
    myProp: 'DontGetMe',
    mySecProp: 'GetMe',
    myThirdProp: {
        myProp: ['DontGetMe', 'DontGetMe', 'GetMe']
    },
    myFifthProp: {
        myProp: 'DontGetMe',
        mySecProp: ['DontGetMe', 'DontGetMe', 'DontGetMe'],
        myThirdProp: 'GetMe'
    }
}

let {
    mySecProp: obj04_1,
    myThirdProp: {
        myProp: [,, obj04_2]
    },
    myFifthProp: {
        myThirdProp: obj04_3
    }
} = obj4
console.log(`The values form obj4: ${obj04_1}, ${obj04_2}, ${obj04_3}`)