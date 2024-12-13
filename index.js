function search(event) {
  event.preventDefault();
  const loading = document.querySelector("search-btn--loading");
  const success = document.querySelector(".modal__overlay--success");

  // Show loading spinner
  loading.classList.add("visible");

  // Simulate a search action or API call
  setTimeout(() => {
    loading.classList.remove("visible");
    success.classList.add("visible");
  }, 2000); // 2-second delay for demonstration
}
