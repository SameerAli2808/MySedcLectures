// var num1 = "youou";
// var num2 = 11;
// var num3 = 14;
// var ave123;
// var check1 = ((num1>0) && typeof(num1)=="number");
// var check2 = ((num2>0) && typeof(num2)=="number");
// var check3 = ((num3>0) && typeof(num3)=="number");
// var checkAll = check1 && check2 && check3;
// // alert(checkAll);
// // alert(check1);
// // alert(check2);
// // alert(check3);
// if (checkAll) {
// 	ave123 = (num1 + num2 + num3) / 3;
// 	alert(ave123);
// }
// 	else {
// 		alert("You entered wrong number")
// 	}
	

var drinkType, drinkQuantity, drinkPrice, totalPrice;
drinkType = "Wine";
drinkQuantity = 2;
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
}
totalPrice = drinkQuantity * drinkPrice;
alert(`Thank you for choosing our bar. Your reciept, sir.

	Drink Type: ${drinkType}, Quantity: ${drinkQuantity}
	The total amount is ${totalPrice}$

	See you soon again.`);






