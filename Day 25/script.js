const apiKey = "YOUR_API_KEY"; // Replace with your OMDB API key

// Task 3: Fetch movie data
function fetchMovies(query) {
  const apiUrl = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Movie Data:", data);
      displayMovies(data.Search);
    })
    .catch((error) => console.error("Error fetching movie data:", error));
}

// Task 4: Display movie data
function displayMovies(movies) {
  const movieResults = document.getElementById("movieResults");
  movieResults.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <button onclick="fetchMovieDetails('${movie.imdbID}')">More Info</button>
        `;

    movieResults.appendChild(movieCard);
  });
}

// Task 5: Add search functionality
document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;
  if (query) {
    fetchMovies(query);
  }
});

// Task 7: Fetch and display movie details
function fetchMovieDetails(imdbID) {
  const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Movie Details:", data);
      displayMovieDetails(data);
    })
    .catch((error) => console.error("Error fetching movie details:", error));
}

// Task 8: Display movie details in a modal
function displayMovieDetails(movie) {
  const modal = document.getElementById("movieModal");
  document.getElementById("movieTitle").textContent = movie.Title;
  document.getElementById("moviePoster").src = movie.Poster;
  document.getElementById("moviePlot").textContent = movie.Plot;
  document.getElementById("movieDirector").textContent = movie.Director;
  document.getElementById("movieActors").textContent = movie.Actors;

  modal.style.display = "block";
}

// Close the modal
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("movieModal").style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target == document.getElementById("movieModal")) {
    document.getElementById("movieModal").style.display = "none";
  }
});

// Task 9 & 10: Add CSS styles and animations
// The modal content is already styled and animated using the fadeIn keyframes.
