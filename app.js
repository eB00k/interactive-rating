let selectedRating = 0;

function selectRating(rating) {
  // Removes 'selected' class from all rating elements
  const ratingElements = document.querySelectorAll(".rating:not(.icon)");

  ratingElements.forEach((element) => {
    element.classList.remove("selected");
  });

  // Add 'selected' class to the clicked rating element
  const selectedElement = document.querySelector(`.num-${rating}`);
  selectedElement.classList.add("selected");

  selectedRating = rating;
}

function submit() {
  // if user did not selected the rating
  if (!selectedRating) {
    window.alert("Please select a rating");
    return;
  }

  const selectedResult = document.querySelector(".selected-result");
  selectedResult.textContent = `You have selected ${selectedRating} out of 5`;

  const mainBox = document.querySelector(".main-box");
  const submittedBox = document.querySelector(".submitted-box");
  mainBox.style.display = "none";
  submittedBox.style.display = "block";
}
