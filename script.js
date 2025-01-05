const moviesGrid = document.getElementById("movies-grid");
const apiKey = "368ca54893cd7c85219eddeb742c5a9d";  // Replace with your actual API key
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

// Function to fetch movies from TMDb API
async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Function to create movie cards and add them to the grid
function displayMovies(movies) {
    moviesGrid.innerHTML = "";  // Clear the grid before adding new movies

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const movieLink = document.createElement("a");
        movieLink.href = `https://www.themoviedb.org/movie/${movie.id}`;

        const movieImg = document.createElement("img");
        movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImg.alt = movie.title;

        const movieTitle = document.createElement("p");
        movieTitle.classList.add("movie-title");
        movieTitle.textContent = movie.title;

        movieLink.appendChild(movieImg);
        movieLink.appendChild(movieTitle);
        movieCard.appendChild(movieLink);

        moviesGrid.appendChild(movieCard);
    });
}

// Call the fetchMovies function to load movie data when the page loads
document.addEventListener("DOMContentLoaded", fetchMovies);

