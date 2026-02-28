// Function to change the content of an HTML element
function changeText() {
  // Use the document.getElementById() method to select an element by its ID
  const element = document.getElementById("demo"); 
  element.innerHTML = "The paragraph text has been changed!"; // Change the text content
}

// Select a button element from the HTML document
const button = document.querySelector("button");

// Add an event listener to the button that calls the changeText function when clicked
button.addEventListener("click", changeText);

// Log a message to the browser's console
console.log("script.js file loaded successfully!");
