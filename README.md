# Personalized Webpage

A simple webpage that asks for your name and age, then shows you a personalized page. The details are saved in the browser 
**Live demo:** https://tamilakaranja.github.io/1.4-javascript/

## Features

- **Form:** enter your name and age
- **Saved data:** your details are stored in local storage and loaded again when you refresh the page
- **Personalized greeting:** a welcome message with your name, built with a template literal
- **Age in months:** a function that converts your age in years to months
- **Age check:** an `if...else` statement shows a different message for under 18 and 18+
- **Motivational quote:** a `for` loop shows the quote 5 times
- **Clear my data:** a button that deletes your saved details and resets the page

## Technologies

- HTML
- CSS
- JavaScript
- Git and GitHub Pages

## Project Structure


1.4-javascript/
├── index.html    # page structure and form
├── style.css     # styling
├── index.js      # logic (localStorage, functions, loop)
└── README.md     # project documentation


## How to Run

1. Download or clone this repository:

   git clone https://github.com/tamilakaranja/1.4-javascript.git

2. Open the folder.
3. Open `index.html` in your browser.


## How It Works

1. You type your name and age and press **Save**.
2. JavaScript saves them with `localStorage.setItem()`.
3. The page shows your greeting, your age in months, the age message, and the quotes.
4. When you reopen the page, `localStorage.getItem()` loads your saved details automatically.
5. Pressing **Clear my data** removes them with `localStorage.removeItem()`.

## What I Learned

- Saving and reading data with `localStorage`
- Writing and calling functions
- Using `if...else` to make decisions
- Using loops to repeat a task
- Using template literals to build text
- Deploying a project with GitHub Pages

## Author

Built by Tamila Karanja, Zindua School