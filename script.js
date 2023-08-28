
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggle-button");
  const moreInfo = document.getElementById("more-info");

  toggleButton.addEventListener("click", function() {
    moreInfo.classList.toggle("hidden-content");
  });
});