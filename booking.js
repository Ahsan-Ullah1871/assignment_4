
// value count function;

function valueCounter(id,isIncrease) {
    
    let display = document.getElementById(id);
   
    let count = parseInt(display.value);
    let newCount = count;

    if (isIncrease == true) {
        newCount = newCount + 1;
         }
    else if(isIncrease == false && count>0) {
               newCount = newCount - 1;
    }

    display.value = newCount;

    subTotal();
    
}
// subtotal math function:
function subTotal() {
	// value Detect:
	let fastClass = document.getElementById("first-class-sits").value;
	let economyClass = document.getElementById("economy-class-sits").value;

	// price calculation:
	let price1 = parseInt(fastClass) * 150;
	let price2 = parseInt(economyClass) * 100;
	let Sum = price1 + price2;
	document.getElementById("subtotal-amount").innerText = "$" + Sum;
   
    // vat calculation:
	let vat = Sum * 0.1;
    document.getElementById("vat").innerText = "$" + vat;
    
// Total amount view:
	let totalAmount = Sum + vat;
    document.getElementById("total-amount").innerText = "$" + totalAmount;
    
    
}

//Booking confirm form:

function confirmButton() {
    
    let ticketCheck = document.getElementById("total-amount").innerText;
      
    if (ticketCheck == "0") {
	  	alert("Hello! You didn't buy a ticket!!");
    } else {
		document.getElementById("booking-form").style.display = "none";
		document.getElementById("booking-confirm").style.display =
			"block";

		// Date showing:
		let date = document.getElementById("date").value;
		document.getElementById("confirm-date").innerText =
			"DAte:" + "  " + date;

		//  detect value:
		let fastClass = document.getElementById("first-class-sits").value;
		let economyClass = document.getElementById("economy-class-sits")
			.value;

		//set text:
		document.getElementById("first-sits").innerText =
			"First class Sits:" + "  " + fastClass;
		document.getElementById("economy-sits").innerText =
			"Economy  class Sits:" + "  " + economyClass;

		// set total amount:
		let totalAmount = document.getElementById("total-amount")
			.innerText;
		document.getElementById("confirm-total").innerText =
			"Total price with 10% VAT:" + "      " + totalAmount;
    }

}
 
// Back button:
function backButton() {
 document.getElementById("booking-form").style.display = "block";
 document.getElementById("booking-confirm").style.display = "none";
    
}




