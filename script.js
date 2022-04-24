/*let number1 = 2;
let number2 = 3;
let sum = number1 + number2; alert(sum);

function add(number1, number2) {
	let sum = number1 + number2;
	return sum;
}
if(age < 18) {
	alert("You're not an adult");
} else {
	alert("You're an adult");
}

let fullName = {
	firstName: 'John',
	lastName: 'Doe'
}
alert(fullName.firstName);
let personDetails = {
	fullName: {
		firstName: 'John',
		lastName: 'Doe'
	},
	alertMessage: function(message) {
		alert(message);
	}
}
personDetails.alertMessage('Hello World')*/
let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
	event.preventDefault();
	console.log('Button clicked');
}
submitButton.addEventListener('click', clickListener);
function clickListener(event) {
	event.preventDefault();
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');

let emailText = emailInput.value;
let messageText = messageInput.value;

if(emailValidate(emailText) !== true) {
	console.log('The email address must contain @'); 
		return false;
}
console.log('Thanks for your message');
console.log('email:', emailText, 'message:', messageText);
}

function emailValidate(email) {
	if(email.includes('@')) {
		return true;
	} else {
		return false;
	}
}
console.log(emailValidate('abc@xyz.cm'));

/*if(emailValidate(emailText) !== true) {
	console.log('The email address must contain @'); 
		return false;
}
console.log('Thanks for your message');*/

