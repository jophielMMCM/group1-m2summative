//Code for event registration error messages
//"Full name is required."
const nameInput = document.getElementById("full name");
//"Enter a valid email address."
const emailInput = document.getElementById("email");
//"Please select and event"
const eventSelect = document.getElementById("event");
//Register button should grayed-out/disabled if all the forms are not filled
const registerBtn = document.getElementById("registerBtn");
//default state: "No attendees registered yet"
const attendeeList = document.getElementById("attendeeList");
//Code for random ID generator

//Code for filter by event
const filterEvent = document.getElementById("filterEvent");

let attendees = [];

function validatedForm() {

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let event = eventSelect.value;

  if (name === "") {
    alert("Full name is required.");
    return false;

  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address.");
    return false;

  }

  if (event === "") {
    alert("Please select an event.");
    return false;

  }

  return true;
}


  



