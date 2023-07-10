document.addEventListener("DOMContentLoaded", function() {
  // Generate and display initial advice
  generateAdvice();
});

// Fetch advice from the API and update the <p> element
function generateAdvice() {
  // Make a GET request to the API
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      const adviceElement = document.getElementById("advice");
      const counterElement = document.getElementById("counter");
      // Increase the counter value by 1 with each click
      let counterValue = parseInt(counterElement.dataset.value) + 1 || 1;
      counterElement.dataset.value = counterValue;
      // Set the generated advice as the text content of the <p> element
      adviceElement.textContent = data.slip.advice;
      // Add "#" symbol before the counter value
      counterElement.textContent = "#" + counterValue;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

// Add a click event listener to the button
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateAdvice);
