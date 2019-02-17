var drinkType, drinkQuantity, drinkPrice, totalPrice;
drinkType = prompt(`Hello sir, what kind of drinks you would like to have?
Please, choose Coffee, Juice, Water, Beer, Wine or Whisky?`);
drinkQuantity = parseInt(prompt(`How many of ${drinkType} you would like, sir?`));

switch(drinkType) {
	case "Coffee":
	drinkPrice = 2;
	break;
	case "Juice":
	drinkPrice = 3;
	break;
	case "Water":
	drinkPrice = 1;
	break;
	case "Beer":
	drinkPrice = 4;
	break;
	case "Wine":
	drinkPrice = 5;
	break;
	case "Whisky":
	drinkPrice = 10;
	break;
	default:
	alert(`Ther's no such a drink sir, sorry!`);
}
totalPrice = drinkQuantity * drinkPrice;
alert(`Thank you for choosing our bar. Your reciept, sir.

	Drink Type: ${drinkType}, Quantity: ${drinkQuantity}
	The total amount is ${totalPrice}$

	See you soon again.`);