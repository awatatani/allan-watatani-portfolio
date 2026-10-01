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



//swapping out content based on sidebar button press
const content = document.getElementById("content")

const pages = {
    about: `
        <section>
            <h2>About Me</h2>
            <p>
                I'm a software engineer with a background in computer engineering,
                cybersecurity, and reverse engineering.
            </p>
        </section>
    `,

    experience: `
        <section>
            <h2>Experience</h2>
            <p>
                Experience content goes here.
            </p>
        </section>
    `,

    projects: `
        <section>
            <h2>Projects</h2>
            <p>
                Projects content goes here.
            </p>
        </section>
    `,

    contact: `
        <section>
            <h2>Contact</h2>
            <p>
                Contact content goes here.
            </p>
        </section>
    `
};

//querySelectorAll uses a css selector to serach the DOM
//This returns almost like a collection of all the buttons into navButtons
const navButtons = document.querySelectorAll(".sidebar nav button")
//iterates through navButton (each button under nav) and run the function once
navButtons.forEach(function (button) {
    //Add a listener to this button. whenever this button is clicked, run this function
    button.addEventListener("click", function () {
        // this reads <button data-page="about">
        const page = button.dataset.page;
        content.innerHTML = pages[page];
    });
});