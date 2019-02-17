console.log(`It's connected!`);

// let human = {
//     firstName: "Sameer",
//     lastName: "Ali",
//     height: 188,
//     wegith: 95,
//     address: {
//         street: "Hristo Tatarchev",
//         building: "47z",
//         city: "Skopje"
//     },
//     favoriteColors: ["Blue", "White", "Black"],
// }

// console.log(human);

// human.firstName = "Sinisha";
// human.lastName = "Petkovski";
// human.height = 175;
// human.wegith = 75;
// human.address = {street: "Hristo Tatarchev", building:"47b", city: "Skopje"};
// human.favoriteColors = ["Black", "White", "Grey"];

// console.log(human);


// let presenter = {
//     name: "Dragan",
//     lastName: "Gelevski",
//     academy: "SEDC",
//     lecture: "Objects",
//     check: this
// }

// let presenter2 = new Object();
// presenter2.name = "sameer";
// presenter2.something = this;

// function Presenter(name, something){
//     this.name = name;
//     this.something = something;
//     this.myThis = this;
// }

// let presenter3 = new Presenter("sameer", "sad");
// console.log(presenter3.myThis);

// console.log(presenter2);

// console.log(presenter);
// console.log(presenter);

// delete presenter.lecture;
// presenter.getFullName = function() {
//     return `${presenter.name} ${presenter.lastName}`;
// }

// console.log(presenter.getFullName());


// Exe. 04

function Car(model, color, year, fuel, fuelConsumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = fuelConsumption;
    this.fuelDisctance = function(fuelAmount) {
        return (fuelAmount * 100 / this.fuelConsumption);
    }
}

let carOpel = new Car ("Opel", "Silver", 2006, "Desil", 7);
let carVolgsWagin = new Car ("Volgs Wagin", "Mitalic", 2005, "Desil", 8);

console.log(`${carOpel.fuelDisctance(5)} km`);
console.log(`${carVolgsWagin.fuelDisctance(5)} km`);





