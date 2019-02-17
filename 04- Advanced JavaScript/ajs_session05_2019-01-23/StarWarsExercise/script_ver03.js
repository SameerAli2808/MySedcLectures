/**********************************************/
/************ Star War Application ************/
/**********************************************/

// ******* Declaring global variables *******
let searchKey = '';
let searchValue = '';
const db = {
    people: {
        url: 'https://swapi.co/api/people/',
        data: [],
        // (type => {
        //     let arr = []
        //     arr.type = type
        //     return arr
        // })('people'),
        info: ['name', 'gender', 'birth_year', 'height', 'mass']
    },
    planets: {
        url: 'https://swapi.co/api/planets/',
        data: []
    },
    films: {
        url: 'https://swapi.co/api/films/',
        data: []
    },
    species: {
        url: 'https://swapi.co/api/species/',
        data: []
    },
    vehicles: {
        url: 'https://swapi.co/api/vehicles/',
        data: []
    },
    starships: {
        url: 'https://swapi.co/api/starships/',
        data: []
    }
}

// ******* Event listeners *******
$(() => {
    $('#goHome').on('click', showLogo)
    $('#getPeople').on('click', () => {
        searchKey = 'ppl';
        showInfo();
        getData(db.people);
    })
    $('#getPlanets').on('click', () => {
        showInfo();
        getData(db.planets);
        searchKey = 'pln';
    })
    $('#getFilms').on('click', () => {
        showInfo();
        getData(db.films);
        searchKey = 'flm';
    })
    $('#getSpecies').on('click', () => {
        showInfo();
        getData(db.species);
        searchKey = 'spc';
    })
    $('#getVehicles').on('click', () => {
        showInfo();
        getData(db.vehicles);
        searchKey = 'vec';
    })
    $('#getStarships').on('click', () => {
        showInfo();
        getData(db.starships);
        searchKey = 'shp';
    })
    $('#search').on('click', () => {
        let search = $('input').val();
        searchArr = [];
        searchFunc(search)
    })
})

function ChoosenData({name, gender, birth_year, height, mass, eye_color, skin_color,
    diameter, climate, terrain, rotation_period, population, gravity, surface_water,
    title, release_date, episode_id, director, producer,
    classification, designation, average_height, eye_colors, skin_colors, hair_colors, average_lifespan, language,
    model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity,
    consumables, vehicle_class, hyperdrive_rating, starship_class}) {
    this.name = name;
    this.gender = gender;
    this.birth_year = birth_year;
    this.height = height;
    this.mass = mass;
    this.eye_color = eye_color;
    this.skin_color = skin_color;
    this.diameter = diameter;
    this.climate = climate;
    this.terrain = terrain;
    this.rotation_period = rotation_period;
    this.population = population;
    this.gravity = gravity;
    this.surface_water = surface_water;
    this.title = title;
    this.release_date = release_date;
    this.episode_id = episode_id;
    this.director = director;
    this.producer = producer;
    this.classification = classification;
    this.designation = designation;
    this.average_height = average_height;
    this.eye_colors = eye_colors;
    this.skin_colors = skin_colors;
    this.hair_colors = hair_colors;
    this.average_lifespan = average_lifespan;
    this.language = language;
    this.model = model;
    this.manufacturer = manufacturer;
    this.cost_in_credits = cost_in_credits;
    this.length = length;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.crew = crew;
    this.passengers = passengers;
    this.cargo_capacity = cargo_capacity;
    this.consumables = consumables;
    this.vehicle_class = vehicle_class;
    this.hyperdrive_rating = hyperdrive_rating;
    this.starship_class = starship_class
}

// ******* Fetching date from internet *******
const getData = ({ url, data }) => {
    data.length ? 
    finalData(data) :
    fetchData({ url, data })  
}

async function fetchData({ url, data }) {
    let r = await fetch(url);
    r = await r.json();
    console.log(r);
    await data.push(...r.results);
    await r.next ? fetchData({ url: r.next, data }) : finalData(data)
}

let finalData = data => {
    let final = [];
    for(item of data){
        final.push(new ChoosenData(item));
    }
    // console.log(final);
    populateInfo(final);
}

// ******* Printing results on the screen *******
let populateInfo = (data) => {
    $('#spinner').html('')
    $('#body').html('');
    $('#showTable').html('')

    let headKeys = Object.keys(data[0]);
    let headValues = Object.values(data[0]); 
    let headStr = '';
    for(i=0; i < headKeys.length; i++) {
        if(headValues[i] !== undefined){
            headStr += `<th>${headKeys[i]}</th>`
        }
    }
    $('#showTable').removeClass('display-none')
    $('#showTable').append(headStr)
    const formatedPeople = formatData(data)
    for (let item of formatedPeople) {
        let printArray = Object.values(item);
        let str = `<tr>`;
        for(i=0; i < printArray.length; i++) {
            if(printArray[i] !== undefined){
                str += `<td>${printArray[i]}</td>`
            }
        }
        str += `</tr>`;
        $('#body').append(str)
    }
}

// ******* Printing controling functions *******
const showLogo = () => {
    $('#body').html('');
    $('.logo').removeClass('display-none')
    $('#table').addClass('display-none')
    $('#showTable').addClass('display-none')
}
const showInfo = () => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#showTable').addClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');
}

// ******* Formating some data *******
const formatData = data => {
    return data.map(p => {
        // let obj = Object.assign({}, p, { height: p.height + 'cm', mass: p.mass + 'kg' })
        let obj = {
            ...p,
            height: (p.height !== 'unknown') && (p.height !== undefined) ? p.height + 'cm' : p.height,
            mass: (p.mass !== 'unknown') && (p.mass !== undefined) ? p.mass + 'kg' : p.mass,
            average_lifespan: (p.average_lifespan !== 'unknown') && (p.average_lifespan !== undefined) ? p.average_lifespan + 'years' : p.average_lifespan,
            average_height: (p.average_height !== 'unknown') && (p.average_height !== undefined) ? p.average_height + 'cm' : p.average_height,
            length: (p.length !== 'unknown') && (p.length !== undefined) ? p.length + 'm' : p.length
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
    switch (searchKey) {
        case 'ppl':
            searchValue = db.people.data;
            break;
        case 'pln':
            searchValue = db.planets.data;
            break;
        case 'flm':
            searchValue = db.films.data;
            break;
        case 'spc':
            searchValue = db.species.data;
            break;
        case 'vec':
            searchValue = db.vehicles.data;
            break;
        case 'shp':
            searchValue = db.starships.data;
            break;
    
        default:
            alert(`No Information`);
            break;
    }
    searchData(searchValue, search);
}

function searchData(searchValue, search) {
    for(i=0; i  < searchValue.length; i++) {
        let test = Object.values(searchValue[i]).join(); // Getting the (values) of an object in array, then make them as one string
        if(test.search(search) >= 0) {
            searchArr.push(searchValue[i]);
        }
    }
    finalData(searchArr);
}

