const url = 'https://swapi.co/api/planets/';
let planets = []
let counter = 0
let searchArr = [];
let previous, next

$(() => {
    console.log('1) Table data loading')

    $('#load').on('click', () => {
        if(counter == 0) {
            getDataWithFetch(url);
            counter = 1;
        } else {
            showPlanets(planets);
        }
        
    })
    $('#btnSearch').on('click', () => {
        let search = $('#search').val();
        if(search === '') {
            // $('#showData').html('Nothing to search for!')
            if(counter == 0) {
                getDataWithFetch(url);
                counter = 1;
            } else {
                showPlanets(planets);
            }
        } else {
            getDataWithSearch(url, search);
        }
    })
    // $('#prev').on('click', () => {
    //     if(!!previous) {
    //         getData(previous)
    //     }
    // })
    // $('#next').on('click', () => {
    //     if(!!next) {
    //         getData(next)
    //     }
    // })

    console.log(planets)
    console.log('3) Table data loaded')
})

function getData(url) {
    $.ajax({
        url,
        type: 'GET',
        success: data => {
            planets = data.results;
            next = data.next;
            previous = data.previous
            console.log('2)', data)
            showPlanets(planets)
        },
        error: err => { console.log(`something bad happened`, err) }
    })
}

function getDataWithFetch(url) {
        $('#planetsData').append(`<td style="background: green; color: green;">|</td>`)
    fetch(url)
    .then(res1 => res1.json())
    .then(res1 => {
        planets.push(...res1.results)
        return res1
    })
    .then(res1 => {
        res1.next ?
        getDataWithFetch(res1.next) :
        showPlanets(planets);
    })
    .catch(err => console.log(err))
}

function getDataWithSearch(url, search) {
    for(i=0; i  < planets.length; i++) {
        if(planets[i].climate.search(search) >= 0) {
            searchArr.push(planets[i]);
        }
    }
    showPlanets(searchArr);
    searchArr = [];

    /* // Cannot read property 'search' of undefined
    fetch(url)
    .then(res1 => res1.json())
    .then(res1 => {
        if(res1.results.climate.search(search) >= 0){
            searchArr.push(...res1.results)
        }
        return res1
    })
    .then(res1 => {
        res1.next ?
        getDataWithFetch(res1.next) :
        showPlanets(searchArr);
    })
    .catch(err => console.log(err))
    */
}

function showPlanets(planets) {
    // $('#showData').html('')
    $('#planetsData').html('')
    for(const planet of planets) {
        $('#planetsData').append(`
        <tr>
            <td>${planet.name}</td>
            <td>${planet.diameter}</td>
            <td>${planet.climate}</td>
            <td>${planet.terrain}</td>
        </tr>
        `)
    }
}
