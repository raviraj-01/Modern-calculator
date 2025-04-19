let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button"); //to select all buttons
let string = ""; //to store the input value
let arr = Array.from(buttons); //convert the buttons into an array

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "toggle-theme") {
      return;
    }

    if (e.target.innerHTML == "=") {
      // If the button is equal to '='
      try {
        if (string.trim() === "") {
          // If the input is empty, set it to 0
          string = "0";
        } else {
          // Replace any number with leading zeros with a decimal equivalent
          string = string.replace(/\b0+(\d+)/g, (match, p1) =>
            String(Number(p1))
          );

          // Handle '%' operator explicitly
          if (string.includes("%")) {
            string = string.replace(/(\d+)%/g, (match, p1) => {
              return String(Number(p1) / 100); // Convert percentage to decimal
            });
          }

          
          string = eval(string);
        }
        input.value = string;
      } catch (err) {
        input.value = "Invalid Input";
      }
    } else if (e.target.innerHTML == "AC") {
      // If the button is equal to 'AC'
      string = ""; // Reset the string
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      // If the button is equal to 'DEL'
      string = string.slice(0, -1); // Remove the last character
      input.value = string;
    } else {
      string += e.target.innerHTML; // Add the button value to the string
      input.value = string;
    }
  });
});

// Dark/Light Mode Toggle
const toggle = document.getElementById("toggle-theme"); 
const calculator = document.querySelector(".calculator"); 

toggle.addEventListener("click", () => {
  // Toggle the dark mode class on body and calculator
  document.body.classList.toggle("dark-mode");
  calculator.classList.toggle("dark-mode");

  // Toggle dark mode class on all buttons
  buttons.forEach((button) => {
    button.classList.toggle("dark-mode");
  });

  // Change the button text/icon based on the mode
  if (document.body.classList.contains("dark-mode")) {
    toggle.innerHTML = "☀️"; 
  } else {
    toggle.innerHTML = "🌙";
  }
});
