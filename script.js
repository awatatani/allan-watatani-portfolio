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

async function loadPage(page) {
    try {
        // content.innerHTML = "<p>Loading...</p>";
        const response = await fetch(`content/${page}.html`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();

        content.innerHTML = html;
    } catch (error) {
        console.error(`Failed to load page "${page}":`, error);

        content.innerHTML = `
            <section>
                <h2>Error</h2>
                <p>Unable to load this section.</p>
            </section>
        `;
    }
}

//querySelectorAll uses a css selector to serach the DOM
//This returns almost like a collection of all the buttons into navButtons
const navButtons = document.querySelectorAll(".sidebar nav button")

//iterates through navButton (each button under nav) and run the function once
navButtons.forEach(function (button) {
    //Add a listener to this button. whenever this button is clicked, run this function
    button.addEventListener("click", function () {
        // this reads <button data-page="about">
        const page = button.dataset.page;

        // Remove active from every nav button
        // This utilizes the element's class attribute in the DOM
        // It becomes smth like:
        // <button data-page="about" class="active">projects/</button>
        navButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Apply "active" to current button
        button.classList.add("active");

        loadPage(page);
    });
});

// Start at about page
loadPage("about");

// Set "about" button as active
const defaultButton = document.querySelector('.sidebar nav button[data-page="about"]');
defaultButton.classList.add("active")