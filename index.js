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