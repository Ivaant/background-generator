var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randButton = document.getElementById("random");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 1. Write code so that the colour inputs match 
// the background generated on the first page load. 

//just added respective values to attribute value at <input> element



// 2. Display the initial CSS linear gradient property on page load.

function displayCSS(){
	css.textContent = "linear-gradient(to right, rgb(255,0,0), rgb(0,255,0))";
}

displayCSS();

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

//1. Generate 3 numbers 0-255
//2. Create color
//3. Repeat 1 and 2
//4. assign colors to input elems color1 and color2.
//5. call setGradient()

//generate color using an array of hex symbols
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	//console.log(color);
	return color;
}

//create color with math
function createColor(){
	return '#'+ ('000000' + Math.floor(Math.random()*16777216).toString(16)).slice(-6);
}

function generateColors(){
	//console.clear();
	var randColor1 = createColor();
	var randColor2 = createColor();
	color1.value = randColor1;
	color2.value = randColor2;
	setGradient();
}



randButton.addEventListener("click", generateColors);