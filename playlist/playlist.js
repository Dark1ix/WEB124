const heading = document.getElementById("heading");
const paragraph = document.querySelector("p");

console.log(heading);
console.log(paragraph);

const update = document.getElementById("update");

update.addEventListener("click", function() {
    heading.textContent = "My Updated Playlist";
    paragraph.textContent = "Playlist has been updated!";
    console.log("the button was clicked.");
});

const buttonContainer = document.getElementById("buttonContainer");

update.addEventListener("click", function () {
    console.log("Button click event fired.");
});

buttonContainer.addEventListener("click", function () {
    console.log("Parent div click event fired.");
});

const playlist = document.getElementById("playlist");

playlist.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log("Song chosen:",event.target.textContent);
    }
});

const link = document.getElementById("jccc");

link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("The default action was prevented.");
});

/*
What is the difference between getElementByID() and querySelector()?
getElement only chooses an element with the exact ID attribute. 
querySelector selects the first element matching any CSS notation. 

What is event bubbling?
An event where triggered events on a DOM are started by a clicked element and then travels to the parent elements

What is event delegation?
It is the action of attaching an event listener to a parent element to manage current or future child element events.
This allows for clean optimization.

Why would someone want to use preventDefault()?
You would want to use preventDefault to stop a refresh from happening when pressing a button or 
preventing someone to switch to a different link.

*/
