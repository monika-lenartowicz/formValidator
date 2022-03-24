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

const checkLength = (input, minValue) => {
	if (input.value.length < minValue) {
		// console.log(input.innerText);
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z minimum ${minValue} znaków`);
	}
};

const checkPassword = (password, password2) => {
	if (password.value !== password2.value) {
		showError(password2, `Hasła do siebie nie pasują`);
	}
};

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, "E-mail jest niepoprawny");
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll(".form-box");

	let errorCount = 0;
	allInputs.forEach(input => {
		if (input.classList.contains("form-box__error")) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add("popup__show");
	}
};

const clear = event => {
	event.preventDefault();
	formInputs.forEach(element => {
		element.value = "";
		clearError(element);
	});
};

const send = event => {
	event.preventDefault();
	checkForm(formInputs);
	checkLength(username, 3);
	checkLength(password, 8);
	checkPassword(password, password2);
	checkMail(email);
	checkErrors();
};

clearButton.addEventListener("click", clear);
sendButton.addEventListener("click", send);
