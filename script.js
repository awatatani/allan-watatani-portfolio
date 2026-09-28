// JS can access HTML elements through DOM (Document Object Model)
// getElementById searches document for id="theme-toggle" 
const button = document.getElementById("theme-toggle");

//When button recieves clikc, run action
//Called event driven programming
button.addEventListener("click", function () {
    //Initially, html has <body>. On click, JS adds the class <body class="dark-mode">
    //Clicking again removes the class.
    document.body.classList.toggle("dark-mode")
});