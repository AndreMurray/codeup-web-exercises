// In this project, we will be using a Firebase database to store our movie data.
// Configuring Firebase is more involved than what is covered in this lesson,
// so we have provided a class that will handle the configuration for you.
let db = new FirebaseDatabase({
    team: "teamN", // Replace this with your team name
});

// You will use the "db" object to make requests to the database very similarly to how you
// would use the "fetch" function to make requests to an API. The only difference is that
// you will be adding "db" in front of the "fetch" function.
// Example: db.fetch(url, options);

// Here is a function that uses the "db.fetch()" method to make a
// GET request to the "/movies" endpoint:
const getMovies = async () => {
    const url = "/movies";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    let response = await db.fetch(url, options);
    return await response.json();
};

// And here is a function that will add a new movie:
// const addMovie = async (movie) => {
//     // "movie" is an object that contains the movie data
//     // Example: {title: "The Matrix", year: 1999, rating: 5}
//     // You do NOT need to add an id to the movie object.
//     // After the movie is added to the database, the database will
//     // automatically add an id to the movie object and return it.
//     const url = '/movies';
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movie),
//     };
//     let response = await db.fetch(url, options);
//     return await response.json();
// }

// Here is where you will create your own functions to further interact with the database.
// HAPPY CODING!!!

const updateMovie = async (movies) => {
    try {
        const url = `/movies/${movies.id}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movies),
        };
        let response = await db.fetch(url, options);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

const addMovie = async (movie) => {
    try {
        const url = "/movies";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        };
        let response = await db.fetch(url, options);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

const deleteMovie = async (id) => {
    try {
        // console.log(movie);
        const url = `/movies/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };
        let response = await db.fetch(url, options);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};
