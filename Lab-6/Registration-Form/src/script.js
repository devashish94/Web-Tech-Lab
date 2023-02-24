const form = document.getElementById('form');
const username = document.getElementById('username');
const registration_number = document.getElementById('registration_number');
const email = document.getElementById('email');
const phone_number = document.getElementById('phone_number');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const validateInputs = () => {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneNumberValue = phone_number.value.trim();
	const registrationNumberValue = registration_number.value.trim();
	
	if (usernameValue === '') {
        console.log("empty")
        setError(username, "Please provide a username");
    } else {
        console.log("letss goo")
        setSuccess(username);
    }
};
