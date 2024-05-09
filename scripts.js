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
  
  // Check if either dividend or divider is less than 1
  if (dividend < 1 || divider < 1) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
  } else {
    // Calculate the quotient
    const quotient = dividend / divider;
    
    // Round the quotient down to the nearest integer
    const roundedQuotient = Math.floor(quotient);
    
    // Display the rounded quotient
    result.innerText = dividend && divider ? roundedQuotient : 
      "Division not performed. Both values are required in inputs. Try again.";
  }
});

