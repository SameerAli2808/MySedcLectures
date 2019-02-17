function displayFullName ({ name, lastName}) {
    return `Hi my name is ${name} ${lastName}`
}
console.log(displayFullName({name:`Sameer`, lastName:`Ali`}));
document.getElementById("div01").innerHTML = displayFullName({name:`Sameer`, lastName:`Ali`})

/*********************************************************************************************/

// Get the second, fourth and seventh values of the array by using destructing
let arry = [1, 'GetMe', 'run', 'GetMe', 666, 'GetRich', 'GetMe', 'DontGetMe', true, () => {}]

let [,second,,fourth,,,seventh] = arry
console.log(second, fourth, seventh)
document.getElementById("div02").innerHTML = `${second}, ${fourth}, ${seventh}`

/*********************************************************************************************/

// Using destructing get the value 'GetMe' from our object
let obj = {
    myProp: 'GetMe',
    mySecProp: 'DontGetMe'
}
let {myProp : obj01} = obj;
console.log(`The value from obj: ${obj01}`)
document.getElementById("div03").innerHTML = `The value from obj: ${obj01}`

/*********************************************************************************************/

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
document.getElementById("div04").innerHTML = `The value from obj2: ${obj02}`

/*********************************************************************************************/

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
document.getElementById("div05").innerHTML = `The value from obj3: ${obj03}`

/*********************************************************************************************/

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
document.getElementById("div06").innerHTML = `The value from obj4: ${obj04_1}, ${obj04_2}, ${obj04_3}`
