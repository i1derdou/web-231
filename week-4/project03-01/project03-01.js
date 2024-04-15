/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: David Clemens
      Date:   2024-04-13

      Filename: project03-01.js
*/


// Variable for menu
let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++) {

  menuItems[i].addEventListener("click", calcTotal);

}


// Function for calcTotal
function calcTotal(){

let orderTotal = 0;

  for (i = 0; i < 5; i++) {

    if(menuItems[i].checked) {
      orderTotal += (Number(menuItems[i].value) * 1);
    }

    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);

  }

}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

// Load the calcTotal function on initial page load to initialize default values that might have changed
window.onload = calcTotal;