// add variables we use const because let means it is changable but const stays constant 
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const results = document.getElementById("results");
const greetingEl = document.getElementById("greeting");
const monthsEl = document.getElementById("months");
const adultEl = document.getElementById("adult-message");
const quotesEl = document.getElementById("quotes");
const clearBtn = document.getElementById("clear-btn");
 
const QUOTE = "The secret of getting ahead is getting started.";

// a function is a small machine. You give it information, it performs a task, and it can give you a result 
// function calc age in months 
function calculateAgeInMonths(age) {
  return age * 12;
}
// adult consent 
function showAdultMessage(age) {
  if (age >= 18) {
    adultEl.textContent = "You can access adult content.";
    adultEl.className = "allowed";
  } else {
    adultEl.textContent = "You are too young for adult content.";
    adultEl.className = "denied";
  }
}

// quotes 
// loops 
function showQuotes() {
  quotesEl.innerHTML = ""; // clears the old quotes
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = quotes;
    quotesEl.appendChild(li);
}
}
 const quotes = "Believe in yourself!";

// shows the quotes and age 
function displayUser(name, age) {
  // 3. Greeting using a template literal
  greetingEl.textContent = `Hello, ${name}!  Welcome back.`;
  monthsEl.textContent = `You are ${age} years old, which is ${calculateAgeInMonths(age)} months.`;
  showAdultMessage(age);
  showQuotes();
  results.classList.remove("hidden");
}
// submit and store 
form.addEventListener("submit", function (event) {
  event.preventDefault(); 
 
  const name = nameInput.value.trim();
  const age = Number(ageInput.value);
 
  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", age);
 
  displayUser(name, age);
});

// clear and save data 
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");
  localStorage.removeItem("userAge");
  results.classList.add("hidden");
  form.reset();
});

// store saved data 
const savedName = localStorage.getItem("userName");
const savedAge = localStorage.getItem("userAge");
 
if (savedName && savedAge) {
  nameInput.value = savedName;
  ageInput.value = savedAge;
  displayUser(savedName, Number(savedAge));
}