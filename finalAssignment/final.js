const heroes = [
    "All Might",
    "Deku",
    "Bakugo",
    "Shoto Todoroki",
    "Hawks"
];

const anime = {
    title: "My Hero Academia",
    creator: "Kohei Horikoshi",
    episodes: 159
};

document.getElementById("welcome").textContent =
`${anime.title} was created by ${anime.creator}`;

const button = document.getElementById("factBtn");

button.addEventListener("click", function(){
    let randomHero =
    heroes[Math.floor(Math.random()*heroes.length)];

    document.getElementById("heroInfo").textContent =
    `Random Hero: ${randomHero}`;
});

const quirkInput = document.querySelector("#favoriteQuirk");

quirkInput.addEventListener("focus", function(){
    document.getElementById("quirkText").textContent =
    "Nice! Tell us your favorite Quirk.";
});

quirkInput.addEventListener("blur", function(){
    document.getElementById("quirkText").textContent =
    "Thanks for sharing!";
});

const form = document.getElementById("heroForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let name =
    document.getElementById("userName").value;

    let hero =
    document.getElementById("favoriteHero").value;

    document.getElementById("output").textContent =
    `${name}'s favorite hero is ${hero}`;

    localStorage.setItem("name", name);
    localStorage.setItem("hero", hero);
});


let savedName = localStorage.getItem("name");
let savedHero = localStorage.getItem("hero");

if(savedName && savedHero){
    document.getElementById("output").textContent =
    `${savedName}'s favorite hero is ${savedHero}`;
}

document.getElementById("browser").textContent =
`Browser: ${navigator.userAgent}`;

document.getElementById("screenSize").textContent =
`Screen Size: ${window.innerWidth}  x  ${window.innerHeight}`;

document.getElementById("characterList")
.addEventListener("click", function(event){

    if(event.target.tagName === "LI"){

        alert("You selected " +
        event.target.textContent);
    }
});


/*
*/
