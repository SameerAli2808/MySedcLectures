const urlPeople = 'https://swapi.co/api/people/';
let people, previous, next;

$(() => {
    $('#first').on('click', () => {
        getPeopleData(urlPeople)
    })
    $('#prev').on('click', () => {
        if(!!previous) {
            getPeopleData(previous)
        }
    })
    $('#next').on('click', () => {
        if(!!next) {
            getPeopleData(next)
        }
    })
    console.log(urlPeople)
    
})

function getPeopleData(url) {
    $.ajax({
        url,
        type: 'GET',
        success: data => {
            people = data.results;
            next = data.next;
            previous = data.previous;
            showPeopleData(people);
        },
        error: err => { console.log(`something bad happened`, err) }
    })
}

function showPeopleData(people) {
    $('#peopleData').html('')
    for(const member of people) {
        $('#peopleData').append(`
        <tr>
            <td>${member.name}</td>
            <td>${member.height}</td>
            <td>${member.mass}</td>
            <td>${member.birth_year}</td>
            <td>${member.gender}</td>
        </tr>
        `)
    }
}
