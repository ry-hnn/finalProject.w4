// Select the navigation links
const homeLink = document.querySelector(".home-link a");
const findMovieLink = document.querySelector(".find-movie a");
const contactButton = document.querySelector(".contact-button a");

// Add event listeners to handle routing
homeLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  window.location.href = "/index.html"; // Redirect to the home page
});

findMovieLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  window.location.href = "/find-movie.html"; // Redirect to the find movie page
});

contactButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  window.location.href = "/contact.html"; // Redirect to the contact page
});

const searchButton = document.querySelector(".search-button");
const loadingSpinner = document.querySelector(".fa-spinner");
const searchIcon = document.querySelector(".search-icon"); // Select the magnifying glass icon
const searchInput = document.querySelector(".input-search"); // Select the search input
const movieListEl = document.querySelector(".user-list"); // Select the container to display movie results

searchButton.addEventListener("click", async () => {
  // Show the spinner
  loadingSpinner.classList.add("show-spinner");
  // Hide the magnifying glass icon
  searchIcon.classList.add("hide-icon");

  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    try {
      const movies = await fetchMovies(searchTerm);
      displayMovies(movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  // Simulate a loading process (e.g., a search operation)
  setTimeout(() => {
    // Remove the class to hide the spinner after 2 seconds (or after the search is complete)
    loadingSpinner.classList.remove("show-spinner");
    // Show the magnifying glass icon again
    searchIcon.classList.remove("hide-icon");
  }, 2000); // Adjust the time as needed
});

async function fetchMovies(searchTerm) {
  const apiKey = "31ebf24f"; // Your OMDB API key
  const response = await fetch(
    `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
  );
  const data = await response.json();
  return data.Search || [];
}

function displayMovies(movies) {
  movieListEl.innerHTML = movies
    .map(
      (movie) => `
    <div class="user-card">
      <div class="user-card__container">
        <h3>${movie.Title}</h3>
        <p><b>Year:</b> ${movie.Year}</p>
        <p><b>Type:</b> ${movie.Type}</p>
        <img src="${movie.Poster}" alt="${movie.Title} Poster">
      </div>
    </div>
  `
    )
    .join("");
}
