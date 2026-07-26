const movie_data = [
    'Home Alone,Family,8,JonDoe@gmail.com',
    'The Batman,Action,7.8,TimmyAllen@yahoo.com',
    'Despicable Me,Action,7.6,JohnnyDavis@gmail.com',
    'It,Horror,7.3,CharlieParker@gmail.com',
    'Project Hail Mary,SCI-FI,8.2'
];

const movies = [];

function Movie(title, genre, rating, reviewEmail) {
    this.title = title;
    this.genre = genre;
    this.rating = Number(rating);
    this.reviewEmail = reviewEmail;
    this.id = Symbol(title);

    this.getSummary = function() {
        return `${this.title} is a ${this.genre} movie with a score rating of ${this.rating}`;

    };

    this.isHighlyRated = function() {
        return this.rating >= 8;
    };

    this.getReviewEmail = function() {
        return this?.reviewEmail ?? "none";
    };
    
    this.getID = function() {
        return this.id;
    };
}

for (let data of movie_data) {

    try {

        const parts = data.split(",");

        if (parts.length !== 4) {
            throw new Error("Incorrect movie format.");
        }

        const movie = new Movie(
            parts[0],
            parts[1],
            parts[2],
            parts[3]
        );

        movies.push(movie);

    } catch (error) {
        console.log("Error processing movie:", data);
        console.log(error.message);
    }

}

console.log("Movie Summaries:");

movies.forEach(movie => {
    console.log(movie.getSummary());
});

const highlyRatedMovies = movies.filter(movie => movie.isHighlyRated());

console.log("Highly Rated Movies");

highlyRatedMovies.forEach(movie => {
    console.log(movie.title);

});

console.log("Email Validation:")

const emailPattern = /@.*\./;

movies.forEach(movie => {
    const email = movie.getReviewEmail();
    const valid = emailPattern.test(email);
    console.log(email + " -> " + valid);
});

console.log("Movie IDs:");

movies.forEach(movie => {
    console.log(movie.title, movie.getID());
});

const favoriteMovie = movies[2];

console.log(
    "My favorite movie is " + favoriteMovie.title + " with a rating of " + favoriteMovie.rating + "."
);
/*
What are array methods, and how did you use them in this assignment?
Array Methods are methods that allow you to modify a list. Filter was used to remove any entries that did not meet the .isHighlyRated function.

What does your regular expression check for?
It checks for emails.

How does try/catch help prevent errors in your program?
It helps prevents errors by pushing the error list out of the function and prints it. This way I am able to see what the problem is without my code stopping.

THe favorite movie message prints out my favorite movie and rating for it. 
The way it determsines that is by pulling a specific date from my movie list and plugging into a favorite movie variable
*/
