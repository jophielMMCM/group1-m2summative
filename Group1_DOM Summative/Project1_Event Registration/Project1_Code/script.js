//Access elements from DOM tree
const nameInput = document.getElementById("fullName"); 
const emailInput = document.getElementById("email");
const eventSelect = document.getElementById("eventChoice"); 
const registerBtn = document.getElementById("registerBtn");
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

  //Validation check
  const isNameValid = name !== "";
  const isEmailValid = email.includes("@") && email.includes(".");
  const isEventValid = event !== "";

  //Button disable logic for empty fields
  registerBtn.disabled = !(isNameValid && isEmailValid && isEventValid); 

  if (isNameValid) {
    nameError.style.display = "none";
  } else {
    nameError.textContent = "Full name is required.";
    nameError.style.display = "block";
  }
  
  if (isEmailValid) {
    emailError.style.display = "none";
  } else {
    emailError.textContent = "Enter a valid email address.";
    emailError.style.display = "block";
  }

  if (isEventValid) {
    eventError.style.display = "none";
  } else {
    eventError.textContent = "Please select an event.";
    eventError.style.display = "block";
  }

  // Return true only if all checks pass
  return isNameValid && isEmailValid && isEventValid;
}

//Event listener for button disable/endable during user typing
[nameInput, emailInput, eventSelect].forEach(el => {
    el.addEventListener("input", validatedForm);
});

//Form submission and object handler
document.getElementById("eventForm").addEventListener("submit", function(e) {
  e.preventDefault();

  if (validatedForm()) {
    const randomID = Math.floor(1000 + Math.random() * 9000);

    const newAttendee = {
      id: randomID,
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      event: eventSelect.value
    };

    attendees.push(newAttendee);
    renderTable(attendees);
    
    this.reset(); 
    validatedForm(); //reset button/error state
  }
});

//Creating and appending table rows
function renderTable(data) {
  if (data.length === 0) {
    attendeeTableBody.innerHTML = '<tr><td colspan="4">No attendees registered yet.</td></tr>';
    return;
  }

  attendeeTableBody.innerHTML = "";

  data.forEach(person => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>#${person.id}</td>
      <td>${person.name}</td>
      <td>${person.email}</td>
      <td>${person.event}</td>
    `;
    attendeeTableBody.appendChild(row);
  });
}

//Filter by event logic
filterEvent.addEventListener("change", function() {
  const selected = this.value;
  if (selected === "all") {
    renderTable(attendees);
  } else {
    const filtered = attendees.filter(a => a.event === selected);
    renderTable(filtered);
  }
});
