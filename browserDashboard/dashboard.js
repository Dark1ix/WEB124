console.log("Current URL:", location.href);
console.log("Browser Language:", navigator.language);
console.log("Online Status:", navigator.onLine);

console.log("Screen Width:", screen.width);
console.log("Screen Height:", screen.height);

console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

const form = document.forms["userForm"];
const nameField = form.elements["name"];
const websiteField = form.elements["website"];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = nameField.value;
    let website = websiteField.value;

    document.getElementById("display").innerHTML =
        "Name: " + userName + "<br>" +
        "Favorite Website: " + website;

    try {
        let websiteURL = new URL(website);
        console.log("Hostname:", websiteURL.hostname);
        console.log("Protocol:", websiteURL.protocol);
        console.log("Pathname:", websiteURL.pathname);
    } 
    catch(error) {
        console.log("Please enter a valid URL with https://");
    }

    localStorage.setItem("savedName", userName);
    let storedName = localStorage.getItem("savedName");
    console.log("Local Storage Name:", storedName);

    sessionStorage.setItem("savedWebsite", website);

    let storedWebsite = sessionStorage.getItem("savedWebsite");

    console.log("Session Storage Website:", storedWebsite);
});

nameField.addEventListener("focus", function() {
    console.log("Name field was selected.");
});

nameField.addEventListener("blur", function() {
    console.log("Name field was left.");
});

const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");


backButton.addEventListener("click", function() {
    console.log("Back button clicked.");
    history.back();
});


forwardButton.addEventListener("click", function() {
    console.log("Forward button clicked.");
    history.forward();
});

/*
What is the difference between localStorage and sessionStorage?
localStorage is data that is permanently stored and survives browser erasure.
sessionStorage is temporary data that is deleted once the tab is closed.

What information can the Navigator object provide?
The Navigator object can provide browser identity, hardware, preferences or system state.

What happens when an input field receives focus?
It provides an update to the browser, modifying the color of the element that received focus.
It also logs this information in the console.

Why might a website use a URL object?
Using a URL object allows for easier manipulation of web addresses without creating extra bloat.
This way, you can easily validate a link with the built in validation.
 */
