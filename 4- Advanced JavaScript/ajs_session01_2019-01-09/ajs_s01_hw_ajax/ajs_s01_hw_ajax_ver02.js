const urlPeople = 'https://swapi.co/api/people/';
const urlPlanets = 'https://swapi.co/api/planets/';
let people, previous, next, planets;

$(() => {
    getPeopleData(urlPeople);
    getPlanetsData(urlPlanets);
    
})

function getPeopleData(url) {
    $.ajax({
        url,
        type: 'GET',
        success: data => {
            people += data.results;
            // next = data.next;
            // previous = data.previous;
            console.log(people);
            // showPeopleData(people);
        },
        error: err => { console.log(`something bad happened`, err) }
    })
}

function getPlanetsData(url) {
    $.ajax({
        url,
        type: 'GET',
        success: data => {
            planets += data.results;
            console.log(planets);
        },
        error: err => { console.log(`something bad happened`, err) }
    })
}

let infoArray = [];
// showPeopleData(people);

$('#first').on('click', () => {



    console.log("1");
    for(i=0; i<people.length; i++) {
        for(j=0; j<planets.length; j++) {
            if(people[i].homeworld == planets[i].url) {
                peopleObj = {
                    name: member.name,
                    world: planets.name,
                }
                infoArray.push(peopleObj);
                console.log(`${i}, ${j}`);
            } else {
                console.log(`${i} = ${j}`);
            }
        }
    }
})

function showPeopleData(people) {
        for(const member of people) {
            // getPlanetsData(member.homeworld);
            peopleObj = {
                name: member.name,
                world: planets.name,
            }
            infoArray.push(peopleObj);
        }
        console.log(infoArray);
}










/******************************************************************************************************** */

// $(() => {
//     $('#first').on('click', () => {
//         getPeopleData(urlPeople)
//     })
//     $('#prev').on('click', () => {
//         if(!!previous) {
//             getPeopleData(previous)
//         }
//     })
//     $('#next').on('click', () => {
//         if(!!next) {
//             getPeopleData(next)
//         }
//     })
// })

// function getPeopleData(url) {
//     $.ajax({
//         url,
//         type: 'GET',
//         success: data => {
//             people = data.results;
//             next = data.next;
//             previous = data.previous;
//             // console.log(people);
//             showPeopleData(people);
//         },
//         error: err => { console.log(`something bad happened`, err) }
//     })
// }

// function getPlanetsData(url) {
//     $.ajax({
//         url,
//         type: 'GET',
//         success: data => {
//             planets = data;
//             console.log(planets.name);

//             // next = data.next;
//             // previous = data.previous;
//             // showPeopleData(people);
//         },
//         error: err => { console.log(`something bad happened`, err) }
//     })
// }

// let infoArray = [];


// function showPeopleData(people) {
//     for(member of people) {
//         getPlanetsData(member.homeworld);
//         peopleObj = {
//             name: member.name,
//             world: planets.name,
//         }
//         infoArray.push(peopleObj);
//     }

//     console.log(infoArray);





    // $('#peopleData').html('')
    // for(const member of people) {
    //     getPlanetsData(member.homeworld);
    //     // console.log(planets.name);
    //     $('#peopleData').append(`
    //     <tr>
    //         <td>${member.name}</td>
    //         <td>${member.height}</td>
    //         <td>${member.mass}</td>
    //         <td>${member.birth_year}</td>
    //         <td>${member.gender}</td>
    //         <td>${member.homeworld}</td>
    //     </tr>
    //     `)
    // }
// }
