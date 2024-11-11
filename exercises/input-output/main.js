const inputField = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const slider = document.getElementById("slider");
let displayDiv; 

submitBtn.addEventListener("click", function () {
  const userInput = inputField.value;
  
  displayDiv = document.createElement("div");
  displayDiv.textContent = userInput;
  displayDiv.classList.add("output"); 


  const existingOutput = document.querySelector(".output");
  if (existingOutput) {
    existingOutput.remove();
  }


  document.body.appendChild(displayDiv);
});

slider.addEventListener("input", function () {
  if (displayDiv) {

    const sliderValue = slider.value;


    displayDiv.style.color = `rgb(${sliderValue % 256}, ${(sliderValue * 2) % 256}, ${(sliderValue * 3) % 256})`;

    
    document.body.style.backgroundColor = `rgb(${(sliderValue * 3) % 256}, ${(sliderValue * 2) % 256}, ${sliderValue % 256})`;
  }
});
