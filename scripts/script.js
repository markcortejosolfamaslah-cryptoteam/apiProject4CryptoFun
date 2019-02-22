const myApp = {};

myApp.init = function () {

	myApp.setup();
};



myApp.setup = function () {
	myApp.myEncryptWords = [
		{ "hackeryou": "130C0E16101D241A20" },
		{ "18H00": "030A130202" },
		{ "red hat": "1D100F48130C1F" }
	]
}
$(function () {
	myApp.init();
})

myApp.requestApi = (userInput) => {
	$.ajax({
		url: 'http://api.trytodecrypt.com/encrypt',
		method: 'GET',
		dataType: 'json',
		data: {
			key: 'f5d3c98db90eee259b9c41beaa4ecdcd',
			id: 1,
			text: userInput
		}

	})
}
myApp.fetUserInput = () => {

}






// solution from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
// Array Shuffle Function (MUTATES PASSED ARRAY)
	// shuffles the contents of an array
	// returns the mutated array
myApp.shuffleArray = function(array) {
	// for loop to iterate through array
	for (let i = 0; i <= array.length; i++) {
		// create random number and store in variable
		const randNum = Math.floor(Math.random() * (array.length + 1));
		// use destructuring to swap the current array element with the randomized array element
		[array[i], array[randNum] = array[randNum], array[i]];
	}
}