// API KEY 1 "http://www.omdbapi.com/?i=tt3896198&apikey=31ebf24f"

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

const userListEl = document.querySelector(".user-list");

async function main() {
  const users = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=31ebf24f"
  );
  const usersData = await users.json();
  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

function showUserPosts(id) {
  localStorage.setItem("id", id);
  window.location.href = `${window.location.origin}/user.html`;
}

function userHTML(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
              <h3>${user.name}</h4>
              <p><b>Email:</b> ${user.email}</p>
              <p><b>Phone:</b> ${user.phone}</p>
              <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
               ${user.website}
               </a></p>
          </div>
      </div>`;
}
