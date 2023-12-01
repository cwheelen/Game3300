function hearts(h) {
	console.log("here");

	if(h == "salmon") {
		hNum = document.getElementById("hNum");
		number = hNum.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum").innerHTML = number;
	} else if (h == "pizza") {
		hNum1 = document.getElementById("hNum1");
		number = hNum1.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum1").innerHTML = number;
	} else if (h == "steak") {
		hNum2 = document.getElementById("hNum2");
		number = hNum2.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum2").innerHTML = number;
	} else {
		console.log("this is not supposed to happen.")
	}
	

}

