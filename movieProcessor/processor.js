function Movie(title, genre, rating, reviewEmail) {
    this.title = title;
    this.genre = genre;
    this.rating = Number(rating);
    this.reviewEmail = reviewEmail;
    this.id = Symbol(name);

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

for (let data of movie_Data) {

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

const emailPattern = "@,.";

movies.forEach(movie => {
    const email = movie.getReviewEmail();
    const valid = emailPattern.test(email);
    console.log(email + " -> " + valid);
});

console.log("Movie IDs:");

movies.forEach(movie => {
    console.log(movie.title, movie.getID());
});

const favoriteMovie = movies[1];

console.log(
    "My favorite movie is " +
    favoriteMovie.title +
    " with a rating of " +
    favoriteMovie.rating +
    "."
);
