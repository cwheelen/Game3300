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
	} else if (h == "pudding") {
		hNum3 = document.getElementById("hNum3");
		number = hNum3.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum3").innerHTML = number;
	} else if (h == "sweet_rice") {
		hNum4 = document.getElementById("hNum4");
		number = hNum4.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum4").innerHTML = number;
	}else {
		console.log("this is not supposed to happen.")
	}
}

function updateSortBy() {
	var sortByOptions = document.getElementById('sortByOptions');
	var selectedOption = sortByOptions.value;

	if (selectedOption === 'alphabeticallyAscending') {
		console.log("hello");
		console.log(selectedOption);
		sortRecipesAlphabetically(true);
	} else if (selectedOption === 'alphabeticallyDesending') {
		sortRecipesAlphabetically(false);
	} else if (selectedOption === 'hearts') {

	} else if (selectedOption === 'uploadEarliest'){

	} else if (selectedOption === 'uploadLastest'){

	}
}

function sortRecipesAlphabetically(){
	
}
	

