alert(`Welcome to the Crystal Ball program.

	Let's find what the ball will tell us about your future ...

	Press "OK"`);
var crystalBallValue = ((Math.random() * 5) + 1);
crystalBallValue = crystalBallValue - (crystalBallValue % 1);
switch(crystalBallValue) {
	case 1:
	alert(`You are on the right track.`);
	break;
	case 2:
	alert(`Danger is near.`);
	break;
	case 3:
	alert(`Luck will find you.`);
	break;
	case 4:
	alert(`You are about to make a mistake.`);
	break;
	case 5:
	alert(`Your future is unclear.`);
	break;
	default:
	alert(`Try again, please`);
}
