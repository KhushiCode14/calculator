// selecting element
// DOM ,Array,forEach,from,addEventListener,eval
const input = document.getElementById("display"); // input
const buttons = document.getElementsByClassName("button"); //button
let expression = "";
// console.log(buttons, input);
// Array.from(buttons).forEach((button) => { ... }); --> convert HTMLCollection to an Array
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    console.log(value);
    if (value === "=") {
      try {
        expression = eval(expression); // Evaluate the expression
        console.log(expression);
        input.value = expression;
        console.log(expression);
      } catch {
        input.value = "Error"; // Handle any errors
      }
    } else if (value === "C") {
      expression = ""; // Clear the expression
      input.value = expression;
    } else {
      expression += value; // Append the value to the expression
      input.value = expression; // Update the display
    }
  });
});
console.log(expression);
// alternative of eval is json.parse()
