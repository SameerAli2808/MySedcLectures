// Age Calculating Code ..

var d = new Date() // Creating date object.
let recentYear = d.getFullYear(); // Declaring the Year variable

alert(`You are ${calculateAge(1980, recentYear)}`); // Alerting the age.
alert(`You are ${calculateAge(1990, recentYear)}`); // Alerting the age.
alert(`You are ${calculateAge(2000, recentYear)}`); // Alerting the age.

// Creating a function to calculate the recent age.
function calculateAge(birthYear, recentYear) {
    let yourAge = recentYear - birthYear;
    return yourAge;
}

// alert(`You are ${calculateAge(1980, 2018)} years Old`);
// alert(`You are ${calculateAge(1975, 2018)} years Old`);
// alert(`You are ${calculateAge(2001, 2018)} years Old`);


