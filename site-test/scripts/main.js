// JavaScript Document

let myImage = document.querySelector("img");

myImage.addEventListener("click", function() {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/littlebro.jpg") {
		myImage.setAttribute("src", "images/surprise.jpg");
	} else {
		myImage.setAttribute ("src", "images/littlebro.jpg");
	}
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

function setUserName () {
	let myName = prompt("Veuillez saisir votre nom.");
	localStorage.setItem("nom", myName);
	myHeading.textContent = "Penser par sois-même est cool," + myName;
}

if (!localStorage.getItem("nom")) {
	setUserName();
} else {
  	let storedName = localStorage.getItem("nom")
	myHeading.textContent = "Penser par sois-même c'est cool," + storedName
}
myButton.addEventListener("click", function() {
	setUserName();
});
m