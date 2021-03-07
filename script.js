var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient");
var result = document.getElementById("result");

function changeGradient () {
	body.style.background = "linear-gradient(to right, "+color1.value+" , "+color2.value+")";
	result.innerText="linear-gradient(to right, "+color1.value+" , "+color2.value+")";
}

color1.addEventListener("input", changeGradient)

color2.addEventListener("input", changeGradient)

