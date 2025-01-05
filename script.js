// Your TMDb API key
const apiKey = '368ca54893cd7c85219eddeb742c5a9d';

// URL for fetching popular movies
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

// Function to fetch and display movies
function fetchMovies() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = ''; // Clear the container before adding new content

      movies.forEach(movie => {
        // Create a movie card
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Create the image element for the movie poster
        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title;

        // Create the title element
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        // Create the overview (description) element
        const movieOverview = document.createElement('p');
        movieOverview.textContent = movie.overview.length > 100 ? movie.overview.substring(0, 100) + '...' : movie.overview;

        // Create a "Watch Now" button
        const watchButton = document.createElement('button');
        watchButton.classList.add('watch-button');
        watchButton.textContent = 'Watch Now';

        // Append the elements to the movie card
        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieOverview);
        movieCard.appendChild(watchButton);

        // Append the movie card to the container
        movieContainer.appendChild(movieCard);
      });
    })
    .catch(error => console.error('Error fetching movie data:', error));
}

// Call the function to fetch movies when the page loads
window.onload = fetchMovies;

// Optional: Add event listener for "Watch Now" buttons
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('watch-button')) {
    alert('Feature coming soon!');
  }
});
