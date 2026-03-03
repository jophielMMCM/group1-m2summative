// Accessing Form Elements
const bookForm = document.getElementById("bookForm");
const bookTitle = document.getElementById("bookTitle");
const author = document.getElementById("author");
const addBookButton = document.getElementById("addBookButton");

const lendForm = document.getElementById("lendForm");
const lendBook = document.getElementById("lendBook");
const borrower = document.getElementById("borrower");
const lendBookButton = document.getElementById("lendBookButton");

// Error Elements
const bookTitleError = document.getElementById("bookTitleError");
const authorError = document.getElementById("authorError");
const lendBookError = document.getElementById("lendBookError");
const borrowerError = document.getElementById("borrowerError");

// Records Table
const recordTable = document
	.getElementById("recordTable")
	.querySelector("tbody");

// Data
let books = [];

// Validation Functions
function validateBookForm() {
	const isBookTitleValid = bookTitle.value.trim() !== "";
	const isAuthorValid = author.value.trim() !== "";

	bookTitleError.style.display = isBookTitleValid ? "none" : "block";
	authorError.style.display = isAuthorValid ? "none" : "block";

	addBookButton.disabled = !(isBookTitleValid && isAuthorValid);
}

function validateLendForm() {
	const isBookSelected = lendBook.value !== "";
	const isBorrowerValid = borrower.value.trim() !== "";

	lendBookError.style.display = isBookSelected ? "none" : "block";
	borrowerError.style.display = isBorrowerValid ? "none" : "block";

	lendBookButton.disabled = !(isBookSelected && isBorrowerValid);
}

// Add Book
function addBook() {
	const newBook = {
		title: bookTitle.value,
		author: author.value,
		status: "Available",
		borrower: null,
	};

	books.push(newBook);
	updateTable();
	updateLendOptions();
}

// Lend Book
function lendBookToBorrower() {
	const selectedBook = books.find((book) => book.title === lendBook.value);
	if (selectedBook) {
		selectedBook.status = "Lent";
		selectedBook.borrower = borrower.value;

		updateTable();
		updateLendOptions();
	}
}

// Update Table
function updateTable() {
	recordTable.innerHTML = "";

	books.forEach((book) => {
		const row = document.createElement("tr");
		row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>
            <td>${book.borrower || "N/A"}</td>
            <td>
                ${
									book.status === "Lent"
										? `<button onclick="returnBook('${book.title}')">Return</button>`
										: ""
								}
            </td>
        `;
		recordTable.appendChild(row);
	});
}

// Update Lend Options
function updateLendOptions() {
	lendBook.innerHTML = '<option value="">Select a book</option>';
	books
		.filter((book) => book.status === "Available")
		.forEach((book) => {
			const option = document.createElement("option");
			option.value = book.title;
			option.textContent = book.title;
			lendBook.appendChild(option);
		});
}

// Return Book
function returnBook(title) {
	const book = books.find((b) => b.title === title);
	if (book) {
		book.status = "Available";
		book.borrower = null;
		updateTable();
		updateLendOptions();
	}
}

// Event Listeners
bookForm.addEventListener("input", validateBookForm);
bookForm.addEventListener("submit", (event) => {
	event.preventDefault();
	addBook();
	bookForm.reset();
	validateBookForm();
});

lendForm.addEventListener("input", validateLendForm);
lendForm.addEventListener("submit", (event) => {
	event.preventDefault();
	lendBookToBorrower();
	lendForm.reset();
	validateLendForm();
});
