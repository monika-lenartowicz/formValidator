const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendButton = document.querySelector(".send");
const clearButton = document.querySelector(".clear");
const closeButton = document.querySelector(".close");
const popup = document.querySelector(".popup");
const formInputs = [username, password, password2, email];

const showError = (input, message) => {
	const formBox = input.parentElement;
	const errorMessage = formBox.querySelector(".error-text");
	formBox.classList.add("form-box__error");
	errorMessage.textContent = message;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove("form-box__error");
};

const checkForm = input => {
	input.forEach(element => {
		if (element.value === "") {
			showError(element, element.placeholder);
		} else {
			clearError(element);
		}
	});
};

const clear = event => {
	event.preventDefault();
	formInputs.forEach(element => {
		element.value = "";
	});
};

const send = event => {
	event.preventDefault();
	checkForm(formInputs);
};

clearButton.addEventListener("click", clear);
sendButton.addEventListener("click", send);
