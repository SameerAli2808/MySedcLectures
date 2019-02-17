


const peopleUrl = 'https://swapi.co/api/people/';
const people = [];
const finalPeople = [];

function PeopleObj(name, gender, birthYear, hight, mass) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
    this.hight = hight;
    this.mass = mass;
}

function FullName(name, lastName, age, sayFullName = sayName) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sayFullName = sayFullName;
}

function sayName() { return `${this.name} ${this.lastName}`};
const me = new FullName(`Sameer`, `Ali`, 35, sayName);
console.log(me);
console.log(me.sayFullName());

async function fetchData(url) {
    let luck = await fetch(url);
    luck = await luck.json();
    // luck.homeworld = await getData(luck.homeworld);
    // luck.films = await getData(luck.films);
    // luck.species = await getData(luck.species);
    // luck.starships = await getData(luck.starships);
    // luck.vehicles = await getData(luck.vehicles);
    await people.push(...luck.results);
    await luck.next ? fetchData(luck.next) : console.log(people);
    let i = 0;
    for(person of people) {
        finalPeople[i] = new PeopleObjNew(person);
        i++;
    }
    console.log(finalPeople);
}

fetchData(peopleUrl);

function PeopleObjNew({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships}) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld = homeworld;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
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

// gethData(peopleUrl);



