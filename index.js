const searchButton = document.querySelector(".search-button");
const loadingSpinner = document.querySelector(".fa-spinner");
const searchIcon = document.querySelector(".search-icon"); // Select the magnifying glass icon

searchButton.addEventListener("click", () => {
  // Show the spinner
  loadingSpinner.classList.add("show-spinner");
  // Hide the magnifying glass icon
  searchIcon.classList.add("hide-icon");

  // Simulate a loading process (e.g., a search operation)
  setTimeout(() => {
    // Remove the class to hide the spinner after 2 seconds (or after the search is complete)
    loadingSpinner.classList.remove("show-spinner");
    // Show the magnifying glass icon again
    searchIcon.classList.remove("hide-icon");
  }, 2000); // Adjust the time as needed
});
