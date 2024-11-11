// Get references to the input, button, slider, and body
const inputField = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const slider = document.getElementById("slider");
let displayDiv; // Declare displayDiv outside of functions to access it globally

// Add an event listener to the button to display the text
submitBtn.addEventListener("click", function () {
  // Get the value of the input field
  const userInput = inputField.value;
  
  // Create a new element to display the input
  displayDiv = document.createElement("div");
  displayDiv.textContent = userInput;
  displayDiv.classList.add("output"); // Add a class to style it

  // Clear any previous output
  const existingOutput = document.querySelector(".output");
  if (existingOutput) {
    existingOutput.remove();
  }

  // Append the new element to the body
  document.body.appendChild(displayDiv);
});

// Add an event listener to the slider to change text and background color
slider.addEventListener("input", function () {
  if (displayDiv) {
    // Get the slider value (range from 1 to 1000)
    const sliderValue = slider.value;

    // Use more subtle RGB changes for smoother transitions
    const redValue = Math.floor((sliderValue / 1000) * 120);  // Subtle red component
    const greenValue = Math.floor((sliderValue / 1000) * 120); // Subtle green component
    const blueValue = Math.floor((sliderValue / 1000) * 120);  // Subtle blue component

    // Dynamically set text color based on slider value
    displayDiv.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Dynamically set background color based on slider value
    document.body.style.backgroundColor = `rgb(${120 - redValue}, ${120 - greenValue}, ${120 - blueValue})`;
  }
});










// Get references to the input, button, slider, and body
const inputField = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const slider = document.getElementById("slider");
let displayDiv; // Declare displayDiv outside of functions to access it globally

// Add an event listener to the button to display the text
submitBtn.addEventListener("click", function () {
  // Get the value of the input field
  const userInput = inputField.value;
  
  // Create a new element to display the input
  displayDiv = document.createElement("div");
  displayDiv.textContent = userInput;
  displayDiv.classList.add("output"); // Add a class to style it

  // Clear any previous output
  const existingOutput = document.querySelector(".output");
  if (existingOutput) {
    existingOutput.remove();
  }

  // Append the new element to the body
  document.body.appendChild(displayDiv);
});

// Add an event listener to the slider to change text and background color
slider.addEventListener("input", function () {
  if (displayDiv) {
    // Get the slider value (range from 1 to 1000)
    const sliderValue = slider.value;

    // Map the slider value to a hue (0 to 360 for a full spectrum of colors)
    const hue = (sliderValue / 1000) * 360;

    // Set the text color using HSL (with full saturation and lightness at 50%)
    displayDiv.style.color = `hsl(${hue}, 100%, 50%)`;

    // Set the background color using HSL (inverted hue for contrast)
    document.body.style.backgroundColor = `hsl(${(hue + 180) % 360}, 100%, 95%)`; // Light background with 95% lightness
  }
});
