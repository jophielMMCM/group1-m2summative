const form = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const nickname = document.getElementById("nickname");
const dob = document.getElementById("dob");
const address = document.getElementById("address");
const email = document.getElementById("email");

const dobError = document.getElementById("dobError");
const emailError = document.getElementById("emailError");

const idNumber = document.getElementById("idNumber");
const idName = document.getElementById("idName");
const idNickname = document.getElementById("idNickname");
const idDob = document.getElementById("idDob");
const idAddress = document.getElementById("idAddress");
const idEmail = document.getElementById("idEmail");

form.addEventListener("submit", function(event){

event.preventDefault();

let valid = true;

dobError.style.display = "none";
emailError.style.display = "none";

const birthDate = new Date(dob.value);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const month = today.getMonth() - birthDate.getMonth();

if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
age--;
}

if(age < 18){
dobError.textContent = "You must be at least 18 years old.";
dobError.style.display = "block";
valid = false;
}

if(!email.value.endsWith("@codechum.com")){
emailError.textContent = "Email must end with @codechum.com";
emailError.style.display = "block";
valid = false;
}

if(valid){

const randomID = Math.floor(1000 + Math.random() * 9000);

idNumber.textContent = randomID;
idName.textContent = fullName.value;
idNickname.textContent = nickname.value;

const formattedDate = new Date(dob.value).toLocaleDateString();
idDob.textContent = formattedDate;

idAddress.textContent = address.value;
idEmail.textContent = email.value;

}

});