const form = document.querySelector("[data-form]"); // Select the form element
const result = document.querySelector("[data-result]"); // Select the result element

form.addEventListener("submit", (event) => { // Add event listener for form submission
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Extract the form data
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Scenario: Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again"; // Display error message
    return; // Exit functions
  }

  // Convert inputs to numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  // Scenario: Providing anything that is not a number should crash the program
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    console.error("Error: Non-numeric input provided. Please enter valid numbers."); // Log error message
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>"; // Display critical error message
    return; // Exit function
  }

  // Scenario: An invalid division should log an error in the console
  if (dividerNum === 0) {
    console.error("Error: Division by zero. Cannot divide by zero."); // Log error message
    result.innerText = "Division not performed. Invalid number provided. Try again"; // Display error message
    return; // Exit function
  }

  // Perform the division and round down to the nearest integer
  const quotient = Math.floor(dividendNum / dividerNum);
  result.innerText = quotient; // Display the result
});
