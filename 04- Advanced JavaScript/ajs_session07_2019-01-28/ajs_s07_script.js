



const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random() < 0.7
            return resolve() // rand ? resolve() : reject()
        }, ms)
    })
}

// console.log('one')
// delay(1000).then(() => {
//     console.log('two')
//     return delay(1000)
// }).then(() => {
//     console.log('three')
//     return delay(1000)
// }).then(() => {
//     console.log('four')
//     return delay(1000)
// }).then(() => {
//     console.log('five')
//     return delay(1000)
// }).then(() => {
//     console.log('six')
//     return delay(1000)
// }).catch(() => console.log('error'))

// async function countToFive() {      // async functions always return a promise
//     console.log(`One`);
//     await delay(1000);              // await must be used inside an async function
//     console.log(`Two`);
//     await delay(1000);
//     console.log(`Three`);
//     await delay(1000);
//     console.log(`Four`);
//     await delay(1000);
//     console.log(`Five`);
//     await delay(1000);
//     console.log(`Six`);
// }

// countToFive();



const url = 'https://swapi.co/api/people/1/';
const urlHome = 'https://swapi.co/api/planets/1/'
let people = [];


// *************** Using then *************************
const fetchLucke = url => {
    fetch(url)
    .then(luck => luck.json())
    .then(luck => {
        fetch(luck.homeworld)
        .then(planet => planet.json())
        .then(planet => {
            luck.homeworld = planet.name
            console.log(luck)
        })
    })
}

fetchLucke(url)


// ************ Using async & await **********************
async function fetchData(url){
    let luck = await fetch(url);
    luck = await luck.json();
    let planet = await fetch(luck.homeworld);
    planet = await planet.json();
    luck.homeworld = planet.name;
    luck.films = await getData(luck.films);
    luck.species = await getData(luck.species);
    luck.starships = await getData(luck.starships);
    luck.vehicles = await getData(luck.vehicles);


    // for(i = 0; i < luck.films.length; i++) {
    //     let films = await fetch(luck.films[i]);
    //     films = await films.json();
    //     luck.films[i] = films.title;
    // }
    // for(i = 0; i < luck.species.length; i++) {
    //     let species = await fetch(luck.species[i]);
    //     species = await species.json();
    //     luck.species[i] = species.name;
    // }
    // for(i = 0; i < luck.starships.length; i++) {
    //     let starships = await fetch(luck.starships[i]);
    //     starships = await starships.json();
    //     luck.starships[i] = starships.name;
    // }
    // for(i = 0; i < luck.vehicles.length; i++) {
    //     let vehicles = await fetch(luck.vehicles[i]);
    //     vehicles = await vehicles.json();
    //     luck.vehicles[i] = vehicles.name;
    // }
    console.log(luck);
}

const getData = async urlsArr => {
    const data = [];
    for(const url of urlsArr) {
        let obj = await fetch(url);
        obj = await obj.json();
        data.push(obj.title ? obj.title : obj.name)
    }
    return data;
}

fetchData(url);


