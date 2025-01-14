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
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
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

// Get the range sliders and the year range display
const minYearSlider = document.getElementById("min-year");
const maxYearSlider = document.getElementById("max-year");
const yearRangeDisplay = document.getElementById("year-range");

// Function to update the year range display
function updateYearRange() {
  const minYear = minYearSlider.value;
  const maxYear = maxYearSlider.value;
  yearRangeDisplay.textContent = `${minYear} - ${maxYear}`;
}

// Function to enforce the min and max values
function enforceSliderRules() {
  const minYear = parseInt(minYearSlider.value);
  const maxYear = parseInt(maxYearSlider.value);

  // Ensure the min slider doesn't exceed the max slider
  if (minYear > maxYear) {
    minYearSlider.value = maxYear;
  }

  // Ensure the max slider doesn't go below the min slider
  if (maxYear < minYear) {
    maxYearSlider.value = minYear;
  }

  // Update the displayed year range
  updateYearRange();
}

// Event listeners for slider changes
minYearSlider.addEventListener("input", updateYearRange);
maxYearSlider.addEventListener("input", updateYearRange);

// Initial call to set the default range
updateYearRange();
