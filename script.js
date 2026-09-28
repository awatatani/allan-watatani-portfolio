// JS can access HTML elements through DOM (Document Object Model)
// getElementById searches document for id="theme-toggle" 
const button = document.getElementById("theme-toggle");

// localStorage is a small key-value storage area provided by the browser for a website
// it survives page refreshes and browser restarts until it's cleared
const savedTheme = localStorage.getItem("theme");

if (savedTheme == "dark") {
    document.body.classList.add("dark-mode");
}

//When button recieves clikc, run action
//Called event driven programming
button.addEventListener("click", function () {
    //Initially, html has <body>. On click, JS adds the class <body class="dark-mode">
    //Clicking again removes the class.
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});