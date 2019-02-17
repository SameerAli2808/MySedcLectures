

let a = { name: 'Igor' };
let b = Object.assign({}, a);
console.log(`Before changing ${a.name}`);
console.log(`Before changing ${b.name}`);

a.name = 'Ajax';
console.log(`After changing ${a.name}`);
console.log(`After changing ${b.name}`);











// const url = 'https://swapi.co/api/planets/';
// let planets, previous, next;

// $(() => {
//     console.log(`Table data is loading`);
//     $.ajax({
//         url: url,
//         type: 'GET',
//         success: data => {
//             console.log(data);
//             planets = data.results;
//             next = data.next;
//             previous = data.previous;
//             for(const planet of planets) {
//                 $(`#planetsData`).append(`
//                 <tr>
//                     <td>${planet.name}</td>
//                     <td>${planet.diameter}</td>
//                     <td>${planet.climate}</td>
//                     <td>${planet.terrain}</td>
//                 </tr>
//                 `)
//             }
//         },
//         error: function(err) {
//             console.log(`Somthing error happendd ${err}`);
//         },
//     });
// })









// $.ajax({
//     url: `https://www.google.com`,
//     type: `GET`, // POST, DELETE, PUT, PATCH
//     success: function(data) {
//         // ourData = JASON.parse(data);
//         return data;
//     },
//     error: function(err) {
//         console.log(`Somthing bad happened ${err}`);
//     },
//     data: JSON.stringify({}),
//     'Content-Type': 'application/json'
// })

// fetch(url).then(res => res.json()).then(res => console.log(res))