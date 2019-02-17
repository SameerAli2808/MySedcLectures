const url = 'https://swapi.co/api/people/';
const urlPlanets = 'https://swapi.co/api/planets/';
let previous, next;
let people = [];
let planets = [];
let searchArr = [];
let ppl, pln;


$(() => {
    $('#goHome').on('click', () => {
        $('#body').html('');
        $('.logo').removeClass('display-none')
        $('#table').addClass('display-none')
        $('#people').addClass('display-none')
        $('#planets').addClass('display-none')
    })
    $('#getPeople').on('click', () => {
        getCharatersData(url, 'ppl')
        ppl = 1;
        pln = 0;
    })
    $('#getPlanets').on('click', () => {
        // getPlanetsData(urlPlanets);
        getCharatersData(urlPlanets, 'pln')
        ppl = 0;
        pln = 1;
    })
    $('#search').on('click', () => {
        let search = $('input').val();
        console.log(search);
        searchFunc(search)
    })
})

let getCharatersData = (url, category) => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');

    if(category === 'ppl') {
        $('#people').removeClass('display-none');
        $('#planets').addClass('display-none');
        people.length ? 
        populateTable(people) :
        fetchData(url);
    } else if(category === 'pln') {
        $('#people').addClass('display-none');
        $('#planets').removeClass('display-none');
        planets.length ? 
        populateTable(planets) :
        fetchData(urlPlanets);
    }
}


// let getCharatersData = (url) => {
//     $('#body').html('');
//     $('.logo').addClass('display-none')
//     $('#table').removeClass('display-none')
//     $('#people').removeClass('display-none')
//     $('#planets').addClass('display-none')
//     $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');

//     people.length ? 
//     populateTable(people) :
//     fetchData(url)
    
// }

// let getPlanetsData = (urlPlanets) => {
//     $('#body').html('');
//     $('.logo').addClass('display-none')
//     $('#table').removeClass('display-none')
//     $('#people').addClass('display-none')
//     $('#planets').removeClass('display-none')
//     $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');

//     planets.length ? 
//     populateTablePlanest(planets) :
//     fetchDataPlanets(urlPlanets)
    
// }

const fetchData = url => {
    if(ppl === 1) {
        fetch(url).then(r => r.json())
        .then(r => { 
            people.push(...r.results)
            return r
        })
        .then(r => {
            console.log(r);
            r.next ? 
            fetchData(r.next) : 
            populateTable(people)
        })
    } else if(pln === 1) {
        fetch(url).then(r => r.json())
        .then(r => { 
            planets.push(...r.results)
            return r
        })
        .then(r => {
            console.log(r);
            r.next ? 
            fetchData(r.next) : 
            populateTable(planets)
        })
    }
    
}


// const fetchData = url => {
//     fetch(url).then(r => r.json())
//     .then(r => { 
//         people.push(...r.results)
//         return r
//     })
//     .then(r => {
//         console.log(r);
//         r.next ? 
//         fetchData(r.next) : 
//         populateTable(people)
//     })
// }

// const fetchDataPlanets = url => {
//     fetch(url).then(r => r.json())
//     .then(r => { 
//         planets.push(...r.results)
//         return r
//     })
//     .then(r => {
//         console.log(r);
//         r.next ? 
//         fetchDataPlanets(r.next) : 
//         populateTable(planets)
//     })
// }

let populateTable = (sentArray) => {
    $('#spinner').html('')
    $('#body').html('');
    const formatPeople = formatData(sentArray);
    if(ppl === 1) {
        for (let el of formatPeople) {
            $('#body').append(`
                <tr>
                <td>${el.name}</td>
                <td>${el.gender}</td>
                <td>${el.birth_year}</td>
                <td>${el.height}</td>
                <td>${el.mass}</td>
                </tr>
            `)
        }
    } else if(pln === 1) {
        for (let el of planets) {
            $('#body').append(`
                <tr>
                <td>${el.name}</td>
                <td>${el.diameter}</td>
                <td>${el.climate}</td>
                <td>${el.terrain}</td>
                <td>${el.rotation_period}</td>
                <td>${el.population}</td>
                </tr>
            `)
        }
    }
    
}



// let populateTable = (people) => {
//     $('#spinner').html('')
//     $('#body').html('');
//     const formatPeople = formatData(people);
//     for (let person of formatPeople) {
//         $('#body').append(`
//                 <tr>
//                 <td>${person.name}</td>
//                 <td>${person.gender}</td>
//                 <td>${person.birth_year}</td>
//                 <td>${person.height}</td>
//                 <td>${person.mass}</td>
//                 </tr>
//                 `)
//     }
// }

// let populateTablePlanest = (planets) => {
//     $('#spinner').html('')
//     $('#body').html('');
//     for (let el of planets) {
//         $('#body').append(`
//             <tr>
//             <td>${el.name}</td>
//             <td>${el.diameter}</td>
//             <td>${el.climate}</td>
//             <td>${el.terrain}</td>
//             <td>${el.rotation_period}</td>
//             <td>${el.population}</td>
//             </tr>
//         `)
//     }
// }

const formatData = people => {
    return people.map(p => {
        // let obj = Object.assign({}, p, {height: p.height+'cm', mass: p.mass+'kg'});
        let obj = {
            ...p,
            height: p.height !== 'unknown' ? p.height + 'cm' : p.height,
            mass: p.mass !== 'unknown' ? p.mass + 'cm' : p.mass,
        }
        return obj
    })
}

let findCharacter = (data, keyword) => {
    
}


function searchFunc(search) {
    console.log(search);
    $('input').val("");
    if(ppl === 1) {
        for(i=0; i  < people.length; i++) {
            let test = people[i].join();
            console.log(test);
            if(test.search(search) >= 0) {
                searchArr.push(people[i]);
            }
        }
        populateTable(searchArr);
        searchArr = [];
    } else if(pln === 1) {
        for(i=0; i  < planets.length; i++) {
            // let test = people.entries();
            if(planets[i].climate.search(search) >= 0) {
                searchArr.push(planets[i]);
            }
        }
        populateTablePlanest(searchArr);
        searchArr = [];
    }
    





    // if(ppl === 0) {
    //     for(let pep of people) {
    //         if(pep.search(search) >= 0) {
    //             searchArr.push(people[i]);
    //         }
    //     }
    //     populateTable(searchArr);
    // }
}



