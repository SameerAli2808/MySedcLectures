/**********************************************/
/************ Star War Application ************/
/**********************************************/

// ******* Declaring global variables *******
const peopleUrl = 'https://swapi.co/api/people/';
const planetsUrl = 'https://swapi.co/api/planets/';
const people = [];
const planets = [];
let searchArr = [];
let ppl, pln;

// ******* Event listeners *******
$(() => {
    $('#goHome').on('click', showLogo)
    $('#getPeople').on('click', () => {
        showPeople()
        getCharatersData(peopleUrl)
        ppl = 1;
        pln = 0;
    })
    $('#getPlanets').on('click', () => {
        showPlanets()
        getPlanetsData(planetsUrl)
        ppl = 0;
        pln = 1;
    })
    $('#search').on('click', () => {
        let search = $('input').val();
        searchArr = [];
        searchFunc(search)
    })
})

// ******* Fetching date from internet *******
let getCharatersData = (url) => {
    people.length ? 
    populateTable(people, 0) :
    fetchData(url)    
}
const getPlanetsData = url => {
    planets.length ? 
    populateTable(planets, 1) :
    fetchData(url)    
}

const fetchData = url => {
    fetch(url).then(r => r.json())
    .then(r => { 
        ppl === 1 ? people.push(...r.results) : planets.push(...r.results)
        return r
    })
    .then(r => {
        console.log(r)
        r.next ? 
        fetchData(r.next) : 
        ppl === 1 ? populateTable(people, 0) : populateTable(planets, 1)
    })
}

// ******* Printing results on the screen *******
let populateTable = (arr, num) => {
    $('#spinner').html('')
    $('#body').html('');
    num === 0 ? populatePeople(arr) : populatePlanets(arr);
}
let populatePeople = (people) => {
    const formatedPeople = formatData(people)
    for (let person of formatedPeople) {
        $('#body').append(`
            <tr>
            <td>${person.name}</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            </tr>
        `)
    }
}
let populatePlanets = (planets) => {
    for (let planet of planets) {
        $('#body').append(`
            <tr>
            <td>${planet.name}</td>
            <td>${planet.diameter}</td>
            <td>${planet.climate}</td>
            <td>${planet.terrain}</td>
            <td>${planet.rotation_period}</td>
            <td>${planet.population}</td>
            </tr>
        `)
    }
}

// ******* Printing controling functions *******
const showLogo = () => {
    $('#body').html('');
    $('.logo').removeClass('display-none')
    $('#table').addClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').addClass('display-none')
}
const showPeople = () => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').removeClass('display-none')
    $('#planets').addClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');
}
const showPlanets = () => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').removeClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');
}

// ******* Formating some data *******
const formatData = people => {
    return people.map(p => {
        // let obj = Object.assign({}, p, { height: p.height + 'cm', mass: p.mass + 'kg' })
        let obj = {
            ...p,
            height: p.height !== 'unknown' ? p.height + 'cm' : p.height,
            mass: p.mass !== 'unknown' ? p.mass + 'kg' : p.mass
        }
        // p.height += 'cm'
        // p.mass += 'kg'
        return obj
    })
}

// ******* Searching through the information *******
function searchFunc(search) {
    console.log(search);
    $('input').val("");
    if(ppl === 1) {
        for(i=0; i  < people.length; i++) {
            let test = Object.values(people[i]).join(); // Getting the (values) of an object in array, then make them as one string
            if(test.search(search) >= 0) {
                searchArr.push(people[i]);
            }
        }
        populateTable(searchArr, 0);
    } else if(pln === 1) {
        for(i=0; i  < planets.length; i++) {
            let test = Object.values(planets[i]).join(); // Getting the (values) of an object in array, then make them as one string
            if(test.search(search) >= 0) {
                searchArr.push(planets[i]);
            }
        }
        populateTable(searchArr, 1);
    }
}

