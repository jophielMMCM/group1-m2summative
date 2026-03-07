//Access elements from DOM tree
const nameInput = document.getElementById("full name");
const emailInput = document.getElementById("email");
const eventSelect = document.getElementById("event");
const registerBtn = document.getElementById("registerBtn");
const attendeeList = document.getElementById("attendeeList");
const attendeeTableBody = document.getElementById("attendeeTableBody");
const filterEvent = document.getElementById("filterEvent");

//Error contents
const nameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");

let attendees = [];

//Form validation (event handling)
function validatedForm() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const event = eventSelect.value;

  //Button disable logic for empty fields
  const isFilled = name !== "" && email !== "" && event !== "";
  registerBtn.disabled = !isFilled; 

  //Validation check
  const isNameValid = name !== "";
  const isEmailValid = email.includes("@") && email.includes(".");
  const isEventValid = event !== "";

  //Display error messages (manipulate CSS classes)
  if (name === "") {
    nameError.textContent = "Full name is required.";
    nameError.style.display = "block";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Enter a valid email address.";
    emailError.style.display = "block";
    return false;
  }

  if (event === "") {
    eventError.textContent = "Please select an event.";
    eventError.style.display = "block";
    return false;
  }
  return true;
}

[nameInput, emailInput, eventSelect].forEach(el => {
    el.addEventListener("input", validatedForm);
});

