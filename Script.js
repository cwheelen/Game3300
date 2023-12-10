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
	} else if (h == "smore") {
		hNum5 = document.getElementById("hNum5");
		number = hNum5.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum5").innerHTML = number;
	} else if (h == "soup") {
		hNum6 = document.getElementById("hNum6");
		number = hNum6.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum6").innerHTML = number;
	} else if (h == "kimchi_pancake") {
		hNum7 = document.getElementById("hNum7");
		number = hNum7.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum7").innerHTML = number;
	} else if (h == "pie") {
		hNum8 = document.getElementById("hNum8");
		number = hNum8.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum8").innerHTML = number;
	} else if (h == "pho") {
		hNum9 = document.getElementById("hNum9");
		number = hNum9.innerHTML;
		console.log(number);

		number++;

		document.getElementById("hNum9").innerHTML = number;
	}
	else {
		console.log("this is not supposed to happen.")
	}
}

function updateSortBy() {
	var sortByOptions = document.getElementById('sortByOptions');
	var selectedOption = sortByOptions.value;

	if (selectedOption === 'alphabeticallyAscending') {
		console.log("hello");
		sortRecipesAlphabetically(true);
	} else if (selectedOption === 'alphabeticallyDesending') {
		console.log(selectedOption);
		sortRecipesAlphabetically(false);
	} else if (selectedOption === 'hearts') {
		sortRecipesByHearts();
	} 
	
}

function sortRecipesAlphabetically(ascending){
	var recipesContainer = document.getElementById("recipesContainer"); 
	var recipes = Array.from(recipesContainer.children);
	var sortedRecipes = recipes.sort(function (a, b) {
		var titleA = a.querySelector(".recipeDetails a").innerText.toLowerCase();
		var titleB = b.querySelector(".recipeDetails a").innerText.toLowerCase();

		if (ascending) {
			return titleA.localeCompare(titleB);
		} else {
			return titleB.localeCompare(titleA);
		}
	});
	recipesContainer.innerHTML = "";
	for (var i = 0; i < sortedRecipes.length; i++) {
		recipesContainer.appendChild(sortedRecipes[i]);
	}
}

function sortRecipesByHearts() {
	var recipesContainer = document.getElementById("recipesContainer");
	var recipes = Array.from(recipesContainer.children);
	var sortedRecipes = recipes.sort(function (a, b) {
		var heartsA = parseInt(a.querySelector(".heart-content").innerText);
		var heartsB = parseInt(b.querySelector(".heart-content").innerText);

		return heartsB - heartsA;
	});
	recipesContainer.innerHTML = "";
	for (var i = 0; i < sortedRecipes.length; i++) {
		recipesContainer.appendChild(sortedRecipes[i]);
	}
}	

