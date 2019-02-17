

// alert("Hey, Enter your birth year");
// var yearOfBirth = prompt();
var chinesZodiac;
var yearOfBirth = parseInt(prompt("Hey, Enter your birth year"));
chinesZodiac = (yearOfBirth - 4) % 12;
switch (chinesZodiac) {
	case 0:
	console.log(`Your Chines Zodiac is Rat!`);
	alert(`Your Chines Zodiac is Rat!`);
	break;
	case 1:
	console.log(`Your Chines Zodiac is Ox!`);
	alert(`Your Chines Zodiac is Ox!`);
	break;
	case 2:
	console.log(`Your Chines Zodiac is Tiger!`);
	alert(`Your Chines Zodiac is Tiger!`);
	break;
	case 3:
	console.log(`Your Chines Zodiac is Rabbit!`);
	alert(`Your Chines Zodiac is Rabbit!`);
	break;
	case 4:
	console.log(`Your Chines Zodiac is Dragon!`);
	alert(`Your Chines Zodiac is Dragon!`);
	break;
	case 5:
	console.log(`Your Chines Zodiac is Snake!`);
	alert(`Your Chines Zodiac is Snake!`);
	break;
	case 6:
	console.log(`Your Chines Zodiac is Horse!`);
	alert(`Your Chines Zodiac is Horse!`);
	break;
	case 7:
	console.log(`Your Chines Zodiac is Goat!`);
	alert(`Your Chines Zodiac is Goat!`);
	break;
	case 8:
	console.log(`Your Chines Zodiac is Monkey!`);
	alert(`Your Chines Zodiac is Monkey!`);
	break;
	case 9:
	console.log(`Your Chines Zodiac is Rooster!`);
	alert(`Your Chines Zodiac is Rooster!`);
	break;
	case 10:
	console.log(`Your Chines Zodiac is Dog!`);
	alert(`Your Chines Zodiac is Dog!`);
	break;
	case 11:
	console.log(`Your Chines Zodiac is Pig!`);
	alert(`Your Chines Zodiac is Pig!`);
	break;
	default:
	console.log(`Sorry, double check your birht year.`);
	alert(`Sorry, double check your birht year.`);
}
