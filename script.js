const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");

const sendButton = document.querySelector(".send");
const clearButton = document.querySelector(".clear");
const closeButton = document.querySelector(".close");
const popup = document.querySelector(".popup");

const clear = event => {
	event.preventDefault();
	[username, password, password2, email].forEach(element => {
		element.value = "";
	});
};

clearButton.addEventListener("click", clear);
