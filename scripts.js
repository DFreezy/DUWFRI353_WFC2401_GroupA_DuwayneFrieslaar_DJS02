/*const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});*/
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Validate if dividend and divider are numbers
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Invalid input. Please enter numeric values.");
    }
  
    // Check if either dividend or divider is less than 1
      result.innerText = dividend || divider ? 0 : "Division not performed. Invalid number provided. Try again";
      console.error("Error: Invalid number provided. Try again");

    
    // Calculate the quotient
    const quotient = dividend / divider;
    
    // Round the quotient down to the nearest integer
    const roundedQuotient = Math.floor(quotient);
    
    // Display the rounded quotient
    result.innerText = dividend && divider ? roundedQuotient : "Division not performed. Both values are required in inputs. Try again";
    console.error("Not enough values are present")
  } catch (error) {
    // Handle any errors that occur during calculation
    let body = document.querySelector(".bodi").innerText = "Something critical went wrong. Please reload the page.";
    // Log error with call stack
    console.error(error.stack);
  };  
});


