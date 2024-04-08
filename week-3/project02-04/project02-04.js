/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: David Clemens
      Date:   2024-04-04

      Filename: project02-04.js
 */


// Declare the constants and their initial values
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE  = 9.95;
const SALMON_PRICE  = 18.95;
const SALAD_PRICE   = 7.95;
const SALES_TAX     = 0.07;

// Event listeners for each checkbox that runs the calcTotal function on check or uncheck
document.getElementById("chicken").onchange = calcTotal;
document.getElementById("halibut").onchange = calcTotal;
document.getElementById("burger").onchange = calcTotal;
document.getElementById("salmon").onchange = calcTotal;
document.getElementById("salad").onchange = calcTotal;

// Function to calculate the cost of items, tax, and total cost of items and tax together
function calcTotal() {

  // Set initial values for cost, tax, and totalCost
  let cost      = 0;
  let tax       = 0;
  let totalCost = 0;

  // Set the variables when the corresponding checkbox is checked or unchecked
  let buyChicken  = document.getElementById("chicken").checked;
  let buyHalibut  = document.getElementById("halibut").checked;
  let buyBurger   = document.getElementById("burger").checked;
  let buySalmon   = document.getElementById("salmon").checked;
  let buySalad    = document.getElementById("salad").checked;

  // Add the const of each menu item to the overall cost variable if checked. If not, revert back to zero for the item
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger  ? BURGER_PRICE  : 0;
  cost += buySalmon  ? SALMON_PRICE  : 0;
  cost += buySalad   ? SALAD_PRICE   : 0;

  // Tax variable equals the cost variable multiplied by the const SALES_TAX variable
  tax = cost * SALES_TAX;

  // The totalCost variable equals the cost variable added to the tax variable
  totalCost = cost + tax;


  // Display the total of items selected in the HTML
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Display the food tax  in the HTML
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Display the total bill  in the HTML
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

// Load the calcTotal function on initial page load to initialize default values that might have changed
window.onload = calcTotal;
